---
module: 3
order: 1
moduleTitle: "3: Code genereren"
published: true
---

# Module 3: Code genereren

Code genereren is de bekendste toepassing van AI in development. In deze module leer je waar het tijd wint: bij functions, prototypes, boilerplate en configuratie. Je leert ook hoe je gegenereerde code controleert en stap voor stap in je project opneemt.

### Leerdoelen

Na deze module kan je:

- uitleggen waarom je gegenereerde code moet begrijpen voor je ze verder gebruikt;
- in gegenereerde configuratie opsporen of er geheimen hardcoded staan;
- gegenereerde code aanpassen aan de naamgeving, structuur en libraries van een bestaand project;
- typische tekortkomingen van AI-code herkennen, zoals onnodige complexiteit, logicafouten en Amerikaanse aannames;
- gegenereerde code in kleine stappen integreren en na elke stap controleren.

## 3.1 Functions en prototypes genereren

Je hebt een idee en je wil snel weten of het werkt. Vroeger betekende dat: beginnen typen, documentatie lezen en na een halve dag een eerste ruwe versie hebben. Nu schrijf je een prompt en heb je in dertig seconden een werkende eerste versie.

AI genereert op basis van een beschrijving functions, losse stukken code of volledige **prototypes**: eerste werkende versies om een idee te testen of te tonen. In een vroege fase van een project is dat erg nuttig. Je bouwt snel iets tastbaars voor een collega of een klant, zonder elke regel zelf te typen.

En dan de herhaling die je intussen verwacht: je moet begrijpen wat de gegenereerde code doet en waarom ze zo opgebouwd is.

In de praktijk is de verleiding groot om te kopiëren en verder te gaan. Je ziet het probleem niet meteen, want de code werkt. Het komt pas later naar boven. Drie weken later duikt er een bug op, vraagt een collega hoe iets werkt, of laat de structuur niet toe dat je een feature uitbreidt.

Code begrijpen is dus geen luxe. Het is de minimumvoorwaarde om AI verantwoord te gebruiken.

### Test jezelf 3.1 – Functions en prototypes genereren

```text
Sectie: 3.1
Type: meerkeuze
Vraag: Wanneer is AI-gegenereerde code het nuttigst bij een prototype? Kies één antwoord.
Opties:
  A. Als je de code meteen in productie wil zetten zonder aanpassingen.
  B. Als je snel een eerste versie wil om te testen of te tonen, die je daarna zelf verder uitwerkt.
  C. Als een collega de code later toch zal moeten begrijpen, zodat jij dat niet hoeft te doen.
  D. Als het project te complex is om er zelf aan te beginnen.
Juist: B
Feedback A: Een prototype is een eerste versie om een idee te testen, geen code voor productie (zie 3.1).
Feedback B: Juist. AI levert snel iets tastbaars, dat jij daarna begrijpt en uitwerkt (zie 3.1).
Feedback C: Wie code in het project zet, moet ze zelf begrijpen. Dat schuif je niet door (zie 3.1).
Feedback D: Kan je een project zelf niet overzien, dan kan je de gegenereerde code ook niet controleren (zie 3.1).

Sectie: 3.1
Type: meerkeuze
Vraag: Je liet een prototype genereren voor een klantpresentatie, en de code werkt. Wat doe je voor je het prototype verder ontwikkelt? Kies één antwoord.
Opties:
  A. Het prototype ongewijzigd gebruiken als basis voor de echte codebase.
  B. Het model vragen om het prototype om te zetten naar code van productiekwaliteit.
  C. Het prototype aan de klant tonen en daarna weggooien.
  D. De code lezen, begrijpen en beoordelen of de structuur geschikt is om verder op te bouwen.
Juist: D
Feedback A: Werkende code is niet per se code waarop je kan verder bouwen. Lees en beoordeel ze eerst (zie 3.1).
Feedback B: Ook die nieuwe versie moet je begrijpen en controleren. Het probleem verschuift alleen (zie 3.1).
Feedback C: Dat kan, maar de vraag is hoe je het prototype verder ontwikkelt (zie 3.1).
Feedback D: Juist. De problemen van niet-begrepen code komen pas later naar boven (zie 3.1).
```

## 3.2 Boilerplate en design patterns

Eerlijk: niemand schrijft graag de twintigste CRUD-operatie van de dag. Bij configuratiebestanden, standaardstructuren en herhalende endpoints zit je vaardigheid niet in het typen, maar in begrijpen hoe het geheel werkt.

Zulke boilerplate (zie [1.6](./module-1.md#1_6)) is waarschijnlijk de sterkste toepassing van AI in development. De structuur is voorspelbaar, je controleert de output snel en de tijdwinst is groot.

AI helpt ook bij **design patterns** (ontwerppatronen): bekende, herbruikbare oplossingen voor een vaak voorkomend ontwerpprobleem, zoals factory, singleton, observer of repository. Je beschrijft het probleem en het model stelt een implementatie voor. Dat werkt, op voorwaarde dat je genoeg context over je project meegeeft.

Het risico is subtiel: een standaardoplossing past niet in elke situatie. Een gegenereerde CRUD-implementatie gaat ervan uit dat je datamodel, je naamgeving en je foutafhandeling de meest gangbare keuzes volgen. Dat is zelden helemaal zo.

Gebruik boilerplate dus als vertrekpunt, niet als eindproduct.

### Test jezelf 3.2 – Boilerplate en design patterns

```text
Sectie: 3.2
Type: meerkeuze
Vraag: Waarom is boilerplate een sterke toepassing voor AI? Kies één antwoord.
Opties:
  A. Boilerplate bevat geen logica, dus er kan niets fout in zitten.
  B. Boilerplate moet je nooit aanpassen aan je project.
  C. De structuur is voorspelbaar en je controleert de output snel.
  D. Boilerplate is in elke context correct.
Juist: C
Feedback A: Ook in boilerplate kunnen fouten en verkeerde aannames zitten (zie 3.2).
Feedback B: Een gegenereerde implementatie volgt de gangbare keuzes, niet die van jouw project. Aanpassen hoort erbij (zie 3.2).
Feedback C: Juist. Voorspelbare code is snel te controleren, en dat maakt de tijdwinst echt (zie 3.2).
Feedback D: Een standaardoplossing past niet in elke situatie (zie 3.2).

Sectie: 3.2
Type: meerkeuze
Vraag: Je laat een design pattern genereren. Wat is de belangrijkste extra stap tegenover het genereren van een losse function? Kies één antwoord.
Opties:
  A. Genoeg context over je project meegeven, zodat de output past bij je architectuur.
  B. Het model vragen om het meest gebruikte patroon te kiezen.
  C. Design patterns nooit door AI laten genereren.
  D. Dezelfde prompt twee keer sturen en de kortste versie kiezen.
Juist: A
Feedback A: Juist. Een patroon moet passen bij de rest van je project, en dat weet het model alleen als jij het vertelt (zie 3.2).
Feedback B: Het meest gebruikte patroon is niet per se het juiste voor jouw probleem (zie 3.2).
Feedback C: Dat is te streng. Met genoeg context is AI hier nuttig (zie 3.2).
Feedback D: Korter is niet beter. Zonder context past geen van beide versies per se bij je project (zie 3.2).
```

## 3.3 Configuratie en setup genereren

Je start een nieuw project. Je weet wat je wil bouwen, maar de setup kost tijd: een Dockerfile, een CI/CD-configuratie, linting, een `package.json` en environment variables. Die tijd steek je liever in de echte code.

AI is hier nuttig. Je beschrijft je technologieën en wat je nodig hebt, en het model genereert een eerste configuratie. Dat scheelt veel tijd, zeker bij tools die je nog niet goed kent.

Configuratiebestanden zijn wel geen onschuldige code. Een fout of een verouderde instelling is moeilijk op te sporen en duikt vaak pas laat op. Er is ook een groter risico: geheimen die in je code belanden. Zo ziet gegenereerde configuratie er vaak uit:

```js
// config.js
export const config = {
  databaseUrl: "postgres://admin:S3cret@localhost:5432/shop",
};
```

Het wachtwoord van de database staat letterlijk in de code. Komt dit bestand in Git, dan staat het wachtwoord in de geschiedenis van je repository, ook als je het later verwijdert. Een geheim dat ooit publiek stond, moet je als gelekt beschouwen en vervangen.

Gebruik daarom een **environment variable** (omgevingsvariabele): een waarde die je programma uit de omgeving leest, niet uit de code.

```js
// config.js
export const config = {
  databaseUrl: process.env.DATABASE_URL,
};
```

De waarde zelf staat dan in een `.env`-bestand, en dat bestand staat in je `.gitignore`.

Controleer bij elke gegenereerde configuratie:

- Staan er geen wachtwoorden, API-sleutels of tokens letterlijk in de bestanden?
- Staat `.env`, of het equivalent in je technologie, in de `.gitignore`?
- Zijn de versies van de dependencies actueel en zonder bekende kwetsbaarheden?
- Kloppen de instellingen voor jouw omgeving, en niet alleen voor een algemene setup?

::: warning
**Let op:** een gegenereerd configuratiebestand is een startpunt voor een review. Push het nooit ongelezen naar je repository.
:::

### Test jezelf 3.3 – Configuratie en setup genereren

```text
Sectie: 3.3
Type: meerkeuze
Vraag: Je liet een configuratie met een `.env`-bestand genereren voor een nieuw project. Wat controleer je eerst? Kies één antwoord.
Opties:
  A. Of het bestand de juiste naam heeft.
  B. Of de variables alfabetisch gesorteerd zijn.
  C. Of het bestand werkt op alle besturingssystemen.
  D. Of er geen echte wachtwoorden of sleutels in staan en of het bestand uitgesloten is van versiebeheer.
Juist: D
Feedback A: Een verkeerde naam merk je snel. Een gelekt geheim kan je niet meer terugdraaien (zie 3.3).
Feedback B: De volgorde maakt niet uit voor de werking of de veiligheid (zie 3.3).
Feedback C: Dat is nuttig, maar een gelekt geheim is een groter risico (zie 3.3).
Feedback D: Juist. Een geheim in Git blijft in de geschiedenis staan, ook als je het later verwijdert (zie 3.3).

Sectie: 3.3
Type: meerkeuze
Vraag: Welk risico speelt vooral bij gegenereerde configuratie, en minder bij gewone functions? Kies één antwoord.
Opties:
  A. De code kan syntaxfouten bevatten.
  B. Geheimen zoals wachtwoorden of API-sleutels kunnen in de code belanden.
  C. De code kan moeilijk leesbaar zijn.
  D. Dezelfde prompt kan andere output geven.
Juist: B
Feedback A: Syntaxfouten kunnen in elke code zitten, en je merkt ze meestal meteen (zie 3.3).
Feedback B: Juist. Configuratie bevat de verbinding met databases en externe diensten, en dus vaak geheimen (zie 3.3).
Feedback C: Dat geldt voor alle gegenereerde code (zie 3.3).
Feedback D: Dat geldt voor alle output van een model, niet specifiek voor configuratie (zie 3.3).

Sectie: 3.3
Type: meerkeuze
Vraag: Welke regel hoort in de `.gitignore` om het geheim uit het voorbeeld van 3.3 buiten Git te houden? Kies één antwoord.
Opties:
  A. config.js
  B. .env
  C. package.json
  D. process.env
Juist: B
Feedback A: `config.js` bevat na de aanpassing geen geheim meer, en de rest van het project heeft het bestand nodig (zie 3.3).
Feedback B: Juist. De echte waarde staat in `.env`, en dat bestand blijft buiten Git (zie 3.3).
Feedback C: `package.json` bevat de dependencies, geen geheimen, en hoort in je repository (zie 3.3).
Feedback D: `process.env` is geen bestand, maar de manier waarop je programma environment variables leest (zie 3.3).
```

## 3.4 Gegenereerde code inpassen in je project

Je project gebruikt `getUserById`, en het model levert `get_user_by_id`. Het model weet niet hoe jouw project eruitziet, welke afspraken je team maakte of welke libraries je al gebruikt. Tenzij je dat in je prompt zet, genereert het code volgens de meest gangbare keuzes.

Het gevolg: gegenereerde code ziet er bijna altijd anders uit dan de rest van je codebase. Ze werkt misschien, maar ze past niet. Dat maakt reviews moeilijker en vertraagt de verdere ontwikkeling.

Controleer voor je gegenereerde code integreert minstens deze punten:

- Naamgeving: volgt de code de conventie van je project, zoals camelCase voor variables en functions en PascalCase voor classes?
- Projectstructuur: staan nieuwe bestanden in de juiste map, en volgt de code de opbouw van de bestaande modules?
- Architectuur: volgt de code het patroon van je project, zoals MVC of een gelaagde architectuur? Code die dat patroon negeert, veroorzaakt technical debt.
- Bestaande libraries: gebruikt je project al een HTTP-client, een library voor validatie of een ORM? Dan gebruikt de nieuwe code die ook, en geen alternatief dat het model toevallig kent.
- Requirements en teamafspraken: moet de code voldoen aan eisen die niet in je prompt stonden?

Het doel is nooit om AI-code ongewijzigd over te nemen. Je gebruikt ze als vertrekpunt en integreert ze bewust.

Dit betekent voor jou: zet de conventies van je project in je prompt (zie [2.1](./module-2.md#2_1)). Wat je vooraf zegt, moet je achteraf niet aanpassen.

### Test jezelf 3.4 – Gegenereerde code inpassen

```text
Sectie: 3.4
Type: meerkeuze
Vraag: Je project gebruikt camelCase, de gegenereerde code `snake_case`. Wat doe je? Kies één antwoord.
Opties:
  A. De code zo overnemen: naamgeving heeft geen invloed op de werking.
  B. De namen aanpassen naar camelCase, zelf of met een vervolgprompt die de conventie vermeldt.
  C. De gegenereerde code in een apart bestand zetten, los van de rest van het project.
  D. Het hele project omzetten naar `snake_case`, zodat alles past bij de AI-output.
Juist: B
Feedback A: Een inconsistente naamgeving maakt reviews en verdere ontwikkeling moeilijker (zie 3.4).
Feedback B: Juist. De nieuwe code past zich aan het project aan, niet omgekeerd (zie 3.4).
Feedback C: Een apart bestand verbergt het probleem, maar lost het niet op (zie 3.4).
Feedback D: De conventie van het project bepaalt de stijl, niet de output van een model (zie 3.4).

Sectie: 3.4
Type: meerkeuze
Vraag: Waarom vermeld je in je prompt welke libraries je project al gebruikt? Kies één antwoord.
Opties:
  A. Anders genereert het model code in een andere programmeertaal.
  B. Libraries moet je altijd vermelden voor de licentie.
  C. Zodat het model geen alternatieve library gebruikt voor iets wat je project al doet.
  D. Een model kan zonder lijst van dependencies geen code genereren.
Juist: C
Feedback A: De taal bepaal je met de context in je prompt, niet met de lijst van libraries (zie 3.4).
Feedback B: Licenties zijn belangrijk (module 7), maar daarom vermeld je ze niet in een prompt (zie 3.4).
Feedback C: Juist. Twee libraries voor hetzelfde doel maken je project groter en minder consistent (zie 3.4).
Feedback D: Een model genereert ook zonder die lijst code, alleen met de gangbaarste library (zie 3.4).

Sectie: 3.4
Type: categoriseren
Vraag: Bij welk controlepunt uit 3.4 hoort elk probleem?
Indeling:
  De code gebruikt `get_user_by_id` in een project met camelCase. → naamgeving
  Het nieuwe bestand staat in de hoofdmap in plaats van in `services/`. → projectstructuur
  De code gebruikt fetch, terwijl het project overal axios gebruikt. → bestaande libraries
  De controller spreekt de database rechtstreeks aan, terwijl het project een aparte laag daarvoor heeft. → architectuur
Feedback: Elk punt gaat over hoe goed nieuwe code past bij wat er al is (zie 3.4).
```

## 3.5 Typische tekortkomingen van AI-code

AI is snel en altijd beschikbaar. Het klaagt niet als je om vier uur 's nachts voor de zevende keer dezelfde function vraagt. Ook niet als je niet meer weet wat je al liet genereren.

Maar een model voorspelt code op basis van patronen, en weet niet of die past in jouw project (zie [1.2](./module-1.md#1_2)). Dat zie je terug in de kwaliteit van de code. Deze tekortkomingen moet je zelf opsporen en verbeteren:

- Onnodig complexe oplossingen. Een model kiest niet altijd de eenvoudigste aanpak. Soms krijg je een uitgebreide constructie voor iets wat in vijf regels kan.
- Inefficiënte implementaties. Werkende code is niet per se efficiënte code. AI-code bevat soms overbodige loops, dubbele controles of een datastructuur die niet past.
- Logicafouten. Een verkeerde operator, een fout in een condition of een off-by-one error komt in AI-code geregeld voor. Zo'n fout zie je alleen als je de code actief leest.
- Onvolledige foutafhandeling. Een model dekt standaard de happy path (zie [2.4](./module-2.md#2_4)). Ongeldige input en foutsituaties slaat het vaak over.
- Culturele aannames. Het grootste deel van de trainingsdata is Engelstalig en Amerikaans. Datumnotaties, decimaaltekens, btw en postcodes kloppen daardoor niet altijd voor België.

Hoe sluipend zo'n aanname is, zie je hier:

```js
const date = new Date("03/04/2026");
console.log(date.getMonth() + 1);
```

```output
3
```

Voor een Belgische gebruiker is 03/04/2026 de derde april, dus maand 4. JavaScript leest deze notatie in Node.js als maand/dag/jaar en geeft maand 3. De code crasht niet, en net daarom valt de fout niet op.

Al deze tekortkomingen kan je vinden, maar enkel als je de output actief en kritisch leest. Wie alleen controleert of de code draait, mist de helft.

Dit betekent voor jou: beoordeel je AI-output alleen op "werkt het of niet", dan kan een werkgever net zo goed een AI-abonnement nemen. Net die kritische, inhoudelijke beoordeling maakt jou als developer onmisbaar.

### Test jezelf 3.5 – Typische tekortkomingen

```text
Sectie: 3.5
Type: meerkeuze
Vraag: Een gegenereerde function werkt correct, maar gebruikt twee geneste loops waar één loop volstaat. Wat is het probleem? Kies één antwoord.
Opties:
  A. De function bevat een syntaxfout.
  B. Er is geen probleem: werkende code is goede code.
  C. De function geeft voor grote input een ander resultaat.
  D. De implementatie is inefficiënt en wordt traag bij grote hoeveelheden data.
Juist: D
Feedback A: De function werkt, dus er is geen syntaxfout (zie 3.5).
Feedback B: Werkende code is niet per se efficiënte code (zie 3.5).
Feedback C: Het resultaat blijft hetzelfde. Alleen de snelheid lijdt eronder (zie 3.5).
Feedback D: Juist. Overbodige loops zijn een typische tekortkoming van AI-code (zie 3.5).

Sectie: 3.5
Type: meerkeuze
Vraag: Wat is het probleem met deze code in een Belgische toepassing? Kies één antwoord.
Code:
  const date = new Date("03/04/2026");
  console.log(date.getMonth() + 1);
Opties:
  A. De code crasht, omdat de datum ongeldig is.
  B. JavaScript leest de datum als maand/dag/jaar, terwijl een Belgische gebruiker dag/maand/jaar bedoelt.
  C. `getMonth()` begint te tellen bij 1, dus de `+ 1` is te veel.
  D. Er is geen probleem: de code toont 4, de maand april.
Juist: B
Feedback A: De code crasht niet. Ze geeft een fout resultaat, en daarom valt het probleem niet op (zie 3.5).
Feedback B: Juist. Dat is een culturele aanname: de Amerikaanse notatie is de standaard (zie 3.5).
Feedback C: `getMonth()` begint bij 0. De `+ 1` is dus nodig (zie 3.5).
Feedback D: De code toont 3, de maand maart (zie 3.5).

Sectie: 3.5
Type: meerkeuze
Vraag: Welke tekortkoming in AI-code is het gevaarlijkst? Kies één antwoord.
Opties:
  A. Syntaxfouten, omdat de code dan meteen crasht.
  B. Slechte namen, omdat ze de leesbaarheid verlagen.
  C. Logicafouten, omdat ze vaak pas opvallen bij specifieke input of randgevallen.
  D. Ontbrekende comments, omdat de code dan moeilijker te onderhouden is.
Juist: C
Feedback A: Een crash zie je meteen. Dat maakt syntaxfouten net minder gevaarlijk (zie 3.5).
Feedback B: Slechte namen zijn vervelend, maar zichtbaar bij het lezen (zie 3.5).
Feedback C: Juist. Een logicafout geeft een fout resultaat zonder foutmelding (zie 3.5).
Feedback D: Ontbrekende comments zijn vervelend, maar veranderen niets aan de werking (zie 3.5).
```

## 3.6 Iteratief integreren

Je gegenereerde code werkt en is aangepast aan de conventies van je project. Klaar om te integreren? Ja, maar niet in één keer.

Code integreer je in kleine stappen, of ze nu door AI geschreven is of niet. Bij elke stap voeg je één afgebakend stuk toe, test je het en controleer je of alles nog werkt. Pas dan ga je verder.

Dat principe is niet nieuw. Bij AI-code is het wel extra belangrijk, omdat de kans op subtiele fouten groter is dan bij code die je zelf schreef en doordacht.

Na elke stap controleer je vier dingen:

- Technische correctheid: draait de code zonder fouten, en geeft ze de verwachte output voor gangbare input en randgevallen?
- Bestaande tests: slagen alle tests nog? Faalt een bestaande test na een wijziging, dan is er iets mis, ook als de nieuwe code op zich correct lijkt.
- Structuur: past de code nog bij de rest van het project, zonder ongewenste afhankelijkheden of conflicten?
- Requirements: doet de code wat er gevraagd werd? Niet wat het model ervan maakte, maar wat de oorspronkelijke opdracht was.

Kleine stappen maken problemen makkelijk te lokaliseren. Loopt er na een kleine wijziging iets mis, dan weet je waar je moet zoeken. Voeg je vijfhonderd regels tegelijk toe, dan zoek je in vijfhonderd regels die je niet zelf schreef.

### Test jezelf 3.6 – Iteratief integreren

```text
Sectie: 3.6
Type: meerkeuze
Vraag: Je voegt een groot stuk AI-code toe in één commit. Twee dagen later falen drie unit tests. Wat is het probleem met deze werkwijze? Kies één antwoord.
Opties:
  A. Unit tests werken niet met AI-gegenereerde code.
  B. Er is geen probleem: falende tests na een grote commit zijn normaal.
  C. Het model had de tests samen met de code moeten genereren.
  D. Omdat alles in één stap kwam, is moeilijk te achterhalen welk stuk de tests laat falen.
Juist: D
Feedback A: Unit tests werken voor alle code, ook voor AI-code (zie 3.6).
Feedback B: Falende tests wijzen altijd op een probleem. Een grote commit maakt het alleen moeilijker te vinden (zie 3.6).
Feedback C: Ook gegenereerde tests lossen het probleem niet op: de fout zit ergens in een groot stuk code (zie 3.6).
Feedback D: Juist. Kleine stappen maken een fout makkelijk te lokaliseren (zie 3.6).

Sectie: 3.6
Type: meerkeuze
Vraag: Na het toevoegen van AI-code slagen alle bestaande tests. Is de integratie daarmee geslaagd? Kies één antwoord.
Opties:
  A. Niet per se: de code kan werken zonder te doen wat gevraagd werd, en de tests dekken misschien niet alles.
  B. Ja: als de tests slagen, is de code correct.
  C. Ja: als zowel de nieuwe als de bestaande tests slagen, moet je niets meer controleren.
  D. Nee: AI-code is nooit volledig correct.
Juist: A
Feedback A: Juist. Tests zijn één controle. Je kijkt ook naar structuur en requirements (zie 3.6).
Feedback B: Tests bewijzen alleen dat de geteste gevallen werken (zie 3.6).
Feedback C: Ook dan controleer je of de code past bij de structuur en doet wat gevraagd werd (zie 3.6).
Feedback D: AI-code kan wel correct zijn. Je moet het alleen aantonen (zie 3.6).

Sectie: 3.6
Type: ordenen
Vraag: Zet de stappen voor het integreren van één stuk code in de juiste volgorde.
Volgorde:
  Voeg één afgebakend stuk code toe.
  Voer de code uit en test ze, ook met randgevallen.
  Controleer of alle bestaande tests nog slagen.
  Ga verder met het volgende stuk.
Feedback: Eerst test je het nieuwe stuk, daarna controleer je of de rest nog werkt. Pas dan ga je verder (zie 3.6).
```

## Samenvatting

Nieuwe termen:

- prototype: een eerste werkende versie om een idee te testen of te tonen.
- design pattern: een bekende, herbruikbare oplossing voor een vaak voorkomend ontwerpprobleem.
- environment variable: een waarde die je programma uit de omgeving leest, niet uit de code.

Belangrijkste regels:

- Begrijp gegenereerde code voor je ze verder gebruikt. Werkende code is geen bewijs.
- Boilerplate en design patterns zijn sterke toepassingen, maar alleen als vertrekpunt.
- Zet geen geheimen in code. Gebruik environment variables en zet `.env` in je `.gitignore`.
- Pas gegenereerde code aan je project aan: naamgeving, structuur, architectuur, libraries en requirements.
- Lees AI-code actief op complexiteit, efficiëntie, logicafouten, foutafhandeling en culturele aannames.
- Integreer in kleine stappen en controleer na elke stap.

## Veelgemaakte fouten

- Een prototype ongelezen als basis voor het echte project gebruiken. Drie weken later blijkt de structuur niet uitbreidbaar.
- Een gegenereerd configuratiebestand met een wachtwoord erin pushen. Het wachtwoord blijft in de geschiedenis van Git staan, ook na verwijderen.
- Een tweede library binnenhalen omdat het model die gebruikt. Je project gebruikt axios, de nieuwe code fetch: nu heb je twee manieren om hetzelfde te doen.
- Alleen controleren of de code draait. `new Date("03/04/2026")` draait perfect en geeft toch de verkeerde maand.
- Honderden regels tegelijk integreren. Faalt er daarna een test, dan weet je niet waar je moet zoeken.

::: oefening
[Oefeningen module 3](./module-3-oefeningen.md)
:::
