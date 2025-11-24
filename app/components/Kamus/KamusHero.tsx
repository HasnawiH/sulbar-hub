import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface KamusHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const KamusHero: React.FC<KamusHeroProps> = ({ searchTerm, setSearchTerm }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        width={100}
        height={100}
        src="/images/NARASi.jpg" 
        alt="Background Motif Mandar"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <motion.h1
          // variants={textVariants}
          className="text-2xl md:text-4xl font-extrabold tracking-wide font-serif"
        >
          KAMUS & ENSIKLOPEDIA MANDAR
        </motion.h1>
        <motion.p
          // variants={textVariants}
          // transition={{ ...textVariants.visible.transition, delay: 0.2 }}
          className="mt-3 text-md md:text-2xl italic font-light max-w-3xl font-serif"
        >
          Jelajahi Kekayaan Bahasa dan Kearifan Lokal.
        </motion.p>

        <motion.div
          variants={searchBarVariants}
          className="relative w-full max-w-xl mt-10"
        >
          <input
            type="text"
            placeholder="Telusuri Jejak Kata Mandar atau Makna Indonesia..."
            className="w-full py-4 pl-14 pr-16 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFC107] shadow-lg transition-all text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <button className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KamusHero;