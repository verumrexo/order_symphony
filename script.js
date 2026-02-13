// Default wine list
const DEFAULT_WINES = [
    'Cabernet Sauvignon',
    'Merlot',
    'Pinot Noir',
    'Chardonnay',
    'Sauvignon Blanc',
    'Riesling',
    'Prosecco',
    'Chianti',
    'Tempranillo',
    'Syrah'
];

// Initialize the app
let wines = {};

function initializeWines() {
    const saved = localStorage.getItem('wines');
    if (saved) {
        wines = JSON.parse(saved);
    } else {
        DEFAULT_WINES.forEach(wine => {
            wines[wine] = 0;
        });
    }
}

function saveWines() {
    localStorage.setItem('wines', JSON.stringify(wines));
}

function renderWineList() {
    const wineList = document.getElementById('wineList');
    wineList.innerHTML = '';

    Object.entries(wines).forEach(([wineName, count]) => {
        const wineItem = document.createElement('div');
        wineItem.className = 'wine-item';
        
        wineItem.innerHTML = `
            <div class="wine-info">
                <div class="wine-name">${wineName}</div>
                <div class="wine-count">Quantity: <span class="count-value">${count}</span></div>
            </div>
            <div class="wine-counter">
                <button class="plus-btn" data-wine="${wineName}">+</button>
                <div class="count-display">${count}</div>
            </div>
        `;
        
        wineList.appendChild(wineItem);
    });

    // Add event listeners to plus buttons
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wineName = e.target.dataset.wine;
            wines[wineName]++;
            saveWines();
            renderWineList();
        });
    });
}

function generateOrder() {
    let order = 'WINE ORDER\n';
    order += '='.repeat(40) + '\n\n';

    let hasItems = false;
    let totalBottles = 0;

    Object.entries(wines).forEach(([wineName, count]) => {
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

function copyToClipboard() {
    const order = generateOrder();
    
    // Check if wines are selected
    if (!Object.values(wines).some(count => count > 0)) {
        showFeedback('Please select at least one wine!', 'error');
        return;
    }

    navigator.clipboard.writeText(order).then(() => {
        showFeedback('✓ Order copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = order;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showFeedback('✓ Order copied to clipboard!');
    });
}

function resetCounts() {
    Object.keys(wines).forEach(wine => {
        wines[wine] = 0;
    });
    saveWines();
    renderWineList();
    showFeedback('Counters reset!');
}

function showFeedback(message, type = 'success') {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = 'feedback';
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        feedback.textContent = '';
    }, 3000);
}

// Event listeners
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('resetBtn').addEventListener('click', resetCounts);

// Initialize the app on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeWines();
    renderWineList();
});
