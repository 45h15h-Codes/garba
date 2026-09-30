// The band's fixed gear, built in 3D where the 2D scene places each player (BAND in util.js mirrors the plan in
// venue-scene.js): the drum kit on its own riser, the keyboard on an X-stand, the tabla on a gaddi with its bolster,
// the guitar and bass amps, a monitor wedge before each standing player and a spare guitar on a stand. What the
// players hold (the dhol, the guitars, the sticks) is drawn by the 2D scene with them.
//
// Each instrument that stands between you and its player (the kit, the keyboard, the tabla) leaves its outline, by
// role, for the 2D scene to cut out of the player once it has drawn them.

import * as THREE from 'three';
import { TAU, canvasTexture, face, solidOf, boxSolid } from './util.js';
import { std } from './kit.js';

function mesh(parent, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); parent.add(m); return m; }
const box = (parent, w, h, d, x, y, z, mat, rx, ry, rz) => mesh(parent, new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz);
const cyl = (parent, r0, r1, h, x, y, z, mat, seg = 16, rx, ry, rz) => mesh(parent, new THREE.CylinderGeometry(r0, r1, h, seg), mat, x, y, z, rx, ry, rz);

const M = {
  shell: () => std('#6b1420', 0.28, 0.35), chrome: () => std('#c9ccd1', 0.22, 0.9), brass: () => std('#c99a3a', 0.28, 0.95),
  head: () => std('#ece6d6', 0.55), black: () => std('#141416', 0.5, 0.3), wood: () => std('#7a3f1c', 0.45, 0.1)
};

let kickTex = null;
function kickHead() {
  if (kickTex) return kickTex;
  kickTex = canvasTexture(256, 256, (g, w) => {
    const c = w / 2;
    g.fillStyle = '#ece6d6'; g.beginPath(); g.arc(c, c, c, 0, TAU); g.fill();
    g.strokeStyle = '#8e1b2c'; g.lineWidth = 14; g.beginPath(); g.arc(c, c, c - 10, 0, TAU); g.stroke();
    g.translate(c, c);
    for (let k = 0; k < 12; k++) { g.save(); g.rotate(k / 12 * TAU); g.fillStyle = k % 2 ? '#c9963f' : '#8e1b2c'; g.beginPath(); g.ellipse(52, 0, 30, 11, 0, 0, TAU); g.fill(); g.restore(); }
    g.fillStyle = '#c9963f'; g.beginPath(); g.arc(0, 0, 22, 0, TAU); g.fill();
  });
  return kickTex;
}
let keysTex = null;
function keysTop() {
  if (keysTex) return keysTex;
  keysTex = canvasTexture(512, 128, (g, w, h) => {
    g.fillStyle = '#16161a'; g.fillRect(0, 0, w, h);
    // Panel: a lit screen and knobs at the back, the keys along the front (the player's side)
    g.fillStyle = '#7fd0ff'; g.fillRect(w * 0.42, h * 0.1, w * 0.16, h * 0.18);
    g.fillStyle = '#8c8f96'; for (let k = 0; k < 10; k++) { g.beginPath(); g.arc(w * (0.08 + k * 0.03), h * 0.2, 4, 0, TAU); g.fill(); g.beginPath(); g.arc(w * (0.66 + k * 0.03), h * 0.2, 4, 0, TAU); g.fill(); }
    const k0 = h * 0.45, n = 52;
    g.fillStyle = '#f2efe6'; g.fillRect(w * 0.02, k0, w * 0.96, h * 0.5);
    g.fillStyle = 'rgba(0,0,0,.35)'; for (let k = 1; k < n; k++) g.fillRect(w * 0.02 + w * 0.96 * k / n, k0, 1, h * 0.5);
    g.fillStyle = '#111'; for (let k = 0; k < n; k++) if ([0, 1, 3, 4, 5].indexOf(k % 7) >= 0) g.fillRect(w * 0.02 + w * 0.96 * (k + 0.68) / n, k0, w * 0.96 / n * 0.6, h * 0.3);
  });
  return keysTex;
}
let grilleT = null;
const grille = () => grilleT || (grilleT = new THREE.MeshStandardMaterial({ roughness: 0.85, map: canvasTexture(128, 128, (g, w, h) => {
  g.fillStyle = '#141313'; g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,255,255,.06)'; for (let y = 5; y < h - 5; y += 5) for (let x = 5; x < w - 5; x += 5) g.fillRect(x, y, 1.5, 1.5);
  g.strokeStyle = 'rgba(255,255,255,.14)'; g.lineWidth = 3; g.beginPath(); g.arc(w / 2, h * 0.58, w * 0.3, 0, TAU); g.stroke();
  g.fillStyle = 'rgba(232,176,75,.7)'; g.fillRect(w * 0.38, h * 0.08, w * 0.24, 5);
}) }));

// A cabinet (amp, cab, wedge) facing the audience (-Z), its grille on the front
function cabinet(parent, w, h, d, x, y, z, rx = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.x = rx; parent.add(g);
  box(g, w, h, d, 0, h / 2, 0, std('#1a1818', 0.75));
  face(mesh(g, new THREE.PlaneGeometry(w * 0.92, h * 0.88), grille(), 0, h / 2, -d / 2 - 0.003));
  return g;
}

/* ---------- each player's gear ---------- */
function drums(ctx, x, z) {
  const { kit, root, floor } = ctx, out = [], hold = (m) => { out.push(solidOf(m)); return m; };
  const yb = floor + 0.3, shell = M.shell(), chrome = M.chrome(), brass = M.brass();
  // The drum riser, carpeted, with a line of light along its front
  box(root, 2.3, 0.3, 2.0, x, floor + 0.15, z - 0.5, std('#1c1414', 0.8));
  box(root, 2.2, 0.01, 1.9, x, yb + 0.005, z - 0.5, std('#4a1420', 0.95));
  const strip = mesh(root, new THREE.PlaneGeometry(2.3, 0.03), kit.glow('#ffb46a', 1.2, 'show'), x, floor + 0.26, z - 1.505); face(strip);
  // Throne
  cyl(root, 0.17, 0.16, 0.08, x, yb + 0.52, z + 0.05, M.black(), 16); cyl(root, 0.025, 0.025, 0.5, x, yb + 0.25, z + 0.05, chrome, 6);
  // Kick drum, its printed front head and hoops
  hold(cyl(root, 0.28, 0.28, 0.42, x, yb + 0.29, z - 0.72, shell, 24, Math.PI / 2));
  face(mesh(root, new THREE.CircleGeometry(0.27, 28), new THREE.MeshStandardMaterial({ map: kickHead(), roughness: 0.6 }), x, yb + 0.29, z - 0.935));
  [-0.935, -0.505].forEach((dz) => { const h = mesh(root, new THREE.TorusGeometry(0.285, 0.014, 5, 24), chrome, x, yb + 0.29, z + dz); h.rotation.set(0, 0, 0); });
  // Rack toms on the kick, tilted to the drummer; the snare and floor tom on their stands
  [[-0.17, 0.13], [0.17, 0.12]].forEach(([dx, r]) => { const t = hold(cyl(root, r, r, 0.2, x + dx, yb + 0.8, z - 0.6, shell, 18, 0.35)); cyl(root, r * 1.02, r * 1.02, 0.012, x + dx, yb + 0.8 + 0.1 * Math.cos(0.35), z - 0.6 + 0.1 * Math.sin(0.35), M.head(), 18, 0.35); cyl(root, 0.012, 0.012, 0.25, x + dx * 0.5, yb + 0.62, z - 0.66, chrome, 5); });
  hold(cyl(root, 0.18, 0.18, 0.13, x - 0.42, yb + 0.62, z - 0.3, chrome, 20, 0.1)); cyl(root, 0.18, 0.18, 0.01, x - 0.42, yb + 0.69, z - 0.29, M.head(), 20, 0.1);
  [0, 1, 2].forEach((k) => { const a = k / 3 * TAU; cyl(root, 0.01, 0.01, 0.6, x - 0.42 + Math.cos(a) * 0.1, yb + 0.28, z - 0.3 + Math.sin(a) * 0.1, chrome, 4, Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3); });
  hold(cyl(root, 0.2, 0.2, 0.38, x + 0.45, yb + 0.42, z - 0.28, shell, 20)); cyl(root, 0.2, 0.2, 0.01, x + 0.45, yb + 0.615, z - 0.28, M.head(), 20);
  [0, 1, 2].forEach((k) => { const a = k / 3 * TAU + 0.5; cyl(root, 0.01, 0.01, 0.3, x + 0.45 + Math.cos(a) * 0.2, yb + 0.15, z - 0.28 + Math.sin(a) * 0.2, chrome, 4); });
  // Hi-hat, crash and ride on their stands
  cyl(root, 0.012, 0.012, 0.95, x - 0.74, yb + 0.47, z - 0.22, chrome, 5);
  hold(cyl(root, 0.17, 0.17, 0.012, x - 0.74, yb + 0.93, z - 0.22, brass, 22)); cyl(root, 0.17, 0.17, 0.012, x - 0.74, yb + 0.96, z - 0.22, brass, 22);
  cyl(root, 0.012, 0.012, 1.4, x - 0.66, yb + 0.7, z - 0.8, chrome, 5);
  hold(cyl(root, 0.24, 0.24, 0.01, x - 0.62, yb + 1.45, z - 0.74, brass, 24, 0.3, 0, 0.2));
  cyl(root, 0.012, 0.012, 1.2, x + 0.7, yb + 0.6, z - 0.66, chrome, 5);
  hold(cyl(root, 0.27, 0.27, 0.01, x + 0.66, yb + 1.25, z - 0.62, brass, 24, 0.3, 0, -0.2));
  // A mic on the kick and one over the kit
  cyl(root, 0.03, 0.02, 0.15, x + 0.1, yb + 0.15, z - 1.02, M.black(), 8, Math.PI / 2);
  return out;
}
function keys(ctx, x, z) {
  const { root, floor } = ctx, out = [], kz = z - 0.36, ky = floor + 0.92, black = M.black();
  // The X-stand: a pair of crossed bars at each end, and the keyboard on it
  [-0.45, 0.45].forEach((dx) => { [0.5, -0.5].forEach((a) => out.push(solidOf(box(root, 0.035, 1.02, 0.035, x + dx, floor + 0.44, kz, black, a)))); box(root, 0.04, 0.03, 0.62, x + dx, floor + 0.015, kz, black); });
  const body = box(root, 1.28, 0.1, 0.36, x, ky, kz, black);
  // A brushed strip along its front with the maker's badge
  face(mesh(root, new THREE.PlaneGeometry(1.2, 0.05), std('#5a5d66', 0.35, 0.8), x, ky - 0.01, kz - 0.182));
  const top = mesh(root, new THREE.PlaneGeometry(1.26, 0.34), new THREE.MeshStandardMaterial({ map: keysTop(), roughness: 0.5 }), x, ky + 0.051, kz);
  top.rotation.x = -Math.PI / 2;
  out.push(solidOf(body));
  return out;
}
function tabla(ctx, x, z) {
  const { root, floor } = ctx, out = [];
  // The gaddi: a white mattress with a maroon edge, and the round bolster behind
  box(root, 1.2, 0.1, 1.1, x, floor + 0.05, z + 0.05, std('#ece6d6', 0.95));
  box(root, 1.22, 0.02, 1.12, x, floor + 0.01, z + 0.05, std('#7e1827', 0.9));
  cyl(root, 0.13, 0.13, 0.9, x, floor + 0.23, z + 0.52, std('#b8312b', 0.85), 14, 0, 0, Math.PI / 2);
  // The bayan (metal, on the left) and the dayan (wood, on the right) on their cloth rings, heads cream with black
  const bz = z - 0.32, top = floor + 0.1;
  [[-0.16, 0.1], [0.14, 0.075]].forEach(([dx, r]) => { const ring = mesh(root, new THREE.TorusGeometry(r * 0.9, 0.025, 5, 16), std('#7e1827', 0.9), x + dx, top + 0.02, bz); ring.rotation.x = Math.PI / 2; });
  const bayan = mesh(root, new THREE.LatheGeometry([[0, 0], [0.07, 0.01], [0.12, 0.07], [0.12, 0.14], [0.1, 0.2]].map(([a, b]) => new THREE.Vector2(a, b)), 18), std('#9aa0a6', 0.25, 0.85), x - 0.16, top + 0.02, bz);
  const dayan = cyl(root, 0.075, 0.085, 0.25, x + 0.14, top + 0.145, bz, M.wood(), 16);
  cyl(root, 0.1, 0.1, 0.008, x - 0.16, top + 0.225, bz, M.head(), 18); cyl(root, 0.075, 0.075, 0.008, x + 0.14, top + 0.272, bz, M.head(), 16);
  cyl(root, 0.035, 0.035, 0.01, x - 0.19, top + 0.229, bz, M.black(), 12); cyl(root, 0.028, 0.028, 0.01, x + 0.14, top + 0.276, bz, M.black(), 12);
  out.push(solidOf(bayan), solidOf(dayan));
  // A mic on a short boom over them
  cyl(root, 0.012, 0.012, 0.75, x + 0.42, top + 0.37, bz + 0.1, M.black(), 5);
  cyl(root, 0.01, 0.01, 0.4, x + 0.25, top + 0.72, bz, M.black(), 5, 0, 0, Math.PI / 2 - 0.3);
  return out;
}
// A monitor wedge on the floor before a player, its sloped face up at them
function wedge(ctx, x, z) { box(ctx.root, 0.46, 0.22, 0.32, x, ctx.floor + 0.13, z, std('#1c1c20', 0.5, 0.25), -0.45); }
function guitarOnStand(ctx, x, z) {
  const { root, floor } = ctx, g = new THREE.Group(); g.position.set(x, floor, z); g.rotation.x = 0.22; root.add(g);
  const body = std('#c46a2a', 0.3, 0.1), neck = std('#3a2412', 0.5);
  cyl(g, 0.19, 0.19, 0.1, 0, 0.3, 0, body, 22, Math.PI / 2); cyl(g, 0.15, 0.15, 0.1, 0, 0.58, 0, body, 20, Math.PI / 2);
  face(mesh(g, new THREE.CircleGeometry(0.05, 16), M.black(), 0, 0.46, -0.051));
  box(g, 0.05, 0.5, 0.03, 0, 0.92, -0.02, neck); box(g, 0.08, 0.14, 0.03, 0, 1.22, -0.02, std('#1b120b', 0.5));
  [-0.12, 0.12].forEach((dx) => box(root, 0.02, 0.5, 0.02, x + dx, floor + 0.24, z + 0.12, M.black(), -0.3));
}

/* ---------- the band ---------- */
// plan: BAND.big or BAND.sheri; frame: { x0, x1, front (z of the riser's front), floor (y of its top) }
export function buildBand(kit, root, plan, frame) {
  const ctx = { kit, root, floor: frame.floor }, holes = {}, W = frame.x1 - frame.x0;
  plan.forEach((m) => {
    const x = frame.x0 + W * m.u, z = frame.front + m.d;
    if (m.role === 'drums') holes.drums = drums(ctx, x, z);
    else if (m.role === 'keys') holes.keys = keys(ctx, x, z);
    else if (m.role === 'tabla') holes.tabla = tabla(ctx, x, z);
    else if (m.role === 'guitar') { cabinet(root, 0.6, 0.48, 0.28, x - 0.55, frame.floor, z + 0.55); if (!frame.small) { guitarOnStand(ctx, x + 0.62, z + 0.35); wedge(ctx, x, z - 0.95); } }
    else if (m.role === 'bass') { cabinet(root, 0.62, 0.9, 0.42, x + 0.5, frame.floor, z + 0.62); cabinet(root, 0.62, 0.2, 0.34, x + 0.5, frame.floor + 0.9, z + 0.6); wedge(ctx, x, z - 0.95); }
    else if (m.role === 'dhol' && !frame.small) wedge(ctx, x, z - 0.95);
  });
  return holes;
}
