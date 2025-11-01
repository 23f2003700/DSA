const plugin = require('tailwindcss/plugin');

// Cosmic Theme Color Tokens
const cosmicColors = {
  // Deep space blacks and dark grays
  'cosmic-void': '#000000',        // Deepest black for main background
  'cosmic-space': '#0a0a0f',       // Deep space for layered backgrounds
  'cosmic-dark': '#121218',        // Dark layer for cards and sections
  'cosmic-slate': '#1a1a24',       // Elevated surfaces
  
  // Whites and light grays
  'cosmic-white': '#ffffff',       // Pure white for primary text
  'cosmic-light': '#f5f5f7',       // Muted white for UI elements
  'cosmic-silver': '#c0c0c8',      // Soft silver for secondary text
  'cosmic-subtle': '#808088',      // Subtle gray for tertiary elements
  
  // Accent and glow colors
  'cosmic-blue': '#3b82f6',        // Soft blue for highlights
  'cosmic-glow': '#60a5fa',        // Lighter blue for glow effects
  'cosmic-neon': '#93c5fd',        // Neon blue for borders
  'cosmic-accent': '#2563eb',      // Accent blue for interactive elements
};

// Fluid Typography Scale
const fluidType = (minSize, maxSize, minVw = 320, maxVw = 1920) => {
  const slope = (maxSize - minSize) / (maxVw - minVw);
  const yAxisIntersection = -minVw * slope + minSize;
  return `clamp(${minSize}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxSize}px)`;
};

module.exports = plugin(
  function({ addBase, addComponents, addUtilities, theme }) {
    // Base styles
    addBase({
      ':root': {
        '--cosmic-void': cosmicColors['cosmic-void'],
        '--cosmic-space': cosmicColors['cosmic-space'],
        '--cosmic-dark': cosmicColors['cosmic-dark'],
        '--cosmic-slate': cosmicColors['cosmic-slate'],
        '--cosmic-white': cosmicColors['cosmic-white'],
        '--cosmic-light': cosmicColors['cosmic-light'],
        '--cosmic-silver': cosmicColors['cosmic-silver'],
        '--cosmic-subtle': cosmicColors['cosmic-subtle'],
        '--cosmic-blue': cosmicColors['cosmic-blue'],
        '--cosmic-glow': cosmicColors['cosmic-glow'],
        '--cosmic-neon': cosmicColors['cosmic-neon'],
        '--cosmic-accent': cosmicColors['cosmic-accent'],
      },
      'body': {
        backgroundColor: cosmicColors['cosmic-void'],
        color: cosmicColors['cosmic-white'],
        fontFamily: theme('fontFamily.sans'),
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    });

    // Frosted Glass Card Component
    addComponents({
      '.cosmic-card': {
        backgroundColor: 'rgba(18, 18, 24, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(192, 192, 200, 0.1)',
        borderRadius: theme('borderRadius.xl'),
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 4px 24px -4px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        '&:hover': {
          borderColor: 'rgba(96, 165, 250, 0.3)',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px -4px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(96, 165, 250, 0.2)',
        },
        
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '&:hover': {
            transform: 'none',
          },
        },
      },
      
      '.cosmic-card-pulse': {
        animation: 'cosmic-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      '.cosmic-glow-text': {
        textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
      },
      
      '.cosmic-code-panel': {
        backgroundColor: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(192, 192, 200, 0.08)',
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.4'),
        fontFamily: theme('fontFamily.mono'),
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('lineHeight.relaxed'),
      },
      
      '.cosmic-code-highlight': {
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        borderLeft: '2px solid',
        borderColor: cosmicColors['cosmic-glow'],
        paddingLeft: theme('spacing.2'),
        marginLeft: '-' + theme('spacing.2'),
      },
    });

    // Utility classes
    addUtilities({
      '.text-fluid-xs': {
        fontSize: fluidType(12, 14),
      },
      '.text-fluid-sm': {
        fontSize: fluidType(14, 16),
      },
      '.text-fluid-base': {
        fontSize: fluidType(16, 18),
      },
      '.text-fluid-lg': {
        fontSize: fluidType(18, 20),
      },
      '.text-fluid-xl': {
        fontSize: fluidType(20, 24),
      },
      '.text-fluid-2xl': {
        fontSize: fluidType(24, 32),
      },
      '.text-fluid-3xl': {
        fontSize: fluidType(30, 42),
      },
      '.text-fluid-4xl': {
        fontSize: fluidType(36, 56),
      },
      '.scrollbar-cosmic': {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: cosmicColors['cosmic-space'],
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: cosmicColors['cosmic-slate'],
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: cosmicColors['cosmic-silver'],
          },
        },
      },
    });
  },
  {
    theme: {
      extend: {
        colors: cosmicColors,
        fontFamily: {
          sans: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'sans-serif',
          ],
          mono: [
            'JetBrains Mono',
            'Fira Code',
            'Consolas',
            'Monaco',
            'Courier New',
            'monospace',
          ],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1.5' }],
          'sm': ['0.875rem', { lineHeight: '1.5' }],
          'base': ['1rem', { lineHeight: '1.6' }],
          'lg': ['1.125rem', { lineHeight: '1.6' }],
          'xl': ['1.25rem', { lineHeight: '1.5' }],
          '2xl': ['1.5rem', { lineHeight: '1.4' }],
          '3xl': ['1.875rem', { lineHeight: '1.3' }],
          '4xl': ['2.25rem', { lineHeight: '1.2' }],
          '5xl': ['3rem', { lineHeight: '1.1' }],
        },
        keyframes: {
          'cosmic-pulse': {
            '0%, 100%': {
              borderColor: 'rgba(192, 192, 200, 0.1)',
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 4px 24px -4px rgba(0, 0, 0, 0.5)',
            },
            '50%': {
              borderColor: 'rgba(96, 165, 250, 0.3)',
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px -4px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(96, 165, 250, 0.3)',
            },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'shimmer': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
          },
        },
        animation: {
          'cosmic-pulse': 'cosmic-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 3s ease-in-out infinite',
          'shimmer': 'shimmer 3s linear infinite',
        },
      },
    },
  }
);
