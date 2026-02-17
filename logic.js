function generateOrder(winesState) {
    let order = 'WINE ORDER\n';
    order += '='.repeat(40) + '\n\n';

    let hasItems = false;
    let totalBottles = 0;

    if (winesState) {
        Object.entries(winesState).forEach(([wineName, count]) => {
            const numCount = parseInt(count, 10);
            if (!isNaN(numCount) && numCount > 0) {
                hasItems = true;
                order += `${wineName}: ${numCount}\n`;
                totalBottles += numCount;
            }
        });
    }

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
