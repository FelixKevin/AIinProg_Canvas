---
module: 7
order: 1
moduleTitle: "Module 7: Licenties, privacy en verantwoordelijkheid"
published: false
---

# Module 7: Licenties, privacy en verantwoordelijkheid

Saai? Niet echt. Minder leuk dan code schrijven, dat wel.

Wie de regels rond licenties, privacy en transparantie niet kent, kan zichzelf en zijn of haar werkgever in serieuze problemen brengen. In deze module leer je welke regels gelden voor AI-gebruik en hoe je er in de praktijk mee omgaat.

### Leerdoelen

Na deze module kan je:

- uitleggen waarom de licentie van gegenereerde code jouw verantwoordelijkheid is;
- code en data anonimiseren voor je ze naar een externe AI-tool stuurt;
- een SQL-injectie herkennen in gegenereerde code;
- nagaan welke regels je organisatie oplegt voor AI-gebruik;
- AI-gebruik correct vermelden in een academische en een professionele context.

## 7.1 Licenties en auteursrecht

Je liet een function genereren. Ze werkt. Je plakt ze in je project, commit en pusht. Wat je misschien niet weet: op die function kunnen juridische beperkingen rusten.

AI-modellen zijn getraind op enorme hoeveelheden bestaande code: open-sourceprojecten, repositories op GitHub, documentatie en tutorials. Een model genereert code op basis van patronen uit die trainingsdata (zie [1.1](./module-1.md#1_1)). Als gebruiker kan je onmogelijk weten of een stuk output lijkt op code met een bepaalde licentie.

Een **licentie** legt vast wat je met code mag doen: gebruiken, aanpassen, verspreiden, verkopen. Sommige licenties, zoals MIT, laten bijna alles toe. Andere, zoals de GPL, zijn **copyleft**: wie GPL-code opneemt in software die hij of zij verspreidt, moet die software ook onder de GPL vrijgeven. Komt zulke code onbewust in een commercieel product terecht, dan heeft het bedrijf een juridisch probleem.

De kernboodschap wordt te vaak genegeerd: de verantwoordelijkheid voor code ligt altijd bij de developer die ze gebruikt en integreert. Niet bij de AI-tool, en niet bij de aanbieder van de tool. Bij jou.

In de praktijk betekent dat:

- Gebruik AI-tools waarvan de aanbieder duidelijk zegt wie eigenaar is van de output en hoe de tool met licenties omgaat.
- Ga na of je organisatie of project eisen stelt over licenties.
- Wees voorzichtig met grote, complexe gegenereerde stukken code in commerciële producten zonder review.
- Ga er nooit van uit dat gegenereerde code vrij te gebruiken is.

Dit is geen reden om AI niet te gebruiken. Het is een reden om er bewust mee om te gaan.

### Test jezelf 7.1 – Licenties en auteursrecht

```text
Sectie: 7.1
Type: meerkeuze
Vraag: Je integreert gegenereerde code in een commercieel project. Wie is verantwoordelijk als de code een licentie schendt? Kies één antwoord.
Opties:
  A. De aanbieder van de AI-tool, want die koos de trainingsdata.
  B. De oorspronkelijke auteur van de code waarop het model zich baseerde.
  C. De developer die de code gebruikte en integreerde.
  D. Niemand, want AI-code valt buiten de bestaande wetgeving.
Juist: C
Feedback A: De aanbieder levert een tool. Wat je ermee in je project zet, is jouw verantwoordelijkheid (zie 7.1).
Feedback B: De oorspronkelijke auteur is net degene wiens rechten geschonden kunnen worden (zie 7.1).
Feedback C: Juist. Wie code integreert, is er verantwoordelijk voor, ook als een model ze schreef (zie 7.1).
Feedback D: Licenties gelden voor code, ongeacht wie of wat ze schreef (zie 7.1).

Sectie: 7.1
Type: meerkeuze
Vraag: Wat is het verantwoordst als je gegenereerde code in een commercieel project wil gebruiken? Kies één antwoord.
Opties:
  A. Nagaan wat de AI-tool zegt over licenties en eigendom, en of je project dat toelaat.
  B. De code meteen integreren: AI-tools garanderen output zonder licentie.
  C. Alle gegenereerde code volledig zelf herschrijven.
  D. Enkel gratis AI-tools gebruiken, want die hebben geen licentieproblemen.
Juist: A
Feedback A: Juist. Je kent de regels van je tool en je project voor je code integreert (zie 7.1).
Feedback B: Geen enkele tool kan garanderen dat output niet lijkt op code met een licentie (zie 7.1).
Feedback C: Dat is niet nodig. Bewust gebruik en review volstaan meestal (zie 7.1).
Feedback D: Of een tool gratis is, zegt niets over de licentie van de output (zie 7.1).

Sectie: 7.1
Type: juist/fout
Vraag: Een licentie met copyleft, zoals de GPL, verplicht je om software die zulke code bevat en die je verspreidt, onder dezelfde licentie vrij te geven.
Juist: juist
Feedback: Daarom is copyleft-code riskant in een commercieel product dat niet open source mag worden (zie 7.1).
```

## 7.2 Privacy en beveiliging

Er is iets wat je nooit aan een AI-tool geeft: gevoelige data.

Een prompt naar een externe AI-dienst gaat naar servers van iemand anders. Afhankelijk van de tool, de instellingen en de voorwaarden kan die tekst opgeslagen, bekeken of gebruikt worden om modellen verder te trainen. Ook als de aanbieder belooft dat er niets bewaard wordt, geldt deze vuistregel. Wat je niet per e-mail naar een onbekende zou sturen, stuur je ook niet naar een AI-tool.

Dit stop je nooit in een prompt:

- API-sleutels, tokens of wachtwoorden;
- persoonsgegevens van gebruikers of klanten, zoals namen, e-mailadressen of medische informatie;
- interne bedrijfsinformatie die niet publiek is, zoals architectuurdocumenten, strategische plannen of klantdata;
- broncode met vertrouwelijke businesslogica.

Hoe werk je dan toch met AI? Door te **anonimiseren**: echte gegevens vervangen door neutrale placeholders. Een echte naam wordt `Gebruiker A`, een echte sleutel `API_KEY_PLACEHOLDER`, een bedrijfsnaam `Bedrijf X`. De structuur van het probleem blijft, en dat is wat het model nodig heeft.

Naast privacy is er de beveiliging van de gegenereerde code zelf. Een model stelt code voor die werkt, maar kwetsbaar kan zijn. Een klassiek voorbeeld is **SQL-injectie**: input van een gebruiker die als SQL-code uitgevoerd wordt.

```js
const input = "' OR '1'='1";
const query = "SELECT * FROM users WHERE name = '" + input + "'";
console.log(query);
```

```output
SELECT * FROM users WHERE name = '' OR '1'='1'
```

De gebruiker typte geen naam, maar een stuk SQL. Omdat `'1'='1'` altijd waar is, geeft deze query alle gebruikers terug. De oplossing is een **parameterized query** (query met parameters), waarbij de database de input altijd als waarde behandelt, nooit als code:

```js
db.query("SELECT * FROM users WHERE name = ?", [input]);
```

Fragment: werkt enkel met een databaseverbinding `db`, bijvoorbeeld via de library mysql2.

::: warning
**Let op:** stuur geen gevoelige data naar externe AI-tools, en vertrouw gegenereerde code niet blind op het vlak van beveiliging.
:::

### Test jezelf 7.2 – Privacy en beveiliging

```text
Sectie: 7.2
Type: meerkeuze
Vraag: Je wil een AI-tool een databasequery laten debuggen. De query bevat een echte klantnaam en het interne schema van een tabel. Wat doe je? Kies één antwoord.
Opties:
  A. De query in de prompt plakken: de AI-tool is veilig.
  B. De query anonimiseren: de naam vervangen door een placeholder en het schema beperken tot wat nodig is.
  C. De query enkel sturen als je een betaald abonnement hebt.
  D. Enkel de foutmelding sturen, zonder de query.
Juist: B
Feedback A: Je weet niet wie toegang heeft tot wat je naar een externe dienst stuurt (zie 7.2).
Feedback B: Juist. De structuur van het probleem blijft, de gevoelige data niet (zie 7.2).
Feedback C: Ook bij een betaald abonnement verlaat de data je organisatie. Anonimiseer altijd (zie 7.2).
Feedback D: Zonder de query kan het model de fout moeilijk vinden. Anonimiseren is beter (zie 7.2).

Sectie: 7.2
Type: meerkeuze
Vraag: Een model genereert voor een login deze query. Wat is het probleem? Kies één antwoord.
Code:
  const query = "SELECT * FROM users WHERE name = '" + input + "'";
Opties:
  A. De query gebruikt `SELECT *` in plaats van specifieke kolommen.
  B. De query is te lang en wordt traag uitgevoerd.
  C. Er is geen probleem: de query is correct.
  D. De query is kwetsbaar voor SQL-injectie, omdat de input rechtstreeks in de SQL-code komt.
Juist: D
Feedback A: `SELECT *` is minder netjes, maar niet het grote probleem (zie 7.2).
Feedback B: De lengte van een query bepaalt de snelheid niet (zie 7.2).
Feedback C: Met de input `' OR '1'='1` geeft deze query alle gebruikers terug (zie 7.2).
Feedback D: Juist. Gebruik een parameterized query (zie 7.2).

Sectie: 7.2
Type: categoriseren
Vraag: Mag dit in een prompt naar een externe AI-tool?
Indeling:
  Een foutmelding zonder persoonsgegevens → mag
  Code waarin de API-sleutel vervangen is door API_KEY_PLACEHOLDER → mag
  Een export van de klantentabel met e-mailadressen → mag niet
  Het wachtwoord van de testdatabase → mag niet
Feedback: Wat de structuur van het probleem toont, mag. Echte geheimen en persoonsgegevens niet (zie 7.2).
```

## 7.3 Richtlijnen van je organisatie

Je werkt voor een bedrijf, je loopt stage of je werkt aan een groepsproject met afspraken. In die context bestaat er meestal een beleid, en dat geldt ook voor AI-tools.

Sommige organisaties verbieden externe AI-tools volledig. Ze werken met vertrouwelijke data of zitten in een sector met strenge regels, zoals financiën, zorg of overheid. Of ze hebben nog geen beleid en spelen liever op zeker. Andere organisaties hebben goedgekeurde tools, vaste toepassingen waarvoor AI wel of niet mag, of een vaste procedure om AI-code te reviewen.

Als developer moet je die richtlijnen kennen en volgen. "Ik wist niet dat het niet mocht" is geen verdediging als je via een niet-goedgekeurde tool vertrouwelijke data lekte.

Is er geen beleid, dan vraag je het na voor je een tool gebruikt. Bij twijfel vraag je het aan je stagebegeleider, je teamlead of je docent.

Dit betekent voor jou: wees ook voorzichtig met persoonsgegevens.

In de Europese Unie gelden de regels van de GDPR (in het Nederlands: AVG). Wie persoonsgegevens van anderen naar een externe dienst stuurt, verwerkt die gegevens en moet zich aan die regels houden. Debuggen met echte klantgegevens past daar zelden in. Anonimiseer daarom altijd.

### Test jezelf 7.3 – Richtlijnen van je organisatie

```text
Sectie: 7.3
Type: meerkeuze
Vraag: Je loopt stage bij een bedrijf zonder duidelijk beleid over AI. Je wil een AI-tool gebruiken om een interne module te debuggen. Wat doe je? Kies één antwoord.
Opties:
  A. De tool gebruiken: wat niet verboden is, mag.
  B. Eerst aan je stagebegeleider vragen of en hoe je AI-tools mag gebruiken.
  C. De tool gebruiken, maar de output niet bewaren.
  D. Wachten tot er een beleid is, en tot dan niets doen.
Juist: B
Feedback A: Interne code kan vertrouwelijk zijn. "Ik wist niet dat het niet mocht" is geen verdediging (zie 7.3).
Feedback B: Juist. Bij twijfel vraag je het na voor je iets doet (zie 7.3).
Feedback C: Het probleem is wat je naar de tool stuurt, niet wat je ervan bewaart (zie 7.3).
Feedback D: Je kan het gewoon navragen. Wachten zonder te vragen houdt je werk onnodig op (zie 7.3).

Sectie: 7.3
Type: juist/fout
Vraag: Als je organisatie geen beleid heeft over AI, mag je elke AI-tool gebruiken voor interne code.
Juist: fout
Feedback: Zonder beleid vraag je het na. Je blijft verantwoordelijk voor wat je naar een externe dienst stuurt (zie 7.3).
```

## 7.4 Bronvermelding en transparantie

AI is geen boek, geen artikel en geen website. Maar het is ook geen onzichtbaar hulpmiddel dat geen spoor nalaat.

Levert AI een duidelijke bijdrage aan je werk, zoals code, een analyse, documentatie of tekst, dan ben je daar open over. Dat is de norm, zowel op school als op het werk.

Er is nog geen universele standaard, maar een goede vermelding bevat:

- de tool die je gebruikte, zoals ChatGPT, GitHub Copilot of Claude;
- waarvoor je de tool gebruikte, zoals code genereren, reviewen of samenvatten;
- of je de output controleerde en aanpaste, en zo niet, dat je daar eerlijk over bent;
- wat de richtlijnen van je school, organisatie of opdrachtgever vragen.

```text
AI-gebruik: de eerste versie van de function sortByScore werd gegenereerd
met GitHub Copilot. Ik heb de code gecontroleerd, getest met randgevallen
en de vergelijking aangepast voor gelijke punten.
```

Op school geldt bovendien: dien geen werk in als eigen werk als het volledig door AI gemaakt is, en vermeld AI-gebruik waar dat gevraagd wordt. Op het werk informeer je collega's als grote stukken code door AI gegenereerd zijn, zodat de review daar rekening mee houdt.

Waarom is dit belangrijk? Een vermelding maakt duidelijk welke delen jij zelf ontwikkelde en begreep, en welke deels of volledig van een model komen. Dat is belangrijk voor een docent die je werk beoordeelt en voor een collega die je code reviewt. En voor jezelf, als je later je keuzes moet verantwoorden.

Een developer die open is over AI-gebruik, is daardoor professioneler, niet minder.

### Test jezelf 7.4 – Bronvermelding en transparantie

```text
Sectie: 7.4
Type: meerdere antwoorden
Vraag: Wat hoort in een goede vermelding van AI-gebruik? Kies drie antwoorden.
Opties:
  A. De tool die je gebruikte.
  B. Waarvoor je de tool gebruikte.
  C. Of je de output controleerde en aanpaste.
  D. De volledige tekst van al je prompts.
Juist: A, B, C
Feedback A: Juist. De lezer moet weten welke tool een bijdrage leverde (zie 7.4).
Feedback B: Juist. Genereren, reviewen of samenvatten zijn heel verschillende bijdragen (zie 7.4).
Feedback C: Juist. Dat toont wat jouw eigen bijdrage is (zie 7.4).
Feedback D: Dat is meestal niet nodig, tenzij je school of opdrachtgever erom vraagt (zie 7.4).

Sectie: 7.4
Type: meerkeuze
Vraag: Je liet een groot deel van een individuele schoolopdracht door AI genereren. Wat moet je doen? Kies één antwoord.
Opties:
  A. Niets vermelden: het resultaat telt.
  B. Het AI-gebruik vermelden volgens de richtlijnen van je opleiding, en geen werk als eigen werk indienen als het volledig door AI gemaakt is.
  C. De gegenereerde tekst herformuleren, zodat niet opvalt dat AI gebruikt werd.
  D. Enkel vermelden dat je AI gebruikte als de docent ernaar vraagt.
Juist: B
Feedback A: Bij een individuele opdracht beoordeelt de docent wat jij kan. Dat moet kloppen (zie 7.4).
Feedback B: Juist. Transparantie is de norm, en de regels van je opleiding bepalen hoe (zie 7.4).
Feedback C: Dat is verbergen, en dat is net het probleem (zie 7.4).
Feedback D: Open zijn is de norm, ook als niemand ernaar vraagt (zie 7.4).

Sectie: 7.4
Type: meerkeuze
Vraag: Waarom is open zijn over AI-gebruik professioneler dan het verbergen, ook als het niet verplicht is? Kies één antwoord.
Opties:
  A. Omdat AI-tools anders hun licentie intrekken.
  B. Omdat een reviewer dan weet welke delen extra controle nodig hebben, en jij je keuzes kan verantwoorden.
  C. Omdat code van AI anders niet werkt in productie.
  D. Omdat het in België wettelijk verplicht is bij elk stuk code.
Juist: B
Feedback A: AI-tools controleren niet of je hun gebruik vermeldt (zie 7.4).
Feedback B: Juist. Transparantie maakt duidelijk wat jij zelf ontwikkelde en begreep (zie 7.4).
Feedback C: Of je AI-gebruik vermeldt, verandert niets aan hoe code werkt (zie 7.4).
Feedback D: Deze sectie gaat niet over een wettelijke plicht, maar over professionaliteit (zie 7.4).
```

## 7.5 Een kritische houding

Alles in deze cursus draait uiteindelijk om één ding: een kritische houding. Niet wantrouwen, niet angst, maar kritisch denken.

AI is een krachtig hulpmiddel. Het maakt je sneller, neemt taken over die je liever uitbesteedt en brengt nieuwe ideeën aan. Maar het maakt fouten, het kent jouw context niet en het draagt geen verantwoordelijkheid voor wat het produceert. Die verantwoordelijkheid ligt bij jou.

Een kritische houding tegenover AI-output betekent vier dingen:

1. Systematisch controleren. Niet alleen of de code draait. Ook of ze doet wat gevraagd werd, in de codebase past, veilig is en of de aannames kloppen (zie [1.5](./module-1.md#1_5)).
2. Aannames expliciet maken. Elke keuze die het model maakte zonder dat je erom vroeg, is een aanname. Die benoem en beoordeel je.
3. Testen op basis van de specificatie. Werkende code is niet hetzelfde als correcte code (zie [6.1](./module-6.md#6_1)).
4. Je begrip bewaken. Begrijp je iets niet, gebruik AI dan om het te leren begrijpen, niet om het probleem te omzeilen. Wie code integreert zonder ze te begrijpen, bouwt op een fundament dat hij of zij niet kent.

Het verschil tussen iemand die AI goed gebruikt en iemand die ervan afhankelijk wordt, zit niet in de tools. Het zit in de houding. Die houding is niet aangeboren, het is een keuze. En het is de waardevolste vaardigheid die je uit deze cursus meeneemt.

### Test jezelf 7.5 – Een kritische houding

```text
Sectie: 7.5
Type: categoriseren
Vraag: Past dit gedrag bij iemand die AI goed gebruikt, of bij iemand die ervan afhankelijk is geworden?
Indeling:
  Ze laat een onbekende function uitleggen en kan ze daarna zelf uitleggen. → goed gebruik
  Hij test gegenereerde code met randgevallen uit de specificatie. → goed gebruik
  Ze plakt een foutmelding in een chat en past het eerste voorstel toe zonder het te lezen. → afhankelijk
  Hij kan een stuk van zijn eigen project niet uitleggen, omdat AI het schreef. → afhankelijk
Feedback: Het verschil zit niet in hoe vaak iemand AI gebruikt, maar in of die persoon de output begrijpt en controleert (zie 7.5).

Sectie: 7.5
Type: meerkeuze
Vraag: Wat bedoelt de cursus met een kritische houding tegenover AI? Kies één antwoord.
Opties:
  A. AI zo weinig mogelijk gebruiken.
  B. Alle AI-output wantrouwen en volledig zelf herschrijven.
  C. AI-output systematisch controleren, aannames benoemen, testen en je eigen begrip bewaken.
  D. Enkel AI-tools gebruiken die je school goedkeurt.
Juist: C
Feedback A: Kritisch is niet hetzelfde als weinig. AI blijft een krachtig hulpmiddel (zie 7.5).
Feedback B: Kritisch denken is geen wantrouwen. Je controleert, maar je herschrijft niet alles (zie 7.5).
Feedback C: Juist. Dat zijn de vier onderdelen van een kritische houding (zie 7.5).
Feedback D: Goedgekeurde tools gebruiken is verstandig (zie 7.3), maar een kritische houding gaat over hoe je ze gebruikt (zie 7.5).
```

## Samenvatting

Nieuwe termen:

- licentie: de regels die vastleggen wat je met code mag doen.
- copyleft: een licentie die verplicht om afgeleide software onder dezelfde licentie te verspreiden.
- anonimiseren: echte gegevens vervangen door neutrale placeholders.
- SQL-injectie: input van een gebruiker die als SQL-code uitgevoerd wordt.
- parameterized query: een query waarbij de database input altijd als waarde behandelt.

Belangrijkste regels:

- Jij bent verantwoordelijk voor de licentie van code die je integreert, ook als een model ze schreef.
- Stuur nooit geheimen, persoonsgegevens of vertrouwelijke informatie naar een externe AI-tool. Anonimiseer.
- Controleer gegenereerde code op beveiliging, zoals SQL-injectie.
- Ken de richtlijnen van je organisatie. Bij twijfel vraag je het na.
- Vermeld AI-gebruik: welke tool, waarvoor, en wat je zelf controleerde.
- Een kritische houding is een keuze: controleren, aannames benoemen, testen en begrijpen.

## Veelgemaakte fouten

- Denken dat gegenereerde code vrij te gebruiken is. Je weet niet op welke code met welke licentie de output lijkt.
- Een configuratiebestand met een echt wachtwoord in een prompt plakken om een fout te laten zoeken.
- Een query met string-concatenatie overnemen. Met de input `' OR '1'='1` geeft ze alle gebruikers terug.
- Op stage een AI-tool gebruiken voor interne code zonder het te vragen.
- AI-tekst herformuleren om het gebruik te verbergen, in plaats van het te vermelden.

::: oefening
[Oefeningen module 7](./module-7-oefeningen.md)
:::
