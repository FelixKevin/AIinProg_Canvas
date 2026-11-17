// Uitleendienst van een bibliotheek. Alle bedragen zijn in eurocent.

function daysLate(dueDate, returnDate) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.floor((returnDate - dueDate) / msPerDay);
  return diff > 0 ? diff : 0;
}

function fine(dueDate, returnDate) {
  // TODO: bereken de boete
  return 0;
}

module.exports = { daysLate, fine };
