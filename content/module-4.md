---
module: 4
order: 1
moduleTitle: "Module 4: Code begrijpen, reviewen en verbeteren"
published: false
---

# Module 4: Code begrijpen, reviewen en verbeteren

Developers lezen veel meer code dan ze schrijven. In deze module gebruik je AI om code te laten uitleggen, te reviewen en te verbeteren. Je leert ook hoe je zelf beoordeelt of die uitleg, review of verbetering klopt.

### Leerdoelen

Na deze module kan je:

- de control flow en de data flow van een function volgen, met een trace table;
- de impliciete aannames van een function opsporen;
- een AI-review uitvoeren en elke suggestie beoordelen in de context van je project;
- code beoordelen op leesbaarheid, structuur en onderhoudbaarheid;
- vooraf criteria vastleggen en daarmee een keuze tussen implementaties verantwoorden.

## 4.1 Code laten uitleggen

Je neemt de code over van een collega die vertrokken is. Of je opent een bestand dat je drie maanden geleden schreef, en je weet niet meer wat erin staat. Of je werkt met een library die je nog nooit zag.

Vroeger was de enige optie: lezen, opzoeken en nadenken. Nu plak je de code in een AI-tool en vraag je: "Leg uit wat dit doet."

Dat helpt meteen. Een model beschrijft wat een function doet, welke stappen ze uitvoert, hoe data door de code beweegt en welke aannames ze maakt. Bij lange stukken code, onbekende syntax of een nieuwe library scheelt dat uren.

Maar de uitleg van een model is een interpretatie, geen garantie. Ze kan onvolledig zijn, een subtiele fout bevatten of net het belangrijkste deel weglaten.

Gebruik de uitleg daarom als startpunt voor je eigen analyse, niet als vervanging ervan. Het doel is dat je de code begrijpt, niet dat je de uitleg kan herhalen.

Dit betekent voor jou: kan je de code uitleggen aan een medestudent zonder de uitleg van het model erbij te nemen? Lukt dat niet, dan ben je er nog niet.

### Test jezelf 4.1 – Code laten uitleggen

```text
Sectie: 4.1
Type: meerkeuze
Vraag: Je laat een onbekende function uitleggen. De uitleg klinkt logisch en volledig. Wat doe je nu? Kies één antwoord.
Opties:
  A. De uitleg aanvaarden en verdergaan: het model heeft de code al geanalyseerd.
  B. De uitleg gebruiken als startpunt om de code zelf te doorlopen en te controleren.
  C. Het model in een tweede prompt vragen om de uitleg te bevestigen.
  D. De code testen zonder ze verder te lezen.
Juist: B
Feedback A: Een uitleg die logisch klinkt, kan toch onvolledig of fout zijn (zie 4.1).
Feedback B: Juist. De uitleg helpt je op weg, maar het begrip moet van jou komen (zie 4.1).
Feedback C: Een model bevestigt zijn eigen uitleg vaak zonder nieuwe controle (zie 4.1).
Feedback D: Testen is nuttig, maar vervangt het lezen niet. Je wil weten waarom de code werkt (zie 4.1).

Sectie: 4.1
Type: juist/fout
Vraag: Als je de uitleg van een AI-model over een stuk code kan navertellen, begrijp je de code.
Juist: fout
Feedback: Navertellen is iets anders dan begrijpen. De test is of je de code kan uitleggen zonder de uitleg van het model erbij (zie 4.1).

Sectie: 4.1
Type: meerkeuze
Vraag: In welke situatie is AI het nuttigst als uitlegger van code? Kies één antwoord.
Opties:
  A. Je wil weten of code correct is, zonder ze zelf te lezen.
  B. Je wil de verantwoordelijkheid voor het begrijpen van de codebase overdragen.
  C. Je werkt met een onbekende library en wil snel begrijpen hoe een function gebruikt wordt.
  D. Je wil bevestiging dat je eigen code correct is.
Juist: C
Feedback A: Een uitleg zegt niet of code correct is. Dat moet je zelf controleren (zie 4.1).
Feedback B: Wie code gebruikt, blijft verantwoordelijk om ze te begrijpen (zie 4.1).
Feedback C: Juist. Bij iets onbekends bespaart een uitleg je veel opzoekwerk (zie 4.1).
Feedback D: Een model bevestigt vaak wat je vraagt. Bevestiging is geen bewijs (zie 4.1).
```

## 4.2 Control flow, data flow en aannames

"Ik denk dat dit werkt." Dat is geen analyse. Dat is hopen.

Om code echt te begrijpen, volg je twee dingen: in welke volgorde ze uitgevoerd wordt en wat er met de data gebeurt.

```js
const countPassed = (scores) => {
  let passed = 0;
  for (const score of scores) {
    if (score >= 10) {
      passed++;
    }
  }
  return passed;
};

console.log(countPassed([12, 8, 10]));
```

```output
2
```

De **control flow** (programmaverloop) is de volgorde waarin code uitgevoerd wordt. Hier loopt de loop drie keer, en bij elke score beslist de `if` of `passed++` uitgevoerd wordt. Zonder control flow weet je niet wat de code doet bij specifieke input.

De **data flow** (gegevensstroom) beschrijft hoe waarden door het programma bewegen en veranderen. Je volgt ze met een **trace table**: een tabel waarin je stap voor stap de waarden van de variables bijhoudt.

| Stap | score | score >= 10 | passed |
| --- | --- | --- | --- |
| start | – | – | 0 |
| 1 | 12 | true | 1 |
| 2 | 8 | false | 1 |
| 3 | 10 | true | 2 |

Een model kan beide voor je beschrijven. Vraag het om de control flow stap voor stap uit te leggen, of om een trace table te maken voor een bepaalde input. Controleer die tabel wel zelf.

Elke function maakt ook **aannames** over haar input. Bijvoorbeeld dat een getal positief is, dat een string niet leeg is of dat een object een bepaalde key heeft. Kijk naar deze function:

```js
const calculateAverage = (numbers) => {
  const sum = numbers.reduce((total, value) => total + value, 0);
  return sum / numbers.length;
};

console.log(calculateAverage([4, 8, 6]));
console.log(calculateAverage([]));
```

```output
6
NaN
```

De function neemt aan dat de array niet leeg is. Bij een lege array deelt ze 0 door 0, en dat geeft `NaN` (not a number). Een model maakt zulke aannames soms zichtbaar, maar niet altijd allemaal. Jij moet er actief naar zoeken.

### Test jezelf 4.2 – Control flow, data flow en aannames

```text
Sectie: 4.2
Type: meerkeuze
Vraag: Wat beschrijft de data flow van een programma? Kies één antwoord.
Opties:
  A. De volgorde waarin functions aangeroepen worden.
  B. De mappenstructuur van een project.
  C. De manier waarop een externe API data aanlevert.
  D. Hoe waarden door het programma bewegen en veranderen.
Juist: D
Feedback A: Dat is de control flow (zie 4.2).
Feedback B: De mappenstructuur gaat over de organisatie van bestanden, niet over data (zie 4.2).
Feedback C: Een API kan data leveren, maar de data flow gaat over wat er daarna in je programma mee gebeurt (zie 4.2).
Feedback D: Juist. Met een trace table volg je de data flow stap voor stap (zie 4.2).

Sectie: 4.2
Type: numeriek
Vraag: Wat geeft deze aanroep terug?
Code:
  const countPassed = (scores) => {
    let passed = 0;
    for (const score of scores) {
      if (score >= 10) {
        passed++;
      }
    }
    return passed;
  };
  countPassed([9, 10, 15, 4]);
Juist: 2
Feedback: Enkel 10 en 15 zijn groter dan of gelijk aan 10. Maak een trace table als je twijfelt (zie 4.2).

Sectie: 4.2
Type: meerkeuze
Vraag: Welke aanname maakt `calculateAverage` uit 4.2 over haar input? Kies één antwoord.
Opties:
  A. Dat de array niet leeg is.
  B. Dat de array gesorteerd is.
  C. Dat alle getallen positief zijn.
  D. Dat de array minstens drie getallen bevat.
Juist: A
Feedback A: Juist. Bij een lege array deelt de function 0 door 0, met `NaN` als resultaat (zie 4.2).
Feedback B: De volgorde maakt niet uit voor een som of een gemiddelde (zie 4.2).
Feedback C: Negatieve getallen geven een correct gemiddelde (zie 4.2).
Feedback D: Ook met één of twee getallen werkt de function correct. Enkel nul getallen is een probleem (zie 4.2).
```

## 4.3 AI als eerste code reviewer

In een professioneel team gaat code eerst door een **code review** (codebeoordeling) voor ze bij de rest komt. Een of meer collega's lezen je code, geven feedback en wijzen op problemen die je zelf niet zag. Dat is waardevol, maar het kost tijd.

AI kan een eerste reviewronde doen. Niet als vervanging van een collega, maar om de duidelijkste problemen eruit te halen voor je code aan iemand anders voorlegt. Werk je alleen, dan is het een extra controle.

Vraag een review altijd op specifieke punten:

- Stijl en leesbaarheid: zijn de namen duidelijk, is de structuur consistent, is er onnodige complexiteit?
- Logica: zijn er randgevallen die niet afgehandeld worden? Klopt de logica voor alle input?
- Foutafhandeling: wat gebeurt er als iets misloopt? Worden fouten opgevangen en gemeld?
- Performance: zijn er duidelijke inefficiënties?

```text
Review de function hieronder op leesbaarheid, randgevallen en
foutafhandeling. Geef per opmerking de regel, het probleem en een voorstel.
Het project gebruikt camelCase en gooit fouten met een Nederlandse boodschap.
```

De output van een AI-review zijn suggesties, geen beslissingen. Het model kent je context niet volledig: het weet niet waarom je een keuze maakte, welke afwegingen er waren of welke beperkingen je had. Beoordeel elke suggestie en beslis zelf of ze relevant is.

Dit betekent voor jou: AI is een extra paar ogen, maar de beslissing blijft bij jou.

### Test jezelf 4.3 – AI als eerste code reviewer

```text
Sectie: 4.3
Type: meerkeuze
Vraag: Een AI-review geeft vijf suggesties. Eén ervan stelt een naam voor die in de context van je project minder duidelijk is. Wat doe je? Kies één antwoord.
Opties:
  A. De suggestie overnemen: het model weet meer over goede namen.
  B. Alle suggesties overnemen, voor een consistente aanpak.
  C. De suggestie afwegen tegen je context en ze verwerpen als ze de leesbaarheid niet verbetert.
  D. De review opnieuw laten doen met een andere tool.
Juist: C
Feedback A: Het model kent je project niet volledig. Een algemene regel is niet altijd beter in jouw context (zie 4.3).
Feedback B: Suggesties zijn geen beslissingen. Je beoordeelt ze één voor één (zie 4.3).
Feedback C: Juist. Jij kent de context, dus jij beslist (zie 4.3).
Feedback D: Ook een andere tool kent je context niet. De beoordeling blijft jouw taak (zie 4.3).

Sectie: 4.3
Type: meerkeuze
Vraag: Waarvoor is AI als code reviewer het nuttigst? Kies één antwoord.
Opties:
  A. Stijl, duidelijke logicafouten en ontbrekende foutafhandeling.
  B. Beslissingen over de architectuur van de hele applicatie.
  C. Controleren of de businesslogica doet wat de klant wil.
  D. Beoordelen of de communicatie in het team goed verliep.
Juist: A
Feedback A: Juist. Dat zijn problemen die je in de code zelf ziet, zonder veel context (zie 4.3).
Feedback B: Daarvoor heeft het model te weinig zicht op het hele systeem (zie 1.3 en 4.3).
Feedback C: Wat de klant wil, staat niet in de code. Het model kan dat niet weten (zie 4.3).
Feedback D: Dat staat niet in de code, dus een review van code kan het niet beoordelen (zie 4.3).
```

## 4.4 Codekwaliteit: meer dan werkende code

Twee versies doen hetzelfde: ze geven de namen van alle actieve gebruikers van minstens 18 jaar.

```js
// Version A
const f = (u) => u.filter(x => x.a && x.b >= 18).map(x => x.n);

// Version B
const getActiveAdultNames = (users) => {
  const activeAdults = users.filter(
    (user) => user.isActive && user.age >= 18
  );
  return activeAdults.map((user) => user.name);
};
```

Versie A verwacht objecten met de keys `a`, `b` en `n`, versie B objecten met `isActive`, `age` en `name`.

Beide werken. Toch wil je in je project versie B. "De code werkt" is geen kwaliteitscriterium, het is het minimum. AI kan code verbeteren, maar je hebt duidelijke criteria nodig om te beoordelen of een voorstel echt beter is:

- Leesbaarheid. Code wordt vaker gelezen dan geschreven: door jezelf over drie maanden, door een collega of door wie het project volgend jaar overneemt. Leesbare code heeft namen die zeggen wat iets doet, geen onnodige afkortingen, een logische groepering, comments waar nodig en consistente conventies.
- Structuur. Een function doet één ding, verantwoordelijkheden zijn duidelijk verdeeld en code staat niet dubbel. Een function van honderd regels die vijf dingen doet, is slecht gestructureerd, ook als ze correct werkt.
- Onderhoudbaarheid. Requirements veranderen, dus code ook. Raakt een kleine aanpassing tien plaatsen in de codebase, dan is de onderhoudbaarheid laag. Goede code heeft duidelijke grenzen tussen onderdelen en beperkte complexiteit per onderdeel.

Stelt een model een verbetering voor, toets die dan aan deze criteria. Is de code leesbaarder geworden? Is de structuur duidelijker? Of is ze alleen anders?

Anders is niet hetzelfde als beter.

### Test jezelf 4.4 – Codekwaliteit

```text
Sectie: 4.4
Type: meerkeuze
Vraag: Een model stelt voor om de function `processData` te hernoemen naar `pd`, voor betere leesbaarheid. Wat is je oordeel? Kies één antwoord.
Opties:
  A. Aanvaarden: kortere namen zijn efficiënter.
  B. Aanvaarden als de rest van de codebase ook afkortingen gebruikt.
  C. Verwerpen: de kortere naam maakt de code minder leesbaar.
  D. Het model vragen om een derde naam.
Juist: C
Feedback A: Een kortere naam maakt de code niet sneller, wel moeilijker te lezen (zie 4.4).
Feedback B: Ook dan zegt `pd` niets over wat de function doet. Consistentie maakt een onduidelijke naam niet duidelijk (zie 4.4).
Feedback C: Juist. Een goede naam zegt wat iets doet (zie 4.4).
Feedback D: Dat kan, maar eerst stel je vast dat dit voorstel slechter is (zie 4.4).

Sectie: 4.4
Type: meerkeuze
Vraag: Waarom scoort versie B uit 4.4 beter dan versie A? Kies één antwoord.
Opties:
  A. Versie B is sneller, omdat ze meer regels code heeft.
  B. Versie B geeft een ander, correcter resultaat.
  C. Versie A is fout, omdat je `filter` en `map` niet mag combineren.
  D. Versie B heeft namen die zeggen wat de code doet, en een tussenstap met een duidelijke naam.
Juist: D
Feedback A: Meer regels maken code niet sneller. Het verschil zit in de leesbaarheid (zie 4.4).
Feedback B: Beide versies geven hetzelfde resultaat (zie 4.4).
Feedback C: `filter` en `map` combineren is gangbaar en correct (zie 4.4).
Feedback D: Juist. Wie versie B leest, weet meteen wat ze doet (zie 4.4).

Sectie: 4.4
Type: koppelen
Vraag: Koppel elk probleem aan het kwaliteitscriterium dat het schendt.
Paren:
  Een variable heet `x2` in plaats van `totalPrice`. → leesbaarheid
  Eén function leest een bestand, valideert de data en verstuurt een e-mail. → structuur
  Een nieuwe btw-regel vraagt aanpassingen op tien plaatsen in de codebase. → onderhoudbaarheid
Feedback: Leesbaarheid gaat over namen en conventies, structuur over de verdeling van verantwoordelijkheden, onderhoudbaarheid over hoe makkelijk code verandert (zie 4.4).
```

## 4.5 Afwegingen tussen implementaties

Je vraagt een function die een lijst van 50 studenten sorteert op punten. Het model geeft drie versies: een korte met `sort`, een eigen implementatie van quicksort en een versie die eerst alle punten groepeert. Welke is de juiste?

Dat is zelden een vraag met één correct antwoord. Het hangt af van de context. Hoe groot is de dataset, en hoe vaak wordt de function aangeroepen? Hoe complex mag de code zijn voor dit team, en wat zijn de prioriteiten?

Bij 50 studenten is de korte versie met `sort` waarschijnlijk de beste keuze.

AI genereert snel meerdere implementaties voor hetzelfde probleem. Dat is waardevol, niet om de eerste te kiezen, maar om de afweging zichtbaar te maken.

Leg je criteria vast voor je de oplossingen bekijkt. Bedenk je ze pas achteraf, dan kies je onbewust de oplossing die er het indrukwekkendst uitziet. Typische criteria zijn:

- Leesbaarheid: begrijpt een developer in dit team de code zonder uitleg?
- Efficiëntie: hoeveel tijd en geheugen gebruikt de code, en is dat belangrijk voor dit gebruik?
- Integratie: past de oplossing bij de architectuur en de bestaande code?
- Uitbreidbaarheid: kan je de oplossing makkelijk aanpassen als de requirements veranderen?
- Testbaarheid: kan je de code apart testen?

Na je keuze moet je die kunnen verantwoorden. Dus niet: "Deze leek me de beste." Wel: "Deze versie is het leesbaarst, en de lijst wordt nooit groter dan honderd studenten." Dat is het verschil tussen een beslissing en een voorkeur.

### Test jezelf 4.5 – Afwegingen tussen implementaties

```text
Sectie: 4.5
Type: meerkeuze
Vraag: Waarom leg je je criteria vast voor je de gegenereerde alternatieven bekijkt? Kies één antwoord.
Opties:
  A. Anders weet het model niet op welke criteria het moet optimaliseren.
  B. Zo vermijd je dat je onbewust kiest voor de oplossing die het indrukwekkendst lijkt.
  C. Criteria achteraf vastleggen is in een professionele omgeving niet toegelaten.
  D. Het model past de criteria dan automatisch toe.
Juist: B
Feedback A: Het gaat om jouw beoordeling, niet om wat het model doet (zie 4.5).
Feedback B: Juist. Criteria vooraf maken je keuze objectiever (zie 4.5).
Feedback C: Het is geen regel, maar een manier om eerlijk te beoordelen (zie 4.5).
Feedback D: Ook als je criteria meegeeft, beoordeel jij de output (zie 4.5).

Sectie: 4.5
Type: meerkeuze
Vraag: Je laat drie implementaties voor hetzelfde probleem genereren. Welke aanpak is het professioneelst? Kies één antwoord.
Opties:
  A. De kortste versie kiezen: minder code betekent minder fouten.
  B. De eerste versie kiezen: het model geeft de beste oplossing eerst.
  C. De versie kiezen die het meest lijkt op voorbeelden die je online vond.
  D. Elke versie toetsen aan vooraf bepaalde criteria en je keuze verantwoorden.
Juist: D
Feedback A: Korter is niet altijd leesbaarder of correcter (zie 4.5).
Feedback B: De volgorde van de output zegt niets over de kwaliteit (zie 4.5).
Feedback C: Gelijkenis met online code zegt niets over hoe goed ze bij jouw project past (zie 4.5).
Feedback D: Juist. Zo wordt je keuze een beslissing in plaats van een voorkeur (zie 4.5).
```

## 4.6 Een fout aanpakken met AI

De code doet niet wat ze moet doen. Of bijna, maar niet helemaal. Of ze werkt in vier van de vijf gevallen en crasht bij het vijfde.

AI kan helpen bij het zoeken naar de oorzaak, maar je aanpak bepaalt of je het probleem oplost of alleen verplaatst:

1. Zoek waar het probleem zit. Raad niet, en probeer niet blind het eerste voorstel van het model. Laat de fout opnieuw optreden, zoek welk deel van de code ze veroorzaakt en beschrijf het probleem zo precies mogelijk.
2. Gebruik AI als hulpmiddel bij de analyse. Geef de relevante code, het verwachte gedrag en het werkelijke gedrag, en vraag naar mogelijke oorzaken. Hoe preciezer je beschrijving, hoe gerichter de voorstellen.
3. Beoordeel elke voorgestelde oplossing zelf. Begrijp je waarom de code fout was en waarom de oplossing werkt? Zo niet, dan heb je een probleem weggewerkt zonder het te begrijpen. Duikt hetzelfde patroon later op, dan weet je niet wat te doen.

Een oplossing die je niet begrijpt, is een toekomstige bug. In module 5 ga je dieper in op debuggen met AI.

### Test jezelf 4.6 – Een fout aanpakken

```text
Sectie: 4.6
Type: meerkeuze
Vraag: Je geeft code met een bug aan een model en past de voorgestelde oplossing toe. De bug is weg. Is het probleem opgelost? Kies één antwoord.
Opties:
  A. Ja: als de code werkt, is de bug opgelost.
  B. Niet per se: als je niet begrijpt waarom de oplossing werkt, kan hetzelfde probleem later opduiken zonder dat je het herkent.
  C. Ja, zolang alle bestaande tests slagen.
  D. Niet per se: je moet de oplossing altijd laten bevestigen door een tweede AI-tool.
Juist: B
Feedback A: De bug is weg, maar je weet niet waarom. Dat is een toekomstige bug (zie 4.6).
Feedback B: Juist. Pas als je de oorzaak begrijpt, is het probleem echt opgelost (zie 4.6).
Feedback C: Tests tonen dat de geteste gevallen werken, niet dat je de oorzaak begrijpt (zie 4.6).
Feedback D: Een tweede tool vervangt jouw begrip niet (zie 4.6).

Sectie: 4.6
Type: ordenen
Vraag: Zet de stappen van een fout aanpakken met AI in de juiste volgorde.
Volgorde:
  Laat de fout opnieuw optreden.
  Zoek welk deel van de code de fout veroorzaakt.
  Vraag het model naar mogelijke oorzaken, met verwacht en werkelijk gedrag.
  Beoordeel de voorgestelde oplossing en begrijp waarom ze werkt.
  Pas de code aan.
Feedback: Je begint bij de fout zelf, niet bij het model. En je past pas aan als je de oplossing begrijpt (zie 4.6).
```

## Samenvatting

Nieuwe termen:

- control flow: de volgorde waarin code uitgevoerd wordt.
- data flow: hoe waarden door het programma bewegen en veranderen.
- trace table: een tabel waarin je stap voor stap de waarden van de variables bijhoudt.
- aanname: iets wat een function veronderstelt over haar input.
- code review: de beoordeling van code door iemand anders dan de auteur.

Belangrijkste regels:

- Een AI-uitleg is een startpunt, geen garantie. Je begrijpt code pas als je ze zelf kan uitleggen.
- Volg control flow en data flow, en zoek actief naar aannames.
- Een AI-review geeft suggesties. Jij beslist wat je overneemt.
- Werkende code is het minimum. Beoordeel ook leesbaarheid, structuur en onderhoudbaarheid.
- Leg criteria vast voor je implementaties vergelijkt, en verantwoord je keuze.
- Een oplossing die je niet begrijpt, is een toekomstige bug.

## Veelgemaakte fouten

- De uitleg van een model herhalen zonder de code te begrijpen. Bij de eerste vraag van een collega loop je vast.
- Enkel de happy path volgen. `calculateAverage([4, 8, 6])` werkt, `calculateAverage([])` geeft `NaN`.
- Elke suggestie uit een AI-review overnemen. Een voorstel om `processData` te hernoemen naar `pd` maakt je code slechter.
- Criteria pas na het vergelijken bedenken. Je kiest dan de versie die er het slimst uitziet, zoals een eigen quicksort voor 50 studenten.
- Een oplossing toepassen die je niet begrijpt. De bug verdwijnt, en komt later in een andere vorm terug.

::: oefening
[Oefeningen module 4](./module-4-oefeningen.md)
:::
