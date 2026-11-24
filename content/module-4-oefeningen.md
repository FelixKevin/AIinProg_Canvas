---
module: 4
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 4

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 4. Het zijn vijf oefeningen, in de volgorde van de les: M1, E1, M2, M3 en M4. Je maakt ze tijdens de les. De extra-reeks is optioneel.

Je kan alle oefeningen zelfstandig maken, in de les of thuis. Elke oefening zegt wat je opent, wat je stuurt, hoe je controleert en wat je noteert. Lees eerst [Voor je begint](#start).

Je werkt je antwoorden uit in een invulbestand en levert dat in via de opdracht **Oefeningen module 4** in Canvas. Daar vind je ook het invulbestand en de startbestanden. Je levert alleen het invulbestand in: screenshots en code plak je erin. Bewaar je mappen wel bij je portfolio.

## Zo doorloop je deze les {#plan}

Volg je de les niet in het lokaal? Dan maak je de oefeningen zelfstandig, in deze volgorde. Lees telkens eerst de sectie in [module 4](./module-4.md) en maak dan de oefening. Reken op ongeveer twee en een half uur. In alle oefeningen werk je met hetzelfde project: een 3D-scorebord dat je overneemt van een collega.

| Stap | Lees | Maak | Tijd |
| --- | --- | --- | --- |
| 1 | 4.1 Een bestaand project leren kennen | M1 | 40 min |
| 2 | 4.2 Control flow, data flow en aannames | E1 | 25 min |
| 3 | 4.3 Een agent als eerste code reviewer | M2 | 30 min |
| 4 | 4.4 Codekwaliteit | M3 | 25 min |
| 5 | 4.5 Afwegingen tussen implementaties | Test jezelf 4.5 | 10 min |
| 6 | 4.6 Een fout aanpakken met een agent | M4 | 25 min |

## Voor je begint {#start}

**Wat heb je nodig?**

- Het **invulbestand** en de **startbestanden** (een zip). Je vindt ze bij de opdracht in Canvas. Pak de zip uit.
- Een **agent harness**, zoals GitHub Copilot in Visual Studio Code. Die heb je nodig voor elke oefening waarin je een prompt verstuurt. Is dat nog niet in orde? Volg dan de startgids bij de opdracht in Canvas.
- Een **browser**, zoals Chrome, Edge of Firefox, en een internetverbinding. Het project laadt three.js van het internet.
- **Node.js**, voor alle oefeningen. Open in Visual Studio Code een terminal (**Terminal > New Terminal**) en typ `node --version`. Zie je een versienummer, dan is het in orde. Zie je een foutmelding? Installeer dan de LTS-versie van [nodejs.org](https://nodejs.org).

**De mappen in de startbestanden**

| Map | Voor oefening | Wat erin zit |
| --- | --- | --- |
| `scorebord` | M1, E1 en M2 | het project dat je overneemt |
| `scorebord-verbeteren` | M3 | hetzelfde project |
| `scorebord-fout` | M4 | hetzelfde project, met één extra fout |
| `rangschikking` | X12 | één bestand met drie versies van een function, voor de extra-reeks |
| `scorebord-thuis` | X2, X3, X5 en X11 | hetzelfde project, voor de extra-reeks |

Waarom vier keer hetzelfde project? Elke oefening waarin de agent code verandert, begint zo met een project dat nog niet veranderd is. Je hoeft nooit iets ongedaan te maken, en wat je in een vorige oefening deed, blijft bewaard.

**Zo werk je met de agent harness**

- **Maak je agent harness klaar.** Open de chat. Controleer of je permissions goed staan, en kies een model waar je vertrouwen in hebt, als je agent harness je laat kiezen (zie de startgids).
- **Open de juiste map.** Elke oefening zegt welke map je opent (**File > Open Folder**). Zo ziet de agent alleen de bestanden van die oefening.
- **Let op je verbruik.** Elke prompt kost AI credits, en je tegoed per maand is beperkt (zie de startgids). Daarom zegt elke oefening hoeveel prompts je hoogstens stuurt. Hou je daaraan.
- **Start een nieuw gesprek** (**New Chat**) waar de oefening dat zegt.
- **Noteer wat je gebruikte.** Schrijf bij elke oefening waarin je een prompt verstuurt welke agent harness en welk model je gebruikte. Staat de model picker op Auto en zie je de naam van het model niet? Schrijf dan `Auto`.

**Zo start je het project**

Het project bestaat uit meerdere bestanden. Je bekijkt het daarom via een lokale server (zie [3.4](./module-3.md#3_4)).

1. Open de map van de oefening in Visual Studio Code. Open een terminal (**Terminal > New Terminal**) en typ `node server.js`.
2. In de terminal staat welke map de server toont. Controleer of dat de map van je oefening is.
3. Open in je browser het adres `http://localhost:3000`. Je ziet acht torens en een paneel met cijfers.
4. Na elke wijziging herlaad je de pagina in je browser met F5 (op een Mac Cmd+R).
5. Klaar met de oefening? Stop de server: klik in de terminal en druk op Ctrl+C. Doe dat altijd voor je een andere map opent.

Zie je in de terminal "Poort 3000 is al in gebruik"? Dan draait er nog een server in een andere terminal of in een ander venster. Stop die eerst met Ctrl+C. Vind je geen andere server? Dan gebruikt een ander programma de poort. Typ dan `node server.js 3001` en open `http://localhost:3001`.

Zie je een leeg scherm, of klopt er iets niet? Druk in je browser op F12 (op een Mac Cmd+Option+I) en kies **Console**. Rode regels zijn foutmeldingen (zie [3.3](./module-3.md#3_3)).

**Zo controleer je de berekeningen**

Het bestand `check.js` toont de berekeningen van het project in de terminal, zonder browser. De server blijft draaien in je eerste terminal. Open daarom een tweede terminal (**Terminal > New Terminal**) en typ:

```bash
node check.js
```

In het project zoals je het krijgt, zie je dit:

```output
Aantal spelers: 8
Geslaagd: 5
Gemiddelde: 11.5
Winnaar: Noor
```

**Zo maak je een screenshot**

Op Windows druk je op Windows+Shift+S, op een Mac op Cmd+Ctrl+Shift+4. Selecteer het venster van je browser en plak de screenshot in je invulbestand.

## M1 Maak een kaart van het project {#m1}

Je neemt een project over. Je kijkt eerst zelf, daarna vraag je uitleg, en die uitleg test je (zie [4.1](./module-4.md#4_1)). Je werkt in de map `scorebord`. Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scorebord` in Visual Studio Code. Lees `README.md` en `AGENTS.md`.
2. Start het project (zie [Voor je begint](#start)). Noteer in maximaal twee zinnen wat je ziet, en wat de spatiebalk doet.
3. Maak je kaart, zonder AI. Open de vijf bestanden uit de tabel hieronder en lees ze snel door. De andere bestanden zijn hulpbestanden (zie 4.1). Noteer per bestand wat erin staat: de namen van de functions, of van de data. Noteer ook welke andere bestanden het gebruikt. Dat zie je aan de regels met `import`, en in `index.html` aan de regels met `href` en `src`.

```text
Bestand    | Wat staat erin? (namen van functions of data) | Gebruikt
index.html | ...                                           | ...
style.css  | ...                                           | ...
data.js    | ...                                           | ...
stats.js   | ...                                           | ...
main.js    | ...                                           | ...
```

4. Zoek met je kaart het antwoord op deze drie vragen, zonder AI:
   - Welke function maakt de witte lat, en in welk bestand staat ze?
   - Welke function zet de cijfers in het paneel? Welke functions uit een ander bestand gebruikt ze daarvoor?
   - Er doet een negende speler mee. In welk bestand voeg je hem toe?
5. Stuur in een nieuw gesprek deze prompt:

```text
Verander niets aan de code. Leg uit hoe de bestanden van dit project
samenwerken. Wat gebeurt er, in volgorde, vanaf het moment dat de browser
index.html laadt tot de torens op het scherm staan? Noem bij elke stap het
bestand en de function.
```

6. Leg de uitleg naast je kaart. Noteer één ding dat je uit de uitleg leerde en dat niet op je kaart stond. Noemt de uitleg een bestand of een function die niet bestaat, of klopt er iets niet? Noteer dat ook. Vind je niets, noteer dat dan.
7. Test wat je nu weet. Er doet een negende speler mee: Sam, met 13 punten. Voorspel eerst: wat verandert er op het scherm? Noteer minstens drie dingen. Doe dat voor je iets verandert.
8. Voeg daarna zelf deze regel toe in `data.js`, onder de regel van Emma:

```js
  { name: 'Sam', score: 13 },
```

9. Bewaar het bestand en herlaad de pagina. Noteer wat je ziet. Wat had je niet voorspeld? Je hebt nog één prompt: begrijp je iets niet, vraag dan uitleg over dat ene ding.
10. Leg in maximaal drie zinnen uit hoe een score uit `data.js` een toren op het scherm wordt. Doe dat zonder de uitleg van het model erbij.

Laat Sam in `data.js` staan.

## E1 Volg de data {#e1 .easy}

Je volgt de control flow en de data flow met een trace table, en je zoekt aannames (zie [4.2](./module-4.md#4_2)). Je werkt in de map `scorebord`. Je gebruikt voor deze oefening geen AI.

1. Open `stats.js` en lees de function `countPassed`. Maak een trace table voor de aanroep `countPassed([9, 12, 10, 6])`. Welke waarde geeft de function terug?

```text
Stap  | score | score >= 10 | passed
start | –     | –           | 0
1     | ...   | ...         | ...
2     | ...   | ...         | ...
3     | ...   | ...         | ...
4     | ...   | ...         | ...
```

2. In het paneel staat "Geslaagd: 5 van 8". Deed je M1, dan staat er "6 van 9". Uit welk bestand, welke function en welke regel code komt het tweede getal?
3. Voorspel wat deze vier aanroepen geven. Schrijf je voorspellingen op voor je iets uitvoert.

```js
console.log(countPassed([10, 10, 10]));
console.log(calculateAverage([20]));
console.log(calculateAverage([12, undefined, 8]));
console.log(top([{ name: 'Mila', score: 15 }, { name: 'Lina', score: 15 }]).name);
```

4. Plak de vier regels onderaan in `check.js`. Typ in de terminal `node check.js` en noteer de laatste vier regels van de output.

```text
Aanroep                                | Je voorspelling | Resultaat
countPassed([10, 10, 10])              | ...             | ...
calculateAverage([20])                 | ...             | ...
calculateAverage([12, undefined, 8])   | ...             | ...
top(...) met Mila en Lina, elk 15      | ...             | ...
```

5. Bij de derde aanroep ontbreekt een score. Welke aanname maakt `calculateAverage` over haar input? Is het resultaat een probleem voor het scorebord?
6. Bij de vierde aanroep hebben twee spelers evenveel punten. Wie wint er volgens de code? Staat die keuze in `README.md`? Wat zou je aan de organisator van de quiz vragen?

## M2 Een review beoordelen {#m2}

De output van een review zijn suggesties, geen beslissingen (zie [4.3](./module-4.md#4_3)). Je werkt in de map `scorebord`. Je stuurt in deze oefening hoogstens twee prompts.

1. Stuur in een nieuw gesprek deze prompt:

```text
Verander niets aan de code. Review stats.js op leesbaarheid, edge cases en
de afspraken in AGENTS.md. Geef hoogstens vier opmerkingen, in eenvoudige
woorden. Geef per opmerking de regel, het probleem en een voorstel.
```

2. Beoordeel elke opmerking met de drie vragen uit 4.3. Noteer bij de eerste vraag ook hoe je het weet. Voor de vraag of het voorstel past, lees je `AGENTS.md` opnieuw. Bij "Beslissing" schrijf je overnemen, aanpassen, verwerpen of "weet ik nog niet". Je antwoord op de derde vraag (wordt de code er beter van?) zit in die beslissing.

```text
Suggestie | Klopt het probleem? | Past het voorstel? | Beslissing
1. ...    | ...                 | ...                | ...
2. ...    | ...                 | ...                | ...
3. ...    | ...                 | ...                | ...
4. ...    | ...                 | ...                | ...
```

3. Is er een opmerking die je niet begrijpt? Dan kan je ze niet beoordelen. Stuur in hetzelfde gesprek één vervolgprompt die uitleg vraagt over die ene opmerking, in eenvoudige woorden en zonder wijziging. Noteer wat je leerde, en vul daarna je beslissing in. Begrijp je alles, dan stuur je geen tweede prompt.
4. Controleer minstens één opmerking door code uit te voeren. Noteer je regel en de output. Had de review gelijk? Een voorbeeld: zegt de review dat `calculateAverage` een probleem heeft met een lege lijst, zet dan de regel hieronder onderaan in `check.js` en typ `node check.js`. Kan je geen enkele opmerking zo testen? Test dan ook deze regel, en noteer of de review dat probleem noemde:

```js
console.log(calculateAverage([]));
```

5. Is er een suggestie die algemeen klinkt, maar niet in dit project past of hier niet nodig is? Noteer welke, en waarom. Vind je er geen, noteer dat dan.
6. Paste de agent toch een bestand aan, hoewel je vroeg om niets te veranderen? Noteer dat. Je hoeft het niet te herstellen: voor M3 en M4 gebruik je andere mappen.

## M3 Eén verbetering, en dan controleren {#m3}

Je laat de leesbaarheid van één function verbeteren, en je controleert of de code daarna nog hetzelfde doet (zie [4.4](./module-4.md#4_4)). Je werkt in de map `scorebord-verbeteren`. Je stuurt in deze oefening hoogstens twee prompts.

1. Stop de server van de vorige oefening. Open de map `scorebord-verbeteren` en start het project. Typ in een tweede terminal `node check.js` en plak de output in je invulbestand. Dat is de output voor de wijziging.
2. Open `stats.js` en lees de function `top`, zonder AI. Kies zelf betere namen voor `top`, `a` en `x`. Noteer ze.
3. Welke bestanden gebruiken `top`? Zoek het op: druk in Visual Studio Code op Ctrl+Shift+F (op een Mac Cmd+Shift+F) en zoek naar `top(`. Noteer de bestanden.
4. Schrijf je prompt. Het is een vraag om aan te passen: zeg wat verandert, in welke bestanden, en wat hetzelfde blijft. Stuur hem in een nieuw gesprek.
5. Controleer of de code nog hetzelfde doet:
   - Typ opnieuw `node check.js`. Is de output dezelfde als in stap 1?
   - Herlaad de pagina. Ziet ze er hetzelfde uit, en werkt de spatiebalk nog?
   - Zoek opnieuw naar `top(`. Staat de oude naam nog ergens? Een resultaat met je nieuwe naam, zoals `findTop(`, telt niet.
6. Kijk in de chat welke bestanden de agent aanpaste, en bekijk in elk bestand wat er veranderde. Veranderde er iets wat je niet vroeg? Noteer wat. Is een controle uit stap 5 niet in orde, of veranderde er te veel? Stuur dan één vervolgprompt die zegt wat je ziet, en noteer of het daarna in orde was.
7. Beoordeel het resultaat met de drie criteria:

```text
Criterium          | Beter, gelijk of slechter? | Waaraan zie je dat?
Leesbaarheid       | ...                        | ...
Structuur          | ...                        | ...
Onderhoudbaarheid  | ...                        | ...
```

8. Plak de nieuwe function in je invulbestand. Is de code beter, of alleen anders? Antwoord in maximaal twee zinnen.

## M4 Een fout zonder foutmelding {#m4}

Je zoekt een fout die geen foutmelding geeft, je beschrijft ze precies en je beoordeelt de oplossing (zie [4.6](./module-4.md#4_6)). Je werkt in de map `scorebord-fout`. Je stuurt in deze oefening hoogstens twee prompts.

In deze map zit een fout die niet in de cursustekst staat. De fout uit 4.6 zit er ook nog in: de toren van Lars is rood, en moet groen zijn. Die kleur bedoelen we hier niet: laat ze staan.

1. Stop de server van de vorige oefening. Open de map `scorebord-fout` en start het project.
2. Kijk kritisch. Lees in `README.md` wat het scorebord toont voor de winnaar, en vergelijk dat met wat je ziet. Noteer het verwachte gedrag en het werkelijke gedrag.
3. Maak een screenshot en plak hem in je invulbestand.
4. Zoek waar het probleem zit, zonder AI. Welke function maakt het voorwerp dat fout staat, en in welk bestand? Je hoeft de fout zelf nog niet te vinden.
5. Schrijf je prompt, zoals in 4.6: het verwachte gedrag, het werkelijke gedrag en het concrete geval dat je ziet. Vraag naar de oorzaak en naar een oplossing, en zeg dat de agent nog niets mag veranderen. Stuur hem in een nieuw gesprek.
6. Beoordeel het antwoord. Zoek in de code de regel die het model noemt. Bestaat ze, en doet ze wat het model zegt? Noteer de oorzaak in je eigen woorden.
7. Stuur in hetzelfde gesprek een tweede prompt die de fout laat oplossen. Zeg dat de agent niets anders mag veranderen.
8. Controleer:
   - Is de fout weg? Herlaad de pagina.
   - Werkt alles nog wat al werkte? Kijk naar de torens, het paneel en de spatiebalk.
   - Veranderde er iets wat je niet vroeg? Tel de groene torens: voor de wijziging waren het er vier.
9. Leg in maximaal twee zinnen uit waarom de code fout was, en waarom de oplossing werkt.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 De kaart van je eigen scène (Medium) {#x1}

In module 3 bouwde je een eigen scène met three.js. Kan je uitleggen hoe ze in elkaar zit (zie [4.1](./module-4.md#4_1))? Je stuurt in deze oefening hoogstens twee prompts.

Je werkt in de map met je scène uit module 3. Heb je die niet meer? Gebruik dan de map `scene` uit de startbestanden van module 3.

1. Open de code van je scène. Zoek, zonder AI, de zes onderdelen van een three.js-scène. Noteer bij elk onderdeel de naam van de variable of de function in jouw code.

```text
Onderdeel       | In jouw code
scene           | ...
camera          | ...
renderer        | ...
een mesh        | ...
een licht       | ...
animation loop  | ...
```

2. Kies het voorwerp of het effect dat de agent voor jou maakte. Welke geometry en welk material gebruikt het? Vind je er geen, noteer dan wat er wel staat. Gebruik je de map `scene` uit module 3? Kies dan de kubus.
3. Kies één function in je code die je niet volledig kan uitleggen. Vraag uitleg in een nieuw gesprek. Zeg dat de agent niets mag veranderen.
4. Test één bewering uit die uitleg: voorspel, verander zelf een waarde en kijk. Noteer je voorspelling en wat je zag.
5. Leg in maximaal vijf zinnen uit hoe je scène werkt, zonder de uitleg van het model erbij. Gebruik minstens vier van de zes onderdelen in je uitleg.

## X2 Los de fout uit 4.6 op, in twee stappen (Medium) {#x2}

Je lost eerst de fout op, en verbetert daarna de structuur. Elke stap krijgt een eigen prompt en een eigen controle (zie [4.6](./module-4.md#4_6)). Je werkt in de map `scorebord-thuis`. Je stuurt in deze oefening hoogstens drie prompts.

1. Open de map `scorebord-thuis` en start het project. Tel de groene torens en lees het paneel. Typ `node check.js` en noteer de output.
2. Stap 1, de fout. Schrijf een prompt met het verwachte gedrag, het werkelijke gedrag en het concrete geval. Vraag de kleinste wijziging die de fout oplost. Stuur hem in een nieuw gesprek.
3. Controleer: hoeveel groene torens tel je nu? Geeft `node check.js` dezelfde output als in stap 1? Welke regel veranderde er?
4. Stap 2, de structuur. De regel "minstens 10 punten" staat nog op drie plaatsen. Zoek ze op, zonder AI, en noteer het bestand en de function.
5. Schrijf een prompt die de regel één plaats geeft. Zeg waar die plaats is, hoe ze heet en wat hetzelfde moet blijven. Stuur hem in hetzelfde gesprek.
6. Controleer opnieuw: de torens, het paneel, de witte lat en `node check.js`. Bekijk daarna de drie plaatsen uit stap 4. Staat het getal 10 er nog?
7. Test de onderhoudbaarheid: verander de grens zelf naar 12, op die ene plaats. Voorspel eerst wat er verandert op het scherm. Klopte je voorspelling? Laat daarna de grens staan die jij wil. Is dat niet meer 10, pas dan ook de regels in `README.md` aan.

```text
Stap         | Je prompt | Wat veranderde er? | Hoe controleerde je dat?
1. De fout   | ...       | ...                | ...
2. Eén plaats | ...      | ...                | ...
```

## X3 Bouw verder op het scorebord (@home) {#x3}

Je voegt zelf iets toe aan een project dat je overnam, met de werkwijze uit module 3: eerst denken, één prompt, een versie bewaren en feedbackpunten (zie [3.1](./module-3.md#3_1) tot [3.4](./module-3.md#3_4)). Je werkt in een kopie van de map `scorebord-thuis`. Je stuurt in deze oefening hoogstens vijf prompts.

1. Maak eerst een eigen map voor deze oefening. Kopieer de map `scorebord-thuis` in de Verkenner of de Finder, en geef de kopie de naam `scorebord-uitbreiden`. Open die kopie in Visual Studio Code: daar werk je. De map `scorebord-thuis` verandert niet. Dat is je bewaarde versie (zie [3.1](./module-3.md#3_1)).
2. Denk eerst na, zonder AI. Wat voeg je toe? Kies één idee, en beschrijf het in maximaal drie zinnen. Bijvoorbeeld:
   - met de toets S staan de torens van hoog naar laag, en met een tweede druk weer in de gewone volgorde;
   - de toren van de winnaar draait traag rond;
   - het paneel toont ook de laagste score;
   - een eigen idee.
3. Noteer met je kaart uit M1 welke bestanden en welke functions moeten veranderen, voor je iets vraagt.
4. Schrijf je prompt met context, input, output en beperkingen (zie [2.3](./module-2.md#2_3)). Stuur hem in een nieuw gesprek.
5. Controleer: werkt het nieuwe, en werkt alles nog wat al werkte? Typ ook `node check.js`.
6. Controleer de afspraken in `AGENTS.md`, zoals in [3.4](./module-3.md#3_4). Noteer welke afspraken niet gevolgd zijn, en waaraan je dat ziet. Zijn ze allemaal gevolgd, noteer dat dan.
7. Stuur hoogstens twee feedbackpunten, één per prompt.
8. Kies in de nieuwe code één regel die je niet kan uitleggen. Vraag uitleg en test ze: voorspel, verander een waarde en kijk. Noteer je voorspelling en wat je zag.
9. Pas `README.md` zelf aan: beschrijf in één of twee zinnen wat je toevoegde.
10. Maak een screenshot van het resultaat. Kijk terug in maximaal 150 woorden: klopte je voorspelling uit stap 3 over de bestanden die zouden veranderen?

## X4 Waarom stopt een toren met groeien? (Easy) {#x4}

De torens van het scorebord groeien tot hun hoogte, en stoppen dan. Je volgt de control flow met een trace table (zie [4.2](./module-4.md#4_2)). Je gebruikt voor deze oefening geen AI.

Dit is een vereenvoudigde versie van wat `animate()` voor één toren doet:

```js
let height = 0.5;
const targetHeight = 2;
const growSpeed = 0.5;

function animate() {
  if (height < targetHeight) {
    height += growSpeed;
  }
}
```

1. `animate()` wordt zes keer uitgevoerd. Maak een trace table met de kolommen `stap`, `height < targetHeight` en `height`.
2. Na welke stap verandert `height` niet meer? Waarom?
3. Verander in gedachten `growSpeed` naar 1. Maak de trace table opnieuw. Welke waarde heeft `height` aan het einde? Is de toren dan precies zo hoog als `targetHeight`?
4. In het scorebord is `growSpeed` 0.04. Hoeveel hoger dan zijn doel kan een toren hoogstens worden? Is dat een probleem voor wie naar het scorebord kijkt?

## X5 Onverwachte data (Medium) {#x5}

Een function maakt aannames over haar input (zie [4.2](./module-4.md#4_2)). Je test wat er gebeurt met scores die niemand verwachtte. Je werkt in de map `scorebord-thuis`. Je gebruikt voor deze oefening geen AI.

Volgens `README.md` haalt een speler 0 tot 20 punten.

1. Voorspel wat deze vier aanroepen geven. Schrijf je voorspellingen op voor je iets uitvoert.

```js
console.log(countPassed([25, -3, 8]));
console.log(calculateAverage([25, -3, 8]));
console.log(countPassed(['12', 8]));
console.log(calculateAverage(['12', 8]));
```

2. Plak de vier regels onderaan in `check.js`. Typ `node check.js` en noteer de laatste vier regels van de output.
3. Bij de laatste twee aanroepen is één score geen getal, maar tekst: `'12'`. Welk resultaat verbaast je het meest? Zoek uit hoe het ontstaat: volg `sum` met een trace table.
4. Geen van de vier aanroepen geeft een foutmelding. Welke aannames maakt de code over een score? Noteer er minstens twee.
5. Wat zou het scorebord volgens jou moeten doen met een score van 25? Wie beslist dat?

## X6 Werkende maar slechte code (Easy) {#x6}

Leg in maximaal vijf zinnen uit waarom "de code werkt" geen kwaliteitscriterium is. Geef één eigen voorbeeld van code die werkt en toch slecht is, en noem het criterium uit [4.4](./module-4.md#4_4) waarop ze slecht scoort.

## X7 Leesbaarder, of alleen anders? (Medium) {#x7}

Je stuurt in deze oefening hoogstens twee prompts.

1. Neem een function van minstens tien regels die je zelf schreef voor een ander vak. Zet ze in een nieuwe, lege map.
2. Voeg onderaan een regel toe die de function aanroept en het resultaat toont. Voer het bestand uit: typ in de terminal `node` en de naam van je bestand. Noteer de output.
3. Maak een kopie van de map. Open de kopie, en vraag een agent om de function leesbaarder te maken. Zeg dat het gedrag hetzelfde moet blijven.
4. Voer het bestand in de kopie uit. Is de output dezelfde?
5. Beoordeel de nieuwe versie met de criteria uit [4.4](./module-4.md#4_4): is de code echt leesbaarder, of alleen anders? Wat neem je over, en wat niet? Plak de function van voor en na de wijziging in je invulbestand.

## X8 Twee implementaties laten genereren (Medium) {#x8}

Een keuze tussen implementaties maak je met criteria die je vooraf vastlegt (zie [4.5](./module-4.md#4_5)). Je stuurt in deze oefening hoogstens twee prompts.

1. Kies een klein probleem, zoals alle dubbele waarden in een lijst zoeken.
2. Beschrijf de context in twee zinnen: waarvoor dient de code, en hoe groot is de lijst? Leg daarna drie criteria vast, en noteer waarom ze in die context belangrijk zijn.
3. Maak een lege map en open ze. Vraag in een nieuw gesprek twee verschillende implementaties, in één bestand, als twee functions met een eigen naam.
4. Schrijf zelf onderaan drie regels die beide functions aanroepen: met een gewone lijst, met een lege lijst en met een lijst waarin elke waarde dubbel staat. Voer het bestand uit en noteer de output.
5. Beoordeel beide versies op je criteria en verantwoord je keuze in maximaal drie zinnen.

## X9 Een eigen function volledig analyseren (Hard) {#x9}

Je analyseert een function van jezelf, zoals in [4.2](./module-4.md#4_2). Neem een function van minstens twintig regels uit een eigen project, met meerdere conditions. Zet ze in een nieuwe, lege map en open die map. Je stuurt in deze oefening hoogstens twee prompts.

1. Beschrijf zonder AI de control flow, in genummerde stappen.
2. Maak zonder AI een trace table voor twee verschillende inputs.
3. Noteer alle aannames die de function maakt over haar input. Test er minstens twee: voer de function uit met een input die de aanname breekt, en noteer het resultaat.
4. Laat daarna een agent dezelfde analyse maken, zonder iets te veranderen. Vergelijk: wat vond het model dat jij miste? Wat vond jij dat het model niet noemde? Klopte alles wat het model schreef?

## X10 Code-archeologie (@home) {#x10}

Je onderzoekt code van iemand anders, zonder hulp van de auteur (zie [4.1](./module-4.md#4_1)). Je stuurt in deze oefening hoogstens drie prompts.

Kies op GitHub een klein open-sourceproject: enkele honderden regels code, verdeeld over meerdere bestanden. Vermeld de link.

1. Lees de README en maak een kaart van het project: de bestanden, hun taak en wat ze van elkaar gebruiken.
2. Kies één function. Beschrijf haar control flow en noteer haar aannames.
3. Stel drie verbeteringen voor op leesbaarheid, structuur of onderhoudbaarheid. Zeg bij elke verbetering welk criterium ze dient.
4. Je mag een agent gebruiken als hulp. Noteer bij elk punt wat het model bijdroeg, wat je zelf ontdekte en hoe je de bijdrage van het model controleerde.

## X11 Een checklist voor een review (Hard) {#x11}

Stel een eigen checklist op om code te reviewen, met of zonder agent (zie [4.3](./module-4.md#4_3)). Gebruik je een agent, dan stuur je hoogstens twee prompts. De checklist heeft minstens tien punten, verdeeld over leesbaarheid, structuur, onderhoudbaarheid, edge cases en afspraken van het project. Formuleer elk punt als een vraag die je met ja of nee beantwoordt, en noteer erbij hoe je het controleert.

Test je checklist op `stats.js` in de map `scorebord-thuis`. Welke punten leverden iets op?

## X12 Drie versies, één keuze (Hard) {#x12}

Je kiest tussen drie implementaties met criteria die je vooraf vastlegt (zie [4.5](./module-4.md#4_5)). Je werkt in de map `rangschikking`. Je stuurt in deze oefening hoogstens twee prompts.

Het scorebord krijgt een nieuwe function in `stats.js`: `getRanking(players)` geeft de namen van de spelers, van de hoogste score naar de laagste. Een agent schreef drie versies. Ze staan in `varianten.js`, en onderaan deze oefening.

In deze code staat JavaScript die je misschien nog niet kent. Dat is de bedoeling: zo ziet gegenereerde code er vaak uit. Je hoeft ze niet zelf te kunnen schrijven. Je moet wel kunnen beslissen welke versie in het project past.

Voor `stats.js` gelden deze twee afspraken uit `AGENTS.md`:

```markdown
- `stats.js` bevat alleen berekeningen: geen three.js en geen HTML. Een function in `stats.js` verandert haar input niet.
- Kan een function in `stats.js` niets berekenen, bijvoorbeeld bij een lege lijst, dan geeft ze `null` terug. Ze gooit geen fout.
```

1. Leg eerst je criteria vast. Lees de code nog niet. Kies uit de vijf criteria van 4.5 de drie die voor dit project het zwaarst wegen. Noteer bij elk criterium in één zin waarom.
2. Open de map `rangschikking` en lees de drie versies in `varianten.js`. Noteer per versie de regels die je niet kan uitleggen.
3. Je mag over hoogstens twee van die regels uitleg vragen, elk in een eigen prompt. Zeg dat de agent niets mag veranderen.
4. Typ in de terminal `node varianten.js`. Noteer per versie wat je opvalt in de output. Klopt de output met de uitleg die je kreeg?
5. Beoordeel elke versie op je drie criteria:

```text
Criterium | Versie A | Versie B | Versie C
1. ...    | ...      | ...      | ...
2. ...    | ...      | ...      | ...
3. ...    | ...      | ...      | ...
```

6. Welke versie kies je voor het scorebord? Verantwoord je keuze in maximaal drie zinnen. Noem je criteria, en zeg ook wat voor dit project niet doorweegt.

Er is niet één juist antwoord. Je verantwoording telt.

De drie versies uit `varianten.js`:

```js
// Version A
function getRankingA(players) {
  if (players.length === 0) {
    return null;
  }
  const ranking = [...players]; // a copy of the list
  ranking.sort((a, b) => b.score - a.score);
  return ranking.map((player) => player.name);
}

// Version B
function getRankingB(players) {
  return players.sort((a, b) => b.score - a.score).map((player) => player.name);
}

// Version C
function getRankingC(players) {
  const names = [];
  const used = [];
  for (let i = 0; i < players.length; i++) {
    let best = -1;
    for (let j = 0; j < players.length; j++) {
      if (!used.includes(j) && (best === -1 || players[j].score > players[best].score)) {
        best = j;
      }
    }
    used.push(best);
    names.push(players[best].name);
  }
  return names;
}
```
