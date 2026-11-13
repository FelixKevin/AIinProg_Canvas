// Winkelmandje van een kleine webshop. Alle prijzen zijn in eurocent.

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyDiscount(amount, percent) {
  return amount - amount * percent;
}

function total(items, discountPercent = 0) {
  return applyDiscount(subtotal(items), discountPercent);
}

function formatPrice(cents) {
  return `€ ${(cents / 100).toFixed(2).replace('.', ',')}`;
}

module.exports = { subtotal, applyDiscount, total, formatPrice };
