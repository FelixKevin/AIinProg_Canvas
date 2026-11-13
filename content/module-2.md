---
module: 2
order: 1
moduleTitle: "2: Prompts schrijven"
published: true
---

# Module 2: Prompts schrijven

De output van een AI-assistent is maar zo goed als de vraag die je stelt. In deze module leer je prompts schrijven die het model zo weinig mogelijk laten raden. Dat bespaart je tijd en geeft code die je kan gebruiken.

### Leerdoelen

Na deze module kan je:

- een vage prompt herschrijven tot een prompt met context, input, output en beperkingen;
- voor een taak het juiste patroon kiezen: genereren, aanpassen of evalueren;
- voorbeelden en randgevallen in een prompt opnemen om de output te sturen;
- een prompt stap voor stap bijsturen op basis van de output.

## 2.1 Prompting: een prompt is een specificatie

```text
Maak een function.
```

Dat is een **prompt**: de vraag of opdracht die je aan een AI-model geeft. Het is alleen een slechte prompt.

Met een AI-assistent schrijf je geen losse vraag, maar een specificatie. Je beschrijft het probleem, met context, verwachtingen en beperkingen. Hoe preciezer die beschrijving, hoe kleiner de kans op output die je niet kan gebruiken.

Een vage prompt geeft vage output. Wat je niet zegt, vult het model in met aannames (zie [1.5](./module-1.md#1_5)). Die aannames kloppen lang niet altijd met wat jij bedoelde, zeker als je iets wil dat afwijkt van het gangbare.

Vergelijk het met **requirements** (vereisten) in een softwareproject: de beschrijving van wat een systeem moet doen. Een klant die zegt "iets met een knop, en groen" geeft een developer niets om mee te werken. "Een groene knop rechts onderaan die het formulier verstuurt en daarna een bevestiging toont" is wel bruikbaar.

In de informatica heet dat principe garbage in, garbage out: wat eruit komt, is maar zo goed als wat je erin stopt. Voor prompts geldt het net zo.

Een goede prompt beschrijft vier dingen:

- Context: in welke taal, welk project en welke omgeving werkt de code?
- Input: wat krijgt de function of het systeem mee?
- Output: wat moet eruit komen, en in welk formaat?
- Beperkingen: wat mag niet, of waar moet de oplossing rekening mee houden? Denk aan geen externe libraries, een vaste naamgeving of een wettelijke regel.

Een goede prompt dwingt je ook om eerst zelf over het probleem na te denken. Kan je de vier elementen niet invullen, dan begrijp je het probleem nog niet goed genoeg om een oplossing te laten genereren.

### Test jezelf 2.1 – Een prompt is een specificatie

```text
Sectie: 2.1
Type: meerkeuze
Vraag: Waarom geeft een vage prompt vaak onbruikbare output? Kies één antwoord.
Opties:
  A. Het model weigert te antwoorden als er informatie ontbreekt.
  B. Het model vraagt altijd eerst om meer uitleg.
  C. Het model vult ontbrekende informatie in met aannames die niet per se kloppen.
  D. Een vage prompt geeft dezelfde output als een precieze prompt, alleen trager.
Juist: C
Feedback A: Een model antwoordt bijna altijd, ook op een vage prompt. Net daarom is een vage prompt gevaarlijk (zie 2.1).
Feedback B: Soms vraagt een model om verduidelijking, maar meestal vult het zelf aan. Reken daar niet op (zie 2.1).
Feedback C: Juist. Wat je niet zegt, vult het model zelf in (zie 2.1).
Feedback D: De output is niet dezelfde: hoe minder je zegt, hoe meer het model zelf kiest (zie 2.1).

Sectie: 2.1
Type: meerkeuze
Vraag: Welke prompt bevat context, input, output en een beperking? Kies één antwoord.
Opties:
  A. Schrijf een function die controleert of een wachtwoord sterk is.
  B. Schrijf in JavaScript een function isStrongPassword(password) die een string krijgt.
  C. Schrijf een wachtwoordcontrole zonder externe libraries die true of false teruggeeft.
  D. Schrijf in JavaScript een function isStrongPassword(password) die een string krijgt en true of false teruggeeft. Een sterk wachtwoord heeft minstens 12 tekens. Gebruik geen externe libraries.
Juist: D
Feedback A: Deze prompt zegt niet in welke taal, wat de function krijgt, wat ze teruggeeft of wanneer een wachtwoord sterk is (zie 2.1).
Feedback B: Context en input staan erin, maar de output en de beperkingen ontbreken (zie 2.1).
Feedback C: Output en een beperking staan erin, maar de context en de input ontbreken (zie 2.1).
Feedback D: Juist. Taal, input, output en beperkingen staan er allemaal in (zie 2.1).

Sectie: 2.1
Type: meerkeuze
Vraag: De cursus vergelijkt een prompt met requirements. Wat is de belangrijkste reden voor die vergelijking? Kies één antwoord.
Opties:
  A. Hoe preciezer en vollediger de beschrijving, hoe bruikbaarder het resultaat.
  B. Bij beide is een korte beschrijving beter, omdat de developer of het model dan vrij kan kiezen.
  C. Beide gaan over de technische aanpak, niet over wat het resultaat moet doen.
  D. Beide moet je in één keer volledig juist schrijven.
Juist: A
Feedback A: Juist. Zowel een developer als een model kan pas goed werk leveren met een precieze beschrijving (zie 2.1).
Feedback B: Vrijheid betekent aannames, en die kloppen niet per se met wat jij bedoelde (zie 2.1).
Feedback C: Requirements en prompts beschrijven vooral wat het resultaat moet doen (zie 2.1).
Feedback D: Requirements en prompts verfijn je stap voor stap (zie 2.5).
```

## 2.2 De structuur van een prompt

Je wil een API-endpoint laten genereren. Vergelijk deze twee prompts.

```text
Schrijf een API.
```

```text
Context: een Node.js-project met Express. Er bestaat al een function
getUserById(id) die een Promise teruggeeft.
Input: een GET-request op het pad /users/:id.
Output: het user-object als JSON. Bestaat de gebruiker niet, geef dan
status 404 terug met { error: 'Gebruiker niet gevonden' }.
Beperkingen: gebruik async/await.
```

De tweede prompt laat het model geen keuze over de structuur, de statuscode, de foutafhandeling of de codestijl. De eerste laat het alle vrijheid, en die vrijheid werkt zelden in jouw voordeel.

Een vaste structuur lijkt stijf, maar het doel is concreet: het model zo weinig mogelijk laten raden. Wat expliciet in je prompt staat, moet het model niet aannemen. De algemene vorm ziet er zo uit:

```text
Context: <taal, framework, project, bestaande code>
Input: <wat de function krijgt: types, formaat, voorbeelden>
Output: <wat eruit komt: type, formaat, wat bij een fout>
Beperkingen: <wat niet mag, conventies, gewenste aanpak>
```

De labels zijn niet verplicht. Een prompt in doorlopende zinnen werkt ook, zolang alle vier de elementen erin staan.

### Test jezelf 2.2 – De structuur van een prompt

```text
Sectie: 2.2
Type: categoriseren
Vraag: Bekijk deze prompt: "Schrijf in JavaScript een function isAdult(age) die een geheel getal krijgt." Welke elementen zijn aanwezig en welke ontbreken?
Indeling:
  Context → aanwezig
  Input → aanwezig
  Output → ontbreekt
  Beperkingen → ontbreekt
Feedback: De prompt noemt de taal (context) en wat de function krijgt (input). Wat ze teruggeeft en waar de oplossing rekening mee moet houden, staat er niet in (zie 2.2).

Sectie: 2.2
Type: meerkeuze
Vraag: Welk element ontbreekt in deze prompt? "Schrijf in Python een function die een lijst van prijzen krijgt. Gebruik geen externe libraries." Kies één antwoord.
Opties:
  A. Context
  B. Input
  C. Output
  D. Beperkingen
Juist: C
Feedback A: De taal staat erin: Python (zie 2.2).
Feedback B: De input staat erin: een lijst van prijzen (zie 2.2).
Feedback C: Juist. Wat de function met de prijzen moet doen en wat ze teruggeeft, staat er niet in (zie 2.2).
Feedback D: De beperking staat erin: geen externe libraries (zie 2.2).

Sectie: 2.2
Type: meerkeuze
Vraag: Waarom dwingt een gestructureerde prompt je om eerst zelf over het probleem na te denken? Kies één antwoord.
Opties:
  A. Het model verwerkt de prompt anders niet.
  B. Je kan input, output en beperkingen pas beschrijven als je het probleem zelf begrijpt.
  C. De tool controleert automatisch of je prompt volledig is.
  D. Een model reageert enkel op prompts met de labels Context, Input, Output en Beperkingen.
Juist: B
Feedback A: Een model verwerkt ook een ongestructureerde prompt. Het resultaat is alleen minder bruikbaar (zie 2.2).
Feedback B: Juist. Wie de vier elementen niet kan invullen, begrijpt het probleem nog niet (zie 2.2).
Feedback C: De tool controleert dat niet. Dat doe jij (zie 2.2).
Feedback D: De labels zijn niet verplicht. Het gaat erom dat de vier elementen erin staan (zie 2.2).
```

## 2.3 Drie basispatronen voor prompts

In 1.1 zag je drie soorten taken voor een AI-assistent: genereren, aanpassen en evalueren. Elke soort vraagt een eigen soort prompt. Herken je het patroon, dan weet je ook wat er in je prompt moet staan.

Genereren: je vraagt iets nieuws, zoals een function, een test case of documentatie. Het model vertrekt van jouw beschrijving, dus de vier elementen uit 2.1 zijn hier het belangrijkst.

```text
Schrijf een JavaScript-function die een array van getallen krijgt en een
nieuwe array teruggeeft met enkel de priemgetallen.
```

Aanpassen: je geeft bestaande code mee en vraagt een wijziging. Zeg wat moet veranderen, en ook wat hetzelfde moet blijven.

```text
Herschrijf de function hieronder met een for...of-loop in plaats van een
while-loop. Behoud de logica en de naam van de function.
```

Evalueren: je vraagt een oordeel over bestaande code. Zeg waarop het model moet letten.

```text
Bekijk de function hieronder. Welke randgevallen handelt ze niet af?
Stel een verbeterde versie voor.
```

De patronen kan je combineren. Je laat het model eerst evalueren en daarna aanpassen. Of je genereert, bekijkt het resultaat en stuurt bij met een prompt die aanpast.

### Test jezelf 2.3 – Drie basispatronen voor prompts

```text
Sectie: 2.3
Type: meerkeuze
Vraag: Je function werkt, maar is moeilijk leesbaar door slechte namen en ontbrekende comments. Je wil dat het model dat verbetert. Welk patroon gebruik je? Kies één antwoord.
Opties:
  A. Genereren
  B. Aanpassen
  C. Evalueren
  D. Genereren en daarna evalueren
Juist: B
Feedback A: Je vraagt niets nieuws: de code bestaat al en moet veranderen (zie 2.3).
Feedback B: Juist. Je geeft bestaande code mee en vraagt een wijziging (zie 2.3).
Feedback C: Je wil geen oordeel, maar een verbeterde versie (zie 2.3).
Feedback D: Er moet niets nieuws gemaakt worden. Het gaat om een wijziging van bestaande code (zie 2.3).

Sectie: 2.3
Type: meerkeuze
Vraag: Je vraagt het model om twee implementaties van hetzelfde algorithm te vergelijken op leesbaarheid en snelheid. Welk patroon is dat? Kies één antwoord.
Opties:
  A. Genereren
  B. Aanpassen
  C. Evalueren
  D. Aanpassen en daarna genereren
Juist: C
Feedback A: Je vraagt geen nieuwe code, maar een oordeel (zie 2.3).
Feedback B: Je wil de code niet veranderen, alleen beoordelen (zie 2.3).
Feedback C: Juist. Vergelijken is een vorm van beoordelen (zie 2.3).
Feedback D: Er wordt niets aangepast of gemaakt. Je vraagt een oordeel (zie 2.3).

Sectie: 2.3
Type: koppelen
Vraag: Koppel elke prompt aan het patroon.
Paren:
  Schrijf vijf test cases voor de function validateEmail(). → genereren
  Zet deze callbacks om naar async/await. → aanpassen
  Welke van deze twee implementaties is leesbaarder? → evalueren
Feedback: Genereren maakt iets nieuws, aanpassen verandert bestaande code, evalueren geeft een oordeel (zie 2.3).
```

## 2.4 Voorbeelden en randgevallen in je prompt

Je wil een function die voornamen met de juiste hoofdletters schrijft. Je kan dat beschrijven, maar je kan het ook tonen:

```text
Schrijf een JavaScript-function formatName(name) die een voornaam met de
juiste hoofdletters schrijft.
Voorbeelden:
'soufian'    -> 'Soufian'
'MARIE'      -> 'Marie'
'pieter-jan' -> 'Pieter-Jan'
```

Met die voorbeelden is er geen twijfel meer over namen in hoofdletters of samengestelde namen. Een model reageert sterk op voorbeelden: met concrete input en verwachte output stuur je de output gerichter dan met een beschrijving alleen.

Voorbeelden zijn ook de beste manier om **randgevallen** (edge cases) mee te geven: input die afwijkt van wat je normaal verwacht.

```text
''       -> ''
'Oliv3r' -> fout met de boodschap 'Naam mag geen cijfers bevatten'
null     -> fout met de boodschap 'Naam mag niet leeg zijn'
```

Zonder die voorbeelden schrijft het model waarschijnlijk een function die werkt voor gangbare input, maar crasht of vreemd reageert bij randgevallen. Een model dekt standaard de **happy path**: het verloop waarin de input is wat je verwacht en er niets misloopt. Voor de rest ben jij verantwoordelijk.

Dit betekent voor jou: schrijf je voorbeelden uit voor je de prompt verstuurt. Zo bepaal je vooraf hoe je oplossing zich moet gedragen, en dat is een goede gewoonte, met of zonder AI.

### Test jezelf 2.4 – Voorbeelden en randgevallen

```text
Sectie: 2.4
Type: meerkeuze
Vraag: Wat is het grootste voordeel van voorbeelden in een prompt? Kies één antwoord.
Opties:
  A. Het model antwoordt sneller.
  B. Je geeft concrete verwachtingen mee, waardoor de output gerichter is.
  C. Voorbeelden vervangen de beschrijving van input en output volledig.
  D. Met voorbeelden moet je de output niet meer controleren.
Juist: B
Feedback A: Voorbeelden maken het model niet sneller, wel nauwkeuriger (zie 2.4).
Feedback B: Juist. Voorbeelden laten weinig ruimte voor aannames (zie 2.4).
Feedback C: Voorbeelden vullen een beschrijving aan, ze vervangen die niet (zie 2.4).
Feedback D: Ook met voorbeelden blijft de output onbewezen tot je ze controleert (zie 2.4).

Sectie: 2.4
Type: meerkeuze
Vraag: Wat is de happy path? Kies één antwoord.
Opties:
  A. Het verloop waarin de input is wat de function verwacht en er niets misloopt.
  B. De snelste route door een algorithm.
  C. De input die gebruikers het vaakst ingeven.
  D. Een vaste manier om fouten af te handelen.
Juist: A
Feedback A: Juist. Een model dekt standaard de happy path. De randgevallen zijn jouw verantwoordelijkheid (zie 2.4).
Feedback B: De happy path gaat niet over snelheid, maar over input zonder problemen (zie 2.4).
Feedback C: Gangbare input volgt meestal de happy path, maar de term gaat over het verloop zonder fouten (zie 2.4).
Feedback D: De happy path is net het verloop waarin er geen fout is (zie 2.4).

Sectie: 2.4
Type: meerdere antwoorden
Vraag: Je schrijft een prompt voor isAdult(age), die controleert of iemand minstens 18 jaar is. Welke voorbeelden zijn randgevallen? Kies twee antwoorden.
Opties:
  A. 25 -> true
  B. 18 -> true
  C. -3 -> fout met de boodschap 'Leeftijd kan niet negatief zijn'
  D. 40 -> true
Juist: B, C
Feedback A: 25 is een gangbare leeftijd ver van de grens. Dat is de happy path (zie 2.4).
Feedback B: Juist. 18 ligt precies op de grens, en net daar gaan functions vaak fout (zie 2.4).
Feedback C: Juist. Een negatieve leeftijd is ongeldige input (zie 2.4).
Feedback D: 40 is gangbare input. Dat is de happy path (zie 2.4).
```

## 2.5 Itereren: jij bent de for-loop

Je vraagt een function die het gemiddelde van een array berekent. De logica klopt, maar wat bij een lege array? Daar heeft de function geen antwoord op. Je eerste prompt was dus niet volledig, en dat is normaal.

Een prompt geeft zelden bij de eerste poging een perfect resultaat. Zie het proces als een loop waarin jij beslist:

```text
herhaal:
    stuur een prompt
    beoordeel de output
    stop als het resultaat goed genoeg is
    pas de prompt aan of stuur een vervolgprompt
```

Wanneer het resultaat goed genoeg is, beslis jij, niet het model.

Na elk resultaat kijk je wat klopt, wat niet klopt en wat ontbreekt. Je kan dan de oorspronkelijke prompt verfijnen, bijvoorbeeld met een extra beperking. Of je stuurt een **vervolgprompt**: een nieuwe prompt die verder bouwt op de output die je al hebt.

```text
Voeg foutafhandeling toe aan deze function: gooi een fout met de boodschap
'De array is leeg' als de array leeg is. Verander verder niets.
```

Hou daarbij zelf de controle. Het model doet voorstellen, en jij beslist wat je overneemt en wanneer het resultaat klaar is.

Werk ook hier in kleine stappen (zie [1.7](./module-1.md#1_7)). Vraag niet om een volledige feature in één prompt. Genereer een basisversie, controleer die en bouw er dan op verder.

### Test jezelf 2.5 – Itereren

```text
Sectie: 2.5
Type: meerkeuze
Vraag: De output van je prompt is deels correct: de logica klopt, maar de foutafhandeling ontbreekt. Wat is de beste volgende stap? Kies één antwoord.
Opties:
  A. Dezelfde prompt opnieuw sturen en hopen op een beter resultaat.
  B. De output weggooien en de taak volledig zelf uitvoeren.
  C. Een vervolgprompt sturen die vraagt om foutafhandeling toe te voegen aan de bestaande code.
  D. Een nieuwe prompt sturen die de volledige function opnieuw vraagt, met foutafhandeling erbij.
Juist: C
Feedback A: Dezelfde prompt geeft hoogstens toevallig een beter resultaat. Stuur gericht bij (zie 2.5).
Feedback B: Het correcte deel is bruikbaar. Bouw daarop verder (zie 2.5).
Feedback C: Juist. Een gerichte vervolgprompt behoudt wat al klopt (zie 2.5).
Feedback D: Dan riskeer je dat het model ook de logica verandert die al klopte (zie 2.5).

Sectie: 2.5
Type: meerkeuze
Vraag: Waarom werk je beter in kleine stappen als je itereert met prompts? Kies één antwoord.
Opties:
  A. Kleine stappen zijn makkelijker te controleren en bij te sturen dan grote sprongen.
  B. Een model vergeet alles wat langer is dan een paar zinnen.
  C. Lange prompts worden altijd afgekapt.
  D. Een korte prompt geeft altijd betere code dan een lange.
Juist: A
Feedback A: Juist. Een klein resultaat controleer je snel, en een fout vind je sneller terug (zie 2.5).
Feedback B: Een model kan veel tekst verwerken. Het probleem is dat jij een groot resultaat moeilijk controleert (zie 2.5).
Feedback C: Lange prompts werken meestal. Het gaat om de controle van de output (zie 2.5).
Feedback D: Een korte prompt is net vaak te vaag (zie 2.1). Het gaat om de grootte van elke stap (zie 2.5).

Sectie: 2.5
Type: ordenen
Vraag: Zet de stappen van itereren in de juiste volgorde.
Volgorde:
  Stuur een prompt.
  Beoordeel de output.
  Beslis of het resultaat goed genoeg is.
  Pas de prompt aan of stuur een vervolgprompt.
Feedback: Je beoordeelt altijd eerst de output. Pas daarna beslis je of je stopt of bijstuurt (zie 2.5).
```

## Samenvatting

Nieuwe termen:

- prompt: de vraag of opdracht die je aan een AI-model geeft.
- requirements: de beschrijving van wat een systeem moet doen.
- randgeval: input die afwijkt van wat je normaal verwacht.
- happy path: het verloop waarin de input is wat je verwacht en er niets misloopt.
- vervolgprompt: een prompt die verder bouwt op de output die je al hebt.

Belangrijkste regels:

- Een prompt is een specificatie. Beschrijf context, input, output en beperkingen.
- Wat je niet zegt, vult het model in met aannames.
- Kies het patroon dat bij je taak past: genereren, aanpassen of evalueren.
- Geef voorbeelden mee, ook van randgevallen. Een model dekt standaard enkel de happy path.
- Itereer in kleine stappen. Jij beslist wanneer het resultaat goed genoeg is.

## Veelgemaakte fouten

- Een prompt van één regel sturen. "Schrijf een wachtwoordchecker" laat het model kiezen wat een sterk wachtwoord is, in welke taal en wat de function teruggeeft.
- Bij een aanpassingsprompt niet zeggen wat moet blijven. "Herschrijf met een for...of-loop" kan ook de naam of de logica van je function veranderen.
- Enkel happy-path-voorbeelden geven. Met alleen `'soufian' -> 'Soufian'` weet het model niet wat het met `''` of `null` moet doen.
- Bij een onvolledig resultaat opnieuw beginnen. Een gerichte vervolgprompt behoudt wat al klopt.
- Een volledige feature in één prompt vragen. Het resultaat is groot, en een fout vind je moeilijk terug.

::: oefening
[Oefeningen module 2](./module-2-oefeningen.md)
:::
