# Live demos for module 4

Three small folders for the live moments of the lecture. The scoreboard loads three.js from the internet, so you need a connection. You also need Node.js.

```text
live/
  scorebord/           the project the students take over: an exact copy of opdrachten/module-4/starter/scorebord
  scorebord-opgelost/  the same project after section 4.6: the bug is fixed and the rule has one place (fallback and extra)
  winnaar/             varianten.js: the two versions of findWinner from section 4.5 (for slide 45)
```

`scorebord-opgelost/` differs from `scorebord/` in two files. `stats.js` has a const `passMark` and a function `hasPassed(score)`, and `countPassed()` uses it. `main.js` uses `hasPassed()` for the colour of a tower and `passMark` for the height of the bar.

## Before class

Copy this whole `live/` folder to a working folder outside the repo, for example `Desktop/les4`, and give every live moment on that copy. Nothing in the repo changes, so there is nothing to reset afterwards.

Open the copy of `scorebord` in Visual Studio Code with your agent harness ready. Open a terminal (**Terminal > New Terminal**) and type:

```bash
node server.js
```

Open `http://localhost:3000` in a browser tab next to it. You see eight towers that grow, a white bar, a gold diamond above the highest tower and a panel with numbers. The terminal prints which folder the server shows.

If the terminal says "Poort 3000 is al in gebruik", another program uses port 3000. Stop it, or type `node server.js 3001` and open `http://localhost:3001`. The students' instructions say the same.

If you did work in the repo folder itself, put everything back with, from the repo root:

```bash
git restore lessen/module-4/live
git clean -fd lessen/module-4/live
```

This only works when this folder is committed.

## Slide 3 · what you built last lecture

Your own scene, not a folder from this repo. Have it open in a browser tab, with the code in VS Code. The four steps on the slide are your outline: begin small, save, understand, build on. Show your saved first version next to the result if you kept it.

## Slide 5 · the setup check

Do the steps of the slide in your working copy while the students do them on their laptop: open the folder `scorebord`, `node server.js`, `localhost:3000`.

## Slide 14 · remove one line, predict, look

In `main.js` of your working copy. Ask for a prediction before every change. Save, reload the page, and put the line back with Ctrl+Z before the next one.

1. **Without `scene.add(tower)`.** Find the loop that makes the towers and put `//` in front of the last line in it:

```js
const towers = [];
for (let i = 0; i < players.length; i++) {
  const tower = createTower(players[i], i);
  towers.push(tower);
  // scene.add(tower);
}
```

   The floor, the bar and the diamond are there. The towers are not. They are still made, and they still grow, but they are not in the scene.

2. **Without the lights.** Put `//` in front of both lines:

```js
// scene.add(sunLight);
// scene.add(skyLight);
```

   The towers, the floor and the diamond are black. The bar stays white: its material (`MeshBasicMaterial`) does not react to light. The background keeps its colour.

3. **Without `renderer.render(scene, camera)`.** In `animate()`:

```js
  diamond.rotation.y += diamondSpeed;
  // renderer.render(scene, camera);
```

   An empty white screen with only the panel. The scene, the camera and the towers all exist, and `animate()` still runs. Nobody draws the picture.

The pictures on the slide are the fallback. Reveal them one by one if the live scene does not work.

## Slide 17 · right, but complete?

In `main.js`, change `const heightPerPoint = 0.25;` to `0.125`. Save and reload. The towers are half as high, and so are the bar and the diamond. Put it back to `0.25`.

## Slide 21 · the trace table demo

The demo is `../demos/trace-table.html` and runs inside the slide. Click **Volgende stap**. The three buttons at the top right choose the input: `[14, 7, 18, 10]`, `[10, 9, 11]` and `[]`.

## Slide 31 · a review (optional, about 2 min)

New chat, in your working copy of `scorebord`:

```text
Verander niets aan de code. Review stats.js op leesbaarheid, edge cases en de afspraken in AGENTS.md. Geef per opmerking de regel, het probleem en een voorstel.
```

Read the first two remarks with the room and ask the three questions of slide 30 for each. Leave the rest: that is exercise M2.

## Slide 45 · compare with facts

Open a terminal in your copy of `winnaar` and type:

```bash
node varianten.js
```

```text
De lijst voor de check:  Amira, Jonas, Noor, Lars
Versie A
  Winnaar van de lijst:    Noor
  Volgorde van de lijst:   Amira, Jonas, Noor, Lars
  Winnaar van lege lijst:  null
Versie B
  Winnaar van de lijst:    Noor
  Volgorde van de lijst:   Noor, Amira, Lars, Jonas
  Winnaar van lege lijst:  undefined
```

Point at three things: both find Noor, only A gives `null` for an empty list, and B leaves the list in another order.

## Slide 46 · version B in the scoreboard (optional, about 2 min)

In `stats.js` of your working copy of `scorebord`, replace the body of `top` with the two lines of version B:

```js
export function top(a) {
  a.sort((x, y) => y.score - x.score);
  return a[0];
}
```

Save and reload. The towers stand from high to low, but the colours stayed where they were: the second tower is red and reaches far above the bar. The list in the panel is sorted too. There is no error message. Put the function back with Ctrl+Z.

Why: `main.js` makes the towers first, with the colour of each player. Then it calls `top(players)`, which sorts the list. After that `animate()` reads the height of tower `i` from `players[i]`, which is now another player.

## Slides 49 to 53 · the bug

1. Slide 49: let the room count the green towers in your browser tab. Four. The panel says 5.
2. Slide 52: send this prompt in a new chat, in your working copy of `scorebord`:

```text
Verander niets aan de code. Volgens README.md is een speler geslaagd met minstens 10 punten.
Verwacht: de toren van Lars (10 punten) is groen.
Werkelijk: het paneel telt Lars mee als geslaagd, maar zijn toren is rood.
Wat is de oorzaak, en welke oplossingen zie je?
```

   Read the answer with the room and open the two lines it names: `if (score >= 10)` in `countPassed()` in `stats.js`, and `player.score > 10` in `createTower()` in `main.js`.
3. Slide 53: make the small change. In `main.js`, change `player.score > 10` to `player.score >= 10`, by hand or with a second prompt ("Los de fout op met de kleinste wijziging. Verander niets anders."). Save and reload: the tower of Lars is green, and you count five.
4. If you have time: stop the server, open `scorebord-opgelost` and start its server. The rule has one place there. Change `export const passMark = 10;` in `stats.js` to `12` and reload: the panel says 4 of 8, the tower of Lars is red again, and the bar hangs higher. One change, three effects.

**Fallback.** If the agent harness is slow or gives an answer you cannot use: skip the prompt and show the two lines on slide 52. The fix by hand takes ten seconds.
