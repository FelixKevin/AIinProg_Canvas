import * as THREE from 'three';
import { players } from './data.js';
import { getTotal, hasPassed, passMark, findWinner } from './stats.js';
import { getPanelLines, getPlayerLines } from './panel.js';

// --- Settings ---
const backgroundColor = 0x10131f;
const floorColor = 0x2a3050;
const passedColor = 0x35c46a;
const failedColor = 0xe2574c;
const lineColor = 0xffffff;
const diamondColor = 0xffd24a;
const lightIntensity = 3;
const towerWidth = 0.8;
const towerDistance = 1.4;
const heightPerPoint = 0.125;
const startHeight = 0.01;
const growSpeed = 0.04;
const diamondSpeed = 0.03;

// --- Panel ---
function fillList(id, lines) {
  const list = document.getElementById(id);
  for (const line of lines) {
    const item = document.createElement('li');
    item.textContent = line;
    list.appendChild(item);
  }
}

function showPanel() {
  fillList('stats', getPanelLines(players));
  fillList('playerList', getPlayerLines(players));
}

showPanel();

// --- Scene, camera and renderer ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(backgroundColor);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(-3, 5, 14);
camera.lookAt(-3, 2.8, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- Light ---
const sunLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
sunLight.position.set(5, 10, 8);
scene.add(sunLight);

const skyLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(skyLight);

// --- Objects ---
function getTowerX(index) {
  return (index - (players.length - 1) / 2) * towerDistance;
}

function createFloor() {
  const geometry = new THREE.BoxGeometry(players.length * towerDistance + 1, 0.2, 4);
  const material = new THREE.MeshStandardMaterial({ color: floorColor });
  const floor = new THREE.Mesh(geometry, material);
  floor.position.y = -0.1;
  return floor;
}

function createTower(player, index) {
  const geometry = new THREE.BoxGeometry(towerWidth, 1, towerWidth);
  geometry.translate(0, 0.5, 0);
  let color = failedColor;
  if (hasPassed(getTotal(player))) {
    color = passedColor;
  }
  const material = new THREE.MeshStandardMaterial({ color: color });
  const tower = new THREE.Mesh(geometry, material);
  tower.position.x = getTowerX(index);
  tower.scale.y = startHeight;
  return tower;
}

function createPassLine() {
  const geometry = new THREE.BoxGeometry(players.length * towerDistance + 1, 0.03, 1.6);
  const material = new THREE.MeshBasicMaterial({ color: lineColor, transparent: true, opacity: 0.35 });
  const passLine = new THREE.Mesh(geometry, material);
  passLine.position.y = passMark * heightPerPoint;
  return passLine;
}

function createDiamond(winner) {
  const geometry = new THREE.OctahedronGeometry(0.35);
  const material = new THREE.MeshStandardMaterial({ color: diamondColor });
  const diamond = new THREE.Mesh(geometry, material);
  diamond.position.x = getTowerX(players.indexOf(winner));
  diamond.position.y = getTotal(winner) * heightPerPoint + 0.8;
  return diamond;
}

scene.add(createFloor());
scene.add(createPassLine());

const towers = [];
for (let i = 0; i < players.length; i++) {
  const tower = createTower(players[i], i);
  towers.push(tower);
  scene.add(tower);
}

const winner = findWinner(players);
console.log('winner', winner);
const diamond = createDiamond(winner);
scene.add(diamond);

// --- Animation loop ---
function animate() {
  for (let i = 0; i < towers.length; i++) {
    const targetHeight = getTotal(players[i]) * heightPerPoint;
    if (towers[i].scale.y < targetHeight) {
      towers[i].scale.y += growSpeed;
    }
  }
  diamond.rotation.y += diamondSpeed;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// --- Input: the space bar lets the towers grow again ---
function onKeyDown(event) {
  if (event.code === 'Space') {
    for (const tower of towers) {
      tower.scale.y = startHeight;
    }
  }
}

window.addEventListener('keydown', onKeyDown);

// --- Keep the picture the right size when the window changes ---
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);
