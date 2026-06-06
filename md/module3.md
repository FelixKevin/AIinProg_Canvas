# Module 3 Code Genereren

---

## 3.1 Functies, fragmenten en prototypes

Je hebt een idee. Je wil weten of het werkt. Je wil iets kunnen tonen.

Vroeger betekende dat: beginnen typen, documentatie lezen, een halve dag later een eerste super basic versie hebben. Nu kan je een prompt schrijven en in dertig seconden een werkende draft hebben om mee verder te gaan.

AI kan op basis van een beschrijving functies, codefragmenten of volledige prototypes genereren. Dat is in een vroege fase van ontwikkeling bijzonder nuttig: je kan snel iets tastbaars bouwen, testen of tonen aan een collega of klant zonder dat je elke regel zelf hoeft te typen.

Maar hier komt de herhaling die je inmiddels wel verwacht: **je moet begrijpen wat de gegenereerde code doet en waarom ze zo opgebouwd is.**

Dat klinkt vanzelfsprekend, maar in de praktijk is de verleiding groot om snel te kopiëren en door te gaan. Je gaat het probleem niet direct zien, want de code werkt. Maar, drie weken later, als er een bug opduikt in de logica, als een collega vraagt hoe iets werkt, of als je een feature moet uitbreiden en je merkt dat de structuur dat niet toelaat komen alle problemen naar boven.

Code begrijpen is geen luxe. Het is de **minimumvereiste voor verantwoord gebruik van AI** in development.

---

## 3.2 Boilerplate en patronen

Eerlijk: niemand schrijft graag de twintigste CRUD-operatie van de dag. Configuratiebestanden, standaardprojectstructuren, herhalende endpoints, dat zijn taken waarbij je skills niet zit in het typen van de code maar in het begrijpen en toepassen van het hele proces.

Dit soort code (*boilerplate*) is waarschijnlijk de sterkste use case voor AI in development. De structuur is voorspelbaar, de output is eenvoudig te controleren en de tijdswinst is reëel en gemakkelijk te zien.

AI kan ook helpen bij het toepassen van bekende **design patterns**: factory, singleton, observer, repository, ... Je beschrijft het probleem, de AI stelt een implementatie voor. Dat werkt, op voorwaarde dat je genoeg context meegeeft over je project.

Het risico hier is subtiel maar reëel: **standaardoplossingen zijn niet altijd correct in elke specifieke context.** Een gegenereerde CRUD-implementatie gaat er van uit dat jouw datamodel, naamgeving en foutafhandeling allemaal de meest gangbare keuzes zijn. Dat is zelden volledig het geval.

Gebruik boilerplate-output als startpunt, niet als eindproduct.

---

## 3.3 Configs en setup

Je start een nieuw project. Je weet wat je wil bouwen, maar de setup van je Dockerfile, CI/CD-configuratie, linting, package.json, environment variables, ... kost tijd die je eigenlijk liever in de echte code steekt.

AI is hier bijzonder nuttig. Je beschrijft je stack en wat je nodig hebt en de AI genereert een startpunt voor je configuratie. Dat is een reële tijdswinst, zeker bij technologieën waarmee je minder vertrouwd bent.

Maar configuratiebestanden zijn geen onschuldige code. Fouten of verouderde instellingen zijn moeilijk te traceren, ze uiten zich vaak pas als je al een heel eind verder bent of als het te laat is. En er is een ernstiger risico: **AI-gegenereerde configuraties lekken regelmatig gevoelige informatie.**

Concrete gevallen zijn gedocumenteerd: projecten waarbij API-sleutels, databasecredentials of tokens belanden in bvb Git omdat een gegenereerd configuratiebestand die niet correct uitsloot. Eens die sleutels publiek zijn, zijn ze gecompromised ongeacht of je ze achteraf verwijdert.

Controleer daarom altijd:
- Staan er geen credentials hardcoded in de gegenereerde bestanden?
- Staat `.env` of een equivalent in de `.gitignore`?
- Zijn de gebruikte versies van dependencies actueel en veilig?
- Kloppen de instellingen voor jouw specifieke omgeving, niet voor een generieke setup?

Een goed gegenereerd configuratiebestand is een startpunt voor review, geen bestand om blind in je repository te pushen.

---

## 3.4 Code aanpassen 

AI genereert gewoon code zonder te weten hoe alles er rond uit ziet. Het weet niet hoe jouw project eruitziet, welke afspraken je team heeft gemaakt of welke libraries al in gebruik zijn (tenzij je dat natuurlijk expliciet meegeeft in de prompt).

Het gevolg: gegenereerde code gaat er bijna altijd anders uitzien als een bestaande codebase. Het werkt misschien technisch, maar het past niet en iemand anders die naar je code gaat kijken gaat het AI-gebruik er kunnen uit halen.

Voordat gegenereerde code geïntegreerd wordt, check minstens de volgende punten:

**Naamgeving:** Gebruikt jouw project camelCase, snake_case of PascalCase? Zijn functies, klassen en variabelen consistent benoemd? Een AI die `get_user_by_id` genereert in een project dat `getUserById` gebruikt, introduceert inconsistentie die codereviews bemoeilijkt en verdere ontwikkeling in dat project vertraagt.

**Projectstructuur:** Waar horen nieuwe bestanden thuis? Volgt de gegenereerde code de mappenstructuur en moduleopbouw van het project?

**Architectuur:** Gebruikt het project een specifiek patroon (MVC, layered architecture, hexagonal)? Gegenereerde code die dat patroon negeert, creëert technical debt.

**Bestaande libraries:** Als het project al een HTTP-client, validatielibrary of ORM gebruikt, moet de nieuwe code die ook te gebruiken en niet een alternatief dat de AI toevallig kent.

**Klantvereisten en teamafspraken:** Zijn er specifieke functionele of technische vereisten waaraan de code moet voldoen die niet in de prompt stonden?

Het doel is nooit om AI-code ongewijzigd over te nemen. Het doel is om ze als vertrekpunt te gebruiken en daarna bewust te integreren.

---

## 3.5 Ken de limieten

AI is snel. AI is beschikbaar. AI klaagt niet als je om vier uur 's nachts een functie vraagt voor de zevende keer omdat er een deadline aankomt en je eigenlijk niet meer weet wat je allemaal al hebt laten genereren.

Maar AI is niet slim. Het is patroonherkenning op schaal en dat heeft gevolgen voor de kwaliteit van wat het produceert.

Typische tekortkomingen die je zelf moet detecteren en corrigeren:

**Onnodig complexe oplossingen:** AI kiest niet altijd de eenvoudigste aanpak. Soms genereert het een elegante maar overdreven uitgewerkte oplossing voor een probleem dat in vijf regels opgelost kon worden.

**Inefficiënte implementaties:** Een werkend algoritme is niet per se een efficiënt algoritme. AI-code bevat soms onnodige iteraties, redundante checks of suboptimale datastructuren.

**Fouten in logica:** Subtiele logicafouten (een verkeerde operator, een fout in een conditie, een off-by-one error, ...) zijn niet zeldzaam in AI-output en zijn precies het moeilijkst te detecteren als je de code niet actief leest.

**Onvolledige foutafhandeling:** AI dekt standaard het happy path. Edge cases, ongeldige input en foutscenario's worden regelmatig overgeslagen of oppervlakkig behandeld.

**Culturele en contextuele aannames:** De meeste trainingsdata is Engelstalig en Amerikaans. Dat heeft gevolgen: datumnotaties, decimaaltekens, BTW-berekeningen, postcoderegel (wat in de VS vanzelfsprekend is), klopt niet altijd in een Belgische of Nederlandstalige context. Als je een factuurmodule bouwt en de AI genereert iets met `MM/DD/YYYY`, heb je een probleem dat niet vanzelf opvalt.

Al deze tekortkomingen zijn detecteerbaar, maar enkel als je de output actief en kritisch leest. Een developer die enkel controleert of de code draait, mist de helft.

En nog één ding: als jij enkel AI-output kan beoordelen op "werkt het of niet", dan is je meerwaarde als developer beperkt en dan heeft een bedrijf geen reden om aan jou in te huren vs gewoon AI tokens te kopen. Precies die kritische, inhoudelijke beoordeling is wat jou onvervangbaar maakt ten opzichte van een geautomatiseerd systeem.

---

## 3.6 Iteratief integreren

Je hebt gegenereerde code. Het werkt. Het is aangepast aan de conventies van je project. Klaar om te integreren.

Toch: doe het niet in één keer.

Het integreren van code (AI-gegenereerd of niet) gebeurt best in kleinere, beheersbare stappen. Elke stap voeg je één afgebakend stuk toe, test je het en controleer je of alles nog werkt zoals verwacht. Pas dan ga je verder.

Dit principe is niet nieuw. Het is gewoon een development best practice. Maar bij AI-code is het extra relevant, omdat de kans op subtiele problemen groter is dan bij code die je volledig zelf schreef en doordenkt.

Na elke stap verifieer je op meerdere niveaus:

**Technische correctheid:** Draait de code zonder fouten? Geeft ze de verwachte output voor normale invoer én randgevallen?

**Teststatus:** Slagen alle bestaande tests nog steeds? Als bestaande tests falen na het toevoegen van nieuwe code is er iets mis, ook al lijkt de nieuwe code op zich correct.

**Structurele consistentie:** Past de code nog steeds bij de rest van het project? Zijn er geen onbedoelde afhankelijkheden of conflicten geïntroduceerd?

**Functionele volledigheid:** Voldoet de code aan de oorspronkelijke vereisten? Niet aan wat de AI ervan gemaakt heeft, maar aan wat er gevraagd werd.

Kleine stappen maken problemen isoleerbaar. Als er na een beperkte wijziging iets misgaat, weet je precies waar je moet zoeken. Als je vijfhonderd regels in één keer toevoegt en daarna iets faalt, heb je een heel andere zoekruimte.

---

## Oefeningen

### Easy

**01.** Schrijf een prompt waarmee je een AI vraagt om een eenvoudige functie te genereren. De functie mag je zelf kiezen. Zorg ervoor dat je prompt context, input, output en minstens één beperking bevat. Genereer daarna de functie en lees de output kritisch na: begrijp je elke regel?

---

**02.** Zoek drie voorbeelden van **boilerplate code** die je in een typisch webproject tegenkomt. Geef voor elk voorbeeld aan:

- Wat het is
- Waarom het repetitief is
- Of AI hier nuttig zou zijn en waarom

---

**03.** Hieronder staan twee codefragmenten die hetzelfde doen. Welke heeft de betere stijl voor een project dat camelCase en arrow functions gebruikt? Leg uit waarom het andere fragment niet direct integreerbaar is.

```javascript
// Fragment A
function bereken_totaal(prijs, btw_percentage) {
  var resultaat = prijs + (prijs * btw_percentage / 100);
  return resultaat;
}

// Fragment B
const berekenTotaal = (prijs, btwPercentage) => prijs + (prijs * btwPercentage / 100);
```

---

**04.** Wat is het verschil tussen een **syntaxisfout**, een **logicafout** en een **edge case die niet afgehandeld wordt**? Geef voor elk type een kort codevoorbeeld.

---

**05.** Zoek online naar een gedocumenteerd geval waarbij AI-gegenereerde code een beveiligingsprobleem veroorzaakte (bv. een gelekte API-sleutel, een SQL-injectielek, ...). Beschrijf wat er misging en welke stap in het integratieproces het probleem had kunnen voorkomen.

---

### Medium

**01.** Kies een eenvoudig design pattern (bv. singleton, factory of observer). Gebruik een AI-tool om een implementatie te laten genereren. Evalueer daarna de output:

- Is het patroon correct geïmplementeerd?
- Zijn er aannames gemaakt die niet passen in een typisch project?
- Wat zou je aanpassen?

---

**02.** Gebruik AI om een volledige CRUD-module te genereren voor een eenvoudige entiteit naar keuze (bv. een `Gebruiker` of `Product`). Stel vervolgens dat je deze integreert in een project dat:

- Een bestaande ORM gebruikt
- camelCase naamgeving hanteert

Beschrijf welke aanpassingen je zou moeten maken en waarom.

---

**03.** Neem een stuk zelf geschreven code (uit een ander vak) en gebruik AI om er een **verbeterde versie** van te genereren. Vergelijk de originele en de gegenereerde versie:

- Wat is er verbeterd?
- Wat is er slechter of minder geschikt?
- Wat zou je overnemen en wat niet?

---

**04.** Genereer via AI een functie die een datum verwerkt. Test de functie daarna bewust met Belgische invoer (formaat `DD/MM/YYYY`, Nederlandstalige maandnamen, ...). Wat gaat er mis? Hoe pas je de functie aan?

---

**05.** Gebruik AI om een setupscript te genereren voor een nieuw project in een technologie dat je zelf kiest. Voer daarna een volledige **beveiligingscheck** uit:

- Worden er credentials hardcoded ingesteld?
- Staan gevoelige bestanden in de `.gitignore`?
- Zijn de gebruikte versies actueel en zonder bekende kwetsbaarheden?

Documenteer je bevindingen.

---

**06.** Zoek twee AI-tools die specifiek gericht zijn op **code generatie** (en niet op algemene chat). Vergelijk ze op:

- Hoe ze context over het project meenemen
- Hoe goed ze aansluiten bij bestaande code
- Of ze waarschuwen voor beveiligingsproblemen
- Wat hun sterke punten en beperkingen zijn

---

**O7.** Neem een AI-gegenereerde functie van minstens twintig regels. Ga door de code regel per regel en schrijf bij elke regel in commentaar uit wat ze doet. Doel: aantonen dat je de volledige output begrijpt. Markeer lijnen waar je twijfelt en onderzoek die verder.

---

### Moeilijk

**01.** Genereer via AI een volledig werkend prototype voor een kleine webapplicatie (een eenvoudige todo-lijst). Voer daarna een volledige **integratiereview** uit:

- Correctheid en foutafhandeling
- Beveiligingsaspecten (geen hardcoded credentials, inputvalidatie, ...)
- Consistentie met een zelf gedefinieerde projectstructuur
- Culturele aannames (datumformaten, taal, ...)

Documenteer elke bevinding en de bijbehorende aanpassing.

---

**02.** Onderzoek het concept **technical debt** en leg uit hoe het iteratief integreren van AI-gegenereerde code zonder goede QC technical debt kan veroorzaken. Geef een concreet scenario en beschrijf hoe je die schuld achteraf zou moeten oplossen.

---

**03.** Gebruik AI om een module te genereren die werkt met externe data (bv. een API-call, een bestandsverwerking of een databasequery). Identificeer en documenteer alle plaatsen waar de gegenereerde code:

- Geen foutafhandeling heeft
- Aannames maakt over de structuur van de data
- Beveiligingsrisico's introduceert

Schrijf daarna een verbeterde versie die al die punten adresseert.

---

**04.** Stel dat je als developer werkt in een team. Doe een voorstel voor een **code review checklist** specifiek voor AI-gegenereerde code.

---

**05.** Onderzoek hoe **GitHub Copilot**, **Cursor** en minstens één andere AI-coderingstool omgaan met het meegeven van projectcontext. Welke mechanismen bieden ze aan (bv. codebaseindexering, `.cursorrules`, Copilot workspace, ...)? Hoe beïnvloedt meer context de kwaliteit van de gegenereerde code?

---

### At Home

**01. Prototype tot Productie**

Kies een eenvoudige applicatie-idee (bv. een to-dolijst, een valutaconverter, een kleine API). Bouw het stap voor stap via AI-gegenereerde code, maar documenteer elke stap:

- De prompt die je gebruikte
- De ruwe output
- Welke aanpassingen je maakte en waarom
- Hoe je iteratief integreerde

Lever aan het einde zowel de werkende applicatie als een verslag van minstens 600 woorden op. Het verslag beschrijft je proces, de problemen die je tegenkwam en wat je leerde over het verschil tussen gegenereerde code en geïntegreerde code.

---

**02. Beveiligingsaudit van AI-gegenereerde Code**

Genereer via AI een kleine webapplicatie met gebruikersauthenticatie (login/registratie). Voer daarna een grondige beveiligingsaudit uit. Onderzoek specifiek:

- Worden wachtwoorden correct opgeslagen (hashing)?
- Is er bescherming tegen SQL-injectie of andere injectie-aanvallen?
- Worden omgevingsvariabelen correct gebruikt voor gevoelige configuratie?
- Zijn er hardcoded credentials of tokens?
- Zijn er beveiligingsheaders aanwezig?

Documenteer elke bevinding, de ernst ervan en de correctie. Sluit af met een reflectie: wat zegt dit over het gebruik van AI voor beveiligingsgevoelige code?

---