# Garbo 3D venues prototype

A separate copy of the Garbo player prototype (`../prototype/`) whose three venues (Outdoors, Stadium and Sheri) are built in 3D. Nothing in production links here, and the current prototype and venue scene are untouched. Issue #2003.

Open `/garbo/prototype-3d/` (add `#outdoors`, `#stadium` or `#sheri` to pick a venue, and `?venue=2d` to compare with the 2D venue).

## How it's split

- **The people stay 2D.** `venue-scene.js` is a copy of the production venue scene (`public-site/atmosphere/scene.js`) with a backdrop hook. It draws everything that lives and moves: the dancers, the band, the vendors and the DJ, the screens' pictures (drone feed, singer close-ups, the aarti screen) and the effects.
- **Everything that stays put is 3D.** `venue3d/venue3d.js` draws, in WebGL under the 2D canvas, the sky, ground, stage and its gear, towers, stands, shamiana, houses, trees, chhatris, bulb strings, lanterns and beams, the garbo, and (`venue3d/src/furnish.js`) the food stalls and the pani puri cart, the DJ's whole rig, chairs, benches, the stadium's steps, parked scooters, bikes and the van, tulsi planters and tents. It uses the 2D scene's own camera each frame, so the people stand exactly on the 3D ground.
- **The stage.** The outdoor and stadium stages are deeper, with the LED screen raised over the band and a star-cloth behind the players, so they stand in front of the backdrop rather than on the picture. Six players have their own places on the riser: tabla on a gaddi, dhol, guitar, drums on their own riser, keyboard and bass (four on the sheri's takht). Their fixed gear (the drum kit, the keyboard on its X-stand, the tabla, amps, monitors, a spare guitar) is 3D (`venue3d/src/band.js`), and what they hold is drawn in 2D. The plan is `BAND` in both `venue-scene.js` and `venue3d/src/util.js`.
- **Far off is first person.** You sit among the people watching, just behind the two of you: their heads fill the bottom of the picture, round the player, and a wider lens gives the venue the rest.
- **Both read one layout.** The 2D scene hands the backdrop its own layout objects (where each stall, chair and scooter is), so the two agree on every position.
- **Depth between the two.** A 3D thing someone can stand behind leaves the 2D scene its outline (convex solids on its layout object). At its place in the 2D scene's depth order, the 2D scene cuts that outline out of whatever it drew behind it, then draws the person at it, then cuts the parts in front of them (a counter, the DJ's table, a chair's back, the wedge monitors before the singers). So a stall hides the people behind it, and its counter hides the vendor's legs.
- **It never shows the old venue.** The 3D script loads with `defer`. Until its first venue is built and its shaders are compiled (off the main thread), the scene holds a dark frame and then fades in; it never paints the 2D venue first. Once the first venue is up, the other two are built in the background, so switching venues is instant, and a switch cross-fades from the last frame. Without WebGL2, or if anything fails, the 2D venue simply draws instead.

## Lighting layers

Every light belongs to one layer, and each layer eases to the level the night calls for (paused, playing or an aarti). Each kind of source also has its own colour of light (`LIGHT` in `venue3d/src/util.js`), so a diya reads differently from a bulb or a floodlight even at the same brightness.

| Layer | What it is | Its light |
| --- | --- | --- |
| ambient | sky bounce and moonlight | cool |
| key | floodlights and the roof's key light (the one shadow caster) | cool white (about 4500 K) |
| architectural | uplights on the kanat and trees, wall washers, aisle and step lights, the wash on the temple spire | amber, steady |
| practical | street lamps, jhummars, lanterns, lit windows, door lamps, the stalls' tube lights and bulbs, house lights | warm bulbs (2700 K), amber sodium street lamps, cold tube lights |
| festive | bulb strings, fairy lights, bulb curtains, LED boards | the night's colours |
| show | stage washes, moving heads and their beams, the DJ's sign and pads | the night's colours |
| flame | diyas round the rangoli, on doorsteps, at the shrine and tulsi planters, on the DJ's table | orange (about 1900 K), each flame flickering on its own |
| garbo | the lamp in the pot, flickering with the scene's lit value | warm |

In an aarti the electric layers fall back and the flames rise, so the fire carries the light.

Light that falls on the ground is painted once into one small light map per layer and blended by a single shader, so hundreds of lamps cost one draw. The flame layer's map flickers in the shader, differently from place to place. Surfaces lit by their own lamps (a stall's counter and valance, the stadium's steps) take a little of that light as their own glow, following their layer. See `venue3d/src/lighting.js`.

## Devices

`venue3d/src/backdrop.js` picks a tier: phones get a smaller pixel budget, no real-time shadows, fewer lights and a lighter bloom. On every tier, quality steps down on its own when frames run slow: fewer pixels, then no bloom, then a still venue redrawn on every other frame.

Everything that never moves is baked (`venue3d/src/bake.js`): plain surfaces write their colour into their vertices and merge by finish, so a venue is a little over a hundred draws on a phone. Repeated things (bulbs, flames, chairs, scooters, beads) are instanced.

## Building

The bundle is committed, so the site needs no build step. After changing `venue3d/src/`, rebuild with esbuild and three.js r186 installed outside the repository:

```bash
mkdir -p /tmp/venue3d-tools && cd /tmp/venue3d-tools && npm init -y && npm i esbuild@0.25.10 three@0.186.1
```

```bash
node public-site/garbo/prototype-3d/venue3d/build.mjs /tmp/venue3d-tools
```

The singer portraits and sample data are shared with `../prototype/` rather than copied.
