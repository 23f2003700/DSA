'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import CodePanel from '@/components/CodePanel';
import ArrayVisualizer from '@/components/ArrayVisualizer';

export default function Home() {
  const sampleCode = `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16 mt-8">
        <h1 className="text-fluid-4xl font-bold mb-6 cosmic-glow-text">
          Master Data Structures & Algorithms
        </h1>
        <p className="text-fluid-lg text-cosmic-silver max-w-2xl mx-auto">
          Interactive visualizations and elegant design to help you understand complex algorithms
          with clarity and precision.
        </p>
      </motion.div>

      {/* Array Visualizer */}
      <motion.div variants={itemVariants} className="mb-12">
        <ArrayVisualizer />
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={itemVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        <Card variant="default">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-cosmic-accent/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cosmic-glow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cosmic-white">
              Lightning Fast
            </h3>
            <p className="text-cosmic-silver text-sm">
              Optimized visualizations that run smoothly across all devices with adaptive
              quality settings.
            </p>
          </div>
        </Card>

        <Card variant="default">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-cosmic-accent/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cosmic-glow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cosmic-white">
              Accessible Design
            </h3>
            <p className="text-cosmic-silver text-sm">
              WCAG AA compliant with high contrast mode support and full keyboard navigation.
            </p>
          </div>
        </Card>

        <Card variant="default">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-cosmic-accent/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cosmic-glow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cosmic-white">
              Interactive Learning
            </h3>
            <p className="text-cosmic-silver text-sm">
              Step through algorithms visually and understand how they work with hands-on
              interaction.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Code Example */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-fluid-2xl font-bold mb-6 text-cosmic-white">
          Clean, Readable Code
        </h2>
        <CodePanel
          code={sampleCode}
          language="javascript"
          highlightLines={[6, 7, 8]}
          title="Bubble Sort Implementation"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={itemVariants} className="text-center">
        <Card variant="pulse" className="inline-block">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cosmic-white">
              Ready to Start Learning?
            </h3>
            <p className="text-cosmic-silver">
              Explore our comprehensive collection of algorithms and data structures.
            </p>
            <motion.button
              className="px-8 py-3 rounded-lg bg-cosmic-accent hover:bg-cosmic-blue text-cosmic-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
