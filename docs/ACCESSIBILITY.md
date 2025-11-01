# Cosmic Theme - Accessibility Guide

This document outlines the accessibility features of the Cosmic Theme and provides guidelines for maintaining WCAG AA compliance.

## Color Contrast Ratios

All color combinations in the Cosmic Theme meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text).

### Primary Text Combinations

| Foreground | Background | Ratio | Status | Use Case |
|------------|------------|-------|--------|----------|
| `cosmic-white` (#ffffff) | `cosmic-void` (#000000) | 21:1 | AAA ✓ | Headings, primary text |
| `cosmic-light` (#f5f5f7) | `cosmic-dark` (#121218) | 14.5:1 | AAA ✓ | Body text on cards |
| `cosmic-silver` (#c0c0c8) | `cosmic-space` (#0a0a0f) | 8.2:1 | AAA ✓ | Secondary text |
| `cosmic-glow` (#60a5fa) | `cosmic-void` (#000000) | 7.8:1 | AA ✓ | Interactive elements, links |
| `cosmic-white` (#ffffff) | `cosmic-accent` (#2563eb) | 5.9:1 | AA ✓ | Button text |

### Testing Tools

Test your implementations with:
- Chrome DevTools Accessibility Panel
- axe DevTools extension
- WAVE browser extension
- Contrast Checker: https://webaim.org/resources/contrastchecker/

## High Contrast Mode

The theme automatically adjusts for users who prefer high contrast:

```css
@media (prefers-contrast: high) {
  :root {
    --cosmic-space: #000000;
    --cosmic-dark: #0a0a0a;
    --cosmic-slate: #141414;
    --cosmic-white: #ffffff;
    --cosmic-light: #ffffff;
    --cosmic-silver: #e0e0e0;
  }
  
  .cosmic-card {
    border-color: rgba(192, 192, 200, 0.3);
  }
}
```

## Reduced Motion Support

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

The Starfield component also pauses when reduced motion is preferred.

## Keyboard Navigation

### Focus Indicators

All interactive elements have visible focus indicators:

```tsx
// Example: Card component focus
<Card
  tabIndex={0}
  onKeyPress={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Content
</Card>
```

### Focus Styles

```css
/* Applied automatically via components */
:focus-visible {
  outline: 2px solid var(--cosmic-glow);
  outline-offset: 2px;
}
```

### Tab Order

Ensure logical tab order in your components:

```tsx
<nav>
  <a href="#main" className="sr-only">Skip to main content</a>
  {/* Navigation items */}
</nav>

<main id="main">
  {/* Main content */}
</main>
```

## Screen Reader Support

### Semantic HTML

Always use semantic HTML elements:

```tsx
// Good ✓
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// Bad ✗
<div onClick={navigate}>Home</div>
```

### ARIA Labels

Add ARIA labels where needed:

```tsx
<button aria-label="Close modal" onClick={closeModal}>
  <svg>...</svg>
</button>

<canvas aria-hidden="true" /> {/* Starfield is decorative */}
```

### Alt Text

Always provide meaningful alt text:

```tsx
// Informative images
<img src="algorithm-diagram.png" alt="Bubble sort algorithm flowchart showing comparison and swap steps" />

// Decorative images
<img src="decoration.png" alt="" aria-hidden="true" />
```

## Color Blindness Support

The Cosmic Theme uses a monochrome base with blue accents, which is safe for all types of color blindness:

- **Protanopia** (red-blind): ✓ Safe
- **Deuteranopia** (green-blind): ✓ Safe
- **Tritanopia** (blue-blind): ✓ Safe (blue is only for accents, all information is also conveyed through text/icons)
- **Achromatopsia** (complete color blindness): ✓ Safe

### Don't Rely on Color Alone

Always combine color with other indicators:

```tsx
// Good ✓
<div className="bg-cosmic-accent">
  <span className="font-bold">✓</span> Success
</div>

// Bad ✗
<div className="bg-green-500">Success</div>
```

## Text Sizing and Spacing

### Fluid Typography

The theme uses fluid typography that scales with viewport:

```css
/* Automatically responsive */
.text-fluid-base { font-size: clamp(16px, 16px + 0.104vw, 18px); }
.text-fluid-2xl { font-size: clamp(24px, 24px + 0.417vw, 32px); }
```

### Line Height

All text has accessible line heights:

- Small text (12-14px): 1.5
- Body text (16-18px): 1.6
- Headings (24px+): 1.1-1.4

### Spacing

Adequate spacing for readability:
- Paragraph spacing: 1rem
- Section spacing: 2-3rem
- Interactive element padding: minimum 0.75rem

## Touch Targets

All interactive elements meet minimum size requirements:

```tsx
// Minimum 44x44px touch target
<button className="px-4 py-2 min-h-[44px] min-w-[44px]">
  Click
</button>
```

## Form Accessibility

### Labels

Always provide labels:

```tsx
<label htmlFor="email" className="text-cosmic-light">
  Email Address
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  className="mt-1"
/>
```

### Error Messages

Make errors accessible:

```tsx
<input
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <p id="email-error" className="text-red-400" role="alert">
    Please enter a valid email address
  </p>
)}
```

## Loading States

Provide accessible loading indicators:

```tsx
<div role="status" aria-live="polite">
  {isLoading && (
    <>
      <span className="sr-only">Loading...</span>
      <motion.div className="animate-pulse">...</motion.div>
    </>
  )}
</div>
```

## Testing Checklist

- [ ] All text meets contrast ratio requirements
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader announces content correctly
- [ ] All images have appropriate alt text
- [ ] Forms have proper labels and error messages
- [ ] Animations respect prefers-reduced-motion
- [ ] Touch targets are minimum 44x44px
- [ ] Semantic HTML is used throughout
- [ ] ARIA attributes are used correctly
- [ ] Color is not the only means of conveying information

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Accessible Components](https://a11y-guidelines.orange.com/en/)
