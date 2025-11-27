# 🎨 Modern Modal - Code Examples & Snippets

## 1. Add a Fourth Menu Category

### JSX Changes (App.tsx)

Add this section after the "Beverages" card:

```jsx
{/* Desserts Section */}
<div className="menu-card">
  <div className="menu-card-image-wrapper">
    <img src={new URL('../assets/image4.png', import.meta.url).href} alt="Desserts" className="menu-card-image" />
    <div className="image-overlay"></div>
  </div>
  <div className="menu-card-content">
    <h3 className="menu-card-title">Desserts</h3>
    <ul className="menu-items-list">
      <li className="menu-item">
        <div className="item-header">
          <span className="menu-item-name">Chocolate Cake</span>
          <span className="menu-item-price">$8</span>
        </div>
        <p className="item-description">Rich & Indulgent</p>
      </li>
      <li className="menu-item">
        <div className="item-header">
          <span className="menu-item-name">Cheesecake</span>
          <span className="menu-item-price">$7</span>
        </div>
        <p className="item-description">Creamy & Smooth</p>
      </li>
      <li className="menu-item">
        <div className="item-header">
          <span className="menu-item-name">Ice Cream</span>
          <span className="menu-item-price">$4</span>
        </div>
        <p className="item-description">Refreshing Flavors</p>
      </li>
    </ul>
  </div>
</div>
```

### CSS Changes (App.css)

Update the grid for 4 columns:

```css
@media (min-width: 1024px) {
  .menu-sections-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .menu-sections-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 2. Change Color Theme (Blue)

### Complete CSS Color Replace

```css
/* Original Orange Theme */
#ff9500 → #3b82f6  (Blue)
#ff6b00 → #2563eb  (Dark Blue)
#d97700 → #1d4ed8  (Darker Blue)
rgba(255, 149, 0, ...) → rgba(59, 130, 246, ...)
rgba(255, 165, 0, ...) → rgba(59, 130, 246, ...)
```

### Example CSS Update

```css
.modal-header-premium {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
  /* was: #ff9500 0%, #ff6b00 50%, #d97700 100% */
}

.menu-card-title {
  color: #3b82f6;
  /* was: #ff9500 */
}

.btn-order {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  /* was: #ff9500 0%, #ff6b00 100% */
}
```

---

## 3. Dark Mode Implementation

### Add Dark Mode CSS

```css
/* Dark Mode Styles */
.dark-mode .modal-overlay {
  background: rgba(0, 0, 0, 0.9);
}

.dark-mode .modern-menu-modal {
  background: #1a1a1a;
}

.dark-mode .modal-header-premium {
  background: linear-gradient(135deg, #ff9500 0%, #ff6b00 50%, #d97700 100%);
}

.dark-mode .modal-body-premium {
  background: linear-gradient(to bottom, #2a2a2a 0%, #1f1f1f 100%);
}

.dark-mode .menu-card {
  background: #2a2a2a;
  border-color: rgba(255, 149, 0, 0.3);
}

.dark-mode .menu-card-title {
  color: #ff9500;
}

.dark-mode .menu-item-name {
  color: #f0f0f0;
}

.dark-mode .item-description {
  color: #a0a0a0;
}

.dark-mode .btn-cancel {
  background: #2a2a2a;
  color: #ff9500;
  border-color: #ff9500;
}
```

### Apply Dark Mode

```jsx
// In App.tsx
<div className={`modal-overlay ${isDarkMode ? 'dark-mode' : ''}`}>
  {/* ... modal content ... */}
</div>
```

---

## 4. Customize Button Styling

### Make Buttons Larger

```css
.btn {
  padding: 1.2rem 3rem;  /* Increased from 0.95rem 2.5rem */
  font-size: 1.1rem;     /* Increased from 1rem */
  border-radius: 16px;   /* Increased from 12px */
  letter-spacing: 1.5px; /* Increased from 1px */
}
```

### Make Buttons More Rounded (Pill Shape)

```css
.btn {
  border-radius: 50px;  /* Changed from 12px */
  padding: 1rem 3rem;
}
```

### Add Icon Support

```css
.btn-icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}
```

---

## 5. Add Special Offer Badge

### JSX in Card

```jsx
<div className="menu-card special-offer">
  <div className="offer-badge">20% OFF</div>
  <div className="menu-card-image-wrapper">
    {/* ... image ... */}
  </div>
  {/* ... rest of card ... */}
</div>
```

### CSS for Badge

```css
.menu-card.special-offer {
  position: relative;
}

.offer-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #ff9500 0%, #ff6b00 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(255, 149, 0, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

---

## 6. Add Item Quantity Selector

### JSX Update

```jsx
<li className="menu-item with-quantity">
  <div className="item-header">
    <span className="menu-item-name">Tomato Soup</span>
    <span className="menu-item-price">$6</span>
  </div>
  <p className="item-description">Creamy & Fresh</p>
  <div className="quantity-selector">
    <button className="qty-btn">-</button>
    <input type="number" className="qty-input" value="1" min="0" />
    <button className="qty-btn">+</button>
  </div>
</li>
```

### CSS for Quantity Selector

```css
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ff9500;
  background: white;
  color: #ff9500;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
}

.qty-btn:hover {
  background: #ff9500;
  color: white;
}

.qty-input {
  width: 50px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.25rem;
  font-weight: 600;
}
```

---

## 7. Add Animation on Item Hover

### Enhanced Item Styling

```css
.menu-item {
  position: relative;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.menu-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: rgba(255, 149, 0, 0.1);
  border-radius: 4px;
  transition: width 0.3s ease;
  z-index: -1;
}

.menu-item:hover::before {
  width: 100%;
}

.menu-item:hover {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
```

---

## 8. Implement Search/Filter

### JSX Addition

```jsx
<div className="modal-body-premium">
  <div className="search-container">
    <input 
      type="text" 
      placeholder="Search menu items..." 
      className="search-input"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  {/* ... filtered menu cards ... */}
</div>
```

### CSS for Search

```css
.search-container {
  padding: 1.5rem 2.5rem;
  border-bottom: 2px solid rgba(255, 149, 0, 0.1);
  background: white;
  position: sticky;
  top: 0;
  z-index: 5;
}

.search-input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 2px solid #ff9500;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1);
  transform: scale(1.02);
}

.search-input::placeholder {
  color: #ccc;
}
```

---

## 9. Change Modal Size

### Make Modal Wider

```css
.modern-menu-modal {
  width: min(1200px, 98vw);  /* Changed from 1000px */
}
```

### Make Modal Narrower

```css
.modern-menu-modal {
  width: min(800px, 95vw);   /* Changed from 1000px */
}
```

### Adjust Max Height

```css
.modern-menu-modal {
  max-height: 95vh;  /* Changed from 90vh */
}
```

---

## 10. Add Loading Animation

### Skeleton Loader CSS

```css
@keyframes skeleton-loading {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 1000px 100%;
  animation: skeleton-loading 2s infinite;
  border-radius: 8px;
}

.menu-card.loading .menu-card-image {
  background-color: #e0e0e0;
}

.menu-card.loading .menu-card-title {
  background-color: #e0e0e0;
  color: transparent;
}

.menu-card.loading .menu-item-name {
  background-color: #e0e0e0;
  color: transparent;
}
```

---

## 11. Add Dietary Restrictions Icons

### JSX with Icons

```jsx
<li className="menu-item">
  <div className="item-header">
    <span className="menu-item-name">
      Tomato Soup
      <span className="dietary-badges">
        <span className="badge vegan">🌱</span>
        <span className="badge gluten-free">🌾</span>
      </span>
    </span>
    <span className="menu-item-price">$6</span>
  </div>
  <p className="item-description">Creamy & Fresh</p>
</li>
```

### CSS for Badges

```css
.dietary-badges {
  display: inline-flex;
  gap: 0.3rem;
  margin-left: 0.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f0f0f0;
  font-size: 0.8rem;
  cursor: help;
  title: "Dietary restriction";
}

.badge.vegan {
  background: rgba(76, 175, 80, 0.2);
}

.badge.gluten-free {
  background: rgba(244, 67, 54, 0.2);
}
```

---

## 12. Responsive Typography Scaling

### Fluid Typography

```css
.modal-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

.menu-card-title {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
}

.menu-item-name {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
}
```

---

## 13. Print Stylesheet

### Add Print Styles

```css
@media print {
  .modal-overlay {
    background: white;
  }

  .modern-menu-modal {
    box-shadow: none;
    border: 1px solid #ddd;
    max-width: 100%;
  }

  .modal-header-premium {
    background: white;
    color: black;
  }

  .modal-close-premium,
  .modal-footer-premium {
    display: none;
  }

  .menu-card:hover {
    transform: none;
  }
}
```

---

## 14. Accessibility Enhancements

### ARIA Labels

```jsx
<div 
  className="modal-overlay" 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  onClick={() => setShowMenuModal(false)}
>
  <div className="modern-menu-modal">
    <div className="modal-header-premium">
      <h2 id="modal-title" className="modal-title">Menu</h2>
      {/* ... */}
    </div>
    {/* ... */}
  </div>
</div>
```

### Keyboard Navigation

```css
.menu-item:focus-within {
  background: rgba(255, 149, 0, 0.15);
}

.btn:focus {
  outline: 3px solid #ff9500;
  outline-offset: 2px;
}

.modal-close-premium:focus {
  box-shadow: 0 0 0 4px rgba(255, 149, 0, 0.5);
}
```

---

## 15. Custom Scrollbar

### Webkit Scrollbar Styling

```css
.modal-body-premium::-webkit-scrollbar {
  width: 8px;
}

.modal-body-premium::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.modal-body-premium::-webkit-scrollbar-thumb {
  background: #ff9500;
  border-radius: 4px;
}

.modal-body-premium::-webkit-scrollbar-thumb:hover {
  background: #ff6b00;
}
```

---

These code snippets can be mixed and matched to create your custom modal. Feel free to modify and adapt them to your specific needs!

