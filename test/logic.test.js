const test = require('node:test');
const assert = require('node:assert');
const { generateOrder } = require('../logic.js');

const mockMenu = [
    { type: 'category', name: 'Reds' },
    { type: 'item', name: 'Wine A' },
    { type: 'category', name: 'ŪDENS' },
    { type: 'item', name: 'Water X' }
];

test('generateOrder handles empty selection (all zeros)', () => {
    const winesState = {
        'Wine A': 0,
        'Water X': 0
    };
    const expected = `No wines selected.\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles empty object', () => {
    const winesState = {};
    const expected = `No wines selected.\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles single wine selection with default suffix', () => {
    const winesState = {
        'Wine A': 2,
        'Water X': 0
    };
    // Expected: "Wine A: 2pud\n"
    const expected = `Wine A: 2pud\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles water selection with "kastes" suffix', () => {
    const winesState = {
        'Wine A': 0,
        'Water X': 3
    };
    // Expected: "Water X: 3kastes\n"
    const expected = `Water X: 3kastes\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles multiple selections mixed', () => {
    const winesState = {
        'Wine A': 2,
        'Water X': 3
    };
    // Expected: "Wine A: 2pud\nWater X: 3kastes\n"
    const expected = `Wine A: 2pud\nWater X: 3kastes\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder defaults to "pud" when menuData is missing', () => {
    const winesState = {
        'Wine A': 2
    };
    const expected = `Wine A: 2pud\n`;
    const actual = generateOrder(winesState); // No menuData passed
    assert.strictEqual(actual, expected);
});

test('generateOrder ignores items not in menuData', () => {
    const winesState = {
        'Unknown Wine': 5
    };
    const expected = `No wines selected.\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});

test('generateOrder handles null input gracefully', () => {
    const actual = generateOrder(null);
    const expected = `No wines selected.\n`;
    assert.strictEqual(actual, expected);
});

test('generateOrder handles string counts correctly', () => {
    const winesState = {
        'Wine A': "1"
    };
    const expected = `Wine A: 1pud\n`;
    const actual = generateOrder(winesState, mockMenu);
    assert.strictEqual(actual, expected);
});
