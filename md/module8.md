# Module 8 AI in de Workflow: Praktisch

---

## 8.1 Van chatvenster naar werkomgeving

Tot nu toe hebben we AI voornamelijk behandeld als iets wat je in een apart browservenster gebruikt: je typt een prompt, je krijgt een antwoord, je kopieert wat bruikbaar is. Dat werkt, maar ik hoop dat het ondertussen redelijk duidelijk is dat dit niet de meest leuke manier is om hiermee om te gaan.

De volgende (en hoplijk gemakkelijke) stap is de AI rechtstreeks in je werkomgeving: in je code-editor, in je terminal, geïntegreerd in je development workflow. Het verschil is niet enkel gemak maar ook voornamelijk het verschil in wat de AI *ziet*.

Een AI in een chatvenster ziet enkel wat je er naartoe kopieert. Een AI die geïntegreerd is in je editor ziet je volledige bestand, je foutmeldingen terwijl ze optreden, de context van wat je net aanpaste en soms de structuur van je volledige project.

Meer context betekent betere output. Maar het betekent ook iets anders: **de AI krijgt toegang tot meer van je werk dan wanneer je handmatig kopieert.** Dat heeft gevolgen voor privacy, voor welke tools je mag gebruiken in een professionele context en voor hoe je nadenkt over wat je deelt.

---

## 8.2 Tools in de editor

Er zijn vandaag verschillende soorten AI-integraties voor code-editors. Ze verschillen niet alleen in features, maar ook in hoe ze context verzamelen en hoe diep ze in je workflow ingrijpen. Hierbij enkele van de meest voorkomende vormen:

**Inline aanvulling (autocomplete):** De meest simpele vorm: terwijl je typt, stelt de AI de volgende regel of het volgende blok voor. *GitHub Copilot* is het bekendste voorbeeld. Je accepteert een suggestie met tab of negeert ze. De AI leert van wat er in je huidige bestand staat en soms van andere open bestanden.

**Chat in de editor:** Je kan (meestal via een side panel) een gesprek voeren met de AI, met de mogelijkheid om direct te verwijzen naar bestanden, functies of selecties in je code. Cursor en de Copilot Chat-extensie in VS Code werken zo.

**Codebase aware AI:** Sommige tools indexeren je volledige project en kunnen antwoorden geven op basis van de hele codebase: "*hoe wordt authenticatie afgehandeld in dit project?*", "*waar wordt deze variabele nog gebruikt?*", "*zijn er andere plaatsen waar ik dit patroon moet toepassen?*" Dat gaat verder dan één bestand, de AI begrijpt de structuur van het project als geheel.

**Instructiebestanden;** Tools zoals Cursor laten je een bestand aanmaken (`.cursorrules` of vergelijkbaar) waarin je projectspecifieke instructies zet: de programmeertaal, de gebruikte libraries of frameworks, de naming conventions, de teststandaard, de architectuur. De AI houdt daar automatisch rekening mee bij elke interactie. Dit is de praktische invulling van wat we in het verleden "context meedelen" hebben genoemd, maar dan structureel en niet per prompt.

Het loont om te weten welke van deze mechanismes de tool die jij gebruikt ondersteunt. Een tool maximaal benutten begint met begrijpen hoe ze werkt.

---

## 8.3 Context in grote projecten

Een AI ziet niet alles. Elk model heeft een **context window**: een maximum aan tekst dat het in één keer kan verwerken. Voor kleine projecten is dat zelden een probleem. Voor grote projecten (tientallen bestanden, honderden functies, duizenden regels) is context management een vaardigheid op zich.

De praktische gevolgen zijn concreet:

**De AI weet niet wat ze niet ziet:** Als je vraagt om een nieuwe functie te schrijven maar de relevante hulpfuncties zitten in een bestand dat niet meegestuurd is, zal de AI die functies niet gebruiken, of ze opnieuw uitvinden. Het resultaat is duplicatie of inconsistentie die je zelf moet opsporen.

**Hoe je context structureert, bepaalt de kwaliteit van de output:** Stuur niet zomaar je volledige codebase — dat vult het context window met irrelevante code en verwaart de AI. Stuur de bestanden die relevant zijn voor de specifieke taak. Leer herkennen welke bestanden dat zijn.

**Strategieën voor grote projecten:**
- *Werk bestandsgericht:* Houd je vragen gericht op één module of één verantwoordelijkheid per keer.
- *Gebruik samenvattingen:* In plaats van vijf grote bestanden mee te sturen, kan je een korte beschrijving van de architectuur meegeven als context.
- *Wees expliciet over afhankelijkheden:* "Deze functie gebruikt de klasse `UserRepository` uit `repositories/user.py`" is informatie die de AI niet kan raden als dat bestand er niet bij zit.
- *Gebruik instructiebestanden voor stabiele context:* Wat altijd geldt (architectuur, conventies, frameworks) hoort in een instructiebestand, niet in elke prompt opnieuw.

Context management is een vaardigheid die je ontwikkelt door te werken met grote codebases. De eerste keer dat de AI iets aanraadt dat al bestaat in een bestand dat je vergat mee te sturen, onthoud je het wel.

---

## 8.4 AI en versiebeheer

AI verandert hoe je code schrijft. Het verandert ook, of dat zou toch de bedoeling moete zijn, hoe je met versiebeheer omgaat.

**Commit messages:** Een commit message beschrijft wat er veranderd is en waarom. Bij AI-gegenereerde code is de "waarom" soms dunner: je hebt een prompt gestuurd en de output geïntegreerd. Goede commit messages voor AI-gegenereerde code beschrijven niet alleen het resultaat, maar ook de intentie: welk probleem loste je op, welke keuzes werden gemaakt, wat heb jij aangepast ten opzichte van de AI-output?

Slechte commit message: `voeg validatiefunctie toe`
Betere commit message: `voeg emailvalidatie toe met subdomein-ondersteuning - AI-gegenereerde basis, regex aangepast voor nieuwe TLD's`

**Branches als veiligheidsnet:** Gebruik een aparte branch als je experimenteert met AI-gegenereerde code die je nog niet volledig vertrouwt. Als het experiment mislukt of de code niet integreert zoals verwacht, gooi je de branch weg zonder dat je main aangetast is. Dit is sowieso goede praktijk, maar bij AI-gebruik extra relevant omdat de hoeveelheid gegenereerde code snel oploopt.

**Code review van AI-gegenereerde code:** In een teamcontext verdient AI-gegenereerde code een expliciete vermelding in een pull request. Niet omdat het slechter is, maar omdat reviewers anders beoordelen wat ze controleren: niet "begrijpt de auteur dit?" maar "is dit correct gevalideerd?". Dat is een andere lens, en een eerlijke lens.

**Wat je nooit commit:** Credentials, API-sleutels of andere gevoelige informatie die in AI-gegenereerde configuraties terechtgekomen is. Controleer elke gegenereerde configuratie vóór je commit, ook als de rest van de code perfect in orde is. Een credential die één keer gepusht wordt, moet direct vervangen worden, ook als je ze de volgende commit verwijdert.

---

## 8.5 Agentic AI

Tot nu toe was de workflow steeds: jij vraagt, de AI antwoordt, jij beslist. Dat verandert.

**Agentic AI** zijn systemen waarbij de AI niet één antwoord geeft, maar een reeks van stappen uitvoert om een doel te bereiken. Ze kunnen bestanden aanmaken, bestaande bestanden aanpassen, commando's uitvoeren, tests draaien, de resultaten interpreteren en daarna verdergaan. De developer geeft een doel op, "*implementeer deze feature*", en de agent voert het uit.

Voorbeelden die bij het schrijven van deze module bestaan: GitHub Copilot Workspace, Cursor in agent-modus, Claude Code. De technologie is reëel en in actieve ontwikkeling, dus deze lijst zal nooit 100% up to date zijn.

Dit is fundamenteel anders dan een assistent die antwoorden geeft. Een agent die autonoom bestanden aanpast en commando's uitvoert kan in korte tijd veel meer veranderen dan je zou verwachten. Dat heeft gevolgen.

**Wat er anders is bij agentic AI:**
- **Let op de kost, door slechte vraagstelling kan je ineens véél tokens verbruiken.**
- De agent kan fouten *stapelen*. Als stap drie verkeerd is, bouwen stap vier en vijf verder op die fout. Je merkt het pas aan het einde.
- Je ziet niet altijd wat er tussendoor gebeurt. Je geeft een opdracht, je krijgt een resultaat. De tussenliggende stappen zijn minder zichtbaar dan bij een gewone prompt.
- De agent heeft soms meer rechten nodig dan je wil geven. Een agent die bestanden mag aanmaken en verwijderen kan in een onbewaakt moment meer opruimen dan de bedoeling was.

**Wat dat betekent voor jou:**
- Gebruik agentic tools enkel voor taken die je volledig kan controleren en herstellen.
- Werk altijd met versiebeheer als een veiligheidsnet. Een agent die een fout maakt op een ongecommitte codebase is een probleem.
- Controleer het resultaat even grondig als bij gewone AI-output, ook als de agent meldt dat alles gelukt is. "Gelukt" betekent "uitgevoerd", niet "correct".
- Begin klein. Een agent testen op een geïsoleerde taak geeft je inzicht in hoe ze werkt en waar ze de mist ingaat, voor je haar loslaat op een groter probleem.

---

## 8.6 AI als tutor

Er is een gebruik van AI dat in deze cursus tot nu toe onderbelicht bleef: AI als hulpmiddel om te leren, niet enkel om te produceren.

Het verschil is subtiel maar belangrijk. **AI als productiemiddel** gebruik je om sneller output te genereren. **AI als leerpartner** gebruik je om je begrip te verdiepen. De output is niet het doel, het begrip is het doel.

Concrete manieren om AI als leerpartner in te zetten:

**Uitleg vragen en dan zelf verifiëren:** Je begrijpt een concept niet. Je vraagt de AI om het uit te leggen. Daarna ga je zelf op zoek naar een tweede bron om te bevestigen dat de uitleg klopt, want de AI kan het mis hebben. Het zoeken naar die bevestiging verdiept je begrip meer dan de uitleg zelf.

**De Socratische aanpak:** In plaats van de AI te vragen om een oplossing, vraag je het om jou te helpen redeneren. "*Ik denk dat het probleem hierin zit klopt dat?*" of "*Wat is het nadeel van mijn aanpak?*" Je stuurt het gesprek, de AI reageert op je redenering. Dat is fundamenteel anders dan de AI laten oplossen.

**Fouten laten analyseren, niet laten oplossen:** Je hebt een bug. In plaats van te vragen "fix dit", vraag je "wat zijn mogelijke oorzaken van dit gedrag?" Je onderzoekt de oorzaken zelf, je test je hypothesen, en pas daarna kijk je of de AI-analyse klopte.

**Concepten toetsen via discussie.** "*Ik begrijp het verschil tussen een interface en een abstracte klasse als volgt: [jouw uitleg]. Klopt dit, en wat mis ik?*" De AI geeft feedback op jouw begrip, niet een uitleg die jij passief consumeert.

Het verschil tussen een student die AI gebruikt om te leren en een student die AI gebruikt om werk te vermijden, zit niet in de tool. Het zit in de vraag die gesteld wordt.

---

## Oefeningen

### Easy

 **01.** Zoek de documentatie op van twee AI-coderingstools naar keuze (bv. GitHub Copilot, Cursor, Codeium, Tabnine). Beantwoord per tool:
- Welke soorten IDE-integratie bieden ze aan (inline aanvulling, chat, codebase-indexering)?
- Welke editors worden ondersteund?
- Hoe gaat de tool om met de privacy van je code? Wordt je code opgeslagen of gebruikt voor training?

---

 **02.** Schrijf een instructiebestand (`.cursorrules`, `CLAUDE.md` of vergelijkbaar formaat) voor een fictief of bestaand project. Het bestand bevat instructies die de AI-output direct relevanter maken voor dat project.

---

 **03.** Wat is het verschil tussen **inline aanvulling**, **chat in de editor** en **codebase-bewuste AI**? Geef voor elk type een concreet voorbeeld van een taak waarbij het type het meest geschikt is.

---

 **04.** Zoek op wat een "context window" is bij een AI-taalmodel. Hoe groot is het context window van twee tools die je kent of wil leren kennen? Wat zijn de praktische gevolgen van die grootte voor het werken met grote projecten?

---

### Medium

 **01.** Installeer of activeer een AI-integratie in je code-editor (GitHub Copilot, Cursor, of een andere naar keuze). Gebruik ze gedurende één werksessie op een concreet project. Documenteer:
- Welke suggesties accepteerde je, en waarom?
- Welke suggesties verwierp je, en waarom?
- Op welk moment voelde de integratie als een versnelling, en wanneer was ze eerder afleidend?

---

 **02.** Je werkt aan een project van minstens vijf bestanden. Formuleer drie vragen waarbij je de relevante context bewust selecteert in plaats van alles mee te sturen. Beschrijf per vraag:

- Welke bestanden stuur je mee en waarom?
- Welke bestanden laat je weg en waarom?
- Wat geef je expliciet als tekst mee dat niet uit de bestanden blijkt?

---

 **03.** Neem een bug uit een eigen project of oefening. Gebruik AI als leerpartner niet om de bug te fixen, maar om hem te begrijpen:

- Vraag de AI om mogelijke oorzaken.
- Formuleer zelf een hypothese.
- Test de hypothese zonder de AI-fix te gebruiken.
- Documenteer wat je leerde over de bug én over het debuggingproces.

---

 **04.** Schrijf vijf vragen die je aan een AI zou stellen om een concept dat je moeilijk vindt beter te begrijpen. De vragen moeten jouw eigen redenering presenteren en de AI vragen om die te evalueren, niet om een uitleg te geven.

---

 **05.** Vergelijk de aanpak van twee developers bij hetzelfde probleem:

*Developer A:* vraagt de AI "implementeer een cache voor deze API-calls" en integreert de output.

*Developer B:* vraagt de AI "wat zijn de trade-offs tussen een in-memory cache en een Redis-cache voor dit gebruik?", maakt een keuze, vraagt daarna om de gekozen aanpak te implementeren, en controleert de output.

Analyseer beide aanpakken op kwaliteit van begrip, kwaliteit van het resultaat en risico's op langere termijn.

---

 **06.** Maak een persoonlijke "context checklist": een lijst van vragen die je jezelf stelt voor je een AI-prompt stuurt in een grotere codebase. De checklist helpt je bepalen welke context je moet meesturen. Minstens acht vragen, met toelichting per vraag.

---

 **07.** Onderzoek hoe **MCP (Model Context Protocol)** werkt: een open standaard die AI-tools in staat stelt om te verbinden met externe data en tools. Wat lost het op, hoe verschilt het van gewone API-integraties en welke concrete toepassingen bestaan er vandaag?

---

 **08.** Gebruik een agentic tool om een kleine taak uit te voeren: genereer unit tests voor een bestaande module. Documenteer elke stap, wat de agent deed, wat je controleerde en wat je moest bijsturen.

---

### Hard

**01.** Ontwerp een volledig **AI-geïntegreerde workflow** voor een typisch ontwikkelscenario: het implementeren van een nieuwe feature van specificatie tot gecommitte, geteste code. Beschrijf per stap:

- Wat doe jij zelf?
- Waar schakel je AI in, en welk type (assistent, codebase-bewust, agent)?
- Welke output controleer je, en hoe?
- Welke git-stappen neem je?

Zorg dat de workflow concreet genoeg is om door een medestudent gevolgd te worden.

---

**02.** Onderzoek het risico van  **overautomatisering**: de situatie waarbij een developer zo sterk leunt op agentic tools dat hij het overzicht verliest over wat er in zijn codebase gebeurt. Beschrijf:

- Hoe ontstaat overautomatisering?
- Welke signalen wijzen erop dat je het overzicht aan het verliezen bent?
- Welke concrete maatregelen houd je het in de hand?

---

**03.** Stel een **agentic AI fail-safe protocol** op: een set van regels en procedures die je volgt als je een agent gebruikt voor een taak met significante impact (bv. refactoring van een grote module, aanpassen van configuraties, genereren van een volledige testsuite). Het protocol beschrijft voor elke stap wat je controleert en hoe je herstelt als het fout gaat.

---

**04.** Gebruik een AI-tool als leerpartner om een concept grondig te leren dat je nog niet volledig begrijpt (bv. dependency injection, event-driven architectuur, of een algoritme naar keuze). Documenteer het volledige leerproces:

- Welke vragen stelde je (Socratisch, niet oplossingsgeoriënteerd)?
- Hoe verifieerde je de uitleg van de AI?
- Wat leerde je, en wat bleef onduidelijk?
- Hoe verschilde dit van gewoon een uitleg lezen?

---

**05.** Bouw een persoonlijk **AI-integratieplan** voor je de rest van je opleiding (en carrière). Het plan beschrijft:

- Welke tools je wil leren kennen en waarom.
- Hoe je AI als leerpartner wil inzetten bij je studie.
- Welke agentic workflows je wil verkennen en wanneer.
- Welke grenzen je voor jezelf stelt op vlak van afhankelijkheid.
- Hoe je je eigen vaardigheid als developer blijft ontwikkelen naast je AI-gebruik.

---
