# Module 7 Saaie* Dingen Zoals de Wet

*(Ze zijn niet echt saai. Ze zijn alleen minder leuk dan code schrijven. Maar ze kunnen je carrière maken of breken.)*

---

## 7.1 Licenties, IP en copyright

Je hebt een functie laten genereren. Ze werkt perfect. Je plakt ze in je project, commit en push.

Wat je misschien niet weet: die functie kan juridische beperkingen hebben.

AI-modellen worden getraind op enorme hoeveelheden bestaande code, open-source projecten, GitHub-repositories, documentatie, tutorials, ... Wanneer een model code genereert, doet het dat op basis van patronen uit die trainingsdata (herinner je, AI is eigenlijk gewoon aan predictions aan het doen). Het is onmogelijk om als gebruiker te weten of een specifiek fragment afgeleid is van code met een bepaalde licentie.

Dat heeft gevolgen in een professionele context. Sommige licenties, zoals de GPL, vereisen dat code die ze als basis gebruikt, ook onder dezelfde licentie gepubliceerd wordt. Als je in een commercieel project GPL-code integreert zonder dat te weten, heb je een juridisch probleem.

De kernboodschap is eenvoudig maar wordt te vaak genegeerd: **de verantwoordelijkheid voor de code ligt altijd bij de developer die ze gebruikt en integreert.** Niet bij de AI-tool. Niet bij de aanbieder van de tool. Bij jou.

Dat betekent in de praktijk:
- Gebruik AI-tools waarvan de aanbieder duidelijk communiceert over licenties en eigendom van gegenereerde output.
- Controleer of je organisatie of project specifieke licentievereisten heeft.
- Wees voorzichtig met het integreren van grote, complexe gegenereerde stukken code in commerciële producten zonder review.
- Ga er nooit automatisch van uit dat gegenereerde code "vrij te gebruiken" is.

Dit is geen reden om AI niet te gebruiken. Het is een reden om er bewust mee om te gaan.

---

## 7.2 Privacy en security

Er is iets dat je ***nooit*** aan een AI-tool geeft: gevoelige data.

Wanneer je een prompt stuurt naar een externe AI-service, stuur je die tekst naar servers waarvan je niet zeker bent wie er toegang toe heeft. Afhankelijk van de tool, de instellingen en de gebruiksvoorwaarden kan die data opgeslagen, geanalyseerd of gebruikt worden voor verdere training. Zelfs als de aanbieder belooft dat data niet opgeslagen wordt, geldt de vuistregel: als je het niet via email zou sturen, stuur het dan ook niet naar een AI-tool.

**Wat je nooit in een prompt stopt:**
- API-sleutels, tokens of wachtwoorden
- Persoonlijke gegevens van gebruikers of klanten (namen, emailadressen, medische informatie, ...)
- Interne bedrijfsinformatie die niet publiek is (architectuurdocumenten, strategische plannen, klantdata, ...)
- Broncode van systemen die vertrouwelijke businesslogica bevatten

**Hoe je toch met AI kan werken:** anonimiseer. Vervang echte namen door `Gebruiker A`, echte API-sleutels door `API_KEY_PLACEHOLDER`, echte bedrijfsnamen door `Bedrijf X`. Je behoudt de structuur van het probleem, eigenlijk het enige wat de AI nodig heeft, zonder de gevoelige informatie te delen.

Naast privacy is er ook het security-aspect van de gegenereerde code zelf. AI stelt oplossingen voor die functioneel werken maar kwetsbaar kunnen zijn: SQL-injectie, hardcoded credentials, ontbrekende inputvalidatie, onveilige configuraties, ... Die risico's evalueer je actief, niet achteraf.

Twee regels om te onthouden: **stuur geen gevoelige data naar externe AI-tools**, en **vertrouw gegenereerde code niet blind op vlak van security**.

---

## 7.3 Organisatorische richtlijnen

Je werkt voor een bedrijf. Of je doet stage. Of je werkt aan een groepsproject met afspraken.

In die context bestaat er meestal zoiets als beleid. En dat beleid geldt hopelijk ook voor AI-tools.

Sommige organisaties verbieden het gebruik van externe AI-tools volledig, bijvoorbeeld omdat ze werken met vertrouwelijke data, in een gereguleerde sector opereren (financiën, zorg, overheid) of simpelweg nog geen duidelijk beleid hebben uitgewerkt en liever op safe spelen. Andere organisaties hebben specifieke goedgekeurde tools, specifieke use cases waar AI wel of niet mag, of procedures voor het reviewen van AI-gegenereerde code.

Als developer ben je verantwoordelijk voor het kennen en naleven van die richtlijnen. "*Ik wist niet dat het niet mocht*" is geen verdediging als je vertrouwelijke data gelekt hebt via een niet-goedgekeurde tool.

Naast het naleven van richtlijnen is er ook **transparantie**: eerlijk zijn over hoe je werk tot stand gekomen is.

Dat betekent:
- In een academische context: AI-gebruik vermelden waar dat van je verwacht wordt, en geen werk indienen als eigen werk wanneer het volledig door AI gegenereerd werd.
- In een professionele context: collega's en teamleden informeren wanneer significante stukken code AI-gegenereerd zijn, zodat de juiste review kan plaatsvinden.
- In beide contexten: de intentie heeft niets te maken met de verplichting. Of je het nuttig vindt om te vermelden of niet, is niet relevant. Het gaat om eerlijkheid.

---

## 7.4 Bronvermelding en transparantie

AI is geen boek, geen artikel, geen website. Maar het is ook geen onzichtbaar hulpmiddel dat geen spoor nalaat.

Wanneer AI een duidelijke bijdrage levert aan een stuk werk, code, analyse, documentatie, tekst, ... is transparantie over die bijdrage de norm in zowel academische als professionele context.

**Hoe verwijs je naar AI-gebruik?**
Er is nog geen universele standaard, maar de principes zijn duidelijk:

- Benoem de tool die je gebruikte (ChatGPT, GitHub Copilot, Claude, ...).
- Beschrijf op hoofdlijnen hoe je de tool gebruikte (codegeneratie, review, samenvatting, ...).
- Vermeld dat de output door jou gecontroleerd en aangepast werd. Of als dat niet het geval was, wees daar eerlijk over.
- Volg de specifieke richtlijnen van je school, organisatie of opdrachtgever.

**Waarom maakt dit uit?**
Bronvermelding bij AI is niet enkel een formaliteit. Het maakt duidelijk welke onderdelen door jou zelf ontwikkeld en begrepen werden en welke gedeeltelijk of volledig door een AI gegenereerd werden. Dat is relevante informatie voor een docent die je beoordeelt, voor een collega die je code moet reviewen en voor jezelf als je later verantwoording moet afleggen over de keuzes die gemaakt werden.

Een developer die transparant is over AI-gebruik, is professioneler, niet minder professioneel.

---

## 7.5 Kritische houding als basisinstelling

Alles wat in deze cursus aan bod gekomen is, draait uiteindelijk om één ding: **een kritische houding**.

Niet wantrouwen. Niet angst. Kritisch denken.

AI is een krachtig **hulpmiddel**. Ze kan je sneller maken, je helpen bij taken die je liever uitbesteedt en je nieuwe ideeën aanreiken. Maar ze is niet foutloos, ze kent jouw context niet en ze draagt geen verantwoordelijkheid voor wat ze produceert.

Die verantwoordelijkheid ligt bij jou.

Een kritische houding ten opzichte van AI-output betekent:
1. **Systematisch controleren.** Niet alleen of de code draait, maar of ze doet wat gevraagd werd, of ze past in de codebase, of ze veilig is, en of de aannames kloppen.
2. **Aannames expliciet maken.** Elke keer dat de AI een keuze maakt die jij niet expliciet vroeg, is dat een aanname. Die aannames benoem je en evalueer je.
3. **Resultaten testen en verifiëren.** Werkende code is niet hetzelfde als correcte code. Testresultaten zijn de enige objectieve verificatie.
4. **Begrip bewaken.** Als je iets niet begrijpt, gebruik je AI om het te leren begrijpen — niet om het probleem te omzeilen. Een developer die code integreert zonder ze te begrijpen, bouwt op drijfzand.

Het verschil tussen iemand die AI goed gebruikt en iemand die er afhankelijk van wordt, zit niet in de tools die ze gebruiken. Het zit in de houding waarmee ze dat doen.

Die houding is niet aangeboren. Ze is een keuze. En ze is de meest waardevolle vaardigheid die je uit deze cursus kan meenemen.

---


## Oefeningen

### Easy

**01.** Zoek op welk licentiebeleid twee veelgebruikte AI-coderingstools hanteren voor gegenereerde output (bv. GitHub Copilot en een andere tool naar keuze). Beantwoord per tool:

- Wie is eigenaar van de gegenereerde code?
- Zijn er beperkingen op commercieel gebruik?
- Wat zegt de tool over mogelijke licentie-inbreuken?

---

**02.** Wat is het verschil tussen een  **Open-source licentie** (zoals MIT of Apache) en een **copyleft licentie** (zoals GPL)? Waarom is dat onderscheid relevant bij het integreren van AI-gegenereerde code in een commercieel project?

---

**03.** Formuleer in je eigen woorden wanneer je AI-gebruik moet vermelden in een academische context. Gebruik de richtlijnen van je opleiding als referentie. Als die er niet zijn, beschrijf wat jij als een redelijke standaard zou beschouwen.

---

**04.** Leg uit waarom "het werkt toch" geen voldoende criterium is voor verantwoord AI-gebruik. Gebruik minstens twee van de thema's uit deze module (licenties, privacy, security, richtlijnen, transparantie, kritische houding) om je antwoord te onderbouwen.

---

### Medium

 **011.** Anonimiseer de volgende code zo dat je ze veilig kan sturen naar een externe AI-tool voor debugging, zonder gevoelige informatie te lekken:

```python
def stuur_email(ontvanger, onderwerp, inhoud):
    smtp_server = "mail.ehb.be.be"
    gebruikersnaam = "noreply@ehb.be"
    wachtwoord = "TotaalEchtWachtwoord1!"
    # verbinding maken en e-mail sturen
    ...
```

---

 **02.** Zoek een gedocumenteerde case waarbij een bedrijf of developer in de problemen kwam door AI-gebruik in een professionele context (bv. een datalek via een AI-tool, een licentieconflict, ...). Beschrijf wat er misging en welke van de principes uit deze module hadden kunnen voorkomen dat het fout liep.

---

 **03.** Beschrijf een concreet scenario waarbij een developer onbewust een privacyinbreuk begaat via AI-gebruik. Welke stappen in het proces gingen fout? Hoe had het voorkomen kunnen worden?

---

 **04.** Schrijf twee versies van een bronvermelding voor AI-gebruik:

- Een vermelding voor een academische opdracht waarbij je AI gebruikte voor het genereren van een algoritme dat je daarna reviewde en aanpaste.
- Een vermelding in een professionele commit message voor hetzelfde scenario.

---

### Moeilijk

 **01.** Schrijf een uitgebreid **AI-gebruiksbeleid** voor een fictief softwarebedrijf van tien developers. Het beleid omvat: toegelaten tools en use cases, verboden gebruik, data-anonimiseringsrichtlijnen, review- en validatieprocedures, transparantieverplichtingen en sancties bij niet-naleving.

---

 **02.** Analyseer hoe drie grote AI-coderingstools (GitHub Copilot, Cursor en één andere naar keuze) hun gebruikers informeren over licenties, datagebruik en privacy. Vergelijk hun transparantie en identificeer welke tool het meest geschikt is voor gebruik in een professionele context met vertrouwelijke data.

---

 **03.** Onderzoek het concept **AI-bias**: de neiging van AI-modellen om bestaande vooroordelen uit hun trainingsdata te reproduceren. Hoe kan AI-bias zich uiten in gegenereerde code of aanbevelingen? Geef twee concrete voorbeelden en beschrijf hoe een developer dit kan detecteren en adresseren.

---

 **026.** Stel een persoonlijk **verantwoord AI-gebruiksmanifest** op: een document dat beschrijft hoe jij als toekomstig developer AI wil inzetten op een manier die technisch, juridisch en ethisch verantwoord is. Het manifest bevat minstens tien concrete principes, elk met een motivatie en een praktijkvoorbeeld. Dit is geen theoretisch document, het is een persoonlijk engagement.

---

### At Home

**01. Licentieaudit**

Kies een open-source project op GitHub dat je interessant vindt. Voer een licentieaudit uit:

- Welke licentie hanteert het project?
- Welke dependencies heeft het project en welke licenties gebruiken die?
- Zijn er licentieconflicten tussen de dependencies en het project zelf?
- Wat zijn de implicaties als je dit project als basis gebruikt voor een commercieel product?

Gebruik AI als hulpmiddel bij de analyse en documenteer wat je leerde.
---

**02. Privacy Impact Assessment**

Kies een reëel of fictief softwareproject waarbij gebruikersdata verwerkt wordt. Stel dat je bij de ontwikkeling AI-tools inzet. Voer een volledige **Privacy Impact Assessment** (PIA) uit:

- Welke persoonsgegevens worden verwerkt?
- Op welke punten komt die data in contact met AI-tools?
- Wat zijn de risico's voor de privacy van de gebruikers?
- Welke technische en organisatorische maatregelen neem je?
- Hoe documenteer je AI-gebruik voor verantwoording?

Lever een gestructureerd rapport in van minstens 600 woorden. Gebruik de GDPR-principes als kader.

---