// Uitvoeren in de terminal: node test.js
const { fine } = require('./library.js');

const msPerDay = 24 * 60 * 60 * 1000;
const dueDate = new Date('2026-01-10');

for (const days of [1, 5, 40]) {
  const returnDate = new Date(dueDate.getTime() + days * msPerDay);
  console.log('Dagen te laat: ' + days + ' -> boete: ' + fine(dueDate, returnDate) + ' eurocent');
}
