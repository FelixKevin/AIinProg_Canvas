# Live demos for module 3

Three small projects for the live moments of the lecture. They load three.js from the internet, so you need a connection.

```text
live/
  scene/        the starter of the students: index.html and AGENTS.md
  scene-v1/     the same project with a first version already added: a lighthouse (fallback)
  scene-split/  the starter divided over index.html, style.css and main.js, with server.js (for slide 32)
```

`scene/` is an exact copy of `opdrachten/module-3/starter/scene/`. `scene-v1/` is that project after the prompt of section 3.1: a function `createLighthouse()`, a beam that turns, and the space bar that stops and starts it. `scene-split/` is the starter after exercise M4: the same scene in three files, an `AGENTS.md` with the two new agreements, and `server.js`, an exact copy of `opdrachten/module-3/starter/server.js`.

## Before class

Copy `scene/` to a working folder outside the repo, for example `Desktop/les3/scene`, and give every live moment on that copy. Open the copy in Visual Studio Code with your agent harness ready, and open its `index.html` in a browser tab next to it. You see an orange cube that turns on a green floor.

Why a copy: on slide 10 you copy the folder to `scene-v1` in front of the class, and in this folder that name is already taken by the fallback. And nothing in the repo changes, so there is nothing to reset afterwards.

If you did work in this folder, put everything back with, from the repo root:

```bash
git restore lessen/module-3/live
git clean -fd lessen/module-3/live
```

This only works when this folder is committed. On files that git does not track, `git restore` fails and `git clean` deletes the whole folder.

## Slide 8 · the first version

Slide 8 shows the pattern with the lighthouse from the course text: three sentences first, then a prompt with the four elements. Do not send that prompt. Ask the room for a subject instead, so every class sees a different example and nobody copies the lighthouse:

1. Ask: "Give me something you like to do." Take the first answer that is not a ball sport.
2. Say the three sentences out loud with the class: which object, built from which simple shapes, what moves, and what happens on a key or a click.
3. Type the prompt live, in a new chat, with the same four labels as the slide:

```text
Context: een three.js-scène in index.html. De afspraken van het project staan in AGENTS.md.
Input: <de toets of de klik die de zaal koos>
Output: <wat erbij komt, waaruit het bestaat, waar het staat, wat beweegt en wat er gebeurt bij de input>
Beperkingen: verander de vloer, de kubus, de camera en het licht niet.
```

Reload `index.html` in the browser. Show the object, what moves, and the key or the click. Then go through the four questions of slide 9 with what the agent actually made.

**Fallback.** If the agent harness is slow, the result does not run or there is no internet for the model: open `scene-v1/index.html` from this folder in the browser and continue with that. It is the result of the lighthouse prompt on the slide:

```text
Context: een three.js-scène in index.html. De afspraken van het project staan in AGENTS.md.
Input: een druk op de spatiebalk.
Output: een vuurtoren links van de kubus. De toren is een witte cilinder met een rood dak in de vorm van een kegel. Net onder het dak draait een gele balk traag rond: dat is de lichtstraal. Bij een druk op de spatiebalk stopt de lichtstraal. Bij een volgende druk draait hij verder.
Beperkingen: verander de vloer, de kubus, de camera en het licht niet.
```

## Slide 10 · save the first version

In Explorer or Finder: copy the working folder `scene` and name the copy `scene-v1`. Say it out loud: from now on nothing changes in the copy.

## Slide 15 · ask for an explanation (optional)

New chat, in the working copy:

```text
Verander niets aan de code. Leg in eenvoudige woorden uit waarom deze scène een licht nodig heeft, en wat lightIntensity doet.
```

Read the answer with the class. Do not judge it yet: slide 16 says it is a claim, and slide 18 tests it.

## Slide 18 · test the explanation

This is the "predict first" moment, in the real scene. The question is about code that was in the starter, so it works whatever the agent added.

1. Ask the room: what do you see when `lightIntensity` is 0? Take a show of hands: everything black, only the objects black, or nothing changes.
2. In `index.html` of the working copy, change `const lightIntensity = 3;` to `0` by hand. Save and reload.
3. The cube, the floor and whatever the agent added are black. The sky stays blue: the background is not an object, so it needs no light.
4. Do the same for `10` (much brighter and paler) and, if there is time, `1` (darker than the starter).
5. Set it back to `3`, or leave the value you like best.

The four pictures on the slide are the fallback: reveal them one by one if the live scene does not work.

## Slide 23 · one feedback point (optional)

In the same chat as the first version, or in a new one. Write a feedback point for what the agent made for the room, small and concrete, and end with "Verander niets anders." With the fallback project, use the prompt of the slide:

```text
Zet de vuurtoren verder naar links, zodat er ruimte is tussen de toren en de kubus. Verander niets anders.
```

Reload. Check the two things of slide 24 out loud: is the point solved, and does everything still work that already worked (the cube still turns, the key or the click still works)?

## Slide 25 · the console (optional)

Show where students find error messages. Use the fallback project `scene-v1` for this one, on a copy. In its `index.html`, find the line

```js
const lighthouse = createLighthouse();
```

and change only the name in that line, to `lightHouse` with a capital H. The next line, `scene.add(lighthouse);`, now uses a name that does not exist.

Save and reload: the screen stays empty. Press F12 and choose Console. The red line says `Uncaught ReferenceError: lighthouse is not defined`, with the file and the line number. Select that line in the console, copy it and paste it into the chat. Show the two endings of the slide: "Wat betekent deze melding? Verander niets aan de code." when you want to understand it, or "Los deze fout op. Verander niets anders." when you want to go on. Put the line back with Ctrl+Z and save.

## Slide 32 · splitting has a price (optional, about 2 min)

Show the price of splitting before students run into it in M4. Use `scene-split/` from this folder. You need Node.js.

1. Open `scene-split/` in Visual Studio Code and show the three files: `index.html` has only the structure and two lines that point to `style.css` and `main.js`.
2. Double-click `scene-split/index.html`. The screen stays empty. Press F12 and choose Console: in Chrome and Edge the red line contains `has been blocked by CORS policy` (Firefox words it differently). Nothing is wrong with the code: a browser does not load `main.js` straight from your disk.
3. Open a terminal in that folder (**Terminal > New Terminal**) and type:

```bash
node server.js
```

4. Open `localhost:3000` in the browser. The cube turns on the floor, as before.
5. Stop the server: click in the terminal and press Ctrl+C.

If the terminal says `EADDRINUSE`, a server is already running on port 3000 in another terminal. Stop that one first.

Point at `AGENTS.md` in this folder: its first agreement was replaced by two new ones before the split. That is step 3 of M4. Slide 33 then shows the prompt that asks for the split.
