// Default wine list (populated from the pulled menu)
const DEFAULT_WINES = [
    'Domus Picta Prosecco, Valdobbiadene, Italy (75cl)',
    'Contadi Castaldi Franciacorta Brut, Lombardia, Italy (37.5cl)',
    'Segura Viudas Rosado Brut, CAVA, Spain (75cl)',
    'Tissot-Maire Cremant du Jura, Blanc de Blancs Brut, France (75cl)',
    'Les Cocottes Chardonnay non-alcoholic (75cl)',
    'Jean Pernet Le Mesnil Grand Cru Blanc de Blancs Brut (37.5cl)',
    'Taittinger Brut Reserve (37.5cl)',
    'Bollinger Special Cuvee (75cl)',
    'Taittinger Prelude Grand Cru (75cl)',
    'Zenato Bardolino Chiaretto, Veneto, Italy (75cl)',
    'Studio by Miraval Rose, France (75cl)',
    'Perrin La Vieille Ferme Blanc, France (37,5cl)',
    'El Coto Blanco, Rioja, Spain (37,5cl)',
    'Zenato Pinot Grigio delle Venezie, Italy (37,5cl)',
    'Louis Latour Bourgogne Chardonnay, France (37,5cl)',
    'Dollfly river Sauvignon Blanc Marlborgugh, New Zealand (75 cl)',
    'Cascas Vinho Verde, Portugal (75 cl)',
    'Aragosta Vermentino Di Sardegna (75cl)',
    'La Villete Chardonnay, France (75cl)',
    'Dr. Hermann Riesling Trocken (75cl)',
    'Perrin La Vieille Ferme Rouge, France (37,5cl)',
    'E. Guigal Cotes-du_Rhone, France (37,5cl)',
    'El Coto de Rioja Crianza, Spain (37,5cl)',
    'San Felice Chianti Classico, Italy (37,5cl)',
    'Zuccardi Serie A, Malbec, Argentina (75 cl)',
    'Cascas Tinto, Lisboa, Portugal (75 cl)',
    'Arzuaga Crianza, Spain (75 cl)',
    'Cono Sur Cabernet Sauvignon Reserva Especial, Chile (75 cl)',
    'Salentein Killka Malbec Uco Valley, Mendoza, Argentina (75 cl)',
    'Conte di Campiano Riserva Primitivo, Italy (75 cl)',
    'Poesie Valpolicella Ripasso, Italy (75 cl)',
    'Ayala Brut Rose Majeur (75 cl)',
    'Vilmart Grand Cellier d’Or Brut Millesime 2019 (75 cl)',
    'Ruggeri Cartizze Prosecco di Valdobbiadene Brut, Veneto, Italy (75 cl)',
    'Bellavista Alma Assemblage Franciacorta Extra Brut, Lombardia, Italy (75 cl)',
    'Miraval Rose, Provence, France (75 cl)',
    'Domaine Vacheron Sancerre, Loire, France 2024 (75 cl)',
    'E.Guigal Condrieu, Rhone, France 2020 (75 cl)',
    'Alois Lageder Pinot Grigio, Alto Adige, Italy 2023 (75 cl)',
    'Pieropan Calvarino Soave Classico, Veneto, Italy 2023 (75 cl)',
    'Hacienda Arinzano Chardonnay, Vino de Pago, Spain 2022 (75 cl)',
    'Domane Wachau Gruner Veltliner Achleiten Smaragd, Austria 2023 (75 cl)',
    'Mongeard Mugneret Bourgogne, France 2021 (75 cl)',
    'Chateau La Tour Figeac St.Emilion Grand Cru Classe, Bordeaux 2020 (75 cl)',
    'Coudolet de Beaucastel Cotes-du-Rhone, Rhone, France 2022 (75 cl)',
    'E.Guigal Hermitage, Rhone, France 2020 (75 cl)',
    'Tenuta Fertuna Lodai Cabernet Sauvignon Maremma, Toscana, Italy (75 cl)',
    'il Poggione Brunello di Montalcino, Toscana, Italy 2019 (75 cl)',
    'Planeta Santa Cecilia, Sicilia, Italy 2021 (75 cl)',
    'Vietti Barolo, Piemonte, Italy 2021 (75 cl)',
    'Pesquera Crianza, Ribera del Duero, Spain 2022 (75 cl)',
    'Flor de Pingus, Ribera del Duero, Spain 2022 (75 cl)',
    'Henschke Henry Seven Shiraz Grenache Viognier Barossa, Australia 2023 (75 cl)',
    'Achaval Ferrer Quimera, Mendoza, Argentina 2021 (75 cl)',
    'Double Diamond Cabernet Sauvignon, Napa Valley, California 2022 (75 cl)'
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
    const fragment = document.createDocumentFragment();

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
        
        fragment.appendChild(wineItem);
    });

    wineList.appendChild(fragment);

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
