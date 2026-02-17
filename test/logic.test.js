const test = require('node:test');
const assert = require('node:assert');
const { generateOrder } = require('../logic.js');

const SEPARATOR = '='.repeat(40);

test('generateOrder handles empty selection (all zeros)', () => {
    const winesState = {
        'Wine A': 0,
        'Wine B': 0
    };
    const expected = `WINE ORDER\n${SEPARATOR}\n\nNo wines selected.\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles empty object', () => {
    const winesState = {};
    const expected = `WINE ORDER\n${SEPARATOR}\n\nNo wines selected.\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles single wine selection', () => {
    const winesState = {
        'Wine A': 2,
        'Wine B': 0
    };
    const expected = `WINE ORDER\n${SEPARATOR}\n\nWine A: 2\n\n${SEPARATOR}\nTotal Bottles: 2\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles multiple wine selections', () => {
    const winesState = {
        'Wine A': 2,
        'Wine B': 3,
        'Wine C': 0
    };
    const expected = `WINE ORDER\n${SEPARATOR}\n\nWine A: 2\nWine B: 3\n\n${SEPARATOR}\nTotal Bottles: 5\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles null input gracefully', () => {
    const actual = generateOrder(null);
    // Should behave like empty selection
    const expected = `WINE ORDER\n${SEPARATOR}\n\nNo wines selected.\n`;
    assert.strictEqual(actual, expected, 'Should return empty order for null input');
});

test('generateOrder handles undefined input gracefully', () => {
    const actual = generateOrder(undefined);
    const expected = `WINE ORDER\n${SEPARATOR}\n\nNo wines selected.\n`;
    assert.strictEqual(actual, expected, 'Should return empty order for undefined input');
});

test('generateOrder handles string counts correctly', () => {
    const winesState = {
        'Wine A': "1",
        'Wine B': 2
    };
    // Expected total: 1 + 2 = 3
    const expected = `WINE ORDER\n${SEPARATOR}\n\nWine A: 1\nWine B: 2\n\n${SEPARATOR}\nTotal Bottles: 3\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected, 'String counts should be treated as numbers');
});

test('generateOrder handles negative counts (ignores them)', () => {
    const winesState = {
        'Wine A': -5,
        'Wine B': 2
    };
    const expected = `WINE ORDER\n${SEPARATOR}\n\nWine B: 2\n\n${SEPARATOR}\nTotal Bottles: 2\n`;
    const actual = generateOrder(winesState);
    assert.strictEqual(actual, expected);
});
