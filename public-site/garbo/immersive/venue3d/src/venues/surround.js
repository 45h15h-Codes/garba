// The world beyond a venue, in layers out to the horizon, so that from any seat and from the air nothing ends in a void:
// a belt of trees (forestBelt), a town of rooftops, domes and spires or of modern blocks (townBelt), and a continuous
// silhouette on the horizon (horizonRidge), a treeline or hills, to close what's left. Each is a handful of instanced
// meshes, so even a deep forest costs a few draws. Nearer layers are lit by the night like the venue; further ones
// darken and cool towards the horizon, as distance does.

import * as THREE from 'three';
import { TAU, lerp, seeded, canvasTexture } from '../util.js';
import { noise } from './common.js';

const up = new THREE.Vector3(0, 1, 0);
// a point in the belt: a random angle (within arc, if given), spread evenly over the ring's area
function spot(r, r0, r1, arc) { const a = arc ? lerp(arc[0], arc[1], r()) : r() * TAU, d = Math.sqrt(lerp(r0 * r0, r1 * r1, r())); return [Math.cos(a) * d, Math.sin(a) * d, d]; }

// a crown: an icosahedron shaded from a moonlit top (a touch cool) to a dark underside
function crownGeo(detail) {
  const g = new THREE.IcosahedronGeometry(1, detail), p = g.attributes.position, c = [];
  for (let i = 0; i < p.count; i++) { const t = Math.min(1, Math.max(0, (p.getY(i) + 1) / 2)), k = 0.28 + 1.1 * t * t; c.push(k * (0.94 + 0.1 * t), k, k * (1 + 0.12 * t)); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); return g;
}

/* ---------- trees ----------
   o: { r0, r1, n (trees), h: [min, max] heights, tones (canopy colours), trunk (colour), arc ([from, to] radians),
   skip(x, z), seed, lights (a share of trees with fairy lights, their colour), round (true: round crowns; false: tall,
   narrow ones) }. Returns nothing; adds to root. */
export function forestBelt(kit, root, o) {
  const r = seeded(o.seed || 3), n = o.n || 300, H = o.h || [6, 12], tones = (o.tones || ['#16301c', '#1c3a22', '#224428', '#132a1a']).map((c) => new THREE.Color(c).multiplyScalar(1.6));
  // (crowns beyond 50 m are drawn simpler: at that distance a quarter of the facets looks the same)
  const crowns = [], trunks = [], cols = [], farC = [], farCols = [];
  for (let i = 0; i < n; i++) {
    const [x, z, d] = spot(r, o.r0, o.r1, o.arc); if (o.skip && o.skip(x, z)) continue;
    const h = lerp(H[0], H[1], Math.pow(r(), 1.3)), far = (d - o.r0) / Math.max(1, o.r1 - o.r0), dim = lerp(1, o.dim != null ? o.dim : 0.5, far);
    trunks.push([x, z, h * 0.45, 0.12 + h * 0.025]);
    const k = o.round === false ? 2 : 3;
    for (let b = 0; b < k; b++) {
      const rr = h * (o.round === false ? 0.2 : 0.28 + r() * 0.12), y = h * (o.round === false ? 0.45 + b * 0.25 : 0.62 + r() * 0.2);
      (d > 50 ? farC : crowns).push(new THREE.Matrix4().compose(new THREE.Vector3(x + (r() - 0.5) * h * 0.35, y, z + (r() - 0.5) * h * 0.35), new THREE.Quaternion().setFromAxisAngle(up, r() * TAU), new THREE.Vector3(rr * (1 + r() * 0.4), rr * (o.round === false ? 1.8 : 0.85 + r() * 0.3), rr * (1 + r() * 0.4))));
      (d > 50 ? farCols : cols).push(tones[Math.floor(r() * tones.length)].clone().multiplyScalar(dim * (0.85 + r() * 0.3)));
    }
    if (o.lights && r() < o.lights[0]) for (let k2 = 0; k2 < 8; k2++) { const a = r() * TAU, rr = h * 0.3; kit.bulbs.add(x + Math.cos(a) * rr, h * (0.45 + r() * 0.4), z + Math.sin(a) * rr, k2, { color: o.lights[1], k: 0.6, s: 0.7, twinkle: 0.4, layer: 'festive' }); }
  }
  // (at night a crown is lit from above by the moon and dark underneath: that shade is baked into each crown's vertices,
  // and the crowns hold a little moonlight of their own, in proportion to their own colour and that shade, so a forest
  // reads as layers of round canopy, each tree its own tone, rather than as a black mass or a flat carpet)
  const lift = o.lift != null ? o.lift : 1.1, crownMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.92, flatShading: true, vertexColors: true, emissive: new THREE.Color(o.glow || '#c8dcff').multiplyScalar(lift) });
  crownMat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vColor.rgb;'); };
  crownMat.customProgramCacheKey = () => 'crown-self-lit';
  [[crowns, cols, 1], [farC, farCols, 0]].forEach(([list, cl, detail]) => { if (!list.length) return; const cm = new THREE.InstancedMesh(crownGeo(detail), crownMat, list.length); list.forEach((m, i) => { cm.setMatrixAt(i, m); cm.setColorAt(i, cl[i]); }); root.add(cm); });
  const tm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.7, 1, 1, 6), new THREE.MeshStandardMaterial({ color: o.trunk || '#2a2018', roughness: 0.95 }), trunks.length), mx = new THREE.Matrix4();
  trunks.forEach(([x, z, h, w], i) => tm.setMatrixAt(i, mx.compose(new THREE.Vector3(x, h / 2, z), new THREE.Quaternion(), new THREE.Vector3(w, h, w)))); root.add(tm);
}

/* ---------- a town ----------
   o: { r0, r1, n (buildings), style: 'old' (flat roofs, parapets, domes and small temple spires, warm windows) or
   'modern' (taller blocks, cool and warm windows, red lights on top), h: [min, max], arc, skip, seed, wall (colour) } */
export function townBelt(kit, root, o) {
  const r = seeded(o.seed || 5), n = o.n || 120, old = o.style !== 'modern', H = o.h || (old ? [4, 10] : [14, 46]);
  const win = canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    for (let y = 10; y < h; y += old ? 22 : 12) for (let x = 6; x < w; x += old ? 22 : 12) if (r() < (old ? 0.35 : 0.3)) { g.fillStyle = r() < 0.75 ? 'rgba(255,190,110,1)' : old ? 'rgba(255,230,180,1)' : 'rgba(170,200,255,1)'; old ? (g.beginPath(), g.moveTo(x, y + 12), g.lineTo(x, y + 4), g.quadraticCurveTo(x + 4, y, x + 8, y + 4), g.lineTo(x + 8, y + 12), g.fill()) : g.fillRect(x, y, 6, 7); }
  });
  win.wrapS = win.wrapT = THREE.RepeatWrapping;
  const bodies = [], domes = [], spires = [], tops = [], mx = new THREE.Matrix4();
  for (let i = 0; i < n; i++) {
    const [x, z, d] = spot(r, o.r0, o.r1, o.arc); if (o.skip && o.skip(x, z)) continue;
    const w = lerp(5, old ? 11 : 16, r()), dd = lerp(5, old ? 10 : 16, r()), h = lerp(H[0], H[1], Math.pow(r(), old ? 1.4 : 2)), ry = Math.atan2(x, z) + (r() - 0.5) * 0.4;
    bodies.push(new THREE.Matrix4().compose(new THREE.Vector3(x, h / 2, z), new THREE.Quaternion().setFromAxisAngle(up, ry), new THREE.Vector3(w, h, dd)));
    if (old && r() < 0.18) domes.push(new THREE.Matrix4().compose(new THREE.Vector3(x, h, z), new THREE.Quaternion(), new THREE.Vector3(Math.min(w, dd) * 0.32, Math.min(w, dd) * 0.38, Math.min(w, dd) * 0.32)));
    if (old && r() < 0.06) spires.push(new THREE.Matrix4().compose(new THREE.Vector3(x, h, z), new THREE.Quaternion(), new THREE.Vector3(2.2, 7 + r() * 6, 2.2)));
    if (!old && r() < 0.5) tops.push([x, h + 0.4, z]);
  }
  const wall = new THREE.MeshStandardMaterial({ color: o.wall || (old ? '#3a3028' : '#1a1c26'), roughness: 0.95, emissive: '#ffffff', emissiveMap: win, emissiveIntensity: old ? 0.55 : 0.5 });
  const bm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), wall, bodies.length); bodies.forEach((m, i) => bm.setMatrixAt(i, m)); root.add(bm);
  if (domes.length) { const dm = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 6, 0, TAU, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: o.wall || '#4a3c30', roughness: 0.9 }), domes.length); domes.forEach((m, i) => dm.setMatrixAt(i, m)); root.add(dm); }
  if (spires.length) { const g = new THREE.ConeGeometry(1, 1, 8); g.translate(0, 0.5, 0); const sm = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color: '#5a4630', roughness: 0.85, emissive: '#ffb060', emissiveIntensity: 0.08 }), spires.length); spires.forEach((m, i) => sm.setMatrixAt(i, m)); root.add(sm); }
  tops.forEach(([x, y, z], i) => kit.bulbs.add(x, y, z, i, { color: '#ff3a2a', k: 0.9, s: 0.8, twinkle: 0.5, layer: 'ambient' }));
}

/* ---------- the horizon ----------
   A continuous silhouette all round (or within arc): a treeline (tree: true, a ragged top) or hills, rising from below
   the ground to height, at radius; cols [foot, top]. Unlit and fogless, so it holds against the sky as a shape. */
export function horizonRidge(root, o) {
  const n = 240, seed = o.seed || 1, pos = [], col = [], c0 = new THREE.Color(o.cols[0]), c1 = new THREE.Color(o.cols[1]), R = o.radius, a0 = o.arc ? o.arc[0] : 0, a1 = o.arc ? o.arc[1] : TAU, r = seeded(seed);
  const tops = [];
  for (let i = 0; i <= n; i++) {
    const a = lerp(a0, a1, i / n), f = noise(Math.cos(a) * 3 + seed, Math.sin(a) * 3, 0.5) * 0.6 + noise(Math.cos(a) * 11, Math.sin(a) * 11 + seed, 1.5) * 0.4;
    tops.push(o.height * (0.35 + 0.8 * f) * (o.tree ? 0.85 + 0.3 * r() : 1));
  }
  for (let i = 0; i < n; i++) {
    const a = lerp(a0, a1, i / n), b = lerp(a0, a1, (i + 1) / n), p = (t, y) => [Math.cos(t) * R, y, Math.sin(t) * R];
    const A = p(a, o.base), B = p(b, o.base), C = p(b, o.base + tops[i + 1]), D = p(a, o.base + tops[i]);
    [A, B, C, A, C, D].forEach((q, k) => { pos.push(q[0], q[1], q[2]); const cc = [0, 1, 3].includes(k) ? c0 : c1; col.push(cc.r, cc.g, cc.b); });
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, side: THREE.DoubleSide })); m.renderOrder = -6; root.add(m);
  return m;
}
