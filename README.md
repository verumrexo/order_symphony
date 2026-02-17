# 📋 Order Symphony

A streamlined, elegant tool to build your order lists efficiently. Select items, adjust quantities, and copy the formatted list to send to your distributors. No more messy notes or forgotten items.

## Features

- **Quick Selection**: Increment quantities with a simple click.
- **Multiple Distributors**: Easily switch between different supplier lists (e.g., Interbaltija, Cido).
- **One-Click Copy**: Generate a perfectly formatted order list and copy it to your clipboard instantly.
- **Persistent Storage**: Your selections are saved automatically, so you never lose your progress.
- **Reset Capability**: Clear all counts with one button to start fresh.

## How to Use

1.  **Open the App**: Launch `index.html` in your browser.
2.  **Select a Menu**: Choose your distributor from the dropdown menu (top right).
3.  **Build Your Order**: Click the **+** button next to items you need. The counter updates automatically.
4.  **Review**: Scroll through to ensure everything is correct.
5.  **Copy**: Click **Copy Order**. The list is now in your clipboard, ready to be pasted into an email or messaging app.
6.  **Send**: Paste and send to your distributor.
7.  **Reset**: When you're done, click **Reset** to clear the counts for the next order.

## Example Output

```text
ORDER
========================================

Contadi Castaldi Franciacorta Brut: 6pud
Segura Viudas Rosado Brut: 3pud

Atgriešana:
30l mucas: 2
========================================
```

## Customization

To modify the available items, edit the `DEFAULT_MENU` array in `script.js`:

```javascript
const DEFAULT_MENU = [
    {
        "type": "category",
        "name": "YOUR CATEGORY"
    },
    {
        "type": "item",
        "name": "Your Item Name",
        "price": "€10.00"
    },
    // Add more items here
];
```

## Files

- `index.html` - The main interface.
- `style.css` - Styling and layout.
- `script.js` - Application logic and data.
- `logic.js` - Order generation logic.
- `README.md` - This documentation.

## Deployment

This project is set up for GitHub Pages.
1.  Push changes to the `main` branch.
2.  Ensure GitHub Pages is configured to serve from the `gh-pages` branch or `main` (depending on your workflow).
3.  The workflow in `.github/workflows/pages.yml` handles deployment.

## License

ISC
