# Live demos for module 2

One small project, `webshop/`, for every live moment of the lecture. Open it in Visual Studio Code with your agent harness. Start a new chat for each prompt.

After a demo the files are changed. Put everything back with, from the repo root:

```bash
git restore lessen/module-2/live
git clean -fd lessen/module-2/live
```

From inside this folder the same is `git restore .` and `git clean -fd .`.

This only works when this folder is committed. On files that git does not track, `git restore` fails and `git clean` deletes the whole folder. In that case, copy `webshop/` and `check-korting.js` to a folder outside the repo and give the demo on that copy.

```text
live/
  check-korting.js       checks total() against the rules (run from this folder)
  webshop/
    docs/kortingen.md    the rules for discounts
    src/cart.js          subtotal and total; total has no discount yet
    src/orders.js        two functions with unhandled edge cases
    src/utils.js         three small functions; sumPrices uses a while loop
```

## Slide 7 · two kinds of vague

In a plain chat window. First the prompt that says almost nothing. Most models ask back what you mean:

```text
Maak een function.
```

Then, in two new chats, the prompt that says just enough to start:

```text
Maak een function die een prijs berekent.
```

Now it starts without asking. Compare the two results: language, name, how the price is calculated.

## Slide 30 · context: with and without pointing the way

`total` in `src/cart.js` returns the subtotal. The rules for the student discount are in `docs/kortingen.md`: 15%, only for orders from 2000 eurocent, rounded down.

Prompt A:

```text
Voeg studentenkorting toe aan total.
```

Then check, from `lessen/module-2/live`:

```bash
node check-korting.js
```

Reset, new chat, prompt B:

```text
Voeg studentenkorting toe aan de function total in src/cart.js.
De regels voor kortingen staan in docs/kortingen.md.
```

Run the check again. All five cases should pass.

Without any change, the check prints 2 of 5: the two cases without a discount.

## Slide 31 · selecting code

Open `src/utils.js`, select the function `sumPrices`, and show that the selection goes along with the prompt. Then:

```text
Herschrijf de geselecteerde function met een for...of-loop in plaats van een while-loop.
Behoud de logica en de naam van de function. Verander niets anders.
```

Only the loop inside `sumPrices` should change.

## Slide 37 · a question is not an order

Prompt A:

```text
Zitten er fouten in src/orders.js?
```

Check with `git status` whether the agent changed the file. Reset, new chat, prompt B:

```text
Verander niets aan de code. Geef alleen een analyse in tekst: welke edge cases handelt src/orders.js niet af?
```

What a good analysis mentions:

- `averageOrderValue([])` gives `NaN` (0 divided by 0).
- An order without `total` makes the result `NaN`.
- `findOrder` uses `==`, so the number `12` and the text `"12"` count as equal.
- `findOrder` gives `undefined` when nothing is found.

## Slide 51 · let a model improve your prompt

In a plain chat window:

```text
Help me deze prompt te verbeteren. Voer de prompt zelf niet uit.
Stel me eerst vragen als iets onduidelijk is.

Prompt:
ik wil iets waarmee ik kan zien welke studenten hun taak nog niet hebben ingeleverd, liefst in een lijst of zo, en het moet in javascript
```

Read the result with the class and mark what the model added that was never said.
