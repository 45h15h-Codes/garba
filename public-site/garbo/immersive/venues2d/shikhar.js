/* Jyot Shikhar, as the 2D scene needs it. An open plaza round one great light sculpture: a tower of perforated
   blackened metal in stacked cones standing in the middle of the dance circle, its light throwing a mandala of dots and
   trishuls across the floor; low pavilions of glass and wood round the plaza, trees between them, floodlights on tall
   masts; the band in the pavilion at the far side. The 3D venue (venue3d/src/venues/shikhar.js) is built from this plan. */
(function () {
  'use strict';
  var K = window.GarbaVenueKit;
  var SH = { floor: 13, tower: { r: 4.0, h: 5.4, plinth: 3.6, plinthH: 0.35 }, plaza: 26, pavilions: [[-20, 10, 0.75], [-22, -6, 1.45], [20, 10, -0.75], [22, -6, -1.45]] };
  var seats = [];
  K.ring(seats, 16.2, [-150, -126, -54, -30, 150], 2.6);
  [-2.4, 0, 2.4].forEach(function (x) { K.sofa(seats, x, -16.4, 0, 2.2, 'a', 'bench'); });
  [-2.6, 2.6].forEach(function (x) { K.sofa(seats, x, -18.2, 0, 2.2, 'b', 'bench'); });
  SH.seats = seats;

  (window.GarbaVenueSpecs = window.GarbaVenueSpecs || {}).shikhar = {
    label: 'Jyot Shikhar',
    // still being finished: View tags it and a board says so the first time you're in it (drop this when it's done)
    soon: true,
    // An open plaza: the metal tower rings a little, the pavilions throw back a short echo
    sound: {
      desc: 'An open plaza round a tower of light. The metal rings a little; the pavilions throw back a short echo.',
      trim: 1.2, dry: 0.92, wet: 0.48, clappers: 44, spread: 0.013, distance: [2.2, 9], far: [18, 40],
      tone: { lowShelf: [150, -1], mid: [2600, 1.2, 1.4], highShelf: [6400, -1.5] },
      ir: { length: 1.6, predelay: 0.006, taps: [[0.009, 0.3, 7800], [0.06, 0.2, 4800], [0.13, 0.12, 3400]], tail: { level: 0.06, rt: [1.0, 0.8, 0.45] } },
      room: { level: 0.12, cut: 1300 }, night: 0.85, roomTone: 0.01
    },
    plan: SH,
    cams: { circle: [0, 4.6, -13.4], far: [0, 2.3, -18.1], stage: [0, 3.0, 15.6] },
    frames: { far: { hor: 0.44, lens: 0.78 }, stage: { hor: 0.47, lens: 1.08 } },
    // The band in the far pavilion, on its raised floor
    stage: { x0: -6.0, x1: 6.0, z: 19.4, h: 0.6, depth: 3.6, band: 'sheri', bandFront: 20.1, crowd: 4.6, fillX: 2.8 },
    dj: { x: 10.4, z: 17.6 },
    rings: [5.6, 9.4], pairs: 6, walkers: 22, couples: 3, kids: 10,
    garbo: 'mast', mast: SH.tower,
    floorR: SH.floor,
    // the drone's view (View → Aerial): high enough to clear the tower's finial
    aerialCam: { r: 29, h: 32 },
    ground: function (x, z, r) { var d = Math.hypot(x, z); return d < SH.floor - 1 - r && d > SH.tower.plinth + 0.8 + r; },
    // You can walk all of it: round the tower, the whole plaza, into the pavilions
    walk: function (x, z) { var d = Math.hypot(x, z); return d > SH.tower.plinth + 0.3 && Math.abs(x) < SH.plaza && z > -SH.plaza && z < 23; },
    heightAt: function (x, z) { var S = this.stage; return x > S.x0 && x < S.x1 && z > S.z && z < S.z + S.depth ? S.h : 0; },
    bounds: [-11, 11, -11, 11], home: { x: 0, z: -11.6 },
    fill: { ring: 8.4, groups: [[-3.6, -10.6, 0.85], [3.5, -10.5, 0.8], [0.3, -11.4, 0.55, 2]] },
    follow: [6.0, 3.4], stageLine: [16.4, 5],
    drone: { lo: 10, hi: 13, k: 3.5, back: 14, dir: [0.25, 0.97] }, haze: 0.18, hazeFade: 1.2,
    echo: [[-22, 3, 'listener'], [22, 3, 'listener'], [0, 4, 24]],
    aerial: { ground: '#2a2826', floor: '#3a3632' },
    sky2d: { stops: [[0, '#04050c'], [0.7, '#10121e'], [1, '#2a2418']], stars: 70, ground: ['#2a2826', '#0e0d0c'] },
    // The plan for the map: the floor's ring, the tower, the pavilions, the plaza's edge
    map: function (out) {
      out.shapes.push({ k: 'ring', x: 0, z: 0, r: SH.floor, s: 'edge' }); out.shapes.push({ k: 'ring', x: 0, z: 0, r: SH.tower.plinth, s: 'post' });
      out.shapes.push({ k: 'poly', pts: [[-SH.plaza, -SH.plaza], [SH.plaza, -SH.plaza], [SH.plaza, 24], [-SH.plaza, 24]], s: 'faint' });
      SH.pavilions.forEach(function (p) { out.shapes.push({ k: 'ring', x: p[0], z: p[1], r: 3.2, s: 'wall' }); });
      seats.forEach(function (sf) { var c0 = Math.cos(sf.ry), s0 = Math.sin(sf.ry), h = sf.len / 2; out.shapes.push({ k: 'line', pts: [[sf.x - c0 * h, sf.z + s0 * h], [sf.x + c0 * h, sf.z - s0 * h]], s: 'step' }); });
    },
    seats: function (h) { return K.seats(h, seats, 0.62); },
    far: function (h) { K.far(h, seats, -16.34); },
    rest: function (h) { return K.rest(h, seats, SH.floor - 0.4); },
    back2d: function (h) {
      K.disc(h, SH.plaza, '#2a2826'); K.disc(h, SH.floor, '#3a3632');
      h.g.strokeStyle = 'rgba(255,200,120,' + (0.4 + 0.3 * h.bright) + ')'; h.g.lineWidth = 1.2;
      [5, 8, 11].forEach(function (rr) { h.groundRing(0, 0, rr, 0, Math.PI * 2, 64); h.g.stroke(); });
      var S = this.stage; h.fillPoly([[S.x0, S.h, S.z], [S.x1, S.h, S.z], [S.x1, S.h, S.z + S.depth], [S.x0, S.h, S.z + S.depth]], '#4a3a2a');
    }
  };
})();
