/* Tideglass Terrace, as the 2D scene needs it. A terrace over the sea at night: a round floor of white marble inlaid
   with a gold mandala, a ring of glowing pool water round it with four crossings; beyond the floor, toward the sea and
   the low moon, the band under carved wooden arches; a wall of waterfalls on the left; white cabanas with sofas round
   the terrace; glass flower sculptures and glowing flora between. The 3D venue (venue3d/src/venues/tideglass.js) is
   built from this plan. */
(function () {
  'use strict';
  var K = window.GarbaVenueKit;
  var TG = { floor: 10.5, pool: [11.2, 13.0], terrace: 25, edgeZ: 22, falls: -22, cabanas: [[-17.5, -9, 0.9], [-19, 3, 1.4], [17.5, -9, -0.9], [19, 3, -1.4], [15, 13, -2.4]] };
  var seats = [];
  // sofas just outside the pool ring (not before the band, the DJ or the near rows), and the near rows from far off
  K.ring(seats, 14.6, [-150, -125, -55, -30, 160, 200], 2.4);
  [-2.4, 0, 2.4].forEach(function (x) { K.sofa(seats, x, -15.0, 0, 2.2, 'a'); });
  [-2.6, 2.6].forEach(function (x) { K.sofa(seats, x, -16.8, 0, 2.2, 'b'); });
  TG.seats = seats;
  function onCrossing(x, z) { var a = Math.atan2(z, x) * 180 / Math.PI; return [90, -90, 0, 180, -180].some(function (d) { return Math.abs(a - d) < 9; }); }

  (window.GarbaVenueSpecs = window.GarbaVenueSpecs || {}).tideglass = {
    label: 'Tideglass Terrace',
    // still being finished: View tags it and a board says so the first time you're in it (drop this when it's done)
    soon: true,
    // Open to the sea: nothing to throw the sound back but the waterfall wall on one side; the surf under everything
    sound: {
      desc: 'A terrace over the moonlit sea. The sound runs out over the water; only the waterfall wall throws a little back.',
      trim: 1.3, dry: 0.98, wet: 0.36, clappers: 32, spread: 0.012, distance: [2, 8], far: [16, 36],
      tone: { lowShelf: [150, -1], mid: [2000, 0.8, 1.0], highShelf: [6000, -2.5] },
      ir: { length: 1.2, predelay: 0.008, taps: [[0.012, 0.22, 6400], [0.08, 0.12, 3600]], tail: { level: 0.04, rt: [0.8, 0.6, 0.35] } },
      room: { level: 0.08, cut: 900 }, night: 0.9, roomTone: 0.02
    },
    plan: TG,
    cams: { circle: [0, 4.0, -10.4], far: [0, 2.2, -16.4], stage: [0, 2.8, 11.6] },
    frames: { far: { hor: 0.46, lens: 0.8 }, stage: { hor: 0.47, lens: 1.08 } },
    // The band on a wooden deck under carved arches, the sea behind them
    stage: { x0: -5.0, x1: 5.0, z: 15.4, h: 0.55, depth: 3.4, band: 'sheri', bandFront: 16.1, crowd: 4.2, fillX: 2.6 },
    dj: { x: 8.6, z: 14.2 },
    rings: [5.2, 8.8], pairs: 4, walkers: 18, couples: 2, kids: 8,
    garbo: 'bare',
    floorR: TG.floor,
    // the drone's view (View → Aerial)
    aerialCam: { r: 26, h: 25, cz: 2 },
    ground: function (x, z, r) { return Math.hypot(x, z) < TG.floor - 0.9 - r; },
    // You can walk all of it: the floor, over the crossings, the terrace round to the cabanas, up to the band's deck
    walk: function (x, z) { var r = Math.hypot(x, z); if (r > TG.pool[0] && r < TG.pool[1] && !onCrossing(x, z)) return false; return r < TG.terrace - 1 && z < TG.edgeZ - 0.5 && x > TG.falls + 1.5; },
    heightAt: function (x, z) { var S = this.stage; return x > S.x0 && x < S.x1 && z > S.z && z < S.z + S.depth ? S.h : 0; },
    bounds: [-9.6, 9.6, -9.6, 9.6], home: { x: 0, z: -9.8 },
    fill: { ring: 7.0, groups: [[-3.3, -8.8, 0.8], [3.2, -8.7, 0.75], [0.2, -9.5, 0.5, 2]] },
    follow: [5.6, 3.2], stageLine: [12.4, 4],
    drone: { lo: 7.4, hi: 9.2, k: 3, back: 11, dir: [0.2, 0.98] }, haze: 0.06, hazeFade: 0.6,
    echo: [[-22, 3, 'listener'], [22, 2, 'listener']],
    aerial: { ground: '#bfb4a2', floor: '#e8e2d6' },
    sky2d: { stops: [[0, '#040a1e'], [0.6, '#0e1a3e'], [1, '#2a3050']], stars: 120, moon: { x: 0.5, y: 0.62, r: 0.06, col: '#ffe9c0' }, ground: ['#0a1830', '#040a14'] },
    // The plan for the map: the floor, the pool ring, the terrace's edge over the sea, the waterfall wall, the cabanas
    map: function (out) {
      out.shapes.push({ k: 'ring', x: 0, z: 0, r: TG.floor, s: 'edge' });
      out.shapes.push({ k: 'ring', x: 0, z: 0, r: TG.pool[0], s: 'water' }); out.shapes.push({ k: 'ring', x: 0, z: 0, r: TG.pool[1], s: 'water' });
      out.shapes.push({ k: 'line', pts: [[-24, TG.edgeZ], [24, TG.edgeZ]], s: 'water' });
      out.shapes.push({ k: 'line', pts: [[TG.falls, -12], [TG.falls, 12]], s: 'wall' });
      TG.cabanas.forEach(function (c) { out.shapes.push({ k: 'ring', x: c[0], z: c[1], r: 1.8, s: 'wall' }); });
      seats.forEach(function (sf) { var c0 = Math.cos(sf.ry), s0 = Math.sin(sf.ry), h = sf.len / 2; out.shapes.push({ k: 'line', pts: [[sf.x - c0 * h, sf.z + s0 * h], [sf.x + c0 * h, sf.z - s0 * h]], s: 'step' }); });
    },
    seats: function (h) { return K.seats(h, seats, 0.62); },
    far: function (h) { K.far(h, seats, -14.94); },
    rest: function (h) { return K.rest(h, seats, TG.floor - 0.4); },
    back2d: function (h) {
      K.disc(h, TG.terrace, '#bfb4a2'); K.disc(h, TG.pool[1], '#1aa0b0'); K.disc(h, TG.pool[0], '#d8d0c0'); K.disc(h, TG.floor, '#e8e2d6');
      var S = this.stage; h.fillPoly([[S.x0, S.h, S.z], [S.x1, S.h, S.z], [S.x1, S.h, S.z + S.depth], [S.x0, S.h, S.z + S.depth]], '#6a4424');
    }
  };
})();
