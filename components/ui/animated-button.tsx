'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({ children, className, onClick }: AnimatedButtonProps) {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="relative">
      <Button
        onClick={onClick}
        className={className}
      >
        {children}
      </Button>
      {isGlowing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.1, 0.9],
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-lg bg-[#46988F] filter blur-lg"
          style={{ zIndex: -1 }}
        />
      )}
    </motion.div>
  );
}