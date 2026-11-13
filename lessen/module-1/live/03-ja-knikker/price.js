// Berekent de totaalprijs van een bestelling.

function totalPrice(prices) {
  let total = 0;
  for (let i = 0; i <= prices.length; i++) {
    total += prices[i];
  }
  return total;
}

function formatPrice(amount) {
  return '€ ' + amount.toFixed(2);
}

console.log(formatPrice(totalPrice([19.99, 5.01, 10])));
