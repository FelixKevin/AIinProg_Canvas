# Afspraken voor dit project

- Dit is een 3D-scorebord voor een quizavond met twee rondes. De regels van de quiz staan in `README.md`.
- Elk bestand heeft één taak: `index.html` voor de structuur van de pagina, `style.css` voor de opmaak, `data.js` voor de scores, `stats.js` voor de berekeningen, `panel.js` voor de tekst van het paneel en `main.js` voor de 3D-scène.
- `stats.js` en `panel.js` bevatten geen three.js en geen HTML. Een function in `stats.js` verandert haar input niet.
- Kan een function in `stats.js` niets berekenen, bijvoorbeeld bij een lege lijst, dan geeft ze `null` terug. Ze gooit geen fout.
- three.js versie 0.170.0 is al geladen in `index.html`. Voeg geen andere libraries en geen addons toe. Het project heeft geen build step en gebruikt geen TypeScript.
- Namen en comments zijn in het Engels. Namen staan in camelCase. Tekst op het scherm is in het Nederlands.
- De pagina wordt bekeken via de lokale server: `node server.js`. Verander `server.js` niet.
