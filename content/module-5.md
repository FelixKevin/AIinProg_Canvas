---
module: 5
order: 1
moduleTitle: "5: Debuggen en refactoren met AI"
published: true
---

# Module 5: Debuggen en refactoren met AI

Elke developer schrijft bugs. Het verschil zit in hoe snel en hoe grondig je ze vindt. In deze module leer je systematisch debuggen en code verbeteren zonder iets kapot te maken, met AI als hulpmiddel en niet als gok.

### Leerdoelen

Na deze module kan je:

- een stack trace lezen en de plaats van een fout opsporen;
- een bug reproduceren en herleiden tot een minimal example;
- hypothesen over de oorzaak van een bug opstellen en gericht testen;
- code smells herkennen en beoordelen of ze aangepakt moeten worden;
- code refactoren in kleine stappen, met tests die regressies opsporen.

## 5.1 Foutmeldingen en stack traces lezen

Je werkte een uur aan code waarvan je zeker bent dat ze klopt. Je voert ze uit, en dan:

```js
const users = [{ name: "Amira" }, undefined];

function processUser(user) {
  return user.name.toUpperCase();
}

function processAllUsers(list) {
  return list.map(processUser);
}

console.log(processAllUsers(users));
```

```output
TypeError: Cannot read properties of undefined (reading 'name')
    at processUser (app.js:4:15)
    at Array.map (<anonymous>)
    at processAllUsers (app.js:8:15)
    at Object.<anonymous> (app.js:11:13)
```

We kortten de output in: de volledige paden en de regels met `node:internal` zijn weggelaten.

Welkom bij **debuggen**: fouten in code opsporen en oplossen. Ook ervaren developers maken fouten. Het verschil met een beginner is dat ze die sneller vinden.

Een foutmelding over een onbekende variable op regel 32 is meestal duidelijk. Een **stack trace** is moeilijker: het overzicht van welke functions elkaar aanriepen, en op welke regel, op het moment van de fout. Je leest hem van boven naar onder. Bovenaan staat waar de fout optrad, eronder wie die function aanriep.

Hier zegt de stack trace: in `processUser`, regel 4, is `user` gelijk aan `undefined`. `processUser` werd aangeroepen door `map`, binnen `processAllUsers` op regel 8. De oorzaak zit dus niet in regel 4, maar in de data: het tweede element van `users` is `undefined`.

AI helpt bij het lezen van foutmeldingen. Geef de foutmelding en de relevante code mee, en het model legt uit wat er misloopt en waar het probleem waarschijnlijk zit.

Toch moet je zelf stack traces leren lezen. Begrijpen welke functions wanneer aangeroepen worden en hoe data tussen die aanroepen stroomt, kan je niet aan AI overlaten. Zonder die kennis kan je de uitleg van het model niet beoordelen.

### Test jezelf 5.1 – Foutmeldingen en stack traces

```text
Sectie: 5.1
Type: meerkeuze
Vraag: Wat is een stack trace? Kies één antwoord.
Opties:
  A. Een lijst van alle variables en hun waarden op het moment van een fout.
  B. Een overzicht van welke functions elkaar aanriepen, en op welke regel, op het moment van een fout.
  C. Een overzicht van alle fouten die ooit in het programma optraden.
  D. Een tool die automatisch de oorzaak van een fout aanduidt.
Juist: B
Feedback A: Een stack trace toont geen waarden van variables. Daarvoor heb je een debugger of een trace table nodig (zie 5.1).
Feedback B: Juist. Bovenaan staat waar de fout optrad, eronder wie die function aanriep (zie 5.1).
Feedback C: Een stack trace gaat over één fout, op één moment (zie 5.1).
Feedback D: Een stack trace toont waar de fout optrad. De oorzaak zoek je zelf (zie 5.1).

Sectie: 5.1
Type: meerkeuze
Vraag: In het voorbeeld van 5.1 treedt de fout op in `processUser`, regel 4. Waar zit de oorzaak? Kies één antwoord.
Opties:
  A. In `toUpperCase()`, die niet werkt op namen.
  B. In `map`, die een fout element doorgeeft.
  C. In de data: het tweede element van `users` is `undefined`.
  D. In `console.log`, die de array niet kan tonen.
Juist: C
Feedback A: `toUpperCase()` wordt nooit bereikt: de fout ontstaat al bij `user.name` (zie 5.1).
Feedback B: `map` geeft elk element door, zoals verwacht. Het probleem is wat er in de array zit (zie 5.1).
Feedback C: Juist. De plaats van de fout is niet altijd de plaats van de oorzaak (zie 5.1).
Feedback D: `console.log` wordt niet bereikt: de fout treedt eerder op (zie 5.1).

Sectie: 5.1
Type: meerkeuze
Vraag: Je geeft een stack trace en de code aan een AI-tool. Het model zegt dat het probleem in function A zit, maar jij vermoedt function B. Wat doe je? Kies één antwoord.
Opties:
  A. Het model volgen: het heeft de volledige code geanalyseerd.
  B. Beide functions tegelijk aanpassen en kijken of de fout verdwijnt.
  C. Een andere AI-tool om een tweede mening vragen en de meerderheid volgen.
  D. Beide vermoedens gericht testen, want het model kan zich vergissen.
Juist: D
Feedback A: Ook een model kan een stack trace verkeerd interpreteren. Test het (zie 5.1).
Feedback B: Pas je twee dingen tegelijk aan, dan weet je niet welke wijziging hielp (zie 5.1).
Feedback C: Een stemming tussen modellen is geen test (zie 5.1).
Feedback D: Juist. Een gerichte test beslist, niet wie het overtuigendst klinkt (zie 5.1).
```

## 5.2 Een bug reproduceren: het minimal example

"Het werkt niet meer, maar ik weet niet sinds wanneer." Slechter kan je een debugsessie niet beginnen. Kan je een bug niet telkens opnieuw laten optreden, dan kan je ook niet bevestigen dat je hem oploste.

De eerste stap is daarom altijd **reproduceren**: zorg dat de fout op commando optreedt. Dezelfde input geeft telkens hetzelfde gedrag. Pas dan kan je gericht zoeken, en pas dan weet je of een oplossing werkt.

Stel: in een grote applicatie staat de rangschikking van de punten van studenten in de verkeerde volgorde. De sterkste techniek is een **minimal example**: het kleinste stuk code dat de fout nog toont. Je laat alles weg wat er niet toe doet: de interface, de database, de andere functions. Wat overblijft, is de kern:

```js
console.log([10, 9, 1].sort());
```

```output
[ 1, 10, 9 ]
```

Nu zie je de fout meteen: `sort()` sorteert standaard als tekst, en als tekst komt "10" voor "9".

Een minimal example heeft twee voordelen. Je ziet het probleem veel duidelijker zonder de code eromheen. En je kan het aan iemand anders geven, een collega, een forum of een AI-model, zonder je hele codebase te delen.

AI kan helpen: het kan voorstellen welke delen van de code waarschijnlijk niets met de fout te maken hebben. Maar de code herleiden tot de kern blijft analytisch werk. Je moet begrijpen welke onderdelen bijdragen aan de fout.

Dit betekent voor jou: kan je een minimal example bouwen, dan heb je het moeilijkste deel van het debuggen al gedaan.

### Test jezelf 5.2 – Een bug reproduceren

```text
Sectie: 5.2
Type: meerkeuze
Vraag: Wat is het doel van een minimal example? Kies één antwoord.
Opties:
  A. Het kleinste stuk code vinden dat de fout nog toont, zodat de oorzaak duidelijker wordt.
  B. De code zo klein maken dat ze sneller uitvoert.
  C. Een vereenvoudigde versie maken die niet meer crasht.
  D. Een model de kans geven om de volledige codebase te analyseren.
Juist: A
Feedback A: Juist. Zonder de code eromheen zie je de kern van het probleem (zie 5.2).
Feedback B: Snelheid is niet het doel. Het gaat om de fout zichtbaar maken (zie 5.2).
Feedback C: Een minimal example moet de fout net nog wel tonen (zie 5.2).
Feedback D: Net omgekeerd: met een minimal example moet je de volledige codebase niet delen (zie 5.2).

Sectie: 5.2
Type: meerkeuze
Vraag: Wat is het grootste risico als je een bug probeert op te lossen die je niet telkens kan reproduceren? Kies één antwoord.
Opties:
  A. Je oplossing wordt trager uitgevoerd.
  B. Een AI-model weigert om je te helpen.
  C. Je kan niet bevestigen dat je oplossing werkt: de fout kan toevallig wegblijven.
  D. Er is geen risico, zolang je de oorzaak vindt.
Juist: C
Feedback A: Reproduceren heeft niets met snelheid te maken (zie 5.2).
Feedback B: Een model helpt ook zonder reproductie, maar zijn voorstellen zijn dan net zo onzeker (zie 5.2).
Feedback C: Juist. Zonder reproductie weet je niet of de fout weg is of alleen even niet optreedt (zie 5.2).
Feedback D: Zonder reproductie kan je ook niet zeker zijn dat je de echte oorzaak vond (zie 5.2).

Sectie: 5.2
Type: meerkeuze
Vraag: Wat toont deze code? Kies één antwoord.
Code:
  console.log([10, 9, 1].sort());
Opties:
  A. [ 1, 9, 10 ]
  B. [ 10, 9, 1 ]
  C. [ 1, 10, 9 ]
  D. Een foutmelding
Juist: C
Feedback A: Dat zou je verwachten, maar `sort()` sorteert standaard als tekst (zie 5.2).
Feedback B: De array wordt wel gesorteerd, alleen als tekst (zie 5.2).
Feedback C: Juist. Als tekst komt "10" voor "9", net zoals "ab" voor "b" komt (zie 5.2).
Feedback D: `sort()` zonder argument is geldig. Het resultaat is alleen niet wat je verwacht (zie 5.2).
```

## 5.3 Hypothesegedreven debuggen

Debuggen is geen trial-and-error. Of beter: goed debuggen is geen trial-and-error.

Bij trial-and-error verander je willekeurig dingen en hoop je dat de fout verdwijnt. Bij **hypothesegedreven debuggen** denk je na over een mogelijke oorzaak en test je die gericht. Je observeert het gedrag, je formuleert een hypothese, je test ze, en op basis van het resultaat bevestig je ze of pas je ze aan. Na elke test weet je meer, ook als je hypothese fout was.

Een voorbeeld. Een function `findUser(users, "marie")` geeft niets terug, hoewel Marie in de lijst staat.

- Hypothese 1: de lijst is leeg. Test: toon de lengte van de lijst. Die is 2, dus hypothese 1 klopt niet.
- Hypothese 2: de vergelijking houdt rekening met hoofdletters. Test: `"Marie" === "marie"` geeft `false`. Gevonden.

AI helpt bij het bedenken van hypothesen. Beschrijf het probleem zo precies mogelijk: het verwachte gedrag, het werkelijke gedrag, de foutmelding en de context. Vraag dan om mogelijke oorzaken. Een goed antwoord geeft je drie tot vijf pistes die je één voor één kan nagaan.

Probeer je blind het eerste voorstel zonder te begrijpen waarom het plausibel is, dan is het nog altijd trial-and-error. Alleen gokt nu het model in jouw plaats. Beoordeel daarom elke hypothese zelf:

- Is deze oorzaak plausibel, gegeven wat je over de code weet?
- Hoe test je dit gericht, zonder andere dingen tegelijk te veranderen?
- Wat leert het resultaat me, ook als de hypothese fout is?

Systematisch debuggen kost in het begin meer tijd. Op termijn kost het minder.

### Test jezelf 5.3 – Hypothesegedreven debuggen

```text
Sectie: 5.3
Type: meerkeuze
Vraag: Wat is het verschil tussen trial-and-error en hypothesegedreven debuggen? Kies één antwoord.
Opties:
  A. Trial-and-error is sneller, hypothesegedreven debuggen is nauwkeuriger.
  B. Bij hypothesegedreven debuggen test je gericht een mogelijke oorzaak, bij trial-and-error verander je willekeurig dingen.
  C. Trial-and-error werkt voor syntaxfouten, hypothesegedreven debuggen voor logicafouten.
  D. Er is geen echt verschil: beide leiden tot hetzelfde resultaat.
Juist: B
Feedback A: Trial-and-error lijkt sneller, maar je leert er weinig van en een fout kan terugkomen (zie 5.3).
Feedback B: Juist. Na elke gerichte test weet je meer, ook als de hypothese fout was (zie 5.3).
Feedback C: Het verschil zit in de aanpak, niet in het soort fout (zie 5.3).
Feedback D: Bij trial-and-error weet je vaak niet waarom de fout verdween (zie 5.3).

Sectie: 5.3
Type: meerkeuze
Vraag: Een model stelt drie mogelijke oorzaken voor een bug voor. De eerste klinkt het aannemelijkst. Wat doe je? Kies één antwoord.
Opties:
  A. De eerste oorzaak meteen oplossen: het model zet de waarschijnlijkste vooraan.
  B. Alle drie de oorzaken tegelijk aanpassen, zodat de bug zeker weg is.
  C. Zelf beoordelen hoe plausibel elke oorzaak is en de oorzaak gericht testen.
  D. De beschrijving opnieuw sturen tot het model zeker is van de oorzaak.
Juist: C
Feedback A: De volgorde zegt niets over de juistheid. Een oplossing zonder test is een gok (zie 5.3).
Feedback B: Dan weet je niet welke aanpassing hielp, en verander je misschien code die goed was (zie 5.3).
Feedback C: Juist. Jij beoordeelt de hypothesen en een test beslist (zie 5.3).
Feedback D: Een model zegt niet hoe zeker het is. Herhalen maakt het antwoord niet betrouwbaarder (zie 5.3).

Sectie: 5.3
Type: ordenen
Vraag: Zet de stappen van hypothesegedreven debuggen in de juiste volgorde.
Volgorde:
  Observeer het gedrag.
  Formuleer een hypothese over de oorzaak.
  Test de hypothese gericht.
  Bevestig de hypothese of pas ze aan.
Feedback: Je test pas na een hypothese, en het resultaat bepaalt de volgende stap (zie 5.3).
```

## 5.4 Code smells herkennen

Niet elke slechte code geeft een foutmelding. Deze function werkt correct:

```js
function f(d) {
  let r = 0;
  if (d.type == "A") {
    if (d.val > 0) {
      if (d.active == true) {
        r = d.val * 1.21;
        console.log("ok");
      }
    }
  } else if (d.type == "B") {
    if (d.val > 0) {
      if (d.active == true) {
        r = d.val * 1.06;
        console.log("ok");
      }
    }
  }
  return r;
}
```

Toch is ze moeilijk te begrijpen, en een kleine wijziging moet je op twee plaatsen doen. Dat zijn **code smells**: herkenbare patronen die wijzen op een probleem met de kwaliteit of de structuur van code, zonder dat de code fout is. Het zijn geen fouten, maar waarschuwingssignalen.

Veelvoorkomende code smells zijn:

- Lange functions. Een function van vijftig regels die tien dingen doet, kan je beter opsplitsen. Een function doet één ding.
- Duplicatie. Dezelfde logica staat op meerdere plaatsen. Moet ze veranderen, dan pas je ze overal aan, en vergeet je er gegarandeerd één.
- Onduidelijke namen. `tmp`, `data`, `x` of `f` zeggen niets over wat iets doet of bevat.
- Te complexe condities. Drie of meer geneste `if`-statements wijzen bijna altijd op logica die je kan vereenvoudigen.
- Magische getallen. Een getal zonder naam, zoals `1.21`, zegt niet waarvoor het staat. Een constante zoals `VAT_RATE` wel.
- Dode code. Code die nooit uitgevoerd wordt, verwart lezers.

In `f` zie je er vier. De namen `f`, `d` en `r` zijn onduidelijk, en de controles op `val` en `active` staan er dubbel. De condities zijn drie niveaus diep, en `1.21` en `1.06` zijn magische getallen. De `console.log("ok")` is bovendien debugcode die is blijven staan.

AI spoort code smells snel op. Maar of je een smell aanpakt, en hoe, beslis jij. Niet elke lange function is een probleem: de context bepaalt veel.

### Test jezelf 5.4 – Code smells herkennen

```text
Sectie: 5.4
Type: meerkeuze
Vraag: Wat onderscheidt een code smell van een bug? Kies één antwoord.
Opties:
  A. Een code smell veroorzaakt altijd een fout tijdens het uitvoeren, een bug niet.
  B. Code smells zijn enkel belangrijk in grote projecten, bugs in kleine.
  C. Er is geen verschil: beide termen beschrijven foute code.
  D. Een code smell maakt code moeilijker te begrijpen of te onderhouden, maar de code is niet per se fout.
Juist: D
Feedback A: Code met een smell kan perfect werken, zoals de function `f` in 5.4 (zie 5.4).
Feedback B: Code smells maken elk project moeilijker te onderhouden (zie 5.4).
Feedback C: Een bug geeft een fout resultaat, een smell niet per se (zie 5.4).
Feedback D: Juist. Een smell is een waarschuwingssignaal, geen fout (zie 5.4).

Sectie: 5.4
Type: categoriseren
Vraag: Bij welke code smell hoort elk probleem uit de function `f` in 5.4?
Indeling:
  De namen f, d en r → onduidelijke namen
  De controles op val en active staan twee keer → duplicatie
  Drie geneste if-statements → te complexe condities
  De getallen 1.21 en 1.06 zonder naam → magische getallen
Feedback: Al deze problemen maken de code moeilijker te lezen en aan te passen, terwijl ze correct werkt (zie 5.4).

Sectie: 5.4
Type: meerkeuze
Vraag: Een model noemt een function "te lang" en stelt voor om ze op te splitsen in vier kleinere functions. Wat doe je? Kies één antwoord.
Opties:
  A. De opsplitsing overnemen: lange functions zijn altijd slechter.
  B. Beoordelen of de opsplitsing de code in de context van dit project leesbaarder en beter onderhoudbaar maakt.
  C. De suggestie weigeren: het model begrijpt de businesslogica niet.
  D. De function zo laten, want ze werkt.
Juist: B
Feedback A: Niet elke lange function is een probleem. De context bepaalt het (zie 5.4).
Feedback B: Juist. Het model spoort de smell op, jij beslist of en hoe je ze aanpakt (zie 5.4).
Feedback C: De suggestie kan terecht zijn. Beoordeel ze eerst (zie 5.4).
Feedback D: Werkende code kan toch slecht onderhoudbaar zijn (zie 5.4).
```

## 5.5 Refactoring: structuur verbeteren zonder gedrag te veranderen

De function `f` uit 5.4 werkt, maar ze is moeilijk te lezen. Zo kan ze beter:

```js
const VAT_RATES = { A: 1.21, B: 1.06 };

function calculatePriceWithVat(item) {
  const rate = VAT_RATES[item.type];
  if (rate === undefined || item.val <= 0 || !item.active) {
    return 0;
  }
  return item.val * rate;
}

console.log(calculatePriceWithVat({ type: "A", val: 50, active: true }));
console.log(calculatePriceWithVat({ type: "B", val: 50, active: true }));
console.log(calculatePriceWithVat({ type: "A", val: 50, active: false }));
console.log(calculatePriceWithVat({ type: "C", val: 50, active: true }));
```

```output
60.5
53
0
0
```

Voor deze vier inputs geeft de oude function hetzelfde resultaat.

Dat is **refactoring** (herstructurering): code herstructureren zonder het gedrag naar buiten te veranderen. Wie de function gebruikt, krijgt dezelfde output. De code is alleen leesbaarder, eenvoudiger of beter georganiseerd.

Eén verschil maakten we bewust: de debugregel `console.log("ok")` is weg. Zo'n keuze vermeld je apart.

"Zonder het gedrag te veranderen" is essentieel. Refactoring is geen nieuwe feature en geen bugfix. Pas je tijdens het refactoren ook de logica aan, dan doe je twee dingen tegelijk. Loopt er daarna iets mis, dan weet je niet welke wijziging het veroorzaakte.

AI doet goede voorstellen voor refactoring: functions opsplitsen, variables hernoemen, condities vereenvoudigen, duplicatie wegwerken. Beoordeel elk voorstel met deze vragen:

- Is de code leesbaarder geworden, of alleen anders (zie [4.4](./module-4.md#4_4))?
- Past de nieuwe structuur bij de rest van het project?
- Zijn er tests die bevestigen dat het gedrag hetzelfde bleef?
- Brengt de refactoring nieuwe afhankelijkheden of complexiteit mee?

::: warning
**Let op:** refactoren zonder tests is gevaarlijk. Weet je niet of het gedrag hetzelfde bleef, dan weet je niet of je iets kapotmaakte.
:::

### Test jezelf 5.5 – Refactoring

```text
Sectie: 5.5
Type: meerkeuze
Vraag: Wat is refactoring? Kies één antwoord.
Opties:
  A. Code herschrijven om nieuwe functionaliteit toe te voegen.
  B. Code herstructureren zonder het gedrag naar buiten te veranderen, om de kwaliteit te verbeteren.
  C. Bugs oplossen door de logica aan te passen.
  D. Code herschrijven zodat ze sneller uitvoert.
Juist: B
Feedback A: Nieuwe functionaliteit verandert het gedrag. Dat is geen refactoring (zie 5.5).
Feedback B: Juist. Wie de code gebruikt, merkt niets, behalve dat ze leesbaarder is (zie 5.5).
Feedback C: Een bugfix verandert het gedrag. Doe dat apart van een refactoring (zie 5.5).
Feedback D: Sneller kan een gevolg zijn, maar het doel is betere structuur (zie 5.5).

Sectie: 5.5
Type: meerkeuze
Vraag: Tijdens een refactoring stelt een model voor om `process` te hernoemen naar `filterAndSumTotal`, en tegelijk een fout in de berekening te verbeteren. Wat doe je? Kies één antwoord.
Opties:
  A. Beide in één keer doen: zo ben je sneller klaar.
  B. Enkel de naam aanpassen en de fout laten staan.
  C. Beide apart doen: eerst de ene wijziging, testen, dan de andere.
  D. Geen van beide doen: een model mag geen logica aanpassen.
Juist: C
Feedback A: Loopt er daarna iets mis, dan weet je niet welke wijziging het veroorzaakte (zie 5.5).
Feedback B: De fout moet wel opgelost worden, alleen in een aparte stap (zie 5.5).
Feedback C: Juist. Een refactoring verandert het gedrag niet, een bugfix wel. Die houd je gescheiden (zie 5.5).
Feedback D: Beide voorstellen kunnen terecht zijn. Het gaat om de volgorde (zie 5.5).

Sectie: 5.5
Type: meerkeuze
Vraag: Een model stelt voor om een function van veertig regels op te splitsen in zeven kleine functions. Wat is een goede reden om dat niet volledig over te nemen? Kies één antwoord.
Opties:
  A. Meer functions betekent altijd meer complexiteit.
  B. AI mag geen refactoring voorstellen voor functions van meer dan twintig regels.
  C. Refactoring is enkel voor ervaren developers.
  D. De zeven nieuwe functions maken de code in dit project minder duidelijk dan de oorspronkelijke structuur.
Juist: D
Feedback A: Opsplitsen maakt code vaak net eenvoudiger. Het hangt van de situatie af (zie 5.5).
Feedback B: Zo'n regel bestaat niet (zie 5.5).
Feedback C: Iedereen refactort, op voorwaarde dat er tests zijn (zie 5.5).
Feedback D: Juist. Anders is niet hetzelfde als beter (zie 5.5).
```

## 5.6 Regressies voorkomen

Je past code aan en alles lijkt te werken. Twee dagen later meldt een collega dat iets wat vorige week werkte, nu kapot is.

Dat is een **regressie** (regression): bestaande functionaliteit die onbedoeld kapotgaat door een wijziging. Regressies zijn verraderlijk, omdat je ze niet meteen ziet. De function die je aanpaste, werkt. Maar ergens anders, in een situatie die je niet testte, liep iets mis.

Tegen regressies helpen twee dingen: tests en kleine stappen.

Tests: voor je begint te refactoren of te debuggen, zorg je voor tests die het huidige gedrag vastleggen. Slagen ze na je wijziging nog, dan is het gedrag hetzelfde gebleven. Falen ze, dan weet je meteen dat er iets misliep en waar. De vier aanroepen in 5.5 zijn zo'n test, in hun eenvoudigste vorm.

AI kan tests voorstellen, de mogelijke impact van een wijziging beschrijven of wijzen op afhankelijkheden die je over het hoofd zag. Maar de controle dat het gedrag hetzelfde bleef, doe jij.

Kleine stappen: één wijziging per keer, en na elke wijziging voer je de tests opnieuw uit. Loopt er iets mis, dan weet je welke stap het veroorzaakte.

Met tests en kleine stappen verbeter je code zonder angst. Zonder die twee is elke wijziging een gok.

### Test jezelf 5.6 – Regressies voorkomen

```text
Sectie: 5.6
Type: meerkeuze
Vraag: Wat is een regressie? Kies één antwoord.
Opties:
  A. Bestaande functionaliteit die onbedoeld kapotgaat door een wijziging elders in de code.
  B. Een nieuwe bug in nieuwe functionaliteit.
  C. Code die trager wordt na een optimalisatie.
  D. Een fout die enkel optreedt in een oude versie van een programmeertaal.
Juist: A
Feedback A: Juist. Wat vroeger werkte, werkt niet meer (zie 5.6).
Feedback B: Een regressie gaat over iets wat al werkte, niet over nieuwe code (zie 5.6).
Feedback C: Trager is niet kapot. Een regressie gaat over functionaliteit (zie 5.6).
Feedback D: Een regressie ontstaat door een wijziging in je eigen code (zie 5.6).

Sectie: 5.6
Type: meerkeuze
Vraag: Waarom schrijf je tests voor je begint te refactoren, ook als de code al werkt? Kies één antwoord.
Opties:
  A. Tests maken de code sneller.
  B. Tests leggen het huidige gedrag vast, zodat je na elke wijziging ziet of het hetzelfde bleef.
  C. Een AI-model kan zonder tests geen refactoring voorstellen.
  D. Zonder tests mag je code niet committen.
Juist: B
Feedback A: Tests veranderen niets aan de snelheid van je code (zie 5.6).
Feedback B: Juist. Zonder tests weet je niet of je iets kapotmaakte (zie 5.6).
Feedback C: Een model stelt ook zonder tests refactorings voor. Alleen kan je ze dan niet controleren (zie 5.6).
Feedback D: Git weigert geen commits zonder tests. Het gaat om de controle van het gedrag (zie 5.6).

Sectie: 5.6
Type: meerkeuze
Vraag: Je refactort een module en voert na elke gewijzigde function alle tests uit. Na de derde function falen twee tests. Wat is het voordeel van deze werkwijze? Kies één antwoord.
Opties:
  A. Er is geen voordeel: meer testrondes kosten meer tijd.
  B. Een AI-model kan de falende tests dan automatisch herstellen.
  C. Kleine stappen zorgen ervoor dat er geen tests falen.
  D. Je weet welke wijziging de tests liet falen, dus je vindt het probleem snel.
Juist: D
Feedback A: Die extra tijd win je ruim terug bij het zoeken naar de oorzaak (zie 5.6).
Feedback B: Herstellen blijft jouw werk. Kleine stappen maken alleen het zoeken makkelijker (zie 5.6).
Feedback C: Tests kunnen nog altijd falen, maar je weet dan waar je moet zoeken (zie 5.6).
Feedback D: Juist. De derde wijziging is de oorzaak (zie 5.6).
```

## Samenvatting

Nieuwe termen:

- debuggen: fouten in code opsporen en oplossen.
- stack trace: het overzicht van welke functions elkaar aanriepen, en op welke regel, op het moment van een fout.
- reproduceren: een fout op commando laten optreden, telkens met hetzelfde gedrag.
- minimal example: het kleinste stuk code dat de fout nog toont.
- hypothesegedreven debuggen: een mogelijke oorzaak formuleren en gericht testen.
- code smell: een patroon dat wijst op een probleem met kwaliteit of structuur, zonder dat de code fout is.
- refactoring: code herstructureren zonder het gedrag naar buiten te veranderen.
- regressie: bestaande functionaliteit die onbedoeld kapotgaat door een wijziging.

Belangrijkste regels:

- Leer zelf stack traces lezen. De plaats van een fout is niet altijd de plaats van de oorzaak.
- Reproduceer een bug en herleid hem tot een minimal example voor je een oplossing zoekt.
- Test hypothesen gericht. Een AI-voorstel blind uitproberen is trial-and-error.
- Een code smell is een signaal. Of je het aanpakt, hangt van de context af.
- Refactor en debug nooit in dezelfde stap.
- Leg gedrag vast met tests en werk in kleine stappen.

## Veelgemaakte fouten

- De fout zoeken op de regel waar ze optrad. In 5.1 zit de oorzaak in de data, niet in `processUser`.
- Een bug "oplossen" die je niet kan reproduceren. Ze blijft een tijdje weg, en komt dan terug.
- Het eerste voorstel van een model meteen toepassen. Dat is trial-and-error met extra stappen.
- Een bugfix en een refactoring in één keer doen. Faalt er daarna iets, dan weet je niet wat.
- Refactoren zonder tests. `calculatePriceWithVat` lijkt correct, maar zonder de vier aanroepen weet je het niet.

::: oefening
[Oefeningen module 5](./module-5-oefeningen.md)
:::
