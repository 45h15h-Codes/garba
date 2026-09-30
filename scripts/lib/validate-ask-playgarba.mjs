#!/usr/bin/env node
// Ask Kukdu contract: grounded, private help launched beside YouTube outside the More menu.
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const read = (f) => readFile(path.join(root, f), 'utf8');
const fail = (m) => { console.error(`✗ ${m}`); process.exitCode = 1; };

const [html, js, intentsRaw] = await Promise.all([read('index.html'), read('assets/runtime/ask-playgarba.js'), read('assets/runtime/ask-intents.json')]);
const intents = JSON.parse(intentsRaw);
const playerCss = await read('styles/60-runtime-and-provider.css');
const approvedExternalLinks = new Set([
  'https://play.google.com/store/apps/details?id=com.brave.browser',
  'https://apps.apple.com/app/brave-private-web-browser-vpn/id1052879175',
]);
if (!intents.note.includes('Ask Kukdu')) fail('The curated answer file must name the Kukdu experience');

// Persistent lower-right launcher sits directly above YouTube, outside More and the top bar.
const more = html.slice(html.indexOf('id="moreCard"'), html.indexOf('</section>', html.indexOf('id="moreCard"')));
const askAt = html.indexOf('id="askButton"');
const youtubeAt = html.indexOf('id="streamingVia"');
if (more.includes('Ask Kukdu') || more.includes('id="askButton"')) fail('Ask Kukdu must stay outside Simple More');
if (askAt < youtubeAt || !/id="askButton"[^>]*aria-label="Ask Kukdu"[^>]*title="Ask Kukdu"/.test(html)) fail('Simple Ask Kukdu must be an accessible launcher immediately after the YouTube attribution');
if (!html.slice(askAt, askAt + 260).includes('src="/assets/brand/kukdu/kukdu-avatar.svg"') || !playerCss.includes('.ask-launcher {') || !playerCss.includes('min-width: 48px; min-height: 48px;')) fail('The Simple launcher must use the shared Kukdu avatar with a 48 px target');
const topbarStart = html.indexOf('class="topbar"');
const topbar = html.slice(topbarStart, html.indexOf('</header>', topbarStart));
if (/id="askButton"/.test(topbar)) fail('Ask PlayGarba must not add a top-bar control');
if (!/<script src="assets\/runtime\/ask-playgarba\.js\?v=[\w.-]+" defer><\/script>/.test(html)) fail('index.html must load the Ask Kukdu runtime, versioned and deferred');
const app = await read('app.js');
if (/ask-playgarba/.test(app)) fail('Ask PlayGarba stays a standalone runtime; app.js must not import it');

// Nothing leaves the device: no network call but its own two files, questions kept per tab for an hour
if (!js.includes("get('assets/runtime/ask-intents.json')") || !js.includes("get('assets/runtime/ask-pages.json')")) fail('Ask Kukdu must load its curated answers and page index');
if ((js.match(/fetch\(/g) || []).length !== 1) fail('Ask Kukdu must make no network request beyond its own knowledge files');
if (/localStorage|sendBeacon|XMLHttpRequest|navigator\.sendBeacon/.test(js)) fail('Ask Kukdu keeps questions in sessionStorage for this tab only and sends nothing');
if (!js.includes("var KEY = 'playgarba:ask:v1', HOUR = 3600e3;")) fail('Ask Kukdu history must expire after an hour');
if (!js.includes('id="askTitle">Ask Kukdu</h2>') || !js.includes('aria-label="Ask Kukdu"') || !js.includes('aria-label="Start a new question"') || !js.includes('var SVG_PLUS =')) fail('Ask Kukdu header needs a centered title and an accessible plus action');
if (js.includes('ask-foot') || js.includes('YOUR PLAYGARBA GUIDE')) fail('Ask Kukdu home should not show the removed kicker or bottom explainer');
if (!js.includes('Kukdu the rooster') || !js.includes('ask-a-avatar')) fail('The header and answer states must show the Kukdu rooster avatar');
if ((js.match(/<svg class="ask-mark"/g) || []).length) fail('Ask Kukdu must reuse the shared rooster asset instead of embedding duplicate inline art');
// The BookPhysio-style framework: product home state, not a fake message; no autofocus on phones; dialog semantics
for (const m of ["What would you like to do?", 'Find music, learn the controls', 'Start with a topic', 'text-align:center', 'grid-template-columns:repeat(2,minmax(0,1fr))', '.ask-chip-description', '.ask-chip-arrow', '.ask-new[hidden]{display:none}', 'background:#f1e7d5', 'Browse all ', 'ask-faq', 'ask-answer-copy', 'ask-action-set', 'ask-related', 'function relatedQuestions(', 'function topicAnswer(', 'function findControlMatches(', 'function findVisibleControls(', "a.do === 'control'", "a.do === 'browse'", "panel.setAttribute('aria-modal', 'true')", 'if (!coarse.matches) input.focus()', 'aria-label="Start a new question"', 'dragToClose(', "root.GARBA_ASK = { open: open, close: close };", "e.data.type !== 'playgarba:ask'"]) {
  if (!js.includes(m)) fail(`Ask Kukdu panel is missing ${m}`);
}
if (js.includes('overflow-x:auto') || !js.includes('.ask-chips{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))')) fail('Home topics must be selectable cards, not a horizontal strip');
if ((intents.topics || []).some((topic) => !topic.label || !topic.description)) fail('Every home topic card needs a title and a useful description');
if (!js.includes('background:var(--accent,#d6b06f)') || !playerCss.includes('background: var(--accent,#d6b06f)')) fail('Ask Kukdu and its launcher must share the player Play-button gold fill');

// Every answer is short and plain; anything not built says so and offers the form; every control it presses exists
const ids = new Set();
for (const it of intents.intents) {
  if (ids.has(it.id)) fail(`duplicate intent ${it.id}`); ids.add(it.id);
  if (!['live', 'not-yet'].includes(it.status)) fail(`${it.id} has an unknown status`);
  if (!it.phrases?.length || !it.title || !it.answer) fail(`${it.id} needs phrases, an authored answer title and copy`);
  if (it.title.length > 72 || it.answer.length > 320) fail(`${it.id} answer copy exceeds the panel limit`);
  if (it.status === 'not-yet' && !(it.actions || []).some((a) => a.do === 'ask')) fail(`${it.id} is not built and must offer the request form`);
  for (const a of it.actions || []) {
    if (a.do === 'open') {
      const m = a.target.match(/^#([\w-]+)$|^\[data-proxy="([\w-]+)"\]$/);
      if (!m) fail(`${it.id} targets an unsupported selector ${a.target}`);
      else if (m[1] ? !html.includes(`id="${m[1]}"`) : !html.includes(`data-proxy="${m[2]}"`)) fail(`${it.id} presses ${a.target}, which the player doesn't have`);
    }
    if (a.do === 'genre' && a.id !== 'nonstop' && !html.includes(`data-genre="${a.id}"`)) fail(`${it.id} plays unknown style ${a.id}`);
    if (a.do === 'link') {
      if (/^https:\/\//.test(a.href)) {
        if (!approvedExternalLinks.has(a.href)) fail(`${it.id} links to unapproved external URL ${a.href}`);
      } else {
        try { await access(path.join(root, 'public-site', a.href.replace(/^\/|\/$/g, ''), 'index.html')); } catch { fail(`${it.id} links to ${a.href}, which isn't a page`); }
      }
    }
  }
  if (it.source) { try { await access(path.join(root, 'public-site', it.source.href.replace(/^\/|\/.*$/g, ''), 'index.html')); } catch { fail(`${it.id} cites ${it.source.href}, which isn't a page`); } }
}
const faqIds = intents.faq.flatMap((group) => group.items.map(([id]) => id));
if (new Set(faqIds).size !== faqIds.length) fail('Ask Kukdu answer guide must not repeat a topic');
if (faqIds.filter((id) => id !== 'now').length !== ids.size || intents.intents.some((it) => !faqIds.includes(it.id))) fail('Ask Kukdu answer guide must include every curated answer');
if (faqIds.filter((id) => id === 'now').length !== 1) fail('Ask Kukdu answer guide must include the live Now Playing answer once');
const background = intents.intents.find((it) => it.id === 'background');
if (!background.actions.some((a) => a.href === 'https://play.google.com/store/apps/details?id=com.brave.browser') || !background.actions.some((a) => a.href === 'https://apps.apple.com/app/brave-private-web-browser-vpn/id1052879175')) fail('The background-play answer must link directly to Brave on Android and iPhone/iPad');
if (!background.answer.includes('1.87+') || !background.source.href.includes('#background-title')) fail('The background-play answer must explain the current Brave requirement and link to detailed setup steps');
const installPage = await read('public-site/install/index.html');
if (!installPage.includes('Leave the PlayGarba tab open') || !installPage.includes('https://play.google.com/store/apps/details?id=com.brave.browser') || !installPage.includes('https://apps.apple.com/app/brave-private-web-browser-vpn/id1052879175')) fail('The public install guide must include detailed Brave background-play steps and direct Android/iPhone downloads');
if (!/^https:\/\/tally\.so\/r\/\w+$/.test(intents.form) || !html.includes(intents.form)) fail('Ask Kukdu must hand over to the same request form as More');

if (!process.exitCode) console.log(`✓ Ask Kukdu opens from the lower-right launcher outside More, answers from ${intents.intents.length} curated answers, the catalogue and our pages, and sends nothing anywhere`);
