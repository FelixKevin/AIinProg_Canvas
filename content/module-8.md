---
module: 8
order: 1
moduleTitle: "8: AI in je dagelijkse workflow"
published: true
---

# Module 8: AI in je dagelijkse workflow

Tot nu toe gebruikte je AI vooral in een chatvenster. In deze module haal je AI naar je editor, je versiebeheer en je leerproces. Je leert ook werken met agents: AI die zelf stappen zet, en die je dus extra goed moet bewaken.

### Leerdoelen

Na deze module kan je:

- de soorten AI-integratie in een editor onderscheiden en voor een taak de juiste kiezen;
- een instructiebestand schrijven met de vaste context van een project;
- voor een vraag in een groot project bewust kiezen welke context je meegeeft;
- AI-code veilig integreren met branches, kleine commits en duidelijke commit messages;
- de risico's van agentic AI benoemen en een agent veilig inzetten;
- AI gebruiken om te leren in plaats van om werk te vermijden.

## 8.1 Van chatvenster naar werkomgeving

Tot nu toe gebruikte je AI vooral in een apart venster: je typt een prompt, je krijgt een antwoord en je kopieert wat bruikbaar is. Dat werkt, maar intussen merkte je waarschijnlijk hoe omslachtig dat is.

De volgende stap is AI in je werkomgeving: in je editor, in je terminal en in je workflow. Het verschil is niet alleen gemak. Het grootste verschil zit in wat het model ziet.

Een model in een chatvenster ziet enkel wat jij erin plakt. Een model in je editor ziet je volledige bestand en je foutmeldingen terwijl ze optreden. Het ziet ook wat je net aanpaste, en soms de structuur van je hele project.

Meer context geeft betere output. Maar het betekent ook dat het model meer van je werk te zien krijgt dan wanneer je zelf kopieert. Dat heeft gevolgen voor privacy (zie [7.2](./module-7.md#7_2)), voor de tools die je op je werk mag gebruiken en voor wat je deelt.

::: warning
**Let op:** controleer of je AI-integratie ook bestanden zoals `.env` meeleest. Sommige tools nemen alle bestanden in je project mee als context, tenzij je ze uitsluit.
:::

### Test jezelf 8.1 – Van chatvenster naar werkomgeving

```text
Sectie: 8.1
Type: meerkeuze
Vraag: Wat is het belangrijkste verschil tussen AI in een chatvenster en AI in je editor? Kies één antwoord.
Opties:
  A. AI in de editor is altijd duurder dan een chatvenster.
  B. Een chatvenster is nauwkeuriger, omdat het minder context heeft die het in de war kan brengen.
  C. AI in de editor ziet meer context, zoals je bestanden en foutmeldingen, zonder dat jij die moet kopiëren.
  D. Er is geen echt verschil, alleen in gebruiksgemak.
Juist: C
Feedback A: De prijs hangt af van de tool, niet van waar je ze gebruikt (zie 8.1).
Feedback B: Meer relevante context geeft meestal betere output (zie 8.1).
Feedback C: Juist. Dat geeft betere output, maar het model ziet ook meer van je werk (zie 8.1).
Feedback D: Het verschil in context is groot, zowel voor de output als voor je privacy (zie 8.1).

Sectie: 8.1
Type: meerkeuze
Vraag: Je opent een project in een editor met AI-integratie. Het project bevat een `.env`-bestand met een wachtwoord voor de database. Wat controleer je eerst? Kies één antwoord.
Opties:
  A. Of het `.env`-bestand de juiste syntax heeft.
  B. Of het wachtwoord sterk genoeg is.
  C. Niets: `.env`-bestanden worden altijd uitgesloten van AI-context.
  D. Of de AI-tool het `.env`-bestand als context meeneemt, en of dat mag volgens de regels van de tool en je organisatie.
Juist: D
Feedback A: De syntax is niet het risico. Het risico is dat het geheim naar een externe dienst gaat (zie 8.1).
Feedback B: Ook een sterk wachtwoord mag niet lekken (zie 8.1).
Feedback C: Dat verschilt per tool en per instelling. Controleer het (zie 8.1).
Feedback D: Juist. Meer context betekent ook dat meer van je werk de tool ziet (zie 8.1).
```

## 8.2 Soorten AI-integratie in de editor

Er bestaan verschillende soorten AI-integratie voor editors. Ze verschillen in wat ze doen, hoe ze context verzamelen en hoe diep ze in je werk ingrijpen. De belangrijkste zijn:

- **Inline completion** (automatisch aanvullen): terwijl je typt, stelt het model de volgende regel of het volgende blok voor. GitHub Copilot is het bekendste voorbeeld. Je aanvaardt een voorstel met Tab, of je typt verder. Het model gebruikt je huidige bestand en soms andere open bestanden.
- Chat in de editor: je voert een gesprek in een zijpaneel en verwijst daarin naar bestanden, functions of geselecteerde code. Cursor en de chat van GitHub Copilot in VS Code werken zo.
- Indexering van de codebase: sommige tools lezen je hele project in. Je kan dan vragen stellen zoals "Hoe werkt de authenticatie in dit project?" of "Waar wordt deze variable nog gebruikt?". Het antwoord gaat verder dan één bestand.
- Instructiebestanden: in een vast bestand zet je de context die voor je hele project geldt. De tool leest het bij elke vraag mee.

Een **instructiebestand** bevat de vaste afspraken van je project: de taal, de frameworks, de naamgeving, de manier van testen en de architectuur. Elke tool heeft zijn eigen formaat, zoals `AGENTS.md`, `CLAUDE.md` of regels in de map `.cursor/rules`. Zo'n bestand ziet er bijvoorbeeld zo uit:

```markdown
# Project instructions

- Language: JavaScript (Node.js 22), ES modules.
- Naming: camelCase for variables and functions, PascalCase for classes.
- Tests: node:test with node:assert, in the folder tests/.
- User-facing text is in Dutch (Belgium). Code and comments are in English.
- Never put secrets in code. Read them from environment variables.
```

Dit is de praktische vorm van wat je in 2.1 deed: context meegeven. Alleen doe je het nu één keer, in plaats van in elke prompt.

Dit betekent voor jou: zoek uit welke van deze mogelijkheden jouw tool ondersteunt. Een tool goed gebruiken begint bij begrijpen hoe ze werkt.

### Test jezelf 8.2 – Soorten AI-integratie

```text
Sectie: 8.2
Type: meerkeuze
Vraag: Wat is het voordeel van een instructiebestand tegenover de context telkens opnieuw in je prompt te zetten? Kies één antwoord.
Opties:
  A. Een instructiebestand wordt sneller verwerkt dan een prompt.
  B. De afspraken van je project worden automatisch bij elke vraag meegenomen, zonder dat je ze telkens herhaalt.
  C. Met een instructiebestand moet je de code niet meer reviewen.
  D. AI-tools herkennen enkel instructiebestanden in JSON.
Juist: B
Feedback A: Het gaat niet om snelheid, maar om consistentie (zie 8.2).
Feedback B: Juist. Vaste context zet je één keer vast (zie 8.2).
Feedback C: Ook met goede context blijft de output onbewezen tot je ze controleert (zie 8.2).
Feedback D: De meeste instructiebestanden zijn gewone Markdown (zie 8.2).

Sectie: 8.2
Type: koppelen
Vraag: Koppel elke taak aan de soort integratie die er het best bij past.
Paren:
  Je typt een for-loop en wil de volgende regel voorgesteld krijgen. → inline completion
  Je wil een geselecteerde function laten uitleggen. → chat in de editor
  Je wil weten waar in het project de authenticatie gebeurt. → indexering van de codebase
  Je wil dat elke vraag de naamgeving van je project volgt. → instructiebestand
Feedback: Elke soort integratie verschilt in hoeveel context ze gebruikt en hoe ze ingrijpt in je werk (zie 8.2).

Sectie: 8.2
Type: meerkeuze
Vraag: Je vraagt in een tool met indexering van de codebase: "Hoe werkt de authenticatie in dit project?" Wat is het voordeel van die indexering? Kies één antwoord.
Opties:
  A. Het antwoord is altijd correct.
  B. Je moet geen instructiebestand meer gebruiken.
  C. Het model antwoordt sneller, omdat het minder moet lezen.
  D. Het model baseert zich op de code van jouw project in plaats van op een algemeen antwoord.
Juist: D
Feedback A: Ook met indexering kan het antwoord fout of onvolledig zijn (zie 8.2).
Feedback B: Afspraken die niet in de code staan, zet je nog altijd in een instructiebestand (zie 8.2).
Feedback C: Indexering gaat niet over snelheid, maar over relevante context (zie 8.2).
Feedback D: Juist. Het model zoekt in je eigen code (zie 8.2).
```

## 8.3 Context in grote projecten

Je vraagt een model om een nieuwe function die e-mailadressen valideert. In `utils/validators.js` staan al drie gelijkaardige functions, maar dat bestand gaf je niet mee. Het model schrijft dus een vierde validatiefunction, in een andere stijl. Nu heb je duplicatie, en je moet ze zelf opsporen.

Een model ziet niet alles. Elk model heeft een **context window**: de hoeveelheid tekst die het in één keer kan verwerken. Voor een klein project is dat zelden een probleem. Voor een groot project met tientallen bestanden en duizenden regels is het kiezen van de juiste context een vaardigheid op zich.

Het model weet niet wat het niet ziet. Zitten de relevante functions in een bestand dat je niet meegaf, dan gebruikt het model ze niet, of vindt het ze opnieuw uit.

Stuur ook niet je volledige codebase mee. Dat vult het context window met code die er niet toe doet, en de output wordt minder gericht. Geef de bestanden mee die relevant zijn voor deze taak.

Strategieën voor grote projecten:

- Werk gericht: stel per vraag één module of één verantwoordelijkheid centraal.
- Gebruik samenvattingen: geef een korte beschrijving van de architectuur in plaats van vijf grote bestanden.
- Benoem afhankelijkheden: "Deze function gebruikt de class `UserRepository` uit `repositories/user.js`" kan het model niet raden als dat bestand er niet bij zit.
- Zet vaste context in een instructiebestand (zie [8.2](#8_2)): architectuur, conventies en frameworks horen daar, niet in elke prompt.

Context kiezen leer je door met grote codebases te werken. De eerste keer dat een model iets voorstelt wat al bestaat in een bestand dat je vergat, onthoud je het wel.

### Test jezelf 8.3 – Context in grote projecten

```text
Sectie: 8.3
Type: meerkeuze
Vraag: Je vraagt een nieuwe validatiefunction. In `utils/validators.js` staan al drie gelijkaardige functions, maar je gaf dat bestand niet mee. Wat is het waarschijnlijkste resultaat? Kies één antwoord.
Opties:
  A. Het model weigert, omdat er te weinig context is.
  B. Het model raadt zelf welke bestanden relevant zijn en leest ze.
  C. Het model schrijft een nieuwe function die de bestaande niet kent, met duplicatie of inconsistentie als gevolg.
  D. Het model schrijft een algemene function die altijd correct is.
Juist: C
Feedback A: Een model genereert bijna altijd iets, ook met te weinig context (zie 8.3).
Feedback B: Een model weet niet wat het niet ziet, tenzij je tool de codebase indexeert (zie 8.3).
Feedback C: Juist. Het model vindt opnieuw uit wat al bestaat (zie 8.3).
Feedback D: Een algemene function is niet per se correct, en past niet bij de bestaande code (zie 8.3).

Sectie: 8.3
Type: meerkeuze
Vraag: Hoe geef je vaste informatie over je project, zoals architectuur, frameworks en conventies, het best mee? Kies één antwoord.
Opties:
  A. Eén keer vastleggen in een instructiebestand dat de tool automatisch leest.
  B. Bij elke prompt opnieuw vermelden.
  C. Erop vertrouwen dat het model het uit de code afleidt.
  D. Enkel vermelden als het model een fout maakt.
Juist: A
Feedback A: Juist. Wat altijd geldt, zet je één keer vast (zie 8.3).
Feedback B: Dat werkt, maar je vergeet het gegarandeerd een keer (zie 8.3).
Feedback C: Afspraken staan niet altijd in de code, en het model ziet niet alle code (zie 8.3).
Feedback D: Dan corrigeer je achteraf wat je vooraf kon voorkomen (zie 8.3).

Sectie: 8.3
Type: meerkeuze
Vraag: Waarom stuur je beter niet je volledige codebase mee met een vraag? Kies één antwoord.
Opties:
  A. Een model mag geen volledige codebases lezen.
  B. Het context window raakt gevuld met code die er niet toe doet, en de output wordt minder gericht.
  C. Dan duurt het antwoord altijd langer dan een uur.
  D. Het model geeft dan enkel algemene antwoorden.
Juist: B
Feedback A: Het mag soms wel, maar het helpt meestal niet (zie 8.3).
Feedback B: Juist. Relevante context is beter dan veel context (zie 8.3).
Feedback C: De tijd is niet het probleem. De kwaliteit van de output is het probleem (zie 8.3).
Feedback D: Het antwoord wordt niet algemener, wel minder gericht (zie 8.3).
```

## 8.4 AI en versiebeheer

AI verandert hoe je code schrijft. Het zou ook moeten veranderen hoe je met versiebeheer omgaat.

Commit messages. Een commit message zegt wat er veranderde en waarom (zie [6.5](./module-6.md#6_5)). Bij AI-code is het "waarom" soms dun: je stuurde een prompt en integreerde de output. Beschrijf dan ook wat je zelf deed: welk probleem je oploste, welke keuzes je maakte en wat je aanpaste.

```text
add validation function
```

```text
Add e-mail validation with subdomain support

Generated a first version with AI. Adjusted the regular expression to
accept new top-level domains and added tests for empty input.
```

Branches als vangnet. Experimenteer je met AI-code die je nog niet vertrouwt, doe dat dan op een aparte **branch**. Dat is een aftakking van je code waarop je werkt zonder de hoofdversie te raken.

Mislukt het experiment, dan verwijder je de branch, en je main-branch bleef onaangeroerd. Dat is altijd goede praktijk, maar bij AI extra belangrijk, omdat de hoeveelheid gegenereerde code snel oploopt.

Review van AI-code. Vermeld in een pull request welke delen door AI gegenereerd zijn. Niet omdat die code slechter is, maar omdat de reviewer dan anders kijkt. De vraag is dan niet "Begrijpt de auteur dit?", maar "Is dit goed gecontroleerd?"

::: warning
**Let op:** commit nooit geheimen die in gegenereerde configuratie terechtkwamen (zie [3.3](./module-3.md#3_3)). Een geheim dat één keer gepusht is, moet je meteen vervangen, ook als je het in de volgende commit verwijdert.
:::

### Test jezelf 8.4 – AI en versiebeheer

```text
Sectie: 8.4
Type: meerkeuze
Vraag: Je integreert veel AI-code in een nieuw project. Wat is de verstandigste aanpak in Git? Kies één antwoord.
Opties:
  A. Werken op een aparte branch, met kleine commits per logisch geheel, zodat je makkelijk kan terugdraaien.
  B. Alles in één grote commit op main zetten, voor het overzicht.
  C. AI-code nooit committen tot een ervaren developer ze goedkeurt.
  D. Een aparte repository maken voor AI-code.
Juist: A
Feedback A: Juist. Een branch is je vangnet, kleine commits maken fouten makkelijk te vinden (zie 8.4).
Feedback B: Een grote commit maakt een fout moeilijk te vinden en terug te draaien (zie 8.4).
Feedback C: Een review is goed, maar niet committen betekent ook geen vangnet (zie 8.4).
Feedback D: AI-code hoort in het project waarvoor ze geschreven is, met dezelfde controles (zie 8.4).

Sectie: 8.4
Type: meerkeuze
Vraag: Je liet AI een function genereren die bestellingen sorteert op datum. Het model gebruikte de Amerikaanse datumnotatie. Jij paste dat aan naar de Belgische notatie en voegde een test toe voor een lege lijst. Welke commit message is het best? Kies één antwoord.
Opties:
  A. sort orders
  B. Add AI code
  C. Fix everything with dates
  D. Sort orders by date with DD/MM/YYYY input; AI-generated base, date parsing adapted and test for empty list added
Juist: D
Feedback A: Dit zegt niet wat je zelf aanpaste of waarom (zie 8.4).
Feedback B: Dit zegt niet wat de code doet (zie 8.4).
Feedback C: Te vaag: wat werd er aangepast, en waarom (zie 8.4)?
Feedback D: Juist. Wat de code doet, en wat jij aan de AI-output veranderde (zie 8.4).

Sectie: 8.4
Type: meerkeuze
Vraag: Waarom vermeld je AI-code expliciet in de beschrijving van een pull request? Kies één antwoord.
Opties:
  A. AI-code is altijd van mindere kwaliteit.
  B. De meeste organisaties verplichten het wettelijk.
  C. Zodat de reviewer controleert of de code goed gecontroleerd en aangepast is.
  D. Zodat de AI-tool weet welke code ze schreef.
Juist: C
Feedback A: AI-code is niet per se slechter. Ze vraagt een andere blik (zie 8.4).
Feedback B: Het gaat om een goede review, niet om een wettelijke plicht (zie 8.4).
Feedback C: Juist. De reviewer kijkt met een andere vraag naar de code (zie 8.4).
Feedback D: De tool leest je pull request niet om bij te houden wat ze schreef (zie 8.4).
```

## 8.5 Agentic AI: als AI zelf stappen zet

Tot nu toe was de werkwijze: jij vraagt, het model antwoordt, jij beslist. Dat verandert.

Bij **agentic AI** geeft het model niet één antwoord, maar zet het zelf een reeks stappen om een doel te bereiken. Zo'n systeem heet een **agent**. Het maakt bestanden aan, past bestaande bestanden aan, voert commando's uit, laat tests lopen, leest de resultaten en gaat verder. Jij geeft een doel, zoals "voeg deze feature toe", en de agent voert het uit.

Voorbeelden zijn de coding agent van GitHub Copilot, Cursor in agentmodus en Claude Code. De technologie verandert snel, dus deze lijst is nooit volledig actueel.

Een agent die zelfstandig bestanden aanpast en commando's uitvoert, kan in korte tijd veel meer veranderen dan je verwacht. Dat heeft gevolgen:

- Een agent kan fouten opstapelen. Is stap drie fout, dan bouwen stap vier en vijf daarop verder. Je merkt het pas op het einde.
- Je ziet niet altijd wat er tussendoor gebeurt. Je geeft een opdracht en krijgt een resultaat, maar de tussenstappen zijn minder zichtbaar.
- Een agent heeft soms meer rechten nodig dan je wil geven. Wie bestanden mag aanmaken en verwijderen, kan meer opruimen dan de bedoeling was.
- Een agent kan veel kosten. Een vage opdracht laat een agent veel stappen zetten, en bij betaalde tools betaal je elke stap.

Wat betekent dat voor jou?

- Gebruik een agent enkel voor taken die je volledig kan controleren en herstellen.
- Werk altijd met versiebeheer als vangnet, en commit voor je een agent start.
- Controleer het resultaat even grondig als andere AI-output, ook als de agent meldt dat alles gelukt is. "Gelukt" betekent "uitgevoerd", niet "correct".
- Begin klein. Test een agent eerst op een afgebakende taak, zodat je ziet hoe hij werkt en waar hij fouten maakt.

### Test jezelf 8.5 – Agentic AI

```text
Sectie: 8.5
Type: meerkeuze
Vraag: Wat is het fundamentele verschil tussen een agent en een model in een gewoon chatvenster? Kies één antwoord.
Opties:
  A. Een agent zet zelf meerdere stappen om een doel te bereiken. Een model in een chatvenster geeft één antwoord op één vraag.
  B. Een agent is sneller, omdat hij meerdere prompts tegelijk verwerkt.
  C. Een agent werkt enkel in de cloud, een chatvenster enkel lokaal.
  D. Een agent kan geen code schrijven, enkel plannen.
Juist: A
Feedback A: Juist. Daardoor kan een agent in korte tijd veel veranderen (zie 8.5).
Feedback B: Het verschil zit in de zelfstandigheid, niet in de snelheid (zie 8.5).
Feedback C: Beide kunnen lokaal of in de cloud werken (zie 8.5).
Feedback D: Een agent schrijft code, voert commando's uit en laat tests lopen (zie 8.5).

Sectie: 8.5
Type: meerkeuze
Vraag: Je wil een agent unit tests laten genereren voor een bestaande module. Wat is een verstandige eerste stap? Kies één antwoord.
Opties:
  A. De agent meteen op de volledige codebase loslaten, voor maximale dekking.
  B. De agent eerst testen op één kleine function, om te zien hoe hij werkt en waar zijn grenzen liggen.
  C. De agent enkel gebruiken als je al honderd zelfgeschreven tests hebt.
  D. Wachten tot de aanbieder de tool officieel stabiel verklaart.
Juist: B
Feedback A: Fouten stapelen zich op. Op een grote codebase vind je ze moeilijk terug (zie 8.5).
Feedback B: Juist. Begin klein (zie 8.5).
Feedback C: Zo'n drempel is niet nodig. Begin klein en controleer (zie 8.5).
Feedback D: Ook een stabiele tool vraagt controle. Begin klein (zie 8.5).

Sectie: 8.5
Type: juist/fout
Vraag: Als een agent meldt dat een taak gelukt is, is het resultaat correct.
Juist: fout
Feedback: "Gelukt" betekent "uitgevoerd", niet "correct". Controleer het resultaat even grondig als andere AI-output (zie 8.5).
```

## 8.6 AI als leerpartner

Je begrijpt recursie niet goed. Je kan een model vragen om een recursieve function te schrijven. Of je legt je eigen uitleg voor: "Ik denk dat recursie zo werkt: … Klopt dat?" Het eerste levert code op. Het tweede levert begrip op.

Dat is het verschil tussen twee manieren van AI gebruiken. AI als productiemiddel gebruik je om sneller output te maken. AI als leerpartner gebruik je om je begrip te verdiepen: niet de output is het doel, maar wat je leert.

Zo zet je AI in als leerpartner:

- Vraag uitleg en controleer ze daarna. Vraag het model om een concept uit te leggen, en zoek daarna een tweede bron die bevestigt dat de uitleg klopt. Dat zoeken leert je meer dan de uitleg zelf.
- Laat je redenering beoordelen. Vraag geen oplossing, maar feedback op hoe jij denkt: "Ik denk dat het probleem hier zit. Klopt dat?" of "Wat is het nadeel van mijn aanpak?" Jij stuurt het gesprek.
- Laat een fout analyseren, niet oplossen. Vraag niet "Fix dit", maar "Wat kunnen oorzaken zijn van dit gedrag?". Onderzoek de oorzaken zelf, test je hypothesen (zie [5.3](./module-5.md#5_3)), en vergelijk pas daarna met de analyse van het model.
- Toets je begrip. Leg je eigen uitleg voor, bijvoorbeeld van het verschil tussen een interface en een abstract class, en vraag wat je mist. Het model reageert dan op jouw begrip.

Leert een student met AI, of vermijdt hij of zij er werk mee? Het verschil zit niet in de tool. Het zit in de vraag die je stelt.

### Test jezelf 8.6 – AI als leerpartner

```text
Sectie: 8.6
Type: meerkeuze
Vraag: Je begrijpt recursie nog niet goed. Hoe gebruik je AI het best als leerpartner? Kies één antwoord.
Opties:
  A. Het model een recursieve function laten schrijven en die bestuderen.
  B. Het model alle recursieve functions in je project laten opsporen en documenteren.
  C. Een samenvatting over recursie laten genereren en die uit het hoofd leren.
  D. Een uitleg vragen, daarna zelf zonder AI een recursieve function schrijven, en het model om feedback op jouw versie vragen.
Juist: D
Feedback A: Code lezen helpt, maar je leert meer als je zelf schrijft en feedback krijgt (zie 8.6).
Feedback B: Dat levert documentatie op, geen begrip (zie 8.6).
Feedback C: Een samenvatting uit het hoofd leren is passief. Je weet niet of je het begrijpt (zie 8.6).
Feedback D: Juist. Je doet het werk zelf, en het model reageert op jouw begrip (zie 8.6).

Sectie: 8.6
Type: meerkeuze
Vraag: Je hebt een bug. Welke vraag aan een model levert het meeste leerwinst op? Kies één antwoord.
Opties:
  A. "Fix deze bug."
  B. "Wat kunnen oorzaken zijn van dit gedrag?", waarna je de oorzaken zelf onderzoekt.
  C. "Herschrijf deze function zodat ze werkt."
  D. "Geef me een versie zonder bugs."
Juist: B
Feedback A: De bug verdwijnt misschien, maar je weet niet waarom (zie 8.6).
Feedback B: Juist. Je onderzoekt en test zelf, en begrijpt daarna de oorzaak (zie 8.6).
Feedback C: Dat levert werkende code op, geen begrip van de fout (zie 8.6).
Feedback D: Dat is een vraag om werk te vermijden, niet om te leren (zie 8.6).
```

## Samenvatting

Nieuwe termen:

- inline completion: het model stelt terwijl je typt de volgende regel of het volgende blok voor.
- instructiebestand: een bestand met de vaste afspraken van een project, dat een AI-tool bij elke vraag meeleest.
- context window: de hoeveelheid tekst die een model in één keer kan verwerken.
- branch: een aftakking van je code waarop je werkt zonder de hoofdversie te raken.
- agentic AI: AI die zelf een reeks stappen zet om een doel te bereiken.
- agent: een systeem dat agentic AI uitvoert.

Belangrijkste regels:

- AI in je editor ziet meer context. Dat geeft betere output, maar controleer wat de tool meeleest.
- Zet vaste context in een instructiebestand.
- Geef bij een vraag de relevante bestanden mee, niet je hele codebase en niet te weinig.
- Werk met branches en kleine commits, en beschrijf in je commit message wat je zelf aanpaste.
- Gebruik een agent enkel voor taken die je kan controleren en herstellen. "Gelukt" is niet "correct".
- Gebruik AI om te leren: vraag feedback op je redenering, niet enkel een oplossing.

## Veelgemaakte fouten

- Een AI-integratie aanzetten zonder te controleren of ze je `.env` meeleest.
- Een nieuwe function vragen zonder het bestand met de bestaande functions mee te geven. Het resultaat is een vierde validatiefunction die niemand nodig had.
- AI-code rechtstreeks op main committen. Mislukt het, dan is er geen vangnet.
- Een agent loslaten op een project zonder eerst te committen. Gaat het mis, dan kan je niet terug.
- Een model vragen om je oefeningen op te lossen in plaats van om je redenering te beoordelen.

::: oefening
[Oefeningen module 8](./module-8-oefeningen.md)
:::
