# Review module 4

Reviewer notes. This folder is never sent to Canvas.

## New terms

| Term | Lidwoord | Meervoud | Nederlands bij introductie |
| --- | --- | --- | --- |
| kaart (van een project) | de | kaarten | – |
| scene | de | scenes | – |
| camera | de | camera's | – |
| renderer | de | renderers | – |
| mesh | de | meshes | – |
| geometry | de | geometry's | – |
| material | het | materials | – |
| control flow | de | – | programmaverloop |
| data flow | de | – | gegevensstroom |
| trace table | de | trace tables | – |
| aanname | de | aannames | – |
| code review | de | code reviews | codebeoordeling |
| verwacht gedrag, werkelijk gedrag | het | – | – |

Reused from modules 1 to 3: model, agent harness, agent, context, prompt, instructiebestand, edge case, happy path, console, server, separation of concerns (as "elk bestand één taak"), versie bewaren.

Named but not defined as a term: refactoring (one sentence in 4.4, module 5 is its home), `import` and `export` (explained in 4.1 in two sentences), `sort` (one sentence in 4.5).

## Content changes

- The module has a new angle: **taking over an existing project**. After module 3, where students generated a scene of their own, some scenes were bigger than what their maker could explain. This module therefore does not ask for more generating. Students read, review, judge and fix a project they did not write, with an agent as their help.
- The whole module runs on one project, `scorebord`: a 3D scoreboard for a quiz night, built with three.js in the layout module 3 ended on (several files and a local server). In the story a colleague built it with an agent, so the project is generated code. That keeps the module on the second objective of the ECTS fiche, which speaks of "gegenereerde code". The earlier loose examples (`getActiveAdultNames`, sorting 50 students, quicksort) are gone.
- The section numbers 4.1 to 4.6 and their topics are unchanged, so the references from module 5 to 4.4 and 4.5 still hold. Three titles changed: 4.1 "Een bestaand project leren kennen" (was "Code laten uitleggen"), 4.3 "Een agent als eerste code reviewer" (was "AI als…") and 4.6 "Een fout aanpakken met een agent" (was "…met AI").
- 4.1 is rewritten: look yourself first (README, start the project, find the task of every file), `import` and `export`, a map of the project, the six parts of a three.js scene (scene, camera, renderer, mesh with geometry and material, light, animation loop), asking for an explanation at three levels, and testing an explanation. The part on three.js is new and is there on purpose: students worked with the library in module 3 without being able to point at its parts.
- 4.2 keeps control flow, data flow, trace table and assumptions, now on `countPassed` and `calculateAverage` from the project. New: the way of the data from file to file, and one empty list with three different consequences (a correct 0, `NaN`, and a crash of the page).
- 4.3: a review on specific points with the project's agreements as context, three questions for every suggestion (is the problem real, does the proposal fit, does the code get better) and a worked table with four suggestions. New: a review can report a problem that does not exist, "no remarks" is not proof, and a remark you do not understand is one you ask an explanation for before you decide.
- 4.4: readability, structure and maintainability, on `top(a)` against `findWinner(players)` and on the pass mark that is written in three places. New: how to ask for an improvement and the three checks afterwards. Refactoring is named once, with a pointer to module 5.
- 4.5: criteria first, on two versions of `findWinner`: a loop, and a short one with `sort`. New: compare with facts by running the versions, and a picture of what the short version does to the scoreboard.
- 4.6: the three steps are kept, on a real bug in the project: the panel counts five players as passed, four towers are green. Expected behaviour, actual behaviour and one concrete case are new as terms. The section ends with two possible fixes (the small change, and one place for the rule) and still points to module 5.
- The words "AI-tool" and "AI-review" are replaced by model, agent or agent harness.

## The level of the JavaScript

The students started programming about two months before this module, and the course teaches how to use AI well, not how to write JavaScript by hand. Modules 1 to 3 use only plain functions, loops and `if` in their code. Module 4 keeps to that:

- The project (`stats.js`, `main.js`, `check.js`) has no arrow functions, no `map`, `filter` or `reduce`, and no `? :`. The list of scores is made by a small function `getScores()` with a loop, the colour of a tower by an `if`, and the event listeners use named functions.
- New for the students, and explained where it appears: `import` and `export` (4.1), the classes of three.js (4.1), and one line with `sort` and an arrow function in version B of 4.5. That line is deliberate: generated code often holds something you could not write yourself, and the text says so and tells students to ask what it does and to test it.
- Students never have to understand every line of `main.js`. M1 asks for the names of the functions, not for what each line does.
- Harder code is in the extra series only: X5 (a score that is text), X9 (a function of their own), X12 (three versions with spread syntax, a chained `sort` and nested loops).
- Assumed known: lists of objects such as `{ name: 'Amira', score: 14 }`, `for...of` and `push`. If the programming course has not reached these, 4.2 and E1 need a look.

## The project and what is wrong with it on purpose

The project is in `opdrachten/module-4/starter/scorebord`. Its weak spots are deliberate, and each one carries a section:

| Weak spot | Where | Used in |
| --- | --- | --- |
| Unreadable names: `top(a)` with `x` and `i` | `stats.js` | 4.3, 4.4, exercise M3 |
| `calculateAverage([])` gives `NaN`, `top([])` gives `undefined`; `AGENTS.md` says such a function returns `null` | `stats.js` | 4.2, 4.3, exercise M2 |
| The pass mark 10 is written in three places | `stats.js`, `main.js` (twice) | 4.4, 4.6, exercise X2 |
| The colour of a tower uses `> 10`, the count uses `>= 10` | `main.js`, `createTower()` | 4.6 |
| The average is not rounded | `main.js`, `showStats()` | shows up in exercise M1, when a ninth player is added |
| A tie: the first player wins, and that is written nowhere | `stats.js`, `README.md` | exercise E1 |

The four folders `scorebord`, `scorebord-verbeteren`, `scorebord-fout` and `scorebord-thuis` hold the same project, so no exercise depends on what an agent changed in an earlier one. `scorebord-fout` has one extra bug: in `createDiamond()` the position is `getTowerX(players.indexOf(winner) + 1)`, so the diamond floats above the tower next to the winner.

When the project changes, copy it to the other three folders, add the bug to `scorebord-fout` again, copy it to `lessen/module-4/live/scorebord`, apply the same change to `live/scorebord-opgelost`, and rebuild the zip.

## Text and exercises use different cases

The text works out one case per section, and the exercise for that section uses another case on the same project. Otherwise students could copy the answer from the page.

| Section | In the text | In the exercise |
| --- | --- | --- |
| 4.1 | the map with task and "uses", `heightPerPoint` | M1: what is in each file, three search questions, a ninth player |
| 4.2 | `countPassed([14, 7, 18, 10])`, the empty list | E1: another input, a missing score, a tie |
| 4.3 | four made-up suggestions | M2: a real review |
| 4.4 | one place for the pass mark | M3: renaming `top` |
| 4.5 | two versions of `findWinner` | no core exercise: Test jezelf 4.5, and X12 (three versions of `getRanking`) in the extra series |
| 4.6 | the tower of Lars | M4: the diamond above the wrong tower |

## Code and images that were checked

- The project was run through its own `server.js` and in headless Chrome, without console errors. `node check.js` gives the output shown on the exercise page.
- Every output block in the text was produced with Node.js: `countPassed`, `calculateAverage`, the three empty-list results, the test of `top` in 4.3 and the output of the two versions in 4.5 (`lessen/module-4/live/winnaar/varianten.js`).
- The error message in 4.2 is what Chrome shows when `players` is empty.
- Checked in the browser: `heightPerPoint` 0.125 lowers the towers, the bar and the diamond; version B of `findWinner` gives sorted heights with unsorted colours; with `>=` in `createTower()` five towers are green.
- Checked for the exercises: a ninth player (Sam, 13) gives "6 van 9" and an average of 11.666666666666666; the four calls of E1 give 3, 20, `NaN` and Mila; the four calls of X5 give 1, 10, 1 and 64; renaming `top` in `stats.js`, `main.js` and `check.js` leaves the output of `check.js` and the page unchanged; the three versions of `getRanking` give the output X12 builds on.
- The two images in `content/images/module-4/` are screenshots of the project: as delivered, and with version B of `findWinner` in `stats.js`.

## Quizzes

- Every Test jezelf now has a fixed id. The ids are the ones the six quizzes already had in `canvas-map.json`, so the six existing quizzes are updated in place and no quiz is left behind in Canvas.
- All six quizzes have new questions. The titles of 4.1, 4.3 and 4.6 changed with their sections; the ids did not.
- No question contains an attack string.

## Exercises

- The core series is five exercises, all done during the lecture, in the order of the sections: M1, E1, M2, M3, M4. Four use an agent (two prompts at most each, eight in total), E1 is without AI. Section 4.5 has no core exercise, like 3.5 in module 3.
- Every exercise names its folder, its prompt or its test lines, the exact command for the check, and what to write down. The exercise page starts with "Zo doorloop je deze les" and "Voor je begint" (the folders, how to start the project, how to run `check.js`).
- M2 asks the agent for at most four remarks in simple words. "Weet ik nog niet" is a valid decision, and the second prompt is for asking an explanation of a remark the student does not understand.
- X3 works in a copy of `scorebord-thuis` that the student names `scorebord-uitbreiden`, so X2 still finds an unchanged project. X5 and X11 only read or test in `scorebord-thuis`.
- `server.js` takes an optional port (`node server.js 3001`), for a laptop on which another program holds port 3000. The error message of the server and "Voor je begint" both say so.
- Node.js is needed for every exercise, because the project runs through a local server and the checks run with `node check.js`. In module 3 it was only needed for the last exercise.
- The code of the project is not printed on the exercise page: it is ten files. Students need the zip. The three versions for X12 are printed in the exercise.
- Dropped: every exercise that started from "a function you wrote yourself" in the core (old E1, M1, M2), and the Python example (old E2, E3). The old M3, H1, @1, X3, X4 and X6 live on in the extra series as X8, X9, X10, X6, X7 and X11.
- New in the extra series: X1 (the map of the student's own scene from module 3, with the six parts of a three.js scene), X2 (fix the bug of 4.6 in two steps: the small change, then one place for the rule), X3 (build a feature on the scoreboard with the workflow of module 3), X4 (a trace table of the growing tower), X5 (unexpected data, including a score that is text) and X12 (three versions of a function with code the students have not seen, criteria first, at most two prompts to ask for an explanation).

## Lecture material

- `lessen/module-4/`: 59 slides, speaker notes, one demo (`demos/trace-table.html`: step through `countPassed` and watch the trace table fill) and `live/` with the project, a solved version and the two versions of `findWinner`.
- Slide 3 is a live moment for the lecturer's own scene from the previous lecture. Slides 12 to 14 go deeper into how a three.js scene fits together, with a predict-first moment in which one line at a time is removed.
- Five "Jouw beurt" moments (17, 10, 14, 13 and 12 minutes) and 9 minutes to finish and hand in.
- The deck and the demo switch off font ligatures for code in their own `<style>`, so `>=` shows as two characters. That matters here, where the difference between `>` and `>=` is the bug. The shared styles in `lessen/shared` are unchanged.

## Open questions

- Test jezelf 4.1 has a question with an `import … from './stats.js';` line as code, the first quiz with such a line. The firewall of EhB let it through: after publishing, the quiz had its six questions.
- The time for M1 in class is tight: ten steps in 17 minutes. The 9 minutes at the end are the buffer.
- The prompts of M1 to M4 were not tested against a real model. The project, the checks, the test lines and all outputs were tested.
- The fill-in file was generated from the module 3 file and has the same structure, but it was not opened in Word on the machine that built it.
- Module 5 still uses "AI-tools" and "met AI" in its text and title, and its examples use arrow functions. That module has not been revised yet.
