// components/FeatureCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; // Untuk ikon 'Selami Pusaka'

interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  isMain: boolean; // Menentukan apakah ini kartu utama di tengah
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, imageUrl, link, isMain }) => {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300
                  ${isMain ? 'scale-110 md:scale-125 z-10 bg-[#5A1F2B] text-white' : 'scale-90 bg-white text-gray-900'}
                  transform-gpu group hover:shadow-xl hover:z-20`}
      whileHover={isMain ? {} : { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    >
      <Link href={link} className="block w-full h-full">
        <div className={`relative w-full ${isMain ? 'h-64' : 'h-48'} overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={`transition-transform duration-300 ${isMain ? '' : 'group-hover:scale-110'}`}
          />
          {isMain && (
            <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-4">
              <span className="text-white text-sm font-semibold uppercase">{subtitle}</span>
            </div>
          )}
        </div>
        <div className={`p-4 ${isMain ? 'text-white' : 'text-gray-900'}`}>
          <h3 className={`text-xl font-bold leading-tight ${isMain ? 'text-white' : 'text-[#1A2C42]'}`}>
            {title}
          </h3>
          {!isMain && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
          <button className={`mt-3 inline-flex items-center font-semibold text-sm transition-colors duration-200
                              ${isMain ? 'text-[#FFC107] hover:text-[#E0A800]' : 'text-[#5A1F2B] hover:text-[#8B2E3E]'}`}>
            Selami Pusaka
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;