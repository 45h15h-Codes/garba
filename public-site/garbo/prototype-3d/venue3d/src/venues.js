// The three venues, built in 3D from the shared kit:
//   outdoors — an open ground under the night sky: light towers, a big stage with side screens, chhatris over the
//              circle, bulb strings and bunting on poles, food stalls, neem trees in fairy lights, the city beyond;
//   stadium  — an indoor hall: tiered stands full of people, a steel roof with a pleated shamiana under it, brass
//              jhummars, lanterns, banners, moving-head beams, a stage at the far end;
//   sheri    — a society lane: house fronts on both sides lit with bulb curtains, otlas to sit out on, chandarvo
//              canopies and wires across, street lamps, a mandap for the band and a temple spire beyond.
// Everything that stays put is built here: the garbo at the centre, and (furnish.js) the stalls, the DJ's rig, chairs,
// benches, parked vehicles and planters where the 2D scene's layout puts them. The people, the band and the pictures
// on the screens are drawn live by the 2D scene over this, through the same camera.
//
// Each venue is lit in layers (lighting.js), and each kind of source has its own colour of light (LIGHT in util.js):
// cool floodlights, warm bulbs and windows, amber sodium street lamps, cold tube lights at the stalls, orange flames.

import * as THREE from 'three';
import { TAU, lerp, seeded, canvasTexture, sag, merged, tinted, at, face, faceTo, THEMES, DJ, hsl, glowTexture, LIGHT, BAND, SPONSORS, sponsorTexture, boxSolid, NSTAND, nstandSeats } from './util.js';
import { std, glowMat, newKit, buildKit, strand, Beam } from './kit.js';
import { groundLayers } from './lighting.js';
import { buildStage, latticeMat } from './stage.js';
import { buildSky, buildSkyline } from './sky.js';
import { bake } from './bake.js';
import { buildGarbo } from './garbo.js';
import { chhatri, lantern, kandil, jhummar, trees, speakerPole } from './props.js';
import { buildFurnish } from './furnish.js';
import { buildBand } from './band.js';
import { floorFor } from './floors.js';
import { feedMaterial } from './drone.js';

/* ---------- ground surfaces (floors.js) ---------- */
function ground(root, fl, w, d, cz, receive) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: fl.map, normalMap: fl.normalMap, normalScale: new THREE.Vector2(fl.normalScale, fl.normalScale), roughness: fl.roughness, metalness: 0 }));
  m.userData.decal = { canvas: fl.decal, rect: fl.decalRect };
  m.rotation.x = -Math.PI / 2; m.position.set(0, 0, cz); m.receiveShadow = !!receive;
  // The ground's light maps (lighting.js) cover it edge to edge
  m.userData.rect = { w, d, cx: 0, cz };
  root.add(m);
  return m;
}
// Light on the ground from lamps whose source isn't built here (the DJ's laptop, lit by the 2D scene)
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
// (one texture and material for every wall: each wall's length is in its UVs, so they all bake into one draw)
let kanatMat = null;
function kanat(root, x0, z0, x1, z1, h) {
  if (!kanatMat) { const t = kanatTexture(); t.wrapS = THREE.RepeatWrapping; kanatMat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, side: THREE.DoubleSide }); }
  const len = Math.hypot(x1 - x0, z1 - z0), geo = new THREE.PlaneGeometry(len, h), uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * len / 3);
  const wall = new THREE.Mesh(geo, kanatMat);
  wall.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); wall.rotation.y = Math.atan2(x1 - x0, z1 - z0) - Math.PI / 2; root.add(wall);
  const posts = Math.round(len / 3);
  for (let k = 0; k <= posts; k++) { const u = k / posts, p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, h + 0.3, 5), std('#8a6a3a', 0.9)); p.position.set(lerp(x0, x1, u), (h + 0.3) / 2, lerp(z0, z1, u)); root.add(p); }
}

/* ---------- OUTDOORS ---------- */
function outdoors(kit, root, tier, TH, r, data) {
  const floorMesh = ground(root, floorFor('outdoors', TH, data && data.circles, tier), 320, 320, 20, tier.shadows);
  practicalPools(kit, [[19.5, 21.4, 2.2, '#9fb8ff', 0.2, 'show']]);
  root.add(buildSkyline(175));
  // (the dance floor, trodden pale where each circle goes round, is painted into the ground: floors.js)
  // Lamps on two poles over the chairs at the back, warm LED heads angled down at the seats
  [-1, 1].forEach((sd) => {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 5.2, 6), std('#22180f', 0.8)); pole.position.set(sd * 6.9, 2.6, -19.6); root.add(pole);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.35), std('#16110e', 0.6, 0.3)); head.position.set(sd * 6.7, 5.2, -19.4); head.rotation.z = sd * 0.5; root.add(head);
    kit.bigBulbs.add(sd * 6.62, 5.12, -19.4, 0, { color: LIGHT.warm, k: 1.5, s: 0.9, twinkle: 0, layer: 'practical' });
  });
  kit.pools.add(0, 0.02, -17.6, 8.5, 4.2, LIGHT.warm, 0.2, { layer: 'practical' });
  // Kanat walls round the ground, behind the stalls, and on either side of the stage
  kanat(root, -32.5, -16, -32.5, 58, 2.4); kanat(root, 32.5, -16, 32.5, 58, 2.4);
  kanat(root, -32.5, 58, -14, 58, 2.4); kanat(root, 14, 58, 32.5, 58, 2.4);
  // Architecture: an uplight at the foot of the kanat every six metres, washing the cloth amber from below
  const up = [];
  for (let z = -13; z <= 56; z += 6) [-1, 1].forEach((sd) => up.push([sd * 32.2, z, Math.PI / 2, sd, 0]));
  [[-29, -17], [17, 29]].forEach(([a, b]) => { for (let x = a; x <= b; x += 6) up.push([x, 57.7, 0, 0, 1]); });
  up.forEach(([x, z, ry, tx, tz]) => uplight(kit, root, x, z, ry, 2.2, tx, tz));
  // Light towers of lattice truss with floodlights, and the pools of light they throw
  [-31, 31].forEach((x) => {
    const pole = truss3(11); pole.position.set(x, 5.5, 16); root.add(pole);
    const head = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 0.4), std('#16110e', 0.6)); head.position.set(x, 11.6, 16); head.rotation.y = -Math.sign(x) * 0.5; head.rotation.x = 0.4; root.add(head);
    for (let k = 0; k < 4; k++) kit.bigBulbs.add(x + (k % 2 ? 0.5 : -0.5) * Math.cos(0.5), 11.3 + (k < 2 ? 0.3 : -0.2), 16 - 0.25 + (k % 2 ? 0.2 : -0.2) * Math.sign(x), 0, { color: LIGHT.flood, k: 2.4, s: 1.3, twinkle: 0, layer: 'key' });
    kit.pools.add(x * 0.55, 0.02, 14, 14, 11, LIGHT.flood, 0.19, { layer: 'key' });
    kit.beams.push({ from: [x, 11.2, 16], to: [x * 0.45, 0, 14], beam: new Beam(root, LIGHT.flood, 20, 0.55, 0.05), layer: 'key', hex: LIGHT.flood });
  });
  const tl = treesFor(r);
  trees(kit, root, tl);
  // The trees nearest the ground are lit from below too, so their canopies read against the sky
  tl.filter((t) => t.fairy && t.z < 58 && Math.abs(t.x) < 40).forEach((t) => {
    kit.pools.add(t.x, 4.6 * t.s, t.z - 1.2 * t.s, 3 * t.s, 3.4 * t.s, LIGHT.amber, 0.1, { vertical: true, layer: 'architectural' });
    kit.pools.add(t.x, 0.02, t.z, 1.6, 1.6, LIGHT.amber, 0.12, { layer: 'architectural' });
    kit.bigBulbs.add(t.x - 0.6, 0.12, t.z - 0.6, 0, { color: LIGHT.amber, k: 0.9, s: 0.5, twinkle: 0, layer: 'architectural' });
  });
  const stage = buildStage(kit, { x0: -11.5, x1: 11.5, z: 46, h: 1.6, depth: 4.4, screenBottom: 2.0, screenTop: 9.9, truss: 12.0, arrays: 13.5, sponsors: 5, sideScreens: true, band: BAND.big });
  root.add(stage.root);
  [-21, 21].forEach((x) => speakerPole(root, x, 16, 6));
  // Chhatris hung from a ring of cable over the circle, guyed out to the light towers and the stage truss
  const ringY = 10, ring = [];
  for (let k = 0; k <= 24; k++) { const a = k / 24 * TAU + 0.3; ring.push([Math.cos(a) * 8.5, ringY - 0.25 * (1 - Math.abs(Math.sin(a * 3))), 4 + Math.sin(a) * 8.5]); }
  for (let k = 0; k < 24; k++) kit.wires.line(ring[k], ring[k + 1]);
  [[[-31, 11, 16], [-8.5, ringY, 4]], [[31, 11, 16], [8.5, ringY, 4]], [[0, 10.5, 46], [0, ringY, 12.5]]].forEach(([a, b]) => kit.wires.cable(a, b, 0.5));
  const umbrellas = [];
  for (let i = 0; i < 6; i++) { const a = i / 6 * TAU + 0.3; umbrellas.push(chhatri(kit, root, Math.cos(a) * 8.5, 7.2, 4 + Math.sin(a) * 8.5, ringY, TH.flags)); }
  // Poles with strings of bulbs and bunting crossing the ground (the first over the main circle, clear of where you
  // stand in it, so no string hangs right over your head)
  const zs = [-4, 10, 24, 38], X = 24, h = 7.4;
  zs.forEach((z) => [-X, X].forEach((x) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, h, 6), std('#22180f', 0.9)); p.position.set(x, h / 2, z); root.add(p); }));
  zs.forEach((z, i) => {
    strand(kit, [-X, h, z], [X, h, z], 1.5, i % 2 ? 'flags' : 'bulbs', i * 5);
    if (i < zs.length - 1) { strand(kit, [-X, h, z], [X, h, zs[i + 1]], 1.5, 'bulbs', i * 7); strand(kit, [X, h, z], [-X, h, zs[i + 1]], 1.5, 'bulbs', i * 11); }
  });
  const rig = {
    hemi: ['#36355f', '#2a1c12', 0.37, 0.58], moon: 1,
    // The two floodlights on the towers, a cool white; the right one throws the crowd's shadows
    spots: [{ pos: [31, 11.2, 16], to: [12, 0, 20], color: '#eeeeff', base: 105, distance: 60, angle: 0.5, layer: 'key' }, { pos: stage.wash.pos, to: stage.wash.to, color: '#ffe4c4', base: 150, distance: 32, angle: 0.55, layer: 'show' }],
    // The stage's wash on the band and truss, and the warm light the bulb strings throw up under the chhatris
    points: [{ pos: [0, 5.2, 44.2], color: '#ffe0b8', base: 80, distance: 15, layer: 'show' }, { pos: [0, 5.5, 4], color: '#ffc47a', base: 48, distance: 16, layer: 'festive' }, { pos: [0, 6.5, 22], color: '#ffc47a', base: 42, distance: 18, layer: 'festive' },
      // the lamps over the chairs (desktop only: a fourth light the smaller tiers leave out)
      { pos: [0, 5, -19.2], color: LIGHT.warm, base: 34, distance: 13, layer: 'practical' }]
  };
  return { rig, stage, umbrellas, feedScreen: stage.feedScreen, floor: floorMesh, fog: new THREE.FogExp2('#150d12', 0.0105), exposure: 0.98 };
}

/* ---------- STADIUM ---------- */
// The stands' aisles: across the far stand, and along the side stands
const STAND_AISLES = { x: [-14, 0, 14], z: [-16, 4, 24] };
const SEAT_COLS = ['#c9a37a', '#b76b5a', '#8f7aa8', '#d4b58c', '#6c8fa3', '#caa0b8', '#d98c5f', '#7fa37a'];
function standCrowd(kit, root, density, r) {
  const spots = [];
  // (leaving the aisles clear)
  for (let row = 0; row < 11; row++) for (let x = -27; x <= 27; x += 0.72) if (!STAND_AISLES.x.some((a) => Math.abs(x - a) < 0.55)) spots.push([x + (r() - 0.5) * 0.15, 1.3 + row * 0.95, 42 + row * 1.5 + 0.55, 0]);
  [-1, 1].forEach((sd) => { for (let row = 0; row < 9; row++) for (let z = -30; z <= 40.5; z += 0.8) if (!STAND_AISLES.z.some((a) => Math.abs(z - a) < 0.6)) spots.push([sd * (25 + row * 1.5 + 0.55), 1.3 + row * 0.95, z + (r() - 0.5) * 0.15, sd]); });
  // The near stand: out past its aisles, and the rows behind where you sit (the 2D scene seats the people in front of you)
  const N = NSTAND, seats = nstandSeats();
  for (let row = 0; row < N.rows; row++) seats.forEach((x) => { if (Math.abs(x) > N.aisle || row > N.cam) spots.push([x, N.y0 + row * N.rise + 0.07, N.z0 - row * N.tread - 0.95, 'n']); });
  const keep = spots.filter(() => r() < 0.55 + 0.4 * density);
  const body = merged([[new THREE.CylinderGeometry(0.17, 0.22, 0.8, 6), at(0, 0.45, 0)], [new THREE.IcosahedronGeometry(0.12, 0), at(0, 0.98, 0)]]);
  // (lit by the stands' wash as well as the hall, so the crowd reads from across the floor)
  const m = new THREE.InstancedMesh(body, kit.selfLit(new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, emissive: '#2a2238' }), 0.55, 'architectural'), keep.length), mx = new THREE.Matrix4(), c = new THREE.Color();
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(keep.length * 3), 3);
  keep.forEach((s, i) => {
    const hh = 0.85 + r() * 0.25;
    m.setMatrixAt(i, mx.makeScale(1, hh, 1).setPosition(s[0], s[1], s[2]));
    c.set(SEAT_COLS[Math.floor(r() * SEAT_COLS.length)]); m.setColorAt(i, c);
    // Phones held up, lit, here and there
    if (r() < 0.05) kit.bulbs.add(s[0] + (r() - 0.5) * 0.2, s[1] + 1.35, s[3] === 'n' ? s[2] + 0.2 : s[2] - (s[3] ? 0 : 0.2) - s[3] * 0.2, 0, { color: '#f4f7ff', group: 2, layer: 'show', twinkle: 0.9, ph: r() * TAU, s: 0.9 });
  });
  root.add(m);
}
/* The stadium's near stand, behind the floor's near end: eleven rows rising to the back wall, a coloured seat pad at every
   place (the rows in front of where you sit, and their people, are what you see from far off), an aisle either side with
   a light at every step, a lavender wash on the treads from fixtures under the roof's edge, as the other stands have. */
function nearStand(kit, root, parts) {
  const N = NSTAND, seats = nstandSeats(), pads = [];
  for (let row = 0; row < N.rows; row++) {
    const zf = N.z0 - row * N.tread, y = N.y0 + row * N.rise;
    parts.push([tinted(new THREE.BoxGeometry(48.6, y, N.tread), `rgb(${36 + row * 2},${30 + row * 2},${46 + row * 2})`), at(0, y / 2, zf - N.tread / 2)]);
    // a pale nosing along each step's edge, so the rows read
    parts.push([tinted(new THREE.BoxGeometry(48.6, 0.03, 0.06), '#8a7a5a'), at(0, y + 0.006, zf - 0.03)]);
    seats.forEach((x, i) => pads.push([x, y, zf - 0.95, (row * 3 + Math.floor((x + 24) / 4.96)) % SEAT_PADS.length]));
    [-N.aisle, N.aisle].forEach((x) => kit.bulbs.add(x, y - 0.12, zf + 0.02, 0, { color: LIGHT.amber, k: 0.7, s: 0.5, twinkle: 0, layer: 'architectural' }));
    if (row % 2 === 0) for (let x = -20; x <= 20; x += 10) kit.pools.add(x, y + 0.012, zf - 0.75, 5, 1.6, '#a898ff', 0.07, { layer: 'architectural' });
  }
  const m = new THREE.InstancedMesh(new THREE.BoxGeometry(0.46, 0.07, 0.42), kit.selfLit(new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6, emissive: '#2a2238' }), 0.3, 'architectural'), pads.length), mx = new THREE.Matrix4(), c = new THREE.Color();
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(pads.length * 3), 3);
  pads.forEach((p, i) => { m.setMatrixAt(i, mx.makeTranslation(p[0], p[1] + 0.035, p[2])); c.set(SEAT_PADS[p[3]]); m.setColorAt(i, c); });
  root.add(m);
  for (let x = -24; x <= 24; x += 8) { kit.bigBulbs.add(x, 15.78, N.z0 - N.rows * N.tread - 1.5, 0, { color: '#a898ff', k: 1.1, s: 0.55, twinkle: 0, layer: 'architectural' }); }
}
const SEAT_PADS = ['#8e1b2c', '#c2641a', '#7a2a5a', '#b8312b', '#d08a2a'];
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
  // The cloth glows with the jhummars' light caught in it (its emissive follows the practical layer)
  const cloth = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.95, vertexColors: true, side: THREE.DoubleSide, emissive: '#3a1a0a', emissiveIntensity: 0.8 }));
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
  return cloth.material;
}
function stadium(kit, root, tier, TH, r, data) {
  const floorMesh = ground(root, floorFor('stadium', TH, data && data.circles, tier), 64, 92, 10, tier.shadows);
  // The warm light the shamiana's cloth throws back down onto the floor, and the stalls' and DJ's lamps
  practicalPools(kit, [[0, 10, 22, LIGHT.tungsten, 0.07], [15.5, 16.4, 2.2, '#9fb8ff', 0.2, 'show']]);
  // The concourse beyond the floor, darker
  const conc = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), std('#140e0a', 0.95)); conc.rotation.x = -Math.PI / 2; conc.position.set(0, -0.01, 10); root.add(conc);
  // Stands: risers along the far end and both sides, coloured row by row
  const parts = [];
  for (let row = 0; row <= 10; row++) { const zf = 42 + row * 1.5, yf = 1.3 + row * 0.95; parts.push([tinted(new THREE.BoxGeometry(58, yf, 1.5), `rgb(${36 + row * 2},${30 + row * 2},${44 + row * 2})`), at(0, yf / 2, zf + 0.75)]); }
  [-1, 1].forEach((sd) => { for (let row = 0; row <= 8; row++) { const xr = sd * (25 + row * 1.5), y = 1.3 + row * 0.95; parts.push([tinted(new THREE.BoxGeometry(1.5, y, 76), `rgb(${30 + row * 2},${26 + row * 2},${40 + row * 2})`), at(xr + sd * 0.75, y / 2, 4)]); } });
  nearStand(kit, root, parts);
  // The stands take a cool lavender wash from fixtures along the roof edge: a different light from the warm hall, so
  // the seating either side reads without competing with the floor
  root.add(new THREE.Mesh(merged(parts), kit.selfLit(new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, vertexColors: true, emissive: '#3a3252' }), 0.38, 'architectural')));
  standCrowd(kit, root, tier.density, r);
  const WASH = '#a898ff';
  [-1, 1].forEach((sd) => { for (let z = -28; z <= 40; z += 8) {
    const fx = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 1.2), std('#16131c', 0.5, 0.4)); fx.position.set(sd * 30.5, 15.9, z); root.add(fx);
    kit.bigBulbs.add(sd * 30.5, 15.78, z, 0, { color: WASH, k: 1.1, s: 0.55, twinkle: 0, layer: 'architectural' });
    kit.pools.add(sd * 28.6, 5.4, z, 4.2, 3.6, WASH, 0.09, { vertical: true, ry: Math.PI / 2, layer: 'architectural' });
  } });
  for (let x = -24; x <= 24; x += 8) { kit.bigBulbs.add(x, 15.78, 47.5, 0, { color: WASH, k: 1.1, s: 0.55, twinkle: 0, layer: 'architectural' }); kit.pools.add(x, 6, 48.5, 4.2, 3.8, WASH, 0.08, { vertical: true, layer: 'architectural' }); }
  // LED boards along the front of the stands: dandiya, diyas and dots scrolling past in the night's colours
  const ledTex = canvasTexture(512, 64, (g, w, h) => {
    g.fillStyle = '#0a0608'; g.fillRect(0, 0, w, h);
    for (let k = 0; k < 8; k++) {
      const x = (k + 0.5) / 8 * w;
      g.fillStyle = '#fff';
      if (k % 3 === 0) { for (let p = 0; p < 8; p++) { const a = p / 8 * TAU; g.beginPath(); g.ellipse(x + Math.cos(a) * 13, h / 2 + Math.sin(a) * 13, 8, 4, a, 0, TAU); g.fill(); } g.beginPath(); g.arc(x, h / 2, 6, 0, TAU); g.fill(); }
      else if (k % 3 === 1) { g.save(); g.translate(x, h / 2); [-0.6, 0.6].forEach((r) => { g.save(); g.rotate(r); g.fillRect(-2.5, -22, 5, 44); g.restore(); }); g.restore(); }
      else { g.beginPath(); g.ellipse(x, h * 0.66, 14, 6, 0, 0, Math.PI); g.fill(); g.beginPath(); g.moveTo(x, h * 0.2); g.quadraticCurveTo(x + 7, h * 0.5, x, h * 0.62); g.quadraticCurveTo(x - 7, h * 0.5, x, h * 0.2); g.fill(); }
    }
    g.fillStyle = 'rgba(255,255,255,.55)'; for (let x = 4; x < w; x += 8) { g.fillRect(x, 4, 2, 2); g.fillRect(x, h - 6, 2, 2); }
  });
  ledTex.wrapS = THREE.RepeatWrapping;
  const ribbons = [[0, 41.9, 56, 0], [-24.9, 4, 76, Math.PI / 2], [24.9, 4, 76, Math.PI / 2], [0, NSTAND.z0 + 0.1, 48.6, 0]].map(([x, z, len, ry]) => {
    const t = ledTex.clone(); t.needsUpdate = true; t.repeat.set(len / 7, 1);
    const m = new THREE.Mesh(new THREE.BoxGeometry(len, 0.9, 0.08), new THREE.MeshBasicMaterial({ color: '#ffffff', map: t })); m.position.set(x, 0.65, z); m.rotation.y = ry; m.userData.dynamic = true; root.add(m); return m;
  });
  // The roof, the walls above the stands and the girders
  const CEIL = { roof: 17, apex: [0, 13.4, 10], edge: 11.2, x0: -24, x1: 24, z0: -14, z1: 34 };
  const roof = new THREE.Mesh(new THREE.BoxGeometry(80, 0.3, 100), std('#130e19', 0.9)); roof.position.set(0, CEIL.roof + 0.15, 10); root.add(roof);
  const back = new THREE.Mesh(new THREE.BoxGeometry(80, 17, 0.4), std('#191320', 0.9)); back.position.set(0, 8.5, 59); root.add(back);
  const front = new THREE.Mesh(new THREE.BoxGeometry(80, 17, 0.4), std('#191320', 0.9)); front.position.set(0, 8.5, -40); root.add(front);
  [-1, 1].forEach((sd) => { const w = new THREE.Mesh(new THREE.BoxGeometry(0.4, 17, 100), std('#161120', 0.9)); w.position.set(sd * 39, 8.5, 10); root.add(w); });
  // Architecture: wall washers along the top of every wall, grazing it with amber light, a fixture for each
  for (let k = 0; k < 9; k++) { kit.pools.add(-32 + k * 8, 14.2, 58.7, 2.4, 2.6, LIGHT.amber, 0.3, { vertical: true, layer: 'architectural' }); kit.bigBulbs.add(-32 + k * 8, 16.4, 58.5, 0, { color: LIGHT.amber, k: 1, s: 0.6, twinkle: 0, layer: 'architectural' }); }
  [-1, 1].forEach((sd) => { for (let z = -30; z <= 54; z += 8) { kit.pools.add(sd * 38.7, 14.2, z, 2.4, 2.6, LIGHT.amber, 0.26, { vertical: true, ry: Math.PI / 2, layer: 'architectural' }); kit.bigBulbs.add(sd * 38.5, 16.4, z, 0, { color: LIGHT.amber, k: 1, s: 0.6, twinkle: 0, layer: 'architectural' }); } });
  // Aisle lights on the risers, so the steps read in the dark, and house lights in the roof over the stands
  STAND_AISLES.x.forEach((x) => { for (let row = 0; row <= 10; row++) kit.bulbs.add(x, 1.3 + row * 0.95 - 0.12, 42 + row * 1.5 - 0.02, 0, { color: LIGHT.amber, k: 0.7, s: 0.5, twinkle: 0, layer: 'architectural' }); });
  [-1, 1].forEach((sd) => STAND_AISLES.z.forEach((z) => { for (let row = 0; row <= 8; row++) kit.bulbs.add(sd * (25 + row * 1.5) - sd * 0.02, 1.3 + row * 0.95 - 0.12, z, 0, { color: LIGHT.amber, k: 0.7, s: 0.5, twinkle: 0, layer: 'architectural' }); }));
  for (let x = -24; x <= 24; x += 8) kit.bigBulbs.add(x, 16.6, 50, 0, { color: LIGHT.warm, k: 1.1, s: 0.7, twinkle: 0, layer: 'practical' });
  [-1, 1].forEach((sd) => { for (let z = -24; z <= 40; z += 8) kit.bigBulbs.add(sd * 31, 16.6, z, 0, { color: LIGHT.warm, k: 1.1, s: 0.7, twinkle: 0, layer: 'practical' }); });
  for (let z = -30; z <= 57; z += 6) { const gd = new THREE.Mesh(new THREE.PlaneGeometry(78, 0.9), latticeMat(1)); gd.material.map.repeat.set(1, 1); gd.rotation.z = Math.PI / 2; gd.position.set(0, CEIL.roof - 0.45, z); gd.rotation.set(0, 0, 0); root.add(gd); }
  const clothMat = shamiana(root, CEIL);
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
    // The corner screens carry the sponsors' creatives
    const scr = face(new THREE.Mesh(new THREE.PlaneGeometry(10, 3.5), kit.litMap(sponsorTexture(SPONSORS[sd < 0 ? 0 : 3], 1024, 358, { bg: '#fbf1dc', pad: 0.02 }), 0.9, 'practical'))); scr.position.set(sd * 28, 9.15, 40); root.add(scr);
    const fr = new THREE.Mesh(new THREE.BoxGeometry(10.5, 3.9, 0.2), std('#0d0b10', 0.6)); fr.position.set(sd * 28, 9.15, 40.15); root.add(fr);
  });
  // Barrier rails in front of the stands, and the watchers at them
  [-1, 1].forEach((sd) => { const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 40), std('#8a8a92', 0.4, 0.7)); rail.position.set(sd * 24.4, 0.55, 13); root.add(rail); });
  const stage = buildStage(kit, { x0: -8.5, x1: 8.5, z: 35.5, h: 1.4, depth: 4.4, screenBottom: 1.8, screenTop: 8.3, truss: 9.6, arrays: 10.5, band: BAND.big });
  root.add(stage.root);
  // Moving heads in the roof sweeping pools of colour across the floor
  const heads = [[-18, 0], [-6, 0], [6, 0], [18, 0], [-12, 22], [12, 22]].map(([x, z], i) => {
    const fix = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.5, 10), std('#1b1920', 0.5, 0.4)); fix.position.set(x, 15.6, z); root.add(fix);
    const spot = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#ffffff', transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    spot.rotation.x = -Math.PI / 2; spot.renderOrder = 2; root.add(spot);
    return { x, z, i, beam: new Beam(root, '#ffffff', 16, 0.2, 0.2), spot, layer: 'show' };
  });
  const rig = {
    hemi: ['#5e4436', '#24170e', 0.55, 0.8], moon: 0,
    // A key light from the roof over the circle (it throws the shadows), and a wash on the band
    spots: [{ pos: [4, 15.5, -2], to: [0, 0, 6], color: LIGHT.warm, base: 100, distance: 40, angle: 0.6, layer: 'key' }, { pos: stage.wash.pos, to: stage.wash.to, color: '#ffe4c4', base: 130, distance: 28, angle: 0.55, layer: 'show' }],
    // The jhummars' light, warm and from overhead
    points: [[-10, 9.5, 2], [10, 9.5, 2], [-10, 9.5, 20], [10, 9.5, 20]].map((p) => ({ pos: p, color: LIGHT.tungsten, base: 58, distance: 34, layer: 'practical' }))
  };
  return {
    rig, stage, umbrellas, feedScreen: stage.feedScreen, floor: floorMesh, fog: new THREE.FogExp2('#140c10', 0.009), exposure: 0.92,
    update(t, ctx) {
      const { TH, pulse, reduce, lv } = ctx;
      clothMat.emissiveIntensity = 0.5 * lv.practical;
      ribbons.forEach((m, si) => { m.material.color.copy(hsl(TH.hues[si % TH.hues.length] + 20 * Math.sin(t * TH.speed + si), TH.sat, 52 + 8 * pulse)).multiplyScalar(1.15 * lv.festive); if (!reduce) m.material.map.offset.x = (t * 0.08 * (si ? -1 : 1)) % 1; });
      heads.forEach((h) => {
        const tt = reduce ? 0 : t * TH.speed / 0.3, tx = h.x * 0.4 + Math.sin(tt * 0.35 + h.i * 1.9) * 9, tz = h.z + Math.cos(tt * 0.27 + h.i) * 9, hex = TH.beams[h.i % TH.beams.length];
        h.beam.aim([h.x, 15.4, h.z], [tx, 0, tz]); h.beam.set(hex, lv.show * (0.8 + 0.4 * pulse));
        h.spot.position.set(tx, 0.03, tz); h.spot.scale.setScalar(2.6); h.spot.material.color.set(hex); h.spot.material.opacity = 0.5 * lv.show;
      });
    }
  };
}

/* ---------- SHERI ---------- */
// A house front, painted: plaster in the house's colour with a plinth, mouldings between the floors and a jali parapet;
// arched windows in painted frames with sills (lit ones glowing through coloured curtains and grilles, the rest dark
// with a little sky in the glass), shutters open on the upper floors; the door carved in two leaves under a toran of
// mango leaves and marigolds, શુભ and લાભ either side of it. A second picture holds only what gives off light (the lit
// windows, their curtains glowing in their colour, and a little of their light on the wall round them).
const WOODS = ['#2f5d4a', '#3a4f7a', '#6b3a1c', '#7a2a2a', '#2c6a6a', '#5a3a6a'], CURTAINS = ['#b8312b', '#2f8f5b', '#d6a24a', '#8e44ad', '#c2185b', '#3b4cc0'];
export function housePlan(h) {
  const W = h.z2 - h.z1, cols = Math.max(2, Math.round(W / 2.2)), out = [];
  for (let f = 0; f < h.floors; f++) for (let c = 0; c < cols; c++) {
    const door = f === 0 && c === Math.floor(cols / 2);
    out.push({ f, c, door, u: W * (c + 0.5) / cols, ww: door ? 0.75 : 0.5, wh: door ? 2.3 : 1.5, yb: door ? 0 : 0.9 + f * 3.1, lit: !door && ((h.lit * 10 + f * 3 + c) % 3) < 1.6, cur: CURTAINS[(f * 7 + c * 3 + h.hue) % CURTAINS.length], open: (f + c + h.hue) % 3 });
  }
  return { W, cols, wins: out };
}
function houseTexture(h, r) {
  const { W, wins } = housePlan(h), pxm = 30, cw = Math.round(W * pxm), chh = Math.round(h.h * pxm), wood = WOODS[h.hue % WOODS.length];
  const X = (m) => m * pxm, Y = (m) => chh - m * pxm;
  const arch = (g, x, yb, hw, wh, fill) => { g.fillStyle = fill; g.beginPath(); g.moveTo(X(x - hw), Y(yb)); g.lineTo(X(x - hw), Y(yb + wh * 0.7)); g.quadraticCurveTo(X(x), Y(yb + wh * 1.12) - 6, X(x + hw), Y(yb + wh * 0.7)); g.lineTo(X(x + hw), Y(yb)); g.closePath(); g.fill(); };
  const clipArch = (g, x, yb, hw, wh) => { g.beginPath(); g.moveTo(X(x - hw), Y(yb)); g.lineTo(X(x - hw), Y(yb + wh * 0.7)); g.quadraticCurveTo(X(x), Y(yb + wh * 1.12) - 6, X(x + hw), Y(yb + wh * 0.7)); g.lineTo(X(x + hw), Y(yb)); g.closePath(); g.clip(); };
  // The room behind a lit window: warm light, brightest low in the middle, and curtains drawn part way in their colour
  const room = (g, w, glow) => {
    const x = w.u, gr = g.createRadialGradient(X(x), Y(w.yb + w.wh * 0.35), 2, X(x), Y(w.yb + w.wh * 0.5), w.wh * pxm * 0.8);
    gr.addColorStop(0, glow ? '#fff0c8' : '#ffe2a8'); gr.addColorStop(0.55, glow ? '#ffc070' : '#f7b566'); gr.addColorStop(1, glow ? '#d87a30' : '#c9772f');
    g.save(); clipArch(g, x, w.yb, w.ww, w.wh); g.fillStyle = gr; g.fillRect(X(x - w.ww), Y(w.yb + w.wh * 1.2), X(w.ww * 2), w.wh * 1.2 * pxm);
    // curtains: two panels gathered to the sides, and a valance across the top
    const cp = [0.42, 0.3, 0.55][w.open], cc = new THREE.Color(w.cur), dim = glow ? 0.55 : 1;
    g.fillStyle = `rgba(${Math.round(cc.r * 255 * dim)},${Math.round(cc.g * 255 * dim)},${Math.round(cc.b * 255 * dim)},${glow ? 0.9 : 0.92})`;
    [-1, 1].forEach((sd) => { g.beginPath(); const x0 = x + sd * w.ww, x1 = x + sd * w.ww * (1 - cp * 2); g.moveTo(X(x0), Y(w.yb + w.wh * 1.2)); g.lineTo(X(x1), Y(w.yb + w.wh * 1.2)); g.quadraticCurveTo(X(x1 + sd * w.ww * 0.12), Y(w.yb + w.wh * 0.45), X(x1 + sd * w.ww * 0.3), Y(w.yb)); g.lineTo(X(x0), Y(w.yb)); g.closePath(); g.fill(); });
    g.fillRect(X(x - w.ww), Y(w.yb + w.wh * 0.95), X(w.ww * 2), w.wh * 0.14 * pxm);
    g.restore();
  };
  // Grilles on the ground floor; a cross of glazing bars upstairs
  const grille = (g, w, fill) => {
    const x = w.u; g.fillStyle = fill;
    if (w.f === 0) { for (let b = 1; b < 4; b++) g.fillRect(X(x - w.ww + b * w.ww / 2) - 1, Y(w.yb + w.wh * 1.08), 2, w.wh * 1.08 * pxm); g.fillRect(X(x - w.ww), Y(w.yb + w.wh * 0.5), X(w.ww * 2), 2); }
    else { g.fillRect(X(x) - 1, Y(w.yb + w.wh * 1.1), 3, w.wh * 1.1 * pxm); g.fillRect(X(x - w.ww), Y(w.yb + w.wh * 0.62), X(w.ww * 2), 3); }
  };
  const draw = (lightsOnly) => (g) => {
    if (lightsOnly) {
      g.fillStyle = '#000'; g.fillRect(0, 0, cw, chh);
      wins.forEach((w) => {
        if (!w.lit) return;
        // a little of the window's light on the plaster round it
        const hg = g.createRadialGradient(X(w.u), Y(w.yb + w.wh * 0.5), 4, X(w.u), Y(w.yb + w.wh * 0.5), w.wh * pxm * 1.05);
        hg.addColorStop(0, 'rgba(255,170,90,.2)'); hg.addColorStop(1, 'rgba(255,170,90,0)'); g.fillStyle = hg; g.fillRect(0, 0, cw, chh);
        room(g, w, true);
        grille(g, w, 'rgba(0,0,0,.85)');
      });
      return;
    }
    // Plaster, weathered, darker towards the ground; a stone plinth
    g.fillStyle = h.col; g.fillRect(0, 0, cw, chh);
    const sh = g.createLinearGradient(0, 0, 0, chh); sh.addColorStop(0, 'rgba(255,235,200,.06)'); sh.addColorStop(0.7, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.28)'); g.fillStyle = sh; g.fillRect(0, 0, cw, chh);
    for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.05})`; g.fillRect(r() * cw, r() * chh * 0.3, 2 + r() * 4, chh * (0.2 + r() * 0.6)); }
    g.fillStyle = 'rgba(0,0,0,.16)'; for (let i = 0; i < 500; i++) g.fillRect(r() * cw, r() * chh, 2, 2);
    g.fillStyle = 'rgba(40,30,28,.55)'; g.fillRect(0, Y(0.5), cw, 0.5 * pxm);
    // Pilasters at the corners, mouldings between floors, the jali parapet
    g.fillStyle = 'rgba(255,236,200,.1)'; g.fillRect(0, 0, 0.35 * pxm, chh); g.fillRect(cw - 0.35 * pxm, 0, 0.35 * pxm, chh);
    for (let f = 1; f < h.floors; f++) { const y = Y(f * 3.1 + 0.55); g.fillStyle = 'rgba(214,176,111,.55)'; g.fillRect(0, y - 5, cw, 5); g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(0, y, cw, 4); }
    g.fillStyle = 'rgba(214,176,111,.35)'; g.fillRect(0, 0, cw, 0.62 * pxm);
    g.fillStyle = 'rgba(0,0,0,.45)'; for (let x = 6; x < cw - 6; x += 14) { g.beginPath(); g.moveTo(x, 0.52 * pxm); g.lineTo(x, 0.26 * pxm); g.quadraticCurveTo(x + 4, 0.1 * pxm, x + 8, 0.26 * pxm); g.lineTo(x + 8, 0.52 * pxm); g.closePath(); g.fill(); }
    wins.forEach((w) => {
      const x = w.u;
      if (w.door) {
        arch(g, x, 0, w.ww + 0.16, w.wh + 0.08, '#c9963f'); arch(g, x, 0, w.ww + 0.1, w.wh + 0.04, wood); arch(g, x, 0, w.ww, w.wh, '#4a2412');
        g.fillStyle = 'rgba(0,0,0,.45)'; g.fillRect(X(x) - 1, Y(w.wh * 0.95), 2, w.wh * 0.95 * pxm);
        [-1, 1].forEach((sd) => { [0.3, 1.0, 1.6].forEach((py) => { g.strokeStyle = 'rgba(214,166,74,.55)'; g.lineWidth = 2; g.strokeRect(X(x + sd * w.ww * 0.5) - w.ww * 0.3 * pxm, Y(py + 0.5), w.ww * 0.6 * pxm, 0.5 * pxm); }); g.fillStyle = '#e8b04b'; for (let k = 0; k < 5; k++) g.fillRect(X(x + sd * w.ww * 0.5) - 1.5, Y(0.25 + k * 0.4), 3, 3); });
        // The toran: mango leaves and marigolds across the top of the door
        const ty = Y(w.wh * 1.12 + 0.12), tx0 = X(x - w.ww - 0.3), tx1 = X(x + w.ww + 0.3);
        g.strokeStyle = '#6b4a22'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(tx0, ty); g.lineTo(tx1, ty); g.stroke();
        for (let k = 0, n = Math.round((tx1 - tx0) / 7); k <= n; k++) { const lx = tx0 + (tx1 - tx0) * k / n; if (k % 2) { g.fillStyle = '#2f7a3a'; g.beginPath(); g.moveTo(lx - 3, ty); g.lineTo(lx + 3, ty); g.lineTo(lx, ty + 11); g.closePath(); g.fill(); } else { g.fillStyle = k % 4 ? '#f6c342' : '#f08a24'; g.beginPath(); g.arc(lx, ty + 3, 3.2, 0, TAU); g.fill(); } }
        // શુભ and લાભ either side of it, in kumkum red, and a swastik above
        g.fillStyle = '#c0392b'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `700 ${Math.round(0.34 * pxm)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`;
        g.fillText('શુભ', X(x - w.ww - 0.55), Y(1.55)); g.fillText('લાભ', X(x + w.ww + 0.55), Y(1.55));
        return;
      }
      // The frame and sill; the glass (a lit room, or dark with a little sky in it); grilles on the ground floor
      arch(g, x, w.yb - 0.02, w.ww + 0.09, w.wh + 0.07, wood);
      g.fillStyle = 'rgba(230,200,150,.65)'; g.fillRect(X(x - w.ww - 0.18), Y(w.yb), X(w.ww * 2 + 0.36), 0.1 * pxm);
      if (w.lit) room(g, w, false);
      else { const gl = g.createLinearGradient(0, Y(w.yb + w.wh * 1.1), 0, Y(w.yb)); gl.addColorStop(0, '#2a2640'); gl.addColorStop(1, '#0e0b18'); arch(g, x, w.yb, w.ww, w.wh, gl); g.fillStyle = 'rgba(160,170,220,.12)'; g.beginPath(); g.moveTo(X(x - w.ww * 0.6), Y(w.yb + w.wh * 0.2)); g.lineTo(X(x - w.ww * 0.2), Y(w.yb + w.wh * 0.9)); g.lineTo(X(x), Y(w.yb + w.wh * 0.9)); g.lineTo(X(x - w.ww * 0.4), Y(w.yb + w.wh * 0.2)); g.closePath(); g.fill(); }
      grille(g, w, 'rgba(20,12,8,.85)');
      if (w.f > 0) { g.fillStyle = wood; g.fillRect(X(x - w.ww - 0.36), Y(w.yb + w.wh * 0.72), 0.3 * pxm, w.wh * 0.72 * pxm); g.fillRect(X(x + w.ww + 0.06), Y(w.yb + w.wh * 0.72), 0.3 * pxm, w.wh * 0.72 * pxm); g.fillStyle = 'rgba(0,0,0,.3)'; for (let k = 1; k < 6; k++) { g.fillRect(X(x - w.ww - 0.36), Y(w.yb + w.wh * 0.72 * k / 6), 0.3 * pxm, 1.5); g.fillRect(X(x + w.ww + 0.06), Y(w.yb + w.wh * 0.72 * k / 6), 0.3 * pxm, 1.5); } }
    });
    if (h.balcony) { g.fillStyle = 'rgba(120,80,50,.7)'; g.fillRect(0.6 * pxm, Y(0.9 + 3.1 + 0.7), cw - 1.2 * pxm, 0.9 * pxm); }
    if (h.hue === 3 && W > 5.5) {
      g.fillStyle = '#b8312b'; const zm = W / 2 + 1.4; g.fillRect(X(zm - 1.3), Y(3.15), 2.6 * pxm, 0.6 * pxm);
      g.fillStyle = '#ffe9b8'; g.font = `700 ${Math.round(0.42 * pxm)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText('કરિયાણા', X(zm), Y(2.7));
    }
  };
  const map = canvasTexture(cw, chh, draw(false)), em = canvasTexture(cw, chh, draw(true));
  return { map, em };
}
function sheri(kit, root, tier, TH, r, data) {
  const floorMesh = ground(root, floorFor('sheri', TH, data && data.circles, tier), 14.4, 124, 16, tier.shadows);
  practicalPools(kit, [[4.4, 60.6, 2.2, '#9fb8ff', 0.2, 'show']]);
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
    // Curtain lights down most house fronts (above the doors and the lamps by them), and a string along every parapet
    if (h.bulbs) kit.curtains.add(X - h.side * 0.12, h.z1 + 0.35, X - h.side * 0.12, h.z2 - 0.35, 2.95, h.h - 0.45, -h.side, 0, h.hue);
    for (let q = h.z1 + 0.25; q < h.z2; q += 0.45) kit.bulbs.add(X - h.side * 0.12, h.h - 0.1, q, h.hue + Math.round(q * 2), { ph: q, s: 0.8 });
    // A water tank on some roofs, an antenna on others
    if (h.hue % 2 === 0) { const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.2, 12), std('#1f1d24', 0.8)); tk.position.set(X + h.side * 1.4, h.h + 0.6, zc); root.add(tk); }
    doorstep(kit, root, h, r);
  });
  // The house at the end of the lane: the society's haveli, with its shrine, and the projector screen tied up over it
  facades.push(haveli(kit, root, r));
  const shrine = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 1), std('#7a1a14', 0.7)); shrine.position.set(0, 1.6, 71.6); root.add(shrine);
  const archM = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.08, 6, 20, Math.PI), std('#e8b04b', 0.35, 0.7)); archM.position.set(0, 2.2, 71.05); root.add(archM);
  // Its diyas, burning on the step, and their light on the shrine's face
  for (let d = 0; d < 5; d++) kit.flames.add((d - 2) * 0.45, 0.02, 70.9, { s: 0.05, k: 0.8 });
  kit.pools.add(0, 1.6, 71.05, 1.8, 1.8, LIGHT.flame, 0.35, { vertical: true, layer: 'flame' });
  // The society's projector screen tied up over the shrine: its frame here, its picture drawn live over it
  const scrFrame = new THREE.Mesh(new THREE.BoxGeometry(6.9, 3.1, 0.1), std('#14100c', 0.7)); scrFrame.position.set(0, 7.4, 71.85); root.add(scrFrame);
  const feedScreen = face(new THREE.Mesh(new THREE.PlaneGeometry(6.6, 2.9), feedMaterial(1.2))); feedScreen.position.set(0, 7.4, 71.7); feedScreen.visible = false; feedScreen.userData.dynamic = true; root.add(feedScreen);
  // A temple spire behind the end of the lane, outlined in bulbs, a flag at the top
  const spire = new THREE.Mesh(new THREE.LatheGeometry([[3.2, 0], [3.0, 3], [2.2, 6], [1.2, 8.5], [0.2, 10]].map(([a, b]) => new THREE.Vector2(a, b)), 12), std('#231a2c', 0.9));
  spire.position.set(0, 12, 80); root.add(spire);
  for (let tb = 0; tb <= 20; tb++) { const u = tb / 20, a = u * Math.PI, x = -3.2 * Math.cos(a), yy = 12 + Math.sin(a) * 10 * Math.pow(Math.sin(a), 0.4); kit.bulbs.add(x * (1 - 0.7 * Math.sin(a) * 0.9), yy, 77.2, tb, { ph: tb }); }
  // Architecture: the spire washed from below, and the end house's front
  kit.pools.add(0, 15, 76.8, 4.2, 6, LIGHT.amber, 0.16, { vertical: true, layer: 'architectural' });
  kit.pools.add(0, 3.5, 71.95, 7, 3.5, LIGHT.amber, 0.08, { vertical: true, layer: 'architectural' });
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), std('#d8453a', 0.8, 0, { side: THREE.DoubleSide })); flag.position.set(0.6, 23.2, 80); flag.userData.dynamic = true; root.add(flag);
  // Street lamps on brackets, each throwing a pool of warm light
  for (let lz = 62; lz >= -20; lz -= 14) [-1, 1].forEach((sd, k) => {
    const z0 = lz + k * 7, arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.06), std('#1b1510', 0.8)); arm.position.set(sd * 7.3, 5.2, z0); root.add(arm);
    const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.2, 0.14, 10), std('#1b1510', 0.6, 0.4)); hood.position.set(sd * 6.6, 5.16, z0); root.add(hood);
    kit.bigBulbs.add(sd * 6.6, 5.05, z0, 0, { color: LIGHT.sodium, k: 0.62, s: 0.6, layer: 'practical', twinkle: 0.03 });
    kit.pools.add(sd * 5.8, 0.02, z0, 4.4, 4.4, LIGHT.sodium, 0.15);
    kit.pools.add(sd * 7.9, 3.4, z0, 2.4, 2.4, LIGHT.sodium, 0.09, { vertical: true, ry: sd * Math.PI / 2 });
  });
  // Flex banners on the house fronts: the sponsors' creatives, each lit by a little lamp over it
  [[-1, 3.5, 8.5, 2], [1, 5, 10, 3], [-1, 34, 38.5, 4], [1, 36, 40.5, 0]].forEach(([sd, z0, z1, k]) => {
    const w = z1 - z0, h = w / 2.34, b = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(w, h), kit.selfLit(new THREE.MeshStandardMaterial({ map: sponsorTexture(SPONSORS[k], 768, Math.round(768 / 2.34), { pad: 0 }), roughness: 0.8 }), 0.35)), -sd * Math.PI / 2);
    b.position.set(sd * 7.94, 3.1, (z0 + z1) / 2); root.add(b);
    kit.bigBulbs.add(sd * 7.6, 3.1 + h / 2 + 0.15, (z0 + z1) / 2, 0, { color: LIGHT.warm, k: 0.8, s: 0.4, twinkle: 0, layer: 'practical' });
    kit.pools.add(sd * 7.9, 3.1, (z0 + z1) / 2, w * 0.55, h * 0.7, LIGHT.warm, 0.1, { vertical: true, ry: sd * Math.PI / 2, layer: 'practical' });
  });
  // Otlas: the raised platforms in front of the houses, where people sit out
  [-1, 1].forEach((sd) => { const o = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.45, 124), std('#4a3a34', 0.9)); o.position.set(sd * 7.4, 0.225, 16); root.add(o); });
  // The musicians' takht under a small mandap by the shrine, speakers either side
  const takht = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.6, 2.1), std('#6b3f1f', 0.8)); takht.position.set(0, 0.3, 64.95); root.add(takht);
  const durrie = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 2), new THREE.MeshStandardMaterial({ map: canvasTexture(256, 64, (g, w, h) => { for (let i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#c2721e' : '#7e1827'; g.fillRect(0, i / 7 * h, w, h / 7 + 1); } }), roughness: 1 }));
  durrie.rotation.x = -Math.PI / 2; durrie.position.set(0, 0.605, 64.95); root.add(durrie);
  [-4.6, 4.6].forEach((x) => speakerPole(root, x, 64, 1.8));
  // The band's gear on the takht: the tabla on its gaddi, the keyboard on its stand, a small guitar amp
  const bandHoles = buildBand(kit, root, BAND.sheri, { x0: -3.2, x1: 3.2, front: 63.9, floor: 0.6, small: true });
  const mandapHoles = sheriMandap(kit, root, TH);
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
  const lc = ['#ff9f5a', '#ff6fa3', '#7fe0a0', '#ffd58a', '#8fc7ff'];
  [60, 50, 41, 32, 24, 16, 8, 0, -8].forEach((z, i) => {
    if (i % 3 === 0) { strand(kit, [-8, 6.8, z], [8, 6.8, z + 2], 1.1, 'bulbs', i, { gap: 0.55 }); strand(kit, [-8, 6.8, z + 2], [8, 6.8, z], 1.1, 'bulbs', i + 3, { gap: 0.55, pools: false }); }
    else strand(kit, [-8, 6.4, z], [8, 6.4, z], 1.3, i % 3 === 1 ? 'flags' : 'bulbs', i, { gap: 0.55 });
    // Star lanterns, one side of the lane then the other
    kandil(kit, root, i % 2 ? -2.6 : 2.6, 5.15 + (i % 3) * 0.25, z + 0.8, lc[i % lc.length], i % 3 === 0 ? 6.3 : 6.1);
  });
  // Over the mandap, a canopy of lights: strings from a star at the middle out to the parapets on both sides and the
  // haveli's roof, the way a society dresses the end of its lane for the nine nights
  const hub = [0, 10.4, 58.5];
  [50, 54, 58, 62, 66, 70].forEach((z, k) => [-1, 1].forEach((sd) => strand(kit, hub, [sd * 7.9, 7.3 + (k % 2) * 0.4, z], 0.5, 'bulbs', k * 2 + (sd > 0 ? 1 : 0), { gap: 0.42, pools: false, s: 0.85 })));
  [-5.5, -1.8, 1.8, 5.5].forEach((x, k) => strand(kit, hub, [x, 11.8, 71.9], 0.4, 'bulbs', 20 + k, { gap: 0.42, pools: false, s: 0.85 }));
  kandil(kit, root, hub[0], hub[1] - 0.9, hub[2], '#ff6fa3', hub[1]);
  kandil(kit, root, -2.2, 6.9, 61.8, '#ffd58a', 8.2); kandil(kit, root, 2.2, 7.1, 62.2, '#7fe0a0', 8.3);
  kit.pools.add(0, 0.02, 60.5, 6.5, 5.5, '#ffd58a', 0.09, { layer: 'festive', theme: true });
  const rig = {
    hemi: ['#3f3a6c', '#1f1612', 0.5, 0.72], moon: 1,
    // A lamp high on a house front over the circle (it throws the shadows), and a light on the musicians
    spots: [{ pos: [-6.5, 9, -3], to: [0, 0, 1], color: '#ffd9ae', base: 70, distance: 30, angle: 0.7, layer: 'key' }, { pos: [0, 3.0, 58.6], to: [0, 1.7, 65.2], color: '#ffe4c4', base: 52, distance: 14, angle: 0.5, layer: 'show' }],
    // The street lamps' sodium on the lane and the house fronts
    points: [[-5.8, 5, -6], [5.8, 5, 8], [-5.8, 5, 22], [5.8, 5, 50]].map((p) => ({ pos: p, color: LIGHT.sodium, base: 32, distance: 22, layer: 'practical' }))
  };
  return {
    rig, bandHoles, mandapHoles, feedScreen, floor: floorMesh, fog: new THREE.FogExp2('#140d18', 0.011), exposure: 0.95,
    update(t, ctx) {
      // Lit windows are practical lights
      facades.forEach((m) => (m.emissiveIntensity = 1.05 * ctx.lv.practical));
      flag.rotation.y = ctx.reduce ? 0 : Math.sin(t * 3) * 0.3;
    }
  };
}

/* ---------- the sheri's mandap ----------
   Over the musicians' takht: four turned pillars painted red with gold bands and marigolds wound down the front two, a
   canopy of striped cloth sloping back with scalloped valances and a fringe of bulbs, the society's banner over the
   front, a painted cloth hung behind the band, and a warm lamp on each front pillar for the players. */
function sheriMandap(kit, root, TH) {
  const z0 = 63.9, z1 = 66, y0 = 0.6, top = 3.45;
  const bands = canvasTexture(64, 256, (g, w, h) => { g.fillStyle = '#a81e1e'; g.fillRect(0, 0, w, h); [0.05, 0.12, 0.45, 0.52, 0.88, 0.95].forEach((v) => { g.fillStyle = '#d6a64a'; g.fillRect(0, v * h, w, h * 0.025); }); g.fillStyle = 'rgba(255,230,170,.45)'; for (let y = 0.2; y < 0.42; y += 0.04) for (let x = 4; x < w; x += 12) g.fillRect(x, y * h, 4, 3); });
  const pillar = new THREE.LatheGeometry([[0.12, 0], [0.13, 0.08], [0.085, 0.16], [0.075, 1.1], [0.11, 1.2], [0.075, 1.3], [0.07, 2.55], [0.11, 2.66], [0.14, 2.78], [0.1, 2.85]].map(([a, b]) => new THREE.Vector2(a, b)), 14);
  const pm = new THREE.MeshStandardMaterial({ map: bands, roughness: 0.45, metalness: 0.2 });
  [[-3.35, z0], [3.35, z0], [-3.35, z1], [3.35, z1]].forEach(([x, z], i) => {
    const p = new THREE.Mesh(pillar, pm); p.position.set(x, y0, z); root.add(p);
    if (i < 2) for (let k = 0; k < 26; k++) { const a = k * 0.9; const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.04, 0), std(k % 3 ? '#f08a24' : '#f6c342', 0.85)); m.position.set(x + Math.cos(a) * 0.1, y0 + 2.7 - k * 0.1, z + Math.sin(a) * 0.1); root.add(m); }
  });
  // The canopy, sloping back, in saffron, maroon and cream stripes
  const stripes = canvasTexture(256, 64, (g, w, h) => { const c = ['#c8641a', '#6e1422', '#c9b48e', '#6e1422']; for (let i = 0; i < 16; i++) { g.fillStyle = c[i % 4]; g.fillRect(i / 16 * w, 0, w / 16 + 1, h); } });
  const canopy = new THREE.Mesh(new THREE.PlaneGeometry(7.3, Math.hypot(z1 - z0 + 0.5, 0.4)), new THREE.MeshStandardMaterial({ map: stripes, roughness: 0.9, side: THREE.DoubleSide }));
  canopy.rotation.x = -Math.PI / 2 - Math.atan2(0.4, z1 - z0 + 0.5); canopy.position.set(0, top + 0.2, (z0 + z1) / 2); root.add(canopy);
  const scallop = (n, hex) => canvasTexture(512, 96, (g, w, h) => { g.clearRect(0, 0, w, h); const sw = w / n; for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? hex : '#f3e6d0'; g.fillRect(i * sw, 0, sw + 1, h * 0.6); g.beginPath(); g.moveTo(i * sw, h * 0.6); g.quadraticCurveTo((i + 0.5) * sw, h * 1.02, (i + 1) * sw, h * 0.6); g.closePath(); g.fill(); g.fillStyle = '#d6a64a'; g.beginPath(); g.arc((i + 0.5) * sw, h * 0.88, 5, 0, TAU); g.fill(); } g.fillStyle = '#d6a64a'; g.fillRect(0, h * 0.58, w, 4); });
  const val = new THREE.MeshStandardMaterial({ map: scallop(12, '#7e1827'), roughness: 0.9, alphaTest: 0.35, side: THREE.DoubleSide }), sideVal = new THREE.MeshStandardMaterial({ map: scallop(5, '#7e1827'), roughness: 0.9, alphaTest: 0.35, side: THREE.DoubleSide });
  const front = face(new THREE.Mesh(new THREE.PlaneGeometry(7.3, 0.5), val)); front.position.set(0, top - 0.02, z0 - 0.26); root.add(front);
  [-1, 1].forEach((sd) => { const v = faceTo(new THREE.Mesh(new THREE.PlaneGeometry(z1 - z0 + 0.5, 0.5), sideVal), -sd * Math.PI / 2); v.position.set(sd * 3.65, top + 0.1, (z0 + z1) / 2); root.add(v); });
  for (let k = 0; k <= 18; k++) kit.bulbs.add(lerp(-3.6, 3.6, k / 18), top - 0.3, z0 - 0.28, k, { ph: k * 1.1, s: 0.8 });
  for (let k = 0; k <= 28; k++) kit.flags.add(lerp(-3.4, 3.4, k / 28), top - 0.34, z0 - 0.2, Math.PI, 0.1, k);
  // The society's banner over the front
  const banner = canvasTexture(512, 96, () => {});
  const drawBanner = () => { const g = banner.image.getContext('2d'), w = 512, h = 96; g.fillStyle = '#6b1020'; g.fillRect(0, 0, w, h); g.strokeStyle = '#d6a64a'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10); g.fillStyle = '#ffe6a8'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '700 50px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif'; g.fillText('નવરાત્રી મહોત્સવ', w / 2, h * 0.54); banner.needsUpdate = true; };
  drawBanner(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawBanner);
  const bn = face(new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.64), kit.litMap(banner, 1.0, 'practical'))); bn.position.set(0, top + 0.5, z0 - 0.28); root.add(bn);
  const holes = [boxSolid(-1.8, top + 0.18, z0 - 0.3, 1.8, top + 0.82, z0 - 0.26), boxSolid(-3.65, top - 0.27, z0 - 0.3, 3.65, top + 0.4, z1 + 0.3)];
  [-1.4, 1.4].forEach((x) => { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 5), std('#2a1a10', 0.7)); post.position.set(x, top + 0.22, z0 - 0.26); root.add(post); });
  // The painted cloth behind the band: a mandala in gold on red, and જય અંબે across it
  const cloth = canvasTexture(512, 208, () => {});
  const drawCloth = () => { const g = cloth.image.getContext('2d'), w = 512, h = 208; const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#5a0c16'); gr.addColorStop(1, '#8e1b2c'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#d6a64a'; g.lineWidth = 5; g.strokeRect(8, 8, w - 16, h - 16);
    g.save(); g.translate(w / 2, h * 0.46); for (let i = 0; i < 16; i++) { g.save(); g.rotate(i / 16 * TAU); g.fillStyle = i % 2 ? 'rgba(214,166,74,.8)' : 'rgba(240,138,36,.7)'; g.beginPath(); g.ellipse(34, 0, 26, 8, 0, 0, TAU); g.fill(); g.restore(); } g.fillStyle = '#d6a64a'; g.beginPath(); g.arc(0, 0, 14, 0, TAU); g.fill(); g.restore();
    g.fillStyle = '#ffe6a8'; g.textAlign = 'center'; g.font = '700 30px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif'; g.fillText('જય અંબે', w / 2, h * 0.9); cloth.needsUpdate = true; };
  drawCloth(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawCloth);
  const bc = face(new THREE.Mesh(new THREE.PlaneGeometry(6.5, 2.65), kit.selfLit(new THREE.MeshStandardMaterial({ map: cloth, roughness: 0.95 }), 0.05))); bc.position.set(0, y0 + 1.4, z1 - 0.06); root.add(bc);
  // A warm lamp on each front pillar, turned on the band
  [-1, 1].forEach((sd) => {
    const fx = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.18, 10), std('#1a1714', 0.5, 0.4)); fx.position.set(sd * 3.2, top - 0.35, z0 + 0.05); fx.rotation.z = sd * 0.7; root.add(fx);
    kit.bigBulbs.add(sd * 3.12, top - 0.42, z0 + 0.08, 0, { color: LIGHT.warm, k: 0.55, s: 0.32, twinkle: 0, layer: 'show' });
    kit.pools.add(sd * 1.6, y0 + 1.3, z1 - 0.1, 2.2, 1.4, LIGHT.warm, 0.06, { vertical: true, layer: 'show' });
  });
  kit.pools.add(0, 0.02, z0 - 1.2, 3.6, 1.6, LIGHT.warm, 0.06, { layer: 'show' });
  return holes;
}

/* ---------- the haveli at the end of the sheri ----------
   Three storeys in deep rose plaster, painted like the lane's houses (lit windows, curtains, the carved door behind the
   shrine), with two jharokhas on the first floor under gilded domes, marigold swags along the first-floor moulding,
   curtain lights down its front round the projector screen, bulbs along its parapet, and warm uplights washing it. */
function haveli(kit, root, r) {
  const h = { side: 0, z1: -8.2, z2: 8.2, h: 12, col: '#6a3446', floors: 3, lit: 0.37, balcony: false, hue: 4 }, zf = 71.99;
  const body = new THREE.Mesh(new THREE.BoxGeometry(16.4, 12, 3), std('#3a2433', 0.95)); body.position.set(0, 6, 73.5); root.add(body);
  const tx = houseTexture(h, r), mat = new THREE.MeshStandardMaterial({ map: tx.map, emissiveMap: tx.em, emissive: '#ffffff', emissiveIntensity: 1.05, roughness: 0.9 });
  const front = face(new THREE.Mesh(new THREE.PlaneGeometry(16.4, 12), mat)); front.position.set(0, 6, zf); root.add(front);
  const cornice = new THREE.Mesh(new THREE.BoxGeometry(16.8, 0.3, 0.5), std('#d6b06f', 0.8)); cornice.position.set(0, 11.85, zf - 0.15); root.add(cornice);
  // Jharokhas: a balcony on brackets, a gilded rail, slim pillars and a dome, bulbs round the dome's rim
  const gold = std('#c9963f', 0.4, 0.6), wood = std('#5a2e16', 0.8);
  [-4.69, 4.69].forEach((x) => {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.22, 0.9), wood); base.position.set(x, 3.85, zf - 0.45); root.add(base);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.55, 0.05), gold); rail.position.set(x, 4.25, zf - 0.88); root.add(rail);
    [-0.85, 0.85].forEach((dx) => { const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 2.0, 8), gold); pl.position.set(x + dx, 4.95, zf - 0.82); root.add(pl); });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 6, 0, TAU, 0, Math.PI / 2), std('#b8863a', 0.45, 0.5)); dome.scale.set(1.05, 0.6, 0.55); dome.position.set(x, 6.02, zf - 0.45); root.add(dome);
    const eave = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 1.0), wood); eave.position.set(x, 5.98, zf - 0.45); root.add(eave);
    for (let k = 0; k <= 10; k++) kit.bulbs.add(x - 1.05 + k * 0.21, 5.9, zf - 0.97, k, { ph: k, s: 0.8 });
    kit.pools.add(x, 4.9, zf - 0.02, 1.1, 1.2, LIGHT.tungsten, 0.3, { vertical: true, layer: 'practical' });
  });
  // Marigold swags along the first-floor moulding
  const beads = [];
  for (let sI = 0; sI < 8; sI++) { const A = [lerp(-8, 8, sI / 8), 3.72, zf - 0.08], B = [lerp(-8, 8, (sI + 1) / 8), 3.72, zf - 0.08]; for (let k = 1; k < 16; k++) beads.push(sag(A, B, 0.4, k / 16)); }
  const garl = new THREE.InstancedMesh(new THREE.SphereGeometry(0.055, 6, 4), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, emissive: '#3a1800' }), beads.length), mx = new THREE.Matrix4(), cA = new THREE.Color('#f29a2e'), cB = new THREE.Color('#f6c342');
  garl.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(beads.length * 3), 3);
  beads.forEach((q, i) => { garl.setMatrixAt(i, mx.makeTranslation(q[0], q[1], q[2])); const c = i % 3 ? cA : cB; garl.instanceColor.setXYZ(i, c.r, c.g, c.b); });
  root.add(garl);
  // Curtain lights round the projector screen, and a string of bulbs along the parapet
  kit.curtains.add(-8.0, zf - 0.06, -3.75, zf - 0.06, 2.7, 11.5, 0, -1, 0);
  kit.curtains.add(3.75, zf - 0.06, 8.0, zf - 0.06, 2.7, 11.5, 0, -1, 1);
  kit.curtains.add(-3.55, zf - 0.06, 3.55, zf - 0.06, 9.2, 11.5, 0, -1, 2);
  for (let x = -8.1; x <= 8.1; x += 0.36) kit.bulbs.add(x, 12.08, zf - 0.32, Math.round(x * 3), { ph: x, s: 0.85 });
  // Warm uplights washing it from the foot of the wall
  [-7.2, -2.2, 2.2, 7.2].forEach((x) => uplight(kit, root, x, zf - 0.45, 0, 12, 0, 1));
  return mat;
}

/* ---------- architectural and household light ---------- */
// An uplight on the ground by a wall: a small fixture, its wash up the wall and a little light on the ground at its foot.
// ry turns the wash to lie along the wall; (tx, tz) points from the fixture to the wall.
function uplight(kit, root, x, z, ry, h, tx, tz) {
  const fx = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.16), std('#15110d', 0.6, 0.4)); fx.position.set(x, 0.06, z); fx.rotation.y = ry; root.add(fx);
  kit.bigBulbs.add(x, 0.14, z, 0, { color: LIGHT.amber, k: 0.9, s: 0.45, twinkle: 0, layer: 'architectural' });
  kit.pools.add(x + tx * 0.24, h * 0.42, z + tz * 0.24, 1.1, h * 0.75, LIGHT.amber, 0.24, { vertical: true, ry, layer: 'architectural' });
  kit.pools.add(x, 0.02, z, 1.3, 1.3, LIGHT.amber, 0.1, { layer: 'architectural' });
}
// A small rangoli for a doorstep, three patterns in the night's colours
const doorRangolis = [];
function doorRangoli(i) {
  if (doorRangolis[i]) return doorRangolis[i];
  const pal = [['#c2185b', '#f6c342', '#2a9d8f', '#fff3d6'], ['#f08a24', '#3b4cc0', '#e9c46a', '#fff3d6'], ['#2f8f5b', '#d8453a', '#f6c342', '#fff3d6']][i];
  const t = canvasTexture(128, 128, (g, w) => {
    g.clearRect(0, 0, w, w); g.translate(w / 2, w / 2);
    for (let k = 0; k < 8; k++) { g.save(); g.rotate(k / 8 * TAU); g.fillStyle = pal[k % 2]; g.beginPath(); g.ellipse(w * 0.26, 0, w * 0.15, w * 0.07, 0, 0, TAU); g.fill(); g.restore(); }
    g.fillStyle = pal[2]; g.beginPath(); g.arc(0, 0, w * 0.14, 0, TAU); g.fill();
    g.fillStyle = pal[3]; for (let k = 0; k < 16; k++) { const a = k / 16 * TAU; g.beginPath(); g.arc(Math.cos(a) * w * 0.44, Math.sin(a) * w * 0.44, 3, 0, TAU); g.fill(); }
  });
  doorRangolis[i] = new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.2, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 });
  return doorRangolis[i];
}
// A house's doorstep for the festival: most doors have a lamp on a bracket beside them; some have a row of diyas on the
// otla and a rangoli on the lane in front; lit windows on the ground floor spill a little light onto the lane.
function doorstep(kit, root, h, r) {
  const W = h.z2 - h.z1, X = h.side * 8, cols = Math.max(2, Math.round(W / 2.2)), dz = h.z1 + W * (Math.floor(cols / 2) + 0.5) / cols;
  if (h.z2 < -24 || h.z1 > 68) return;
  if (h.lit > 0.3) {
    const br = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.05), std('#1b1510', 0.7)); br.position.set(X - h.side * 0.15, 2.72, dz + 0.62); root.add(br);
    kit.bigBulbs.add(X - h.side * 0.28, 2.64, dz + 0.62, 0, { color: LIGHT.tungsten, k: 1.2, s: 0.5, twinkle: 0.02, layer: 'practical' });
    kit.pools.add(X - h.side * 0.03, 2.5, dz + 0.62, 0.9, 1.2, LIGHT.tungsten, 0.22, { vertical: true, ry: h.side * Math.PI / 2, layer: 'practical' });
    kit.pools.add(h.side * 6.4, 0.02, dz + 0.4, 1.8, 1.8, LIGHT.tungsten, 0.12, { layer: 'practical' });
  }
  if (r() < 0.55) {
    for (let k = 0; k < 5; k++) kit.flames.add(h.side * 6.98, 0.45, dz + (k - 2) * 0.24, { s: 0.038, k: 0.55 });
    kit.pools.add(h.side * 6.5, 0.02, dz, 1.4, 1.6, LIGHT.flame, 0.16, { layer: 'flame' });
    kit.pools.add(h.side * 6.84, 0.24, dz, 1.3, 0.3, LIGHT.flame, 0.2, { vertical: true, ry: h.side * Math.PI / 2, layer: 'flame' });
    const rg = new THREE.Mesh(new THREE.CircleGeometry(0.42, 24), doorRangoli(Math.floor(r() * 3))); rg.rotation.x = -Math.PI / 2; rg.position.set(h.side * 6.2, 0.01, dz); root.add(rg);
  }
  for (let c = 0; c < cols; c++) {
    if (c === Math.floor(cols / 2) || ((h.lit * 10 + c) % 3) >= 1.6) continue;
    kit.pools.add(h.side * 6.45, 0.02, h.z1 + W * (c + 0.5) / cols, 1.1, 1.3, LIGHT.tungsten, 0.08, { layer: 'practical' });
  }
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
export function buildVenue(id, tier, themeName, furnishData) {
  const TH = THEMES[themeName] || THEMES.traditional;
  const r = seeded(id === 'outdoors' ? 101 : id === 'stadium' ? 202 : 303);
  const root = new THREE.Group(), kit = newKit();
  const sky = id === 'stadium' ? null : buildSky(id);
  if (sky) root.add(sky.root);
  const built = id === 'outdoors' ? outdoors(kit, root, tier, TH, r, furnishData) : id === 'stadium' ? stadium(kit, root, tier, TH, r, furnishData) : sheri(kit, root, tier, TH, r, furnishData);
  // The stalls, the DJ's rig, chairs and the rest, where the 2D scene's layout puts them
  const furnish = furnishData ? buildFurnish(kit, root, id, furnishData) : null;
  if (furnishData && furnishData.stage) furnishData.stage.hole3d = { front: built.stage ? built.stage.stageFront : [], band: built.stage ? built.stage.bandHoles : built.bandHoles, mandap: built.mandapHoles || [] };
  // The garbo at the centre of the circle, and the warm pool its lamp throws on the ground round it
  const garbo = buildGarbo(kit, { small: id === 'sheri', flags: TH.flags });
  root.add(garbo.root);
  kit.pools.add(0, 0.02, 0, id === 'sheri' ? 3.6 : 4.4, id === 'sheri' ? 3.6 : 4.4, '#ffae5c', 0.2, { layer: 'garbo', live: true });
  // Paint every lamp's light on the ground into the ground's light maps, one per layer (the flames' too)
  kit.flames.lightPools(kit);
  const lightMaps = groundLayers(built.floor, built.floor.userData.rect, kit.pools.list, TH, tier.name === 'phone' ? 512 : 1024, built.floor.userData.decal);
  kit.pools.bakedGround = true;
  buildKit(kit, root);
  bake(root, new Set(kit.lit.map((e) => e.mat)));
  return Object.assign({ id, root, kit, sky, TH, lightMaps, garbo, furnish, // The lamp's light, as it spreads from under the canopy over the circle
    garboLight: { pos: [0, id === 'sheri' ? 1.3 : 1.45, 0], distance: id === 'sheri' ? 12 : 15, color: '#ffae5c' } }, built);
}
