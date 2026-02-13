# 🍷 Wine Tracker

A simple, elegant web-based wine tracker that helps you build your wine order list easily. Click the plus button on wines you want, then copy the formatted list to send to your wine provider.

## Features

- **Quick Selection**: Click the "+" button next to each wine to increment quantity
- **Pre-loaded Wines**: Comes with 10 popular wine selections (easily customizable)
- **One-Click Copy**: Generate and copy your order in plain text format
- **Persistent Storage**: Your selections are saved in browser storage
- **Reset Button**: Clear all counts and start fresh

## How to Use

1. Open `index.html` in your web browser
2. Click the **+** button next to wines you want to order
3. The counter shows how many bottles of each wine you're selecting
4. When ready, click **Copy Order** to copy the formatted list to your clipboard
5. Paste the list in an email or message to your wine provider
6. Use **Reset** to clear all counters

## Example Output

When you click "Copy Order", it generates text like:

```
WINE ORDER
========================================

Cabernet Sauvignon: 3
Chardonnay: 2
Pinot Noir: 1

========================================
Total Bottles: 6
```

## Customization

To change the wine list, edit the `DEFAULT_WINES` array in `script.js`:

```javascript
const DEFAULT_WINES = [
    'Your Wine 1',
    'Your Wine 2',
    'Your Wine 3',
    // Add more wines here
];
```

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `script.js` - Application logic
- `README.md` - This file

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses localStorage to remember your selections.