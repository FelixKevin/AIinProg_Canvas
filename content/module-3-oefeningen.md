---
module: 3
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 3

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 3. De extra-reeks gaat dieper in op design patterns, beveiliging en tools.

## E1 Een function genereren en lezen {#e1 .easy}

Gegenereerde code moet je begrijpen voor je ze gebruikt (zie [3.1](./module-3.md#3_1)).

1. Kies een kleine function, zoals een controle op een Belgisch rijksregisternummer of een omzetting van een prijs inclusief btw.
2. Schrijf een prompt met context, input, output en minstens één beperking (zie [2.3](./module-2.md#2_3)).
3. Laat de function genereren.
4. Schrijf bij elke regel in één zin wat ze doet. Markeer de regels die je niet begrijpt en zoek ze op.

Lever je prompt, de gegenereerde code en je uitleg per regel in.

## E2 Welk fragment past in het project? {#e2 .easy}

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
2. Noem drie verschillen die het andere fragment niet meteen integreerbaar maken (zie [3.4](./module-3.md#3_4)).

## E3 Drie soorten fouten {#e3 .easy}

In 3.5 zag je dat logicafouten gevaarlijker zijn dan syntaxfouten. Je zoekt nu het verschil zelf uit.

Schrijf voor elk type een kort codevoorbeeld van hoogstens vijf regels, met in één zin wat er misloopt:

1. een syntaxfout;
2. een logicafout;
3. een edge case die niet afgehandeld wordt.

Voer elk voorbeeld uit en noteer de output of de foutmelding.

## M1 Een CRUD-module inpassen {#m1}

Gegenereerde boilerplate volgt de gangbaarste keuzes, niet die van jouw project (zie [3.2](./module-3.md#3_2)).

1. Laat een AI-tool een CRUD-module genereren voor één soort gegevens, zoals `User` of `Product`.
2. Stel dat je de module moet integreren in een project dat een bestaande ORM gebruikt en camelCase hanteert.
3. Maak een lijst van elke aanpassing die nodig is, met per aanpassing het controlepunt uit [3.4](./module-3.md#3_4) waar ze bij hoort.

## M2 Belgische datums {#m2}

In 3.5 las JavaScript 03/04/2026 als 4 maart. Je zoekt nu zelf zulke aannames op.

1. Laat een AI-tool een function genereren die een datum als tekst omzet naar een `Date`-object.
2. Test de function met deze input en noteer telkens het resultaat:

```text
03/04/2026
31/12/2026
3 april 2026
```

3. Beschrijf wat er misgaat.
4. Pas de function aan zodat ze het formaat `DD/MM/JJJJ` correct verwerkt. Toon het resultaat met `toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })`. Voor `03/04/2026` zie je dan:

```output
3 april 2026
```

## M3 Een setupscript controleren {#m3}

Gegenereerde configuratie bevat vaak geheimen of verouderde instellingen (zie [3.3](./module-3.md#3_3)).

1. Laat een AI-tool een setupscript of een configuratie genereren voor een nieuw project in een technologie naar keuze.
2. Controleer de output op de vier punten uit 3.3:
   - Staan er wachtwoorden, sleutels of tokens letterlijk in?
   - Staan gevoelige bestanden in de `.gitignore`?
   - Zijn de versies van de dependencies actueel en zonder bekende kwetsbaarheden?
   - Kloppen de instellingen voor jouw omgeving?
3. Noteer per punt wat je vond en wat je aanpaste.

## M4 Regel per regel uitleggen {#m4}

Je toont aan dat je een gegenereerde function volledig begrijpt.

1. Laat een function van minstens twintig regels genereren.
2. Zet boven elke regel een comment in het Engels die uitlegt wat de regel doet.
3. Markeer regels waar je twijfelt met `// TODO: check` en zoek ze op tot je ze kan uitleggen.

Lever de code met comments in, plus een lijst van wat je moest opzoeken.

## H1 Integratiereview van een prototype {#h1 .hard}

Een prototype is een vertrekpunt, geen eindproduct (zie [3.1](./module-3.md#3_1)). Je beoordeelt nu of een gegenereerd prototype bruikbaar is.

1. Laat een AI-tool een werkend prototype genereren van een kleine webapplicatie: een takenlijst waarin je taken toevoegt, afvinkt en verwijdert.
2. Definieer zelf een projectstructuur: welke mappen, welke naamgeving, welke libraries.
3. Review het prototype op:
   - correctheid en foutafhandeling;
   - beveiliging: geheimen in de code, validatie van input;
   - consistentie met jouw projectstructuur;
   - culturele aannames, zoals datumformaat en taal.
4. Noteer elke bevinding met de aanpassing die je deed.

## H2 Externe data zonder vangnet {#h2 .hard}

Code die met externe data werkt, gaat het vaakst mis op de plaatsen waar de AI de happy path aannam.

1. Laat een AI-tool een module genereren die met externe data werkt: een API-call, een bestand inlezen of een query op een database.
2. Duid in de code alle plaatsen aan waar:
   - foutafhandeling ontbreekt;
   - de code aannames maakt over de structuur van de data;
   - een beveiligingsrisico ontstaat.
3. Schrijf een verbeterde versie die alle punten oplost. Test ze met minstens drie foutsituaties, zoals een netwerkfout, een leeg antwoord en een veld dat ontbreekt.

## @1 Van prototype tot werkende applicatie {#home1 .home}

Je bouwt een kleine applicatie volledig met AI, maar integreert ze stap voor stap (zie [3.6](./module-3.md#3_6)).

Kies een kleine applicatie, zoals een takenlijst, een valutaomzetter of een kleine API. Documenteer elke stap:

- de prompt die je gebruikte;
- de ruwe output;
- welke aanpassingen je deed en waarom;
- hoe je de stap testte voor je verder ging.

Lever de werkende applicatie en een verslag van minstens 600 woorden in. Beschrijf je werkwijze, de problemen die je tegenkwam en het verschil tussen gegenereerde en geïntegreerde code.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Boilerplate in een webproject (Easy) {#x1}

Zoek drie voorbeelden van boilerplate in een typisch webproject. Noteer per voorbeeld:

- wat het is;
- waarom het repetitief is;
- of AI hier nuttig is, en waarom.

## X2 Een beveiligingsincident (Easy) {#x2}

Zoek online een gedocumenteerd geval waarin AI-gegenereerde code een beveiligingsprobleem veroorzaakte, zoals een gelekte API-sleutel of een SQL-injectie. Beschrijf in maximaal tien zinnen wat er misliep en welke controle uit deze module het had kunnen voorkomen. Vermeld de bron.

## X3 Een design pattern laten genereren (Medium) {#x3}

1. Kies een design pattern, zoals singleton, factory of observer.
2. Laat een AI-tool een implementatie genereren.
3. Beoordeel de output: is het patroon correct uitgewerkt, welke aannames passen niet in een typisch project, en wat zou je aanpassen?

## X4 Eigen code laten verbeteren (Medium) {#x4}

1. Neem code die je zelf schreef voor een ander vak.
2. Laat een AI-tool er een verbeterde versie van maken.
3. Vergelijk beide versies: wat is beter, wat is slechter of past minder, en wat neem je over?

## X5 Tools voor codegeneratie vergelijken (Medium) {#x5}

Zoek twee AI-tools die gericht zijn op code genereren, niet op algemene chat. Vergelijk ze op:

- hoe ze context over je project meenemen;
- hoe goed hun code aansluit bij bestaande code;
- of ze waarschuwen voor beveiligingsproblemen;
- hun sterke punten en beperkingen.

## X6 Technical debt door AI-code (Hard) {#x6}

1. Zoek op wat technical debt precies inhoudt. Vermeld je bron.
2. Beschrijf een concreet scenario waarin AI-code zonder QC technical debt veroorzaakt.
3. Beschrijf hoe je die schuld achteraf zou aflossen, in concrete stappen.

## X7 Een checklist voor code review (Hard) {#x7}

Je werkt in een team dat veel AI-code gebruikt. Stel een checklist op voor de review van AI-gegenereerde code. Gebruik minstens de onderwerpen van 3.3 tot 3.6, en formuleer elk punt als een vraag die je met ja of nee beantwoordt.

## X8 Projectcontext in AI-tools (Hard) {#x8}

AI-tools voor programmeren bieden verschillende manieren om context over je project mee te geven, zoals het indexeren van je codebase of een bestand met projectregels.

1. Onderzoek hoe GitHub Copilot, Cursor en minstens één andere tool dat doen.
2. Beschrijf per tool welke mechanismen er zijn.
3. Test bij één tool het verschil in output met en zonder projectcontext.

## X9 Beveiligingsaudit van een login (@home) {#x9}

1. Laat een AI-tool een kleine webapplicatie genereren met registreren en inloggen.
2. Voer een beveiligingsaudit uit en onderzoek:
   - of wachtwoorden met hashing opgeslagen worden;
   - of er bescherming is tegen SQL-injectie en andere injectie;
   - of gevoelige configuratie in environment variables staat;
   - of er geheimen letterlijk in de code staan;
   - of er beveiligingsheaders zijn.
3. Noteer per bevinding de ernst en de correctie.
4. Sluit af met een reflectie van maximaal 300 woorden: wat zegt dit over AI voor beveiligingsgevoelige code?
