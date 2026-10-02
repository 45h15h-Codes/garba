// Furniture and dressing that more than one venue uses, each drawn from its references: brass lanterns with a candle
// inside, wooden sofas with cushions, carved low tables, rugs, brass urns of dandiya sticks, potted palms, truss towers
// and the band's platform. Repeated things are collected and built as one instanced mesh per kind (finish()).

import * as THREE from 'three';
import { TAU, lerp, canvasTexture, merged, face } from '../util.js';
import { std } from '../kit.js';
import { latticeMat } from '../stage.js';

const at = (x, y, z, ry = 0, sx = 1, sy = 1, sz = 1) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(sx, sy, sz));

/* ---------- a rug, in one of a few patterns ---------- */
const rugs = {};
export function rugTexture(kind = 'persian', cols = ['#7a1424', '#1c2a5a', '#d6a64a', '#f3e6d0']) {
  const key = kind + cols.join();
  if (rugs[key]) return rugs[key];
  rugs[key] = canvasTexture(256, 160, (g, w, h) => {
    g.fillStyle = cols[0]; g.fillRect(0, 0, w, h);
    g.strokeStyle = cols[2]; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
    g.fillStyle = cols[1]; g.fillRect(16, 16, w - 32, 12); g.fillRect(16, h - 28, w - 32, 12);
    if (kind === 'persian') {
      g.save(); g.translate(w / 2, h / 2);
      for (let i = 0; i < 4; i++) { g.rotate(Math.PI / 2); g.fillStyle = cols[1]; g.beginPath(); g.ellipse(0, 22, 14, 30, 0, 0, TAU); g.fill(); g.fillStyle = cols[2]; g.beginPath(); g.ellipse(0, 22, 6, 14, 0, 0, TAU); g.fill(); }
      g.fillStyle = cols[3]; g.beginPath(); g.arc(0, 0, 12, 0, TAU); g.fill(); g.restore();
      for (let i = 0; i < 18; i++) { g.fillStyle = i % 2 ? cols[2] : cols[3]; g.fillRect(24 + i * 12, 36, 5, 5); g.fillRect(24 + i * 12, h - 41, 5, 5); }
    } else {
      for (let i = 0; i < 9; i++) { g.fillStyle = [cols[1], cols[2], cols[3]][i % 3]; g.fillRect(26 + i * 23, 40, 12, h - 80); }
    }
  });
  return rugs[key];
}

/* ---------- the collection ---------- */
export function newDecor(kit, root) {
  const lanterns = [], urns = [], palms = [], bells = [];
  const D = {
    // A brass lantern standing on something (y), its candle lit
    lantern(x, y, z, s = 1) { lanterns.push([x, y, z, s]); kit.flames.add(x, y + 0.1 * s, z, { bowl: null, s: 0.026 * s, k: 0.7 }); },
    // A wooden sofa, its back towards ry + π (it faces ry), with cushions in the given colours
    sofa(x, z, ry, len = 2.4, o = {}) {
      const wood = std(o.wood || '#5a3418', 0.62, 0.05), seat = std(o.seat || '#8e1b2c', 0.85), cush = o.cushions || ['#a0175a', '#c2641a', '#7a1830'];
      const g = new THREE.Group(); g.position.set(x, o.y || 0, z); g.rotation.y = ry; root.add(g);
      const add = (geo, mat, px, py, pz) => { const m = new THREE.Mesh(geo, mat); m.position.set(px, py, pz); g.add(m); return m; };
      add(new THREE.BoxGeometry(len, 0.12, 0.8), wood, 0, 0.3, 0);
      add(new THREE.BoxGeometry(len - 0.1, 0.16, 0.7), seat, 0, 0.42, 0.02);
      add(new THREE.BoxGeometry(len, 0.55, 0.12), wood, 0, 0.6, -0.36);
      add(new THREE.BoxGeometry(len - 0.15, 0.4, 0.14), seat, 0, 0.66, -0.27);
      [-1, 1].forEach((sd) => { add(new THREE.BoxGeometry(0.1, 0.32, 0.8), wood, sd * len / 2, 0.55, 0); [-0.32, 0.32].forEach((dz) => add(new THREE.BoxGeometry(0.08, 0.3, 0.08), wood, sd * (len / 2 - 0.05), 0.15, dz)); });
      for (let i = 0; i < Math.round(len / 0.75); i++) { const c = add(new THREE.BoxGeometry(0.42, 0.34, 0.12), std(cush[i % cush.length], 0.9), lerp(-len / 2 + 0.4, len / 2 - 0.4, i / Math.max(1, Math.round(len / 0.75) - 1)), 0.7, -0.18); c.rotation.x = -0.25; }
      // its outline, for the 2D scene to cut where it stands in front of someone
      return g;
    },
    // A carved low table with candles in glass on it
    table(x, z, w = 1.2, d = 0.6, o = {}) {
      const wood = std(o.wood || '#4a2a14', 0.55, 0.05), y = o.y || 0;
      const t = new THREE.Mesh(new THREE.BoxGeometry(w, 0.07, d), wood); t.position.set(x, y + 0.42, z); root.add(t);
      [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([a, b]) => { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.4, 6), wood); l.position.set(x + a * (w / 2 - 0.08), y + 0.2, z + b * (d / 2 - 0.08)); root.add(l); });
      const n = o.candles != null ? o.candles : 2;
      for (let i = 0; i < n; i++) { const cx = x + (i - (n - 1) / 2) * 0.22; const gl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.12, 10), kit.glow('#ffc47a', 0.5, 'flame')); gl.position.set(cx, y + 0.52, z); root.add(gl); kit.flames.add(cx, y + 0.5, z, { bowl: null, s: 0.022, k: 0.55 }); }
    },
    rug(x, z, w, d, ry = 0, tex = rugTexture(), y = 0.008) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: tex, roughness: 1 })); m.rotation.set(-Math.PI / 2, 0, ry); m.position.set(x, y, z); m.receiveShadow = true; root.add(m); },
    // A brass urn holding bright dandiya sticks
    urn(x, z, y = 0) { urns.push([x, y, z]); },
    palm(x, z, s = 1, y = 0) { palms.push([x, y, z, s]); },
    bell(x, y, z, s = 1) { bells.push([x, y, z, s]); },
    finish() {
      const mx = new THREE.Matrix4();
      if (lanterns.length) {
        const body = merged([[new THREE.BoxGeometry(0.24, 0.04, 0.24), at(0, 0.02, 0)], [new THREE.ConeGeometry(0.2, 0.16, 4, 1), at(0, 0.38, 0, Math.PI / 4)], [new THREE.SphereGeometry(0.035, 6, 4), at(0, 0.49, 0)]]
          .concat([[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => [new THREE.BoxGeometry(0.022, 0.29, 0.022), at(a * 0.095, 0.18, b * 0.095)])));
        const bm = new THREE.InstancedMesh(body, std('#b48a42', 0.36, 0.85), lanterns.length), gm = new THREE.InstancedMesh(new THREE.BoxGeometry(0.17, 0.27, 0.17), kit.glow('#ffc47a', 1.1, 'flame'), lanterns.length);
        lanterns.forEach(([x, y, z, s], i) => { bm.setMatrixAt(i, at(x, y, z, 0, s, s, s)); gm.setMatrixAt(i, at(x, y + 0.175 * s, z, 0, s, s, s)); });
        root.add(bm); root.add(gm);
      }
      if (urns.length) {
        const urn = new THREE.LatheGeometry([[0, 0], [0.16, 0.02], [0.24, 0.18], [0.22, 0.38], [0.13, 0.5], [0.15, 0.58], [0.13, 0.6]].map(([a, b]) => new THREE.Vector2(a, b)), 16);
        const um = new THREE.InstancedMesh(urn, std('#c08a3a', 0.3, 0.85), urns.length); urns.forEach(([x, y, z], i) => um.setMatrixAt(i, at(x, y, z))); root.add(um);
        const sticks = [], cols = ['#e8b04b', '#c2185b', '#2f8f5b', '#3b4cc0', '#f08a24'];
        urns.forEach(([x, y, z]) => { for (let k = 0; k < 9; k++) { const a = k / 9 * TAU, l = 0.85 + (k % 3) * 0.08; sticks.push([x + Math.cos(a) * 0.05, y + 0.55, z + Math.sin(a) * 0.05, a, l, cols[k % 5]]); } });
        const sm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.014, 0.014, 1, 5), std('#ffffff', 0.6), sticks.length), q = new THREE.Quaternion(), e = new THREE.Euler(), c = new THREE.Color();
        sticks.forEach(([x, y, z, a, l, col], i) => { e.set(Math.cos(a) * 0.18, 0, Math.sin(a) * 0.18); q.setFromEuler(e); sm.setMatrixAt(i, mx.compose(new THREE.Vector3(x, y + l * 0.45, z), q, new THREE.Vector3(1, l, 1))); sm.setColorAt(i, c.set(col)); });
        root.add(sm);
      }
      if (palms.length) {
        const pot = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.32, 0.24, 0.55, 12), std('#9a4a26', 0.85), palms.length);
        palms.forEach(([x, y, z, s], i) => pot.setMatrixAt(i, at(x, y + 0.27 * s, z, 0, s, s, s))); root.add(pot);
        const leaf = new THREE.PlaneGeometry(0.34, 1.5); leaf.translate(0, 0.75, 0);
        const lt = canvasTexture(64, 256, (g, w, h) => { g.clearRect(0, 0, w, h); g.fillStyle = '#2f5a2a'; g.beginPath(); g.moveTo(w / 2, h); g.quadraticCurveTo(0, h * 0.4, w / 2, 0); g.quadraticCurveTo(w, h * 0.4, w / 2, h); g.fill(); g.strokeStyle = '#6a9a4a'; g.lineWidth = 2; g.beginPath(); g.moveTo(w / 2, h); g.lineTo(w / 2, 0); g.stroke(); for (let y = 20; y < h; y += 12) { g.strokeStyle = 'rgba(10,30,10,.6)'; g.beginPath(); g.moveTo(w / 2, y); g.lineTo(4, y - 18); g.moveTo(w / 2, y); g.lineTo(w - 4, y - 18); g.stroke(); } });
        const lm = new THREE.InstancedMesh(leaf, new THREE.MeshStandardMaterial({ map: lt, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.8 }), palms.length * 9), q = new THREE.Quaternion(), e = new THREE.Euler();
        let n = 0; palms.forEach(([x, y, z, s]) => { for (let k = 0; k < 9; k++) { e.set(0.5 + (k % 3) * 0.25, k / 9 * TAU, 0, 'YXZ'); q.setFromEuler(e); lm.setMatrixAt(n++, mx.compose(new THREE.Vector3(x, y + 0.5 * s, z), q, new THREE.Vector3(s, s * (0.8 + (k % 2) * 0.3), s))); } });
        root.add(lm);
      }
      if (bells.length) {
        const bell = new THREE.LatheGeometry([[0, 0.2], [0.03, 0.2], [0.05, 0.16], [0.07, 0.06], [0.1, 0], [0.085, -0.01]].map(([a, b]) => new THREE.Vector2(a, b)), 12);
        const bm = new THREE.InstancedMesh(bell, std('#c9963f', 0.28, 0.9), bells.length); bells.forEach(([x, y, z, s], i) => bm.setMatrixAt(i, at(x, y - 0.2 * s, z, 0, s, s, s))); root.add(bm);
      }
    }
  };
  return D;
}

/* ---------- a truss tower standing on the ground, and a run of truss between two points ---------- */
export function trussTower(root, x, z, h, w = 0.4) {
  const g = new THREE.Group(), mat = latticeMat(Math.max(1, Math.round(h / 1.1)));
  for (let k = 0; k < 4; k++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat), a = k / 4 * TAU; p.position.set(Math.sin(a) * w / 2, h / 2, Math.cos(a) * w / 2); p.rotation.y = a; g.add(p); }
  g.position.set(x, 0, z); root.add(g); return g;
}
export function trussRun(root, a, b, w = 0.36) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]), g = new THREE.Group(), mat = latticeMat(Math.max(1, Math.round(len / 1.1)));
  for (let k = 0; k < 2; k++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, len), mat); p.rotation.y = k * Math.PI / 2; g.add(p); }
  g.position.set((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize());
  root.add(g); return g;
}

/* ---------- the band's platform: a deck, steps up at each end of the front, a trim of light along its edge ---------- */
export function bandPlatform(kit, root, S, o = {}) {
  const W = S.x1 - S.x0, cx = (S.x0 + S.x1) / 2, D = S.depth, add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); root.add(m); return m; };
  const body = o.body || std('#2a1a12', 0.85), top = o.top || std('#3a2416', 0.7, 0.05);
  add(new THREE.BoxGeometry(W, S.h, D), body, cx, S.h / 2, S.z + D / 2);
  add(new THREE.BoxGeometry(W + 0.02, 0.03, D + 0.02), top, cx, S.h + 0.015, S.z + D / 2).receiveShadow = true;
  if (o.skirt) { const sk = face(add(new THREE.PlaneGeometry(W, S.h), o.skirt, cx, S.h / 2, S.z - 0.006)); sk.renderOrder = 1; }
  add(new THREE.BoxGeometry(W + 0.04, 0.04, 0.05), o.trim || std('#c9963f', 0.35, 0.7), cx, S.h, S.z - 0.02);
  if (o.edgeLight) kit.pools.add(cx, S.h * 0.5, S.z - 0.03, W * 0.5, S.h * 0.6, o.edgeLight, 0.12, { vertical: true, layer: 'show' });
  [-1, 1].forEach((sd) => { const ax = sd < 0 ? S.x0 + 0.4 : S.x1 - 1.9; for (let s = 0; s < 3; s++) { const h = S.h * (s + 1) / 4; add(new THREE.BoxGeometry(1.5, h, 0.3), body, ax + 0.75, h / 2, S.z - 0.9 + s * 0.3 + 0.15); } });
  return { x: cx, y: S.h, z: S.z };
}

/* ---------- great trees: a trunk, spreading branches, leaves in clusters ----------
   Each tree is built from tapered segments along curves (merged into the venue's bark mesh) and leaf cards (one
   instanced mesh for all of a venue's trees). It returns points along its branches, so lights can hang from them. */
export function barkTexture(seed = 3, tone = ['#3a2c22', '#5a4636']) {
  return canvasTexture(128, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, tone[0]); gr.addColorStop(0.5, tone[1]); gr.addColorStop(1, tone[0]);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    let s = seed; const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    for (let i = 0; i < 70; i++) { const x = r() * w; g.strokeStyle = `rgba(15,10,6,${0.3 + r() * 0.4})`; g.lineWidth = 1 + r() * 2.5; g.beginPath(); g.moveTo(x, 0); for (let y = 0; y < h; y += 16) g.lineTo(x + (r() - 0.5) * 6, y); g.stroke(); }
    for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '140,120,100' : '10,8,6'},${0.08 + r() * 0.12})`; g.fillRect(r() * w, r() * h, 2, 3); }
  }, { repeat: [1, 1] });
}
export function leafTexture(cols = ['#1f3a1c', '#2c4a22', '#3a5a28', '#16301a'], seed = 7) {
  return canvasTexture(256, 256, (g, w) => {
    g.clearRect(0, 0, w, w);
    let s = seed; const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    for (let i = 0; i < 90; i++) {
      const x = w * (0.12 + r() * 0.76), y = w * (0.12 + r() * 0.76), a = r() * TAU, L = 14 + r() * 18;
      g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = cols[Math.floor(r() * cols.length)];
      g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(L * 0.5, -L * 0.32, L, 0); g.quadraticCurveTo(L * 0.5, L * 0.32, 0, 0); g.fill();
      g.strokeStyle = 'rgba(160,200,120,.25)'; g.lineWidth = 0.8; g.beginPath(); g.moveTo(0, 0); g.lineTo(L, 0); g.stroke(); g.restore();
    }
  });
}
export function newWoods() {
  const bark = [], leaves = [];
  // a tapered limb along points pts (each [x, y, z]) from radius r0 to r1
  function limb(pts, r0, r1, sides = 7) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const ra = lerp(r0, r1, i / (pts.length - 1)), rb = lerp(r0, r1, (i + 1) / (pts.length - 1));
      const geo = new THREE.CylinderGeometry(rb, ra * 1.04, len, sides, 1, true);
      const m = new THREE.Matrix4().compose(new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize()), new THREE.Vector3(1, 1, 1));
      bark.push([geo, m]);
    }
  }
  const curve = (a, b, c, d, n) => { const out = []; for (let i = 0; i <= n; i++) { const t = i / n, u = 1 - t; out.push([0, 1, 2].map((k) => u * u * u * a[k] + 3 * u * u * t * b[k] + 3 * u * t * t * c[k] + t * t * t * d[k])); } return out; };
  return {
    // A spreading tree at (x, z): trunk height h, its crown reaching `spread` metres towards `dir` (and less elsewhere)
    tree(r, x, z, h, spread, dir, o = {}) {
      const tips = [], lean = o.lean || 0.12, base = [x, 0, z], top = [x + Math.cos(dir) * h * lean, h, z + Math.sin(dir) * h * lean];
      limb(curve(base, [x, h * 0.35, z], [lerp(x, top[0], 0.6), h * 0.7, lerp(z, top[2], 0.6)], top, 6), o.trunk || 0.75, (o.trunk || 0.75) * 0.6, 9);
      if (o.flare !== false) for (let k = 0; k < 5; k++) { const a = k / 5 * TAU + r(), p = [x + Math.cos(a) * 1.1, 0, z + Math.sin(a) * 1.1]; limb([p, [x + Math.cos(a) * 0.45, 0.9, z + Math.sin(a) * 0.45], [x, 1.8, z]], 0.32, 0.15, 6); }
      const nB = o.branches || 6;
      for (let b = 0; b < nB; b++) {
        const az = dir + (b / nB - 0.5) * (o.arc || 3.6) + (r() - 0.5) * 0.4, reach = spread * (0.55 + r() * 0.45) * (0.6 + 0.4 * Math.cos(az - dir)), from = [lerp(x, top[0], 0.8 + r() * 0.2), h * (0.78 + r() * 0.22), lerp(z, top[2], 0.8 + r() * 0.2)];
        const d = [Math.cos(az), Math.sin(az)], up = (o.rise || 1.6) * (0.6 + r() * 0.6);
        const pts = curve(from, [from[0] + d[0] * reach * 0.3, from[1] + up * 1.2, from[2] + d[1] * reach * 0.3], [from[0] + d[0] * reach * 0.7, from[1] + up, from[2] + d[1] * reach * 0.7], [from[0] + d[0] * reach, from[1] + up * 0.4 - 0.6, from[2] + d[1] * reach], 6);
        limb(pts, (o.trunk || 0.75) * 0.5, 0.07, 6);
        pts.forEach((p, i) => { if (i >= 2) tips.push(p); });
        // twigs off it, and the leaves
        for (let k = 2; k < pts.length; k++) {
          const p = pts[k];
          if (k % 2 === 0) { const ta = az + (r() - 0.5) * 2.2, tl = 1.5 + r() * 2; limb([p, [p[0] + Math.cos(ta) * tl * 0.5, p[1] + 0.5, p[2] + Math.sin(ta) * tl * 0.5], [p[0] + Math.cos(ta) * tl, p[1] + 0.2, p[2] + Math.sin(ta) * tl]], 0.09, 0.03, 5); }
          const nl = Math.round((o.leaves || 7) * (k / pts.length + 0.4));
          for (let l = 0; l < nl; l++) leaves.push([p[0] + (r() - 0.5) * 3.2, p[1] + 0.3 + r() * 1.6, p[2] + (r() - 0.5) * 3.2, r() * TAU, (r() - 0.5) * 1.2, 1.4 + r() * 1.4, r()]);
        }
      }
      return tips;
    },
    // An arch of branches twisted together, from a to b on the ground, rising to h: `strands` limbs winding round each
    // other along it. Returns points along its crown, to hang lanterns from.
    arch(a, b, h, strands = 3, r0 = 0.11) {
      const out = [], mid = [(a[0] + b[0]) / 2, h, (a[2] + b[2]) / 2], nx = b[2] - a[2], nz = -(b[0] - a[0]), nl = Math.hypot(nx, nz) || 1;
      for (let s = 0; s < strands; s++) {
        const ph = s / strands * TAU, pts = [];
        for (let i = 0; i <= 14; i++) {
          const t = i / 14, u = 1 - t, base = [0, 1, 2].map((k) => u * u * a[k] + 2 * u * t * [(a[0] + b[0]) / 2, h * 2, (a[2] + b[2]) / 2][k] + t * t * b[k]);
          const tw = 0.16 * Math.sin(t * 9 + ph);
          pts.push([base[0] + nx / nl * tw, base[1] + 0.14 * Math.cos(t * 9 + ph), base[2] + nz / nl * tw]);
        }
        limb(pts, r0, r0 * 0.7, 6);
        if (s === 0) pts.forEach((p, i) => { if (i > 3 && i < 11) out.push(p); });
      }
      return out;
    },
    // a hanging root or a vine: a thin limb dropping from p to the ground (or to y)
    drop(p, y = 0, r0 = 0.06) { limb([p, [p[0] + 0.1, lerp(p[1], y, 0.5), p[2] + 0.05], [p[0], y, p[2]]], r0, r0 * 0.6, 5); },
    build(root, barkMat, leafMat, tint = ['#ffffff', '#cfe0c0']) {
      if (bark.length) root.add(new THREE.Mesh(merged(bark), barkMat));
      if (!leaves.length) return null;
      const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), leafMat, leaves.length), mx = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), c = new THREE.Color(), c0 = new THREE.Color(tint[0]), c1 = new THREE.Color(tint[1]);
      leaves.forEach(([x, y, z, ry, rx, s, v], i) => { e.set(rx, ry, 0, 'YXZ'); q.setFromEuler(e); im.setMatrixAt(i, mx.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(s, s, s))); im.setColorAt(i, c.copy(c0).lerp(c1, v)); });
      root.add(im); return im;
    }
  };
}
