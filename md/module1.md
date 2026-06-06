# Module 1 AI in Programming: wat (en vooral wat NIET)

---

## 1.1 Wat is een AI-assistent eigenlijk?

Stel: je vraagt aan een AI "schrijf een functie die twee getallen optelt". De AI zal hopelijk goed geschreven, werkende code opleveren. Maar hoe?

Niet omdat het "weet" wat optellen is. Niet omdat het je code of vraag "begrijpt". Een AI-assistent is in essentie een heel geavanceerd systeem dat op basis van alles wat het gezien heeft (miljarden regels tekst, documentatie, code, boeken, ...) probeert te voorspellen wat het meest logische volgende woord. Dat is het. Patroonherkenning op grote schaal.

Het model dat hier achter zit is een **GPT** (Generative Pre-trained Transformer). Concreet gaat zo een model telkens als je iets intypt op zoek naar het meest waarschijnlijke vervolg op je tekst‚ zoals de autocomplete op je gsm, maar dan veel complexer en op de schaal van volledige (code)bestanden.

Dit klinkt misschien als een technisch detail, maar het heeft grote gevolgen voor hoe je met AI moet omgaan, ook buiten het programmeren. Want als AI werkt op basis van waarschijnlijkheid in plaats van begrip, dan betekent dat:
- Waarschijnlijke of verwachte output is niet hetzelfde als correcte output.
- Twee keer dezelfde vraag stellen kan twee verschillende antwoorden geven.
- De AI heeft geen flauw idee of de output past binnen je specifieke project of architectuur.

Concreet kan een AI-assistent drie soorten taken uitvoeren:
* **Nieuwe code genereren:** Op basis van een beschrijving schrijft het een functie, stelt het een algoritme voor of werkt het een oplossing uit. *Jij* beschrijft het probleem, de AI levert een eerste versie.
* **Bestaande code aanpassen:** Je levert een stuk code aan en vraagt om het te vereenvoudigen, te optimaliseren of te herschrijven naar een andere stijl of technologie.
* **Code evalueren:** De AI kan suggesties geven, mogelijke fouten aanduiden en alternatieve oplossingen voorstellen.

Onthoud bij al die drie gevallen: de output is een *vertrekpunt*, geen eindproduct.

---

## 1.2 AI op het werk

"AI gaat alle programmeurs vervangen."

Je hebt die uitspraak waarschijnlijk al gehoord. De realiteit is gelukkig niet zo zwart/wit (en eerlijk gezegd ook interessanter).

Binnen een volwassen professionele context wordt AI niet ingezet als vervanging van een developer, maar als tool om efficiënter te werken. Vergelijk het met een schrijnwerker: die heeft een zaag, een hamer, een bijtel, ... Als je hem vraagt waarom hij niet gewoon alles met zijn handen doet, gaat hij u raar aankijken. Tools maken het werk sneller en preciezer. Ze vervangen het expertise van de vakman zelf, die de nodige kennis heeft om de tools goed te gebruike, niet.

Als developer heb je al jaren je IDE, documentatie, StackOverflow en debugging-tools in je toolbox. AI is daar nu gewoon bij gekomen.

Wat wél verandert, is de *rol* van de developer. Die verschuift gedeeltelijk van *schrijven* naar *evalueren en controleren*. Dat klinkt misschien minder diepgaand en gemakkelijker, maar het vereist juist meer inzicht omdat je die birds eye view moet hebben.

**Waar AI vandaag écht nuttig is:**

- **Boilerplate code genereren:** Configuratiebestanden, standaardstructuren, herhalende CRUD-operaties: AI is er snel mee.
- **Prototypes opzetten:** Een eerste werkende versie in korte tijd, die jij nadien met je expertise aanpast en uitbreidt.
- **Documentatie schrijven:** Niemand doet dit graag. AI doet het snel en helpt met het taalkundige aspect.
- **Testcases genereren:** Basisscenario's en randgevallen bedenken gaat met AI een pak sneller en kan je soms laten denken aan gevallen die voor jou nieuw zijn.

Al die verhoogde snelheid heeft echter één belangrijk gevolg: **er moet meer aandacht gaan naar controle en validatie.** Code wordt sneller geproduceerd, maar dat betekent niet dat ze vanzelf correct is. 

Een developer die AI gebruikt zonder kritisch te controleren, zal op termijn alleen maar meer tijd verliezen aan bugs, unmaintainable code, technical debt, ...

Meer dan ooit moet je begrijpen hoe je applicatie in elkaar zit. AI maakt kennis niet overbodig; het maakt ze nóg belangrijker.

---

## 1.3 Wat AI dus NIET kan

AI kan krachtig zijn, maar heeft duidelijke beperkingen. Als je die niet kent, loop je vroeg of laat tegen de lamp.

**Hallucinaties**
AI kan code genereren die er volledig correct uitziet maar in werkelijkheid functies aanroept die niet bestaan, naar libraries verwijst die nooit zijn gemaakt of logica produceert die gewoon fout is. Dit fenomeen heet *hallucination*.

Een voorbeeld: je vraagt om een specifieke npm-package te gebruiken voor een bepaalde taak. De AI noemt een package, geeft je installatiecommando's en codevoorbeelden. Je installeert de package. Die bestaat niet. Alles wat de AI je gaf was nep maar het zag er geloofwaardig uit.

Hoe meer je blindelings vertrouwt op AI-output, hoe moeilijker dit soort fouten te vinden is.

**Onzekerheid zonder signaal**
De AI geeft niet aan hoe zeker het is van een antwoord. Twee keer dezelfde prompt indienen kan twee compleet verschillende resultaten geven, afhankelijk van de versie van het model, de context of de interne willekeur van het systeem. Consistentie is niet gegarandeerd.

**Beperkte context**
Huidige AI-modellen kunnen slechts een deel van je codebase meenemen in hun redenering. Als je een grote applicatie hebt met tientallen onderling afhankelijke bestanden, ziet de AI maar een fractie van het project. Belangrijk inzicht over hoe het systeem als geheel werkt, ontbreekt dan vaak.

**Geen echte intenties**
De AI begrijpt geen doelen. Het herkent patronen. Het kan geen afweging maken tussen twee oplossingen op basis van bredere systeemvereisten, teamafspraken of langetermijnonderhoud. Dat blijft een menselijke taak.

---

## 1.4 Ok, maar wanneer dan wél?

Het gebruik van AI moet altijd een bewuste keuze zijn. Niet elk probleem is geschikt voor AI.

**AI werkt goed wanneer:**
- Het probleem duidelijk en concreet afgebakend is.
- De output eenvoudig te controleren is.
- Het gaat om kleine functies, standaardpatronen of repetitieve taken.
- Fouten beperkte gevolgen hebben.

**AI werkt minder goed wanneer:**
- Een oplossing sterk afhankelijk is van de volledige context van een systeem.
- Fouten grote gevolgen kunnen hebben (denk aan authenticatie, financiële berekeningen, medische software).
- Er sprake is van complexe architecturale beslissingen.

De gouden regel: **gebruik AI enkel als je in staat bent om de volledige output zelf te begrijpen en te controleren.** Als dat niet het geval is, is AI een risico in plaats van een hulpmiddel.

En dan nog één ding (en ja, hier gaan we even de overbezorgde docent uithangen): zorg er zeker voor dat je AI **niet** gebruikt als vervanging voor het inoefenen van de kennis die je in je andere opleidingsonderdelen opdoet. Programmeren leer je door zelf te programmeren. AI kan je daarna sneller maken, maar nooit een basis leggen die er niet is.

---

## 1.5 Quality Control: vertrouw niets zomaar

Elke output die door AI gegenereerd wordt, moet gecontroleerd worden voordat je ze gebruikt. **Dit is geen optionele stap.** Dit is een essentieel onderdeel van het ontwikkelproces.

We zeggen dit met nadruk, want het is verleidelijk om snel te copy-pasten en verder te gaan. Doe het toch niet.

**Wat houdt quality control (QC) dan in?**

**Verifieer de correctheid:** De code moet compileren, uitvoeren zonder fouten én het verwachte resultaat opleveren. Test dit altijd expliciet, ook als de code er logisch uitziet.

**Analyseer de aannames:** AI maakt zonder het je te vragen keuzes over structuur, variabelen en logica. Die hoef jij niet te accepteren. Vraag jezelf bij elk stuk gegenereerde code af: *waarom is dit zo geschreven? Past dit bij mijn situatie?*

**Controleer de consistentie met je codebase:** Gebruikt je project camelCase? Een bepaalde mappenstructuur? Specifieke designpatterns? Gegenereerde code moet daarin passen. Als de AI ineens `met_underscores` begint te schrijven terwijl je volledige codebase `camelCase` gebruikt is dat een probleem, ook al werkt de code technisch gezien correct.

**Beschouw AI-output als onbewezen:** Standaard. Pas nadat je de QC hebt uitgevoerd, mag je aannemen dat het over goede code gaat.

**Werk in kleine stappen:** Integreer nooit grote hoeveelheden AI-code in één keer. Werk iteratief: genereer een klein stuk, test het, valideer het, pas aan waar nodig en ga dan pas verder. Zo hou je controle en vind je problemen vroeg.

Een handige regel: als je een stuk gegenereerde code niet volledig kan uitleggen aan een medestudent, is het nog niet klaar om in je project te gaan.

---

## Oefeningen

### Easy

**E1 — Wat doet AI eigenlijk?**

Klasseer elk van de volgende acties als *genereren*, *aanpassen* of *evalueren*:
- Je vraagt de AI om een functie te schrijven die controleert of een getal priemgetal is.
- Je plakt een bestaande functie in de chat en vraagt of er bugs in zitten.
- Je vraagt de AI om je while-loop te herschrijven als een list comprehension.
- Je vraagt de AI om een `.gitignore`-bestand te maken voor een Python-project.
- Je vraagt de AI welke van twee implementaties performanter is.

---

**E2 — Eerste verkenning: welke tools bestaan er?**

Zoek minstens vier AI-tools op die ingezet worden bij het schrijven of verbeteren van code. Noteer voor elke tool:
- Naam en wat de tool doet in één zin.
- Werkt de tool als plugin in je editor, als website, als CLI-tool, of op een andere manier?
- Is de tool gratis, betaald, of heeft ze een gratis laag?

Voorbeelden om mee te starten: GitHub Copilot, Cursor, Codeium, ChatGPT, Tabnine. Wees niet beperkt tot deze lijst.

---

**E3 — Prompt vergelijken**

Hieronder staan twee prompts voor hetzelfde probleem. Welke is beter? Leg uit waarom in maximaal vijf zinnen en benoem concreet wat er ontbreekt in de slechtere versie.

> **Prompt A:** `schrijf een functie`
>
> **Prompt B:** `Schrijf een JavaScript-functie genaamd filterEven(numbers) die een array van gehele getallen als parameter ontvangt en een nieuwe array teruggeeft met enkel de even getallen. Gebruik een arrow function en de filter-methode.`

---

**E4 — Wanneer wel, wanneer niet?**

Geef voor elk scenario aan of je AI zou inzetten of niet en motiveer:

- Een configuratiebestand voor ESLint aanmaken.
- De encryptielogica schrijven voor een banktoepassing.
- JSDoc-commentaar toevoegen aan een bestaande functie.
- Beslissen welke database het beste past bij een nieuw project.
- Een standaard CRUD-endpoint genereren voor een gebruikersentiteit.

---

**E5 — Hallucination in eigen woorden**

Leg in je eigen woorden uit wat een "hallucination" is bij een AI-model. Geef daarna één eigen voorbeeld (niet het npm-voorbeeld uit de cursus) van hoe dit concreet fout kan lopen.

---

**E6 — Slechte prompt verbeteren**

De prompt hieronder is veel te vaag om een bruikbaar resultaat te geven:

> `maak een applicatie voor een boodschappenlijstje`

Schrijf een verbeterde versie van deze prompt. Denk na over: welke taal/technologie, welke functionaliteit, welke randgevallen, welk formaat voor de output?

---

### Medium

**M1 — Tools vergelijken**

Kies twee AI coding tools en vergelijk ze gestructureerd. Gebruik de volgende criteria:

- Hoe integreer je de tool in je werkflow?
- Welke programmeertalen worden ondersteund?
- Wat zijn de kosten? Wat zijn de gratis opties?
- Wat is het grootste voordeel ten opzichte van de andere tool?
- Wat is de grootste beperking?

Sluit af met een aanbeveling: welke kies jij voor je projectwerk dit semester, en waarom?

---

**M2 — Consistentie testen**

Stuur exact dezelfde prompt twee keer naar een AI-tool in twee aparte gesprekken. Vergelijk de antwoorden:

- Zijn ze identiek? Zo niet: wat verschilt er?
- Is één van de twee duidelijk beter? Waarom?
- Wat zegt dit over hoe je AI-output moet behandelen?

Stuur exact dezelfde prompt nu naar een andere tool. Zijn er grote verschillen?

Documenteer outputs en je conclusie.

---

**M3 — QC in de praktijk**

Vraag een AI-tool om een functie te genereren die controleert of een ingegeven e-mailadres geldig is. Doorloop daarna de volgende QC-stappen en noteer je bevindingen bij elke stap:

1. Compileert de code en werkt ze zonder fouten?
2. Doet de functie wat gevraagd werd voor normale gevallen?
3. Wat gebeurt er bij randgevallen (leeg veld, geen @, twee @'s, dubbele punt, ...)?
4. Welke aannames heeft de AI gemaakt die je niet expliciet vroeg?

---

**M4 — Regels voor verantwoord prompting**

Stel vijf concrete richtlijnen op voor een junior developer die voor het eerst met AI-tools werkt. Dit zijn geen vage tips ("wees kritisch") maar concrete gedragsregels ("controleer altijd of een genoemde library bestaat in de officiële documentatie voordat je ze installeert"). Motiveer elke regel in twee à drie zinnen.

---

**M5 — Code begrijpen via AI**

Gebruik een AI-assistent om te achterhalen wat de volgende functie doet. Stel minstens drie gerichte vervolgvragen om tot een volledig begrip te komen. Documenteer elke vraag en het antwoord.

```python
def verwerk(data):
    gezien = set()
    resultaat = []
    for item in data:
        sleutel = (item['categorie'], item['waarde'] > 100)
        if sleutel not in gezien:
            gezien.add(sleutel)
            resultaat.append(item)
    return resultaat
```

Beantwoord ten slotte: had je dit ook zonder AI kunnen achterhalen? Hoeveel tijd zou dat gekost hebben?

---

**M6 — Prompt iteratie**

Kies een concreet programmeervraagstuk: een functie die een JSON-bestand inleest en valideert. Schrijf drie versies van de prompt, telkens met meer context en precisie. Test elke versie en noteer:
- Wat de output was.
- Wat er beter of slechter was ten opzichte van de vorige versie.
- Hoeveel aanpassingen jij nog zelf moest doen.

Conclusie: wat is het effect van meer context op de bruikbaarheid van de output?

---

**M7 — Echte case opzoeken**

Zoek online een gedocumenteerd geval waarbij AI-gegenereerde code problemen veroorzaakte in een echt project — een GitHub-issue, een blogpost, een post-mortem, een nieuwsartikel. Beschrijf kort wat er misging, welke beperking van AI daarvoor verantwoordelijk was, en welke les je eruit trekt voor je eigen gebruik.

---

### Hard

**H1 — Volledige code review**

Vraag een AI-tool om een functie te genereren die een CSV-bestand inleest, de gegevens valideert (bv. verplichte velden, correcte datatypes) en een gefilterde versie wegschrijft naar een nieuw bestand.

Voer daarna een volledige code review uit. Controleer op:
- Correctheid voor normale gevallen.
- Robuustheid: wat als het bestand niet bestaat, leeg is, of verkeerd geformatteerd is?
- Veiligheid: wordt gebruikersinput ergens onveilig verwerkt?
- Leesbaarheid en consistentie met typische codeerstijl.

Documenteer elke aanpassing die je maakt én waarom.

---

**H2 — AI-gebruiksrichtlijn voor een team**

Stel dat jij en twee medestudenten samen aan een project werken. Schrijf een concrete "AI-gebruiksrichtlijn" van één A4 voor jullie team. Behandel minstens:

- Voor welke taken AI gebruikt mag worden en voor welke niet.
- Hoe gegenereerde code gevalideerd wordt voor ze gecommit wordt.
- Hoe jullie omgaan met code die niemand van het team volledig begrijpt.
- Wat jullie doen bij twijfel over de correctheid of veiligheid van output.

Maak dit zo concreet dat iemand die het document leest exact weet wat te doen.

---

**H3 — Refactoring met AI**

Neem het volgende stuk bewust slecht geschreven code. Gebruik een AI om het te refactoren. Documenteer het volledige proces: welke prompts gebruikte je, wat was de output, wat paste je zelf nog aan, en wat leerde je?

```python
def d(l):
    r = []
    for i in range(len(l)):
        x = 0
        for j in range(len(l)):
            if l[j] < l[i]:
                x = x + 1
        r.append(x)
    return r
```

Sluit af met: wat doet deze functie eigenlijk en hoe zou jij ze nu schrijven: met of zonder AI?

---

### At Home

**@1 — Tool Deep Dive**

Kies één AI-coderingstool (GitHub Copilot, Cursor, Codeium, Tabnine) en gebruik ze actief gedurende één volledige week bij je andere vakken of een zijproject.

Houd een logboek bij. Voor elke dag dat je de tool gebruikt, noteer je:

- Welke taken je ermee probeerde.
- Wanneer de tool je écht verder hielp.
- Wanneer de output onbruikbaar of incorrect was.
- Hoe je je QC-proces toepaste.

---

**@2 — Prompt Engineering Experiment**

Kies een programmeervraagstuk van gemiddelde complexiteit, bvb een zoekalgoritme met filtering of dataverwerking met meerdere stappen.

Schrijf vijf verschillende prompts voor hetzelfde probleem, geordend van vaag naar zeer specifiek en gedetailleerd. Test elke prompt in dezelfde AI-tool en vergelijk de resultaten op:

- Correctheid voor normale gevallen.
- Behandeling van randgevallen.
- Leesbaarheid en stijl van de output.
- Hoeveel aanpassingen jij nog moest doen om de code bruikbaar te maken.