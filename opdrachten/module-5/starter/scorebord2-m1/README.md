# Scorebord, versie 2

Een 3D-scorebord voor een quizavond. Elke speler is een toren. Hoe meer punten, hoe hoger de toren.

Nieuw in versie 2: de quiz heeft twee rondes. Het paneel toont ook het gemiddelde per ronde, het hoogste totaal en het laagste totaal.

## De regels van de quiz

- De quiz heeft twee rondes. Een speler haalt in elke ronde 0 tot 20 punten.
- Het totaal van een speler is de som van de twee rondes: 0 tot 40 punten.
- Een speler is geslaagd met een totaal van minstens 20 punten.
- De toren van een geslaagde speler is groen. De andere torens zijn rood.
- De witte lat hangt op de hoogte van 20 punten.
- De winnaar is de speler met het hoogste totaal. Boven de toren van de winnaar draait een gouden diamant.

## Starten

Typ in de terminal van deze map:

```bash
node server.js
```

Open daarna `http://localhost:3000` in je browser. Met de spatiebalk groeien de torens opnieuw.

## Controleren zonder browser

De tekst van het paneel tonen in de terminal:

```bash
node check.js
```

De tests uitvoeren:

```bash
node test.js
```
