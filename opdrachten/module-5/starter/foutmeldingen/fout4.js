// Run it in the terminal: node fout4.js
const rounds = [14, 17];

function getTotal(rounds) {
  const total = 0;
  for (const points of rounds) {
    total += points;
  }
  return total;
}

function showTotal(rounds) {
  console.log('Totaal: ' + getTotal(rounds));
}

showTotal(rounds);
