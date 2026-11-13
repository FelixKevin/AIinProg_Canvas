const test = require('node:test');
const assert = require('node:assert');
const { subtotal, total, formatPrice } = require('./cart');

const items = [
  { name: 'Toetsenbord', price: 4999, quantity: 1 },
  { name: 'USB-kabel', price: 500, quantity: 2 },
];

test('subtotal telt prijs maal aantal op', () => {
  assert.strictEqual(subtotal(items), 5999);
});

test('total zonder korting is gelijk aan de subtotal', () => {
  assert.strictEqual(total(items), 5999);
});

test('total met 10% korting', () => {
  assert.strictEqual(total([{ name: 'Muis', price: 2000, quantity: 1 }], 10), 1800);
});

test('formatPrice toont euro met een komma', () => {
  assert.strictEqual(formatPrice(1800), '€ 18,00');
});
