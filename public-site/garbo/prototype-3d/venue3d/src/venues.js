// The three venues, built in 3D from the shared kit:
//   outdoors — an open ground under the night sky: light towers, a big stage with side screens, chhatris over the
//              circle, bulb strings and bunting on poles, food stalls, neem trees in fairy lights, the city beyond;
//   stadium  — an indoor hall: tiered stands full of people, a steel roof with a pleated shamiana under it, brass
//              jhummars, lanterns, banners, moving-head beams, a stage at the far end;
//   sheri    — a society lane: house fronts on both sides lit with bulb curtains, otlas to sit out on, chandarvo
//              canopies and wires across, street lamps, a mandap for the band and a temple spire beyond.
// Only what stays put is built here. The people, the band, the garbo, the stalls, chairs and props, and the pictures
// on the screens are drawn live by the 2D scene over this, through the same camera.

import * as THREE from 'three';
import { TAU, lerp, seeded, canvasTexture, sag, merged, tinted, at, face, faceTo, THEMES, DJ, hsl, glowTexture } from './util.js';
import { std, glowMat, newKit, buildKit, strand, Beam } from './kit.js';
import { groundLayers } from './lighting.js';
import { buildStage, latticeMat } from './stage.js';
import { buildSky, buildSkyline } from './sky.js';
import { bake } from './bake.js';
import { chhatri, lantern, jhummar, trees, speakerPole } from './props.js';

/* ---------- ground surfaces ---------- */
function earthTexture() {
  const r = seeded(4);
  return canvasTexture(512, 512, (g, w) => {
    g.fillStyle = '#35271b'; g.fillRect(0, 0, w, w);
    for (let i = 0; i < 2600; i++) { const x = r() * w, y = r() * w, s = 1 + r() * 3, l = r(); g.fillStyle = l < 0.5 ? `rgba(255,220,170,${0.04 + r() * 0.06})` : `rgba(0,0,0,${0.08 + r() * 0.12})`; g.fillRect(x, y, s, s); }
    for (let i = 0; i < 90; i++) { const x = r() * w, y = r() * w; g.fillStyle = 'rgba(0,0,0,.12)'; g.beginPath(); g.ellipse(x, y, 6 + r() * 10, 2 + r() * 3, r() * TAU, 0, TAU); g.fill(); }
  }, { repeat: [30, 30] });
}
function boardsTexture() {
  const r = seeded(8);
  return canvasTexture(256, 512, (g, w, h) => {
    const bw = w / 4;
    for (let k = 0; k < 4; k++) for (let y = 0; y < h;) {
      const len = 90 + r() * 160, tone = 40 + r() * 16;
      g.fillStyle = `rgb(${tone + 14},${tone},${tone - 12})`; g.fillRect(k * bw, y, bw - 2, len - 2);
      g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(k * bw, y + len - 2, bw, 2);
      y += len;
    }
    g.fillStyle = 'rgba(0,0,0,.4)'; for (let k = 1; k < 4; k++) g.fillRect(k * bw - 2, 0, 2, h);
  }, { repeat: [14, 10] });
}
function pavingTexture() {
  const r = seeded(5);
  return canvasTexture(512, 512, (g, w) => {
    const sw = w / 6, sh = w / 8;
    for (let row = 0; row < 8; row++) for (let k = -1; k < 7; k++) {
      const x = k * sw + (row % 2) * sw / 2, tone = 44 + Math.floor(r() * 18);
      g.fillStyle = `rgb(${tone + 10},${tone},${tone - 10})`; g.fillRect(x + 2, row * sh + 2, sw - 4, sh - 4);
      g.fillStyle = 'rgba(255,230,190,.05)'; g.fillRect(x + 4, row * sh + 4, sw - 8, 3);
    }
  }, { repeat: [3.6, 30] });
}
function ground(root, tex, w, d, cz, rough = 0.95, receive) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: tex, roughness: rough, metalness: 0 }));
  m.rotation.x = -Math.PI / 2; m.position.set(0, 0, cz); m.receiveShadow = !!receive;
  // The ground's light maps (lighting.js) cover it edge to edge
  m.userData.rect = { w, d, cx: 0, cz };
  root.add(m);
  return m;
}
// Light on the ground from lamps the 2D scene draws (stalls, tents, the DJ's booth): the lamps are live, their light is here
function practicalPools(kit, list) { list.forEach(([x, z, r, hex, k, layer]) => kit.pools.add(x, 0.02, z, r, r, hex, k, { layer: layer || 'practical' })); }

/* ---------- trees round the open ground (the 2D scene's plan, with this renderer's own draw) ---------- */
function treesFor(r) {
  const out = [];
  const tree = (x, z, big) => {
    const n = 5 + Math.floor(r() * 3), blobs = [];
    for (let i = 0; i < n; i++) blobs.push([(r() - 0.5) * 4.2, 5 + r() * 3.2, (r() - 0.5) * 1.5, 1.8 + r() * 1.6]);
    out.push({ x, z, s: big ? 1.25 : 0.8 + r() * 0.4, blobs, fairy: r() < 0.55, hue: Math.floor(r() * 6), tone: Math.floor(r() * 3) });
  };
  for (let x = -48; x <= 48; x += 6 + r() * 4) tree(x, 58 + r() * 12, r() < 0.3);
  [-1, 1].forEach((sd) => { for (let z = -14; z < 56; z += 7 + r() * 5) tree(sd * (35 + r() * 8), z, r() < 0.3); });
  tree(-29.5, -7, true); tree(30.5, -9.5, true);
  return out;
}

// Kanat: the printed cloth walls that close off a Garba ground, red and cream panels on bamboo posts
function kanatTexture() {
  return canvasTexture(256, 128, (g, w, h) => {
    g.fillStyle = '#b3261e'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#f1e2c4'; g.fillRect(0, h * 0.18, w, h * 0.64);
    g.fillStyle = '#b3261e';
    for (let x = 0; x < w; x += 32) { g.beginPath(); g.moveTo(x, h * 0.18); g.lineTo(x + 16, h * 0.34); g.lineTo(x + 32, h * 0.18); g.fill(); g.beginPath(); g.moveTo(x, h * 0.82); g.lineTo(x + 16, h * 0.66); g.lineTo(x + 32, h * 0.82); g.fill(); }
    g.fillStyle = '#2f6b3a'; for (let x = 16; x < w; x += 32) { g.beginPath(); g.arc(x, h * 0.5, 9, 0, TAU); g.fill(); g.fillStyle = '#e8b04b'; g.beginPath(); g.arc(x, h * 0.5, 4, 0, TAU); g.fill(); g.fillStyle = '#2f6b3a'; }
    g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, 0, 3, h);
  }, { repeat: [1, 1] });
}
function kanat(root, x0, z0, x1, z1, h) {
  const len = Math.hypot(x1 - x0, z1 - z0), t = kanatTexture(); t.repeat.set(len / 3, 1);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(len, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, side: THREE.DoubleSide }));
  wall.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); wall.rotation.y = Math.atan2(x1 - x0, z1 - z0) - Math.PI / 2; root.add(wall);
  const posts = Math.round(len / 3);
  for (let k = 0; k <= posts; k++) { const u = k / posts, p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, h + 0.3, 5), std('#8a6a3a', 0.9)); p.position.set(lerp(x0, x1, u), (h + 0.3) / 2, lerp(z0, z1, u)); root.add(p); }
}

/* ---------- OUTDOORS ---------- */
function outdoors(kit, root, tier, TH, r) {
  const floorMesh = ground(root, earthTexture(), 320, 320, 20, 0.97, tier.shadows);
  practicalPools(kit, [[-26.5, 11, 3.2, '#ffbe6e', 0.3], [-26.5, 18.5, 3.2, '#ffbe6e', 0.3], [-26.5, 26, 3.2, '#ffbe6e', 0.3], [26.5, 14, 3.2, '#ffbe6e', 0.3], [26.5, 22, 3.2, '#ffbe6e', 0.3], [26.5, 30, 3.2, '#ffbe6e', 0.3], [-37, 44, 5, '#ffcf8a', 0.25], [37, 46, 5, '#ffcf8a', 0.25], [19.5, 21.4, 2.6, '#9fb8ff', 0.25, 'show']]);
  root.add(buildSkyline(175));
  // The dance floor: the ground round the circles beaten smooth and pale by thousands of feet
  const floor = new THREE.Mesh(new THREE.CircleGeometry(24, 48), new THREE.MeshBasicMaterial({ color: '#c9a27a', transparent: true, opacity: 0.09, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0.005, 16); floor.scale.set(1, 1.1, 1); root.add(floor);
  // Kanat walls round the ground, behind the stalls, and on either side of the stage
  kanat(root, -32.5, -16, -32.5, 58, 2.4); kanat(root, 32.5, -16, 32.5, 58, 2.4);
  kanat(root, -32.5, 58, -14, 58, 2.4); kanat(root, 14, 58, 32.5, 58, 2.4);
  // Light towers of lattice truss with floodlights, and the pools of light they throw
  [-31, 31].forEach((x) => {
    const pole = truss3(11); pole.position.set(x, 5.5, 16); root.add(pole);
    const head = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 0.4), std('#16110e', 0.6)); head.position.set(x, 11.6, 16); head.rotation.y = -Math.sign(x) * 0.5; head.rotation.x = 0.4; root.add(head);
    for (let k = 0; k < 4; k++) kit.bigBulbs.add(x + (k % 2 ? 0.5 : -0.5) * Math.cos(0.5), 11.3 + (k < 2 ? 0.3 : -0.2), 16 - 0.25 + (k % 2 ? 0.2 : -0.2) * Math.sign(x), 0, { color: '#fff4dc', k: 2.4, s: 1.3, twinkle: 0, layer: 'key' });
    kit.pools.add(x * 0.55, 0.02, 14, 14, 11, '#fff0d8', 0.22, { layer: 'key' });
    kit.beams.push({ from: [x, 11.2, 16], to: [x * 0.45, 0, 14], beam: new Beam(root, '#fff0d8', 20, 0.55, 0.06), layer: 'key' });
  });
  trees(kit, root, treesFor(r));
  const stage = buildStage(kit, { x0: -11, x1: 11, z: 46, h: 1.6, screenTop: 8.5, truss: 10.5, arrays: 13, sponsors: 3 });
  root.add(stage.root);
  [-21, 21].forEach((x) => speakerPole(root, x, 16, 6));
  // Chhatris hung from a ring of cable over the circle, guyed out to the light towers and the stage truss
  const ringY = 10, ring = [];
  for (let k = 0; k <= 24; k++) { const a = k / 24 * TAU + 0.3; ring.push([Math.cos(a) * 8.5, ringY - 0.25 * (1 - Math.abs(Math.sin(a * 3))), 4 + Math.sin(a) * 8.5]); }
  for (let k = 0; k < 24; k++) kit.wires.line(ring[k], ring[k + 1]);
  [[[-31, 11, 16], [-8.5, ringY, 4]], [[31, 11, 16], [8.5, ringY, 4]], [[0, 10.5, 46], [0, ringY, 12.5]]].forEach(([a, b]) => kit.wires.cable(a, b, 0.5));
  const umbrellas = [];
  for (let i = 0; i < 6; i++) { const a = i / 6 * TAU + 0.3; umbrellas.push(chhatri(kit, root, Math.cos(a) * 8.5, 7.2, 4 + Math.sin(a) * 8.5, ringY, TH.flags)); }
  // Poles with strings of bulbs and bunting crossing the ground
  const zs = [-10, 5, 20, 35], X = 24, h = 7.4;
  zs.forEach((z) => [-X, X].forEach((x) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, h, 6), std('#22180f', 0.9)); p.position.set(x, h / 2, z); root.add(p); }));
  zs.forEach((z, i) => {
    strand(kit, [-X, h, z], [X, h, z], 1.5, i % 2 ? 'flags' : 'bulbs', i * 5);
    if (i < zs.length - 1) { strand(kit, [-X, h, z], [X, h, zs[i + 1]], 1.5, 'bulbs', i * 7); strand(kit, [X, h, z], [-X, h, zs[i + 1]], 1.5, 'bulbs', i * 11); }
  });
  const rig = {
    hemi: ['#3c3a6a', '#2a1c12', 0.42, 0.7], moon: 1,
    // The two floodlights on the towers; the right one throws the crowd's shadows
    spots: [{ pos: [31, 11.2, 16], to: [12, 0, 20], color: '#ffe6c4', base: 150, distance: 60, angle: 0.5, layer: 'key' }, { pos: [-31, 11.2, 16], to: [-12, 0, 20], color: '#ffe6c4', base: 150, distance: 60, angle: 0.5, layer: 'key' }],
    // The stage's wash on the band and truss, and the warm light the bulb strings throw up under the chhatris
    points: [{ pos: [0, 7, 40], color: '#ffd6a0', base: 140, distance: 26, layer: 'show' }, { pos: [0, 5.5, 4], color: '#ffc47a', base: 70, distance: 16, layer: 'festive' }, { pos: [0, 6.5, 22], color: '#ffc47a', base: 60, distance: 18, layer: 'festive' }]
  };
  return { rig, stage, umbrellas, floor: floorMesh, fog: new THREE.FogExp2('#150d12', 0.0105), exposure: 1.15 };
}

/* ---------- STADIUM ---------- */
const SEAT_COLS = ['#c9a37a', '#b76b5a', '#8f7aa8', '#d4b58c', '#6c8fa3', '#caa0b8', '#d98c5f', '#7fa37a'];
function standCrowd(kit, root, density, r) {
  const spots = [];
  for (let row = 0; row < 11; row++) for (let x = -27; x <= 27; x += 0.72) spots.push([x + (r() - 0.5) * 0.15, 1.3 + row * 0.95, 42 + row * 1.5 + 0.55, 0]);
  [-1, 1].forEach((sd) => { for (let row = 0; row < 9; row++) for (let z = -30; z <= 40.5; z += 0.8) spots.push([sd * (25 + row * 1.5 + 0.55), 1.3 + row * 0.95, z + (r() - 0.5) * 0.15, sd]); });
  const keep = spots.filter(() => r() < 0.55 + 0.4 * density);
  const body = merged([[new THREE.CylinderGeometry(0.17, 0.22, 0.8, 6), at(0, 0.45, 0)], [new THREE.IcosahedronGeometry(0.12, 0), at(0, 0.98, 0)]]);
  const m = new THREE.InstancedMesh(body, std('#ffffff', 0.9), keep.length), mx = new THREE.Matrix4(), c = new THREE.Color();
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(keep.length * 3), 3);
  keep.forEach((s, i) => {
    const hh = 0.85 + r() * 0.25;
    m.setMatrixAt(i, mx.makeScale(1, hh, 1).setPosition(s[0], s[1], s[2]));
    c.set(SEAT_COLS[Math.floor(r() * SEAT_COLS.length)]); m.setColorAt(i, c);
    // Phones held up, lit, here and there
    if (r() < 0.05) kit.bulbs.add(s[0] + (r() - 0.5) * 0.2, s[1] + 1.35, s[2] - (s[3] ? 0 : 0.2) - s[3] * 0.2, 0, { color: '#f4f7ff', group: 2, layer: 'show', twinkle: 0.9, ph: r() * TAU, s: 0.9 });
  });
  root.add(m);
}
function shamiana(root, CEIL) {
  const edge = [], per = 12, c = CEIL;
  for (let k = 0; k < per; k++) edge.push([lerp(c.x0, c.x1, k / per), c.edge, c.z1]);
  for (let k = 0; k < per; k++) edge.push([c.x1, c.edge, lerp(c.z1, c.z0, k / per)]);
  for (let k = 0; k < per; k++) edge.push([lerp(c.x1, c.x0, k / per), c.edge, c.z0]);
  for (let k = 0; k < per; k++) edge.push([c.x0, c.edge, lerp(c.z0, c.z1, k / per)]);
  const A = c.apex, cols = ['#c85a17', '#d8c49c', '#7e1827', '#d8c49c'], pos = [], colr = [], cc = new THREE.Color();
  const tri = (a, b, d, hex) => { cc.set(hex); [a, b, d].forEach((p) => { pos.push(p[0], p[1], p[2]); colr.push(cc.r, cc.g, cc.b); }); };
  for (let k = 0; k < edge.length; k++) {
    const e0 = edge[k], e1 = edge[(k + 1) % edge.length];
    const m0 = [lerp(A[0], e0[0], 0.55), lerp(A[1], c.edge, 0.55) - 0.35, lerp(A[2], e0[2], 0.55)], m1 = [lerp(A[0], e1[0], 0.55), lerp(A[1], c.edge, 0.55) - 0.35, lerp(A[2], e1[2], 0.55)];
    const hex = cols[k % cols.length];
    tri(A, m1, m0, hex); tri(m0, m1, e1, hex); tri(m0, e1, e0, hex);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  geo.computeVertexNormals();
  const cloth = new THREE.Mesh(geo, std('#ffffff', 0.95, 0, { vertexColors: true, side: THREE.DoubleSide, emissive: '#3a1a0a', emissiveIntensity: 0.8 }));
  root.add(cloth);
  // The jhalar round the edge: maroon scallops with a gold fringe
  const jt = canvasTexture(256, 64, (g, w, h) => {
    g.clearRect(0, 0, w, h); g.fillStyle = '#6b1020';
    g.beginPath(); g.moveTo(0, 0); g.lineTo(w, 0); for (let k = 4; k > 0; k--) { const xr = k * w / 4, xl = xr - w / 4; g.lineTo(xr, h * 0.5); g.quadraticCurveTo((xl + xr) / 2, h * 1.05, xl, h * 0.5); } g.closePath(); g.fill();
    g.strokeStyle = '#d6a64a'; g.lineWidth = 4; g.beginPath(); for (let k = 0; k < 4; k++) { const xl = k * w / 4; g.moveTo(xl, h * 0.5); g.quadraticCurveTo(xl + w / 8, h * 1.02, xl + w / 4, h * 0.5); } g.stroke();
    for (let k = 0; k < 4; k++) { g.fillStyle = 'rgba(235,245,255,.9)'; g.beginPath(); g.arc((k + 0.5) * w / 4, h * 0.35, 5, 0, TAU); g.fill(); }
  });
  jt.wrapS = THREE.RepeatWrapping;
  [[(c.x0 + c.x1) / 2, c.z1, c.x1 - c.x0, 0], [(c.x0 + c.x1) / 2, c.z0, c.x1 - c.x0, Math.PI], [c.x1, (c.z0 + c.z1) / 2, c.z1 - c.z0, Math.PI / 2], [c.x0, (c.z0 + c.z1) / 2, c.z1 - c.z0, -Math.PI / 2]].forEach(([x, z, len, ry]) => {
    const t = jt.clone(); t.needsUpdate = true; t.repeat.set(len / 3.2, 1);
    const p = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.8), new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.9, emissive: '#2a0a0a' }));
    p.position.set(x, c.edge - 0.4, z); p.rotation.y = ry; root.add(p);
  });
}
function stadium(kit, root, tier, TH, r) {
  const floorMesh = ground(root, boardsTexture(), 64, 92, 10, 0.55, tier.shadows);
  // The warm light the shamiana's cloth throws back down onto the floor, and the stalls' and DJ's lamps
  practicalPools(kit, [[0, 10, 22, '#ffb878', 0.12], [-20.5, 32.5, 3, '#ffbe6e', 0.3], [20.5, 32.5, 3, '#ffbe6e', 0.3], [15.5, 16.4, 2.6, '#9fb8ff', 0.25, 'show']]);
  // The concourse beyond the floor, darker
  const conc = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), std('#140e0a', 0.95)); conc.rotation.x = -Math.PI / 2; conc.position.set(0, -0.01, 10); root.add(conc);
  // Stands: risers along the far end and both sides, coloured row by row
  const parts = [];
  for (let row = 0; row <= 10; row++) { const zf = 42 + row * 1.5, yf = 1.3 + row * 0.95; parts.push([tinted(new THREE.BoxGeometry(58, yf, 1.5), `rgb(${36 + row * 2},${30 + row * 2},${44 + row * 2})`), at(0, yf / 2, zf + 0.75)]); }
  [-1, 1].forEach((sd) => { for (let row = 0; row <= 8; row++) { const xr = sd * (25 + row * 1.5), y = 1.3 + row * 0.95; parts.push([tinted(new THREE.BoxGeometry(1.5, y, 76), `rgb(${30 + row * 2},${26 + row * 2},${40 + row * 2})`), at(xr + sd * 0.75, y / 2, 4)]); } });
  root.add(new THREE.Mesh(merged(parts), std('#ffffff', 0.9, 0, { vertexColors: true })));
  standCrowd(kit, root, tier.density, r);
  // LED ribbon along the front of the stands
  const ribbons = [[0, 41.9, 56, 0], [-24.9, 4, 76, Math.PI / 2], [24.9, 4, 76, Math.PI / 2]].map(([x, z, len, ry]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(len, 1.0, 0.08), new THREE.MeshBasicMaterial({ color: '#ffffff' })); m.position.set(x, 0.7, z); m.rotation.y = ry; root.add(m); return m;
  });
  // The roof, the walls above the stands and the girders
  const CEIL = { roof: 17, apex: [0, 13.4, 10], edge: 11.2, x0: -24, x1: 24, z0: -14, z1: 34 };
  const roof = new THREE.Mesh(new THREE.BoxGeometry(80, 0.3, 100), std('#130e19', 0.9)); roof.position.set(0, CEIL.roof + 0.15, 10); root.add(roof);
  const back = new THREE.Mesh(new THREE.BoxGeometry(80, 17, 0.4), std('#191320', 0.9)); back.position.set(0, 8.5, 59); root.add(back);
  const front = new THREE.Mesh(new THREE.BoxGeometry(80, 17, 0.4), std('#191320', 0.9)); front.position.set(0, 8.5, -40); root.add(front);
  [-1, 1].forEach((sd) => { const w = new THREE.Mesh(new THREE.BoxGeometry(0.4, 17, 100), std('#161120', 0.9)); w.position.set(sd * 39, 8.5, 10); root.add(w); });
  for (let k = 0; k < 9; k++) kit.pools.add(-32 + k * 8, 15.4, 58.7, 2, 0.6, '#ffbe78', 0.5, { vertical: true });
  for (let z = -30; z <= 57; z += 6) { const gd = new THREE.Mesh(new THREE.PlaneGeometry(78, 0.9), latticeMat(1)); gd.material.map.repeat.set(1, 1); gd.rotation.z = Math.PI / 2; gd.position.set(0, CEIL.roof - 0.45, z); gd.rotation.set(0, 0, 0); root.add(gd); }
  shamiana(root, CEIL);
  // Jhummars, chhatris, marigold curtains, bunting and lanterns
  [[-12, 2], [12, 2], [-12, 20], [12, 20], [0, 26]].forEach(([x, z]) => jhummar(kit, root, x, z, CEIL.edge + 1.2));
  const umbrellas = [];
  for (let i = 0; i < 6; i++) { const a = i / 6 * TAU + 0.3; umbrellas.push(chhatri(kit, root, Math.cos(a) * 8.5, 8.2, 4 + Math.sin(a) * 8.5, 12.1, TH.flags)); }
  const beads = [];
  [-1, 1].forEach((sd) => { for (let k = 0; k < 6; k++) { const x = sd * (9.2 + k * 0.35); for (let y = 8.2; y > 2.4; y -= 0.14) beads.push([x, y, 35.2 - k * 0.05, Math.round(y / 0.14) % 2]); } });
  const mc = new THREE.InstancedMesh(new THREE.SphereGeometry(0.06, 6, 4), std('#ffffff', 0.9), beads.length), mx = new THREE.Matrix4();
  mc.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(beads.length * 3), 3);
  const cA = new THREE.Color('#f29a2e'), cB = new THREE.Color('#f6c342');
  beads.forEach((b, i) => { mc.setMatrixAt(i, mx.makeTranslation(b[0], b[1], b[2])); const cc = b[3] ? cA : cB; mc.setColorAt(i, cc); });
  root.add(mc);
  [2, 18, 32].forEach((z, i) => strand(kit, [-24, 11, z], [24, 11, z], 1.6, 'flags', i * 3));
  const lc = ['#ff9f5a', '#ff6fa3', '#7fe0a0', '#ffd58a'];
  let n = 0;
  [34, 22, 10, -2].forEach((z) => [-15, -5, 5, 15].forEach((x) => { lantern(kit, root, x, 9.5 + (n % 2) * 0.8, z, lc[n % 4], 11.6); n++; }));
  // Banners over the stands, exit signs, and the corner screens (lit blank until sponsors are signed)
  [-1, 1].forEach((sd) => {
    for (let bz = -24; bz <= 36; bz += 10) {
      const hex = TH.flags[((bz + 40) / 10 + (sd > 0 ? 1 : 0)) % TH.flags.length];
      const ban = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.3), std(hex, 0.8, 0, { side: THREE.DoubleSide })), -sd * Math.PI / 2); ban.position.set(sd * 25.05, 3.95, bz); root.add(ban);
      const ex = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.3), kit.glow('#1f8f4b', 1.6, 'practical')), -sd * Math.PI / 2); ex.position.set(sd * 25.02, 1.9, bz + 5); root.add(ex);
    }
    const scr = face(new THREE.Mesh(new THREE.PlaneGeometry(10, 3.5), kit.glow('#cfc4ae', 0.22, 'practical'))); scr.position.set(sd * 28, 9.15, 40); root.add(scr);
    const fr = new THREE.Mesh(new THREE.BoxGeometry(10.5, 3.9, 0.2), std('#0d0b10', 0.6)); fr.position.set(sd * 28, 9.15, 40.15); root.add(fr);
  });
  // Barrier rails in front of the stands, and the watchers at them
  [-1, 1].forEach((sd) => { const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 40), std('#8a8a92', 0.4, 0.7)); rail.position.set(sd * 24.4, 0.55, 13); root.add(rail); });
  const stage = buildStage(kit, { x0: -8, x1: 8, z: 35.5, h: 1.4, screenTop: 6.8, truss: 8.4, arrays: 10 });
  root.add(stage.root);
  // Moving heads in the roof sweeping pools of colour across the floor
  const heads = [[-18, 0], [-6, 0], [6, 0], [18, 0], [-12, 22], [12, 22]].map(([x, z], i) => {
    const fix = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.5, 10), std('#1b1920', 0.5, 0.4)); fix.position.set(x, 15.6, z); root.add(fix);
    const spot = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#ffffff', transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    spot.rotation.x = -Math.PI / 2; spot.renderOrder = 2; root.add(spot);
    return { x, z, i, beam: new Beam(root, '#ffffff', 16, 0.2, 0.2), spot, layer: 'show' };
  });
  const rig = {
    hemi: ['#6a4a3a', '#2a1a10', 0.7, 1.0], moon: 0,
    // A key light from the roof over the circle (it throws the shadows), and a wash on the band
    spots: [{ pos: [4, 15.5, -2], to: [0, 0, 6], color: '#ffd8a8', base: 200, distance: 40, angle: 0.6, layer: 'key' }, { pos: stage.wash.pos, to: stage.wash.to, color: '#ffd6a0', base: 60, distance: 18, angle: 0.75, layer: 'show' }],
    points: [[-10, 9.5, 2], [10, 9.5, 2], [-10, 9.5, 20], [10, 9.5, 20]].map((p) => ({ pos: p, color: '#ffc890', base: 70, distance: 34, layer: 'practical' }))
  };
  return {
    rig, stage, umbrellas, floor: floorMesh, fog: new THREE.FogExp2('#140c10', 0.009), exposure: 1.1,
    update(t, ctx) {
      const { TH, pulse, reduce, lv } = ctx;
      ribbons.forEach((m, si) => m.material.color.copy(hsl(TH.hues[si % TH.hues.length] + 20 * Math.sin(t * TH.speed + si), TH.sat, 40 + 8 * pulse)).multiplyScalar(1.4 * lv.festive));
      heads.forEach((h) => {
        const tt = reduce ? 0 : t * TH.speed / 0.3, tx = h.x * 0.4 + Math.sin(tt * 0.35 + h.i * 1.9) * 9, tz = h.z + Math.cos(tt * 0.27 + h.i) * 9, hex = TH.beams[h.i % TH.beams.length];
        h.beam.aim([h.x, 15.4, h.z], [tx, 0, tz]); h.beam.set(hex, lv.show * (0.8 + 0.4 * pulse));
        h.spot.position.set(tx, 0.03, tz); h.spot.scale.setScalar(2.6); h.spot.material.color.set(hex); h.spot.material.opacity = 0.5 * lv.show;
      });
    }
  };
}

/* ---------- SHERI ---------- */
function houseTexture(h, r) {
  const W = h.z2 - h.z1, pxm = 26, cw = Math.round(W * pxm), chh = Math.round(h.h * pxm);
  const draw = (lightsOnly) => (g) => {
    if (lightsOnly) { g.fillStyle = '#000'; g.fillRect(0, 0, cw, chh); }
    else {
      g.fillStyle = h.col; g.fillRect(0, 0, cw, chh);
      g.fillStyle = 'rgba(0,0,0,.18)'; for (let i = 0; i < 400; i++) g.fillRect(r() * cw, r() * chh, 2, 2);
      g.fillStyle = 'rgba(214,176,111,.28)'; g.fillRect(0, 0, cw, 0.4 * pxm);
    }
    const cols = Math.max(2, Math.round(W / 2.2));
    for (let f = 0; f < h.floors; f++) {
      const y0 = 0.9 + f * 3.1;
      for (let c = 0; c < cols; c++) {
        const zc = W * (c + 0.5) / cols, door = f === 0 && c === Math.floor(cols / 2), ww = door ? 0.75 : 0.5, wh = door ? 2.3 : 1.5, yb = door ? 0 : y0;
        const lit = ((h.lit * 10 + f * 3 + c) % 3) < 1.6;
        const x = zc * pxm, yB = chh - yb * pxm, yT = chh - (yb + wh * 0.7) * pxm, yTop = chh - (yb + wh * 1.12) * pxm;
        const arch = (hw, fill) => { g.fillStyle = fill; g.beginPath(); g.moveTo(x - hw * pxm, yB); g.lineTo(x - hw * pxm, yT); g.quadraticCurveTo(x, yTop - 6, x + hw * pxm, yT); g.lineTo(x + hw * pxm, yB); g.closePath(); g.fill(); };
        if (lightsOnly) { if (!door && lit) arch(ww, '#ffba60'); continue; }
        if (door) { arch(ww + 0.14, '#7a4a22'); arch(ww, '#3a1f12'); }
        else {
          arch(ww, lit ? '#ffba60' : '#161022');
          if (f > 0) { g.fillStyle = ['#2f5d4a', '#3a4f7a', '#6b3a1c'][h.hue % 3]; g.fillRect(x - (ww + 0.34) * pxm, yT, 0.3 * pxm, (wh * 0.72) * pxm); g.fillRect(x + (ww + 0.04) * pxm, yT, 0.3 * pxm, (wh * 0.72) * pxm); }
        }
      }
      if (!lightsOnly && f === 1 && h.balcony) { g.fillStyle = 'rgba(120,80,50,.7)'; g.fillRect(0.6 * pxm, chh - (y0 + 0.7) * pxm, cw - 1.2 * pxm, 0.9 * pxm); }
    }
    if (!lightsOnly && h.hue === 3 && W > 5.5) {
      g.fillStyle = '#b8312b'; const zm = W / 2 + 1.4; g.fillRect((zm - 1.3) * pxm, chh - 3.15 * pxm, 2.6 * pxm, 0.6 * pxm);
      g.fillStyle = '#ffe9b8'; g.font = `700 ${Math.round(0.42 * pxm)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`; g.textAlign = 'center';
      g.fillText('કરિયાણા', zm * pxm, chh - 2.7 * pxm);
    }
  };
  const map = canvasTexture(cw, chh, draw(false)), em = canvasTexture(cw, chh, draw(true));
  return { map, em };
}
function sheri(kit, root, tier, TH, r) {
  const floorMesh = ground(root, pavingTexture(), 14.4, 124, 16, 0.85, tier.shadows);
  practicalPools(kit, [[-6.2, 9, 2.6, '#ffe0a0', 0.35], [4.4, 60.6, 2.4, '#9fb8ff', 0.25, 'show']]);
  // Kerbs and the gutter either side of the lane
  [-1, 1].forEach((sd) => { const k = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 124), std('#3a3040', 0.9)); k.position.set(sd * 7.3, 0.225, 16); root.add(k); });
  // House fronts on both sides, with bulb curtains and a string along the parapet
  const houses = [], cols = ['#3a4468', '#5e4526', '#5c3040', '#28524f', '#5b5241', '#4a3a5e'];
  const facades = [];
  [-1, 1].forEach((side) => { for (let z = -48; z < 70;) { const w = 5 + r() * 3.5, h = 6.8 + r() * 4.5; houses.push({ side, z1: z, z2: z + w, h, col: cols[Math.floor(r() * cols.length)], floors: h > 9.5 ? 3 : 2, lit: r(), balcony: r() < 0.5, bulbs: r() < 0.6, hue: Math.floor(r() * 6) }); z += w + 0.15; } });
  const right = houses.find((h) => h.side > 0 && h.z1 <= 1.5 && h.z2 >= 1.5); if (right) right.col = '#7a4f9e';
  houses.forEach((h) => {
    const W = h.z2 - h.z1, X = h.side * 8, zc = (h.z1 + h.z2) / 2;
    const body = new THREE.Mesh(new THREE.BoxGeometry(6, h.h, W), std(h.col, 0.95)); body.position.set(X + h.side * 3, h.h / 2, zc); root.add(body);
    const tx = houseTexture(h, r);
    const facadeMat = new THREE.MeshStandardMaterial({ map: tx.map, emissiveMap: tx.em, emissive: '#ffffff', emissiveIntensity: 1.2, roughness: 0.9 });
    facades.push(facadeMat);
    const front = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(W, h.h), facadeMat), -h.side * Math.PI / 2);
    front.position.set(X - h.side * 0.01, h.h / 2, zc); root.add(front);
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, W), std('#d6b06f', 0.8)); cornice.position.set(X - h.side * 0.1, h.h - 0.15, zc); root.add(cornice);
    if (h.balcony) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, W - 1.2), std('#5a3a22', 0.8)); b.position.set(X - h.side * 0.35, 3.8, zc); root.add(b); const rl = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.8, W - 1.2), std('#78503a', 0.7, 0.2)); rl.position.set(X - h.side * 0.7, 4.2, zc); root.add(rl); }
    if (h.bulbs) {
      for (let cq = h.z1 + 0.6; cq < h.z2 - 0.3; cq += 1.1) for (let cy = h.h - 0.8; cy > 1.2; cy -= 0.9) kit.bulbs.add(X - h.side * 0.08, cy, cq, h.hue + Math.round(cy), { ph: cq + cy * 2, s: 0.7, twinkle: 0.4 });
      for (let q = h.z1 + 0.3; q < h.z2; q += 0.7) kit.bulbs.add(X - h.side * 0.12, h.h - 0.1, q, h.hue, { ph: q });
    }
    // A water tank on some roofs, an antenna on others
    if (h.hue % 2 === 0) { const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.2, 12), std('#1f1d24', 0.8)); tk.position.set(X + h.side * 1.4, h.h + 0.6, zc); root.add(tk); }
  });
  // The house at the end of the lane with its shrine, and the society's projector screen tied up over it
  const endH = new THREE.Mesh(new THREE.BoxGeometry(16.4, 12, 3), std('#2c2338', 0.95)); endH.position.set(0, 6, 73.5); root.add(endH);
  const shrine = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 1), std('#7a1a14', 0.7)); shrine.position.set(0, 1.6, 71.6); root.add(shrine);
  const archM = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.08, 6, 20, Math.PI), std('#e8b04b', 0.35, 0.7)); archM.position.set(0, 2.2, 71.05); root.add(archM);
  for (let d = 0; d < 5; d++) kit.bulbs.add((d - 2) * 0.45, 0.25, 70.9, 0, { color: '#ffcf7a', k: 1.4, layer: 'practical' });
  kit.pools.add(0, 0.02, 70.2, 3, 2.4, '#ff9a4a', 0.4);
  kit.pools.add(0, 1.8, 70.9, 2.2, 2.2, '#ff9a4a', 0.5, { vertical: true });
  // The society's projector screen tied up over the shrine: its frame here, its picture drawn live over it
  const scrFrame = new THREE.Mesh(new THREE.BoxGeometry(6.9, 3.1, 0.1), std('#14100c', 0.7)); scrFrame.position.set(0, 6.6, 71.85); root.add(scrFrame);
  // A temple spire behind the end of the lane, outlined in bulbs, a flag at the top
  const spire = new THREE.Mesh(new THREE.LatheGeometry([[3.2, 0], [3.0, 3], [2.2, 6], [1.2, 8.5], [0.2, 10]].map(([a, b]) => new THREE.Vector2(a, b)), 12), std('#231a2c', 0.9));
  spire.position.set(0, 12, 80); root.add(spire);
  for (let tb = 0; tb <= 20; tb++) { const u = tb / 20, a = u * Math.PI, x = -3.2 * Math.cos(a), yy = 12 + Math.sin(a) * 10 * Math.pow(Math.sin(a), 0.4); kit.bulbs.add(x * (1 - 0.7 * Math.sin(a) * 0.9), yy, 77.2, tb, { ph: tb }); }
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), std('#d8453a', 0.8, 0, { side: THREE.DoubleSide })); flag.position.set(0.6, 23.2, 80); flag.userData.dynamic = true; root.add(flag);
  // Street lamps on brackets, each throwing a pool of warm light
  for (let lz = 62; lz >= -20; lz -= 14) [-1, 1].forEach((sd, k) => {
    const z0 = lz + k * 7, arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.06), std('#1b1510', 0.8)); arm.position.set(sd * 7.3, 5.2, z0); root.add(arm);
    kit.bigBulbs.add(sd * 6.6, 5.05, z0, 0, { color: '#ffd9a0', k: 1.6, layer: 'practical', twinkle: 0.03 });
    kit.pools.add(sd * 5.8, 0.02, z0, 5, 5, '#ffc882', 0.34);
    kit.pools.add(sd * 7.2, 3.4, z0, 2.6, 2.6, '#ffc882', 0.16, { vertical: true, ry: sd * Math.PI / 2 });
  });
  // Flex banners on the house fronts (blank until sponsors are signed)
  [[-1, 3.5, 8.5], [1, 5, 10], [-1, 34, 38.5], [1, 36, 40.5]].forEach(([sd, z0, z1]) => { const b = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(z1 - z0, 1.3), std('#d6ccb8', 0.9)), -sd * Math.PI / 2); b.position.set(sd * 7.94, 3.15, (z0 + z1) / 2); root.add(b); });
  // Otlas: the raised platforms in front of the houses, where people sit out
  [-1, 1].forEach((sd) => { const o = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.45, 124), std('#4a3a34', 0.9)); o.position.set(sd * 7.4, 0.225, 16); root.add(o); });
  // The musicians' takht under a small mandap by the shrine, speakers either side
  const takht = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.6, 2.1), std('#6b3f1f', 0.8)); takht.position.set(0, 0.3, 64.95); root.add(takht);
  const durrie = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 2), new THREE.MeshStandardMaterial({ map: canvasTexture(256, 64, (g, w, h) => { for (let i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#c2721e' : '#7e1827'; g.fillRect(0, i / 7 * h, w, h / 7 + 1); } }), roughness: 1 }));
  durrie.rotation.x = -Math.PI / 2; durrie.position.set(0, 0.605, 64.95); root.add(durrie);
  [-4.6, 4.6].forEach((x) => speakerPole(root, x, 64, 1.8));
  const post = new THREE.CylinderGeometry(0.08, 0.1, 2.9, 8);
  [[-3.35, 63.9], [3.35, 63.9], [-3.35, 66], [3.35, 66]].forEach(([x, z]) => { const p = new THREE.Mesh(post, std('#c0392b', 0.6)); p.position.set(x, 0.6 + 1.45, z); root.add(p); });
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(7, 0.1, 2.3), std('#6b1020', 0.9)); canopy.position.set(0, 3.55, 64.95); canopy.rotation.x = -0.12; root.add(canopy);
  for (let k = 0; k <= 28; k++) kit.flags.add(lerp(-3.4, 3.4, k / 28), 3.45, 63.86, Math.PI / 2 + Math.PI / 2, 0.12, k);
  // Chandarvo canopies of printed cloth across the lane, wires, strings of bulbs and bunting, and lanterns
  [12, 21, 34].forEach((z, ci) => {
    const pos = [], colr = [], cc = new THREE.Color(), colsC = [TH.flags[ci % TH.flags.length], '#f6c342', '#2f8f5b', '#b8312b'];
    for (let k = 0; k < 10; k++) {
      const a = sag([-8, 7.6, z], [8, 7.6, z], 0.9, k / 10), b = sag([-8, 7.6, z], [8, 7.6, z], 0.9, (k + 1) / 10);
      const q = [[a[0], a[1], a[2]], [b[0], b[1], b[2]], [b[0], b[1] - 0.2, b[2] + 1.6], [a[0], a[1] - 0.2, a[2] + 1.6]];
      cc.set(colsC[k % colsC.length]);
      [q[0], q[1], q[2], q[0], q[2], q[3]].forEach((p) => { pos.push(p[0], p[1], p[2]); colr.push(cc.r, cc.g, cc.b); });
      kit.flags.add((a[0] + b[0]) / 2, a[1] - 0.05, a[2], Math.PI / 2 + Math.PI / 2, 0.22, k + 1);
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3)); geo.computeVertexNormals();
    root.add(new THREE.Mesh(geo, std('#ffffff', 0.9, 0, { vertexColors: true, side: THREE.DoubleSide, emissive: '#1a0c06' })));
  });
  [[-8, 9, 6, 8, 8.5, 20], [-8, 8.2, 26, 8, 9, 14], [-8, 9.2, 40, 8, 8, 48], [-8, 8.6, 2, 8, 8.8, -4], [-7.8, 9.4, -6, -7.8, 9.4, 60], [7.8, 9, -6, 7.8, 9, 60]].forEach((w) => kit.wires.cable([w[0], w[1], w[2]], [w[3], w[4], w[5]], 0.6));
  const lc = ['#ff9f5a', '#ff6fa3', '#7fe0a0', '#ffd58a'];
  [60, 50, 41, 32, 24, 16, 8, 0, -8].forEach((z, i) => {
    if (i % 3 === 0) { strand(kit, [-8, 6.8, z], [8, 6.8, z + 2], 1.1, 'bulbs', i); strand(kit, [-8, 6.8, z + 2], [8, 6.8, z], 1.1, 'bulbs', i + 3); }
    else strand(kit, [-8, 6.4, z], [8, 6.4, z], 1.3, i % 3 === 1 ? 'flags' : 'bulbs', i);
    if (i % 2 === 0) lantern(kit, root, 0, 4.4, z + 0.5, lc[i % 4], 6.4);
  });
  const rig = {
    hemi: ['#4a4070', '#2a1d18', 0.65, 0.95], moon: 1,
    // A lamp high on a house front over the circle (it throws the shadows), and a light on the musicians
    spots: [{ pos: [-6.5, 9, -3], to: [0, 0, 1], color: '#ffd29a', base: 120, distance: 30, angle: 0.7, layer: 'key' }, { pos: [0, 5.5, 60], to: [0, 0.6, 65], color: '#ffd6a0', base: 50, distance: 12, angle: 0.8, layer: 'show' }],
    points: [[-5.8, 5, -6], [5.8, 5, 8], [-5.8, 5, 22], [5.8, 5, 50]].map((p) => ({ pos: p, color: '#ffc882', base: 55, distance: 24, layer: 'practical' }))
  };
  return {
    rig, floor: floorMesh, fog: new THREE.FogExp2('#150e18', 0.012), exposure: 1.15,
    update(t, ctx) {
      // Lit windows are practical lights
      facades.forEach((m) => (m.emissiveIntensity = 1.2 * ctx.lv.practical));
      flag.rotation.y = ctx.reduce ? 0 : Math.sin(t * 3) * 0.3;
    }
  };
}

/* ---------- a lattice tower: a truss standing on the ground ---------- */
function truss3(h) {
  const g = new THREE.Group(), mat = latticeMat(Math.round(h / 1.1)), w = 0.6;
  for (let k = 0; k < 3; k++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat), a = k / 3 * TAU;
    p.position.set(Math.sin(a) * w * 0.29, 0, Math.cos(a) * w * 0.29); p.rotation.y = a; g.add(p);
  }
  return g;
}

/* ---------- a venue, ready to render ---------- */
export function buildVenue(id, tier, themeName) {
  const TH = THEMES[themeName] || THEMES.traditional;
  const r = seeded(id === 'outdoors' ? 101 : id === 'stadium' ? 202 : 303);
  const root = new THREE.Group(), kit = newKit();
  const sky = id === 'stadium' ? null : buildSky(id);
  if (sky) root.add(sky.root);
  const built = id === 'outdoors' ? outdoors(kit, root, tier, TH, r) : id === 'stadium' ? stadium(kit, root, tier, TH, r) : sheri(kit, root, tier, TH, r);
  // The warm pool the garbo's lamp throws on the ground round it (the garbo itself is drawn live)
  kit.pools.add(0, 0.02, 0, id === 'sheri' ? 3.4 : 4.2, id === 'sheri' ? 3.4 : 4.2, '#ffae5c', 0.35, { layer: 'garbo', live: true });
  // Paint every lamp's light on the ground into the ground's light maps, one per layer
  const lightMaps = groundLayers(built.floor, built.floor.userData.rect, kit.pools.list, TH, tier.name === 'phone' ? 512 : 1024);
  kit.pools.bakedGround = true;
  buildKit(kit, root);
  bake(root);
  return Object.assign({ id, root, kit, sky, TH, lightMaps, garboLight: { pos: [0, 1.3, 0], distance: id === 'sheri' ? 14 : 18, color: '#ffae5c' } }, built);
}
