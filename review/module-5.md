# Review module 5

Reviewer notes. This folder is never sent to Canvas.

## New terms

| Term | Lidwoord | Meervoud | Nederlands bij introductie |
| --- | --- | --- | --- |
| bug | de | bugs | – |
| debuggen | – | – | – |
| type, boodschap, plaats (van een foutmelding) | het, de, de | – | – |
| stack trace | de | stack traces | – |
| reproduceren | – | – | – |
| minimal example | het | minimal examples | – |
| hypothese | de | hypothesen | – |
| trial and error | – | – | – |
| code smell | de | code smells | – |
| duplication | de | – | dubbele code |
| magic number | het | magic numbers | – |
| dead code | de | – | – |
| refactoring | de | refactorings | – |
| off-by-one error | de | off-by-one errors | – |
| regression | de | regressions | regressie |
| test | de | tests | – |
| unit test | de | unit tests | – |
| integration test | de | integration tests | – |
| regression test | de | regression tests | – |
| headless browser | de | headless browsers | – |
| breakpoint | het | breakpoints | pauzepunt |
| debugger | de | debuggers | – |
| step over, step into, step out | – | – | – |
| race condition | de | race conditions | – |
| thread | de | threads | – |
| error tracking | de | – | – |

Reused from modules 1 to 4: model, agent harness, agent, context, prompt, instructiebestand, edge case, console, server, kaart van een project, data flow, aanname, verwacht en werkelijk gedrag, code review, leesbaarheid, structuur en onderhoudbaarheid, versie bewaren, scope creep.

Only in the exercises: bug report (X6), playbook (X12).

Named but not defined as a term: `SyntaxError`, `ReferenceError` and `TypeError` (a table in 5.1), Scope and Call Stack (parts of the debugger, explained with the screenshot in 5.1), exception and uncaught (one sentence each in 5.1), the products Sentry, Rollbar and Firebase Crashlytics (the info box in 5.1), `NaN` (defined in 4.2, repeated in one sentence in 5.3), plugin (as the gloss of "uitbreiding" in the info box of 5.6).

## Content changes

- The module has the angle of module 4: **one project that the students take over**. It is version 2 of the scoreboard. In the story a colleague added a second round in a hurry, and now things break. The module no longer asks students to write a function of their own and put bugs in it.
- The six section numbers and their topics are unchanged, so the link from module 8 to 5.3 still holds. Four titles changed: 5.3 "Debuggen met hypothesen" (was "Hypothesegedreven debuggen") and 5.6 "Regressions voorkomen met tests" (was "Regressies voorkomen"). 5.2 says "Een fout reproduceren" instead of "Een bug reproduceren". 5.5 is "Refactoring: de structuur verbeteren, het gedrag behouden" (was "Refactoring: structuur verbeteren zonder gedrag te veranderen"). The module title is unchanged.
- The text is one story on the project. 5.1: the organiser writes Emma's line in the old format, and the page crashes. 5.2: the panel says "Hoogste totaal: 9". 5.3: Fatima misses round 2, and the panel shows `NaN`. 5.4 to 5.6: the bugs are fixed, and the code is cleaned up and tested. From 5.3 on, the outputs in the text use `rounds: [12, 0]` for Fatima.
- 5.1 is rewritten. New: the three parts of an error message (type, message, place), a table with `SyntaxError`, `ReferenceError` and `TypeError`, a stack trace read line by line, the same message in the browser console and in the terminal, the question "is this code wrong, or did it get something wrong?", why the towers disappear too (a script stops after an error), giving the full message to an agent, and "the message gone is not the error gone": a check at the place of the error that hides the cause.
- Added after the first version, on the teacher's question whether the module shows where to find a stack trace and how an agent gets to see one. 5.1 has a screenshot of the error in the console of Chrome, the full output of the same error in the terminal, and a new part "Wat een agent zelf kan lezen": a table with three places where an error message can be (output of a command the agent ran: yes; a terminal in which the student typed: do not count on it; the console of the browser: no), why the terminal of `node server.js` shows no error, why `check.js` exists, a prompt that lets the agent run `node check.js` and read the error itself, and one paragraph that says the same holds for a project started with `npm run dev`. One learning goal, one rule in the Samenvatting and one line in Veelgemaakte fouten were added for it.
- Added on 27 November, after the lecturer walked through the slides. 5.1 has two new parts. "Als een foutmelding niet genoeg zegt" names four kinds of bugs where a message and a stack trace are not enough: no message at all, a cause far from the place, code that runs later (a click, a timer, an answer of a server), and a bug that is not there every time (race condition, with one sentence on threads in Java and C#). "De debugger: je code pauzeren" explains the debugger of the browser with two screenshots: a breakpoint, Scope, Call Stack, the four buttons (Resume, Step over, Step into, Step out) with their keys, "Pause on uncaught exceptions" on the crash of Emma, and a short paragraph on the debugger of Visual Studio Code for code in Node.js. One learning goal (explain what a debugger and a breakpoint do), four terms and one rule in the Samenvatting, and two questions in Test jezelf 5.1 were added for it. The quiz keeps its id.
- 5.1 also has an info box "Tip voor later: error tracking": an app at real users crashes where the developer cannot see it, and a service such as Sentry collects the message and the stack trace. It names three products and points to module 7 for privacy. The claims were checked against the documentation of the products on 27 November 2026 (see "Sources checked").
- 5.3 says why the section measures with `console.log` and not with the debugger: the output is text that a student can paste and that an agent can read itself, and an agent that looks for a bug usually works that way. The info box of 5.3 is now "Meten met een breakpoint": the same measurement with the debugger of 5.1, with the screenshot of `panel.js`. The debugger stays outside the core exercises on purpose: the core of the module is evidence as text (an error message, a minimal example, one measurement, a test). The exercise is X14.
- The part "Eén hypothese, één wijziging" of 5.3 is now "Eerst de oorzaak, dan één wijziging". The three risks have a plain name each (too many changes at once, the model chooses a rule that is yours to choose, keep trying in the same chat) and the part ends with the rule itself. The lecturer found the old wording hard to follow.
- 5.2 keeps reproducing and the minimal example, and now shows the reduction itself in three steps: from the project to one function in `repro.js`, a smaller input by halving, and from the function to one line. The `sort()` example of the old text is kept, as the end point of that reduction. New: "it worked on my machine" as a hint that the bug depends on the input, asking for an explanation with the minimal example and testing that explanation, and an agent that reduces by itself.
- 5.3 keeps the difference between trial and error and hypotheses. New: the four steps (observe, hypothesis, predict and test, decide), `console.log` as the measuring tool, three worked hypotheses of which the first is wrong, one cause with four consequences, a prompt that asks for causes and for a test instead of a fix, the three risks of "fix it" without a diagnosis (several changes at once, a rule of the quiz chosen for you, attempt after attempt in the same chat), and checking every consequence after a fix.
- 5.4 keeps the list of code smells, now as a table of seven, with the English names duplication, magic number and dead code. The example is the two round functions of the project instead of the function `f(d)`. New: a smell is also where bugs start, deciding per smell with the context of the project, and a prompt in a fixed form to let an agent find smells.
- 5.5 keeps the definition and "never fix and refactor in the same step". New: three steps (record the behaviour, one small step, check), a worked refactoring in two steps with its prompt, "a refactoring keeps the wrong behaviour too", and three things to watch with an agent. The old example (`f` to `calculatePriceWithVat`) is gone: it changed the behaviour for some inputs without saying so.
- 5.6 is the section that grew most, on the teacher's request. It keeps regression and small steps. New: off-by-one error, what a test is, the file `test.js` with a small function `check(name, actual, expected)`, unit test, integration test and regression test, "tests that pass only prove what they test", from minimal example to regression test (see it fail first), an agent that runs the tests itself and the three checks afterwards, what these tests do not see (the page), and an info box on the headless browser and on agent harnesses that can drive a browser.
- The boundary with module 6: module 5 says what a test is and uses tests to guard against regressions. Module 6 is about letting tests be generated and judging them. 5.6 says in two sentences that the expected value comes from the rules and not from the code, and points to module 6. It does not use `assert`: module 6 introduces that.
- Tone: the old text ended every section with "AI helps, but you must…". The new text says plainly what an agent does well in each step (reading an error message, proposing causes, finding smells, refactoring, running tests) and what the student gives it and checks afterwards. "AI" as an actor and "AI-tool" are replaced by model, agent or agent harness.

## The level of the JavaScript

- The project keeps to the level of module 4: plain functions, `for...of`, `if`, lists and objects. No arrow functions, no `map`, `filter` or `reduce`, no `? :`.
- New for the students, and explained where it appears: a list inside an object (`rounds: [14, 17]`), reading a place of a list (`rounds[0]`), `Math.round(x * 10) / 10` (named as a magic number in 5.4), and `sort()` without an argument (the bug of 5.2; the text explains what it does and tests that explanation).
- `main.js` has two short helpers for the panel (`fillList` and `showPanel`) that use `document.getElementById` and `createElement`. Students do not have to write this; E1 explains in one sentence what `getElementById` returns when nothing is found.
- `test.js` compares with `typeof` and `String()`. Students read the calls of `check`, not the function itself. The text and M4 say so.
- No Python in the module any more.
- Harder code is in the extra series: X9 (`==` against `===`) and `browser-check.js` (X11), which students run and do not read.

## The project and what is wrong with it on purpose

The project is in `opdrachten/module-5/starter/`. Every folder holds the same project, with one difference per folder.

| Weak spot | Where | Used in |
| --- | --- | --- |
| `getHighest` sorts with `sort()` without an argument: wrong as soon as a total is below 10 (Kobe has 9) | `stats.js` | 5.2, 5.6, exercise X7. Visible in every folder except `scorebord2-m1` |
| `getLowest` starts from 20: wrong when every total is above 20 | `stats.js` | exercises M1 and M4. Dormant with the scores of the first evening |
| `getTotal` assumes two scores per player | `stats.js` | 5.1 (a player without `rounds` crashes), 5.3 (one score gives `NaN`), exercises X2 and X4 |
| Two functions that differ in one character: `getRound1Scores` and `getRound2Scores` | `stats.js` | 5.4, 5.5, exercise X8 |
| The same rounding three times, with a magic number | `panel.js` | 5.4, exercise M3 |
| Dead code: the function `top` of version 1 | `stats.js` | 5.4, exercise M3 |
| Debug code that stayed: `console.log('winner', winner)` | `main.js` | 5.4 |
| The tests pass although `getHighest` and `getLowest` are wrong | `test.js` | 5.6, exercise M4 |

| Folder | Difference with the project as delivered |
| --- | --- |
| `scorebord2-e1` | `index.html` has `id="playerlist"`, `main.js` asks for `playerList`: a `TypeError` in the console, no player list and no towers |
| `scorebord2-m1` | other players and scores in `data.js`; every total is above 20, so the panel says "Laagste totaal: 20" |
| `scorebord2-m2` | `getRound2Scores` reads `rounds[0]`: "Gemiddelde ronde 2" equals "Gemiddelde ronde 1" |
| `scorebord2-m3`, `scorebord2-m4` | none |
| `scorebord2-thuis` | one extra file, `browser-check.js` |

Small folders for the extra series: `foutmeldingen` (four files with one error each), `gemiddelde`, `zoek-speler-a` and `zoek-speler-b` (the same file twice, for two prompts), `korting`.

`panel.js` is new on purpose. In version 1 `main.js` made the text of the panel. Now a function without the browser makes it, so `check.js` can print it and `test.js` can test it. In `main.js` the panel is filled before the 3D scene is made, so a crash in the calculations leaves an empty page, and `browser-check.js` does not depend on WebGL.

When the project changes: the folders were generated from one base copy by a script that is not in the repo. Apply a change to every `scorebord2-*` folder, keep the one difference per folder, copy `scorebord2-thuis` to `lessen/module-5/live/scorebord2`, apply the change to `live/scorebord2-opgelost`, and rebuild the zip.

## Text and exercises use different cases

| Section | In the text | In the exercise |
| --- | --- | --- |
| 5.1 | Emma's line in the old format: the crash in `getTotal`, the cause in `data.js` | E1: an id that is spelled differently in `index.html` and `main.js` |
| 5.2 | `getHighest` and `sort()`, reduced to `[25, 9].sort()` | M1: `getLowest`, reduced to a list of one number above 20 |
| 5.3 | Fatima misses a round: `NaN` | M2: the average of round 2 uses the scores of round 1 |
| 5.4 and 5.5 | the two round functions become `getRoundScores` | M3: the rounding in `panel.js` becomes one function, and `top` is removed by hand |
| 5.6 | a regression test for `getHighest([25, 9])` | M4: a regression test for the bug of M1, and an agent that runs the tests |

The text cases can be redone at home in the extra series: X2 (5.1), X4 (5.3), X7 (5.2 and 5.6) and X8 (5.5).

## Code and images that were checked

- Every output block in the text was produced with Node.js 25 or in headless Chrome, on the project in the state the text describes: the stack trace of 5.1 in the browser and in the terminal, the second stack trace after a check in `getTotal`, the output of `check.js` in 5.2, the four calls of the halving table, `[25, 9].sort()` and `[100, 25, 9].sort()`, the three measurements of 5.3, the two outputs at the end of 5.3, the output before and after the refactoring of 5.5, the off-by-one output of 5.6, the output of `test.js` (16 tests), the two failing integration tests and the failing regression test.
- Line and column numbers in the stack traces are those of the real files.
- For the exercises: E1 gives `TypeError: Cannot read properties of null (reading 'appendChild')` at `fillList (main.js:27:10)`, `showPanel (main.js:33:3)`, `main.js:36:1`. M1 gives "Laagste totaal: 20" and 20 for every list without a number below 20. M2 gives 11.5 twice, and the right value is 12.9. In M3 the search for `top(` finds only the function itself. In M4 the 16 tests pass and the regression test fails with "verwacht: 27, gekregen: 20".
- The four files of X1 give a `SyntaxError`, a `ReferenceError` and two `TypeError`s. `browser-check.js` was run with Chrome against the project (two checks OK) and against a copy with the id of E1 changed (one check fails, while `test.js` passes). The same command line works with Edge.
- Two images in `content/images/module-5/` are screenshots of the project: as delivered, and with one score for Fatima after the fix of 5.2.
- `console-stack-trace.png` and `breakpoint-sources.png` are screenshots of the real DevTools of Chrome, attached to the project: the crash of 5.1 in the console, and the project as delivered, paused on a breakpoint on line 17 of `panel.js` with `totals` opened under Scope. The breakpoint was set by a click on the line number in the DevTools interface.
- `debugger-breakpoint.png` and `debugger-exception.png` (in the text of 5.1 and on slides 16 and 18) are screenshots of the same DevTools, on the project with the line of Emma in the old format: paused on a breakpoint on line 15 of `stats.js`, and paused on the TypeError after "Pause on uncaught exceptions" was ticked. The pictures of the four buttons on slide 17 are cut from the same toolbar. The whole debug session of slide 18 and the twelve steps of X14 were run through the DevTools interface, with a screenshot after every step.
- The terminal output of the crash in 5.1 is the real output of Node.js 25. The path of the folder was shortened to `C:/les/scorebord2`. The lines with `node:internal` have other line numbers in other versions of Node.js.
- X14 was run in Chrome: after the pause on line 17, `totals` is `31, 19, 34, 20, 25, 9, 33, 24`. Seven times Step over brings the pause to line 24, and `totals` is then `19, 20, 24, 25, 31, 33, 34, 9`: `sort()` in `getHighest` changed the list itself. X13 step 2 was checked too: the terminal of `node server.js` shows only its three start lines.
- The project in `lessen/module-5/live/scorebord2-opgelost` runs in the browser, and its 20 tests pass.

## Quizzes

- Every Test jezelf now has a fixed id. The ids are the ones the six quizzes already had in `canvas-map.json` (derived from the old headings), so the six quizzes are updated in place and no quiz is left behind in Canvas. The ids of 5.2, 5.3 and 5.6 therefore still say "een-bug-reproduceren", "hypothesegedreven-debuggen" and "regressies-voorkomen".
- All six quizzes have new questions: 45 in total, with multiple choice, matching, ordering, categorising, numeric and true/false.
- No question contains an attack string. Test jezelf 5.1 has a question with three lines of a stack trace as code, and 5.2 has `console.log([10, 9, 1].sort());`. Check after publishing that each quiz has all its questions.

## Exercises

- The core series is five exercises, all done during the lecture, in the order of the sections: E1, M1, M2, M3, M4. E1 is without AI. The other four send seven prompts at most together (1, 2, 2 and 2). Sections 5.4 and 5.5 share one exercise (M3).
- Every exercise names its folder, its prompt or what the prompt must contain, the exact command for the check, and what to write down. The page starts with "Zo doorloop je deze les" and "Voor je begint" (the folders, the project in short, starting the project, the console, the three commands `check.js`, `repro.js` and `test.js`).
- "Hoogste totaal: 9" is visible in most folders. "Voor je begint", M2 and M3 say that it is the bug of 5.2 and that it stays. In M3 it is used: a refactoring keeps the wrong behaviour too.
- M1 does not fix its bug. M4 does, with a regression test first. M4 prints the test line, so it does not depend on the answer of M1.
- M4 tells students what to do when the agent asks permission to run a command, and when it does not run the command itself.
- Dropped: every core exercise that started from "write a function and put bugs in it" (old E1, M1), the exercise that needed a fellow student (old H1), the two exercises in public issue trackers (old H2, @1), the exercises that asked to research AI tools (old X3, X7), white-box and black-box debugging (old X6) and the Python examples.
- Kept in the extra series, rewritten for one folder and exact steps: old E3 as X3 (the average with an off-by-one error), old M4 as X5 (find a player by name, now in JavaScript and as a comparison of a vague and a precise prompt in two folders), old M3 as X9 (refactoring `proc`, now with own tests first), old M2 as X10 (smells in your own code), old X8 as X12 (a playbook).
- New in the extra series: X1 (four error messages in the terminal), X2 (let an agent fix the crash of 5.1 and see where it does that), X4 (the missed round), X6 (write a bug report for the bug of M1), X7 (from minimal example to regression test for `sort()`), X8 (the refactoring of 5.5 with the test rule in `AGENTS.md`), X11 (a headless browser checks the page).
- Added later: X13 (the agent runs `node check.js` and reads the crash of 5.1 itself; the student notes where the message is and is not) and X14 (a breakpoint in the debugger of Chrome or Edge, without AI and without a change to the code).
- X14 was extended on 27 November, so it uses everything 5.1 explains: after the breakpoint and Scope, the student steps over to line 23, steps into `getHighest`, reads the Call Stack, steps over once and sees that `totals` itself is sorted, and steps out. It has twelve steps now instead of ten, and the fill-in file has two more answer fields. Every step was run in Chrome.
- X2, X4, X7, X8, X11, X13 and X14 each work in a copy of `scorebord2-thuis` that the student names, so that folder never changes.

## Lecture material

- `lessen/module-5/`: 68 slides, speaker notes, one demo (`demos/stack-trace.html`: step through the crash of 5.1 and watch the stack and the stack trace build up) and `live/` with the project and a solved version.
- Twelve live slides in total; slide 63 (the headless browser) is optional. Every live moment runs on `live/scorebord2`: nothing counts on material of the lecturer's own. Slide 3 used to be a live moment for the lecturer's own project of the past week; it is a plain recap of the way of working of module 4 now, and the notes of slide 63 no longer ask to show a browser tool of the lecturer's own agent harness.
- Five slides were added on 27 November, all in 5.1: slide 15 (four kinds of bugs where a message is not enough), slide 16 (the debugger, a screenshot with four numbered parts), slide 17 (the four buttons), slide 18 (live: a debug session in Chrome on the crash of Emma, with a screenshot as the fallback) and slide 21 (the tip on error tracking). The speaker notes and `live/README.md` were renumbered. Slide 11 has one more line (there are more types, such as `RangeError`), slide 38 says why `console.log` is the measuring tool, and slide 41 was rewritten ("Wat kan er dan misgaan?").
- Block 1 is still 60 minutes: the start is 6 minutes (slide 3 is a recap of one minute), 5.1 is 32 minutes, and 5.2 is 22 minutes, because the lecturer types only the first call on slide 27 and clicks through the rest of the table. It is the tightest block; the notes say what to cut.
- Five "Jouw beurt" moments (10, 13, 15, 14 and 14 minutes) and 3 minutes to hand in. Blocks: 5.1 and 5.2 with E1 and M1; 5.3 with M2, 5.4 and 5.5; M3, 5.6 with M4.
- The lecturer needs two working copies of `live/scorebord2`: one for the story of 5.1 to 5.5, and a fresh one for 5.6, where `getHighest` must still have its bug so the regression test fails first. `live/README.md` says so.
- The deck switches off font ligatures for code in its own `<style>`, like module 4, and adds one rule of its own (`ol.tight`). The shared styles in `lessen/shared` are unchanged.
- Slide 20 ("Wat leest een agent zelf?") was added in an earlier round. The optional live moment "a breakpoint as a measuring tool" (after slide 38) is still in the notes and in `live/README.md`.
- The screenshots on slides 16 and 18 are 1290 and 1240 pixels wide on the stage, so the text in them is about 19 pixels high: smaller than the 26 pixels the style guide asks for content. The numbered labels next to the picture carry the content, and the lecturer shows the real tool, zoomed in.
- The fill-in file has 19 exercises and an answer field for every step that asks for a note. It was generated from the module 4 file.

## Review of 27 November

Three independent reviews were run on the text, the exercises and the lecture material after the changes of that day. Each reviewer redid the work: every output block of the text, every command of every exercise, and every live step of `live/README.md`, in copies outside the repo. What they found and what was changed:

- Text: "De console is leeg" was wrong, because `main.js` has a leftover `console.log` (the code smell of 5.4). The text and the slides now say that the console shows no error message. The table of harder bugs no longer repeats the case of Emma, and says that a bug that is not there every time can also depend on the input. The paragraph on `console.log` in 5.3 no longer says that an agent reads "the terminal": it reads the output of a command it runs itself. Model and agent are separated in "Een agent als denkpartner". Three quiz feedbacks were corrected.
- Exercises: no step gave a wrong result. X8 and the text of 5.5 now say to remove the old names from the `import` before removing the functions (the project does not start otherwise). X3 no longer asks to explain a fault the student has just fixed. X4 says that "Hoogste totaal: 9" stays. X12 names a folder and the fault to test on. X11 no longer asks to "put back" a change. The fill-in file has prompt fields for X8, X9, X10 and X12.
- Lecture: "Before class" now rehearses in a third copy, because a prompt tried in a working copy changes the code the live moment needs. The notes define "LIVE", slide 35 is marked as a live edit, and the edit of slide 42 is marked as required. Slide 15 has fewer words. The step counts of slides 3 and 21 were corrected.
- Not changed, and worth knowing: 5.1 is the longest section by far (about 2800 words). The page says "core-reeks" and "(@home)", the fill-in file "Kernreeks" and "Thuis", as in earlier modules. Only E1 links to "Voor je begint"; the other exercises name their folder and rely on the intro of the page. In `scorebord2-m2`, `node test.js` already shows one failing test, so an agent that runs the tests finds the cause of M2 at once.

## Sources checked

Checked on 27 November 2026, for the info box on error tracking and for the names of the buttons:

- Sentry: the SDK reports uncaught errors automatically and groups them into issues (docs.sentry.io/platforms/javascript/usage, docs.sentry.io/product/issues). The free plan is called Developer (sentry.io/pricing). Sentry has an MCP server for agents (mcp.sentry.dev). The text does not call Sentry open source: its licence is the Functional Source License.
- Rollbar (rollbar.com) and Firebase Crashlytics (firebase.google.com/docs/crashlytics: Apple platforms, Android, Flutter and Unity). BugSnag was left out: SmartBear sells it under two names (BugSnag and Insight Hub), and the sources disagree on which one is current.
- Personal data in error reports: docs.sentry.io/platforms/javascript/data-management/data-collected.
- Chrome DevTools: "Resume script execution" F8, "Step over next function call" F10, "Step into next function call" F11, "Step out of current function" Shift+F11, "Pause on uncaught exceptions" (developer.chrome.com/docs/devtools/javascript/reference).
- Visual Studio Code: the command "Debug: JavaScript Debug Terminal" (the name in VS Code 1.141; the documentation calls it "Debug: Create JavaScript Debug Terminal"), and Continue F5, Step Over F10, Step Into F11, Step Out Shift+F11 (code.visualstudio.com/docs/nodejs/nodejs-debugging).

## Open questions

- The prompts of the text and of M1 to M4 were not tested against a real model. The project, the checks, the test lines and all outputs were tested.
- `browser-check.js` looks for Chrome or Edge in the usual places on Windows, macOS and Linux. It was only run on Windows. On a Mac without Chrome or Edge it prints that it needs one of the two.
- X11 step 8 asks the agent harness to open the page itself. What happens depends on the agent harness and on its extensions; the exercise says that every outcome is fine.
- The info box of 5.6 says that some agent harnesses can drive a browser, often with an extension. It names no product on purpose.
- Module 6 still starts from "tests schrijft bijna niemand graag" and introduces assertions with `node:assert` and an arrow function. After this module the students already know what a test is. Module 6 has not been revised yet.
- The module title still says "met AI", like modules 6 and 8. Changing it would change the title of the Canvas page and the last slide of module 4.
- The time to hand in at the end of the lecture is 3 minutes, against 9 in module 4. The five exercises take 66 minutes.
- X14 was run in Chrome only. Edge has the same DevTools. Firefox has a debugger too, but its tabs and buttons have other names, so the exercise asks for Chrome or Edge. The name "Bronnen" for the tab Sources in a Dutch browser was not checked.
- X13 depends on the agent harness running a command. Step 5 says what to do when it does not.
- The debugger of Visual Studio Code is explained in a short paragraph in 5.1 (a red dot, a JavaScript Debug Terminal, the command). The steps come from the documentation of VS Code and were not run on the machine that built the module. The debug session in Chrome was run step by step.
- 5.1 is long now: it carries error messages, stack traces, the debugger, what an agent reads and "the message gone is not the bug gone". If it proves too much for one section in class, the debugger is the part that can move to the programming course.
- Module 4 has the same kind of slide 3 that module 5 had ("have your own scene from the previous lecture ready"). It was not changed.
- The fill-in file was not opened in Word on the machine that built it.
- The live moments with an agent were not run against a real agent. Every one has a fallback by hand in `live/README.md`.
