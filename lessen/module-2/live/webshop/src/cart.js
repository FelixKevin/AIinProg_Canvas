// Winkelmandje van de webshop. Alle prijzen zijn in eurocent.

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// customer: { name: 'Sara', isStudent: true }
function total(items, customer) {
  return subtotal(items);
}

module.exports = { subtotal, total };
