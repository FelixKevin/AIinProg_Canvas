// Tests for the calculations and for the text of the panel.
// Run them in the terminal: node test.js
import {
  getTotal,
  getTotals,
  hasPassed,
  countPassed,
  calculateAverage,
  getHighest,
  getLowest,
  findWinner,
} from './stats.js';
import { getPanelLines } from './panel.js';

let failed = 0;

// Compares what the code gives (actual) with what we expect (expected).
function check(name, actual, expected) {
  if (typeof actual === typeof expected && String(actual) === String(expected)) {
    console.log('OK    ' + name);
  } else {
    console.log('FOUT  ' + name);
    console.log('      verwacht: ' + String(expected));
    console.log('      gekregen: ' + String(actual));
    failed++;
  }
}

// The players for the tests. The tests do not use data.js:
// the scores of the quiz night change, the scores of a test do not.
const testPlayers = [
  { name: 'Mila', rounds: [12, 10] },
  { name: 'Sem', rounds: [5, 8] },
  { name: 'Lina', rounds: [20, 15] },
];

// --- Unit tests: one function at a time ---
check('getTotal telt de twee rondes op', getTotal(testPlayers[0]), 22);
check('getTotals geeft een totaal per speler', getTotals(testPlayers), [22, 13, 35]);
check('hasPassed: 20 is geslaagd', hasPassed(20), true);
check('hasPassed: 19 is niet geslaagd', hasPassed(19), false);
check('countPassed telt de geslaagde totalen', countPassed([22, 13, 35]), 2);
check('calculateAverage van 10 en 20 is 15', calculateAverage([10, 20]), 15);
check('calculateAverage van een lege lijst is null', calculateAverage([]), null);
check('getHighest van 22, 35 en 13 is 35', getHighest([22, 35, 13]), 35);
check('findWinner vindt de speler met het hoogste totaal', findWinner(testPlayers).name, 'Lina');

// --- Integration tests: stats.js and panel.js together ---
const lines = getPanelLines(testPlayers);
check('paneel: het aantal geslaagde spelers', lines[0], 'Geslaagd: 2 van 3');
check('paneel: het gemiddelde totaal', lines[1], 'Gemiddelde totaal: 23.3');
check('paneel: het gemiddelde van ronde 1', lines[2], 'Gemiddelde ronde 1: 12.3');
check('paneel: het gemiddelde van ronde 2', lines[3], 'Gemiddelde ronde 2: 11');
check('paneel: het hoogste totaal', lines[4], 'Hoogste totaal: 35');
check('paneel: het laagste totaal', lines[5], 'Laagste totaal: 13');
check('paneel: de winnaar', lines[6], 'Winnaar: Lina (35)');

// --- Regression tests: one test for every bug that was fixed ---

console.log('');
if (failed === 0) {
  console.log('Alle tests zijn geslaagd.');
} else {
  console.log('Aantal tests met FOUT: ' + failed);
}
