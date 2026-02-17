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
    }
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
const { MENU_DATA, wines, initializeWines, saveWines, resetCounts } = require('../script.js');

test('MENU_DATA structure', () => {
    assert.ok(Array.isArray(MENU_DATA), 'MENU_DATA should be an array');
    assert.ok(MENU_DATA.length > 0, 'MENU_DATA should not be empty');
    const item = MENU_DATA.find(e => e.type === 'item');
    assert.ok(item, 'Should have at least one item');
    assert.ok(item.name, 'Item should have a name');
    assert.ok(item.price !== undefined, 'Item should have a price');
});

test('initializeWines loads data', () => {
    // Reset wines
    Object.keys(wines).forEach(key => delete wines[key]);

    // Test default init
    initializeWines();
    const item = MENU_DATA.find(e => e.type === 'item');
    assert.strictEqual(wines[item.name], 0, 'Should initialize count to 0');
});

test('initializeWines loads from localStorage', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    const savedData = {};
    savedData[item.name] = 5;
    localStorage.setItem('wines', JSON.stringify(savedData));

    // Reset wines
    Object.keys(wines).forEach(key => delete wines[key]);

    initializeWines();
    assert.strictEqual(wines[item.name], 5, 'Should load count from localStorage');
});

test('saveWines saves to localStorage', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    wines[item.name] = 3;
    saveWines();

    const saved = JSON.parse(localStorage.getItem('wines'));
    assert.strictEqual(saved[item.name], 3, 'Should save count to localStorage');
});

test('resetCounts resets all wines to 0', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    wines[item.name] = 10;

    resetCounts();

    assert.strictEqual(wines[item.name], 0, 'Should reset count to 0');

    const saved = JSON.parse(localStorage.getItem('wines'));
    assert.strictEqual(saved[item.name], 0, 'Should save reset state to localStorage');
});
