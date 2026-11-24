// Two versions of the same function: find the player with the highest score.
// Run it in the terminal: node varianten.js

// Version A
function findWinnerA(players) {
  if (players.length === 0) {
    return null;
  }
  let winner = players[0];
  for (const player of players) {
    if (player.score > winner.score) {
      winner = player;
    }
  }
  return winner;
}

// Version B
function findWinnerB(players) {
  players.sort((a, b) => b.score - a.score);
  return players[0];
}

// --- The check. You do not have to change anything below this line. ---
function show(result) {
  if (result === null || result === undefined) {
    return String(result);
  }
  return result.name;
}

function getNames(players) {
  const names = [];
  for (const player of players) {
    names.push(player.name);
  }
  return names.join(', ');
}

function check(label, findWinner) {
  const players = [
    { name: 'Amira', score: 14 },
    { name: 'Jonas', score: 7 },
    { name: 'Noor', score: 18 },
    { name: 'Lars', score: 10 },
  ];

  console.log(label);
  console.log('  Winnaar van de lijst:    ' + show(findWinner(players)));
  console.log('  Volgorde van de lijst:   ' + getNames(players));
  console.log('  Winnaar van lege lijst:  ' + show(findWinner([])));
}

console.log('De lijst voor de check:  Amira, Jonas, Noor, Lars');
check('Versie A', findWinnerA);
check('Versie B', findWinnerB);
