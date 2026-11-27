// Makes the text of the panel. No three.js and no HTML in this file.
import {
  getTotal,
  getTotals,
  getRoundScores,
  countPassed,
  calculateAverage,
  getHighest,
  getLowest,
  findWinner,
} from './stats.js';

// Rounds a number to one decimal.
function roundToOneDecimal(value) {
  return Math.round(value * 10) / 10;
}

// Makes the lines with the numbers of the quiz night.
export function getPanelLines(players) {
  const totals = getTotals(players);
  const winner = findWinner(players);
  const lines = [];
  lines.push('Geslaagd: ' + countPassed(totals) + ' van ' + totals.length);
  lines.push('Gemiddelde totaal: ' + roundToOneDecimal(calculateAverage(totals)));
  lines.push('Gemiddelde ronde 1: ' + roundToOneDecimal(calculateAverage(getRoundScores(players, 1))));
  lines.push('Gemiddelde ronde 2: ' + roundToOneDecimal(calculateAverage(getRoundScores(players, 2))));
  lines.push('Hoogste totaal: ' + getHighest(totals));
  lines.push('Laagste totaal: ' + getLowest(totals));
  lines.push('Winnaar: ' + winner.name + ' (' + getTotal(winner) + ')');
  return lines;
}

// Makes one line per player: the name and the total.
export function getPlayerLines(players) {
  const lines = [];
  for (const player of players) {
    lines.push(player.name + ': ' + getTotal(player));
  }
  return lines;
}
