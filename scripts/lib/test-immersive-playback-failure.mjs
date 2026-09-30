#!/usr/bin/env node
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../../docs/product/prototypes/garbo/garbo.js', import.meta.url), 'utf8');
const player = source.slice(source.indexOf('/* ---------- standalone YouTube audio/video player ---------- */'), source.indexOf('function syncVideoDock()'));
const play = source.slice(source.indexOf('  function play() {'), source.indexOf('  function pause() {'));

assert.match(player, /function failPlayback\(message\)/, 'failed playback needs one recovery path');
assert.match(player, /setMode\('paused'\)/, 'a failed start must return the controls to Play');
assert.match(player, /YouTube could not connect[\s\S]*tap Play to retry/i, 'a connection error must give the listener a retry path');
assert.match(player, /\$\('hint'\)\.textContent = guidance;[\s\S]*toast\(guidance\)/, 'failure guidance must reach the polite live region and visible toast');
assert.match(player, /onReady: function \(\)[\s\S]*if \(S\.mode === 'loading'\) ytPlayCurrent\(\)/, 'a delayed API-ready event must continue the pending play request');
assert.match(player, /PlayerState\.PLAYING\)[\s\S]*setMode\('playing'\)/, 'playing UI must follow YouTube confirmation');
assert.match(player, /onError: function \(event\)[\s\S]*failPlayback\(message\)/, 'YouTube embed errors must be reported honestly');
assert.match(play, /S\.mode === 'loading'[\s\S]*failPlayback\(/, 'a start that never receives YouTube confirmation must fail visibly');
assert.doesNotMatch(play, /setMode\(S\.live \|\| S\.hosted \? 'live' : 'playing'\)/, 'elapsed time must not claim that YouTube started');

console.log('✓ Immersive playback waits for YouTube confirmation and offers an honest retry on failure');
