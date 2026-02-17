## 2024-10-24 - Accessible Icon-Only Buttons
**Learning:** In data-dense list views (like an order form), icon-only buttons (like + and -) create significant accessibility barriers if they lack labels. A generic "Increase" label is insufficient when there are multiple such buttons; "Increase quantity for [Item Name]" provides necessary context for screen reader users.
**Action:** Always generate unique `aria-label` attributes for repeated action buttons in lists, incorporating the row's context (item name) into the label.
