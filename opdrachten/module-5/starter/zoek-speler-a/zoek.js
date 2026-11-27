// Run it in the terminal: node zoek.js
const players = [
  { name: 'Jonas', rounds: [7, 12] },
  { name: 'Noor', rounds: [18, 16] },
];

// Finds the player with this name.
function findPlayer(players, name) {
  for (const player of players) {
    if (player.name === name) {
      return player;
    }
  }
  return null;
}

console.log(findPlayer(players, 'noor'));
