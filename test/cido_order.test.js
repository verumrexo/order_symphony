const { test } = require('node:test');
const assert = require('node:assert');
const { generateOrder } = require('../logic.js');

// Mock Data Structure for Cido (based on plan)
const MOCK_CIDO_DATA = [
    { type: "category", name: "SOFT DRINKS" },
    {
        type: "item",
        name: "Pepsi",
        price: "",
        unit: { singular: "kaste", plural: "kastes" }
    },
    {
        type: "item",
        name: "7Up",
        price: "",
        unit: { singular: "kaste", plural: "kastes" }
    },
    { type: "category", name: "MUCAS" },
    {
        type: "item",
        name: "Kvass",
        price: "",
        unit: { singular: "muca", plural: "mucas" }
    },
    { type: "category", name: "ATGRIEŠANA" },
    {
        type: "item",
        name: "15l mucas",
        price: "",
        labels: { singular: "15l muca", plural: "15l mucas" },
        isReturn: true
    },
    {
        type: "item",
        name: "Pilnas Pepsi kastes",
        price: "",
        labels: { singular: "Pilna Pepsi kaste", plural: "Pilnas Pepsi kastes" },
        isReturn: true
    }
];

test('generateOrder formats Cido items correctly', (t) => {
    const winesState = {
        'Pepsi': 4,
        'Kvass': 1
    };

    const expected =
`Pepsi: 4 kastes
Kvass: 1 muca
`;

    const actual = generateOrder(winesState, MOCK_CIDO_DATA);
    assert.strictEqual(actual.trim(), expected.trim());
});

test('generateOrder separates Atgriešana items', (t) => {
    const winesState = {
        'Pepsi': 4,
        '15l mucas': 4,
        'Pilnas Pepsi kastes': 1
    };

    // Expected:
    // Pepsi: 4 kastes
    //
    // Atgriešana:
    // 15l mucas: 4
    // Pilna Pepsi kaste: 1

    const expected =
`Pepsi: 4 kastes

Atgriešana:
15l mucas: 4
Pilna Pepsi kaste: 1
`;

    const actual = generateOrder(winesState, MOCK_CIDO_DATA);
    // Normalize newlines for strict equality check
    assert.strictEqual(actual.trim().replace(/\n+/g, '\n'), expected.trim().replace(/\n+/g, '\n'));
});

test('generateOrder handles mixed singular/plural for Atgriešana', (t) => {
    const winesState = {
        '15l mucas': 1, // Singular: 15l muca
        'Pilnas Pepsi kastes': 4 // Plural: Pilnas Pepsi kastes
    };

    const expected =
`Atgriešana:
15l muca: 1
Pilnas Pepsi kastes: 4
`;

    const actual = generateOrder(winesState, MOCK_CIDO_DATA);
    assert.strictEqual(actual.trim().replace(/\n+/g, '\n'), expected.trim().replace(/\n+/g, '\n'));
});

test('generateOrder fallback for standard wines (no unit/labels)', (t) => {
    const MOCK_STANDARD_DATA = [
        { type: "category", name: "DZIRKSTOŠIE VĪNI" },
        { type: "item", name: "Prosecco", price: "€10" }
    ];

    const winesState = { 'Prosecco': 2 };

    // Existing logic: if category is not 'ŪDENS', suffix is 'pud'
    const expected = `Prosecco: 2pud`;

    const actual = generateOrder(winesState, MOCK_STANDARD_DATA);
    assert.strictEqual(actual.trim(), expected.trim());
});
