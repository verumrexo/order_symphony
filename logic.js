function generateOrder(winesState) {
    let order = 'WINE ORDER\n';
    order += '='.repeat(40) + '\n\n';

    let hasItems = false;
    let totalBottles = 0;

    Object.entries(winesState).forEach(([wineName, count]) => {
        if (count > 0) {
            hasItems = true;
            order += `${wineName}: ${count}\n`;
            totalBottles += count;
        }
    });

    if (!hasItems) {
        order += 'No wines selected.\n';
    } else {
        order += '\n' + '='.repeat(40) + '\n';
        order += `Total Bottles: ${totalBottles}\n`;
    }

    return order;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateOrder };
}
