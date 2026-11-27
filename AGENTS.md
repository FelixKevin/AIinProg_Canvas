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
| `opdrachten/module-N/` | Canvas assignment material: a fill-in `.docx` for the exercises, an `opdracht-module-N.html` description and, where exercises need code, starter files (`starter/` plus a zip of it). Never published by `sync.js`; the teacher uploads or pastes it into Canvas. See [opdrachten/README.md](opdrachten/README.md). |
| `opdrachten/startgids/` | Setup guide for students (Visual Studio Code with GitHub Copilot): HTML source and the PDF that is shared on Canvas. |
| `lessen/module-N/` | Lecture material: `slides.html` (+ `slides.pdf` for students), `speaker-notes.md`, browser demos in `demos/`, prepared projects for live demos in `live/`. `lessen/shared/` holds the slide engine, demo styles and fonts. Never published by `sync.js`. See [lessen/README.md](lessen/README.md). |
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
- **Keep established English technical terms in English**: token, model, prompt, agent harness, context window, hallucination, edge case, boilerplate, scope creep, and so on. Do not translate them into Dutch. Bold the term where it is introduced and explain it in plain words, with a Dutch gloss in parentheses where that helps.
- **Name things precisely.** Say *model* (the LLM), *agent harness* (the software around it, such as GitHub Copilot) or *agent* (a model that takes steps on its own through an agent harness). Write "agent harness" in full: "harness" alone is not a term students can look up. Don't write "AI-assistent": it hides which of the three is meant.
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
| 1 | The mental model (the *why*): what AI and an LLM are, tokens, training, agent harness, context, limitations, responsibility, QC |
| 2 | Prompting (the *how* of precise instructions, including generate/adapt/evaluate) |
| 3–6 | Generating, reviewing, debugging and refactoring, tests and docs |
| 7 | Licences, privacy, responsibility |
| 8 | Workflow: editor integration, instruction files (AGENTS.md), context in big projects, agents |

## Exercises

- **Every exercise must be doable alone and remotely.** A student who follows from home or missed the class must be able to finish it with only the Canvas pages, the fill-in file and the starter files. No step may depend on a partner, on something shown in class or on asking the teacher.
- An exercise says which folder to open, which prompt to send, how to check the result (the exact command or test block) and what to write down. If a result is needed later, the step that produces it says to note it before the next step changes it.
- What every exercise needs (which folder to open, a new chat, running code) is explained once, in "Voor je begint" at the top of the exercise page. Exercises link to it.
- Each exercise names its section: `(zie [2.4](./module-N.md#2_4))`.
- One exercise, one folder, so an agent only sees the files of that exercise. Starter files follow that layout.
- **Never ask students to undo or revert a change.** When an exercise tests two prompts on the same code, each prompt gets its own copy of the folder (`name-a`, `name-b`) and both results stay.
- In class, exercises are individual work with a timer. Don't build in comparing or a class debrief: students fill in their file and move on.

## Slides and demos

- Follow [lessen/STYLEGUIDE.md](lessen/STYLEGUIDE.md) for every deck and demo: colours, fonts, slide types, components and writing rules. Change shared styles in `lessen/shared/`, not per deck.
- Slides follow the section numbers of the module text. When a module's text changes, check its slides and speaker notes too.
- Decks and demos must work offline from the file system: no build step, no CDN. Rebuild `slides.pdf` after changing a deck (see [lessen/README.md](lessen/README.md)).
- A lecture is three hours with two 15-minute breaks, so blocks of 60, 45 and 45 minutes. Speaker notes carry the timing.
- Lectures are hands-on: short explanation, then students work. The "Jouw beurt" slides use exercises from the module's exercise page, so students fill in the same file in class and at home. Keep the two in step.
- **A live moment only uses material that is in the repo.** Every `live` slide runs on a prepared project in `live/`, a demo or the starter files, and `live/README.md` gives the exact steps and the expected result. Never plan a moment that counts on something the lecturer has to bring or prepare: a project of their own, an example from their own work, or a tool that is only set up on their machine. If there is nothing prepared to show, make it a normal slide, for example a recap.
- Speaker notes and `live/README.md` are written for someone who has not seen the material before: say which folder to open, which file and line to change, what to type and what appears. Do not use a label such as "Live" or "your moment" without saying what it means.

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
3. **The fill-in file and starter files** in `opdrachten/module-N/`, if the exercises changed.
4. **The slides and speaker notes** in `lessen/module-N/`, if sections or key terms changed.
5. **`review/module-N.md`**: new terms and content changes.
6. **The Samenvatting** and the learning goals.

Then run a dry run and check the preview.

## Files and formatting

- Content files use **CRLF** line endings. Keep them CRLF; scripts that rewrite files must not convert them to LF.
- UTF-8, no BOM.
- Never commit `.env`. `out/` and `node_modules/` are gitignored.
