#!/usr/bin/env node
'use strict';
// Markdown -> Canvas pages, with a generated course overview on every page.
//
//   node sync.js --dry-run          build into ./out, no Canvas calls
//   node sync.js                    build + publish changed pages
//   node sync.js --force            republish every page, ignore hashes
//   node sync.js --only module-1.md limit publishing to one file (TOC still uses all)
//
// Local images (![alt](images/x.png)) are uploaded to the course's Files first.
// "Test jezelf" blocks become Canvas New Quizzes; the page links to them.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const juiceModule = require('juice');
const juice = juiceModule.default || juiceModule; // juice >= 12 ships an ESM-style default export
const { createRenderer, slugify } = require('./lib/render');
const { renderToc } = require('./lib/toc');
const { Canvas } = require('./lib/canvas');
const { createImages } = require('./lib/images');
const { parseQuiz, buildPayload } = require('./lib/quiz');
const { syncQuizzes, quizOptions } = require('./lib/quizsync');

const ROOT = __dirname;
const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const FORCE = args.includes('--force');
const ONLY = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;

loadDotEnv(path.join(ROOT, '.env'));
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'course.config.json'), 'utf8'));
const MAP_FILE = path.join(ROOT, 'canvas-map.json');
const map = fs.existsSync(MAP_FILE) ? JSON.parse(fs.readFileSync(MAP_FILE, 'utf8')) : {};
const coursePath = `${config.baseUrl.replace(/\/$/, '')}/courses/${config.courseId}`;

main().catch((err) => { console.error(err.message || err); process.exit(1); });

async function main() {
  const renderer = createRenderer(config);
  const contentDir = path.join(ROOT, config.contentDir || 'content');

  // 1. Parse every page (needed up front: every page's TOC lists all pages).
  const pages = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort().map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const a = renderer.analyze(raw, file);
    return { file, raw, ...a };
  });

  // Author markers ([CONTROLEREN], [NIET GETEST]) must be resolved before a page goes live.
  const markerRe = new RegExp((config.blockingMarkers || ['[CONTROLEREN]', '[NIET GETEST]'])
    .map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
  const markerProblems = [];
  for (const p of pages) {
    p.raw.split('\n').forEach((line, i) => {
      if (!markerRe.test(line)) return;
      const msg = `${p.file}:${i + 1}: ${line.trim().slice(0, 80)}`;
      if (p.fm.published === true) markerProblems.push(msg);
      console.warn(`  ! marker ${msg}${p.fm.published === true ? '' : ' (page unpublished, allowed)'}`);
    });
  }
  await renderer.highlight(pages);
  pages.sort((a, b) =>
    num(a.fm.module) - num(b.fm.module) || num(a.fm.order) - num(b.fm.order) || a.file.localeCompare(b.file));

  // 2. Images: every local image referenced from Markdown or used as a block logo.
  const outDir = path.join(ROOT, 'out');
  const images = createImages({ root: ROOT, contentDir, outDir, map, config, coursePath });
  for (const p of pages) for (const src of p.images) images.collect(src, 'content', p.file);
  for (const [name, b] of Object.entries(config.blocks || {})) if (b.logo) images.collect(b.logo, 'config', `blocks.${name}.logo`);

  // 3. Test jezelf blocks: parse and validate every question before anything is sent to Canvas.
  const quizzes = pages.flatMap((p) => p.quizzes.map((q) => parseQuiz({ ...q, file: p.file })));
  const quizProblems = quizzes.flatMap((q) => q.problems);
  for (const msg of quizProblems) console.warn(`  ! ${msg}`);
  for (const q of quizzes) {
    if (q.experimental.length) console.warn(`  ! ${q.where}: uses ${q.experimental.join(', ')} (experimental): check these questions in Canvas after publishing`);
  }

  // 4. Make sure every page exists in Canvas with the right title (so we know the real URL slugs),
  //    and that every image is uploaded (so we know its file id).
  if (!DRY && images.problems.length && !args.includes('--allow-missing-images')) {
    throw new Error(`Not publishing: ${images.problems.length} image problem(s), see the warnings above. `
      + 'Fix them, or run with --allow-missing-images.');
  }
  if (!DRY && markerProblems.length) {
    throw new Error(`Not publishing: ${markerProblems.length} unresolved marker(s) on published pages, see the warnings above. `
      + 'Resolve them, or set published: false on that page.');
  }
  if (!DRY && quizProblems.length) {
    throw new Error(`Not publishing: ${quizProblems.length} problem(s) in Test jezelf questions, see the warnings above.`);
  }
  const canvas = DRY ? null : new Canvas(config.baseUrl, process.env.CANVAS_TOKEN);
  let uploaded = 0;
  if (!DRY) {
    await ensurePages(canvas, pages);
    uploaded = await images.upload(canvas, saveMap);
  }

  for (const p of pages) {
    const slug = map[p.file]?.url || slugify(p.title); // dry run: predicted slug
    p.href = `${coursePath}/pages/${slug}`;
  }
  const byFile = new Map(pages.map((p) => [p.file, p]));

  // "zie 1.1" in quiz feedback links to the page and section where 1.1 lives.
  const sectionHrefs = new Map();
  for (const p of pages) for (const s of p.sections) {
    const m = s.title.match(/^(\d+(?:\.\d+)+)/);
    if (m && !sectionHrefs.has(m[1])) sectionHrefs.set(m[1], `${p.href}#${s.id}`);
  }
  const sectionHref = (num) => sectionHrefs.get(num);

  // 5. Quizzes: create or update in Canvas (dry run: write the payloads to out/quizzes for inspection).
  const outQuizDir = path.join(outDir, 'quizzes');
  let quizStats = null;
  if (DRY) {
    fs.mkdirSync(outQuizDir, { recursive: true });
    for (const q of quizzes) {
      if (q.problems.length) continue;
      const payload = buildPayload(q, { opts: quizOptions(config), sectionHref });
      fs.writeFileSync(path.join(outQuizDir, slugify(q.key) + '.json'), JSON.stringify(payload, null, 2));
    }
  } else if (quizzes.length) {
    quizStats = await syncQuizzes({
      canvas, config, map, saveMap, quizzes, sectionHref, coursePath,
      pageOf: (file) => byFile.get(file), only: ONLY, force: FORCE, log: (m) => console.log(m),
    });
  }
  const resolveQuiz = (key) => (map._quizzes || {})[key] || null;

  // 6. Render every page with its own TOC.
  const template = fs.readFileSync(path.join(ROOT, config.template || 'template.html'), 'utf8');
  const css = config.inlineCss && config.cssFile ? fs.readFileSync(path.join(ROOT, config.cssFile), 'utf8') : null;
  fs.mkdirSync(outDir, { recursive: true });

  let changed = 0;
  for (const p of pages) {
    const env = {
      file: p.file,
      resolvePage: (f) => byFile.get(path.basename(f))?.href,
      resolveImage: (src, kind) => images.resolve(src, kind, DRY),
      resolveQuiz,
    };
    const body = renderer.renderBody(p, env);
    let html = template
      .replace('{{toc}}', () => renderToc(pages, p, config, renderer.px))
      .replace('{{content}}', () => body)
      .replace('{{title}}', () => p.title);
    if (css) html = juice(html, { extraCss: css, removeStyleTags: true, preserveMediaQueries: false, applyWidthAttributes: false, applyHeightAttributes: false });

    fs.writeFileSync(path.join(outDir, p.file.replace(/\.md$/, '.html')), html);

    const hash = crypto.createHash('sha256').update(html).digest('hex');
    if (DRY || (ONLY && p.file !== ONLY)) continue;
    if (!FORCE && map[p.file]?.hash === hash) continue;

    const wikiPage = { body: html };
    if (typeof p.fm.published === 'boolean') wikiPage.published = p.fm.published;
    await canvas.updatePage(config.courseId, map[p.file].url, wikiPage);
    map[p.file].hash = hash;
    saveMap();
    changed++;
    console.log(`  updated  ${p.file} -> ${map[p.file].url}`);
  }

  const nQuestions = quizzes.reduce((n, q) => n + q.questions.length, 0);
  console.log(DRY
    ? `Dry run: ${pages.length} pages written to ./out (links use predicted slugs, images local paths; `
      + `${images.count()} image(s) found; ${quizzes.length} quiz(zes) with ${nQuestions} questions, payloads in out/quizzes).`
    : `Done: ${changed} page(s) updated, ${pages.length - changed} unchanged; ${uploaded} image(s) uploaded`
      + (quizStats ? `; quizzes: ${quizStats.created} created, ${quizStats.updated} updated, ${quizStats.unchanged} unchanged.` : '.'));
}

async function ensurePages(canvas, pages) {
  const remote = await canvas.listPages(config.courseId);
  const byId = new Map(remote.map((r) => [String(r.page_id), r]));
  const byTitle = new Map(remote.map((r) => [r.title, r]));

  for (const p of pages) {
    const entry = map[p.file];
    // Known page (by id), else adopt an existing page with the same title (first migration), else create.
    let r = entry && byId.get(String(entry.page_id));
    if (!r && byTitle.has(p.title)) {
      r = byTitle.get(p.title);
      console.log(`  adopted  ${p.file} -> existing page "${p.title}"`);
    }
    if (!r) {
      r = await canvas.createPage(config.courseId, {
        title: p.title,
        body: '<p>Wordt gegenereerd…</p>',
        published: p.fm.published === true,
      });
      console.log(`  created  ${p.file} -> ${r.url}`);
    } else if (r.title !== p.title) {
      r = await canvas.updatePage(config.courseId, r.url, { title: p.title }); // slug may change
      console.log(`  renamed  ${p.file} -> ${r.url}`);
    }
    map[p.file] = { ...(map[p.file] || {}), page_id: r.page_id, url: r.url };
  }
  saveMap();
}

function saveMap() { fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2) + '\n'); }
function num(v) { return v === undefined || v === null || v === '' ? Infinity : Number(v); }

function loadDotEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
  }
}
