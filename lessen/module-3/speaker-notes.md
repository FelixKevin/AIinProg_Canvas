# Module 3: speaker notes

Notes for the lecturer. Slides: [slides.html](slides.html). Slide numbers match the counter at the bottom right of each slide.

This lecture is hands-on: 62 minutes of student work spread over five "Jouw beurt" moments, plus 13 minutes at the end to finish and hand in. Every student builds a 3D scene of their own with three.js, in four steps, all before the second break and all in one folder: a first version (M1), understanding it (M2), improving it with feedback points (M3), and dividing it over three files and checking the agreements of the project (M4). The last block has no project work. The explanation in between is short on purpose. If you run out of time, cut explanation, not exercises.

Students do not start from an empty file. They start from a small project that already works: the folder `scene`, with a floor, a cube that turns, a light, a camera and an `AGENTS.md` with the agreements. They add their own thing to it. They do not need to know three.js.

**Keep the examples from becoming the assignment.** The lighthouse of the course text is on the slides only where the text uses it: the prompt (8), the result (9), the three feedback points (22, 23), the error message in the console (25) and the split prompt (33). Do not come back to it elsewhere. Everything else is about the project the students have open: the light (3.2), a tree that does not fit (3.4) and the split (3.4). In the live demo you ask the room for a subject, so every class sees a different example. Slide 12 pushes students toward something personal. If you see lighthouses or balls while you walk around, ask: "What do you do on a Saturday?"

The exercises on the slides are the same as on the Canvas page **Oefeningen module 3**. Students write their answers in the fill-in file during class. The last block has 13 minutes to finish and hand in. They hand in only the fill-in file: screenshots and code go into it.

Every exercise is individual work, and there is no debrief or comparing afterwards: when the timer ends, students keep what they have and you move on. The exercises are self-contained. The exercise page starts with "Voor je begint" (what you need, how to open the scene, how to copy a folder, how to take a screenshot), so students who follow remotely or missed the class can do everything on their own. Students never undo a change: they save a version before they continue. The right habit is version control; in this lecture a copy of the folder (`scene-v1`) stands in for it, and you say so.

Every exercise says how many prompts students send at most: M1 two, M2 two, M3 four and M4 two. The reason, in the words of the exercise page: every prompt costs AI credits, and the credit per month is limited. Say it once at the start (slide 4) and point at the line under each timer.

## Before class

1. Students need: Visual Studio Code with GitHub Copilot, a browser with an internet connection (the project loads three.js from the internet), the fill-in file, and the starter files (`opdrachten/module-3/startbestanden-module-3.zip`, with the folder `scene` and the file `server.js`; the second folder, `scene-thuis`, is only for the optional exercise X14). Put the assignment in Canvas before class, or have the files ready to share. Node.js is needed for M4, at the end of the second block.
2. Open `slides.html` in Chrome. **F** for fullscreen, **T** for the clock.
3. Copy `lessen/module-3/live/scene` to a working folder outside the repo, open that copy in VS Code with your agent harness ready, and open its `index.html` in a browser tab. See `live/README.md`.
4. Try a live prompt once in that copy, with any subject. See "What can go differently" at the end.
5. Type `node --version` in a terminal. You need Node.js for the optional live moment on slide 32 (`live/scene-split`).

Every exercise slide has a countdown. Click "Start de timer". Walk around while they work.

## Timing

| Clock | Block | Slides | Content | Student work |
|---|---|---|---|---|
| 0:00 – 0:08 | 1 | 1 – 4 | Recap of module 2, setup check (live), today | |
| 0:08 – 0:36 | 1 | 5 – 13 | 3.1 A first version (live) | M1 · 15 min |
| 0:36 – 1:00 | 1 | 14 – 19 | 3.2 Understand what you got (live) | M2 · 12 min |
| 1:00 – 1:15 | | 20 | **Break** | |
| 1:15 – 1:33 | 2 | 21 – 26 | 3.3 Feedback points | M3 · 12 min |
| 1:33 – 2:00 | 2 | 27 – 34 | 3.4 Fitting code into a project, every file its own task | M4 · 17 min |
| 2:00 – 2:15 | | 35 | **Break** | |
| 2:15 – 2:24 | 3 | 36 – 40 | 3.5 Typical shortcomings | |
| 2:24 – 2:39 | 3 | 41 – 49 | 3.6 Configuration and secrets, Git in short | E1 · 6 min |
| 2:39 – 2:52 | 3 | 50 | Finish and hand in | 13 min |
| 2:52 – 3:00 | 3 | 51 – 53 | Recap and what to do next | |

Block 1 is 8 + 28 + 24 = 60 minutes, block 2 is 18 + 27 = 45 minutes, block 3 is 9 + 15 + 13 + 8 = 45 minutes.

**If you run late**, cut in this order: slide 7 (say it in one sentence on slide 6), slide 37 (name the five in one breath), slide 47. Do not cut slide 11: it carries the message that version control is the right habit and the copy is only a stand-in. Do not shorten M1 or M4. M3 can go down to one feedback point. If M4 runs out of time, students stop after the server step and do the agreements table in the finishing slot on slide 50. That slot is your buffer: what you run over earlier comes out of it. **If you have time left**, see "Extras".

---

## Block 1 (60 min)

### Start · slides 1 – 4 · 8 min

**1 · Title.**

**2 · Wat weet je nog?** *(3 steps)*
- Ask each question to the room before you reveal the answer. Take one or two answers per question.
- These three answers come back today: you decide, the four elements, and "verander niets" when you only want an explanation.

**3 · LIVE: staat alles klaar?** *(5 steps; about 3 min)*
- A quick check so nobody loses time in the first exercise. Students follow along on their laptop.
- **Open je agent harness.** The chat is ready when you open it. Two things to look at: are your permissions right, and, if your agent harness lets you choose, did you pick a model you trust? Both are in the setup guide.
- **Pak de startbestanden uit.** The zip is with the assignment. Students work in the folder `scene`: open it with File > Open Folder. The file `server.js` is for M4. The folder `scene-thuis` is only for the optional exercise X14.
- **Open `index.html`** from the folder `scene`: double-click it in Explorer or Finder. From VS Code: right-click the file and choose Reveal in File Explorer (Windows) or Reveal in Finder (Mac). They see an orange cube that turns on a green floor.
- **Open het invulbestand** of module 3.
- Last step: they need internet, because the project loads a library from the internet (three.js, which slide 6 introduces). `node --version` only matters for M4, in the second block. Everything on this slide is also in "Voor je begint" on the exercise page.

**4 · Drie blokken, twee pauzes.** Thirty seconds. Blocks 1 and 2: they build, improve and split their own scene, in one folder. Block 3: what to watch out for, and time to finish and hand in. Read the line under the blocks: every prompt costs AI credits, and the credit per month is limited. That is why every exercise says how many prompts they send at most.

### 3.1 Een eerste versie genereren · slides 5 – 13 · 28 min

**5 · Section.**

**6 · Vandaag bouwen we een prototype.** *(3 steps)*
- Prototype: a first working version to test or show an idea. They met the word in module 1 (1.6).
- three.js is a JavaScript library for 3D in the browser. They do not need to know it.
- Last step, the picture: they start from a project that already works. This is what they just opened.

**7 · Twee bestanden, één function.** *(2 steps)*
- `index.html` holds all the code. The settings (colours, speeds) are at the top, and every object has its own function, such as `createCube()`.
- `AGENTS.md` is the instruction file from module 2 (2.4): the agreements of the project. All code stays in `index.html`, you use only what three.js itself offers, names are in English.
- One function to know: `animate()` runs again and again, about sixty times per second on most screens. Each time it turns the cube a little and draws the picture again. *(Cut if late.)*

**8 · LIVE: eerst denken, dan één prompt.** *(1 step; about 5 min)*
- The slide shows the pattern with an example from the course text. First the idea in plain words, three sentences: that is the thinking step from module 2 (2.2). Keep it small: one idea, one thing that moves, one reaction to a key or a click.
- Reveal the prompt. Point at the four elements from 2.3. It stays short because the agreements are already in `AGENTS.md`: you do not repeat them.
- Now do it for real, with a subject from the room, not with the lighthouse. Ask for something a student likes to do, say the three sentences together, and type the prompt in your working copy of `live/scene` (new chat). The template is in `live/README.md`.
- Reload `index.html` in the browser. Show the object, what moves, and the key or the click.
- If the result does not run or takes too long: use the fallback, see `live/README.md`.

**9 · Een eerste versie is een vertrekpunt.** *(4 steps)*
- The picture is the result of the prompt on slide 8, from the course text. Use what the agent made live for the four questions.
- Does it do what you asked? What did the model choose on its own? Height, place, colours, speed: you said nothing about those. Did anything come along that you did not ask for? Did the agent follow the agreements of the project? That last one comes back in M4.
- Last step: it works, but it is not finished, and you do not yet know why it works. Working code is not proof.

**10 · Eerst je versie bewaren, dan pas verder prompten.** *(1 step)*
- The principle first: once the agent changes a file, what was there is gone. A file keeps no history. So always make sure you can go back before you let anything change.
- Then do it live: copy the working folder `scene` in Explorer or Finder and name the copy `scene-v1`. Nothing changes in the copy from now on.

**11 · Bewaar je eerste versie.** *(3 steps)*
- Three reasons: the agent changes your files, a step can go wrong, and you want to compare later.
- Last step, and do not cut it: the right way is version control, such as Git. It keeps every version of your files, and that is how you work in a real project. The copy of the folder is a stand-in for this lecture, because they have not had Git yet. Say clearly that copying folders is not a habit to keep: in a bigger project you lose track. Do not explain Git itself.

**12 · Wat zet jij in de scène?** *(2 steps)*
- This slide is there so that thirty students do not build the same thing, and so that they feel free. The first row are categories, not objects: your sport, your music, your side job, your pet, a game, your favourite food, where you live.
- Reveal the second row: it does not have to be an object. A movement, a feeling, a colour, particles (snow, sparks, stars), an effect. The agreements in `AGENTS.md` allow all of that, as long as it is built with three.js itself and loads no files.
- Last step: choose something that not everyone would choose, and keep it to one idea. Say why we are careful here: every prompt costs AI credits, and a big idea costs many prompts. What they still want afterwards becomes a feedback point in M3. Give them ten seconds of silence to think.

**13 · JOUW BEURT M1 · 15 min.** Alone, with Copilot. At most two prompts.
- Step 1 is without AI: three sentences. What is added, what moves, what happens on a key or a click. Walk around early: the common mistake is an idea that is far too big (a full game). Help them cut it down to one idea and one moving thing.
- Step 2: they take the context from the exercise text and fill in input, output and constraints themselves.
- They send the prompt in the folder `scene`, in a new chat, and reload the page.
- An empty screen? Step 4 on the slide: press F12 in the browser, choose Console, and paste the red line into a follow-up prompt. That is their second prompt. This is the first time they need the console; slide 25 comes back to it.
- The last step matters most: copy the folder to `scene-v1` before the timer ends. Say it again two minutes before the end.

### 3.2 Begrijp wat je kreeg · slides 14 – 19 · 24 min

**14 · Section.** The hook: why does the scene need a light? Nobody asked for one, and it was already in the project.

**15 · Vraag uitleg over één ding.** *(2 steps)*
- Read first: look for a number, a library function or a line you cannot explain. That can be in the code of the agent or in the code that was already there. The two lines on the slide are from the starter project: the light, and the number 3 that sets how strong it is.
- Left: "Leg de code uit" gives a long text about everything. Right: one thing, and "verander niets". Asking for an explanation is the evaluate kind of question from module 2 (2.5).
- Optional, about 2 minutes: send the right-hand prompt live in your working copy and read the answer aloud. Do not judge the answer yet.

**16 · Een uitleg is een bewering.** *(1 step)*
- The sentence of this section. A model always sounds sure, also when it is wrong (module 1). So you do not believe an explanation, you test it.

**17 · Voorspel, verander, kijk.** *(1 step)*
- Three steps. Predict: if the explanation is right, what do you see when `lightIntensity` is 0 instead of 3? Change: yourself, in the code, without the agent. Look: reload the page.
- Order matters: the prediction comes before the change. Otherwise everything looks logical afterwards.
- Reveal the rule: you understand a line when you can predict what happens when you change it.

**18 · LIVE: wat zie je voor vier waarden?** *(4 steps; about 5 min)*
Do this in the real scene, in your working copy. The pictures on the slide are the fallback.
1. Ask the room what they will see with `lightIntensity` 0. Take a show of hands: everything black, only the objects black, or no change.
2. Change `const lightIntensity = 3;` to `0` by hand in `index.html`, save and reload. The objects are black, the sky stays blue: the background is not an object and needs no light.
3. Let them predict `10`, then show it: much brighter and paler.
4. If there is time, `1`: darker than the starter. Put it back to `3`.
- On the slide: the picture for 3 is visible from the start. Each click reveals 0, then 1, then 10, then the last line.
- If the room predicts wrong, even better: that is exactly why you predict first.
- Last step: if your prediction is wrong, the explanation is wrong or you understood it differently. Either way you learned something.

**19 · JOUW BEURT M2 · 12 min.** Alone, with Copilot. At most two prompts.
- They read their own `index.html`, pick one line or one number they cannot explain, and ask about that one thing in a new chat. The agent may change nothing.
- They write the explanation in their own words, then predict, change the value themselves and look.
- Watch for: students who change the value first and predict afterwards, and students who let the agent make the change. Both miss the point.
- Nothing to explain in their code? The exercise gives three questions: the three numbers of the camera position, `setAnimationLoop`, and the three numbers of `BoxGeometry`.
- They keep the value they like best. Nothing is put back.

**20 · PAUZE.** Start the timer.

---

## Block 2 (45 min)

In this block students stay in the folder with their scene the whole time: they improve it (M3) and then divide it over three files (M4). Keep the explanation short: 3.3 in about 6 minutes, 3.4 in about 10.

### 3.3 Verder bouwen met feedbackpunten · slides 21 – 26 · 18 min

**21 · Section.**

**22 · Schrijf op wat je ziet.** *(3 steps)*
- Three feedback points for the example of the course text, each small and concrete: what is wrong, what is missing, what should be different. Better still: name two or three points for what the agent made for the room on slide 8.
- Last step: "Maak het mooier" is not a feedback point. The model then has to choose what nice means (module 2: what you do not say, the model decides).

**23 · Eén punt per prompt.** *(2 steps)*
- Each point is its own follow-up prompt. It says what changes and that the rest stays: "Verander niets anders."
- One point per prompt: if something breaks, it is the last change. Three at once: something stops working, and you do not know which change did it.
- Optional, about 2 minutes: send one feedback point live in your working copy and reload. See `live/README.md`.

**24 · Controleer na elke stap.** *(2 steps)*
- Two checks after every step: is the point solved, and does everything still work that already worked? Does the cube still turn, does the scene still react to your key?
- Only then the next point. After a step that went well you save a version again: here a new copy, `scene-v2`.

**25 · Als een stap misloopt.** *(3 steps)*
- The console: F12 in the browser, then Console. Red lines are the error messages of your code. They saw it once in M1; now it gets its name. Optional: show it live, see `live/README.md`.
- You do not have to type a message over. Select it in the console, copy it and paste it into your prompt. That also works for a warning, in yellow.
- The prompt on the slide says what you see and gives the message. "Het werkt niet meer" alone makes the model guess.
- Reveal the two endings: you choose what you ask. Do you want to understand what went wrong? Ask what the message means, and say that nothing may change. Do you just want to go on? Ask for the fix, and say that nothing else may change.
- Last step: two tries and still not solved? Do not keep trying in the same chat. Go back to your last version that worked and continue from there. That is what saved versions are for.

**26 · JOUW BEURT M3 · 12 min.** Alone, with Copilot. At most four prompts.
- They write two feedback points first, then send point 1 in a new chat and point 2 in the same chat. After each one: reload, check, write it in the table.
- If a step goes wrong: one follow-up prompt with what they see and the error from the console. If that does not fix it and the scene still works, they go on with the next point. If the scene is broken, they copy `scene-v1` to `scene-v2` and continue there in a new chat, as the exercise says.
- At the end: a screenshot of the result, and the biggest difference with `scene-v1` in two sentences.
- Watch for: points that are too big ("maak er een spel van"), and students who send both at once. Send them back to one point per prompt.

### 3.4 Code inpassen in een bestaand project · slides 27 – 34 · 27 min

Slides 28 to 30 in about 5 minutes, slides 31 to 33 in about 5. Then 17 minutes for M4. The whole section stays inside the project the students have open: no other example.

**27 · Section.** Their scene was already an existing project with agreements. For a developer that is the normal situation. New code has to fit.

**28 · De code werkt. Past ze ook?** *(4 steps)*
- The situation: you want a tree in your scene, and you ask for it quickly in a chat window in the browser, without the project and without `AGENTS.md`. This is what you get: a file `boom.js` with a function `maak_boom()`.
- Ask the room what does not fit before you reveal. Naming: `maak_boom` is Dutch with an underscore; the project uses English and camelCase, `createCube`. Place: a new file, while all code of the project is in `index.html`. What is already there: the colour is in the middle of the function, while the project keeps colours at the top, with the settings.
- Last step: nothing is wrong with what this code does. It makes a brown trunk. It just does not fit the project. The model wrote what is common, and it did not know the agreements.

**29 · Vier controlepunten.** *(4 steps)*
- Naming: `createCube` or `maak_boom`? Place: the right file, in the right folder? What is already there: does the code use the settings at the top and `animate()`, or does it build a second version of something that exists? Agreements: does the code follow `AGENTS.md`?
- Last step: a version that fits, in `index.html`: the colour `trunkColor` with the settings, and a function `createTree()`. The full code is in the course text.

**30 · Zeg het vooraf.** *(3 steps)*
- What you say beforehand, you do not have to fix afterwards. Two ways: in your prompt (which file, what already exists) and in an instruction file for what always comes back. Their scene has one, `AGENTS.md`: that is why their prompt in M1 could stay short.
- Reveal three of its agreements. With an agent in that project, the agent harness reads them itself, and you usually get code that fits.
- Last step: an instruction file is context, not a guarantee. The agent can miss an agreement. Check anyway. That is step 6 on the slide of M4.

**31 · Elk bestand zijn eigen taak.** *(4 steps)*
- From fitting code into a project to where code belongs in a project. Their scene has all its code in one file, `index.html`. For a small scene that works. The bigger such a file gets, the harder it is to find anything in it. The same goes for an agent: a big file fills its context (module 1).
- So developers divide a project over several files, each with one task. For a web page: `index.html` is the structure (what is there), `style.css` the styling (what it looks like), `main.js` the behaviour (what happens).
- Reveal the term: separation of concerns. Every part of your project has one task, in its own file.
- Last step: `index.html` then points to the two other files with these two lines. Read them aloud; do not explain more HTML than that.

**32 · Splitsen heeft een prijs.** *(3 steps)*
- Left: after the split, a double click on `index.html` gives an empty screen. The console shows a red line with "blocked by CORS policy" in it (that is the wording in Chrome and Edge; Firefox words it differently). Nothing is wrong with the code.
- Reveal right: the page works when it comes from a local server. `node server.js` in the terminal, then `localhost:3000` in the browser. `server.js` is in the starter files.
- Reveal the term: a server is a program that passes files to your browser. A browser does not load a file such as `main.js` straight from your disk. During development such a server simply runs on your own computer.
- That is a trade-off, a word from module 2 (2.2): one file opens with a double click; several files read better but need a server. That is why `AGENTS.md` in the starter says all code stays in `index.html`.
- Last step: if you want it differently from the agreement, change the agreement first, then ask for the change. The instruction file is yours. If you ask for something that goes against it, the agent gets two instructions that contradict each other.
- Optional, about 2 minutes: show it live with `live/scene-split`, see `live/README.md`. Skip it if you are short on time: students see the same thing in M4.

**33 · Zo vraag je de splitsing.** *(2 steps)*
- This is what the prompt looks like. It is the adapt kind of question from module 2 (2.5): say what changes, and what stays the same. Read the prompt aloud: divide the code over the three files as `AGENTS.md` says; the scene must show and do exactly the same as now; add nothing. The example names the lighthouse scene of the course text; students name their own scene.
- Reveal the goal: the same scene, in a better structure. No new things.
- Reveal what you check afterwards: does the scene still show and do the same, and did the agent follow the agreements? Those are steps 5 and 6 of M4.

**34 · JOUW BEURT M4 · 17 min.** Alone, with Copilot. At most two prompts.
- They keep working in the folder with their scene. First a saved version: a copy named `scene-voor-splitsen`. Then they copy `server.js` from the starter files into their folder.
- They change the agreement themselves: in `AGENTS.md` the first rule is replaced by the two rules from the exercise text (three files, and the page is viewed through `node server.js`).
- The prompt: the exercise text gives the prompt of slide 33 with one part to fill in themselves: what their scene shows, what moves and what happens on their key or click. New chat.
- Double click on `index.html`: an empty screen. They write down the first red line from the console. Say it before they panic: that is not a mistake of the agent.
- `node server.js` in a terminal in VS Code (Terminal > New Terminal), then `localhost:3000` in the browser. Does the scene show and do the same as before?
- Then the check of 3.4: the six agreements in `AGENTS.md`. Per agreement: followed or not, and how they can tell. Typical finds: JavaScript left inside `index.html`, a second library, Dutch names, or everything in one long block instead of a function per object.
- Something not right, in the scene or in an agreement? One follow-up prompt that says what they see, or which agreement and where in the code. That is their second prompt.
- They paste the function that makes their object or effect into the fill-in file, note one advantage and one disadvantage of the split project, and stop the server with Ctrl+C.
- Walk around for: `node` not recognised (Node.js is missing), and `server.js` copied to the wrong folder.
- When the timer ends, move on. No round of answers. Who is not done, continues in the finishing slot on slide 50.

**35 · PAUZE.**

---

## Block 3 (45 min)

No project work in this block: two short sections, one exercise on paper, and time to finish and hand in.

### 3.5 Typische tekortkomingen · slides 36 – 40 · 9 min

**36 · Section.** The code runs. Is it also right?

**37 · Vijf tekortkomingen die vaak terugkomen.**
- Go through them quickly; three of them they already know. More than you asked: scope creep from module 1. Logic errors: the code runs, the result is wrong. Only the happy path: module 2. Assumptions from the training data and code for an old version of a library are the two new ones, and each gets its own slide.

**38 · Welke maand toont deze code?** *(2 steps)*
- Ask the room first. Most say 4, April. Reveal: 3.
- For us 03/04/2026 is the third of April. JavaScript reads month/day/year. The code does not crash, so nobody notices. That is what makes this kind of error dangerous.
- There is no exercise on this in class. Who wants to try it: the optional exercise X15 (Belgische datums).

**39 · Code voor een oude versie.** *(2 steps)*
- A model knows a library as it was up to its knowledge cutoff (module 1). This line worked in old versions of three.js; in newer versions `Geometry` no longer exists.
- Here you at least get an error message. Say which version you use, in your prompt or in your instruction file. In their scene the version is in `AGENTS.md`: point at that line if you have the project open.

**40 · "Werkt het?" is de eerste vraag, niet de laatste.** *(1 step)*
- The sentence of this section. Whoever only checks that the code runs, misses every error that gives no error message.
- The second line: there is no exercise on this section in class. They practise it with Test jezelf 3.5.

### 3.6 Configuratie en geheimen · slides 41 – 49 · 15 min

The order matters here: first the password in the code, then what Git, a repository and a commit are, then why a secret in Git is leaked, and only then `.env` and `.gitignore`.

**41 · Section.**

**42 · Wat is hier mis?** *(1 step)*
- Configuration: files that set how your project works. An agent generates them fast, also for tools you do not know well yet.
- Ask the room what is wrong before you reveal: the password of the database is written in the code. That becomes a problem as soon as you share the code. To see why, they need to know how developers save and share code: the next slide.

**43 · Git in het kort.** *(3 steps)*
- Git is the best-known software for version control, the word from slide 11. Four words, one per card. A repository is a project folder of which Git keeps the history. A commit is one saved version of your project in that history. GitHub is a website where you keep a repository online and share it: public (everyone can see it) or private (only you, and who you invite). The `.gitignore` is a file with a list of files and folders that Git skips; what is on that list does not end up in a commit.
- Keep it to these four. They do not work with Git themselves today; that comes later in the course, as the line at the bottom says.

**44 · Een geheim in Git is gelekt.** *(3 steps)*
- Git keeps every commit. If `config.js` with the password is in a commit, the password is in the history of the repository.
- Reveal: also after you remove it from the code, it is still in the earlier commits.
- Reveal: if the repository is public, everyone can read it.
- Last step, say it plainly: a well-known beginner's mistake is to let code be generated fast, put everything online and never look at it. A secret that was shared once counts as leaked. You replace it with a new one.

**45 · Lees het geheim uit de omgeving.** *(1 step)*
- The solution. Environment variable: a value your program reads from its environment, not from the code. The line becomes `process.env.DATABASE_URL`.
- The value itself is in a `.env` file, and that file goes into `.gitignore`, so Git skips it.

**46 · Wat zet je in .gitignore?** *(3 steps)*
- `.gitignore` holds everything that does not belong in version control. Three groups: secrets (the `.env` file), what a computer can make again (downloaded libraries such as `node_modules`, built files), and what only applies to your own computer (editor settings). Such files make a project big and slow to share, and they differ on every computer.
- Last step: make your `.gitignore` before you share anything. A file that is already in Git stays in the history.

**47 · Drie controles.** *(2 steps)*
- No secrets written in the files, `.env` in `.gitignore` before you share anything, and do you understand what every setting does? Ask for an explanation of what you do not know, like in 3.2.
- API key: a kind of password your program uses to sign in to a service. *(Cut if late; say the three checks on slide 46.)*

**48 · Alles wat in je prompt staat, wordt naar het model gestuurd.** *(1 step)*
- Never put a real password or a real API key in a prompt. Describe the problem and paste the error message, not the secret.

**49 · JOUW BEURT E1 · 6 min.** Alone, no AI.
- `config.js` and `.gitignore` are in the exercise text. Which two lines hold a secret, rewrite them with environment variables, and which line goes into `.gitignore` and why.

### Afsluiting · slides 50 – 53 · 21 min

**50 · JOUW BEURT: werk af en lever in · 13 min.** Alone.
- They finish the fill-in file: the screenshots and the answers of M1 to M4 and E1. Who did not finish M4 does the agreements table now.
- They hand it in through the assignment **Oefeningen module 3** before they leave. Only the fill-in file; they keep their folders with their portfolio.
- Done early? The extra series: X14, a second scene with a new idea in the folder `scene-thuis`, or X15, the Belgian dates exercise that goes with slide 38.
- This slot is also your buffer. Every minute the earlier blocks ran over comes out of it. It is 13 minutes and not 15, because section 3.6 has the two slides on Git.

**51 · Acht regels.** *(8 steps)* Let the class finish each sentence before you reveal it.

**52 · Wat doe je nu?**
- Not finished? They finish the fill-in file at home and hand it in through the assignment. The core series is M1 to M4 and E1, in that order, all done in class today.
- Test jezelf 3.1 to 3.6.
- The extra series is optional: X14 and X15.
- Next lesson: module 4, understanding, reviewing and improving code.

**53 · Vragen?**

---

## Extras if you have time left

- **Two students, two scenes.** Let two students show their first version side by side. Same starting project, different idea: what did each model choose on its own?
- **The console, live.** The `lighthouse is not defined` moment from `live/README.md`, if you skipped it on slide 25.
- **The camera.** Change the three numbers in `camera.position.set(4, 3, 6)` one at a time, after a prediction from the room. It is the same routine as slide 18.
- **Belgische datums.** The optional exercise X15 goes with slide 38: a vague prompt for `parseDate`, a test block, and a follow-up prompt with examples. Students who are done early can do it in the finishing slot.
- **v1 next to the result.** Open `index.html` from your copy `scene-v1` next to your working copy: this is what the copy is for.

## What can go differently

| Moment | What may happen | What to say |
|---|---|---|
| First version (8) | The agent adds extra files or a second library | "The agreements say: all code in index.html, no other libraries. It did it anyway. That is why you check." It is a good example for slide 9 and for the agreements check in M4. |
| First version (8) | The scene shows an empty screen | Open the console (F12), read the error with the class, and send it as a follow-up prompt. That is slide 25 early. If it takes more than a minute, switch to the fallback. |
| First version (8) | The room suggests something far too big | Cut it down with them, out loud: one idea, one thing that moves, one key. That is exactly what they have to do in M1. |
| First version (8) | The object is there but hard to see or half inside the cube | Good. That is your first feedback point for slide 22. |
| Explanation (15) | The agent changes the file anyway | "I said: change nothing. Check anyway." Take the file from your copy and move on. |
| Test (18) | The room predicts wrong | Good. Ask what the explanation said about the background, then look again. |
| M1 | A student has no Copilot or no credit left | They do step 1 and 2 now (the idea and the prompt), and E1. They send the prompt at home. |
| M1 | The scene does not change | The agent wrote the code in the chat and not in the file, or in a new file. They ask the agent to put it in `index.html`, as the agreements say. |
| M1, M3 | A student's idea is far too big | One object, one thing that moves, one reaction. The rest can be a feedback point later. |
| M1 | Half the room builds the same thing | Point at slide 12 again: something that not everyone would choose. |
| M3 | A step breaks the scene and one follow-up does not fix it | They copy `scene-v1` to `scene-v2` and continue there in a new chat, as the exercise says. Nothing is lost: that is the point of the copy. |
| M4 | The agent followed every agreement | Fine. They write down how they can tell, and send no follow-up prompt. |
| M4 | The agent leaves the JavaScript inside `index.html` | Then the page still opens with a double click. They ask again and point at the agreement: all JavaScript goes into `main.js`. |
| M4 | The terminal says `EADDRINUSE` | A server is already running on port 3000 in another terminal. They use that one, or stop it with Ctrl+C first. |
| M4 | A student has no Node.js | They do steps 1 to 5 and write down the console line. The server part is for at home, after installing Node.js. |
| M4 | The scene looks or behaves differently after the split | One follow-up prompt with what they see and the error from the console. If that does not fix it, they write it down; their saved version `scene-voor-splitsen` still works. |
| Any exercise | The students' Copilot behaves differently from yours | Good. Different model, different outcome (module 1). They write down what they got. |
| No internet | Agent harness and three.js do not work | The pictures on slides 6, 9 and 18 show the scene. Do E1, talk through the live slides, and let them write their idea and prompt for M1. |
