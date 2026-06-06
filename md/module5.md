# Module 5 Debugging en Refactoring met AI

---

## 5.1 Errors analyseren

Je hebt meer dan een uur zitten zwoegen aan code waarvan je denkt "yep, dit is perfectie". Je voert ze uit. En dan:

```
TypeError: Cannot read properties of undefined (reading 'naam')
    at verwerкGebruiker (app.js:47:23)
    at verwerкAlleGebruikers (app.js:12:5)
    at main (app.js:3:1)
```

Van diep vanbinnen komt de wanhoop, de ijle zoektocht naar waar de fout in je code zit, in een ooghoek een traan. Welkom bij debugging.

Het maakt niet uit hoe goed je bent als developer, fouten maak je. Het onderscheid tussen een beginner en een ervaren developer is dus niet dat de ervaren developer geen fouten maakt. Het is dat die ze sneller opspoort en oplost.

Foutmeldingen zoals `unknown variable on line 32` zijn (hopelijk) vanzelfsprekend. Maar zodra je een uitgebreide **stack trace** (een overzicht van welke functies op welke lijn werden aangeroepen op het moment van de fout) krijgt wordt het al een stuk minder voor de hand liggend. Zeker als de fout niet in jouw code zit, maar diep in een library die je in jouw code aanroept.

AI kan helpen bij het analyseren en interpreteren van foutmeldingen. Je geeft de foutmelding mee samen met de relevante code en de AI verduidelijkt wat er fout gaat en waar het probleem zich waarschijnlijk bevindt.

Maar, weeral: **je moet zelf ook leren stack traces te lezen.** Begrijpen hoe een programma uitgevoerd wordt, welke functies wanneer worden aangeroepen en hoe data doorheen die aanroepen stroomt: dat is fundamentele kennis die je niet kan enkel aan AI kan overlaten. Als je dat niet snapt, kan je de AI-uitleg ook niet beoordelen.

Een stack trace lezen is een vaardigheid. Oefen ze, niet alleen voor dit vak maar voor de opleiding in het algemeen.

---
## 5.2 Bugs reproduceren

"Het werkt niet meer, maar ik weet niet wanneer het begon."

Dat is het slechtste vertrekpunt voor debugging. Als je een bug niet consistent kan reproduceren, kan je ook niet bevestigen dat je hem opgelost hebt.

De eerste stap in elke debuggingssessie is **reproduceren**: zorg dat je de fout op commando kan laten optreden. Dezelfde invoer, hetzelfde gedrag, elke keer. Pas dan kan je gericht onderzoeken en pas dan weet je zeker dat een fix effectief werkt.

De krachtigste techniek daarvoor is het bouwen van een **minimal failing example** (ook wel **minimal reproducible example** of MRE). Je vereenvoudigt de code tot het kleinste fragment dat de fout nog bevat. Alles wat niet relevant is voor het probleem, gooi je weg (denk bvb aan UI elementen). Wat overblijft is de kern van het probleem: zichtbaar, geïsoleerd en herhaalbaar.

Dat heeft twee voordelen. Ten eerste zie je het probleem veel duidelijker als de omringende code wegvalt. Ten tweede kan je de MRE aan iemand anders geven, een collega, een forum of een AI zonder de volledige codebase te moeten delen.

AI kan helpen bij dit proces: voorstellen welke delen van de code mogelijk irrelevant zijn, of een vereenvoudigde versie genereren om mee te starten. Maar het reduceren van de code naar de kern is analytisch werk. Je moet begrijpen welke onderdelen bijdragen aan de fout en welke niet.

Als je een MRE kan bouwen, heb je al het moeilijkste deel van de debugging gedaan.

---

## 5.3 Hmm, wat zou het kunnen zijn?

Debugging is geen trial-and-error. Of toch: goede debugging is geen trial-and-error.

Goede debugging is **nadenken over wat de oorzaak zou kunnen zijn en testen**. Je observeert het gedrag, je formuleert een mogelijke oorzaak, je test die oorzaak gericht en op basis van het resultaat pas je de hypothese aan of bevestig je ze.

Het verschil in de praktijk: bij trial-and-error verander je willekeurig dingen en hoopt dat de fout verdwijnt. Bij hypothesegedreven debugging weet je na elke test iets meer over het probleem, ook als de hypothese fout bleek.

AI kan helpen bij het genereren van deze hypotheses. Beschrijf het probleem zo precies mogelijk, het verwachte gedrag, het werkelijke gedrag, de foutmelding, de context; en vraag de AI om mogelijke oorzaken voor te stellen. Een goede AI-output geeft je drie tot vijf pistes die je geordend kan aflopen.

Maar blindelings de eerste suggestie uitproberen zonder te begrijpen waarom die oorzaak plausibel is, is nog steeds trial-and-error. Het enige verschil hier is dat het dan de AI gaat zijn dat random een voorstel gaat doen.

Elke hypothese evalueer je zelf:
- Is deze oorzaak plausibel gegeven wat ik weet over de code?
- Hoe test ik dit gericht, zonder andere dingen tegelijk te veranderen?
- Wat vertelt het resultaat me, ook als de hypothese fout is?

Systematisch debuggen kost in het begin meer tijd. Op termijn kost het minder.

---

## 5.4 Hmm, wat stinkt hier?

Niet elke slechte code geeft een foutmelding.

Sommige code draait perfect, maar is bijvoorbeeld zo geschreven dat ze over zes maanden onmogelijk te onderhouden is. Of dat een kleine wijziging een kettingreactie van problemen veroorzaakt. Of dat niemand meer begrijpt wat een bepaalde functie doet zonder er twintig minuten naar te staren.

Dat zijn **code smells**: herkenbare patronen die wijzen op een mogelijk probleem met de kwaliteit of structuur van code, zonder dat de code per se incorrect is. Ze zijn geen fouten, maar ze zijn wel waarschuwingssignalen.

Veelvoorkomende voorbeelden:
- **Lange functies:** Een functie van vijftig regels die tien dingen doet, is een candidate voor opsplitsing. Functies horen één ding te doen.
- **Duplicatie:** Dezelfde logica op drie plaatsen in de code. Als die logica later moet veranderen, moet je ze op drie plaatsen aanpassen (en je vergeet er gegarandeerd één).
- **0nduidelijke naamgeving:** `tmp`, `data`, `x`, `verwerk` — namen die niets zeggen over wat iets doet of bevat.
- **Te complexe condities:** Een `if`-statement met vijf geneste voorwaarden is bijna altijd een teken dat de logica herzien moet worden.
- **Dode code:** Code die nooit uitgevoerd wordt maar wel in het bestand staat. Ze verwarst lezers en suggereert dat er iets afgewerkt moet worden.

AI kan code smells detecteren door een stuk code te analyseren en aandachtspunten te markeren. Maar de beslissing of een smell aangepakt moet worden, en hoe, is aan jou. Niet elke lange functie is een probleem. Context is hier een hele grote factor.

---

## 5.5 Refactoring: een beetje puzzelen

Refactoring is het herstructureren van code zonder het externe gedrag (eigenlijk de output, of hoe iemand anders met het stuk code zou omgaan) te veranderen. De functie doet na de refactoring hetzelfde als ervoor, alleen is ze leesbaarder, eenvoudiger of beter georganiseerd.

Dat "*zonder het externe gedrag te veranderen*" is essentieel. Refactoring is geen feature of bugfix. Als je tijdens een refactoring ook de logica aanpast, doe je twee dingen tegelijk. Als er daarna een probleem is, weet je niet meer welke wijziging het veroorzaakte.

AI kan refactoringvoorstellen doen: functies opsplitsen, variabelen hernoemen, condities vereenvoudigen, duplicatie elimineren. Dat kan waardevol zijn als inspiratie of als startpunt.

Maar evalueer elk voorstel. Niet elke wijziging is een verbetering. Vragen die je stelt bij elk refactoringvoorstel:
- Is de code er leesbaarder op geworden, of gewoon anders?
- Past de nieuwe structuur bij de rest van het project?
- Zijn er tests die bevestigen dat het gedrag gelijk gebleven is?
- Introduceert de refactoring nieuwe afhankelijkheden of complexiteit?

Refactoring zonder tests is gevaarlijk. Als je niet weet of het gedrag gelijk gebleven is, weet je niet of je iets gebroken hebt.

---

## 5.6 Oei, een fout in de puzzel

Je past code aan. Alles lijkt te werken. Twee dagen later krijgt een collega een melding dat iets wat vorige week nog werkte, nu kapot is.

Dat is een **regressie**: bestaande functionaliteit die onbedoeld aangetast is door een wijziging.

Regressies zijn verraderlijk omdat ze niet altijd onmiddellijk zichtbaar zijn. De code compileert, de functie die je aanpaste werkt correct, maar ergens anders in de applicatie, in een scenario dat je niet getest hebt, is iets misgegaan.

De bescherming tegen regressies is testen en kleine stappen.

**Testen:** Voordat je begint met refactoring of debugging, zorg je dat er tests zijn die het huidige gedrag vastleggen. Als die tests na je wijziging nog steeds slagen, is het gedrag gelijk gebleven. Als ze falen, weet je meteen wat er fout ging en waar.

AI kan helpen door tests voor te stellen, mogelijke impact van een wijziging te beschrijven of te waarschuwen voor dependencies die je mogelijk over het hoofd ziet. Maar de verificatie, bevestigen dat het gedrag gelijk gebleven is, doe jij.

**Kleine stappen:** Eén wijziging per keer. Na elke wijziging je tests terug laten uitvoeren. Na elke stap controleer je of alles nog werkt. Als er iets fout gaat, weet je exact welke stap het veroorzaakte.

De combinatie van tests en kleine stappen maakt het mogelijk om code te verbeteren zonder er bang voor te zijn. Zonder die combinatie is elke wijziging een gok.

---

## Oefeningen

### Easy

**01.** Zoek online een voorbeeld van een JavaScript stack trace (of genereer er één door bewust een fout te introduceren in eigen code). Lees de stack trace zelf en beschrijf: welke functies werden aangeroepen, in welke volgorde en op welke lijn trad de fout op?

---

**02.** Hieronder staat een foutmelding. Schrijf een AI-prompt die je zou gebruiken om deze te analyseren. Zorg dat je prompt de foutmelding, de relevante code én het verwachte gedrag bevat.

```
TypeError: Cannot read properties of undefined (reading 'length')
    at telTekens (utils.js:14:20)
    at verwerкInvoer (main.js:8:12)
```

---

**03.** Gegeven de volgende buggy functie:

```javascript
const berekenGemiddelde = (getallen) => {
  let som = 0;
  for (let i = 0; i <= getallen.length; i++) {
    som += getallen[i];
  }
  return som / getallen.length;
};
```

- Identificeer de bug zonder AI te gebruiken.
- Formuleer een hypothese over de oorzaak.
- Beschrijf hoe je de hypothese zou testen.
- Gebruik daarna AI om te vergelijken: vond de AI dezelfde bug?

---

**04.** Identificeer minstens vier code smells in de volgende functie en benoem per smell het type en waarom het een probleem is:

```python
def f(x, y, z):
    result = 0
    if x > 0:
        if y > 0:
            if z == "EUR":
                result = x * y * 1.21
            elif z == "USD":
                result = x * y * 1.21 * 1.08
    return result
```

---

**05.** Wat is het verschil tussen **debugging** en **refactoring**? Kunnen ze tegelijk uitgevoerd worden? Waarom wel of niet?

---

**06.** Zoek een AI-tool die specifiek gericht is op het detecteren van code smells of op het ondersteunen van refactoring (niet een algemene chatbot). Beschrijf wat de tool doet, hoe ze werkt en in welke situaties je ze zou inzetten.

---

### Medium

**01.** Introduceer bewust drie fouten in een eenvoudige functie naar keuze (één syntaxisfout, één logicafout, één ontbrekende error handeling). Bouw daarna een minimal failing example voor elk van de drie fouten. Gebruik AI om te helpen bij de analyse en documenteer per fout:

- De minimal failing example
- De hypothese over de oorzaak
- De fix en de verificatie

---

**02.** Neem een stuk code van minstens twintig regels uit een eigen oefening. Gebruik AI om een volledige code smell-analyse te laten uitvoeren. Beoordeel daarna elke gedetecteerde smell:

- Is de detectie terecht?
- Is de context relevant (bv. kan de smell gerechtvaardigd zijn in dit project)?
- Welke smells pak je aan en welke niet en waarom?

---

**03.** Refactor de volgende functie stap voor stap. Voer na elke stap minstens twee handmatige tests uit om te bevestigen dat het gedrag gelijk gebleven is. Documenteer elke stap.

```javascript
function proc(items, t, d) {
  let res = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == t && items[i].date > d) {
      if (items[i].active == true) {
        res.push({ id: items[i].id, val: items[i].price * 0.9 });
      }
    }
  }
  return res;
}
```

---

**04.** Gebruik AI om drie alternatieve refactoringen voor te stellen voor de functie uit de vorige oefening. Leg vooraf vast op welke criteria je ze beoordeelt. Evalueer daarna elk alternatief en verantwoord je keuze.

---

**05.** Debug de volgende functie systematisch: reproduceer de fout, bouw een minimal failing example, formuleer een hypothese, test die hypothese en documenteer het volledige proces. Gebruik AI enkel na je eigen analyse.

```python
def zoek_gebruiker(gebruikers, naam):
    for i in range(len(gebruikers)):
        if gebruikers[i]["naam"] == naam:
            return gebruikers[i]
    return None

# Test
gebruikers = [{"naam": "Jan", "leeftijd": 25}, {"naam": "Marie", "leeftijd": 30}]
print(zoek_gebruiker(gebruikers, "marie"))  # Verwacht: Marie's object
```

---

**06.** Vergelijk twee aanpakken voor hetzelfde debuggingprobleem:

*Aanpak A:* willekeurig dingen aanpassen totdat de fout verdwijnt.
*Aanpak B:* de fout reproduceren, een hypothese formuleren, die gericht testen en op basis van het resultaat bijsturen.

Werk een concreet debugscenario uit waarbij je beide aanpakken toepast en vergelijk de efficiëntie, het begrip dat je opdoet en de betrouwbaarheid van het resultaat.

---

**07.** Onderzoek het verschil tussen **white-box debugging** (waarbij je toegang hebt tot de broncode) en **black-box debugging** (waarbij je enkel de input en output kan observeren). Wanneer gebruik je welke aanpak? Hoe verschilt de manier waarop je AI inzet bij elk?

---

### Hard

**01.** Bouw een volledig debuggingscenario voor een medestudent. Schrijf een functie met drie verborgen bugs van verschillende types (een off-by-one error, een typeprobleem en een edge case die niet afgehandeld wordt). Schrijf ook de minimal failing examples voor elk van de drie. Wissel uit met een medestudent en debug elkaars scenario systematisch.

---

**02.** Onderzoek hoe **AI-gestuurde debugging tools** zoals GitHub Copilot's foutanalyse, Cursor's debugmodus of andere gespecialiseerde tools werken. Vergelijk twee van dergelijke tools op:

- Hoe ze foutmeldingen en stack traces interpreteren
- Hoe ze hypothesen genereren over mogelijke oorzaken
- In hoeverre ze context over de codebase meenemen
- Wat hun beperkingen zijn bij complexe bugs

---

**03.** Neem een open-source project met een publieke issue tracker (bv. op GitHub). Kies een gerapporteerde bug. Analyseer de bug systematisch:

- Reproductie: kan je de bug reproduceren op basis van de beschrijving?
- Minimal failing example: kan je de bug isoleren?
- Hypothese: wat is de meest waarschijnlijke oorzaak?
- Gebruik AI als analyse-hulpmiddel en documenteer wat het bijdroeg.

Je hoeft de bug niet per se op te lossen — de nadruk ligt op het analyseproces.

---

**04.** Ontwikkel een persoonlijk **debugging playbook**: een stap-voor-stap aanpak die je standaard volgt bij het debuggen van een probleem. Het playbook bevat minstens acht stappen, beschrijft op welk punt je AI inschakelt en op welk punt je zelfstandig analyseert en onderscheidt de aanpak voor verschillende types fouten (syntaxisfout, logicafout, regressie, intermittente bug).

---

### At Home

**01. Bug Hunt in het Wild**

Zoek een open-source project op GitHub met een actieve issue tracker. Kies drie gerapporteerde bugs en analyseer ze systematisch:

- Reproduceer elke bug (of beschrijf hoe je dat zou doen op basis van de issue).
- Bouw een minimal failing example.
- Formuleer hypothesen over de oorzaak.
- Gebruik AI als analyse-hulpmiddel en documenteer wat het bijdroeg.

---