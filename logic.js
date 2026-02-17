function generateOrder(winesState, menuData = []) {
    let order = '';
    let hasItems = false;

    // Build category map if menuData is provided
    const wineCategoryMap = {};
    if (menuData && Array.isArray(menuData)) {
        let currentCategory = '';
        menuData.forEach(entry => {
            if (entry.type === 'category') {
                currentCategory = entry.name;
            } else if (entry.type === 'item') {
                wineCategoryMap[entry.name] = currentCategory;
            }
        });
    }

    if (winesState) {
        Object.entries(winesState).forEach(([wineName, count]) => {
            const numCount = parseInt(count, 10);
            if (!isNaN(numCount) && numCount > 0) {
                hasItems = true;

                // Determine suffix
                const category = wineCategoryMap[wineName];
                const suffix = (category === 'ŪDENS') ? 'kastes' : 'pud';

                order += `${wineName}: ${numCount}${suffix}\n`;
            }
        });
    }

    if (!hasItems) {
        order += 'No wines selected.\n';
    }

    return order;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateOrder };
}
