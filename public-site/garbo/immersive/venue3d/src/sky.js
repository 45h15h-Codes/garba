// The night over an open-air venue: a sky that deepens from a warm glow at the horizon to indigo overhead, stars,
// tonight's moon in its real phase, and a skyline of the city at the edge of the ground.

import * as THREE from 'three';
import { TAU, seeded, lerp, canvasTexture } from './util.js';

const SYNODIC = 29.530588853, NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);
export function moonInfo(age) {
  if (age == null) age = (((Date.now() - NEW_MOON) / 864e5) % SYNODIC + SYNODIC) % SYNODIC;
  const k = (1 - Math.cos(age / SYNODIC * TAU)) / 2, waxing = age < SYNODIC / 2;
  const name = age < 1 || age > SYNODIC - 1 ? 'new moon' : k > 0.97 ? 'full moon' : Math.abs(k - 0.5) < 0.06 ? (waxing ? 'first quarter' : 'last quarter') : k < 0.5 ? (waxing ? 'waxing crescent' : 'waning crescent') : (waxing ? 'waxing gibbous' : 'waning gibbous');
  return { age, lit: k, name, waxing };
}

// The moon as it looks tonight: the lit part warm ivory with soft grey seas, a soft terminator, earthshine on the rest
function moonTexture(age) {
  return canvasTexture(256, 256, (b, w) => {
    const r = w * 0.2, x = w / 2, y = w / 2, ph = age / SYNODIC, k = (1 - Math.cos(ph * TAU)) / 2;
    const gl = b.createRadialGradient(x, y, r * 0.8, x, y, w / 2);
    gl.addColorStop(0, `rgba(255,238,205,${0.05 + 0.3 * k})`); gl.addColorStop(0.4, `rgba(255,238,205,${0.02 + 0.08 * k})`); gl.addColorStop(1, 'rgba(255,238,205,0)');
    b.fillStyle = gl; b.fillRect(0, 0, w, w);
    const es = b.createRadialGradient(x - r * 0.2, y - r * 0.2, r * 0.1, x, y, r); es.addColorStop(0, 'rgba(128,134,166,.4)'); es.addColorStop(1, 'rgba(78,82,110,.34)');
    b.fillStyle = es; b.beginPath(); b.arc(x, y, r, 0, TAU); b.fill();
    if (k < 0.004) return;
    const lit = () => { b.beginPath(); b.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false); b.ellipse(0, 0, r * Math.abs(1 - 2 * k), r, 0, Math.PI / 2, -Math.PI / 2, k < 0.5); b.closePath(); };
    b.save(); b.translate(x, y); if (ph > 0.5) b.scale(-1, 1);
    b.save(); b.globalAlpha = 0.35; b.filter = `blur(${Math.max(0.6, r * 0.06)}px)`; lit(); b.fillStyle = '#f5e6c8'; b.fill(); b.restore();
    lit(); b.save(); b.clip();
    const f = b.createRadialGradient(-r * 0.25, -r * 0.3, r * 0.05, 0, 0, r * 1.02);
    f.addColorStop(0, '#fffaf0'); f.addColorStop(0.55, '#f7ecd6'); f.addColorStop(0.88, '#e6d4b2'); f.addColorStop(1, '#c9b692');
    b.fillStyle = f; b.fillRect(-r, -r, r * 2, r * 2);
    b.filter = `blur(${Math.max(0.5, r * 0.07)}px)`; b.fillStyle = 'rgba(150,140,128,.22)';
    [[-0.28, -0.3, 0.26, 0.2], [0.08, -0.38, 0.2, 0.15], [0.3, -0.05, 0.22, 0.26], [-0.1, 0.02, 0.3, 0.2], [-0.36, 0.22, 0.18, 0.14], [0.14, 0.36, 0.16, 0.12]]
      .forEach((m) => { b.beginPath(); b.ellipse(m[0] * r * (ph > 0.5 ? -1 : 1), m[1] * r, m[2] * r, m[3] * r, 0.4, 0, TAU); b.fill(); });
    b.restore(); b.restore();
  });
}

export function buildSky(id, moonAge) {
  const root = new THREE.Group();
  const horizon = id === 'sheri' ? '#2a1b36' : '#3d1f1a';
  // The dome: a gradient by height, drawn behind everything and untouched by fog
  const dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color('#04051a') }, mid: { value: new THREE.Color('#140f33') }, low: { value: new THREE.Color(horizon) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = h < 0.12 ? mix(low, mid, smoothstep(-0.02, 0.12, h)) : mix(mid, top, smoothstep(0.12, 0.7, h)); gl_FragColor = vec4(c, 1.0); }'
  }));
  dome.renderOrder = -10;
  root.add(dome);

  // Stars: fewer near the horizon, where the city's light washes them out
  const r = seeded(99), n = 900, pos = new Float32Array(n * 3), colr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = r() * TAU, el = Math.asin(0.06 + Math.pow(r(), 0.8) * 0.94), R = 800;
    pos[i * 3] = Math.cos(a) * Math.cos(el) * R; pos[i * 3 + 1] = Math.sin(el) * R; pos[i * 3 + 2] = Math.sin(a) * Math.cos(el) * R;
    const k = 0.35 + r() * 0.65, warm = r();
    colr[i * 3] = k; colr[i * 3 + 1] = k * (0.92 + warm * 0.06); colr[i * 3 + 2] = k * (0.8 + (1 - warm) * 0.2);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('color', new THREE.BufferAttribute(colr, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, fog: false, depthWrite: false, transparent: true }));
  root.add(stars);

  // The moon, up to the right of the stage; higher in the sky around full moon, as in the 2D scene
  const info = moonInfo(moonAge), yA = Math.min(info.age, 29.5 - info.age, 14.8) / 14.8;
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(info.age), fog: false, depthWrite: false, transparent: true }));
  const el = lerp(0.08, 0.5, yA), az = 0.5, R = 700;
  moon.position.set(Math.sin(az) * Math.cos(el) * R, Math.sin(el) * R, Math.cos(az) * Math.cos(el) * R);
  moon.scale.setScalar(R * 0.11);
  root.add(moon);

  // Moonlight comes from where the moon is: faint and cool, stronger as more of it is lit
  const moonLight = { dir: moon.position.clone().normalize(), intensity: 0.08 + 0.25 * info.lit };

  return { root, moonLight, info };
}

// The city at the edge of the ground: low blocks with a few lit windows and the glow of the town over them
export function buildSkyline(radius = 170) {
  const r = seeded(17), root = new THREE.Group();
  const tex = canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#0d0913'; g.fillRect(0, 0, w, h);
    for (let y = 8; y < h; y += 16) for (let x = 6; x < w; x += 14) if (r() < 0.3) { g.fillStyle = r() < 0.7 ? 'rgba(255,196,120,.9)' : 'rgba(190,210,255,.6)'; g.fillRect(x, y, 6, 8); }
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  const mat = new THREE.MeshStandardMaterial({ color: '#0d0913', emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: 0.6, roughness: 1, fog: false });
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const n = 110, blocks = new THREE.InstancedMesh(geo, mat, n), mx = new THREE.Matrix4();
  for (let i = 0; i < n; i++) {
    const a = i / n * TAU + r() * 0.03, R = radius + r() * 60, w = 12 + r() * 22, h = 5 + Math.pow(r(), 2) * 26;
    mx.compose(new THREE.Vector3(Math.sin(a) * R, h / 2 - 1, Math.cos(a) * R), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a), new THREE.Vector3(w, h, 10));
    blocks.setMatrixAt(i, mx);
  }
  root.add(blocks);
  return root;
}
