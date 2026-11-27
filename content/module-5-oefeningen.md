---
module: 5
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 5

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 5. Het zijn vijf oefeningen, in de volgorde van de les: E1, M1, M2, M3 en M4. Je maakt ze tijdens de les. De extra-reeks is optioneel.

Je kan alle oefeningen zelfstandig maken, in de les of thuis. Elke oefening zegt wat je opent, wat je stuurt, hoe je controleert en wat je noteert. Lees eerst [Voor je begint](#start).

Je werkt je antwoorden uit in een invulbestand en levert dat in via de opdracht **Oefeningen module 5** in Canvas. Daar vind je ook het invulbestand en de startbestanden. Je levert alleen het invulbestand in: prompts, code, foutmeldingen en output plak je erin, als tekst. Bewaar je mappen wel bij je portfolio.

## Zo doorloop je deze les {#plan}

Volg je de les niet in het lokaal? Dan maak je de oefeningen zelfstandig, in deze volgorde. Lees telkens eerst de sectie in [module 5](./module-5.md) en maak dan de oefening. Reken op ongeveer twee en een half uur. In alle oefeningen werk je met hetzelfde project: versie 2 van het 3D-scorebord uit module 4.

| Stap | Lees | Maak | Tijd |
| --- | --- | --- | --- |
| 1 | 5.1 Foutmeldingen en stack traces lezen | E1 | 30 min |
| 2 | 5.2 Een fout reproduceren: het minimal example | M1 | 30 min |
| 3 | 5.3 Debuggen met hypothesen | M2 | 30 min |
| 4 | 5.4 Code smells herkennen en 5.5 Refactoring | M3 | 35 min |
| 5 | 5.6 Regressions voorkomen met tests | M4 | 30 min |

## Voor je begint {#start}

**Wat heb je nodig?**

- Het **invulbestand** en de **startbestanden** (een zip). Je vindt ze bij de opdracht in Canvas. Pak de zip uit.
- Een **agent harness**, zoals GitHub Copilot in Visual Studio Code. Die heb je nodig voor elke oefening waarin je een prompt verstuurt. Is dat nog niet in orde? Volg dan de startgids bij de opdracht in Canvas.
- Een **browser**, zoals Chrome, Edge of Firefox, en een internetverbinding. Het project laadt three.js van het internet.
- **Node.js**, voor alle oefeningen. Open in Visual Studio Code een terminal (**Terminal > New Terminal**) en typ `node --version`. Zie je een versienummer, dan is het in orde. Zie je een foutmelding? Installeer dan de LTS-versie van [nodejs.org](https://nodejs.org).

**De mappen in de startbestanden**

| Map | Voor oefening | Wat erin zit |
| --- | --- | --- |
| `scorebord2-e1` | E1 | het scorebord, versie 2, met één extra fout |
| `scorebord2-m1` | M1 en X6 | het scorebord, met de scores van een andere quizavond |
| `scorebord2-m2` | M2 | het scorebord, met één extra fout |
| `scorebord2-m3` | M3 | het scorebord |
| `scorebord2-m4` | M4 | het scorebord |
| `scorebord2-thuis` | X2, X4, X7, X8, X11, X12, X13 en X14 | het scorebord, met een extra hulpbestand voor X11 |
| `foutmeldingen` | X1 | vier kleine bestanden met elk één fout |
| `gemiddelde` | X3 | één bestand met een function |
| `zoek-speler-a` en `zoek-speler-b` | X5 | twee keer hetzelfde bestand |
| `korting` | X9 | één bestand met een function |

Waarom zo vaak hetzelfde project? Elke oefening begint zo met een project dat nog niet veranderd is. Je hoeft nooit iets ongedaan te maken, en wat je in een vorige oefening deed, blijft bewaard.

**Het project in het kort**

Het scorebord toont de scores van een quizavond met twee rondes. De regels van de quiz staan in `README.md`, de afspraken voor de code in `AGENTS.md`. In [5.1](./module-5.md#5_1) staat wat er nieuw is tegenover versie 1.

| Bestand | Taak |
| --- | --- |
| `index.html` en `style.css` | de structuur en de opmaak van de pagina |
| `data.js` | de scores: elke speler heeft een lijst `rounds` met twee scores |
| `stats.js` | de berekeningen |
| `panel.js` | de tekst van het paneel |
| `main.js` | de 3D-scène. Dit bestand zet ook de tekst van `panel.js` op de pagina |
| `server.js`, `check.js`, `repro.js`, `test.js`, `package.json` | hulpbestanden |

**Zo werk je met de agent harness**

- **Maak je agent harness klaar.** Open de chat. Controleer of je permissions goed staan, en kies een model waar je vertrouwen in hebt, als je agent harness je laat kiezen (zie de startgids).
- **Open de juiste map.** Elke oefening zegt welke map je opent (**File > Open Folder**). Zo ziet de agent alleen de bestanden van die oefening.
- **Let op je verbruik.** Elke prompt kost AI credits, en je tegoed per maand is beperkt (zie de startgids). Daarom zegt elke oefening hoeveel prompts je hoogstens stuurt. Hou je daaraan.
- **Start een nieuw gesprek** (**New Chat**) waar de oefening dat zegt.
- **Noteer wat je stuurde en gebruikte.** Plak elke prompt die je zelf schrijft in je invulbestand. Schrijf bij elke oefening waarin je een prompt verstuurt ook welke agent harness en welk model je gebruikte. Staat de model picker op Auto en zie je de naam van het model niet? Schrijf dan `Auto`.

**Zo start je het project**

Je bekijkt het project via een lokale server (zie [3.4](./module-3.md#3_4)).

1. Open de map van de oefening in Visual Studio Code. Open een terminal (**Terminal > New Terminal**) en typ `node server.js`.
2. In de terminal staat welke map de server toont. Controleer of dat de map van je oefening is.
3. Open in je browser het adres `http://localhost:3000`. Je ziet acht torens en een paneel met cijfers. In oefening E1 is dat anders: daar begint de oefening mee.
4. Na elke wijziging herlaad je de pagina in je browser met F5 (op een Mac Cmd+R).
5. Klaar met de oefening? Stop de server: klik in de terminal en druk op Ctrl+C. Doe dat altijd voor je een andere map opent.

Zie je in de terminal "Poort 3000 is al in gebruik"? Dan draait er nog een server in een andere terminal of in een ander venster. Stop die eerst met Ctrl+C. Vind je geen andere server? Dan gebruikt een ander programma de poort. Typ dan `node server.js 3001` en open `http://localhost:3001`.

**Zo open je de console**

Druk in je browser op F12 (op een Mac Cmd+Option+I) en kies **Console**. Rode regels zijn foutmeldingen: in [5.1](./module-5.md#5_1) staat een afbeelding van zo'n melding. Je kan een melding selecteren, kopiëren en plakken.

Een agent leest de console van je browser niet. Wil je dat hij een melding uit de console kent, plak ze dan in je prompt (zie [5.1](./module-5.md#5_1)).

**Zo controleer je zonder browser**

De server blijft draaien in je eerste terminal. Open daarom een tweede terminal (**Terminal > New Terminal**). Je hebt drie commando's:

| Commando | Wat het doet |
| --- | --- |
| `node check.js` | toont de tekst van het paneel in de terminal |
| `node repro.js` | voert het bestand uit waarin jij een minimal example zet (zie [5.2](./module-5.md#5_2)) |
| `node test.js` | voert de tests uit, en toont per test `OK` of `FOUT` (zie [5.6](./module-5.md#5_6)) |

In het project zoals je het krijgt, toont `node check.js` dit:

```output
Aantal spelers: 8
Geslaagd: 6 van 8
Gemiddelde totaal: 24.4
Gemiddelde ronde 1: 11.5
Gemiddelde ronde 2: 12.9
Hoogste totaal: 9
Laagste totaal: 9
Winnaar: Noor (34)
```

"Hoogste totaal: 9" is fout. Dat is de fout uit [5.2](./module-5.md#5_2). Ze zit in elke map, en je hoeft ze in de core-reeks niet op te lossen. De map `scorebord2-m1` heeft andere scores, en dus een andere output.

## E1 Lees de foutmelding {#e1 .easy}

Je leest een foutmelding en een stack trace, en je zoekt de oorzaak (zie [5.1](./module-5.md#5_1)). Je werkt in de map `scorebord2-e1`. Je gebruikt voor deze oefening geen AI.

1. Open de map `scorebord2-e1` en start het project (zie [Voor je begint](#start)). Vergelijk wat je ziet met de eerste afbeelding in 5.1: het scorebord met acht torens. Noteer twee dingen die ontbreken.
2. Open de console van je browser. Kopieer de rode melding, met alle regels die met `at` beginnen, en plak ze in je invulbestand.
3. Lees de melding in de volgorde van 5.1 en vul in:

```text
Het type:                               ...
De boodschap, in je eigen woorden:      ...
De fout trad op in:                     function ..., bestand ..., regel ...
Die function werd aangeroepen door:     function ..., regel ...
```

4. De function uit de bovenste regel van de stack trace wordt in `main.js` twee keer aangeroepen. Welke van de twee aanroepen liep mis? Schrijf de regel code op. Aan welke regel van de stack trace zie je dat?
5. De melding gaat over het paneel. Waarom zie je dan ook geen torens? Antwoord in één zin.
6. Zoek de oorzaak, zonder AI. Dit helpt je: `document.getElementById(id)` zoekt in de pagina het element met dat id. Bestaat er geen element met dat id, dan geeft het `null`. Zoek in `index.html` het element dat de function nodig heeft. Vergelijk het id daar teken per teken met het id in `main.js`. Noteer het bestand en de regel waar de oorzaak zit.
7. Los de fout zelf op: verander één teken in `index.html`. Bewaar het bestand en herlaad de pagina. Controleer drie dingen: zie je de torens, staan er acht namen in het paneel, en is de rode melding weg uit de console?
8. Was de plaats van de fout ook de plaats van de oorzaak? Leg uit in maximaal twee zinnen.

## M1 Reproduceer en verklein {#m1}

Je laat een fout op commando optreden, en je verkleint ze tot een minimal example (zie [5.2](./module-5.md#5_2)). Je werkt in de map `scorebord2-m1`. Je stuurt in deze oefening hoogstens één prompt.

In deze map staan de scores van een andere quizavond, met andere spelers.

1. Stop de server van de vorige oefening. Open de map `scorebord2-m1` en start het project. Kijk kritisch: vergelijk de regels "Hoogste totaal" en "Laagste totaal" in het paneel met de lijst van de spelers eronder. Noteer het verwachte gedrag en het werkelijke gedrag.
2. Reproduceer de fout zonder browser: typ in een tweede terminal `node check.js`. Staat de fout er ook? Wat leer je daaruit over de plaats van de fout? Antwoord in één zin.
3. Zoek in `panel.js` welke function het foute cijfer berekent. In welk bestand staat die function? Lees ze nog niet.
4. Open `repro.js`. Zet deze regels onder de comments, bewaar het bestand en typ `node repro.js`. De lijst bevat de acht totalen van deze avond. Noteer de output.

```js
import { getLowest } from './stats.js';

console.log(getLowest([27, 35, 23, 31, 21, 22, 32, 26]));
```

5. Maak de lijst kleiner. Verander in `repro.js` alleen de lijst, typ telkens `node repro.js` en vul de tabel in. De laatste lijst kies je zelf.

```text
Lijst              | Resultaat | Wat verwacht je? | Is de fout er nog?
[27, 35, 23, 31]   | ...       | ...              | ...
[27, 35]           | ...       | ...              | ...
[27]               | ...       | ...              | ...
[27, 15]           | ...       | ...              | ...
[15]               | ...       | ...              | ...
...                | ...       | ...              | ...
```

6. Wat is je minimal example: de kleinste aanroep die de fout nog toont? Voor welke lijsten is het resultaat fout, en voor welke juist? Antwoord in één zin.
7. Lees nu de function `getLowest` in `stats.js`. Welke regel is de oorzaak? Welke aanname maakt die regel over een totaal? Lees de regels van de quiz in `README.md`: klopt die aanname in versie 2?
8. Schrijf één prompt met je minimal example, het verwachte gedrag en het werkelijke gedrag. Vraag naar de oorzaak en naar de kleinste oplossing, en zeg dat de agent niets mag veranderen. Stuur hem in een nieuw gesprek en plak je prompt in je invulbestand. Noemt het model dezelfde regel als jij? Noteer één ding dat het antwoord toevoegde aan wat je al wist. Vind je niets, noteer dat dan.

Je lost de fout nog niet op. Dat doe je in M4, met een test. Je minimal example uit stap 6 heb je daar nodig: het staat in je invulbestand.

## M2 Test je hypothesen {#m2}

Je zoekt de oorzaak van een fout zonder foutmelding, met hypothesen en metingen (zie [5.3](./module-5.md#5_3)). Je werkt in de map `scorebord2-m2`. Je stuurt in deze oefening hoogstens twee prompts.

In deze map zit een fout in een van de twee gemiddelden per ronde. De regel "Hoogste totaal: 9" is ook fout, maar die bedoelen we hier niet: laat ze staan.

1. Stop de server van de vorige oefening. Open de map `scorebord2-m2` en start het project. Typ in een tweede terminal `node check.js` en plak de output in je invulbestand.
2. Observeer. Vergelijk "Gemiddelde ronde 1" en "Gemiddelde ronde 2". Reken het gemiddelde van ronde 2 zelf uit: tel in `data.js` de tweede score van elke speler op, en deel door 8. Rond af op één cijfer na de komma, zoals het paneel. Noteer het verwachte gedrag en het werkelijke gedrag.
3. Schrijf twee hypothesen op, zonder AI. Het cijfer legt een weg af: van `data.js`, door een function in `stats.js` die de scores van ronde 2 verzamelt, door `calculateAverage`, naar `panel.js`. Op elke plaats van die weg kan het mislopen.

```text
Hypothese (mogelijke oorzaak) | Wat meet je?   | Wat zie je als ze klopt?
1. ...                        | ...            | ...
2. ...                        | ...            | ...
```

4. Test één hypothese met één meting. Zet een regel met `console.log` in `panel.js`, in de function `getPanelLines`, onder de regel `const totals = getTotals(players);`. Je mag elke waarde tonen: een lijst, een lengte of het resultaat van een function, zoals in `console.log(getTotals(players));`. Typ `node check.js`. Noteer je regel, de output en je besluit: klopt de hypothese of niet?
5. Stuur in een nieuw gesprek een prompt die drie mogelijke oorzaken vraagt. Geef het verwachte en het werkelijke gedrag, zeg dat de agent niets mag veranderen, en vraag bij elke oorzaak een test met één `console.log`. Plak je prompt in je invulbestand. Staat een van jouw hypothesen in het antwoord? Welke oorzaak van het model verklaart het best wat je ziet?
6. Ken je de oorzaak nog niet? Test dan nog één hypothese uit het antwoord, zoals in stap 4. Zoek daarna de regel in de code. Noteer het bestand, de function en de regel, en zeg in je eigen woorden wat er fout is.
7. Stuur in hetzelfde gesprek een tweede prompt die de fout laat oplossen. Zeg waar de oorzaak zit, vraag de kleinste wijziging, en zeg dat de agent niets anders mag veranderen.
8. Controleer:
   - Typ `node check.js`. Klopt "Gemiddelde ronde 2" nu met je berekening uit stap 2?
   - Zijn de andere regels dezelfde als in stap 1?
   - Kijk in de chat welke bestanden de agent aanpaste. Veranderde er iets wat je niet vroeg?
   - Staan je regels met `console.log` er nog? Haal ze weg.
9. Leg in maximaal twee zinnen uit waarom de code fout was. Kijk naar de function die net boven de fout staat: hoe denk je dat deze fout ontstond?

## M3 Code smells, en één refactoring {#m3}

Je zoekt code smells, je beslist welke je aanpakt, en je doet een refactoring in twee kleine stappen (zie [5.4](./module-5.md#5_4) en [5.5](./module-5.md#5_5)). Je werkt in de map `scorebord2-m3`. Je stuurt in deze oefening hoogstens twee prompts.

1. Stop de server van de vorige oefening. Open de map `scorebord2-m3` en start het project. Typ in een tweede terminal `node check.js` en plak de output in je invulbestand. Dat is het gedrag van voor de refactoring. Er staat "Hoogste totaal: 9" in: de fout uit 5.2. Laat ze staan. Een refactoring verandert het gedrag niet, ook het foute gedrag niet.
2. Lees `stats.js` en `panel.js`, zonder AI. Zoek drie code smells uit de tabel van 5.4.

```text
Bestand en regel | Soort code smell | Waarom is het hier een probleem?
1. ...           | ...              | ...
2. ...           | ...              | ...
3. ...           | ...              | ...
```

3. Stuur in een nieuw gesprek deze prompt:

```text
Verander niets aan de code. Zoek code smells in stats.js en panel.js.
Geef er hoogstens vijf. Geef per code smell de regel, het soort smell en
in één zin waarom het hier een probleem is.
```

4. Vergelijk het antwoord met je eigen lijst. Noteer één code smell die het model vond en jij niet. Controleer die zelf in de code: klopt het? Is er een code smell in het antwoord die je niet zou aanpakken? Noteer welke, en waarom. Vind je er geen, noteer dat dan.
5. Stap 1 van de refactoring. In `panel.js` staat drie keer dezelfde berekening om af te ronden: `Math.round(... * 10) / 10`. Laat de agent er één function van maken, in `panel.js`. Kies zelf de naam. Schrijf je prompt: zeg wat verandert, in welk bestand, welke naam de function krijgt en wat hetzelfde blijft. Stuur hem in hetzelfde gesprek en plak hem in je invulbestand.
6. Controleer:
   - Typ `node check.js`. Is de output regel per regel dezelfde als in stap 1?
   - Herlaad de pagina. Ziet ze er hetzelfde uit?
   - Kijk in de chat welke bestanden de agent aanpaste. Veranderde er iets wat je niet vroeg?
7. Stap 2 van de refactoring doe je zelf, zonder agent. In `stats.js` staat de function `top`. Zoek of een bestand ze nog aanroept: druk in Visual Studio Code op Ctrl+Shift+F (op een Mac Cmd+Shift+F) en zoek naar `top(`. Noteer wat je vindt. Let op: de regel `export function top(a) {` maakt de function. Dat is geen aanroep. Roept geen enkel bestand ze aan, verwijder de function dan. Typ opnieuw `node check.js` en herlaad de pagina. Is alles nog hetzelfde?
8. Plak de nieuwe function uit stap 5 in je invulbestand. Is `panel.js` nu beter, of alleen anders? Noem het criterium uit [4.4](./module-4.md#4_4) waarop je dat ziet, in maximaal twee zinnen.

## M4 Een regression test, en een agent die tests uitvoert {#m4}

Je schrijft een regression test voor de fout uit M1, en je laat een agent de fout oplossen met de tests als controle (zie [5.6](./module-5.md#5_6)). Je werkt in de map `scorebord2-m4`. Je stuurt in deze oefening hoogstens twee prompts.

1. Stop de server van de vorige oefening en open de map `scorebord2-m4`. De server heb je in deze oefening niet nodig. Typ in de terminal `node test.js`. Hoeveel tests tonen `OK`, en hoeveel `FOUT`?
2. Open `test.js`. De function `check` bovenaan hoef je niet in detail te lezen. Kies onder "Unit tests" één test en noteer: welke function test ze, met welke input, en welke waarde verwacht ze? Waarom is de test "paneel: het gemiddelde van ronde 1" een integration test en geen unit test? Antwoord in één zin.
3. Alle tests slagen. Toch zit de fout uit M1 ook in dit project: `getLowest` geeft een fout resultaat als alle totalen boven 20 liggen. Eén test gebruikt `getLowest`: de test "paneel: het laagste totaal". Met welke totalen werkt die test? Waarom ziet ze de fout niet?
4. Schrijf een regression test. Zet deze regel in `test.js`, onder de comment `// --- Regression tests: one test for every bug that was fixed ---`. Vond je in M1 een ander minimal example, gebruik dan dat: verander de lijst en de verwachte waarde in de regel. Noteer de regel die je toevoegde.

```js
check('getLowest: alle totalen boven 20', getLowest([27, 35]), 27);
```

5. Typ `node test.js`. Je nieuwe test moet nu `FOUT` tonen. Plak de regels van die test in je invulbestand. Waarom is het goed dat je de test eerst ziet falen?
6. Schrijf je prompt. Vraag om de fout in `getLowest` op te lossen, en zeg wat de function moet geven voor de input van je test. Zeg dat de agent daarna `node test.js` uitvoert, dat alle tests moeten slagen, dat hij `test.js` niet mag veranderen en dat hij niets anders mag veranderen. Stuur hem in een nieuw gesprek en plak hem in je invulbestand.

   Vraagt de agent toestemming om een commando uit te voeren? Lees het commando eerst. Is het `node test.js`, keur het dan goed. Voert je agent het commando niet zelf uit? Typ het dan zelf.
7. Controleer zelf. Het antwoord van de agent is een bewering.
   - Typ `node test.js`. Tonen alle tests `OK`?
   - Open `test.js`. Staat je test er nog, zonder wijziging? Kijk in de chat of de agent `test.js` aanpaste.
   - Lees de nieuwe `getLowest`. Werkt ze voor elke lijst, of alleen voor de input van je test?
8. Test zelf twee andere inputs. Zet deze regels onder je eerste test en typ `node test.js`. Volgens `AGENTS.md` geeft een function in `stats.js` `null` terug als ze niets kan berekenen. Noteer welke tests slagen en welke falen.

```js
check('getLowest: drie totalen boven 20', getLowest([40, 31, 36]), 31);
check('getLowest van een lege lijst is null', getLowest([]), null);
```

9. Faalt er een test? Stuur dan in hetzelfde gesprek één vervolgprompt met de regels van de test die faalt, en controleer opnieuw. Slagen ze allemaal, dan stuur je geen tweede prompt. Noteer het resultaat.
10. Wat controleerde de agent met de tests, en wat controleerde jij nog zelf? Antwoord in maximaal drie zinnen.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

Voor X2, X4, X7, X8, X11, X12, X13 en X14 werk je in een eigen kopie van de map `scorebord2-thuis`. Kopieer die map in de Verkenner of de Finder, en geef de kopie de naam die in de oefening staat. Open de kopie in Visual Studio Code. De map `scorebord2-thuis` zelf verandert zo nooit, en elke oefening begint met een project dat nog niet veranderd is.

## X1 Vier foutmeldingen (Easy) {#x1}

Je leest vier foutmeldingen in de terminal (zie [5.1](./module-5.md#5_1)). Je werkt in de map `foutmeldingen`. Je gebruikt voor deze oefening geen AI.

In de map staan vier kleine bestanden. Elk bestand moet `Totaal: 31` tonen, en elk bestand heeft één fout.

1. Open de map `foutmeldingen`. Typ in de terminal `node fout1.js`. Lees de melding, en vul de eerste rij van de tabel in. Open het bestand pas daarna.

```text
Bestand  | Type | Regel | De boodschap, in je eigen woorden | De oorzaak
fout1.js | ...  | ...   | ...                               | ...
fout2.js | ...  | ...   | ...                               | ...
fout3.js | ...  | ...   | ...                               | ...
fout4.js | ...  | ...   | ...                               | ...
```

2. Los de fout zelf op, en typ het commando opnieuw. Zie je `Totaal: 31`?
3. Doe hetzelfde voor `fout2.js`, `fout3.js` en `fout4.js`.
4. Bij `fout1.js` staat er geen function van jou in de melding. Bij de andere drie wel. Hoe komt dat? Lees wat de tabel in 5.1 zegt over dit type.
5. Lees de stack trace van `fout4.js`. Welke function riep de function met de fout aan, en op welke regel? Zie je `Object.<anonymous>`? Dat is code van het bestand die niet in een function staat. Regels die met `node:` beginnen, sla je over.

## X2 De crash uit 5.1, met een agent (Medium) {#x2}

Je laat een agent de crash uit [5.1](./module-5.md#5_1) oplossen, en je kijkt waar hij dat doet. Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-emma`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord2-emma`. Vervang in `data.js` de regel van Emma door de regel hieronder, en bewaar het bestand.

```js
  { name: 'Emma', score: 24 },
```

2. Typ `node check.js`. Kopieer de melding met de regels die met `at` beginnen. De regels met `node:internal` mag je weglaten.
3. Stuur in een nieuw gesprek deze prompt, met jouw melding erin:

```text
Na een wijziging in data.js krijg ik deze melding bij node check.js:

(plak hier je melding)

Los deze fout op.
```

4. Kijk in de chat welk bestand de agent aanpaste. Noteer het bestand en wat er veranderde.
5. Typ `node check.js`. Krijg je een nieuwe melding, of acht regels? Zie je acht regels, noteer dan "Gemiddelde totaal" en "Gemiddelde ronde 2". In het project zoals je het kreeg, stond er 24.4 en 12.9. Staat dat er opnieuw? Emma haalde 9 en 15 punten: kon de agent dat weten?
6. Beoordeel: pakte de oplossing de oorzaak aan, of alleen de plaats van de fout? Koos de agent iets in jouw plaats, zoals 0 punten voor een speler zonder `rounds`?
7. Is het resultaat niet in orde? Stuur dan één vervolgprompt waarin je zegt waar de oorzaak zit. Controleer opnieuw.

Er is geen juist of fout resultaat. Je beschrijft wat je agent deed, en je beoordeelt het.

## X3 Een fout in een gemiddelde (Easy) {#x3}

Je zoekt een fout met een hypothese en een meting (zie [5.3](./module-5.md#5_3)). Je werkt in de map `gemiddelde`. Je stuurt in deze oefening hoogstens één prompt.

In `gemiddelde.js` staat deze function. Het gemiddelde van 2, 4 en 6 is 4, maar de code toont `NaN`.

```js
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([2, 4, 6]));
```

```output
NaN
```

1. Open de map `gemiddelde` en typ `node gemiddelde.js`. Noteer het verwachte en het werkelijke gedrag.
2. Schrijf zonder AI één hypothese op. Wat meet je om ze te testen, en wat zie je als ze klopt?
3. Meet. Zet in de loop, boven de regel met `sum +=`, de regel `console.log(i, numbers[i]);`. Typ `node gemiddelde.js`. Noteer de output. Hoeveel keer wordt de loop uitgevoerd, en welke waarde is geen getal?
4. Los de fout zelf op. Haal je regel met `console.log` weer weg. Toont de code nu `4`?
5. Je bestand is nu opgelost. Plak daarom de code met de fout van hierboven in je prompt. Stuur in een nieuw gesprek één prompt die een agent de fout laat uitleggen. Zeg dat hij niets mag veranderen. Geeft het model dezelfde oorzaak? Zo'n fout heeft een naam: zoek ze in [5.6](./module-5.md#5_6).

## X4 Een gemiste ronde (Medium) {#x4}

Je volgt de fout uit [5.3](./module-5.md#5_3) zelf, en je beslist de regel voor je iets laat oplossen. Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-fatima`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord2-fatima`. Vervang in `data.js` de regel van Fatima door de regel hieronder, en bewaar het bestand.

```js
  { name: 'Fatima', rounds: [12] },
```

2. Start het project en typ in een tweede terminal `node check.js`. Noteer alles wat niet klopt, op de pagina en in de output. De regel "Hoogste totaal" telt hier ook mee.
3. Meet zonder AI. Zet in `panel.js`, in `getPanelLines`, onder de regel `const totals = getTotals(players);` de regel `console.log(totals);`. Typ `node check.js`. Op welke plaats staat `NaN`? Haal je regel daarna weer weg.
4. Beslis de regel van de quiz. Wat is een gemiste ronde waard? Kies één van deze twee, en schrijf in één zin waarom:
   - 0 punten;
   - de speler telt niet mee voor het gemiddelde van die ronde.
5. Schrijf je prompt. Zeg wat de oorzaak is, welke regel je koos, en dat de agent daarna `node check.js` uitvoert. Zeg ook wat hij niet mag veranderen. Stuur hem in een nieuw gesprek.
6. Controleer met je lijst uit stap 2. Loop elk punt af: is het in orde? Staat er nog ergens `NaN`? Staat er na de oplossing weer "Hoogste totaal: 9"? Dat is de fout uit 5.2. Die los je hier niet op: voor dit punt is het genoeg dat `NaN` weg is.
7. Zet je regel in `README.md`, bij de regels van de quiz. Doe dat zelf.

## X5 Een vage en een precieze prompt (Medium) {#x5}

Je lost dezelfde fout twee keer op: met een vage prompt en met een precieze prompt (zie [5.3](./module-5.md#5_3)). Je werkt in de mappen `zoek-speler-a` en `zoek-speler-b`. Je stuurt in deze oefening twee prompts: één per map.

In de twee mappen staat hetzelfde bestand `zoek.js`. De function `findPlayer` zoekt een speler op naam. De aanroep `findPlayer(players, 'noor')` geeft `null`, terwijl Noor in de lijst staat.

1. Open de map `zoek-speler-a` en typ `node zoek.js`. Stuur in een nieuw gesprek deze prompt:

```text
Het werkt niet. Los het op.
```

2. Typ `node zoek.js`. Noteer de output, en wat de agent veranderde.
3. Beslis nu eerst zelf wat de function moet doen. Vul in voor je verder gaat:

```text
Aanroep                         | Wat moet de function geven?
findPlayer(players, 'noor')     | ...
findPlayer(players, 'NOOR')     | ...
findPlayer(players, ' Noor ')   | ...
findPlayer(players, 'Nora')     | ...
```

4. Open de map `zoek-speler-b`. Schrijf een precieze prompt: het verwachte gedrag, het werkelijke gedrag, en je beslissingen uit stap 3. Zeg wat de agent niet mag veranderen. Stuur hem in een nieuw gesprek.
5. Test de twee versies. Zet in elk bestand de vier aanroepen uit stap 3 onderaan, elk in een `console.log`, en typ `node zoek.js`. Open voor versie a opnieuw de map `zoek-speler-a`. Vul in:

```text
Aanroep    | Versie a | Versie b | Wat jij besliste
'noor'     | ...      | ...      | ...
'NOOR'     | ...      | ...      | ...
' Noor '   | ...      | ...      | ...
'Nora'     | ...      | ...      | ...
```

6. Wat koos het model in versie a in jouw plaats? Welke versie doet wat jij besliste?

## X6 Een bug report schrijven (@home) {#x6}

Je beschrijft een fout zo dat een collega ze kan reproduceren zonder jou (zie [5.2](./module-5.md#5_2)). Zo'n beschrijving heet een **bug report**. Je gebruikt de fout uit M1. Je stuurt in deze oefening hoogstens één prompt.

1. Schrijf een bug report voor de fout met het laagste totaal. Gebruik deze vorm:

```text
Titel:                        ...
Stappen om te reproduceren:   1. ...
                              2. ...
Verwacht gedrag:              ...
Werkelijk gedrag:             ...
Minimal example:              ...
Wat ik al weet over de oorzaak: ...
```

2. Lees je bug report opnieuw als iemand die het project niet kent. Staat erin welke map, welk commando en welke input? Verbeter wat ontbreekt.
3. Open de map `scorebord2-m1`. Plak in een nieuw gesprek je bug report, en vraag: "Verander niets aan de code. Lees het bestand repro.js niet. Kan je deze fout reproduceren met alleen deze beschrijving? Welke informatie ontbreekt?" Noteer wat het model miste, en of je het daarmee eens bent.

## X7 Van minimal example naar regression test (Medium) {#x7}

Je lost de fout uit [5.2](./module-5.md#5_2) op, in de volgorde van [5.6](./module-5.md#5_6): eerst een test die faalt, dan de oplossing. Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-sort`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord2-sort`. Typ `node test.js`. Slagen alle tests?
2. Zet deze regel in `test.js`, onder de comment met "Regression tests", en typ opnieuw `node test.js`. Plak de regels van de test die faalt in je invulbestand.

```js
check('getHighest: een totaal onder 10', getHighest([25, 9]), 25);
```

3. Voorspel voor je iets oplost: wat toont `console.log([100, 25, 9].sort());`? Zet de regel in `repro.js`, typ `node repro.js` en noteer of je voorspelling klopte.
4. Schrijf je prompt. Vraag om `getHighest` op te lossen zonder `sort`, met een loop. Zeg dat de function haar input niet mag veranderen, dat de agent daarna `node test.js` uitvoert en dat hij `test.js` niet mag veranderen. Stuur hem in een nieuw gesprek.
5. Controleer zelf: typ `node test.js` en `node check.js`. Welk cijfer staat er nu bij "Hoogste totaal"? Is `test.js` onveranderd?
6. Lees de nieuwe function. Wat geeft ze voor een lege lijst? Past dat bij de afspraak in `AGENTS.md`? Schrijf er zelf een test voor, en voer ze uit. Faalt je test? Stuur dan in hetzelfde gesprek één vervolgprompt met de regels van de test die faalt.

## X8 Eén function in plaats van twee (Medium) {#x8}

Je doet de refactoring uit [5.5](./module-5.md#5_5) zelf, in twee stappen, met de tests als controle. Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-rondes`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord2-rondes`. Typ `node check.js` en `node test.js`. Plak de output van `check.js` in je invulbestand.
2. Zet zelf deze regel onderaan in `AGENTS.md`: "Voer na elke wijziging `node test.js` uit. Verander `test.js` niet."
3. Stap 1. Schrijf een prompt die van `getRound1Scores` en `getRound2Scores` één function `getRoundScores(players, roundNumber)` maakt, en die ze gebruikt in `panel.js`. De oude functions blijven nog staan. Het gedrag blijft hetzelfde. Zeg in je prompt niets over de tests. Stuur hem in een nieuw gesprek.
4. Voerde de agent de tests uit zonder dat je het vroeg? Noteer wat je in de chat ziet. Typ daarna zelf `node check.js` en `node test.js`. Is alles nog hetzelfde?
5. Lees de nieuwe function. Op welke plaats van de lijst `rounds` leest ze de score van ronde 1? Waar zou een off-by-one error hier zitten?
6. Stap 2. Zoek met Ctrl+Shift+F naar `getRound1Scores` en naar `getRound2Scores`. Staan de namen nog in de `import` bovenaan in `panel.js`? Haal ze daar eerst weg. Verwijder daarna de twee oude functions in `stats.js`, zelf of met een tweede prompt. Controleer opnieuw met de twee commando's. Zie je een `SyntaxError` over een export die niet bestaat? Dan staat een oude naam nog in een `import`.
7. Beoordeel met de criteria uit [4.4](./module-4.md#4_4): wat is er beter, en wat is alleen anders?

## X9 Refactoren met eigen tests (Hard) {#x9}

Je schrijft eerst zelf tests, en daarna refactor je in kleine stappen (zie [5.5](./module-5.md#5_5) en [5.6](./module-5.md#5_6)). Je werkt in de map `korting`. Je stuurt in deze oefening hoogstens drie prompts.

In `korting.js` staat een function die werkt, maar moeilijk te lezen is. Ze zoekt de actieve artikelen van één type die na een datum toegevoegd zijn, en geeft elk artikel 10 % korting.

```js
function proc(items, t, d) {
  let res = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == t && items[i].date > d) {
      if (items[i].active == true) {
        res.push({ id: items[i].id, val: items[i].price * 0.9 });
      }
    }
  }
  return res;
}

const items = [
  { id: 1, type: 'book', date: '2026-10-01', active: true, price: 20 },
  { id: 2, type: 'book', date: '2026-08-15', active: true, price: 15 },
  { id: 3, type: 'game', date: '2026-10-05', active: true, price: 40 },
  { id: 4, type: 'book', date: '2026-10-10', active: false, price: 30 },
];

console.log(proc(items, 'book', '2026-09-01'));
```

```output
[ { id: 1, val: 18 } ]
```

1. Open de map `korting` en typ `node korting.js`. Noteer de code smells die je in `proc` ziet, zonder AI. Noteer er minstens vier.
2. Leg het gedrag vast. Schrijf onderaan in het bestand drie extra aanroepen met een `console.log`: één voor het type `'game'`, één met een datum waarna geen enkel artikel komt, en één met een lege lijst. Reken eerst zelf uit wat je verwacht, en typ dan `node korting.js`. Plak de output in je invulbestand: dat is het gedrag van voor de refactoring.
3. Refactor in drie stappen, met één prompt per stap. Kies de stappen zelf, bijvoorbeeld: betere namen, een naam voor het getal `0.9`, de twee `if`-regels samenvoegen. Zeg in elke prompt wat verandert en dat het gedrag hetzelfde blijft.
4. Typ na elke stap `node korting.js` en vergelijk met de output van stap 2. Vul in:

```text
Stap | Wat veranderde er? | Is de output dezelfde?
1    | ...                | ...
2    | ...                | ...
3    | ...                | ...
```

5. De oude code gebruikt `==`. Gebruikt de nieuwe code `===`? Zoek een input waarvoor `==` en `===` een ander resultaat geven, zoals een artikel met `active: 1`. Test ze in de nieuwe code. Is het gedrag hetzelfde gebleven? Wat leer je daaruit over je tests?

## X10 Code smells in je eigen code (@home) {#x10}

Je zoekt code smells in code die je zelf schreef (zie [5.4](./module-5.md#5_4)). Je stuurt in deze oefening hoogstens twee prompts.

1. Neem een bestand van minstens twintig regels dat je zelf schreef voor een ander vak. Zet het in een nieuwe, lege map en open die map.
2. Voer het bestand uit en bewaar de output. Dat is het gedrag van voor de refactoring.
3. Zoek zonder AI twee code smells. Laat daarna een agent er hoogstens vijf zoeken, met de prompt uit 5.4. Pas de namen van de bestanden aan.
4. Beoordeel elke code smell: klopt het probleem, en pak je het aan? Zeg waarom wel of niet.
5. Laat één code smell wegwerken, in één stap. Voer het bestand opnieuw uit. Is de output dezelfde?
6. Plak de code van voor en na de wijziging in je invulbestand. Is ze beter, of alleen anders?

## X11 Een headless browser controleert de pagina (Hard) {#x11}

Je voert een test uit die de echte pagina opent in een headless browser, en je ziet welke fout zo'n test vindt die `test.js` niet vindt (zie [5.6](./module-5.md#5_6)). Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-browser`. Je hebt Chrome of Edge nodig. Je stuurt in deze oefening hoogstens één prompt.

In deze map staat een extra hulpbestand: `browser-check.js`. Het start Chrome of Edge zonder venster, laat de pagina laden en leest wat er in het paneel staat. Dat vergelijkt het met wat `panel.js` maakt.

1. Open de map `scorebord2-browser` en start het project met `node server.js`.
2. Typ in een tweede terminal `node browser-check.js`. Gebruikt je server een andere poort, typ dan `node browser-check.js 3001`. Noteer de output. Zag je een venster van een browser opengaan?
3. Maak nu de fout uit oefening E1 opnieuw. Verander in `index.html` het id `playerList` in `playerlist`, met een kleine letter l. Bewaar het bestand.
4. Typ `node test.js`. Slagen alle tests?
5. Typ `node browser-check.js`. Noteer de output.
6. Leg uit in maximaal drie zinnen: waarom ziet `test.js` deze fout niet, en `browser-check.js` wel?
7. Los de fout op zoals in E1: verander het id opnieuw in `playerList`. Controleer met de twee commando's.
8. Kan jouw agent harness zelf een browser besturen? Stuur in een nieuw gesprek één prompt: "Verander niets. Open http://localhost:3000 en zeg welke cijfers er in het paneel staan." Gebruikt je server een andere poort, zet dan die poort in het adres. Noteer wat er gebeurde: opende de agent de pagina, vroeg hij om een uitbreiding, of zei hij dat hij het niet kan? Elk antwoord is in orde: je beschrijft wat jouw agent harness kan.

## X12 Je eigen debugging playbook (Hard) {#x12}

Stel je eigen vaste aanpak op voor een fout: een **playbook**. Je gebruikt alles uit deze module. Voor stap 3 werk je in een kopie van `scorebord2-thuis` met de naam `scorebord2-playbook`. Je stuurt in deze oefening hoogstens twee prompts.

1. Schrijf je aanpak in minstens zes stappen, van "ik zie dat er iets niet klopt" tot "de fout kan niet ongemerkt terugkomen". Vul per stap in:

```text
Stap | Wat doe ik? | Zelf, of met een agent? | Wat geef ik de agent? | Wat controleer ik zelf?
1    | ...         | ...                     | ...                   | ...
```

2. Voeg twee regels toe voor als het niet lukt: wat doe je na twee mislukte pogingen, en wanneer vraag je een collega of je docent om hulp?
3. Test je playbook op een fout. Open de map `scorebord2-playbook`. Daar staat "Hoogste totaal: 9" in het paneel: de fout uit 5.2. Wil je liever de fout uit 5.3? Vervang dan in `data.js` de regel van Fatima door `{ name: 'Fatima', rounds: [12] },`. Volg je stappen letterlijk, en plak de prompts die je stuurt in je invulbestand.
4. Welke stap ontbrak, of was te vaag? Pas je playbook aan, en noteer wat je veranderde.

## X13 De agent leest de foutmelding zelf (Medium) {#x13}

Je zoekt uit welke foutmelding een agent zelf kan lezen, en welke jij hem geeft (zie [5.1](./module-5.md#5_1)). Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-terminal`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord2-terminal`. Vervang in `data.js` de regel van Emma door de regel hieronder, en bewaar het bestand.

```js
  { name: 'Emma', score: 24 },
```

2. Start het project met `node server.js` en open de pagina. Je ziet geen cijfers, geen namen en geen torens. Kijk op twee plaatsen, en noteer wat je ziet. Staat er een foutmelding in de terminal van de server? Staat er een in de console van je browser?
3. Leg in één zin uit waarom de melding op de ene plaats staat en niet op de andere.
4. Stuur in een nieuw gesprek deze prompt:

```text
Verander niets aan de code. Voer node check.js uit en lees de
foutmelding. Leg in eenvoudige woorden uit wat ze zegt. Waar treedt de
fout op, en waar kan de oorzaak zitten?
```

5. Kijk in de chat wat de agent deed. Voerde hij het commando uit? Vroeg hij eerst je toestemming? Noteer het. Voerde hij het commando niet uit? Typ dan zelf `node check.js` in een tweede terminal, en plak de output in hetzelfde gesprek.
6. Typ zelf `node check.js` in een tweede terminal, als je dat nog niet deed. Vergelijk de melding met het antwoord. Noemt de agent dezelfde function en dezelfde regel als de bovenste regel van de stack trace? Noemt hij `data.js` als mogelijke oorzaak?
7. Welke van deze drie las de agent zelf: de output van `node check.js`, de terminal van de server of de console van je browser? Wat doe jij om hem een melding uit de console van je browser te geven?

## X14 Een breakpoint in je browser (Medium) {#x14}

Je werkt met de debugger van je browser: je zet een breakpoint, je bekijkt waarden en je voert de code stap per stap uit (zie [5.1](./module-5.md#5_1)). Je werkt in een kopie van `scorebord2-thuis` met de naam `scorebord2-breakpoint`. Je hebt Chrome of Edge nodig. Je gebruikt voor deze oefening geen AI, en je verandert geen code.

Je onderzoekt de fout uit [5.2](./module-5.md#5_2): in het paneel staat "Hoogste totaal: 9". In de info box van [5.3](./module-5.md#5_3) staat een afbeelding van wat je in stap 4 en 5 ziet. De vier knoppen van de debugger staan in een tabel in 5.1.

1. Open de map `scorebord2-breakpoint`, start het project en open de pagina in Chrome of Edge.
2. Druk op F12 (op een Mac Cmd+Option+I). Kies bovenaan **Sources** in plaats van **Console**. In een Nederlandstalige browser kan die tab **Bronnen** heten. Zie je de tab niet? Klik dan op `>>`. Klik links, onder `localhost:3000` (of jouw poort), op `panel.js`. Je ziet de code, met regelnummers.
3. Klik op het regelnummer `17`, voor de regel `const winner = findWinner(players);`. Het nummer krijgt een blauwe markering. Dat is je breakpoint.
4. Herlaad de pagina. Ze pauzeert, en regel 17 is gemarkeerd. Regel 16 is al uitgevoerd, regel 17 nog niet.
5. Zoek het deel **Scope**. Het staat rechts van de code, of eronder. Klik er op het driehoekje voor `totals`. Noteer de acht getallen, in de volgorde waarin ze er staan.
6. Voer de code nu regel per regel uit. Klik op de knop **Step over**: de gebogen pijl over een punt, rechts van de blauwe knop. Of druk op F10. Werken de toetsen niet op je Mac? Klik dan op de knoppen. Doe dat zes keer, tot regel 23 gemarkeerd is: de regel met `Hoogste totaal`. Die regel is nog niet uitgevoerd.
7. Regel 23 roept `getHighest` aan. Ga die function binnen: klik op **Step into**, de pijl die naar beneden wijst, of druk op F11. De debugger toont nu `stats.js`. Zoek het deel **Call Stack**. Noteer de namen die er staan, van boven naar onder. De onderste naam is `(anonymous)`: dat is code van `main.js` die niet in een function staat.
8. Klik één keer op **Step over**. De eerste regel van `getHighest` is nu uitgevoerd. Kijk onder **Scope** naar `totals`, en noteer de acht getallen. Wat veranderde er tegenover stap 5?
9. Loop de function weer uit: klik op **Step out**, de pijl die naar boven wijst, of druk op Shift+F11. In welk bestand en op welke regel staat de code nu stil?
10. Verklaar wat je zag met [5.2](./module-5.md#5_2). Welke regel in `getHighest` veranderde de volgorde van de lijst? En waarom staat `9` achteraan?
11. Laat de pagina verder lopen: klik op de blauwe knop **Resume**, of druk op F8. Klik daarna opnieuw op het regelnummer `17` van `panel.js`. De markering verdwijnt. Herlaad de pagina: pauzeert ze nog?
12. Vergelijk in maximaal drie zinnen. Hoeveel regels `console.log` zou je moeten toevoegen om hetzelfde te zien? Wat is een voordeel van een debugger? En wat is een voordeel van `console.log` als een agent voor jou meet?
