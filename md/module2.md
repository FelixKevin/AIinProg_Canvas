# Module 2 The Art of the Prompt

---

## 2.1 Prompting is een skill

> "Maak een functie."

Dat is een prompt. Maar het is een slechte prompt.

Wanneer je met een AI-assistent werkt, schrijf je geen gewone vraag. Je schrijft eigenlijk een specificatie, een beschrijving van het probleem met context, verwachtingen en beperkingen. Hoe preciezer die beschrijving, hoe kleiner de kans dat de AI iets teruggeeft dat je niet kan gebruiken.

Een vage prompt leidt tot vage output. De AI gaat heel veel dingen aannemen en gokken wat je bedoelt, die aannames kloppen lang niet altijd met wat je bedoelde, zeker als het afwijkt van de standaard.

Vergelijk het met het schrijven van requirements in een softwareproject. Als een developer aan een klant vraagt "wat wil je?" en de klant zegt "iets met een knop en iets groen", dan weet die developer nog niets. Pas als er staat: "een knop rechts onderaan het scherm die past bij onze groene huisstijl, die bij een klik een bevestigingsvenster toont en daarna het formulier verstuurt naar het opgegeven e-mailadres" kan jij zelf ook verder met je werk.

Prompting werkt ook zo. De basisregel is simpel maar hard: **shit in, shit out.**

Een goede prompt beschrijft:

- **De context:** Waar werkt deze code in? Welke technologie, welk project, welke omgeving?
- **De input:** Wat krijgt de functie of het systeem mee?
- **De gewenste output:** Wat moet er uitkomen? In welk formaat?
- **De beperkingen:** Geen externe libraries? Rekening houden met wetgeving? Specifieke naamgeving?

Dit dwingt je trouwens ook om zelf eerst na te denken over het probleem voordat je een oplossing genereert. **Zelf nadenken is niet optioneel**.

---

## 2.2 De structuur van een prompt

Een goede prompt heeft structuur. Dat klinkt misschien redelijk stijf, maar het doel is concreet: de AI zo weinig mogelijk ruimte laten om zelf te interpreteren of te veronderstellen. Alles wat je expliciet in de prompt zet, is iets waar de AI niet over hoeft te twijfelen.

Een typische prompt voor een coding taak bevat drie onderdelen:

- **Een beschrijving van de input:** Wat gaat er de functie of het systeem in? Geef types, formaten en eventuele randgevallen mee.
- **Een omschrijving van de gewenste output:** Wat moet er uitkomen? Wat is het formaat, de structuur, het type?
- **Eventueel een beschrijving van de aanpak of beperkingen:** Welke stappen moet de oplossing volgen? Wat mag niet gebruikt worden? Welke conventies gelden er?

Een voorbeeld. Stel dat je een API-endpoint wil laten genereren. In plaats van:

> `"schrijf een API"`

geef je mee:

> `"Schrijf een Express.js GET-endpoint op het pad /users/:id dat een user object teruggeeft op basis van het opgegeven id. Als de gebruiker niet bestaat, geeft de endpoint een 404-status terug met een JSON-object { error: 'Gebruiker niet gevonden' }. Gebruik async/await. Er is al een functie getUserById(id) beschikbaar die een Promise teruggeeft."`

Het tweede voorbeeld geeft de AI geen keuze over structuur, statuscode, foutafhandeling of codestijl. Alles staat erin. Het eerste voorbeeld geeft de AI alle vrijheid — en die vrijheid werkt zelden in jouw voordeel.

---

## 2.3 Drie basispatronen

De meeste interacties met een AI-assistent binnen development vallen terug op drie basispatronen. Als je deze herkent, weet je ook meteen hoe je je prompt moet opbouwen.

**Generate:** Je vraagt de AI om iets nieuws te maken: een functie, een testcase, een configuratiebestand, documentatie, ... De AI start van nul op basis van jouw beschrijving.

> Voorbeeld: *"Schrijf een JavaScript-functie die een array van getallen filtert en enkel de priemgetallen teruggeeft."*

**Transform:** Je geeft bestaande input mee en vraagt om die te bewerken. Herschrijven naar een andere stijl, vereenvoudigen, omzetten naar een ander formaat, vertalen naar een andere (programmeer)taal.

> Voorbeeld: *"Herschrijf de onderstaande functie met een for...of loop in plaats van een while-loop. Behoud dezelfde logica en naam."*

**Evaluate:** Je vraagt de AI om iets te analyseren of te beoordelen. Fouten detecteren, feedback geven op code, twee oplossingen vergelijken.

> Voorbeeld: *"Bekijk de onderstaande functie en geef aan of er edge cases zijn die niet afgehandeld worden. Stel een verbeterde versie voor."*

Deze drie patronen combineren ook. Je kan de AI vragen om eerst te evalueren en daarna te transformeren. Of je kan genereren, het resultaat bekijken, en dan een transform-prompt sturen om bij te sturen.

---

## 2.4 Apen apen apen na

AI reageert sterk op voorbeelden. Als je in je prompt concrete input en verwachte output meegeeft stuur je de gegenereerde output veel gerichter dan met een beschrijving alleen.

Stel dat je een functie wil die voornamen uniform formatteert. Je kan dat beschrijven, maar je kan ook gewoon laten zien wat je bedoelt:

> *"Schrijf een functie formateerNaam(naam) die een naam correct capitalized.*
> *Voorbeelden:*
> *- `'soufian'` -> `'Soufian'`*
> *- `'MARIE'` -> `'Marie'`*
> *- `'Pieter-jan'` -> `'Pieter Jan'`"*

Met die voorbeelden is er geen ruimte meer voor verwarring over hoofdletters bij samengestelde namen of input die volledig in hoofdletter staat.

Voorbeelden zijn ook de beste manier om **edge cases** mee te geven, situaties waarbij de input afwijkt van het normale verloop.

> *- `''` (lege string) -> `''`*
> *- `'Oliv3r'` -> geef een fout met de boodschap 'Naam kan geen nummers bevatten'*
> *- `null` → geef een fout met de boodschap 'Naam mag niet leeg zijn'*

Zonder die extra voorbeelden schrijft de AI waarschijnlijk een functie die perfect werkt voor gewone input maar crasht of onverwacht gedrag vertoont bij randgevallen. De AI dekt standaard de "happy path" (waar we veronderstellen dat er niets fout loopt). Jij bent zelf verantwoordelijk voor de rest.

Voorbeelden geven dwingen je ook om na te denken over het gedrag van je oplossing vóór je ze genereert. Dat is een goede gewoonte, AI of niet.

---

## 2.5 Be the for-loop

Een prompt geeft meestal geen perfect resultaat bij de eerste poging. Dat is normaal en geen teken van een slechte prompt, het is gewoon hoe het werkt.

Beschouw het proces als een for-loop waar jij zelf de iterator bent:
1. Je stuurt een prompt.
2. Je evalueert de output.
3. Je past de prompt aan of stuurt een vervolgprompt.
4. Repeat until satisfied.

"Goed genoeg" beslis je zelf, niet de AI.

Na een eerste resultaat kijk je: wat klopt er wel, wat klopt er niet, wat ontbreekt er? Op basis daarvan stuur je bij. Dat kan door de oorspronkelijke prompt te verfijnen (extra constraints toevoegen, een aanname expliciteren), of door een vervolgprompt te sturen die inspeelt op de specifieke output die je al hebt.

Hou daarbij de controle. De AI levert voorstellen. **Jij beslist** welke richting je opgaat, welke aanpassingen je accepteert en wanneer het resultaat klaar is voor gebruik.

Een praktische tip: werk in kleine stappen. Vraag niet om een volledige feature in één prompt. Genereer een basisversie, valideer die en bouw er dan op verder. Kleine iteraties zijn makkelijker te sturen dan grote sprongen.

---

## Oefeningen

### Easy

**O1. Patronen** 

Geef voor elk van de volgende prompts aan welk basispatroon (generate, transform of evaluate) van toepassing is:

- `"Schrijf een functie die de gemiddelde waarde van een array berekent."`
- `"Bekijk de onderstaande code en geef aan of er geheugenlekkages kunnen optreden."`
- `"Herschrijf deze functie zodat ze async/await gebruikt in plaats van callbacks."`
- `"Genereer vijf testcases voor de functie validateEmail()."`
- `"Vergelijk de twee onderstaande implementaties en zeg welke leesbaarder is."`

---

**O2. Prompting 101**

Hieronder staan drie prompts. Rangschik ze van slechtste naar beste en leg voor elke prompt in één zin uit wat er goed of fout aan is:

- `"doe iets met een lijst"`
- `"Schrijf een functie die een lijst sorteert."`
- `"Schrijf een Python-functie sorteerAflopend(getallen) die een lijst van integers sorteert van groot naar klein en de gesorteerde lijst teruggeeft. Gebruik geen externe libraries."`

---

**O3. Prompting 102**

Schrijf een verbeterde versie van de volgende prompt. Voeg context, inputbeschrijving, outputbeschrijving en minstens één beperking toe:

> `"maak een wachtwoordchecker"`

---

**O4. Prompting tools**

Zoek drie AI-tools op die specifiek ontworpen zijn voor het helpen schrijven of verbeteren van prompts (zogenaamde "prompt engineering tools" of "prompt optimizers"). Noteer per tool de naam, wat ze doen en of ze gratis zijn.

---

**O5. Edging**

Wat is een edge case? Geef twee voorbeelden van edge cases voor een functie die een leeftijd als input verwacht en controleert of iemand meerderjarig is.

---

**O6. Pathing**

Leg in je eigen woorden uit wat het "happy path" is en waarom het gevaarlijk is als een AI enkel dat dekt.

---

### Medium

**O1. Concretiseer**

Gebruik de drie-delenstructuur (input, output, beperkingen) om een volledige prompt te schrijven voor elk van de volgende taken:
- Een functie die een CSV-regel inleest en omzet naar een object.
- Een endpoint dat een lijst van producten ophaalt en filtert op prijs.
- Een helperfunctie die een datum van het formaat `DD/MM/YYYY` omzet naar `YYYY-MM-DD`.

---

**02. Pas toe op jezelf**

Neem een eenvoudige functie die je hebt geschreven in Programming Fundamentals. Gebruik een AI-tool om ze te laten evalueren. Documenteer:
- De prompt die je gebruikte
- De feedback die de AI gaf
- Wat je al dan niet overnam, en waarom

---

**03. Few-shot prompting**

Onderzoek het concept **few-shot prompting**: een techniek waarbij je meerdere voorbeelden meegeeft in je prompt om de output te sturen. Leg uit hoe het werkt, wanneer je het gebruikt en schrijf een concrete voorbeeldprompt die few-shot prompting toepast voor een codeertaak.

---

**04. Vergelijk**

Vergelijk de volgende twee prompts voor hetzelfde probleem. Test beide uit in een AI-tool en vergelijk de output:

*Prompt A:*
> `"Schrijf een functie die e-mailadressen valideert."`

*Prompt B:*
> `"Schrijf een JavaScript-functie valideerEmail(email) die controleert of een string een geldig e-mailadres is. Gebruik een reguliere expressie. De functie geeft true terug bij geldig, false bij ongeldig. Voorbeelden: 'jan@test.be' → true, 'jan@' → false, '' → false, null → false."`

Welke output is bruikbaarder? Noteer de concrete verschillen.

---

**O5. System prompts**

Onderzoek het verschil tussen een **system prompt** en een **user prompt** bij AI-tools die dat onderscheid maken. Wat is het verschil, wanneer gebruik je welke, en wat is het voordeel van een goed opgestelde system prompt bij herhaalde taken?

---

**O6. Vertaalslag**

Gebruik een transform-prompt om een stuk code dat je zelf schreef te laten herschrijven naar een andere stijl of technologie. Beoordeel daarna de output kritisch: wat is er beter, wat ging er verloren?

---

**O7. Scaffolding**

Bouw een "prompt template" voor een taak die je regelmatig uitvoert (bv. een nieuw component aanmaken, een testbestand opzetten, een functie documenteren). De template moet variabele onderdelen bevatten die je telkens invult en een vaste structuur die altijd hetzelfde blijft.

---

**O8. Gedachtengangen**

Zoek online naar het concept **chain-of-thought prompting**. Leg uit wat het is, waarom het effectief is en schrijf een voorbeeldprompt waarbij je deze techniek toepast op een codeprobleem naar keuze.

---

### Hard

**O1.** 

Neem een complexere programmeertaak (bv. een algoritme, een dataverwerking, een API-integratie) en schrijf drie versies van de prompt:

- Een zero-shot prompt (geen voorbeelden, geen stappen)
- Een few-shot prompt (met voorbeelden van input en output)
- Een chain-of-thought prompt (waarbij je de AI vraagt stap voor stap te redeneren)

Test alle drie en vergelijk de output grondig. Welke aanpak levert de bruikbaarste code op voor dit type probleem?

---

**O2.**

Onderzoek het concept **context window**: de hoeveelheid tekst die een AI-model tegelijk kan verwerken. Hoe beïnvloedt dit de manier waarop je een prompt opstelt voor grote codebases? Welke strategieën bestaan er om met een beperkt context window te werken?

---

**O3.**

Analyseer de volgende situatie kritisch:

> Een developer gebruikt AI om een volledige functionaliteit te genereren via één lange, gedetailleerde prompt. De output werkt bij eerste test. Twee weken later, bij het toevoegen van nieuwe functionaliteit, blijkt de structuur moeilijk uitbreidbaar en bevat de code impliciete aannames die nu conflicteren met nieuwe vereisten.

- Wat ging er fout in het prompt-proces?
- Hoe had de developer iteratief beter kunnen werken?
- Welke rol speelt "kleine stappen" hier?

---

**04.**

Bouw een persoonlijk "prompt playbook": een verzameling van minstens zes geteste en verfijnde prompts die je zelf zou gebruiken in een typisch development-project. Organiseer ze per patroon (generate, transform, evaluate). Voeg bij elke prompt toe: het doel, de volledige prompttekst, een samenvatting van de output en wat je eventueel moest aanpassen.

---

**O5.**

Onderzoek hoe **role prompting** werkt: het geven van een expliciete rol aan de AI ("je bent een senior backend developer", "je bent een code reviewer", ...). Test het effect van role prompting door dezelfde codetaak te sturen met en zonder een rolinstructie. Wat verandert er aan de output?

---

### At Home

**01. Prompt Engineering Logboek**

Hou vanaf nu tot de volgende les een logboek bij van elke prompt die je gebruikt bij je studies of projecten. Noteer per prompt:
- De originele prompt zoals je ze indiende
- De output (of een samenvatting ervan)
- Of je moest itereren, en zo ja: hoe vaak en wat je aanpaste
- Een beoordeling van de kwaliteit van de output (1–5)

Analyseer aan het einde: welke patronen zie je in je eigen prompting? Wat doe je goed? Wat kan beter? Schrijf een reflectie van minstens 400 woorden.

---

**02. Bouw een Prompt Library**

Maak een document (Markdown, Notion, Word, ...) dat fungeert als een persoonlijke prompt library. De library bevat minstens twaalf prompts, verdeeld over de drie basispatronen en minstens drie verschillende use cases (bv. unit tests schrijven, code reviewen, documentatie genereren, refactoring, ...).

Elke prompt in de library bevat:

- Een naam en categorie
- De volledige prompttekst, inclusief placeholders voor variabele onderdelen
- Een toelichting van wanneer je deze prompt gebruikt
- Minstens één voorbeeld van de output die je verwacht

---