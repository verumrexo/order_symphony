// Menu data structure with categories, items, and prices
const MENU_DATA = [
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
    "type": "item",
    "name": "Les Cocottes Chardonnay non-alcoholic (75cl)",
    "price": "€6.00 / €28.00"
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
    "name": "Dollfly river Sauvignon Blanc Marlborgugh, New Zealand (75 cl)",
    "price": "€6.50 / €29.00"
  },
  {
    "type": "item",
    "name": "Cascas Vinho Verde, Portugal (75 cl)",
    "price": "€18.00"
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
    "name": "Zuccardi Serie A, Malbec, Argentina (75 cl)",
    "price": "€6.50 / €29.00"
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
    "name": "Conte di Campiano Riserva Primitivo, Italy (75 cl)",
    "price": "€25.00"
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

// Initialize the app
let wines = {};

function initializeWines() {
    const saved = localStorage.getItem('wines');
    let savedWines = {};
    if (saved) {
        savedWines = JSON.parse(saved);
    }

    // Initialize wines object, preserving saved values if they exist
    MENU_DATA.forEach(entry => {
        if (entry.type === 'item') {
            wines[entry.name] = savedWines[entry.name] || 0;
        }
    });
}

function saveWines() {
    localStorage.setItem('wines', JSON.stringify(wines));
}

function renderWineList() {
    const wineList = document.getElementById('wineList');
    wineList.innerHTML = '';

    MENU_DATA.forEach(entry => {
        if (entry.type === 'category') {
            const categoryHeader = document.createElement('h2');
            categoryHeader.className = 'wine-category';
            categoryHeader.textContent = entry.name;
            wineList.appendChild(categoryHeader);
        } else if (entry.type === 'description') {
            const description = document.createElement('p');
            description.className = 'wine-description';
            description.textContent = entry.content;
            wineList.appendChild(description);
        } else if (entry.type === 'item') {
            const wineName = entry.name;
            const count = wines[wineName];

            const wineItem = document.createElement('div');
            wineItem.className = 'wine-item';

            wineItem.innerHTML = `
                <div class="wine-info">
                    <div class="wine-name"></div>
                    <div class="wine-price"></div>
                </div>
                <div class="wine-counter">
                    <button class="minus-btn">-</button>
                    <div class="count-display"></div>
                    <button class="plus-btn">+</button>
                </div>
            `;

            // Use textContent for safe data insertion
            wineItem.querySelector('.wine-name').textContent = wineName;
            wineItem.querySelector('.wine-price').textContent = entry.price;
            wineItem.querySelector('.count-display').textContent = count;

            // Use dataset for safe attribute handling
            wineItem.querySelector('.plus-btn').dataset.wine = wineName;
            wineItem.querySelector('.minus-btn').dataset.wine = wineName;

            wineList.appendChild(wineItem);
        }
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

    // Add event listeners to minus buttons
    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wineName = e.target.dataset.wine;
            if (wines[wineName] > 0) {
                wines[wineName]--;
                saveWines();
                renderWineList();
            }
        });
    });
}

function generateOrder() {
    let order = '';
    let hasItems = false;
    let currentCategory = '';

    MENU_DATA.forEach(entry => {
        if (entry.type === 'category') {
            currentCategory = entry.name;
        } else if (entry.type === 'item') {
            const count = wines[entry.name];
            if (count > 0) {
                hasItems = true;
                const suffix = currentCategory === 'ŪDENS' ? 'kastes' : 'pud';
                order += `${entry.name} ${count}${suffix}\n`;
            }
        }
    });

    if (!hasItems) {
        order += 'No wines selected.\n';
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
