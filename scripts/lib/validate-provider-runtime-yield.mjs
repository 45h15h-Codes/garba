import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../../provider-runtime.js', import.meta.url), 'utf8');
const start = source.indexOf('  async function mapInBatches(items, mapItem, batchSize = 96) {');
const end = source.indexOf('\n  }\n\n  function sanitiseSongsInBatches', start);
assert.notEqual(start, -1, 'provider-runtime.js must define bounded batch mapping');
assert.notEqual(end, -1, 'batch mapping must end before the safe-song adapter');
assert.match(source.slice(start, end + 4), /await yieldToBrowser\(\)/);
assert.match(source, /safeSongs = await sanitiseSongsInBatches\(songs\)/);
assert.match(source, /function seedFastBoot\(\) \{[\s\S]*?sanitiseSongs\(fastBoot\.songs\)/);

const helper = `${source.slice(start, end + 4)}\nmapInBatches`;
const context = { Promise, yieldCount: 0 };
context.yieldToBrowser = () => {
  context.yieldCount += 1;
  return Promise.resolve();
};
const mapInBatches = vm.runInNewContext(helper, context);
const input = Array.from({ length: 250 }, (_, index) => index);
const mapped = await mapInBatches(input, (value) => value * 2, 64);
assert.deepEqual(Array.from(mapped), input.map((value) => value * 2));
assert.equal(context.yieldCount, 3, 'large arrays must yield between batches, not after the final batch');
assert.deepEqual(Array.from(await mapInBatches([], (value) => value)), []);

console.log('✓ provider runtime preserves mapped results and yields between large catalogue batches');
