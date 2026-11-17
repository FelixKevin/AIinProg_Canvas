// Hulpfuncties van de webshop.

function sumPrices(prices) {
  let sum = 0;
  let i = 0;
  while (i < prices.length) {
    sum += prices[i];
    i++;
  }
  return sum;
}

function formatPrice(cents) {
  return `€ ${(cents / 100).toFixed(2).replace('.', ',')}`;
}

function isEmpty(items) {
  return items.length === 0;
}

module.exports = { sumPrices, formatPrice, isEmpty };
