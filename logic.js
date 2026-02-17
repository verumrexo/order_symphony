function generateOrder(winesState, menuData = []) {
    let order = '';
    let hasItems = false;

    // Determine if we should filter based on menuData being provided
    // If menuData is provided (even empty array), we treat it as a filter list.
    // However, typical usage when not filtering might be passing nothing.
    // The previous implementation defaulted menuData to [].
    // If we want to support "no menu data provided" = "no filtering", we check length.
    // But if we want strict filtering, an empty menuData means no allowed items.
    // Let's stick to: if menuData is provided and non-empty, we filter.
    const shouldFilter = (menuData && Array.isArray(menuData) && menuData.length > 0);

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
                // Determine suffix
                const category = wineCategoryMap[wineName];

                // Filtering Logic
                if (shouldFilter && !wineCategoryMap.hasOwnProperty(wineName)) {
                    return;
                }

                hasItems = true;
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
