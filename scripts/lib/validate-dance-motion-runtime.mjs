import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const require = createRequire(import.meta.url);
const motion = require('../../public-site/garbo/shared/dance-motion.js');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const pagesWorkflow = readFileSync(resolve(root, '.github/workflows/pages.yml'), 'utf8');
const contract = readFileSync(resolve(root, 'docs/dance/motion-sync-contract.md'), 'utf8');

assert.equal(globalThis.GarbaDanceMotion, motion, 'browser-global API is also available in Node');
assert.deepEqual(Object.keys(motion).sort(), [
  'resolveBeatPosition',
  'resolveMotionClock',
  'resolvePhrasePhase',
  'createMotionResolver'
].sort());

const singleSegment = {
  recordingId: 'fixture-only',
  anchors: [
    { beatPosition: 0, mediaTimeSeconds: 10 },
    { beatPosition: 4, mediaTimeSeconds: 12 },
    { beatPosition: 8, mediaTimeSeconds: 14 }
  ]
};
assert.deepEqual(motion.resolveBeatPosition(singleSegment, 10), {
  status: 'mapped', songBeatPosition: 0, segmentIndex: 0, segmentId: null
});
assert.equal(motion.resolveBeatPosition(singleSegment, 11).songBeatPosition, 2);
assert.equal(motion.resolveBeatPosition(singleSegment, 13).songBeatPosition, 6);
assert.equal(motion.resolveBeatPosition(singleSegment, 14).songBeatPosition, 8);
assert.equal(motion.resolveBeatPosition(singleSegment, 9).reason, 'outside-coverage');
assert.equal(motion.resolveBeatPosition(singleSegment, 15).reason, 'outside-coverage');

const changedTempo = {
  anchors: [
    { beatPosition: 0, mediaTimeSeconds: 10 },
    { beatPosition: 2, mediaTimeSeconds: 11 },
    { beatPosition: 8, mediaTimeSeconds: 14 }
  ]
};
assert.equal(motion.resolveBeatPosition(changedTempo, 12.5).songBeatPosition, 5);

const withGap = {
  segments: [
    { id: 'before-pause', anchors: [
      { beatPosition: 0, mediaTimeSeconds: 0 },
      { beatPosition: 4, mediaTimeSeconds: 2 }
    ] },
    { id: 'after-pause', anchors: [
      { beatPosition: 8, mediaTimeSeconds: 5 },
      { beatPosition: 12, mediaTimeSeconds: 7 }
    ] }
  ]
};
assert.deepEqual(motion.resolveBeatPosition(withGap, 3), { status: 'unmapped', reason: 'no-beat-segment' });
assert.equal(motion.resolveBeatPosition(withGap, 5).songBeatPosition, 8);
assert.equal(motion.resolveBeatPosition(withGap, 5).segmentId, 'after-pause');
assert.equal(motion.resolveBeatPosition(withGap, 7).songBeatPosition, 12);

assert.equal(motion.resolveBeatPosition(null, 1).reason, 'missing-beat-map');
assert.equal(motion.resolveBeatPosition({ anchors: [] }, 1).reason, 'invalid-beat-map');
assert.equal(motion.resolveBeatPosition({ anchors: [
  { beatPosition: 0, mediaTimeSeconds: 0 },
  { beatPosition: 0, mediaTimeSeconds: 1 }
] }, 0.5).reason, 'invalid-beat-anchor');
assert.equal(motion.resolveBeatPosition({ anchors: [
  { beatPosition: 0, mediaTimeSeconds: 1 },
  { beatPosition: 2, mediaTimeSeconds: 0 }
] }, 0.5).reason, 'invalid-beat-anchor');
assert.equal(motion.resolveBeatPosition({
  anchors: singleSegment.anchors,
  segments: [{ anchors: singleSegment.anchors }]
}, 11).reason, 'ambiguous-beat-map');
assert.equal(motion.resolveBeatPosition(singleSegment, Number.NaN).reason, 'invalid-media-time');

const phaseInput = { songBeatPosition: 10, phraseStartBeat: 8, phraseLengthBeats: 4, repeat: false };
assert.deepEqual(motion.resolvePhrasePhase(phaseInput), {
  status: 'playing', phraseIndex: 0, phraseBeatPosition: 2, progress: 0.5, repeat: false
});
assert.equal(motion.resolvePhrasePhase({ ...phaseInput, songBeatPosition: 7 }).status, 'waiting');
assert.equal(motion.resolvePhrasePhase({ ...phaseInput, songBeatPosition: 12 }).status, 'complete');
assert.deepEqual(motion.resolvePhrasePhase({ ...phaseInput, songBeatPosition: 13, repeat: true }), {
  status: 'playing', phraseIndex: 1, phraseBeatPosition: 1, progress: 0.25, repeat: true
});
assert.equal(motion.resolvePhrasePhase({ ...phaseInput, repeat: undefined }).reason, 'invalid-phrase-input');

const combined = {
  mediaTimeSeconds: 11,
  beatMap: singleSegment,
  phraseStartBeat: 0,
  phraseLengthBeats: 8,
  repeat: true
};
const firstEvaluation = motion.resolveMotionClock(combined);
assert.deepEqual(firstEvaluation, motion.resolveMotionClock(combined), 'the same playhead position is deterministic');
assert.equal(firstEvaluation.songBeatPosition, 2);
assert.equal(motion.resolveMotionClock({ ...combined, mediaTimeSeconds: 10 }).songBeatPosition, 0,
  'seeking backwards recomputes from the current media time');
assert.equal(motion.resolveMotionClock({ ...combined, mediaTimeSeconds: 15 }).reason, 'outside-coverage');
assert.equal(motion.resolveMotionClock({ ...combined, repeat: 'auto' }).status, 'unmapped');
const frameAt = motion.createMotionResolver(combined);
assert.deepEqual(frameAt(11), firstEvaluation, 'a compiled resolver stores configuration but no playhead state');
assert.equal(frameAt(10).songBeatPosition, 0, 'a compiled resolver recomputes directly after a backward seek');
assert.deepEqual(frameAt(11), firstEvaluation, 'the same current media time gives the same motion-clock result');

assert.match(pagesWorkflow, /public-site\/garbo/,
  'the existing Pages copy rule includes the shared browser module');
assert.match(contract, /resolveBeatPosition/);
assert.match(contract, /no-beat-segment/);
assert.match(contract, /explicit `repeat` boolean/);

console.log('Dance motion runtime validation passed: interpolation, tempo anchors, coverage gaps, boundaries, phrase looping, one-shot completion, stateless seeks and Pages packaging.');
