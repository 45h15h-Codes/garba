// Layered lighting. Every light in a venue belongs to one layer, and each layer has its own level, eased towards the
// level the night calls for (paused, playing, or an aarti), so a whole kind of light rises or falls together:
//
//   ambient        the sky's bounce and the moon: the night itself
//   key            the big lights that model the venue and throw its shadows (floodlights, the roof's key light)
//   architectural  light on the building itself: uplights on the kanat and trees, wall washers, aisle lights, the
//                  wash on a temple spire. Calm and steady, it gives the venue its shape at night
//   practical      every real lamp you could touch: street lamps, jhummars, lanterns, lit windows, door lamps, the
//                  stalls' tube lights and bulbs
//   festive        decoration: bulb strings, fairy lights, bulb curtains, LED ribbons
//   show           the stage's lights: washes, moving heads and their beams, the screen's spill
//   flame          real fire: the diyas on doorsteps, round the rangoli, at the shrine and on the DJ's table. Each
//                  flame flickers on its own, and its light is the orange of a wick, not of a bulb
//   garbo          the lamp in the pot, burning as brightly as the night's lit value
//
// Each layer also has its own colour of light (see LIGHT in util.js), so the eye can tell a diya from a bulb from a
// floodlight even at the same brightness.
//
// Lights that fall on the ground (hundreds of pools under hundreds of lamps) aren't separate lights or overlapping
// transparent quads: each layer's pools are painted once into a small light map for the ground, and one shader adds
// the layers together at their current levels. That keeps a venue with every lamp lit to a single ground draw.

import * as THREE from 'three';
import { col, TAU } from './util.js';

export const LAYERS = ['ambient', 'key', 'architectural', 'practical', 'festive', 'show', 'flame', 'garbo'];

// The levels each state of the night asks for. Paused, the venue rests on its architecture and lamps; playing, the
// show comes up over it; in an aarti everything electric falls back and the flames carry the light.
const CUES = {
  paused: { ambient: 1, key: 0.75, architectural: 1, practical: 1, festive: 0.7, show: 0.2, flame: 1, garbo: 1 },
  playing: { ambient: 1, key: 1, architectural: 0.85, practical: 1, festive: 1, show: 1, flame: 1, garbo: 1 },
  aarti: { ambient: 0.55, key: 0.22, architectural: 0.45, practical: 0.5, festive: 0.28, show: 0.06, flame: 1.4, garbo: 1.25 }
};

export class Levels {
  constructor() { this.now = { ...CUES.paused }; this.cue = 'paused'; }
  // on: the song is playing; aarti 0..1; lit: how brightly the garbo burns (0..1)
  update(dt, s) {
    this.cue = (s.aarti || 0) > 0.5 ? 'aarti' : s.on ? 'playing' : 'paused';
    const want = CUES[this.cue], k = s.reduce ? 1 : Math.min(1, dt * 1.8);
    LAYERS.forEach((l) => { this.now[l] += (want[l] - this.now[l]) * k; });
    this.garboLit = s.lit != null ? s.lit : s.on ? 1 : 0.35;
    return this.now;
  }
}

// A flame's flicker: two slow breaths and a quick shiver, never in step with another flame's (ph is its own phase)
export function flicker(t, ph) {
  return 0.8 + 0.11 * Math.sin(t * 7.3 + ph) * Math.sin(t * 3.1 + ph * 1.7) + 0.06 * Math.sin(t * 17 + ph * 3.3) + 0.03 * Math.sin(t * 29 + ph * 5.1);
}

/* ---------- the ground's light maps ---------- */
// rect: the ground plane's size and centre (w along X, d along Z, centred on cx, cz). Pools flagged ground are painted
// into one map per layer; anything that moves (the garbo's pool) stays a live mesh. The flame map flickers in the
// shader, differently from place to place, so no two diyas' light breathes together.
const BAKED = ['key', 'architectural', 'practical', 'festive', 'show', 'flame'];
const UNI = { key: 'Key', architectural: 'Arch', practical: 'Practical', festive: 'Festive', show: 'Show', flame: 'Flame' };
// How light falls off from a pool's centre: soft for a lamp high overhead, tight for a flame or a lamp close to the ground
const FALLOFF = {
  soft: [[0, 1], [0.35, 0.55], [0.7, 0.16], [1, 0]],
  tight: [[0, 1], [0.12, 0.62], [0.35, 0.2], [0.7, 0.05], [1, 0]]
};
export function groundLayers(mesh, rect, pools, TH, res = 1024) {
  const aspect = rect.d / rect.w, cw = aspect > 1 ? Math.max(64, Math.round(res / aspect)) : res, ch = aspect > 1 ? res : Math.max(64, Math.round(res * aspect));
  const maps = {}, canvases = {};
  BAKED.forEach((l) => {
    const c = document.createElement('canvas'); c.width = cw; c.height = ch; canvases[l] = c;
    // Linear data: the painted value is the light's strength, not a colour to be decoded
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; t.flipY = true; maps[l] = t;
  });
  function paint(theme) {
    BAKED.forEach((l) => { const g = canvases[l].getContext('2d'); g.globalCompositeOperation = 'source-over'; g.fillStyle = '#000'; g.fillRect(0, 0, cw, ch); });
    pools.forEach((p) => {
      if (!p.ground || !canvases[p.layer]) return;
      const g = canvases[p.layer].getContext('2d');
      const x = (p.x - rect.cx + rect.w / 2) / rect.w * cw, y = (p.z - rect.cz + rect.d / 2) / rect.d * ch;
      const rx = p.rx / rect.w * cw, ry = p.rz / rect.d * ch;
      const c = col(p.theme ? theme.glow : p.hex), a = Math.min(1, p.k * 2.5);
      g.save(); g.globalCompositeOperation = 'lighter'; g.translate(x, y); g.scale(Math.max(0.5, rx), Math.max(0.5, ry));
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1), rgb = `${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)}`;
      (FALLOFF[p.falloff] || FALLOFF.soft).forEach(([u, k]) => gr.addColorStop(u, `rgba(${rgb},${a * k})`));
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, TAU); g.fill(); g.restore();
    });
    BAKED.forEach((l) => (maps[l].needsUpdate = true));
  }
  paint(TH);
  // The ground's own material adds the layers to its light: albedo × (each map × its level). The gain sets how much
  // light the ground takes from them: enough to read every pool, low enough that the ground stays the night's floor
  // and not a lit stage under the people.
  const uniforms = { gain: { value: 5.8 }, uT: { value: 0 } };
  BAKED.forEach((l) => { uniforms['lv' + UNI[l]] = { value: 1 }; uniforms['m' + UNI[l]] = { value: maps[l] }; });
  const sum = BAKED.map((l) => `texture2D(m${UNI[l]}, vLayerUv).rgb * lv${UNI[l]}${l === 'flame' ? ' * flameFlicker' : ''}`).join(' + ');
  const mat = mesh.material;
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vLayerUv;').replace('#include <uv_vertex>', '#include <uv_vertex>\nvLayerUv = uv;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec2 vLayerUv;\nuniform sampler2D ${BAKED.map((l) => 'm' + UNI[l]).join(', ')};\nuniform float ${BAKED.map((l) => 'lv' + UNI[l]).join(', ')}, gain, uT;`)
      .replace('#include <aomap_fragment>', `float flameFlicker = 0.8 + 0.12 * sin(uT * 7.3 + vLayerUv.x * 331.0 + vLayerUv.y * 197.0) * sin(uT * 3.1 + vLayerUv.y * 263.0) + 0.06 * sin(uT * 17.0 + vLayerUv.x * 157.0);\nreflectedLight.indirectDiffuse += diffuseColor.rgb * gain * (${sum});\n#include <aomap_fragment>`);
  };
  mat.customProgramCacheKey = () => 'ground-layers-2';
  mat.needsUpdate = true;
  return {
    set(lv, t) { BAKED.forEach((l) => { uniforms['lv' + UNI[l]].value = lv[l]; }); uniforms.uT.value = t || 0; },
    repaint: paint,
    canvases, uniforms
  };
}
