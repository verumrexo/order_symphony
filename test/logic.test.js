const test = require('node:test');
const assert = require('node:assert');
const { generateOrder } = require('../logic.js');

test('generateOrder handles empty selection', () => {
    const winesState = {
        'Wine A': 0,
        'Wine B': 0
    };
    const order = generateOrder(winesState);
    assert.match(order, /No wines selected\./);
});

test('generateOrder handles single wine selection', () => {
    const winesState = {
        'Wine A': 2,
        'Wine B': 0
    };
    const order = generateOrder(winesState);
    assert.match(order, /Wine A: 2/);
    assert.match(order, /Total Bottles: 2/);
});

test('generateOrder handles multiple wine selections', () => {
    const winesState = {
        'Wine A': 2,
        'Wine B': 3,
        'Wine C': 0
    };
    const order = generateOrder(winesState);
    assert.match(order, /Wine A: 2/);
    assert.match(order, /Wine B: 3/);
    assert.match(order, /Total Bottles: 5/);
});

test('generateOrder handles totally empty state', () => {
    const winesState = {};
    const order = generateOrder(winesState);
    assert.match(order, /No wines selected\./);
});
