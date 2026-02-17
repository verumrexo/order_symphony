const test = require('node:test');
const assert = require('node:assert');

// Mock Browser Environment
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => { store[key] = value.toString(); },
        clear: () => { store = {}; },
        removeItem: (key) => { delete store[key]; }
    };
})();

// Mock DOM elements
const createMockElement = (tag) => ({
    tagName: tag.toUpperCase(),
    className: '',
    textContent: '',
    innerHTML: '',
    style: {},
    dataset: {},
    appendChild: () => {},
    insertBefore: () => {},
    addEventListener: () => {},
    classList: {
        add: () => {},
        remove: () => {}
    },
    // Mock getElementById for children
    querySelector: () => null,
    closest: () => null
});

const documentMock = {
    getElementById: (id) => createMockElement('div'),
    createElement: (tag) => createMockElement(tag),
    querySelectorAll: () => [],
    body: createMockElement('body'),
    execCommand: () => {}
};

const windowMock = {
    addEventListener: () => {}
};

const navigatorMock = {
    clipboard: {
        writeText: () => Promise.resolve()
    }
};

// Set globals
global.window = windowMock;
global.document = documentMock;
global.localStorage = localStorageMock;
global.navigator = navigatorMock;

// Mock generateOrder if it's missing (since logic.js is not loaded)
global.generateOrder = (wines) => "Mock Order";

// Import script.js
const { INTERBALTIJA_WINES, PLACEHOLDER_WINES, wines, initializeWines, resetCounts, switchMenu } = require('../script.js');

test('Data structures', () => {
    assert.ok(Array.isArray(INTERBALTIJA_WINES), 'INTERBALTIJA_WINES should be an array');
    assert.ok(INTERBALTIJA_WINES.length > 0, 'INTERBALTIJA_WINES should not be empty');

    assert.ok(Array.isArray(PLACEHOLDER_WINES), 'PLACEHOLDER_WINES should be an array');
    assert.ok(PLACEHOLDER_WINES.length > 0, 'PLACEHOLDER_WINES should not be empty');
});

test('initializeWines initializes all wines to 0', () => {
    // Reset wines
    Object.keys(wines).forEach(key => delete wines[key]);

    // Test default init
    initializeWines();

    const item1 = INTERBALTIJA_WINES.find(e => e.type === 'item');
    assert.strictEqual(wines[item1.name], 0, 'Should initialize count to 0 for Interbaltija item');

    const item2 = PLACEHOLDER_WINES.find(e => e.type === 'item');
    assert.strictEqual(wines[item2.name], 0, 'Should initialize count to 0 for Placeholder item');
});

test('switchMenu updates visible list (indirectly via resetCounts check)', () => {
    // We can't easily check currentMenuData directly unless exported,
    // but we can check if resetCounts affects the correct wines.

    initializeWines();

    const item1 = INTERBALTIJA_WINES.find(e => e.type === 'item');
    const item2 = PLACEHOLDER_WINES.find(e => e.type === 'item');

    wines[item1.name] = 5;
    wines[item2.name] = 5;

    // Switch to Placeholder
    switchMenu('placeholder');

    // Reset counts (should only reset Placeholder items)
    resetCounts();

    assert.strictEqual(wines[item2.name], 0, 'Placeholder item should be reset');
    assert.strictEqual(wines[item1.name], 5, 'Interbaltija item should NOT be reset');

    // Switch back to Interbaltija
    switchMenu('interbaltija');

    // Reset counts (should now reset Interbaltija items)
    resetCounts();

    assert.strictEqual(wines[item1.name], 0, 'Interbaltija item should be reset now');
});
