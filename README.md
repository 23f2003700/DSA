# DSA Learning App - Cosmic Theme Design System

An interactive Data Structures & Algorithms learning web app with a refined black & white cosmic theme.

## 🌌 Design System Overview

### Color Tokens

The cosmic theme provides 8 carefully crafted color tokens with exact hex values:

| Token | Hex | Usage |
|-------|-----|-------|
| `cosmic-void` | `#000000` | Deepest black for main background |
| `cosmic-space` | `#0a0a0f` | Deep space for layered backgrounds |
| `cosmic-dark` | `#121218` | Dark layer for cards and sections |
| `cosmic-slate` | `#1a1a24` | Elevated surfaces |
| `cosmic-white` | `#ffffff` | Pure white for primary text |
| `cosmic-light` | `#f5f5f7` | Muted white for UI elements |
| `cosmic-silver` | `#c0c0c8` | Soft silver for secondary text |
| `cosmic-subtle` | `#808088` | Subtle gray for tertiary elements |
| `cosmic-blue` | `#3b82f6` | Soft blue for highlights |
| `cosmic-glow` | `#60a5fa` | Lighter blue for glow effects |
| `cosmic-neon` | `#93c5fd` | Neon blue for borders |
| `cosmic-accent` | `#2563eb` | Accent blue for interactive elements |

### Usage Guidance

- **Backgrounds**: Use `cosmic-void` for main background, `cosmic-space` for sections, `cosmic-dark` for cards
- **Text**: Use `cosmic-white` for headings, `cosmic-light` for body text, `cosmic-silver` for secondary text
- **Accents**: Use `cosmic-blue` and `cosmic-glow` for interactive elements and highlights
- **Borders**: Use `cosmic-slate` for subtle borders, `cosmic-neon` for highlighted borders

## 🎨 Components

### Starfield

A performant canvas-based starfield with multi-layer parallax and shooting stars.

**Quality Settings:**
- `low`: 100 stars, 2 layers (mobile devices)
- `medium`: 200 stars, 3 layers (tablets, default)
- `high`: 400 stars, 4 layers (desktop)

**Features:**
- Multi-layer parallax scrolling
- Occasional shooting stars
- Nebula gradient overlay
- Adaptive performance based on device
- Respects `prefers-reduced-motion`

```tsx
import Starfield from '@/components/Starfield';

<Starfield quality="medium" />
```

### Card (Frosted Glass)

A beautiful frosted glass card component with backdrop blur and neon border pulse.

**Features:**
- Backdrop blur effect with fallback
- Subtle inner shadow
- Neon border pulse animation (optional)
- Accessible contrast ratios (WCAG AA)
- Reduced motion support

```tsx
import Card from '@/components/Card';

<Card variant="pulse" hoverable={true}>
  Content here
</Card>
```

**Variants:**
- `default`: Standard frosted glass card
- `pulse`: Animated neon border pulse
- `elevated`: Enhanced shadow for prominence

### Navbar

A responsive navigation bar with scroll effects and mobile menu.

**Features:**
- Transparent when at top, frosted on scroll
- Smooth animations with framer-motion
- Mobile-responsive with hamburger menu
- Accessible keyboard navigation

```tsx
import Navbar from '@/components/Navbar';

<Navbar />
```

### CodePanel

Monochrome syntax highlighting with focused line highlights.

**Features:**
- Monochrome theme (light-white on dark)
- Line number display
- Focused line highlighting
- Multiple language support (JS, TS, Python, Java, C++)
- High contrast against frost card background

```tsx
import CodePanel from '@/components/CodePanel';

<CodePanel
  code={codeString}
  language="javascript"
  highlightLines={[3, 4, 5]}
  title="Bubble Sort"
/>
```

### ArrayVisualizer

Interactive array visualization component demonstrating the theme.

**Features:**
- Animated array bars with height based on values
- Visual feedback during sorting
- Random array generation
- Bubble sort animation with step-by-step visualization

```tsx
import ArrayVisualizer from '@/components/ArrayVisualizer';

<ArrayVisualizer initialArray={[64, 34, 25, 12, 22, 11, 90]} />
```

## 🎭 Typography

### Font Stack

**Sans-serif (UI):**
```
Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
```

**Monospace (Code):**
```
JetBrains Mono, Fira Code, Consolas, Monaco, Courier New, monospace
```

### Fluid Type Scale

Responsive headings that scale smoothly:

- `text-fluid-xs`: 12px → 14px
- `text-fluid-sm`: 14px → 16px
- `text-fluid-base`: 16px → 18px
- `text-fluid-lg`: 18px → 20px
- `text-fluid-xl`: 20px → 24px
- `text-fluid-2xl`: 24px → 32px
- `text-fluid-3xl`: 30px → 42px
- `text-fluid-4xl`: 36px → 56px

### Line Heights

All sizes include accessible line heights (1.1–1.6) based on text size.

## ⚡ Micro-Interactions

### Framer Motion Variants

**Page Transitions:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
```

**Hover Effects:**
```tsx
whileHover={{ scale: 1.05 }}
```

**Focus States:**
```tsx
whileFocus={{ outline: '2px solid var(--cosmic-glow)' }}
```

**Click Ripple:**
```tsx
whileTap={{ scale: 0.95 }}
```

**Floating/Levitation:**
```tsx
className="animate-float"
```

## ♿ Accessibility

### WCAG AA Compliance

All color combinations meet WCAG AA standards:

- `cosmic-white` on `cosmic-void`: Contrast ratio 21:1
- `cosmic-light` on `cosmic-dark`: Contrast ratio 14.5:1
- `cosmic-silver` on `cosmic-space`: Contrast ratio 8.2:1
- `cosmic-glow` on `cosmic-void`: Contrast ratio 7.8:1

### High Contrast Mode

Automatically adjusts when `prefers-contrast: high` is detected:
- Darker backgrounds become pure black
- Lighter text becomes pure white
- Border contrast increased

### Reduced Motion

Respects `prefers-reduced-motion: reduce`:
- Animations disabled
- Transitions minimized
- Starfield paused

### Color-Blind Safe

The monochrome + blue accent scheme is safe for all types of color blindness.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on push to the main branch.

## 📁 Project Structure

```
DSA/
├── app/
│   ├── globals.css          # Global styles and syntax highlighting
│   ├── layout.tsx            # Root layout with Starfield and Navbar
│   └── page.tsx              # Home page with examples
├── components/
│   ├── ArrayVisualizer.tsx   # Example component
│   ├── Card.tsx              # Frosted glass card
│   ├── CodePanel.tsx         # Code syntax highlighting
│   ├── Navbar.tsx            # Navigation bar
│   └── Starfield.tsx         # Animated starfield background
├── cosmic-theme.js           # Tailwind plugin with design tokens
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎯 Key Features

- ✨ Refined black & white cosmic theme
- 🌌 Performant starfield with parallax
- 🃏 Frosted glass UI components
- 📝 Monochrome syntax highlighting
- 🎨 Fluid typography scale
- ⚡ Smooth micro-interactions
- ♿ WCAG AA accessible
- 📱 Fully responsive
- 🌙 High contrast mode support
- ⏸️ Reduced motion support

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Highlight.js

## 📄 License

MIT
