import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../../public-site/install/index.html', import.meta.url), 'utf8');
const script = await readFile(new URL('../../public-site/pages.js', import.meta.url), 'utf8');
const css = await readFile(new URL('../../public-site/pages.css', import.meta.url), 'utf8');
const askPages = JSON.parse(await readFile(new URL('../../assets/runtime/ask-pages.json', import.meta.url), 'utf8'));

for (const id of ['deviceTabs', 'tab-ios', 'tab-android', 'tab-desktop', 'install-ios', 'install-android', 'install-desktop', 'background-play', 'background-title', 'background-desktop']) {
  assert.match(html, new RegExp(`id="${id}"`), `Install guide must include #${id}`);
}

for (const platform of ['ios', 'android', 'desktop']) {
  assert.match(html, new RegExp(`data-platform-tab="${platform}"`), `Install guide needs a ${platform} device tab`);
  assert.match(html, new RegExp(`data-device="${platform}"`), `Install guide needs ${platform} instructions`);
}

assert.match(html, /Install with Brave[\s\S]*?Install app[\s\S]*?Add to Home screen/, 'Android needs Brave PWA install steps');
assert.match(html, /Install with Safari[\s\S]*?Add to Home Screen[\s\S]*?Open as Web App/, 'iOS needs Safari Home Screen install steps');
assert.match(html, /Use Brave to listen with background playback/, 'iOS guidance must keep Brave as the listening route');
assert.match(html, /Brave supports background playback for YouTube on Android and iPhone\/iPad/, 'Background guidance needs the cross-platform Brave route');
assert.match(html, /https:\/\/brave\.com\/youtube-ad-blocker\//, 'Background guidance needs a Brave source link');
assert.doesNotMatch(html.match(/<article class="device-card" id="install-ios"[\s\S]*?<\/article>/)?.[0] ?? '', /Install with Brave/, 'iOS must not claim Brave installs the PWA');
assert.match(script, /navigator\.userAgentData\?\.platform/, 'Platform detection should use User-Agent Client Hints when available');
assert.match(script, /navigator\.maxTouchPoints > 1/, 'Platform detection should account for iPad desktop mode');
assert.match(script, /ArrowRight[\s\S]*?ArrowLeft[\s\S]*?Home[\s\S]*?End/, 'Device tabs need arrow, Home and End keyboard navigation');
assert.match(script, /aria-selected/);
assert.match(script, /deviceForHash\(\)/, 'Deep links should select the matching device guide');
assert.match(script, /addEventListener\('hashchange'/, 'In-page deep links should reveal their device guide');
assert.match(css, /\.device-tabs button:focus-visible/);
assert.match(css, /\.device-card\[hidden\] \{ display: none !important; \}/);
for (const [heading, href] of [
  ['Install with Safari', '/install/#install-ios-title'],
  ['Install with Brave', '/install/#install-android-title'],
  ['Keep the Garba going in Brave.', '/install/#background-title'],
]) {
  assert.ok(askPages.sections.some((section) => section.page === 'Install PlayGarba' && section.heading === heading && section.href === href), `Kukdu needs a direct Ask page route for ${heading}`);
}

console.log('✓ device-aware install and background-play guide contract');
