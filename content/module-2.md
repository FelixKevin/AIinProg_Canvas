---
module: 2
order: 1
moduleTitle: "2: Prompts en context"
published: true
---

# Module 2: Prompts en context

In module 1 zag je hoe een model werkt en wat een agent harness doet. In deze module leer je hoe je het model stuurt: met een goede prompt en met de juiste context. Hoe preciezer je bent, hoe meer jij beslist en hoe minder het model moet raden.

### Leerdoelen

Na deze module kan je:

- uitleggen waarom je met een vage prompt beslissingen aan het model geeft;
- bepalen wat je wil bouwen en waarom, voor je een prompt schrijft;
- een prompt schrijven met context, input, output en beperkingen;
- het model de context geven die het voor een taak nodig heeft;
- de juiste soort vraag kiezen (genereren, aanpassen of evalueren) en zeggen welke output je wil;
- voorbeelden en edge cases in een prompt opnemen om de output te sturen;
- een prompt stap voor stap bijsturen, en een model gebruiken om je prompt te verbeteren.

## 2.1 Een prompt is een specificatie

```text
Maak een function.
```

Dat is een **prompt**: alles wat je naar een model stuurt om het een taak te laten doen. Dat is je vraag of opdracht, samen met de informatie die je erbij geeft. Een prompt kan één zin zijn, of een document van drie pagina's.

Deze prompt zegt bijna niets. Hij is zo vaag dat zelfs een model er niets mee kan. Meestal vraagt het terug: wat moet de function doen? Dat kost je tijd, maar er gaat niets mis.

Gevaarlijker is een prompt die net genoeg zegt om te beginnen:

```text
Maak een function die een prijs berekent.
```

Nu vraagt het model meestal niets meer. Het begint gewoon. Maar kijk wat het allemaal zelf moet kiezen:

| Beslissing | Wie beslist? |
|---|---|
| In welke programmeertaal? | het model |
| Hoe wordt de prijs berekend? | het model |
| Hoe heet de function? | het model |
| Wat krijgt ze, en wat geeft ze terug? | het model |
| Wat gebeurt er bij foute input? | het model |

**Wat je niet zegt, beslist het model.** Het vult elke lege plek in met de keuze die het vaakst voorkomt in zijn training data (zie [1.5](./module-1.md#1_5)).

Het resultaat is daarom niet altijd slecht. Het kan zelfs nette code zijn. Maar het is ongericht: het is code voor een probleem dat het model zelf koos, niet voor jouw probleem.

Onthoud dus het verschil:

| Je prompt | Wat het model meestal doet |
|---|---|
| zegt bijna niets | het vraagt terug wat je bedoelt |
| zegt net genoeg om te beginnen | het begint, en vult de rest zelf in |
| is precies | het doet wat jij besliste |

Er speelt nog iets. Als developer is beslissen jouw werk: wat de code moet doen, hoe ze in het project past, wat er bij een fout gebeurt. Met een vage prompt geef je die beslissingen uit handen. Je hebt dan minder controle over je eigen project.

Schrijf daarom geen losse vraag, maar een specificatie. Je beschrijft het probleem, met wat je verwacht en wat niet mag. Hoe preciezer je beschrijving, hoe meer jij beslist.

Vergelijk het met **requirements** (vereisten) in een softwareproject: de beschrijving van wat een systeem moet doen. Een klant die zegt "iets met een knop, en groen" geeft een developer niets om mee te werken. "Een groene knop rechts onderaan die het formulier verstuurt en daarna een bevestiging toont" is wel bruikbaar.

In de informatica heet dat principe garbage in, garbage out: wat eruit komt, is maar zo goed als wat je erin stopt. Voor prompts geldt het net zo.

### Test jezelf 2.1 – Een prompt is een specificatie {#test-jezelf-2-1-een-prompt-is-een-specificatie}

```text
Sectie: 2.1
Type: meerkeuze
Vraag: Je stuurt de prompt "Maak een function die een prijs berekent." Wat doet een model meestal? Kies één antwoord.
Opties:
  A. Het weigert te antwoorden, omdat er informatie ontbreekt.
  B. Het vraagt eerst welke prijs je bedoelt en in welke taal.
  C. Het begint gewoon, en vult wat ontbreekt in met eigen keuzes.
  D. Het geeft dezelfde output als bij een precieze prompt, alleen trager.
Juist: C
Feedback A: Een model weigert zelden. Er staat hier genoeg om te beginnen (zie 2.1).
Feedback B: Bij een prompt die bijna niets zegt, zoals "Maak een function", vraagt een model vaak terug. Hier staat net genoeg om te beginnen, en dan vult het de rest zelf in (zie 2.1).
Feedback C: Juist. Wat je niet zegt, beslist het model (zie 2.1).
Feedback D: De output is niet dezelfde: hoe minder je zegt, hoe meer het model zelf kiest (zie 2.1).

Sectie: 2.1
Type: koppelen
Vraag: Koppel elke prompt aan wat een model er meestal mee doet.
Paren:
  Maak een function. → Het vraagt terug wat je bedoelt.
  Maak een function die een prijs berekent. → Het begint, en vult de rest zelf in.
  Een prompt met context, input, output en beperkingen. → Het doet wat jij besliste.
Feedback: Een prompt die bijna niets zegt, kan een model niet uitvoeren. Een prompt die net genoeg zegt, is gevaarlijker: het model begint, en beslist de rest zelf (zie 2.1).

Sectie: 2.1
Type: categoriseren
Vraag: Je stuurt deze prompt: "Schrijf in Python een function die een lijst sorteert." Wie beslist wat?
Indeling:
  De programmeertaal → jij beslist
  Van klein naar groot, of omgekeerd → het model beslist
  De naam van de function → het model beslist
  Wat er gebeurt met een lege lijst → het model beslist
Feedback: Alleen de taal staat in de prompt. De volgorde, de naam en het gedrag bij een lege lijst kiest het model zelf (zie 2.1).

Sectie: 2.1
Type: meerkeuze
Vraag: Een medestudent zegt: "Mijn vage prompt gaf toch nette code." Welke reactie klopt het best? Kies één antwoord.
Opties:
  A. Dan is een vage prompt even goed als een precieze.
  B. De code kan netjes zijn, maar het model koos zelf wat ze doet. Jij had geen controle over die keuzes.
  C. Dat kan niet: een vage prompt geeft altijd slechte code.
  D. Dan heeft het model eerst gevraagd wat je bedoelde.
Juist: B
Feedback A: Nette code is nog geen code voor jouw probleem. Het model besliste wat jij had moeten beslissen (zie 2.1).
Feedback B: Juist. Het resultaat is ongericht: code voor een probleem dat het model zelf koos (zie 2.1).
Feedback C: Te streng. Het resultaat kan goed zijn, maar je weet niet of het past bij wat jij nodig hebt (zie 2.1).
Feedback D: Staat er genoeg om te beginnen, dan begint een model meestal zonder te vragen (zie 2.1).

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
Feedback B: Vrijheid betekent dat iemand anders voor jou kiest, en die keuzes kloppen niet per se met wat jij bedoelde (zie 2.1).
Feedback C: Requirements en prompts beschrijven vooral wat het resultaat moet doen (zie 2.1).
Feedback D: Requirements en prompts verfijn je stap voor stap (zie 2.7).
```

## 2.2 Eerst denken, dan prompten

Een volledige website is vandaag één prompt ver. Dat maakt het verleidelijk om meteen te beginnen. Maar wie begint zonder te weten wat hij wil, krijgt snel een resultaat waar niemand om vroeg. Dat kost tijd en tokens.

Te snel beginnen was al een probleem voor er AI was. Met AI is het groter geworden, omdat bouwen zo weinig moeite kost.

### Weet wat je wil

Stel jezelf vier vragen voor je een prompt schrijft:

1. Wat wil ik bouwen?
2. Waarom? Welk probleem lost het op, en voor wie?
3. Wat hoort er niet bij?
4. Waar botst het mee? Wat verandert er voor de rest van het project?

Kan je die vragen niet beantwoorden, dan is het te vroeg om te prompten. Maak eerst een schets op papier, een lijstje of een schema. Iedereen heeft daarvoor zijn eigen stijl.

### Het model bouwt wat je vraagt

Een model voert uit wat je vraagt. Soms waarschuwt het voor een nadeel. Maar dring je aan, dan bouwt het toch.

Nadenken over de gevolgen is dus jouw taak. Elke keuze heeft een **trade-off** (afweging): je wint iets, en je geeft iets op. Een extra feature maakt een applicatie bijvoorbeeld nuttiger, maar ook moeilijker om te onderhouden.

Dat inzicht maakt het verschil tussen een developer en iemand die alleen een wens doorgeeft.

### Kort of lang?

Een goede prompt is niet altijd lang, en een korte prompt is niet altijd fout.

| | Korte prompt | Lange prompt |
|---|---|---|
| Voordeel | snel geschreven | jij beslist meer |
| Nadeel | het model beslist veel | details raken ondergesneeuwd |
| Werkt goed als | de context al duidelijk maakt wat je bedoelt | de taak veel regels heeft |

"Los de test op die faalt" is genoeg in een project waar de tests duidelijk zijn. De context zegt daar de rest (zie [2.4](#2_4)).

Een lange prompt heeft ook grenzen. In een heel lange prompt verliest het model kleine details, net zoals in een volle context (zie [1.4](./module-1.md#1_4)). En een prompt die tien richtingen tegelijk uitgaat, geeft rommelig werk.

### Eén ding tegelijk

Baken je taak af: één feature of één wijziging per prompt. Zo blijft de **scope** van je taak klein (zie [1.5](./module-1.md#1_5)). Je houdt de controle, en je controleert het resultaat snel.

Vraag je te veel tegelijk, dan krijg je veel code in één keer. Een fout vind je dan moeilijk terug, en wijzigingen kunnen met elkaar botsen.

::: info
Sommige agent harnesses kunnen een grote taak verdelen over meerdere agents die tegelijk werken. Eén agent verdeelt het werk en verzamelt de resultaten. De andere heten **subagents**. Dat wordt steeds belangrijker, en in een groot project met goed gescheiden onderdelen werkt het goed. Maar je controleert dan veel output tegelijk, en daar heb je ervaring voor nodig. In deze cursus doen we dat nog niet: wie controle wil over het resultaat, begint met één ding tegelijk.
:::

### Test jezelf 2.2 – Eerst denken, dan prompten {#test-jezelf-2-2-eerst-denken-dan-prompten}

```text
Sectie: 2.2
Type: meerkeuze
Vraag: Een klant vraagt: "Maak iets om taken bij te houden." Wat doe je eerst? Kies één antwoord.
Opties:
  A. Meteen de prompt "Maak een takenapp" sturen en kijken wat eruit komt.
  B. Bepalen wat je wil bouwen, waarom, en wat er niet bij hoort.
  C. Het sterkste model kiezen dat je kan vinden.
  D. Eén lange prompt schrijven met alle features die je kan bedenken.
Juist: B
Feedback A: Dan beslist het model wat een takenapp is. Je krijgt snel iets waar niemand om vroeg (zie 2.2).
Feedback B: Juist. Weet eerst wat je wil. Pas dan kan je het precies vragen (zie 2.2).
Feedback C: Ook het sterkste model weet niet wat de klant bedoelt (zie 2.2).
Feedback D: Zo krijg je veel code tegelijk, voor features waar niemand om vroeg (zie 2.2).

Sectie: 2.2
Type: juist/fout
Vraag: Als je iets vraagt dat een slecht idee is, weigert een model om het te bouwen.
Juist: fout
Feedback: Een model voert uit wat je vraagt. Soms waarschuwt het, maar dring je aan, dan bouwt het toch. Nadenken over de gevolgen is jouw taak (zie 2.2).

Sectie: 2.2
Type: meerkeuze
Vraag: Wanneer is een korte prompt een goede keuze? Kies één antwoord.
Opties:
  A. Altijd: korte prompts kosten minder tokens.
  B. Nooit: een goede prompt is altijd lang.
  C. Als de context al duidelijk maakt wat je bedoelt.
  D. Als je weinig tijd hebt.
Juist: C
Feedback A: Een korte prompt is goedkoop om te sturen, maar het model beslist dan veel. Dat kan je later meer kosten (zie 2.2).
Feedback B: "Los de test op die faalt" is kort en toch duidelijk in een project met duidelijke tests (zie 2.2).
Feedback C: Juist. Als de context de rest zegt, is een korte prompt genoeg (zie 2.2).
Feedback D: Weinig tijd is geen reden. Een vage prompt kost je achteraf meer tijd (zie 2.2).

Sectie: 2.2
Type: meerkeuze
Vraag: Waarom vraag je best één feature of één wijziging per prompt? Kies één antwoord.
Opties:
  A. Een model kan maar één feature tegelijk schrijven.
  B. Een klein resultaat controleer je snel, en een fout vind je makkelijker terug.
  C. Een lange prompt wordt altijd afgekapt.
  D. Het model werkt dan sneller.
Juist: B
Feedback A: Een model kan veel tegelijk schrijven. Het probleem is dat jij dat allemaal moet controleren (zie 2.2).
Feedback B: Juist. Een kleine scope geeft jou de controle (zie 2.2).
Feedback C: Lange prompts werken meestal. Het gaat om de controle van het resultaat (zie 2.2).
Feedback D: Snelheid is niet de reden. Het gaat om controle en kwaliteit (zie 2.2).

Sectie: 2.2
Type: koppelen
Vraag: Koppel elke term aan de omschrijving.
Paren:
  Trade-off → Je wint iets, en je geeft iets op.
  Scope → De afbakening van je taak.
  Subagent → Een hulpagent die een deel van een grote taak uitvoert.
Feedback: Een trade-off is een afweging, de scope is wat wel en niet bij je taak hoort, en een subagent werkt aan een deel van een grotere taak (zie 2.2).
```

## 2.3 De structuur van een prompt

Een goede prompt beschrijft vier dingen:

- Context: in welke taal, welk project en welke omgeving werkt de code? In welk bestand komt ze?
- Input: wat krijgt de function of het systeem mee?
- Output: wat moet eruit komen, en in welk formaat?
- Beperkingen: wat mag niet, of waar moet de oplossing rekening mee houden? Denk aan geen externe libraries, een vaste naamgeving of een wettelijke regel.

Je wil bijvoorbeeld een API-endpoint laten genereren. Vergelijk deze twee prompts.

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

De algemene vorm ziet er zo uit:

```text
Context: <taal, framework, project, bestand, bestaande code>
Input: <wat de function krijgt: types, formaat, voorbeelden>
Output: <wat eruit komt: type, formaat, wat bij een fout>
Beperkingen: <wat niet mag, conventies, gewenste aanpak>
```

### Eén goede manier, niet de enige

Deze structuur geeft je veel controle, en je mag ze altijd gebruiken. Maar het is niet de enige manier:

- Je kan dezelfde informatie in gewone zinnen schrijven, met koppen in Markdown of als JSON. De vorm is minder belangrijk dan de inhoud: de vier elementen moeten erin staan.
- Een prompt is meer dan tekst. Je kan ook een screenshot, een schema of een document meegeven. Een tekening van hoe een pagina eruit moet zien, zegt soms meer dan tien zinnen.

Een goede prompt dwingt je ook om eerst zelf over het probleem na te denken. Kan je de vier elementen niet invullen, dan begrijp je het probleem nog niet goed genoeg om een oplossing te laten genereren (zie [2.2](#2_2)).

### Test jezelf 2.3 – De structuur van een prompt {#test-jezelf-2-2-de-structuur-van-een-prompt}

```text
Sectie: 2.3
Type: categoriseren
Vraag: Bekijk deze prompt: "Schrijf in JavaScript een function isAdult(age) die een geheel getal krijgt." Welke elementen zijn aanwezig en welke ontbreken?
Indeling:
  Context → aanwezig
  Input → aanwezig
  Output → ontbreekt
  Beperkingen → ontbreekt
Feedback: De prompt noemt de taal (context) en wat de function krijgt (input). Wat ze teruggeeft en waar de oplossing rekening mee moet houden, staat er niet in (zie 2.3).

Sectie: 2.3
Type: meerkeuze
Vraag: Welk element ontbreekt in deze prompt? "Schrijf in Python een function die een lijst van prijzen krijgt. Gebruik geen externe libraries." Kies één antwoord.
Opties:
  A. Context
  B. Input
  C. Output
  D. Beperkingen
Juist: C
Feedback A: De taal staat erin: Python (zie 2.3).
Feedback B: De input staat erin: een lijst van prijzen (zie 2.3).
Feedback C: Juist. Wat de function met de prijzen moet doen en wat ze teruggeeft, staat er niet in (zie 2.3).
Feedback D: De beperking staat erin: geen externe libraries (zie 2.3).

Sectie: 2.3
Type: meerkeuze
Vraag: Welke prompt bevat context, input, output en een beperking? Kies één antwoord.
Opties:
  A. Schrijf een function die controleert of een wachtwoord sterk is.
  B. Schrijf in JavaScript een function isStrongPassword(password) die een string krijgt.
  C. Schrijf een wachtwoordcontrole zonder externe libraries die true of false teruggeeft.
  D. Schrijf in JavaScript een function isStrongPassword(password) die een string krijgt en true of false teruggeeft. Een sterk wachtwoord heeft minstens 12 tekens. Gebruik geen externe libraries.
Juist: D
Feedback A: Deze prompt zegt niet in welke taal, wat de function krijgt, wat ze teruggeeft of wanneer een wachtwoord sterk is (zie 2.3).
Feedback B: Context en input staan erin, maar de output en de beperkingen ontbreken (zie 2.3).
Feedback C: Output en een beperking staan erin, maar de context en de input ontbreken (zie 2.3).
Feedback D: Juist. Taal, input, output en beperkingen staan er allemaal in (zie 2.3).

Sectie: 2.3
Type: juist/fout
Vraag: Een model begrijpt je prompt alleen als je de labels Context, Input, Output en Beperkingen gebruikt.
Juist: fout
Feedback: De labels zijn één goede manier, niet de enige. Gewone zinnen, Markdown of JSON werken ook, zolang de vier elementen erin staan (zie 2.3).
```

## 2.4 Context: wat moet het model weten?

In [1.4](./module-1.md#1_4) zag je de regel: een model weet alleen wat het leerde tijdens de training en wat nu in zijn context staat. Voor je prompts betekent dat: vraag niets waarvoor het model de informatie niet heeft.

Stel jezelf dus voor je een prompt verstuurt opnieuw de vraag uit module 1: kon het model dit weten?

### Chatvenster of agent harness

Wat het model kan zien, hangt af van waar je werkt:

- In een chatvenster ziet het model alleen wat jij typt of plakt.
- In een agent harness kan het model zelf in je project zoeken en bestanden lezen. Reken er niet op dat het altijd het juiste vindt. Het zoekt, en soms zoekt het op de verkeerde plaats.

### Wijs de weg

Zeg waar het model moet kijken:

```text
Voeg studentenkorting toe aan de function total in src/cart.js.
De regels voor kortingen staan in docs/kortingen.md.
```

Zonder de tweede zin moet het model raden hoeveel korting een student krijgt. Of het doorzoekt je hele project, en dat kost tijd en tokens.

Elke agent harness heeft eigen manieren om context mee te geven:

- Selecteer code in je editor. In veel agent harnesses gaat die selectie automatisch mee met je prompt.
- Vermeld een bestand in je prompt. In veel agent harnesses doe je dat met een teken zoals `#` of `@`, gevolgd door de naam van het bestand.
- Voeg een bestand of een afbeelding toe aan het gesprek.

Leer hoe dat werkt in de agent harness die jij gebruikt.

### Onboard het model

Behandel het model als een nieuwe collega op zijn eerste dag. Hij is slim, maar hij kent je project niet. Wat moet hij weten om deze taak goed te doen?

- Waar gaat het project over?
- Waar staan de bestanden die hij nodig heeft?
- Welke afspraken gelden er, zoals naamgeving of een vast framework?
- Wat bestaat er al, zodat hij het niet opnieuw schrijft?

Elk nieuw gesprek begint leeg (zie [1.4](./module-1.md#1_4)). Die onboarding doe je dus bij elk nieuw gesprek opnieuw.

Informatie die altijd terugkomt, zet je in een instructiebestand. Dat is een tekstbestand met de vaste afspraken van je project. De agent harness leest het bij elk nieuw gesprek zelf. Je hoeft die afspraken dan niet in elke prompt te herhalen. De naam van het bestand hangt af van je agent harness. Voor GitHub Copilot is dat `AGENTS.md`, in de hoofdmap van je project. Zo'n bestand ziet er bijvoorbeeld zo uit:

```markdown
- Dit project is een webshop in JavaScript.
- Bedragen staan altijd in eurocent, als gehele getallen.
- Schrijf code en commentaar in het Engels.
```

Geef ook niet te veel mee. Het model heeft de context nodig voor deze taak, niet je volledige project.

### Test jezelf 2.4 – Context: wat moet het model weten? {#test-jezelf-2-4-context}

```text
Sectie: 2.4
Type: meerkeuze
Vraag: Je start een nieuw gesprek en typt: "Voeg de korting toe zoals we gisteren afspraken." Wat is het probleem? Kies één antwoord.
Opties:
  A. De prompt is te kort.
  B. Het gesprek van gisteren zit niet in de context. Het model weet niet wat jullie afspraken.
  C. Een model kan geen kortingen berekenen.
  D. Er is geen probleem: het model onthoudt vorige gesprekken.
Juist: B
Feedback A: De lengte is niet het probleem. De informatie ontbreekt (zie 2.4).
Feedback B: Juist. Elk nieuw gesprek begint leeg. Geef de afspraak opnieuw mee (zie 2.4).
Feedback C: Dat kan een model wel, als het weet welke korting je bedoelt (zie 2.4).
Feedback D: Een model onthoudt niets tussen gesprekken (zie 1.4).

Sectie: 2.4
Type: meerkeuze
Vraag: Je werkt in een agent harness die zelf bestanden in je project kan lezen. Welke uitspraak klopt het best? Kies één antwoord.
Opties:
  A. Het model leest bij elke prompt automatisch alle bestanden van je project.
  B. Het model kan zelf zoeken, maar het vindt niet altijd het juiste. Zeg waar het moet kijken.
  C. Je moet toch altijd alle code in je prompt plakken.
  D. Een agent harness kan geen documentatie lezen, alleen code.
Juist: B
Feedback A: Een agent harness leest niet alles. Het model zoekt, en het kiest zelf waar (zie 2.4).
Feedback B: Juist. Wijs de weg: noem het bestand of de map (zie 2.4).
Feedback C: Dat hoeft niet. Je kan een bestand vermelden of code selecteren (zie 2.4).
Feedback D: Een agent harness kan elk tekstbestand lezen, ook documentatie (zie 2.4).

Sectie: 2.4
Type: categoriseren
Vraag: Je taak is: "Voeg studentenkorting toe aan de function total in src/cart.js." Welke informatie geef je mee?
Indeling:
  Het bestand src/cart.js → nodig voor deze taak
  Het document met de regels voor kortingen → nodig voor deze taak
  De afspraak dat alle prijzen in eurocent staan → nodig voor deze taak
  De CSS van de homepagina → niet nodig
  Alle andere bestanden van het project → niet nodig
Feedback: Geef mee wat deze taak nodig heeft: de code, de regels en de afspraken. Al de rest vult de context met tekst die er niet toe doet (zie 2.4).

Sectie: 2.4
Type: juist/fout
Vraag: Wat je in een vorig gesprek aan het model uitlegde, hoef je in een nieuw gesprek niet opnieuw mee te geven.
Juist: fout
Feedback: Elk nieuw gesprek begint leeg. Onboard het model opnieuw, of zet vaste informatie in een instructiebestand (zie 2.4).
```

## 2.5 Drie soorten vragen: genereren, aanpassen en evalueren

De meeste prompts voor code zijn een van drie soorten. Elke soort vraagt iets anders van je prompt.

**Genereren**: je vraagt iets nieuws, zoals een function, een test case of documentatie. Het model vertrekt van jouw beschrijving, dus de vier elementen uit [2.3](#2_3) zijn hier het belangrijkst.

```text
Schrijf een JavaScript-function die een array van getallen krijgt en een
nieuwe array teruggeeft met enkel de priemgetallen.
```

**Aanpassen**: je geeft bestaande code mee en vraagt een wijziging. Zeg wat moet veranderen, en ook wat hetzelfde moet blijven.

```text
Herschrijf de geselecteerde function met een for...of-loop in plaats van
een while-loop. Behoud de logica en de naam van de function.
Verander niets anders.
```

"De geselecteerde function" is de code die je net in je editor selecteerde. In veel agent harnesses gaat die selectie mee als context (zie [2.4](#2_4)). Zo weet het model over welke function het gaat, zonder dat je de naam noemt of de code plakt.

**Evalueren**: je vraagt een oordeel over bestaande code. Zeg waarop het model moet letten.

```text
Bekijk de function hieronder. Welke edge cases handelt ze niet af?
```

De soorten kan je combineren. Je laat het model eerst evalueren en daarna aanpassen. Of je genereert, bekijkt het resultaat en stuurt bij met een prompt die aanpast.

### Zeg welke output je wil

Een agent harness is gebouwd om dingen te doen. Stel je een vraag over je code, dan begint een agent vaak meteen bestanden aan te passen. Wil je alleen een antwoord, zeg dat dan duidelijk:

```text
Verander niets aan de code. Geef alleen een analyse in tekst:
welke edge cases handelt de function total in src/cart.js niet af?
```

Dat lijkt overdreven, maar het werkt.

Zeg bij elke prompt welke output je verwacht: aangepaste code, een nieuw bestand, uitleg in het gesprek, een lijst of een tabel. Zeg je niets, dan kiest het model (zie [2.1](#2_1)). En een agent kiest meestal voor doen.

### Test jezelf 2.5 – Drie soorten vragen {#test-jezelf-2-3-drie-basispatronen-voor-prompts}

```text
Sectie: 2.5
Type: meerkeuze
Vraag: Je function werkt, maar is moeilijk leesbaar door slechte namen en ontbrekende comments. Je wil dat het model dat verbetert. Welke soort vraag is dat? Kies één antwoord.
Opties:
  A. Genereren
  B. Aanpassen
  C. Evalueren
  D. Genereren en daarna evalueren
Juist: B
Feedback A: Je vraagt niets nieuws: de code bestaat al en moet veranderen (zie 2.5).
Feedback B: Juist. Je geeft bestaande code mee en vraagt een wijziging (zie 2.5).
Feedback C: Je wil geen oordeel, maar een verbeterde versie (zie 2.5).
Feedback D: Er moet niets nieuws gemaakt worden. Het gaat om een wijziging van bestaande code (zie 2.5).

Sectie: 2.5
Type: koppelen
Vraag: Koppel elke prompt aan de soort vraag.
Paren:
  Schrijf vijf test cases voor de function validateEmail(). → genereren
  Zet deze callbacks om naar async/await. → aanpassen
  Welke van deze twee implementaties is leesbaarder? → evalueren
Feedback: Genereren maakt iets nieuws, aanpassen verandert bestaande code, evalueren geeft een oordeel (zie 2.5).

Sectie: 2.5
Type: meerkeuze
Vraag: Je werkt met een agent in je editor. Je wil weten of je function fouten bevat, maar de agent mag niets aanpassen. Welke prompt is het best? Kies één antwoord.
Opties:
  A. Zitten er fouten in deze function?
  B. Verbeter deze function.
  C. Verander niets aan de code. Geef alleen een analyse in tekst: welke fouten zie je in deze function?
  D. Bekijk deze function eens.
Juist: C
Feedback A: Een agent kan dit lezen als een opdracht om de fouten ook op te lossen. Zeg welke output je wil (zie 2.5).
Feedback B: Dit is een vraag om aan te passen. De agent verandert je code (zie 2.5).
Feedback C: Juist. Je zegt wat niet mag en welke output je verwacht (zie 2.5).
Feedback D: Te vaag. Het model kiest zelf wat het doet, en een agent kiest meestal voor doen (zie 2.5).

Sectie: 2.5
Type: meerkeuze
Vraag: Je vraagt: "Herschrijf deze function met een for...of-loop." Het model verandert ook de naam van de function. Wat ontbrak er in je prompt? Kies één antwoord.
Opties:
  A. De programmeertaal.
  B. Een voorbeeld van een for...of-loop.
  C. Wat hetzelfde moet blijven.
  D. De reden waarom je een for...of-loop wil.
Juist: C
Feedback A: De taal ziet het model aan de code (zie 2.5).
Feedback B: Een model kent een for...of-loop. Dat was het probleem niet (zie 2.5).
Feedback C: Juist. Zeg bij een aanpassing ook wat moet blijven: "Behoud de naam en de logica. Verander niets anders." (zie 2.5).
Feedback D: De reden hoeft het model niet te kennen om de naam te behouden (zie 2.5).
```

## 2.6 Voorbeelden en edge cases in je prompt

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

Voorbeelden zijn ook de beste manier om **edge cases** mee te geven: input die afwijkt van wat je normaal verwacht.

```text
''       -> ''
'Oliv3r' -> fout met de boodschap 'Naam mag geen cijfers bevatten'
null     -> fout met de boodschap 'Naam mag niet leeg zijn'
```

Zonder die voorbeelden schrijft het model waarschijnlijk een function die werkt voor gangbare input, maar crasht of vreemd reageert bij edge cases. Een model dekt standaard de **happy path**: het verloop waarin de input is wat je verwacht en er niets misloopt. Voor de rest ben jij verantwoordelijk.

Dit betekent voor jou: schrijf je voorbeelden uit voor je de prompt verstuurt. Zo bepaal je vooraf hoe je oplossing zich moet gedragen, en dat is een goede gewoonte, met of zonder AI.

### Test jezelf 2.6 – Voorbeelden en edge cases {#test-jezelf-2-4-voorbeelden-en-randgevallen}

```text
Sectie: 2.6
Type: meerkeuze
Vraag: Wat is het grootste voordeel van voorbeelden in een prompt? Kies één antwoord.
Opties:
  A. Het model antwoordt sneller.
  B. Je geeft concrete verwachtingen mee, waardoor de output gerichter is.
  C. Voorbeelden vervangen de beschrijving van input en output volledig.
  D. Met voorbeelden moet je de output niet meer controleren.
Juist: B
Feedback A: Voorbeelden maken het model niet sneller, wel nauwkeuriger (zie 2.6).
Feedback B: Juist. Voorbeelden laten weinig ruimte voor eigen keuzes van het model (zie 2.6).
Feedback C: Voorbeelden vullen een beschrijving aan, ze vervangen die niet (zie 2.6).
Feedback D: Ook met voorbeelden blijft de output onbewezen tot je ze controleert (zie 1.7).

Sectie: 2.6
Type: meerkeuze
Vraag: Wat is de happy path? Kies één antwoord.
Opties:
  A. Het verloop waarin de input is wat de function verwacht en er niets misloopt.
  B. De snelste route door een algorithm.
  C. De input die gebruikers het vaakst ingeven.
  D. Een vaste manier om fouten af te handelen.
Juist: A
Feedback A: Juist. Een model dekt standaard de happy path. De edge cases zijn jouw verantwoordelijkheid (zie 2.6).
Feedback B: De happy path gaat niet over snelheid, maar over input zonder problemen (zie 2.6).
Feedback C: Gangbare input volgt meestal de happy path, maar de term gaat over het verloop zonder fouten (zie 2.6).
Feedback D: De happy path is net het verloop waarin er geen fout is (zie 2.6).

Sectie: 2.6
Type: meerdere antwoorden
Vraag: Je schrijft een prompt voor isAdult(age), die controleert of iemand minstens 18 jaar is. Welke voorbeelden zijn edge cases? Kies twee antwoorden.
Opties:
  A. 25 -> true
  B. 18 -> true
  C. -3 -> fout met de boodschap 'Leeftijd kan niet negatief zijn'
  D. 40 -> true
Juist: B, C
Feedback A: 25 is een gangbare leeftijd ver van de grens. Dat is de happy path (zie 2.6).
Feedback B: Juist. 18 ligt precies op de grens, en net daar gaan functions vaak fout (zie 2.6).
Feedback C: Juist. Een negatieve leeftijd is ongeldige input (zie 2.6).
Feedback D: 40 is gangbare input. Dat is de happy path (zie 2.6).

Sectie: 2.6
Type: meerkeuze
Vraag: Je prompt zegt: "Schrijf een function die een bedrag afrondt." Waarom helpt het voorbeeld "2.347 -> 2.35" hier? Kies één antwoord.
Opties:
  A. Het maakt de prompt langer, en lange prompts zijn beter.
  B. "Afronden" kan veel betekenen. Het voorbeeld toont welke afronding jij bedoelt.
  C. Het model kan zonder voorbeeld niet afronden.
  D. Het voorbeeld vervangt het testen van de function.
Juist: B
Feedback A: De lengte is niet het doel. Het voorbeeld neemt twijfel weg (zie 2.6).
Feedback B: Juist. Naar een geheel getal, op een cent of op vijf cent: het voorbeeld sluit de andere betekenissen uit (zie 2.6).
Feedback C: Een model kan wel afronden. Het weet alleen niet welke afronding je wil (zie 2.6).
Feedback D: Je test de function altijd zelf, ook met voorbeelden in je prompt (zie 1.7).
```

## 2.7 Itereren: jij bent de for-loop

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

### Een vervolgprompt mag kort zijn

In hetzelfde gesprek staat je taak al in de context: de code, je eerdere prompts en de antwoorden. Het model weet dus waarover het gaat. Een vervolgprompt hoeft dat niet te herhalen. Hij mag kort en gericht zijn:

```text
Gooi ook een fout als de array leeg is.
```

Let wel op: dat werkt alleen omdat de context geladen is. Stuur je diezelfde korte zin in een nieuw gesprek, in een project met duizend bestanden, dan weet het model niet over welke function het gaat. Het moet zoeken en raden, en het resultaat kan helemaal anders zijn. Dezelfde prompt geeft in een andere context een andere uitkomst (zie [2.4](#2_4)).

Weet dus altijd wat er op dit moment in de context zit. Jij bent de operator (zie [1.5](./module-1.md#1_5)).

Werk ook hier in kleine stappen (zie [1.7](./module-1.md#1_7)). Vraag niet om een volledige feature in één prompt. Genereer een basisversie, controleer die en bouw er dan op verder.

### Laat een model je prompt verbeteren

Soms weet je wat je wil, maar krijg je het niet goed geformuleerd. Of je prompt is een ingesproken tekst vol herhalingen. Een model is ook goed in prompts schrijven. Vraag het om te helpen:

```text
Help me deze prompt te verbeteren. Voer de prompt zelf niet uit.
Stel me eerst vragen als iets onduidelijk is.

Prompt:
ik wil iets waarmee ik kan zien welke studenten hun taak nog niet
hebben ingeleverd, liefst in een lijst of zo, en het moet in javascript
```

Het model maakt er een gestructureerde prompt van, vaak met de vier elementen uit [2.3](#2_3). Dat kan in een gewoon chatvenster: je hebt er geen agent harness voor nodig.

Lees die prompt wel na voor je hem gebruikt. Het model vult ook hier lege plekken in met eigen keuzes (zie [2.1](#2_1)). Schrap wat je niet vroeg, en verbeter wat niet klopt. Het blijft jouw prompt.

### Test jezelf 2.7 – Itereren {#test-jezelf-2-5-itereren}

```text
Sectie: 2.7
Type: meerkeuze
Vraag: De output van je prompt is deels correct: de logica klopt, maar de foutafhandeling ontbreekt. Wat is de beste volgende stap? Kies één antwoord.
Opties:
  A. Dezelfde prompt opnieuw sturen en hopen op een beter resultaat.
  B. De output weggooien en de taak volledig zelf uitvoeren.
  C. Een vervolgprompt sturen die vraagt om foutafhandeling toe te voegen aan de bestaande code.
  D. Een nieuwe prompt sturen die de volledige function opnieuw vraagt, met foutafhandeling erbij.
Juist: C
Feedback A: Dezelfde prompt geeft hoogstens toevallig een beter resultaat. Stuur gericht bij (zie 2.7).
Feedback B: Het correcte deel is bruikbaar. Bouw daarop verder (zie 2.7).
Feedback C: Juist. Een gerichte vervolgprompt behoudt wat al klopt (zie 2.7).
Feedback D: Dan riskeer je dat het model ook de logica verandert die al klopte (zie 2.7).

Sectie: 2.7
Type: meerkeuze
Vraag: Waarom werk je beter in kleine stappen als je itereert met prompts? Kies één antwoord.
Opties:
  A. Kleine stappen zijn makkelijker te controleren en bij te sturen dan grote sprongen.
  B. Een model vergeet alles wat langer is dan een paar zinnen.
  C. Lange prompts worden altijd afgekapt.
  D. Een korte prompt geeft altijd betere code dan een lange.
Juist: A
Feedback A: Juist. Een klein resultaat controleer je snel, en een fout vind je sneller terug (zie 2.7).
Feedback B: Een model kan veel tekst verwerken. Het probleem is dat jij een groot resultaat moeilijk controleert (zie 2.7).
Feedback C: Lange prompts werken meestal. Het gaat om de controle van de output (zie 2.7).
Feedback D: Een korte prompt is net vaak te vaag (zie 2.1). Het gaat om de grootte van elke stap (zie 2.7).

Sectie: 2.7
Type: meerkeuze
Vraag: Je werkt al een tijd in één gesprek aan de function average. Je stuurt: "Gooi ook een fout als de array leeg is." Waarom is die korte vervolgprompt hier genoeg? Kies één antwoord.
Opties:
  A. Korte prompts zijn altijd beter dan lange.
  B. De function en je eerdere prompts staan al in de context. Het model weet waarover het gaat.
  C. Het model onthoudt alle gesprekken die je ooit voerde.
  D. Een model raadt altijd juist welke function je bedoelt.
Juist: B
Feedback A: Een korte prompt werkt alleen als de context de rest zegt (zie 2.7).
Feedback B: Juist. De context is geladen, dus je hoeft de taak niet opnieuw uit te leggen (zie 2.7).
Feedback C: Een model onthoudt niets tussen gesprekken. In een nieuw gesprek werkt deze korte prompt niet (zie 2.7).
Feedback D: Zonder context moet het model raden, en het resultaat kan helemaal anders zijn (zie 2.7).

Sectie: 2.7
Type: ordenen
Vraag: Zet de stappen van itereren in de juiste volgorde.
Volgorde:
  Stuur een prompt.
  Beoordeel de output.
  Beslis of het resultaat goed genoeg is.
  Pas de prompt aan of stuur een vervolgprompt.
Feedback: Je beoordeelt altijd eerst de output. Pas daarna beslis je of je stopt of bijstuurt (zie 2.7).

Sectie: 2.7
Type: meerkeuze
Vraag: Je laat een model je vage prompt herschrijven tot een precieze prompt. Wat doe je met het resultaat? Kies één antwoord.
Opties:
  A. Meteen gebruiken: het model weet beter dan jij wat een goede prompt is.
  B. Nalezen: schrappen wat je niet vroeg en verbeteren wat niet klopt.
  C. Weggooien: een prompt moet je altijd volledig zelf schrijven.
  D. Aan een tweede model vragen of de prompt goed is.
Juist: B
Feedback A: Het model vult lege plekken in met eigen keuzes. Die kloppen niet per se met wat jij wil (zie 2.7).
Feedback B: Juist. Het blijft jouw prompt. Jij beslist wat erin staat (zie 2.7).
Feedback C: Een model is goed in prompts schrijven. Je mag die hulp gebruiken, als je het resultaat naleest (zie 2.7).
Feedback D: Een tweede model weet evenmin wat jij bedoelt. Lees de prompt zelf na (zie 2.7).
```

## Samenvatting

Nieuwe termen:

- prompt: alles wat je naar een model stuurt om het een taak te laten doen.
- requirements: de beschrijving van wat een systeem moet doen.
- trade-off: een afweging. Je wint iets, en je geeft iets op.
- subagent: een hulpagent die een deel van een grote taak uitvoert.
- edge case: input die afwijkt van wat je normaal verwacht.
- happy path: het verloop waarin de input is wat je verwacht en er niets misloopt.
- vervolgprompt: een prompt die verder bouwt op de output die je al hebt.

Belangrijkste regels:

- Wat je niet zegt, beslist het model. Met een vage prompt geef je de controle uit handen.
- Denk eerst na: wat wil je bouwen, waarom, en wat hoort er niet bij?
- Vraag één ding tegelijk.
- Een prompt is een specificatie. Beschrijf context, input, output en beperkingen.
- Geef het model de context die de taak nodig heeft, en zeg waar het moet kijken.
- Kies de soort vraag: genereren, aanpassen of evalueren. Zeg bij een aanpassing ook wat hetzelfde moet blijven.
- Zeg welke output je wil. Wil je alleen een analyse, zeg dan dat het model niets mag veranderen.
- Geef voorbeelden mee, ook van edge cases. Een model dekt standaard enkel de happy path.
- Itereer in kleine stappen. Jij beslist wanneer het resultaat goed genoeg is.
- Een vervolgprompt mag kort zijn, zolang de context geladen is. In een nieuw gesprek werkt dezelfde korte prompt niet.
- Een model mag je helpen om je prompt te verbeteren. Lees het resultaat na: het blijft jouw prompt.

## Veelgemaakte fouten

- Beginnen te prompten voor je weet wat je wil. Je krijgt snel veel code, voor een probleem dat niemand had.
- Een vage prompt sturen. "Schrijf een wachtwoordchecker" laat het model kiezen wat een sterk wachtwoord is, in welke taal en wat de function teruggeeft.
- Iets vragen waarvoor het model de informatie niet heeft. "Zoals we gisteren afspraken" werkt niet in een nieuw gesprek.
- Bij een aanpassing niet zeggen wat moet blijven. "Herschrijf met een for...of-loop" kan ook de naam of de logica van je function veranderen.
- Een vraag stellen aan een agent zonder te zeggen dat hij niets mag aanpassen. Je wou een antwoord, en je krijgt gewijzigde bestanden.
- Enkel happy-path-voorbeelden geven. Met alleen `'soufian' -> 'Soufian'` weet het model niet wat het met `''` of `null` moet doen.
- Bij een onvolledig resultaat opnieuw beginnen. Een gerichte vervolgprompt behoudt wat al klopt.
- Een volledige feature in één prompt vragen. Het resultaat is groot, en een fout vind je moeilijk terug.
- Een prompt die een model voor je schreef gebruiken zonder hem na te lezen.

::: oefening
[Oefeningen module 2](./module-2-oefeningen.md)
:::
