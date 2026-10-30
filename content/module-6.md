---
module: 6
order: 1
moduleTitle: "Module 6: Tests en documentatie met AI"
published: false
---

# Module 6: Tests en documentatie met AI

Tests en documentatie schrijft bijna niemand graag, en net daarom schiet AI hier snel te hulp. In deze module leer je tests, testdata, documentatie en technische berichten laten genereren. Je leert vooral hoe je controleert of ze kloppen.

### Leerdoelen

Na deze module kan je:

- gegenereerde tests controleren aan de hand van de specificatie, niet aan de hand van de code;
- beoordelen of testdata en mock data representatief zijn;
- een test beoordelen op validiteit, volledigheid en betrouwbaarheid;
- gegenereerde documentatie controleren op juistheid en volledigheid;
- een technisch bericht afstemmen op de lezer.

## 6.1 Tests laten genereren

Iedereen weet dat je tests moet schrijven. Bijna niemand vindt het leuk. Het kost tijd, het voelt minder productief dan "echte" code, en als de deadline nadert, gaat de code altijd voor. Daarom hebben zoveel projecten te weinig tests, en daarom is AI hier zo nuttig.

Een model genereert snel test cases voor een bestaande function. Niet alleen de gangbare gevallen, maar ook randgevallen, ongeldige input en foutsituaties waar je zelf niet aan dacht.

Er is één groot probleem. Neem deze function, die volgens de specificatie `true` moet geven vanaf 18 jaar:

```js
import assert from "node:assert";

const isAdult = (age) => age > 18;

// Generated tests
assert.strictEqual(isAdult(25), true);
assert.strictEqual(isAdult(10), false);
assert.strictEqual(isAdult(18), false);
console.log("Alle tests geslaagd");
```

```output
Alle tests geslaagd
```

`assert.strictEqual(a, b)` is een **assertion** (bewering): een controle of `a` en `b` gelijk zijn. Is dat niet zo, dan stopt het programma met een fout. Alle drie de tests slagen.

 Toch is de code fout: wie 18 is, is volwassen. Het model las de code en schreef een test die bij de code past, ook bij de fout erin.

Als de logica fout is, neemt een model die fout dus over in de tests. De tests slagen, de code is fout, en jij weet het niet.

Daarom controleer je gegenereerde tests aan de hand van de **specificatie**: de beschrijving van wat de code moet doen. Niet aan de hand van de code zelf, want dan redeneer je in een cirkel. Een test op basis van de specificatie vindt de fout wel:

```js
import assert from "node:assert";

const isAdult = (age) => age > 18;

// Test based on the specification: adult from 18 years
assert.strictEqual(isAdult(18), true);
console.log("Alle tests geslaagd");
```

```output
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

false !== true
```

Tests schrijven blijft een denkproces. AI versnelt het, maar de verantwoordelijkheid blijft bij jou.

### Test jezelf 6.1 – Tests laten genereren

```text
Sectie: 6.1
Type: meerkeuze
Vraag: Je laat tests genereren voor een function die je net schreef. Alle vijf de tests slagen. Wat betekent dat? Kies één antwoord.
Opties:
  A. De function is correct.
  B. De tests passen bij het gedrag van de function, maar dat gedrag kan zelf fout zijn.
  C. De tests zijn correct geformuleerd.
  D. Je moet niets meer controleren.
Juist: B
Feedback A: Een model leidt tests vaak af uit de code. Dan slagen ze ook als de code fout is (zie 6.1).
Feedback B: Juist. Slagende tests zeggen pas iets als ze gebaseerd zijn op de specificatie (zie 6.1).
Feedback C: Een test kan correct geschreven zijn en toch het verkeerde controleren, zoals `isAdult(18) === false` (zie 6.1).
Feedback D: Je controleert de tests nog aan de hand van de specificatie (zie 6.1).

Sectie: 6.1
Type: meerkeuze
Vraag: Een gegenereerde test controleert dat `isAdult(18)` gelijk is aan `false`, en de test slaagt. De specificatie zegt: volwassen vanaf 18 jaar. Wat is er aan de hand? Kies één antwoord.
Opties:
  A. De test is correct, want ze slaagt.
  B. De specificatie is fout, want de code en de test zijn het eens.
  C. Het model leidde de test af uit de code, en de code bevat een fout.
  D. De test is overbodig, want 18 is een randgeval.
Juist: C
Feedback A: Slagen bewijst niets als de test de fout uit de code overneemt (zie 6.1).
Feedback B: De specificatie bepaalt wat correct is, niet de code (zie 6.1).
Feedback C: Juist. De code gebruikt `> 18` in plaats van `>= 18`, en de test volgt die fout (zie 6.1).
Feedback D: Net randgevallen zoals 18 moet je testen. Daar zitten de fouten (zie 6.1).

Sectie: 6.1
Type: meerkeuze
Vraag: Welke test cases genereert een model meestal niet uit zichzelf? Kies één antwoord.
Opties:
  A. Tests voor de happy path.
  B. Tests met gangbare input.
  C. Tests die controleren welk type een function teruggeeft.
  D. Tests voor randgevallen die specifiek zijn voor jouw toepassing.
Juist: D
Feedback A: De happy path dekt een model bijna altijd (zie 6.1).
Feedback B: Gangbare input is wat een model het eerst test (zie 6.1).
Feedback C: Zulke algemene tests genereert een model vaak wel (zie 6.1).
Feedback D: Juist. Wat specifiek is voor jouw context, staat niet in de code en kent het model niet (zie 6.1).
```

## 6.2 Testdata en mock data

Een test is maar zo goed als de data waarmee je test. Je kan een perfecte teststructuur hebben en toch de fout missen, omdat je testdata te netjes is.

Een model genereert graag zoiets:

```json
[
  { "name": "John Smith", "email": "john@example.com", "postalCode": "10001" },
  { "name": "Jane Doe", "email": "jane@example.com", "postalCode": "90210" }
]
```

Voor een Belgische toepassing test dat bijna niets. Representatieve data ziet er eerder zo uit:

```json
[
  { "name": "Ségolène Van den Broeck", "email": "segolene.vdb@example.com", "postalCode": "9000" },
  { "name": "Mohamed El Idrissi", "email": "m.elidrissi@example.com", "postalCode": "1080" },
  { "name": "", "email": "geen-at-teken.example.com", "postalCode": "B-2000" }
]
```

**Testdata** zijn de concrete inputwaarden waarmee je test, met de verwachte output. AI genereert ze snel: van een lijst getallen tot volledige gebruikersobjecten of datasets met duizenden rijen.

Bij externe afhankelijkheden, zoals een database of een externe API, helpt AI met **mock data**. Dat zijn nagemaakte antwoorden die je in tests gebruikt in plaats van een echte verbinding. Zo test je zonder echte database en zonder een externe dienst aan te spreken.

Bij alle gegenereerde data stel je dezelfde vraag: is dit representatief? Bevat de data de variatie die je in de praktijk verwacht? Denk aan namen met accenten en tussenvoegsels, Belgische postcodes, kommagetallen, lege velden, speciale tekens en uitzonderlijk lange strings.

Dit betekent voor jou: AI levert een startpunt voor je testdata, en jij beslist of het genoeg is.

### Test jezelf 6.2 – Testdata en mock data

```text
Sectie: 6.2
Type: meerkeuze
Vraag: Je test een function die gebruikersinput valideert. Het model genereert tien correcte e-mailadressen en twee foute. Wat is het probleem? Kies één antwoord.
Opties:
  A. Er zijn te veel correcte adressen.
  B. Mock data mag je niet gebruiken voor validatie.
  C. De data bevat waarschijnlijk te weinig variatie in foute formaten en randgevallen.
  D. Er is geen probleem: twee foute adressen volstaan.
Juist: C
Feedback A: Het aantal correcte adressen is het probleem niet. Het gaat om de variatie bij foute input (zie 6.2).
Feedback B: Dit is gewone testdata, geen mock data. En mock data is net nuttig in tests (zie 6.2).
Feedback C: Juist. Een validatiefunction faalt meestal bij ongewone input (zie 6.2).
Feedback D: Twee foute adressen dekken nooit alle manieren waarop input fout kan zijn (zie 6.2).

Sectie: 6.2
Type: meerkeuze
Vraag: Waarom gebruik je in unit tests liever mock data dan een echte externe dienst? Kies één antwoord.
Opties:
  A. Een externe dienst kan uitvallen, traag zijn of andere data geven, en dan wordt je test onbetrouwbaar.
  B. Mock data is altijd correcter dan echte data.
  C. Tests met echte diensten zijn altijd te traag.
  D. Echte externe diensten mag je enkel in productie gebruiken.
Juist: A
Feedback A: Juist. Met mock data hangt het resultaat van je test enkel af van je eigen code (zie 6.2).
Feedback B: Mock data is nagemaakt en dus net zo goed als jij ze maakt (zie 6.2).
Feedback C: Niet altijd, maar ze zijn wel minder voorspelbaar (zie 6.2).
Feedback D: Er zijn ook tests die echte diensten gebruiken, maar dat zijn geen unit tests (zie 6.2).

Sectie: 6.2
Type: meerdere antwoorden
Vraag: Je test een function die Belgische adressen verwerkt. Welke testdata maken je test representatiever? Kies twee antwoorden.
Opties:
  A. Een postcode met vier cijfers, zoals 9000.
  B. Tien extra Amerikaanse adressen.
  C. Een straatnaam met een accent en een tussenvoegsel, zoals Rue de l'Église.
  D. Dezelfde correcte postcode, honderd keer herhaald.
Juist: A, C
Feedback A: Juist. Belgische postcodes hebben vier cijfers, Amerikaanse vijf (zie 6.2).
Feedback B: Meer van hetzelfde verkeerde soort data maakt je test niet beter (zie 6.2).
Feedback C: Juist. Accenten en apostrofs breken vaak code die enkel op Engelse tekst getest werd (zie 6.2).
Feedback D: Herhaling voegt geen variatie toe (zie 6.2).
```

## 6.3 Goede tests: valide, volledig en betrouwbaar

Deze test slaagt:

```js
import assert from "node:assert";

const calculateAverage = (numbers) => {
  const sum = numbers.reduce((total, value) => total + value, 0);
  return sum / numbers.length;
};

// Weak assertion: also passes for NaN
assert.ok(typeof calculateAverage([]) === "number");
console.log("Test geslaagd");
```

```output
Test geslaagd
```

Toch is hij waardeloos: `NaN` is in JavaScript ook van het type `number`. De test controleert niet wat hij lijkt te controleren. Een **test suite** (testreeks) met honderd zulke tests is erger dan geen tests: ze geeft een vals gevoel van veiligheid.

Goede tests hebben drie kenmerken:

- Validiteit. Een test controleert wat hij beweert te controleren. Een test die ook slaagt als de code fout is, is niet valide. Dat gebeurt bij een te zwakke assertion of te beperkte testdata. Het gebeurt ook als de test de code volgt in plaats van de specificatie (zie [6.1](#6_1)).
- Volledigheid. Tests dekken niet enkel de happy path, maar ook uitzonderingen en foutsituaties. Wat bij lege input? Bij negatieve getallen? Bij `null`? Bij een string waar een getal hoort?
- Betrouwbaarheid. Een test geeft onder dezelfde omstandigheden altijd hetzelfde resultaat. Een test die willekeurig slaagt of faalt, heet een **flaky test**. Zo'n test leer je negeren, en dan mis je een echte fout. Flaky tests ontstaan vaak door afhankelijkheid van de tijd, van willekeurige getallen of van externe diensten zonder mock.

AI helpt om gaten in je tests te vinden. Vraag bijvoorbeeld: "Welke situaties dekken deze tests nog niet?" Of de voorgestelde tests echt iets toevoegen, beoordeel jij.

Een test die je niet vertrouwt, voeg je beter niet toe.

### Test jezelf 6.3 – Goede tests

```text
Sectie: 6.3
Type: meerkeuze
Vraag: Wat is een flaky test? Kies één antwoord.
Opties:
  A. Een test die enkel de happy path dekt.
  B. Een test die willekeurig slaagt of faalt, ook als de code niet veranderde.
  C. Een test die lang duurt.
  D. Een test die een model genereerde zonder menselijke controle.
Juist: B
Feedback A: Dat is een onvolledige test, geen flaky test (zie 6.3).
Feedback B: Juist. Een flaky test schendt het kenmerk betrouwbaarheid (zie 6.3).
Feedback C: Een trage test kan perfect betrouwbaar zijn (zie 6.3).
Feedback D: Ook een gegenereerde test kan betrouwbaar zijn. Flaky gaat over wisselende resultaten (zie 6.3).

Sectie: 6.3
Type: categoriseren
Vraag: Welk kenmerk van een goede test schendt elk probleem?
Indeling:
  De test controleert enkel dat het resultaat van het type number is. → validiteit
  Er is geen enkele test met een lege lijst. → volledigheid
  De test faalt soms, omdat hij de huidige datum gebruikt. → betrouwbaarheid
  De test controleert isAdult(18) === false, zoals de code doet. → validiteit
Feedback: Validiteit gaat over wat een test controleert, volledigheid over welke situaties gedekt zijn, betrouwbaarheid over een constant resultaat (zie 6.3).

Sectie: 6.3
Type: meerkeuze
Vraag: Je test suite dekt alle happy-path-situaties en alle tests slagen. Een collega merkt op dat er geen tests zijn voor ongeldige input. Wat is het risico? Kies één antwoord.
Opties:
  A. De code kan crashen of vreemd reageren bij ongeldige input, zonder dat je tests het merken.
  B. Er is geen risico: als de happy path werkt, werkt de rest ook.
  C. Tests voor ongeldige input zijn enkel nodig in productie.
  D. Er is geen risico als de deadline nadert.
Juist: A
Feedback A: Juist. Een onvolledige test suite ziet alleen wat ze test (zie 6.3).
Feedback B: Ongeldige input volgt een ander pad door de code dan de happy path (zie 6.3).
Feedback C: Tests schrijf je net om fouten te vinden voor ze in productie komen (zie 6.3).
Feedback D: Een deadline verandert niets aan het risico (zie 6.3).
```

## 6.4 Documentatie laten genereren

Documentatie schrijven is zoals tests schrijven: iedereen weet dat het moet, bijna niemand doet het graag. Het resultaat ken je: functions zonder comments, een README die nog de eerste versie van het project beschrijft, en endpoints die alleen de auteur begrijpt. Na drie maanden twijfelt zelfs die.

AI levert hier snel resultaat. Je geeft een function, en het model beschrijft wat ze doet, welke parameters ze verwacht, wat ze teruggeeft en welke fouten ze kan gooien. Dat werkt voor comments in de code, voor JSDoc in JavaScript en docstrings in Python, voor een README en voor API-documentatie.

Neem deze function:

```js
const calculatePriceInclVat = (price, vatPercentage = 21) => {
  if (price < 0) throw new Error("Prijs mag niet negatief zijn");
  return price * (1 + vatPercentage / 100);
};

console.log(calculatePriceInclVat(100));
console.log(calculatePriceInclVat(100, 6));
```

```output
121
106
```

Een model beschrijft ze als "Calculates the price including VAT." Dat klopt, maar het mist veel. Volledige documentatie ziet er zo uit:

```js
/**
 * Calculates the price including VAT.
 * @param {number} price - Price excluding VAT. Must not be negative.
 * @param {number} [vatPercentage=21] - VAT percentage. Defaults to 21.
 * @returns {number} Price including VAT.
 * @throws {Error} If price is negative.
 */
```

Documentatie die de code verkeerd beschrijft, is erger dan geen documentatie. Wie ze vertrouwt en daarna merkt dat ze niet klopt, verliest tijd. En vertrouwt de rest van de documentatie ook niet meer.

Controleer daarom altijd:

- Klopt de beschrijving met wat de code echt doet?
- Kloppen de namen en types van de parameters?
- Staan randgevallen, standaardwaarden en fouten erin?
- Is de tekst duidelijk voor wie hem zal lezen?

### Test jezelf 6.4 – Documentatie laten genereren

```text
Sectie: 6.4
Type: meerkeuze
Vraag: Waarom is foute documentatie erger dan geen documentatie? Kies één antwoord.
Opties:
  A. Documentatie neemt opslagruimte in.
  B. Foute documentatie maakt de code trager.
  C. Er is geen situatie waarin foute documentatie erger is.
  D. Wie foute documentatie vertrouwt, maakt fouten die hij of zij zonder documentatie niet gemaakt had.
Juist: D
Feedback A: Opslagruimte is geen probleem bij documentatie (zie 6.4).
Feedback B: Documentatie heeft geen invloed op de snelheid van code (zie 6.4).
Feedback C: Zonder documentatie lees je de code. Met foute documentatie lees je ze niet, en ga je in de fout (zie 6.4).
Feedback D: Juist. Bovendien vertrouwt die lezer daarna de rest van de documentatie niet meer (zie 6.4).

Sectie: 6.4
Type: meerdere antwoorden
Vraag: Een model documenteert `calculatePriceInclVat` uit 6.4 als "Calculates the price including VAT." Wat ontbreekt er? Kies drie antwoorden.
Opties:
  A. De standaardwaarde 21 van `vatPercentage`.
  B. De fout die de function gooit bij een negatieve prijs.
  C. Hoe de function intern de vermenigvuldiging uitvoert.
  D. De betekenis en het type van de parameters.
Juist: A, B, D
Feedback A: Juist. Een standaardwaarde moet de gebruiker van de function kennen (zie 6.4).
Feedback B: Juist. Wie de function aanroept, moet weten wanneer ze een fout gooit (zie 6.4).
Feedback C: Documentatie beschrijft wat een function doet en hoe je ze gebruikt, niet hoe ze het intern doet (zie 6.4).
Feedback D: Juist. Zonder types en betekenis weet de lezer niet wat hij of zij moet meegeven (zie 6.4).

Sectie: 6.4
Type: meerkeuze
Vraag: Voor welk soort documentatie is AI het meest direct nuttig? Kies één antwoord.
Opties:
  A. Comments en documentatie van functions op basis van bestaande code.
  B. Beslissingen over de architectuur en waarom ze genomen zijn.
  C. Handleidingen voor eindgebruikers zonder technische achtergrond.
  D. Juridische teksten en licenties.
Juist: A
Feedback A: Juist. Alles wat het model nodig heeft, staat in de code (zie 6.4).
Feedback B: Waarom een beslissing genomen werd, staat niet in de code. Dat weet alleen het team (zie 6.4).
Feedback C: Dat kan, maar het vraagt veel context over de gebruikers die het model niet heeft (zie 6.4).
Feedback D: Juridische teksten vragen juridische controle. Daar is een model een riskante bron (zie 6.4).
```

## 6.5 Technische communicatie met AI

Je loste een bug op in `isAdult`. Vergelijk twee commit messages:

```text
fix bug
```

```text
Fix isAdult for age 18

The check used > 18, so users of exactly 18 were not treated as adults.
The specification says adults are 18 or older.
```

De eerste zegt niets. De tweede zegt wat er veranderde en waarom. Goede code schrijven is één ding, uitleggen wat je deed aan een collega, een teamlead of een klant is iets anders.

AI helpt om technische berichten te structureren en te formuleren:

- Een **commit message**: een korte beschrijving bij een commit, die zegt wat een wijziging doet en waarom.
- De beschrijving van een **pull request** (voorstel tot samenvoegen): zodat een reviewer meteen weet wat er te reviewen is en waarom.
- Een technische samenvatting van een wijziging of probleem, voor wie geen technische achtergrond heeft.
- De uitleg van een complexe beslissing aan een collega.

Het sleutelwoord is doelgroep. Wat correct is voor een technische collega, begrijpt een projectmanager niet per se. Wat duidelijk is voor een ervaren developer, is niet altijd duidelijk voor een beginner.

Het model levert een startpunt. Jij past het aan voor de lezer. Je voegt de context toe die het model niet kent: waarom je iets deed, wat je overwoog en wat je afsprak. AI maakt technische communicatie makkelijker, maar het denkwerk over wat je wil zeggen, blijft van jou.

### Test jezelf 6.5 – Technische communicatie

```text
Sectie: 6.5
Type: meerkeuze
Vraag: Een gegenereerde samenvatting van een bugfix bevat termen als race condition en mutex. Ze moet naar een projectmanager zonder technische achtergrond. Wat doe je? Kies één antwoord.
Opties:
  A. Ze doorsturen: de projectmanager kan vragen stellen.
  B. De samenvatting aanpassen zodat de kernboodschap begrijpelijk is zonder technische achtergrond.
  C. Het model vragen om te schrijven voor een niet-technisch publiek en de output zonder controle doorsturen.
  D. Ze enkel doorsturen als de projectmanager erom vraagt.
Juist: B
Feedback A: Je schrijft voor de lezer. Een bericht dat de lezer niet begrijpt, communiceert niets (zie 6.5).
Feedback B: Juist. Jij stemt het bericht af op de doelgroep (zie 6.5).
Feedback C: Een nieuwe prompt helpt, maar je controleert het resultaat altijd zelf (zie 6.5).
Feedback D: Een projectmanager moet op de hoogte zijn van een opgeloste bug, ook zonder erom te vragen (zie 6.5).

Sectie: 6.5
Type: meerkeuze
Vraag: Wat is het grootste risico van gegenereerde commit messages die je ongewijzigd overneemt? Kies één antwoord.
Opties:
  A. Ze zijn te lang voor Git.
  B. Ze bevatten automatisch broncode.
  C. Ze missen de reden van de wijziging, die enkel jij kent.
  D. Git weigert tekst die door AI geschreven is.
Juist: C
Feedback A: Git legt geen maximale lengte op aan commit messages (zie 6.5).
Feedback B: Een model kan code samenvatten, maar plakt er meestal geen code in (zie 6.5).
Feedback C: Juist. Het model ziet wat er veranderde, maar niet waarom (zie 6.5).
Feedback D: Git weet niet wie een tekst schreef (zie 6.5).
```

## Samenvatting

Nieuwe termen:

- assertion: een controle in een test die stopt met een fout als de waarden niet kloppen.
- specificatie: de beschrijving van wat de code moet doen.
- testdata: de concrete inputwaarden en verwachte output waarmee je test.
- mock data: nagemaakte antwoorden die een echte externe afhankelijkheid vervangen in een test.
- test suite: een verzameling tests voor een stuk software.
- flaky test: een test die willekeurig slaagt of faalt.
- commit message: een korte beschrijving bij een commit.
- pull request: een voorstel om je wijzigingen samen te voegen met de rest van de code.

Belangrijkste regels:

- Controleer gegenereerde tests aan de hand van de specificatie, nooit aan de hand van de code.
- Testdata moet representatief zijn: met variatie, randgevallen en Belgische gegevens.
- Een goede test is valide, volledig en betrouwbaar.
- Controleer gegenereerde documentatie op juistheid, types, randgevallen en fouten.
- Stem technische berichten af op de lezer en voeg de reden toe die het model niet kent.

## Veelgemaakte fouten

- Tests laten genereren voor code met een fout, en denken dat de code klopt omdat de tests slagen. `isAdult(18) === false` slaagt, en is fout.
- Testen met te nette data. "John Smith" en postcode 10001 zeggen niets over een Belgische toepassing.
- Een te zwakke assertion schrijven. `typeof result === "number"` slaagt ook voor `NaN`.
- Gegenereerde documentatie ongelezen overnemen. De standaardwaarde en de fout bij een negatieve prijs ontbreken.
- Een commit message als "fix bug" schrijven. Over een halfjaar weet niemand meer wat er veranderde, of waarom.

::: oefening
[Oefeningen module 6](./module-6-oefeningen.md)
:::
