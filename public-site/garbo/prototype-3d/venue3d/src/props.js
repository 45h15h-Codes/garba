// The fixed dressing of a Garba night, reused across venues: mirror-work chhatris, paper lanterns, brass jhummar
// chandeliers, neem trees wrapped in fairy lights and speakers on poles. (Stalls, chairs and the other things people
// use are in furnish.js, placed from the 2D scene's layout.)

import * as THREE from 'three';
import { TAU, face } from './util.js';
import { std, glowMat } from './kit.js';

/* ---------- chhatri: a mirror-work umbrella hung over the circle, turning slowly ---------- */
export function chhatri(kit, parent, x, y, z, hangY, flags) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.userData.dynamic = true; parent.add(g);
  kit.wires.line([x, hangY, z], [x, y + 0.55, z]);
  const n = 12, cols = [flags[0], '#f6c342', flags[2 % flags.length], '#2f8f5b', flags[1 % flags.length], '#3b4cc0'];
  const pos = [], colr = [], c = new THREE.Color();
  for (let k = 0; k < n; k++) {
    const a0 = k / n * TAU, a1 = (k + 1) / n * TAU, r = 1.35;
    c.set(cols[k % cols.length]);
    pos.push(0, 0.55, 0, Math.cos(a1) * r, 0, Math.sin(a1) * r, Math.cos(a0) * r, 0, Math.sin(a0) * r);
    for (let v = 0; v < 3; v++) colr.push(c.r, c.g, c.b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  geo.computeVertexNormals();
  const cone = new THREE.Mesh(geo, std('#ffffff', 0.7, 0, { vertexColors: true, side: THREE.DoubleSide }));
  g.add(cone);
  // Tassels with a gold bead at the tip, and the mirrors round the canopy catching light
  const tas = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 4), std('#e8b04b', 0.4, 0.6), n);
  const mx = new THREE.Matrix4();
  for (let k = 0; k < n; k++) { const a = k / n * TAU; tas.setMatrixAt(k, mx.makeTranslation(Math.cos(a) * 1.35, -0.15, Math.sin(a) * 1.35)); }
  g.add(tas);
  const mirrors = [];
  for (let m = 0; m < n; m++) { const a = (m + 0.5) / n * TAU; mirrors.push([Math.cos(a) * 0.8, 0.24, Math.sin(a) * 0.8]); }
  const mir = new THREE.InstancedMesh(new THREE.SphereGeometry(0.045, 6, 4), new THREE.MeshBasicMaterial({ color: new THREE.Color('#fffaf0').multiplyScalar(1.6) }), mirrors.length);
  mirrors.forEach((q, i) => mir.setMatrixAt(i, mx.makeTranslation(q[0], q[1], q[2])));
  g.add(mir);
  return { group: g, update(t, reduce, i) { g.rotation.y = reduce ? 0 : t * 0.25 + i; } };
}

/* ---------- lanterns: a paper lantern on a string, swaying ---------- */
const lanternGeo = (() => { const g = new THREE.CylinderGeometry(0.18, 0.12, 0.42, 8); return g; })();
export function lantern(kit, parent, x, y, z, hex, topY) {
  kit.wires.line([x, topY, z], [x, y + 0.21, z]);
  const m = new THREE.Mesh(lanternGeo, kit.glow(hex, 1.3, 'practical')); m.position.set(x, y, z); parent.add(m);
  kit.pools.add(x, y, z, 0.7, 0.7, hex, 0.35, { vertical: true });
  // and the coloured light it lets fall on the ground below
  kit.pools.add(x, 0.02, z, 2.2, 2.2, hex, 0.12);
  return m;
}

/* ---------- jhummar: a brass chandelier in three tiers of glowing drops ---------- */
export function jhummar(kit, parent, x, z, topY) {
  kit.wires.line([x, topY, z], [x, 11.1, z]);
  const gold = std('#c9963f', 0.35, 0.8);
  [[11, 0.95, 12], [10.55, 0.72, 10], [10.15, 0.45, 8]].forEach(([y, r, n], ti) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.025, 4, 28), gold); ring.rotation.x = Math.PI / 2; ring.position.set(x, y, z); parent.add(ring);
    for (let k = 0; k < n; k++) { const a = k / n * TAU + ti * 0.3; kit.bigBulbs.add(x + Math.cos(a) * r, y - 0.2, z + Math.sin(a) * r, 0, { color: '#fff1d0', k: 0.7, s: 0.5, ph: k * 1.9, layer: 'practical', twinkle: 0.12 }); }
  });
  kit.bigBulbs.add(x, 9.7, z, 0, { color: '#ffd58a', k: 1.0, layer: 'practical', twinkle: 0.05 });
  kit.pools.add(x, 10.4, z, 2.6, 2.6, '#ffd6a0', 0.45, { vertical: true });
  kit.pools.add(x, 0.03, z, 4.5, 4.5, '#ffd6a0', 0.18);
}

/* ---------- neem and peepal trees, some wrapped in fairy lights ---------- */
export function trees(kit, parent, list) {
  if (!list.length) return;
  let nBlobs = 0; list.forEach((t) => (nBlobs += t.blobs.length));
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.34, 1, 7), std('#1c130c', 0.95), list.length);
  const leafGeo = new THREE.IcosahedronGeometry(1, 1);
  const leaves = new THREE.InstancedMesh(leafGeo, std('#ffffff', 0.95, 0, { flatShading: true }), nBlobs);
  leaves.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(nBlobs * 3), 3);
  const greens = [['#0f1d12', '#1a2c18'], ['#12200f', '#20321a'], ['#0d1a14', '#1a2b22']];
  const mx = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  let b = 0;
  list.forEach((t, i) => {
    trunks.setMatrixAt(i, mx.compose(new THREE.Vector3(t.x, 2.3 * t.s, t.z), q.identity(), new THREE.Vector3(t.s, 4.6 * t.s, t.s)));
    t.blobs.forEach((bl, k) => {
      q.setFromEuler(new THREE.Euler(k, k * 2, 0));
      leaves.setMatrixAt(b, mx.compose(new THREE.Vector3(t.x + bl[0] * t.s, bl[1] * t.s, t.z + bl[2] * t.s), q, new THREE.Vector3(bl[3] * t.s, bl[3] * t.s * 0.8, bl[3] * t.s)));
      c.set(greens[t.tone][k % 2]).multiplyScalar(1.6); leaves.setColorAt(b, c); b++;
    });
    if (t.fairy) for (let k = 0; k < 30; k++) {
      const bl = t.blobs[k % t.blobs.length], an = k * 2.4, rr = bl[3] * 0.95;
      kit.bulbs.add(t.x + (bl[0] + Math.cos(an) * rr) * t.s, (bl[1] + Math.sin(an) * rr * 0.7) * t.s, t.z + (bl[2] - 0.6 * Math.sign(t.z + 20)) * t.s, t.hue + k, { ph: k * 1.3, s: 0.8, twinkle: 0.5 });
    }
  });
  trunks.castShadow = true;
  parent.add(trunks); parent.add(leaves);
}

export function speakerPole(parent, x, z, h) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, h), std('#1f1914', 0.8)); pole.position.set(x, h / 2, z); parent.add(pole);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.7), std('#0e0c0c', 0.7)); cab.position.set(x, h + 0.6, z); cab.rotation.y = -Math.sign(x) * 0.3; parent.add(cab);
  const grille = face(new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.0), std('#1a1818', 1))); grille.position.set(x, h + 0.6, z - 0.36); parent.add(grille);
}

