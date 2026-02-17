function generateOrder(winesState, menuData = []) {
    let standardItems = [];
    let returnItems = [];
    let hasItems = false;
    let currentCategory = '';

    if (winesState && menuData && Array.isArray(menuData) && menuData.length > 0) {
        menuData.forEach(entry => {
            if (entry.type === 'category') {
                currentCategory = entry.name;
            } else if (entry.type === 'item') {
                const count = winesState[entry.name];
                const numCount = parseInt(count, 10);

                if (!isNaN(numCount) && numCount > 0) {
                    hasItems = true;
                    let line = '';

                    if (entry.labels) {
                        // Handle name change for singular/plural (e.g. Atgriešana)
                        const name = (numCount === 1 && entry.labels.singular) ? entry.labels.singular : (entry.labels.plural || entry.name);
                        line = `${name}: ${numCount}`;
                    } else if (entry.unit) {
                        // Handle unit suffix (e.g. Cido items)
                        const unit = (numCount === 1 && entry.unit.singular) ? entry.unit.singular : (entry.unit.plural || '');
                        line = `${entry.name}: ${numCount} ${unit}`;
                    } else {
                        // Standard logic (Wines/Water)
                        // If category is ŪDENS, suffix is 'kastes', else 'pud'
                        const suffix = (currentCategory === 'ŪDENS') ? 'kastes' : 'pud';
                        line = `${entry.name}: ${numCount}${suffix}`;
                    }

                    // Check if it belongs to Return section
                    if (entry.isReturn || currentCategory === 'ATGRIEŠANA') {
                        returnItems.push(line);
                    } else {
                        standardItems.push(line);
                    }
                }
            }
        });
    } else if (winesState) {
        // Fallback if menuData is not provided
        Object.entries(winesState).forEach(([wineName, count]) => {
            const numCount = parseInt(count, 10);
            if (!isNaN(numCount) && numCount > 0) {
                hasItems = true;
                standardItems.push(`${wineName}: ${numCount}pud`);
            }
        });
    }

    if (!hasItems) {
        return 'No wines selected.\n';
    }

    let parts = [];
    if (standardItems.length > 0) {
        parts.push(standardItems.join('\n'));
    }
    if (returnItems.length > 0) {
        parts.push('Atgriešana:\n' + returnItems.join('\n'));
    }

    return parts.join('\n\n') + '\n';
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateOrder };
}
