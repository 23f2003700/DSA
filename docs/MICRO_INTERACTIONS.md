# Cosmic Theme - Micro-Interactions Guide

This document provides detailed code snippets for implementing micro-interactions using Framer Motion with the Cosmic Theme.

## Page Transitions

### Staggered Container Animation
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

## Hover, Focus, and Tap Effects

### Scale on Hover
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Interactive Button
</motion.button>
```

### Focus Ring with Glow
```tsx
<motion.input
  whileFocus={{
    boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.3)',
    borderColor: 'var(--cosmic-glow)',
  }}
  transition={{ duration: 0.2 }}
/>
```

## Floating/Levitation Animations

### Continuous Float
```tsx
// Using Tailwind class
<div className="animate-float">Floating Element</div>

// Or with Framer Motion
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
>
  Floating Element
</motion.div>
```

## Accessibility

Always respect user preferences:
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
>
  Respects Motion Preferences
</motion.div>
```
