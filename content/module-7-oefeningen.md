---
module: 7
order: 2
tocMode: page
tocLabel: Oefeningen
published: true
---

# Oefeningen module 7

De core-reeks maakt iedereen: wie ze kan, beheerst de leerdoelen van module 7. De extra-reeks gaat dieper in op beleid, transparantie en privacy.

## E1 Het licentiebeleid van twee AI-tools {#e1 .easy}

Wie eigenaar is van gegenereerde code, verschilt per tool (zie [7.1](./module-7.md#7_1)).

Zoek de voorwaarden op van twee AI-tools voor programmeren, zoals GitHub Copilot en een tool naar keuze. Beantwoord per tool, met een link naar de bron:

- Wie is eigenaar van de gegenereerde code?
- Zijn er beperkingen op commercieel gebruik?
- Wat zegt de aanbieder over mogelijke inbreuken op licenties?

## E2 Open source en copyleft {#e2 .easy}

Niet elke open-sourcelicentie stelt dezelfde voorwaarden (zie [7.1](./module-7.md#7_1)).

1. Zoek het verschil op tussen een permissieve licentie, zoals MIT of Apache, en een copyleft-licentie, zoals de GPL. Vermeld je bron.
2. Leg in maximaal vijf zinnen uit waarom dat verschil belangrijk is als je gegenereerde code in een commercieel project gebruikt.

## E3 Wanneer vermeld je AI-gebruik? {#e3 .easy}

Transparantie is de norm (zie [7.4](./module-7.md#7_4)).

Zoek de richtlijnen van je opleiding over AI-gebruik op. Beschrijf in maximaal tien zinnen wanneer je AI-gebruik moet vermelden en hoe. Vind je geen richtlijnen, beschrijf dan wat jij een redelijke standaard vindt, en waarom.

## M1 Code anonimiseren {#m1}

Je wil deze function laten debuggen door een externe AI-tool (zie [7.2](./module-7.md#7_2)).

```python
def send_email(recipient, subject, body):
    smtp_server = "mail.ehb.be"
    username = "noreply@ehb.be"
    password = "TotaalEchtWachtwoord1!"
    # connect to the server and send the e-mail
    ...
```

1. Anonimiseer de code, zodat je ze veilig kan versturen.
2. Noteer per wijziging wat je verving en waarom.
3. Controleer dat het probleem nog te begrijpen is zonder de echte gegevens.

## M2 Een privacy-inbreuk ontleden {#m2}

Je bedenkt een realistisch scenario en analyseert het.

1. Beschrijf een concreet scenario waarin een developer onbewust een privacy-inbreuk pleegt via een AI-tool.
2. Duid de stappen aan waar het misliep.
3. Beschrijf per stap hoe het voorkomen kon worden, met verwijzing naar 7.2 en 7.3.

## M3 Twee bronvermeldingen {#m3}

Je gebruikte AI om een algorithm te genereren, dat je daarna reviewde en aanpaste. Schrijf twee vermeldingen van dat AI-gebruik (zie [7.4](./module-7.md#7_4)):

1. een vermelding in een academische opdracht;
2. een vermelding in een commit message voor je team.

Beide bevatten de tool, waarvoor je ze gebruikte en wat je zelf controleerde.

## H1 Een AI-beleid voor een bedrijf {#h1 .hard}

Je schrijft het beleid dat in 7.3 nog ontbrak.

Schrijf een AI-beleid voor een fictief softwarebedrijf met tien developers. Het beleid bevat:

- toegelaten tools en toepassingen;
- verboden gebruik;
- regels om data te anonimiseren;
- procedures voor review en controle;
- afspraken over transparantie;
- wat er gebeurt als iemand het beleid niet volgt.

Maak het zo concreet dat een nieuwe developer na het lezen weet wat mag en wat niet.

## H2 Bias in AI-output {#h2 .hard}

**AI-bias** is de neiging van een model om vooroordelen uit de trainingsdata over te nemen.

1. Zoek op hoe AI-bias zich kan uiten in gegenereerde code of aanbevelingen. Vermeld je bron.
2. Geef twee concrete voorbeelden. Probeer minstens één ervan zelf uit in een AI-tool.
3. Beschrijf hoe een developer zulke bias kan opsporen en aanpakken.

## @1 Een licentie-audit {#home1 .home}

Kies een open-sourceproject op GitHub en voer een licentie-audit uit:

- Welke licentie gebruikt het project?
- Welke dependencies heeft het, en welke licenties hebben die?
- Botsen de licenties van de dependencies met die van het project?
- Wat betekent dit als je het project als basis gebruikt voor een commercieel product?

Gebruik AI als hulpmiddel en noteer wat het bijdroeg en wat je zelf moest nagaan.

## Extra-reeks {#extra}

Deze oefeningen bieden variatie en verdieping. Bij elke oefening staat het niveau.

## X1 Meer dan "het werkt" (Easy) {#x1}

Leg in maximaal tien zinnen uit waarom "het werkt toch" geen voldoende criterium is voor verantwoord AI-gebruik. Gebruik minstens twee onderwerpen uit deze module: licenties, privacy, beveiliging, richtlijnen, transparantie of een kritische houding.

## X2 Een echt incident (Medium) {#x2}

Zoek een gedocumenteerd geval waarin een bedrijf of developer in de problemen kwam door AI-gebruik, zoals een datalek via een AI-tool of een licentieconflict. Beschrijf wat er misliep en welke principes uit deze module het hadden kunnen voorkomen. Vermeld de bron.

## X3 Transparantie van AI-tools vergelijken (Hard) {#x3}

Vergelijk hoe drie AI-tools voor programmeren hun gebruikers informeren over licenties, datagebruik en privacy, bijvoorbeeld GitHub Copilot, Cursor en een tool naar keuze.

- Hoe duidelijk zijn hun voorwaarden?
- Wat gebeurt er met je prompts en code?
- Welke tool is het meest geschikt voor een professionele omgeving met vertrouwelijke data, en waarom?

## X4 Een persoonlijk manifest (Hard) {#x4}

Schrijf een persoonlijk manifest voor verantwoord AI-gebruik: hoe jij als developer AI wil inzetten op een manier die technisch, juridisch en ethisch verantwoord is. Het manifest bevat minstens tien concrete principes, elk met een motivatie en een voorbeeld uit de praktijk.

## X5 Een privacy impact assessment (@home) {#x5}

Een **privacy impact assessment** (PIA) brengt de risico's voor de privacy van een project in kaart. In de GDPR heet de verplichte versie een data protection impact assessment (DPIA).

Kies een echt of fictief project dat gegevens van gebruikers verwerkt, en waarbij je AI-tools gebruikt tijdens de ontwikkeling. Schrijf een rapport van minstens 600 woorden:

- Welke persoonsgegevens verwerkt het project?
- Waar komen die gegevens in contact met AI-tools?
- Welke risico's zijn er voor de privacy van de gebruikers?
- Welke technische en organisatorische maatregelen neem je?
- Hoe documenteer je het AI-gebruik?

Gebruik de principes van de GDPR als kader.
