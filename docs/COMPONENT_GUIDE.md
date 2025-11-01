# Component Usage Guide

Complete guide for using all Cosmic Theme components in your DSA learning application.

## Installation

All components are ready to use. Simply import them:

```tsx
import Card from '@/components/Card';
import CodePanel from '@/components/CodePanel';
import Navbar from '@/components/Navbar';
import Starfield from '@/components/Starfield';
import ArrayVisualizer from '@/components/ArrayVisualizer';
```

## Starfield

The animated background with parallax stars and shooting stars.

### Basic Usage

```tsx
import Starfield from '@/components/Starfield';

<Starfield quality="medium" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quality` | `'low' \| 'medium' \| 'high'` | `'medium'` | Performance/quality level |

### Quality Settings

- **low**: 100 stars, 2 layers - For mobile devices
- **medium**: 200 stars, 3 layers - For tablets and average devices
- **high**: 400 stars, 4 layers - For high-performance desktops

### Performance Tips

- Use `'low'` on mobile devices to save battery
- The component automatically pauses on `prefers-reduced-motion`
- Canvas is optimized for 60 FPS

## Card

Frosted glass card component with hover effects.

### Basic Usage

```tsx
import Card from '@/components/Card';

<Card>
  <h3>Title</h3>
  <p>Content goes here</p>
</Card>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Card content |
| `className` | `string` | `''` | Additional CSS classes |
| `variant` | `'default' \| 'pulse' \| 'elevated'` | `'default'` | Visual style |
| `hoverable` | `boolean` | `true` | Enable hover effects |

### Variants

**Default**
```tsx
<Card variant="default">Standard frosted glass card</Card>
```

**Pulse** (animated border)
```tsx
<Card variant="pulse">Card with pulsing neon border</Card>
```

**Elevated** (extra shadow)
```tsx
<Card variant="elevated">Card with enhanced shadow</Card>
```

### Examples

```tsx
// Non-hoverable card
<Card hoverable={false}>
  Static content
</Card>

// Card with custom motion props
<Card
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2 }}
>
  Custom animation
</Card>
```

## Navbar

Responsive navigation bar with scroll effects.

### Basic Usage

```tsx
import Navbar from '@/components/Navbar';

<Navbar />
```

### Features

- Transparent when at top, frosted on scroll
- Responsive mobile menu
- Smooth animations
- Keyboard accessible

### Customizing Nav Items

Edit `components/Navbar.tsx`:

```tsx
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Your Page', href: '/your-page' },
  // Add more items
];
```

## CodePanel

Syntax-highlighted code display with line numbers.

### Basic Usage

```tsx
import CodePanel from '@/components/CodePanel';

const code = `function example() {
  return "Hello, World!";
}`;

<CodePanel
  code={code}
  language="javascript"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | required | Code to display |
| `language` | `string` | `'javascript'` | Language for syntax highlighting |
| `highlightLines` | `number[]` | `[]` | Lines to highlight |
| `showLineNumbers` | `boolean` | `true` | Show line numbers |
| `title` | `string` | `undefined` | Optional title header |
| `className` | `string` | `''` | Additional CSS classes |

### Supported Languages

- JavaScript (`'javascript'`)
- TypeScript (`'typescript'`)
- Python (`'python'`)
- Java (`'java'`)
- C++ (`'cpp'`)

### Examples

**With Title and Highlighted Lines**
```tsx
<CodePanel
  code={code}
  language="python"
  highlightLines={[3, 4, 5]}
  title="Binary Search Implementation"
/>
```

**Without Line Numbers**
```tsx
<CodePanel
  code={code}
  showLineNumbers={false}
/>
```

**Custom Styling**
```tsx
<CodePanel
  code={code}
  className="max-h-96 overflow-y-auto"
/>
```

## ArrayVisualizer

Interactive array visualization for sorting algorithms.

### Basic Usage

```tsx
import ArrayVisualizer from '@/components/ArrayVisualizer';

<ArrayVisualizer />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialArray` | `number[]` | `[64, 34, 25, 12, 22, 11, 90]` | Starting array values |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

**Custom Initial Array**
```tsx
<ArrayVisualizer initialArray={[10, 30, 20, 50, 40]} />
```

**Full Width**
```tsx
<ArrayVisualizer className="w-full" />
```

### Extending with New Algorithms

To add more sorting algorithms, edit `components/ArrayVisualizer.tsx`:

```tsx
const quickSort = async () => {
  setIsAnimating(true);
  // Your algorithm implementation
  // Use setArray() to update the array
  // Use setComparing() to highlight comparing elements
  // Use setSorted() to mark sorted elements
  setIsAnimating(false);
};

// Add button
<button onClick={quickSort}>Quick Sort</button>
```

## Layout Integration

### Standard Page Layout

```tsx
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

export default function Page() {
  return (
    <>
      <Starfield quality="medium" />
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Card>
            <h1 className="text-fluid-3xl font-bold mb-4">Page Title</h1>
            <p className="text-cosmic-light">Content...</p>
          </Card>
        </div>
      </main>
    </>
  );
}
```

### Grid of Cards

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-cosmic-silver">{item.description}</p>
    </Card>
  ))}
</div>
```

## Styling Tips

### Using Cosmic Colors

```tsx
// In className
<div className="bg-cosmic-dark text-cosmic-white border-cosmic-slate">

// In inline styles
<div style={{ backgroundColor: 'var(--cosmic-space)' }}>

// In CSS
.custom-element {
  background: var(--cosmic-dark);
  color: var(--cosmic-light);
}
```

### Fluid Typography

```tsx
<h1 className="text-fluid-4xl">Large Heading</h1>
<h2 className="text-fluid-2xl">Medium Heading</h2>
<p className="text-fluid-base">Body Text</p>
```

### Custom Scrollbar

```tsx
<div className="scrollbar-cosmic overflow-y-auto max-h-96">
  Long content...
</div>
```

## Common Patterns

### Hero Section

```tsx
<div className="text-center py-20">
  <h1 className="text-fluid-4xl font-bold mb-6 cosmic-glow-text">
    Welcome to DSA Learn
  </h1>
  <p className="text-fluid-lg text-cosmic-silver max-w-2xl mx-auto">
    Master algorithms with interactive visualizations
  </p>
</div>
```

### Feature Cards

```tsx
<Card>
  <div className="w-12 h-12 rounded-lg bg-cosmic-accent/20 flex items-center justify-center mb-4">
    <Icon className="text-cosmic-glow" />
  </div>
  <h3 className="text-xl font-bold mb-2">Feature Title</h3>
  <p className="text-cosmic-silver">Description text</p>
</Card>
```

### Code Example Section

```tsx
<div className="space-y-6">
  <h2 className="text-fluid-2xl font-bold">Algorithm Implementation</h2>
  <CodePanel
    code={algorithmCode}
    language="javascript"
    highlightLines={[5, 6, 7]}
    title="Bubble Sort"
  />
  <p className="text-cosmic-silver">
    Explanation of the highlighted lines...
  </p>
</div>
```

## Performance Best Practices

1. **Starfield**: Use appropriate quality setting for target device
2. **Cards**: Avoid nesting too many animated cards
3. **CodePanel**: Limit code length or use max-height with scroll
4. **Motion**: Respect `prefers-reduced-motion`

## Accessibility Reminders

- Always provide `alt` text for images inside cards
- Ensure interactive cards are keyboard accessible
- Use semantic HTML headings (h1, h2, h3)
- Test with screen readers
- Maintain color contrast ratios

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed guidelines.
