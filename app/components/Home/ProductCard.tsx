// components/ProductCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer"
      whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={link}>
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-md font-semibold text-[#1A2C42] truncate">{name}</h3>
          <p className="mt-1 text-lg font-bold text-[#5A1F2B]">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;