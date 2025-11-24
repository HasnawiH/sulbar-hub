import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CultureItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    slug: string; 
}
interface CultureCardProps {
    item: CultureItem;
    from: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ item, from }) => {
    return (
        <Link 
            href={from == 'budaya' ? `/budaya/${item.slug}` : `/narasi/${item.slug}`} 
            className="block bg-[#132440] text-white hover:text-gray-800  hover:bg-white rounded-xl cursor-pointer shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:shadow-blue-500"
        >
            <div className="relative w-full h-40 overflow-hidden">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="transition-transform duration-500 group-hover:scale-110 object-cover"
                />
            </div>
            
            <div className="p-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full bg-orange-100 text-orange-600 mb-2">
                    {item.type}
                </span>

                <h3 className="text-lg font-bold line-clamp-2 min-h-[3rem]">
                    {item.title}
                </h3>
                <p className="text-sm  line-clamp-3 mt-1 min-h-[4.5rem]">
                    {item.description}
                </p>

                <div className="mt-3 text-orange-500 font-semibold text-sm flex items-center">
                    Selami Lebih Dalam →
                </div>
            </div>
        </Link>
    );
};

export default CultureCard;