// The floors, the largest thing in every picture. Each is a tileable surface (colour and a bump map drawn from the same
// marks, so pebbles stand up and grout sits down), and a large painted layer that doesn't repeat (the ground's
// "decal": what the night has done to this floor), blended into the ground's own shader so it takes the lamps' light
// like the rest of the ground (see groundLayers in lighting.js).
//
//   outdoors  beaten earth: dust and pebbles, cracks and scuffs; round the garbo a lime circle and marigold petals, and
//             each dance circle's ring trodden pale and smooth where the dancers go round
//   stadium   a honey-oak hall floor: planks with grain, knots and hairline gaps under a satin varnish; a printed
//             vinyl mandala laid under the garbo for the night
//   sheri     kota stone slabs laid in a running bond, grout, chips and stains; a big powder rangoli round the garbo

import * as THREE from 'three';
import { TAU, seeded } from './util.js';

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
// Draw something so it wraps across a tile's edges, so the tile repeats without a seam
function wrap(w, h, x, y, r, fn) {
  for (const ox of [0, -w, w]) for (const oy of [0, -h, h]) {
    if (ox && (x + ox < -r || x + ox > w + r)) continue;
    if (oy && (y + oy < -r || y + oy > h + r)) continue;
    fn(x + ox, y + oy);
  }
}
// A bump (height) canvas into a tangent-space normal map
function normalMap(hc, strength) {
  const w = hc.width, h = hc.height, src = hc.getContext('2d').getImageData(0, 0, w, h).data, out = canvas(w, h), og = out.getContext('2d'), id = og.createImageData(w, h), d = id.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength, l = Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    d[i] = (-dx / l * 0.5 + 0.5) * 255; d[i + 1] = (dy / l * 0.5 + 0.5) * 255; d[i + 2] = (1 / l * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  og.putImageData(id, 0, 0);
  return out;
}
function tex(c, repeat, linear) {
  const t = new THREE.CanvasTexture(c); t.colorSpace = linear ? THREE.NoColorSpace : THREE.SRGBColorSpace; t.anisotropy = 8;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]);
  return t;
}

/* ---------- beaten earth ---------- */
function earth(res) {
  const r = seeded(41), c = canvas(res, res), hc = canvas(res, res), g = c.getContext('2d'), hg = hc.getContext('2d'), s = res / 1024;
  g.fillStyle = '#4a3624'; g.fillRect(0, 0, res, res); hg.fillStyle = '#808080'; hg.fillRect(0, 0, res, res);
  // Broad patches: packed darker soil, dusty paler soil
  for (let i = 0; i < 70; i++) { const x = r() * res, y = r() * res, rr = (40 + r() * 140) * s, pale = r() < 0.5; wrap(res, res, x, y, rr, (px, py) => { const gr = g.createRadialGradient(px, py, 0, px, py, rr); gr.addColorStop(0, pale ? 'rgba(120,92,64,.16)' : 'rgba(20,12,6,.18)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(px - rr, py - rr, rr * 2, rr * 2); }); }
  // Grain: thousands of flecks
  for (let i = 0; i < 26000; i++) { const x = r() * res, y = r() * res, sz = (0.6 + r() * 1.8) * s, l = r(); g.fillStyle = l < 0.45 ? `rgba(170,135,100,${0.04 + r() * 0.07})` : l < 0.9 ? `rgba(0,0,0,${0.08 + r() * 0.14})` : `rgba(120,112,104,${0.06 + r() * 0.08})`; g.fillRect(x, y, sz, sz); hg.fillStyle = l < 0.45 ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.12)'; hg.fillRect(x, y, sz, sz); }
  // Pebbles, each with its shadow
  for (let i = 0; i < 260; i++) { const x = r() * res, y = r() * res, rx = (1.5 + r() * 3.5) * s, ry = rx * (0.6 + r() * 0.4), a = r() * TAU, tone = 58 + r() * 34;
    wrap(res, res, x, y, rx * 2, (px, py) => {
      g.fillStyle = 'rgba(0,0,0,.35)'; g.beginPath(); g.ellipse(px + rx * 0.35, py + rx * 0.35, rx, ry, a, 0, TAU); g.fill();
      g.fillStyle = `rgb(${tone},${tone * 0.86},${tone * 0.72})`; g.beginPath(); g.ellipse(px, py, rx, ry, a, 0, TAU); g.fill();
      g.fillStyle = 'rgba(255,240,220,.08)'; g.beginPath(); g.ellipse(px - rx * 0.3, py - ry * 0.3, rx * 0.4, ry * 0.35, a, 0, TAU); g.fill();
      const hgr = hg.createRadialGradient(px, py, 0, px, py, rx); hgr.addColorStop(0, '#fff'); hgr.addColorStop(1, 'rgba(128,128,128,0)'); hg.fillStyle = hgr; hg.beginPath(); hg.ellipse(px, py, rx, ry, a, 0, TAU); hg.fill();
    }); }
  // Hairline cracks where it has dried
  g.lineCap = hg.lineCap = 'round';
  for (let i = 0; i < 40; i++) { let x = r() * res, y = r() * res, a = r() * TAU; const n = 6 + Math.floor(r() * 10);
    g.strokeStyle = 'rgba(8,4,2,.5)'; g.lineWidth = (0.8 + r()) * s; hg.strokeStyle = 'rgba(0,0,0,.5)'; hg.lineWidth = 1.6 * s;
    g.beginPath(); g.moveTo(x, y); hg.beginPath(); hg.moveTo(x, y);
    for (let k = 0; k < n; k++) { a += (r() - 0.5) * 1.2; x += Math.cos(a) * 12 * s; y += Math.sin(a) * 12 * s; g.lineTo(x, y); hg.lineTo(x, y); }
    g.stroke(); hg.stroke(); }
  // Scuffs: shoe marks swept in the dust
  for (let i = 0; i < 160; i++) { const x = r() * res, y = r() * res, a = r() * TAU; wrap(res, res, x, y, 20 * s, (px, py) => { g.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.07})`; g.beginPath(); g.ellipse(px, py, (8 + r() * 10) * s, (3 + r() * 3) * s, a, 0, TAU); g.fill(); }); }
  return { c, n: normalMap(hc, 3.2) };
}

/* ---------- hardwood planks ---------- */
function planks(res) {
  const r = seeded(17), c = canvas(res, res), hc = canvas(res, res), g = c.getContext('2d'), hg = hc.getContext('2d'), cols = 8, pw = res / cols, s = res / 1024;
  hg.fillStyle = '#9a9a9a'; hg.fillRect(0, 0, res, res);
  for (let k = 0; k < cols; k++) {
    let y = -r() * res;
    while (y < res) {
      const len = res * (0.35 + r() * 0.5), tone = r(), base = [150 + tone * 40, 100 + tone * 30, 58 + tone * 18].map(Math.round), x0 = k * pw;
      const seg = (yy, hh) => {
        g.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`; g.fillRect(x0, yy, pw, hh);
        // Grain: long wavy streaks, lighter and darker, and now and then a knot
        for (let q = 0; q < 14; q++) { const gx = x0 + r() * pw, ph = r() * TAU, dark = r() < 0.6; g.strokeStyle = dark ? `rgba(60,32,12,${0.1 + r() * 0.15})` : `rgba(255,220,170,${0.05 + r() * 0.08})`; g.lineWidth = (0.6 + r() * 1.4) * s; g.beginPath(); for (let v = 0; v <= hh; v += 8 * s) g.lineTo(gx + Math.sin(v / (40 * s) + ph) * 2.5 * s, yy + v); g.stroke(); }
        if (r() < 0.18) { const kx = x0 + pw * (0.3 + r() * 0.4), ky = yy + hh * r(); g.fillStyle = 'rgba(70,36,14,.55)'; g.beginPath(); g.ellipse(kx, ky, 5 * s, 8 * s, 0, 0, TAU); g.fill(); g.strokeStyle = 'rgba(70,36,14,.3)'; g.lineWidth = 1 * s; g.beginPath(); g.ellipse(kx, ky, 9 * s, 16 * s, 0, 0, TAU); g.stroke(); }
        // Each plank a touch different in its sheen
        g.fillStyle = `rgba(0,0,0,${r() * 0.08})`; g.fillRect(x0, yy, pw, hh);
      };
      // (a plank running off the bottom of the tile continues at the top, so the tile repeats)
      if (y < 0) { seg(0, y + len); seg(res + y, -y); } else if (y + len > res) { seg(y, res - y); seg(0, y + len - res); } else seg(y, len);
      const ey = ((y + len) % res + res) % res;
      g.fillStyle = 'rgba(20,10,4,.75)'; g.fillRect(x0, ey - 1.2 * s, pw, 2.4 * s); hg.fillStyle = '#000'; hg.fillRect(x0, ey - 1.5 * s, pw, 3 * s);
      y += len;
    }
    g.fillStyle = 'rgba(20,10,4,.8)'; g.fillRect(k * pw - 1.2 * s, 0, 2.4 * s, res); hg.fillStyle = '#000'; hg.fillRect(k * pw - 1.5 * s, 0, 3 * s, res);
  }
  // The varnish's wear: a faint scuffing in the grain direction
  for (let i = 0; i < 600; i++) { g.fillStyle = `rgba(255,240,220,${r() * 0.04})`; g.fillRect(r() * res, r() * res, 1 * s, (6 + r() * 20) * s); }
  return { c, n: normalMap(hc, 2) };
}

/* ---------- kota stone slabs ---------- */
function slabs(res) {
  const r = seeded(29), c = canvas(res, res), hc = canvas(res, res), g = c.getContext('2d'), hg = hc.getContext('2d'), rows = 4, cols = 4, sh = res / rows, sw = res / cols, s = res / 1024;
  g.fillStyle = '#1c1c1a'; g.fillRect(0, 0, res, res); hg.fillStyle = '#000'; hg.fillRect(0, 0, res, res);
  const tones = [[92, 96, 86], [104, 104, 90], [86, 92, 88], [112, 106, 92], [96, 100, 94]];
  for (let row = 0; row < rows; row++) for (let k = -1; k <= cols; k++) {
    const x = k * sw + (row % 2) * sw / 2, y = row * sh, t = tones[Math.floor(r() * tones.length)], j = 2.5 * s;
    const slab = (ox) => {
      const x0 = x + ox + j, y0 = y + j, w = sw - j * 2, h = sh - j * 2;
      const gr = g.createLinearGradient(x0, y0, x0 + w, y0 + h); gr.addColorStop(0, `rgb(${t[0] + 8},${t[1] + 8},${t[2] + 6})`); gr.addColorStop(1, `rgb(${t[0] - 8},${t[1] - 8},${t[2] - 8})`);
      g.fillStyle = gr; g.fillRect(x0, y0, w, h);
      hg.fillStyle = '#c8c8c8'; hg.fillRect(x0, y0, w, h);
      // Kota's faint layering, stains and the odd chipped corner
      for (let q = 0; q < 9; q++) { g.strokeStyle = `rgba(${r() < 0.5 ? '255,250,235' : '20,24,18'},${0.03 + r() * 0.05})`; g.lineWidth = (2 + r() * 8) * s; g.beginPath(); const yy = y0 + r() * h; g.moveTo(x0, yy); g.bezierCurveTo(x0 + w * 0.3, yy + (r() - 0.5) * 30 * s, x0 + w * 0.7, yy + (r() - 0.5) * 30 * s, x0 + w, yy + (r() - 0.5) * 20 * s); g.stroke(); }
      for (let q = 0; q < 3; q++) { const gr2 = g.createRadialGradient(x0 + r() * w, y0 + r() * h, 0, x0 + r() * w, y0 + r() * h, (20 + r() * 50) * s); gr2.addColorStop(0, 'rgba(30,24,16,.18)'); gr2.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr2; g.fillRect(x0, y0, w, h); }
      if (r() < 0.35) { const cx = r() < 0.5 ? x0 : x0 + w, cy = r() < 0.5 ? y0 : y0 + h, cr = (6 + r() * 10) * s; g.fillStyle = '#1c1c1a'; g.beginPath(); g.arc(cx, cy, cr, 0, TAU); g.fill(); hg.fillStyle = '#000'; hg.beginPath(); hg.arc(cx, cy, cr, 0, TAU); hg.fill(); }
      for (let q = 0; q < 900; q++) { g.fillStyle = `rgba(${r() < 0.5 ? '255,255,245' : '0,0,0'},${r() * 0.06})`; g.fillRect(x0 + r() * w, y0 + r() * h, 1.5 * s, 1.5 * s); }
    };
    slab(0); if (x + sw > res) slab(-res); if (x < 0) slab(res);
  }
  return { c, n: normalMap(hc, 4) };
}

/* ---------- the painted layers ---------- */
// data: the 2D layout's circles ({ x, z, R }) for the trodden rings
function earthDecal(size, circles, r) {
  const res = 2048, c = canvas(res, res), g = c.getContext('2d'), k = res / size.w, X = (x) => (x - (size.cx - size.w / 2)) * k, Z = (z) => (z - (size.cz - size.d / 2)) * k;
  // The dancing ground: dusty and paler where thousands of feet have beaten it, fading out towards the edges
  const dust = g.createRadialGradient(X(0), Z(14), 4 * k, X(0), Z(14), 30 * k);
  dust.addColorStop(0, 'rgba(142,112,82,.42)'); dust.addColorStop(0.6, 'rgba(142,112,82,.26)'); dust.addColorStop(1, 'rgba(142,112,82,0)');
  g.fillStyle = dust; g.fillRect(0, 0, res, res);
  // Where each circle dances, the ground trodden pale and smooth
  (circles || []).forEach((cl) => {
    const cx = X(cl.x), cz = Z(cl.z), R = cl.R * k, bw = Math.max(0.5, Math.min(1.2, cl.R * 0.22)) * k;
    const gr = g.createRadialGradient(cx, cz, Math.max(0, R - bw * 1.6), cx, cz, R + bw * 1.6);
    gr.addColorStop(0, 'rgba(150,118,84,0)'); gr.addColorStop(0.5, 'rgba(150,118,84,.24)'); gr.addColorStop(1, 'rgba(150,118,84,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cz, R + bw * 1.6, 0, TAU); g.fill();
  });
  // Round the garbo: a lime circle, dotted, and marigold petals
  const gx = X(0), gz = Z(0);
  g.strokeStyle = 'rgba(214,206,190,.38)'; g.lineWidth = 0.06 * k; g.beginPath(); g.arc(gx, gz, 2.7 * k, 0, TAU); g.stroke();
  g.setLineDash([0.06 * k, 0.18 * k]); g.lineWidth = 0.05 * k; g.beginPath(); g.arc(gx, gz, 3.05 * k, 0, TAU); g.stroke(); g.setLineDash([]);
  for (let i = 0; i < 36; i++) { const a = i / 36 * TAU; g.fillStyle = 'rgba(214,206,190,.36)'; g.beginPath(); g.ellipse(gx + Math.cos(a) * 2.88 * k, gz + Math.sin(a) * 2.88 * k, 0.1 * k, 0.04 * k, a, 0, TAU); g.fill(); }
  petals(g, gx, gz, 2.2 * k, 5.5 * k, 900, k, r);
  return c;
}
function petals(g, cx, cz, r0, r1, n, k, r) {
  for (let i = 0; i < n; i++) { const a = r() * TAU, d = r0 + Math.pow(r(), 1.6) * (r1 - r0); g.fillStyle = r() < 0.6 ? `rgba(240,${120 + Math.floor(r() * 40)},30,.85)` : 'rgba(246,196,60,.85)'; g.beginPath(); g.ellipse(cx + Math.cos(a) * d, cz + Math.sin(a) * d, 0.035 * k, 0.022 * k, r() * TAU, 0, TAU); g.fill(); }
}
function vinylDecal(size, TH) {
  const res = 2048, c = canvas(res, res), g = c.getContext('2d'), k = res / size.w, cx = (0 - (size.cx - size.w / 2)) * k, cz = (0 - (size.cz - size.d / 2)) * k, R = 6 * k;
  // A printed vinyl medallion laid under the garbo: a deep maroon ground with fine gold line work, a ring of lotus
  // petals in saffron, bands of dots and a beaded border, like a block print
  g.fillStyle = 'rgba(80,14,24,.82)'; g.beginPath(); g.arc(cx, cz, R, 0, TAU); g.fill();
  const gold = 'rgba(214,166,74,.9)', line = (rr, w) => { g.strokeStyle = gold; g.lineWidth = w * k; g.beginPath(); g.arc(cx, cz, rr * R, 0, TAU); g.stroke(); };
  line(1, 0.05); line(0.965, 0.02); line(0.82, 0.02); line(0.58, 0.03); line(0.4, 0.02);
  // Lotus petals between 0.58 and 0.8, each outlined in gold with a saffron heart
  for (let i = 0; i < 20; i++) {
    const a = i / 20 * TAU, a0 = a - TAU / 44, a1 = a + TAU / 44, r0 = 0.6 * R, r1 = 0.8 * R;
    g.beginPath(); g.moveTo(cx + Math.cos(a0) * r0, cz + Math.sin(a0) * r0);
    g.quadraticCurveTo(cx + Math.cos(a0) * r1 * 0.9, cz + Math.sin(a0) * r1 * 0.9, cx + Math.cos(a) * r1, cz + Math.sin(a) * r1);
    g.quadraticCurveTo(cx + Math.cos(a1) * r1 * 0.9, cz + Math.sin(a1) * r1 * 0.9, cx + Math.cos(a1) * r0, cz + Math.sin(a1) * r0); g.closePath();
    g.fillStyle = 'rgba(214,112,40,.55)'; g.fill(); g.strokeStyle = gold; g.lineWidth = 0.02 * k; g.stroke();
    g.fillStyle = 'rgba(243,230,208,.7)'; g.beginPath(); g.arc(cx + Math.cos(a) * 0.69 * R, cz + Math.sin(a) * 0.69 * R, 0.06 * k, 0, TAU); g.fill();
  }
  // Bands of dots, and a beaded border
  [[0.49, 40, 'rgba(243,230,208,.75)', 0.04], [0.885, 72, 'rgba(214,166,74,.85)', 0.05], [0.94, 96, 'rgba(47,143,91,.7)', 0.03]].forEach(([f, n, col, rr]) => {
    for (let i = 0; i < n; i++) { const a = i / n * TAU; g.fillStyle = col; g.beginPath(); g.arc(cx + Math.cos(a) * f * R, cz + Math.sin(a) * f * R, rr * k, 0, TAU); g.fill(); }
  });
  // Scuffs where the dancing has worn the print
  const r = seeded(9);
  for (let i = 0; i < 500; i++) { const a = r() * TAU, d = R * (0.42 + r() * 0.58); g.fillStyle = 'rgba(0,0,0,.1)'; g.beginPath(); g.ellipse(cx + Math.cos(a) * d, cz + Math.sin(a) * d, 0.12 * k, 0.04 * k, a + Math.PI / 2, 0, TAU); g.fill(); }
  return c;
}
function rangoliDecal(size, r) {
  const res = 2048, c = canvas(res, res), g = c.getContext('2d'), k = res / size.w, cx = (0 - (size.cx - size.w / 2)) * k, cz = (0 - (size.cz - size.d / 2)) * k;
  // A powder rangoli round the garbo's own, as the society lays it for the night: a band of coloured segments, a ring of
  // lotus petals outlined in white, a border of dots; the powder grainy, a little scattered by dancing feet
  const P = ['rgba(194,24,91,.78)', 'rgba(240,138,36,.8)', 'rgba(246,195,66,.8)', 'rgba(47,143,91,.78)', 'rgba(59,76,192,.76)'], chalk = 'rgba(236,230,214,.45)';
  for (let i = 0; i < 30; i++) { const a0 = i / 30 * TAU, a1 = (i + 1) / 30 * TAU; g.fillStyle = P[i % 5]; g.beginPath(); g.arc(cx, cz, 2.55 * k, a0, a1); g.arc(cx, cz, 2.2 * k, a1, a0, true); g.closePath(); g.fill(); }
  g.strokeStyle = chalk; g.lineWidth = 0.025 * k; [2.2, 2.55].forEach((rr) => { g.beginPath(); g.arc(cx, cz, rr * k, 0, TAU); g.stroke(); });
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * TAU, a0 = a - TAU / 40, a1 = a + TAU / 40, r0 = 2.6 * k, r1 = 3.2 * k;
    g.beginPath(); g.moveTo(cx + Math.cos(a0) * r0, cz + Math.sin(a0) * r0);
    g.quadraticCurveTo(cx + Math.cos(a0) * r1 * 0.95, cz + Math.sin(a0) * r1 * 0.95, cx + Math.cos(a) * r1, cz + Math.sin(a) * r1);
    g.quadraticCurveTo(cx + Math.cos(a1) * r1 * 0.95, cz + Math.sin(a1) * r1 * 0.95, cx + Math.cos(a1) * r0, cz + Math.sin(a1) * r0); g.closePath();
    g.fillStyle = P[(i * 2) % 5]; g.fill(); g.strokeStyle = chalk; g.lineWidth = 0.02 * k; g.stroke();
    g.fillStyle = 'rgba(236,230,214,.55)'; g.beginPath(); g.arc(cx + Math.cos(a) * 2.88 * k, cz + Math.sin(a) * 2.88 * k, 0.05 * k, 0, TAU); g.fill();
  }
  for (let i = 0; i < 54; i++) { const a = i / 54 * TAU; g.fillStyle = i % 2 ? chalk : P[2]; g.beginPath(); g.arc(cx + Math.cos(a) * 3.36 * k, cz + Math.sin(a) * 3.36 * k, 0.045 * k, 0, TAU); g.fill(); }
  // Powder grain over what's drawn, and a little scattered by feet
  g.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 60000; i++) { g.fillStyle = r() < 0.5 ? 'rgba(0,0,0,.14)' : 'rgba(255,255,255,.1)'; g.fillRect(r() * res, r() * res, 2, 2); }
  g.globalCompositeOperation = 'source-over';
  for (let i = 0; i < 900; i++) { const a = r() * TAU, d = (2.2 + r() * 1.6) * k; g.fillStyle = P[Math.floor(r() * 5)].replace(/[\d.]+\)$/, '.35)'); g.fillRect(cx + Math.cos(a) * d, cz + Math.sin(a) * d, 2, 2); }
  petals(g, cx, cz, 3.5 * k, 4.4 * k, 120, k, r);
  return c;
}

// The floor for a venue: its material options, the tile repeat, and its painted layer (canvas and world rectangle)
export function floorFor(id, TH, circles, tier) {
  const res = tier.name === 'phone' ? 512 : 1024, r = seeded(id.length * 7 + 3);
  if (id === 'outdoors') {
    const t = earth(res), decalRect = { cx: 0, cz: 12, w: 64, d: 64 };
    return { map: tex(t.c, [80, 80]), normalMap: tex(t.n, [80, 80], true), normalScale: 0.9, roughness: 0.96, decal: earthDecal(decalRect, circles, r), decalRect };
  }
  if (id === 'stadium') {
    const t = planks(res), decalRect = { cx: 0, cz: 0, w: 16, d: 16 };
    return { map: tex(t.c, [53, 77]), normalMap: tex(t.n, [53, 77], true), normalScale: 0.5, roughness: 0.58, decal: vinylDecal(decalRect, TH), decalRect };
  }
  const t = slabs(res), decalRect = { cx: 0, cz: 0, w: 14.4, d: 14.4 };
  return { map: tex(t.c, [6, 52]), normalMap: tex(t.n, [6, 52], true), normalScale: 0.8, roughness: 0.78, decal: rangoliDecal(decalRect, r), decalRect };
}
