// Shows the text of the panel in the terminal, without a browser.
// Run it in the terminal: node check.js
import { players } from './data.js';
import { getPanelLines } from './panel.js';

console.log('Aantal spelers: ' + players.length);
for (const line of getPanelLines(players)) {
  console.log(line);
}
