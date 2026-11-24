// Checks the calculations of stats.js, without a browser.
// Run it in the terminal: node check.js
import { players } from './data.js';
import { getScores, countPassed, calculateAverage, top } from './stats.js';

const scores = getScores(players);

console.log('Aantal spelers: ' + players.length);
console.log('Geslaagd: ' + countPassed(scores));
console.log('Gemiddelde: ' + calculateAverage(scores));
console.log('Winnaar: ' + top(players).name);
