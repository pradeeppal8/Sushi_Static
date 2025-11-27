# 🎨 Modern Modal - Visual Design Guide

## Color Palette

### Primary Colors
```
┌─────────────────────────────────────────┐
│ Primary Orange      #ff9500             │
│ ████████████████████████████████████    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Dark Orange         #ff6b00             │
│ ███████████████████████████████         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Darker Orange       #d97700             │
│ ██████████████████████████████          │
└─────────────────────────────────────────┘
```

### Background Colors
```
┌─────────────────────────────────────────┐
│ Light Gray          #fafafa             │
│ ███████████████████████████████████████ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ White               #ffffff             │
│ ███████████████████████████████████████ │
└─────────────────────────────────────────┘
```

### Text Colors
```
┌─────────────────────────────────────────┐
│ Dark Text           #1a1a1a             │
│ ██████████████                          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Medium Gray         #888888             │
│ ██████████████████                      │
└─────────────────────────────────────────┘
```

---

## Typography Scale

### Heading 1 (Modal Title)
```
Size: 3rem (48px)
Weight: 800 (Extra Bold)
Letter-spacing: 2px
Example: MENU
```

### Heading 2 (Subtitle)
```
Size: 1.1rem (17.6px)
Weight: 300 (Light)
Letter-spacing: 0.5px
Example: Special Menu Items
```

### Heading 3 (Card Title)
```
Size: 1.7rem (27.2px)
Weight: 700 (Bold)
Color: #ff9500 (Orange)
Example: Starters
```

### Body Text
```
Size: 0.95rem (15.2px)
Weight: 400 (Regular)
Color: #1a1a1a (Dark)
Example: Tomato Soup
```

### Description Text
```
Size: 0.8rem (12.8px)
Weight: 400 (Regular)
Style: Italic
Color: #888888 (Gray)
Example: Creamy & Fresh
```

### Price Text
```
Size: 1.15rem (18.4px)
Weight: 800 (Extra Bold)
Color: #ff9500 (Orange)
Example: $6
```

---

## Spacing System

### Padding Values
```
xs    0.25rem   (4px)
sm    0.5rem    (8px)
md    0.75rem   (12px)
lg    1rem      (16px)
xl    1.5rem    (24px)
2xl   2rem      (32px)
3xl   2.5rem    (40px)
```

### Common Spacings
```
Header Padding:        2.5rem (40px)
Card Padding:          1.75rem (28px)
Item Padding:          0.75rem (12px)
Gap between cards:     2rem (32px)
Modal padding bottom:  1rem (16px)
```

---

## Shadow Effects

### Overlay Shadow (Modal)
```css
box-shadow: 0 25px 100px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.1);
```

### Card Shadow
```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
```

### Card Hover Shadow
```css
box-shadow: 0 20px 48px rgba(255, 149, 0, 0.25);
```

### Button Shadow
```css
box-shadow: 0 8px 20px rgba(255, 149, 0, 0.35);
```

### Button Hover Shadow
```css
box-shadow: 0 12px 32px rgba(255, 149, 0, 0.5);
```

---

## Gradient Effects

### Header Gradient
```
Direction: 135deg
Color 1: #ff9500 (0%)
Color 2: #ff6b00 (50%)
Color 3: #d97700 (100%)
```

### Modal Background
```
Direction: to bottom
Color 1: #fafafa (0%)
Color 2: #f5f5f5 (100%)
```

### Button Gradient
```
Direction: 135deg
Color 1: #ff9500 (0%)
Color 2: #ff6b00 (100%)
```

### Underline Gradient
```
Direction: 90deg
Color 1: transparent (0%)
Color 2: #ff9500 (50%)
Color 3: transparent (100%)
```

---

## Border Radius Scale

```
xs    4px
sm    8px
md    12px
lg    16px
xl    20px
2xl   24px
full  50% (circular)
```

### Common Border Radius
```
Modal:              24px
Cards:              16px
Close Button:       50% (circular)
Buttons:            12px
Images:             Inherited
Input fields:       8px
```

---

## Animation Timing

### Easing Functions
```
ease-out:           cubic-bezier(0.2, 0.8, 0.4, 1)
ease:               cubic-bezier(0.25, 0.46, 0.45, 0.94)
ease-in-out:        cubic-bezier(0.42, 0, 0.58, 1)
Custom Bounce:      cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Duration Values
```
Fast:     0.2s
Medium:   0.3s
Default:  0.4s
Slow:     0.5s
Slower:   0.6s
Slowest:  1s
```

### Common Animations
```
Modal Fade:         0.5s ease-out
Modal Slide:        0.6s custom-bounce
Card Hover:         0.4s custom-bounce
Image Zoom:         0.6s custom-bounce
Button Lift:        0.3s ease
Close Rotate:       0.3s ease
```

---

## Component Dimensions

### Modal Dimensions
```
Desktop:    min(1000px, 98vw)
Max Height: 90vh
Border Radius: 24px
Padding: 2.5rem (all)
```

### Image Dimensions
```
Width:      100%
Height:     220px (desktop)
Height:     200px (tablet)
Height:     160px (mobile)
Border Radius: Inherited from card
Object-Fit: cover
```

### Card Dimensions
```
Desktop Width:   (1000px - gaps) / 3
Tablet Width:    (1000px - gaps) / 2
Mobile Width:    100%
Min Height:      Auto (content-driven)
```

### Button Dimensions
```
Padding:         0.95rem 2.5rem
Height:          Auto (from padding)
Border Radius:   12px
Min Touch Size:  44px × 44px
```

### Close Button
```
Width:  50px
Height: 50px
Border Radius: 50% (circular)
```

---

## Breakpoint Specifications

### Desktop
```
Min Width:  1024px
Columns:    3
Layout:     Full grid
```

### Tablet
```
Min Width:  768px
Max Width:  1024px
Columns:    2
Layout:     Adjusted spacing
```

### Mobile
```
Min Width:  480px
Max Width:  768px
Columns:    1
Layout:     Stacked
```

### Small Mobile
```
Max Width:  480px
Columns:    1
Layout:     Compact
```

---

## Hover States

### Menu Card Hover
```
Transform:  translateY(-12px) scale(1.02)
Duration:   0.4s
Box Shadow: Enhanced (0 20px 48px ...)
Border:     Lighter orange (rgba(...0.4))
Background: Slightly lighter white
```

### Image Hover
```
Transform:  scale(1.1) rotate(2deg)
Duration:   0.6s
Overlay:    Shows with opacity change
```

### Item Hover
```
Background: rgba(255, 149, 0, 0.08)
Padding:    Increased left/right
Duration:   0.3s
```

### Button Hover
```
Transform:  translateY(-3px)
Duration:   0.3s
Shadow:     Enhanced
```

### Close Button Hover
```
Transform:  scale(1.15) rotate(90deg)
Duration:   0.3s
Shadow:     Enhanced
Background: Lighter (rgba(...0.4))
```

---

## Focus States (Accessibility)

### Button Focus
```
Outline:        3px solid #ff9500
Outline Offset: 2px
```

### Link Focus
```
Background:     Subtle highlight
Text Underline: Added
```

### Input Focus
```
Border:         2px solid #ff9500
Box Shadow:     0 0 0 3px rgba(255, 149, 0, 0.1)
Transform:      scale(1.02)
```

---

## Responsive Adjustments

### Header
```
Desktop:    2.5rem padding, 3rem title
Tablet:     2rem padding, 2.2rem title
Mobile:     1.5rem padding, 2rem title
Small:      1rem padding, 1.6rem title
```

### Cards
```
Desktop:    3-column, 220px images
Tablet:     2-column, 200px images
Mobile:     1-column, 200px images
Small:      1-column, 160px images
```

### Footer
```
Desktop:    2 buttons side-by-side
Tablet:     2 buttons side-by-side
Mobile:     Stacked full-width
Small:      Stacked, compact padding
```

---

## Visual Hierarchy

### Importance Order
```
1. Modal Header (Largest, most prominent)
2. Menu Card Images (Visual focal point)
3. Menu Item Names (Primary text)
4. Prices (Highlighted in orange)
5. Item Descriptions (Subtle, secondary)
6. Action Buttons (Clear CTAs)
```

### Color Usage
```
Primary (Orange #ff9500):    Accents, CTAs, prices
Secondary (White #ffffff):   Cards, backgrounds
Tertiary (Gray #888888):     Descriptions, secondary text
Dark (#1a1a1a):             Main text content
```

---

## Z-Index Layering

```
1200:   Modal overlay
1200:   Modal content
10:     Modal children (relative)
3:      Close button
5:      Search (sticky)
0:      Default (cards, items)
-1:     Pseudo-elements
```

---

## Print Styles

```
Modal Overlay:      No special background
Modal Container:    Box outline only
Close Button:       Hidden
Footer Buttons:     Hidden
Images:             Visible, full size
Text:               Black on white
```

---

## Dark Mode Reference

```
Background:         #1a1a1a (from white)
Text:               #f0f0f0 (from dark)
Cards:              #2a2a2a (from white)
Borders:            lighter orange
Header:             Keep orange gradient
Accent:             Keep orange (#ff9500)
```

---

## Accessibility Notes

✅ **Color Contrast**
- Text on Background: 7:1+ (AAA standard)
- Buttons: 4.5:1+ (AA standard)

✅ **Touch Targets**
- Minimum 44px × 44px
- Buttons easily tappable

✅ **Text Sizing**
- Responsive typography
- Readable without zoom

✅ **Focus Indicators**
- Clear 3px outline
- 2px offset from edge

✅ **Semantic HTML**
- Proper heading hierarchy
- Role attributes on modals

---

This visual guide provides all design specifications for implementing variations and customizations of the modal.

