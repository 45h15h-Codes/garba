// First visit: the site opens the Immersive player, standing by the stage on the outdoor ground, and the first tap
// that isn't on a control starts the song. A visitor's saved choice of Simple is kept, and automated browsers keep
// Simple unless they opt in, which this harness does by presenting itself as an ordinary browser.
import assert from 'node:assert/strict';
import { chromium, webkit } from 'playwright';

const base = process.env.BASE_URL || 'http://127.0.0.1:4173/';
const engines = (process.env.ENGINES || 'chromium,webkit').split(',');
// Rounds of the whole run, for checking that a fix to an intermittent failure holds.
const rounds = Math.max(1, Number.parseInt(process.env.ROUNDS || '1', 10) || 1);
const fixtures = [
  { name: 'desktop Chromium', engine: chromium, key: 'chromium', viewport: { width: 1280, height: 800 } },
  { name: 'phone WebKit', engine: webkit, key: 'webkit', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
].filter((f) => engines.includes(f.key));

async function openPage(browser, fixture, { visitor = true, saved = null } = {}) {
  // The service worker would install and precache the whole shell in every fresh browser while the page is being
  // driven, which is not what this smoke checks and is what other harnesses here block too.
  const context = await browser.newContext({ viewport: fixture.viewport, isMobile: fixture.isMobile, hasTouch: fixture.hasTouch, serviceWorkers: 'block' });
  await context.route(/youtube\.com|ytimg\.com|googlevideo\.com/, (route) => route.abort());
  await context.addInitScript(({ visitor, saved }) => {
    if (visitor) Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false, configurable: true });
    if (saved && !sessionStorage.getItem('seeded')) { localStorage.setItem('garba:view', saved); sessionStorage.setItem('seeded', '1'); }
  }, { visitor, saved });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('crash', () => console.error(`${fixture.name}: the page crashed`));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  return { context, page, errors };
}

// Each scenario gets its own browser, so the venue scene from the first can't weigh on the next
async function scenario(fixture, body) {
  const browser = await fixture.engine.launch({ headless: true });
  let closing = false;
  browser.on('disconnected', () => { if (!closing) console.error(`${fixture.name}: the browser disconnected unexpectedly`); });
  try { await body(browser); } finally { closing = true; await browser.close().catch(() => {}); }
}

async function run(fixture) {
  {
    // A first visit opens Immersive by the stage on the outdoor ground, with the tap hint up at once and centred
    await scenario(fixture, async (browser) => {
      const { context, page, errors } = await openPage(browser, fixture);
      await page.waitForSelector('.garbo-prototype-overlay:not([hidden])', { timeout: 15000 });
      const state = await page.evaluate(() => ({
        view: localStorage.getItem('garba:view'),
        atmo: JSON.parse(localStorage.getItem('garbo-proto-atmosphere') || '{}'),
        inert: document.getElementById('app').inert,
      }));
      assert.equal(state.view, 'immersive', `${fixture.name}: a first visit should open Immersive`);
      assert.equal(state.atmo.venue, 'outdoors', `${fixture.name}: a first visit should start on the outdoor ground`);
      assert.equal(state.atmo.listener, 'stage', `${fixture.name}: a first visit should stand by the stage`);
      assert.equal(state.inert, true, `${fixture.name}: the Simple player should be inert under Immersive`);
      // CI draws the 3D venue in software, which can keep the page busy for a while: the waits allow for that
      await page.waitForSelector('.garbo-first-tap', { timeout: 30000 });
      const hintBox = await page.locator('.garbo-first-tap').boundingBox();
      const mid = hintBox.x + hintBox.width / 2;
      assert.ok(Math.abs(mid - fixture.viewport.width / 2) <= 4, `${fixture.name}: the tap hint should be centred across the window (centre at ${Math.round(mid)}px)`);
      // The frame's own scene loads, then a tap on the venue (not a control) presses Play once
      const frame = page.frameLocator('.garbo-prototype-frame');
      await frame.locator('#scene').waitFor({ timeout: 30000 });
      await page.waitForFunction(() => document.querySelector('.garbo-prototype-frame').contentDocument?.readyState === 'complete', null, { timeout: 30000 });
      await page.waitForTimeout(600);
      // Counted on the way down, before the player's own handlers can stop the click
      await page.evaluate(() => { window.__plays = 0; window.addEventListener('click', (e) => { if (e.target && e.target.id === 'playButton') window.__plays += 1; }, true); });
      // Tap the venue itself: the first point down the middle that isn't on a control
      const CONTROL = 'button, a, input, select, textarea, label, summary, [role="button"], [role="switch"], [role="slider"], [role="tab"], [contenteditable]';
      const box = await page.locator('.garbo-prototype-frame').boundingBox();
      const spot = await page.evaluate((control) => {
        const frame = document.querySelector('.garbo-prototype-frame'), doc = frame.contentDocument, r = frame.getBoundingClientRect();
        for (const fy of [0.3, 0.4, 0.5, 0.25, 0.6, 0.2]) for (const fx of [0.5, 0.4, 0.6, 0.3]) {
          const el = doc.elementFromPoint(r.width * fx, r.height * fy);
          if (el && !el.closest(control)) return { fx, fy, el: el.tagName + '#' + el.id };
        }
        return null;
      }, CONTROL);
      assert.ok(spot, `${fixture.name}: there should be a spot on the venue that isn't a control`);
      const at = { x: box.x + box.width * spot.fx, y: box.y + box.height * spot.fy };
      if (fixture.hasTouch) await page.touchscreen.tap(at.x, at.y); else await page.mouse.click(at.x, at.y);
      try {
        await page.waitForFunction(() => window.__plays === 1, null, { timeout: 15000 });
      } catch (error) {
        const why = await page.evaluate(() => ({ plays: window.__plays, hint: !!document.querySelector('.garbo-first-tap'), playing: window.GARBA_IMMERSIVE_PLAYER.snapshot().playing }));
        throw new Error(`${fixture.name}: the first tap on ${spot.el} didn't press Play (${JSON.stringify(why)}): ${error.message}`);
      }
      await page.waitForFunction(() => !document.querySelector('.garbo-first-tap'), null, { timeout: 15000 });
      if (fixture.hasTouch) await page.touchscreen.tap(at.x, at.y); else await page.mouse.click(at.x, at.y);
      await page.waitForTimeout(300);
      assert.equal(await page.evaluate(() => window.__plays), 1, `${fixture.name}: only the first tap should start the music`);
      assert.deepEqual(errors, [], `${fixture.name}: no page errors on first visit`);
      await context.close();
    });
    // A visitor who chose Simple keeps it
    await scenario(fixture, async (browser) => {
      const { context, page } = await openPage(browser, fixture, { saved: 'simple' });
      await page.waitForSelector('#playButton', { state: 'visible', timeout: 15000 });
      await page.waitForTimeout(800);
      assert.equal(await page.locator('.garbo-prototype-overlay:not([hidden])').count(), 0, `${fixture.name}: a saved Simple choice should be kept`);
      await context.close();
    });
    // Automated browsers keep Simple unless they opt in
    await scenario(fixture, async (browser) => {
      const { context, page } = await openPage(browser, fixture, { visitor: false });
      await page.waitForSelector('#playButton', { state: 'visible', timeout: 15000 });
      await page.waitForTimeout(800);
      assert.equal(await page.locator('.garbo-prototype-overlay:not([hidden])').count(), 0, `${fixture.name}: automated browsers should keep Simple`);
      await context.close();
    });
    console.log(`✓ ${fixture.name}: first visit opens Immersive by the stage outdoors, the first tap starts the music, Simple choices are kept`);
  }
}

for (let round = 1; round <= rounds; round += 1) {
  if (rounds > 1) console.log(`Round ${round} of ${rounds}`);
  for (const fixture of fixtures) await run(fixture);
}
console.log('✓ Immersive first-visit smoke passed');
