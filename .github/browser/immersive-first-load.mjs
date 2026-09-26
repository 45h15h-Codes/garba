// First visit: the site opens the Immersive player, standing by the stage in the indoor stadium, and the first tap
// that isn't on a control starts the song. A visitor's saved choice of Simple is kept, and automated browsers keep
// Simple unless they opt in, which this harness does by presenting itself as an ordinary browser.
import assert from 'node:assert/strict';
import { chromium, webkit } from 'playwright';

const base = process.env.BASE_URL || 'http://127.0.0.1:4173/';
const engines = (process.env.ENGINES || 'chromium,webkit').split(',');
const fixtures = [
  { name: 'desktop Chromium', engine: chromium, key: 'chromium', viewport: { width: 1280, height: 800 } },
  { name: 'phone WebKit', engine: webkit, key: 'webkit', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
].filter((f) => engines.includes(f.key));

async function openPage(browser, fixture, { visitor = true, saved = null } = {}) {
  const context = await browser.newContext({ viewport: fixture.viewport, isMobile: fixture.isMobile, hasTouch: fixture.hasTouch });
  await context.route(/youtube\.com|ytimg\.com|googlevideo\.com/, (route) => route.abort());
  await context.addInitScript(({ visitor, saved }) => {
    if (visitor) Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false, configurable: true });
    if (saved && !sessionStorage.getItem('seeded')) { localStorage.setItem('garba:view', saved); sessionStorage.setItem('seeded', '1'); }
  }, { visitor, saved });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  return { context, page, errors };
}

async function run(fixture) {
  const browser = await fixture.engine.launch({ headless: true });
  try {
    // A first visit opens Immersive by the stage in the indoor stadium, with the tap hint up
    {
      const { context, page, errors } = await openPage(browser, fixture);
      await page.waitForSelector('.garbo-prototype-overlay:not([hidden])', { timeout: 15000 });
      const state = await page.evaluate(() => ({
        view: localStorage.getItem('garba:view'),
        atmo: JSON.parse(localStorage.getItem('garbo-proto-atmosphere') || '{}'),
        inert: document.getElementById('app').inert,
      }));
      assert.equal(state.view, 'immersive', `${fixture.name}: a first visit should open Immersive`);
      assert.equal(state.atmo.venue, 'stadium', `${fixture.name}: a first visit should start in the indoor stadium`);
      assert.equal(state.atmo.listener, 'stage', `${fixture.name}: a first visit should stand by the stage`);
      assert.equal(state.inert, true, `${fixture.name}: the Simple player should be inert under Immersive`);
      await page.waitForSelector('.garbo-first-tap', { timeout: 10000 });
      // The frame's own scene loads, then a tap on the venue (not a control) presses Play once
      const frame = page.frameLocator('.garbo-prototype-frame');
      await frame.locator('#scene').waitFor({ timeout: 15000 });
      // Counted on the way down, before the player's own handlers can stop the click
      await page.evaluate(() => { window.__plays = 0; window.addEventListener('click', (e) => { if (e.target && e.target.id === 'playButton') window.__plays += 1; }, true); });
      const box = await page.locator('.garbo-prototype-frame').boundingBox();
      const at = { x: box.x + box.width * 0.5, y: box.y + box.height * 0.3 };
      if (fixture.hasTouch) await page.touchscreen.tap(at.x, at.y); else await page.mouse.click(at.x, at.y);
      await page.waitForFunction(() => window.__plays === 1, null, { timeout: 5000 });
      await page.waitForFunction(() => !document.querySelector('.garbo-first-tap'), null, { timeout: 5000 });
      if (fixture.hasTouch) await page.touchscreen.tap(at.x, at.y); else await page.mouse.click(at.x, at.y);
      await page.waitForTimeout(300);
      assert.equal(await page.evaluate(() => window.__plays), 1, `${fixture.name}: only the first tap should start the music`);
      assert.deepEqual(errors, [], `${fixture.name}: no page errors on first visit`);
      await context.close();
    }
    // A visitor who chose Simple keeps it
    {
      const { context, page } = await openPage(browser, fixture, { saved: 'simple' });
      await page.waitForSelector('#playButton', { state: 'visible', timeout: 15000 });
      await page.waitForTimeout(800);
      assert.equal(await page.locator('.garbo-prototype-overlay:not([hidden])').count(), 0, `${fixture.name}: a saved Simple choice should be kept`);
      await context.close();
    }
    // Automated browsers keep Simple unless they opt in
    {
      const { context, page } = await openPage(browser, fixture, { visitor: false });
      await page.waitForSelector('#playButton', { state: 'visible', timeout: 15000 });
      await page.waitForTimeout(800);
      assert.equal(await page.locator('.garbo-prototype-overlay:not([hidden])').count(), 0, `${fixture.name}: automated browsers should keep Simple`);
      await context.close();
    }
    console.log(`✓ ${fixture.name}: first visit opens Immersive by the stage in the stadium, the first tap starts the music, Simple choices are kept`);
  } finally {
    await browser.close();
  }
}

for (const fixture of fixtures) await run(fixture);
console.log('✓ Immersive first-visit smoke passed');
