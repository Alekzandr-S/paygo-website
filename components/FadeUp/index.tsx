'use client'

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface FadeUpAndHoverProps {
  children: ReactNode;
  delay?: number; // Optional delay to stagger animations
}

const combinedVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', duration: 0.5 },
  },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  rest: { scale: 0.05 }
};

const FadeUpAndHover: React.FC<FadeUpAndHoverProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover="hover"
      variants={combinedVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAndHover;
