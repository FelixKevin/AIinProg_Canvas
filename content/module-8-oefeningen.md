---
module: 8
order: 2
tocMode: page
tocLabel: Oefeningen
published: false
---

# Oefeningen module 8

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 8. De extra-reeks gaat dieper in op context, agents en leren met AI.

## E1 Twee AI-integraties vergelijken {#e1 .easy}

Elke tool biedt andere soorten integratie (zie [8.2](./module-8.md#8_2)).

Zoek de documentatie op van twee AI-tools voor programmeren, zoals GitHub Copilot, Cursor, Windsurf of Tabnine. Beantwoord per tool, met een link naar de bron:

- Welke soorten integratie biedt de tool: inline completion, chat, indexering van de codebase, instructiebestanden?
- Welke editors ondersteunt ze?
- Wat gebeurt er met je code: wordt ze bewaard of gebruikt om modellen te trainen?

## E2 Een instructiebestand schrijven {#e2 .easy}

Een instructiebestand geeft een AI-tool de vaste context van je project (zie [8.2](./module-8.md#8_2)).

1. Kies een bestaand of fictief project.
2. Schrijf een instructiebestand in het formaat van een tool naar keuze, zoals `AGENTS.md` of `CLAUDE.md`. Vermeld minstens de taal, de frameworks, de naamgeving, de manier van testen en wat nooit mag.
3. Stel dezelfde vraag aan de tool met en zonder het instructiebestand. Beschrijf het verschil in output.

## E3 Drie soorten integratie {#e3 .easy}

1. Leg in je eigen woorden het verschil uit tussen inline completion, chat in de editor en indexering van de codebase.
2. Geef voor elke soort een concrete taak waarvoor ze het meest geschikt is, en motiveer in één zin.

## M1 Een werksessie met AI in de editor {#m1}

Je probeert een AI-integratie uit tijdens echt werk.

Installeer of activeer een AI-integratie in je editor, zoals GitHub Copilot of Cursor. Gebruik ze een volledige werksessie voor een concreet project. Noteer:

- welke voorstellen je aanvaardde, en waarom;
- welke voorstellen je verwierp, en waarom;
- wanneer de integratie je sneller maakte, en wanneer ze je afleidde.

## M2 Context bewust kiezen {#m2}

In een groot project kies je welke context je meegeeft (zie [8.3](./module-8.md#8_3)).

Neem een project van minstens vijf bestanden. Formuleer drie vragen aan een AI-tool. Beschrijf per vraag:

- welke bestanden je meegeeft, en waarom;
- welke bestanden je weglaat, en waarom;
- wat je als tekst meegeeft omdat het niet uit de bestanden blijkt.

Stel de vragen en noteer of de output de bestaande code gebruikte.

## M3 Een bug begrijpen met AI {#m3}

Je gebruikt AI als leerpartner, niet als oplosser (zie [8.6](./module-8.md#8_6)).

Neem een bug uit een eigen project of oefening.

1. Vraag het model naar mogelijke oorzaken, niet naar een oplossing.
2. Formuleer zelf een hypothese.
3. Test die hypothese zonder een oplossing van het model te gebruiken.
4. Noteer wat je leerde over de bug en over je manier van debuggen.

## M4 Een agent unit tests laten schrijven {#m4}

Je probeert een agent uit op een afgebakende taak (zie [8.5](./module-8.md#8_5)).

1. Commit je project, zodat je kan terugkeren.
2. Laat een agent unit tests genereren voor één bestaande module.
3. Noteer elke stap die de agent zette, wat je controleerde en wat je moest bijsturen.
4. Controleer de gegenereerde tests aan de hand van de specificatie (zie [6.1](./module-6.md#6_1)).

## H1 Een AI-workflow van specificatie tot commit {#h1 .hard}

Ontwerp een volledige workflow met AI voor het bouwen van een nieuwe feature, van specificatie tot geteste, gecommitte code. Beschrijf per stap:

- wat je zelf doet;
- waar je AI inschakelt, en welk soort: chat, indexering van de codebase of agent;
- welke output je controleert, en hoe;
- welke stappen je in Git zet.

Maak de workflow zo concreet dat een medestudent hem kan volgen. Test hem op een kleine feature.

## H2 Een vangnet voor agents {#h2 .hard}

Agents kunnen in korte tijd veel veranderen (zie [8.5](./module-8.md#8_5)). Je stelt regels op om dat veilig te houden.

Schrijf een protocol voor een agent bij een taak met grote impact. Denk aan de refactoring van een grote module, het aanpassen van configuratie of het genereren van een volledige test suite. Beschrijf per stap:

- wat je controleert voor, tijdens en na de taak;
- welke rechten je de agent geeft, en welke niet;
- hoe je herstelt als het fout gaat.

## @1 Een persoonlijk AI-plan {#home1 .home}

Je kijkt vooruit naar de rest van je opleiding.

Schrijf een persoonlijk plan voor AI-gebruik tijdens je opleiding. Het plan beschrijft:

- welke tools je wil leren kennen, en waarom;
- hoe je AI als leerpartner wil inzetten bij je studie;
- welke werkwijzen met agents je wil verkennen, en wanneer;
- welke grenzen je jezelf stelt tegen afhankelijkheid;
- hoe je je eigen vaardigheden als developer blijft ontwikkelen naast je AI-gebruik.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Context windows vergelijken (Easy) {#x1}

1. Zoek op hoe groot het context window is van twee modellen die je gebruikt. Vermeld je bron.
2. Beschrijf in maximaal vijf zinnen wat die grootte betekent voor het werken met een groot project.

## X2 Vragen die je redenering toetsen (Medium) {#x2}

Kies een concept dat je moeilijk vindt. Schrijf vijf vragen aan een model die jouw redenering voorleggen en om een beoordeling vragen, niet om een uitleg. Stel de vragen en noteer wat je leerde.

```text
Ik denk dat ... werkt als volgt: ... Klopt dat, en wat mis ik?
```

## X3 Twee developers, één cache (Medium) {#x3}

Twee developers lossen hetzelfde probleem op:

- Developer A vraagt: "Implementeer een cache voor deze API-calls" en integreert de output.
- Developer B vraagt eerst: "Wat zijn de voor- en nadelen van een cache in het geheugen en een cache met Redis voor dit gebruik?", kiest dan, laat de gekozen aanpak implementeren en controleert de output.

Vergelijk beide aanpakken op begrip, kwaliteit van het resultaat en risico's op lange termijn.

## X4 Een checklist voor context (Medium) {#x4}

Maak een persoonlijke checklist met minstens acht vragen die je jezelf stelt voor je een prompt stuurt in een grote codebase. De checklist helpt je kiezen welke context je meegeeft. Geef bij elke vraag een korte toelichting.

## X5 Model Context Protocol (Medium) {#x5}

Het **Model Context Protocol** (MCP) is een open standaard waarmee AI-tools verbinding maken met externe data en tools.

Zoek op hoe MCP werkt. Beantwoord, met bronnen:

- Welk probleem lost MCP op?
- Hoe verschilt het van een gewone koppeling via een API?
- Welke concrete toepassingen bestaan er vandaag?

## X6 Te veel automatisering (Hard) {#x6}

Je kan zo sterk op agents leunen dat je het overzicht over je eigen codebase verliest. Beschrijf in maximaal één A4:

- hoe die situatie ontstaat;
- welke signalen erop wijzen dat je het overzicht verliest;
- welke concrete maatregelen het in de hand houden.

## X7 Een concept leren met AI (Hard) {#x7}

Leer met een model als leerpartner een concept dat je nog niet begrijpt, zoals dependency injection, een event-driven architectuur of een algorithm naar keuze. Noteer het volledige leerproces:

- welke vragen je stelde, gericht op je eigen redenering;
- hoe je de uitleg van het model controleerde;
- wat je leerde, en wat onduidelijk bleef;
- hoe dit verschilde van een uitleg lezen.
