// VADODARA VISION 2047, built from the owner's starred references (research/venue-reference-pack, priority 9, "Cyberpunk
// City Plaza": zip-067, zip-068, zip-079, the plan zip-100, zip-120, zip-126, zip-132, zip-139 and the concept boards),
// named by the owner on 2026-10-02: Vadodara a hundred years on, an open plaza raised among the towers of the city at
// night, the line of a palace of domes and chhatris drawn in gold light on the skyline behind it. Wet black stone holding every light; in the middle a round LED floor where a mandala of
// neon in magenta, cyan and violet turns, and diamond tiles of light round it; tall LED pillars round the plaza
// running geometric patterns; palms in lit planters; sofas round the floor; the stage at the far end before a great LED
// wall, searchlights fanning up behind it; an elevated metro line on its viaduct passing behind, a train gliding by;
// towers all round, their windows lit, their edges traced in neon; digital booths down both sides, as the plan has them;
// two great dandiyas crossed in neon over the LED wall; ornate gates on the near side. Screens and pillars carry
// pattern, never figures.
//
// The plan is the 2D scene's (venues2d/cyber.js), handed in as data.spec.

import * as THREE from 'three';
import { TAU, lerp, canvasTexture, seeded, BAND, LIGHT } from '../util.js';
import { std, Beam } from '../kit.js';
import { buildStage } from '../stage.js';
import { canvas, normalMap, tex } from '../floors.js';
import { ground } from './common.js';
import { newDecor } from './decor.js';

const NEON = ['#ff3ad0', '#38e0ff', '#9a5aff'];

/* ---------- textures and shaders ---------- */
// Wet black stone: big slabs, darker joints, sheen in the puddles (the roughness map's dark patches)
function wetStone(res) {
  const r = seeded(9), c = canvas(res, res), hc = canvas(res, res), g = c.getContext('2d'), hg = hc.getContext('2d');
  g.fillStyle = '#16161c'; g.fillRect(0, 0, res, res); hg.fillStyle = '#808080'; hg.fillRect(0, 0, res, res);
  const n = 3, w = res / n;
  for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) { const t = 18 + r() * 10; g.fillStyle = `rgb(${t},${t},${t + 6})`; g.fillRect(i * w + 2, k * w + 2, w - 4, w - 4); }
  for (let i = 0; i < 9000; i++) { g.fillStyle = r() < 0.5 ? 'rgba(200,200,230,.04)' : 'rgba(0,0,0,.08)'; g.fillRect(r() * res, r() * res, 1.4, 1.4); }
  return { map: tex(c, [100 / 3.6, 100 / 3.6]), normal: tex(normalMap(hc, 0.8), [100 / 3.6, 100 / 3.6], true) };
}
// The LED floor: rings of neon petals and dots turning against each other, a bright rim; anything with `facade` set is
// the pillars' pattern instead: chevrons and diamonds climbing
function neonMaterial(kind) {
  return new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uK: { value: 1 }, uPulse: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform float uT; uniform float uK; uniform float uPulse; varying vec2 vUv;
      vec3 MAG = vec3(1.0, 0.18, 0.8), CYA = vec3(0.2, 0.85, 1.0), VIO = vec3(0.6, 0.35, 1.0);
      void main(){
        vec3 col = vec3(0.0);
        ${kind === 'facade' ? `
        vec2 p = vUv * vec2(3.0, 14.0); float row = floor(p.y);
        float chev = abs(fract(p.x + abs(fract(p.y + uT * 0.4) - 0.5) * 2.0) - 0.5);
        float dia = abs(fract(p.x) - 0.5) + abs(fract(p.y * 0.5 - uT * 0.2) - 0.5);
        col += mix(MAG, CYA, mod(row, 2.0)) * smoothstep(0.08, 0.0, abs(chev - 0.3)) * 1.2;
        col += VIO * smoothstep(0.06, 0.0, abs(dia - 0.42)) * 0.9;
        col += mix(CYA, MAG, vUv.y) * 0.08;
        col *= 0.75 + 0.25 * sin(uT * 2.0 + vUv.y * 9.0);
        col += vec3(1.0) * smoothstep(0.03, 0.0, min(vUv.x, 1.0 - vUv.x)) * 0.8;` : kind === 'diamond' ? `
        vec2 p = abs(vUv - 0.5) * 2.0; float d = p.x + p.y;
        col += MAG * smoothstep(0.05, 0.0, abs(d - 0.92)) * 1.4 + CYA * smoothstep(0.04, 0.0, abs(d - 0.62 - 0.08 * sin(uT * 2.0))) + VIO * smoothstep(0.05, 0.0, abs(d - 0.3)) * 0.9;
        col *= step(d, 1.0);` : `
        vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
        for (int i = 0; i < 4; i++) {
          float fi = float(i), n = 8.0 + fi * 4.0, rr = 0.22 + fi * 0.18, sp = (mod(fi, 2.0) < 1.0 ? 1.0 : -1.0) * 0.05;
          float ang = a * n + uT * sp * n, shape = rr + 0.06 * abs(cos(ang * 0.5));
          vec3 ci = mod(fi, 3.0) < 1.0 ? MAG : mod(fi, 3.0) < 2.0 ? CYA : VIO;
          col += ci * smoothstep(0.018, 0.0, abs(r - shape)) * 1.1;
          float dots = smoothstep(0.35, 0.0, length(vec2(fract(a * n / 6.2832 * 2.0) - 0.5, (r - rr + 0.08) * 22.0)));
          col += ci * dots * 0.6;
        }
        col += CYA * smoothstep(0.02, 0.0, abs(r - 0.12)) + MAG * smoothstep(0.03, 0.0, abs(r - 0.985)) * 1.6;
        col *= smoothstep(1.0, 0.97, r);`}
        gl_FragColor = vec4(col * uK * (0.85 + 0.3 * uPulse), 1.0);
      }`
  });
}
// A tower's windows: a grid of panes, some lit warm or cold, floors marked by a darker band
function windowsTexture(seed, tint) {
  const r = seeded(seed);
  return canvasTexture(64, 256, (g, w, h) => {
    g.fillStyle = '#07070c'; g.fillRect(0, 0, w, h);
    for (let y = 2; y < h; y += 6) for (let x = 2; x < w; x += 5) { const l = r(); if (l < 0.42) { g.fillStyle = l < 0.12 ? tint : l < 0.3 ? 'rgba(255,214,160,.75)' : 'rgba(150,190,255,.55)'; g.fillRect(x, y, 3, 3); } }
  });
}

/* ---------- the sky: no moon, the city's glow low all round ---------- */
function citySky(tier) {
  const root = new THREE.Group();
  const dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { c0: { value: new THREE.Color('#0a0610') }, c1: { value: new THREE.Color('#5a1a6a') }, c2: { value: new THREE.Color('#1c0e38') }, c3: { value: new THREE.Color('#05030f') } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: 'uniform vec3 c0; uniform vec3 c1; uniform vec3 c2; uniform vec3 c3; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h < 0.0 ? c0 : h < 0.12 ? mix(c1, c2, h / 0.12) : mix(c2, c3, clamp((h - 0.12) / 0.5, 0.0, 1.0)); gl_FragColor = vec4(c, 1.0); }'
  }));
  dome.renderOrder = -10; root.add(dome);
  return { root, moonLight: { dir: new THREE.Vector3(0.2, 0.9, 0.3).normalize(), intensity: 0.12 }, info: null };
}

/* ---------- the venue ---------- */
function cyber(kit, root, tier, TH, r, data) {
  const phone = tier.name === 'phone', sp = data.spec, CY = sp.plan, S = sp.stage, D = newDecor(kit, root), leds = [], mx = new THREE.Matrix4();
  const ws = wetStone(phone ? 512 : 1024);
  const floorMesh = ground(root, { map: ws.map, normalMap: ws.normal, normalScale: 0.25, roughness: 0.22, decal: null, decalRect: null }, 120, 120, 6, tier.shadows);
  floorMesh.material.userData.env = 1.2;

  /* the LED floor and its diamonds */
  const lf = neonMaterial('floor'), ledFloor = new THREE.Mesh(new THREE.CircleGeometry(CY.floor, 96), lf);
  ledFloor.rotation.x = -Math.PI / 2; ledFloor.position.y = 0.012; ledFloor.userData.dynamic = true; root.add(ledFloor); leds.push({ m: lf, k: 0.75 });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(CY.floor + 0.15, 0.07, 6, 160), new THREE.MeshBasicMaterial({ color: '#ffffff' })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.05; rim.userData.dynamic = true; root.add(rim);
  [45, 135, 225, 315].forEach((d) => { const a = d * Math.PI / 180, dm = neonMaterial('diamond'), m = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), dm); m.rotation.set(-Math.PI / 2, 0, Math.PI / 4); m.position.set(Math.cos(a) * CY.diamonds, 0.012, Math.sin(a) * CY.diamonds); m.userData.dynamic = true; root.add(m); leds.push({ m: dm, k: 0.7 }); });
  kit.pools.add(0, 0.02, 0, CY.floor + 4, CY.floor + 4, '#c040ff', 0.08, { layer: 'show' });

  /* the LED pillars round the plaza */
  const pillarGeo = new THREE.BoxGeometry(2.2, 12, 1.2), frame = std('#0c0c12', 0.5, 0.6);
  CY.pillars.forEach(([x, z], i) => {
    const face = Math.atan2(-x, -z), g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = face; root.add(g);
    const body = new THREE.Mesh(pillarGeo, frame); body.position.y = 6; g.add(body);
    const pm = neonMaterial('facade'); leds.push({ m: pm, k: 0.85 });
    [-1, 1].forEach((sd) => { const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 11.4), pm); scr.position.set(0, 6.1, sd * 0.61); scr.rotation.y = sd > 0 ? 0 : Math.PI; scr.userData.dynamic = true; g.add(scr); });
    kit.pools.add(x, 0.02, z, 3.4, 3.4, NEON[i % 3], 0.12, { layer: 'show' });
  });

  /* palms in lit planters round the plaza's edge */
  for (let i = 0; i < 12; i++) { const a = (i + 0.5) / 12 * TAU, x = Math.cos(a) * 21, z = Math.sin(a) * 19 + 3; if (z > 17 && Math.abs(x) < 12) continue; const pl = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 2.2), std('#1a1a22', 0.4, 0.4)); pl.position.set(x, 0.35, z); root.add(pl); const edge = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.05, 2.25), kit.glow(NEON[i % 3], 1.4, 'show')); edge.position.set(x, 0.72, z); root.add(edge); D.palm(x, z, 1.15); kit.bigBulbs.add(x, 0.8, z, 0, { color: '#ffd0a0', k: 0.8, s: 0.4, twinkle: 0, layer: 'architectural' }); }

  /* the stage and its LED wall, searchlights behind it */
  const stage = buildStage(kit, { x0: S.x0, x1: S.x1, z: S.z, h: S.h, depth: S.depth, screenBottom: S.screenBottom, screenTop: S.screenTop, truss: S.truss, arrays: S.arrays, band: BAND.big });
  root.add(stage.root);
  [-1, 1].forEach((sd) => { [S.x1 + 2.2, S.x1 + 5.0].forEach((x, k) => { const tm = neonMaterial('facade'); leds.push({ m: tm, k: 0.8 }); const m = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 9 - k * 1.4), tm); m.position.set(sd * x, (9 - k * 1.4) / 2 + 0.4, S.z + 1 + k); m.rotation.y = Math.PI; m.userData.dynamic = true; root.add(m); }); });
  const searches = []; for (let i = 0; i < (phone ? 4 : 6); i++) searches.push({ i, x: lerp(-14, 14, i / ((phone ? 4 : 6) - 1)), beam: new Beam(root, NEON[i % 3], 90, 0.05, 0.22) });

  /* the metro: a viaduct on piers behind the stage, a strip of light under it, a train gliding along it */
  const deck = new THREE.Mesh(new THREE.BoxGeometry(260, 1.4, 7), std('#2a2a32', 0.6, 0.3)); deck.position.set(0, CY.metroY, CY.metroZ); root.add(deck);
  const under = new THREE.Mesh(new THREE.BoxGeometry(260, 0.12, 0.2), kit.glow('#38e0ff', 1.6, 'festive')); under.position.set(0, CY.metroY - 0.75, CY.metroZ - 3.4); root.add(under);
  const rail = new THREE.Mesh(new THREE.BoxGeometry(260, 0.08, 0.1), kit.glow('#ff3ad0', 1.4, 'festive')); rail.position.set(0, CY.metroY + 0.8, CY.metroZ - 3.5); root.add(rail);
  for (let x = -120; x <= 120; x += 18) { const p = new THREE.Mesh(new THREE.BoxGeometry(1.6, CY.metroY - 0.7, 2.4), std('#24242c', 0.7, 0.2)); p.position.set(x, (CY.metroY - 0.7) / 2, CY.metroZ); root.add(p); }
  const train = new THREE.Group(); train.userData.dynamic = true; root.add(train);
  const carBody = std('#c8ccd8', 0.35, 0.6), carWin = kit.glow('#bfe8ff', 1.2, 'practical');
  for (let k = 0; k < 4; k++) { const car = new THREE.Mesh(new THREE.BoxGeometry(13.4, 3, 3), carBody); car.position.set(k * 14, CY.metroY + 2.2, CY.metroZ); train.add(car); const win = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 3.06), carWin); win.position.set(k * 14, CY.metroY + 2.6, CY.metroZ); train.add(win); const stripe = new THREE.Mesh(new THREE.BoxGeometry(13.4, 0.12, 3.06), kit.glow('#ff3ad0', 1.4, 'festive')); stripe.position.set(k * 14, CY.metroY + 1.4, CY.metroZ); train.add(stripe); }

  /* the towers all round: lit windows, neon traced up their edges and round their tops, a screen on some */
  const r2 = seeded(77), towerList = [];
  for (let i = 0; i < (phone ? 34 : 60); i++) {
    const a = r2() * TAU, d = 70 + r2() * 110, x = Math.cos(a) * d, z = Math.sin(a) * d + 10; if (z < -40 && Math.abs(x) < 40) continue;
    if (z > 60 && z < 170 && Math.abs(x) < 80) continue;
    const w = 12 + r2() * 20, dd = 12 + r2() * 18, h = 40 + r2() * (d > 120 ? 160 : 110); towerList.push([x, z, w, dd, h, Math.floor(r2() * 3), Math.floor(r2() * 4)]);
  }
  const winMats = [0, 1, 2, 3].map((k) => { const t = windowsTexture(40 + k, NEON[k % 3]); t.wrapS = t.wrapT = THREE.RepeatWrapping; return kit.litMap(t, 0.7, 'ambient'); });
  towerList.forEach(([x, z, w, dd, h, c, wm]) => {
    const geo = new THREE.BoxGeometry(w, h, dd), uv = geo.attributes.uv, p = geo.attributes.position, n = geo.attributes.normal;
    for (let i = 0; i < uv.count; i++) { const side = Math.abs(n.getX(i)) > 0.5 ? dd : w; uv.setXY(i, uv.getX(i) * side / 16, (p.getY(i) + h / 2) / 64); }
    const m = new THREE.Mesh(geo, winMats[wm]); m.position.set(x, h / 2 - 10, z); root.add(m);
    const neon = kit.glow(NEON[c], 1.5, 'festive');
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sz]) => { const e = new THREE.Mesh(new THREE.BoxGeometry(0.5, h, 0.5), neon); e.position.set(x + sx * w / 2, h / 2 - 10, z + sz * dd / 2); root.add(e); });
    const crown = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.6, dd + 0.6), neon); crown.position.set(x, h - 10, z); root.add(crown);
  });

  /* the palace on the skyline: its line drawn in gold light (a long front of arches, wings with domes, chhatris along
     the roof, a tall tower at the middle crowned with a dome) */
  { const Z = 120, Y = -8, gold = kit.glow('#ffcf6a', 1.7, 'festive'), rose = kit.glow('#ff6ab8', 1.4, 'festive'), lines = [];
    const L = (pts, mat = gold) => lines.push([pts.map(([x, y]) => new THREE.Vector3(x, Y + y, Z)), mat]);
    const arc = (cx, cy, rx, ry, a0 = 0, a1 = Math.PI, n = 16) => { const pts = []; for (let i = 0; i <= n; i++) { const a = lerp(a0, a1, i / n); pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); } return pts; };
    const dome = (cx, cy, w, h, mat) => { const pts = [[cx - w / 2, cy]]; for (let i = 0; i <= 18; i++) { const t = i / 18, a = Math.PI * (1 - t); pts.push([cx + Math.cos(a) * w / 2 * (1 + 0.15 * Math.sin(a)), cy + Math.sin(a) * h]); } L(pts, mat); L([[cx, cy + h], [cx, cy + h + h * 0.35]], mat); };
    L([[-90, 0], [90, 0]]); L([[-90, 22], [90, 22]]); L([[-90, 0], [-90, 22]]); L([[90, 0], [90, 22]]);
    for (let x = -84; x <= 84; x += 8) L(arc(x, 8, 3, 6), x % 16 ? gold : rose);
    [-60, -30, 30, 60].forEach((x) => { L([[x - 9, 22], [x - 9, 34], [x + 9, 34], [x + 9, 22]]); dome(x, 34, 16, 9, rose); });
    for (let x = -80; x <= 80; x += 16) if (Math.abs(x) > 12 && [-60, -30, 30, 60].every((d) => Math.abs(x - d) > 10)) { L([[x - 2.5, 22], [x - 2.5, 26], [x + 2.5, 26], [x + 2.5, 22]]); dome(x, 26, 5, 3.2, gold); }
    L([[-8, 0], [-8, 60], [8, 60], [8, 0]]); for (let y = 30; y < 60; y += 10) L(arc(0, y, 4, 4, 0, TAU, 20)); dome(0, 60, 16, 12, rose); L([[-10, 60], [10, 60]]);
    lines.forEach(([pts, mat]) => root.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.02), Math.max(8, pts.length * 3), 0.32, 5), mat)));
  }

  /* digital booths down both sides of the plaza: a kiosk, a screen on its front, a neon edge round its roof */
  for (let z = -12; z <= 20; z += 8) [-1, 1].forEach((sd) => {
    const x = sd * 25.5, g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = -sd * Math.PI / 2; root.add(g);
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 2.4), std('#16141c', 0.45, 0.5)); body.position.y = 1.4; g.add(body);
    const bm = neonMaterial('facade'); leds.push({ m: bm, k: 0.7 });
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.5), bm); scr.position.set(0, 1.7, 1.21); scr.userData.dynamic = true; g.add(scr);
    const roofEdge = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.08, 2.6), kit.glow(NEON[(z + 12) / 8 % 3], 1.5, 'show')); roofEdge.position.y = 2.84; g.add(roofEdge);
    kit.pools.add(x - sd * 2.2, 0.02, z, 2.2, 2.2, NEON[(z + 12) / 8 % 3], 0.1, { layer: 'show' });
  });

  /* two great dandiyas crossed in neon over the LED wall, striped like the real ones */
  [-1, 1].forEach((sd) => { const pts = [new THREE.Vector3(-sd * 6, S.truss + 0.6, S.z + 1.2), new THREE.Vector3(sd * 6, S.truss + 6.6, S.z + 1.2)]; root.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.22, 8), kit.glow(sd > 0 ? '#ff3ad0' : '#38e0ff', 1.6, 'show'))); for (let k = 1; k < 8; k++) { const p = pts[0].clone().lerp(pts[1], k / 8), ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.07, 6, 16), kit.glow('#ffd04a', 1.5, 'show')); ring.position.copy(p); ring.lookAt(pts[1]); root.add(ring); } });

  /* the gates on the near side: open leaves of black metal with a brass wheel on each, a neon arch over them */
  [-1, 1].forEach((sd) => {
    const leaf = new THREE.Group(); leaf.position.set(sd * 4.2, 0, CY.z0 + 1); leaf.rotation.y = sd * 1.1; root.add(leaf);
    const fr = std('#141418', 0.4, 0.8), brass = std('#c9953a', 0.3, 0.9);
    for (let k = 0; k < 9; k++) { const bar = new THREE.Mesh(new THREE.BoxGeometry(0.05, 4.2, 0.05), fr); bar.position.set(-sd * (0.2 + k * 0.42), 2.1, 0); leaf.add(bar); }
    [0.3, 2.1, 4.1].forEach((y) => { const rl = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.08, 0.08), fr); rl.position.set(-sd * 1.9, y, 0); leaf.add(rl); });
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.06, 8, 24), brass); wheel.position.set(-sd * 1.9, 2.4, 0); leaf.add(wheel);
  });
  { const pts = []; for (let i = 0; i <= 40; i++) { const th = Math.PI * (1 - i / 40); pts.push(new THREE.Vector3(Math.cos(th) * 4.4, 4.6 + Math.sin(th) * 2.2, CY.z0 + 1)); } root.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.08, 6), kit.glow('#ff3ad0', 1.6, 'show'))); [-1, 1].forEach((sd) => { const post = new THREE.Mesh(new THREE.BoxGeometry(0.6, 4.6, 0.6), std('#1a1a22', 0.5, 0.5)); post.position.set(sd * 4.4, 2.3, CY.z0 + 1); root.add(post); }); }

  /* sofas round the floor */
  (CY.seats || []).forEach((sf, i) => {
    D.sofa(sf.x, sf.z, sf.ry, sf.len, { wood: '#1a1a20', seat: '#2a2a34', cushions: ['#ff3ad0', '#38e0ff', '#9a5aff', '#ffd04a'] });
    if (!sf.near) D.table(sf.x + Math.sin(sf.ry) * 1.0, sf.z + Math.cos(sf.ry) * 1.0, 0.9, 0.55, { candles: 1, wood: '#121216' });
  });
  D.finish();

  // what the wet stone reflects: neon and the screens
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.SphereGeometry(50, 16, 8), new THREE.MeshBasicMaterial({ color: '#0c0614', side: THREE.BackSide })));
  for (let i = 0; i < 14; i++) { const a = i / 14 * TAU, m = new THREE.Mesh(new THREE.BoxGeometry(1.2, 14, 1.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(NEON[i % 3]).multiplyScalar(3) })); m.position.set(Math.cos(a) * 30, 6, Math.sin(a) * 30); env.add(m); }
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color('#c060ff').multiplyScalar(2) })); scr.position.set(0, 6, 30); scr.rotation.y = Math.PI; env.add(scr);

  const rig = {
    hemi: ['#4a2a6a', '#1a1222', 0.5, 0.75], moon: 0,
    spots: [{ pos: [0, 18, -8], to: [0, 0, 6], color: '#e8d8ff', base: 60, distance: 50, angle: 0.62, layer: 'key' }, { pos: stage.wash.pos, to: stage.wash.to, color: '#ffe4c4', base: 120, distance: 26, angle: 0.55, layer: 'show' }],
    points: [{ pos: [-14, 6, 4], color: '#ff3ad0', base: 46, distance: 26, layer: 'show' }, { pos: [14, 6, 4], color: '#38e0ff', base: 46, distance: 26, layer: 'show' }, { pos: [0, 3, 0], color: '#c060ff', base: 30, distance: 18, layer: 'show' }, { pos: [0, 6, -18], color: '#9a5aff', base: 30, distance: 18, layer: 'festive' }]
  };
  return {
    rig, stage, feedScreen: stage.feedScreen, floor: floorMesh, fog: new THREE.FogExp2('#1a0c2a', 0.006), exposure: 1.05, envScene: env,
    update(t, ctx) {
      const { pulse, reduce, lv } = ctx, tt = reduce ? 0 : t;
      leds.forEach((l) => { l.m.uniforms.uT.value = tt; l.m.uniforms.uK.value = l.k * (0.4 + 0.6 * lv.show); l.m.uniforms.uPulse.value = pulse; });
      rim.material.color.set('#f4ecff').multiplyScalar(1.7 * (0.6 + 0.4 * lv.show) * (1 + 0.12 * pulse));
      searches.forEach((s) => { const a = 0.5 * Math.sin(tt * 0.3 + s.i * 1.3); s.beam.aim([s.x, 1, S.z + 9], [s.x + Math.sin(a) * 60, 90, S.z + 40 + Math.cos(a) * 20]); s.beam.set(NEON[s.i % 3], 0.5 + 0.5 * lv.show); });
      // the train crosses every forty seconds or so, a pause between
      train.position.x = reduce ? -70 : ((tt * 9) % 360) - 200;
    }
  };
}

export default { seed: 1313, sky: citySky, garbo: 'bare', garboK: 7, build: cyber };
