# Kukdu avatar assets

Kukdu is PlayGarba's rooster guide. His artwork is the painted Kukdu from the Kukdu brand sheet: red comb, golden-orange plumage, dark teal tail and an embroidered Navratri vest.

- `kukdu-avatar.svg` is the canonical avatar every Ask Kukdu surface loads: the smiling head-and-shoulders portrait, embedded in the file as WebP on a transparent canvas.
- `kukdu-avatar-{128,64,48,32}.svg` are size exports with the portrait embedded at about 2–3× their size.
- `kukdu-portrait.webp` is the portrait on its own, for surfaces that want a plain image.
- The motion states are described in `MOTION.md`.

Production rules:

- transparent canvas, no baked-in UI background, disc or ring;
- keep the face, eye and beak readable at launcher size;
- every SVG carries its own artwork (embedded, never an external `href`), because a browser blocks external resources inside an SVG loaded with `<img>`;
- use these files rather than copying the artwork into markup.

The 48 px export is the default launcher/avatar size. Use 32 px only where space is constrained. Larger surfaces should use the master, the 128 px export or `kukdu-portrait.webp`.

The cutouts come from the owner's transparent Kukdu pose sheet (the portrait and four poses, each cropped, stripped of stray bits from neighbouring poses, squared on a transparent canvas with the figure at the bottom, and encoded as WebP).
