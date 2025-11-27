# Modal Customization Guide

## How to Customize the Modal

### 1. Change the Color Scheme

**Current Colors:**
```css
Orange: #ff9500
Brown: #d4a574
Beige: #fef5e7
```

**Example - Blue Theme:**
```css
/* In App.css, replace these values: */
#ff9500 → #0066cc  (Primary Blue)
#ff7e00 → #0052a3  (Dark Blue)
#d4a574 → #6699cc  (Light Blue)
```

### 2. Modify Modal Dimensions

```css
/* Current - in App.css line ~445 */
.modal {
  width: min(900px, 95vw);          /* Change 900px for wider/narrower */
  max-height: 90vh;                 /* Change 90vh for taller/shorter */
  border-radius: 20px;              /* Change for more/less rounding */
}
```

### 3. Add More Menu Categories

**In App.tsx**, add another section inside `.menu-grid`:
```jsx
<div className="menu-section menu-col">
  <img src={new URL('../assets/image4.png', import.meta.url).href} alt="Desserts" className="menu-section-img" />
  <h3>Desserts</h3>
  <ul>
    <li>
      <span className="menu-item-name">Chocolate Cake</span>
      <span className="menu-item-price">$8</span>
    </li>
    {/* Add more items */}
  </ul>
</div>
```

**Then update CSS:**
```css
/* Change from 3 columns to 4 */
.menu-grid {
  grid-template-columns: repeat(4, 1fr);  /* Was repeat(3, 1fr) */
}

/* Update mobile breakpoint if needed */
@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: 1fr;  /* Still 1 column on mobile */
  }
}
```

### 4. Change Modal Delay Time

**In App.tsx:**
```jsx
useEffect(() => {
  const id = setTimeout(() => setShowMenuModal(true), 5000)  /* 5000ms = 5 seconds */
  return () => clearTimeout(id)
}, [])

/* Change 5000 to your desired milliseconds:
   1000 = 1 second
   3000 = 3 seconds
   10000 = 10 seconds
*/
```

### 5. Customize Animations

**In App.css**, modify animation duration:
```css
/* Current - 0.5s animations */
.modal-overlay {
  animation: modalFadeIn 0.5s ease-out;  /* Fade-in speed */
}

.modal {
  animation: modalSlideUp 0.5s ease-out forwards;  /* Slide-up speed */
}

/* Change 0.5s to:
   0.2s = Very fast
   0.5s = Medium (default)
   1s = Slow
   1.5s = Very slow
*/
```

### 6. Modify Button Styles

**In App.css:**
```css
.modal-footer .btn {
  padding: 0.85rem 2rem;        /* Adjust button padding */
  border-radius: 50px;          /* Change to 8px for square, 50px for pill */
  font-size: 1rem;              /* Adjust text size */
  text-transform: uppercase;    /* Change to 'none' to remove uppercase */
}
```

### 7. Change Image Aspect Ratio

```css
.menu-section-img {
  height: 180px;                /* Current height */
  object-fit: cover;            /* 'cover' crops to fit, 'contain' shows full image */
}

/* Examples:
   height: 120px;  - Smaller images
   height: 250px;  - Larger images
   height: 300px;  - Very large images
*/
```

### 8. Adjust Menu Item Styling

```css
.menu-col li {
  padding: 1rem 0.75rem;        /* Space around each item */
  font-size: 0.95rem;           /* Text size */
  border-bottom: 1px dotted #d4a574;  /* Item separator */
}

/* Change dotted to:
   solid - Solid line
   dashed - Dashed line
   none - No line
*/
```

### 9. Modify Category Title Style

```css
.menu-col h3 {
  font-size: 1.8rem;            /* Title size */
  padding: 1rem;                /* Padding around title */
  background: linear-gradient(135deg, #ff9500 0%, #ff7e00 100%);
  border-radius: 10px;          /* Corner rounding */
}

/* Make it simpler: */
.menu-col h3 {
  font-size: 1.6rem;
  color: #ff9500;               /* Just use solid color */
  background: transparent;       /* No background */
  padding: 0.5rem 0;
}
```

### 10. Change Modal Background

```css
.modal {
  background: linear-gradient(135deg, #fef5e7 0%, #f9e79f 50%, #fef5e7 100%);
}

/* Simpler background: */
.modal {
  background: #fef5e7;  /* Solid color */
}

/* Dark theme: */
.modal {
  background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
}
```

## Common Customizations

### Make Modal Wider
1. Change `900px` to `1200px` in `.modal` width
2. Update responsive breakpoint if needed

### Make Modal Taller
1. Change `90vh` in `.modal` max-height
2. Adjust `max-height: calc(90vh - 250px)` in `.modal-body`

### Use Custom Images
1. Replace `image1.png`, `image2.png`, `image3.png` paths
2. Use absolute paths or relative paths to your images
3. Ensure images are in the correct format (PNG, JPG, WebP)

### Remove Animations
```css
.modal-overlay {
  animation: none;  /* Remove fade-in */
}

.modal {
  animation: none;  /* Remove slide-up */
}
```

### Add Border Instead of Gradient
```css
.modal {
  background: #fef5e7;
  border: 3px solid #ff9500;
}
```

## Quick Copy-Paste Customizations

### Dark Mode
```css
.modal {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  border-color: #ff9500;
}

.menu-section {
  background: rgba(255, 255, 255, 0.1);
}

.modal-header h2 {
  color: #ffffff;
}

.menu-col li {
  color: #ffffff;
}
```

### Minimalist
```css
.modal {
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.menu-col h3 {
  background: transparent;
  color: #333333;
}

.modal-close {
  background: #cccccc;
  color: #333333;
}
```

### Vibrant
```css
.modal {
  background: linear-gradient(135deg, #ffe6e6 0%, #fff0e6 50%, #ffe6e6 100%);
  border-color: #ff6b6b;
}

.menu-col h3 {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%);
}

.modal-footer .btn.primary {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%);
}
```
