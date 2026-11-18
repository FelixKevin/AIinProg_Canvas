---
module: 3
order: 1
moduleTitle: "3: Code genereren"
published: true
---

# Module 3: Code genereren

In module 2 leerde je een precieze prompt schrijven. In deze module bouw je er iets mee. Je laat een eerste versie genereren, je bewaart ze, je zorgt dat je ze begrijpt en je bouwt in kleine stappen verder. Je leert ook waar gegenereerde code vaak tekortschiet, en hoe je dat zelf opspoort.

### Leerdoelen

Na deze module kan je:

- een eerste versie van een klein programma laten genereren met één precieze prompt;
- een versie bewaren voor je verder bouwt, en uitleggen waarom je daarvoor versiebeheer gebruikt;
- uitleg vragen over gegenereerde code, en die uitleg zelf testen;
- een resultaat verbeteren met feedbackpunten, één per prompt;
- controleren of gegenereerde code past in een bestaand project;
- uitleggen waarom je een project verdeelt over bestanden met elk één taak (separation of concerns);
- typische tekortkomingen van gegenereerde code herkennen;
- geheimen uit gegenereerde configuratie houden.

## 3.1 Een eerste versie genereren

Je hebt een idee en je wil snel zien of het werkt. Daar is een model sterk in: jij beschrijft wat je wil, en de agent schrijft een eerste versie. Zo'n eerste werkende versie om een idee te testen of te tonen, heet een **prototype**.

In deze module werk je met **three.js**, een JavaScript-library voor 3D in de browser. Je hoeft three.js niet te kennen. Je vertrekt van een klein project dat al werkt: een 3D-scène met een groene vloer, een oranje kubus die draait, een licht en een camera.

![Een oranje kubus op een groene vloer, met een blauwe lucht erachter](images/module-3/scene-start.png "Het project waarmee je start"){width=560}

Het project bestaat uit twee bestanden:

- `index.html` bevat alle code. Bovenaan staan de instellingen, zoals kleuren en snelheden. Elk voorwerp heeft een eigen function die het maakt, zoals `createCube()`.
- `AGENTS.md` is het instructiebestand (zie [2.4](./module-2.md#2_4)). Daarin staan de afspraken van het project. Alle code blijft in `index.html`, je gebruikt alleen wat three.js zelf biedt, en namen zijn in het Engels.

Eén function moet je kennen om te volgen. `animate()` wordt telkens opnieuw uitgevoerd, op de meeste schermen ongeveer zestig keer per seconde. Elke keer draait ze de kubus een klein beetje en tekent ze het beeld opnieuw:

```js
const rotationSpeed = 0.01;

function animate() {
  cube.rotation.y += rotationSpeed;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
```

### Eerst denken, dan één prompt

Je begint niet met een prompt. Je begint met wat je wil (zie [2.2](./module-2.md#2_2)). Hou het klein: één idee, één ding dat beweegt en één reactie op het toetsenbord of de muis. Dat idee mag een voorwerp zijn, maar ook een beweging, een sfeer of een effect, zoals sneeuw. Een groot idee kost veel prompts, en elke prompt kost AI credits. Bijvoorbeeld:

> Naast de kubus staat een vuurtoren. Bovenaan draait een lichtstraal rond. Druk ik op de spatiebalk, dan stopt de lichtstraal. Druk ik opnieuw, dan draait hij verder.

Dat zet je om in een prompt met de vier elementen uit [2.3](./module-2.md#2_3):

```text
Context: een three.js-scène in index.html. De afspraken van het project
staan in AGENTS.md.
Input: een druk op de spatiebalk.
Output: een vuurtoren links van de kubus. De toren is een witte cilinder
met een rood dak in de vorm van een kegel. Net onder het dak draait een
gele balk traag rond: dat is de lichtstraal. Bij een druk op de spatiebalk
stopt de lichtstraal. Bij een volgende druk draait hij verder.
Beperkingen: verander de vloer, de kubus, de camera en het licht niet.
```

De prompt blijft kort, omdat de afspraken van het project al in `AGENTS.md` staan. Je hoeft ze niet te herhalen.

De agent past `index.html` aan. Herlaad de pagina in je browser. Het resultaat ziet er bijvoorbeeld zo uit. Bij jou kan het anders zijn: dezelfde prompt geeft niet altijd dezelfde output (zie [1.2](./module-1.md#1_2)).

![Dezelfde scène met een witte vuurtoren met een rood dak naast de kubus](images/module-3/scene-vuurtoren.png "Een eerste versie: de vuurtoren naast de kubus"){width=560}

In de code kwam er een function `createLighthouse()` bij. `animate()` kreeg drie regels extra:

```js
function animate() {
  cube.rotation.y += rotationSpeed;
  if (beamIsTurning) {
    beam.rotation.y += beamSpeed;
  }
  renderer.render(scene, camera);
}
```

### Een eerste versie is een vertrekpunt

Vergelijk het resultaat met wat je vroeg. Stel jezelf vier vragen:

- Doet het wat je vroeg? Hier wel: de toren staat er, de lichtstraal draait en de spatiebalk stopt hem.
- Wat koos het model zelf? De hoogte van de toren, de plaats en de snelheid van de lichtstraal. Daar zei je niets over (zie [2.1](./module-2.md#2_1)).
- Kwam er iets bij wat je niet vroeg (zie [1.5](./module-1.md#1_5))? Hier niet.
- Volgde de agent de afspraken van het project? Hoe je dat controleert, lees je in [3.4](#3_4).

Het resultaat werkt, maar het is niet af. De toren staat dicht bij de kubus, en de lichtstraal is moeilijk te zien. En je weet nog niet waarom de code werkt. Werkende code is geen bewijs (zie [1.7](./module-1.md#1_7)).

### Bewaar je eerste versie

De agent past in de volgende stappen je bestanden aan. Wat er eerst stond, is dan weg: een bestand houdt zelf geen geschiedenis bij. Zorg daarom altijd dat je terug kan naar een versie die werkte, voor je iets laat veranderen.

De juiste manier is **versiebeheer** (version control): software die elke versie van je bestanden bewaart, zoals Git. Je legt een versie vast, en je kan er later altijd naar terug. In een echt project werk je altijd met versiebeheer.

In deze module gebruik je een eenvoudige vervanging: een kopie van je map. Staat je project in de map `scene`, noem de kopie dan `scene-v1`. In de kopie verander je niets meer. Voor een kleine oefening is dat genoeg. Maak er geen gewoonte van: in een groter project verlies je met kopieën snel het overzicht, en versiebeheer doet dit beter. Hoe je zelf met Git werkt, leer je later in deze cursus.

Een bewaarde versie helpt je op twee manieren:

- Loopt een stap mis, dan vertrek je opnieuw van een versie die werkte.
- Je kan later vergelijken: wat was de eerste versie, en wat maakte jij ervan?

Dit betekent voor jou: eerst je versie bewaren, dan pas verder prompten.

### Test jezelf 3.1 – Een eerste versie genereren {#test-jezelf-3-1-een-eerste-versie-genereren}

```text
Sectie: 3.1
Type: meerkeuze
Vraag: Wanneer is een gegenereerd prototype het nuttigst? Kies één antwoord.
Opties:
  A. Als je de code meteen wil gebruiken zonder ze te lezen.
  B. Als je snel een eerste versie wil om een idee te testen of te tonen, die je daarna zelf verder uitwerkt.
  C. Als iemand anders de code later zal moeten begrijpen, zodat jij dat niet hoeft te doen.
  D. Als het project te moeilijk is om er zelf aan te beginnen.
Juist: B
Feedback A: Een prototype is een eerste versie om een idee te testen, geen afgewerkte code (zie 3.1).
Feedback B: Juist. De agent levert snel iets wat je kan bekijken. Daarna begrijp jij het en werk je het uit (zie 3.1).
Feedback C: Wie code gebruikt, moet ze zelf begrijpen. Dat schuif je niet door (zie 1.6).
Feedback D: Kan je een project zelf niet overzien, dan kan je de gegenereerde code ook niet controleren (zie 1.6).

Sectie: 3.1
Type: meerkeuze
Vraag: Je eerste versie werkt. Wat doe je voor je een volgende prompt stuurt? Kies één antwoord.
Opties:
  A. Meteen drie verbeteringen vragen in één prompt.
  B. Een nieuw gesprek starten en dezelfde prompt opnieuw sturen.
  C. Je versie bewaren, zodat je terug kan. In deze module is dat een kopie van de map.
  D. De code wissen, zodat de agent opnieuw kan beginnen.
Juist: C
Feedback A: Drie wijzigingen tegelijk zijn moeilijk te controleren. En je eerste versie is nog niet bewaard (zie 3.1).
Feedback B: Dezelfde prompt geeft een andere eerste versie, geen betere. Bewaar wat werkt (zie 3.1).
Feedback C: Juist. De agent past je bestanden aan. Met een bewaarde versie kan je altijd terug naar iets wat werkte (zie 3.1).
Feedback D: Dan ben je kwijt wat al werkte (zie 3.1).

Sectie: 3.1
Type: meerkeuze
Vraag: Wat is in een echt project de juiste manier om terug te kunnen naar een vorige versie van je code? Kies één antwoord.
Opties:
  A. Elke dag een kopie van de map maken, met een nummer erachter.
  B. Versiebeheer gebruiken, zoals Git.
  C. De agent vragen om de code van gisteren terug te zetten.
  D. Niets doen: een bestand bewaart zelf zijn vorige versies.
Juist: B
Feedback A: Voor een kleine oefening werkt een kopie. In een groter project verlies je zo snel het overzicht (zie 3.1).
Feedback B: Juist. Versiebeheer bewaart elke versie van je bestanden, en je kan altijd terug (zie 3.1).
Feedback C: Een model onthoudt niets van eerdere gesprekken. Het weet niet wat er gisteren stond (zie 1.4).
Feedback D: Een bestand houdt zelf geen geschiedenis bij. Wat overschreven is, is weg (zie 3.1).

Sectie: 3.1
Type: ordenen
Vraag: Zet de stappen voor een eerste versie in de juiste volgorde.
Volgorde:
  Beschrijf in een paar zinnen wat je wil.
  Schrijf een prompt met context, input, output en beperkingen.
  Bekijk het resultaat en vergelijk het met wat je vroeg.
  Bewaar je versie.
  Bouw verder.
Feedback: Je denkt na voor je een prompt schrijft, en je bewaart je eerste versie voor je verder bouwt (zie 3.1).

Sectie: 3.1
Type: meerkeuze
Vraag: De afspraken van een project staan in `AGENTS.md`. Je schrijft een prompt voor een nieuw voorwerp in de scène. Wat doe je met die afspraken? Kies één antwoord.
Opties:
  A. Je herhaalt ze niet in je prompt: de agent harness leest het instructiebestand zelf.
  B. Je plakt het volledige bestand in elke prompt.
  C. Je verwijdert het bestand, zodat de agent vrij kan kiezen.
  D. Je vraagt de agent om de afspraken te raden.
Juist: A
Feedback A: Juist. Daarom blijft je prompt kort. Je zegt alleen wat nieuw is voor deze taak (zie 3.1).
Feedback B: Dat hoeft niet. De agent harness leest het instructiebestand bij elk nieuw gesprek (zie 2.4).
Feedback C: Dan beslist het model alles zelf, en past de nieuwe code niet meer bij het project (zie 2.1).
Feedback D: Wat het model moet raden, vult het in met de gangbaarste keuze (zie 2.1).

Sectie: 3.1
Type: juist/fout
Vraag: Als een gegenereerde eerste versie doet wat je vroeg, is ze af.
Juist: fout
Feedback: Een eerste versie is een vertrekpunt. Het model koos veel zelf, en je weet nog niet waarom de code werkt (zie 3.1).
```

## 3.2 Begrijp wat je kreeg

Je scène werkt. Maar in `index.html` staat nu code die je niet zelf schreef: de code van het startproject en de code van de agent. Kan je uitleggen wat ze doet? Lukt dat niet, dan kan je de code niet bijsturen, en kan je ze niet uitleggen als iemand ernaar vraagt. Code die je gebruikt, moet je kunnen uitleggen (zie [1.7](./module-1.md#1_7)).

### Lees eerst zelf

Lees de code van boven naar beneden. Zoek wat je niet kan uitleggen:

- een getal waarvan je niet weet wat het betekent;
- een function van de library die je niet kent;
- een regel waarvan je niet kan zeggen wat er gebeurt als je ze weglaat.

In het startproject is dat misschien het licht:

```js
const lightIntensity = 3;

const sunLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
sunLight.position.set(5, 10, 5);
scene.add(sunLight);
```

Waarom heeft een scène een licht nodig? En wat doet het getal 3?

### Vraag uitleg over één ding

Uitleg vragen is een vraag van de soort evalueren (zie [2.5](./module-2.md#2_5)). Zeg dat de agent niets mag veranderen, en vraag naar één ding:

```text
Verander niets aan de code. Leg in eenvoudige woorden uit waarom deze scène
een licht nodig heeft, en wat lightIntensity doet.
```

Vraag gericht. Op "Leg de code uit" krijg je een lange tekst over alles. Op een vraag over één ding krijg je een antwoord dat je kan controleren.

Het model antwoordt bijvoorbeeld dat de voorwerpen in de scène hun kleur alleen tonen als er licht op valt. Zonder licht zijn ze zwart. `lightIntensity` bepaalt hoe sterk het licht is: hoe groter het getal, hoe feller. De achtergrond is geen voorwerp, en heeft dus geen licht nodig.

### Test de uitleg

Die uitleg klinkt logisch. Maar een model klinkt altijd zeker, ook als het fout zit (zie [1.5](./module-1.md#1_5)). Een uitleg is een bewering, en een bewering kan je testen:

1. Voorspel. Als de uitleg klopt, wat zie je dan als `lightIntensity` 0 is? De kubus en de vloer zijn dan zwart, en de lucht blijft blauw.
2. Verander de waarde zelf in de code, zonder de agent.
3. Herlaad de pagina en kijk.

![De kubus en de vloer zijn zwart, de lucht is nog blauw](images/module-3/scene-licht-0.png "Met lightIntensity 0 zijn de voorwerpen zwart, de achtergrond niet"){width=560}

Dit zie je voor vier waarden van `lightIntensity`:

| lightIntensity | Wat je ziet |
| --- | --- |
| 0 | de kubus en de vloer zijn zwart, de lucht blijft blauw |
| 1 | de kubus en de vloer zijn donkerder dan in het startproject |
| 3 | het beeld van het startproject |
| 10 | de kubus en de vloer zijn veel feller en bleker |

De voorspelling klopt, dus de uitleg klopt voor dit stuk code. Klopt je voorspelling niet? Dan is de uitleg fout, of je begreep ze anders. In beide gevallen weet je meer dan daarvoor.

Dit werkt ook als je gewoon nieuwsgierig bent. Vraag je je af wat de drie getallen in `camera.position.set(4, 3, 6)` betekenen, of waarom de kubus blijft draaien? Zoek de regel, vraag uitleg en test ze.

Dit betekent voor jou: je begrijpt een regel als je kan voorspellen wat er gebeurt wanneer je ze verandert.

### Test jezelf 3.2 – Begrijp wat je kreeg {#test-jezelf-3-2-begrijp-wat-je-kreeg}

```text
Sectie: 3.2
Type: meerkeuze
Vraag: Je werkt met een agent en je wil begrijpen wat rotationSpeed in index.html doet. Welke prompt is het best? Kies één antwoord.
Opties:
  A. Leg de code uit.
  B. Is deze code goed?
  C. Verbeter rotationSpeed.
  D. Verander niets aan de code. Leg in eenvoudige woorden uit wat rotationSpeed doet.
Juist: D
Feedback A: Je krijgt een lange tekst over alles. Een gerichte vraag geeft een antwoord dat je kan controleren (zie 3.2).
Feedback B: Dat is geen vraag om uitleg. En een model geeft je vaak gelijk (zie 1.5).
Feedback C: Dit is een vraag om aan te passen. De agent verandert je code (zie 2.5).
Feedback D: Juist. Je zegt wat niet mag, en je vraagt naar één ding (zie 3.2).

Sectie: 3.2
Type: numeriek
Vraag: De function animate() wordt vier keer uitgevoerd. Welke waarde heeft rotation daarna?
Code:
  let rotation = 1;
  const rotationSpeed = 0.5;
  function animate() {
    rotation += rotationSpeed;
  }
Juist: 3
Feedback: rotation wordt 1.5, 2, 2.5 en 3. Volg de waarde stap voor stap (zie 3.2).

Sectie: 3.2
Type: meerkeuze
Vraag: Het model zegt: "Met een grotere waarde voor rotationSpeed draait de kubus sneller." Hoe controleer je die uitleg het best? Kies één antwoord.
Opties:
  A. Je voorspelt wat er gebeurt met een grotere waarde, verandert de waarde zelf en kijkt of het klopt.
  B. Je vraagt het model of het zeker is.
  C. Je stelt dezelfde vraag aan een tweede model.
  D. Je controleert niets: de uitleg klinkt logisch.
Juist: A
Feedback A: Juist. Een uitleg is een bewering. Je test ze met een voorspelling (zie 3.2).
Feedback B: Een model geeft je vaak gelijk. Je krijgt waarschijnlijk gewoon "ja" (zie 1.5).
Feedback C: Een tweede model kan dezelfde fout maken. De code uitvoeren geeft zekerheid (zie 3.2).
Feedback D: Een fout antwoord klinkt even overtuigend als een juist antwoord (zie 1.5).

Sectie: 3.2
Type: meerkeuze
Vraag: In het startproject uit 3.1 verander je lightIntensity van 3 naar 0. Wat zie je? Kies één antwoord.
Opties:
  A. Het hele scherm is zwart, ook de lucht.
  B. De kubus en de vloer zijn zwart, de lucht blijft blauw.
  C. Er verandert niets.
  D. De kubus stopt met draaien.
Juist: B
Feedback A: De achtergrond is geen voorwerp. Ze heeft geen licht nodig en blijft blauw (zie 3.2).
Feedback B: Juist. De voorwerpen tonen hun kleur alleen als er licht op valt (zie 3.2).
Feedback C: Zonder licht tonen de voorwerpen hun kleur niet meer (zie 3.2).
Feedback D: Het licht heeft niets te maken met de beweging. De kubus draait verder, ook al zie je het minder goed (zie 3.2).
```

## 3.3 Verder bouwen met feedbackpunten

Je eerste versie is bewaard, en je begrijpt de code. Nu maak je ze beter.

### Schrijf op wat je ziet

Bekijk het resultaat en schrijf **feedbackpunten** op: wat klopt niet, wat ontbreekt en wat wil je anders? Maak elk punt klein en concreet. Voor de scène met de vuurtoren:

1. De vuurtoren staat te dicht bij de kubus. Hij moet verder naar links.
2. De lichtstraal is moeilijk te zien. Hij moet twee keer zo dik worden.
3. De vloer past niet bij een vuurtoren. Hij moet de kleur van zand krijgen.

"Maak het mooier" is geen feedbackpunt. Dan moet het model zelf kiezen wat mooi is (zie [2.1](./module-2.md#2_1)).

### Eén punt per prompt

Stuur elk punt als een aparte vervolgprompt (zie [2.7](./module-2.md#2_7)). Zeg wat moet veranderen, en dat de rest hetzelfde blijft:

```text
Zet de vuurtoren verder naar links, zodat er ruimte is tussen de toren en
de kubus. Verander niets anders.
```

### Controleer na elke stap

Herlaad de pagina in je browser en controleer twee dingen:

- Is het punt opgelost?
- Werkt alles nog wat al werkte? Draait de kubus nog, en stopt de lichtstraal nog bij een druk op de spatiebalk?

Pas daarna stuur je het volgende punt.

Stel dat je de drie punten in één prompt stuurt, en de lichtstraal daarna niet meer draait. Welke van de drie wijzigingen is de oorzaak? Dat weet je niet. Met één punt per prompt weet je het altijd: het is de laatste wijziging (zie [1.7](./module-1.md#1_7)).

Lukte een stap goed? Bewaar dan opnieuw een versie. In deze module is dat een nieuwe kopie, zoals `scene-v2`.

### Als een stap misloopt

Soms zie je na een wijziging een leeg scherm, of beweegt er niets meer. Open dan de **console** van je browser: druk op F12 en kies **Console**. Daar toont de browser de foutmeldingen van je code, in het rood.

Zeg in je vervolgprompt wat je ziet, niet alleen dat het niet werkt. De melding uit de console hoef je niet over te typen: selecteer ze, kopieer ze en plak ze in je prompt. Dat werkt ook voor een waarschuwing, in het geel.

Jij kiest wat je vraagt. Wil je begrijpen wat er misliep, vraag dan uitleg:

```text
Sinds de laatste wijziging blijft het scherm leeg. In de console staat:
ReferenceError: lighthouse is not defined
Wat betekent deze melding? Verander niets aan de code.
```

Wil je verder, vraag dan de oplossing:

```text
Sinds de laatste wijziging blijft het scherm leeg. In de console staat:
ReferenceError: lighthouse is not defined
Los deze fout op. Verander niets anders.
```

Lukt het na twee pogingen nog niet? Blijf dan niet proberen in hetzelfde gesprek. Ga terug naar je laatste versie die werkte, en ga van daar verder met een preciezere prompt. Daarvoor bewaar je je versies.

### Test jezelf 3.3 – Verder bouwen met feedbackpunten {#test-jezelf-3-6-iteratief-integreren}

```text
Sectie: 3.3
Type: meerkeuze
Vraag: Je hebt drie feedbackpunten voor je scène. Hoe stuur je ze naar de agent? Kies één antwoord.
Opties:
  A. Alle drie in één prompt: dat gaat het snelst.
  B. Eén punt per prompt, en na elke prompt controleer je het resultaat.
  C. Geen van de drie: je past alles zelf aan.
  D. Alle drie in een nieuw gesprek, samen met de volledige code.
Juist: B
Feedback A: Loopt er daarna iets mis, dan weet je niet welke wijziging de oorzaak is (zie 3.3).
Feedback B: Juist. Bij een fout weet je meteen waar ze zit: in de laatste wijziging (zie 3.3).
Feedback C: Dat mag, maar het hoeft niet. Een agent kan dit, als jij klein en precies vraagt (zie 3.3).
Feedback D: Ook dan vraag je drie wijzigingen tegelijk. De grootte van de stap is het probleem (zie 3.3).

Sectie: 3.3
Type: meerkeuze
Vraag: Welke zin is een goed feedbackpunt? Kies één antwoord.
Opties:
  A. Maak de scène mooier.
  B. De scène is nog niet goed.
  C. Verbeter de toren en de vloer en voeg extra dingen toe.
  D. De lichtstraal is moeilijk te zien. Hij moet twee keer zo dik worden.
Juist: D
Feedback A: Het model moet dan zelf kiezen wat mooi is (zie 2.1).
Feedback B: Dit zegt niet wat er mis is, en niet wat je wil (zie 3.3).
Feedback C: Dit zijn meerdere wijzigingen tegelijk, en geen ervan is concreet (zie 3.3).
Feedback D: Juist. Het punt is klein en concreet: het zegt wat er mis is en wat er moet veranderen (zie 3.3).

Sectie: 3.3
Type: meerkeuze
Vraag: Na een wijziging blijft het scherm leeg. Welke vervolgprompt is het best? Kies één antwoord.
Opties:
  A. Het werkt niet meer.
  B. Sinds de laatste wijziging blijft het scherm leeg. In de console staat een ReferenceError, lighthouse is not defined.
  C. Los het op.
  D. Begin helemaal opnieuw.
Juist: B
Feedback A: Het model weet niet wat je ziet. Het moet raden wat er mis is (zie 3.3).
Feedback B: Juist. Je zegt wat je ziet en je geeft de foutmelding uit de console mee (zie 3.3).
Feedback C: Zonder wat je ziet en zonder de foutmelding moet het model raden (zie 3.3).
Feedback D: Dan verlies je ook wat al werkte. Geef eerst de foutmelding mee (zie 3.3).

Sectie: 3.3
Type: ordenen
Vraag: Zet de stappen van werken met feedbackpunten in de juiste volgorde.
Volgorde:
  Schrijf je feedbackpunten op.
  Stuur één punt als vervolgprompt.
  Controleer of het punt opgelost is.
  Controleer of alles nog werkt wat al werkte.
  Stuur het volgende punt.
Feedback: Na elke wijziging controleer je eerst het nieuwe, en daarna wat al werkte. Pas dan ga je verder (zie 3.3).

Sectie: 3.3
Type: meerkeuze
Vraag: Twee vervolgprompts na elkaar lossen een fout niet op, en de code wordt er slechter van. Wat doe je? Kies één antwoord.
Opties:
  A. In hetzelfde gesprek blijven proberen tot het lukt.
  B. De fout laten staan en verdergaan met het volgende feedbackpunt.
  C. Teruggaan naar je laatste versie die werkte, en van daar verdergaan met een preciezere prompt.
  D. Het model vragen of het zeker is van zijn oplossing.
Juist: C
Feedback A: Het gesprek staat dan vol mislukte pogingen, en de code wijkt steeds verder af (zie 3.3).
Feedback B: Dan bouw je verder op code die niet werkt (zie 3.3).
Feedback C: Juist. Daarvoor bewaar je je versies: je vertrekt opnieuw van iets wat werkte (zie 3.3).
Feedback D: Een model geeft je vaak gelijk. Dat lost de fout niet op (zie 1.5).
```

## 3.4 Code inpassen in een bestaand project

In 3.1 werkte je in een project dat al bestond, met eigen bestanden, namen en afspraken. Voor een developer is dat de gewone situatie. Nieuwe code moet in zo'n project passen.

Een model schrijft wat vaak voorkomt (zie [1.5](./module-1.md#1_5)). Weet het niets over jouw project, dan kiest het de gangbaarste namen en de gangbaarste aanpak. Je ziet dat goed bij boilerplate (zie [1.6](./module-1.md#1_6)): de code is voorspelbaar en snel gemaakt, maar ze volgt de gangbare keuzes, niet die van jouw project.

Een voorbeeld uit het project van [3.1](#3_1). Je wil een boom in je scène. Je vraagt het snel in een chatvenster in je browser, zonder het project en zonder `AGENTS.md`. Je krijgt dit:

```js
// boom.js
import * as THREE from 'three';

export function maak_boom() {
  const stam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.3, 2),
    new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
  );
  stam.position.y = 1;
  return stam;
}
```

Er is niets mis met wat deze code doet: ze maakt een bruine stam. Maar ze past niet in het project:

| Controlepunt | In het project | In de gegenereerde code |
| --- | --- | --- |
| Naamgeving | Engels, in camelCase: `createCube` | Nederlands, met een underscore: `maak_boom` |
| Plaats | alle code staat in `index.html` | de code staat in een nieuw bestand, `boom.js` |
| Wat er al is | kleuren staan bovenaan, bij de instellingen | de kleur staat midden in de function |

Controleer bij gegenereerde code voor een bestaand project altijd vier punten:

- Naamgeving: volgt de code de naamgeving van je project?
- Plaats: staat de code in het juiste bestand en in de juiste map?
- Wat er al is: gebruikt de code wat je project al heeft, zoals de instellingen bovenaan en de function `animate()`? Of maakt ze een tweede versie van iets wat al bestaat?
- Afspraken: volgt de code de afspraken van je project, zoals die in `AGENTS.md`?

Een versie die wel past, in `index.html`:

```js
const trunkColor = 0x8b5a2b;

function createTree() {
  const geometry = new THREE.CylinderGeometry(0.2, 0.3, 2);
  const material = new THREE.MeshStandardMaterial({ color: trunkColor });
  const tree = new THREE.Mesh(geometry, material);
  tree.position.y = 1;
  return tree;
}
```

### Zeg het vooraf

Wat je vooraf zegt, moet je achteraf niet aanpassen. Dat doe je op twee manieren:

- Geef context in je prompt (zie [2.4](./module-2.md#2_4)): in welk bestand de code komt, en wat er al bestaat. Een agent kan de bestanden van je project zelf lezen. Wijs hem de weg.
- Zet afspraken die altijd terugkomen in een instructiebestand (zie [2.4](./module-2.md#2_4)). In het project van 3.1 staan ze in `AGENTS.md`. Drie ervan:

```markdown
- Alle code staat in `index.html`. Maak geen extra bestanden. De pagina wordt geopend met een dubbelklik, zonder server.
- Elk voorwerp of effect krijgt een eigen function die het maakt, zoals `createCube()`.
- Namen en comments zijn in het Engels. Namen staan in camelCase.
```

Werk je met een agent in dat project, dan leest de agent harness die afspraken zelf, en krijg je meestal code die past. Controleer daarna toch de vier punten. Een instructiebestand is context, geen garantie: de agent kan een afspraak missen.

### Elk bestand zijn eigen taak

Het startproject uit [3.1](#3_1) heeft alle code in één bestand, `index.html`. Voor een kleine scène werkt dat. Maar hoe groter zo'n bestand wordt, hoe moeilijker je er iets in terugvindt. Dat geldt ook voor een agent: een groot bestand vult zijn context (zie [1.4](./module-1.md#1_4)).

Developers verdelen een project daarom over meerdere bestanden, elk met één taak. Dat principe heet **separation of concerns**. Voor een webpagina is dit de gewone verdeling:

| Bestand | Taak |
| --- | --- |
| `index.html` | de structuur van de pagina: wat er is |
| `style.css` | de opmaak: hoe het eruitziet |
| `main.js` | het gedrag: wat er gebeurt |

`index.html` verwijst dan naar de twee andere bestanden:

```html
<link rel="stylesheet" href="style.css">
<script type="module" src="main.js"></script>
```

Splitsen heeft een prijs. Open je zo'n pagina met een dubbelklik, dan blijft het scherm leeg, en in de console staat een foutmelding over CORS. In Chrome staat er `blocked by CORS policy` in. Een browser laadt een JavaScript-bestand zoals `main.js` niet rechtstreeks van je schijf. De pagina moet van een **server** komen: een programma dat bestanden doorgeeft aan je browser. Tijdens het ontwikkelen draait zo'n server op je eigen computer.

Dat is een trade-off (zie [2.2](./module-2.md#2_2)). Eén bestand opent met een dubbelklik. Een project in meerdere bestanden is beter leesbaar, maar heeft een lokale server nodig. Daarom zegt `AGENTS.md` in het startproject dat alle code in `index.html` blijft.

Wil je het anders? Pas dan eerst de afspraak in `AGENTS.md` aan, en vraag daarna de wijziging. Het instructiebestand is van jou: vraag je iets wat ertegen ingaat, dan krijgt de agent twee opdrachten die elkaar tegenspreken.

De vraag zelf is een vraag om aan te passen (zie [2.5](./module-2.md#2_5)). Het doel is dezelfde scène, in een betere structuur. Zeg dus wat verandert, en wat hetzelfde blijft:

```text
Verdeel de code over index.html, style.css en main.js, zoals de afspraken
in AGENTS.md zeggen. De scène moet precies hetzelfde tonen en doen als nu:
de kubus draait, en de spatiebalk stopt de lichtstraal. Voeg niets toe.
```

Daarna controleer je twee dingen: toont en doet de scène nog hetzelfde, en volgde de agent de afspraken?

### Test jezelf 3.4 – Code inpassen in een bestaand project {#test-jezelf-3-4-gegenereerde-code-inpassen}

```text
Sectie: 3.4
Type: meerkeuze
Vraag: Je project gebruikt camelCase, de gegenereerde code `snake_case`. Wat doe je? Kies één antwoord.
Opties:
  A. De code zo overnemen: naamgeving heeft geen invloed op de werking.
  B. De namen aanpassen naar camelCase, zelf of met een vervolgprompt die de naamgeving vermeldt.
  C. De gegenereerde code in een apart bestand zetten, los van de rest van het project.
  D. Het hele project omzetten naar `snake_case`, zodat alles past bij de gegenereerde code.
Juist: B
Feedback A: Code met twee soorten namen is moeilijker te lezen en aan te passen (zie 3.4).
Feedback B: Juist. De nieuwe code past zich aan het project aan, niet omgekeerd (zie 3.4).
Feedback C: Een apart bestand verbergt het probleem, maar lost het niet op (zie 3.4).
Feedback D: De afspraken van het project bepalen de stijl, niet de output van een model (zie 3.4).

Sectie: 3.4
Type: meerkeuze
Vraag: Een agent voegt een boom toe aan je scène, en de boom ziet er goed uit. In de code heet de function maak_boom, en ze staat in een nieuw bestand boom.js. De afspraken zeggen: Engelse namen in camelCase, en alle code in index.html. Wat doe je? Kies één antwoord.
Opties:
  A. Niets: de boom ziet er goed uit, dus de code is in orde.
  B. Je stuurt een vervolgprompt die zegt welke afspraken niet gevolgd zijn, en waar in de code.
  C. Je past de afspraken aan, zodat ze passen bij de nieuwe code.
  D. Je verwijdert de boom en vraagt dezelfde prompt opnieuw.
Juist: B
Feedback A: Werkende code past niet vanzelf in je project. Controleer naamgeving, plaats, wat er al is en afspraken (zie 3.4).
Feedback B: Juist. De nieuwe code past zich aan het project aan. Je zegt precies wat niet klopt, en waar (zie 3.4).
Feedback C: Een afspraak pas je aan omdat jij iets anders wil, niet omdat de agent ze niet volgde (zie 3.4).
Feedback D: Dezelfde prompt geeft geen garantie op een beter resultaat. Stuur gericht bij (zie 2.7).

Sectie: 3.4
Type: categoriseren
Vraag: Bij welk controlepunt uit 3.4 hoort elk probleem?
Indeling:
  De code gebruikt `get_total` in een project met camelCase. → naamgeving
  Het nieuwe bestand staat in de hoofdmap, terwijl alle andere code in de map `src` staat. → plaats
  De code zet een kleur midden in een function, terwijl alle kleuren bovenaan bij de instellingen staan. → wat er al is
  De code laadt een afbeelding, terwijl het instructiebestand zegt dat het project geen bestanden laadt. → afspraken
Feedback: Elk punt gaat over hoe goed nieuwe code past bij wat er al is (zie 3.4).

Sectie: 3.4
Type: meerkeuze
Vraag: In elk nieuw gesprek moet je opnieuw zeggen dat je project Engelse namen gebruikt en dat alle code in index.html blijft. Wat is de beste oplossing? Kies één antwoord.
Opties:
  A. De afspraken in een instructiebestand zetten, zoals `AGENTS.md`.
  B. Altijd in hetzelfde gesprek blijven werken.
  C. De afspraken weglaten: de agent ziet ze zelf wel in de code.
  D. De gegenereerde code telkens achteraf aanpassen.
Juist: A
Feedback A: Juist. De agent harness leest het instructiebestand bij elk nieuw gesprek (zie 2.4).
Feedback B: Een lang gesprek vult de context, en oude informatie valt weg (zie 1.4).
Feedback C: Soms wel, maar niet altijd. Wat je niet zegt, beslist het model (zie 2.1).
Feedback D: Dat werkt, maar het kost elke keer tijd. Wat je vooraf zegt, moet je achteraf niet aanpassen (zie 3.4).

Sectie: 3.4
Type: koppelen
Vraag: Een webpagina is verdeeld over drie bestanden. Koppel elk bestand aan zijn taak.
Paren:
  index.html → de structuur van de pagina
  style.css → de opmaak
  main.js → het gedrag
Feedback: Elk bestand heeft één taak. Dat principe heet separation of concerns (zie 3.4).

Sectie: 3.4
Type: meerkeuze
Vraag: Een agent verdeelde je project over index.html, style.css en main.js. Open je index.html met een dubbelklik, dan blijft het scherm leeg. In de console staat een foutmelding over CORS. Wat is er aan de hand? Kies één antwoord.
Opties:
  A. De agent maakte een fout in main.js.
  B. Je browser is te oud voor JavaScript in een apart bestand.
  C. Een browser laadt main.js niet rechtstreeks van je schijf. Je bekijkt de pagina via een lokale server.
  D. Een project mag nooit uit meer dan één bestand bestaan.
Juist: C
Feedback A: De code kan helemaal juist zijn. De browser weigert het bestand te laden van je schijf (zie 3.4).
Feedback B: Elke moderne browser doet dit, om veiligheidsredenen (zie 3.4).
Feedback C: Juist. Dat is de prijs van splitsen: de pagina moet van een server komen (zie 3.4).
Feedback D: Meerdere bestanden met elk één taak is net de gewone manier van werken (zie 3.4).
```

## 3.5 Typische tekortkomingen van gegenereerde code

Een model voorspelt code op basis van patronen (zie [1.2](./module-1.md#1_2)). Het weet niet of die code klopt voor jouw situatie. Deze tekortkomingen komen vaak terug, en je moet ze zelf opsporen:

- Meer dan je vroeg. Je krijgt extra onderdelen (zie [1.5](./module-1.md#1_5)), of een ingewikkelde oplossing voor iets wat in vijf regels kan. Soms is de code ook trager dan nodig, bijvoorbeeld door een loop te veel.
- Logicafouten. Dat is een fout in wat de code doet: een verkeerde operator, een fout in een condition of een loop die één keer te veel loopt. De code voert uit, maar het resultaat klopt niet.
- Alleen de happy path. Ongeldige input en foutsituaties slaat een model vaak over (zie [2.6](./module-2.md#2_6)).
- Aannames uit de training data. Het grootste deel van de training data is Engelstalig en Amerikaans. Datumnotaties, decimaaltekens, btw en postcodes kloppen daardoor niet altijd voor België.
- Code voor een oude versie van een library. Een model kent een library zoals ze was tot zijn knowledge cutoff (zie [1.2](./module-1.md#1_2)).

Hoe ongemerkt zo'n aanname binnenkomt, zie je hier:

```js
const date = new Date("03/04/2026");
console.log(date.getMonth() + 1);
```

```output
3
```

Voor een Belgische gebruiker is 03/04/2026 de derde april, dus maand 4. JavaScript leest deze notatie in Node.js als maand/dag/jaar en geeft maand 3. De code crasht niet, en net daarom valt de fout niet op.

Bij een oude versie van een library krijg je meestal wel een foutmelding:

```js
const geometry = new THREE.Geometry();
```

```output
TypeError: THREE.Geometry is not a constructor
```

Deze regel werkte in oude versies van three.js. In nieuwere versies bestaat `Geometry` niet meer. Zeg daarom welke versie van een library je gebruikt, in je prompt of in je instructiebestand. In het project uit [3.1](#3_1) staat de versie in `AGENTS.md`. Krijg je toch zo'n foutmelding, geef ze dan mee in je vervolgprompt (zie [3.3](#3_3)).

Al deze tekortkomingen kan je vinden, maar alleen als je de output kritisch leest en test. Wie alleen kijkt of de code uitvoert, mist elke fout die geen foutmelding geeft.

Dit betekent voor jou: "werkt het?" is de eerste vraag, niet de laatste. De kritische beoordeling is jouw werk als developer (zie [1.6](./module-1.md#1_6)).

### Test jezelf 3.5 – Typische tekortkomingen {#test-jezelf-3-5-typische-tekortkomingen}

```text
Sectie: 3.5
Type: meerkeuze
Vraag: Een gegenereerde function werkt correct, maar gebruikt twee geneste loops waar één loop volstaat. Wat is het probleem? Kies één antwoord.
Opties:
  A. De function bevat een syntaxfout.
  B. Er is geen probleem: werkende code is goede code.
  C. De function geeft voor grote input een ander resultaat.
  D. De code is trager dan nodig, en dat merk je bij grote hoeveelheden data.
Juist: D
Feedback A: De function werkt, dus er is geen syntaxfout (zie 3.5).
Feedback B: Werkende code is niet per se goede code (zie 3.5).
Feedback C: Het resultaat blijft hetzelfde. Alleen de snelheid lijdt eronder (zie 3.5).
Feedback D: Juist. Een loop te veel is een typische tekortkoming van gegenereerde code (zie 3.5).

Sectie: 3.5
Type: meerkeuze
Vraag: Wat is het probleem met deze code in een Belgische toepassing? Kies één antwoord.
Code:
  const date = new Date("03/04/2026");
  console.log(date.getMonth() + 1);
Opties:
  A. De code crasht, omdat de datum ongeldig is.
  B. JavaScript leest de datum als maand/dag/jaar, terwijl een Belgische gebruiker dag/maand/jaar bedoelt.
  C. `getMonth()` begint te tellen bij 1, dus de `+ 1` is te veel.
  D. Er is geen probleem: de code toont 4, de maand april.
Juist: B
Feedback A: De code crasht niet. Ze geeft een fout resultaat, en daarom valt het probleem niet op (zie 3.5).
Feedback B: Juist. De Amerikaanse notatie is de standaard. Dat is een aanname uit de training data (zie 3.5).
Feedback C: `getMonth()` begint bij 0. De `+ 1` is dus nodig (zie 3.5).
Feedback D: De code toont 3, de maand maart (zie 3.5).

Sectie: 3.5
Type: meerkeuze
Vraag: Welke tekortkoming in gegenereerde code is het gevaarlijkst? Kies één antwoord.
Opties:
  A. Syntaxfouten, omdat de code dan meteen crasht.
  B. Slechte namen, omdat ze de code moeilijker leesbaar maken.
  C. Logicafouten, omdat ze vaak pas opvallen bij specifieke input of edge cases.
  D. Ontbrekende comments, omdat de code dan moeilijker te begrijpen is.
Juist: C
Feedback A: Een crash zie je meteen. Dat maakt syntaxfouten net minder gevaarlijk (zie 3.5).
Feedback B: Slechte namen zijn vervelend, maar je ziet ze bij het lezen (zie 3.5).
Feedback C: Juist. Een logicafout geeft een fout resultaat zonder foutmelding (zie 3.5).
Feedback D: Ontbrekende comments zijn vervelend, maar veranderen niets aan de werking (zie 3.5).

Sectie: 3.5
Type: meerkeuze
Vraag: Een agent schrijft code met een library. Bij het uitvoeren krijg je de melding "THREE.Geometry is not a constructor". Wat is de meest waarschijnlijke verklaring? Kies één antwoord.
Opties:
  A. Je computer is te traag voor deze library.
  B. Het model schreef code voor een oudere versie van de library dan de versie die jij gebruikt.
  C. De library is niet geschikt voor JavaScript.
  D. De foutmelding is onbelangrijk: de code werkt toch.
Juist: B
Feedback A: De melding gaat over iets wat niet bestaat, niet over snelheid (zie 3.5).
Feedback B: Juist. Een model kent een library zoals ze was tot zijn knowledge cutoff. Zeg welke versie je gebruikt (zie 3.5).
Feedback C: three.js is een JavaScript-library. Het probleem is de versie (zie 3.5).
Feedback D: Bij deze foutmelding stopt de code. Geef de melding mee in je vervolgprompt (zie 3.3).

Sectie: 3.5
Type: koppelen
Vraag: Koppel elke tekortkoming aan het voorbeeld dat erbij past.
Paren:
  Meer dan je vroeg → Je vraagt één voorwerp in een scène en krijgt ook muziek en een menu.
  Logicafout → Een loop loopt één keer te veel, en het resultaat is fout.
  Alleen de happy path → De function werkt voor een gewone lijst, maar niet voor een lege lijst.
  Aanname uit de training data → Een datum wordt gelezen als maand/dag/jaar.
Feedback: Geen van deze fouten geeft altijd een foutmelding. Je vindt ze alleen als je de code kritisch leest en test (zie 3.5).
```

## 3.6 Configuratie en geheimen

Een project bestaat niet alleen uit code. Er zijn ook bestanden die instellen hoe je project werkt: welke libraries het gebruikt, met welke database het verbindt en welke bestanden je niet deelt. Dat heet **configuratie**. Een agent genereert zulke bestanden snel, ook voor tools die je nog niet goed kent.

Configuratie is wel geen onschuldige code. Een fout in een instelling is moeilijk op te sporen en duikt vaak pas laat op. Er is ook een groter risico: geheimen die in je code belanden. Een geheim is bijvoorbeeld een wachtwoord of een **API key**: een soort wachtwoord waarmee je programma zich aanmeldt bij een dienst. Zo ziet gegenereerde configuratie er vaak uit:

```js
// config.js
export const config = {
  databaseUrl: "postgres://admin:S3cret@localhost:5432/shop",
};
```

Het wachtwoord van de database staat letterlijk in de code. Dat wordt een probleem zodra je de code deelt. Om te begrijpen waarom, moet je weten hoe developers code bewaren en delen.

### Git in het kort

**Git** is de bekendste software voor versiebeheer (zie [3.1](#3_1)). Vier woorden heb je nodig:

- Een **repository** is een projectmap waarvan Git de geschiedenis bijhoudt.
- Een **commit** is één bewaarde versie van je project in die geschiedenis.
- **GitHub** is een website waar je een repository online bewaart en deelt. Een repository is daar public (iedereen kan ze zien) of private (alleen jij, en wie je uitnodigt).
- De `.gitignore` is een bestand in je repository met een lijst van bestanden en mappen die Git overslaat. Wat in die lijst staat, komt niet in een commit.

### Een geheim in Git is gelekt

Git bewaart elke commit. Zit `config.js` met het wachtwoord in een commit, dan staat het wachtwoord in de geschiedenis van je repository, ook als je het later uit de code verwijdert. Is de repository public, dan kan iedereen het lezen.

Dat is een bekende beginnersfout: snel code laten genereren, alles online zetten en er niet naar kijken. Een geheim dat ooit gedeeld werd, beschouw je als gelekt. Je vervangt het door een nieuw.

### Environment variables en .gitignore

Gebruik daarom een **environment variable** (omgevingsvariabele): een waarde die je programma uit de omgeving leest, niet uit de code.

```js
// config.js
export const config = {
  databaseUrl: process.env.DATABASE_URL,
};
```

De waarde zelf staat dan in een `.env`-bestand. Dat bestand zet je in je `.gitignore`, zodat Git het overslaat:

```text
.env
node_modules/
```

In `.gitignore` zet je alles wat niet in versiebeheer thuishoort:

- geheimen, zoals het `.env`-bestand;
- wat een computer zelf opnieuw kan maken, zoals gedownloade libraries (de map `node_modules`) en gebouwde bestanden;
- bestanden die alleen voor jouw computer gelden, zoals de instellingen van je editor.

Zulke bestanden maken een project groot en traag om te delen, en ze zijn op elke computer anders. Maak je `.gitignore` voor je iets deelt: een bestand dat al in Git staat, blijft in de geschiedenis.

Controleer bij elke gegenereerde configuratie:

- Staan er geen wachtwoorden, API keys of andere geheimen letterlijk in de bestanden?
- Staat `.env` in de `.gitignore`, voor je iets deelt?
- Begrijp je wat elke instelling doet? Vraag uitleg over wat je niet kent (zie [3.2](#3_2)).

Zet ook zelf nooit een echt wachtwoord of een echte API key in een prompt. Alles wat in je prompt staat, wordt naar het model gestuurd.

::: warning
**Let op:** een gegenereerd configuratiebestand is een startpunt voor je controle. Deel het nooit ongelezen.
:::

### Test jezelf 3.6 – Configuratie en geheimen {#test-jezelf-3-3-configuratie-en-setup-genereren}

```text
Sectie: 3.6
Type: meerkeuze
Vraag: Je liet een configuratie met een `.env`-bestand genereren voor een nieuw project. Wat controleer je eerst? Kies één antwoord.
Opties:
  A. Of het bestand de juiste naam heeft.
  B. Of de variables alfabetisch gesorteerd zijn.
  C. Of het bestand werkt op alle besturingssystemen.
  D. Of er geen echte wachtwoorden of API keys in je code staan, en of `.env` in de `.gitignore` staat.
Juist: D
Feedback A: Een verkeerde naam merk je snel. Een gelekt geheim kan je niet meer terugdraaien (zie 3.6).
Feedback B: De volgorde maakt niet uit voor de werking of de veiligheid (zie 3.6).
Feedback C: Dat is nuttig, maar een gelekt geheim is een groter risico (zie 3.6).
Feedback D: Juist. Een geheim in Git blijft in de geschiedenis staan, ook als je het later verwijdert (zie 3.6).

Sectie: 3.6
Type: meerkeuze
Vraag: Welk risico speelt vooral bij gegenereerde configuratie, en minder bij gewone functions? Kies één antwoord.
Opties:
  A. De code kan syntaxfouten bevatten.
  B. Geheimen zoals wachtwoorden of API keys kunnen in de code belanden.
  C. De code kan moeilijk leesbaar zijn.
  D. Dezelfde prompt kan andere output geven.
Juist: B
Feedback A: Syntaxfouten kunnen in elke code zitten, en je merkt ze meestal meteen (zie 3.6).
Feedback B: Juist. Configuratie bevat de verbinding met databases en andere diensten, en dus vaak geheimen (zie 3.6).
Feedback C: Dat geldt voor alle gegenereerde code (zie 3.6).
Feedback D: Dat geldt voor alle output van een model, niet specifiek voor configuratie (zie 3.6).

Sectie: 3.6
Type: meerkeuze
Vraag: Welke regel hoort in de `.gitignore` om het geheim uit het voorbeeld van 3.6 buiten Git te houden? Kies één antwoord.
Opties:
  A. config.js
  B. .env
  C. index.html
  D. process.env
Juist: B
Feedback A: `config.js` bevat na de aanpassing geen geheim meer, en de rest van het project heeft het bestand nodig (zie 3.6).
Feedback B: Juist. De echte waarde staat in `.env`, en dat bestand blijft buiten Git (zie 3.6).
Feedback C: `index.html` bevat geen geheim. Het is gewone code van je project (zie 3.6).
Feedback D: `process.env` is geen bestand, maar de manier waarop je programma environment variables leest (zie 3.6).

Sectie: 3.6
Type: meerkeuze
Vraag: Je code krijgt geen verbinding met een dienst. Je wil de agent om hulp vragen. Wat doe je met je echte API key? Kies één antwoord.
Opties:
  A. Je plakt hem in de prompt, zodat de agent alles kan testen.
  B. Je zet hem letterlijk in de code, zodat de agent hem daar vindt.
  C. Je zet hem niet in de prompt. Alles wat in je prompt staat, wordt naar het model gestuurd.
  D. Je stuurt hem in een apart gesprek.
Juist: C
Feedback A: Dan heb je je geheim gedeeld. Beschouw het als gelekt en vervang het (zie 3.6).
Feedback B: Een geheim hoort niet letterlijk in de code, maar in een environment variable (zie 3.6).
Feedback C: Juist. Beschrijf het probleem en geef de foutmelding mee, zonder het geheim zelf (zie 3.6).
Feedback D: Ook in een apart gesprek wordt je prompt naar het model gestuurd (zie 3.6).

Sectie: 3.6
Type: meerkeuze
Vraag: Je deelde per ongeluk een bestand met een echte API key via Git. Je verwijdert de key uit het bestand en deelt de nieuwe versie. Is het probleem opgelost? Kies één antwoord.
Opties:
  A. Ja: de key staat niet meer in de code.
  B. Ja, als je het bestand daarna ook in de `.gitignore` zet.
  C. Nee: de key staat nog in de geschiedenis. Je moet de key vervangen door een nieuwe.
  D. Nee: je moet het hele project verwijderen en opnieuw schrijven.
Juist: C
Feedback A: De key staat nog in de vorige versie, en Git bewaart elke versie (zie 3.6).
Feedback B: `.gitignore` verandert niets aan wat al in de geschiedenis staat (zie 3.6).
Feedback C: Juist. Een geheim dat ooit gedeeld werd, beschouw je als gelekt (zie 3.6).
Feedback D: Dat is niet nodig. Vervang de key, zodat de oude waardeloos is (zie 3.6).

Sectie: 3.6
Type: categoriseren
Vraag: Wat hoort in de `.gitignore`, en wat hoort gewoon in Git?
Indeling:
  Het bestand `.env` met een wachtwoord → in de .gitignore
  De map `node_modules` met gedownloade libraries → in de .gitignore
  De instellingen van je eigen editor → in de .gitignore
  De code van je project, zoals `index.html` → gewoon in Git
  Het instructiebestand `AGENTS.md` → gewoon in Git
Feedback: In de `.gitignore` staan geheimen, wat een computer zelf opnieuw kan maken en wat alleen voor jouw computer geldt. De rest hoort in Git (zie 3.6).
```

## Samenvatting

Nieuwe termen:

- prototype: een eerste werkende versie om een idee te testen of te tonen.
- versiebeheer: software die elke versie van je bestanden bewaart, zoals Git.
- repository: een projectmap waarvan Git de geschiedenis bijhoudt.
- commit: één bewaarde versie van je project in de geschiedenis van Git.
- feedbackpunt: één klein en concreet punt dat je wil verbeteren aan een resultaat.
- console: het venster in je browser dat de foutmeldingen van je code toont.
- separation of concerns: elk deel van je project heeft één taak, in een eigen bestand.
- server: een programma dat bestanden doorgeeft aan je browser.
- configuratie: bestanden die instellen hoe je project werkt.
- API key: een soort wachtwoord waarmee je programma zich aanmeldt bij een dienst.
- environment variable: een waarde die je programma uit de omgeving leest, niet uit de code.

Belangrijkste regels:

- Denk eerst na, en laat dan een eerste versie genereren met één precieze prompt.
- Zorg dat je altijd terug kan. Bewaar je versie voor je verder bouwt: in een echt project met versiebeheer, in deze module met een kopie van je map.
- Vraag uitleg over wat je niet begrijpt, en test die uitleg: voorspel, verander een waarde en kijk.
- Verbeter met feedbackpunten: één punt per prompt, en controleer na elke stap.
- Geef bij een fout mee wat je ziet. Plak de melding uit de console in je prompt, en vraag uitleg of een oplossing.
- Controleer of gegenereerde code past in je project: naamgeving, plaats, wat er al is en afspraken.
- Verdeel een groter project over bestanden met elk één taak. Pas eerst de afspraak in je instructiebestand aan, en vraag dan de wijziging.
- Lees en test gegenereerde code kritisch. Een fout zonder foutmelding vind je alleen zo.
- Zet geen geheimen in code of in een prompt. Gebruik environment variables en zet `.env` in je `.gitignore`.
- In `.gitignore` staat alles wat niet in versiebeheer thuishoort: geheimen, wat een computer zelf opnieuw kan maken en wat alleen voor jouw computer geldt.

## Veelgemaakte fouten

- Verder prompten zonder je eerste versie te bewaren. Loopt een stap mis, dan kan je niet meer terug naar iets wat werkte.
- Kopieën van je map als vaste werkwijze gebruiken. Voor een oefening werkt dat, maar in een echt project gebruik je versiebeheer.
- Een uitleg van het model aannemen zonder ze te testen. Een fout antwoord klinkt even overtuigend als een juist antwoord.
- Drie wijzigingen in één prompt vragen. Werkt je code daarna niet meer, dan weet je niet welke wijziging de oorzaak is.
- "Het werkt niet" sturen zonder te zeggen wat je ziet. Het model moet dan raden wat er mis is.
- Gegenereerde code overnemen die niet past in je project. `maak_boom` in een eigen bestand past niet in een project met Engelse namen en alle code in `index.html`.
- Alleen controleren of de code uitvoert. `new Date("03/04/2026")` voert perfect uit en geeft toch de verkeerde maand.
- Een gegenereerd configuratiebestand met een wachtwoord erin delen. Het wachtwoord blijft in de geschiedenis van Git staan, ook na verwijderen.

::: oefening
[Oefeningen module 3](./module-3-oefeningen.md)
:::
