import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '../..');
const read = (file) => readFile(path.join(root, file), 'utf8');
const readJson = async (file) => JSON.parse(await read(file));

const [index, enrichRuntime, continuousRuntime, pages, youtubeRuntime, app] = await Promise.all([
  readJson('data/catalogue/index.json'),
  read('scripts/enrich-runtime-songs.mjs'),
  read('assets/runtime/continuous-set-state.js'),
  read('.github/workflows/pages.yml'),
  read('youtube-player-runtime.js'),
  read('app.js'),
]);

let failed = false;
const fail = (message) => {
  console.error(`✗ ${message}`);
  failed = true;
};

for (const marker of [
  "next.playbackContainerType = 'youtube-continuous-set'",
  'next.playbackContainerId =',
  'next.playbackContainerTitle =',
  'next.chapterDurationSeconds =',
  'next.durationSeconds = 0;',
  'isContinuousYoutubeChapter(route)',
]) {
  if (!enrichRuntime.includes(marker)) fail(`Runtime enrichment is missing continuous-set marker: ${marker}`);
}

for (const marker of [
  'GARBA_CONTINUOUS_SET_RUNTIME',
  "const continuousType = 'youtube-continuous-set'",
  'function distinctUpNext(limit = 12)',
  'function adjacentDistinct(direction)',
  "els.sheetTitle.textContent = 'After this set'",
  'different recordings',
  'event.stopImmediatePropagation()',
  "navigator.mediaSession.setActionHandler('nexttrack'",
  "navigator.mediaSession.setActionHandler('previoustrack'",
  'let syncingBadge = false;',
  'function scheduleContinuousSync()',
  'if (syncingBadge) return;',
]) {
  if (!continuousRuntime.includes(marker)) fail(`Continuous-set UI runtime is missing marker: ${marker}`);
}

// A chapter boundary must never press Next: the continuous-set transport treats Next as "leave this recording", which
// cut every chaptered recording after its first chapter.
for (const marker of [
  'function continueIntoNextChapter()',
  'if (!continueIntoNextChapter()) advance();',
  "new CustomEvent('garba:recording-chapter'",
  'function chapterStartingAt(song, id, start)',
]) {
  if (!youtubeRuntime.includes(marker)) fail(`YouTube runtime is missing chapter-continuation marker: ${marker}`);
}
if (!app.includes("window.addEventListener('garba:recording-chapter'")) {
  fail('app.js must select the next chapter of a playing recording without pressing Next');
}
// The player never stands still (owner request, #1805): a recording that can't play is always stepped over, one that
// never starts is reported so the player moves on, shuffle is on until turned off and prefers songs not heard recently,
// and Nonstop chosen in Immersive starts a set
for (const [pattern, message] of [
  [/shuffleMode: storage\.get\('garba:shuffle', true\)/, 'shuffle is on until the listener turns it off'],
  [/pickFresh\(list, \{ recentIds: recentHistory, avoidId: state\.songId \}\)/, 'shuffle prefers songs not heard recently in any tier'],
  [/addEventListener\('garba:youtube-error'[\s\S]*?if \(circle\.active\) return;[\s\S]*?chooseAnother/, 'a recording that cannot play is always stepped over'],
  [/if \(value === 'nonstop'\) \{[\s\S]*?nonstop\.play\(resumeId\)/, 'Nonstop chosen in Immersive starts a set'],
]) {
  if (!pattern.test(app)) fail(`app.js: ${message}`);
}
if (!/readyPlayer\.loadVideoById\(request\);\s*watchStart\(song, token\);/.test(youtubeRuntime)) fail('a recording asked to play is watched until it starts');
if (!youtubeRuntime.includes('code: -1, songId: song.id, stalled: true')) fail('a recording that never starts is reported so the player moves on');
if (!continuousRuntime.includes('state.shuffleMode && !state.playlist && !state.releaseContextId')) fail('Next out of a continuous set follows shuffle');

if (!enrichRuntime.includes('const chaptersByVideo = new Map();')) {
  fail('Runtime enrichment must join every chapter of a shared video into its continuous set');
}

if (!continuousRuntime.includes('if (els.queueBadge.textContent !== nextText)')) {
  fail('Continuous-set UI runtime must avoid mutating queueBadge textContent when value is unchanged');
}

if (!pages.includes('assets/runtime/continuous-set-state.js')) {
  fail('Pages build must concatenate the continuous-set runtime into deployed app.js');
}
if (!pages.includes('GARBA_CONTINUOUS_SET_RUNTIME')) {
  fail('Pages build must verify that the continuous-set runtime reached deployed app.js');
}

const playbackPaths = Array.isArray(index.playbackSources) ? index.playbackSources.filter(Boolean) : [];
const manifests = await Promise.all(playbackPaths.map((file) => readJson(file)));
const routes = Object.values(Object.assign({}, ...manifests.map((manifest) => manifest?.songSources || {})));
const continuousCandidates = routes.filter((route) => {
  if (String(route?.provider || '').toLowerCase() !== 'youtube' || !route?.videoId) return false;
  if (!Number.isFinite(Number(route.startSeconds))) return false;
  const evidence = String(route.evidenceType || '').toLowerCase();
  return route.sourceType === 'verified-performance-chapter'
    || Boolean(route.performanceSetId)
    || evidence.includes('chapter');
});

if (!continuousCandidates.length) fail('Expected at least one verified YouTube chapter route to exercise continuous-set playback');
for (const route of continuousCandidates) {
  if (!String(route.videoId || '').trim()) fail('Continuous chapter route is missing a YouTube video ID');
  if (!Number.isFinite(Number(route.startSeconds)) || Number(route.startSeconds) < 0) {
    fail(`Continuous chapter route has an invalid start: ${JSON.stringify(route)}`);
  }
}

// Every runtime song that shares its video with other chapters is either a chapter of that recording's set or a
// whole programme that spans later chapters, so all chaptered recordings play on the same way.
const runtimeSongs = await readJson(index.generatedFiles?.songs || 'data/songs.json').catch(() => null);
if (runtimeSongs) {
  const byVideo = new Map();
  for (const song of runtimeSongs) {
    if (song.playbackProvider !== 'youtube' || !song.youtubeId || !Number.isFinite(Number(song.youtubeStartSeconds))) continue;
    if (song.playbackSourceType === 'verified-release-track-reference') continue;
    byVideo.set(song.youtubeId, [...(byVideo.get(song.youtubeId) || []), song]);
  }
  for (const group of byVideo.values()) {
    const starts = [...new Set(group.map((song) => Number(song.youtubeStartSeconds)))].sort((a, b) => a - b);
    if (starts.length < 2) continue;
    for (const song of group) {
      if (song.playbackContainerType === 'youtube-continuous-set') continue;
      const start = Number(song.youtubeStartSeconds);
      const later = starts.filter((value) => value > start + 1);
      if (later.length >= 2 && start + Number(song.durationSeconds || 0) > later[1] + 30) continue;
      fail(`Chapter ${song.id} shares video ${song.youtubeId} with other chapters but is not part of its continuous set`);
    }
  }
}

if (failed) process.exit(1);
console.log(`✓ ${continuousCandidates.length} verified YouTube chapter routes are modelled as continuous listening sets`);
console.log('✓ continuous chapters preserve catalogue duration separately while playback runs through the underlying recording');
console.log('✓ queue, transport keys and Media Session navigation leave the current continuous recording instead of hopping chapters');
console.log('✓ production app.js includes and verifies the continuous-set UX runtime');
