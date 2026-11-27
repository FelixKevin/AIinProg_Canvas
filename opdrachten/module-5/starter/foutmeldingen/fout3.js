// Run it in the terminal: node fout3.js
const rounds = [14, 17];

function getTotal(rounds) {
  let total = 0;
  for (let i = 0; i < rounds.length(); i++) {
    total += rounds[i];
  }
  return total;
}

console.log('Totaal: ' + getTotal(rounds));
