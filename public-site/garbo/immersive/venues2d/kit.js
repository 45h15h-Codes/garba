/* What several venue specs share: sofas and benches laid round a floor (where the 2D scene seats people and the 3D
   venue builds the furniture), the near rows you sit in when you watch from far off, and resting between songs. */
(function () {
  'use strict';
  window.GarbaVenueKit = {
    // A sofa (or bench) at x, z facing ry (its back towards ry + π), its seats spaced along it. near: 'a' for the row in
    // front of your seat from far off, 'b' for your own row
    sofa: function (list, x, z, ry, len, near, kind) {
      var seats = [], n = Math.round((len - 0.5) / 0.66) + 1;
      for (var i = 0; i < n; i++) { var lx = -len / 2 + 0.45 + i * (len - 0.9) / Math.max(1, n - 1); seats.push([x + Math.cos(ry) * lx + Math.sin(ry) * 0.06, z - Math.sin(ry) * lx + Math.cos(ry) * 0.06]); }
      list.push({ x: x, z: z, ry: ry, len: len, seats: seats, near: near || false, kind: kind || 'sofa' });
    },
    // Sofas round the floor at these angles (degrees from +x towards the far side), at radius rr, each facing the middle
    ring: function (list, rr, degs, len, kind) {
      var K = this;
      degs.forEach(function (deg) { var a = deg * Math.PI / 180, x = Math.cos(a) * rr, z = Math.sin(a) * rr; K.sofa(list, x, z, Math.atan2(-x, -z), len, false, kind); });
    },
    // The people sitting out on them
    seats: function (h, list, k) {
      var out = [];
      list.forEach(function (sf) {
        if (sf.near) return;
        sf.seats.forEach(function (p) { if (h.rnd() < (k || 0.7)) out.push({ kind: 'sofa', x: p[0], y: 0.45, z: p[1], who: h.person({ sitting: true, older: h.rnd() < 0.4, rest: { y: 0.45 } }) }); });
      });
      return out;
    },
    // From far off: you on the near row 'b', the two of you in the middle of row 'a' in front at coupleZ, neighbours
    // either side. Each seat's back hides the lower half of whoever sits on it, as you look over it.
    far: function (h, list, coupleZ) {
      list.forEach(function (sf) {
        if (!sf.near) return;
        var zf = sf.z - 0.42, zb = sf.z - 0.3, x0 = sf.x - sf.len / 2, x1 = sf.x + sf.len / 2, top = sf.kind === 'bench' ? 0.5 : 0.88, sol = [];
        [[x0, zf], [x1, zf], [x1, zb], [x0, zb]].forEach(function (c) { sol.push(c[0], 0, c[1], c[0], top, c[1]); });
        sf.seats.forEach(function (p) {
          if (sf.near === 'b' && Math.abs(p[0]) < 1.4) return;
          if (sf.near === 'a' && Math.abs(p[0]) < 0.66) return;
          if (h.rnd() < 0.8) h.sitter(p[0], 0.45, p[1], 'bench', null);
        });
        h.out.push({ x: sf.x, y: top, z: zf, kind: 'riser', solid: sol, poly: true });
      });
      h.sitter(-0.31, 0.45, coupleZ, 'bench', 'w'); h.sitter(0.31, 0.45, coupleZ, 'bench', 'm');
    },
    // Between songs: a seat on one of the sofas round the floor, or a spot by the floor's edge (radius edge)
    rest: function (h, list, edge) {
      var ring = list.filter(function (sf) { return !sf.near; });
      if (ring.length && h.rnd() < 0.45) { var sf = ring[Math.floor(h.rnd() * ring.length)], p = sf.seats[Math.floor(h.rnd() * sf.seats.length)]; return { x: p[0], z: p[1], y: 0.45, sit: true }; }
      var a = h.rnd() * Math.PI * 2; return { x: Math.cos(a) * edge, z: Math.sin(a) * edge };
    },
    disc: function (h, r, col) { var d = []; for (var i = 0; i < 48; i++) { var a = i / 48 * Math.PI * 2; d.push([Math.cos(a) * r, 0, Math.sin(a) * r]); } h.fillPoly(d, col); }
  };
})();
