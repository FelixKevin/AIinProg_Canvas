---
module: 2
order: 2
tocMode: page
tocLabel: Oefeningen
published: false
---

# Oefeningen module 2

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 2. De extra-reeks gaat dieper in op technieken zoals few-shot prompting en system prompts.

## E1 Patronen herkennen {#e1 .easy}

Elke prompt volgt een van de drie patronen uit [2.3](./module-2.md#2_3).

Deel elke prompt in als genereren, aanpassen of evalueren:

1. Schrijf een function die het gemiddelde van een array berekent.
2. Bekijk de code hieronder en zeg of er geheugenlekken kunnen optreden.
3. Herschrijf deze function zodat ze async/await gebruikt in plaats van callbacks.
4. Schrijf vijf test cases voor de function validateEmail().
5. Vergelijk de twee implementaties hieronder en zeg welke leesbaarder is.

Geef je antwoord in dit formaat:

```text
1. genereren
2. ...
```

## E2 Drie prompts rangschikken {#e2 .easy}

Een betere prompt bevat meer van de vier elementen uit [2.1](./module-2.md#2_1).

Rangschik deze prompts van slechtste naar beste. Leg per prompt in één zin uit wat goed of fout is.

- A: `doe iets met een lijst`
- B: `Schrijf een function die een lijst sorteert.`
- C: `Schrijf een Python-function sort_descending(numbers) die een lijst van gehele getallen sorteert van groot naar klein en de gesorteerde lijst teruggeeft. Gebruik geen externe libraries.`

Geef je antwoord in dit formaat:

```text
Slechtste: ... – reden
Middelste: ... – reden
Beste: ... – reden
```

## E3 Een wachtwoordchecker specificeren {#e3 .easy}

Deze prompt laat het model bijna alles zelf kiezen:

> `maak een wachtwoordchecker`

Herschrijf de prompt met de structuur uit [2.2](./module-2.md#2_2). Vul alle vier de elementen in: context, input, output en minstens één beperking. Voeg minstens drie voorbeelden toe, waarvan één randgeval (zie [2.4](./module-2.md#2_4)).

## M1 Drie prompts uitschrijven {#m1}

Met een vaste structuur schrijf je snel een volledige prompt. Je oefent dat op drie verschillende taken.

Schrijf voor elke taak een prompt met context, input, output en beperkingen:

1. Een function die één regel uit een CSV-bestand omzet naar een object.
2. Een endpoint dat een lijst van producten ophaalt en filtert op prijs.
3. Een function die een datum in het formaat `DD/MM/JJJJ` omzet naar `JJJJ-MM-DD`.

Geef bij taak 3 minstens vier voorbeelden, waarvan twee randgevallen.

## M2 Een vage en een precieze prompt testen {#m2}

In 2.1 zag je dat een vage prompt vage output geeft. Je test dat nu zelf.

Prompt A:

```text
Schrijf een function die e-mailadressen valideert.
```

Prompt B:

```text
Schrijf een JavaScript-function validateEmail(email) die controleert of een
string een geldig e-mailadres is. Gebruik een reguliere expressie. De function
geeft true terug bij een geldig adres en false bij een ongeldig adres.
Voorbeelden: 'sara@example.com' -> true, 'sara@' -> false, '' -> false,
null -> false.
```

1. Stuur beide prompts naar dezelfde AI-tool, elk in een nieuw gesprek.
2. Test beide functions met deze vier waarden: `'sara@example.com'`, `'sara@'`, `''` en `null`.
3. Noteer de resultaten in een tabel en beschrijf de concrete verschillen tussen de twee functions.

```text
Input              | Prompt A | Prompt B
'sara@example.com' | ...      | ...
```

## M3 Eigen code laten evalueren {#m3}

Een evaluatieprompt kan je ook op je eigen code loslaten. Je leert er zowel over je code als over de feedback van het model.

Kies een function die je zelf schreef in Programming Fundamentals. Laat een AI-tool ze evalueren met een prompt die zegt waarop het model moet letten. Noteer:

- de prompt die je gebruikte;
- de feedback van het model;
- wat je overnam en wat niet, met een reden per punt.

## M4 Een prompt template bouwen {#m4}

Sommige taken doe je telkens opnieuw. Een **prompt template** is een prompt met een vaste structuur en invulvelden, zodat je hem snel hergebruikt.

Kies een taak die je vaak doet, zoals een function documenteren of een testbestand opzetten. Bouw er een template voor:

- een vaste structuur met context, input, output en beperkingen;
- invulvelden tussen `< >` voor wat telkens verandert;
- één ingevuld voorbeeld.

Test de ingevulde template in een AI-tool en noteer of de output bruikbaar is.

## H1 Zero-shot, few-shot en chain-of-thought {#h1 .hard}

Er bestaan verschillende technieken om een prompt op te bouwen. Drie veelgebruikte zijn:

- **zero-shot prompting**: een prompt zonder voorbeelden;
- **few-shot prompting**: een prompt met enkele voorbeelden van input en output, zoals in 2.4;
- **chain-of-thought prompting**: een prompt die het model vraagt om stap voor stap te redeneren voor het antwoordt.

Kies een programmeertaak van enige omvang, zoals een algorithm, dataverwerking in meerdere stappen of de koppeling met een externe API.

1. Schrijf voor die taak drie prompts: zero-shot, few-shot en chain-of-thought.
2. Test alle drie in dezelfde AI-tool.
3. Vergelijk de output op correctheid, randgevallen en leesbaarheid.
4. Beslis welke techniek de bruikbaarste code oplevert voor dit soort taak, en leg uit waarom.

## H2 Eén lange prompt, twee weken later {#h2 .hard}

Lees deze situatie.

> Een developer laat een volledige functionaliteit genereren met één lange, gedetailleerde prompt. De code werkt bij de eerste test. Twee weken later moet er nieuwe functionaliteit bij. De structuur blijkt moeilijk uit te breiden, en de code bevat aannames die botsen met de nieuwe requirements.

Beantwoord in maximaal 300 woorden:

1. Wat liep er mis in de manier van prompten?
2. Hoe had de developer iteratief kunnen werken? Beschrijf de eerste drie prompts die je zelf zou sturen.
3. Welke rol spelen kleine stappen hier (zie [2.5](./module-2.md#2_5))?

## @1 Een prompt-logboek {#home1 .home}

Je eigen manier van prompten verbetert pas als je ze bekijkt.

Hou tot de volgende les een logboek bij van elke prompt die je gebruikt voor je studies of projecten. Noteer per prompt:

- de prompt zoals je hem verstuurde;
- de output, of een samenvatting ervan;
- of je moest itereren, hoe vaak en wat je aanpaste;
- een score voor de kwaliteit van de output, van 1 tot 5.

Schrijf daarna een reflectie van minstens 400 woorden. Welke patronen zie je in je eigen prompts? Wat doe je goed, en wat kan beter?

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Tools voor prompts (Easy) {#x1}

Er bestaan tools die je helpen om betere prompts te schrijven.

Zoek drie zulke tools op. Noteer per tool de naam, wat de tool doet en of ze gratis is.

## X2 Randgevallen voor een leeftijd (Easy) {#x2}

Een function controleert of iemand meerderjarig is op basis van een leeftijd.

1. Leg in één zin uit wat een randgeval is.
2. Geef vier randgevallen voor deze function, elk met de verwachte output.

```text
18 -> true
...
```

## X3 De happy path uitleggen (Easy) {#x3}

Leg in maximaal vijf zinnen uit wat de happy path is en waarom het een probleem is als een model enkel die dekt. Geef één voorbeeld uit je eigen code of uit deze module.

## X4 Few-shot prompting (Medium) {#x4}

In H1 maakte je kennis met few-shot prompting. Hier ga je er dieper op in.

1. Zoek op hoe few-shot prompting werkt en wanneer je het gebruikt. Vermeld je bron.
2. Schrijf een few-shot prompt voor een programmeertaak met minstens vier voorbeelden.
3. Test de prompt en noteer of de output de voorbeelden volgt.

## X5 System prompt en user prompt (Medium) {#x5}

Veel AI-tools maken een onderscheid tussen een **system prompt**, die vaste instructies geeft voor een heel gesprek, en een **user prompt**, die één vraag stelt.

Zoek op hoe dat onderscheid werkt in een tool naar keuze. Leg in maximaal tien zinnen uit wanneer je welke gebruikt en wat een goede system prompt oplevert bij taken die je vaak herhaalt. Vermeld je bron.

## X6 Eigen code laten herschrijven (Medium) {#x6}

Een aanpassingsprompt verandert bestaande code. Je beoordeelt hoe goed dat lukt.

1. Kies een stuk code dat je zelf schreef.
2. Laat het herschrijven naar een andere stijl of technologie. Zeg in je prompt wat moet blijven.
3. Beoordeel de output: wat is beter, wat ging verloren, en klopt de logica nog?

## X7 Chain-of-thought prompting (Medium) {#x7}

1. Zoek op wat chain-of-thought prompting is en waarom het werkt. Vermeld je bron.
2. Schrijf een chain-of-thought prompt voor een programmeerprobleem naar keuze.
3. Vergelijk de output met die van dezelfde prompt zonder de vraag om stap voor stap te redeneren.

## X8 Het context window (Hard) {#x8}

Het **context window** is de hoeveelheid tekst die een model in één keer kan verwerken.

Zoek op hoe groot het context window is van twee modellen naar keuze. Beantwoord daarna in maximaal 300 woorden:

- Hoe beïnvloedt het context window de manier waarop je prompts schrijft voor een grote codebase?
- Welke strategieën bestaan er om met een beperkt context window te werken?

## X9 Een prompt playbook (Hard) {#x9}

Bouw een persoonlijk prompt playbook: minstens zes geteste prompts die je in een typisch project zou gebruiken. Orden ze per patroon: genereren, aanpassen en evalueren. Noteer bij elke prompt:

- het doel;
- de volledige prompt;
- een samenvatting van de output;
- wat je moest aanpassen.

## X10 Role prompting (Hard) {#x10}

Bij **role prompting** geef je het model een rol, zoals "Je bent een ervaren backend developer" of "Je bent een code reviewer".

1. Kies een programmeertaak.
2. Stuur dezelfde prompt twee keer, met en zonder een rol.
3. Beschrijf wat er verandert aan de output, en of de rol een verschil maakt in correctheid of enkel in toon.

## X11 Een prompt library (@home) {#x11}

Een uitgebreidere versie van X9, voor wie een bibliotheek wil opbouwen die hij of zij echt gebruikt.

Maak een document met minstens twaalf prompts, verdeeld over de drie patronen en minstens drie toepassingen, zoals test cases schrijven, code reviewen of documentatie genereren. Elke prompt bevat:

- een naam en een categorie;
- de volledige prompt, met invulvelden tussen `< >`;
- wanneer je de prompt gebruikt;
- minstens één voorbeeld van de output die je verwacht.
