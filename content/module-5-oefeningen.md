---
module: 5
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 5

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 5. De extra-reeks biedt verdieping in debugtechnieken en tools.

## E1 Een stack trace lezen {#e1 .easy}

Een stack trace lees je van boven naar onder (zie [5.1](./module-5.md#5_1)).

1. Schrijf een kleine JavaScript-function die een andere function aanroept, en stop er bewust een fout in die een `TypeError` geeft.
2. Voer de code uit en kopieer de stack trace.
3. Beschrijf zonder AI: welke functions werden aangeroepen, in welke volgorde, en op welke regel trad de fout op? Waar zit de oorzaak?

```text
Fout opgetreden in: ... (regel ...)
Aangeroepen door: ...
Oorzaak: ...
```

## E2 Een debugprompt schrijven {#e2 .easy}

Een model helpt het best als je alle informatie meegeeft (zie [5.3](./module-5.md#5_3)).

```output
TypeError: Cannot read properties of undefined (reading 'length')
    at countCharacters (utils.js:14:20)
    at processInput (main.js:8:12)
```

Schrijf een prompt om deze fout te laten analyseren. De prompt bevat:

- de foutmelding;
- de relevante code: bedenk zelf een plausibele versie van `countCharacters` en `processInput`;
- het verwachte gedrag en het werkelijke gedrag.

## E3 Een bug in een gemiddelde {#e3 .easy}

Deze function geeft een verkeerd resultaat:

```js
const calculateAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log(calculateAverage([2, 4, 6]));
```

```output
NaN
```

1. Zoek de bug zonder AI.
2. Formuleer een hypothese over de oorzaak.
3. Beschrijf hoe je de hypothese test, en voer de test uit.
4. Laat daarna een AI-tool de bug zoeken. Vond het model dezelfde bug?

Na je correctie moet de function dit tonen:

```output
4
```

## M1 Drie fouten, drie minimal examples {#m1}

Een minimal example maakt de oorzaak van een fout zichtbaar (zie [5.2](./module-5.md#5_2)).

1. Schrijf een function naar keuze en stop er drie fouten in: een syntaxfout, een logicafout en ontbrekende foutafhandeling.
2. Bouw voor elke fout een minimal example.
3. Gebruik AI bij de analyse. Noteer per fout:
   - het minimal example;
   - je hypothese over de oorzaak;
   - de oplossing en hoe je ze controleerde.

## M2 Een analyse van code smells beoordelen {#m2}

AI spoort code smells snel op, maar jij beslist wat je ermee doet (zie [5.4](./module-5.md#5_4)).

1. Neem een stuk code van minstens twintig regels uit een eigen oefening.
2. Laat een AI-tool de code smells opsporen.
3. Beoordeel elke gevonden smell:
   - Is ze terecht?
   - Is ze in deze context verantwoord?
   - Pak je ze aan? Waarom wel of niet?

## M3 Stap voor stap refactoren {#m3}

Refactor deze function in kleine stappen (zie [5.5](./module-5.md#5_5) en [5.6](./module-5.md#5_6)).

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
  { id: 1, type: "book", date: "2026-10-01", active: true, price: 20 },
  { id: 2, type: "book", date: "2026-08-15", active: true, price: 15 },
  { id: 3, type: "game", date: "2026-10-05", active: true, price: 40 },
  { id: 4, type: "book", date: "2026-10-10", active: false, price: 30 },
];
console.log(proc(items, "book", "2026-09-01"));
```

```output
[ { id: 1, val: 18 } ]
```

1. Schrijf eerst minstens drie extra aanroepen met hun verwachte output. Die gebruik je als tests.
2. Refactor in minstens vier stappen. Voer na elke stap al je tests uit.
3. Noteer per stap wat je veranderde en of alle tests nog slaagden.

## M4 Systematisch debuggen {#m4}

Deze function vindt Marie niet:

```python
def find_user(users, name):
    for i in range(len(users)):
        if users[i]["name"] == name:
            return users[i]
    return None

users = [{"name": "Jan", "age": 25}, {"name": "Marie", "age": 30}]
print(find_user(users, "marie"))
```

```output
None
```

Verwacht: het object van Marie. Debug systematisch, eerst zonder AI:

1. Reproduceer de fout.
2. Bouw een minimal example.
3. Formuleer een hypothese en test ze.
4. Los de bug op. Beslis zelf of `"MARIE"` en `" Marie "` ook gevonden moeten worden, en vermeld je keuze.

Gebruik AI pas na je eigen analyse, en noteer wat het model toevoegde.

## H1 Een debugscenario voor een medestudent {#h1 .hard}

Je bouwt een debugopdracht voor iemand anders.

1. Schrijf een function met drie verborgen bugs van verschillende types: een off-by-one error, een fout met datatypes en een edge case die niet afgehandeld wordt.
2. Schrijf voor elke bug een minimal example, maar hou die voor jezelf.
3. Wissel je function uit met een medestudent. Debug elkaars code systematisch volgens 5.2 en 5.3.
4. Vergelijk achteraf: vond je medestudent dezelfde minimal examples?

## H2 Een bug uit een issue tracker {#h2 .hard}

Je analyseert een echte bug in een open-sourceproject.

Kies een gemelde bug in een project met een publieke issue tracker, zoals op GitHub. Analyseer de bug:

- Reproductie: kan je de bug reproduceren op basis van de beschrijving?
- Minimal example: kan je de bug isoleren?
- Hypothese: wat is de waarschijnlijkste oorzaak?

Gebruik AI bij de analyse en noteer wat het bijdroeg. Je moet de bug niet oplossen: het gaat om de analyse.

## @1 Bugjacht in open source {#home1 .home}

Een uitgebreidere versie van H2.

Kies in een open-sourceproject met een actieve issue tracker drie gemelde bugs. Analyseer elke bug:

- Reproduceer de bug, of beschrijf hoe je dat zou doen.
- Bouw een minimal example.
- Formuleer hypothesen over de oorzaak.
- Gebruik AI als hulpmiddel en noteer wat het bijdroeg.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Code smells benoemen (Easy) {#x1}

Benoem minstens vier code smells in deze function. Geef per smell het type uit 5.4 en waarom het een probleem is.

```python
def f(x, y, z):
    result = 0
    if x > 0:
        if y > 0:
            if z == "EUR":
                result = x * y * 1.21
            elif z == "USD":
                result = x * y * 1.21 * 1.08
    return result

print(f(2, 10, "EUR"))
```

```output
24.2
```

## X2 Debuggen of refactoren? (Easy) {#x2}

Leg in maximaal vijf zinnen het verschil uit tussen debuggen en refactoren. Mag je ze tegelijk doen? Waarom wel of niet?

## X3 Tools voor refactoring (Easy) {#x3}

Zoek een AI-tool die gericht is op het opsporen van code smells of op refactoring, geen algemene chatbot. Beschrijf wat de tool doet, hoe ze werkt en wanneer je ze zou gebruiken.

## X4 Drie refactorings vergelijken (Medium) {#x4}

1. Leg vooraf criteria vast (zie [4.5](./module-4.md#4_5)).
2. Laat een AI-tool drie verschillende refactorings voorstellen voor `proc` uit M3.
3. Controleer met je tests uit M3 of elke versie hetzelfde gedrag heeft.
4. Beoordeel de versies op je criteria en verantwoord je keuze.

## X5 Gokken of hypothesen (Medium) {#x5}

Vergelijk twee aanpakken voor hetzelfde probleem:

- Aanpak A: willekeurig dingen aanpassen tot de fout verdwijnt.
- Aanpak B: de fout reproduceren, een hypothese formuleren, ze gericht testen en bijsturen.

Werk een concreet scenario uit met beide aanpakken. Vergelijk de tijd die je nodig had, wat je leerde en hoe zeker je bent van het resultaat.

## X6 White-box en black-box debuggen (Medium) {#x6}

Bij **white-box debuggen** heb je de broncode. Bij **black-box debuggen** zie je enkel input en output.

Zoek op wanneer je welke aanpak gebruikt. Leg in maximaal tien zinnen uit hoe je AI anders inzet bij elk. Vermeld je bron.

## X7 AI-tools voor debuggen (Hard) {#x7}

Onderzoek twee AI-tools die helpen bij debuggen, zoals de debugfuncties van GitHub Copilot of Cursor. Vergelijk ze op:

- hoe ze foutmeldingen en stack traces interpreteren;
- hoe ze hypothesen over de oorzaak voorstellen;
- hoeveel context over je codebase ze meenemen;
- hun beperkingen bij complexe bugs.

## X8 Een debugging playbook (Hard) {#x8}

Stel een persoonlijk debugging playbook op: de vaste aanpak die je volgt bij een bug.

- minstens acht stappen;
- per stap: werk je zelfstandig, of schakel je AI in?
- een aangepaste aanpak voor vier soorten fouten: syntaxfout, logicafout, regressie en een bug die maar af en toe optreedt.
