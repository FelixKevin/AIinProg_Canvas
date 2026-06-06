# Module 6 AI Tests en Docs

---

## 6.1 The generation of testing

Iedereen weet dat je tests moet schrijven. (Bijna) niemand vindt het leuk.

Het is tijdrovend, het voelt minder productief dan "echte code" schrijven en als de deadline nadert is het altijd "belangrijker" om de code af te werken. Dat is precies waarom zoveel projecten met te weinig tests eindigen en precies waarom AI hier zo nuttig kan zijn.

Een AI kan voor een bestaande functie automatisch testcases genereren. Niet alleen de voor de hand liggende gevallen waarbij alles correct verloopt, maar ook randgevallen, ongeldige input en foutscenario's die je zelf misschien over het hoofd zou zien.

Maar, en dit is de moeite waard om twee keer te lezen, **als de onderliggende logica fout is, volgt de AI die fout in de gegenereerde tests.**

Dat is een cruciaal probleem. Als je een functie schrijft met een subtiele logicafout en je vraagt AI om tests te genereren voor die functie, dan genereert de AI tests die de foutieve logica als correct behandelen. De tests slagen. De code is fout. En jij weet het niet.

De tests die AI genereert, controleer je aan de hand van de **specificaties** de beschrijving van wat de code hoort te doen niet aan de hand van de code zelf. Als de test overeenkomt met de specificatie, is ze geldig. Als ze enkel overeenkomt met wat de code doet, heb je een cirkelredenering.

Tests schrijven blijft een denkproces. AI versnelt het, de verantwoordelijkheid blijft bij jou.

---

## 6.2 Dummy data is niet zo dum

Een goede test is maar zo goed als de data waarmee je test.

Je kan een perfecte teststructuur hebben, correcte assertions, alle scenario's gedekt en toch volledig mis zitten als de testdata niet realistisch of gevarieerd genoeg is. Eenvoudige of te perfecte testdata geeft een vals gevoel van zekerheid: de code werkt voor de inputwaarden die je koos, maar niet per se voor wat gebruikers in de praktijk insturen. Zeker de randgevallen mogen in testdata niet vergeten worden, denk aan lege velden of letters waar bedragen verwacht worden.

AI kan helpen bij het genereren van **testdata**: concrete inputwaarden en bijbehorende verwachte outputs. Dat kan eenvoudig zijn (een lijst van getallen, een reeks strings) of complex (volledige gebruikersobjecten, geneste JSON-structuren, datasets met duizenden rijen).

Bij externe afhankelijkheden een database, een externe API, een bestandssysteem kan AI helpen bij het opzetten van **mock data**: gesimuleerde responses die je in tests gebruikt in plaats van echte connecties. Zo kan je testen zonder een echte database op te zetten of een externe service aan te roepen.

Bij alle gegenereerde data stel je dezelfde vraag: **is dit representatief?**

Representatief betekent: bevat de data de variatie die je in productie verwacht? Zijn er Nederlandstalige namen, Belgische postcodes, decimale getallen met komma's, lege velden, speciale tekens, uitzonderlijk lange strings? Een testdataset van tien nette Engelse namen met correcte e-mailadressen test niets wat de moeite waard is.

De kwaliteit van je tests hangt af van de kwaliteit van je testdata. AI levert een startpunt jij bepaalt of het genoeg is.

---

## 6.3 De goede test test

Niet elke test is een goede test. Een testsuite die honderd tests bevat maar geen enkel écht probleem kan detecteren is erger dan zinloos, ze geeft een vals gevoel van veiligheid.

Goede tests hebben drie kenmerken:
- **Validiteit:** Een test controleert effectief wat ze beweert te controleren. Een test die altijd slaagt ook als de code fout is, is ongeldig. Dit kan gebeuren als de assertion te zwak is, als de testdata te beperkt is, of als de test het gedrag van de code herhaalt in plaats van het te verifiëren aan de hand van een specificatie.
- **Volledigheid:** Tests dekken niet enkel het happy path, maar ook uitzonderingen en foutscenario's. Wat gebeurt er bij lege input? Bij negatieve getallen? Bij een `null`-waarde? Bij een string die een getal had moeten zijn? Een testsuite die enkel normale gevallen test, vindt geen enkel probleem dat er echt toe doet.
- **Betrouwbaarheid:** Een test levert consistent hetzelfde resultaat op onder dezelfde omstandigheden. Tests die willekeurig falen of slagen, ook wel **flaky tests** genoemd, zijn gevaarlijk: je leert ze negeren en dan merk je een echte fout niet meer op. Flakiness ontstaat vaak door afhankelijkheden op tijd, willekeurige getallen of externe services zonder mocking.

AI kan helpen om hiaten in tests te identificeren: "welke scenario's dek ik nog niet af?" of "zijn er edge cases die ik vergeten ben?" Maar of de voorgestelde aanvullingen effectief bijdragen aan betere dekking en betrouwbaarheid, beoordeel jij.

*Een test die je niet vertrouwt, voeg je beter niet toe.*

---

## 6.4 Automatische documentatie

Documentatie schrijven is een beetje zoals tests schrijven: iedereen weet dat het goed voor je is, bijna niemand doet het met plezier.

Het resultaat is voorspelbaar: functies zonder commentaar, README-bestanden die nog de initiële setup beschrijven terwijl de code al drie keer herschreven is, API-endpoints die je alleen begrijpt als je de developer bent die ze schreef (en zelfs dan twijfel je na drie maanden).

AI kan hier snel waarde toevoegen. Je geeft een functie aan en de AI genereert een beschrijving: wat de functie doet, welke parameters verwacht worden, wat het resultaat is, welke uitzonderingen kunnen optreden. Dat geldt voor inline commentaar, voor JSDoc- of docstring-formaat, voor README-secties en voor API-documentatie.

Een eerste versie in vijf seconden in plaats van vijf minuten is een reële tijdswinst, zeker als je dit voor tientallen functies moet doen.

Maar documentatie die de code verkeerd beschrijft is erger dan geen documentatie. Een developer die de documentatie vertrouwt en daarna merkt dat ze niet klopt, verliest niet alleen tijd ze verliest ook het vertrouwen in de rest van de documentatie en jouw werk.

Controleer altijd:
- Klopt de beschrijving met wat de code werkelijk doet?
- Zijn de parametertypes en namen correct?
- Worden randgevallen en foutscenario's vermeld?
- Is de taal duidelijk voor de beoogde lezer?

Gegenereerde documentatie is een eerste versie, geen definitieve versie.

---

## 6.5 Let's talk about it

Goede code schrijven is één ding. Uitleggen wat je code doet aan een collega, een teamlead, een stakeholder, een klant, ... is een ander beest.

Een developer die niet kan communiceren over zijn werk, is een developer die afhankelijk is van anderen om voor hem te spreken. Dat is geen sterke positie.

AI kan helpen bij het structureren en verwoorden van technische communicatie:
- **Commit messages** die beschrijven wat een wijziging doet en waarom, niet alleen wat er veranderd is.
- **Pull request-beschrijvingen** die een reviewer meteen begrijpen wat er gereviewed moet worden en wat de context is.
- **Technische samenvattingen** van een wijziging of een probleem, afgestemd op een niet-technisch publiek.
- **Uitleg van een complexe beslissing** aan een collega of in een document.

Het sleutelwoord bij dit alles is **doelgroep**. Wat correct is voor een technische collega, is niet per se begrijpelijk voor een projectmanager. Wat duidelijk is voor een senior developer, is niet per se toegankelijk voor een junior.

AI genereert een startpunt. Jij past aan voor de doelgroep, voegt de context toe die AI niet kent en zorgt dat de inhoud klopt.

Technische communicatie is een professionele vaardigheid. AI maakt haar makkelijker maar vervangt het nadenken over wat je wil zeggen niet.

---

## Oefeningen

### Gemakkelijk

 **01.** Schrijf voor de volgende functie vijf testcases (zonder AI): twee voor het happy path, twee voor randgevallen en één voor ongeldige input. Gebruik daarna AI om extra testcases te genereren en vergelijk: welke scenario's vond de AI die jij miste?

```javascript
const deelDoor = (teller, noemer) => {
  if (noemer === 0) throw new Error("Deling door nul");
  return teller / noemer;
};
```

---

 **02.** Gegeven de volgende functiebeschrijving: *"Een functie die een lijst van producten filtert op minimumprijs en maximumprijs. Beide grenzen zijn inclusief."*

Genereer via AI een set van minstens acht testcases. Controleer daarna elke testcase: is ze valide? Dekt ze een relevant scenario? Zijn de verwachte waarden correct?

---

 **03.** Gebruik AI om documentatie te genereren voor een functie die je eerder schreef (in een ander vak of eigen project). Lees de gegenereerde documentatie kritisch na:
- Klopt de beschrijving?
- Zijn alle parameters correct beschreven?
- Worden edge cases vermeld?
- Wat ontbreekt er?

---

 **04.** Wat is het verschil tussen een **valide** test en een **betrouwbare** test? Geef een voorbeeld van een test die valide is maar niet betrouwbaar en een voorbeeld van een test die betrouwbaar is maar niet valide.

---

 **05.** Schrijf een commit message voor de volgende wijziging op twee manieren: één voor een technische collega en één voor een niet-technisch teamlid.

*Wijziging: je hebt de inlogfunctie aangepast zodat een account geblokkeerd wordt na vijf mislukte pogingen.*

---

### Medium

 **01.** Kies een functie van uit een eigen project. Gebruik AI om een volledige testsuite te genereren. Evalueer daarna elke gegenereerde test op de drie kwaliteitscriteria (validiteit, volledigheid, betrouwbaarheid). Documenteer je bevindingen en pas de testsuite aan waar nodig.

---

 **02.** Genereer mock data voor een scenario waarbij een functie een externe API aanroept die weersinformatie teruggeeft. De mock data moet minstens vijf verschillende situaties simuleren (bv. zonnig, regenachtig, fout van de API, lege response, ongeldige data). Beoordeel de representativiteit van de gegenereerde data.

---

 **03.** Gebruik AI om documentatie te genereren voor een volledige module of bestand van minstens drie functies. Controleer daarna de documentatie op consistentie: zijn de termen consequent gebruikt? Zijn de beschrijvingen op hetzelfde niveau van detail? Wat zou je aanpassen?

---

 **04.** Onderzoek het concept **test coverage**: de mate waarin tests de codebase afdekken. Wat betekent hoge coverage? Wat betekent het niet? Gebruik AI om de coverage van een eigen testsuite te analyseren en verbeterpunten te identificeren.

---

 **05.** Gebruik AI om een README-bestand te genereren voor een eigen project. Beoordeel daarna:

- Is de installatie-instructie correct en volledig?
- Is de gebruiksbeschrijving accuraat?
- Ontbreken er secties die een externe developer nodig heeft?

Pas de README aan tot ze bruikbaar is voor iemand die het project nog nooit gezien heeft.

---

 **06.** Onderzoek het verschil tussen **unit tests**, **integratietests** en **end-to-end tests**. Voor welk type kan AI het nuttigst zijn bij generatie? Waarom zijn de andere types moeilijker te genereren met AI?

---

### Hard

 **01.** Schrijf een volledige testsuite voor een module naar keuze (minstens drie functies, minstens twaalf tests). Gebruik AI als hulpmiddel maar zorg dat je elke test zelf kan verantwoorden. Documenteer per test:
- Welk scenario dekt ze?
- Waarom is dit scenario relevant?
- Is de verwachte waarde afgeleid van de specificatie of van de code?

---

 **02.** Bouw een scenario waarbij een AI-gegenereerde test incorrect is maar toch slaagt. Documenteer hoe je de fout ontdekte en leg uit waarom de test ongeldig was ondanks het slagen. Dit illustreert het verschil tussen een test die slaagt en een test die waarde heeft.

---

 **03.** Onderzoek het concept **test-driven development** (TDD): een aanpak waarbij tests geschreven worden vóór de implementatie. Hoe past AI-testgeneratie in een TDD-workflow? Wat zijn de voordelen en beperkingen? Schrijf een kortere feature via TDD met AI-ondersteuning en documenteer het proces.

---

 **04.** Onderzoek hoe **property-based testing** werkt: een testaanpak waarbij je eigenschappen van de code definieert en het testframework automatisch invoer genereert om die eigenschappen te valideren. Vergelijk dit met de testgeneratie-aanpak via AI. Wanneer is elk het meest geschikt?

---

 **026.** Ontwikkel een persoonlijk **test- en documentatieprotocol** voor een development project. Het protocol beschrijft:
- Wanneer je AI inzet voor testgeneratie en wanneer niet
- Hoe je gegenereerde tests valideert
- Wanneer je AI inzet voor documentatie en welk type
- Hoe je gegenereerde documentatie controleert
- Hoe je omgaat met flaky tests
- Welke tools je gebruikt naast AI

---

### At Home

**01. Testsuite van Nul naar Volledig**

Neem een project van minstens honderd regels code zonder tests (eigen of gevonden). Bouw een volledige testsuite met AI-ondersteuning:

- Start met een eigen analyse: welke functies moeten getest worden, welke scenario's zijn kritisch?
- Gebruik AI om testcases te genereren en aan te vullen.
- Valideer elke test aan de hand van de specificatie, niet de code.
- Meet de test coverage na afloop (met een tool naar keuze).

---

**02. Communicatielab**

Kies drie complexe technische situaties uit je eigen ervaring of een fictief scenario:

1. Een bug in productie die je moest uitleggen aan een niet-technische projectmanager.
2. Een architecturale beslissing die je moest verdedigen tegenover een senior developer.
3. Een nieuwe feature die je moest beschrijven in een pull request voor een onbekende reviewer.

Schrijf voor elke situatie twee versies van de communicatie: één zonder AI en één met AI als hulpmiddel. Vergelijk de versies: wat voegde AI toe, wat miste ze, wat moest je aanpassen? Sluit af met een reflectie over de rol van AI in technische communicatie.

---