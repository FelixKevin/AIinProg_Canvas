---
module: 6
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 6

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 6. De extra-reeks gaat dieper in op testtechnieken en communicatie.

## E1 Tests voor een deling {#e1 .easy}

Eerst denk je zelf na over test cases, daarna vergelijk je met een model.

```js
const divide = (numerator, denominator) => {
  if (denominator === 0) throw new Error("Deling door nul");
  return numerator / denominator;
};

console.log(divide(10, 4));
```

```output
2.5
```

1. Schrijf zonder AI vijf test cases met `assert` (zie [6.1](./module-6.md#6_1)): twee voor de happy path, twee voor randgevallen en één voor ongeldige input.
2. Laat daarna een model extra test cases genereren.
3. Welke situaties vond het model die jij miste? Zijn alle gegenereerde tests correct volgens de specificatie van `divide`?

## E2 Tests uit een specificatie {#e2 .easy}

Een test controleer je aan de hand van de specificatie (zie [6.1](./module-6.md#6_1)).

Specificatie: "Een function `filterByPrice(products, min, max)` geeft de producten terug met een prijs tussen `min` en `max`. Beide grenzen tellen mee."

1. Laat een model minstens acht test cases genereren op basis van deze specificatie, zonder implementatie.
2. Controleer elke test case: volgt ze de specificatie? Dekt ze een relevante situatie? Klopt de verwachte waarde?
3. Duid aan welke tests de grenzen controleren. Ontbreekt er een, voeg ze dan toe.

## E3 Valide of betrouwbaar? {#e3 .easy}

Validiteit en betrouwbaarheid zijn twee verschillende kenmerken van een goede test (zie [6.3](./module-6.md#6_3)).

1. Leg in maximaal drie zinnen het verschil uit.
2. Geef een voorbeeld van een test die valide is maar niet betrouwbaar.
3. Geef een voorbeeld van een test die betrouwbaar is maar niet valide.

Schrijf de voorbeelden als code met `assert`.

## M1 Een gegenereerde test suite beoordelen {#m1}

Je beoordeelt een test suite van een model met de drie kenmerken uit 6.3.

1. Kies een function uit een eigen project.
2. Laat een model een volledige test suite genereren.
3. Beoordeel elke test op validiteit, volledigheid en betrouwbaarheid:

```text
Test | Valide? | Betrouwbaar? | Opmerking
```

4. Noteer welke situaties nog ontbreken en voeg die tests toe.

## M2 Mock data voor een weer-API {#m2}

Een function haalt het weer op via een externe API. Je wil ze testen zonder de echte API aan te spreken (zie [6.2](./module-6.md#6_2)).

Laat een model mock data genereren voor minstens vijf situaties:

- zonnig weer;
- regen;
- een fout van de API;
- een leeg antwoord;
- ongeldige data, zoals een temperatuur als tekst.

Beoordeel daarna: is de data representatief? Gebruikt ze Belgische steden en eenheden zoals graden Celsius? Wat ontbreekt er?

## M3 Een README die werkt {#m3}

Een README is pas goed als iemand anders er het project mee aan de praat krijgt.

1. Laat een model een README genereren voor een eigen project.
2. Controleer:
   - Is de installatie correct en volledig?
   - Klopt de beschrijving van het gebruik?
   - Welke secties mist een developer die het project nog nooit zag?
3. Pas de README aan. Laat daarna een medestudent het project installeren met enkel je README. Noteer waar hij of zij vastliep.

## M4 Documentatie voor een volledige module {#m4}

Bij meerdere functions moet gegenereerde documentatie ook consistent zijn.

1. Laat een model documentatie genereren voor een bestand met minstens drie functions.
2. Controleer elke beschrijving met de vier vragen uit [6.4](./module-6.md#6_4).
3. Controleer de consistentie: worden dezelfde termen gebruikt? Is het detailniveau overal gelijk?
4. Noteer wat je aanpaste en waarom.

## H1 Een test suite verantwoorden {#h1 .hard}

Je schrijft een test suite waarvan je elke test kan verdedigen.

Schrijf voor een module met minstens drie functions een test suite van minstens twaalf tests. Gebruik AI als hulpmiddel. Noteer per test:

- welke situatie de test dekt;
- waarom die situatie relevant is;
- of de verwachte waarde uit de specificatie komt of uit de code.

Elke verwachte waarde die uit de code komt, controleer je opnieuw aan de hand van de specificatie.

## H2 Een test die slaagt en toch fout is {#h2 .hard}

In 6.1 slaagde een test die de fout uit de code overnam. Je bouwt nu zelf zo'n geval.

1. Schrijf een function met een subtiele logicafout en een korte specificatie.
2. Laat een model tests genereren op basis van de code alleen.
3. Toon dat een gegenereerde test slaagt, terwijl de code de specificatie niet volgt.
4. Schrijf een test op basis van de specificatie die de fout wel vindt.
5. Leg in maximaal tien zinnen uit waarom de eerste test niet valide was.

## @1 Van nul tot volledige test suite {#home1 .home}

Neem een project van minstens honderd regels code zonder tests, van jezelf of van iemand anders. Bouw een volledige test suite:

1. Analyseer eerst zelf welke functions je test en welke situaties kritisch zijn.
2. Laat een model test cases genereren en vul aan.
3. Controleer elke test aan de hand van de specificatie, niet de code.
4. Meet de test coverage met een tool naar keuze en bespreek het resultaat.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Gegenereerde documentatie controleren (Easy) {#x1}

1. Laat een model documentatie genereren voor een function die je zelf schreef.
2. Controleer de documentatie met de vier vragen uit 6.4.
3. Noteer wat ontbreekt of niet klopt.

## X2 Eén wijziging, twee lezers (Easy) {#x2}

Wijziging: de login blokkeert een account na vijf mislukte pogingen.

1. Schrijf een commit message voor een collega-developer.
2. Schrijf een kort bericht voor een teamlid zonder technische achtergrond, bijvoorbeeld in de teamchat.
3. Laat een model beide versies verbeteren en vergelijk met je eigen versie.

## X3 Test coverage (Medium) {#x3}

**Test coverage** is de mate waarin je tests de code doorlopen.

1. Zoek op wat een hoge coverage betekent, en wat ze niet betekent. Vermeld je bron.
2. Meet de coverage van een eigen test suite met een tool naar keuze.
3. Laat een model verbeterpunten voorstellen en beoordeel die.

## X4 Unit, integratie en end-to-end (Medium) {#x4}

Zoek het verschil op tussen **unit tests**, **integratietests** en **end-to-end tests**. Leg in maximaal tien zinnen uit voor welk type AI het nuttigst is bij het genereren, en waarom de andere types moeilijker zijn.

## X5 Test-driven development met AI (Hard) {#x5}

Bij **test-driven development** (TDD) schrijf je de tests voor de implementatie.

1. Zoek op hoe TDD werkt. Vermeld je bron.
2. Bouw een kleine feature met TDD en AI als hulpmiddel.
3. Noteer je werkwijze: waar hielp AI, en waar moest je zelf beslissen?
4. Beschrijf de voordelen en beperkingen van AI in een TDD-aanpak.

## X6 Property-based testing (Hard) {#x6}

Bij **property-based testing** beschrijf je eigenschappen die altijd moeten gelden, en genereert een framework automatisch input om ze te controleren.

Zoek op hoe het werkt. Vergelijk het met tests die een AI-model genereert: wanneer is elk het meest geschikt? Vermeld je bron.

## X7 Een test- en documentatieprotocol (Hard) {#x7}

Stel een persoonlijk protocol op voor tests en documentatie in een project. Beschrijf:

- wanneer je AI gebruikt om tests te genereren, en wanneer niet;
- hoe je gegenereerde tests controleert;
- wanneer je AI gebruikt voor documentatie, en voor welk soort;
- hoe je gegenereerde documentatie controleert;
- hoe je met flaky tests omgaat;
- welke tools je naast AI gebruikt.

## X8 Communicatielab (@home) {#x8}

Kies drie technische situaties, uit je eigen ervaring of verzonnen:

1. Een bug in productie die je moet uitleggen aan een projectmanager zonder technische achtergrond.
2. Een beslissing over de architectuur die je moet verdedigen bij een ervaren developer.
3. Een nieuwe feature die je beschrijft in een pull request voor een reviewer die het project niet kent.

Schrijf voor elke situatie twee versies: één zonder AI en één met AI als hulpmiddel. Vergelijk: wat voegde AI toe, wat ontbrak, wat moest je aanpassen? Sluit af met een reflectie van maximaal 300 woorden.
