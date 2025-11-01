'use client';

import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pulse' | 'elevated';
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverable = true,
  ...motionProps
}) => {
  const baseClasses = 'cosmic-card p-6';
  const variantClasses = {
    default: '',
    pulse: 'cosmic-card-pulse',
    elevated: 'shadow-2xl',
  };
  
  const hoverClasses = hoverable ? 'cursor-pointer hover:scale-[1.02]' : '';

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={
        hoverable
          ? {
              y: -4,
              transition: { duration: 0.2 },
            }
          : {}
      }
      whileTap={
        hoverable
          ? {
              scale: 0.98,
              transition: { duration: 0.1 },
            }
          : {}
      }
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;
