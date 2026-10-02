/* Pandora, as the 2D scene needs it: where the cameras stand, the floor people dance on, the band's platform, the DJ,
   where people sit and rest, and how it sounds. The 3D venue (venue3d/src/venues/pandora.js) is built to the same plan:
   an obsidian floor of radius `floor`; round it, stone terraces on sixteen straight sides, each step's front a0 + k ×
   tread from the centre and rise higher than the last; the stage side gives its first three steps to the band's
   platform, the far diagonals keep two, and two sides have a stair through them. */
(function () {
  'use strict';
  var PA = { floor: 19, sides: 16, a0: 21.8, tread: 1.3, rise: 0.45, tiers: 5, top: 31.5, stageSide: 8, low: [6, 10], lowTiers: 2, stairs: [5, 11] };
  var HF = Math.tan(Math.PI / PA.sides);
  function side(j) { var p = -Math.PI / 2 + j * 2 * Math.PI / PA.sides; return { n: [Math.cos(p), Math.sin(p)], u: [-Math.sin(p), Math.cos(p)] }; }
  function at(j, a, t) { var s = side(j); return [s.n[0] * a + s.u[0] * t, s.n[1] * a + s.u[1] * t]; }
  function tiersOf(j) { return PA.low.indexOf(j) >= 0 ? PA.lowTiers : PA.tiers; }
  function firstTier(j) { return j === PA.stageSide ? 3 : 0; }
  var NEAR = [15, 0, 1];

  (window.GarbaVenueSpecs = window.GarbaVenueSpecs || {}).pandora = {
    label: 'Pandora',
    // An open basin ringed with stone steps: short echoes off the terraces round you and the rock behind the band,
    // nothing overhead
    sound: {
      desc: 'An open basin of stone terraces under another world’s sky. Short echoes off the steps, nothing overhead.',
      trim: 1.25, dry: 0.95, wet: 0.5, clappers: 45, spread: 0.013, distance: [2.2, 9], far: [24, 52],
      tone: { lowShelf: [150, -2], mid: [2200, 0.8, 1.2], highShelf: [6000, -2.5] },
      ir: { length: 2.4, predelay: 0.006, taps: [[0.006, 0.36, 8500], [0.062, 0.24, 4200], [0.12, 0.17, 3400], [0.2, 0.1, 2600], [0.36, 0.05, 1800]], tail: { level: 0.06, rt: [1.3, 1.0, 0.55] } },
      room: { level: 0.16, cut: 1300 }, night: 0.8, roomTone: 0
    },
    plan: PA,
    cams: { circle: [0, 4.4, -12.5], far: [0, 2.95, -26.55], stage: [0, 3.0, 13.8] },
    frames: { far: { hor: 0.42, lens: 0.78 } },
    // The band sits on a stone platform set into the far steps (no screen here)
    stage: { x0: -4.6, x1: 4.6, z: 20.4, h: 0.9, depth: 5.3, band: 'sheri', bandFront: 21.3, crowd: 5.2, fillX: 2.8 },
    dj: { x: 8.6, z: 19.6 },
    rings: [5.6, 9.4, 13.2], pairs: 6, walkers: 24, couples: 3, kids: 12,
    garbo: 'bare',
    floorR: PA.floor,
    ground: function (x, z, r) { return Math.hypot(x, z) < PA.floor - 1.2 - r; },
    // You can walk the whole floor, and up to the band's steps
    walk: function (x, z) { return Math.hypot(x, z) < PA.floor - 0.5 || (Math.abs(x) < 4.2 && z > 0 && z < 19.8); },
    bounds: [-17, 17, -17, 17], home: { x: 0, z: -16 },
    fill: { ring: 7.7, groups: [[-7.6, -14.6, 1.3], [7.4, -14.4, 1.2], [0.3, -16.2, 0.55, 2]] },
    follow: [6.4, 3.5], stageLine: [15, 5],
    drone: { lo: 9, hi: 12.5, k: 4, back: 15, dir: [0.25, 0.97] }, haze: 0.06, hazeFade: 0.6,
    echo: [[-21, 1.5, 'listener'], [21, 1.5, 'listener'], [0, 3, 30], [-36, 8, 34], [36, 8, 40]],
    aerial: { ground: '#1d1a24', floor: '#0d0b12' },
    sky2d: { stops: [[0, '#05061a'], [0.45, '#1c1440'], [0.8, '#3a2466'], [0.95, '#b8507a'], [1, '#f08a5a']], stars: 200, planet: { x: 0.62, y: 0.4, r: 0.085 }, ridge: '#2a1f3a', ground: ['#1a1622', '#09080d'] },
    // People sitting out on the steps round the floor, on cushions (the 3D venue puts one under each)
    seats: function (h) {
      var out = [];
      for (var j = 0; j < PA.sides; j++) {
        if (NEAR.indexOf(j) >= 0) continue;
        for (var k = firstTier(j); k < tiersOf(j); k++) {
          var a = PA.a0 + k * PA.tread + 0.8, y = (k + 1) * PA.rise, hl = a * HF, stair = PA.stairs.indexOf(j) >= 0;
          for (var t = -hl + 0.6; t < hl - 0.5; t += 0.72) {
            if (stair && Math.abs(t) < 2.6) continue;
            if (h.rnd() > (k === 4 ? 0.22 : 0.42)) continue;
            var p = at(j, a, t + (h.rnd() - 0.5) * 0.1);
            out.push({ kind: 'terrace', x: p[0], y: y, z: p[1], who: h.person({ sitting: true, older: k < 2 && h.rnd() < 0.5, rest: { y: 0.45 } }) });
          }
        }
      }
      return out;
    },
    // From far off you sit on the fourth step facing the band, the two of you on the step below, neighbours along the
    // steps either side. Each step leaves its outline in short lengths, so it hides the lower half of whoever sits just
    // beyond it.
    far: function (h) {
      NEAR.forEach(function (j) {
        for (var k = 0; k <= 3; k++) {
          var a0 = PA.a0 + k * PA.tread, a1 = a0 + PA.tread, yk = (k + 1) * PA.rise, h0 = a0 * HF, n = Math.ceil(2 * h0 / 2.4);
          for (var q = 0; q < n; q++) {
            var t0 = -h0 + 2 * h0 * q / n, t1 = -h0 + 2 * h0 * (q + 1) / n, sol = [];
            [[a0, t0], [a0, t1], [a1, t1 * a1 / a0], [a1, t0 * a1 / a0]].forEach(function (c) { var p = at(j, c[0], c[1]); sol.push(p[0], 0, p[1], p[0], yk, p[1]); });
            var mid = at(j, a0, (t0 + t1) / 2);
            h.out.push({ x: mid[0], y: yk, z: mid[1], kind: 'riser', solid: sol, poly: true });
          }
          if (k === 3) continue;
          var as = a0 + 0.85;
          for (var t = -as * HF + 0.4; t < as * HF - 0.3; t += 0.66) {
            if (j === 0 && k === 2 && Math.abs(t) < 0.75) continue;
            var sp = at(j, as, t + (h.rnd() - 0.5) * 0.06);
            if (h.rnd() < (j === 0 && Math.abs(t) < 6 ? 0.82 : 0.6)) h.sitter(sp[0], yk, sp[1], 'bench', null);
          }
        }
      });
      var cz = -(PA.a0 + 2 * PA.tread + 0.85);
      h.sitter(-0.31, 3 * PA.rise, cz, 'bench', 'w'); h.sitter(0.31, 3 * PA.rise, cz, 'bench', 'm');
      h.out.push({ x: -3.6, y: 2 * PA.rise, z: -(PA.a0 + PA.tread + 0.5), kind: 'stand', who: h.person({ stander: true, phone: true, sway: 1 }) });
      h.out.push({ x: 4.2, y: 0, z: -18.2, kind: 'stand', who: h.person({ stander: true, kid: true, h: 1.1, sway: 2 }) });
    },
    // Between songs: a seat on the bottom step, or a spot by the floor's edge
    rest: function (h, d) {
      var r = h.rnd(), j = [2, 3, 4, 12, 13, 14][Math.floor(h.rnd() * 6)], a = PA.a0 + 0.75, p = at(j, a, (h.rnd() - 0.5) * a * HF * 1.6);
      if (r < 0.5) return { x: p[0], z: p[1], y: PA.rise, sit: true };
      var aa = h.rnd() * Math.PI * 2; return { x: Math.cos(aa) * 16.6, z: Math.sin(aa) * 16.6 };
    },
    // Drawn without the 3D venue: the floor and its gold rings, the steps round it, a glow for each crystal
    back2d: function (h) {
      var disc = []; for (var i = 0; i < 48; i++) { var a = i / 48 * Math.PI * 2; disc.push([Math.cos(a) * PA.floor, 0, Math.sin(a) * PA.floor]); }
      h.fillPoly(disc, '#0d0b12');
      h.g.strokeStyle = 'rgba(255,180,90,' + (0.35 + 0.25 * h.bright) + ')'; h.g.lineWidth = 1.2;
      [18.85, 15.2, 11.3, 7.5].forEach(function (rr) { h.groundRing(0, 0, rr, 0, Math.PI * 2, 64); h.g.stroke(); });
      for (var j = 0; j < PA.sides; j++) {
        for (var k = tiersOf(j) - 1; k >= firstTier(j); k--) {
          var a0 = PA.a0 + k * PA.tread, a1 = k === tiersOf(j) - 1 ? PA.top : a0 + PA.tread, y = (k + 1) * PA.rise, p0 = at(j, a0, -a0 * HF), p1 = at(j, a0, a0 * HF), p2 = at(j, a1, a1 * HF), p3 = at(j, a1, -a1 * HF);
          h.fillPoly([[p0[0], y, p0[1]], [p1[0], y, p1[1]], [p2[0], y, p2[1]], [p3[0], y, p3[1]]], '#24202b');
          h.fillPoly([[p0[0], y - PA.rise, p0[1]], [p1[0], y - PA.rise, p1[1]], [p1[0], y, p1[1]], [p0[0], y, p0[1]]], '#15121a');
          h.fillPoly([[p0[0], y - 0.06, p0[1]], [p1[0], y - 0.06, p1[1]], [p1[0], y - 0.03, p1[1]], [p0[0], y - 0.03, p0[1]]], 'rgba(255,176,74,.8)');
        }
        var c = at(j, PA.a0 + 0.2, -(PA.a0 + 0.2) * HF * 0.98), cp = h.P(c[0], 1.6, c[1] * 0.93);
        if (cp) h.glow(cp.x, cp.y, Math.max(1.5, Math.min(9, cp.s * 0.35)), '#ffa245', 0.7 * h.bright + 0.2);
      }
      // the band's platform
      var S = this.stage;
      h.fillPoly([[S.x0, S.h, S.z], [S.x1, S.h, S.z], [S.x1, S.h, S.z + S.depth], [S.x0, S.h, S.z + S.depth]], '#24202b');
      h.fillPoly([[S.x0, 0, S.z], [S.x1, 0, S.z], [S.x1, S.h, S.z], [S.x0, S.h, S.z]], '#15121a');
    }
  };
})();
