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
    setAttribute: () => {},
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
    execCommand: () => {},
    querySelector: () => createMockElement('div')
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
global.generateOrder = (items) => "Mock Order";

// Import script.js
const { MENU_DATA, orderState, initializeOrder, saveOrder, resetCounts, switchMenu } = require('../script.js');

test('MENU_DATA structure', () => {
    assert.ok(Array.isArray(MENU_DATA), 'MENU_DATA should be an array');
    assert.ok(MENU_DATA.length > 0, 'MENU_DATA should not be empty');
    const item = MENU_DATA.find(e => e.type === 'item');
    assert.ok(item, 'Should have at least one item');
    assert.ok(item.name, 'Item should have a name');
    assert.ok(item.price !== undefined, 'Item should have a price');
});

test('initializeOrder loads data', () => {
    // Reset orderState
    Object.keys(orderState).forEach(key => delete orderState[key]);

    // Test default init
    initializeOrder();
    const item = MENU_DATA.find(e => e.type === 'item');
    assert.strictEqual(orderState[item.name], 0, 'Should initialize count to 0');
});

test('initializeOrder loads from localStorage', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    const savedData = {};
    savedData[item.name] = 5;
    localStorage.setItem('order_symphony_data', JSON.stringify(savedData));

    // Reset orderState
    Object.keys(orderState).forEach(key => delete orderState[key]);

    initializeOrder();
    assert.strictEqual(orderState[item.name], 5, 'Should load count from localStorage');
});

test('saveOrder saves to localStorage', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    orderState[item.name] = 3;
    saveOrder();

    const saved = JSON.parse(localStorage.getItem('order_symphony_data'));
    assert.strictEqual(saved[item.name], 3, 'Should save count to localStorage');
});

test('resetCounts resets all items to 0', () => {
    const item = MENU_DATA.find(e => e.type === 'item');
    orderState[item.name] = 10;

    resetCounts();

    assert.strictEqual(orderState[item.name], 0, 'Should reset count to 0');

    const saved = JSON.parse(localStorage.getItem('order_symphony_data'));
    assert.strictEqual(saved[item.name], 0, 'Should save reset state to localStorage');
});

test('switchMenu changes current menu', () => {
    // Basic test to ensure it runs without error
    switchMenu('placeholder');
    switchMenu('interbaltija');
});
