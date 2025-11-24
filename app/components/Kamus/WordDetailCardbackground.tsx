import React from 'react';
import { motion } from 'framer-motion';

interface WordDetailCardProps {
  children: React.ReactNode;
  motifType?: 'light' | 'dark'; 
}

const WordDetailCardBackground: React.FC<WordDetailCardProps> = ({ children, motifType = 'light' }) => {
  const motifPath = motifType === 'light' ? '/images/sekomandi-pattern-light.png' : '/images/sekomandi-pattern-dark.png';
  
  const motifStyle = {
    backgroundImage: `url(${motifPath})`,
    backgroundSize: '200px',
    backgroundRepeat: 'repeat',
    opacity: 0.07, 
    filter: 'grayscale(100%) blur(0.5px)', 
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 bg-white transition-all duration-500"
    >
      <div
        style={motifStyle}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 space-y-6">
        {children}
      </div>
    </motion.div>
  );
};

export default WordDetailCardBackground;