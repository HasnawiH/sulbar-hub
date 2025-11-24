"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Impor ikon yang spesifik untuk QuickNav
import { Landmark, BookText, Library, ShoppingBag } from 'lucide-react';

interface QuickNavItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

interface QuickNavProps {
  categories: QuickNavItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const QuickNav: React.FC<QuickNavProps> = ({ categories }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8 bg-white rounded-xl shadow-2xl relative z-10 -mt-24 mx-auto max-w-6xl border border-gray-100"
    >
      {categories.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 border border-gray-100 rounded-lg group cursor-pointer bg-white transform-gpu perspective-1000"
        >
          <Link href={item.href} className="flex flex-col items-center w-full h-full">
            <div className="p-4 rounded-full bg-gray-50 group-hover:bg-[#5A1F2B] transition duration-300">
              <item.icon className="w-8 h-8 text-[#5A1F2B] group-hover:text-white" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#1A2C42] text-center">
              {item.name}
            </h3>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QuickNav;