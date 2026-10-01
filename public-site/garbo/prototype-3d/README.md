# Garbo 3D venues prototype

A separate copy of the Garbo player prototype (`../prototype/`) whose three venues (Outdoors, Stadium and Sheri) are built in 3D. Nothing in production links here, and the current prototype and venue scene are untouched. Issue #2003.

Open `/garbo/prototype-3d/` (add `#outdoors`, `#stadium` or `#sheri` to pick a venue, and `?venue=2d` to compare with the 2D venue).

## How it's split

- **The people stay 2D.** `venue-scene.js` is a copy of the production venue scene (`public-site/atmosphere/scene.js`) with a backdrop hook. It draws everything that lives and moves: the dancers, the band, the vendors and the DJ, the screens' pictures (drone feed, singer close-ups, the aarti screen) and the effects.
- **Everything that stays put is 3D.** `venue3d/venue3d.js` draws, in WebGL under the 2D canvas, the sky, ground, stage and its gear, towers, stands, shamiana, houses, trees, chhatris, bulb strings, lanterns and beams, the garbo, and (`venue3d/src/furnish.js`) the food stalls and the pani puri cart, the DJ's whole rig, chairs, benches, parked scooters, bikes and the van, tulsi planters and tents. It uses the 2D scene's own camera each frame, so the people stand exactly on the 3D ground.
- **The player.** Only the song's title, its singers, the progress bar and the controls, with the controls at the bottom. The top bar is the same on every screen: one home button where the moon was opens the Simple/Immersive switch with View, Sound and Ideas under it, and Tonight and Play YouTube link are in More. There is no genre strip and no Explore: Search walks you to the DJ, whose laptop is where you choose. (The production player keeps its genre strip and Explore; this is the 3D page's own player.)
- **Ask Kukdu and the cards.** The rooster launcher sits between 24/7 Live and the YouTube credit (above the credit on a wide screen), and Ask Kukdu is also in More. Inside the player the page round this one opens Kukdu, as the 2D Garbo does; on its own this page loads Kukdu itself. Every card that opens over the venue (the sheets, the side cards, More and Kukdu's panel) shares one look: deep ink glass, a brass rim and a faint glow along the top.
- **The stage.** The outdoor and stadium stages are deeper and wider, with the LED screen running full height from the riser's floor behind the band to just under the truss, so the players stand in front of a big picture. Six players have their own places on the riser: tabla on a gaddi, dhol, guitar, drums on their own riser, keyboard and bass (four on the sheri's takht). Their fixed gear (the drum kit, the keyboard on its X-stand, the tabla, amps, monitors, a spare guitar) is 3D (`venue3d/src/band.js`), and what they hold is drawn in 2D. The plan is `BAND` in both `venue-scene.js` and `venue3d/src/util.js`.
- **The screens and the drone.** A 3D drone flies where the 2D scene's shot says (`venue3d/src/drone.js`), with spinning rotors, a gimbal camera and blinking navigation lights. Its aerial picture of the real 3D venue is rendered on the LED screen, and the 2D scene draws the shot's dancers over it with the same camera. The close shots (a child running through, the two of you, the lead singer) get the real venue behind them from a ground-level camera, softened. Phones keep the drawn map.
- **Sponsors.** BookPhysio's creatives (from #2023, copied into `sponsors/`) appear on the outdoor side screens between singer close-ups, the stadium's corner screens and the sheri's flex banners. The outdoor stage's skirt has three LED panels that show turning mandalas; for five seconds in every thirty a creative takes a panel's middle, full height in a gold frame (the centre panel one time, the two outer panels with two different creatives the next, round all five). The two side screens show two different creatives between the singer close-ups, and the main screen takes a short sponsor break about every 48 seconds, the creative filling it edge to edge. The creatives come small, so each is enlarged and sharpened once when it loads.
- **Floors.** Beaten earth, patterned cement tiles in deep reddish browns (as Athangudi tiles are made) for the hall, and small cleft slates for the lane, each with a gentle bump map (`venue3d/src/floors.js`). Each floor also has a painted layer blended into the ground's shader: the trodden rings where each circle dances and a lime circle with marigold petals outdoors, a printed vinyl mandala in the stadium, and a powder rangoli in the sheri.
- **Far off is first person.** You sit among the people watching, just behind the two of you: their heads fill the bottom of the picture, round the player, and the dance floor the middle. Outdoors you're in the rows of chairs; in the stadium you sit in the near stand (built in 3D like the other three, `NSTAND` in both scripts), where each step hides the lower half of the people beyond it so you see heads and shoulders over the rows; in the sheri you're on a bench brought out on the lane, neighbours on plastic chairs beside you and children on the ground in front.
- **The sheri.** House fronts with framed windows glowing through coloured curtains, carved doors under torans with શુભ and લાભ either side, and curtain lights down most of them; the haveli at the end of the lane with jharokhas, marigold swags and the society's projector screen; a canopy of bulb strings over the mandap and star kandils down the lane.
- **The DJ.** Moving heads on the speakers sweep coloured beams over the floor, an LED strip washes the table's bandhani, the bamboo poles are uplit, and the laptop's logo is a pineapple with a bite out of it.
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
| festive | bulb strings, fairy lights, curtain lights down the house fronts, star kandils, LED boards | the night's colours |
| show | stage washes, moving heads and their beams, the DJ's sign, pads, moving heads and LED strip | the night's colours |
| flame | diyas round the rangoli, on doorsteps, at the shrine and tulsi planters, on the DJ's table | orange (about 1900 K), each flame flickering on its own |
| garbo | the lamp in the pot, flickering with the scene's lit value | warm |

In an aarti the electric layers fall back and the flames rise, so the fire carries the light.

The picture is tone mapped with three.js's Neutral curve, which keeps each light's colour and rolls bright light off softly, and the bloom only picks up the lamps themselves.

Light that falls on the ground is painted once into one small light map per layer and blended by a single shader, so hundreds of lamps cost one draw. The flame layer's map flickers in the shader, differently from place to place. Surfaces lit by their own lamps (a stall's counter and valance, the stadium's steps) take a little of that light as their own glow, following their layer. See `venue3d/src/lighting.js`.

## Devices

`venue3d/src/backdrop.js` picks a tier: phones get a smaller pixel budget, no real-time shadows, fewer lights and a lighter bloom. On every tier, quality steps down on its own when frames run slow (fewer pixels, then no bloom, then a still venue redrawn on every other frame) and back up after several seconds of smooth frames; building a venue, a venue switch or a return to the tab don't count as slow.

A phone builds only the venue you're in (the others are built in the background on tablets and computers, so switching there is instant) and frees the one you leave. On phones and tablets the venue is drawn only down to the player's controls, or above the DJ's laptop. The drone's picture on a stage screen is drawn at the screen's size on your screen, and refreshed half as often when it's small and far off.

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
