// Layered lighting. Every light in a venue belongs to one layer, and each layer has its own level, eased towards the
// level the night calls for (paused, playing, or an aarti), so a whole kind of light rises or falls together:
//
//   ambient    the sky's bounce and the moon: the night itself
//   key        the big lights that model the venue and throw its shadows (floodlights, the roof's key light)
//   practical  every real lamp: street lamps, jhummars, lanterns, lit windows, the lamps on the towers
//   festive    decoration: bulb strings, fairy lights, bulb curtains, LED ribbons
//   show       the stage's lights: washes, moving heads and their beams, the screen's spill
//   garbo      the lamp in the pot, flickering
//
// Lights that fall on the ground (hundreds of pools under hundreds of lamps) aren't separate lights or overlapping
// transparent quads: each layer's pools are painted once into a small light map for the ground, and one shader adds
// the layers together at their current levels. That keeps a venue with every lamp lit to a single ground draw.

import * as THREE from 'three';
import { col, TAU } from './util.js';

export const LAYERS = ['ambient', 'key', 'practical', 'festive', 'show', 'garbo'];

// The levels each state of the night asks for
const CUES = {
  paused: { ambient: 1, key: 0.8, practical: 1, festive: 0.75, show: 0.25, garbo: 1 },
  playing: { ambient: 1, key: 1, practical: 1, festive: 1, show: 1, garbo: 1 },
  aarti: { ambient: 0.6, key: 0.3, practical: 0.55, festive: 0.3, show: 0.08, garbo: 1.25 }
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

/* ---------- the ground's light maps ---------- */
// rect: the ground plane's size and centre (w along X, d along Z, centred on cx, cz). Pools flagged ground are painted
// into one map per layer (key, practical, festive, show); anything that moves (the garbo's pool) stays a live mesh.
const BAKED = ['key', 'practical', 'festive', 'show'];
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
      gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(0.35, `rgba(${rgb},${a * 0.55})`); gr.addColorStop(0.7, `rgba(${rgb},${a * 0.16})`); gr.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, TAU); g.fill(); g.restore();
    });
    BAKED.forEach((l) => (maps[l].needsUpdate = true));
  }
  paint(TH);
  // The ground's own material adds the layers to its light: albedo × (each map × its level)
  const uniforms = { lvKey: { value: 1 }, lvPractical: { value: 1 }, lvFestive: { value: 1 }, lvShow: { value: 1 }, gain: { value: 8 }, mKey: { value: maps.key }, mPractical: { value: maps.practical }, mFestive: { value: maps.festive }, mShow: { value: maps.show } };
  const mat = mesh.material;
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vLayerUv;').replace('#include <uv_vertex>', '#include <uv_vertex>\nvLayerUv = uv;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vLayerUv;\nuniform sampler2D mKey, mPractical, mFestive, mShow;\nuniform float lvKey, lvPractical, lvFestive, lvShow, gain;')
      .replace('#include <aomap_fragment>', 'reflectedLight.indirectDiffuse += diffuseColor.rgb * gain * (texture2D(mKey, vLayerUv).rgb * lvKey + texture2D(mPractical, vLayerUv).rgb * lvPractical + texture2D(mFestive, vLayerUv).rgb * lvFestive + texture2D(mShow, vLayerUv).rgb * lvShow);\n#include <aomap_fragment>');
  };
  mat.customProgramCacheKey = () => 'ground-layers';
  mat.needsUpdate = true;
  return {
    set(lv) { uniforms.lvKey.value = lv.key; uniforms.lvPractical.value = lv.practical; uniforms.lvFestive.value = lv.festive; uniforms.lvShow.value = lv.show; },
    repaint: paint,
    canvases, uniforms
  };
}
