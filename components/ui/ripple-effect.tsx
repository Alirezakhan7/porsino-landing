'use client';

import { motion } from 'framer-motion';

interface RippleEffectProps {
  color?: string;
  size?: number;
  duration?: number;
}

export function RippleEffect({ color = 'black', size = 200, duration = 1 }: RippleEffectProps) {
  const circles = [0, 1, 2];
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {circles.map((index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${color}`,
            opacity: 0,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5],
            opacity: [0.4, 0],
          }}
          transition={{
            duration,
            ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
            repeat: Infinity,
            delay: index * duration / 3,
            repeatDelay: 0,
          }}
        />
      ))}
    </div>
  );
}