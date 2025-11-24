'use client';
import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Sulbar Culture',
  description: 'Menjelajahi Jiwa Mandar, Membangun Masa Depan.',
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-[#1B3C53] text-white py-4 px-6 shadow-lg flex justify-center items-center" //[#1B3C53]
    >
      <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Sulbar Culture Logo" className="w-8 h-8" /> 
        <span className=" font-bold ">SULBAR CULTURE</span>
      </Link>
      
      <div className="flex items-center space-x-6">

        {/* <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button> */}
      </div>
    </motion.header>
  );
};

export default Header;



