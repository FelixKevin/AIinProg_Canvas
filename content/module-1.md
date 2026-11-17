---
module: 1
order: 1
moduleTitle: "1: Wat AI is (en vooral wat niet)"
published: true
---

# Module 1: Wat AI is (en vooral wat niet)

Iedereen gebruikt AI, maar weinig mensen weten wat er echt gebeurt als ze een vraag typen. In deze module leer je hoe AI werkt: wat een model is, hoe een large language model tekst en code maakt, en hoe een tool zoals GitHub Copilot daar een werkende assistent van maakt. Met die basis begrijp je waarom AI soms fout zit, en wat jij moet doen om dat op te vangen.

### Leerdoelen

Na deze module kan je:

- uitleggen wat AI, machine learning en een model zijn, en waarom elk model een voorspellingsmachine is;
- uitleggen hoe een large language model werkt met tokens en kansen, en waarom de output daardoor niet vanzelf correct is;
- het verschil uitleggen tussen een model en een agent harness, zoals GitHub Copilot;
- beschrijven wat een model op een bepaald moment weet, en hoe jij de context beheert;
- de belangrijkste beperkingen van AI herkennen in een concreet voorbeeld;
- voor een programmeertaak beslissen of AI geschikt is, en uitleggen waarom jij verantwoordelijk blijft;
- AI-gegenereerde code controleren met de vijf stappen van quality control.

## 1.1 Wat is AI?

Voor veel mensen is AI hetzelfde als ChatGPT. Maar AI is veel breder. Je gebruikt het elke dag, vaak zonder het te merken:

- de spamfilter van je mailbox;
- de series die Netflix je aanraadt;
- je gsm die ontgrendelt als hij je gezicht ziet;
- de reistijd in Google Maps;
- de ondertitels die automatisch verschijnen onder een video.

**Artificial intelligence** (AI, artificiële intelligentie) is een verzamelnaam. Het gaat om computersystemen die taken doen waarvoor je normaal menselijke intelligentie nodig hebt: een foto herkennen, een tekst schrijven, een beslissing nemen.

### Regels schrijven of laten leren

Stel dat je een spamfilter wil maken. Als programmeur schrijf je dan regels:

```js
if (subject.includes("GRATIS") || subject.includes("Je hebt gewonnen")) {
  markAsSpam(mail);
}
```

Dat werkt even. Maar spammers passen hun teksten aan, en je hebt al snel duizenden regels nodig. Je vergeet er altijd een paar.

**Machine learning** pakt het anders aan. Je schrijft de regels niet zelf. Je geeft de computer heel veel voorbeelden: een miljoen e-mails, en bij elke e-mail het juiste antwoord, spam of geen spam. Dat heet **training data**. Tijdens de **training** zoekt de computer zelf de patronen die spam herkenbaar maken. Het resultaat van die training is een **model**.

| | Gewoon programma | Machine learning |
|---|---|---|
| Jij geeft | de regels | voorbeelden met het juiste antwoord |
| De computer maakt | het antwoord | de regels (het model) |
| Als de situatie verandert | jij past de regels aan | je traint opnieuw met nieuwe voorbeelden |

### Elk model is een voorspellingsmachine

Een model krijgt input en geeft een **prediction** (voorspelling). Bij die voorspelling hoort altijd een kans. De spamfilter zegt niet "dit is spam". Hij zegt "dit is met 97% kans spam".

Een kans van 97% betekent ook: 3% kans dat het fout is. Een model kan dus altijd fout zitten, ook een heel goed model. Tijdens de training past de computer het model zo aan dat de voorspellingen zo vaak mogelijk juist zijn. Maar 100% zeker wordt het nooit.

Elk model is getraind op specifieke data, voor een specifieke taak:

| Model | Input | Output (voorspelling) |
|---|---|---|
| Spamfilter | een e-mail | spam of geen spam |
| Beeldherkenning | een foto | wat er op de foto staat, bijvoorbeeld "kat, 92%" |
| Spraakherkenning | audio | de tekst die iemand uitsprak |
| Aanbevelingen | wat je al bekeek | wat je waarschijnlijk wil bekijken |
| Large language model | tekst | het volgende stukje tekst |

Een spamfilter kan maar één ding. Zo'n model noem je **narrow** (smal): het is goed in één taak. Een large language model kan veel verschillende taken met tekst: vertalen, samenvatten, code schrijven. Het is meer **general** (algemeen). Maar ook dat model blijft in zijn eigen domein: tekst.

### Neural networks

De meeste moderne modellen zijn **neural networks** (neurale netwerken). Ze zijn losjes geïnspireerd op de hersenen: heel veel kleine rekeneenheden die met elkaar verbonden zijn. Elke verbinding heeft een sterkte, een getal dat je een **parameter** noemt. Tijdens de training past de computer die getallen telkens een beetje aan, tot de voorspellingen goed zijn. Grote modellen hebben miljarden parameters.

Je hoeft niet te weten hoe dat rekenwerk precies gaat. Onthoud wel: niemand schreef de regels van zo'n model met de hand. Ze zitten verspreid over miljarden getallen. Daarom kan ook de maker niet precies uitleggen waarom een model een bepaald antwoord geeft.

### Generative AI en multimodal

Modellen die nieuwe inhoud maken, zoals tekst, code of afbeeldingen, heten **generative AI** (generatieve AI). Een large language model is een voorbeeld.

Sommige modellen werken met één soort data, bijvoorbeeld alleen tekst. Andere werken met meerdere soorten: tekst, afbeeldingen en audio. Zo'n model is **multimodal**. Een multimodal model kan bijvoorbeeld een screenshot van een foutmelding lezen en in tekst uitleggen wat er misloopt.

### Een model is geen product

ChatGPT, GitHub Copilot en Gemini zijn **producten**. Achter zo'n product zit niet één AI, maar een systeem: een of meer modellen en extra software errond. Als je ChatGPT gebruikt, werken er bijvoorbeeld samen:

- een taalmodel dat de tekst schrijft;
- een model dat afbeeldingen maakt;
- spraakherkenning, als je inspreekt;
- een zoekfunctie die het web doorzoekt;
- filters die controleren of een vraag of antwoord veilig is.

Je hoeft al die onderdelen niet te kennen. Onthoud wel: "de AI" is meestal een samenwerking van verschillende modellen en software. In deze cursus gaat het vooral over het onderdeel dat code schrijft: het large language model.

### Test jezelf 1.1 – Wat is AI? {#test-jezelf-1-1-wat-is-ai}

```text
Sectie: 1.1
Type: meerkeuze
Vraag: Wat is het verschil tussen een gewoon programma en machine learning? Kies één antwoord.
Opties:
  A. Machine learning gebruikt geen code.
  B. Bij een gewoon programma schrijf jij de regels. Bij machine learning leert de computer de patronen uit voorbeelden.
  C. Machine learning geeft altijd het juiste antwoord, omdat het zoveel data gebruikt.
  D. Een gewoon programma kan geen tekst verwerken, machine learning wel.
Juist: B
Feedback A: Ook machine learning gebruikt code. Het verschil is wie de regels maakt (zie 1.1).
Feedback B: Juist. Je geeft voorbeelden met het juiste antwoord, en de training maakt daar een model van (zie 1.1).
Feedback C: Een model geeft een voorspelling met een kans. Het kan altijd fout zitten (zie 1.1).
Feedback D: Een gewoon programma kan perfect tekst verwerken. Het verschil is of jij de regels schrijft of de computer ze leert (zie 1.1).

Sectie: 1.1
Type: koppelen
Vraag: Koppel elk model aan de voorspelling die het maakt.
Paren:
  Spamfilter → een e-mail is spam of geen spam
  Spraakherkenning → de tekst die iemand uitsprak
  Beeldherkenning → wat er op een foto staat
  Large language model → het volgende stukje tekst
Feedback: Elk model is getraind op specifieke data voor een specifieke taak. Maar ze doen allemaal hetzelfde: een voorspelling maken op basis van input (zie 1.1).

Sectie: 1.1
Type: meerkeuze
Vraag: Een medestudent zegt: "ChatGPT is één AI." Wat klopt het best? Kies één antwoord.
Opties:
  A. Dat klopt: ChatGPT is één model dat alles doet.
  B. Dat klopt niet: ChatGPT is een product. Er werken een of meer modellen samen met extra software, zoals een zoekfunctie.
  C. Dat klopt niet: ChatGPT is een zoekmachine, geen AI.
  D. Dat klopt niet: ChatGPT is een database met kant-en-klare antwoorden.
Juist: B
Feedback A: Achter ChatGPT zit een systeem: een taalmodel, maar bijvoorbeeld ook een model voor afbeeldingen en een zoekfunctie (zie 1.1).
Feedback B: Juist. Een product is een systeem van modellen en software (zie 1.1).
Feedback C: ChatGPT kan het web doorzoeken, maar de antwoorden maakt een taalmodel (zie 1.1).
Feedback D: Een model zoekt geen kant-en-klare antwoorden op. Het maakt een voorspelling (zie 1.1).

Sectie: 1.1
Type: juist/fout
Vraag: Een goed getraind model geeft een voorspelling die altijd juist is.
Juist: fout
Feedback: Elke voorspelling heeft een kans. 97% kans op spam betekent ook 3% kans dat het geen spam is. Ook een heel goed model kan fout zitten (zie 1.1).
```

## 1.2 Hoe een LLM werkt

Een **large language model** of **LLM** (groot taalmodel) is een model dat getraind is om het volgende stukje tekst te voorspellen. "Large" slaat op twee dingen: het model heeft miljarden parameters, en het is getraind op enorme hoeveelheden tekst. Denk aan websites, boeken, documentatie en miljarden regels code van GitHub.

Bekende families van LLM's zijn GPT van OpenAI, Claude van Anthropic, Gemini van Google en Llama van Meta. Ze werken allemaal volgens hetzelfde principe.

### Tokens

Een LLM leest geen letters en ook geen volledige woorden. Het leest **tokens**. Een token is een klein stukje tekst: een kort woord, een deel van een woord of een leesteken. Een zin wordt bijvoorbeeld zo opgeknipt:

```text
Ik| program|meer| graag| in| Java|Script|.
```

Elk model knipt een beetje anders. Als vuistregel: een Engels woord is gemiddeld iets meer dan één token. Nederlands en code gebruiken vaak meer tokens per woord.

Waarom is dat belangrijk voor jou?

- **Kosten**: AI-bedrijven rekenen af per token, voor je vraag en voor het antwoord. Hoe langer het gesprek, hoe duurder.
- **Limiet**: een model kan maar een beperkt aantal tokens tegelijk verwerken. Daarover gaat [1.4](#1_4).
- **Vreemde fouten**: een model ziet tokens, geen letters. Daarom ging een simpele vraag zoals "Hoeveel keer staat de letter r in strawberry?" lang fout. Het model ziet geen tien losse letters, maar een paar tokens.

### Het volgende token voorspellen

Een LLM schrijft een antwoord token per token. Bij elke stap kijkt het naar alle tekst tot nu toe en berekent het voor elk mogelijk token hoe groot de kans is dat het volgt. Stel dat de tekst tot nu toe dit is:

```js
for (let i = 0; i <
```

Het model berekent dan bijvoorbeeld deze kansen (verzonnen cijfers, ter illustratie):

```text
 items    38%
 arr      21%
 n        12%
 10        6%
 ...
```

Het model kiest een token, plakt het achter de tekst en begint opnieuw. Dat herhaalt het honderden of duizenden keren, tot het antwoord klaar is.

Het model kiest niet altijd het token met de grootste kans. Er zit bewust een beetje toeval in de keuze. Met een instelling die **temperature** heet, kan de maker van een tool bepalen hoeveel toeval. Daarom krijg je op dezelfde vraag niet altijd hetzelfde antwoord.

Sommige modellen schrijven eerst tussenstappen voor ze antwoorden, zoals jij een berekening op kladpapier maakt. Zo'n model heet een **reasoning model**. Het "denken" is ook gewoon tekst die het model voorspelt. Het helpt bij moeilijke problemen, maar het kost meer tokens en meer tijd.

### Hoe een LLM getraind wordt

Een LLM wordt in fases getraind:

1. **Pretraining**: het model leert het volgende token voorspellen op een enorme hoeveelheid tekst. Daarna kent het veel taal, feiten en code. Maar het doet alleen tekst aanvullen. Het beantwoordt nog geen vragen.
2. **Fine-tuning**: het model traint verder op voorbeelden van goede gesprekken. Mensen beoordelen ook antwoorden van het model: dit antwoord is beter dan dat. Zo leert het model zich gedragen als een assistent: vragen beantwoorden, instructies volgen, beleefd blijven.

Die tweede fase heeft een bijwerking. Mensen geven vaker een goede score aan antwoorden die hen gelijk geven. Het model leert dus ook om te zeggen wat je wil horen. Dat zie je terug in [1.5](#1_5).

Na de training verandert een model niet meer. Wat het weet, stopt op de datum waarop de training stopte. Die datum heet de **knowledge cutoff**. Wat daarna gebeurde, kent het model niet. Kwam er een nieuwe versie van je framework uit na die datum, dan schrijft het model code voor de oude versie. Tenzij het die informatie zoekt, of jij ze meegeeft (zie [1.4](#1_4)).

### Begrijpt een LLM wat het schrijft?

Een LLM voorspelt het volgende token. Dat klinkt eenvoudig, maar om dat goed te doen, moet het model veel leren. Het kijkt bij elke stap naar de volledige tekst, en het is getraind op een enorme hoeveelheid data. Om goed te voorspellen hoe code verdergaat, moet het model leren hoe code werkt: welke variable waar gebruikt wordt, wat een loop doet, welke foutmelding bij welke fout hoort. Zulke geleerde patronen zijn **abstractions** (abstracties): algemene ideeën die het model ook toepast op situaties die het nooit eerder zag. Daarom kan een LLM een probleem oplossen dat nergens letterlijk op het internet staat.

Of een model dan echt "begrijpt", daarover zijn experts het niet eens. Wat wel vaststaat:

- Een LLM is geen database. Het zoekt geen antwoorden op, het maakt ze.
- Een LLM is geen rekenmachine. Het volgt geen vaste regels.
- Elk antwoord is een voorspelling, met een kans om fout te zijn.

### Een LLM is geen rekenmachine

Een rekenmachine volgt vaste regels. 1 + 1 geeft altijd 2, elke keer, zonder twijfel. Dezelfde input geeft altijd dezelfde output. Dat noem je **deterministic** (deterministisch).

Een LLM voorspelt het antwoord. Bij 2 + 2 is die voorspelling zo goed als altijd juist: het model zag die som miljoenen keren. Maar bij 48 271 × 9 314 kan het niet terugvallen op iets wat het eerder zag. Het moet de berekening stap voor stap opbouwen, zoals jij op papier. En net als jij kan het zich daarbij vergissen. (Het juiste antwoord is 449 596 094.)

Mensen werken eigenlijk ook zo. Je kent de regels van vermenigvuldigen en je past ze toe, maar je bent geen rekenmachine en je maakt soms rekenfouten. De vergelijking met je hersenen helpt om het gedrag van een LLM te begrijpen. Maar een LLM is niet hetzelfde als een brein. Het leert anders, het ervaart niets en het heeft alleen tekst.

Hoe rekenen AI-tools dan toch correct? Het model schrijft een stukje code dat de berekening maakt, en laat een programma die code uitvoeren. Dat programma rekent wel exact. Dat is precies wat een agent harness doet (zie [1.3](#1_3)).

### Wat betekent dat voor jou?

Een model dat werkt met voorspellingen en kansen, heeft drie gevolgen:

- Waarschijnlijke output is niet hetzelfde als correcte output.
- Twee keer dezelfde vraag kan twee verschillende antwoorden opleveren.
- Het model weet niet of de output past in jouw project.

### Test jezelf 1.2 – Hoe een LLM werkt {#test-jezelf-1-2-hoe-een-llm-werkt}

```text
Sectie: 1.2
Type: meerkeuze
Vraag: Wat is een token bij een LLM? Kies één antwoord.
Opties:
  A. Een wachtwoord dat je nodig hebt om een AI-tool te gebruiken.
  B. Een klein stukje tekst, zoals een kort woord, een deel van een woord of een leesteken.
  C. Eén letter.
  D. Eén volledige zin.
Juist: B
Feedback A: In IT heeft het woord token meerdere betekenissen. Bij een LLM gaat het om een stukje tekst (zie 1.2).
Feedback B: Juist. Een LLM leest en schrijft tekst als tokens (zie 1.2).
Feedback C: Een token is meestal groter dan één letter. Daarom telt een model soms letters fout (zie 1.2).
Feedback D: Een zin bestaat uit veel tokens (zie 1.2).

Sectie: 1.2
Type: meerdere antwoorden
Vraag: Waarom zijn tokens belangrijk voor jou als gebruiker? Kies alle juiste antwoorden.
Opties:
  A. AI-bedrijven rekenen af per token.
  B. Een model kan maar een beperkt aantal tokens tegelijk verwerken.
  C. Hoe meer tokens een antwoord heeft, hoe juister het is.
  D. Een model ziet tokens en geen letters. Daarom maakt het soms vreemde fouten met letters.
Juist: A, B, D
Feedback A: Juist. Je vraag en het antwoord kosten allebei tokens (zie 1.2).
Feedback B: Juist. Die limiet heet het context window (zie 1.4).
Feedback C: Een lang antwoord is niet vanzelf een juist antwoord (zie 1.2).
Feedback D: Juist. Daarom ging de vraag hoeveel r's er in strawberry staan lang fout (zie 1.2).

Sectie: 1.2
Type: meerkeuze
Vraag: Je stelt twee keer exact dezelfde vraag aan een LLM en krijgt twee verschillende antwoorden. Wat is de belangrijkste reden? Kies één antwoord.
Opties:
  A. Het model leerde iets uit je eerste vraag.
  B. Er zit bewust een beetje toeval in de keuze van het volgende token.
  C. Het model zoekt elke keer op een andere website.
  D. Er is iets mis met het model.
Juist: B
Feedback A: Een model leert niet van je gesprek. Na de training verandert het niet meer (zie 1.2).
Feedback B: Juist. Het model kiest niet altijd het token met de grootste kans. Hoeveel toeval er is, regelt de temperature (zie 1.2).
Feedback C: Een LLM zoekt zijn antwoord niet op. Het voorspelt het, token per token (zie 1.2).
Feedback D: Verschillende antwoorden zijn normaal gedrag voor een LLM (zie 1.2).

Sectie: 1.2
Type: ordenen
Vraag: Zet de stappen van het leven van een LLM in de juiste volgorde.
Volgorde:
  Pretraining: het model leert het volgende token voorspellen op enorme hoeveelheden tekst.
  Fine-tuning: het model leert zich gedragen als assistent, onder meer met beoordelingen van mensen.
  De training stopt. Wat daarna gebeurt, kent het model niet.
  Het model wordt gebruikt in een tool, zoals GitHub Copilot.
Feedback: Eerst leert het model taal en code, daarna leert het zich gedragen als assistent. Na de training verandert het niet meer: dat is de knowledge cutoff (zie 1.2).

Sectie: 1.2
Type: meerkeuze
Vraag: Wat is het belangrijkste verschil tussen een rekenmachine en een LLM? Kies één antwoord.
Opties:
  A. Een rekenmachine volgt vaste regels en geeft altijd hetzelfde antwoord. Een LLM voorspelt het antwoord en kan zich vergissen.
  B. Een LLM rekent sneller dan een rekenmachine.
  C. Een rekenmachine kan zich vaker vergissen dan een LLM.
  D. Er is geen verschil: allebei voeren ze dezelfde berekening uit.
Juist: A
Feedback A: Juist. Een rekenmachine is deterministic. Een LLM maakt een voorspelling (zie 1.2).
Feedback B: Snelheid is niet het punt. Het verschil zit in hoe het antwoord tot stand komt (zie 1.2).
Feedback C: Binnen zijn grenzen is een rekenmachine altijd exact. Een LLM niet (zie 1.2).
Feedback D: Een LLM volgt geen vaste rekenregels. Het voorspelt tekst. Daarom laten AI-tools berekeningen vaak door code uitvoeren (zie 1.2).
```

## 1.3 Van model naar tool: de agent harness

Een LLM kan op zichzelf maar één ding: tekst krijgen en tekst teruggeven. Het kan geen bestand openen. Het kan geen code uitvoeren, niet op het internet zoeken en niets op je computer veranderen.

Toch zie je GitHub Copilot bestanden aanpassen en tests uitvoeren. Dat komt door de **agent harness**: de software rond het model die het model mogelijkheden geeft. Vergelijk het met een auto. Het model is de motor: die levert de kracht. Maar een motor alleen rijdt nergens naartoe. De agent harness is de rest van de auto: het stuur, de wielen en de remmen. Pas samen kom je ergens.

Een agent harness doet onder meer dit:

- je vraag naar het model sturen, samen met extra informatie, zoals de bestanden die open staan of een foutmelding;
- het model een lijst van **tools** geven: dingen die het kan laten doen, zoals een bestand lezen, een bestand schrijven, een commando uitvoeren in de terminal of op het web zoeken;
- de tool uitvoeren die het model kiest, en het resultaat teruggeven aan het model;
- een afbeelding doorgeven aan een model dat afbeeldingen kan lezen, zodat het taalmodel verder kan met een beschrijving in tekst.

### De tool loop

Zo werkt een agent harness als je vraagt om een fout op te lossen:

```text
1. Jij:            "Los de test op die faalt in cart.js."
2. Model:          (tekst) "Gebruik tool read_file op cart.js."
3. Agent harness:  leest cart.js en geeft de inhoud aan het model.
4. Model:          (tekst) "Gebruik tool run_command: npm test."
5. Agent harness:  voert npm test uit en geeft de output aan het model.
6. Model:          (tekst) "Gebruik tool write_file: verander regel 42 in ..."
7. Agent harness:  past het bestand aan.
   ... en zo verder, tot het model zegt dat het klaar is.
```

Het model schrijft dus nog altijd alleen tekst. Het vraagt om een tool, en de agent harness voert het echte werk uit. Werkt een model zo zelfstandig in meerdere stappen naar een doel, dan noem je het een **agent**. Daarover gaat [8.5](./module-8.md#8_5).

### Voorbeelden van agent harnesses

In deze cursus gebruik je **GitHub Copilot** in Visual Studio Code. Andere voorbeelden zijn Claude Code van Anthropic, Codex van OpenAI en de editor Cursor. Er bestaan ook open-source agent harnesses die je zelf kan aanpassen. De lijst verandert snel, dus ze is nooit volledig.

Bij veel agent harnesses kies je zelf welk model je gebruikt. Hetzelfde model kan in twee agent harnesses toch andere resultaten geven. De agent harness bepaalt namelijk welke informatie het model krijgt en welke tools het mag gebruiken.

### Een agent harness kan je aanpassen

Een agent harness is geen vast pakket. Je kan het afstemmen op jouw manier van werken. Je kan het bijvoorbeeld een instructiebestand geven met de regels van je project: welke taal, welk framework, welke naamgeving. Zo hoef je die regels niet in elke vraag te herhalen. Hoe dat werkt, leer je in [module 8](./module-8.md).

Leren werken met een agent harness wordt een basisvaardigheid voor elke developer. Een developer die een agent harness goed gebruikt, werkt sneller, levert betere code en verspilt minder tokens. Daarover meer in [1.6](#1_6).

### Test jezelf 1.3 – Van model naar tool: de agent harness {#test-jezelf-1-3-de-harness}

```text
Sectie: 1.3
Type: meerkeuze
Vraag: Wat doet een agent harness? Kies één antwoord.
Opties:
  A. Het traint het model op nieuwe data.
  B. Het is de software rond het model die tools uitvoert, zoals bestanden lezen en commando's uitvoeren.
  C. Het maakt het model slimmer.
  D. Het controleert of de code van het model correct is.
Juist: B
Feedback A: Een agent harness traint niets. Het model verandert niet door een agent harness (zie 1.3).
Feedback B: Juist. Het model vraagt in tekst om een tool, en de agent harness voert die uit (zie 1.3).
Feedback C: Het model blijft hetzelfde. De agent harness geeft het wel meer informatie en meer mogelijkheden (zie 1.3).
Feedback D: Die controle blijft jouw taak (zie 1.7).

Sectie: 1.3
Type: ordenen
Vraag: Zet de stappen van de tool loop in de juiste volgorde.
Volgorde:
  Jij geeft een opdracht.
  Het model vraagt in tekst om een tool te gebruiken.
  De agent harness voert de tool uit.
  De agent harness geeft het resultaat terug aan het model.
  Het model kiest de volgende stap.
Feedback: Het model schrijft alleen tekst. De agent harness voert de tool uit en geeft het resultaat terug. Dat herhaalt zich tot de taak klaar is (zie 1.3).

Sectie: 1.3
Type: juist/fout
Vraag: Een LLM voert zelf commando's uit in je terminal.
Juist: fout
Feedback: Een LLM kan alleen tekst teruggeven. Het vraagt om een commando, en de agent harness voert het uit (zie 1.3).

Sectie: 1.3
Type: meerkeuze
Vraag: Twee studenten gebruiken hetzelfde model, maar in een andere agent harness. Ze krijgen voor dezelfde taak verschillende resultaten. Wat is de beste verklaring? Kies één antwoord.
Opties:
  A. De agent harness bepaalt welke informatie en welke tools het model krijgt.
  B. Eén van de twee agent harnesses gebruikt stiekem een ander model.
  C. Dat is onmogelijk: hetzelfde model geeft altijd hetzelfde resultaat.
  D. De ene student heeft een snellere computer.
Juist: A
Feedback A: Juist. Andere informatie en andere tools geven ander gedrag, ook met hetzelfde model (zie 1.3).
Feedback B: Dat hoeft niet. Ook met exact hetzelfde model geeft een andere agent harness andere resultaten (zie 1.3).
Feedback C: Zelfs in dezelfde agent harness kan hetzelfde model verschillende antwoorden geven, door het toeval in de voorspelling (zie 1.2).
Feedback D: Het model draait meestal niet op je eigen computer. De snelheid van je computer verandert het antwoord niet (zie 1.3).
```

## 1.4 Context: wat weet het model nu?

Dit is misschien de belangrijkste regel van deze module:

::: info
Een model weet op elk moment maar twee dingen: wat het leerde tijdens de training (tot de knowledge cutoff), en wat nu in zijn context staat. Al de rest weet het niet.
:::

### Een model onthoudt niets

Een model heeft geen geheugen. Als je in een gesprek een nieuw bericht stuurt, stuurt de agent harness het **volledige** gesprek opnieuw naar het model: al je vorige berichten, alle antwoorden, de bestanden die het las en de output van de tools. Het model leest alles opnieuw en voorspelt het volgende antwoord.

Het model leert ook niet van jouw gesprek. Morgen weet het niet meer wat jullie vandaag bespraken. Sommige tools hebben een functie die "geheugen" heet. Ook dat is gewoon tekst die de agent harness achter de schermen aan de context toevoegt.

### Het context window

Alle tekst die het model krijgt voor één antwoord, heet de **context**. Daarin zitten onder meer:

- instructies van de agent harness die jij niet ziet;
- instructiebestanden van je project;
- het gesprek tot nu toe;
- de bestanden die het model las;
- de output van tools, zoals het resultaat van `npm test`. Dat is soms honderden regels lang.

Een model kan maar een beperkte hoeveelheid tekst tegelijk verwerken. Die limiet heet het **context window**, en je meet ze in tokens (zie [1.2](#1_2)). Hoe groot dat window is, verschilt per model.

### Een volle context geeft slechtere output

Meer context is meestal beter: het model weet dan meer over je taak. Maar er is een grens. Als de context heel vol raakt, verliest het model details. Een regel die je aan het begin van het gesprek gaf, raakt ondergesneeuwd. Het model haalt dingen door elkaar en maakt meer fouten.

Vergelijk het met een vergadering die al zes uur duurt. Wat er in het eerste uur gezegd is, weet niemand nog precies.

Wat kan je doen?

- **Een nieuw gesprek starten**: de context is dan weer leeg. Dat is een **reset**. Je moet het model wel opnieuw de belangrijke informatie geven.
- **Compacten**: veel agent harnesses kunnen het gesprek samenvatten om plaats te maken. Dat heet **compacting**. Soms gebeurt het automatisch. Een samenvatting verliest wel details.
- **Gericht werken**: geef de bestanden en informatie mee die deze taak nodig heeft, en niet meer.

### Context management

Jij bepaalt grotendeels wat het model weet. Dat beheren heet **context management**, en het is een van de belangrijkste vaardigheden bij het werken met AI. Stel jezelf voor je een antwoord vertrouwt telkens de vraag: **kon het model dit eigenlijk weten?**

Twee voorbeelden:

- Je vraagt "Waarom werkt mijn login niet?" zonder je code mee te geven. Het model kan alleen raden. Het antwoord klinkt zeker, maar het is gebaseerd op aannames.
- Je werkt met een framework waarvan vorige maand een nieuwe versie uitkwam. Die versie is nieuwer dan de knowledge cutoff van het model. Het model schrijft dus code voor de oude versie. Sommige agent harnesses merken dat en zoeken zelf de nieuwe documentatie op. Gebeurt dat niet, dan stuur je het model naar de documentatie, of lees je ze zelf en geef je het belangrijkste mee.

Informatie die in elk gesprek terug moet komen, zoals de regels van je project, zet je in een instructiebestand. Zo reist die informatie automatisch mee met elk nieuw gesprek. Hoe je dat doet en hoe je context kiest in grote projecten, leer je in [8.2](./module-8.md#8_2) en [8.3](./module-8.md#8_3).

### Test jezelf 1.4 – Context: wat weet het model nu? {#test-jezelf-1-4-context}

```text
Sectie: 1.4
Type: meerdere antwoorden
Vraag: Wat weet een model op het moment dat het een antwoord maakt? Kies alle juiste antwoorden.
Opties:
  A. Wat het leerde tijdens de training.
  B. Wat er nu in zijn context staat.
  C. Wat je vorige week in een ander gesprek vertelde.
  D. De nieuwste versie van elke library, ook als die na de training uitkwam.
Juist: A, B
Feedback A: Juist. Dat is de kennis tot de knowledge cutoff (zie 1.4).
Feedback B: Juist. Het gesprek, de bestanden en de output van tools zitten in de context (zie 1.4).
Feedback C: Een model onthoudt niets tussen gesprekken. Elk nieuw gesprek begint met een lege context (zie 1.4).
Feedback D: Wat na de knowledge cutoff gebeurde, kent het model niet, tenzij het in de context staat (zie 1.4).

Sectie: 1.4
Type: meerkeuze
Vraag: Je werkt al twee uur in één lang gesprek in je agent harness. Het model vergeet regels die je in het begin gaf en maakt meer fouten. Wat doe je best? Kies één antwoord.
Opties:
  A. Je herhaalt dezelfde vraag in hoofdletters.
  B. Je start een nieuw gesprek en geeft een korte samenvatting van wat belangrijk is.
  C. Je vraagt het model om beter op te letten.
  D. Je geeft nog meer bestanden mee.
Juist: B
Feedback A: Hoofdletters maken de context niet kleiner. Het probleem is een volle context (zie 1.4).
Feedback B: Juist. Een nieuw gesprek is een reset. Met een korte samenvatting geef je het model alleen wat het nodig heeft (zie 1.4).
Feedback C: Het model kan niet beter opletten op een context die te vol is (zie 1.4).
Feedback D: Meer tekst maakt een volle context nog voller (zie 1.4).

Sectie: 1.4
Type: meerkeuze
Vraag: Je vraagt aan een model: "Waarom werkt mijn login niet?" Je geeft geen code mee. Wat gebeurt er het waarschijnlijkst? Kies één antwoord.
Opties:
  A. Het model zoekt je code zelf op je computer en vindt de fout.
  B. Het model raadt. Het antwoord klinkt zeker, maar is gebaseerd op aannames.
  C. Het model weigert te antwoorden.
  D. Het model vraagt altijd eerst om je code.
Juist: B
Feedback A: Een model ziet alleen wat in zijn context staat. Sommige agent harnesses kunnen bestanden lezen, maar zonder richting weet het niet waar het moet zoeken (zie 1.4).
Feedback B: Juist. Kon het model dit eigenlijk weten? Hier niet (zie 1.4).
Feedback C: Meestal antwoordt het model wel, op basis van wat vaak voorkomt bij loginproblemen (zie 1.4).
Feedback D: Soms vraagt het model om meer informatie, maar vaak raadt het gewoon (zie 1.4).

Sectie: 1.4
Type: juist/fout
Vraag: Een model leert van je gesprek en weet morgen nog wat jullie vandaag bespraken.
Juist: fout
Feedback: Een model onthoudt niets. Ook een functie die "geheugen" heet, is tekst die de agent harness aan de context toevoegt (zie 1.4).
```

## 1.5 Waarom AI-output niet vanzelf klopt

Je weet nu hoe een model werkt. Daaruit volgen een aantal beperkingen. Ken je ze niet, dan maak je vroeg of laat een dure fout.

### Hallucinations

Je vraagt een model welke npm-package je kan gebruiken voor een bepaalde taak. Je krijgt een naam, een installatiecommando en een codevoorbeeld. Je probeert de package te installeren, maar npm vindt ze niet. Ze bestaat niet. Alles zag er geloofwaardig uit, en toch was het verzonnen.

Dit heet een **hallucination** (hallucinatie): output die er correct uitziet, maar verzonnen is. Het model voorspelt wat een waarschijnlijk antwoord is, ook als het het echte antwoord niet kent. Gegenereerde code roept bijvoorbeeld functions aan die niet bestaan, of gebruikt libraries die nooit gemaakt zijn.

Nieuwe modellen hallucineren minder dan oudere, maar het gebeurt nog altijd. Vooral als de context de nodige informatie mist (zie [1.4](#1_4)).

::: warning
**Let op:** soms bestaat een verzonnen package-naam wel. Kwaadwillige mensen registreren namen die AI-modellen vaak verzinnen, met schadelijke code erin. Controleer daarom altijd in de officiële bron of een package bestaat en betrouwbaar is, voor je ze installeert.
:::

### Zeker klinken, ook als het fout is

Een model zegt niet hoe zeker het is. Een fout antwoord klinkt even overtuigend als een juist antwoord. Aan de toon zie je dus niet of je het antwoord kan vertrouwen.

### Sycophancy: de ja-knikker

Door de fine-tuning (zie [1.2](#1_2)) heeft een model de neiging om je gelijk te geven. Dat heet **sycophancy**. Vraag je "Is mijn code goed?", dan krijg je vaak "Ja, ziet er goed uit!". Zeg je "Ik denk dat de bug in deze function zit", dan zoekt het model daar, ook als de bug ergens anders zit.

Wees dus kritisch, juist als het model zegt dat alles werkt. Stel neutrale vragen. Vraag niet "Is dit goed?", maar "Welke problemen zie je in deze code?".

### Het model schrijft wat vaak voorkomt

Een model is getraind op code van miljoenen mensen. Wat vaak voorkomt in die code, schrijft het model ook vaak. Ook als het eigenlijk niet goed is.

Een voorbeeld: in veel tutorials worden geldbedragen opgeslagen als kommagetal. Dat lijkt te werken, tot je dit ziet:

```js
const total = 0.1 + 0.2;
console.log(total);
console.log(total === 0.3);
```

```output
0.30000000000000004
false
```

Een computer bewaart kommagetallen met kleine afrondingsfouten. Voor geld is dat een probleem: je rekent beter in centen, met gehele getallen. Omdat de foute aanpak zo vaak voorkomt in de training data, kan een model ze ook voorstellen. Het kiest wat statistisch waarschijnlijk is, niet wat technisch het best is.

### Scope creep: meer dan je vroeg

Hetzelfde principe werkt ook in de andere richting. Je vraagt iets kleins, en het model voegt toe wat er meestal bij hoort:

- Je vraagt een simpele check voor een e-mailadres. Je krijgt een lange regex die tientallen speciale gevallen probeert op te vangen, omdat het internet vol staat met zulke regexen.
- Je vraagt een navigatiebalk. Je krijgt ook een versie voor kleine schermen, een hamburgermenu dat openschuift, animaties en een extra CSS-bestand.

Elk van die toevoegingen kan nuttig zijn. Maar je vroeg ze niet, en je moet ze allemaal controleren. Dat heet **scope creep**: het werk groeit buiten de **scope** (afbakening) van je taak.

In een groot project is dat gevaarlijk. Een agent die uit zichzelf bestanden aanpast die niets met je taak te maken hebben, kan delen van het systeem breken waar je niet aan dacht.

De oorzaak ligt vaak bij de vraag. Wat je niet zegt, vult het model in met de keuze die het vaakst voorkomt. **Een vage vraag geeft het model ruimte om initiatief te nemen.** Een precieze vraag houdt het model bij je taak. Hoe je zo'n precieze vraag schrijft, leer je in [module 2](./module-2.md). Controleren of het model binnen de scope bleef, blijft altijd jouw werk.

### Niet elk model is hetzelfde

Modellen verschillen sterk. Een fout die het ene model maakt, maakt het andere misschien niet.

- **Frontier models** zijn de nieuwste en sterkste modellen van grote bedrijven, zoals OpenAI, Anthropic en Google. Om de paar maanden komt er een nieuwe versie uit die duidelijk beter is. De beste modellen zijn meestal betalend.
- **Open-weight models** kan je downloaden en op je eigen computer laten draaien. Daarvoor heb je wel een sterke computer nodig, vooral een goede grafische kaart. Ze zijn meestal minder sterk dan frontier models, maar ze halen hun achterstand langzaam in. Een voordeel: je code verlaat je computer niet (zie [7.2](./module-7.md#7_2)). Veel agent harnesses kunnen werken met zo'n lokaal model.

Weet welk model je tool gebruikt. Maar ook het beste model maakt fouten. Een beter model is nooit een reden om minder te controleren.

### Jij bent de operator

Je hoeft niet te wachten tot het model klaar is. Volg wat het doet terwijl het werkt. Gaat het de verkeerde richting uit, stop het dan en stuur bij met een extra bericht: wat het moet doen, en wat niet.

Gaat een model de verkeerde kant op, dan is er meestal een van deze oorzaken:

- je vraag was te vaag, en het model vulde de rest zelf in;
- er ontbrak context, en het model moest raden;
- het model hallucineerde.

De eerste twee oorzaken heb jij in de hand. Duidelijk en precies formuleren is een vaardigheid die je de rest van deze cursus traint.

### Test jezelf 1.5 – Waarom AI-output niet vanzelf klopt {#test-jezelf-1-5-waarom-ai-output-niet-vanzelf-klopt}

```text
Sectie: 1.5
Type: koppelen
Vraag: Koppel elke beperking aan het voorbeeld dat erbij past.
Paren:
  Hallucination → Het model raadt een function aan die niet bestaat in de library.
  Sycophancy → Het model zegt dat je code goed is, omdat jij dat lijkt te willen horen.
  Scope creep → Je vraagt een knop en krijgt ook animaties en een nieuw CSS-bestand.
  Wat vaak voorkomt → Het model rekent met kommagetallen voor geldbedragen, zoals veel tutorials doen.
Feedback: Al deze beperkingen volgen uit hetzelfde principe: een model voorspelt wat waarschijnlijk is, niet wat correct is voor jouw project (zie 1.5).

Sectie: 1.5
Type: meerkeuze
Vraag: Een model geeft je een codevoorbeeld met de methode `library.fetchData({ cache: true })`. Je vindt die methode nergens in de officiële documentatie. Wat is de meest waarschijnlijke verklaring? Kies één antwoord.
Opties:
  A. De methode is een hallucination: ze bestaat niet.
  B. De documentatie is verouderd en de methode bestaat wel.
  C. Je zoekt op de verkeerde plaats in de documentatie.
  D. De methode is intern en wordt daarom niet gedocumenteerd.
Juist: A
Feedback A: Juist. Een methode die nergens in de officiële documentatie staat, is verdacht. Ga ervan uit dat ze verzonnen is tot je het tegendeel bewijst (zie 1.5).
Feedback B: Dat kan, maar het is minder waarschijnlijk. Ga niet uit van de gunstigste verklaring (zie 1.5).
Feedback C: Zoek gerust nog eens, maar vind je ze niet, dan is een hallucination de waarschijnlijkste verklaring (zie 1.5).
Feedback D: Ook dan gebruik je ze beter niet: interne methodes kunnen zonder waarschuwing verdwijnen (zie 1.5).

Sectie: 1.5
Type: meerkeuze
Vraag: Je vraagt een agent: "Maak een navigatiebalk." Je krijgt ook een hamburgermenu, animaties en een extra CSS-bestand. Wat is de beste verklaring? Kies één antwoord.
Opties:
  A. Het model weet dat jouw project dat nodig heeft.
  B. Je vraag was vaag. Het model vulde de rest in met wat het vaakst voorkomt bij navigatiebalken.
  C. Het model probeert zoveel mogelijk tokens te gebruiken.
  D. Het model hallucineert.
Juist: B
Feedback A: Het model kent jouw project niet, tenzij het in de context staat (zie 1.4).
Feedback B: Juist. Dat is scope creep. Een precieze vraag houdt het model bij je taak (zie 1.5).
Feedback C: Een model heeft geen eigen doel om tokens te gebruiken. Het voorspelt wat waarschijnlijk volgt (zie 1.2).
Feedback D: Een hamburgermenu bestaat echt. Het werd alleen niet gevraagd. Dat is scope creep, geen hallucination (zie 1.5).

Sectie: 1.5
Type: meerkeuze
Vraag: Een agent werkt aan je taak. Je ziet dat hij bestanden aanpast die niets met je taak te maken hebben. Wat doe je? Kies één antwoord.
Opties:
  A. Je wacht tot hij klaar is. Hij weet wat hij doet.
  B. Je stopt hem en stuurt bij met een extra bericht: wat hij moet doen, en wat niet.
  C. Je laat hem verdergaan en verwijdert achteraf het hele project.
  D. Je vraagt hem of hij zeker is.
Juist: B
Feedback A: Hoe langer een agent verkeerd verdergaat, hoe meer je moet herstellen (zie 1.5).
Feedback B: Juist. Jij bent de operator. Stoppen en bijsturen hoort bij goed werken met AI (zie 1.5).
Feedback C: Dat is overdreven. Stop op tijd en stuur bij (zie 1.5).
Feedback D: Door sycophancy krijg je waarschijnlijk gewoon "ja" (zie 1.5).

Sectie: 1.5
Type: meerkeuze
Vraag: Wat is een open-weight model? Kies één antwoord.
Opties:
  A. Een model dat je kan downloaden en op je eigen computer kan laten draaien.
  B. Een model dat altijd beter is dan een frontier model.
  C. Een model zonder beperkingen.
  D. Een model dat gratis te gebruiken is in elke tool.
Juist: A
Feedback A: Juist. Je hebt er wel een sterke computer voor nodig (zie 1.5).
Feedback B: Open-weight models zijn meestal minder sterk dan frontier models, al halen ze hun achterstand in (zie 1.5).
Feedback C: Ook een open-weight model hallucineert en heeft een knowledge cutoff (zie 1.5).
Feedback D: Je kan het downloaden, maar je hebt een sterke computer nodig om het te laten draaien (zie 1.5).
```

## 1.6 Jij bent verantwoordelijk

Iedereen heeft een gsm met een camera, maar niet iedereen is fotograaf. Iedereen heeft een potlood, maar niet iedereen tekent een portret. Met AI kan iedereen code laten schrijven. Maar alleen iemand die kan programmeren, kan beoordelen of die code goed is.

### De rol van de developer verandert

AI vervangt de developer niet. Het is een nieuw stuk gereedschap, naast je **IDE** (integrated development environment, je programmeeromgeving), de documentatie en de debugger. Wat je ermee bouwt, hangt af van je eigen kennis.

Wel verandert de rol van de developer. Je schrijft minder zelf, en je stuurt en controleert meer. Dat lijkt minder werk, maar het vraagt meer inzicht. Om code te beoordelen, moet je weten hoe ze in het hele project past.

Bedrijven verwachten steeds vaker dat je goed met AI-tools kan werken. Het verschil tussen een sterke en een zwakke developer zit dan niet in wie de tool gebruikt. Het zit in wie begrijpt wat er gegenereerd wordt, waarom, en hoe je dat test.

Goed werken met AI scheelt ook geld. Bedrijven betalen per token, vaak via een **API** (een koppeling waarmee programma's met elkaar praten). Vage vragen, lange gesprekken en agents die de verkeerde kant op gaan, kosten veel tokens en dus veel geld.

### Waar AI vandaag nuttig is

- **Boilerplate** genereren: code die in elk project bijna hetzelfde is, zoals configuratiebestanden of de basisstructuur van een project. Ook de vier basisbewerkingen op data, Create, Read, Update en Delete (**CRUD**), schrijft AI snel.
- Prototypes opzetten: AI levert snel een eerste werkende versie, die jij daarna aanpast.
- Documentatie schrijven.
- **Test cases** bedenken. Een test case is één situatie waarin je controleert of je code het juiste resultaat geeft. AI stelt snel gewone gevallen en edge cases (ongewone gevallen) voor, zoals een lege lijst of een negatief getal.
- Uitleg vragen over code of een foutmelding die je niet begrijpt.

Die snelheid heeft een gevolg: er komt meer code bij die iemand moet controleren. Gebruik je AI zonder te controleren, dan verlies je op termijn meer tijd dan je wint, aan bugs en aan code die niemand nog kan onderhouden. Dat heet **technical debt** (technische schuld): werk dat je later moet inhalen, omdat je nu een snelle, slordige oplossing koos.

### Wanneer AI geschikt is

Je moet een function schrijven die een datum toont als 29/10/2026. Het resultaat test je in een minuut. Dat is een goede taak voor AI.

Je moet ook beslissen hoe een webshop de wachtwoorden van klanten opslaat. Een fout merk je daar pas als het te laat is.

AI werkt goed als:

- de taak duidelijk en klein is;
- je de output snel kan controleren;
- het om standaardpatronen of herhalend werk gaat;
- een fout beperkte gevolgen heeft.

Bij moeilijker werk kan AI ook helpen, maar dan moet je extra opletten. Gebruik dan een sterk model, geef goede context en controleer grondiger.

### Business logic: jij beslist

**Business logic** (bedrijfslogica) zijn de regels van je toepassing: hoe een prijs berekend wordt, wie welke gegevens mag zien, wanneer een bestelling verstuurd wordt. Een fout in die regels kost geld of brengt mensen schade toe. Denk ook aan authenticatie, financiële berekeningen of medische software.

Bij zulke code mag je AI raadplegen: om ideeën vragen, opties vergelijken, een eerste versie laten maken. Maar je zet niets blind online. Ook niet als alle tests slagen. AI schrijft soms tests die niets of het verkeerde testen. Dan voelt het veilig, maar het is het niet. Hoe je goede tests herkent, leer je in [6.3](./module-6.md#6_3).

Loopt er iets mis in productie, dan is "de AI heeft het geschreven" geen excuus. Jij en je team zijn verantwoordelijk, niet de tool. Daarom is jouw begrip van de code de echte controle.

Ook over de architectuur van een project beslis jij. Je mag die keuzes met AI bespreken, maar de laatste beslissing ligt bij jou, en bij de mensen voor wie je werkt: je team, je klant of je baas. Leg die beslissingen daarna vast, bijvoorbeeld in een instructiebestand (zie [1.4](#1_4)). Zo werkt het model in elk gesprek met dezelfde afspraken.

::: info
De belangrijkste regel: gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren. Kan je dat niet, dan is AI een risico in plaats van een hulpmiddel.
:::

En dan nog dit. Ja, hier spelen we even de bezorgde docent.

::: warning
**Let op:** gebruik AI niet om het oefenen in je andere vakken over te slaan. Dit blijft een opleiding programmeren. Programmeren leer je door zelf te programmeren. Een developer met AI is heel sterk. Iemand zonder programmeerkennis met AI is gewoon iemand met een chatvenster.
:::

### Test jezelf 1.6 – Jij bent verantwoordelijk {#test-jezelf-1-6-jij-bent-verantwoordelijk}

```text
Sectie: 1.6
Type: categoriseren
Vraag: Deel elke taak in: is ze geschikt voor AI of minder geschikt?
Indeling:
  Een function die een datum toont als 29/10/2026 → geschikt voor AI
  Een .gitignore-bestand voor een nieuw project → geschikt voor AI
  Betere namen voorstellen voor de variables in een bestaande function → geschikt voor AI
  De kortingsregels van een webshop laten genereren en meteen online zetten → minder geschikt voor AI
  De beveiliging ontwerpen van een systeem met medische gegevens → minder geschikt voor AI
Feedback: Geschikt zijn kleine, duidelijke taken waarvan je de output snel controleert. Minder geschikt zijn taken met grote gevolgen, zeker als je ze niet zelf controleert (zie 1.6).

Sectie: 1.6
Type: meerkeuze
Vraag: Een agent schreef een function en de tests ervoor. Alle tests slagen. Na een week loopt er iets mis in productie. Wie is verantwoordelijk? Kies één antwoord.
Opties:
  A. Het bedrijf dat het model maakte.
  B. Jij en je team: jullie zetten de code online.
  C. Niemand: de tests slaagden.
  D. De agent.
Juist: B
Feedback A: Het bedrijf achter het model is niet verantwoordelijk voor de code die jij online zet (zie 1.6).
Feedback B: Juist. "De AI heeft het geschreven" is geen excuus. Jouw begrip van de code is de echte controle (zie 1.6).
Feedback C: Slagende tests zijn geen bewijs. AI schrijft soms tests die het verkeerde testen (zie 1.6).
Feedback D: Een tool kan niet verantwoordelijk zijn. Jij beslist wat er online komt (zie 1.6).

Sectie: 1.6
Type: meerkeuze
Vraag: Een developer zegt: "Ik gebruik AI voor alles, ook voor dingen die ik nog niet begrijp. Zo leer ik sneller." Wat is het grootste risico van die aanpak? Kies één antwoord.
Opties:
  A. Er is geen groot risico: uitleg van AI is even goed als een cursus.
  B. AI-tools worden te duur als je ze voor alles gebruikt.
  C. De developer kan de output niet beoordelen en bouwt verder op code die hij of zij niet begrijpt.
  D. De developer wordt afhankelijk van één specifieke tool.
Juist: C
Feedback A: AI-uitleg kan helpen, maar je kan niet controleren of ze klopt als je de leerstof nog niet kent (zie 1.6).
Feedback B: Tokens kosten geld, maar dat is niet het grootste probleem. Het probleem is output die je niet kan controleren (zie 1.6).
Feedback C: Juist. Gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren (zie 1.6).
Feedback D: Dat is een nadeel, maar niet het grootste. Ook met andere tools kan je de output niet beoordelen zonder kennis (zie 1.6).

Sectie: 1.6
Type: juist/fout
Vraag: Kan je de output van AI voor een taak niet zelf controleren, dan gebruik je voor die taak beter geen AI.
Juist: juist
Feedback: Output die je niet kan controleren, maakt AI een risico in plaats van een hulpmiddel (zie 1.6).
```

## 1.7 Quality control: AI-output is onbewezen

Je vraagt een model om een function die controleert of een e-mailadres geldig is. Je krijgt dit:

```python
def is_valid_email(address):
    return "@" in address and "." in address

print(is_valid_email("sara.elamrani@example.com"))
print(is_valid_email("@."))
```

```output
True
True
```

Voor het eerste adres klopt het resultaat. Maar `@.` is geen geldig e-mailadres, en toch geeft de function `True`. De code werkt, maar ze klopt niet.

Daarom controleer je elke AI-output voor je ze gebruikt. Dat heet **quality control** (kwaliteitscontrole), kort **QC**. Bij AI-output is QC nooit optioneel. Het is verleidelijk om te kopiëren, te plakken en verder te gaan. Doe het toch niet.

QC bestaat uit vijf stappen:

1. Verifieer de correctheid. De code moet zonder fouten uitvoeren en het verwachte resultaat geven. Test dat altijd, ook als de code logisch lijkt.
2. Analyseer de aannames. De AI maakt keuzes over structuur, namen en logica zonder het je te vragen. Vraag je bij elk stuk code af waarom het er zo staat en of het bij jouw situatie past. Kijk ook of het model binnen de scope van je vraag bleef (zie [1.5](#1_5)).
3. Controleer de consistentie met je **codebase** (alle code van je project): namen, mappenstructuur en vaste patronen. Gebruikt je project camelCase, dan hoort nieuwe code geen `snake_case` te gebruiken. Code die afwijkt, is een probleem, ook als ze technisch werkt.
4. Beschouw AI-output als onbewezen. Ga ervan uit dat de code niet klopt, tot je QC het tegendeel aantoont.
5. Werk in kleine stappen en integreer nooit veel AI-code tegelijk. Genereer een klein stuk, test het, pas het aan waar nodig, integreer het en ga dan pas verder. Zo vind je problemen vroeg.

Dit betekent voor jou: kan je een stuk AI-code niet volledig uitleggen aan een medestudent, dan is het nog niet klaar voor je project.

### Test jezelf 1.7 – Quality control {#test-jezelf-1-5-quality-control}

```text
Sectie: 1.7
Type: meerkeuze
Vraag: Je integreert AI-gegenereerde code in je project. De code voert uit en de basisfunctionaliteit werkt. Wat doe je nu? Kies één antwoord.
Opties:
  A. De code toevoegen aan je project: ze werkt, dus ze is goed.
  B. Dezelfde AI vragen of de code correct is.
  C. De code meteen aan een collega geven, zodat die ze controleert.
  D. De code lezen, de aannames nagaan, de consistentie met je codebase controleren en ongewone input testen.
Juist: D
Feedback A: Werkende code is nog geen correcte code. Denk aan `is_valid_email`, die ook `@.` goedkeurt (zie 1.7).
Feedback B: Hetzelfde model heeft dezelfde beperkingen, en zegt vaak wat je wil horen (zie 1.5).
Feedback C: Een review door een collega is nuttig, maar pas na je eigen QC (zie 1.7).
Feedback D: Juist. Dat zijn de stappen van quality control (zie 1.7).

Sectie: 1.7
Type: meerkeuze
Vraag: Wat betekent "AI-output als onbewezen beschouwen"? Kies één antwoord.
Opties:
  A. Je gaat ervan uit dat de output niet klopt, tot je QC aantoont dat ze wel klopt.
  B. Je gebruikt AI-output pas als je ze volledig zelf herschreven hebt.
  C. Je laat een tweede AI-tool de output altijd bevestigen.
  D. Je gebruikt AI-output enkel voor onderdelen die niet belangrijk zijn.
Juist: A
Feedback A: Juist. Onbewezen betekent: nog niet aangetoond dat het klopt (zie 1.7).
Feedback B: Herschrijven is niet nodig. Controleren wel (zie 1.7).
Feedback C: Een tweede model bewijst niets: het werkt volgens hetzelfde principe (zie 1.7).
Feedback D: Ook voor belangrijke onderdelen kan je AI gebruiken, zolang je de output controleert (zie 1.7).

Sectie: 1.7
Type: ordenen
Vraag: Zet de stappen van werken in kleine stappen in de juiste volgorde.
Volgorde:
  Genereer een klein stuk code.
  Test het.
  Pas het aan waar nodig.
  Integreer het in je project.
  Ga verder met het volgende stuk.
Feedback: Je integreert pas na het testen en aanpassen. Zo vind je een fout terwijl het stuk code nog klein is (zie 1.7).

Sectie: 1.7
Type: numeriek
Vraag: Hoeveel van deze vier aanroepen geven `True`?
Code:
  def is_valid_email(address):
      return "@" in address and "." in address
  print(is_valid_email("sara@example.com"))
  print(is_valid_email("sara.example.com"))
  print(is_valid_email("@."))
  print(is_valid_email("sara@examplecom"))
Juist: 2
Feedback: Enkel `sara@example.com` en `@.` bevatten zowel een `@` als een `.`. Dat `@.` ook `True` geeft, toont dat de function niet klopt (zie 1.7).
```

## Samenvatting

Nieuwe termen:

- artificial intelligence (AI): computersystemen die taken doen waarvoor je normaal menselijke intelligentie nodig hebt.
- machine learning: de computer leert patronen uit voorbeelden, in plaats van regels die jij schrijft.
- training data: de voorbeelden waarmee een model leert.
- model: het resultaat van de training. Het krijgt input en geeft een voorspelling.
- prediction: een voorspelling, altijd met een kans om fout te zijn.
- narrow en general: een model voor één taak, of een model voor veel taken binnen één domein.
- neural network: een model van veel verbonden rekeneenheden, losjes geïnspireerd op de hersenen.
- parameter: een getal in een model dat tijdens de training wordt aangepast.
- generative AI: AI die nieuwe inhoud maakt, zoals tekst, code of afbeeldingen.
- multimodal: een model dat met meerdere soorten data werkt, zoals tekst en afbeeldingen.
- large language model (LLM): een model dat het volgende stukje tekst voorspelt.
- token: een klein stukje tekst waarmee een LLM werkt.
- temperature: de instelling die bepaalt hoeveel toeval er in de keuze van het volgende token zit.
- reasoning model: een model dat eerst tussenstappen schrijft voor het antwoordt.
- pretraining en fine-tuning: de twee fases van de training van een LLM.
- knowledge cutoff: de datum waarop de training stopte.
- abstraction: een algemeen idee dat een model uit voorbeelden leert en op nieuwe situaties toepast.
- deterministic: dezelfde input geeft altijd dezelfde output.
- agent harness: de software rond een model die tools uitvoert.
- tool: iets wat een model via de agent harness kan laten doen, zoals een bestand lezen.
- agent: een model dat zelfstandig in meerdere stappen naar een doel werkt.
- context: alle tekst die een model krijgt voor één antwoord.
- context window: de maximale hoeveelheid tokens die een model tegelijk verwerkt.
- compacting: een gesprek samenvatten om plaats te maken in de context.
- context management: bewust kiezen wat een model weet.
- hallucination: output die er correct uitziet, maar verzonnen is.
- sycophancy: de neiging van een model om je gelijk te geven.
- scope creep: werk dat groeit buiten de afbakening van je taak.
- frontier model: een van de nieuwste en sterkste modellen.
- open-weight model: een model dat je kan downloaden en zelf laten draaien.
- IDE: integrated development environment, je programmeeromgeving.
- API: een koppeling waarmee programma's met elkaar praten.
- boilerplate: code die in elk project bijna hetzelfde is.
- CRUD: Create, Read, Update, Delete, de vier basisbewerkingen op data.
- test case: één situatie waarin je controleert of je code het juiste resultaat geeft.
- technical debt: werk dat je later moet inhalen omdat je nu een snelle maar slordige oplossing koos.
- business logic: de regels van je toepassing, zoals hoe een prijs berekend wordt.
- codebase: alle code van een project.
- quality control (QC): de controle van output voor je die gebruikt.

Belangrijkste regels:

- Elk model is een voorspellingsmachine. Elke voorspelling kan fout zijn.
- Een LLM voorspelt tekst token per token. Waarschijnlijke output is niet hetzelfde als correcte output.
- Het model schrijft alleen tekst. De agent harness voert het werk uit.
- Een model weet alleen wat het leerde tijdens de training en wat nu in zijn context staat.
- Een vage vraag geeft het model ruimte om initiatief te nemen.
- Jij bent verantwoordelijk voor de code die je gebruikt, niet de tool.
- Gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren.
- Controleer elke AI-output met de vijf stappen van QC en werk in kleine stappen.

## Veelgemaakte fouten

- Denken dat ChatGPT hetzelfde is als AI. ChatGPT is een product. AI is veel breder, en achter één product zitten vaak meerdere modellen.
- Denken dat het model je vorige gesprekken onthoudt. Elk nieuw gesprek begint leeg. Geef de belangrijke informatie opnieuw mee.
- Een vraag stellen zonder de nodige context. Zonder je code kan het model alleen raden.
- Doorwerken in een gesprek dat veel te lang is geworden. Start een nieuw gesprek als het model regels vergeet of meer fouten maakt.
- Denken dat werkende code correcte code is. `is_valid_email("@.")` geeft `True`, ook al is `@.` geen e-mailadres. Test daarom ook ongewone input.
- Een package installeren omdat de AI ze aanraadt. Zoek de naam eerst op in de officiële bron, zoals npmjs.com voor npm.
- Het model vragen of je code goed is. Door sycophancy krijg je vaak "ja". Vraag welke problemen het ziet, en controleer zelf.
- Een agent laten doorwerken terwijl hij de verkeerde kant op gaat. Stop hem en stuur bij.
- Veel AI-code in één keer integreren. Plak je 300 regels tegelijk in je project en loopt er iets mis, dan weet je niet waar je moet zoeken.
- AI de oefeningen van een programmeervak laten oplossen. De oplossing staat er dan wel, maar je kan ze niet uitleggen en niet zelf schrijven.

::: oefening
[Oefeningen module 1](./module-1-oefeningen.md)
:::
