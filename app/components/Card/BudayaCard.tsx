// /components/Card/BudayaCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface BudayaItemProps {
    title: string;
    subtitle: string;
    imageUrl: string;
    href: string; // Link ke halaman detail
    isBigCard?: boolean; // Untuk Kartu Pilihan yang lebih besar
}

const BudayaCard: React.FC<BudayaItemProps> = ({ title, subtitle, imageUrl, href, isBigCard = false }) => {
    
    // Ukuran yang berbeda berdasarkan props isBigCard
    const wrapperClass = isBigCard ? 'w-full h-40' : 'w-full h-32';
    const textClass = isBigCard ? 'text-lg font-bold' : 'text-sm font-semibold';

    return (
        <Link href={href} className="block group">
            <div className={`relative ${wrapperClass} overflow-hidden rounded-xl shadow-md`}>
                <img
                    src={imageUrl}
                    alt={title}
                    // layout="fill"
                    // objectFit="cover"
                    className="transition duration-300 group-hover:scale-105 w-full h-full object-cover"
                />
            </div>
            <div className={`mt-2 ${isBigCard ? 'p-1' : ''}`}>
                <h3 className={`${textClass} text-gray-800 line-clamp-2`}>
                    {title}
                </h3>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                    {!isBigCard && <MapPin className='w-3 h-3 mr-1 text-red-500' />}
                    {subtitle}
                </p>
            </div>
        </Link>
    );
};

export default BudayaCard;