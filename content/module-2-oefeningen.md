---
module: 2
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 2

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 2. Een deel maak je tijdens de les. De extra-reeks gaat dieper in op technieken zoals few-shot prompting en system prompts.

Je kan alle oefeningen zelfstandig maken, in de les of thuis. Elke oefening zegt wat je opent, wat je stuurt, hoe je controleert en wat je noteert. Lees eerst [Voor je begint](#start).

Je werkt je antwoorden uit in een invulbestand en levert dat in via de opdracht **Oefeningen module 2** in Canvas. Daar vind je ook het invulbestand en de startbestanden. Je ingevulde oefeningen zijn een deel van je portfolio.

## Voor je begint {#start}

**Wat heb je nodig?**

- Het **invulbestand** en de **startbestanden** (een zip). Je vindt ze bij de opdracht in Canvas. Pak de zip uit.
- Een **agent harness**, zoals GitHub Copilot in Visual Studio Code. Die heb je nodig voor elke oefening waarin je een prompt verstuurt. Is dat nog niet in orde? Volg dan de startgids bij de opdracht in Canvas.
- **Node.js**, om JavaScript uit te voeren. Open in Visual Studio Code een terminal (**Terminal > New Terminal**) en typ `node --version`. Zie je een versienummer, dan is het in orde. Zie je een foutmelding? Installeer dan de LTS-versie van [nodejs.org](https://nodejs.org).

**Zo werk je met de agent harness**

- **Kies Agent.** Kijk of onderaan in de chat **Agent** gekozen is (zie de startgids). Met Agent kan de agent harness bestanden in je map lezen, maken en aanpassen.
- **Open de juiste map.** Elke oefening zegt welke map je opent (**File > Open Folder**). Zo ziet de agent alleen de bestanden van die oefening.
- **Twee prompts, twee mappen.** Test je twee prompts, dan krijgt elke prompt een eigen map: de ene eindigt op `-a`, de andere op `-b`. Wat de agent in een map maakt, laat je staan. Je hoeft nooit iets ongedaan te maken.
- **Een nieuwe prompt, een nieuw gesprek.** Start voor elke prompt een nieuw gesprek (**New Chat**), tenzij de oefening iets anders zegt.
- **Staat de code alleen in de chat?** Maak dan zelf een bestand in de map, bijvoorbeeld `phone.js`, en plak de code erin.
- **Noteer wat je gebruikte.** Schrijf bij elke oefening waarin je een prompt verstuurt welke agent harness en welk model je gebruikte. Staat de model picker op Auto en zie je de naam van het model niet? Schrijf dan `Auto`.

**Zo test je een function**

1. Zet onderaan in het bestand een regel die de function oproept en het resultaat toont:

```js
console.log(average([10, 15]));
```

2. Typ in de terminal `node`, gevolgd door de naam van het bestand:

```bash
node average.js
```

3. Lees het resultaat in de terminal. Zie je een regel met `Error:`, dan gooide de function een fout.

## E1 Wie beslist? {#e1 .easy}

Wat je niet zegt, beslist het model (zie [2.1](./module-2.md#2_1)).

Bekijk deze prompt:

```text
Maak een function die een prijs berekent.
```

1. Noteer minstens zes dingen die het model zelf moet beslissen.
2. Kies er twee uit. Schrijf voor elk één zin die je aan de prompt toevoegt, zodat jij beslist.

Geef je antwoord in dit formaat:

```text
Het model beslist:
1. in welke programmeertaal de function geschreven is
2. ...

Mijn twee zinnen:
- ...
```

## E2 Eerst denken, dan prompten {#e2 .easy}

Weet wat je wil voor je een prompt schrijft (zie [2.2](./module-2.md#2_2)).

Een vriend vraagt je:

> Kan jij een app maken waarmee ons voetbalteam kan zien wie naar de training komt?

Je gebruikt voor deze oefening geen AI. Beantwoord de vier vragen uit 2.2:

1. Wat wil je bouwen? Beschrijf het in maximaal drie zinnen.
2. Waarom? Welk probleem lost het op, en voor wie?
3. Wat hoort er niet bij? Noem minstens twee dingen.
4. Waar botst het mee? Noem minstens één trade-off.

Schrijf daarna in één zin de eerste, kleine taak die je aan een model zou vragen.

## E3 De vier elementen {#e3 .easy}

Een goede prompt beschrijft context, input, output en beperkingen (zie [2.3](./module-2.md#2_3)).

- A: `Schrijf een function die een lijst sorteert.`
- B: `Schrijf in Python een function sort_descending(numbers) die een lijst van gehele getallen krijgt.`
- C: `Schrijf in Python een function sort_descending(numbers) die een lijst van gehele getallen sorteert van groot naar klein en de gesorteerde lijst teruggeeft. Gebruik geen externe libraries.`

1. Noteer voor elke prompt welke elementen erin staan en welke ontbreken.
2. Vul prompt B aan zodat alle vier de elementen erin staan. Je mag prompt C niet overnemen: kies een andere output of beperking.

Geef je antwoord op vraag 1 in dit formaat:

```text
A: context ontbreekt, input ..., output ..., beperkingen ...
B: ...
C: ...
```

## E4 Welke soort vraag, welke output? {#e4 .easy}

Elke prompt is een van de drie soorten uit [2.5](./module-2.md#2_5), en bij elke prompt hoort een output.

1. Schrijf een function die het gemiddelde van een array berekent.
2. Bekijk de code hieronder en zeg of ze fouten bevat.
3. Herschrijf deze function zodat ze async/await gebruikt in plaats van callbacks.
4. Schrijf vijf test cases voor de function validateEmail().
5. Vergelijk de twee implementaties hieronder en zeg welke leesbaarder is.

De code waar de prompts 2, 3 en 5 naar verwijzen, staat er niet bij. Je hebt ze niet nodig: het gaat om de soort vraag.

Noteer voor elke prompt de soort vraag (genereren, aanpassen of evalueren) en de output die je verwacht: nieuwe code, aangepaste code of alleen tekst.

Herschrijf daarna prompt 2 zodat een agent zeker niets aan de code verandert.

```text
1. genereren – nieuwe code
2. ...
```

## M1 Van vaag naar precies {#m1}

Deze prompt laat het model bijna alles zelf kiezen:

```text
maak een wachtwoordchecker
```

1. Herschrijf de prompt met de structuur uit [2.3](./module-2.md#2_3). Vul alle vier de elementen in: context, input, output en minstens één beperking. Jij kiest wat een sterk wachtwoord is.
2. Voeg minstens drie voorbeelden toe, waarvan één edge case (zie [2.6](./module-2.md#2_6)).
3. Maak een lege map `wachtwoord-a` en open ze. Stuur de vage prompt in een nieuw gesprek.
4. Maak een tweede lege map `wachtwoord-b` en open ze. Stuur jouw prompt in een nieuw gesprek.
5. Noteer drie concrete verschillen tussen de twee resultaten. Denk aan de taal, de naam van de function, de regels voor een sterk wachtwoord en wat de function teruggeeft.

## M2 Wijs de weg {#m2}

Over jouw project weet een model alleen wat in zijn context staat (zie [2.4](./module-2.md#2_4)). Je test wat er gebeurt als je de weg niet wijst.

In de startbestanden staan twee mappen met dezelfde inhoud: `bibliotheek-a` en `bibliotheek-b`. Zo test je twee prompts op dezelfde code. In elke map staan drie bestanden. Je kan de mappen ook zelf maken: de code staat hieronder.

`library.js`:

```js
// Uitleendienst van een bibliotheek. Alle bedragen zijn in eurocent.

function daysLate(dueDate, returnDate) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.floor((returnDate - dueDate) / msPerDay);
  return diff > 0 ? diff : 0;
}

function fine(dueDate, returnDate) {
  // TODO: bereken de boete
  return 0;
}

module.exports = { daysLate, fine };
```

`afspraken.md`:

```markdown
# Afspraken over boetes

- De boete is 25 eurocent per dag te laat.
- De eerste 2 dagen te laat zijn gratis.
- De boete is nooit hoger dan 500 eurocent.
- Alle bedragen zijn gehele getallen in eurocent.
```

`test.js` toont de boete voor een boek dat 1, 5 en 40 dagen te laat is:

```js
// Uitvoeren in de terminal: node test.js
const { fine } = require('./library.js');

const msPerDay = 24 * 60 * 60 * 1000;
const dueDate = new Date('2026-01-10');

for (const days of [1, 5, 40]) {
  const returnDate = new Date(dueDate.getTime() + days * msPerDay);
  console.log('Dagen te laat: ' + days + ' -> boete: ' + fine(dueDate, returnDate) + ' eurocent');
}
```

1. Open de map `bibliotheek-a`. Stuur in een nieuw gesprek prompt A:

```text
Schrijf de function fine in library.js.
```

2. Noteer: welke boete per dag koos het model? Las het `afspraken.md` zelf, of raadde het? In de chat zie je welke bestanden de agent las.
3. Typ in de terminal `node test.js`. Noteer de drie resultaten in de kolom "Prompt A".
4. Open nu de map `bibliotheek-b`. Stuur in een nieuw gesprek prompt B:

```text
Schrijf de function fine in library.js. De regels staan in afspraken.md.
```

5. Typ in de terminal `node test.js`. Noteer de drie resultaten in de kolom "Prompt B".

```text
Dagen te laat | Verwacht | Prompt A | Prompt B
1             | 0        | ...      | ...
5             | 75       | ...      | ...
40            | 500      | ...      | ...
```

6. Leg in maximaal drie zinnen uit wat dit zegt over context.

## M3 Alleen een analyse {#m3}

Een agent harness is gebouwd om dingen te doen. Wil je alleen een antwoord, dan moet je dat zeggen (zie [2.5](./module-2.md#2_5)).

In de startbestanden staan twee mappen met dezelfde inhoud: `scores-a` en `scores-b`. In elke map staat één bestand, `scores.js`. Je kan de mappen ook zelf maken: de code staat hieronder.

```js
function average(scores) {
  let total = 0;
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}
```

1. Open de map `scores-a`. Stuur in een nieuw gesprek prompt A:

```text
Zitten er fouten in scores.js?
```

2. Noteer: paste de agent het bestand aan, of gaf hij alleen een antwoord?
3. Schrijf zelf een prompt B waarmee de agent zeker niets aanpast en alleen een analyse in tekst geeft. Open de map `scores-b` en stuur prompt B in een nieuw gesprek. Noteer kort de analyse van het model.
4. Controleer de analyse zelf. Je bent nog in de map `scores-b`. Zet onderaan in `scores.js` de regel `console.log(average([10, 20]));` en typ in de terminal `node scores.js`. Noteer het resultaat. Klopt wat het model zei? Paste de agent het bestand toch aan? Noteer dat dan ook.

## M4 Voorbeelden sturen de output {#m4}

Met voorbeelden toon je wat je bedoelt (zie [2.6](./module-2.md#2_6)).

Je wil een function die Belgische gsm-nummers altijd op dezelfde manier weergeeft: `0471 23 45 67`.

1. Maak een lege map `gsm-a` en open ze. Stuur in een nieuw gesprek deze prompt, zonder voorbeelden:

```text
Schrijf een JavaScript-function formatPhone(number) die een gsm-nummer netjes weergeeft.
```

2. Test de function met de vijf waarden uit de tabel. Plak dit testblok onderaan in het bestand met de function en voer het bestand uit met `node` (zie [Voor je begint](#start)). Noteer de resultaten in de kolom "Zonder voorbeelden".

```js
const inputs = ['0471234567', '+32471234567', '0471/23.45.67',
  '', '12345'];

for (const input of inputs) {
  let result;
  try {
    result = JSON.stringify(formatPhone(input));
  } catch (error) {
    result = 'fout: ' + error.message;
  }
  console.log(JSON.stringify(input) + ' -> ' + result);
}
```

3. Schrijf een nieuwe prompt met minstens vijf voorbeelden, waarvan minstens twee edge cases. Maak een tweede lege map `gsm-b`, open ze en stuur je prompt in een nieuw gesprek. Test opnieuw met hetzelfde testblok en noteer de resultaten in de kolom "Met voorbeelden".

In de tabel betekent `fout`: de function gooit een fout.

```text
Input             | Verwacht        | Zonder voorbeelden | Met voorbeelden
"0471234567"      | "0471 23 45 67" | ...                | ...
"+32471234567"    | "0471 23 45 67" | ...                | ...
"0471/23.45.67"   | "0471 23 45 67" | ...                | ...
""                | fout            | ...                | ...
"12345"           | fout            | ...                | ...
```

4. Welk voorbeeld maakte het grootste verschil? Leg uit in maximaal drie zinnen.

## M5 Itereren in drie rondes {#m5}

Een prompt is zelden in één keer goed. Je stuurt bij in kleine stappen (zie [2.7](./module-2.md#2_7)).

Maak een lege map `gemiddelde` en open ze. Begin in een nieuw gesprek met deze prompt:

```text
Schrijf een JavaScript-function average(scores) die het gemiddelde van een array van getallen berekent.
```

Stuur daarna drie vervolgprompts in hetzelfde gesprek. Elke vervolgprompt vraagt precies één wijziging:

1. Bij een lege array gooit de function een fout met de boodschap `'De array is leeg'`.
2. Waarden die geen getal zijn, telt de function niet mee.
3. Het resultaat is afgerond op één decimaal.

Test na elke ronde (zie [Voor je begint](#start)). Kies zelf een oproep die de wijziging controleert, bijvoorbeeld `average([])` na ronde 1. Noteer per ronde je vervolgprompt, waarmee je testte, en of het model iets veranderde wat je niet vroeg. Plak na ronde 3 de function in je invulbestand.

```text
Ronde | Vervolgprompt | Getest met | Iets veranderd wat je niet vroeg?
1     | ...           | ...        | ...
```

## H1 Laat een model je prompt verbeteren {#h1 .hard}

Een model is ook goed in prompts schrijven (zie [2.7](./module-2.md#2_7)). Maar het blijft jouw prompt.

Iemand sprak deze vraag in met een dicteertool:

> euh ja dus ik heb zo'n lijst van studenten met hun punten en ik wil eigenlijk gewoon weten wie er geslaagd is, dus zo vanaf 10 op 20 denk ik, en dat moet in javascript, en misschien ook het gemiddelde of zo, maar dat is niet zo belangrijk

1. Open een nieuw gesprek. Dat mag in je agent harness of in een chatvenster in je browser. Gebruik de prompt uit [2.7](./module-2.md#2_7) ("Help me deze prompt te verbeteren…") en zet de tekst hierboven onder `Prompt:`.
2. Noteer de vragen die het model stelt, en je antwoorden. Antwoord zoals jij denkt dat de spreker het bedoelt. Stelt het model geen vragen? Noteer dat dan.
3. Plak de verbeterde prompt van het model.
4. Duid minstens twee dingen aan die het model toevoegde en die niet in de ingesproken tekst stonden. Beslis voor elk: hou je het, of schrap je het? Leg uit waarom.
5. Schrijf je definitieve prompt. Maak een lege map `geslaagd`, open ze en stuur de prompt in een nieuw gesprek naar je agent harness. Test het resultaat met een eigen lijst van drie studenten (zie [Voor je begint](#start)). Doet het wat de spreker bedoelde?

## H2 Eén lange prompt, twee weken later {#h2 .hard}

Lees deze situatie.

> Een developer laat een volledige functionaliteit genereren met één lange, gedetailleerde prompt. De code werkt bij de eerste test. Twee weken later moet er nieuwe functionaliteit bij. De structuur blijkt moeilijk uit te breiden, en de code bevat aannames die botsen met de nieuwe requirements.

Beantwoord in maximaal 300 woorden:

1. Wat liep er mis in de manier van prompten?
2. Hoe had de developer iteratief kunnen werken? Beschrijf de eerste drie prompts die je zelf zou sturen.
3. Welke rol spelen één ding tegelijk (zie [2.2](./module-2.md#2_2)) en kleine stappen (zie [2.7](./module-2.md#2_7)) hier?

## @1 Een prompt-logboek {#home1 .home}

Je eigen manier van prompten verbetert pas als je ze bekijkt (zie [2.7](./module-2.md#2_7)).

Hou één week lang een logboek bij van de prompts die je gebruikt voor je studies of projecten. Noteer minstens vijf prompts. Noteer per prompt:

- de prompt zoals je hem verstuurde;
- de output, of een samenvatting ervan;
- of je moest itereren, hoe vaak en wat je aanpaste;
- een score voor de kwaliteit van de output, van 1 tot 5.

Schrijf daarna een reflectie van minstens 400 woorden. Welke patronen zie je in je eigen prompts? Wat doe je goed, en wat kan beter?

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Tools voor prompts (Easy) {#x1}

Er bestaan tools die je helpen om betere prompts te schrijven.

Zoek drie zulke tools op. Noteer per tool de naam, wat de tool doet en of ze gratis is.

## X2 Edge cases voor een leeftijd (Easy) {#x2}

Een function controleert of iemand meerderjarig is op basis van een leeftijd.

1. Leg in één zin uit wat een edge case is.
2. Geef vier edge cases voor deze function, elk met de verwachte output.

```text
18 -> true
...
```

## X3 De happy path uitleggen (Easy) {#x3}

Leg in maximaal vijf zinnen uit wat de happy path is en waarom het een probleem is als een model enkel die dekt. Geef één voorbeeld uit je eigen code of uit deze module.

## X4 Few-shot prompting (Medium) {#x4}

Een prompt met enkele voorbeelden van input en output, zoals in [2.6](./module-2.md#2_6), heet een few-shot prompt. Een prompt zonder voorbeelden heet zero-shot.

1. Zoek op hoe few-shot prompting werkt en wanneer je het gebruikt. Vermeld je bron.
2. Schrijf een few-shot prompt voor een programmeertaak met minstens vier voorbeelden.
3. Test de prompt en noteer of de output de voorbeelden volgt.

## X5 System prompt en user prompt (Medium) {#x5}

Veel AI-tools maken een onderscheid tussen een **system prompt**, die vaste instructies geeft voor een heel gesprek, en een **user prompt**, die één vraag stelt.

Zoek op hoe dat onderscheid werkt in een tool naar keuze. Leg in maximaal tien zinnen uit wanneer je welke gebruikt en wat een goede system prompt oplevert bij taken die je vaak herhaalt. Vermeld je bron.

## X6 Eigen code laten herschrijven (Medium) {#x6}

Een prompt die aanpast, verandert bestaande code. Je beoordeelt hoe goed dat lukt.

1. Kies een stuk code dat je zelf schreef.
2. Laat het herschrijven naar een andere stijl of technologie. Zeg in je prompt wat moet blijven.
3. Beoordeel de output: wat is beter, wat ging verloren, en klopt de logica nog?

## X7 Chain-of-thought prompting (Medium) {#x7}

1. Zoek op wat chain-of-thought prompting is en waarom het werkt. Vermeld je bron.
2. Schrijf een chain-of-thought prompt voor een programmeerprobleem naar keuze.
3. Vergelijk de output met die van dezelfde prompt zonder de vraag om stap voor stap te redeneren.

## X8 Het context window (Hard) {#x8}

Het context window is de hoeveelheid tokens die een model tegelijk kan verwerken (zie [1.4](./module-1.md#1_4)).

Zoek op hoe groot het context window is van twee modellen naar keuze. Beantwoord daarna in maximaal 300 woorden:

- Hoe beïnvloedt het context window de manier waarop je prompts schrijft voor een grote codebase?
- Welke strategieën bestaan er om met een beperkt context window te werken?

## X9 Een prompt playbook (Hard) {#x9}

Bouw een persoonlijk prompt playbook: minstens zes geteste prompts die je in een typisch project zou gebruiken. Orden ze per soort vraag: genereren, aanpassen en evalueren. Noteer bij elke prompt:

- het doel;
- de volledige prompt;
- een samenvatting van de output;
- wat je moest aanpassen.

## X10 Role prompting (Hard) {#x10}

Bij **role prompting** geef je het model een rol, zoals "Je bent een ervaren backend developer" of "Je bent een code reviewer".

1. Kies een programmeertaak.
2. Stuur dezelfde prompt twee keer, met en zonder een rol.
3. Beschrijf wat er verandert aan de output, en of de rol een verschil maakt in correctheid of enkel in toon.

## X11 Een prompt library (@home) {#x11}

Een uitgebreidere versie van X9, voor wie een bibliotheek wil opbouwen die hij of zij echt gebruikt.

Maak een document met minstens twaalf prompts, verdeeld over de drie soorten vragen en minstens drie toepassingen, zoals test cases schrijven, code reviewen of documentatie genereren. Elke prompt bevat:

- een naam en een categorie;
- de volledige prompt, met invulvelden tussen `< >`;
- wanneer je de prompt gebruikt;
- minstens één voorbeeld van de output die je verwacht.

## X12 Drie prompts uitschrijven (Medium) {#x12}

Met een vaste structuur schrijf je snel een volledige prompt. Je oefent dat op drie verschillende taken.

Schrijf voor elke taak een prompt met context, input, output en beperkingen:

1. Een function die één regel uit een CSV-bestand omzet naar een object.
2. Een endpoint dat een lijst van producten ophaalt en filtert op prijs.
3. Een function die een datum in het formaat `DD/MM/JJJJ` omzet naar `JJJJ-MM-DD`.

Geef bij taak 3 minstens vier voorbeelden, waarvan twee edge cases.

## X13 Eigen code laten evalueren (Medium) {#x13}

Een prompt die evalueert, kan je ook op je eigen code loslaten. Je leert er zowel over je code als over de feedback van het model.

Kies een function die je zelf schreef in Programming Fundamentals. Laat een model ze evalueren met een prompt die zegt waarop het moet letten, en dat het niets mag aanpassen. Noteer:

- de prompt die je gebruikte;
- de feedback van het model;
- wat je overnam en wat niet, met een reden per punt.

## X14 Een prompt template bouwen (Medium) {#x14}

Sommige taken doe je telkens opnieuw. Een **prompt template** is een prompt met een vaste structuur en invulvelden, zodat je hem snel hergebruikt.

Kies een taak die je vaak doet, zoals een function documenteren of een testbestand opzetten. Bouw er een template voor:

- een vaste structuur met context, input, output en beperkingen;
- invulvelden tussen `< >` voor wat telkens verandert;
- één ingevuld voorbeeld.

Test de ingevulde template in je agent harness en noteer of de output bruikbaar is.
