# AGENTS.md

Guidance for AI agents (and people) working in this repo. [README.md](README.md) is the full technical reference; this file covers what you need to work safely and keep the course consistent.

## What this is

The course **AI in Programming (PRG1)** for first-year associate-degree students at EhB, published to Canvas (https://canvas.ehb.be, course `48518`).

- `content/*.md` is the course: one page per file, in Dutch.
- `sync.js` turns that Markdown into Canvas pages and turns every "Test jezelf" block into a Canvas New Quiz.
- The teacher (Dimatri Godunov) owns the content and decides what gets published.

## Hard rules

- **Never publish, commit or push unless the user explicitly asks for it in that moment.** Approval for one publish does not carry over to the next.
- Anything that calls Canvas without `--dry-run` writes to a live course with about 80 students. Before a real sync, say exactly what it will create, update or replace.
- **Read-only Canvas calls (GET) are fine** for checking state. The token is `CANVAS_TOKEN` in `.env`. Never print it, log it or commit it.
- The tool never deletes anything in Canvas. Removing a quiz or page from the Markdown leaves it in Canvas. Tell the user, and let them delete it there.
- `canvas-map.json` links every file and quiz to its Canvas id. Don't edit or regenerate it by hand unless asked. If it gets lost, sync creates duplicates.

## Layout

| Path | What |
|---|---|
| `content/module-N.md` | Course text for module N, with a Test jezelf after each section |
| `content/module-N-oefeningen.md` | Exercises for module N (core series + extra series) |
| `content/intro.md` | Course home page |
| `content/images/` | Images, uploaded to Canvas Files on publish |
| `review/module-N.md` | Reviewer notes. Never published. |
| `opdrachten/module-N/` | Canvas assignment material: a fill-in `.docx` for the exercises and an `opdracht-module-N.html` description. Never published by `sync.js`; the teacher uploads or pastes it into Canvas. See [opdrachten/README.md](opdrachten/README.md). |
| `sync.js`, `lib/` | The generator (render, quizzes, images, Canvas client) |
| `course.config.json` | Canvas URL, course id, quiz settings, block logos |
| `template.html`, `css/`, `theme/` | Page template and styling |
| `convert-pdf.js`, `pdf.config.json` | PDF export of the course (needs Playwright and pdf-lib, which are not in package.json) |
| `out/` | Dry-run output, gitignored. Open `out/module-N.html` in a browser to preview. |

## Commands

```bash
npm ci
node sync.js --dry-run                 # build ./out, no Canvas calls; always run this after editing
node sync.js --only module-1.md        # publish one file (only on explicit request)
node sync.js                           # publish everything that changed (only on explicit request)
```

- `--only` takes one file. A module needs two runs: `module-N.md` and `module-N-oefeningen.md`.
- A dry run prints warnings for broken quiz syntax, missing images and unresolved markers. Fix those before you report the work as done.
- If git says "dubious ownership" (the repo is on D:), use `git -c safe.directory='*' …`.

## Writing course content

**Audience.** First-year associate-degree students, many of them not native Dutch speakers. They are not ML students.

- Write in simple Dutch with short sentences. No fancy words. The text is Flemish (`je kan`, `gsm`).
- **Keep established English technical terms in English**: token, model, prompt, harness, context window, hallucination, boilerplate, scope creep, and so on. Do not translate them into Dutch. Bold the term where it is introduced and explain it in plain words, with a Dutch gloss in parentheses where that helps.
- Be accurate and careful with claims. Don't overclaim (for example "an LLM understands like a human") or underclaim ("it doesn't understand anything"). Leave out claims about current AI achievements unless you have a verified source.
- Explain concepts directly. Don't argue with or quote a previous version of the text.
- Use concrete programming examples (JavaScript or Python), with real output in an ` ```output ` block. Check that any code and output you write is correct.

**Structure of a module page.**

1. Front matter
2. `# Module N: …`
3. Intro paragraph
4. `### Leerdoelen`
5. `## N.x` sections, each ending with a Test jezelf
6. `## Samenvatting` (new terms + key rules)
7. `## Veelgemaakte fouten`
8. A `::: oefening` link to the exercises page

- Callouts available: `::: info`, `::: warning`, `::: oefening`.
- Section `## 1.4 Titel` gets the anchor `#1_4`. Link within a page as `[1.4](#1_4)`, and to another page as `[2.3](./module-2.md#2_3)`.

**Module boundaries.** Each topic has one home. Later modules go deeper, earlier ones point forward. Don't duplicate.

| Module | Role |
|---|---|
| 1 | The mental model (the *why*): what AI and an LLM are, tokens, training, harness, context, limitations, responsibility, QC |
| 2 | Prompting (the *how* of precise instructions, including generate/adapt/evaluate) |
| 3–6 | Generating, reviewing, debugging and refactoring, tests and docs |
| 7 | Licences, privacy, responsibility |
| 8 | Workflow: editor integration, instruction files (AGENTS.md), context in big projects, agents |

## Test jezelf quizzes

The format is in the README ("Test jezelf"). Rules that matter:

- **Every Test jezelf heading must have a fixed id**: `### Test jezelf 1.2 – Titel {#test-jezelf-1-2-…}`. The quiz is identified by `file#id`, and without an id it is identified by the heading text. In that case renaming the heading creates a duplicate quiz in Canvas.
- **Keep the id** when you only reword a quiz. **Give a new id** when a section is rewritten into a different topic, so the old student attempts don't get mixed with new questions. Tell the user that the old quiz remains in Canvas.
- Quizzes that students already attempted may refuse question replacement. The README covers this under "Caveats".
- Feedback refers back with `(zie N.x)`. Keep those numbers correct when sections move.
- Write feedback for every option of `meerkeuze` and `meerdere antwoorden` questions.
- **No attack strings in quizzes.** EhB's firewall blocks quiz requests that contain SQL-injection-like text, for example `' OR '1'='1` or a string-built `SELECT ... WHERE x = '" + input + "'` query. It answers with an HTML 403. Updating a quiz first deletes its questions and then re-adds them, so a blocked question leaves the live quiz incomplete. Keep such examples in the page text (pages are not blocked) and out of Test jezelf questions.

## When you change a module, also update

1. **Cross-references** in other files: `grep -rn "module-N.md#" content/`. Renumbering a section breaks them silently.
2. **The exercises** (`module-N-oefeningen.md`): section references, and exercises that no longer fit the text.
3. **The fill-in file** in `opdrachten/module-N/`, if the exercises changed.
4. **`review/module-N.md`**: new terms and content changes.
5. **The Samenvatting** and the learning goals.

Then run a dry run and check the preview.

## Files and formatting

- Content files use **CRLF** line endings. Keep them CRLF; scripts that rewrite files must not convert them to LF.
- UTF-8, no BOM.
- Never commit `.env`. `out/` and `node_modules/` are gitignored.
