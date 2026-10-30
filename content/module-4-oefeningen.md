---
module: 4
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 4

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 4. De extra-reeks biedt meer oefening in reviewen en verbeteren.

## E1 Een uitleg van AI controleren {#e1 .easy}

Een uitleg van een model is een interpretatie, geen garantie (zie [4.1](./module-4.md#4_1)).

1. Kies een function die je zelf schreef.
2. Laat een AI-tool uitleggen wat ze doet.
3. Vergelijk de uitleg met wat jij weet over je code. Noteer wat klopt, wat ontbreekt en wat fout is.

Lever de code, de uitleg van het model en je vergelijking in.

## E2 Control flow en data flow volgen {#e2 .easy}

Deze function is in Python geschreven. Ken je Python nog niet, dan is dit een goede oefening in code lezen.

```python
def process_orders(orders):
    total = 0
    processed = []
    for order in orders:
        if order["status"] == "new":
            total += order["amount"]
            processed.append(order["id"])
    return total, processed

orders = [
    {"id": 1, "status": "new", "amount": 24.5},
    {"id": 2, "status": "shipped", "amount": 12.0},
    {"id": 3, "status": "new", "amount": 11.0},
]
print(process_orders(orders))
```

```output
(35.5, [1, 3])
```

1. Beschrijf zonder AI de control flow in genummerde stappen.
2. Maak zonder AI een trace table voor `total` en `processed` (zie [4.2](./module-4.md#4_2)).
3. Laat daarna een AI-tool hetzelfde doen en vergelijk. Wat vond het model dat jij miste, en omgekeerd?

## E3 Aannames opsporen {#e3 .easy}

Elke function maakt aannames over haar input (zie [4.2](./module-4.md#4_2)).

1. Noteer alle aannames die `process_orders` uit E2 maakt.
2. Geef voor minstens drie aannames een input die de function laat crashen of een onverwacht resultaat geeft. Voer elke input uit en noteer wat er gebeurt.
3. Laat een AI-tool je analyse controleren. Welke aannames vond het model die jij niet had?

```text
Aanname: ...
Input: ...
Resultaat: ...
```

## M1 Een eigen function volledig analyseren {#m1}

Je combineert alles uit 4.2 op je eigen code.

Neem een function van minstens vijftien regels uit een eigen project of oefening.

1. Beschrijf de control flow stap voor stap.
2. Maak een trace table voor een input naar keuze.
3. Noteer alle impliciete aannames.
4. Laat daarna een AI-tool dezelfde analyse maken en vergelijk. Wat vond het model dat jij miste? Wat vond jij dat het model niet noemde?

## M2 Een AI-review beoordelen {#m2}

De output van een AI-review zijn suggesties, geen beslissingen (zie [4.3](./module-4.md#4_3)).

1. Laat een AI-tool een review doen van code die je zelf schreef. Vraag de review op specifieke punten, zoals in het voorbeeld van 4.3.
2. Beoordeel elke suggestie in een tabel:

```text
Suggestie | Terecht in mijn context? | Overgenomen? | Reden
```

3. Duid de suggesties aan die algemeen klinken maar niet relevant zijn voor jouw situatie.

## M3 Twee implementaties vergelijken {#m3}

Een keuze tussen implementaties maak je met vooraf bepaalde criteria (zie [4.5](./module-4.md#4_5)).

1. Kies een probleem, zoals het zoeken van alle dubbele waarden in een lijst.
2. Leg vooraf drie tot vijf criteria vast en noteer waarom ze in jouw context belangrijk zijn.
3. Laat twee verschillende implementaties genereren.
4. Beoordeel beide op je criteria en verantwoord je keuze in één alinea, zoals in het voorbeeld van 4.5.

## M4 Een fout laten vinden {#m4}

Hoe preciezer je een fout beschrijft, hoe gerichter de voorstellen van een model (zie [4.6](./module-4.md#4_6)).

1. Schrijf een korte function en stop er bewust een logicafout in, zoals een verkeerde operator of een off-by-one error.
2. Schrijf een prompt met de relevante code, het verwachte gedrag en het werkelijke gedrag, met een concrete input en output.
3. Laat het model de fout zoeken. Vindt het de fout? Zo niet, wat moest je toevoegen aan je prompt?

## H1 Volledige analyse van een complexe function {#h1 .hard}

Neem een function van minstens 30 regels met meerdere condities en bewerkingen op data. Maak een volledige analyse:

- de control flow, als diagram of als genummerde stappen;
- een trace table voor minstens twee verschillende inputs;
- alle impliciete aannames;
- de randgevallen die niet afgehandeld worden;
- voorstellen om leesbaarheid en structuur te verbeteren (zie [4.4](./module-4.md#4_4)).

Gebruik AI als hulpmiddel. Duid bij elk onderdeel aan wat je zelf vond en wat het model bijdroeg.

## H2 Drie implementaties, drie afwegingen {#h2 .hard}

1. Kies een algorithm, zoals zoeken of sorteren.
2. Laat drie implementaties genereren met elk een andere sterkte: de snelste, de zuinigste met geheugen en de leesbaarste.
3. Leg vijf criteria vast voor je de code bekijkt.
4. Schrijf een vergelijkend rapport van maximaal één A4 dat elke implementatie beoordeelt op die criteria.
5. Kies een implementatie voor een concrete context, bijvoorbeeld een app die de punten van 200 studenten sorteert, en verantwoord je keuze.

## @1 Code-archeologie {#home1 .home}

Je onderzoekt code van iemand anders, zonder hulp van de auteur.

Kies op GitHub een open-sourceproject van enkele honderden regels code, verdeeld over meerdere bestanden. Kies een bestand dat je nog niet kent.

1. Beschrijf de control flow van de belangrijkste function.
2. Noteer de impliciete aannames.
3. Stel minstens drie verbeteringen voor op leesbaarheid of structuur.
4. Gebruik AI als hulpmiddel en noteer bij elk punt wat het model bijdroeg en wat je zelf ontdekte.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en herhaling. Bij elke oefening staat het niveau.

## X1 Een debugprompt schrijven (Easy) {#x1}

Je hebt een function die een verkeerd resultaat geeft. Schrijf een prompt om de oorzaak te vinden met deze drie onderdelen: verwacht gedrag, werkelijk gedrag en de relevante code. Gebruik een function en een fout naar keuze.

## X2 Tools voor code review (Easy) {#x2}

Zoek twee AI-tools die gericht zijn op code review, niet op het genereren van code. Beschrijf per tool wat ze doet, hoe ze verschilt van een algemene chatbot en wanneer je ze zou gebruiken.

## X3 Werkende maar slechte code (Easy) {#x3}

Leg in maximaal vijf zinnen uit waarom "de code werkt" geen kwaliteitscriterium is. Geef één voorbeeld van code die werkt en toch slecht is, met het criterium uit 4.4 dat ze schendt.

## X4 Leesbaarder of alleen anders? (Medium) {#x4}

1. Neem een stuk slecht leesbare code, van jezelf of bewust slecht gegenereerd.
2. Laat een AI-tool een leesbaardere versie maken.
3. Beoordeel de output met de criteria uit 4.4: is de code echt leesbaarder, of alleen anders? Wat zou je nog aanpassen?

## X5 Legacy code analyseren (Hard) {#x5}

**Legacy code** is oude code die nog in gebruik is, vaak slecht gedocumenteerd of in een verouderde stijl.

1. Zoek een stuk legacy code op GitHub of een andere bron.
2. Gebruik AI om het te analyseren en een refactoring voor te stellen.
3. Noteer het volledige proces en beoordeel kritisch welke suggesties je overnam en welke niet.

## X6 Een kwaliteitsprotocol (Hard) {#x6}

Stel een persoonlijk kwaliteitsprotocol op voor het reviewen van code, met of zonder AI. Het protocol bevat minstens tien concrete controlepunten, verdeeld over leesbaarheid, structuur, correctheid, veiligheid en onderhoudbaarheid. Beschrijf bij elk punt wat je controleert, hoe je het controleert en welke tools je gebruikt.
