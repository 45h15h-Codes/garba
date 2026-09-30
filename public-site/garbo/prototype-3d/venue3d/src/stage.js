// A Garba stage, built to the same plan as the 2D scene's: a deck deep enough for the band (singers at the front,
// players on a riser behind), an LED screen at the back with a mandala that breathes on the beat, truss towers and a
// top beam carrying moving heads, velvet wings and a scalloped valance framing it, hung line arrays, bulbs along the
// front edge with marigold swags, and beams of coloured light.

import * as THREE from 'three';
import { TAU, lerp, canvasTexture, sag, hsl, seeded, face, solidOf, LIGHT } from './util.js';
import { std, glowMat, Beam } from './kit.js';

let latticeTex = null;
function lattice() {
  if (latticeTex) return latticeTex;
  latticeTex = canvasTexture(64, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = '#9a96a6'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(3, 0); g.lineTo(3, h); g.moveTo(w - 3, 0); g.lineTo(w - 3, h); g.stroke();
    g.lineWidth = 3; g.beginPath();
    for (let y = 0; y < h; y += 32) { g.moveTo(3, y); g.lineTo(w - 3, y + 16); g.lineTo(3, y + 32); }
    g.stroke();
  });
  latticeTex.wrapS = latticeTex.wrapT = THREE.RepeatWrapping;
  return latticeTex;
}
const latticeMats = new Map();
export function latticeMat(repeatY) {
  if (!latticeMats.has(repeatY)) {
    const t = lattice().clone(); t.needsUpdate = true; t.repeat.set(1, repeatY);
    latticeMats.set(repeatY, new THREE.MeshStandardMaterial({ map: t, alphaTest: 0.4, side: THREE.DoubleSide, metalness: 0.7, roughness: 0.4 }));
  }
  return latticeMats.get(repeatY);
}
// A persian rug for the riser, in maroon and indigo with a border
function rugTexture() {
  return canvasTexture(256, 128, (g, w, h) => {
    g.fillStyle = '#6b1420'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1f2a5a'; g.fillRect(10, 10, w - 20, h - 20);
    g.fillStyle = '#7e1827'; g.fillRect(18, 18, w - 36, h - 36);
    g.strokeStyle = '#d6a64a'; g.lineWidth = 2; g.strokeRect(14, 14, w - 28, h - 28);
    g.fillStyle = '#d6a64a'; g.beginPath(); g.ellipse(w / 2, h / 2, 34, 22, 0, 0, TAU); g.fill();
    g.fillStyle = '#1f2a5a'; g.beginPath(); g.ellipse(w / 2, h / 2, 24, 14, 0, 0, TAU); g.fill();
    for (let k = 0; k < 14; k++) { g.fillStyle = k % 2 ? '#d6a64a' : '#e9dcc0'; g.beginPath(); g.arc(28 + k * 15.4, 26, 3, 0, TAU); g.arc(28 + k * 15.4, h - 26, 3, 0, TAU); g.fill(); }
  });
}
// A speaker's front: black grille, woofer and horn
function grilleTexture() {
  return canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#141313'; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.05)'; for (let y = 5; y < h - 5; y += 5) for (let x = 5; x < w - 5; x += 5) g.fillRect(x, y, 1.5, 1.5);
    g.strokeStyle = 'rgba(255,255,255,.16)'; g.lineWidth = 3; g.beginPath(); g.arc(w / 2, h * 0.6, w * 0.3, 0, TAU); g.stroke();
    g.fillStyle = 'rgba(232,176,75,.6)'; g.fillRect(w * 0.4, h * 0.9, w * 0.2, 3);
  });
}
// A box truss: four lattice faces round a square
function truss(len, w, repeat) {
  const g = new THREE.Group(), mat = latticeMat(repeat);
  for (let k = 0; k < 4; k++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, len), mat);
    const a = k / 4 * TAU; p.position.set(Math.sin(a) * w / 2, 0, Math.cos(a) * w / 2); p.rotation.y = a;
    g.add(p);
  }
  return g;
}

let velvetTex = null;
function velvet() {
  if (velvetTex) return velvetTex;
  velvetTex = canvasTexture(256, 64, (g, w, h) => {
    for (let x = 0; x < w; x++) { const k = 0.5 + 0.5 * Math.sin(x / w * TAU * 6); g.fillStyle = `rgb(${Math.round(26 + 40 * k)},${Math.round(5 + 8 * k)},${Math.round(11 + 16 * k)})`; g.fillRect(x, 0, 1, h); }
  });
  velvetTex.wrapS = THREE.RepeatWrapping;
  return velvetTex;
}
function valanceTexture(n) {
  return canvasTexture(512, 64, (g, w, h) => {
    const sw = w / n;
    g.fillStyle = '#4a1020'; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, 0);
    for (let k = n; k > 0; k--) { const xr = k * sw, xl = xr - sw; g.lineTo(xr, h * 0.45); g.quadraticCurveTo((xl + xr) / 2, h * 1.05, xl, h * 0.45); }
    g.closePath(); g.fill();
    g.strokeStyle = '#d6a64a'; g.lineWidth = 3; g.beginPath();
    for (let k = 0; k < n; k++) { const xl = k * sw; g.moveTo(xl, h * 0.45); g.quadraticCurveTo(xl + sw / 2, h * 1.02, xl + sw, h * 0.45); }
    g.stroke();
    g.fillStyle = '#d6a64a'; g.fillRect(0, 2, w, 3);
  });
}
function pleatTexture() {
  return canvasTexture(512, 64, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0);
    for (let i = 0; i < 40; i++) { gr.addColorStop(i / 40, '#1c070b'); gr.addColorStop((i + 0.45) / 40, '#4a1420'); }
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = '#c9963f'; g.fillRect(0, 0, w, 4);
  });
}

export function buildStage(kit, o) {
  const root = new THREE.Group();
  const zF = o.z, depth = o.depth || 3.2, zB = zF + depth, W = o.x1 - o.x0, cx = (o.x0 + o.x1) / 2, rH = 0.4, rz0 = zF + depth * 0.45;
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); root.add(m); return m; };

  // The deck: a pleated maroon skirt with a gold edge, and the dark glossy top
  const skirt = add(new THREE.PlaneGeometry(W, o.h), new THREE.MeshStandardMaterial({ map: pleatTexture(), roughness: 0.9 }), cx, o.h / 2, zF);
  face(skirt);
  add(new THREE.BoxGeometry(W, o.h, depth), std('#1a0e0a', 0.9), cx, o.h / 2 - 0.005, zF + depth / 2 + 0.01);
  add(new THREE.BoxGeometry(W + 0.02, 0.02, depth + 0.02), std('#3a2619', 0.45, 0.05), cx, o.h + 0.01, zF + depth / 2).receiveShadow = true;
  add(new THREE.BoxGeometry(W + 0.04, 0.05, 0.05), std('#c9963f', 0.35, 0.7), cx, o.h, zF - 0.02);
  // Sponsors' blocks set into the skirt: blank lit panels until sponsors are signed
  if (o.sponsors) {
    const spx0 = o.x0 + 2.9, spx1 = o.x1 - 2.9, gap = 0.7, spw = (spx1 - spx0 - gap * (o.sponsors - 1)) / o.sponsors;
    for (let s = 0; s < o.sponsors; s++) {
      const p = add(new THREE.PlaneGeometry(spw, o.h * 0.7), kit.glow('#e9e1cf', 0.3, 'practical'), spx0 + s * (spw + gap) + spw / 2, o.h * 0.49, zF - 0.02);
      face(p);
    }
  }
  // A flight of steps at each end, with gold nosing
  [-1, 1].forEach((sd) => {
    const ax = sd < 0 ? o.x0 + 0.5 : o.x1 - 2.3, n = 4, tread = 0.9 / n;
    for (let s = 0; s < n; s++) {
      const hgt = o.h * (s + 1) / n;
      add(new THREE.BoxGeometry(1.8, hgt, tread), std(s % 2 ? '#3a1a14' : '#44201a', 0.85), ax + 0.9, hgt / 2, zF - 0.9 + s * tread + tread / 2);
      add(new THREE.BoxGeometry(1.8, 0.02, 0.03), std('#d6a64a', 0.35, 0.7), ax + 0.9, hgt, zF - 0.9 + s * tread);
    }
    const inner = sd < 0 ? ax + 1.8 : ax;
    const rail = add(new THREE.CylinderGeometry(0.02, 0.02, Math.hypot(0.95, o.h)), std('#c9963f', 0.35, 0.7), inner, o.h / 2 + 0.95, zF - 0.47);
    rail.rotation.x = Math.atan2(0.95, o.h);
  });

  // The screen at the back: its frame and a dark panel; the picture on it is drawn live over the 3D stage
  const sx0 = o.x0 + 1, sx1 = o.x1 - 1, sw = sx1 - sx0, sh = o.screenTop - o.h;
  add(new THREE.BoxGeometry(sw + 0.3, sh + 0.3, 0.2), std('#0d0b10', 0.6), cx, o.h + sh / 2, zB + 0.12);
  kit.pools.add(cx, o.h + sh * 0.5, zB - 0.05, sw * 0.75, sh * 0.9, '#ffffff', 0.12, { vertical: true, theme: true, layer: 'show' });
  // The stage's light spilling onto the ground in front of it, in the night's colour
  kit.pools.add(cx, 0.02, zF - 3, W * 0.6, 5, '#ffffff', 0.35, { theme: true, layer: 'show' });
  kit.pools.add(cx, 0.02, zF - 9, W * 0.8, 7, '#ffffff', 0.12, { theme: true, layer: 'show' });

  // The riser for the players, lined with a strip of LEDs
  add(new THREE.BoxGeometry(W - 2.8, rH, zB - rz0), std('#2b1c14', 0.8), cx, o.h + rH / 2, (rz0 + zB) / 2);
  const led = add(new THREE.PlaneGeometry(W - 2.8, 0.06), new THREE.MeshBasicMaterial({ color: '#ffffff' }), cx, o.h + rH * 0.5, rz0 - 0.01);
  face(led);

  // Truss towers, the top beam, velvet wings and the valance
  const tw = 0.4;
  [o.x0 - 0.4, o.x1 + 0.4].forEach((x) => { const tt = truss(o.truss, tw, Math.round(o.truss / 1.2)); tt.position.set(x, o.truss / 2, zF); root.add(tt); });
  const beam = truss(W + 0.8 + tw, tw, Math.round((W + 1) / 1.2)); beam.rotation.z = Math.PI / 2; beam.position.set(cx, o.truss, zF); root.add(beam);
  [-1, 1].forEach((sd) => {
    const t = velvet().clone(); t.needsUpdate = true; t.repeat.set(0.3, 1);
    const wing = add(new THREE.PlaneGeometry(0.9, o.truss - 0.3 - o.h), new THREE.MeshStandardMaterial({ map: t, roughness: 1, side: THREE.DoubleSide }), sd < 0 ? o.x0 + 0.25 : o.x1 - 0.25, o.h + (o.truss - 0.3 - o.h) / 2, zF + 0.15);
    face(wing);
  });
  const val = add(new THREE.PlaneGeometry(W + 0.4, 0.95), new THREE.MeshStandardMaterial({ map: valanceTexture(Math.max(4, Math.round(W / 2.2))), transparent: true, alphaTest: 0.3, roughness: 1, side: THREE.DoubleSide }), cx, o.truss - 0.6, zF + 0.1);
  face(val);

  // Moving heads under the beam; par cans between them
  const heads = [];
  for (let k = 0; k < 10; k++) {
    const x = lerp(o.x0, o.x1, (k + 0.5) / 10), y = o.truss - 0.35;
    if (k % 2) {
      const yoke = add(new THREE.BoxGeometry(0.34, 0.12, 0.3), std('#18161b', 0.5, 0.3), x, y + 0.12, zF);
      const hd = add(new THREE.CylinderGeometry(0.13, 0.16, 0.34, 12), std('#232027', 0.45, 0.4), x, y - 0.08, zF);
      hd.userData.dynamic = true; heads.push({ x, y: y - 0.2, mesh: hd, i: k });
      yoke.castShadow = false;
    }
    kit.bigBulbs.add(x, y - 0.28, zF - 0.02, k, { ph: k, twinkle: 0.1, layer: 'show' });
  }
  // Beams: down from the moving heads onto the crowd, and a fan rising from behind the band
  const downBeams = heads.map((h, i) => new Beam(root, '#ffffff', 10, 0.32, 0.12));
  const fan = [];
  for (let k = 0; k < 5; k++) fan.push(new Beam(root, '#ffffff', 8, 0.3, 0.16));

  // Line arrays hung either side, and subs on the ground under them
  [-1, 1].forEach((sd) => {
    const x = cx + sd * o.arrays;
    for (let k = 0; k < 6; k++) {
      const box = add(new THREE.BoxGeometry(1.4, 0.55, 0.8), std('#0b0909', 0.7), x, o.truss - 1.3 - k * 0.6, zF - 0.4 - k * k * 0.03);
      box.rotation.x = -k * 0.04;
    }
    [[-0.4, 0.55, 0.78, 1.1], [0.4, 0.55, 0.78, 1.1], [0, 1.38, 0.7, 0.55]].forEach(([dx, y, w, h]) => add(new THREE.BoxGeometry(w, h, 0.8), std('#0e0c0c', 0.75), x + dx, y, zF - 0.4));
  });

  // The front edge: a line of bulbs and marigold swags between them
  for (let k = 0; k <= 16; k++) kit.bulbs.add(lerp(o.x0, o.x1, k / 16), o.h - 0.02, zF - 0.06, k, { ph: k * 0.7, s: 1.3 });
  const beads = [];
  for (let s = 0; s < 8; s++) {
    const A = [lerp(o.x0, o.x1, s / 8), o.h - 0.06, zF - 0.06], B = [lerp(o.x0, o.x1, (s + 1) / 8), o.h - 0.06, zF - 0.06];
    for (let k = 1; k < 14; k++) beads.push(sag(A, B, 0.35, k / 14));
  }
  const garl = new THREE.InstancedMesh(new THREE.SphereGeometry(0.05, 6, 4), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9 }), beads.length);
  garl.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(beads.length * 3), 3);
  const mx = new THREE.Matrix4(), cA = new THREE.Color('#f29a2e'), cB = new THREE.Color('#f6c342');
  beads.forEach((q, i) => { garl.setMatrixAt(i, mx.makeTranslation(q[0], q[1], q[2])); const c = i % 3 ? cA : cB; garl.instanceColor.setXYZ(i, c.r, c.g, c.b); });
  root.add(garl);

  // Gear on the deck. Wedge monitors along the front, angled up at the singers, with their cables taped back across
  // the deck; the band's amps at the back of the riser on a rug. The wedges stand between you and the singers' feet,
  // so they leave the 2D scene their outlines (stageFront) to cut after it draws the band.
  const stageFront = [], wedge = std('#1c1c20', 0.5, 0.25), tape = std('#0b0b0c', 0.9);
  [-0.34, -0.12, 0.12, 0.34].forEach((f) => {
    const x = cx + f * W, wg = add(new THREE.BoxGeometry(0.6, 0.3, 0.42), wedge, x, o.h + 0.16, zF + 0.2);
    wg.rotation.x = -0.45; stageFront.push(solidOf(wg));
    add(new THREE.BoxGeometry(0.03, 0.01, depth * 0.55), tape, x + 0.22, o.h + 0.025, zF + 0.4 + depth * 0.275);
    kit.bulbs.add(x + 0.22, o.h + 0.1, zF - 0.02, 0, { color: '#5aa8ff', k: 0.5, s: 0.25, twinkle: 0, layer: 'show' });
  });
  const rug = add(new THREE.PlaneGeometry(Math.min(W - 3.4, 9), (zB - rz0) * 0.8), new THREE.MeshStandardMaterial({ map: rugTexture(), roughness: 1 }), cx, o.h + rH + 0.006, (rz0 + zB) / 2);
  rug.rotation.x = -Math.PI / 2;
  const grille = new THREE.MeshStandardMaterial({ map: grilleTexture(), roughness: 0.85 });
  [o.x0 + 2.2, o.x1 - 2.2].forEach((x, i) => {
    add(new THREE.BoxGeometry(0.66, 0.52, 0.34), std('#171515', 0.75), x, o.h + rH + 0.26, zB - 0.4);
    face(add(new THREE.PlaneGeometry(0.62, 0.48), grille, x, o.h + rH + 0.26, zB - 0.575));
    kit.bulbs.add(x + 0.25, o.h + rH + 0.47, zB - 0.58, 0, { color: i ? '#ff6a4a' : '#6dff9a', k: 0.5, s: 0.2, twinkle: 0, layer: 'show' });
  });
  // Par cans hung between the moving heads on the front beam, their lenses the bulbs under the beam
  for (let k = 0; k < 10; k += 2) {
    const x = lerp(o.x0, o.x1, (k + 0.5) / 10), can = add(new THREE.CylinderGeometry(0.12, 0.1, 0.3, 10), std('#141217', 0.45, 0.5), x, o.truss - 0.5, zF - 0.02);
    can.rotation.x = 0.5;
    add(new THREE.BoxGeometry(0.28, 0.03, 0.03), std('#141217', 0.5, 0.5), x, o.truss - 0.32, zF - 0.02);
  }
  // The side screens on lattice legs either side of the stage (their pictures are drawn live over the frames)
  if (o.sideScreens) [-1, 1].forEach((sd) => {
    const xa = Math.min(sd * 14.4, sd * 21.4), xb = Math.max(sd * 14.4, sd * 21.4), y0 = 5, y1 = 9, z = zF + 0.3;
    [xa + 0.7, xb - 0.7].forEach((lx) => { const leg = truss(y0, 0.32, Math.round(y0 / 1.1)); leg.position.set(lx, y0 / 2, z + 0.25); root.add(leg); });
    add(new THREE.BoxGeometry(xb - xa + 0.5, y1 - y0 + 0.5, 0.2), std('#0b0a0d', 0.6), (xa + xb) / 2, (y0 + y1) / 2, z + 0.12);
    add(new THREE.BoxGeometry(xb - xa, 0.12, 0.5), std('#15131a', 0.6, 0.3), (xa + xb) / 2, y0 - 0.3, z + 0.3);
    kit.pools.add((xa + xb) / 2, 0.02, z - 3, (xb - xa) * 0.6, 4, '#ffffff', 0.12, { theme: true, layer: 'show' });
  });

  return {
    root, stageFront,
    front: { x: cx, y: o.h, z: zF },
    // Where a light on the band should stand and aim
    wash: { pos: [cx, o.truss - 0.4, zF - 3.5], to: [cx, o.h, zF + depth * 0.6] },
    update(t, ctx) {
      const { TH, pulse, reduce, close, lv } = ctx, show = lv.show, on = lv.show > 0.5;
      led.material.color.copy(hsl(TH.hues[Math.floor(t * 0.5) % TH.hues.length] + 20 * Math.sin(t * TH.speed), TH.sat, 55)).multiplyScalar((1.5 + pulse) * show);
      heads.forEach((h, i) => {
        const tt = reduce ? 0 : t * (0.4 + TH.speed), sw = Math.sin(tt + i * 1.3) * 3.5;
        const to = [h.x + sw, 0, zF - 5 - (close ? 0 : 2 + 2 * Math.sin(tt * 0.7 + i))];
        h.mesh.rotation.x = -0.4 + Math.sin(tt + i) * 0.2; h.mesh.rotation.z = Math.sin(tt + i * 1.3) * 0.3;
        downBeams[i].aim([h.x, h.y, zF], to);
        downBeams[i].set(TH.beams[i % TH.beams.length], show * (0.8 + 0.5 * pulse));
      });
      fan.forEach((b, k) => {
        const bx = lerp(o.x0 + 1.9, o.x1 - 1.9, (k + 0.5) / 5), sweep = reduce ? 0 : Math.sin(t * (0.5 + TH.speed * 0.6) + k * 1.7) * 2.2;
        b.aim([bx, o.h + rH, zB - 0.2], [bx + sweep, o.screenTop + 3, zB - 1.4]);
        b.set(TH.beams[(k + 1) % TH.beams.length], Math.max(0, show - 0.3) / 0.7 * (0.9 + 0.5 * pulse));
      });
    }
  };
}
