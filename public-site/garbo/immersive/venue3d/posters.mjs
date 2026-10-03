// Makes the stills the page shows while a venue is being built (venue-art/posters/<venue>-<view>[-tall].webp): one
// frame of each venue, from the stage and from the circle, wide for a laptop and tall for a phone, with nothing of
// the player over it. Run it after changing a venue so its still matches what then fades in over it.
//
// It drives Chrome through playwright-core and encodes with cwebp, both from outside the repository:
//
//   mkdir -p /tmp/venue3d-tools && cd /tmp/venue3d-tools && npm init -y && npm i playwright-core@1
//   brew install webp   # for cwebp
//   (serve the repository's root on a local port, e.g. python3 -m http.server 4360)
//   node public-site/garbo/immersive/venue3d/posters.mjs /tmp/venue3d-tools http://localhost:4360/public-site/garbo/immersive/ [venue ...]
import path from 'node:path';
import { mkdirSync, rmSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', 'venue-art', 'posters');
const [tools, base, ...only] = process.argv.slice(2);
if (!tools || !base) throw new Error('Usage: node posters.mjs <tools folder> <page url> [venue ...]');
const { chromium } = createRequire(path.join(path.resolve(tools), 'package.json'))('playwright-core');
const VENUES = only.length ? only : ['outdoors', 'stadium', 'sheri', 'pandora', 'resham', 'chitra', 'voltage', 'chandra', 'vrindavan', 'tulip', 'lotus', 'vadodara', 'jyot'];
const SIZES = [{ tag: '', w: 1600, h: 900, q: 72 }, { tag: '-tall', w: 540, h: 1080, q: 70 }];
const VIEWS = ['stage', 'circle'];

mkdirSync(out, { recursive: true });
const tmp = path.join(os.tmpdir(), 'venue-posters-' + process.pid);
mkdirSync(tmp, { recursive: true });
// A fresh browser for each venue (one that has drawn many venues can stall), and one more try for a frame that stalls
const launch = () => chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
async function shoot(browser, venue, view, size) {
  const page = await browser.newPage({ viewport: { width: size.w, height: size.h } });
  try {
    await page.addInitScript(([v, l]) => {
      try { localStorage.setItem('garbo-proto-atmosphere', JSON.stringify({ venue: v, listener: l, mode: 'immersive' })); } catch (e) { /* storage unavailable */ }
    }, [venue, view]);
    await page.goto(base + '?still', { waitUntil: 'load' });
    // the player, its buttons and the still itself stay out of the picture
    await page.addStyleTag({ content: '.app, .rail, .venue-poster, .toast, [class*="toast"] { visibility: hidden !important; }' });
    await page.waitForFunction((v) => window.GarbaVenue3D && window.GarbaVenue3D.debug().ready.indexOf(v) >= 0, venue, { timeout: 45000 });
    await page.waitForTimeout(4500);
    const png = path.join(tmp, `${venue}-${view}${size.tag}.png`), webp = path.join(out, `${venue}-${view}${size.tag}.webp`);
    await page.screenshot({ path: png });
    execFileSync('cwebp', ['-quiet', '-q', String(size.q), '-m', '6', png, '-o', webp]);
    console.log(path.basename(webp), Math.round(statSync(webp).size / 1024) + ' KB');
  } finally { await page.close().catch(() => {}); }
}
try {
  for (const venue of VENUES) {
    let browser = await launch();
    for (const size of SIZES) for (const view of VIEWS) {
      try { await shoot(browser, venue, view, size); }
      catch (e) { browser.close().catch(() => {}); browser = await launch(); await shoot(browser, venue, view, size); }
    }
    browser.close().catch(() => {});
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
process.exit(0);
