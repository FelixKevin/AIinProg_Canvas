# Module 4: speaker notes

Notes for the lecturer. Slides: [slides.html](slides.html). Slide numbers match the counter at the bottom right of each slide.

The idea of this lecture: in module 3 students built something of their own. Some scenes grew bigger than what their maker can explain, and three.js was new to everyone. So this lecture does not ask them to generate more. They **take over a project they did not write** and learn to read it, review it, judge it and fix it, with an agent as their help. The message is not "you did it wrong", but "this is the skill that makes generating safe".

Everything runs on one small project, the folder `scorebord`: a 3D scoreboard for a quiz night, built with three.js, in the file layout that module 3 ended on (`index.html`, `style.css`, `main.js`, plus `data.js` and `stats.js`, and a local server). Every player is a tower. It has realistic weak spots on purpose: a function with unreadable names (`top(a)`), functions that break on an empty list, a rule that is written in three places, and one real bug that gives no error message (the panel says 5 passed, four towers are green). You come back to that bug in 4.6, and it was on screen the whole lecture.

**The level of the JavaScript.** These students started programming about two months ago, and this course is about using AI well, not about writing JavaScript by hand. The project is therefore written with what they know: functions, `for` loops, `if`, lists and objects. There are no arrow functions, no `map` and no `? :` in the files students read (`data.js`, `stats.js`, `main.js` and `check.js`). `server.js` is a helper they do not read or change. Three things are new and are explained on the slides: `import` and `export` (slide 10), the parts of a three.js scene (slides 12 to 14), and one line with `sort` in section 4.5. That line is there on purpose: generated code often contains something you could not write yourself, and the point is that you ask what it does and test it. Harder code (a score that is text, three versions with unknown syntax, analysing a function of their own) is in the extra series, for who wants to go deeper.

The lecture is hands-on: 66 minutes of student work in five "Jouw beurt" moments, plus 9 minutes to finish and hand in. Explanation is short on purpose. If you run out of time, cut explanation, not exercises.

**The examples on the slides are not the exercises.** The course text and the slides work out one case per section; the exercise for that section uses a different case on the same project, so students cannot copy the answer from the slide:

| Section | On the slides and in the text | In the exercise |
|---|---|---|
| 4.1 | The map with file, task and "uses"; `heightPerPoint` | M1: what is in each file, three search questions, and a ninth player |
| 4.2 | Trace table for `[14, 7, 18, 10]`; the empty list | E1: another input, a missing score, a tie |
| 4.3 | Four made-up suggestions | M2: a real review from their own agent |
| 4.4 | The pass mark in three places | M3: renaming `top` |
| 4.5 | Two versions of `findWinner` | no exercise in class: Test jezelf 4.5, and X12 for who wants more |
| 4.6 | The tower of Lars (`>` and `>=`) | M4: the diamond above the wrong tower |

The exercises on the slides are the same as on the Canvas page **Oefeningen module 4**. Students write their answers in the fill-in file during class and hand in only that file. Every exercise is individual work, and there is no debrief or comparing afterwards: when the timer ends, you move on. The exercise page starts with "Voor je begint", so students who follow remotely can do everything on their own.

Students never undo a change. The starter files hold the same project four times (`scorebord`, `scorebord-verbeteren`, `scorebord-fout`, `scorebord-thuis`), so every exercise in which the agent changes code starts from a clean project. Say this once on slide 5.

Every exercise with prompts has a maximum: M1 two, M2 two, M3 two, M4 two. E1 is without AI.

## Before class

1. Students need: Visual Studio Code with GitHub Copilot, a browser with an internet connection (the project loads three.js from the internet), **Node.js** (for every exercise this time, not only one), the fill-in file, and the starter files (`opdrachten/module-4/startbestanden-module-4.zip`). Put the assignment in Canvas before class. Tell students beforehand, if you can, that they need Node.js: it was only needed for the last exercise of module 3, so some may have skipped it.
2. Open `slides.html` in Chrome. **F** for fullscreen, **T** for the clock.
3. Have your own scene from the previous lecture ready in a browser tab, with its code open in VS Code. You show it on slide 3.
4. Copy `lessen/module-4/live/` to a working folder outside the repo. Open the copy of `live/scorebord` in VS Code with your agent harness ready, type `node server.js` in a terminal and open `http://localhost:3000`. See `live/README.md`.
5. Check that nothing else uses port 3000 on your laptop. If `node server.js` says "Poort 3000 is al in gebruik", stop the other program, or type `node server.js 3001` and open `http://localhost:3001`.
6. Try the prompt of slide 51 once in your working copy, so you know what your agent answers.

Every exercise slide has a countdown. Click "Start de timer". Walk around while they work.

## Timing

| Clock | Block | Slides | Content | Student work |
|---|---|---|---|---|
| 0:00 – 0:11 | 1 | 1 – 6 | Recap of module 3, what you built (live), setup check (live), today | |
| 0:11 – 0:41 | 1 | 7 – 18 | 4.1 Getting to know a project, the parts of a three.js scene (live) | M1 · 17 min |
| 0:41 – 1:00 | 1 | 19 – 26 | 4.2 Control flow, data flow, assumptions (demo) | E1 · 10 min |
| 1:00 – 1:15 | | 27 | **Break** | |
| 1:15 – 1:38 | 2 | 28 – 33 | 4.3 An agent as first reviewer | M2 · 14 min |
| 1:38 – 2:00 | 2 | 34 – 40 | 4.4 Code quality | M3 · 13 min |
| 2:00 – 2:15 | | 41 | **Break** | |
| 2:15 – 2:24 | 3 | 42 – 47 | 4.5 Trade-offs between implementations (live) | |
| 2:24 – 2:46 | 3 | 48 – 55 | 4.6 Tackling a bug (live) | M4 · 12 min |
| 2:46 – 2:55 | 3 | 56 | Finish and hand in | 9 min |
| 2:55 – 3:00 | 3 | 57 – 59 | Recap and what to do next | |

Block 1 is 11 + 30 + 19 = 60 minutes, block 2 is 23 + 22 = 45 minutes, block 3 is 9 + 22 + 9 + 5 = 45 minutes.

**If you run late**, cut in this order: slide 13 (say it in one sentence on slide 12), slide 17 (it is in the course text), slide 22, slide 46 (show its picture for ten seconds and skip the steps), slide 53 (say the two solutions while slide 52 is up). Do not cut slide 14: it is the answer to "they did not understand how three.js fits together". Do not shorten M1. The finishing slot of 9 minutes is your buffer: what you run over earlier comes out of it. **If you have time left**, see "Extras".

---

## Block 1 (60 min)

### Start · slides 1 – 6 · 11 min

**1 · Title.**

**2 · Wat weet je nog?** *(3 steps)*
- Ask each question to the room before you reveal the answer.
- All three come back today: saved versions (the starter has four copies of the project), predict-change-look (slide 14 and M1), and "does it work?" as the first question (the bug in 4.6 gives no error).

**3 · LIVE: zo bouw je iets wat je kan uitleggen.** *(6 steps; about 5 min)*
- This is your moment. Show the scene you built last lecture, in the browser. Then show how you got there, with the four steps on the slide as your outline.
- **Begin klein.** What was your first idea, in three sentences? What was the one prompt? Show the first version if you kept it (your `scene-v1`).
- **Bewaar.** You saved that version before you asked for anything else.
- **Begrijp.** Show one thing in your code that you did not understand at first, what you asked, and how you tested the answer.
- **Bouw verder.** Name the feedback points you sent, one per prompt. A big scene is many small steps, not one big prompt.
- Last step, the sentence under the flow: the loop repeats. That way your project grows as fast as your understanding of it, not faster.
- Do not show a student's scene here without asking them first.

**4 · Hoe meer je laat genereren, hoe meer je moet kunnen uitleggen.** *(1 step)*
- Say it without blame. Many scenes of last lecture were impressive. Some are bigger than what their maker can explain, and nobody knew three.js. That is normal after one lecture, and it is exactly what today is for.
- Reveal: today you learn to read a project you did not write. The same skill works on code an agent wrote for you.
- Optional question to the room: "Who can say what the renderer does in their own scene?" Do not pick anyone. You answer it on slide 12.

**5 · LIVE: staat alles klaar?** *(6 steps; about 2 min)*
- Students follow along on their laptop. Do it yourself in your working copy.
- **Pak de startbestanden uit.** Four folders with the same project, and a folder `rangschikking` for an extra exercise. Say why: every exercise that changes code starts from a clean project, and nobody has to undo anything. Today they start in `scorebord`.
- **`node server.js`** in a terminal (Terminal > New Terminal), then `localhost:3000`. The terminal prints which folder the server shows. They see eight towers that grow, and a panel.
- Last step: they need Node.js and internet today. Who gets "node is not recognized" installs the LTS version from nodejs.org now, during slides 6 to 17.

**6 · Drie blokken, twee pauzes.** Thirty seconds. One project for the whole lecture. Block 1: get to know it. Block 2: judge it. Block 3: choose and fix. Every exercise says how many prompts they send at most.

### 4.1 Een bestaand project leren kennen · slides 7 – 18 · 30 min

Slides 7 to 17 in about 13 minutes. Then 17 minutes for M1.

**7 · Section.** Your colleague left. The code is yours now.

**8 · Je neemt een scorebord over.** *(3 steps)*
- A 3D scoreboard for a quiz night. Every player is a tower: more points, a higher tower. Green means passed, the white bar hangs at 10 points, the gold diamond marks the winner.
- The colleague built it with an agent, so most of this code is generated. Say it out loud: this is the same kind of code as their own scene from module 3, only this time someone else asked for it.
- You did not write the code, nobody explains it, and tomorrow you have to change it. That is the normal situation for a developer.
- Do not mention yet that something is wrong in the picture. A sharp student may notice that the panel says 5 and four towers are green. Say: "Hold that thought until the last block."

**9 · Kijk eerst zelf.** *(3 steps)*
- Three things without AI. Read what the project says about itself: `README.md` (what it does, the rules of the quiz, how to start it) and `AGENTS.md` (the agreements). Start it and look. Open every file and look for one thing: what is its task?
- Reveal the reason: you can ask an agent to explain everything, and it is fast. But then you have nothing to compare the explanation with.
- Say that they do not have to understand every line. Nobody does on the first day in a project.

**10 · import toont wie wie gebruikt.** *(2 steps)*
- The three lines at the top of `main.js`. They saw `import` in module 3 without a name for it.
- `export`: a file shares a function or a value. `import`: another file fetches it. So the import lines at the top of a file tell you which other files it uses. Read the three lines aloud: `main.js` uses three.js, the list `players` from `data.js`, and four functions from `stats.js`.

**11 · Maak een kaart van het project.** *(2 steps)*
- The map: the files, their task, and what they use from each other. An arrow means "uses". First `index.html` with `style.css` and `main.js`, then what `main.js` uses.
- Last step: the map tells you where to look. A number in the panel is wrong? Then you look in `stats.js` and `main.js`, not in `style.css`. That is exactly what you do in 4.6.
- The three helper files (`server.js`, `check.js`, `package.json`) are not on the slide. They are in the course text.

**12 · Zes onderdelen van een three.js-scène.** *(5 steps)*
- This is the part that goes deeper than module 3. They worked with these six without being able to point at them. Almost every three.js scene has them, also their own.
- Scene: the 3D world; what you want to see, you add with `scene.add()`. Camera: the point you look from. Renderer: draws on the screen what the camera sees. Mesh: an object. Light: without it the towers are black, as they saw with `lightIntensity` in module 3. Animation loop: a function that runs about sixty times per second, their `animate()`.
- If you have your working copy open, point at each one in `main.js` while you reveal the card: the comments in the file follow the same order.

**13 · Een mesh is een vorm met een oppervlak.** *(4 steps)*
- Geometry is the shape (a box), material is the surface (a colour), a mesh is the two together. `scene.add(tower)` puts it in the world. Every object in their own scene was made this way. *(Cut if late.)*

**14 · LIVE: wat zie je als ik deze regel weghaal?** *(4 steps; about 4 min)*
Do this in your working copy. It is the routine of module 3, predict, change, look, now used to understand the parts. The pictures on the slide are the fallback. See `live/README.md` for the exact lines.
1. Ask the room what they will see without `scene.add(tower)`. Comment the line out, save, reload: the floor, the bar and the diamond are there, the towers are not. The towers are still made, but they are not in the scene. Put the line back.
2. Without the two lights: the towers and the floor are black. The white bar stays white: its material does not react to light. Put the lines back.
3. Without `renderer.render(scene, camera)`: an empty white screen with only the panel. Read the last line of the slide: the scene is still there, but nobody draws it.
- Take predictions by a show of hands each time. If the room predicts wrong, even better.

**15 · Vraag uitleg op drie niveaus.** *(2 steps)*
- Now you have questions. Three levels: the project (how do the files work together?), one function (what does it get, what does it return, where is it used?), one line or number (what happens when you change it?). The third is the one from module 3.
- Always say "Verander niets aan de code": it is in the kicker, not in the small prompts on the cards. The full prompts of the first two cards are in the course text.

**16 · Een uitleg is een interpretatie, geen garantie.** *(1 step)*
- The sentence of this section. An explanation can be incomplete, contain an error, or leave out the most important part. Two checks: put it next to your map, and test one claim.

**17 · Juist. Maar ook volledig?** *(2 steps)*
- The model says: `heightPerPoint` sets how high a tower is per point. Prediction: with 0.125 instead of 0.25, all towers are half as high.
- Reveal the picture: the towers are half as high. So are the bar and the diamond. The explanation was right, but not complete: the value is used in three places. You only see that when you test. *(Cut if late, or do it live: it takes one minute.)*

**18 · JOUW BEURT M1 · 17 min.** Alone, with Copilot. At most two prompts.
- Steps 1 to 3 on the slide are without AI. They read `README.md` and `AGENTS.md`, start the project, and make their map: per file the names of the functions or the data in it, and which files it uses. They only write down names; they do not have to understand what every function does. Then three search questions that they answer with the map: which function makes the white bar, which function fills the panel, and where do you add a ninth player.
- Step 4: the prompt is in the exercise text, they send it as it is. They note one thing the explanation adds to their map, and anything that is wrong or does not exist.
- Step 5 matters most: they predict what changes on the screen when a ninth player joins, Sam with 13 points. Then they add the line to `data.js` themselves and look. What they usually do not predict: all towers move, the floor and the bar get wider, and the average becomes a long number (11.666666666666666). That last one is a real weakness of the project. If a student asks whether they broke something: "No. What does that tell you about the code?"
- Step 6: three sentences on how a score becomes a tower, without the explanation of the model next to them.
- Walk around early for students whose server does not start. Watch for students who send the prompt first and make the map afterwards: send them back to step 2.
- Sam stays in `data.js`. The next two exercises work with that.

### 4.2 Control flow, data flow en aannames · slides 19 – 26 · 19 min

**19 · Section.** The panel says: passed, 5 of 8. Where does that 5 come from? On the students' screens it now says 6 of 9, because they added Sam in M1. Say so: the slides and the course text show the project as it was delivered.

**20 · Twee dingen die je volgt.** *(3 steps)*
- `countPassed` from `stats.js`: a loop and an `if`, code they can read. Control flow: the order in which code runs. Data flow: how values move through the program and change. A trace table: a table in which you keep the values step by step.
- They may know trace tables from their programming course. Here it is the tool to check what a model tells you about code.

**21 · DEMO: volg de code, regel per regel.** *(about 3 min)*
1. The first input is selected: `[14, 7, 18, 10]`. Click **Volgende stap** and read the sentence under the table aloud each time. Left the line that runs (control flow), right the table that fills (data flow).
2. At the second score (7), ask the room which line comes next. The code skips `passed++`.
3. At the fourth score, stop: 10 is counted, because `10 >= 10` is true. Say that this is the kind of case you only see in a trace table. It comes back in 4.6.
4. Click the third input, `[]`, and ask what the function returns before you click through. The loop runs zero times, the result is 0.
- You do not need the second input. Use it if a student asks for another example.

**22 · De weg van de 5 door het project.** *(7 steps)*
- Data also moves from file to file. `data.js` has the list of players. `getScores()` in `stats.js` makes a list with only the scores. `countPassed()` counts the scores of at least 10. `showStats()` in `main.js` puts the text in the panel.
- Last step: the map shows which files use each other; the data flow shows what they pass on. *(Cut if late.)*

**23 · Wat neemt deze function aan?** *(2 steps)*
- Ask the room before you reveal: what does `calculateAverage` assume about its input? Give them ten seconds.
- Reveal the output: 12.25 for four scores, `NaN` for an empty list. It divides 0 by 0.
- Reveal the term: an assumption is something a function supposes about its input without checking it.

**24 · Eén lege lijst, drie gevolgen.** *(3 steps)*
- The same empty list in three functions. `countPassed([])` gives 0, and that is the right answer: not a problem. `calculateAverage([])` gives `NaN`: a problem. `top([])` gives `undefined`, and `main.js` then tries to read the score of the winner: the page crashes: the screen stays empty and the panel shows no numbers.
- Reveal the callout: not every edge case is a problem, but you only know after you followed it.

**25 · Volg ook de input die niemand verwachtte.** *(1 step)*
- The sentence of this section. Three questions to ask of every function: what if the list is empty, what if a value is missing, what if a number is outside the limits?

**26 · JOUW BEURT E1 · 10 min.** Alone, no AI.
- A trace table for `countPassed([9, 12, 10, 6])`. Then one data flow question: where does the second number in "Geslaagd: … van …" come from? (For them it says "6 van 9", or "5 van 8" if they did not add Sam.)
- They predict four calls first, on paper, then paste the four lines at the bottom of `check.js` and type `node check.js` in a second terminal. The server keeps running in the first one.
- A wrong prediction is fine and expected, especially for the missing score: nobody has to know beforehand that it gives `NaN`. The point is that they predict, run and compare.
- The two interesting ones: a missing score gives `NaN`, and with a tie the first player wins. Nobody decided that: it is not in `README.md`. The exercise asks what they would ask the organiser of the quiz.
- Watch for students who run the code first and "predict" afterwards.

**27 · PAUZE.** Start the timer.

---

## Block 2 (45 min)

Students stay in the folder `scorebord` for M2 and switch to `scorebord-verbeteren` for M3. Keep the explanation short: 4.3 and 4.4 in about 9 minutes each.

### 4.3 Een agent als eerste code reviewer · slides 28 – 33 · 23 min

**28 · Section.** An extra pair of eyes, before someone else reads your code.

**29 · Vraag een review op specifieke punten.** *(1 step)*
- Code review: someone other than the author reads the code and gives feedback. In a team that happens before code reaches the rest. An agent can do a first round: not instead of a colleague, but to catch the obvious things first.
- Left: "Is deze code goed?" gives a general answer. Right: the points you want reviewed (readability, edge cases, the agreements in `AGENTS.md`), "verander niets", and a fixed form: the line, the problem, a proposal. A review is the evaluate kind of question from module 2.

**30 · Drie vragen bij elke suggestie.** *(4 steps)*
- Is the problem real? Test it in the code. Does the proposal fit this project? Put it next to the agreements. Does the code get better?
- Reveal the three decisions: take over, adapt, reject.
- Last step, and say it with emphasis for this group: a review will often contain a remark they do not understand. Then they cannot judge it. They ask for an explanation of that one remark first. "I do not know yet" is an honest answer, and a better one than "take over".

**31 · Vier suggesties. Welke neem je over?** *(9 steps; about 4 min)*
- Four suggestions from a review of `stats.js`. They are made up for the slide, but each is of a kind you really get. Read each one aloud and let the room vote before you reveal the two cells of its row.
- Names: real, and it fits. Take over.
- `NaN` for an empty list, throw an Error: the problem is real (they saw it on slide 23), but the proposal does not fit. `AGENTS.md` says a function returns `null` and does not throw. Adapt: solve the problem the way the project does.
- Rewrite in TypeScript: general advice that goes against an agreement. Reject. They do not need to know what TypeScript is to decide this: the agreement says no.
- The loop in `top` skips the first player: wrong. The first player is the starting value. You test it with a list in which the first player wins. Reject. The test is in the course text.
- Last step: a review can also report a problem that is not there, and "no remarks" is not proof. All four sounded equally sure.
- Optional, about 2 minutes: send the review prompt live in your working copy and read the first two remarks with the room. Do not judge all of them: that is M2.

**32 · Suggesties zijn geen beslissingen.** *(1 step)*
- The sentence of this section. The model only knows what is in its context. It does not know why a choice was made or what was agreed with the customer. You know the project, you decide.

**33 · JOUW BEURT M2 · 14 min.** Alone, with Copilot. At most two prompts.
- The prompt is in the exercise text. It asks for at most four remarks, in simple words. New chat, in the folder `scorebord`.
- They answer the three questions for each remark, in the table. For the second question they read `AGENTS.md` again. The decision is take over, adapt, reject, or "weet ik nog niet".
- A remark they do not understand: one follow-up prompt that asks for an explanation of that one remark, in simple words and without changes. That is their second prompt. Expect this to happen a lot, and treat it as the exercise working, not failing.
- They test at least one remark by running code. The exercise gives the example: `console.log(calculateAverage([]));` at the bottom of `check.js`, then `node check.js`.
- Typical finds: the names in `top`, `NaN` and `undefined` for an empty list, the agreement about `null` that the code does not follow. Typical suggestions that do not fit: throwing errors, adding a library, TypeScript, long comment blocks.
- If the agent changed a file although they asked it not to: they write it down. Nothing has to be undone, M3 and M4 use other folders.
- Watch for students who mark everything as "overnemen" without a test or without understanding it.

### 4.4 Codekwaliteit · slides 34 – 40 · 22 min

**34 · Section.** The code works. Is it also good?

**35 · Twee versies, dezelfde winnaar.** *(2 steps)*
- Left the function as it is in `stats.js`: `top(a)`, with `x` and `i`. Ask the room what it does. It takes a while.
- Reveal version B: the same logic with names that say what things are. Both find Noor.
- Last step: "the code works" is not a quality criterion. It is the minimum.

**36 · Drie criteria.** *(3 steps)*
- Readability: names say what something is or does, and the same conventions everywhere. Structure: a function does one thing, a file has one task (the separation of concerns of module 3). Maintainability: you make a change in one place.
- Last step: code is read more often than it is written.

**37 · Eén regel, drie plaatsen.** *(1 step)*
- The rule "passed with at least 10 points" is in the code three times: in `countPassed()`, in `createTower()` for the colour, and in `createPassLine()` for the height of the bar.
- Reveal: if the pass mark becomes 12, you have to know all three places and you may not forget one. That is low maintainability. Compare with `heightPerPoint` from slide 17: one place, used by name.
- **Do not point out that the first two lines differ** (`>=` and `>`). If a student sees it, say: "Well spotted. Keep it for the last block." Slide 52 shows the same lines again.

**38 · Anders is niet hetzelfde als beter.** *(1 step)*
- The sentence of this section. Ask an agent to improve code and you always get something back, also when nothing needed improving. So you judge it with your criteria.

**39 · Zo vraag je een verbetering.** *(3 steps)*
- An adapt question from module 2: say what changes and what stays. The prompt gives the rule one place, names it (`passMark`), and says that the behaviour stays exactly the same.
- Reveal the three checks. Does it still do the same: `node check.js` before and after, and look at the page. Did anything come along that you did not ask for? Is it better by your three criteria, or only different?
- Improving structure without changing behaviour is called refactoring. Module 5 does it in small steps.

**40 · JOUW BEURT M3 · 13 min.** Alone, with Copilot. At most two prompts.
- Steps 1 and 2 of the slide: they stop the server (Ctrl+C), open the folder `scorebord-verbeteren`, start the project again and run `node check.js`. The output goes into the fill-in file: that is "before".
- Without AI they choose better names for `top`, `a` and `x`. Their own names, not necessarily the ones from slide 35.
- They look up which files use `top`: Ctrl+Shift+F, search for `top(`. Three hits: `stats.js`, `main.js` and `check.js`. So a rename touches three files.
- They write the prompt themselves: what changes, in which files, and what stays the same.
- The checks: `node check.js` gives the same output, the page looks the same, and a new search for `top(` gives nothing.
- Then the three criteria: better, the same or worse, and why. A rename improves readability and leaves structure and maintainability as they were. That is a good answer.
- Watch for: students who still see the old project because the server of `scorebord` is still running in another window. The terminal says which folder the server shows.

**41 · PAUZE.**

---

## Block 3 (45 min)

One short section without an exercise, then the bug with the last exercise, and nine minutes to finish and hand in.

### 4.5 Afwegingen tussen implementaties · slides 42 – 47 · 9 min

No "Jouw beurt" in this section: students practise it with Test jezelf 4.5. The live moment on slide 45 keeps it active.

**42 · Section.** Two versions that work. Which one do you choose?

**43 · Eerst je criteria, dan de code.** *(2 steps)*
- Five typical criteria: readability, efficiency, integration (does it fit the agreements and the existing code?), extensibility, testability.
- Reveal: if you think of them afterwards, you pick the version that looks smartest and find reasons for it.
- Reveal: for the scoreboard, readability and integration weigh most. With eight players efficiency hardly counts. Which criteria weigh most depends on the context.

**44 · Twee keer findWinner.** *(3 steps)*
- You ask for one function and get two versions. A: a loop and an `if`, code they can read. Reveal B: two lines.
- Reveal the callout: `sort` puts the list in another order, here the highest score first. Then the function returns the first player.
- Last step, and this is the point for this group: most of them cannot write that line with `sort` themselves. That is fine, and it happens all the time with generated code. What they must be able to do is find out what it does: ask for an explanation, and test it. Do not explain the part between the brackets.
- Ask the room which one they would pick at first sight. Most pick B. Do not comment yet.

**45 · LIVE: vergelijk met feiten.** *(3 steps; about 2 min)*
- Reading is not enough: run them. In a terminal in your copy of `live/winnaar`: `node varianten.js`. See `live/README.md`. The table on the slide is the fallback.
- Both find Noor. With an empty list A gives `null` and B gives `undefined`. After the call the list is in the same order for A, and in a different order for B.
- Last step: the two agreements for `stats.js` in `AGENTS.md`. A function does not change its input, and it returns `null` for an empty list. Only A follows both.

**46 · De kortste versie breekt het scorebord.** *(3 steps)*
- What happens when you put version B in the project: the towers stand from high to low, and the second tower is red and far above the bar. `sort` sorts the list `players` itself. The towers got their colour before the sort and their height after it.
- No error message, and `findWinnerB` returns the right winner. Who only tests the function does not see this. *(Cut if late.)*
- Optional, about 2 minutes: do it live, see `live/README.md`.

**47 · Een beslissing kan je verantwoorden. Een voorkeur niet.** *(2 steps)*
- The sentence of this section. Not "this one looked best", but: "I choose version A. It follows the agreements, and everyone in the team can read it. That it is longer does not matter for eight players."
- Last step: they practise this with Test jezelf 4.5. Who wants a challenge: X12 in the extra series, three versions of another function with code they have not seen yet.

### 4.6 Een fout aanpakken met een agent · slides 48 – 55 · 22 min

Slides 48 to 54 in about 10 minutes, with your working copy of `scorebord` next to the slides. Then 12 minutes for M4.

**48 · Section.** The panel says 5. Count the green towers.

**49 · Geen foutmelding. Toch klopt het niet.** *(3 steps)*
- The picture they have looked at since slide 8. The panel: passed, 5 of 8. Green towers: 4. The console is empty.
- Let the room count before you reveal the 4. Ask who had seen it. A bug without an error message is found by someone who looks critically, as module 3 said.
- Last step: do not send "it is not right" now. Look yourself first.

**50 · Zoek waar het probleem zit.** *(4 steps)*
- Make it small: who is counted as passed but is not green? Compare the panel with the towers: Lars, with exactly 10 points.
- What is right? `README.md`: passed with at least 10 points. So the panel is right and the tower is wrong.
- Where do you look? The map from 4.1: the number comes from `countPassed()` in `stats.js`, the colour from `createTower()` in `main.js`. You now know two functions to look at, before you sent a single prompt.

**51 · Beschrijf de fout precies.** *(1 step)*
- Left: the model has to guess what you see and what you expect. Right: the expected behaviour, the actual behaviour and one concrete case. And "verander niets": first the cause, so you can check the answer before anything changes.

**52 · LIVE: twee regels, één teken verschil.** *(2 steps; about 3 min)*
- Send the prompt of slide 51 in your working copy and read the answer with the room. Then open the two lines the agent names. The slide shows them as the fallback.
- Two `if` lines that they can both read. `stats.js` says `>=`, at least 10. `main.js` says `>`, more than 10.
- Reveal: for every score except exactly 10 they give the same result. That is why nobody noticed.
- Reveal: these are the lines of slide 37. A rule that is written in three places is wrong in one of them sooner or later.

**53 · Twee oplossingen.** *(4 steps)*
- The small change: `>` becomes `>=`. The bug is gone, the rule is still in three places. The cause: give the rule one place, such as a function `hasPassed(score)`. That is a bigger change, and a separate step with its own check: one point per prompt, as in module 3.
- Do the small change live, by hand or with a second prompt, and reload: the tower of Lars is green, you count five.
- The three checks: is the bug gone, does everything still work that already worked, and do you understand why the code was wrong? *(Cut if late: say it on slide 52.)*
- If you have time: open `live/scorebord-opgelost`, where the rule has one place, and change `passMark` to 12. The count, the colours and the bar all follow.

**54 · Een oplossing die je niet begrijpt, is een toekomstige bug.** *(1 step)*
- The sentence of this section, and of the course. The test: can you say in two sentences why the code was wrong and why the solution works? Module 5 goes deeper into debugging.

**55 · JOUW BEURT M4 · 12 min.** Alone, with Copilot. At most two prompts.
- Another bug than on the slides. In the folder `scorebord-fout` the gold diamond floats above the wrong tower: above the fourth one, the tower of Lars, and not above the tower of the winner, Noor. The bug of the slides is still in that folder too; say that they leave it alone.
- They stop the previous server, open `scorebord-fout` and start the project. They find the symptom themselves, with the hint on the slide: look at the winner. Then expected and actual behaviour, and a screenshot.
- Without AI: which function makes the object that is in the wrong place, and in which file? (`createDiamond()` in `main.js`.) They only have to find the function, not the faulty line.
- Prompt 1 asks for the cause and changes nothing. They look up the line the model names. Prompt 2 asks for the fix, and nothing else.
- The cause: `players.indexOf(winner) + 1`. Positions in a list count from 0, so the `+ 1` moves the diamond one tower to the right. Students do not have to know `indexOf` beforehand: the agent explains it, and they write the cause in their own words.
- The last check on the exercise page: count the green towers. Before the change there were four. If there are five now, the agent also fixed the tower of Lars, which they did not ask for. They write that down.
- When the timer ends, move on.

### Afsluiting · slides 56 – 59 · 14 min

**56 · JOUW BEURT: werk af en lever in · 9 min.** Alone.
- They finish the fill-in file and hand it in through the assignment **Oefeningen module 4**, also when it is not complete: they can hand in again from home. Remind them to stop their server.
- Done early? X1 (the map of their own scene) or X12 (three versions).
- This slot is also your buffer.

**57 · Acht regels.** *(8 steps)* Let the class finish each sentence before you reveal it.

**58 · Wat doe je nu?**
- Not finished? They finish the fill-in file at home. Everything is on the exercise page, under "Zo doorloop je deze les".
- Test jezelf 4.1 to 4.6.
- Recommend X1 by name: they make the map of their own scene from module 3 and find the six parts in their own code. That closes the gap of slide 4. X3 is for who wants to build: they add something to the scoreboard themselves.
- Next lesson: module 5, debugging and refactoring.

**59 · Vragen?**

---

## Extras if you have time left

- **The ninth player, live.** Add Sam to `data.js` in your working copy after M1 and ask what nobody predicted. The long average is a good bridge to 4.2: the code assumes the average is a short number. Take Sam out again before 4.2 (Ctrl+Z, save, reload): slides 19 to 22 and the live part of 4.6 count on 5 of 8 and four green towers in your tab.
- **The review, live.** Send the review prompt of slide 29 and judge two remarks with the room, with the three questions.
- **Version B, live.** Slide 46, see `live/README.md`.
- **One place for the rule.** Open `live/scorebord-opgelost` and change `passMark` from 10 to 12.
- **The tie.** `top` returns the first player when two have the same score. Ask the room who should win. Nobody decided it: the model, or your colleague, did.

## What can go differently

| Moment | What may happen | What to say |
|---|---|---|
| Setup (5) | `node` is not recognised | They install the LTS version from nodejs.org during the first explanation. Until then they read `README.md`, `AGENTS.md` and the files: the map of M1 needs no server. |
| Setup (5) | "Poort 3000 is al in gebruik" | Another server is still running, in another terminal or window. They stop it with Ctrl+C first. If another program holds the port: `node server.js 3001`, and they open `localhost:3001`. |
| Setup (5) | A double click on `index.html` gives an empty screen | That is module 3: a page with a separate JavaScript module needs the local server. `node server.js`. |
| Live (14) | You forget to put a line back | Ctrl+Z in the editor until the file is clean, or copy `main.js` from `live/scorebord` again. |
| M1 | A student feels lost in `main.js` | "You do not have to understand it. Write down the names of the functions, and move on. Which one makes the bar?" |
| M1 | The agent changes a file although the prompt says not to | "You said: change nothing. Check anyway." They write it down. For M3 and M4 they use other folders. |
| M1 | The explanation of the model names a function that does not exist | Good: that is step 6 of the exercise. They write it down. |
| M1 | A student thinks the long average is their mistake | "You added one line of data. What does the code assume about the average?" |
| E1 | `node check.js` gives "Cannot find module" | The terminal is in the wrong folder. They open the folder `scorebord` itself (File > Open Folder), not the folder above it, and open a new terminal. |
| M2 | The review is long or full of words they do not know | They take the remarks one by one and use their second prompt to ask for an explanation of one of them. "Weet ik nog niet" is a valid decision for the others. |
| M2 | The review finds the `>` in `main.js` | Fine. They found the bug of 4.6 early. They still do M4: it is about another bug. |
| M3 | The page still shows the old project | The server of the previous folder is still running. The terminal says which folder it shows. |
| M3 | The agent also "improved" other things | That is the second check on slide 39. One follow-up prompt that says what they see, or they write it down. |
| M4 | A student does not see the bug | "Where is the diamond, and who won?" |
| M4 | The agent fixes both bugs | They count five green towers. That was not asked: they write it down under "veranderde er iets wat je niet vroeg". |
| Any exercise | A student has no Copilot or no credit left | E1 needs no AI. For M1 they do steps 1 to 4 and 7 to 10, for M3 they rename by hand and do the checks, for M4 they look for the line themselves in `createDiamond()`. They note that they worked without an agent. |
| No internet | The agent harness and three.js do not work | `node check.js` still works. Do E1, use the pictures on the slides for the live moments, and let them write the prompts of M3 and M4 to send at home. |
