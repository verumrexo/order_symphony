(function() {
// Menu data structure with categories, items, and prices

const INTERBALTIJA_WINES = [
  {
    "type": "category",
    "name": "DZIRKSTOŠIE VĪNI"
  },
  {
    "type": "item",
    "name": "Contadi Castaldi Franciacorta Brut, Lombardia, Italy (37.5cl)",
    "price": "€29.00"
  },
  {
    "type": "item",
    "name": "Segura Viudas Rosado Brut, CAVA, Spain (75cl)",
    "price": "€25.00"
  },
  {
    "type": "item",
    "name": "Tissot-Maire Cremant du Jura, Blanc de Blancs Brut, France (75cl)",
    "price": "€32.00"
  },
  {
    "type": "category",
    "name": "ŠAMPANIETIS"
  },
  {
    "type": "item",
    "name": "Jean Pernet Le Mesnil Grand Cru Blanc de Blancs Brut (37.5cl)",
    "price": "€39.00"
  },
  {
    "type": "item",
    "name": "Taittinger Brut Reserve (37.5cl)",
    "price": "€39.00"
  },
  {
    "type": "item",
    "name": "Bollinger Special Cuvee (75cl)",
    "price": "€99.00"
  },
  {
    "type": "item",
    "name": "Taittinger Prelude Grand Cru (75cl)",
    "price": "€110.00"
  },
  {
    "type": "category",
    "name": "SĀRTVĪNS"
  },
  {
    "type": "item",
    "name": "Zenato Bardolino Chiaretto, Veneto, Italy (75cl)",
    "price": "€6.00 / €25.00"
  },
  {
    "type": "item",
    "name": "Studio by Miraval Rose, France (75cl)",
    "price": "€32.00"
  },
  {
    "type": "category",
    "name": "BALTVĪNI"
  },
  {
    "type": "item",
    "name": "Perrin La Vieille Ferme Blanc, France  (37,5cl)",
    "price": "€12.00"
  },
  {
    "type": "item",
    "name": "El Coto Blanco, Rioja, Spain  (37,5cl)",
    "price": "€14.00"
  },
  {
    "type": "item",
    "name": "Zenato Pinot Grigio delle Venezie, Italy  (37,5cl)",
    "price": "€15.00"
  },
  {
    "type": "item",
    "name": "Louis Latour Bourgogne Chardonnay, France  (37,5cl)",
    "price": "€22.00"
  },
  {
    "type": "item",
    "name": "Cascas Vinho Verde, Portugal (75 cl)",
    "price": "€18.00"
  },
  {
    "type": "item",
    "name": "Dr. Hermann Riesling Trocken (75cl)",
    "price": "€29.00"
  },
  {
    "type": "category",
    "name": "SARKANVĪNI"
  },
  {
    "type": "item",
    "name": "Perrin La Vieille Ferme Rouge, France  (37,5cl)",
    "price": "€12.00"
  },
  {
    "type": "item",
    "name": "E. Guigal Cotes-du_Rhone, France  (37,5cl)",
    "price": "€19.00"
  },
  {
    "type": "item",
    "name": "El Coto de Rioja Crianza, Spain  (37,5cl)",
    "price": "€15.00"
  },
  {
    "type": "item",
    "name": "San Felice Chianti Classico, Italy  (37,5cl)",
    "price": "€22.00"
  },
  {
    "type": "item",
    "name": "Cascas Tinto, Lisboa, Portugal (75 cl)",
    "price": "€18.00"
  },
  {
    "type": "item",
    "name": "Arzuaga Crianza, Spain (75 cl)",
    "price": "€29.00"
  },
  {
    "type": "item",
    "name": "Cono Sur Cabernet Sauvignon Reserva Especial, Chile (75 cl)",
    "price": "€24.00"
  },
  {
    "type": "item",
    "name": "Salentein Killka Malbec Uco Valley, Mendoza, Argentina (75 cl)",
    "price": "€29.00"
  },
  {
    "type": "item",
    "name": "Poesie Valpolicella Ripasso, Italy (75 cl)",
    "price": "€25.00"
  },
  {
    "type": "category",
    "name": "ĪPAŠO VĪNU SELEKCIJA MŪSU GARDAJIEM GRILA ĒDIENIEM"
  },
  {
    "type": "description",
    "content": "Īpašo vīnu selekcijā, esam atlasījuši vīnus no ražotājiem, kuri vīnu ražo no ekoloģiski audzētām vīnogām, daži no tiem izmanto biodinamikas vai ilgtspējīgas vīnkopības principus."
  },
  {
    "type": "category",
    "name": "ŠAMPANIETIS"
  },
  {
    "type": "item",
    "name": "Ayala Brut Rose Majeur (75 cl)",
    "price": "€95.00"
  },
  {
    "type": "item",
    "name": "Vilmart Grand Cellier d’Or Brut Millesime 2019 (75 cl)",
    "price": "€150.00"
  },
  {
    "type": "category",
    "name": "DZIRKSTOŠIE VĪNI"
  },
  {
    "type": "item",
    "name": "Ruggeri Cartizze Prosecco di Valdobbiadene Brut, Veneto, Italy (75 cl)",
    "price": "€39.00"
  },
  {
    "type": "item",
    "name": "Bellavista Alma Assemblage Franciacorta Extra Brut, Lombardia, Italy (75 cl)",
    "price": "€65.00"
  },
  {
    "type": "category",
    "name": "SĀRTVĪNS"
  },
  {
    "type": "item",
    "name": "Miraval Rose, Provence, France (75 cl)",
    "price": "€39.90"
  },
  {
    "type": "category",
    "name": "BALTVĪNI"
  },
  {
    "type": "item",
    "name": "Domaine Vacheron Sancerre, Loire, France 2024 (75 cl)",
    "price": "€54.00"
  },
  {
    "type": "item",
    "name": "E.Guigal Condrieu, Rhone, France 2020 (75 cl)",
    "price": "€89.00"
  },
  {
    "type": "item",
    "name": "Alois Lageder Pinot Grigio, Alto Adige, Italy 2023 (75 cl)",
    "price": "€35.00"
  },
  {
    "type": "item",
    "name": "Pieropan Calvarino Soave Classico, Veneto, Italy 2023 (75 cl)",
    "price": "€39.90"
  },
  {
    "type": "item",
    "name": "Hacienda Arinzano Chardonnay, Vino de Pago, Spain 2022 (75 cl)",
    "price": "€35.00"
  },
  {
    "type": "item",
    "name": "Domane Wachau Gruner Veltliner Achleiten Smaragd, Austria 2023 (75 cl)",
    "price": "€67.00"
  },
  {
    "type": "category",
    "name": "SARKANVĪNI"
  },
  {
    "type": "item",
    "name": "Mongeard Mugneret Bourgogne, France 2021 (75 cl)",
    "price": "€59.00"
  },
  {
    "type": "item",
    "name": "Chateau La Tour Figeac St.Emilion Grand Cru Classe, Bordeaux 2020 (75 cl)",
    "price": "€90.00"
  },
  {
    "type": "item",
    "name": "Coudolet de Beaucastel Cotes-du-Rhone, Rhone, France 2022 (75 cl)",
    "price": "€59.00"
  },
  {
    "type": "item",
    "name": "E.Guigal Hermitage, Rhone, France 2020 (75 cl)",
    "price": "€128.00"
  },
  {
    "type": "item",
    "name": "Tenuta Fertuna Lodai Cabernet Sauvignon Maremma, Toscana, Italy (75 cl)",
    "price": "€36.00"
  },
  {
    "type": "item",
    "name": "il Poggione Brunello di Montalcino, Toscana, Italy 2019 (75 cl)",
    "price": "€77.00"
  },
  {
    "type": "item",
    "name": "Planeta Santa Cecilia, Sicilia, Italy 2021 (75 cl)",
    "price": "€55.00"
  },
  {
    "type": "item",
    "name": "Vietti Barolo, Piemonte, Italy 2021 (75 cl)",
    "price": "€110.00"
  },
  {
    "type": "item",
    "name": "Pesquera Crianza, Ribera del Duero, Spain 2022 (75 cl)",
    "price": "€39.00"
  },
  {
    "type": "item",
    "name": "Flor de Pingus, Ribera del Duero, Spain 2022 (75 cl)",
    "price": "€178.00"
  },
  {
    "type": "item",
    "name": "Henschke Henry Seven Shiraz Grenache Viognier Barossa, Australia 2023 (75 cl)",
    "price": "€52.00"
  },
  {
    "type": "item",
    "name": "Achaval Ferrer Quimera, Mendoza, Argentina 2021 (75 cl)",
    "price": "€69.00"
  },
  {
    "type": "item",
    "name": "Double Diamond Cabernet Sauvignon, Napa Valley, California 2022 (75 cl)",
    "price": ""
  },
  {
    "type": "category",
    "name": "ŪDENS"
  },
  {
    "type": "item",
    "name": "Ūdens b/g Acqua Panna 0.25l",
    "price": "€2.80"
  },
  {
    "type": "item",
    "name": "Ūdens b/g Acqua Panna 0.75l",
    "price": "€5.80"
  },
  {
    "type": "item",
    "name": "Ūdens a/g S.Pellegrino 0.25l",
    "price": "€2.80"
  },
  {
    "type": "item",
    "name": "Ūdens a/g S.Pellegrino 0.75l",
    "price": "€5.80"
  }
];

const PLACEHOLDER_WINES = [
    {
        "type": "category",
        "name": "DZIRKSTOŠIE VĪNI"
    },
    {
        "type": "item",
        "name": "Domus Picta Prosecco, Valdobbiadene, Italy (75cl)",
        "price": "€6.50 / €29.00"
    },
    {
        "type": "item",
        "name": "Les Cocottes Chardonnay non-alcoholic (75cl)",
        "price": "€6.00 / €28.00"
    },
    {
        "type": "category",
        "name": "BALTVĪNI"
    },
    {
        "type": "item",
        "name": "Dollfly river Sauvignon Blanc Marlborgugh, New Zealand (75 cl)",
        "price": "€6.50 / €29.00"
    },
    {
        "type": "item",
        "name": "Aragosta Vermentino Di Sardegna (75cl)",
        "price": "€21.00"
    },
    {
        "type": "item",
        "name": "La Villete Chardonnay, France (75cl)",
        "price": "€21.00"
    },
    {
        "type": "category",
        "name": "SARKANVĪNI"
    },
    {
        "type": "item",
        "name": "Zuccardi Serie A, Malbec, Argentina (75 cl)",
        "price": "€6.50 / €29.00"
    },
    {
        "type": "item",
        "name": "Conte di Campiano Riserva Primitivo, Italy (75 cl)",
        "price": "€25.00"
    }
];

// Icons
const ICONS = {
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`
};

// Initialize the app
let wines = {};
let currentMenuData = INTERBALTIJA_WINES;

function initializeWines() {
    // Reset or initialize wines object
    for (let key in wines) delete wines[key];

    // Initialize wines for both lists to ensure state exists
    const allLists = [INTERBALTIJA_WINES, PLACEHOLDER_WINES];
    allLists.forEach(list => {
        list.forEach(entry => {
            if (entry.type === 'item') {
                wines[entry.name] = 0;
            }
        });
    });
}

function renderWineList(menuData = currentMenuData) {
    const wineList = document.getElementById('wineList');
    if (!wineList) return;

    wineList.innerHTML = '';

    let currentGroup = null;
    let currentCard = null;

    menuData.forEach(entry => {
        if (entry.type === 'category') {
            // Create new group
            currentGroup = document.createElement('div');
            currentGroup.className = 'wine-group';

            const header = document.createElement('h2');
            header.className = 'wine-category-header';
            header.textContent = entry.name;
            currentGroup.appendChild(header);

            // Create card container for items
            currentCard = document.createElement('div');
            currentCard.className = 'wine-card';
            currentGroup.appendChild(currentCard);

            wineList.appendChild(currentGroup);
        } else if (entry.type === 'description') {
            if (currentGroup) {
                 const desc = document.createElement('p');
                 desc.className = 'wine-description';
                 desc.textContent = entry.content;
                 currentGroup.insertBefore(desc, currentCard);
            }
        } else if (entry.type === 'item') {
            if (!currentCard) {
                // Fallback
                currentGroup = document.createElement('div');
                currentGroup.className = 'wine-group';
                currentCard = document.createElement('div');
                currentCard.className = 'wine-card';
                currentGroup.appendChild(currentCard);
                wineList.appendChild(currentGroup);
            }

            const count = wines[entry.name] || 0;

            const wineItem = document.createElement('div');
            wineItem.className = 'wine-item';

            // Left: Info
            const wineInfo = document.createElement('div');
            wineInfo.className = 'wine-info';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'wine-name';
            nameDiv.textContent = entry.name;

            const priceDiv = document.createElement('div');
            priceDiv.className = 'wine-price';
            priceDiv.textContent = entry.price;

            wineInfo.appendChild(nameDiv);
            wineInfo.appendChild(priceDiv);

            // Right: Counter
            const wineCounter = document.createElement('div');
            wineCounter.className = 'wine-counter';

            const minusBtn = document.createElement('button');
            minusBtn.className = 'counter-btn minus-btn';
            minusBtn.dataset.wine = entry.name;
            minusBtn.innerHTML = ICONS.minus;

            const countDisplay = document.createElement('div');
            countDisplay.className = `count-display ${count > 0 ? 'active' : ''}`;
            countDisplay.textContent = count;

            const plusBtn = document.createElement('button');
            plusBtn.className = 'counter-btn plus-btn';
            plusBtn.dataset.wine = entry.name;
            plusBtn.innerHTML = ICONS.plus;

            wineCounter.appendChild(minusBtn);
            wineCounter.appendChild(countDisplay);
            wineCounter.appendChild(plusBtn);

            wineItem.appendChild(wineInfo);
            wineItem.appendChild(wineCounter);

            currentCard.appendChild(wineItem);
        }
    });

}

function switchMenu(menuName) {
    if (menuName === 'placeholder') {
        currentMenuData = PLACEHOLDER_WINES;
    } else {
        currentMenuData = INTERBALTIJA_WINES;
    }
    renderWineList();
}

function attachEventListeners() {
    const wineList = document.getElementById('wineList');
    wineList.addEventListener('click', (e) => {
        const plusBtn = e.target.closest('.plus-btn');
        if (plusBtn) {
            const wineName = plusBtn.dataset.wine;
            wines[wineName] = (wines[wineName] || 0) + 1;
            // Removed saveWines();
            renderWineList();
            return;
        }

        const minusBtn = e.target.closest('.minus-btn');
        if (minusBtn) {
            const wineName = minusBtn.dataset.wine;
            if (wines[wineName] > 0) {
                wines[wineName]--;
                // Removed saveWines();
                renderWineList();
            }
            return;
        }
    });

    // Menu Selector
    const menuSelector = document.getElementById('menuSelector');
    if (menuSelector) {
        menuSelector.addEventListener('change', (e) => {
            switchMenu(e.target.value);
        });
    }
}

function copyToClipboard() {
    const order = generateOrder(wines, currentMenuData);
    
    // Check if wines are selected (only in current menu)
    // We can check if order string is "No wines selected." or empty
    if (!order || order.trim() === 'No wines selected.') {
        showFeedback('Please select at least one wine from the current list!', 'error');
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
    // Only reset wines in the current menu
    currentMenuData.forEach(entry => {
        if (entry.type === 'item') {
            wines[entry.name] = 0;
        }
    });

    renderWineList();
    showFeedback('Counters reset!');
}

function showFeedback(message, type = 'success') {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = 'feedback';
    feedback.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

// Event listeners
if (typeof document !== 'undefined') {
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
    document.getElementById('resetBtn').addEventListener('click', resetCounts);
}

// Initialize the app on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        initializeWines();
        renderWineList();
        attachEventListeners();
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INTERBALTIJA_WINES,
        PLACEHOLDER_WINES,
        wines,
        initializeWines,
        resetCounts,
        renderWineList,
        switchMenu
    };
}
})();
