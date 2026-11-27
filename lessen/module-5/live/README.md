# Live demos for module 5

Two folders for the live moments of the lecture. The scoreboard loads three.js from the internet, so you need a connection. You also need Node.js, and Chrome or Edge for the optional headless browser moment.

```text
live/
  scorebord2/           version 2 of the scoreboard, as the students get it: an exact copy of opdrachten/module-5/starter/scorebord2-thuis
  scorebord2-opgelost/  the same project after the lecture (fallback and extra)
```

`scorebord2/` is the project "as your colleague delivered it". It holds every weak spot the lecture uses: `getHighest` sorts as text (the panel says "Hoogste totaal: 9"), `getLowest` starts at 20, the two functions `getRound1Scores` and `getRound2Scores` are copies of each other, `panel.js` rounds three times with the same expression, `stats.js` still has the dead function `top`, and `main.js` has a leftover `console.log('winner', winner);`. It also has `test.js` (16 tests that all pass) and `browser-check.js`.

`scorebord2-opgelost/` differs from it in five files:

- `stats.js`: `getHighest` and `getLowest` use a loop and give `null` for an empty list, `getRoundScores(players, roundNumber)` replaces the two round functions, and `top` is gone.
- `panel.js`: uses `getRoundScores` and has a function `roundToOneDecimal`.
- `main.js`: the leftover `console.log` is gone.
- `test.js`: four regression tests, for `getHighest` and `getLowest`.
- `README.md`: the rule "Een gemiste ronde telt als 0 punten".

Everything you show live is in this folder: you never need a project or an example of your own.

Everything below was run in a scratch copy of these folders, the debug session of slide 18 in Chrome. Two things were not: the agent answers (an agent may word things differently, so every agent moment has a fallback by hand) and the optional debugger of Visual Studio Code, whose steps come from the documentation of VS Code.

## Before class

1. Copy this whole `live/` folder to a working folder outside the repo, for example `Desktop/les5`. Nothing in the repo changes, so there is nothing to reset afterwards.
2. In that working folder, copy `scorebord2` once more and name the copy `scorebord2-tests`. You now have two working copies:
   - `scorebord2`: for sections 5.1 to 5.5. You fix `getHighest` in it during 5.2.
   - `scorebord2-tests`: untouched until section 5.6, where the regression test has to fail first on the old `getHighest`.
3. Open your working copy of `scorebord2` in Visual Studio Code with your agent harness ready. Open a terminal (**Terminal > New Terminal**) and type:

```bash
node server.js
```

   Open `http://localhost:3000` in a tab of Chrome next to it, with the console open (F12, **Console**). You see eight towers, six green and two red, and a panel. The console shows one grey line that starts with `winner`: that is the leftover debug code of slide 46.
4. Open a second terminal for `node check.js`, `node repro.js` and `node test.js`.

**Rehearse in a third copy.** If you want to try the debug session or the prompts before class, do it in a copy named `scorebord2-probeer`, and delete it afterwards. A prompt you tried in `scorebord2` or `scorebord2-tests` has already changed the code, and the live moment then shows nothing: the prompt of slide 62, for example, fixes `getHighest`, and the regression test of slide 61 then passes at once. After a rehearsal of slide 18, check in Chrome that no line number is blue and that **Pause on uncaught exceptions** is not ticked.

If the first terminal says "Poort 3000 is al in gebruik", another program uses port 3000. Stop it, or type `node server.js 3001` and open `http://localhost:3001`. The students' instructions say the same.

If you did work in the repo folder itself, put everything back with, from the repo root:

```bash
git restore lessen/module-5/live
git clean -fd lessen/module-5/live
```

This only works when this folder is committed.

## Slide 5 · the setup check

The students do the four steps of the slide on their own laptop: unzip the starter files, open the folder `scorebord2-e1`, type `node --version`. You open nothing new: your VS Code stays on your working copy of `scorebord2`, with the server running. Show two things as an example: the chat of your agent harness with the model picker, and `node --version` in your second terminal. It prints a version number, for example `v22.11.0`. The students do not start the project yet: that is step 1 of E1.

## Slide 9 · the page crashes

In `data.js` of your working copy of `scorebord2`, replace the line of Emma by the line of version 1:

```js
  { name: 'Emma', score: 24 },
```

Save and reload. The page is white: the panel shows only its title and "Van links naar rechts", and there are no towers. The console shows, in red:

```text
Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at getTotal (stats.js:8:23)
    at getTotals (stats.js:15:17)
    at getPanelLines (panel.js:16:18)
    at showPanel (main.js:32:21)
    at main.js:36:1
```

Click on `stats.js:8:23` in the console: the browser shows the line. Leave the fault in until slide 22.

The same message in the terminal, for slide 12: type `node check.js`. It prints "Aantal spelers: 8", then the line of code with a `^` under it, the same type and message, the same first three `at` lines with long `file:///` paths, `at file:///…/check.js:7:20`, and three lines with `node:internal`.

## Slide 13 · the stack trace demo

The demo is `../demos/stack-trace.html` and runs inside the slide. It starts on the preset **Emma zonder rounds**, which has nine steps. Click **Volgende stap**: the stack grows to five frames, `getTotal` leaves it once (Amira) and comes back for Emma. On step 8 the TypeError appears and the stack trace is printed. Step 9 says that the script stops. Click a line in the console to light up its frame and its line of code. The second preset, **Acht spelers, zoals je ze kreeg**, has ten steps and no error: the stack empties again.

## Slide 18 · a debug session in the browser (about 3 min)

In Chrome, in the tab of the scoreboard, with the fault of slide 9 still in: Emma has `score: 24`, and the red message is in the console. Edge works the same way. Zoom the DevTools in first, so the room can read them: click in the DevTools and press Ctrl and + a few times.

1. In the console, click `stats.js:8:23` in the first `at` line of the red message. The DevTools switch to the tab **Sources** and show `stats.js`, at line 8. On the right you see the buttons of the debugger and the parts **Breakpoints**, **Scope** and **Call Stack**. If the window is narrow, they are under the code.
2. Click the line number `15`, in front of `totals.push(getTotal(player));`. The number gets a blue marker: that is a breakpoint.
3. Reload the page (F5). The page pauses. Above the parts on the right it says "Paused on breakpoint", and line 15 has a yellow background: the code stands still before that line. Show:
   - **Scope**: `player: {name: 'Amira', rounds: Array(2)}` and `totals: []`. The loop is at the first player.
   - **Call Stack**: `getTotals`, `getPanelLines`, `showPanel`, `(anonymous)`. The last one is line 36 of `main.js`, which is not inside a function.
4. Click **Step into** (the arrow that points down to a dot, or F11). The debugger goes into `getTotal`: line 8 is yellow now. The Call Stack has five lines, with `getTotal` on top. They are the five lines of the stack trace of slide 12.
5. Click **Step out** (the arrow that points up, or Shift+F11). You are back in `getTotals`, on line 15.
6. Click **Step over** (the curved arrow over a dot, or F10) two times. The first click brings you to line 14, the second one to line 15 again. Under **Scope**, `player` is Jonas now, and `totals` is `[31]`.
7. Emma is the eighth player. Let the debugger find the place of the crash. Click the line number `15` again: the blue marker is gone. Under **Breakpoints**, tick **Pause on uncaught exceptions**. If you only see the word **Breakpoints**, click the triangle in front of it first.
8. Click **Resume** (the blue button on the left, or F8). The page pauses on line 8 of `stats.js`. It says "Paused on exception", with the message `TypeError: Cannot read properties of undefined`. Next to line 7 the debugger shows the value: `player = {name: 'Emma', score: 24}`. The Call Stack shows `getTotal`, `getTotals`, `getPanelLines`, `showPanel` and `(anonymous)`. This is the picture on the slide.
9. Untick **Pause on uncaught exceptions** and click **Resume**. The console shows the red message again.

Leave the fault of Emma in: you still need it on slides 19 to 22.

**If it fails.** Show the picture on the slide and say what it shows: the debugger stopped on the line that crashes, and `player` has no `rounds`. If the page still pauses later in the lecture, a breakpoint is still set or the box is still ticked. If F11 makes the browser full screen, the DevTools did not have the focus: press F11 again, click once in the code, and use the buttons.

**The debugger of Visual Studio Code** (optional, about 2 min, not run on this machine). In VS Code, open `stats.js` and click just left of the line number `8`: a red dot appears. Press Ctrl+Shift+P, type `JavaScript Debug Terminal` and choose **Debug: JavaScript Debug Terminal**. In that terminal, type `node check.js`. The code pauses on line 8, for the first player. On the left you see the variables and the call stack, and at the top the same buttons: Continue (F5), Step Over (F10), Step Into (F11), Step Out (Shift+F11). Click the red dot again to remove it, and click Continue.

## Slide 19 · the full message for an agent

New chat, in your working copy of `scorebord2`, with the fault of slide 9 still in:

```text
Verander niets aan de code. Ik paste de regel van Emma aan in data.js. Sindsdien is de pagina leeg, en in de console staat:

Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at getTotal (stats.js:8:23)
    at getTotals (stats.js:15:17)
    at getPanelLines (panel.js:16:18)
    at showPanel (main.js:32:21)
    at main.js:36:1

Leg in eenvoudige woorden uit wat deze melding zegt. Waar treedt de fout op, en waar kan de oorzaak zitten?
```

Read the answer with the room and check it against slide 12: do the files and lines exist, and does it name both the place (`getTotal`) and the cause (the line of Emma in `data.js`)?

**Fallback.** Skip the prompt and do the walk back yourself on slide 14: `getTotal` got the player from `getTotals`, which got the list from `getPanelLines`, which got it from `showPanel`: the list `players` from `data.js`.

## Slide 20 · the agent reads the error itself (optional, about 1 min)

First point at the terminal in which `node server.js` runs: it shows its three start lines and no error. The crash is in the console of the browser.

New chat, with the fault of slide 9 still in:

```text
Verander niets aan de code. Voer node check.js uit en lees de foutmelding. Leg in eenvoudige woorden uit wat ze zegt. Waar treedt de fout op, en waar kan de oorzaak zitten?
```

The agent asks permission for `node check.js`. Read the command aloud and approve it. The output is the one of slide 12 in the terminal: "Aantal spelers: 8", the line of code with a `^`, the TypeError and the `at` lines. Check the answer the same way as on slide 19.

**Fallback.** Type `node check.js` yourself and say: this output is what an agent can read by itself.

## Slide 22 · the message gone is not the bug gone (optional, about 1 min)

By hand, in `stats.js`, add the three lines to `getTotal`:

```js
export function getTotal(player) {
  if (player.rounds === undefined) {
    return 0;
  }
  return player.rounds[0] + player.rounds[1];
}
```

Type `node check.js`. The message from `getTotal` is gone and a new one appears:

```text
TypeError: Cannot read properties of undefined (reading '0')
    at getRound1Scores (file:///…/stats.js:27:30)
    at getPanelLines (file:///…/panel.js:21:67)
    at file:///…/check.js:7:20
```

**Then put everything back**: remove the three lines from `getTotal` (Ctrl+Z), and give Emma her two scores again in `data.js`:

```js
  { name: 'Emma', rounds: [9, 15] },
```

Save, reload: eight towers again. Check this before you go on: the next live moments count on it.

## Slides 25 to 30 · reproduce, make it smaller, fix

1. Slide 25: point at "Hoogste totaal: 9" in your browser tab. Noor has 34.
2. Slide 26: type `node check.js`:

```text
Aantal spelers: 8
Geslaagd: 6 van 8
Gemiddelde totaal: 24.4
Gemiddelde ronde 1: 11.5
Gemiddelde ronde 2: 12.9
Hoogste totaal: 9
Laagste totaal: 9
Winnaar: Noor (34)
```

3. Slide 27: open `repro.js` and put these lines under the comments. Type `node repro.js`: it prints `9`.

```js
import { getHighest } from './stats.js';

console.log(getHighest([31, 19, 34, 20, 25, 9, 33, 24]));
```

   Change only the list and run again each time: `[31, 19, 34, 20]` gives `34`, `[25, 9, 33, 24]` gives `9`, `[25, 9]` gives `9`, `[25]` gives `25`.
4. Slide 28: replace the `console.log` line by `console.log([25, 9].sort());`. It prints `[ 25, 9 ]`.
5. Slide 29 (optional prompt): ask why, with the prompt on the slide. Then predict with the room and run `console.log([100, 25, 9].sort());`: it prints `[ 100, 25, 9 ]`.
6. Slide 30: replace `getHighest` in `stats.js` by the version with a loop. Paste it, or ask your agent ("Vervang sort in getHighest door een loop. De function verandert haar input niet. Verander niets anders.").

```js
export function getHighest(totals) {
  if (totals.length === 0) {
    return null;
  }
  let highest = totals[0];
  for (const total of totals) {
    if (total > highest) {
      highest = total;
    }
  }
  return highest;
}
```

   Put `console.log(getHighest([25, 9]));` in `repro.js` with the import line: it prints `25`. `node check.js` now says "Hoogste totaal: 34". Empty `repro.js` again, except for the two comment lines.

Do not skip step 6: the pictures and outputs of section 5.3 count on "Hoogste totaal: 34".

## Slides 35 to 42 · a missing score, measured with console.log

1. Slide 35: in `data.js`, change the line of Fatima to:

```js
  { name: 'Fatima', rounds: [12] },
```

   Save and reload. No red line in the console. The panel says "Gemiddelde totaal: NaN" and "Gemiddelde ronde 2: NaN", the list says "Fatima: NaN", and the fifth tower is a flat red tile. `node check.js`:

```text
Aantal spelers: 8
Geslaagd: 5 van 8
Gemiddelde totaal: NaN
Gemiddelde ronde 1: 11.5
Gemiddelde ronde 2: NaN
Hoogste totaal: 34
Laagste totaal: 9
Winnaar: Noor (34)
```

2. Slide 38, hypothesis 1. In `panel.js`, in `getPanelLines`, add one line under `const totals = getTotals(players);`:

```js
  console.log(calculateAverage([10, 20]));
```

   `node check.js` prints `15` as its second line. The function calculates correctly.
3. Hypothesis 2. Replace that line by `console.log(totals);`. `node check.js` prints:

```text
[
   31, 19, 34, 20,
  NaN,  9, 33, 24
]
```

4. Hypothesis 3. Open `data.js` and point at `rounds: [12]`. Remove your `console.log` line from `panel.js`.
5. Slide 40 (optional prompt), new chat:

```text
Verander niets aan de code. Sinds ik de regel van Fatima aanpaste in data.js, staat in het paneel "Gemiddelde totaal: NaN" en "Fatima: NaN". Verwacht: getallen. De console toont geen foutmelding.
Geef drie mogelijke oorzaken. Zeg bij elke oorzaak hoe ik ze test met één console.log.
```

6. Slide 42: change the line of Fatima to `rounds: [12, 0]`, the rule the organiser decided. `node check.js`:

```text
Aantal spelers: 8
Geslaagd: 5 van 8
Gemiddelde totaal: 22.8
Gemiddelde ronde 1: 11.5
Gemiddelde ronde 2: 11.3
Hoogste totaal: 34
Laagste totaal: 9
Winnaar: Noor (34)
```

   Leave Fatima at `[12, 0]`: the output on slide 57 counts on it. The output on slide 42 itself, with "Gemiddelde ronde 2: NaN", is what you get when a fix is made in `getTotal` only. Do not do that one live: the slide shows it.

## After slide 38 · a breakpoint (optional, about 2 min)

Not on a slide: the debugger itself is on slides 16 to 18. Here you use it as a measuring tool for the second hypothesis. The course text shows this in an info box in 5.3. Do it with Fatima still at `rounds: [12]`, and after you removed your `console.log` lines.

1. In the browser tab of the scoreboard: F12, tab **Sources**. Click `panel.js` in the list on the left, under `localhost:3000`.
2. Click the line number of `const winner = findWinner(players);` (line 17). The number gets a blue marker.
3. Reload the page. It pauses on that line. Under **Scope**, click the triangle in front of `totals`: `31, 19, 34, 20, NaN, 9, 33, 24`. The same measurement as hypothesis 2, without a line of `console.log`.
4. Click **Resume** (the blue button, or F8). Click the line number again to remove the breakpoint.

Say: an agent usually measures with `console.log` and with tests, because it can read that output in the terminal. A breakpoint shows the values only to you.

## Slide 47 · code smells

New chat, in your working copy of `scorebord2`:

```text
Verander niets aan de code. Zoek code smells in stats.js en panel.js. Geef er hoogstens vijf. Geef per code smell de regel, het soort smell en in één zin waarom het hier een probleem is.
```

Take two smells from the answer and ask the three questions of the slide. For "top is dead code": press Ctrl+Shift+F and search for `top(`. The only hit is the function itself in `stats.js`.

**Fallback.** Open `stats.js` and point at the smells of slide 46 yourself.

## Slide 51 · one refactoring step

1. Type `node check.js` and leave the output on screen: it is the output of step 6 above, with Fatima at `[12, 0]`.
2. Send the prompt of the slide in a new chat:

```text
In stats.js staan getRound1Scores en getRound2Scores. Ze doen hetzelfde, voor een andere ronde. Maak één function getRoundScores(players, roundNumber), met roundNumber 1 of 2. Gebruik ze in panel.js in plaats van de twee oude functions. Verwijder de oude functions nog niet. Het gedrag blijft precies hetzelfde. Verander niets anders.
```

3. Type `node check.js` again and compare the eight lines with the room. Reload the page. Look in the chat at which files changed: `stats.js` and `panel.js`, and nothing else.

**Fallback by hand.** Add this function to `stats.js`:

```js
// Makes a list with the scores of one round. roundNumber is 1 or 2.
export function getRoundScores(players, roundNumber) {
  const scores = [];
  for (const player of players) {
    scores.push(player.rounds[roundNumber - 1]);
  }
  return scores;
}
```

In `panel.js`, replace `getRound1Scores,` and `getRound2Scores,` in the import list by `getRoundScores,`, and replace `getRound1Scores(players)` by `getRoundScores(players, 1)` and `getRound2Scores(players)` by `getRoundScores(players, 2)`. The output of `node check.js` stays the same.

## Slide 57 · one character less (optional, about 1 min)

In the new `getRoundScores`, remove ` - 1`, so the line reads `scores.push(player.rounds[roundNumber]);`. `node check.js`:

```text
Aantal spelers: 8
Geslaagd: 5 van 8
Gemiddelde totaal: 22.8
Gemiddelde ronde 1: 11.3
Gemiddelde ronde 2: NaN
Hoogste totaal: 34
Laagste totaal: 9
Winnaar: Noor (34)
```

`node test.js` shows 14 times `OK` and two tests with `FOUT`. Slide 59 shows the first of the two:

```text
FOUT  paneel: het gemiddelde van ronde 1
      verwacht: Gemiddelde ronde 1: 12.3
      gekregen: Gemiddelde ronde 1: 11
FOUT  paneel: het gemiddelde van ronde 2
      verwacht: Gemiddelde ronde 2: 11
      gekregen: Gemiddelde ronde 2: NaN

Aantal tests met FOUT: 2
```

Put ` - 1` back (Ctrl+Z). `node test.js` ends with "Alle tests zijn geslaagd." If your agent wrote the function differently on slide 51, skip this moment and show the slides.

## Slides 58 to 62 · tests, a regression test, and an agent that runs them

Stop the server and switch to your second working copy: open the folder `scorebord2-tests` in VS Code. It still has the old `getHighest`.

1. Slide 58: type `node test.js`. Sixteen lines with `OK`, then "Alle tests zijn geslaagd." Open `test.js` and show the function `check` at the top and the three groups of tests.
2. Slide 61: add this line in `test.js`, under the comment `// --- Regression tests: one test for every bug that was fixed ---`:

```js
check('getHighest: een totaal onder 10', getHighest([25, 9]), 25);
```

   `node test.js` now ends with:

```text
FOUT  getHighest: een totaal onder 10
      verwacht: 25
      gekregen: 9

Aantal tests met FOUT: 1
```

3. Slide 62: send the prompt of the slide in a new chat:

```text
Los de fout in getHighest op: getHighest([25, 9]) moet 25 geven. Voer daarna node test.js uit. Alle tests moeten slagen. Verander test.js niet. Verander niets anders.
```

   When the agent asks permission for a command, read it aloud before you approve it. Afterwards do the three checks of the slide yourself: type `node test.js` (17 times `OK`), open `test.js` (your line is still there, unchanged), and read the new `getHighest`.

**Fallback.** Paste the `getHighest` with a loop from the part about slide 30, and type `node test.js`: all 17 tests pass.

## Slide 63 · a headless browser (optional, about 2 min)

In `scorebord2-tests`: type `node server.js` in the first terminal, and in the second:

```bash
node browser-check.js
```

```text
Browser zonder venster: C:/Program Files/Google/Chrome/Application/chrome.exe
Pagina: http://localhost:3000
OK    het paneel toont de cijfers
OK    het paneel toont elke speler

De pagina toont wat panel.js maakt.
```

The first line shows the browser that was found on your machine. No window opens. If your server runs on another port, type `node browser-check.js 3001`.

Then show a fault that `test.js` cannot see. In `index.html`, change `id="playerList"` to `id="playerlist"` (the fault of exercise E1). `node test.js` still says that all tests pass. `node browser-check.js` says:

```text
OK    het paneel toont de cijfers
FOUT  het paneel toont elke speler
      verwacht: Amira: 31,Jonas: 19,Noor: 34,Lars: 20,Fatima: 25,Kobe: 9,Yusuf: 33,Emma: 24
      gekregen: null

Aantal checks met FOUT: 1
```

Put the id back.

## If a live moment fails

- **The agent harness is slow or gives an answer you cannot use.** Every prompt moment above has a fallback by hand. Say what you expected, do the step yourself and move on.
- **Your working copy is in a state you do not trust.** Copy `scorebord2` from this folder again. After slide 30 that fresh copy needs the loop in `getHighest` again (see "Slides 25 to 30"), and after slide 42 also the line of Fatima as `rounds: [12, 0]`: the outputs on slides 51 and 57 count on both. For section 5.3 you can also open `scorebord2-opgelost`: `getHighest` is already fixed there, and the line under which you add a `console.log` in `panel.js` is the same. Do not use it for 5.4 and 5.5: its code smells are gone.
- **No internet.** The page does not load three.js, but `node check.js`, `node repro.js` and `node test.js` work without a connection. Use the pictures on slides 8, 25 and 35.
