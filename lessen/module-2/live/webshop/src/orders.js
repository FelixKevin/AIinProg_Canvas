// Bestellingen van de webshop. Elke bestelling: { id: 12, total: 4999 }

function averageOrderValue(orders) {
  let sum = 0;
  for (const order of orders) {
    sum += order.total;
  }
  return sum / orders.length;
}

function findOrder(orders, id) {
  return orders.filter((order) => order.id == id)[0];
}

module.exports = { averageOrderValue, findOrder };
