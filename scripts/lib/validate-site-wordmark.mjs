#!/usr/bin/env node
// Keep public page header marks consistent with the serif PlayGarba wordmark used by the player.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const site = path.join(root, 'public-site');
const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.isFile() && entry.name.endsWith('.html') ? [full] : [];
  }));
  return nested.flat();
}

const files = await htmlFiles(site);
const pageWordmarks = [];
const prototypeBrands = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const marks = html.match(/<a\b[^>]*class="[^"]*\bwordmark\b[^"]*"[^>]*>[\s\S]*?<\/a>/gi) || [];
  for (const mark of marks) {
    const relative = path.relative(root, file).replaceAll(path.sep, '/');
    // These two prototype utilities have independent ownership and styles; the shared public headers are the target here.
    if (/^public-site\/garbo\/prototype(?:-3d)?\/meme-cat-picker\.html$/.test(relative)) continue;
    if (!/aria-label="PlayGarba home"/.test(mark) || !/href="(?:\.\.\/|\/|#)/.test(mark)) fail(`${relative} needs an accessible PlayGarba home link`);
    if (!/href="(?:\.\.\/|\/)?polish\.css(?:["?])/.test(html)) fail(`${relative} must use the shared PlayGarba wordmark stylesheet`);
    pageWordmarks.push(relative);
  }
  if (/class="brand"[^>]*>PlayGarba<\/a>/i.test(html)) prototypeBrands.push(path.relative(root, file).replaceAll(path.sep, '/'));
}

const css = await readFile(path.join(site, 'polish.css'), 'utf8');
if (!/\.wordmark::before\s*\{\s*display:\s*none\s*;?\s*\}/.test(css)) fail('Shared site wordmark must not show the separate Garbo emblem');
if (!/\.wordmark::after\s*\{[^}]*content:\s*['"]PlayGarba['"][^}]*font:\s*400 clamp\(25px, 2\.05vw, 38px\)\/1 var\(--serif\)/s.test(css)) fail('Shared page wordmark must match the player’s regular serif PlayGarba text');

if (pageWordmarks.length < 16) fail(`Expected the shared wordmark on all public site pages; found ${pageWordmarks.length}`);
if (prototypeBrands.length < 2) fail(`Expected the Immersive player wordmark on both player views; found ${prototypeBrands.length}`);
if (!process.exitCode) console.log(`✓ ${pageWordmarks.length} site headers and ${prototypeBrands.length} player views use the PlayGarba text wordmark`);
