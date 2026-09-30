# Garbo 3D venues prototype

A separate copy of the Garbo player prototype (`../prototype/`) whose three venues (Outdoors, Stadium and Sheri) are built in 3D. Nothing in production links here, and the current prototype and venue scene are untouched. Issue #2003.

Open `/garbo/prototype-3d/` (add `#outdoors`, `#stadium` or `#sheri` to pick a venue, and `?venue=2d` to compare with the 2D venue).

## How it's split

- **The people stay 2D.** `venue-scene.js` is a copy of the production venue scene (`public-site/atmosphere/scene.js`) with one addition, a backdrop hook. It still draws everything that lives and moves: the dancers, the band, the garbo, the stalls and props, the screens' pictures (drone feed, singer close-ups, the aarti screen) and the effects.
- **The venue is 3D.** `venue3d/venue3d.js` draws everything that stays put (sky, ground, stage structure, towers, stands, shamiana, houses, trees, chhatris, bulb strings, lanterns, beams) in WebGL under the 2D canvas. It uses the 2D scene's own camera each frame, so the people stand exactly on the 3D ground.
- **It never blocks the page.** The 3D script loads with `defer`. The 2D scene paints its own venue straight away and hands over when the 3D venue is built and its shaders are compiled (off the main thread). Without WebGL2, or if anything fails, the 2D venue simply stays.

## Lighting layers

Every light belongs to one layer, and each layer eases to the level the night calls for (paused, playing or an aarti):

| Layer | What it is |
| --- | --- |
| ambient | sky bounce and moonlight |
| key | floodlights and the roof's key light (the one shadow caster) |
| practical | real lamps: street lamps, jhummars, lanterns, lit windows |
| festive | bulb strings, fairy lights, bulb curtains, LED ribbons |
| show | stage washes, moving heads and their beams |
| garbo | the lamp in the pot, flickering with the scene's lit value |

Light that falls on the ground is painted once into one small light map per layer and blended by a single shader, so hundreds of lamps cost one draw. See `venue3d/src/lighting.js`.

## Devices

`venue3d/src/backdrop.js` picks a tier: phones get a smaller pixel budget, no real-time shadows, fewer lights and a lighter bloom. On every tier, quality steps down on its own when frames run slow: fewer pixels, then no bloom, then a still venue redrawn on every other frame.

## Building

The bundle is committed, so the site needs no build step. After changing `venue3d/src/`, rebuild with esbuild and three.js r186 installed outside the repository:

```bash
mkdir -p /tmp/venue3d-tools && cd /tmp/venue3d-tools && npm init -y && npm i esbuild@0.25.10 three@0.186.1
```

```bash
node public-site/garbo/prototype-3d/venue3d/build.mjs /tmp/venue3d-tools
```

The singer portraits and sample data are shared with `../prototype/` rather than copied.
