---
module: 1
order: 1
moduleTitle: "Module 1: Wat AI is (en vooral wat niet)"
published: false
---

# Module 1: Wat AI is (en vooral wat niet)

AI-tools schrijven in een paar seconden code die er overtuigend uitziet. In deze module leer je hoe zo'n tool werkt, waar ze je helpt en waar ze tekortschiet. Dat heb je nodig om AI in de rest van de cursus verantwoord in te zetten.

### Leerdoelen

Na deze module kan je:

- uitleggen hoe een large language model code genereert en waarom die code daardoor niet vanzelf correct is;
- een taak voor een AI-assistent indelen als genereren, aanpassen of evalueren;
- de vier beperkingen van AI herkennen in een concreet voorbeeld;
- voor een programmeertaak beslissen of AI geschikt is en die keuze motiveren;
- AI-gegenereerde code controleren met de vijf stappen van quality control.

## 1.1 Wat is een AI-assistent?

Stel: je vraagt aan een AI-assistent "schrijf een function die twee getallen optelt". Na een paar seconden krijg je werkende code. Hoe komt die code tot stand?

Niet doordat de assistent weet wat optellen is. En ook niet doordat hij je vraag begrijpt. Achter elke AI-assistent zit een **large language model** (groot taalmodel) of **LLM**. Dat is een programma dat voorspelt welke tekst waarschijnlijk volgt op wat je intypt.

Zo'n model is getraind op enorme hoeveelheden tekst: documentatie, boeken, websites en miljarden regels code. Op basis daarvan kiest het telkens een waarschijnlijk volgend stukje tekst. Er zit ook wat toeval in die keuze. Vergelijk het met de woordsuggesties op je gsm, maar dan veel krachtiger en op de schaal van volledige bestanden.

De bekendste familie van zulke modellen is GPT (Generative Pre-trained Transformer) van OpenAI. Andere voorbeelden zijn Claude van Anthropic en Gemini van Google. Ze werken allemaal volgens hetzelfde principe.

Dat klinkt als een technisch detail, maar het bepaalt hoe je met AI omgaat. Een model dat werkt op waarschijnlijkheid in plaats van op begrip, heeft drie gevolgen:

- Waarschijnlijke output is niet hetzelfde als correcte output.
- Twee keer dezelfde vraag kan twee verschillende antwoorden opleveren.
- Het model weet niet of de output past in jouw project.

Een AI-assistent gebruik je voor drie soorten taken:

- **Genereren**: je beschrijft een probleem en het model schrijft een eerste versie, zoals een function of een algorithm.
- **Aanpassen**: je geeft bestaande code en vraagt om ze te vereenvoudigen, te versnellen of te herschrijven in een andere stijl of taal.
- **Evalueren**: het model leest je code, wijst mogelijke fouten aan en stelt alternatieven voor.

In alle drie de gevallen is de output een vertrekpunt, geen eindproduct. Hoe je dat vertrekpunt controleert, lees je in [1.5](#1_5).

### Test jezelf 1.1 – Wat is een AI-assistent?

```text
Sectie: 1.1
Type: meerkeuze
Vraag: Wat beschrijft het best hoe een LLM code genereert? Kies één antwoord.
Opties:
  A. Het zoekt in een database de best passende bestaande oplossing op.
  B. Het voorspelt op basis van zijn trainingsdata welke tekst waarschijnlijk volgt.
  C. Het begrijpt wat de code moet doen en redeneert over de correctheid ervan.
  D. Het voert verschillende versies van de code uit en geeft de versie die werkt.
Juist: B
Feedback A: Een LLM zoekt geen kant-en-klare oplossing op. Het bouwt de tekst stukje voor stukje op (zie 1.1).
Feedback B: Juist. Een LLM kiest telkens een waarschijnlijk vervolg op basis van wat het tijdens de training zag (zie 1.1).
Feedback C: Een LLM begrijpt de betekenis van code niet. Het herkent patronen in tekst (zie 1.1).
Feedback D: Een taalmodel voert je code niet uit. Of de code werkt, test je zelf (zie 1.1).

Sectie: 1.1
Type: meerkeuze
Vraag: Een medestudent zegt: "De AI heeft mijn function geschreven en ze werkt, dus de code is correct." Welke reactie klopt het best? Kies één antwoord.
Opties:
  A. Dat klopt: als de code werkt, is ze correct.
  B. Dat klopt niet: AI-code werkt nooit volledig, dus je herschrijft ze altijd zelf.
  C. Dat klopt niet: werken voor één input bewijst niets. Lees de code, begrijp wat ze doet en test ze met andere input.
  D. Dat klopt niet: je moet dezelfde vraag eerst aan een tweede AI-tool stellen.
Juist: C
Feedback A: Code kan werken voor de input die je probeerde en toch fout zijn voor andere input. Waarschijnlijke output is niet hetzelfde als correcte output (zie 1.1).
Feedback B: Te streng. AI-code is vaak bruikbaar als vertrekpunt, zolang je ze controleert (zie 1.1).
Feedback C: Juist. De output is een vertrekpunt. Pas na je eigen controle weet je of de code klopt (zie 1.1).
Feedback D: Een tweede model werkt volgens hetzelfde principe en begrijpt je code evenmin (zie 1.1).

Sectie: 1.1
Type: koppelen
Vraag: Koppel elke vraag aan een AI-assistent aan de soort taak.
Paren:
  Schrijf een function die controleert of een jaar een schrikkeljaar is. → genereren
  Herschrijf deze while-loop als een for-loop. → aanpassen
  Zitten er fouten in deze function? → evalueren
Feedback: Bij genereren vertrek je van een beschrijving. Bij aanpassen moet bestaande code veranderen. Bij evalueren vraag je een oordeel over bestaande code (zie 1.1).
```

## 1.2 De rol van AI op het werk

"AI gaat alle programmeurs vervangen." Je hoorde die uitspraak waarschijnlijk al. De werkelijkheid is minder dramatisch, en interessanter.

In een professionele omgeving vervangt AI de developer niet. Het is een tool om efficiënter te werken. Denk aan een schrijnwerker met een zaag, een hamer en een beitel. Die tools maken het werk sneller en preciezer, maar ze beslissen niet wat er gezaagd wordt.

Als developer heb je al een gereedschapskist: je integrated development environment (IDE), documentatie, Stack Overflow en een debugger. AI is daar een nieuw stuk gereedschap bij. Wat je ermee bouwt, blijft afhangen van je eigen kennis.

Wat wel verandert, is de rol van de developer. Die verschuift deels van code schrijven naar code beoordelen en controleren. Dat lijkt minder werk, maar het vraagt meer inzicht. Om code te beoordelen, moet je overzien hoe ze in het hele project past.

### Waar AI vandaag nuttig is

- Boilerplate genereren. **Boilerplate** (standaardcode) is code die in elk project bijna hetzelfde is, zoals configuratiebestanden of de basisstructuur van een project. Ook de vier basisbewerkingen op data, Create, Read, Update en Delete (CRUD), schrijft AI snel uit.
- Prototypes opzetten. AI levert snel een eerste werkende versie, die jij daarna aanpast en uitbreidt.
- Documentatie schrijven. Niemand doet het graag, en AI helpt met de formulering.
- Test cases bedenken. Een **test case** (testgeval) is één situatie waarin je controleert of je code het juiste resultaat geeft. AI stelt snel gewone gevallen en randgevallen voor, zoals een lege lijst of een negatief getal. Soms bedenkt het gevallen waar jij niet aan dacht.

Die extra snelheid heeft één belangrijk gevolg: er komt meer code bij die iemand moet controleren. Sneller geschreven code is niet vanzelf correcte code.

Gebruik je AI zonder te controleren, dan verlies je op termijn meer tijd dan je wint. Die tijd gaat naar bugs en naar code die niemand nog kan onderhouden. Ook **technical debt** (technische schuld) stapelt zich op: werk dat je later moet inhalen omdat je nu een snelle, slordige oplossing koos.

Meer dan ooit moet je begrijpen hoe je applicatie in elkaar zit. AI maakt kennis niet overbodig, maar net belangrijker.

### Test jezelf 1.2 – De rol van AI op het werk

```text
Sectie: 1.2
Type: meerkeuze
Vraag: Welke uitspraak over AI in softwareontwikkeling klopt het best? Kies één antwoord.
Opties:
  A. AI vervangt developers, omdat het sneller en goedkoper code schrijft.
  B. AI maakt programmeerkennis overbodig voor beginnende developers.
  C. AI neemt repetitief werk over, en de developer beoordeelt en controleert de output.
  D. AI is vooral nuttig om de architectuur van een project te bepalen.
Juist: C
Feedback A: AI is een tool, zoals een zaag voor een schrijnwerker. Wat er gebouwd wordt, hangt af van de kennis van de developer (zie 1.2).
Feedback B: Het omgekeerde klopt: wie AI-code niet begrijpt, kan ze niet controleren (zie 1.2).
Feedback C: Juist. De rol van de developer verschuift deels van schrijven naar beoordelen en controleren (zie 1.2).
Feedback D: Architectuur vraagt afwegingen over het hele systeem. Daar is AI net zwak in (zie 1.2).

Sectie: 1.2
Type: meerdere antwoorden
Vraag: Waarom wordt jouw kennis belangrijker als AI sneller code schrijft? Kies twee antwoorden.
Opties:
  A. Er komt meer code bij die iemand moet controleren.
  B. AI-code bevat altijd meer fouten dan code van mensen.
  C. Code die je niet begrijpt, kan je niet controleren.
  D. Je moet AI-code bijna altijd volledig herschrijven.
Juist: A, C
Feedback A: Juist. Meer output betekent meer code om te controleren (zie 1.2).
Feedback B: Dat staat niet vast. Het punt is dat je niet weet of AI-code klopt zolang je ze niet controleert (zie 1.2).
Feedback C: Juist. Controleren veronderstelt dat je de code begrijpt (zie 1.2).
Feedback D: AI-code is vaak bruikbaar als vertrekpunt. Je past ze aan waar nodig (zie 1.2).

Sectie: 1.2
Type: meerkeuze
Vraag: Je start een nieuw project en hebt CRUD-operaties nodig voor één soort gegevens, bijvoorbeeld producten. Wat is de zinvolste inzet van AI? Kies één antwoord.
Opties:
  A. De AI de volledige architectuur van het project laten bepalen.
  B. Geen AI gebruiken, want standaardcode schrijf je sneller zelf.
  C. De AI vooral de businesslogica laten schrijven, want dat is het moeilijkste deel.
  D. De AI de boilerplate laten genereren, en die daarna zelf controleren en aanpassen.
Juist: D
Feedback A: Architectuur hangt af van het hele systeem en van afspraken in je team. Die beslissing blijft bij jou (zie 1.2).
Feedback B: Net voor standaardcode zoals CRUD is AI snel en nuttig, op voorwaarde dat je de output controleert (zie 1.2).
Feedback C: Businesslogica hangt sterk af van jouw situatie. Daar maakt AI de meeste aannames die je niet wil (zie 1.2).
Feedback D: Juist. Boilerplate is een sterke kant van AI. De controle blijft jouw werk (zie 1.2).
```

## 1.3 De beperkingen van AI

AI kan krachtig zijn, maar het heeft duidelijke beperkingen. Ken je ze niet, dan maak je vroeg of laat een dure fout. We bespreken er vier.

### Hallucinations

Je vraagt een AI-assistent welke npm-package je kan gebruiken voor een bepaalde taak. Je krijgt een naam, een installatiecommando en een codevoorbeeld. Je probeert de package te installeren, maar npm vindt ze niet. Ze bestaat niet: alles zag er geloofwaardig uit, en toch was het verzonnen.

Dit heet een **hallucination** (hallucinatie): output die er correct uitziet, maar verzonnen is. Gegenereerde code roept bijvoorbeeld functions aan die niet bestaan, gebruikt libraries die nooit gemaakt zijn of bevat logica die fout is. Hoe blinder je de output vertrouwt, hoe langer je zoekt naar zo'n fout.

::: warning
**Let op:** soms bestaat een verzonnen package-naam wel. Kwaadwillige mensen registreren namen die AI-modellen vaak verzinnen, met schadelijke code erin. Controleer daarom altijd in de officiële bron of een package bestaat en betrouwbaar is, voor je ze installeert.
:::

### Onzekerheid zonder signaal

Een model zegt niet hoe zeker het is van een antwoord. Een fout antwoord klinkt even overtuigend als een juist antwoord.

Stel je twee keer dezelfde vraag, dan kan je twee verschillende antwoorden krijgen. Dat komt door het toeval in de voorspelling (zie [1.1](#1_1)), maar ook door een andere versie van het model of een andere context.

### Beperkte context

Een model kan maar een deel van je **codebase** (alle code van een project) tegelijk meenemen. In een project met tientallen bestanden die van elkaar afhangen, ziet het slechts een fractie. Hoe het systeem als geheel werkt, weet het dan niet.

### Geen eigen doelen

Een model begrijpt geen doelen, het herkent patronen. Het kan dus niet afwegen welke oplossing het best past bij je systeem, je team of het onderhoud op lange termijn. Die afweging blijft jouw taak.

### Test jezelf 1.3 – De beperkingen van AI

```text
Sectie: 1.3
Type: meerkeuze
Vraag: Wat is een hallucination bij AI-gegenereerde code? Kies één antwoord.
Opties:
  A. Code met een syntaxfout, waardoor ze niet uitvoert.
  B. Output die er correct uitziet, maar verwijst naar iets dat niet bestaat of verzonnen is.
  C. Een antwoord dat bij een tweede poging anders is dan bij de eerste.
  D. Correcte code die niet past bij de stijl van je project.
Juist: B
Feedback A: Een hallucination ziet er net wel correct uit. Dat maakt ze gevaarlijk (zie 1.3).
Feedback B: Juist. Het model verzint bijvoorbeeld een function of een package die geloofwaardig klinkt (zie 1.3).
Feedback C: Dat is de beperking onzekerheid zonder signaal, geen hallucination (zie 1.3).
Feedback D: Dat is een probleem van consistentie met je codebase, geen hallucination (zie 1.3).

Sectie: 1.3
Type: meerkeuze
Vraag: Een AI-assistent geeft je een codevoorbeeld met de methode `library.fetchData({ cache: true })`. Je vindt die methode nergens in de officiële documentatie. Wat is de meest waarschijnlijke verklaring? Kies één antwoord.
Opties:
  A. De methode is een hallucination: ze bestaat niet.
  B. De documentatie is verouderd en de methode bestaat wel.
  C. Je zoekt op de verkeerde plaats in de documentatie.
  D. De methode is intern en wordt daarom niet gedocumenteerd.
Juist: A
Feedback A: Juist. Een methode die nergens in de officiële documentatie staat, is verdacht. Ga ervan uit dat ze verzonnen is tot je het tegendeel bewijst (zie 1.3).
Feedback B: Dat kan, maar het is minder waarschijnlijk. Ga niet uit van de gunstigste verklaring (zie 1.3).
Feedback C: Zoek gerust nog eens, maar vind je ze niet, dan is een hallucination de waarschijnlijkste verklaring (zie 1.3).
Feedback D: Ook dan hoor je ze niet te gebruiken: interne methodes kunnen zonder waarschuwing verdwijnen (zie 1.3).

Sectie: 1.3
Type: koppelen
Vraag: Koppel elke beperking van AI aan het voorbeeld dat erbij past.
Paren:
  Hallucination → De AI raadt een function aan die niet in de library bestaat.
  Onzekerheid zonder signaal → Een fout antwoord klinkt even zeker als een juist antwoord.
  Beperkte context → De AI stelt code voor die botst met een bestand dat de AI niet zag.
  Geen eigen doelen → De AI kiest een oplossing zonder rekening te houden met de afspraken in je team.
Feedback: Elke beperking volgt uit hetzelfde principe: een model voorspelt tekst op basis van patronen, zonder begrip van jouw project (zie 1.3).
```

## 1.4 Wanneer AI geschikt is

Je moet een function schrijven die een datum toont als 29/10/2026. Het resultaat test je in een minuut. Dat is een goede taak voor AI.

Je moet ook beslissen hoe een webshop de wachtwoorden van klanten opslaat. Een fout merk je daar pas als het te laat is.

Gebruik AI daarom altijd als bewuste keuze, niet als reflex. Niet elk probleem is geschikt.

AI werkt goed als:

- het probleem duidelijk en concreet afgebakend is;
- je de output snel kan controleren;
- het om kleine functions, standaardpatronen of repetitieve taken gaat;
- een fout beperkte gevolgen heeft.

AI werkt minder goed als:

- de oplossing afhangt van de context van het hele systeem;
- een fout grote gevolgen kan hebben, zoals bij authenticatie, financiële berekeningen of medische software;
- het om complexe beslissingen over de architectuur gaat.

::: info
De belangrijkste regel: gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren. Kan je dat niet, dan is AI een risico in plaats van een hulpmiddel.
:::

En dan nog dit. Ja, hier spelen we even de bezorgde docent.

::: warning
**Let op:** gebruik AI niet om het oefenen in je andere vakken over te slaan. Programmeren leer je door zelf te programmeren. AI kan je daarna sneller maken, maar het legt geen basis die er nog niet is.
:::

### Test jezelf 1.4 – Wanneer AI geschikt is

```text
Sectie: 1.4
Type: categoriseren
Vraag: Deel elke taak in: is ze geschikt voor AI of minder geschikt?
Indeling:
  Een function die een datum toont als 29/10/2026 → geschikt voor AI
  Een .gitignore-bestand voor een nieuw project → geschikt voor AI
  Betere namen voorstellen voor de variables in een bestaande function → geschikt voor AI
  De beveiliging ontwerpen van een systeem met medische gegevens → minder geschikt voor AI
  Kiezen welke database past bij de architectuur van een nieuw project → minder geschikt voor AI
Feedback: Geschikt zijn kleine, afgebakende taken waarvan je de output snel controleert. Minder geschikt zijn taken met grote gevolgen of die van het hele systeem afhangen (zie 1.4).

Sectie: 1.4
Type: meerkeuze
Vraag: Een developer zegt: "Ik gebruik AI voor alles, ook voor dingen die ik nog niet begrijp. Zo leer ik sneller." Wat is het grootste risico van die aanpak? Kies één antwoord.
Opties:
  A. Er is geen groot risico: uitleg van AI is even goed als een cursus.
  B. AI-tools worden te duur als je ze voor alles gebruikt.
  C. De developer kan de output niet beoordelen en bouwt verder op code die hij of zij niet begrijpt.
  D. De developer wordt afhankelijk van één specifieke tool.
Juist: C
Feedback A: AI-uitleg kan helpen, maar je kan niet controleren of ze klopt als je de leerstof nog niet kent (zie 1.4).
Feedback B: De kost is niet het grootste probleem. Het probleem is output die je niet kan controleren (zie 1.4).
Feedback C: Juist. Gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren (zie 1.4).
Feedback D: Dat is een nadeel, maar niet het grootste. Ook met wisselende tools kan je de output niet beoordelen zonder kennis (zie 1.4).

Sectie: 1.4
Type: juist/fout
Vraag: Kan je de output van AI voor een taak niet zelf controleren, dan gebruik je voor die taak beter geen AI.
Juist: juist
Feedback: Output die je niet kan controleren, maakt AI een risico in plaats van een hulpmiddel (zie 1.4).
```

## 1.5 Quality control: AI-output is onbewezen

Je vraagt een AI-assistent om een function die controleert of een e-mailadres geldig is. Je krijgt dit:

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

Daarom controleer je elke AI-output voor je ze gebruikt. Dat heet **quality control** (kwaliteitscontrole), kort **QC**, en bij AI-output is het nooit optioneel. Het is verleidelijk om te kopiëren, te plakken en verder te gaan. Doe het toch niet.

QC bestaat uit vijf stappen:

1. Verifieer de correctheid. De code moet zonder fouten uitvoeren en het verwachte resultaat geven. Test dat altijd, ook als de code logisch lijkt.
2. Analyseer de aannames. De AI maakt keuzes over structuur, namen en logica zonder het je te vragen. Vraag je bij elk stuk code af waarom het er zo staat en of het bij jouw situatie past.
3. Controleer de consistentie met je codebase: namen, mappenstructuur en vaste ontwerppatronen. Gebruikt je project camelCase, dan hoort nieuwe code geen `snake_case` te gebruiken. Code die afwijkt, is een probleem, ook als ze technisch werkt.
4. Beschouw AI-output als onbewezen. Ga ervan uit dat de code niet klopt, tot je QC het tegendeel aantoont.
5. Werk in kleine stappen en integreer nooit veel AI-code tegelijk. Genereer een klein stuk, test het, pas het aan waar nodig, integreer het en ga dan pas verder. Zo vind je problemen vroeg.

Dit betekent voor jou: kan je een stuk AI-code niet volledig uitleggen aan een medestudent, dan is het nog niet klaar voor je project.

### Test jezelf 1.5 – Quality control

```text
Sectie: 1.5
Type: meerkeuze
Vraag: Je integreert AI-gegenereerde code in je project. De code voert uit en de basisfunctionaliteit werkt. Wat doe je nu? Kies één antwoord.
Opties:
  A. De code toevoegen aan je project: ze werkt, dus ze is goed.
  B. Dezelfde AI vragen of de code correct is.
  C. De code meteen aan een collega geven, zodat die ze controleert.
  D. De code lezen, de aannames nagaan, de consistentie met je codebase controleren en ongewone input testen.
Juist: D
Feedback A: Werkende code is nog geen correcte code. Denk aan `is_valid_email`, die ook `@.` goedkeurt (zie 1.5).
Feedback B: Hetzelfde model heeft dezelfde beperkingen. De controle blijft jouw taak (zie 1.5).
Feedback C: Een review door een collega is nuttig, maar pas na je eigen QC (zie 1.5).
Feedback D: Juist. Dat zijn de stappen van quality control (zie 1.5).

Sectie: 1.5
Type: meerkeuze
Vraag: Wat betekent "AI-output als onbewezen beschouwen"? Kies één antwoord.
Opties:
  A. Je gaat ervan uit dat de output niet klopt, tot je QC aantoont dat ze wel klopt.
  B. Je gebruikt AI-output pas als je ze volledig zelf herschreven hebt.
  C. Je laat een tweede AI-tool de output altijd bevestigen.
  D. Je gebruikt AI-output enkel voor onderdelen die niet belangrijk zijn.
Juist: A
Feedback A: Juist. Onbewezen betekent: nog niet aangetoond dat het klopt (zie 1.5).
Feedback B: Herschrijven is niet nodig. Controleren wel (zie 1.5).
Feedback C: Een tweede model bewijst niets: het werkt volgens hetzelfde principe (zie 1.5).
Feedback D: Ook voor belangrijke onderdelen kan je AI gebruiken, zolang je de output controleert (zie 1.5).

Sectie: 1.5
Type: ordenen
Vraag: Zet de stappen van werken in kleine stappen in de juiste volgorde.
Volgorde:
  Genereer een klein stuk code.
  Test het.
  Pas het aan waar nodig.
  Integreer het in je project.
  Ga verder met het volgende stuk.
Feedback: Je integreert pas na het testen en aanpassen. Zo vind je een fout terwijl het stuk code nog klein is (zie 1.5).

Sectie: 1.5
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
Feedback: Enkel `sara@example.com` en `@.` bevatten zowel een `@` als een `.`. Dat `@.` ook `True` geeft, toont dat de function niet klopt (zie 1.5).
```

## Samenvatting

Nieuwe termen:

- large language model (LLM): een programma dat voorspelt welke tekst waarschijnlijk volgt.
- boilerplate: code die in elk project bijna hetzelfde is.
- CRUD: Create, Read, Update, Delete, de vier basisbewerkingen op data.
- test case: één situatie waarin je controleert of je code het juiste resultaat geeft.
- technical debt: werk dat je later moet inhalen omdat je nu een snelle maar slordige oplossing koos.
- hallucination: output die er correct uitziet, maar verzonnen is.
- codebase: alle code van een project.
- quality control (QC): de controle van output voor je die gebruikt.

Belangrijkste regels:

- Een LLM werkt op waarschijnlijkheid, niet op begrip. Waarschijnlijke output is niet hetzelfde als correcte output.
- AI-output is een vertrekpunt, geen eindproduct.
- AI heeft vier beperkingen: hallucinations, onzekerheid zonder signaal, beperkte context en geen eigen doelen.
- Gebruik AI enkel als je de volledige output zelf kan begrijpen en controleren.
- Controleer elke AI-output met de vijf stappen van QC en werk in kleine stappen.

## Veelgemaakte fouten

- Denken dat werkende code correcte code is. `is_valid_email("@.")` geeft `True`, ook al is `@.` geen e-mailadres. Test daarom ook ongewone input.
- Een package installeren omdat de AI ze aanraadt. Zoek de naam eerst op in de officiële bron, zoals npmjs.com voor npm. Bestaat ze niet of lijkt ze verdacht, installeer ze dan niet.
- Een AI-tool gebruiken als controle van AI-output. De vraag "Is deze code correct?" aan dezelfde of een andere AI vervangt je eigen QC niet.
- AI de oefeningen van een programmeervak laten oplossen. De oplossing staat er dan wel, maar je kan ze niet uitleggen en niet zelf schrijven.
- Veel AI-code in één keer integreren. Plak je 300 regels tegelijk in je project en loopt er iets mis, dan weet je niet waar je moet zoeken.

::: oefening
[Oefeningen module 1](./module-1-oefeningen.md)
:::
