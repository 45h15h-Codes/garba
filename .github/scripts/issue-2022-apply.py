from pathlib import Path


def replace_once(text, old, new, label):
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected one match, found {count}')
    return text.replace(old, new, 1)


scene_path = Path('public-site/atmosphere/scene.js')
scene = scene_path.read_text()

scene = replace_once(
    scene,
    "  'use strict';\n\n  var TAU = Math.PI * 2, NEAR = 0.6;",
    """  'use strict';

  // Sponsor art is resolved from this script so the same scene works in the source prototype and the deployed copy.
  var SCENE_ASSET_BASE = (function () {
    var src = document.currentScript && document.currentScript.src;
    return src ? src.slice(0, src.lastIndexOf('/') + 1) : '/atmosphere/';
  })();
  var BOOKPHYSIO_SPONSORS = {
    side: [
      SCENE_ASSET_BASE + 'sponsors/bookphysio-side-left.webp',
      SCENE_ASSET_BASE + 'sponsors/bookphysio-side-right.webp'
    ],
    stage: [
      SCENE_ASSET_BASE + 'sponsors/bookphysio-stage-left.webp',
      SCENE_ASSET_BASE + 'sponsors/bookphysio-stage-centre.webp',
      SCENE_ASSET_BASE + 'sponsors/bookphysio-stage-right.webp'
    ]
  };

  var TAU = Math.PI * 2, NEAR = 0.6;""",
    'sponsor asset map',
)

sponsor_helpers = """    // Sponsor images are decoded once and then reused by every frame.
    var sponsorImageCache = {};
    function sponsorImage(url) {
      var r = sponsorImageCache[url];
      if (!r) {
        r = sponsorImageCache[url] = { img: null };
        var im = new Image();
        im.decoding = 'async';
        im.onload = function () { r.img = im; };
        im.src = url;
      }
      return r.img;
    }
    BOOKPHYSIO_SPONSORS.side.concat(BOOKPHYSIO_SPONSORS.stage).forEach(sponsorImage);

    // Draw the complete creative into the projected panel. Contain sizing keeps Gujarati copy and the logo uncropped.
    function sponsorPanel(x0, y0, x1, y1, z, url) {
      var pts = [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]];
      if (!poly(pts)) return;
      var tl = P(x0, y1, z), tr = P(x1, y1, z), bl = P(x0, y0, z);
      if (!tl || !tr || !bl) return;
      var pw = Math.hypot(tr.x - tl.x, tr.y - tl.y), ph = Math.hypot(bl.x - tl.x, bl.y - tl.y);
      if (pw < 1 || ph < 1) return;

      g.save();
      g.clip();
      g.transform((tr.x - tl.x) / pw, (tr.y - tl.y) / pw, (bl.x - tl.x) / ph, (bl.y - tl.y) / ph, tl.x, tl.y);
      g.fillStyle = '#f7e8c4';
      g.fillRect(0, 0, pw, ph);
      var img = sponsorImage(url);
      if (img && img.naturalWidth && img.naturalHeight) {
        var scale = Math.min(pw / img.naturalWidth, ph / img.naturalHeight);
        var dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
        g.drawImage(img, (pw - dw) / 2, (ph - dh) / 2, dw, dh);
      }
      g.restore();

      if (poly(pts)) {
        g.strokeStyle = '#c9963f';
        g.lineWidth = Math.max(0.8, (tl.s || 4) * 0.035);
        g.stroke();
      }
    }

"""
scene = replace_once(
    scene,
    "    // A sponsor's panel: a lit box with a thin gold frame. It stays blank until a sponsor is signed.\n",
    sponsor_helpers + "    // Fallback sponsor panel used by venue surfaces that do not have signed artwork.\n",
    'sponsor renderer',
)

scene = replace_once(
    scene,
    """      // Between the two flights, the sponsors' blocks set into the skirt: blank lit panels until sponsors are signed
      if (o.sponsors) {
        var spx0 = o.x0 + 2.9, spx1 = o.x1 - 2.9, gap = 0.7, spw = (spx1 - spx0 - gap * (o.sponsors - 1)) / o.sponsors;
        for (var sp = 0; sp < o.sponsors; sp++) { var sxa = spx0 + sp * (spw + gap); litPanel(sxa, o.h * 0.14, sxa + spw, o.h * 0.84, zF - 0.02); }
      }
""",
    """      // Between the two flights, the three outdoor skirt panels carry distinct BookPhysio creatives.
      if (o.sponsors) {
        var spx0 = o.x0 + 2.9, spx1 = o.x1 - 2.9, gap = 0.7, spw = (spx1 - spx0 - gap * (o.sponsors - 1)) / o.sponsors;
        for (var sp = 0; sp < o.sponsors; sp++) {
          var sxa = spx0 + sp * (spw + gap);
          if (id === 'outdoors' && BOOKPHYSIO_SPONSORS.stage[sp]) sponsorPanel(sxa, o.h * 0.14, sxa + spw, o.h * 0.84, zF - 0.02, BOOKPHYSIO_SPONSORS.stage[sp]);
          else litPanel(sxa, o.h * 0.14, sxa + spw, o.h * 0.84, zF - 0.02);
        }
      }
""",
    'stage skirt sponsor mapping',
)

scene = replace_once(
    scene,
    """      var y0 = 5, y1 = 9, z = o.z + 0.3, closeUp = st.on && !reduce && live ? Math.max(0, Math.min(1, (Math.abs(((t / 9) % 2) - 1) - 0.45) * 8 + 0.5)) : 0;
      [-1, 1].forEach(function (sd) {
""",
    """      var y0 = 5, y1 = 9, z = o.z + 0.3, closeUp = st.on && !reduce && live ? Math.max(0, Math.min(1, (Math.abs(((t / 9) % 2) - 1) - 0.45) * 8 + 0.5)) : 0;
      [-1, 1].forEach(function (sd, screenIndex) {
""",
    'side screen index',
)
scene = replace_once(
    scene,
    "        if (closeUp < 1) litPanel(xa, y0, xb, y1, z);\n",
    "        if (closeUp < 1) sponsorPanel(xa, y0, xb, y1, z, BOOKPHYSIO_SPONSORS.side[screenIndex]);\n",
    'side screen sponsor mapping',
)
scene = scene.replace(
    "crowd. They take turns: a sponsor's slide (blank until sponsors are signed), then a live close-up of the lead",
    "crowd. They take turns: a BookPhysio sponsor slide, then a live close-up of the lead",
    1,
)
scene_path.write_text(scene)

validator_path = Path('scripts/lib/validate-immersive-atmosphere.mjs')
validator = validator_path.read_text()
validator = validator.replace(
    'The stages: steps at each end, three blank lit sponsor blocks on the outdoor stage front, side screens outdoors that',
    'The stages: steps at each end, three BookPhysio sponsor panels on the outdoor stage front, side screens outdoors that',
    1,
)
validation = """  const bookPhysioSponsors = [
    'sponsors/bookphysio-side-left.webp',
    'sponsors/bookphysio-side-right.webp',
    'sponsors/bookphysio-stage-left.webp',
    'sponsors/bookphysio-stage-centre.webp',
    'sponsors/bookphysio-stage-right.webp',
  ];
  for (const asset of bookPhysioSponsors) {
    if (!scene.includes(asset)) fail(`Venue scene is missing BookPhysio sponsor mapping: ${asset}`);
    if (!(await exists(`public-site/atmosphere/${asset}`))) fail(`BookPhysio sponsor asset is missing: ${asset}`);
  }
  const sideSponsorRefs = scene.match(/sponsors\\/bookphysio-side-[^'\"]+\\.webp/g) || [];
  const stageSponsorRefs = scene.match(/sponsors\\/bookphysio-stage-[^'\"]+\\.webp/g) || [];
  if (new Set(sideSponsorRefs).size !== 2 || new Set(stageSponsorRefs).size !== 3) fail('Outdoors must map two distinct side-screen and three distinct stage-skirt BookPhysio creatives');
  for (const marker of ['var BOOKPHYSIO_SPONSORS = {', 'function sponsorImage(', 'function sponsorPanel(', "id === 'outdoors' && BOOKPHYSIO_SPONSORS.stage[sp]", 'BOOKPHYSIO_SPONSORS.side[screenIndex]', 'BOOKPHYSIO_SPONSORS.side.concat(BOOKPHYSIO_SPONSORS.stage).forEach(sponsorImage)', 'Math.min(pw / img.naturalWidth, ph / img.naturalHeight)']) {
    if (!scene.includes(marker)) fail(`Venue scene is missing the BookPhysio sponsor renderer marker: ${marker}`);
  }
"""
validator = replace_once(
    validator,
    "  if ((scene.match(/handMic\\(m\\);/g) || []).length < 3) fail('Every singer drawing path must draw the handheld mic after the face');\n",
    validation + "  if ((scene.match(/handMic\\(m\\);/g) || []).length < 3) fail('Every singer drawing path must draw the handheld mic after the face');\n",
    'sponsor validation',
)
validator_path.write_text(validator)
