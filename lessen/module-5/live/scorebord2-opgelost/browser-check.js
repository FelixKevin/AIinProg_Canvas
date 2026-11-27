// Checks the page itself, in a headless browser: a browser without a window.
// The server must run in another terminal: node server.js
// Run this file in a second terminal: node browser-check.js
// Does your server use another port? Type  node browser-check.js 3001
import fs from 'node:fs';
import { execFile } from 'node:child_process';
import { players } from './data.js';
import { getPanelLines, getPlayerLines } from './panel.js';

const port = Number(process.argv[2]) || 3000;
const address = 'http://localhost:' + port;

// The places where Chrome or Edge is usually installed.
const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];

function findBrowser() {
  for (const browser of browsers) {
    if (fs.existsSync(browser)) {
      return browser;
    }
  }
  return null;
}

// Reads the text of every <li> in the list with this id.
function readList(html, id) {
  const start = html.indexOf('id="' + id + '"');
  if (start === -1) {
    return null;
  }
  let end = html.indexOf('</ul>', start);
  if (end === -1 || html.slice(start, end).includes('</ol>')) {
    end = html.indexOf('</ol>', start);
  }
  const inside = html.slice(start, end);
  const lines = [];
  for (const part of inside.split('<li>')) {
    if (part.includes('</li>')) {
      lines.push(part.split('</li>')[0]);
    }
  }
  return lines;
}

let failed = 0;

function check(name, actual, expected) {
  if (String(actual) === String(expected)) {
    console.log('OK    ' + name);
  } else {
    console.log('FOUT  ' + name);
    console.log('      verwacht: ' + String(expected));
    console.log('      gekregen: ' + String(actual));
    failed++;
  }
}

const browser = findBrowser();
if (browser === null) {
  console.log('Geen Chrome of Edge gevonden op de gewone plaats. Deze check heeft een van de twee nodig.');
} else {
  console.log('Browser zonder venster: ' + browser);
  console.log('Pagina: ' + address);
  execFile(browser, ['--headless', '--dump-dom', address], { maxBuffer: 10000000 }, (error, html) => {
    if (error || !html.includes('id="panel"')) {
      console.log('De pagina laadt niet. Draait de server? Typ in een andere terminal: node server.js');
      return;
    }
    check('het paneel toont de cijfers', readList(html, 'stats'), getPanelLines(players));
    check('het paneel toont elke speler', readList(html, 'playerList'), getPlayerLines(players));
    console.log('');
    if (failed === 0) {
      console.log('De pagina toont wat panel.js maakt.');
    } else {
      console.log('Aantal checks met FOUT: ' + failed);
    }
  });
}
