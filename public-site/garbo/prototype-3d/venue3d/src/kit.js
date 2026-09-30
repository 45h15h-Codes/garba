// The kit every venue is built from: materials, and the things a Garba night has hundreds of (bulbs, bunting flags,
// wires, pools of light, stage beams), each drawn as one instanced mesh so a venue costs a handful of draw calls.

import * as THREE from 'three';
import { TAU, col, glowTexture, sag } from './util.js';

/* ---------- materials, shared by value ---------- */
const mats = new Map();
export function std(hex, rough = 0.85, metal = 0, extra) {
  const key = hex + '|' + rough + '|' + metal + (extra ? JSON.stringify(extra) : '');
  let m = mats.get(key);
  if (!m) { m = new THREE.MeshStandardMaterial(Object.assign({ color: hex, roughness: rough, metalness: metal }, extra || {})); mats.set(key, m); }
  return m;
}
export function lambert(hex, extra) {
  const key = 'L' + hex + (extra ? JSON.stringify(extra) : '');
  let m = mats.get(key);
  if (!m) { m = new THREE.MeshLambertMaterial(Object.assign({ color: hex }, extra || {})); mats.set(key, m); }
  return m;
}
// Vertex-coloured, for props merged from several coloured pieces
export const vertexMat = (rough = 0.8, metal = 0) => std('#ffffff', rough, metal, { vertexColors: true });
// Something that gives off its own light: a flat colour pushed past white so the bloom picks it up
export function glowMat(hex, k = 3) {
  return new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k) });
}

/* ---------- bulbs: every small light in a venue, one instanced mesh ---------- */
// Each bulb keeps its place, which theme colour it takes (an index into the palette), a twinkle phase and how bright
// it sits. Colours are rewritten each frame from the palette, so a theme change is instant.
export class Bulbs {
  constructor(radius = 0.06, detail = 6) {
    this.list = [];
    this.geo = new THREE.SphereGeometry(radius, detail, Math.max(3, detail - 2));
    this.mesh = null;
  }
  add(x, y, z, idx, opts = {}) {
    this.list.push({ x, y, z, idx, ph: opts.ph != null ? opts.ph : Math.random() * TAU, k: opts.k || 1, s: opts.s || 1, twinkle: opts.twinkle != null ? opts.twinkle : 0.28, fixed: opts.color || null, group: opts.group || 0, layer: opts.layer || 'festive' });
  }
  build(parent) {
    const n = this.list.length;
    if (!n) return null;
    const m = new THREE.InstancedMesh(this.geo, new THREE.MeshBasicMaterial({ color: '#ffffff' }), n);
    const mx = new THREE.Matrix4();
    this.list.forEach((b, i) => m.setMatrixAt(i, mx.makeScale(b.s, b.s, b.s).setPosition(b.x, b.y, b.z)));
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
    m.frustumCulled = false;
    parent.add(m);
    this.mesh = m;
    return m;
  }
  // palette: hex list; lv: the lighting layers' levels; pulse 0..1 on the beat; groups can be gated (phones held up)
  update(t, palette, lv, pulse, reduce, groupK) {
    if (!this.mesh) return;
    const a = this.mesh.instanceColor.array, c = new THREE.Color();
    for (let i = 0; i < this.list.length; i++) {
      const b = this.list[i];
      c.copy(b.fixed ? col(b.fixed) : col(palette[b.idx % palette.length]));
      const tw = reduce ? 1 : 1 - b.twinkle + b.twinkle * Math.sin(t * 2.6 + b.ph);
      const g = groupK ? groupK[b.group] ?? 1 : 1;
      // Festive bulbs dance a little on the beat; lamps (practicals) burn steady
      const beat = b.layer === 'festive' || b.layer === 'show' ? pulse * 0.25 : 0;
      const k = b.k * (lv[b.layer] ?? 1) * (tw + beat) * 2.5 * g;
      a[i * 3] = c.r * k; a[i * 3 + 1] = c.g * k; a[i * 3 + 2] = c.b * k;
    }
    this.mesh.instanceColor.needsUpdate = true;
  }
}

/* ---------- bunting: triangular flags on a line ---------- */
export class Flags {
  constructor() {
    this.list = [];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0, -1.6, 0], 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
    this.geo = g;
  }
  add(x, y, z, ry, size, idx) { this.list.push({ x, y, z, ry, size, idx, ph: Math.random() * TAU }); }
  build(parent) {
    const n = this.list.length;
    if (!n) return null;
    const m = new THREE.InstancedMesh(this.geo, new THREE.MeshLambertMaterial({ color: '#ffffff', side: THREE.DoubleSide }), n);
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
    m.frustumCulled = false;
    parent.add(m);
    this.mesh = m;
    this.pose(0, true);
    return m;
  }
  setPalette(palette) {
    if (!this.mesh) return;
    const a = this.mesh.instanceColor.array;
    this.list.forEach((f, i) => { const c = col(palette[f.idx % palette.length]); a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; });
    this.mesh.instanceColor.needsUpdate = true;
  }
  // A light breeze: each flag swings a little on its line
  pose(t, force) {
    if (!this.mesh) return;
    const q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), mx = new THREE.Matrix4();
    this.list.forEach((f, i) => {
      e.set(force ? 0 : Math.sin(t * 1.7 + f.ph) * 0.25, f.ry, 0, 'YXZ');
      q.setFromEuler(e); s.set(f.size, f.size, f.size); p.set(f.x, f.y, f.z);
      this.mesh.setMatrixAt(i, mx.compose(p, q, s));
    });
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

/* ---------- wires and ropes: thin dark lines, all in one draw ---------- */
export class Wires {
  constructor(hex = '#2a2019', opacity = 0.8) { this.pts = []; this.hex = hex; this.opacity = opacity; }
  line(a, b) { this.pts.push(a[0], a[1], a[2], b[0], b[1], b[2]); }
  cable(a, b, drop, n = 20) {
    let prev = sag(a, b, drop, 0);
    for (let i = 1; i <= n; i++) { const q = sag(a, b, drop, i / n); this.line(prev, q); prev = q; }
  }
  build(parent) {
    if (!this.pts.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pts, 3));
    const m = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: this.hex, transparent: this.opacity < 1, opacity: this.opacity }));
    parent.add(m);
    return m;
  }
}

// A strand hung between two points: bulbs or flags along a sagging wire
export function strand(kit, a, b, drop, kind, seed) {
  kit.wires.cable(a, b, drop);
  const len = Math.hypot(b[0] - a[0], b[2] - a[2]), n = Math.max(2, Math.round(len / (kind === 'flags' ? 0.9 : 1.1)));
  const ry = Math.atan2(b[0] - a[0], b[2] - a[2]) + Math.PI / 2;
  for (let j = 1; j < n; j++) {
    const q = sag(a, b, drop, j / n);
    if (kind === 'flags') kit.flags.add(q[0], q[1], q[2], ry, 0.3, j + seed);
    else {
      kit.bulbs.add(q[0], q[1] - 0.06, q[2], j + seed, { ph: j * 1.7 + seed });
      // Strings of bulbs overhead throw a soft, dappled light on the ground under them
      if (j % 3 === 1) kit.pools.add(q[0], 0.02, q[2], 2.8, 2.8, '#ffd58a', 0.1, { layer: 'festive', theme: true });
    }
  }
}

/* ---------- pools of light on the ground and halos in the air ---------- */
// Additive soft discs: the cheap way to show dozens of lamps lighting the ground without dozens of real lights
export class Pools {
  constructor() { this.list = []; }
  add(x, y, z, rx, rz, hex, k = 1, opts = {}) {
    const vertical = !!opts.vertical;
    // A pool lying on the ground, and not one that moves, is painted into the ground's light maps instead of drawn
    this.list.push({ x, y, z, rx, rz, hex, k, vertical, ry: opts.ry || 0, theme: opts.theme || false, layer: opts.layer || 'practical', ground: !vertical && y < 0.1 && !opts.live });
  }
  build(parent) {
    // Pools baked into the ground aren't drawn again
    if (this.bakedGround) this.list = this.list.filter((p) => !p.ground);
    const n = this.list.length;
    if (!n) return null;
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#ffffff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, side: THREE.DoubleSide });
    const m = new THREE.InstancedMesh(geo, mat, n);
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
    const q = new THREE.Quaternion(), e = new THREE.Euler(), mx = new THREE.Matrix4();
    this.list.forEach((p, i) => {
      e.set(p.vertical ? 0 : -Math.PI / 2, p.ry, 0, 'YXZ'); q.setFromEuler(e);
      m.setMatrixAt(i, mx.compose(new THREE.Vector3(p.x, p.y, p.z), q, new THREE.Vector3(p.rx * 2, p.rz * 2, 1)));
    });
    m.frustumCulled = false;
    m.renderOrder = 2;
    parent.add(m);
    this.mesh = m;
    return m;
  }
  update(lv, glowHex) {
    if (!this.mesh) return;
    const a = this.mesh.instanceColor.array;
    this.list.forEach((p, i) => { const c = col(p.theme ? glowHex : p.hex), k = p.k * (lv[p.layer] ?? 1); a[i * 3] = c.r * k; a[i * 3 + 1] = c.g * k; a[i * 3 + 2] = c.b * k; });
    this.mesh.instanceColor.needsUpdate = true;
  }
}

/* ---------- beams of light: a cone that fades from its lamp outward ---------- */
const beamGeo = (() => {
  const g = new THREE.CylinderGeometry(0.04, 1, 1, 20, 1, true);
  g.translate(0, -0.5, 0); // apex at the origin, opening down -Y
  return g;
})();
export function beamMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color('#ffffff') }, opacity: { value: 0.2 } },
    vertexShader: 'varying float vK; varying vec3 vN; varying vec3 vV; void main(){ vK = -position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    // Brightest near the lamp, fading along the beam, and soft at the cone's edges seen side-on
    fragmentShader: 'uniform vec3 color; uniform float opacity; varying float vK; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.4); float a = opacity * pow(1.0 - clamp(vK,0.0,1.0), 1.6) * edge; gl_FragColor = vec4(color * a, a); }',
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide
  });
}
export class Beam {
  constructor(parent, hex, length = 10, spread = 1.2, opacity = 0.18) {
    this.mesh = new THREE.Mesh(beamGeo, beamMaterial());
    this.mesh.material.uniforms.color.value.set(hex);
    this.mesh.material.uniforms.opacity.value = opacity;
    this.mesh.renderOrder = 3;
    this.mesh.frustumCulled = false;
    this.length = length; this.spread = spread; this.base = opacity;
    parent.add(this.mesh);
    this._up = new THREE.Vector3(0, -1, 0);
  }
  // Point the beam from `from` at `to`, reaching that far
  aim(from, to) {
    const d = new THREE.Vector3(to[0] - from[0], to[1] - from[1], to[2] - from[2]), len = d.length();
    this.mesh.position.set(from[0], from[1], from[2]);
    this.mesh.quaternion.setFromUnitVectors(this._up, d.normalize());
    const r = Math.tan(this.spread * 0.5) * len;
    this.mesh.scale.set(r, len, r);
  }
  set(hex, k) { this.mesh.material.uniforms.color.value.set(hex); this.mesh.material.uniforms.opacity.value = this.base * k; this.mesh.visible = k > 0.01; }
}

/* ---------- one kit per venue ---------- */
export function newKit() {
  const kit = { bulbs: new Bulbs(0.075), bigBulbs: new Bulbs(0.13, 8), flags: new Flags(), wires: new Wires(), pools: new Pools(), beams: [], updaters: [], lit: [] };
  // A surface that gives off light (a lantern's paper, a lit panel, a window), dimmed and raised with its layer
  // (shared by colour, strength and layer, so twenty lanterns are one material and bake into one draw)
  const glows = new Map();
  kit.glow = (hex, k = 1, layer = 'practical') => {
    const key = hex + '|' + k + '|' + layer;
    if (!glows.has(key)) { const m = glowMat(hex, k); kit.lit.push({ mat: m, base: m.color.clone(), layer }); glows.set(key, m); }
    return glows.get(key);
  };
  return kit;
}
// Set every layer-controlled surface to its layer's level
export function updateLit(kit, lv) { kit.lit.forEach((e) => e.mat.color.copy(e.base).multiplyScalar(lv[e.layer] ?? 1)); }
export function buildKit(kit, parent) {
  kit.bulbs.build(parent); kit.bigBulbs.build(parent); kit.flags.build(parent); kit.wires.build(parent); kit.pools.build(parent);
}
