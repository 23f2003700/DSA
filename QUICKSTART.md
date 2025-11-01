# Quick Start Guide

Get started with the DSA Learning App and Cosmic Theme in minutes.

## Installation

```bash
# Clone the repository
git clone https://github.com/23f2003700/DSA.git
cd DSA

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000/DSA` in your browser.

## Build for Production

```bash
# Build static files
npm run build

# Output will be in ./out directory
```

## Deploy to GitHub Pages

The project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Manual Deployment

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. GitHub Actions will build and deploy automatically

### View Your Site

After deployment, your site will be available at:
```
https://23f2003700.github.io/DSA
```

## Project Structure

```
DSA/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ArrayVisualizer.tsx   # Interactive visualizations
│   ├── Card.tsx              # Frosted glass card
│   ├── CodePanel.tsx         # Code display
│   ├── Navbar.tsx            # Navigation
│   └── Starfield.tsx         # Animated background
├── docs/
│   ├── ACCESSIBILITY.md      # Accessibility guide
│   ├── COMPONENT_GUIDE.md    # Component documentation
│   └── MICRO_INTERACTIONS.md # Animation patterns
├── cosmic-theme.js           # Tailwind plugin
└── README.md                 # Overview
```

## Using the Cosmic Theme

### In Your Components

```tsx
import Card from '@/components/Card';
import CodePanel from '@/components/CodePanel';

export default function MyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Card>
        <h1 className="text-fluid-3xl font-bold mb-4">My Algorithm</h1>
        <p className="text-cosmic-light mb-6">Description...</p>
        <CodePanel
          code="function example() { return 'Hello!'; }"
          language="javascript"
        />
      </Card>
    </div>
  );
}
```

### Color Classes

Use cosmic colors in your Tailwind classes:

```tsx
<div className="bg-cosmic-dark text-cosmic-white border-cosmic-slate">
  Content
</div>
```

### Animations

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="cosmic-card"
>
  Animated content
</motion.div>
```

## Customization

### Modify Colors

Edit `cosmic-theme.js`:

```js
const cosmicColors = {
  'cosmic-void': '#000000',
  'cosmic-accent': '#2563eb',
  // Add your colors
};
```

### Add Navigation Items

Edit `components/Navbar.tsx`:

```tsx
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Your Page', href: '/your-page' },
];
```

### Adjust Starfield Quality

In `app/layout.tsx`:

```tsx
<Starfield quality="high" /> {/* or 'low', 'medium' */}
```

## Documentation

- **[Component Guide](./docs/COMPONENT_GUIDE.md)** - How to use each component
- **[Accessibility](./docs/ACCESSIBILITY.md)** - WCAG compliance and best practices
- **[Micro-Interactions](./docs/MICRO_INTERACTIONS.md)** - Animation patterns

## Need Help?

Check the documentation files in the `docs/` directory for detailed guides on:
- Component usage
- Accessibility features
- Animation patterns
- Color system
- Typography

## Performance Tips

1. Use appropriate Starfield quality for your target device
2. Lazy load heavy visualizations
3. Respect `prefers-reduced-motion`
4. Optimize images and assets

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for older browsers (no backdrop-blur, reduced animations).
