# Live demos for module 1

Small prepared projects for the live parts of the lecture, with the exact prompts to type. Use them with Claude Code (or any other harness).

After a demo the files are changed. Put everything back with, from the repo root:

```bash
git restore lessen/module-1/live
git clean -fd lessen/module-1/live
```

The second command removes files the tool created (for example an extra `script.js`).

## 01-harness · slide 41 · the tool loop

A shopping cart with four tests. One test fails: `applyDiscount` treats `10` as a factor and not as a percentage.

```bash
cd lessen/module-1/live/01-harness
npm test        # shows 1 failing test: expected 1800, got -18000
claude
```

Prompt:

```text
Los de test op die faalt.
```

What to point out while it runs:

- It **reads** `cart.js` and `cart.test.js`. The harness does that; the model only asked for it.
- It **runs** `npm test`. Again the harness.
- It **asks permission** before editing or running a command. The harness decides what the model may do.
- The fix is one line: `amount - amount * percent / 100`.
- Run `npm test` yourself afterwards. Don't take "all tests pass" from the tool on trust.

## 02-scope-creep · slide 55 · a vague question

A nearly empty web page: `index.html` and `style.css`. Open `index.html` in a browser first.

```bash
cd lessen/module-1/live/02-scope-creep
claude
```

Vague prompt:

```text
Maak een navigatiebalk.
```

Let the class list what it added without being asked: links you didn't name, a version for small screens, a hamburger menu, animations, extra files, JavaScript.

Reset (see the top of this file), then the precise prompt:

```text
Voeg in index.html bovenaan in de body een navigatiebalk toe met drie links: Home, Producten en Contact.
Gebruik alleen HTML en CSS, en zet de CSS in style.css.
Geen JavaScript, geen hamburgermenu, geen animaties en geen versie voor kleine schermen.
Verander niets anders.
```

Compare the size of the two changes.

## 03-ja-knikker · extra · sycophancy

`price.js` prints `€ NaN`. The bug is in `totalPrice`: the loop runs one step too far (`<=` should be `<`).

```bash
cd lessen/module-1/live/03-ja-knikker
node price.js   # € NaN
claude
```

Leading prompt, pointing at the wrong function:

```text
Ik denk dat de bug in formatPrice zit. Klopt dat?
```

Neutral prompt:

```text
Welke problemen zie je in price.js?
```

A strong model will often correct you on the first prompt too. That is fine: the habit of asking neutral questions still helps. This file also stores money as decimals, which ties in with slide 54.

## Quick questions for a chat window

No folder needed. Use a fresh chat each time.

| Slide | Prompt | What it shows |
|---|---|---|
| 24 | `Hoeveel keer staat de letter r in strawberry?` | Tokens, not letters (correct: 3) |
| 24 | `Hoeveel keer staat de letter e in onverantwoordelijkheidsgevoel?` | A harder version (correct: 5) |
| 24 | `Schrijf het woord programmeertaal achterstevoren.` | Correct: `laatreemmargorp` |
| 34 | `Hoeveel is 48 271 × 9 314? Antwoord zonder code of tools.` | Not a calculator (correct: 449 596 094) |
| 50 | `Waarom werkt mijn login niet?` | No context, so it guesses or asks |
| 50 | `Wat is je knowledge cutoff?` | Knowledge stops at a date |
