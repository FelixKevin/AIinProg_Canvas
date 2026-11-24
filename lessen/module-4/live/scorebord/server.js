// A small local server to view the project in the browser.
// Start: type in the terminal of this folder  node server.js
// Stop: click in the terminal and press Ctrl+C
// Is port 3000 in use by another program? Type  node server.js 3001
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.argv[2]) || 3000;
const folder = path.dirname(fileURLToPath(import.meta.url));
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
};

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent(request.url.split('?')[0]);
  const file = path.join(folder, urlPath === '/' ? 'index.html' : urlPath);

  // A browser asks for an icon for the tab. This project has none.
  if (urlPath === '/favicon.ico') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (!file.startsWith(folder + path.sep)) {
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
    response.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(data);
  });
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log('Poort ' + port + ' is al in gebruik.');
    console.log('Draait er nog een server in een andere terminal? Stop die met Ctrl+C en typ opnieuw: node server.js');
    console.log('Vind je geen andere server? Typ dan: node server.js ' + (port + 1));
  } else {
    console.log('De server kan niet starten: ' + error.message);
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('Deze server toont de map: ' + path.basename(folder));
  console.log('Open http://localhost:' + port + ' in je browser.');
  console.log('Stoppen: druk op Ctrl+C.');
});
