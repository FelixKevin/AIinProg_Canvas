---
module: 1
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 1

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 1. De extra-reeks is voor wie meer wil oefenen. Een paar extra oefeningen gaan al over prompts schrijven, het onderwerp van module 2.

Je werkt je antwoorden uit in een invulbestand en levert dat in via de opdracht **Oefeningen module 1** in Canvas. Daar vind je ook het invulbestand. Je ingevulde oefeningen zijn een deel van je portfolio.

## E1 Input, output, voorspelling {#e1 .easy}

Elk model is een voorspellingsmachine: het krijgt input en geeft een voorspelling (zie [1.1](./module-1.md#1_1)).

Hieronder staan vijf toepassingen van AI. Noteer voor elke toepassing de input, de voorspelling, en wat er gebeurt als die voorspelling fout is.

1. De spamfilter van je mailbox.
2. Gezichtsherkenning om je gsm te ontgrendelen.
3. Automatische ondertitels onder een video.
4. De reistijd in Google Maps.
5. GitHub Copilot die je code aanvult.

Geef je antwoord in dit formaat:

```text
1. Input: een e-mail. Voorspelling: spam of geen spam. Als het fout is: een belangrijke mail belandt in je spam.
2. ...
```

## E2 Wanneer wel, wanneer niet? {#e2 .easy}

Niet elke taak is geschikt voor AI (zie [1.6](./module-1.md#1_6)).

Beslis voor elk scenario of je AI zou inzetten. Motiveer elke keuze in één zin met een criterium uit 1.6.

1. Een configuratiebestand voor ESLint aanmaken.
2. De encryptielogica schrijven voor een banktoepassing.
3. JSDoc-commentaar toevoegen aan een bestaande function.
4. Beslissen welke database het best past bij een nieuw project.
5. Een standaard CRUD-endpoint genereren voor gebruikers.

Geef je antwoord in dit formaat:

```text
1. Ja: de output is klein en je controleert ze snel.
2. ...
```

## E3 Een hallucination beschrijven {#e3 .easy}

Een hallucination ziet er correct uit, maar is verzonnen (zie [1.5](./module-1.md#1_5)).

1. Leg in maximaal drie zinnen uit wat een hallucination is.
2. Bedenk één eigen voorbeeld van een hallucination in code. Gebruik niet het npm-voorbeeld uit de cursus.
3. Beschrijf hoe je die hallucination zou ontdekken.

## E4 Tokens bekijken {#e4 .easy}

Een LLM leest geen letters of woorden, maar tokens (zie [1.2](./module-1.md#1_2)).

Open de [tokenizer van OpenAI](https://platform.openai.com/tokenizer). Plak er telkens deze tekst in en noteer hoeveel tokens het zijn:

1. `I like programming in JavaScript.`
2. `Ik programmeer graag in JavaScript.`
3. `for (let i = 0; i < items.length; i++) {}`

Beantwoord daarna:

- Welke tekst gebruikt de meeste tokens per woord? Waarom denk je dat dat zo is?
- Een AI-bedrijf rekent af per token. Wat betekent dat voor een lang gesprek in het Nederlands?

## E5 Model of harness? {#e5 .easy}

Een model schrijft alleen tekst. De harness voert het werk uit (zie [1.3](./module-1.md#1_3)).

Wie doet wat: het model of de harness?

1. Een bestand `cart.js` openen en de inhoud lezen.
2. Beslissen welke regel in `cart.js` moet veranderen.
3. `npm test` uitvoeren in de terminal.
4. Een uitleg schrijven over waarom de test faalde.
5. Een screenshot doorgeven aan een model dat afbeeldingen kan lezen.

Geef je antwoord in dit formaat:

```text
1. harness
2. ...
```

## M1 Quality control op een e-mailcheck {#m1}

In 1.7 keurde een function het adres `@.` goed. Je controleert nu zelf een AI-oplossing voor hetzelfde probleem.

Vraag een AI-assistent om een function die controleert of een e-mailadres geldig is. Doorloop daarna deze stappen en noteer bij elke stap wat je vaststelt:

1. Voert de code uit zonder fouten?
2. Geeft de function het juiste resultaat voor een correct adres, zoals `sara.elamrani@example.com`?
3. Wat geeft ze voor deze randgevallen: een lege string, een adres zonder `@`, een adres met twee `@`'s, en `@.`?
4. Welke aannames maakte de AI die je niet vroeg?

Noteer per randgeval de input en het resultaat, bijvoorbeeld:

```text
""            -> False (juist)
"sara@@x.com" -> True  (fout)
```

## M2 Consistentie testen {#m2}

Een model kan op dezelfde vraag verschillende antwoorden geven (zie [1.2](./module-1.md#1_2)). Je test dat nu zelf.

1. Stuur exact dezelfde prompt twee keer naar een AI-tool, telkens in een nieuw gesprek.
2. Vergelijk de antwoorden. Zijn ze identiek? Wat verschilt er? Is één van de twee duidelijk beter, en waarom?
3. Stuur dezelfde prompt naar een andere AI-tool en vergelijk opnieuw.
4. Schrijf in maximaal vijf zinnen wat dit betekent voor hoe je AI-output behandelt.

Lever de drie antwoorden en je conclusie in.

## M3 Code begrijpen met AI {#m3}

Een AI-assistent kan code ook uitleggen. Je gebruikt dat om een onbekende function te begrijpen.

```python
def process(items):
    seen = set()
    result = []
    for item in items:
        key = (item["category"], item["value"] > 100)
        if key not in seen:
            seen.add(key)
            result.append(item)
    return result
```

1. Vraag een AI-assistent wat de function `process` doet.
2. Stel minstens drie gerichte vervolgvragen tot je de function volledig begrijpt. Noteer elke vraag en elk antwoord.
3. Controleer de uitleg: voer de function uit met deze input en vergelijk het resultaat met wat de AI voorspelt.

```python
print(process([
    {"category": "food", "value": 50},
    {"category": "food", "value": 80},
    {"category": "food", "value": 150},
]))
```

```output
[{'category': 'food', 'value': 50}, {'category': 'food', 'value': 150}]
```

4. Had je dit ook zonder AI kunnen achterhalen? Schat hoeveel tijd dat gekost had.

## M4 Gedragsregels voor AI-gebruik {#m4}

Een junior developer werkt voor het eerst met AI-tools. Vage tips zoals "wees kritisch" helpen niet.

Stel vijf concrete gedragsregels op. Een goede regel zegt wat je doet en wanneer. Bijvoorbeeld: "Controleer in de officiële documentatie of een library bestaat, voor je ze installeert." Motiveer elke regel in twee à drie zinnen met een beperking uit 1.5 of een QC-stap uit 1.7.

## M5 Wat weet het model? {#m5}

Een model weet alleen wat het leerde tijdens de training en wat nu in zijn context staat (zie [1.4](./module-1.md#1_4)).

1. Open een nieuw gesprek met je AI-assistent. Vraag: "Wat is je knowledge cutoff?" Noteer het antwoord.
2. Vraag naar een nieuwe versie van een framework of library die je kent, die na die datum uitkwam. Wat antwoordt het model? Zoekt het zelf informatie op, of verzint het iets?
3. Vraag in hetzelfde gesprek: "Waarom werkt mijn function niet?" zonder code mee te geven. Wat doet het model: raadt het, of vraagt het om je code?
4. Start een nieuw gesprek en vraag: "Waarover hadden we het daarnet?" Wat gebeurt er, en waarom?

Schrijf bij elke stap in één of twee zinnen wat dit zegt over de context van het model.

## M6 Scope creep zien {#m6}

Een vage vraag geeft het model ruimte om initiatief te nemen (zie [1.5](./module-1.md#1_5)).

1. Vraag je AI-assistent: `Maak een navigatiebalk.`
2. Noteer alles wat je kreeg en niet vroeg: extra bestanden, extra functies, extra CSS.
3. Schrijf een nieuwe vraag die het model bij je taak houdt. Zeg wat je wil, en ook wat je niet wil. Bijvoorbeeld: welke links erin staan, in welke taal, en of je wel of geen versie voor kleine schermen wil.
4. Vergelijk de twee resultaten. Hoeveel code moest je bij elke versie controleren?

## H1 Volledige code review van een CSV-function {#h1 .hard}

Bij grotere stukken code wordt QC belangrijker (zie [1.7](./module-1.md#1_7)). Je reviewt een AI-oplossing van begin tot einde.

1. Vraag een AI-tool om een function die een CSV-bestand inleest, de gegevens valideert en een gefilterde versie wegschrijft naar een nieuw bestand. Valideren betekent: verplichte velden zijn ingevuld en elk veld heeft het juiste datatype.
2. Review de code op deze vier punten:
   - correctheid voor gewone gevallen;
   - foutafhandeling: wat als het bestand niet bestaat, leeg is of een verkeerd formaat heeft?
   - veiligheid: wordt input ergens onveilig verwerkt?
   - leesbaarheid en consistentie met de gebruikelijke stijl van de taal.
3. Pas de code aan. Noteer bij elke aanpassing wat je veranderde en waarom.

Lever de originele code, je aangepaste code en je lijst met aanpassingen in.

## H2 Een AI-richtlijn voor je team {#h2 .hard}

Je werkt met twee medestudenten aan een project. Jullie maken samen afspraken over AI-gebruik.

Schrijf een AI-richtlijn van maximaal één A4. Behandel minstens:

- voor welke taken jullie AI wel en niet gebruiken;
- hoe jullie gegenereerde code controleren voor die in het project komt;
- wat jullie doen met code die niemand in het team volledig begrijpt;
- wat jullie doen bij twijfel over de correctheid of veiligheid van output.

Maak de richtlijn zo concreet dat een nieuw teamlid na het lezen weet wat te doen.

## @1 Een week met één AI-tool {#home1 .home}

Je hebt de theorie gezien. Nu test je een tool in je eigen werk.

Kies één AI-tool voor programmeren en gebruik die een volledige week voor je andere vakken of een eigen project. Hou een logboek bij. Noteer elke dag:

- welke taken je met de tool probeerde;
- wanneer de tool je echt verder hielp;
- wanneer de output onbruikbaar of fout was;
- hoe je QC toepaste.

Sluit af met maximaal tien zinnen: voor welke taken gebruik je deze tool voortaan wel, en voor welke niet?

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en herhaling. Bij elke oefening staat het niveau.

## X1 Welke AI-tools bestaan er? (Easy) {#x1}

Er bestaan veel AI-tools voor programmeren, en ze werken op verschillende manieren.

Zoek minstens vier AI-tools op die code schrijven of verbeteren. Noteer per tool:

- de naam en in één zin wat de tool doet;
- hoe je ze gebruikt: als plugin in je editor, als website, als CLI-tool of anders;
- of de tool gratis is, betaald, of een gratis versie heeft.

Mogelijke vertrekpunten zijn GitHub Copilot, Cursor, Windsurf, ChatGPT, Claude en Tabnine.

## X2 Twee prompts vergelijken (Easy) {#x2}

Hoe beter je beschrijft wat je wil, hoe bruikbaarder de output. Module 2 gaat daar dieper op in.

> Prompt A: `schrijf een function`
>
> Prompt B: `Schrijf een JavaScript-function filterEven(numbers) die een array van gehele getallen krijgt en een nieuwe array teruggeeft met enkel de even getallen. Gebruik een arrow function en de methode filter.`

Leg in maximaal vijf zinnen uit welke prompt beter is. Benoem concreet wat er ontbreekt in de zwakkere prompt.

## X3 Een vage prompt verbeteren (Easy) {#x3}

Deze prompt is te vaag voor een bruikbaar resultaat:

> `maak een applicatie voor een boodschappenlijstje`

Schrijf een betere versie. Leg daarin minstens vast: de taal of technologie, de functionaliteit, de randgevallen en het formaat van de output.

## X4 Twee AI-tools vergelijken (Medium) {#x4}

Tools verschillen in hoe je ze gebruikt, wat ze kosten en waar ze sterk in zijn. Een gestructureerde vergelijking helpt je kiezen.

Kies twee AI-tools voor programmeren en vergelijk ze op deze criteria:

- Hoe integreer je de tool in je werkwijze?
- Welke programmeertalen ondersteunt de tool?
- Wat kost de tool, en welke gratis opties zijn er?
- Wat is het grootste voordeel tegenover de andere tool?
- Wat is de grootste beperking?

Sluit af met een aanbeveling van maximaal vijf zinnen: welke tool kies je voor je projectwerk dit semester, en waarom?

## X5 Eén prompt in drie versies (Medium) {#x5}

Meer context geeft meestal betere output. Je meet dat nu zelf.

Neem dit probleem: een function die een JSON-bestand inleest en valideert. Schrijf drie versies van de prompt, elke versie met meer context en precisie dan de vorige. Test elke versie in dezelfde tool en noteer:

- wat de output was;
- wat beter of slechter was dan bij de vorige versie;
- hoeveel je zelf nog moest aanpassen.

Sluit af met één alinea: wat is het effect van meer context op de bruikbaarheid van de output?

## X6 Een echt geval opzoeken (Medium) {#x6}

De beperkingen uit 1.5 veroorzaken ook in echte projecten problemen.

Zoek online een gedocumenteerd geval waarin AI-gegenereerde code problemen veroorzaakte: een GitHub-issue, een blogpost, een post-mortem of een nieuwsartikel. Beschrijf in maximaal tien zinnen:

- wat er misliep;
- welke beperking van AI daarvoor verantwoordelijk was;
- welke les je eruit trekt voor je eigen gebruik.

Vermeld de bron.

## X7 Refactoring met AI (Hard) {#x7}

Deze code is bewust slecht geschreven: de namen zeggen niets en de structuur is omslachtig.

```python
def d(l):
    r = []
    for i in range(len(l)):
        x = 0
        for j in range(len(l)):
            if l[j] < l[i]:
                x = x + 1
        r.append(x)
    return r
```

1. Laat een AI-tool de code herschrijven naar leesbare code. Noteer elke prompt en de output.
2. Noteer wat je zelf nog aanpaste, en waarom.
3. Controleer dat je herschreven versie hetzelfde resultaat geeft als het origineel voor deze aanroep:

```python
print(d([40, 10, 30, 10]))
```

```output
[3, 0, 2, 0]
```

4. Leg in maximaal drie zinnen uit wat de function doet. Zou je ze zelf met of zonder AI herschrijven?

## X8 Vijf prompts, van vaag naar precies (@home) {#x8}

Dit is een uitgebreidere versie van X5, voor wie het effect van een prompt grondig wil onderzoeken.

Kies een programmeerprobleem van gemiddelde moeilijkheid, zoals zoeken met filters of dataverwerking in meerdere stappen. Schrijf vijf prompts voor hetzelfde probleem, gaande van vaag tot heel precies. Test elke prompt in dezelfde tool en vergelijk de resultaten op:

- correctheid voor gewone gevallen;
- behandeling van randgevallen;
- leesbaarheid en stijl;
- hoeveel je zelf nog moest aanpassen om de code bruikbaar te maken.
