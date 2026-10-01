import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../../app.js', import.meta.url), 'utf8');
const helperStart = source.indexOf('function createSingleFlightTask(task) {');
const helperEnd = source.indexOf('\n}\n\nconst fetchCatalogue', helperStart);
assert.notEqual(helperStart, -1, 'app.js must define the single-flight helper');
assert.notEqual(helperEnd, -1, 'the helper must directly wrap the catalogue fetch');
assert.match(source.slice(helperStart, helperEnd + 2), /finally\(\(\) => \{ pending = null; \}\)/);
assert.match(source.slice(helperEnd), /const fetchCatalogue = createSingleFlightTask\(async function fetchCatalogueRequest\(\)/);

const helper = `${source.slice(helperStart, helperEnd + 2)}\ncreateSingleFlightTask`;
const createSingleFlightTask = vm.runInNewContext(helper, { Promise });

let resolveTask;
let calls = 0;
const task = createSingleFlightTask(() => {
  calls += 1;
  return calls === 1
    ? new Promise((resolve) => { resolveTask = resolve; })
    : Promise.resolve('later catalogue');
});
const first = task();
const second = task();
assert.equal(first, second, 'concurrent callers must receive the same in-flight promise');
await Promise.resolve();
assert.equal(calls, 1, 'concurrent callers must start one task');
resolveTask('catalogue');
assert.deepEqual(await Promise.all([first, second]), ['catalogue', 'catalogue']);
assert.equal(await task(), 'later catalogue');
assert.equal(calls, 2, 'a later caller must start a fresh task after success');

let attempts = 0;
const retries = createSingleFlightTask(() => {
  attempts += 1;
  return attempts === 1 ? Promise.reject(new Error('temporary')) : Promise.resolve('recovered');
});
await assert.rejects(retries(), /temporary/);
assert.equal(await retries(), 'recovered', 'a later caller must retry after failure');
assert.equal(attempts, 2);

console.log('✓ concurrent catalogue hydration shares one promise and resets after success or failure');
