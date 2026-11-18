---
module: 3
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 3

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 3. Het zijn vijf oefeningen, in de volgorde van de les: M1 tot en met M4 en daarna E1. Je maakt ze tijdens de les. De extra-reeks is optioneel.

Je kan alle oefeningen zelfstandig maken, in de les of thuis. Elke oefening zegt wat je opent, wat je stuurt, hoe je controleert en wat je noteert. Lees eerst [Voor je begint](#start).

Je werkt je antwoorden uit in een invulbestand en levert dat in via de opdracht **Oefeningen module 3** in Canvas. Daar vind je ook het invulbestand en de startbestanden. Je levert alleen het invulbestand in: screenshots en code plak je erin. Bewaar je mappen wel bij je portfolio.

## Zo doorloop je deze les {#plan}

Volg je de les niet in het lokaal? Dan maak je ze zelfstandig, in deze volgorde. Lees telkens eerst de sectie in [module 3](./module-3.md) en maak dan de oefening. Reken op ongeveer twee en een half uur. In M1 tot en met M4 werk je in één map, aan één project.

| Stap | Lees | Maak | Tijd |
| --- | --- | --- | --- |
| 1 | 3.1 Een eerste versie genereren | M1 | 30 min |
| 2 | 3.2 Begrijp wat je kreeg | M2 | 20 min |
| 3 | 3.3 Verder bouwen met feedbackpunten | M3 | 25 min |
| 4 | 3.4 Code inpassen in een bestaand project | M4 | 35 min |
| 5 | 3.5 Typische tekortkomingen | Test jezelf 3.5 | 10 min |
| 6 | 3.6 Configuratie en geheimen | E1 | 15 min |

## Voor je begint {#start}

**Wat heb je nodig?**

- Het **invulbestand** en de **startbestanden** (een zip). Je vindt ze bij de opdracht in Canvas. Pak de zip uit. Voor de core-reeks heb je de map `scene` en het bestand `server.js` nodig.
- Een **agent harness**, zoals GitHub Copilot in Visual Studio Code. Die heb je nodig voor elke oefening waarin je een prompt verstuurt. Is dat nog niet in orde? Volg dan de startgids bij de opdracht in Canvas.
- Een **browser**, zoals Chrome, Edge of Firefox, en een internetverbinding. Het startproject laadt three.js van het internet.
- **Node.js**, voor oefening M4. Open in Visual Studio Code een terminal (**Terminal > New Terminal**) en typ `node --version`. Zie je een versienummer, dan is het in orde. Zie je een foutmelding? Installeer dan de LTS-versie van [nodejs.org](https://nodejs.org).

**Zo werk je met de agent harness**

- **Maak je agent harness klaar.** Open de chat. Controleer of je permissions goed staan, en kies een model waar je vertrouwen in hebt, als je agent harness je laat kiezen (zie de startgids).
- **Open de juiste map.** Elke oefening zegt welke map je opent (**File > Open Folder**). Zo ziet de agent alleen de bestanden van die oefening.
- **Let op je verbruik.** Elke prompt kost AI credits, en je tegoed per maand is beperkt (zie de startgids). Daarom zegt elke oefening hoeveel prompts je hoogstens stuurt. Hou je daaraan.
- **Start een nieuw gesprek** (**New Chat**) waar de oefening dat zegt.
- **Noteer wat je gebruikte.** Schrijf bij elke oefening waarin je een prompt verstuurt welke agent harness en welk model je gebruikte. Staat de model picker op Auto en zie je de naam van het model niet? Schrijf dan `Auto`.

**Zo bekijk je je scène**

1. Zoek het bestand `index.html` in de Verkenner (Windows) of de Finder (Mac) en dubbelklik erop. Het opent in je browser. Vind je de map niet? Klik in Visual Studio Code met de rechtermuisknop op `index.html` en kies **Reveal in File Explorer** (Windows) of **Reveal in Finder** (Mac).
2. Na elke wijziging herlaad je de pagina in je browser met F5.
3. Zie je een leeg scherm of beweegt er niets? Druk in je browser op F12 en kies **Console**. Rode regels zijn foutmeldingen. Kopieer de melding en plak ze in je prompt: je kan vragen wat ze betekent, of vragen om de fout op te lossen (zie [3.3](./module-3.md#3_3)).

**Zo bewaar je een versie van je map**

In een echt project bewaar je versies met versiebeheer, zoals Git (zie [3.1](./module-3.md#3_1)). In deze oefeningen gebruik je een eenvoudige vervanging: een kopie van je map. Werk je al met Git? Maak dan gerust ook een commit. De kopie heb je toch nodig, want de oefeningen verwijzen ernaar.

Sluit niets af. Zoek de map in de Verkenner of de Finder, kopieer ze (Ctrl+C en Ctrl+V, op een Mac Cmd+C en Cmd+V) en geef de kopie de naam die de oefening vraagt, zoals `scene-v1`. Je werkt verder in de oorspronkelijke map. In de kopie verander je niets meer.

**Zo maak je een screenshot**

Op Windows druk je op Windows+Shift+S, op een Mac op Cmd+Shift+4. Selecteer het venster van je browser en plak de screenshot in je invulbestand.

## M1 Mijn scène: een eerste versie {#m1}

Je laat een eerste versie genereren en je bewaart ze (zie [3.1](./module-3.md#3_1)). In M1 tot en met M4 werk je aan dezelfde scène. Je stuurt in deze oefening hoogstens twee prompts.

In de startbestanden staat de map `scene` met twee bestanden: `index.html` en `AGENTS.md`. Je kan de map ook zelf maken: de code staat onderaan deze oefening.

1. Open `index.html` in je browser (zie [Voor je begint](#start)). Je ziet een oranje kubus die draait op een groene vloer.
2. Denk eerst na, zonder AI. Wat wil jij in deze scène zetten? Jij kiest, en het mag alles zijn:
   - een voorwerp uit iets van jezelf: je sport, je muziek, je bijbaan, je huisdier, een game, je lievelingseten, de plaats waar je woont;
   - iets abstracts: een beweging, een gevoel, een kleur, of een effect met particles, zoals sneeuw, vonken of sterren.

   Kies iets wat niet iedereen zou kiezen. Beschrijf in maximaal drie zinnen wat erbij komt, wat er beweegt en wat er gebeurt als je op een toets drukt of met de muis klikt.

   Hou het bij één idee. Dat is bewust voorzichtig: elke prompt kost AI credits, en een groot idee kost veel prompts. Wat je daarna nog wil, wordt een feedbackpunt in M3.
3. Schrijf je prompt. Neem de context over en vul de rest zelf in.

```text
Context: een three.js-scène in index.html. De afspraken van het project
staan in AGENTS.md.
Input: <een toets of een muisklik>
Output: <wat erbij komt, waaruit het bestaat, waar het staat, wat beweegt
en wat er gebeurt bij de input>
Beperkingen: <wat de agent niet mag veranderen>
```

4. Open de map `scene` in Visual Studio Code en stuur je prompt in een nieuw gesprek.
5. Herlaad de pagina in je browser. Zie je een leeg scherm? Stuur dan één vervolgprompt met wat je ziet en de foutmelding uit de console.
6. Maak een screenshot en plak hem in je invulbestand.
7. Noteer: wat doet de scène zoals je het vroeg? Wat koos het model zelf? Kwam er iets bij wat je niet vroeg?
8. Bewaar je eerste versie: maak een kopie van de map `scene` met de naam `scene-v1` (zie [Voor je begint](#start)). Doe dat nu, voor je aan M2 begint.

De startbestanden van deze oefening:

`AGENTS.md`:

```markdown
# Afspraken voor dit project

- Alle code staat in `index.html`. Maak geen extra bestanden. De pagina wordt geopend met een dubbelklik, zonder server.
- three.js versie 0.170.0 is al geladen in `index.html`. Voeg geen andere libraries en geen addons toe.
- Gebruik alles wat three.js zelf biedt: vormen, lijnen, punten voor particles, lichten, materialen, mist en beweging. Laad geen afbeeldingen, 3D-modellen of andere bestanden.
- Elk voorwerp of effect krijgt een eigen function die het maakt, zoals `createCube()`.
- Namen en comments zijn in het Engels. Namen staan in camelCase.
```

`index.html`:

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <title>Mijn 3D-scène</title>
  <style>
    body { margin: 0; overflow: hidden; }
  </style>
  <script type="importmap">
    { "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js" } }
  </script>
</head>
<body>
<script type="module">
import * as THREE from 'three';

// --- Settings ---
const backgroundColor = 0x87ceeb;
const floorColor = 0x55aa55;
const cubeColor = 0xff8800;
const lightIntensity = 3;
const rotationSpeed = 0.01;

// --- Scene, camera and renderer ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(backgroundColor);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 3, 6);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- Light ---
const sunLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
sunLight.position.set(5, 10, 5);
scene.add(sunLight);

// --- Objects ---
function createFloor() {
  const geometry = new THREE.BoxGeometry(10, 0.2, 10);
  const material = new THREE.MeshStandardMaterial({ color: floorColor });
  const floor = new THREE.Mesh(geometry, material);
  floor.position.y = -0.1;
  return floor;
}

function createCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: cubeColor });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.y = 1;
  return cube;
}

const floor = createFloor();
scene.add(floor);

const cube = createCube();
scene.add(cube);

// --- Animation loop ---
function animate() {
  cube.rotation.y += rotationSpeed;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// --- Keep the picture the right size when the window changes ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
</script>
</body>
</html>
```

## M2 Mijn scène: begrijp wat je kreeg {#m2}

Een uitleg van een model is een bewering. Je test ze zelf (zie [3.2](./module-3.md#3_2)). Je stuurt in deze oefening hoogstens twee prompts.

1. Open de map `scene` en lees `index.html` van boven naar beneden. Kies één regel of één getal dat je niet kan uitleggen. Dat mag in de code van de agent zijn, of in de code die er al stond. Vind je niets? Kies dan één van deze vragen:
   - Wat betekenen de drie getallen in `camera.position.set(4, 3, 6)`?
   - Wat doet `renderer.setAnimationLoop(animate)`?
   - Wat doen de drie getallen in `new THREE.BoxGeometry(1, 1, 1)`?
2. Stuur in een nieuw gesprek een prompt die uitleg vraagt over dat ene ding. Zeg erbij dat de agent niets aan de code mag veranderen.
3. Schrijf de uitleg in je eigen woorden, in maximaal drie zinnen.
4. Voorspel. Kies een getal in de code dat met je vraag te maken heeft, en een nieuwe waarde. Schrijf op wat je denkt dat er op het scherm verandert. Doe dat voor je iets verandert.
5. Verander de waarde zelf in `index.html`, zonder de agent. Bewaar het bestand en herlaad de pagina.
6. Noteer wat je ziet. Klopte je voorspelling? Klopte de uitleg van het model?

Laat daarna de waarde staan die jij het best vindt.

## M3 Mijn scène: twee feedbackpunten {#m3}

Je verbetert je scène in kleine stappen: één punt per prompt (zie [3.3](./module-3.md#3_3)). Je stuurt in deze oefening hoogstens vier prompts.

1. Bekijk je scène in de browser. Schrijf twee feedbackpunten op: wat klopt niet, wat ontbreekt of wat wil je anders? Elk punt is één kleine, concrete wijziging.
2. Open de map `scene` en start een nieuw gesprek. Stuur punt 1 als prompt. Zeg wat moet veranderen, en dat de rest hetzelfde blijft.
3. Herlaad de pagina. Is het punt opgelost? Werkt alles nog wat al werkte? Noteer dat voor je verdergaat.
4. Doe hetzelfde voor punt 2, in hetzelfde gesprek.

```text
Punt | Vervolgprompt | Opgelost? | Werkt de rest nog?
1    | ...           | ...       | ...
2    | ...           | ...       | ...
```

Loopt een stap mis? Stuur één vervolgprompt met wat je ziet en de foutmelding uit de console. Lukt het dan nog niet? Noteer dat. Werkt je scène nog, ga dan verder met het volgende punt. Werkt je scène niet meer? Maak dan een kopie van `scene-v1` met de naam `scene-v2`, open die map en ga daar verder met het volgende punt, in een nieuw gesprek. Je eindresultaat staat dan in `scene-v2`.

5. Maak een screenshot van het eindresultaat en plak hem in je invulbestand.
6. Open `index.html` uit de map `scene-v1` naast je eindresultaat. Wat is het grootste verschil? Antwoord in maximaal twee zinnen.

## M4 Splits je project op {#m4}

Alle code van je scène staat in één bestand. Je laat de agent het project verdelen over drie bestanden, elk met één taak, en je controleert of hij de afspraken volgde (zie [3.4](./module-3.md#3_4)). Je werkt verder in dezelfde map. Je stuurt in deze oefening hoogstens twee prompts.

1. Bewaar eerst een versie: maak een kopie van de map met je scène, met de naam `scene-voor-splitsen`.
2. Kopieer het bestand `server.js` uit de startbestanden naar de map met je scène. Je kan het bestand ook zelf maken: de code staat onderaan deze oefening.
3. Pas zelf de afspraak aan. Open `AGENTS.md` en vervang de eerste regel van de lijst door deze twee regels:

```markdown
- De code is verdeeld over drie bestanden: `index.html` voor de structuur van de pagina, `style.css` voor de opmaak en `main.js` voor alle JavaScript.
- De pagina wordt bekeken via de lokale server: `node server.js`. Verander `server.js` niet.
```

4. Schrijf je prompt. Het doel is dezelfde scène, in drie bestanden. Zeg wat verandert, en wat hetzelfde moet blijven. Vul deze prompt aan en stuur hem in een nieuw gesprek:

```text
Verdeel de code over index.html, style.css en main.js, zoals de afspraken
in AGENTS.md zeggen. De scène moet precies hetzelfde tonen en doen als nu:
<wat je ziet, wat beweegt en wat er gebeurt bij je toets of muisklik>.
Voeg niets toe.
```

5. Dubbelklik op `index.html`. Het scherm blijft leeg. Open de console (F12) en noteer de eerste rode regel. Dat is geen fout van de agent: een browser laadt een bestand zoals `main.js` niet rechtstreeks van je schijf. Werkt de pagina toch? Kijk dan of je JavaScript echt in `main.js` staat.
6. Start de server. Open in Visual Studio Code een terminal (**Terminal > New Terminal**) en typ `node server.js`. Open daarna in je browser het adres `http://localhost:3000`. Zie je in de terminal `EADDRINUSE`? Dan draait de server al in een andere terminal.
7. Controleer: toont en doet je scène hetzelfde als voor het splitsen?
8. Controleer de zes afspraken in `AGENTS.md`. Open de drie bestanden en noteer per afspraak of ze gevolgd is, en waaraan je dat ziet.

```text
Afspraak                                               | Gevolgd? | Waaraan zie je dat?
De code is verdeeld over index.html, style.css, main.js | ...      | ...
De pagina werkt via node server.js                     | ...      | ...
Geen andere libraries of addons                        | ...      | ...
Alleen wat three.js zelf biedt, geen bestanden         | ...      | ...
Een eigen function per voorwerp of effect              | ...      | ...
Namen en comments in het Engels, camelCase             | ...      | ...
```

9. Werkt je scène niet zoals voor het splitsen, of is een afspraak niet gevolgd? Stuur dan één vervolgprompt. Zeg wat je ziet, of welke afspraak het is en waar in de code.
10. Plak de function die jouw voorwerp of effect maakt in je invulbestand.
11. Noem één voordeel en één nadeel van het gesplitste project, tegenover alles in één bestand.
12. Stop de server: klik in de terminal en druk op Ctrl+C.

De code van `server.js`:

```js
// Kleine lokale server om je project in de browser te bekijken.
// Starten: typ in de terminal van je map  node server.js
// Stoppen: druk in de terminal op Ctrl+C
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
};

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent(request.url.split('?')[0]);
  const file = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);

  if (!file.startsWith(__dirname)) {
    response.writeHead(403);
    response.end('Niet toegestaan');
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Niet gevonden: ' + urlPath);
      return;
    }
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    response.end(data);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log('Open http://localhost:' + port + ' in je browser.');
  console.log('Stoppen: druk op Ctrl+C.');
});
```

## E1 Geheimen in een configuratie {#e1 .easy}

Gegenereerde configuratie bevat vaak geheimen (zie [3.6](./module-3.md#3_6)). Je gebruikt voor deze oefening geen AI.

Een agent maakte deze twee bestanden voor een nieuw project.

`config.js`:

```js
export const config = {
  appName: "Sportclub De Sprinters",
  port: 3000,
  databaseUrl: "postgres://admin:Zomer2026@localhost:5432/sportclub",
  mailApiKey: "k9Xw-22fQ-71Lp-aa03",
  language: "nl",
};
```

`.gitignore`:

```text
node_modules/
```

1. Welke twee regels in `config.js` bevatten een geheim?
2. Herschrijf die twee regels met environment variables. Kies zelf een goede naam voor elke variable.
3. Welke regel voeg je toe aan `.gitignore`, en waarom?

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Boilerplate in een webproject (Easy) {#x1}

Zoek drie voorbeelden van boilerplate in een typisch webproject. Noteer per voorbeeld:

- wat het is;
- waarom het repetitief is;
- of AI hier nuttig is, en waarom.

## X2 Een beveiligingsincident (Easy) {#x2}

Zoek online een gedocumenteerd geval waarin AI-gegenereerde code een beveiligingsprobleem veroorzaakte, zoals een gelekte API key of een SQL-injectie. Beschrijf in maximaal tien zinnen wat er misliep en welke controle uit deze module het had kunnen voorkomen. Vermeld de bron.

## X3 Een design pattern laten genereren (Medium) {#x3}

Een **design pattern** (ontwerppatroon) is een bekende, herbruikbare oplossing voor een ontwerpprobleem dat vaak voorkomt.

1. Kies een design pattern, zoals singleton, factory of observer. Zoek op wat het doet en vermeld je bron.
2. Laat een agent een implementatie genereren.
3. Beoordeel de output: is het patroon correct uitgewerkt, welke aannames passen niet in een typisch project, en wat zou je aanpassen?

## X4 Eigen code laten verbeteren (Medium) {#x4}

1. Neem code die je zelf schreef voor een ander vak.
2. Laat een agent er een verbeterde versie van maken, in een kopie van de map.
3. Vergelijk beide versies: wat is beter, wat is slechter of past minder, en wat neem je over?

## X5 Agent harnesses vergelijken (Medium) {#x5}

Zoek twee agent harnesses voor programmeren, naast GitHub Copilot. Vergelijk ze op:

- hoe ze context over je project meenemen;
- hoe goed hun code aansluit bij bestaande code;
- of ze waarschuwen voor beveiligingsproblemen;
- hun sterke punten en beperkingen.

## X6 Technical debt door AI-code (Hard) {#x6}

1. Zoek op wat technical debt precies inhoudt. Vermeld je bron.
2. Beschrijf een concreet scenario waarin AI-code zonder QC technical debt veroorzaakt.
3. Beschrijf hoe je die schuld achteraf zou aflossen, in concrete stappen.

## X7 Een checklist voor code review (Hard) {#x7}

Je werkt in een team dat veel AI-code gebruikt. Stel een checklist op voor de review van AI-gegenereerde code. Gebruik minstens de onderwerpen van 3.4 tot 3.6, en formuleer elk punt als een vraag die je met ja of nee beantwoordt.

## X8 Projectcontext in agent harnesses (Hard) {#x8}

Agent harnesses bieden verschillende manieren om context over je project mee te geven, zoals het indexeren van je codebase of een instructiebestand (zie [2.4](./module-2.md#2_4)).

1. Onderzoek hoe GitHub Copilot, Cursor en minstens één andere agent harness dat doen.
2. Beschrijf per agent harness welke mechanismen er zijn.
3. Test bij één agent harness het verschil in output met en zonder projectcontext.

## X9 Beveiligingsaudit van een login (@home) {#x9}

1. Laat een agent een kleine webapplicatie genereren met registreren en inloggen.
2. Voer een beveiligingsaudit uit en onderzoek:
   - of wachtwoorden met hashing opgeslagen worden;
   - of er bescherming is tegen SQL-injectie en andere injectie;
   - of gevoelige configuratie in environment variables staat;
   - of er geheimen letterlijk in de code staan;
   - of er beveiligingsheaders zijn.
3. Noteer per bevinding de ernst en de correctie.
4. Sluit af met een reflectie van maximaal 300 woorden: wat zegt dit over AI voor beveiligingsgevoelige code?

## X10 Drie soorten fouten (Easy) {#x10}

Een syntaxfout zie je meteen, een logicafout niet (zie [3.5](./module-3.md#3_5)). Je zoekt het verschil zelf uit.

Schrijf voor elk type een kort codevoorbeeld van hoogstens vijf regels, met in één zin wat er misloopt:

1. een syntaxfout;
2. een logicafout;
3. een edge case die niet afgehandeld wordt.

Voer elk voorbeeld uit en noteer de output of de foutmelding.

## X11 Een configuratie laten genereren (Medium) {#x11}

1. Laat een agent in een lege map een configuratie genereren voor een nieuw project in een technologie naar keuze.
2. Controleer de output op de drie punten uit [3.6](./module-3.md#3_6):
   - Staan er wachtwoorden, API keys of andere geheimen letterlijk in?
   - Staat `.env` in de `.gitignore`?
   - Begrijp je wat elke instelling doet?
3. Noteer per punt wat je vond en wat je aanpaste.

## X12 Externe data zonder vangnet (Hard) {#x12}

Code die met externe data werkt, gaat het vaakst mis op de plaatsen waar het model de happy path aannam (zie [3.5](./module-3.md#3_5)).

1. Laat een agent in een lege map een module genereren die met externe data werkt: een API-call, een bestand inlezen of een query op een database.
2. Duid in de code alle plaatsen aan waar:
   - foutafhandeling ontbreekt;
   - de code aannames maakt over de structuur van de data;
   - een beveiligingsrisico ontstaat.
3. Schrijf een verbeterde versie die alle punten oplost. Test ze met minstens drie foutsituaties, zoals een netwerkfout, een leeg antwoord en een veld dat ontbreekt.

## X13 Welk fragment past in het project? (Easy) {#x13}

Nieuwe code moet passen in het project (zie [3.4](./module-3.md#3_4)). Je gebruikt voor deze oefening geen AI.

Een project gebruikt camelCase en arrow functions. Twee fragmenten doen hetzelfde.

```js
// Fragment A
function calculate_total(price, vat_percentage) {
  var total = price + (price * vat_percentage / 100);
  return total;
}

// Fragment B
const calculateTotal = (price, vatPercentage) => price + (price * vatPercentage / 100);
```

Beide geven voor een prijs van 100 en 21 % btw hetzelfde resultaat:

```output
121
```

1. Welk fragment past in het project?
2. Noem drie verschillen die het andere fragment niet meteen bruikbaar maken in dit project.

## X14 Een tweede scène, helemaal van jou (@home) {#x14}

Je doorloopt de volledige werkwijze van deze module nog één keer, met een nieuw idee (zie [3.1](./module-3.md#3_1) tot [3.4](./module-3.md#3_4)). Je stuurt in deze oefening hoogstens zes prompts.

In de startbestanden staat de map `scene-thuis`. Ze bevat hetzelfde startproject als `scene`: zo begin je opnieuw van de kubus op de vloer, en blijft je scène uit de les bewaard.

1. Denk eerst na, zonder AI. Kies een ander onderwerp dan in de les. Beschrijf in maximaal drie zinnen wat er in de scène komt, wat beweegt en wat er gebeurt bij een toets of een muisklik. Je mag de kubus laten vervangen.
2. Schrijf je prompt met context, input, output en beperkingen. Open de map `scene-thuis` en stuur je prompt in een nieuw gesprek.
3. Herlaad de pagina en maak een screenshot. Bewaar daarna je eerste versie: maak een kopie van de map met de naam `scene-thuis-v1`.
4. Kies één regel in de code van de agent die je niet kan uitleggen. Vraag uitleg zonder dat de agent iets verandert. Test de uitleg: voorspel, verander zelf een waarde en kijk.
5. Schrijf twee feedbackpunten en stuur ze één per één. Controleer na elke prompt.
6. Controleer de vijf afspraken uit `AGENTS.md`. Noteer welke afspraken niet gevolgd zijn, en waaraan je dat ziet. Zijn ze allemaal gevolgd, noteer dat dan.
7. Maak een screenshot van het eindresultaat.
8. Kijk terug in maximaal 150 woorden. Wat zou je de volgende keer anders doen in je eerste prompt? Wat koos het model dat jij liever zelf had beslist?

```text
Stap             | Je prompt | Wat veranderde er? | Hoe controleerde je dat?
Eerste versie    | ...       | ...                | ...
Uitleg           | ...       | ...                | ...
Feedbackpunt 1   | ...       | ...                | ...
Feedbackpunt 2   | ...       | ...                | ...
```

## X15 Belgische datums (Medium) {#x15}

Een model neemt vaak de Amerikaanse notatie aan (zie [3.5](./module-3.md#3_5)). Je zoekt uit of dat hier ook gebeurt. Je stuurt in deze oefening hoogstens twee prompts.

1. Maak een lege map `datums` en open ze. Stuur in een nieuw gesprek deze prompt:

```text
Schrijf in JavaScript een function parseDate(text) die een datum als tekst
omzet naar een Date-object. Zet de function in datums.js.
```

2. Plak dit testblok onderaan in `datums.js`:

```js
const inputs = ['03/04/2026', '31/12/2026', '3 april 2026'];

for (const input of inputs) {
  let result;
  try {
    result = parseDate(input).toLocaleDateString('nl-BE',
      { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (error) {
    result = 'fout: ' + error.message;
  }
  console.log(input + ' -> ' + result);
}
```

3. Typ in de terminal `node datums.js`. Noteer de drie resultaten in de kolom "Eerste versie". Doe dat voor je verdergaat.
4. Wat gaat er mis? Welke aanname maakte het model over de notatie van een datum? Was alles meteen juist, noteer dat dan.
5. Stuur in hetzelfde gesprek één vervolgprompt. Zeg welke notatie de function moet lezen, en geef voor elke input in de tabel een voorbeeld met de verwachte output (zie [2.6](./module-2.md#2_6)).
6. Typ opnieuw `node datums.js`. Noteer de resultaten in de kolom "Na je vervolgprompt".

```text
Input        | Verwacht         | Eerste versie | Na je vervolgprompt
03/04/2026   | 3 april 2026     | ...           | ...
31/12/2026   | 31 december 2026 | ...           | ...
3 april 2026 | 3 april 2026     | ...           | ...
```
