# Module 5: speaker notes

Notes for the lecturer. Slides: [slides.html](slides.html). Slide numbers match the counter at the bottom right of each slide.

The idea of this lecture: in module 4 students took over a project that worked. Today that project breaks. A colleague added a second round to the scoreboard in a hurry, and since then the page crashes, a number is wrong and the panel shows `NaN`. Students learn a fixed way to deal with that: read the error message, make the bug happen on command, test one possible cause at a time, clean up the code without changing what it does, and write a test so the bug cannot come back unnoticed.

**The tone about AI.** An agent is a strong help at every one of these steps, and the lecture says so plainly: it reads an error message fast, proposes causes, finds code smells, refactors well and can run the tests itself. The lecture is about what you give it (the full message, expected and actual behaviour, a minimal example, a test) and what you check afterwards. Do not present the agent as the thing that gets it wrong: present the checks as part of the job, for a human colleague's work too.

Everything runs on one project, version 2 of the scoreboard of module 4. The quiz has two rounds now: every player has a list `rounds`, a new file `panel.js` makes the text of the panel, and `stats.js` got more calculations. It has deliberate weak spots, and each one carries a section:

| Weak spot | Where | Used in |
|---|---|---|
| `getTotal` assumes every player has a list `rounds` with two scores | `stats.js` | 5.1 (a player in the old format crashes the page) and 5.3 (a missing score gives `NaN`) |
| `getHighest` sorts with `sort()`, so as text | `stats.js` | 5.2 and 5.6. The panel says "Hoogste totaal: 9" from the first minute |
| `getLowest` starts at 20 | `stats.js` | exercises M1 and M4 |
| `getRound1Scores` and `getRound2Scores` are copies | `stats.js` | 5.4 and 5.5 |
| Three times `Math.round(... * 10) / 10`, the dead function `top`, a leftover `console.log` | `panel.js`, `stats.js`, `main.js` | 5.4, exercise M3 |
| The tests pass although `getHighest` and `getLowest` are wrong | `test.js` | 5.6, exercise M4 |

**The level of the JavaScript.** The students started programming about three months ago. The project uses what they know: functions, `for` loops, `if`, lists and objects. No arrow functions, `map` or `? :` in the files they read. New today, and explained on the slides: the types of error messages (slide 11), a stack trace (slide 12), the debugger of the browser (slides 16 to 18), `sort()` without an argument (slides 28 and 29, as the bug), and the function `check(name, actual, expected)` in `test.js` (slide 58). `server.js`, `browser-check.js` and the helper `check` at the top of `test.js` are files they run, not read.

The lecture is hands-on: 66 minutes of student work in five "Jouw beurt" moments, plus 3 minutes to hand in. Explanation is short on purpose. If you run out of time, cut explanation, not exercises.

**The examples on the slides are not the exercises.** The text and the slides work out one case per section; the exercise uses a different case on the same project.

| Section | On the slides and in the text | In the exercise |
|---|---|---|
| 5.1 | Emma in the old format: a TypeError in `getTotal`, the cause in `data.js` | E1: an id in `index.html` that is spelled differently than in `main.js` |
| 5.2 | "Hoogste totaal: 9": `sort()` sorts as text | M1: "Laagste totaal: 20" with the scores of another night |
| 5.3 | Fatima missed a round: `NaN` in four places | M2: the average of round 2 equals that of round 1 |
| 5.4 and 5.5 | The two round functions become one | M3: one function for the rounding in `panel.js`, and removing `top` by hand |
| 5.6 | A regression test for `getHighest` | M4: a regression test for `getLowest`, the bug of M1 |

The exercises on the slides are the same as on the Canvas page **Oefeningen module 5**. Students write their answers in the fill-in file during class and hand in only that file. Every exercise is individual work, and there is no debrief or comparing afterwards: when the timer ends, you move on.

Students never undo a change. Every exercise has its own folder (`scorebord2-e1`, `-m1`, `-m2`, `-m3`, `-m4`), each with the full project. "Hoogste totaal: 9" is in every folder and they never have to fix it in class: say that once, on slide 25.

Prompts per exercise: E1 none, M1 one, M2 two, M3 two, M4 two.

**What "LIVE" means in these notes.** A slide marked LIVE is a moment where you do something on your own screen, in your working copy of the project, while the room watches. The exact clicks, edits, commands and the output you should get are in `live/README.md`, under the number of the slide. The slide itself shows the result, so you can go on if something fails. There are three kinds: you change a file or type a command (slides 9, 18, 27, 30, 35, 38 and 61), you send a prompt to your agent harness (slides 19, 47, 51 and 62; slide 63 is optional), and on slide 5 the students do a setup on their own laptop. One more edit is needed on a slide that is not marked LIVE: on slide 42 you change the line of Fatima to `rounds: [12, 0]`.

## Before class

1. Students need: Visual Studio Code with GitHub Copilot, a browser with an internet connection, **Node.js** for every exercise, the fill-in file, and the starter files. Put the assignment in Canvas before class: the text of `opdrachten/module-5/opdracht-module-5.html` as the description, with the files `oefeningen-module-5-invulbestand.docx` and `startbestanden-module-5.zip` from the same folder.
2. Open `slides.html` in Chrome. **F** for fullscreen, **T** for the clock.
3. Copy `lessen/module-5/live/` to a working folder outside the repo, and copy `scorebord2` once more as `scorebord2-tests`. Open your working copy of `scorebord2` in VS Code with your agent harness ready, type `node server.js` and open `http://localhost:3000` in Chrome with the console open. See `live/README.md` for every live step, with the exact edits and the expected output.
4. Check that nothing else uses port 3000. Otherwise: `node server.js 3001`.
5. Rehearse in a third copy, so your two working copies stay as they are. Copy `scorebord2` once more as `scorebord2-probeer` and open that folder. In it:
   - make the edit of slide 9 (the line of Emma), start the server and do the debug session of slide 18 in Chrome, with the steps in `live/README.md`. It takes three minutes, and you then know where the buttons are. Zoom the DevTools in (click in them and press Ctrl and +) so the room can read them;
   - send the prompt of slide 19, then put Emma back and send the prompts of slides 47, 51 and 62, so you know what your agent answers and whether it runs `node test.js` by itself;
   - optional, for slide 63: with the server running, type `node browser-check.js` in a second terminal.
6. Delete `scorebord2-probeer`, stop its server, and open your working copy `scorebord2` again as in step 3. In the DevTools of Chrome, check that no breakpoint is left (no blue line number) and that **Pause on uncaught exceptions** is not ticked.

Everything you show live is in `live/`: you do not have to bring a project or an example of your own.

Every exercise slide has a countdown. Click "Start de timer". Walk around while they work.

## Timing

| Clock | Block | Slides | Content | Student work |
|---|---|---|---|---|
| 0:00 – 0:06 | 1 | 1 – 6 | Recap of module 4, setup check (live), today | |
| 0:06 – 0:38 | 1 | 7 – 23 | 5.1 Error messages, stack traces and the debugger (live, demo) | E1 · 10 min |
| 0:38 – 1:00 | 1 | 24 – 32 | 5.2 Reproduce, minimal example (live) | M1 · 13 min |
| 1:00 – 1:15 | | 33 | **Break** | |
| 1:15 – 1:44 | 2 | 34 – 43 | 5.3 Debugging with hypotheses (live) | M2 · 15 min |
| 1:44 – 1:53 | 2 | 44 – 48 | 5.4 Code smells (live) | |
| 1:53 – 2:00 | 2 | 49 – 53 | 5.5 Refactoring (live) | |
| 2:00 – 2:15 | | 54 | **Break** | |
| 2:15 – 2:29 | 3 | 55 | Exercise on 5.4 and 5.5 | M3 · 14 min |
| 2:29 – 2:41 | 3 | 56 – 63 | 5.6 Regressions and tests (live) | |
| 2:41 – 2:55 | 3 | 64 | Exercise on 5.6 | M4 · 14 min |
| 2:55 – 3:00 | 3 | 65 – 68 | Hand in, recap, what to do next | 3 min |

Block 1 is 6 + 32 + 22 = 60 minutes, block 2 is 29 + 9 + 7 = 45 minutes, block 3 is 14 + 12 + 14 + 5 = 45 minutes.

Block 1 has no slack. Section 5.1 got five slides more (15 to 18 and 21), and the 22 minutes for its slides only work with this plan: slide 11 in half a minute, the first preset of the demo on slide 13 only, the debug session of slide 18 in four minutes, no optional live moment on slides 20 and 22, and **slide 21 only if you reach it before 0:26**. Otherwise click past it: it is an info box in the course text. In 5.2 you type only the first call on slide 27 and click through the rest of the table.

**If you run late**, cut in this order: slide 21 (the tip, it is in the course text), the live part of slide 22 (show the slide only), slide 11 (say it in one sentence on slide 10), slide 15 (say its last sentence on slide 14), the second preset of the demo on slide 13, the stepping on slide 18 (do only "Pause on uncaught exceptions"), the prompt on slide 29, slide 42 (say it while slide 41 is up, and still change Fatima to `rounds: [12, 0]` in `data.js`: slides 51 and 57 count on it), slide 53 (it is in the course text), slide 63 (it is optional), slide 59's last step. Do not cut slide 30: the live moments of 5.3 count on the fixed `getHighest`. Do not shorten the exercises. **If you have time left**, see "Extras".

---

## Block 1 (60 min)

### Start · slides 1 – 6 · 6 min

**1 · Title.**

**2 · Wat weet je nog?** *(3 steps)*
- Ask each question to the room before you reveal the answer.
- All three come back today: look yourself first (the map of module 4 tells you where to look when something breaks), suggestions are no decisions (a fix proposed by an agent is one too), and expected and actual behaviour (the start of every bug description).

**3 · Zo werk je verder aan een project.** *(6 steps: three boxes, each after its arrow, and the last line; about 1 min)*
- A recap, not a live moment: you show nothing of your own here. The four steps are the way of working of module 4: look yourself, ask for an explanation of one thing, one change, check before and after.
- Click through the four steps and say one sentence for each.
- Last step: today adds a question to this loop. What do you do when it breaks?

**4 · Vorige week werkte het project. Vandaag gaat het stuk.** *(1 step)*
- A bug in code and finding and fixing it: bug and debugging. Everyone writes bugs, also an agent, also your lecturer.
- Reveal: an agent helps at every step today. You decide what it gets, and you check. That is the thread of the lecture.

**5 · LIVE: staat alles klaar?** *(5 steps; about 2 min)*
- The students do these four steps on their own laptop. You open nothing new: your VS Code stays on your working copy `scorebord2`, with the server running. Show only two things on your screen as an example: the chat of your agent harness with the model picker, and `node --version` in your second terminal, which prints a version number such as `v22.11.0`.
- Students follow along. Eleven folders in the zip: five for the core exercises, the rest for the extra series. Every exercise has its own folder, so nobody has to undo anything.
- They open `scorebord2-e1` and type `node --version`. Who gets an error installs the LTS version from nodejs.org now.
- Last step: they do not start the project yet. That is step 1 of E1, and what they see then is the exercise.

**6 · Drie blokken, twee pauzes.** Thirty seconds. Block 1: read errors. Block 2: search and clean up. Block 3: guard with tests.

### 5.1 Foutmeldingen en stack traces lezen · slides 7 – 23 · 32 min

Slides 7 to 22 in about 22 minutes, with your working copy of `scorebord2` next to the slides. Then 10 minutes for E1.

**7 · Section.** The page is empty, and the console shows red text.

**8 · Het scorebord heeft een versie 2.** *(3 steps)*
- The same scoreboard, with two rounds. A tower shows the total of the two rounds, and a player passes with at least 20 points.
- Three changes: `data.js` has a list `rounds` per player, `stats.js` has more calculations, and `panel.js` is a new file that makes the text of the panel. Their map of module 4 still works.
- Do not point at "Hoogste totaal: 9" in the picture yet. If a student sees it: "Good. Hold that thought until the next section."

**9 · LIVE: de pagina crasht.** *(2 steps; about 2 min)*
- The organiser of the quiz corrects a score after the evening, the way version 1 wanted it: `{ name: 'Emma', score: 24 }`. Do it live in `data.js`, save, reload.
- No numbers, no names, no towers. Open the console. The slide shows the message as the fallback.
- Say: this is a lot of red English text, and almost everything you need is in it. You read it in a fixed order.

**10 · Een foutmelding heeft drie delen.** *(2 steps)*
- The type: which kind of error. The message: what went wrong. Read it slowly: the code wants to read place `0` of something, and that something is `undefined`. The place: file, line and column.
- Open line 8 of `stats.js` in your working copy: `player.rounds[0]`. So `player.rounds` is `undefined`: this player has no list `rounds`.

**11 · Drie types die je vaak ziet.** *(3 steps)*
- SyntaxError: the code is not valid, the program does not start. ReferenceError: a name that does not exist, often a typing mistake. TypeError: a value is of another kind than the code expects. The type tells you in which direction to look. *(Cut if late.)*
- Last step: there are more types. `RangeError` is one: a value is outside what is allowed. You see it as "Maximum call stack size exceeded" when a function keeps calling itself. You read every type the same way. The errors that are really hard are not hard because of their type: that is slide 15.
- X1 in the extra series lets them read four of these in the terminal.

**12 · De stack trace: wie riep wie aan?** *(4 steps)*
- The lines that start with `at`. Read from top to bottom: the top line is where the error happened, every line below it says who called the function above it.
- Read the five lines aloud as a chain: `getTotal`, called by `getTotals`, called by `getPanelLines`, called by `showPanel`, called by line 36 of `main.js`. The last line has no function name, because that line is not inside a function.
- In the browser you can click a file name. In the terminal (`node check.js`) the same message has long paths and lines with `node:internal`: code of Node.js itself. Skip those, and skip lines from a library. Look for the first line from a file of your own.

**13 · DEMO: zo ontstaat een stack trace.** *(about 2 min)*
The demo runs inside the slide. It is simplified: it shows only the way to `getTotal`, and says so in its header.
1. It starts on the preset **Emma zonder rounds**, with only `main.js` on the stack. Click **Volgende stap** three times: `showPanel`, `getPanelLines` and `getTotals` come on top. A function that calls another one waits; the one called last lies on top.
2. Click again: `getTotal` comes on top for Amira. Click: it returns 31 and leaves the stack.
3. Click: Emma. Her `rounds` is `undefined`. Click: the TypeError. The stack of this moment is printed in the console, top first. Ask: which line of the trace is which frame? Click a line in the console: its frame and its line of code light up.
4. Click once more: the script stops. Nothing after line 36 of `main.js` runs.
5. If you have a minute: the preset **Acht spelers, zoals je ze kreeg**. Ten steps, no error, and the stack empties again. No error, so no stack trace. *(Cut if late.)*

**14 · De plaats van de fout is niet altijd de oorzaak.** *(2 steps)*
- The sentence of this section. The error happened in `getTotal`, on line 8. Is that line wrong? No: it works for seven players. It got something wrong.
- Reveal: ask at every line of the trace "is this code wrong, or did it get something wrong?", and follow the value back. Here that ends in `data.js`, a file that is not in the stack trace at all.
- Reveal: why are the towers gone when the error is about the panel? After an error the script stops. An empty screen does not tell you where the bug is. The console does.

**15 · Niet elke fout is zo duidelijk.** *(4 steps; about 1 min)*
- The crash of Emma is a friendly one: a clear message, and a stack trace that leads you to the cause in a minute. Not every bug is like that. Four cases, one per click. Keep it short: you only name them.
- No error message, but a wrong result: nothing to read. That is "Hoogste totaal: 9" in 5.2 and the `NaN` in 5.3.
- A value went wrong long before the crash, in a very different part of the program. The stack trace only shows the way to the crash, not the moment the value went wrong. Slide 14 was a small and friendly case of this.
- Code that runs later: after a click, a timer or an answer from a server. The stack trace then often starts at that piece of code, and what led to it is not always in it.
- The bug is not there every time. Sometimes that is the input, as in 5.2. Sometimes it depends on which piece of code is ready first: that is a race condition. In JavaScript you get it with code that waits, for a timer or a server. In languages where several threads run at the same time, such as Java and C#, you also get it between threads. These are the hardest bugs to reproduce.
- Last step: then you look yourself at what the code does while it runs. The tool for that is a debugger.

**16 · Een debugger pauzeert je code.** *(3 steps; about 1 min)*
- A debugger is a tool that pauses your code on a line you choose, and shows you everything at that moment. Every browser has one: F12, tab **Sources**. The picture is the scoreboard, paused in `stats.js`.
- 1: a breakpoint. You click a line number, it turns blue, and the code pauses there before it runs that line. The line with the yellow background is where the code is now.
- 2: **Scope**: the values of the variables at this moment. Here: `player` is Amira, and `totals` is still empty. No `console.log` needed.
- 3: **Call Stack**: who called whom. Read it aloud: `getTotals`, called by `getPanelLines`, called by `showPanel`, called by line 36 of `main.js`. It is the stack trace of slide 12, while the code is still running.
- 4: the buttons to go on. They are the next slide. The picture shows six: you use the first four. The fifth (Step) and the sixth (Deactivate breakpoints) are not needed today.

**17 · Vier knoppen om verder te gaan.** *(4 steps; about 1 min)*
- The code stands still. Four buttons, from left to right in the browser.
- Resume (F8): run on, until the next breakpoint or the end.
- Step over (F10): run this line and pause on the next one. If the line calls a function, that function runs completely: you do not go into it.
- Step into (F11): go into the function this line calls, and pause on its first line.
- Step out (Shift+F11): run the rest of the function you are in, and pause where it was called.
- Last step: Visual Studio Code has a debugger with almost the same buttons (Resume is called Continue there, F5). You use it for code that runs in Node.js, such as `node check.js`. You show the browser today; the course text says how to start the debugger in VS Code.

**18 · LIVE: de debugger stopt waar het misloopt.** *(4 steps; about 3 min)*
The fault of slide 9 is still in: Emma has `score: 24`, and the red message is in the console. Do the session in Chrome, with the exact clicks in `live/README.md`. The slide is the fallback: the four steps, and a picture of the last one.
1. In the console, click `stats.js:8:23` in the red message. The tab **Sources** opens on that line. Click the line number 15: a breakpoint. Reload. The page pauses on line 15, for the first player. Point at **Scope**: `player` is Amira. Point at **Call Stack**: four lines.
2. **Step into** (F11): you are in `getTotal`, on line 8, and the Call Stack has a fifth line on top. **Step out** (Shift+F11): back on line 15. **Step over** (F10) twice: the loop goes to the next player. `player` is Jonas now, and `totals` holds 31.
3. Emma is the eighth player: stepping to her takes long. Let the debugger find the place: click the line number 15 again to remove the breakpoint, and tick **Pause on uncaught exceptions** under **Breakpoints** (click the triangle in front of **Breakpoints** if that part is closed).
4. **Resume** (F8). The page pauses on line 8, with "Paused on exception". Next to line 7 it says `player = {name: 'Emma', score: 24}`: this player has no `rounds`. You see the cause of slide 14 with your own eyes, and the Call Stack shows the five lines of the stack trace.
- Say: an error message tells you where the code stopped. A debugger shows you what the values were at that moment.
- Afterwards: untick **Pause on uncaught exceptions** and click Resume. Leave the fault of Emma in until slide 22.
- If the DevTools look different or you lose your way: show the picture on the slide and move on. X14 in the extra series lets students do a session like this themselves, on another bug.

**19 · LIVE: geef een agent de volledige melding.** *(3 steps; about 2 min)*
- A message with a stack trace is strong context for a model: the type, the place and the way are in it. Send the prompt in your working copy and read the answer with the room.
- The three chips: the full message, not only the first line; what you changed last, often the best clue; and an explanation first, without a change.
- Check the answer against what you read yourselves: do the files and lines exist, and does it name both the place and the cause?
- Fallback: see `live/README.md`.

**20 · Wat leest een agent zelf?** *(3 steps; about 1 min)*
- An agent does not see your screen. The model reads only what comes into its context. Three places where an error message can be: the output of a command the agent ran itself (it reads that), a terminal in which you typed a command (do not count on it: paste the output, or let the agent run the command), and the console of the browser (it does not read that: copy and paste).
- Reveal the callout. Point at your own terminal with `node server.js`: three lines, no error. The server only hands files to the browser. The code runs in the browser, so the crash is in the console of the browser. `node check.js` runs the calculations in Node.js: there the same error appears in the terminal, where an agent can read it itself.
- If you have a minute, show it: new chat, "Verander niets aan de code. Voer node check.js uit en lees de foutmelding. Leg uit wat ze zegt." Read the command aloud before you approve it. X13 in the extra series is this as an exercise.
- The same holds for other projects, for example one you start with `npm run dev`: an error of the command itself is in the terminal, an error of the code in the browser is in the console of the browser. *(Cut if late: say the first sentence while slide 19 is up.)*

**21 · De console van je gebruikers zie je niet.** *(4 steps; about 1 min; only if you are on schedule)*
- A tip for later, not for an exercise. Slide 20 said: an agent does not see your screen. The same holds for you and your users. When an app crashes in the browser or on the phone of a user, the stack trace is there, and you do not see it.
- Reveal: what you get is "it does not work". You saw in this section how much a stack trace tells you, and the next section is about reproducing: both are hard without the message.
- Reveal the term: error tracking. You add a small library of such a service to your app. It catches every error that nothing else handles, and sends the message and the stack trace to a dashboard, often with the browser and the version of your app. The same error from a hundred users becomes one line with a count.
- Three names, so they can look them up: Sentry is the best known and has a free plan. Rollbar does the same. Firebase Crashlytics is for mobile apps. You do not have to explain how to install them.
- For the theme of this course: such a stack trace from a real user is exactly the context of slide 19, so you can give it to an agent. Sentry also has an MCP server with which an agent can look up errors itself.
- Last step: such a report can contain personal data, for example an address in the URL or what a user typed. That is module 7. *(Cut if late: it is an info box in the course text.)*

**22 · De melding weg is niet de fout weg.** *(2 steps)*
- You can also ask "fix this error". Then look at where the fix lands. The slide shows a fix at the place of the error: a check in `getTotal` that returns 0.
- Reveal the output: the same error, in another function. The cause, the line of Emma, is still there. Add such a check everywhere and all messages disappear: Emma then has 0 points, the average is too low, and nothing warns you any more.
- Reveal the callout. Say the nuance out loud: such a check is not always wrong. If the agreement is that a player without scores gets 0 points, it is right. But that is a rule of the quiz, and you decide it with the organiser.
- Optional: do it live, about a minute (see `live/README.md`). In every case: **put Emma back** to `rounds: [9, 15]` in your working copy now, and reload.

**23 · JOUW BEURT E1 · 10 min.** Alone, without AI.
- Another crash than on the slides. In `scorebord2-e1` the list in `index.html` has `id="playerlist"`, and `main.js` asks for `playerList`. They see a white page: the panel shows the seven numbers, but no names, and there are no towers.
- The message: `TypeError: Cannot read properties of null (reading 'appendChild')`, at `fillList (main.js:27:10)`, at `showPanel (main.js:33:3)`, at `main.js:36:1`.
- What to watch for: students who read only the first line. Point at the second line of the trace: `fillList` is called twice in `showPanel`, on lines 32 and 33, and the trace says line 33, the call for `playerList`.
- Step 6 on the exercise page gives the help they need about `getElementById`: it gives `null` when no element has that id. The fix is one character in `index.html`.
- Students who are stuck on "why are the towers gone": it is slide 14, the script stopped.
- When the timer ends, move on.

### 5.2 Een fout reproduceren: het minimal example · slides 24 – 32 · 22 min

Slides 24 to 31 in about 9 minutes. Then 13 minutes for M1.

**24 · Section.** Highest total: 9. Noor has 34 points.

**25 · Geen foutmelding. Toch klopt het niet.** *(3 steps)*
- The picture of slide 8, and the browser tab with your working copy. The panel says the highest total is 9. Noor has 34, and her tower is the highest. The console shows no error message, only the grey line that starts with `winner`.
- Ask who had seen it. This bug is in every folder they open today, and they never have to fix it in an exercise.
- Reveal: do not look for a cause yet. First make sure you can make the bug happen.

**26 · Eerst reproduceren.** *(4 steps)*
- Reproduce: make the bug happen on command. The same steps and the same input give the same bug every time. Two reasons: you can search, because every test gives an answer you can trust, and you can prove that the bug is gone.
- Reveal the output of `node check.js`, or type it. The bug is there too. That already tells you something: it is not in the browser and not in the 3D scene. And you can now trigger it with one command.
- Last step: the colleague says "it worked on my machine". He tested with other scores. The same code with other data gives another result, so the bug depends on the input.

**27 · LIVE: maak het kleiner.** *(4 steps; about 2 min)*
- Step 1, from the project to one function. In `panel.js` the number comes from `getHighest(totals)`. Call only that function in `repro.js`, with the eight totals: 9. The browser, `panel.js` and `data.js` are no longer needed.
- Step 2, a smaller input. Halve the list and look in which half the bug is. Ask the room for a prediction before every row: `[31, 19, 34, 20]` gives 34, `[25, 9, 33, 24]` gives 9, `[25, 9]` gives 9, `[25]` gives 25. Two numbers are enough.
- Type the first call in `repro.js` and run it: 9. For the four smaller lists, click through the table on the slide and ask for the prediction; you do not have to type every one. If you have time, type them.

**28 · Van de function naar één regel.** *(2 steps)*
- Now read the function: it sorts the list and returns the last number. Test the sorting alone: `[25, 9].sort()` leaves 9 after 25.
- Reveal the term: a minimal example is the smallest piece of code that still shows the bug. One line, without the project.

**29 · Vraag uitleg met je minimal example.** *(4 steps)*
- For a model this is small and precise context: it does not have to search, and it cannot mistake another part of your code for the problem.
- Reveal the answer a model typically gives: `sort()` without an argument compares the values as text. That is a claim, and you test a claim, as in module 3.
- Ask the room to predict `[100, 25, 9].sort()` before you reveal the output. It stays in that order. Now they also understand why the colleague saw nothing: numbers of two digits sort the same as text and as numbers.
- Mention: an agent can also do the reducing itself, it has a terminal. Then you run its example yourself and check that it shows the same bug.

**30 · LIVE: de oplossing: een loop.** *(2 steps; about 1 min)*
- Two fixes exist: give `sort` a rule that compares numbers, or look for the highest number with a loop. You choose with the criteria of module 4. Everyone in the team can read the loop, and `sort` changes the list itself, which the agreements in `AGENTS.md` forbid for a function in `stats.js`.
- Paste the function in `stats.js` of your working copy (it is in `live/README.md`), or let your agent write it. Reveal the check: the minimal example now gives 25, and `node check.js` says "Hoogste totaal: 34".
- Do not skip this in your working copy: section 5.3 counts on it.

**31 · Kan je een fout tonen in een paar regels, dan is het zoeken bijna gedaan.** *(1 step)*
- The sentence of this section. Three things you win: you see the bug without the code around it, you can share it with a colleague or a model, and you have a check for later. That check becomes a test in 5.6.

**32 · JOUW BEURT M1 · 13 min.** Alone, with Copilot. At most one prompt.
- Another bug than on the slides, in `scorebord2-m1`, with the scores of another night and other players. The panel says "Laagste totaal: 20", and nobody has 20: the lowest total in the list is 21, of Daan.
- They reproduce with `node check.js`, find the function in `panel.js` (`getLowest`), paste the two lines of the exercise page in `repro.js` and make the list smaller. The table: `[27, 35, 23, 31]`, `[27, 35]` and `[27]` give 20; `[27, 15]` and `[15]` give 15.
- Only then they read `getLowest`: `let lowest = 20;`. The line assumes that a total is at most 20, which was true for one round.
- The one prompt gives the minimal example and asks for the cause, without a change. They do **not** fix the bug: that is M4, with a test. They need their minimal example there, and it is in their fill-in file.
- What to watch for: students who read the function first and skip the table. The table is the skill. And students who get "Cannot use import statement": the terminal is in the wrong folder.
- When the timer ends, move on.

**33 · Pauze · 15 min.** Click "Start de timer".

---

## Block 2 (45 min)

### 5.3 Debuggen met hypothesen · slides 34 – 43 · 29 min

Slides 34 to 42 in about 14 minutes. Then 15 minutes for M2.

**34 · Section.** No error message in the console. Still four things are wrong.

**35 · LIVE: één score ontbreekt.** *(4 steps; about 1 min)*
- A week later Fatima is ill during round 2, and the organiser fills in only her score of round 1: `rounds: [12]`. Do it live in `data.js`, save, reload.
- Let the room find what is wrong before you reveal the list: two times `NaN` in the panel, "Fatima: NaN" in the list, and a flat tower. `NaN` means not a number; they saw it in module 4.
- No error message this time. Compare with 5.1: there the data had the wrong shape and the code crashed, here a value is missing and the code goes on.

**36 · Gokken of testen.** *(2 steps)*
- Trial and error: you change something and look if the bug is gone. Sometimes it is. You do not know why, and you do not know if it comes back.
- With hypotheses you look for the cause first. A hypothesis is a possible cause that you can test. After every test you know more, also when you were wrong.

**37 · Vier stappen.** *(3 steps)*
- Observe: write down everything that is wrong. Hypothesis: "I think the cause is this." Predict and test: measure one thing. Decide: right or not?
- It is "predict, change and look" of module 3, now used on a bug.

**38 · LIVE: console.log is je meetinstrument.** *(6 steps; about 4 min)*
Do the three measurements in `panel.js` of your working copy, see `live/README.md`. Ask the room for the prediction each time before you reveal the result.
- Start with the sentence under the title: why `console.log`, when you just showed a debugger? Because its output is text. You can paste it in a prompt, and an agent that runs `node check.js` itself reads it too. An agent that looks for a bug often works this way: it adds a `console.log`, runs the code, and reads the output. A debugger shows the same values on your screen, where an agent does not read them by itself. So you learn both, and you measure with `console.log` today.
1. Hypothesis 1: `calculateAverage` calculates wrong, because the word "Gemiddelde" is in both wrong lines. Measure `calculateAverage([10, 20])`: 15. The function is fine, so it got something wrong. And the hypothesis did not explain "Fatima: NaN" either: a good hypothesis explains everything you see.
2. Hypothesis 2: the total of Fatima is `NaN`. Measure `totals`: `NaN` in fifth place. A sum with `NaN` in it is `NaN`, and a tower with height `NaN` does not grow.
3. Hypothesis 3: `getTotal` adds a score that does not exist. Look in `data.js`: `[12]`. `12 + undefined` is `NaN`. That also explains the average of round 2.
- Last step: remove your `console.log` when you are done. A measurement that stays behind becomes one of the code smells of 5.4.
- If you have two minutes: do the second measurement once more with a breakpoint, see "A breakpoint, live" under Extras.

**39 · Zoek waar een foute waarde ontstaat, niet waar je ze ziet.** *(1 step)*
- One cause, four consequences. The missing score ends up in two calculations and shows in four places. The cause is an assumption, the word of module 4: the code assumes that every player has two scores.

**40 · Een agent als denkpartner.** *(2 steps)*
- A model is strong at thinking of possible causes: it reads all the files fast. Ask for causes and a test first, not for a fix. The prompt gives expected and actual behaviour and what you changed last.
- Reveal left: you test the hypotheses, with one measurement each. Reveal right: you can also let the agent measure itself, it can run `node check.js`. Then ask it to show its steps: hypothesis, measurement, result. That way you can follow and check what it did.
- Optional: send the prompt live.

**41 · Wat kan er dan misgaan?** *(3 steps)*
- The situation: you do not know the cause yet, and you send "fix it" anyway. Three things can happen, one per card.
- Too many changes: the agent changes three things at once and the bug is gone. You do not know which change helped, and maybe code that was right has changed too.
- The model chooses a rule: how many points does a player get for a missed round? 0 points, or does the player not count for the average? Nothing in the code says so. It is a rule of the quiz, so the organiser decides, and you put it in your prompt. The organiser says: 0 points. It goes into `README.md`, and slide 42 uses it.
- Keep trying: the first fix does not work, so you send "still wrong", and again. After two failed attempts, start a new chat and say what you know by now.
- Last step, the rule of this section: look for the cause first, then ask for one change. One hypothesis, one change.

**42 · Controleer alles wat niet klopte.** *(3 steps)*
- Suppose the fix lands in `getTotal` only: the function adds whatever scores are in `rounds`. The average total is a number again, and "Gemiddelde ronde 2" is still `NaN`, because another function reads the score of round 2 too.
- Who only looks at the first number thinks it is done. After a fix, walk through your whole list of step 1.
- Here the simplest fix is one line in `data.js`: `rounds: [12, 0]`. **Make that change in your working copy now and leave it**, also when you skip this slide: the outputs on slides 51 and 57 count on it. *(Cut if late: say it on slide 41.)*

**43 · JOUW BEURT M2 · 15 min.** Alone, with Copilot. At most two prompts.
- Another bug than on the slides. In `scorebord2-m2` the panel says "Gemiddelde ronde 1: 11.5" and "Gemiddelde ronde 2: 11.5". They work out round 2 themselves from `data.js`: 103 divided by 8 is 12.875, so 12.9.
- Two hypotheses of their own, without AI, then one measurement with one `console.log` in `panel.js`. Prompt 1 asks for three possible causes with a test each, and changes nothing. Prompt 2 asks for the fix, and nothing else.
- The cause: `getRound2Scores` in `stats.js` reads `player.rounds[0]`. It was copied from the function above it, and the index was not changed. The last question of the exercise lets them see that, and it is the bridge to 5.4.
- What to watch for: students who send "fix it" as prompt 1. Send them back to step 3. Students who forget to remove their `console.log`: step 8 asks for it. And the line "Hoogste totaal: 9" stays: it is on the timer box.
- When the timer ends, move on.

### 5.4 Code smells herkennen · slides 44 – 48 · 9 min

**44 · Section.** The scoreboard works. Is the code good then?

**45 · Twee functions, één teken verschil.** *(1 step)*
- Both work correctly. Still something is off: they are equal except for one character. A third round means a third copy, and a change has to be made in two places. Who did M2 has just seen what that leads to.
- Reveal the term: a code smell is a pattern that points at a possible problem with the quality, while the code works. Not a bug, a signal.

**46 · Vijf code smells in het scorebord.** *(5 steps)*
- Duplication: the two functions, and three times the same rounding in `panel.js`. Magic number: the 10 in that rounding; twice the number 10 means "one decimal", and nothing says so. Dead code: the function `top` from version 1, which no file calls any more; it even reads `score`, which no longer exists. Unclear names: `a` and `x` in that function. Debug code that stayed: the `console.log` in `main.js`; show it in your console.
- Last step: two more that are common, a long function and deeply nested conditions.
- Say: you do not fix every code smell. Fixing one is a change, and every change can break something. `+ 0.8` in `createDiamond` is a magic number in code that works and that nobody touches: leave it.

**47 · LIVE: laat een agent code smells zoeken.** *(3 steps; about 2 min)*
- A question of the kind "evaluate": say that nothing may change, and ask for a fixed form. Send the prompt in your working copy.
- A model does this well: duplicated code, a function nobody calls and a number without a name are patterns in the code itself. What is not in the code, it cannot know: which part you will change next week, what the team finds readable, how much time there is.
- Judge two smells of the answer with the three questions of module 4. For `top`: search for `top(` with Ctrl+Shift+F, and find only the function itself.

**48 · Een code smell is een signaal, geen opdracht.** *(1 step)*
- The agent finds the signals. You decide which ones you act on.

### 5.5 Refactoring · slides 49 – 53 · 7 min

**49 · Section.** Improve the structure, keep the behaviour.

**50 · Refactoren in drie stappen.** *(3 steps)*
- Refactoring: improving the structure of code without changing its behaviour. They did one in module 4, when the pass mark got one place.
- "The behaviour stays the same" is a promise, and you check a promise. Record the behaviour first: `node check.js`, and keep the output. Take one small step, one per prompt. Check: the output, the page, and what changed.

**51 · LIVE: één stap, en dan controleren.** *(2 steps; about 3 min)*
- Type `node check.js` and leave the output on screen. Send the prompt: say what changes, where, and what stays the same.
- Reveal the new function, or show the one your agent wrote. Point at `roundNumber - 1`: round 1 is at place 0 of the list. Hold that thought for 5.6.
- Type `node check.js` again and compare the eight lines with the room. Look at which files changed.
- Last step: the second step is removing the two old functions, after you searched whether any file still uses them. Two steps, so that you know which one caused it when something goes wrong.
- Fallback by hand: see `live/README.md`.

**52 · Een fout oplossen en refactoren: nooit in dezelfde stap.** *(1 step)*
- A refactoring does not change the behaviour, a fix does. Do both in one step and the output changes: was that the intention, or an accident?
- Reveal: so a refactoring also keeps wrong behaviour. They will see that in M3: the output says "Hoogste totaal: 9" before their refactoring, and it must still say 9 after it.

**53 · Waar je op let bij een agent.** *(2 steps)*
- Start with the kicker: refactoring is work an agent does well. The task is precise, and you can check the result.
- Three things that need your attention. A task that is too big: "clean up stats.js" gives many changes at once that you cannot check together. Input your check does not hold: `check.js` only shows tonight's scores, not an empty list. That is what tests are for, after the break. A name other files use: rename a function, and every file that uses it has to change with it. *(Cut if late.)*

**54 · Pauze · 15 min.** Click "Start de timer". Tell them the exercise on 5.4 and 5.5 comes right after the break.

---

## Block 3 (45 min)

**55 · JOUW BEURT M3 · 14 min.** Alone, with Copilot. At most two prompts.
- One sentence before you start the timer: find code smells, decide, and do one refactoring in two small steps, with `node check.js` before and after.
- They open `scorebord2-m3` and save the output of `node check.js`. Three code smells of their own in `stats.js` and `panel.js`, without AI. Prompt 1 is given on the exercise page; they compare, and check one claim themselves.
- Prompt 2 is theirs: one function for the rounding in `panel.js`, with a name they choose. Then the checks. Step 2 of the refactoring is by hand: search for `top(`, remove the function, check again.
- What to watch for: students who think "Hoogste totaal: 9" must be fixed. It stays, and that is the point of slide 52. Students whose agent also "cleaned up" other things: that is the question "did anything change that you did not ask?". And students who remove `top` without searching first.
- When the timer ends, move on.

### 5.6 Regressions voorkomen met tests · slides 56 – 64 · 26 min

Slides 56 to 63 in about 12 minutes; that only fits without the optional slide 63. Then 14 minutes for M4. From slide 58 on you work in your second working copy, `scorebord2-tests`.

**56 · Section.** A small slip. Six of the eight lines are still right.

**57 · Wat werkte, gaat stuk.** *(2 steps)*
- Suppose the agent wrote the new function of slide 51 without `- 1`. The output of `node check.js`: six of the eight lines are the same as before. Compare quickly, and you miss the other two.
- Reveal the two terms. Off-by-one error: the code is one place next to the right one. Regression: something that worked breaks because of a change. Every change can cause one: a fix, a refactoring, a new feature.
- Two things help: small steps, so you know which step did it, and tests, so you notice at once.
- Optional: do it live in your first working copy, see `live/README.md`.

**58 · Een test is code die code controleert.** *(4 steps)*
- With `check.js` you compare, with your eyes. A test compares itself: it calls code with a fixed input, compares the result with the expected value, and says `OK` or `FOUT`.
- The three parts of `check`: a name, what the code gives, what you expect. The expected value comes from the rules of the quiz in `README.md`, not from the code: a player passes with at least 20 points, so `hasPassed(20)` must give `true`. Module 6 goes deeper into that.
- Last step: type `node test.js` in `scorebord2-tests`. Sixteen times `OK`. The tests use their own list of three players, not `data.js`: the scores of a quiz night change, the input of a test does not.

**59 · Drie soorten tests.** *(3 steps)*
- Unit test: one function, apart from the rest. It tells you exactly which function is wrong. Integration test: several parts that work together; it finds bugs in the cooperation. Regression test: a bug that was fixed once. That name says why the test exists, not how big it is: a regression test is often a unit test too.
- Last step: what `node test.js` says with the off-by-one error of slide 57. You do not have to compare anything: the test says what is wrong, and where. *(Cut if late.)*

**60 · Tests die slagen, bewijzen alleen wat ze testen.** *(1 step)*
- All sixteen tests passed while `getHighest` still had the bug of 5.2. Open `test.js`: the test for `getHighest` uses 22, 35 and 13, only numbers of two digits.

**61 · LIVE: van minimal example naar regression test.** *(6 steps; about 3 min)*
- The minimal example of 5.2 is exactly the test that was missing. Add the line to `test.js` in `scorebord2-tests`, under the comment for regression tests. Type `node test.js`: `FOUT`, expected 25, got 9.
- The order, one step per click: write a test that fails because of the bug, fix the bug, run all tests, leave the test in.
- Last step: if you see a test fail first, you know it can see the bug. A test you never saw fail may test nothing.

**62 · LIVE: een agent voert de tests zelf uit.** *(3 steps; about 3 min)*
- An agent harness can run commands in the terminal. With tests, an agent has a way to check its own work: change the code, run `node test.js`, read what is `FOUT`, improve. Send the prompt. When the agent asks permission for a command, read it aloud before you approve.
- This works well, because a test is a precise task with a result you can check. You can also put the rule in `AGENTS.md`: "Voer na elke wijziging `node test.js` uit."
- The three checks, one per click, and do them live: run the tests yourself, because "all tests pass" in an answer is a claim. Is `test.js` still the same? A test also passes when someone changes the expected value. And does the code solve the problem, or only the test? Read the new function and try a second input.
- Fallback: paste the function with a loop, see `live/README.md`.

**63 · LIVE (optioneel): wat deze tests niet zien: de pagina.** *(3 steps; about 2 min)*
- `test.js` calls functions in Node.js. It opens no browser, so the bug of E1 in `index.html`, or a tower in the wrong colour, it cannot see.
- A headless browser is a browser without a window, driven by code. Type `node browser-check.js` with the server running: it opens the real page in Chrome or Edge without a window and reads what is in the panel. See `live/README.md` for the version with the bug of E1.
- Some agent harnesses can drive a browser themselves, often with a plugin. Say it in one sentence; there is nothing to show for it. The rules stay the same: you say what you expect, and you check the result.
- X11 in the extra series is this demo as an exercise. *(Cut if late: say the definition while slide 62 is up.)*

**64 · JOUW BEURT M4 · 14 min.** Alone, with Copilot. At most two prompts.
- They open `scorebord2-m4` and type `node test.js`: sixteen times `OK`, although the bug of M1 is in this project. One test uses `getLowest`, the integration test "paneel: het laagste totaal", with the totals 22, 13 and 35: the lowest is under 20, so the test does not see the bug.
- They add the regression test of the exercise page (or their own minimal example of M1) and see it fail: expected 27, got 20. Who did not do M1 uses the line on the exercise page.
- Prompt 1 asks to fix `getLowest`, to run `node test.js`, and not to change `test.js`. Then they check themselves, and add two more tests: three totals above 20, and an empty list that must give `null`. If one fails, that is their second prompt.
- What to watch for: students who approve a command without reading it. Students whose agent does not run the command: they type it themselves, the exercise says so. Students who stop at "the agent says all tests pass". And an agent that changed `test.js`: that is exactly the second check.
- When the timer ends, move on.

### Afsluiting · slides 65 – 68 · 5 min

**65 · JOUW BEURT: werk af en lever in · 3 min.** Alone.
- They hand in the fill-in file through the assignment **Oefeningen module 5**, also when it is not complete: they can hand in again from home. Remind them to stop their server.
- This slot is short. What they did not finish, they finish at home: everything is on the exercise page, under "Zo doorloop je deze les".

**66 · Acht regels.** *(8 steps)* Let the class finish each sentence before you reveal it. If you have one minute, reveal all eight and read only the bold idea of each.

**67 · Wat doe je nu?**
- Not finished? At home, with the exercise page.
- Test jezelf 5.1 to 5.6.
- Recommend X1 by name for who found the error messages hard: four small files, four types of message, no AI. X11 for who wants to try a headless browser. X14 for who wants to work with the debugger themselves: a breakpoint, Scope, and the four buttons.
- Next lesson: module 6, tests and documentation. Today they wrote a test by hand; next week they let an agent generate tests, and learn to judge them.

**68 · Vragen?**

---

## Extras if you have time left

- **The second preset of the demo** (slide 13): eight players, no error, the stack empties.
- **The check in `getTotal`, live** (slide 22), see `live/README.md`.
- **The agent reads the error itself** (slide 20): new chat, "Verander niets aan de code. Voer node check.js uit en lees de foutmelding. Leg uit wat ze zegt.", see `live/README.md`.
- **A breakpoint, live** (after slide 38), about 2 min, see `live/README.md`: F12, **Sources**, `panel.js`, click the line number of `const winner = findWinner(players);`, reload. The page pauses, and under **Scope** the list `totals` shows `NaN` in fifth place: the measurement of hypothesis 2, without a line of `console.log`.
- **The debugger of Visual Studio Code** (after slide 18), about 2 min, see `live/README.md`: click left of line 8 in `stats.js` (a red dot), open a JavaScript Debug Terminal and type `node check.js`. The code pauses in the editor, with almost the same buttons at the top. These steps come from the documentation of VS Code and were not run when this material was made: try them before class, or leave this extra out.
- **The prompt of slide 40, live**: three possible causes for the `NaN`. Compare them with the three hypotheses of slide 38.
- **The second refactoring step** (slide 51): search for `getRound1Scores` with Ctrl+Shift+F. If the two old names are still in the `import` at the top of `panel.js`, remove them there first. Then remove the two old functions from `stats.js`, and run `node check.js` and `node test.js`.
- **The off-by-one error, live** (slide 57): remove `- 1`, run `node check.js` and `node test.js`.
- **The finished project**: open `live/scorebord2-opgelost` and show `test.js` with its four regression tests, for the two bugs in `getHighest` and `getLowest`.
- **A rule in AGENTS.md**: in `scorebord2-tests`, add the line "Voer na elke wijziging `node test.js` uit." to `AGENTS.md`, and send this prompt in a new chat: "Verwijder de function top uit stats.js. Verander niets anders." Does the agent run the tests without being asked? That is exercise X8.

## What can go differently

| Moment | What may happen | What to say |
|---|---|---|
| Setup (5) | `node` is not recognised | They install the LTS version from nodejs.org during slides 6 to 22. Until then they follow on the slides. |
| Setup (5) | "Poort 3000 is al in gebruik" | Another server is still running. They stop it with Ctrl+C first. If another program holds the port: `node server.js 3001`, and they open `localhost:3001`. |
| Live (9) | You see no red line in the console | The console filter hides errors, or the file was not saved. Save `data.js`, reload, and set the filter to "All levels". |
| Live (19, 40, 47, 51, 62) | The agent is slow, or changes a file although the prompt says not to | Use the fallback of `live/README.md`. If it changed a file: "I said: change nothing. So I check." Show which file changed. |
| Live (18) | The tab **Sources** looks different: the Scope and the Call Stack are under the code instead of next to it | The DevTools window is narrow. Make it wider, or scroll down in the panel under the code. |
| Live (18) | The page does not pause after the reload | The breakpoint is not set: the line number must have a blue marker. Or the DevTools were closed: they must be open while you reload. |
| Live (18) | You press F11 and the browser goes full screen | The DevTools did not have the focus. Press F11 again, click once in the code of the DevTools, and use the buttons instead of the keys. |
| Live (18) | Later in the lecture the page suddenly pauses | A breakpoint is still set, or **Pause on uncaught exceptions** is still ticked. Remove it and click Resume. |
| Live (22) | You forget to put Emma back | The page stays white in section 5.2. Put `rounds: [9, 15]` back, or copy `data.js` from `live/scorebord2` again. |
| Live (30) | You skip the fix | The panel in 5.3 then also says "Hoogste totaal: NaN", and the room counts five wrong things instead of four. Say it is the bug of 5.2, still there. |
| E1 | A student sees eight towers | They opened another folder, or the server of another folder is still running. The terminal says which folder the server shows. |
| E1 | A student wants to change `main.js` instead of `index.html` | It works too. Ask which name follows the agreement in `AGENTS.md`: names are in camelCase. |
| M1 | `node repro.js` gives "Cannot find module" or "Cannot use import statement" | The terminal is in the wrong folder. They open the folder `scorebord2-m1` itself (File > Open Folder) and open a new terminal. |
| M1 | A student fixes `getLowest` | Not needed, and no problem: M4 uses another folder. |
| M2 | A student cannot think of a hypothesis | "The number travels from `data.js` through two functions to `panel.js`. Where could it go wrong?" That is the hint on the exercise page. |
| M2 | The agent finds the cause at once in prompt 1 | Fine. They still look up the line themselves, and write the cause in their own words. |
| M3 | The agent names a code smell they do not understand | They ask for an explanation of that one smell in their second prompt, or they leave it: "that one I would not act on, because I cannot judge it". |
| M3 | The output of `node check.js` changed after the refactoring | That is the lesson. They say what they see in one follow-up prompt, or they note it. |
| M4 | The agent does not run `node test.js` | They type it themselves. The exercise page says so. |
| M4 | The agent changed `test.js` | They note it, and put their test line back. That is the second check on slide 62. |
| M4 | The test for an empty list fails | That is step 9: one follow-up prompt with the lines of the failing test. `AGENTS.md` says such a function gives `null`. |
| Any exercise | A student has no Copilot or no credit left | E1 needs no AI. M1: all steps except the prompt. M2: they look for the line themselves in `getRound2Scores`. M3: they write the rounding function by hand. M4: they fix `getLowest` by hand, with the loop of slide 30 as a model. They note that they worked without an agent. |
| No internet | The agent harness and three.js do not work | `node check.js`, `node repro.js` and `node test.js` still work. E1 needs the page; do M1 first, and let them write the prompts to send at home. |
