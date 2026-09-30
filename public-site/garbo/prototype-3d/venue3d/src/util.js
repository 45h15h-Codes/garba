// Shared constants and small helpers for the 3D venues.
//
// World space follows the 2D venue scene exactly, in metres: X runs to the right, Y up, and Z away from the
// camera, with the main circle's garbo at the origin. The whole world hangs under one root group mirrored in Z, so
// every position here can be copied straight from the 2D scene and still render in three.js's right-handed space.

import * as THREE from 'three';

export const TAU = Math.PI * 2;

export function seeded(s) {
  s = s % 2147483647 || 7;
  return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const pick = (r, list) => list[Math.floor(r() * list.length)];

// A point along a hanging cable from a to b, dropping by `drop` at the middle
export function sag(a, b, drop, u) {
  return [lerp(a[0], b[0], u), lerp(a[1], b[1], u) - drop * 4 * u * (1 - u), lerp(a[2], b[2], u)];
}

export const SKIRTS = ['#c0392b', '#d6246e', '#e8a33d', '#2f8f5b', '#3b4cc0', '#8e44ad', '#e67e22', '#16a085', '#b83227'];
export const TOPS = ['#f0c24b', '#2f8f5b', '#c2185b', '#3b4cc0', '#e67e22', '#8e44ad'];
export const PAGDIS = ['#b8312b', '#e67e22', '#f0c24b', '#c2185b', '#f3e6d0', '#2f8f5b'];
export const SKIN = ['#c99a72', '#b98563', '#d9b48c', '#a8744f', '#c08a60'];
export const HAIR = ['#1a1210', '#231815', '#2b1d17', '#140e0c'];

// Each kind of Garba night is lit differently: bulbs, stage washes, the stage screen and how fast the lights move.
// The same palettes as the 2D scene, so a theme reads the same in either renderer.
export const THEMES = {
  traditional: { bulbs: ['#ffd58a', '#ffb070', '#ffe9b8', '#ff9f5a'], flags: ['#f08a24', '#c2185b', '#ffc861', '#2f8f5b', '#b8312b'], beams: ['#ffd696', '#ffaa5a', '#ffecc8', '#ffbe78'], hues: [28, 42, 16], sat: 75, speed: 0.3, glow: '#ffbe6e' },
  dandiya: { bulbs: ['#ffd58a', '#ff6fa3', '#7fe0a0', '#8fc7ff', '#ffb070', '#c38fff'], flags: ['#f08a24', '#2f8f5b', '#c2185b', '#ffc861', '#3b4cc0'], beams: ['#ff78be', '#78dcff', '#ffc85a', '#be8cff'], hues: [320, 190, 45, 270], sat: 82, speed: 0.75, glow: '#ffaac8' },
  devotional: { bulbs: ['#ffe9b8', '#ffd58a', '#fff4dc'], flags: ['#f08a24', '#ffc861', '#b8312b', '#f3e6d0'], beams: ['#ffecc8', '#ffd696'], hues: [34, 22], sat: 60, speed: 0.12, glow: '#ffd296' },
  folk: { bulbs: ['#ffb070', '#ffd58a', '#e8a33d', '#9fe7b8'], flags: ['#b8312b', '#2f8f5b', '#e8a33d', '#3b4cc0'], beams: ['#ffbe78', '#d2ebaa', '#ffdca0'], hues: [24, 90, 12], sat: 62, speed: 0.28, glow: '#ffbe78' },
  sanedo: { bulbs: ['#ffd58a', '#ff8fb3', '#ffb070', '#9fe7b8'], flags: ['#c2185b', '#f08a24', '#ffc861', '#2f8f5b'], beams: ['#ff8cbe', '#ffc86e', '#ffecc8'], hues: [340, 30, 50], sat: 78, speed: 0.55, glow: '#ffaaaa' },
  fusion: { bulbs: ['#8fc7ff', '#c38fff', '#ff6fa3', '#7fe0ff'], flags: ['#3b4cc0', '#8e44ad', '#c2185b', '#16a085'], beams: ['#78dcff', '#be78ff', '#ff5ab4', '#5affdc'], hues: [200, 280, 320], sat: 88, speed: 1.05, glow: '#aa96ff' },
  nonstop: { bulbs: ['#ffd58a', '#ff6fa3', '#8fc7ff', '#ffb070', '#7fe0a0'], flags: ['#f08a24', '#2f8f5b', '#c2185b', '#ffc861', '#3b4cc0'], beams: ['#ffc86e', '#ff78be', '#78dcff', '#ffecc8'], hues: [30, 320, 190], sat: 80, speed: 0.65, glow: '#ffbe8c' }
};

// Where the camera stands for each place you can listen from, the same as the 2D scene: [x, y, z]
export const CAMS = {
  outdoors: { circle: [0, 4.4, -12.5], far: [0, 5.5, -26], stage: [0, 3.2, 39.2] },
  stadium: { circle: [0, 4.6, -12.5], far: [0, 9.5, -37], stage: [0, 3.1, 28.8] },
  sheri: { circle: [0, 4, -11.5], far: [-3, 3, -23], stage: [0, 2.8, 58.8] }
};
// Where the horizon sits, as a share of the composed box's height
export const HORIZON = { circle: 0.3, far: 0.4, stage: 0.44 };
// The DJ's booth beside the stage
export const DJ = { outdoors: { x: 19.5, z: 22 }, stadium: { x: 15.5, z: 17 }, sheri: { x: 4.4, z: 60.6 } };
export function djCam(id) { const b = DJ[id] || DJ.outdoors; return [b.x, 1.62, b.z - 2.35]; }
export function clearOfBooth(id, x, z, r) {
  const b = DJ[id];
  return !b || (Math.hypot(b.x - x, b.z - z) > r + 3.2 && Math.hypot(b.x - x, b.z - 2.4 - z) > r + 2.6);
}
// The band on the 3D stages, the same plan as the 2D scene's (BAND in venue-scene.js): each player's place, u across
// the stage from its left and d back from the front of the riser
export const BAND = {
  big: [{ role: 'tabla', u: 0.12, d: 0.95 }, { role: 'dhol', u: 0.27, d: 0.75 }, { role: 'guitar', u: 0.41, d: 0.85 }, { role: 'drums', u: 0.56, d: 1.8 }, { role: 'keys', u: 0.72, d: 0.9 }, { role: 'bass', u: 0.87, d: 0.85 }],
  sheri: [{ role: 'dhol', u: 0.2, d: 1.0 }, { role: 'tabla', u: 0.35, d: 1.0 }, { role: 'guitar', u: 0.64, d: 1.0 }, { role: 'keys', u: 0.84, d: 1.0 }]
};
// Where people may walk and dance in each venue: [x0, x1, z0, z1]
export const BOUNDS = { outdoors: [-23, 23, -5, 40], stadium: [-21, 21, -5, 32], sheri: [-6, 6, -10, 60] };

// Colours: one Color object per hex, shared
const colorCache = new Map();
export function col(hex) {
  let c = colorCache.get(hex);
  if (!c) { c = new THREE.Color(hex); colorCache.set(hex, c); }
  return c;
}

// A small canvas, drawn once, as a texture
export function canvasTexture(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opts.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = opts.anisotropy || 4;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(opts.repeat[0], opts.repeat[1]); }
  return t;
}

// A soft round glow, white in the middle, used for light pools on the ground and halos
let glowTex = null;
export function glowTexture() {
  if (glowTex) return glowTex;
  glowTex = canvasTexture(128, 128, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.25, 'rgba(255,255,255,.55)');
    gr.addColorStop(0.6, 'rgba(255,255,255,.14)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  }, { linear: true });
  return glowTex;
}

// Hex to a THREE.Color scaled beyond 1, so it blooms
export function hot(hex, k) { return new THREE.Color(hex).multiplyScalar(k); }

export function hsl(h, s, l) { return new THREE.Color().setHSL(((h % 360) + 360) % 360 / 360, s / 100, l / 100); }

// Merge a list of [geometry, matrix] into one geometry (all must share attributes)
export function merged(parts) {
  const geos = parts.map(([geo, m]) => {
    const g2 = geo.index ? geo.toNonIndexed() : geo.clone();
    if (m) g2.applyMatrix4(m);
    return g2;
  });
  let count = 0;
  geos.forEach((g2) => (count += g2.attributes.position.count));
  const out = new THREE.BufferGeometry();
  ['position', 'normal', 'uv', 'color'].forEach((name) => {
    if (!geos.every((g2) => g2.attributes[name])) return;
    const size = geos[0].attributes[name].itemSize, arr = new Float32Array(count * size);
    let o = 0;
    geos.forEach((g2) => { arr.set(g2.attributes[name].array, o); o += g2.attributes[name].array.length; });
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  });
  geos.forEach((g2) => g2.dispose());
  return out;
}

// Paint every vertex of a geometry one colour (for merged, vertex-coloured props)
export function tinted(geo, hex) {
  const g2 = geo.index ? geo.toNonIndexed() : geo.clone(), c = new THREE.Color(hex), n = g2.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g2.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return g2;
}

export const M4 = () => new THREE.Matrix4();
export function at(x, y, z, ry = 0, sx = 1, sy = sx, sz = sx) {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(sx, sy, sz));
}

// Turn a plane to face the camera (towards -Z). The world is mirrored in Z, so the plane is also flipped across X:
// that keeps its front face towards you and any lettering on it reading the right way round.
export function face(mesh) { mesh.rotation.y = Math.PI; mesh.scale.x = -1; return mesh; }
// The same for a plane facing any way: ry is the direction it faces, as an angle from +Z towards +X
export function faceTo(mesh, ry) { mesh.rotation.y = ry; mesh.scale.x = -1; return mesh; }

// What each kind of lamp gives off. Light is layered by source as well as by level: a diya's flame is orange and alive,
// a bulb is warm and steady, a street lamp's sodium is amber, a stall's tube light is cold, the floodlights are white.
export const LIGHT = {
  flame: '#ff9038', // a diya's wick, about 1900 K
  flameCore: '#ffe4a8',
  tungsten: '#ffc27a', // household bulbs and lit windows, about 2700 K
  warm: '#ffd6a6', // warm-white lamps, about 3000 K
  sodium: '#ffb152', // old sodium street lamps, about 2100 K
  tube: '#e4f3ff', // a tube light at a stall, about 6500 K
  flood: '#f3f1ff', // the floodlights, about 4500 K
  amber: '#ffae62' // architectural uplights and washes
};

/* ---------- outlines for the 2D scene ----------
   A 3D thing that people can stand behind (a stall, a parked scooter, the DJ's table) leaves the 2D scene its outline:
   convex solids as flat lists of corners [x, y, z, x, y, z, ...] in the venue's own coordinates. The 2D scene projects
   each solid's corners, takes their hull and cuts it out of whatever it drew behind, so the 3D thing shows in front. */
const _sv = new THREE.Vector3();
export function solidOf(mesh) {
  mesh.updateWorldMatrix(true, false);
  const g = mesh.geometry, p = g.parameters || {}, pts = [];
  if (g.type === 'CylinderGeometry') {
    const n = 8, k = 1 / Math.cos(Math.PI / n);
    for (let i = 0; i < n; i++) { const a = i / n * TAU, c = Math.cos(a) * k, s = Math.sin(a) * k; pts.push([c * p.radiusTop, p.height / 2, s * p.radiusTop], [c * p.radiusBottom, -p.height / 2, s * p.radiusBottom]); }
  } else {
    if (!g.boundingBox) g.computeBoundingBox();
    const b = g.boundingBox;
    for (let i = 0; i < 8; i++) pts.push([i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z]);
  }
  const out = [];
  pts.forEach(([x, y, z]) => { _sv.set(x, y, z).applyMatrix4(mesh.matrixWorld); out.push(Math.round(_sv.x * 1000) / 1000, Math.round(_sv.y * 1000) / 1000, Math.round(_sv.z * 1000) / 1000); });
  return out;
}
// A box's solid straight from its corners, for a shape with no mesh of its own
export function boxSolid(x0, y0, z0, x1, y1, z1) {
  const out = [];
  for (let i = 0; i < 8; i++) out.push(i & 1 ? x1 : x0, i & 2 ? y1 : y0, i & 4 ? z1 : z0);
  return out;
}
