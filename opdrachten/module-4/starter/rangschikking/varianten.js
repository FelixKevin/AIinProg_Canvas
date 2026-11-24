// Three versions of the same function: the names of the players, from the highest score to the lowest.
// Run it in the terminal: node varianten.js

// Version A
function getRankingA(players) {
  if (players.length === 0) {
    return null;
  }
  const ranking = [...players]; // a copy of the list
  ranking.sort((a, b) => b.score - a.score);
  return ranking.map((player) => player.name);
}

// Version B
function getRankingB(players) {
  return players.sort((a, b) => b.score - a.score).map((player) => player.name);
}

// Version C
function getRankingC(players) {
  const names = [];
  const used = [];
  for (let i = 0; i < players.length; i++) {
    let best = -1;
    for (let j = 0; j < players.length; j++) {
      if (!used.includes(j) && (best === -1 || players[j].score > players[best].score)) {
        best = j;
      }
    }
    used.push(best);
    names.push(players[best].name);
  }
  return names;
}

// --- The check. You do not have to change anything below this line. ---
function check(label, getRanking) {
  const players = [
    { name: 'Amira', score: 14 },
    { name: 'Jonas', score: 7 },
    { name: 'Noor', score: 18 },
    { name: 'Lars', score: 10 },
  ];

  console.log(label);
  console.log('  Rangschikking:              ' + getRanking(players).join(', '));
  console.log('  De lijst players daarna:    ' + players.map((player) => player.name).join(', '));
  console.log('  Rangschikking, lege lijst:  ' + JSON.stringify(getRanking([])));
}

console.log('De lijst players voor de check:  Amira, Jonas, Noor, Lars');
check('Versie A', getRankingA);
check('Versie B', getRankingB);
check('Versie C', getRankingC);
