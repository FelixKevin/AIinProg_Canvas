// Calculations on the scores. No three.js and no HTML in this file.

// The rule of the quiz: a player passes with at least this total.
export const passMark = 20;

// Gives the total of a player: round 1 plus round 2.
export function getTotal(player) {
  return player.rounds[0] + player.rounds[1];
}

// Makes a list with the totals of the players.
export function getTotals(players) {
  const totals = [];
  for (const player of players) {
    totals.push(getTotal(player));
  }
  return totals;
}

// Makes a list with the scores of round 1.
export function getRound1Scores(players) {
  const scores = [];
  for (const player of players) {
    scores.push(player.rounds[0]);
  }
  return scores;
}

// Makes a list with the scores of round 2.
export function getRound2Scores(players) {
  const scores = [];
  for (const player of players) {
    scores.push(player.rounds[0]);
  }
  return scores;
}

// Says if a total reaches the pass mark.
export function hasPassed(total) {
  return total >= passMark;
}

// Counts the totals that reach the pass mark.
export function countPassed(totals) {
  let passed = 0;
  for (const total of totals) {
    if (hasPassed(total)) {
      passed++;
    }
  }
  return passed;
}

// Calculates the average of a list of numbers.
export function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

export function getHighest(totals) {
  const sorted = totals.sort();
  return sorted[sorted.length - 1];
}

export function getLowest(totals) {
  let lowest = 20;
  for (const total of totals) {
    if (total < lowest) {
      lowest = total;
    }
  }
  return lowest;
}

// Finds the player with the highest total.
export function findWinner(players) {
  if (players.length === 0) {
    return null;
  }
  let winner = players[0];
  for (const player of players) {
    if (getTotal(player) > getTotal(winner)) {
      winner = player;
    }
  }
  return winner;
}

export function top(a) {
  let x = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i].score > x.score) {
      x = a[i];
    }
  }
  return x;
}
