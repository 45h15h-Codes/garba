#!/usr/bin/env node
// Contract for decorative overlines on unclaimed, listener-facing PlayGarba surfaces.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const read = (file) => readFile(path.join(root, file), 'utf8');
const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };

const [siteCss, atmosphereCss, pgaCss, playerCss, playerMarkup, trackCss] = await Promise.all([
  read('public-site/polish.css'),
  read('public-site/atmosphere/atmosphere.css'),
  read('src/pga/app/app.css'),
  read('styles/60-runtime-and-provider.css'),
  read('index.html'),
  read('styles/80-genre-icon-images.css'),
]);

if (!/\.eyebrow,\s*\.section-kicker,\s*\.page-kicker\s*\{\s*display:\s*none\s*!important;?\s*\}/.test(siteCss)) {
  fail('Shared page eyebrow and section/page kicker labels must stay hidden');
}
if (!/\.kicker\s*\{\s*display:\s*none\s*!important;?\s*\}/.test(atmosphereCss)) fail('Atmosphere page kicker must stay hidden');
if (!/\.eyebrow\s*\{\s*display:\s*none\s*!important;?\s*\}/.test(pgaCss)) fail('PGA view eyebrow labels must stay hidden');
if (!/\.circle-perch-kicker\s*\{\s*display:\s*none\s*!important;?\s*\}/.test(playerCss)) fail('The Circle control subtitle must stay hidden');
if (!trackCss.includes('html body .app .track-block .genre-eyebrow {\n  display: none !important;')) fail('The player track genre eyebrow must stay hidden');
if (!playerMarkup.includes('aria-label="Private Garba Circle: listen with friends, everyone hearing the same song at the same moment"')) fail('Hiding the Circle subtitle must not remove its accessible control name');

if (!process.exitCode) console.log('✓ Decorative overlines are hidden on shared pages, Atmosphere, PGA and the player Circle control');
