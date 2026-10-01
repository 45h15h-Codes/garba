# Kukdu avatar assets

`kukdu-avatar.svg` is the canonical vector master for Kukdu, PlayGarba's rooster guide.

Production rules:

- transparent canvas, no baked-in UI background;
- red comb, golden/orange plumage, dark teal tail and Navratri-inspired teal vest;
- keep the face, eye and beak readable at launcher size;
- use the same artwork across Ask Kukdu surfaces rather than copying inline SVG markup;
- `kukdu-avatar-{128,64,48,32}.svg` are explicit size exports for UI use;
- motion work should build on this shared asset and respect `prefers-reduced-motion`.

The 48 px asset is the default launcher/avatar size. Use 32 px only where space is constrained. Larger surfaces should use the master or 64/128 px export.
