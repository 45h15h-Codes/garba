// Builds venue3d.js, the one classic script the prototype loads, from src/ and three.js.
//
// The bundle is committed, so the site needs no build step. To rebuild after changing src/, install the two build
// tools anywhere outside the repository and point this script at that folder:
//
//   mkdir -p /tmp/venue3d-tools && cd /tmp/venue3d-tools && npm init -y && npm i esbuild@0.25.10 three@0.186.1
//   node public-site/garbo/immersive/venue3d/build.mjs /tmp/venue3d-tools
//
// It is a classic script (not a module) because the player reads window.GarbaVenueScene as soon as it loads.
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const tools = path.resolve(process.argv[2] || process.env.VENUE3D_TOOLS || '');
const require = createRequire(path.join(tools, 'package.json'));
const esbuild = require('esbuild');
const three = JSON.parse(readFileSync(path.join(tools, 'node_modules/three/package.json'), 'utf8')).version;
if (three !== '0.186.1') throw new Error(`Expected three@0.186.1, found ${three}`);

await esbuild.build({
  entryPoints: [path.join(here, 'src/main.js')],
  outfile: path.join(here, 'venue3d.js'),
  bundle: true,
  format: 'iife',
  minify: true,
  target: 'es2019',
  nodePaths: [path.join(tools, 'node_modules')],
  legalComments: 'eof',
  banner: { js: `/* PlayGarba 3D venues (source: venue3d/src). Bundles three.js r${three.split('.')[1]} (MIT, (c) 2010-2025 three.js authors). */` },
  logLevel: 'info'
});
