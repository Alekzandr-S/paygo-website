// ValueCard.tsx
import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { motion, useInView, Variants } from 'framer-motion';
import { fadeIn } from '@/hooks/variants';

// Define the props interface
interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Ensure fadeIn returns a Variants object
  const variants: Variants = fadeIn('up', index * 0.2);

  return (
    <Card className='p-8'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        exit="hidden"
        variants={variants}
      >
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='mt-2'>{description}</p>
      </motion.div>
    </Card>
  );
};

export default ValueCard;
