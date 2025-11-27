# Modal Design CSS Reference

## Color Palette
```css
Primary Colors:
- Orange (Accent): #ff9500
- Orange (Dark): #ff7e00
- Beige (Background): #fef5e7
- Gold (Gradient): #f9e79f
- Brown (Border): #d4a574
- Dark Text: #2c2c2c
```

## Key CSS Classes

### Container Classes
```css
.modal-overlay        /* Semi-transparent dark overlay background */
.modal                /* Main modal container with gradient background */
.modal-header         /* Header section with title and close button */
.modal-body           /* Content area with menu grid */
.modal-footer         /* Footer with action buttons */
```

### Menu Classes
```css
.menu-grid            /* 3-column grid layout (1 column on mobile) */
.menu-section         /* Individual menu category card */
.menu-section-img     /* Menu category image */
.menu-col             /* Menu column wrapper */
.menu-col h3          /* Category title with orange gradient */
.menu-col ul          /* Menu items list */
.menu-col li          /* Individual menu item */
.menu-item-name       /* Item name span */
.menu-item-price      /* Item price span */
```

### Button Classes
```css
.btn                  /* Base button styles */
.btn.primary          /* Orange gradient button (Order Now) */
.btn.secondary        /* White button with orange border (Cancel) */
```

## Responsive Breakpoints
```css
Desktop:   > 640px   /* 3-column grid */
Mobile:   ≤ 640px    /* 1-column grid, stacked buttons */
```

## Animation Keyframes
```css
@keyframes modalFadeIn  /* 0.5s fade-in effect */
@keyframes modalSlideUp /* 0.5s slide-up with scale effect */
```

## Shadow Effects
```css
Modal Box Shadow:
  0 20px 80px rgba(0, 0, 0, 0.4),
  inset 0 1px 0 rgba(255, 255, 255, 0.3)

Button Shadows:
  0 4px 15px rgba(0, 0, 0, 0.2)  /* Normal */
  0 6px 20px rgba(255, 149, 0, 0.5)  /* Hover - Orange */

Image Shadows:
  0 4px 12px rgba(0, 0, 0, 0.2)
```

## Gradient Effects
```css
Modal Background:
  linear-gradient(135deg, #fef5e7 0%, #f9e79f 50%, #fef5e7 100%)

Category Title:
  linear-gradient(135deg, #ff9500 0%, #ff7e00 100%)

Primary Button:
  linear-gradient(135deg, #ff9500 0%, #ff7e00 100%)

Modal Header Background:
  linear-gradient(to right, rgba(212, 165, 116, 0.1), transparent)
```

## Hover States
```css
Menu Section:
  transform: translateY(-8px)
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15)

Close Button:
  transform: scale(1.1) rotate(90deg)
  box-shadow: 0 6px 16px rgba(255, 149, 0, 0.6)

Primary Button:
  transform: translateY(-3px)
  box-shadow: 0 6px 20px rgba(255, 149, 0, 0.5)

Menu Item:
  background: rgba(255, 165, 0, 0.1)
  padding-left: 1rem
```

## Spacing & Sizing
```css
Modal Header:
  padding: 2rem 2.5rem

Modal Body:
  padding: 2.5rem
  gap between sections: 2.5rem

Menu Section:
  padding: 2rem
  border-radius: 15px

Image:
  height: 180px
  margin-bottom: 1rem

Buttons:
  padding: 0.85rem 2rem
  gap between buttons: 1rem
```

## Z-Index Layers
```css
Modal Overlay:    z-index: 1200
Modal Content:    z-index: 10 (relative)
Pseudo Elements:  pointer-events: none
```
