const fs = require('fs');

const scriptPath = 'script.js';
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

const itemToRemove = {
    "type": "item",
    "name": "E. Guigal Cotes-du-Rhone, France  (37,5cl)",
    "price": "€19.00"
};

// We will use a regex or string replacement to remove this item.
// It should appear in BALTIC_XL_MENU array.

// Since the file has BALTIC_XL_MENU as a variable, we can find the block and remove the item.
// The item string representation in JSON-like format in script.js:
// {
//     "type": "item",
//     "name": "E. Guigal Cotes-du-Rhone, France  (37,5cl)",
//     "price": "€19.00"
// },

// Be careful with spacing/indentation.
// Let's search for the name first.

const searchString = `"name": "E. Guigal Cotes-du-Rhone, France  (37,5cl)"`;
const index = scriptContent.indexOf(searchString);

if (index === -1) {
    console.error("Item not found!");
    process.exit(1);
}

// Find the start and end of the object containing this name.
// Since we know the structure, we can try to match the full object block.

// We can use a targeted regex replacement.
// match: { "type": "item", "name": "E. Guigal Cotes-du-Rhone ...", "price": "..." },?
// We need to account for newlines and spaces.

const regex = /\{\s*"type": "item",\s*"name": "E\. Guigal Cotes-du-Rhone, France\s+\(37,5cl\)",\s*"price": "€19\.00"\s*\},?\s*/;

const newContent = scriptContent.replace(regex, '');

if (newContent.length === scriptContent.length) {
    console.error("Replacement failed, regex didn't match.");
    // Let's debug by printing a snippet around the index.
    const start = Math.max(0, index - 50);
    const end = Math.min(scriptContent.length, index + 100);
    console.log("Snippet around match:");
    console.log(scriptContent.substring(start, end));
    process.exit(1);
}

fs.writeFileSync(scriptPath, newContent);
console.log("Removed E. Guigal Cotes-du-Rhone from script.js");
