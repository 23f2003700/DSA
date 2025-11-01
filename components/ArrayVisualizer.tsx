'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

interface ArrayVisualizerProps {
  initialArray?: number[];
  className?: string;
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  initialArray = [64, 34, 25, 12, 22, 11, 90],
  className = '',
}) => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxValue = Math.max(...array);

  const generateRandomArray = () => {
    if (isAnimating) return;
    const newArray = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 100) + 10
    );
    setArray(newArray);
    setComparing([]);
    setSorted([]);
  };

  const bubbleSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const arr = [...array];
    const n = arr.length;
    setComparing([]);
    setSorted([]);

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing([j, j + 1]);
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
      setSorted((prev) => [...prev, n - 1 - i]);
    }
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([]);
    setIsAnimating(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <Card className={`${className}`} hoverable={false}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-fluid-2xl font-bold text-cosmic-white">
            Array Visualizer
          </h2>
          <div className="flex gap-2">
            <motion.button
              className="px-4 py-2 rounded-lg bg-cosmic-slate hover:bg-cosmic-blue text-cosmic-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={generateRandomArray}
              disabled={isAnimating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Random
            </motion.button>
            <motion.button
              className="px-4 py-2 rounded-lg bg-cosmic-accent hover:bg-cosmic-blue text-cosmic-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={bubbleSort}
              disabled={isAnimating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bubble Sort
            </motion.button>
          </div>
        </div>

        {/* Array Visualization */}
        <motion.div
          className="flex items-end justify-center gap-2 h-64 p-4 rounded-lg bg-cosmic-space/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {array.map((value, index) => {
              const isComparing = comparing.includes(index);
              const isSorted = sorted.includes(index);
              const height = (value / maxValue) * 100;

              let barColor = 'bg-cosmic-slate';
              if (isSorted) {
                barColor = 'bg-cosmic-glow';
              } else if (isComparing) {
                barColor = 'bg-cosmic-accent';
              }

              return (
                <motion.div
                  key={`${index}-${value}`}
                  className={`flex-1 ${barColor} rounded-t-lg relative group`}
                  variants={barVariants}
                  style={{ height: `${height}%` }}
                  layout
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    height: `${height}%`,
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    layout: { duration: 0.3 },
                    default: { duration: 0.3 },
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-cosmic-light font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Status */}
        <div className="text-center text-sm text-cosmic-silver">
          {isAnimating && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cosmic-glow"
            >
              Sorting in progress...
            </motion.p>
          )}
          {!isAnimating && sorted.length === array.length && sorted.length > 0 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-cosmic-glow"
            >
              ✨ Array sorted!
            </motion.p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ArrayVisualizer;
