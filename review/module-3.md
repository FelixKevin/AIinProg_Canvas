# Review module 3

Reviewer notes. This folder is never sent to Canvas.

## New terms

| Term | Lidwoord | Meervoud | Nederlands bij introductie |
| --- | --- | --- | --- |
| prototype | het | prototypes | – |
| versiebeheer | het | – | – |
| repository | de | repositories | – |
| commit | de | commits | – |
| feedbackpunt | het | feedbackpunten | – |
| console | de | – | – |
| separation of concerns | de | – | – |
| server | de | servers | – |
| configuratie | de | – | – |
| API key | de | API keys | – |
| environment variable | de | environment variables | omgevingsvariabele |

Reused from modules 1 and 2: model, agent harness, agent, context, prompt, vervolgprompt, edge case, happy path, scope creep, boilerplate, knowledge cutoff, training data, instructiebestand.

No longer introduced in the module text: design pattern (it is defined in extra exercise X3).

## Content changes

- The module is now about generating in practice. Students work with three.js, in a small starter project that already runs: a floor, a rotating cube, a light, a camera and an `AGENTS.md`. p5.js is not used, because another course teaches it.
- Topics above the level of first-year students (ORM, MVC, CI/CD, Dockerfile, linting, unit tests, commits) were removed.
- 3.1 rewritten: the starter project, think first, one prompt with the four elements, compare the result with what you asked, then save a version before anything else. The text says that version control (Git) is the right way and that a real project always uses it; the copy of the folder (`-v1`) is presented as a stand-in for this module, not as a habit. The quiz of 3.1 has a question on this.
- 3.2 is new (it replaces "Boilerplate en design patterns"): ask for an explanation of one thing without changes, then test the explanation by predicting, changing a value and looking. The example is the light of the starter project (`lightIntensity`).
- 3.3 (was 3.6 "Iteratief integreren"): feedback points, one per prompt, check after every step, the browser console, and starting again from a copy.
- 3.4: the checklist is reduced to four points at the students' level (naming, place, what already exists, agreements). The worked example comes from the scene project itself: a generated `boom.js` with `maak_boom()` that does not fit, and a version that does (`createTree()` in `index.html`). There is no second project (the earlier webshop example is gone), so the whole module stays on one project.
- 3.4 also shows what the split prompt looks like and what its goal is: the same scene in a better structure.
- 3.3: the part on the console now says that you copy the message and paste it into your prompt, and that you choose between asking what it means and asking for a fix.
- 3.6: Git, repository, commit, GitHub (public and private) and `.gitignore` are explained in a short part before the text says that a secret in Git is leaked.
- 3.4 has a new last part, "Elk bestand zijn eigen taak": separation of concerns (`index.html` for structure, `style.css` for styling, `main.js` for behaviour), the price of splitting (a page with a separate JavaScript module does not open with a double click; it needs a local server), and the rule to change the agreement in `AGENTS.md` first and ask for the change afterwards.
- 3.5: the list refers back to 1.5 and 2.6 instead of repeating them. New: code written for an old version of a library (`THREE.Geometry`). The date example is unchanged.
- 3.6 (was 3.3): secrets and `.env`, with short explanations of API key, Git and `.gitignore`. New: what belongs in `.gitignore` (secrets, what a computer can make again, what only applies to your own computer), sharing a secret publicly as a well-known beginner's mistake, and never putting a real secret in a prompt.
- The module does not point forward to later modules by number. It only refers back.
- Section 3.3 became 3.6, so the reference in module 8 (8.4) was updated.

## Examples and creativity

- The text has one worked example of a first version, a lighthouse. It is deliberately not a hobby object, and it is only used for the prompt in 3.1 and the feedback points in 3.3. Sections 3.2 and 3.4 use the starter project itself.
- The reason: one detailed example that looks like a student result makes everyone build the same thing. The exercises ask for something personal and give categories (sport, music, job, pet, game, food, home town), not objects. The idea may also be abstract: a movement, a feeling, a colour or an effect with particles. The `AGENTS.md` of the starter project allows everything three.js itself offers and only forbids other libraries, addons and loaded files. Students keep it to one idea, and the text says why: every prompt costs AI credits.

## Code and images that were checked

- The starter project opens from the file system with a double click, without a server, with three.js 0.170.0 from a CDN.
- The three images in `content/images/module-3/` are screenshots of the starter project, of a lighthouse version written for this module, and of the starter project with `lightIntensity` 0. The table in 3.2 (0, 1, 3 and 10) was checked the same way.
- `createTree()` from 3.4 was run inside the starter project. The output in 3.5 was produced with Node.js. `THREE.Geometry is not a constructor` was produced with three.js 0.170.0.

## Quizzes

- Every Test jezelf now has a fixed id.
- Two quizzes are new: 3.1 (`test-jezelf-3-1-een-eerste-versie-genereren`) and 3.2 (`test-jezelf-3-2-begrijp-wat-je-kreeg`). The old quizzes "Test jezelf 3.1 – Functions en prototypes genereren" and "Test jezelf 3.2 – Boilerplate en design patterns" stay in Canvas until they are deleted there.
- Four quizzes keep their id and get new questions: 3.3 (id says 3-6), 3.4, 3.5 and 3.6 (id says 3-3).

## Exercises

- The core series is small on purpose: M1–M4 and E1, five exercises that are all done during the lecture. The exercise page and the fill-in file list them in the order of the lesson. There is no separate homework exercise in the core.
- M1 to M4 are one build on one project, in the same folder `scene`, so students do not switch folders or tools in between: first version and saved version (M1), explanation and test (M2), two feedback points (M3), and the split into three files with a check of the agreements (M4).
- M4: students change the first agreement in `AGENTS.md`, let the agent split the scene into `index.html`, `style.css` and `main.js`, see that a double click now gives an empty screen with a CORS error in the console, view the page through `node server.js`, and then check the six agreements. `server.js` is a small static server in the starter files that uses Node.js core only, so nothing has to be installed and `npx` is not needed.
- E1 is the secrets exercise, on paper, without AI.
- The exercise page starts with "Zo doorloop je deze les": a table with what to read and which exercise to make, in order, for students who do the lesson on their own.
- Every exercise with prompts has a maximum number of prompts, 10 for the whole core series. The reason given to students is their monthly AI credits.
- Students hand in only the fill-in file. Screenshots and the function for their object or effect go into that file.
- "Voor je begint" explains how to open the scene in the browser, how to save a version of a folder and how to take a screenshot. It no longer says "Kies Agent": students open their agent harness, check their permissions and pick a model.
- Dropped from the core: the CRUD module (old M1), the line-by-line comments (old M4), the prototype review (old H1) and the application with a 600-word report (old @1).
- Moved to the extra series: X10 (old E3), X11 (old M3), X12 (old H2), X13 (old E2, which fragment fits the project), X14 (a second scene with a new idea, in the folder `scene-thuis`) and X15 (the Belgian dates exercise, with a fixed prompt and a test block).

## Git

- The module names version control as the right habit and explains what goes into `.gitignore`, but students do not work with Git themselves here. The hands-on part (a repository on GitHub from Visual Studio Code, commits, branches, `.gitignore`, secrets, an agent working in a repository) is kept for a later lesson of its own.

## Open questions

- The prompts in M1 to M4 were not tested against a real model. The starter project, the test block of X15, the code samples and `server.js` were tested: a split version of the starter project shows an empty screen and the CORS error from the file system, and works through `server.js`.
- "Reveal in File Explorer" and "Reveal in Finder" are the menu names in Visual Studio Code at the time of writing.
- The exercise page of module 2 still says "Kies Agent".
