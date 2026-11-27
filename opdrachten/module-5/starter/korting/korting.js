// Run it in the terminal: node korting.js
function proc(items, t, d) {
  let res = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == t && items[i].date > d) {
      if (items[i].active == true) {
        res.push({ id: items[i].id, val: items[i].price * 0.9 });
      }
    }
  }
  return res;
}

const items = [
  { id: 1, type: 'book', date: '2026-10-01', active: true, price: 20 },
  { id: 2, type: 'book', date: '2026-08-15', active: true, price: 15 },
  { id: 3, type: 'game', date: '2026-10-05', active: true, price: 40 },
  { id: 4, type: 'book', date: '2026-10-10', active: false, price: 30 },
];

console.log(proc(items, 'book', '2026-09-01'));
