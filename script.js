(function() {
// Menu data structure with categories, items, and prices
const DEFAULT_MENU = [
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
    "price": "€2.80",
    "unit": { "singular": "kaste", "plural": "kastes" }
  },
  {
    "type": "item",
    "name": "Ūdens b/g Acqua Panna 0.75l",
    "price": "€5.80",
    "unit": { "singular": "kaste", "plural": "kastes" }
  },
  {
    "type": "item",
    "name": "Ūdens a/g S.Pellegrino 0.25l",
    "price": "€2.80",
    "unit": { "singular": "kaste", "plural": "kastes" }
  },
  {
    "type": "item",
    "name": "Ūdens a/g S.Pellegrino 0.75l",
    "price": "€5.80",
    "unit": { "singular": "kaste", "plural": "kastes" }
  }
];

const BALTIC_XL_MENU = [
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
        "name": "Dollfly river Sauvignon Blanc Marlborough, New Zealand (75 cl)",
        "price": "€6.50 / €29.00"
    },
    {
        "type": "item",
        "name": "Aragosta Vermentino Di Sardegna (75cl)",
        "price": "€21.00"
    },
    {
        "type": "item",
        "name": "La Villette Chardonnay, France (75cl)",
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
    },
    {
        "type": "category",
        "name": "GIN"
    },
    {
        "type": "item",
        "name": "Hendrick’s Gin",
        "price": ""
    },
    {
        "type": "item",
        "name": "Hayman’s London Dry Gin",
        "price": ""
    },
    {
        "type": "item",
        "name": "Caorunn Scottish Gin",
        "price": ""
    },
    {
        "type": "category",
        "name": "KONJAKI"
    },
    {
        "type": "item",
        "name": "A.De Fussigny XO Fine Champagne Cognac",
        "price": ""
    },
    {
        "type": "category",
        "name": "VODKA"
    },
    {
        "type": "item",
        "name": "Stolichnaya",
        "price": ""
    },
    {
        "type": "item",
        "name": "Stolichnaya Elit",
        "price": ""
    },
    {
        "type": "category",
        "name": "TEKILA"
    },
    {
        "type": "item",
        "name": "Rooster Rojo Blanco",
        "price": ""
    },
    {
        "type": "item",
        "name": "Rooster Rojo Reposado",
        "price": ""
    },
    {
        "type": "category",
        "name": "VISKIJS"
    },
    {
        "type": "item",
        "name": "Jameson",
        "price": ""
    },
    {
        "type": "item",
        "name": "Monkey Shoulder",
        "price": ""
    },
    {
        "type": "item",
        "name": "Lagavulin Islay Single Malt 16y",
        "price": ""
    },
    {
        "type": "category",
        "name": "VERMUTS"
    },
    {
        "type": "item",
        "name": "Martini Bianco",
        "price": ""
    },
    {
        "type": "item",
        "name": "Campari",
        "price": ""
    },
    {
        "type": "item",
        "name": "Aperol",
        "price": ""
    },
    {
        "type": "category",
        "name": "RUMS"
    },
    {
        "type": "item",
        "name": "Havana Club gaišais",
        "price": ""
    },
    {
        "type": "item",
        "name": "Havana Club tumšais",
        "price": ""
    },
    {
        "type": "item",
        "name": "Plantation Original Dark",
        "price": ""
    },
    {
        "type": "category",
        "name": "CITI DZĒRIENI"
    },
    {
        "type": "item",
        "name": "Rīgas melnais balzāms Original",
        "price": ""
    },
    {
        "type": "item",
        "name": "Rīgas melnais balzāms upeņu",
        "price": ""
    },
    {
        "type": "item",
        "name": "Jagermeister",
        "price": ""
    },
    {
        "type": "item",
        "name": "Calvados Busnel Hors d’Age",
        "price": ""
    }
];

const CIDO_DATA = [
    {
        "type": "category",
        "name": "SOFT DRINKS"
    },
    {
        "type": "item",
        "name": "Ūdens b/g Mangaļi 0.33l",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Ūdens a/g Mangaļi 0.33l",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Pepsi",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Pepsi Max",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Mirinda",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "7Up",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "category",
        "name": "MUCAS"
    },
    {
        "type": "item",
        "name": "Kvass",
        "price": "",
        "unit": { "singular": "muca", "plural": "mucas" }
    },
    {
        "type": "item",
        "name": "Madonas alus",
        "price": "",
        "unit": { "singular": "muca", "plural": "mucas" }
    },
    {
        "type": "category",
        "name": "SULAS"
    },
    {
        "type": "item",
        "name": "Apelsīnu",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Ābolu",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Tomātu",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Persiku",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "item",
        "name": "Plūmju",
        "price": "",
        "unit": { "singular": "kaste", "plural": "kastes" }
    },
    {
        "type": "category",
        "name": "ATGRIEŠANA"
    },
    {
        "type": "item",
        "name": "15l mucas",
        "price": "",
        "labels": { "singular": "15l muca", "plural": "15l mucas" },
        "isReturn": true
    },
    {
        "type": "item",
        "name": "30l mucas",
        "price": "",
        "labels": { "singular": "30l muca", "plural": "30l mucas" },
        "isReturn": true
    },
    {
        "type": "item",
        "name": "Pilnas Pepsi kastes",
        "price": "",
        "labels": { "singular": "Pilna Pepsi kaste", "plural": "Pilnas Pepsi kastes" },
        "isReturn": true
    },
    {
        "type": "item",
        "name": "Tukšas Pepsi kastes",
        "price": "",
        "labels": { "singular": "Tukša Pepsi kaste", "plural": "Tukšas Pepsi kastes" },
        "isReturn": true
    }
];

// Icons
const ICONS = {
    plus: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`
};

// Initialize the app
let orderState = {};
let currentMenuData = DEFAULT_MENU;

function initializeOrder() {
    const saved = localStorage.getItem('order_symphony_data');
    let savedOrders = {};
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                savedOrders = parsed;
            }
        } catch (e) {
            console.error('Failed to parse saved orders:', e);
        }
    }

    // Initialize orderState object, preserving saved values if they exist
    DEFAULT_MENU.forEach(entry => {
        if (entry.type === 'item') {
            orderState[entry.name] = savedOrders[entry.name] || 0;
        }
    });

    BALTIC_XL_MENU.forEach(entry => {
        if (entry.type === 'item') {
             if (!orderState.hasOwnProperty(entry.name)) {
                 orderState[entry.name] = savedOrders[entry.name] || 0;
             }
        }
    });

    CIDO_DATA.forEach(entry => {
        if (entry.type === 'item') {
             if (!orderState.hasOwnProperty(entry.name)) {
                 orderState[entry.name] = savedOrders[entry.name] || 0;
             }
        }
    });
}

function saveOrder() {
    localStorage.setItem('order_symphony_data', JSON.stringify(orderState));
}

function switchMenu(menuName) {
    if (menuName === 'interbaltija') {
        currentMenuData = DEFAULT_MENU;
    } else if (menuName === 'baltic_xl') {
        currentMenuData = BALTIC_XL_MENU;
    } else if (menuName === 'cido') {
        currentMenuData = CIDO_DATA;
    }
    renderOrderList(currentMenuData);
}

function renderOrderList(menuData = currentMenuData) {
    const orderList = document.getElementById('orderList');
    if (!orderList) return;

    orderList.innerHTML = '';

    let currentGroup = null;
    let currentCard = null;

    menuData.forEach(entry => {
        if (entry.type === 'category') {
            // Create new group
            currentGroup = document.createElement('div');
            currentGroup.className = 'item-group';

            const header = document.createElement('h2');
            header.className = 'category-header';
            header.textContent = entry.name;
            currentGroup.appendChild(header);

            // Create card container for items
            currentCard = document.createElement('div');
            currentCard.className = 'item-card';
            currentGroup.appendChild(currentCard);

            orderList.appendChild(currentGroup);
        } else if (entry.type === 'description') {
            if (currentGroup) {
                 const desc = document.createElement('p');
                 desc.className = 'item-description';
                 desc.textContent = entry.content;
                 currentGroup.insertBefore(desc, currentCard);
            }
        } else if (entry.type === 'item') {
            if (!currentCard) {
                // Fallback
                currentGroup = document.createElement('div');
                currentGroup.className = 'item-group';
                currentCard = document.createElement('div');
                currentCard.className = 'item-card';
                currentGroup.appendChild(currentCard);
                orderList.appendChild(currentGroup);
            }

            const count = orderState[entry.name] || 0;

            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';

            // Left: Info
            const itemInfo = document.createElement('div');
            itemInfo.className = 'item-info';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'item-name';
            nameDiv.textContent = entry.name;

            itemInfo.appendChild(nameDiv);

            if (entry.price) {
                const priceDiv = document.createElement('div');
                priceDiv.className = 'item-price';
                priceDiv.textContent = entry.price;
                itemInfo.appendChild(priceDiv);
            }

            // Right: Counter
            const itemCounter = document.createElement('div');
            itemCounter.className = 'item-counter';

            const minusBtn = document.createElement('button');
            minusBtn.className = 'counter-btn minus-btn';
            minusBtn.dataset.item = entry.name;
            minusBtn.setAttribute('aria-label', `Decrease quantity for ${entry.name}`);
            minusBtn.title = 'Decrease quantity';
            minusBtn.innerHTML = ICONS.minus;

            const countDisplay = document.createElement('div');
            countDisplay.className = `count-display ${count > 0 ? 'active' : ''}`;
            countDisplay.dataset.item = entry.name;
            countDisplay.textContent = count;

            const plusBtn = document.createElement('button');
            plusBtn.className = 'counter-btn plus-btn';
            plusBtn.dataset.item = entry.name;
            plusBtn.setAttribute('aria-label', `Increase quantity for ${entry.name}`);
            plusBtn.title = 'Increase quantity';
            plusBtn.innerHTML = ICONS.plus;

            itemCounter.appendChild(minusBtn);
            itemCounter.appendChild(countDisplay);
            itemCounter.appendChild(plusBtn);

            orderItem.appendChild(itemInfo);
            orderItem.appendChild(itemCounter);

            currentCard.appendChild(orderItem);
        }
    });

}

function updateItemCount(itemName) {
    const safeName = itemName.replace(/"/g, '\\"');
    const countDisplay = document.querySelector(`.count-display[data-item="${safeName}"]`);

    if (countDisplay) {
        const count = orderState[itemName] || 0;
        countDisplay.textContent = count;
        if (count > 0) {
            countDisplay.classList.add('active');
        } else {
            countDisplay.classList.remove('active');
        }
    }
}

function attachEventListeners() {
    const orderList = document.getElementById('orderList');
    orderList.addEventListener('click', (e) => {
        const plusBtn = e.target.closest('.plus-btn');
        if (plusBtn) {
            const itemName = plusBtn.dataset.item;
            orderState[itemName] = (orderState[itemName] || 0) + 1;
            saveOrder();
            updateItemCount(itemName);
            return;
        }

        const minusBtn = e.target.closest('.minus-btn');
        if (minusBtn) {
            const itemName = minusBtn.dataset.item;
            if (orderState[itemName] > 0) {
                orderState[itemName]--;
                saveOrder();
                updateItemCount(itemName);
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
    const order = generateOrder(orderState, currentMenuData);
    
    // Check if items are selected (only in current menu)
    // We can check if order string is "No items selected." or empty
    if (!order || order.trim() === 'No items selected.') {
        showFeedback('Please select at least one item from the current list!', 'error');
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
    // Only reset items in the current menu
    currentMenuData.forEach(entry => {
        if (entry.type === 'item') {
            orderState[entry.name] = 0;
        }
    });

    saveOrder();
    renderOrderList();
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
        initializeOrder();
        renderOrderList();
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MENU_DATA: DEFAULT_MENU,
        orderState,
        initializeOrder,
        saveOrder,
        switchMenu,
        resetCounts,
        renderOrderList
    };
}
window.addEventListener('DOMContentLoaded', () => {
    initializeOrder();
    renderOrderList();
    attachEventListeners();

});
})();
