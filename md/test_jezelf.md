# Test Jezelf

---

## Module 1

---
---

### 1.1

---

Wat is de meest accurate beschrijving van hoe een GPT-model werkt?

- **A** Het voorspelt het meest waarschijnlijke volgende woord of teken op basis van trainingsdata.
- B Het begrijpt de betekenis van code en redeneert over correctheid.
- C Het zoekt in een database naar de best passende bestaande oplossing.
- D Het voert de code uit in een sandbox en geeft het resultaat terug.

---

Een medestudent zegt: "De AI heeft mijn functie geschreven en die werkt, dus die code is correct." Leg uit waarom deze redenering niet klopt en wat de student wél zou moeten doen.

*Verwacht antwoord: werkende code != als correcte of kwalitatieve code. De AI baseert zich op patroonherkenning. Zelf analyseren, begrijpen wat de code doet, testen.*

---

Welke van de volgende taken is een voorbeeld van "code evalueren" door een AI?

- **A** De AI wijst op een mogelijke off-by-one fout in je loop en stelt een alternatief voor.
- B De AI schrijft een nieuwe sorteeralgoritme op basis van je beschrijving.
- C De AI herschrijft je functie van Python naar JavaScript.
- D De AI genereert een configuratiebestand voor je project.

---
---

### 1.2

---

Welke uitspraak over de rol van AI in softwareontwikkeling klopt het best?

- **A** AI neemt repetitieve taken over, waardoor de developer meer tijd heeft voor complexere beslissingen.
- B AI vervangt developers omdat het sneller en goedkoper is.
- C AI maakt kennis van programmeren overbodig voor junior developers.
- D AI is enkel nuttig voor het schrijven van documentatie.

---

Waarom zorgt het feit dat AI code *sneller* produceert er juist voor dat kennis van de developer *belangrijker* wordt, in plaats van minder belangrijk?

*Verwacht antwoord: meer output => meer te controleren. Code niet begrijpt => geen QC. Iets over technical debt? Nog te vroeg in de opleiding?*

---

Je start een nieuw project en moet een standaard REST API opzetten met CRUD-operaties voor een eenvoudige entiteit. Wat is de meest zinvolle inzet van AI hier?

- **A** AI gebruiken om de boilerplate structuur te genereren, die jij daarna controleert en aanpast.
- B De AI volledig de architectuur laten bepalen.
- C Geen AI gebruiken, want standaardcode schrijf je sneller zelf.
- D AI vragen om de businesslogica te schrijven, want dat is het moeilijkste deel.

---
---

### 1.3

---

Wat is een "hallucination" in de context van AI-gegenereerde code?

- **A** Code die er syntactisch correct uitziet maar verwijst naar niet-bestaande functies of libraries.
- B Een visuele bug in de UI die de AI introduceert.
- C Een situatie waarbij de AI weigert een antwoord te geven.
- D Code die wel werkt maar te traag is.

---

Je gebruikt een AI om een nieuwe library te leren kennen. De AI geeft je een codevoorbeeld met een methode `library.fetchData({ cache: true })`. Je vindt deze methode nergens in de officiële documentatie. Wat is de meest waarschijnlijke verklaring?

- **A** De AI heeft een hallucination geproduceerd: de methode bestaat niet.
- B De documentatie is verouderd en de methode bestaat wel degelijk.
- C Je zoekt op de verkeerde plek in de documentatie.
- D De methode is intern en wordt niet gedocumenteerd.

---
---

### 1.4

---

Voor welk van de volgende taken is AI het *minst* geschikt?

- **A** Het bepalen van de beveiligingsarchitectuur voor een systeem dat medische persoonsgegevens verwerkt.
- B Het schrijven van een eenvoudige hulpfunctie die een datum formatteert.
- C Het genereren van een configuratiebestand voor een nieuwe Express-server.
- D Het voorstellen van namen voor variabelen in een bestaande functie.

---

Een developer zegt: "Ik gebruik AI voor alles, ook voor dingen die ik zelf nog niet begrijp, zo leer ik sneller." Wat is het grootste risico van deze aanpak?

- **A** De developer kan gegenereerde code niet beoordelen op correctheid en kwaliteit, en bouwt zo op een wankele basis verder.
- B De developer leert te snel en mist de basisprincipes niet.
- C AI-tools zijn te duur om voor alles te gebruiken.
- D De developer zal te afhankelijk worden van één specifieke tool.

---
---

### 1.5

---

Je integreert AI-gegenereerde code in je project. De code compileert en de basisfunctionaliteit werkt. Wat moet je als volgende stap doen?

- **A** De code lezen, de aannames begrijpen, consistentie met de codebase controleren en edge cases testen.
- B De code committen — ze werkt, dus ze is goed.
- C De code nog eens aan de AI laten controleren.
- D De code tonen aan je teamlead en pas dan committen.

---

Wat is de beste omschrijving van "AI-output als onbewezen beschouwen"?

- **A** Je gaat er standaard van uit dat AI-output incorrect is tot dat je ze gevalideerd hebt.
- B Je gebruikt AI-output nooit, tenzij je ze volledig zelf herschreven hebt.
- C Je vraagt altijd een tweede AI-tool om de output te verifiëren.
- D Je gebruikt AI-output enkel voor niet-kritische onderdelen van je project.

---
---

## Module 2

### 2.1

---

Waarom leidt een vage prompt vaak tot onbruikbare output?

- **A** De AI vult de ontbrekende informatie in met aannames die niet per se kloppen.
- B De AI weigert te antwoorden als de prompt niet volledig is.
- C Vage prompts worden automatisch genegeerd door het model.
- D De AI geeft altijd aan wanneer een prompt te vaag is.

---

Herschrijf de volgende prompt zodat hij voldoet aan de kenmerken van een goede prompt:

> `"schrijf iets voor een review te posten"`

Denk na over context, input, output en beperkingen. Er is geen één correct antwoord, maar je verbeterde versie moet alle vier elementen bevatten.

---

Prompting wordt in de cursus vergeleken met het schrijven van requirements. Wat is de belangrijkste reden voor die vergelijking?

- **A** Hoe preciezer en vollediger de beschrijving, hoe bruikbaarder het resultaat.
- B Beide gebruiken een formele programmeertaal.
- C Zowel requirements als prompts worden automatisch omgezet naar code.
- D Beide worden altijd geschreven door de klant, niet de developer.

---
---

### 2.2

---

Bekijk de volgende prompt en benoem welke van de drie structuuronderdelen (input, output, beperkingen/aanpak) aanwezig zijn en welke ontbreken:

> `"Schrijf een functie die e-mailadressen valideert."`

---

Waarom dwingt het schrijven van een gestructureerde prompt je om zelf eerst na te denken over het probleem?

- **A** Omdat je input, output en beperkingen pas kan beschrijven als je het probleem zelf begrijpt.
- B Omdat de AI anders de prompt weigert te verwerken.
- C Omdat gestructureerde prompts automatisch gevalideerd worden door de tool.
- D Omdat de tool enkel reageert op prompts in een specifiek formaat.

---
---

### 2.3

---

Je hebt een werkende functie, maar de code is moeilijk leesbaar door slechte variabelenamen en ontbrekende commentaar. Je wil de AI inzetten om dit te verbeteren. Welk patroon gebruik je?

- **A** Transform
- B Generate
- C Evaluate
- D Generate + Evaluate

---

Welk patroon gebruik je als je de AI vraagt om twee implementaties van hetzelfde algoritme te vergelijken op vlak van leesbaarheid en performantie?

- **A** Evaluate
- B Generate
- C Transform
- D Geen van de drie

---
---

### 2.4

---

Wat is het voornaamste voordeel van het meegeven van voorbeelden in een prompt?

- **A** Je geeft de AI concrete verwachtingen mee waardoor de output gerichter is.
- B De AI kan sneller antwoorden omdat ze minder hoeft na te denken.
- C Voorbeelden vervangen de beschrijving van de input en output volledig.
- D Zonder voorbeelden weigert de AI om code te genereren.

---

Je wil een functie laten genereren die een telefoonnummer valideert. Schrijf een prompt die minstens drie voorbeelden bevat, waarvan één niet de happy path volgt. Leg daarna uit welke aanname je met elk voorbeeld uitsluit.

---

Wat bedoelt de cursus met het "happy path"?

- **A** Het normale verloop waarbij de input exact is wat de functie verwacht.
- B De meest optimistische testcase waarbij alles correct verloopt.
- C De snelste uitvoeringsroute door een algoritme.
- D Een specifiek designpatroon voor foutafhandeling.

---
---

### 2.5

---

Je stuurt een prompt en de output is gedeeltelijk correct: de logica klopt, maar de foutafhandeling ontbreekt. Wat is de beste vervolgstap?

- **Een gerichte vervolgprompt sturen die vraagt om foutafhandeling toe te voegen aan de bestaande code.**
- De volledige prompt opnieuw sturen en hopen op een beter resultaat.
- De output weggooien en de taak handmatig uitvoeren.
- De foutafhandeling zelf toevoegen zonder de AI verder te gebruiken.

---

Waarom is het aangeraden om in kleine stappen te werken bij het iteratief prompting?

- **Kleine iteraties zijn makkelijker te evalueren en bij te sturen dan grote sprongen.**
- De AI heeft een beperkte geheugenruimte en vergeet grote prompts.
- Grote prompts worden automatisch afgekapt door het systeem.
- Kleine prompts kosten minder tokens en zijn dus goedkoper.

---
---

## Module 3

### 3.1

---

Wanneer is AI-gegenereerde code het nuttigst bij het bouwen van een prototype?

- **Als je snel een draft wil hebben om te testen of te tonen, die je nadien zelf verder uitwerkt.**
- Als je de code rechtstreeks in productie zet zonder aanpassingen.
- Als je de code nooit zelf hoeft te begrijpen omdat een collega dat later doet.
- Als het project te complex is om zelf aan te beginnen.

---

Je gebruikt AI om snel een prototype te bouwen voor een klantpresentatie. De code werkt. Wat is de volgende stap voordat je het prototype verder ontwikkelt?

- **De code lezen, begrijpen en evalueren of de structuur geschikt is voor verdere ontwikkeling.**
- Het prototype rechtstreeks gebruiken als basis voor de productiecodebase.
- De AI vragen om het prototype automatisch te verbeteren tot productiekwaliteit.
- Het prototype tonen aan de klant en daarna weggooien.

---
---

### 3.2

---

Waarom is het genereren van boilerplate code een bijzonder goede use case voor AI?

- **De structuur is voorspelbaar en de output is eenvoudig te controleren.**
- Boilerplate code is altijd correct, ongeacht de context.
- Boilerplate code hoeft nooit aangepast te worden aan het project.
- AI kan boilerplate code sneller uitvoeren dan een compiler.

---

Wanneer je AI inzet voor het genereren van een design pattern, wat is dan de meest kritische extra stap ten opzichte van een eenvoudige functie genereren?

- **Je moet voldoende context over je project meegeven, zodat de output aansluit bij je architectuur.**
- Je moet de AI altijd twee keer dezelfde prompt sturen voor verificatie.
- Design patterns mogen nooit door AI gegenereerd worden.
- Je moet altijd een andere programmeertaal kiezen dan de AI voorstelt.

---
---

### 3.3

---

Je gebruikt AI om een `.env`-bestand te genereren voor een nieuw project. Wat is het eerste wat je controleert?

- **Of er geen echte credentials of API-sleutels in staan en of het bestand uitgesloten is van versiebeheer.**
- Of het bestand de juiste bestandsnaam heeft.
- Of de AI de variabelen alfabetisch gesorteerd heeft.
- Of het bestand compatibel is met alle besturingssystemen.

---

Welke van de volgende risico's is specifiek voor AI-gegenereerde configuratiebestanden en minder relevant bij het genereren van gewone functies?

- **Gevoelige informatie zoals API-sleutels kan onbedoeld in de configuratie belanden.**
- De code kan syntaxisfouten bevatten.
- De code is mogelijk niet leesbaar.
- De output kan variëren bij dezelfde prompt.

---
---

### 3.4

---

Je integreert AI-gegenereerde code in een project dat camelCase gebruikt. De gegenereerde code gebruikt snake_case. Wat doe je?

- **De AI vragen om de code opnieuw te genereren met expliciete vermelding van de naamgevingsconventie.**
- De code zo overnemen — naamgeving is cosmetisch en heeft geen invloed op functionaliteit.
- Een nieuw bestand aanmaken apart van de rest van het project voor de gegenereerde code.
- De projectconventie aanpassen naar snake_case zodat alles consistent is met de AI-output.

---

Waarom is het belangrijk om de gebruikte libraries van een project mee te geven in de prompt bij het genereren van code?

- **Zodat de AI geen alternatieve libraries introduceert die al afgedekt zijn door bestaande dependencies.**
- Anders genereert de AI altijd code in een andere programmeertaal.
- Libraries zijn verplicht vermeld te worden voor licentiedoeleinden.
- AI kan niet correct werken zonder een lijst van alle dependencies.

---
---

### 3.5

---

Je ontvangt een AI-gegenereerde functie die correct werkt, maar een dubbele lus gebruikt waar één lus voldoende zou zijn. Wat is het probleem?

- **De implementatie is inefficiënt en kan leiden tot performance issues bij grotere datasets.**
- De functie heeft een syntaxisfout.
- Er is geen probleem, werkende code is goede code.
- De functie zal enkel werken in specifieke browsers.

---

Geef een voorbeeld van een culturele of contextuele aanname die een AI kan maken in gegenereerde code die in een Belgische context fout is. Leg uit hoe je dit detecteert en corrigeert.

---

Wat is de meest gevaarlijke categorie van tekortkomingen in AI-gegenereerde code, en waarom?

- **Logicafouten, omdat ze niet altijd zichtbaar zijn bij normale uitvoering maar zich pas uiten bij specifieke invoer of randgevallen.**
- Syntaxfouten, omdat ze de code meteen laten crashen.
- Slechte variabelenamen, omdat ze de leesbaarheid verlagen.
- Ontbrekende commentaar, omdat dat de onderhoudbaarheid beïnvloedt.

---
---

### 3.6

---

Je voegt een groot stuk AI-gegenereerde code toe aan je project in één commit. Twee dagen later falen er plotseling drie unit tests. Wat is het probleem met deze werkwijze?

- **Door de grote hoeveelheid code in één stap te integreren, is het moeilijk te isoleren welk stuk de oorzaak is van de falende tests.**
- Unit tests zijn niet compatibel met AI-gegenereerde code.
- Er is geen probleem — falende tests na een grote commit zijn normaal.
- De AI had de tests mee moeten genereren bij de code.

---

Alle bestaande tests slagen na het toevoegen van nieuwe AI-gegenereerde code. Betekent dit dat de integratie geslaagd is?

- **Niet noodzakelijk — de nieuwe code kan technisch werken maar toch niet voldoen aan de oorspronkelijke vereisten, of de tests dekken mogelijk niet alle relevante scenario's.**
- Ja, als de tests slagen is de code correct en volledig geïntegreerd.
- Ja, als zowel de nieuwe als de bestaande tests slagen is er niets meer te controleren.
- Nee, want AI-gegenereerde code kan nooit volledig correct zijn.

---
---

## Module 4

### 4.1

---

Je vraagt AI om een onbekende functie uit te leggen. De uitleg klinkt logisch en volledig. Wat is de juiste vervolgstap?

- **De uitleg gebruiken als startpunt om de code zelf te doorlopen en te verifiëren.**
- De uitleg accepteren en verdergaan — de AI heeft het al geanalyseerd.
- De AI vragen om de uitleg te bevestigen met een tweede prompt.
- De code kopiëren en testen zonder ze verder te lezen.

---

Waarom volstaat het niet om de AI-uitleg van een stuk code te kennen, zonder de code zelf te begrijpen? Geef een concreet voorbeeld van wanneer dit mis kan gaan.

---

Welke situatie is het meest geschikt voor het gebruik van AI als code-uitlegger?

- **Je werkt met een onbekende library en wil snel begrijpen hoe een specifieke functie gebruikt wordt.**
- Je wil weten of de code correct is zonder ze zelf te lezen.
- Je wil AI de volledige verantwoordelijkheid geven voor het begrijpen van de codebase.
- Je hebt code die je zelf schreef en wil bevestiging dat ze correct is.

---
---

### 4.2

---

Wat beschrijft de "data flow" van een programma?

- **Hoe gegevens doorheen het programma bewegen en veranderen.**
- De volgorde waarin functies worden opgeroepen.
- De structuur van de mappenindeling van een project.
- De manier waarop externe APIs data aanleveren.

---

Bekijk de volgende functie. Als je niet zeker bent over een deel van de functie, zoek op. Beschrijf de control flow én de data flow. Welke impliciete aanname maakt de functie over zijn input?

```javascript
const berekenGemiddelde = (getallen) => {
  const som = getallen.reduce((acc, val) => acc + val, 0);
  return som / getallen.length;
};
```

---
---

### 4.3

---

Je vraagt AI om je code te reviewen en ze geeft vijf suggesties. Eén ervan stelt voor om een variabelenaam te veranderen naar iets wat minder duidelijk is in de context van jouw project. Wat doe je?

- **De suggestie afwegen op basis van de context en verwerpen als ze de leesbaarheid niet verbetert.**
- De suggestie overnemen — de AI heeft meer kennis van goede naamgeving.
- Alle suggesties altijd overnemen voor een consistente aanpak.
- De review opnieuw doen met een andere AI-tool die betere suggesties geeft.

---

Op welke punten is het meest zinvol om AI in te zetten als code reviewer?

- **Voor stijlconsistentie, voor de hand liggende logicafouten en ontbrekende foutafhandeling.**
- Voor architecturale beslissingen over de gehele applicatie.
- Voor het beoordelen of de businesslogica correct geïmplementeerd is.
- Voor het beoordelen of de teamcommunicatie rond de code goed verlopen is.

---
---

### 4.4

---

Je gebruikt AI om een functie te verbeteren op vlak van leesbaarheid. De AI stelt voor om de functienaam `processData` te veranderen naar `pd`. Wat is je beoordeling?

- **Verwerpen — de verkorte naam vermindert de leesbaarheid in plaats van ze te verbeteren.**
- Accepteren — kortere namen zijn efficiënter.
- Accepteren als de rest van de codebase ook afkortingen gebruikt.
- Vragen aan de AI om een derde optie te genereren.

---

Bekijk de volgende twee versies van dezelfde functionaliteit. Welke scoort beter op leesbaarheid en structuur en waarom?

```javascript
// Versie A
const f = (u) => u.filter(x => x.a && x.b > 18).map(x => x.n);

// Versie B
const haalNamenOpVanActieveVolwassenen = (gebruikers) => {
  const actieveVolwassenen = gebruikers.filter(
    gebruiker => gebruiker.isActief && gebruiker.leeftijd > 18
  );
  return actieveVolwassenen.map(gebruiker => gebruiker.naam);
};
```

---
---

### 4.5

---

Waarom is het aangeraden om je beoordelingscriteria vast te leggen vóór je de gegenereerde alternatieven bekijkt?

- **Om te voorkomen dat je onbewust kiest voor de oplossing die er het indrukwekkendst uitziet in plaats van de meest geschikte.**
- Omdat AI anders niet weet op welke criteria ze moet optimaliseren.
- Omdat criteria achteraf vastleggen niet toegelaten is in professionele omgevingen.
- Omdat AI de criteria automatisch toepast als je ze vooraf meegeeft in de prompt.

---

Je genereert via AI drie implementaties voor hetzelfde probleem. Welke aanpak is het meest professioneel?

- **Elk alternatief aftoetsen aan vooraf bepaalde criteria en de keuze kunnen verantwoorden.**
- De kortste versie kiezen — minder code betekent minder fouten.
- De eerste versie kiezen — de AI genereert de beste oplossing als eerste.
- De implementatie kiezen die het meest lijkt op voorbeelden die je online gevonden hebt.

---
---

### 4.6

---

Je hebt een bug. Je geeft de code aan de AI en past de voorgestelde fix toe. De bug is verdwenen. Is het probleem opgelost?

- **Niet noodzakelijk — als je niet begrijpt waarom de fix werkt, kan hetzelfde probleem later op een andere plek opduiken zonder dat je het herkent.**
- Ja, als de code werkt is de bug opgelost.
- Ja, zolang alle bestaande tests slagen.
- Niet noodzakelijk — je moet de fix altijd laten bevestigen door een tweede AI-tool.

---

Wat is de juiste volgorde bij het debuggen met AI?

- Reproduceer de fout
- Identificeer het probleemgebied
- Vraag AI om mogelijke oorzaken
- Begrijp en evalueer de voorgestelde oplossing
- Pas aan

---
---

## Module 5

---

### 5.1

---

Wat is een stack trace?

- **Een overzicht van welke functies werden aangeroepen en op welke lijnen, op het moment dat een fout optrad.**
- Een lijst van alle variabelen en hun waarden op het moment van een fout.
- Een samenvatting van alle fouten die ooit in het programma optraden.
- Een debugtool die automatisch de oorzaak van een fout aanduidt.

---

Je geeft een stack trace en de bijbehorende code aan een AI-tool. De AI stelt voor dat het probleem in functie `A` zit, maar jij vermoedt dat het in functie `B` zit. Wat doe je?

- **Je eigen hypothese testen, want de AI kan het bij het verkeerde eind hebben.**
- De AI volgen — ze heeft de volledige code geanalyseerd.
- Beide functies tegelijk aanpassen en kijken of de fout verdwijnt.
- Een nieuwe AI-tool vragen om een tweede mening.

---
---

### 5.2

---

Wat is het doel van een "minimal failing example"?

- **Het kleinste stuk code isoleren dat de fout nog reproduceert, zodat de oorzaak duidelijker wordt.**
- De code zo klein mogelijk maken zodat ze sneller uitgevoerd wordt.
- Een vereenvoudigde versie van de code genereren die niet meer crasht.
- AI de kans geven om de volledige codebase te analyseren.

---

Waarom is reproduceerbaar zijn een vereiste voordat je begint met het zoeken naar een oplossing? Wat is het risico als je een bug probeert op te lossen die je niet consistent kan reproduceren?

---
---

### 5.3

---

Wat is het verschil tussen trial-and-error debugging en hypothesegedreven debugging?

- **Bij hypothesegedreven debugging formuleert de developer een mogelijke oorzaak en test die gericht; bij trial-and-error worden willekeurig wijzigingen aangebracht.**
- Trial-and-error is sneller, hypothesegedreven is nauwkeuriger.
- Trial-and-error werkt enkel voor syntaxisfouten; hypothesegedreven debugging voor logicafouten.
- Er is geen functioneel verschil — beide leiden tot hetzelfde resultaat.

---

Je geeft een bugbeschrijving aan AI en ze stelt drie mogelijke oorzaken voor. De eerste klinkt het meest aannemelijk. Wat is de juiste aanpak?

- **De plausibiliteit van elke oorzaak zelf beoordelen en de meest gerichte test uitvoeren om te verifiëren.**
- De eerste oorzaak onmiddellijk fixen — de AI stelt ze als eerste voor omdat ze het meest waarschijnlijk is.
- Alle drie de oorzaken gelijktijdig aanpassen om zeker te zijn dat de bug opgelost is.
- De bugbeschrijving opnieuw sturen totdat de AI zekerheid geeft over de oorzaak.

---
---

### 5.4

---

Wat onderscheidt een code smell van een bug?

- **Een code smell is een structureel of kwaliteitsprobleem dat de code moeilijker maakt om te begrijpen of onderhouden, maar hoeft geen incorrecte code te zijn.**
- Een code smell veroorzaakt altijd een runtime fout; een bug veroorzaakt logische fouten.
- Code smells zijn enkel relevant in grote projecten; bugs in kleine.
- Er is geen verschil — beide termen beschrijven incorrecte code.

---

Identificeer minstens drie code smells in de volgende functie en leg per smell uit waarom het een probleem is:

```javascript
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

*1. onduidelijke naamgeving — `f`, `d`, `r`, `val` zeggen niets over hun betekenis*
*2. duplicatie — de binnenste structuur (controleer val > 0, controleer active, bereken resultaat) is twee keer identiek herhaald*
*3. te diep geneste condities, drie niveaus diep nesten maakt de logica moeilijk te volgen*
*4. magische getallen, `1.21` en `1.06` zijn niet benoemd en onduidelijk (BTW-percentages?)*
*5. `console.log("ok")` is dode debugcode die niet thuishoort in productie*

---

Je gebruikt AI om code smells in een functie te detecteren. De AI markeert de functie als "te lang" en stelt voor om ze op te splitsen in vier kleinere functies. Wat is de juiste reactie?

- **Beoordelen of de opsplitsing de leesbaarheid en onderhoudbaarheid effectief verbetert in de context van dit project.**
- De opsplitsing overnemen — langere functies zijn altijd slechter.
- De suggestie weigeren — de AI begrijpt de businesslogica niet.
- De functie verder uitbreiden zodat ze nog meer doet en de opsplitsing vermijdt.

---
---

### 5.5

---

Wat is de definitie van refactoring?

- **Code herstructureren zonder het externe gedrag te veranderen, met als doel de kwaliteit te verbeteren.**
- Code herschrijven om nieuwe functionaliteit toe te voegen.
- Bugs oplossen door de logica van de code aan te passen.
- Code optimaliseren zodat ze sneller uitgevoerd wordt.

---

Je refactort een functie en de AI stelt voor om de naam te veranderen van `verwerk` naar `filterEnBerekenTotaal`. Tegelijkertijd stelt de AI voor om een fout in de berekeningslogica te corrigeren. Waarom ga je dit best wel of niet in één operatie doen?

---

AI stelt voor om een functie van veertig regels op te splitsen in zeven kleine functies. Wat is een geldige reden om dit voorstel niet volledig over te nemen?

- **De opsplitsing introduceert zeven nieuwe namen die in de context van dit project minder duidelijk zijn dan de oorspronkelijke structuur.**
- Meer functies betekent altijd meer complexiteit.
- AI mag geen refactoringvoorstellen doen voor functies langer dan twintig regels.
- Refactoring mag enkel uitgevoerd worden door senior developers.

---
---

### 5.6

---

Wat is een regressie in de context van softwareontwikkeling?

- **Bestaande functionaliteit die onbedoeld kapot gaat door een wijziging elders in de code.**
- Een nieuwe bug die wordt geïntroduceerd tijdens het schrijven van nieuwe functionaliteit.
- Een situatie waarbij de code trager wordt na een optimalisatie.
- Een fout die enkel optreedt op oudere versies van een programmeertaal.

---

Waarom is het aangeraden om tests te schrijven vóór je begint met refactoring, ook als de code al werkt?

---

Je refactort een module en voert na elke gewijzigde functie de volledige testsuite uit. Na de derde functie falen er twee tests. Wat is het voordeel van deze werkwijze ten opzichte van alle functies in één keer aanpassen?

- **Je weet exact welke wijziging de falende tests veroorzaakte, waardoor het probleem eenvoudig te isoleren is.**
- Er is geen voordeel — meer testrondes kosten meer tijd.
- AI kan de falende tests automatisch herstellen als je ze per functie uitvoert.
- Kleine stappen verminderen de kans dat er überhaupt tests falen.

---
---

## Module 6

---

### 6.1

---

Je vraagt AI om testcases te genereren voor een functie die je net schreef. De AI genereert vijf tests en ze slagen alle vijf. Wat betekent dat?

- **De tests passen bij het gedrag van de functie, maar dat gedrag kan zelf incorrect zijn.**
- De functie is correct geïmplementeerd.
- De tests zijn correct geformuleerd.
- Je hebt geen verdere verificatie nodig.

---

Leg uit wat het risico is van AI-gegenereerde tests valideren aan de hand van de code in plaats van aan de hand van de specificatie. Geef een concreet voorbeeld.

---

Welke types testcases genereert AI typisch niet automatisch als je ze niet expliciet vraagt?

- **Tests voor edge cases die specifiek zijn aan de businesscontext van jouw applicatie.**
- Tests voor het standaard happy path.
- Tests waarbij de functie correct werkt met normale invoer.
- Tests die bevestigen dat een functie een bepaald type teruggeeft.

---
---

### 6.2

---

Je test een functie die gebruikersinput valideert. De AI genereert testdata met tien correcte e-mailadressen en twee incorrecte. Wat is het probleem met deze testdata?

- **De testdata dekt waarschijnlijk onvoldoende variatie aan incorrecte formaten, randgevallen en culturele variaties.**
- Er zijn te veel correcte adressen.
- Mock data mag niet gebruikt worden voor validatiefuncties.
- Er is geen probleem twee incorrecte adressen is voldoende voor een validatietest.

---

Waarom is het beter om mock data te gebruiken in plaats van echte externe afhankelijkheden bij unit tests?

- **Tests worden onbetrouwbaar als ze afhankelijk zijn van externe services die kunnen uitvallen, traag zijn of inconsistente data teruggeven.**
- Mock data is altijd correcter dan echte data.
- Tests met echte afhankelijkheden zijn altijd te traag.
- Echte externe afhankelijkheden mogen enkel gebruikt worden in productie.

---
---

### 6.3

---

Wat is een "flaky test"?

- **Een test die willekeurig slaagt of faalt, ongeacht of de code correct is.**
- Een test die enkel het happy path dekt.
- Een test die te lang duurt om uitgevoerd te worden.
- Een test die gegenereerd werd door AI zonder menselijke controle.

---

Je testsuite dekt alle happy path-scenario's en alle tests slagen. Een collega merkt op dat er geen tests zijn voor ongeldige input. Wat is het risico?

- **De code kan crashen of onverwacht gedrag vertonen bij ongeldige input en de testsuite detecteert dat niet.**
- Er is geen risico als het happy path werkt, werkt de rest ook.
- Tests voor ongeldige input zijn enkel nodig in productieomgevingen.
- De testsuite is onvolledig maar dat is acceptabel als de deadline nadert.

---
---

### 6.4

---

Waarom is onjuiste documentatie erger dan geen documentatie?

- **Een developer die onjuiste documentatie vertrouwt, maakt fouten die ze met geen documentatie niet gemaakt zou hebben.**
- Documentatie neemt opslagruimte in beslag.
- Onjuiste documentatie zorgt ervoor dat de code trager uitgevoerd wordt.
- Er is geen situatie waarbij onjuiste documentatie erger is dan geen documentatie.

---

Je gebruikt AI om documentatie te genereren voor de volgende functie. De AI beschrijft ze als "berekent de prijs inclusief BTW". Wat ontbreekt er in die beschrijving en hoe zou je de documentatie verbeteren?

```javascript
const berekenPrijsInclBTW = (prijs, btwPercentage = 21) => {
  if (prijs < 0) throw new Error("Prijs mag niet negatief zijn");
  return prijs * (1 + btwPercentage / 100);
};
```

*1. de parameter `prijs` en zijn type (getal, niet negatief)*
*2. de parameter `btwPercentage` met standaardwaarde 21*
*3. het returntype (getal)*
*4. de uitzondering die gegooid wordt bij negatieve prijs. Een volledige documentatie beschrijft al deze elementen, inclusief de randgevallen en de betekenis van de standaardwaarde*

---

Voor welk type documentatie is AI het meest onmiddellijk nuttig?

- **Inline commentaar en functiedocumentatie op basis van bestaande code.**
- Architecturale beslissingen en hun motivatie.
- Gebruikershandleidingen voor eindgebruikers zonder technische achtergrond.
- Juridische disclaimers en licentieteksten.

---
---

### 6.5

---

Je gebruikt AI om een technische samenvatting te schrijven van een complexe bugfix. De samenvatting is technisch correct maar bevat termen als "race condition", "mutex" en "atomic operation". De samenvatting moet naar een niet-technische projectmanager gestuurd worden. Wat doe je?

- **De samenvatting aanpassen zodat de kernboodschap begrijpelijk is voor iemand zonder technische achtergrond.**
- De samenvatting doorsturen als de projectmanager de termen niet kent, kan hij vragen stellen.
- Een nieuwe AI-prompt sturen met de instructie "schrijf voor een niet-technisch publiek" en de output overnemen zonder controle.
- De samenvatting enkel doorsturen als de projectmanager er expliciet om vraagt.

---

Wat is het grootste risico bij het gebruik van AI-gegenereerde commit messages of PR-beschrijvingen zonder aanpassing?

- **Ze missen de context en motivatie die enkel de developer kent, waardoor toekomstige developers niet begrijpen waarom een wijziging gemaakt werd.**
- Ze zijn altijd te lang voor het versiebeheersysteem.
- Ze bevatten automatisch broncode die niet in een commit message thuishoort.
- Versiebeheersystemen weigeren AI-gegenereerde tekst.

---
---

## Module 7

---

### 7.1

---

Je genereert een stuk code via een AI-tool en integreert het in een commercieel project. Wie draagt juridische verantwoordelijkheid als de code inbreuk maakt op een licentie?

- **De developer die de code gebruikte en integreerde in het project.**
- De aanbieder van de AI-tool, want zij zijn verantwoordelijk voor de trainingsdata.
- De originele auteur van de code waarop de AI zich baseerde.
- Niemand, want AI-gegenereerde code valt buiten bestaande wetgeving.

---

Welke actie is het meest verantwoord bij het gebruik van AI-gegenereerde code in een commercieel project?

- **Nagaan welk licentiebeleid de gebruikte AI-tool hanteert en of de projectvereisten dit toelaten.**
- De code integreren zonder verdere stappen, want AI-tools garanderen licentievrije output.
- Alle gegenereerde code handmatig herschrijven om licentieproblemen te vermijden.
- Enkel AI-tools gebruiken die gratis zijn, want gratis tools hebben geen licentieproblemen.

---

### 7.2

---

Je wil een AI-tool vragen om een databasequery te debuggen. De query bevat een echte klantnaam en een intern tabelschema. Wat doe je?

- **De query anonimiseren: echte namen vervangen door placeholders, het schema vereenvoudigen tot wat nodig is voor de debug.**
- De query rechtstreeks in de prompt plakken — de AI-tool is veilig.
- De query enkel sturen als je een betaald abonnement hebt, want dan wordt data niet opgeslagen.
- Enkel de foutmelding sturen zonder de query, want de AI kan de bug ook zonder context vinden.

---

Je genereert via AI een loginformulier met serversideverwerking. De AI genereert een query als: `"SELECT * FROM gebruikers WHERE naam = '" + invoer + "'"`. Wat is het probleem?

- **De query is kwetsbaar voor SQL-injectie omdat gebruikersinvoer niet gesanitiseerd wordt.**
- De query is te lang en zal langzamer uitvoeren.
- De query gebruikt `SELECT *` in plaats van specifieke kolomnamen.
- Er is geen probleem — de AI heeft de query correct gegenereerd.

---
---

### 7.3

---

Je werkt als stagiair bij een bedrijf. Je ontdekt dat er geen expliciet beleid is over AI-gebruik. Je wil een AI-tool gebruiken om een interne module te debuggen. Wat doe je?

- **Eerst navragen bij je begeleider of supervisor of en hoe AI-tools gebruikt mogen worden.**
- De tool gewoon gebruiken.
- De tool gebruiken maar de output niet bewaren.
- Wachten tot er een beleid is.

---

Je hebt een groot deel van een schoolopdracht laten genereren via AI. De opdracht vraagt om een individuele oplossing. Wat zijn je verplichtingen op vlak van transparantie, en welke risico's loop je als je dit niet correct aanpakt?

---
---

### 7.4

---

Waarom is transparantie over AI-gebruik professioneler dan het verbergen ervan, ook als het "niet verplicht" is?

---
---

### 7.5

Beschrijf het verschil tussen een developer die AI "goed gebruikt" en een developer die er "afhankelijk van is geworden". Gebruik concrete voorbeelden van gedrag dat het onderscheid illustreert.

---
---

## Module 8

---

### 8.1

---

Wat is het voornaamste verschil tussen een AI gebruiken via een chatvenster en een AI die geïntegreerd is in je code-editor?

- **Een geïntegreerde AI ziet meer context, je bestanden, je foutmeldingen, je projectstructuur, zonder dat jij die handmatig moet meesturen.**
- IDE-integraties zijn altijd duurder dan chatinterfaces.
- Chatvensters zijn accurater omdat ze minder context hebben om door in de war te raken.
- Er is geen functioneel verschil, enkel een verschil in gebruiksgemak.

---

Je opent een project in een AI-ondersteunde editor. Het project bevat een `.env`-bestand met een databasewachtwoord. Wat controleer je als eerste?

- **Of de AI-tool het `.env`-bestand meeneemt als context en zo ja, of dat in lijn is met het privacybeleid van de tool en je organisatie.**
- Of het `.env`-bestand correct gesyntaxeerd is.
- Of het wachtwoord sterk genoeg is.
- Niets — `.env`-bestanden zijn standaard uitgesloten van AI-context.

---
---

### 8.2

---

Wat is het voordeel van een instructiebestand (zoals `.cursorrules`) ten opzichte van projectcontext telkens opnieuw in een prompt zetten?

- **De projectcontext, conventies en afspraken worden automatisch meegenomen bij elke interactie, zonder dat je ze telkens opnieuw hoeft te beschrijven.**
- Instructiebestanden zijn sneller verwerkt door de AI dan tekst in een prompt.
- Instructiebestanden vervangen de noodzaak om code te reviewen.
- Enkel instructiebestanden in `.json`-formaat worden door AI-tools herkend.

---

Je werkt aan een project met tientallen bestanden. Je gebruikt een AI-tool met codebase-indexering. Je vraagt: "Hoe wordt gebruikersauthenticatie geïmplementeerd in dit project?" Wat is het voordeel van codebase-indexering bij deze vraag?

- **De AI kan het antwoord baseren op de daadwerkelijke implementatie in het project, in plaats van een generiek antwoord te geven op basis van trainingsdata.**
- De AI kan de vraag sneller beantwoorden omdat ze minder hoeft te lezen.
- Codebase-indexering garandeert dat het antwoord altijd correct is.
- Je hoeft geen projectcontext meer mee te geven in instructiebestanden.

---
---

### 8.3

---

Je vraagt een AI om een nieuwe validatiefunctie te schrijven voor je project. Er bestaan al drie vergelijkbare validatiefuncties in `utils/validators.js`. Je stuurt dat bestand niet mee. Wat is het meest waarschijnlijke resultaat?

- **De AI schrijft een nieuwe functie die de bestaande niet kent, wat leidt tot duplicatie of inconsistentie.**
- De AI weigert de functie te schrijven omdat er onvoldoende context is.
- De AI raadt automatisch welke bestanden relevant zijn en neemt ze mee.
- De AI schrijft een generieke validatiefunctie die altijd correct is, ongeacht de bestaande code.

---

Wat is de beste manier om stabiele projectinformatie (architectuur, frameworks, conventies) aan een AI-tool mee te geven?

- **Éénmalig vastleggen in een instructiebestand dat de tool automatisch meeneemt.**
- Bij elke prompt opnieuw vermelden.
- Vertrouwen dat de AI dit uit de code zelf afleidt.
- Enkel vermelden wanneer de AI een fout maakt door de context te missen.

---
---

### 8.4

---

Je integreert een grote hoeveelheid AI-gegenereerde code in een nieuw project. Wat is de meest verstandige git-strategie?

- **Werken op een aparte feature branch, met kleine commits per logische eenheid, zodat je makkelijk kan terugdraaien als iets niet klopt.**
- Alles in één grote commit op de main branch zetten voor overzicht.
- AI-gegenereerde code nooit committen totdat een senior developer ze heeft goedgekeurd.
- Een aparte repository aanmaken voor AI-gegenereerde code.

---

Schrijf een goede commit message voor de volgende situatie: je hebt via AI een sorteeralgoritme laten genereren voor een lijst van bestellingen op datum. De AI genereerde een werkende oplossing maar gebruikte een Amerikaans datumformaat. Jij paste dat aan naar het Belgische formaat en voegde een test toe voor lege lijsten.

---

Waarom verdient AI-gegenereerde code een expliciete vermelding in een pull request-beschrijving?

- **Zodat reviewers weten welke lens ze gebruiken: niet "begrijpt de auteur dit?" maar "is dit correct gevalideerd en aangepast?".**
- Omdat AI-gegenereerde code altijd minder kwaliteit heeft dan handgeschreven code.
- Omdat de meeste organisaties dit juridisch verplichten.
- Zodat de AI-tool weet welke code ze gegenereerd heeft.

---
---

### 8.5

---

Wat is het fundamentele verschil tussen een AI-assistent en een agentic AI?

- **Een agent voert autonoom meerdere stappen uit om een doel te bereiken, terwijl een assistent één antwoord geeft op één vraag.**
- Een agent is sneller omdat hij meerdere prompts tegelijk verwerkt.
- Agents werken enkel in de cloud, assistenten enkel lokaal.
- Een agent kan geen code schrijven, enkel plannen.

---

Je wil een agentic tool gebruiken om automatisch unit tests te genereren voor een bestaande module. Wat is een verstandige eerste stap?

- **De agent eerst testen op één kleine, geïsoleerde functie om te begrijpen hoe ze werkt en waar haar beperkingen liggen.**
- De agent loslaten op de volledige codebase voor maximale dekking.
- De agent enkel gebruiken als je al meer dan honderd handgeschreven tests hebt als referentie.
- Wachten tot de tool officieel "stabiel" is verklaard door de aanbieder.

---
---

### 8.6

---

Je begrijpt het concept van recursie niet volledig. Welke aanpak is het meest effectief om AI als leerpartner in te zetten?

- **De AI vragen om recursie uit te leggen, daarna zelf een eenvoudige recursieve functie schrijven zonder AI, en de AI daarna vragen om feedback op jouw implementatie.**
- De AI vragen om een recursieve functie te schrijven en die te bestuderen.
- De AI vragen om alle recursieve functies in je codebase te identificeren en te documenteren.
- Een AI-gegenereerde samenvatting van recursie uitprinten en instuderen.

---

Wat is het verschil tussen "AI vragen om een bug te fixen" en "AI vragen om je te helpen de bug te begrijpen"? Welke aanpak leidt tot meer leerwinst, en waarom?

---