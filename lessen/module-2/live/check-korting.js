// Controleert of total() in webshop/src/cart.js de regels uit docs/kortingen.md volgt.
// Gebruik: node check-korting.js   (vanuit lessen/module-2/live)
const { total } = require('./webshop/src/cart');

const cases = [
  ['student, bestelling van 5000', [{ price: 5000, quantity: 1 }], { isStudent: true }, 4250],
  ['student, bestelling van 1500 (onder 20 euro)', [{ price: 1500, quantity: 1 }], { isStudent: true }, 1500],
  ['student, bestelling van precies 2000', [{ price: 2000, quantity: 1 }], { isStudent: true }, 1700],
  ['student, bestelling van 2001 (afronden)', [{ price: 2001, quantity: 1 }], { isStudent: true }, 1701],
  ['geen student, bestelling van 5000', [{ price: 5000, quantity: 1 }], { isStudent: false }, 5000],
];

let ok = 0;
for (const [name, items, customer, expected] of cases) {
  let got;
  try { got = total(items, customer); } catch (e) { got = `fout: ${e.message}`; }
  const pass = got === expected;
  if (pass) ok++;
  console.log(`${pass ? 'OK  ' : 'FOUT'}  ${name}: verwacht ${expected}, kreeg ${got}`);
}
console.log(`\n${ok} van ${cases.length} juist`);
