// Calculations on the scores. No three.js and no HTML in this file.

// Makes a list with only the scores of the players.
export function getScores(players) {
  const scores = [];
  for (const player of players) {
    scores.push(player.score);
  }
  return scores;
}

// The rule of the quiz: a player passes with at least this many points.
export const passMark = 10;

// Says if a score reaches the pass mark.
export function hasPassed(score) {
  return score >= passMark;
}

// Counts the scores that reach the pass mark.
export function countPassed(scores) {
  let passed = 0;
  for (const score of scores) {
    if (hasPassed(score)) {
      passed++;
    }
  }
  return passed;
}

// Calculates the average score.
export function calculateAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
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
