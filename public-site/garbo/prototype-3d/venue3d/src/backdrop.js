// The 3D venue backdrop. The 2D venue scene keeps drawing everything that lives and moves (people, band, garbo,
// stalls, screens' pictures, effects) on its own canvas; this draws the venue under it, in WebGL, through the 2D
// scene's own camera. Each frame the 2D scene calls draw(view, state):
//   view  — where its camera stands (x, y, z in its metres, yaw) and how it projects (F: pixels per unit at a distance
//           of one metre, cx/cy: where straight ahead lands on the canvas, W/H: the canvas in CSS pixels);
//   state — the venue, theme and the night's light (on, lit, bright, pulse, beat), time, and the listener.
// draw returns true once that venue is built and its shaders compiled, and false until then, so the 2D scene draws its
// own venue in the meantime and nothing on screen ever waits for WebGL.

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { clamp, THEMES } from './util.js';
import { buildVenue } from './venues.js';
import { Levels } from './lighting.js';
import { updateLit } from './kit.js';

// What the device can afford: a pixel budget, real-time shadows, how finely the bloom is drawn, and how many lights
const TIERS = {
  phone: { name: 'phone', pixels: 0.9e6, shadows: false, shadowSize: 0, bloomScale: 0.35, spots: 0, points: 2, samples: 0 },
  tablet: { name: 'tablet', pixels: 1.6e6, shadows: false, shadowSize: 0, bloomScale: 0.45, spots: 2, points: 4, samples: 2 },
  desktop: { name: 'desktop', pixels: 2.4e6, shadows: true, shadowSize: 2048, bloomScale: 0.5, spots: 2, points: 4, samples: 4 }
};

export function supported() {
  try { return !!document.createElement('canvas').getContext('webgl2'); } catch (e) { return false; }
}

export function create(canvas, opts = {}) {
  const TIER = TIERS[opts.tier] || TIERS.desktop;

  const gl = document.createElement('canvas');
  gl.setAttribute('aria-hidden', 'true');
  gl.className = 'venue-backdrop';
  gl.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;';
  canvas.parentNode.insertBefore(gl, canvas);

  const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: false, powerPreference: 'high-performance', alpha: false, stencil: false });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = TIER.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; // the venue doesn't move: shadows are drawn once per venue
  renderer.setClearColor('#07060d');

  const scene = new THREE.Scene();
  // World space is the 2D scene's (X right, Y up, Z away from you); mirroring Z maps it into three.js's space
  const world = new THREE.Group(); world.scale.z = -1; scene.add(world);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.3, 1400);
  const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: TIER.samples });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 1.0, 0.62, 0.72);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  /* ---------- one light rig for every venue (a fixed count, so shaders compile once) ---------- */
  const rig = { spots: [], points: [] };
  rig.hemi = new THREE.HemisphereLight('#4a4470', '#3a2415', 0.6); world.add(rig.hemi);
  rig.moon = new THREE.DirectionalLight('#9fb0e0', 0); world.add(rig.moon); world.add(rig.moon.target);
  for (let i = 0; i < TIER.spots; i++) {
    const sp = new THREE.SpotLight('#ffe6c4', 0, 60, 0.7, 0.7, 1.1);
    if (i === 0 && TIER.shadows) { sp.castShadow = true; sp.shadow.mapSize.set(TIER.shadowSize, TIER.shadowSize); sp.shadow.bias = -0.0006; sp.shadow.normalBias = 0.02; sp.shadow.camera.near = 3; sp.shadow.camera.far = 80; }
    world.add(sp); world.add(sp.target); rig.spots.push({ light: sp, base: 0 });
  }
  for (let i = 0; i < TIER.points; i++) { const p = new THREE.PointLight('#ffc890', 0, 20, 1.4); world.add(p); rig.points.push({ light: p, base: 0 }); }
  function applyRig(v) {
    const R = v.rig;
    rig.hemi.color.set(R.hemi[0]); rig.hemi.groundColor.set(R.hemi[1]);
    // Without the spotlights a phone lights the venue a little more from the sky
    rig.hemi.userData.base = TIER.spots ? R.hemi[2] : R.hemi[3];
    rig.moon.userData.base = v.sky && R.moon ? v.sky.moonLight.intensity : 0;
    if (v.sky) rig.moon.position.copy(v.sky.moonLight.dir).multiplyScalar(80);
    rig.spots.forEach((s, i) => {
      const c = R.spots[i]; s.base = c ? c.base : 0; s.layer = c && c.layer || 'key';
      if (!c) return;
      s.light.position.set(c.pos[0], c.pos[1], c.pos[2]); s.light.target.position.set(c.to[0], c.to[1], c.to[2]);
      s.light.color.set(c.color); s.light.distance = c.distance; s.light.angle = c.angle;
    });
    // The first point light is the garbo's lamp, lighting the ground round the circle
    rig.points.forEach((p, i) => {
      const c = i === 0 ? v.garboLight : R.points[i - 1]; p.base = c && i > 0 ? c.base : 0; p.layer = i === 0 ? 'garbo' : c && c.layer || 'practical';
      if (!c) return;
      p.light.position.set(c.pos[0], c.pos[1], c.pos[2]); p.light.color.set(c.color); p.light.distance = c.distance;
    });
    renderer.shadowMap.needsUpdate = true;
  }

  /* ---------- venues: built on first visit, compiled off the main thread ---------- */
  const venues = {};
  let V = null, themeApplied = null, W = 1, H = 1, QP = 1, cropKey = '';
  function venue(id, theme) {
    if (!venues[id]) {
      const v = buildVenue(id, TIER, theme);
      v.ready = false; v.root.visible = false; world.add(v.root);
      const done = () => { v.ready = true; };
      (renderer.compileAsync ? renderer.compileAsync(v.root, camera, scene) : Promise.resolve(renderer.compile(v.root, camera, scene))).then(done, done);
      venues[id] = v;
    }
    return venues[id];
  }
  function show(v) {
    if (V) V.root.visible = false;
    V = v; V.root.visible = true;
    scene.fog = V.fog; V.fogBase = V.fog.density;
    applyRig(V);
    themeApplied = null;
  }

  /* ---------- the camera: the 2D scene's, exactly ---------- */
  function place(view) {
    camera.position.set(view.x, view.y, -view.z);
    camera.rotation.set(0, -(view.yaw || 0), 0);
    camera.updateMatrixWorld();
    const n = camera.near, f = camera.far, F = view.F;
    camera.projectionMatrix.makePerspective(-view.cx * n / F, (view.W - view.cx) * n / F, view.cy * n / F, -(view.H - view.cy) * n / F, n, f);
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    const dpr = clamp(Math.sqrt(TIER.pixels * QP * QP / (W * H)), 0.5, Math.min(2, window.devicePixelRatio || 1));
    // The 2D canvas can be cropped to stop where the player's controls begin; this one follows it
    gl.style.width = canvas.style.width || '100%'; gl.style.height = canvas.style.height || '100%';
    renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
    composer.setPixelRatio(dpr); composer.setSize(W, H);
    bloom.resolution.set(Math.max(64, Math.round(W * dpr * TIER.bloomScale)), Math.max(64, Math.round(H * dpr * TIER.bloomScale)));
  }
  if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas); else window.addEventListener('resize', resize);
  resize();

  /* ---------- adaptive quality ----------
     The 2D scene steps its own quality down when frames run slow; this does the same for its part: fewer pixels,
     then no bloom, then drawing the (still) venue on every other frame. */
  let lastMs = 0, frameMs = 16, slowFor = 0, every = 1, count = 0, lastKey = '';
  function pace(ms) {
    if (lastMs) {
      const gap = ms - lastMs; if (gap < 250) frameMs += (gap - frameMs) * 0.05;
      slowFor = frameMs > 30 ? slowFor + gap : 0;
      if (slowFor > (TIER.name === 'desktop' ? 2500 : 1400)) {
        if (QP > 0.6) { QP = Math.max(0.6, QP - 0.2); resize(); }
        else if (bloom.enabled) bloom.enabled = false;
        else every = 2;
        slowFor = 0; frameMs = 20;
      }
    }
    lastMs = ms;
  }

  const levels = new Levels();
  let lastT = 0, lost = false;
  gl.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; });
  gl.addEventListener('webglcontextrestored', () => { lost = false; Object.keys(venues).forEach((k) => delete venues[k]); V = null; });

  function draw(view, s) {
    if (lost) return false;
    const want = venue(s.venue, s.theme);
    if (!want.ready) return false;
    if (V !== want) show(want);
    const ck = (canvas.style.width || '') + '|' + (canvas.style.height || '');
    if (ck !== cropKey) { cropKey = ck; resize(); }
    pace(performance.now());
    const TH = THEMES[s.theme] || THEMES.traditional;
    if (themeApplied !== s.theme) { V.kit.flags.setPalette(TH.flags); if (themeApplied) V.lightMaps.repaint(TH); themeApplied = s.theme; }
    // The lighting layers ease towards what the night calls for, every frame, drawn or not
    // (in the scene's own animation time, which stands still when motion is reduced)
    const dt = lastT ? Math.min(0.1, Math.max(0, s.T - lastT)) : 0.016; lastT = s.T;
    const lv = levels.update(dt, s);
    // A still camera on a still night needs no new frame: skip it when slowing down, or when motion is reduced
    const key = [view.x, view.y, view.z, view.yaw, view.F, view.cx, view.cy, view.W, view.H].map((v) => Math.round(v * 100)).join(',');
    const moved = key !== lastKey; lastKey = key;
    count++;
    if (!moved && (every > 1 && count % every) && !s.reduce) return true;
    if (!moved && s.reduce && V._drawn) return true;
    place(view);
    const pulse = s.reduce ? 0 : s.pulse || 0;
    // The garbo's layer burns as brightly as the lamp is lit, with its flicker
    const fl = s.reduce ? 1 : 0.85 + 0.1 * Math.sin(s.t * 11) * Math.sin(s.t * 7.3) + 0.05 * Math.sin(s.t * 23);
    const L = { ...lv, garbo: lv.garbo * levels.garboLit * fl };
    const ctx = { TH, pulse, lv: L, on: s.on, reduce: s.reduce, close: s.listener === 'stage' || s.dj };
    if (V.sky) V.sky.root.position.set(view.x, 0, view.z);
    // Layer by layer: the lamps and bulbs, the light they throw, the glowing surfaces, the ground's light maps
    V.kit.bulbs.update(s.t, TH.bulbs, L, pulse, s.reduce, [1, 1, s.on ? 1 : 0]);
    V.kit.bigBulbs.update(s.t, TH.bulbs, L, pulse, s.reduce, [1, 1, 1]);
    V.kit.pools.update(L, TH.glow);
    updateLit(V.kit, L);
    V.lightMaps.set(L);
    if (!s.reduce) V.kit.flags.pose(s.T);
    V.kit.beams.forEach((b) => { b.beam.aim(b.from, b.to); b.beam.set('#fff0d8', 0.6 * L[b.layer || 'key']); });
    (V.umbrellas || []).forEach((u, i) => u.update(s.T, s.reduce, i));
    if (V.stage) V.stage.update(s.T, ctx);
    if (V.update) V.update(s.T, ctx);
    rig.points.forEach((l, i) => { l.light.intensity = i === 0 ? (V.id === 'sheri' ? 16 : 24) * L.garbo : l.base * L[l.layer]; });
    rig.spots.forEach((l) => { l.light.intensity = l.base * L[l.layer]; });
    rig.hemi.intensity = rig.hemi.userData.base * L.ambient;
    rig.moon.intensity = rig.moon.userData.base * L.ambient;
    // The air: a little more haze in an aarti, when the lamp's smoke hangs over the ground
    if (V.fog) V.fog.density = V.fogBase * (1 + 0.3 * (s.aarti || 0));
    renderer.toneMappingExposure = V.exposure * (1 - 0.15 * (s.aarti || 0));
    bloom.strength = 0.95 + 0.3 * pulse * L.show;
    composer.render();
    V._drawn = true;
    return true;
  }

  return { draw, resize, tier: TIER.name, renderer, debug: () => ({ V, scene, camera, QP, every, bloom: bloom.enabled, frameMs, venues: Object.keys(venues) }) };
}
