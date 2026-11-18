// Kleine lokale server om je project in de browser te bekijken.
// Starten: typ in de terminal van je map  node server.js
// Stoppen: druk in de terminal op Ctrl+C
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
};

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent(request.url.split('?')[0]);
  const file = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);

  if (!file.startsWith(__dirname)) {
    response.writeHead(403);
    response.end('Niet toegestaan');
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Niet gevonden: ' + urlPath);
      return;
    }
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    response.end(data);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log('Open http://localhost:' + port + ' in je browser.');
  console.log('Stoppen: druk op Ctrl+C.');
});
