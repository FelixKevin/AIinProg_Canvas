# Module 4 Begrijpen, Reviewen, Verbeteren

---

## 4.1 Explain like I'm 5

Je erft een codebase van een collega die er niet meer is. Of je opent een bestand dat je zelf drie maanden geleden schreef en je hebt geen idee meer wat er staat. Of je werkt met een library die je nog nooit eerder gezien hebt.

Vroeger was de enige optie: lezen, googelen, doordenken. Nu kan je de code in een AI-tool plakken en vragen: "leg uit wat dit doet."

Dat is onmiddellijk nuttig. AI kan beschrijven wat een functie doet, welke stappen uitgevoerd worden, hoe data doorheen de code beweegt en welke aannames er gemaakt worden. Bij grote codeblokken, onbekende syntax, een nieuwe programmeertaal of een vreemde library kan dat uren schelen.

Maar (en dit is cruciaal) **de AI geeft een interpretatie, geen garantie.** De uitleg kan onvolledig zijn. Ze kan een subtiele fout bevatten. Ze kan iets weglaten dat net het kritieke onderdeel is.

Gebruik de uitleg van AI als startpunt voor je eigen analyse, niet als vervanging ervan. De bedoeling is dat je na de uitleg de code begrijpt — niet dat je de uitleg van de AI herhaalt zonder ze te doorgronden.

Een goede manier om te controleren of je het echt begrijpt: kan je uitleggen wat de code doet aan iemand zonder de AI-uitleg te gebruiken? Als dat niet lukt, ben je er nog niet.

---

## 4.2 Assumption is the Mother of All Fuckups

*"Ik denk dat dit werkt."*

Dat is geen analyse. Dat is hopen.

Om code echt te begrijpen, moet je twee dingen kunnen volgen: **hoe** ze uitgevoerd wordt en **wat** er met de data gebeurt.

**Control flow** beschrijft de volgorde waarin code uitgevoerd wordt. Welke tak van een `if`-statement wordt genomen? Wanneer stopt een lus? Welke functie roept welke andere aan? Als je de control flow niet kan volgen, weet je niet wat de code doet bij specifieke invoer.

**Data flow** beschrijft hoe gegevens doorheen het programma bewegen en veranderen. Waar wordt een variabele aangemaakt? Wat is de waarde op elk punt? Wordt ze ergens onverwacht overschreven of gemuteerd? Als je de data flow niet kan volgen, weet je niet *met welke data* de code op elk moment werkt.

AI kan helpen om beide processen stap voor stap te beschrijven. Vraag de AI om de control flow uit te tekenen, om te beschrijven wat de waarde van een variabele is na elke stap, of om te verduidelijken welke aannames de code maakt over de invoer.

Die aannames zijn belangrijk. Elke functie veronderstelt iets over zijn input: dat het een positief getal is, dat de string niet leeg is, dat het object een bepaalde key bevat. AI kan helpen om die aannames zichtbaar te maken, maar ze detecteert ze niet altijd volledig. Jij moet er actief naar zoeken.

---

## 4.3 Jarvis, give me suggestions

In een professioneel team gaat code voor het mergen door een code review. Eén of meerdere collega's lezen je code, geven feedback, stellen vragen en wijzen op problemen die je zelf over het hoofd zag. Dat is waardevol, maar het kost tijd.

AI kan dienen als een eerste reviewronde. Niet als vervanging van een echte collega, maar als een manier om al met de grove borstel de meest voor de hand liggende problemen te detecteren voor je ze aan iemand anders voorlegt, of gewoon als extra controle als je alleen werkt.

Vraag AI om je code te reviewen op specifieke punten:
- **Stijl en leesbaarheid:** Zijn namen duidelijk? Is de structuur consistent? Is er onnodige complexiteit?
- **Logica:** Zijn er edge cases die niet afgehandeld worden? Klopt de logica voor alle invoerscenario's?
- **Foutafhandeling:** Wat gebeurt er als iets fout gaat? Worden fouten correct opgevangen en gecommuniceerd?
- **Prestaties:** Zijn er voor de hand liggende inefficiënties?

De output van een AI-review zijn **suggesties**, geen beslissingen. Niet elke opmerking is terecht. De AI kent jouw context niet volledig: ze weet niet waarom je een bepaalde keuze maakte, welke tradeoffs er waren, of welke constraints je had. Het is aan jou om elke suggestie te interpreteren en te beslissen of ze relevant is.

**AI is een extra paar ogen. De beslissing blijft bij jou.**

---

## 4.4 Wat is kwaliteit nu juist?

"De code werkt" is geen kwaliteitscriterium. Het is het *absolute minimum*.

Professionele code wordt beoordeeld op meer dan functionaliteit. AI kan helpen om code te verbeteren, maar je hebt duidelijke criteria nodig om te beoordelen of die verbetering effectief is. Net zoals je docenten duidelijke criteria vooraf opstellen als ze je een werkstuk of een examen geven. Een voorbeeld van criteria:

- **Leesbaarheid:** Code wordt vaker gelezen dan geschreven. Door jezelf over drie maanden, door een collega nu, door iemand die de codebase overneemt volgend jaar, ... Leesbaarheid betekent: duidelijke naamgeving die beschrijft wat iets doet, geen onnodige afkortingen, logische groepering van gerelateerde code, comments waar nodig en consistent gebruik van conventies.
- **Structuur:** Functies doen één ding. Verantwoordelijkheden zijn duidelijk verdeeld. Duplicatie is vermeden. Een functie van honderd regels die vijf dingen doet, is geen goede structuur ook al werkt ze correct.
- **0nderhoudbaarheid:** Code verandert. Vereisten veranderen. Als een kleine aanpassing tien andere plaatsen in de codebase raakt, is de onderhoudbaarheid laag. Goede code heeft duidelijke grenzen tussen onderdelen en beperkte complexiteit per eenheid.

Wanneer AI een verbetering voorstelt, toets je die aan deze criteria. Is de code er leesbaarder op geworden? Is de structuur er duidelijker op? Of is het gewoon anders, zonder dat het beter is?

**"Anders" is niet hetzelfde als "beter."**

---

## 4.5 Afwegingen maken

Hetzelfde probleem kan op tien manieren opgelost worden. Welke is de juiste?

Dat is zelden een vraag met één correct antwoord. Het hangt af van context: hoe groot is de dataset, hoe vaak wordt de functie aangeroepen, hoe complex mag de code zijn voor dit team, wat zijn de prioriteiten van het project, ...?

AI kan snel meerdere implementaties genereren voor hetzelfde probleem. Dat is waardevol, niet om de eerste de beste te kiezen, maar om de afweging expliciet te maken.

Bepaal je criteria **voordat** je de oplossingen bekijkt. Als je eerst de code ziet en daarna criteria bedenkt, kies je onbewust voor de oplossing die er het meest indrukwekkend uitziet. Dat is geen objectieve afweging.

Typische criteria zijn:
- **Leesbaarheid:** Kan een gemiddelde developer in dit team de code begrijpen zonder uitleg?
- **Efficiëntie:** Wat is de tijds- en ruimtecomplexiteit? Is dat relevant voor dit gebruik?
- **Integratie:** Past de oplossing bij de architectuur en de bestaande code?
- **Uitbreidbaarheid:** Kan de oplossing eenvoudig aangepast worden als de vereisten wijzigen?
- **Testbaarheid:** Is de code eenvoudig te testen in isolatie?

Nadat je een keuze gemaakt hebt, moet je die **kunnen verantwoorden**. Niet "deze leek me het best", maar "ik koos voor deze implementatie omdat de tijdscomplexiteit beter is en de code past bij het patroon dat we al gebruiken in de rest van het project."

Dat is het verschil tussen een **beslissing** en een **voorkeur**.

---

## 4.6 Wat bij een fout?

De code doet niet wat ze moet doen. Of ze doet het bijna, maar niet helemaal. Of ze werkt in vier van de vijf gevallen en crasht bij het vijfde.

AI kan helpen bij het debuggen, maar de aanpak bepaalt of je het probleem oplost of verplaatst.
1. **Begrijp waar het probleem zich bevindt.** Niet raden. Niet het eerste wat de AI voorstelt uitproberen en hopen dat het werkt. Reproduceer de fout, identificeer welk onderdeel van de code het veroorzaakt en beschrijf het probleem zo precies mogelijk.
2. **Gebruik AI als analyse-hulpmiddel.** Geef de relevante code mee, beschrijf het verwachte gedrag en het werkelijke gedrag, en vraag om mogelijke oorzaken. Hoe preciezer je het probleem beschrijft, hoe gerichter de voorstellen zijn.
3. **Evalueer elke voorgestelde oplossing zelf.** Dit is waar het vaak misgaat: de AI geeft een fix, je past de code aan, het werkt. Maar heb je begrepen waarom het fout was en waarom de fix werkt? Als dat niet het geval is, heb je een probleem weggewerkt zonder het te begrijpen. De volgende keer dat hetzelfde patroon fout gaat, weet je niet meer wat je moet doen.

Een fix die je niet begrijpt, is een toekomstige bug. Maar we gaan in de volgende modules dieper ingaan op testing en debugging.

---

## Oefeningen

### Easy

**01.** Zoek een stuk code dat je eerder schreef. Vraag een AI-tool om uit te leggen wat de code doet. Lees daarna de uitleg kritisch na: klopt alles? Zijn er zaken die de AI wegliet of verkeerd interpreteerde?

---

**02.** Gegeven de volgende functie (in een programmeertaal die we nog niet samen hebben gezien), beschrijf zelf de control flow en de data flow zonder gebruik te maken van AI. Gebruik daarna AI om te vergelijken. Wat vond de AI dat jij gemist had?

```python
def verwerk_bestellingen(bestellingen):
    totaal = 0
    verwerkt = []
    for bestelling in bestellingen:
        if bestelling["status"] == "nieuw":
            totaal += bestelling["bedrag"]
            verwerkt.append(bestelling["id"])
    return totaal, verwerkt
```

---

**03.** Identificeer de impliciete aannames in de bovenstaande `verwerk_bestellingen`-functie. Welke invoer zou de functie laten crashen of onverwacht gedrag vertonen? Gebruik AI om je analyse te controleren.

---

**04.** Je debugt een functie die incorrect resultaten teruggeeft. Schrijf een AI-prompt die je zou gebruiken om de oorzaak te vinden. Gebruik de structuur: verwacht gedrag, werkelijk gedrag, relevante code.

---

**05.** Zoek twee AI-tools die specifiek gericht zijn op code review (niet op codegeneratie). Beschrijf per tool wat ze doet, hoe ze verschilt van een algemene chatbot en wanneer je ze zou gebruiken.

---

**06.** Leg in je eigen woorden uit waarom "de code werkt" geen kwaliteitscriterium is. Wanneer is werkende code alsnog slechte code?

---

### Medium

**01.** Neem een functie van minstens vijftien regels uit een eigen project of oefening. Voer zelf een volledige analyse uit:

1. Beschrijf de control flow stap voor stap.
2. Beschrijf de data flow: wat is de waarde van elke variabele na elke stap?
3. Identificeer alle impliciete aannames.
4. Gebruik daarna AI om je analyse te vergelijken.

Wat heeft de AI gevonden dat jij miste? Wat heb jij gevonden dat de AI niet benoemde?

---

**02.** Gebruik AI om een code review te laten uitvoeren op een stuk code dat je zelf schreef. Ontvang de suggesties en beoordeel elke suggestie:

- Is de suggestie terecht in de context van jouw project?
- Neem je ze over en waarom?
- Welke suggesties zijn generiek maar niet relevant voor jouw situatie?

---

**03.** Genereer via AI twee verschillende implementaties voor hetzelfde probleem. Leg vooraf vast op welke criteria je ze gaat beoordelen. Evalueer daarna beide implementaties aan de hand van die criteria en verantwoord je keuze.

---

**04.** Neem een stuk code met slechte leesbaarheid (je eigen of gegenereerde "slechte" code). Gebruik AI om een verbeterde versie te genereren. Beoordeel de output: is de code effectief leesbaarder geworden, of is ze gewoon anders? Wat zou je nog bijsturen?

---

**05.** Maak bewust een logicafout in een eenvoudige functie (bv. een verkeerde operator of een off-by-one error). Gebruik daarna AI om de fout te laten detecteren via een review. Hoe beschrijf je het probleem aan de AI zodat ze de fout vindt? Wat geef je mee?

---

### Hard

**01.** Neem een complexere functie (minstens 30 regels, met meerdere condities en datamanipulatie). Voer een volledige analyse uit:

- Control flow diagram (visueel of als genummerde stappen)
- Data flow per variabele
- Alle impliciete aannames
- Edge cases die niet afgehandeld worden
- Verbeteringsvoorstellen voor leesbaarheid en structuur

Gebruik AI als hulpmiddel, maar documenteer wat jij zelf analyseerde versus wat de AI bijdroeg.

---

**02.** Genereer via AI drie implementaties van een algoritme naar keuze met verschillende tradeoffs (bv. een met lage tijdscomplexiteit, een met lage ruimtecomplexiteit, een met maximale leesbaarheid). Schrijf een vergelijkend rapport dat elke implementatie beoordeelt op vijf zelfgekozen criteria. Verantwoord welke je zou kiezen voor een specifieke context.

---

**03.** Zoek een stuk legacy code op GitHub of een andere bron (oud, slecht gedocumenteerd of geschreven in een stijl die niet meer gebruikt wordt in het project). Gebruik AI om het te analyseren, te begrijpen en voor te stellen hoe je het zou refactoren. Documenteer het volledige proces en evalueer kritisch welke AI-suggesties je al dan niet overnam.

---

**04.** Stel een persoonlijk **kwaliteitsprotocol** op voor het reviewen en verbeteren van code, AI-gegenereerd of niet. Het protocol bevat minstens tien concrete checkpunten, georganiseerd per categorie (leesbaarheid, structuur, correctheid, veiligheid, onderhoudbaarheid). Elk punt beschrijft wat je controleert, hoe je het controleert en welke tools (inclusief AI) je daarbij kan inzetten.

---

### At Home

**01. Code Archaeology**

Zoek een open-source project op GitHub van minstens gemiddelde omvang (enkele honderden regels code, meerdere bestanden). Kies één module of bestand dat je nog nooit gezien hebt en voer een volledige analyse uit:

1. Beschrijf de control flow van de belangrijkste functie(s).
2. Identificeer de impliciete aannames.
3. Stel minstens drie verbeteringen voor op vlak van leesbaarheid of structuur.
4. Gebruik AI als analyse-hulpmiddel en documenteer wat AI bijdroeg en wat je zelf ontdekte.

---