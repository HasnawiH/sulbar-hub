'use client';
import React from 'react';
import { ShoppingCart } from 'lucide-react';
interface MarketItemCardProps {
    item: Product;
}
interface Product {
    id: number;
    title: string;
    type: 'barang' | 'jasa';
    desc: string;
    category: 'Kain Tenun & Pakaian' | 'Kuliner & Oleh-oleh' | 'Perhiasan Tradisional' | 'Kerajinan & Aksesoris';
    imageUrl: string;
    price: number; 
    rating: number; 
    sellerWA: string; 
}

const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};

const MarketItemCard: React.FC<MarketItemCardProps> = ({ item }) => {

    const handleOrder = () => {
        const message = `Halo, saya tertarik dengan produk *${item.title}* yang Anda jual di Sulbar Culture App. Apakah produk ini masih tersedia?`;
        const url = `https://wa.me/${item.sellerWA}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="relative w-full h-36">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2rem]">
                    {item.title}
                </h3>

                <p className="text-xs text-gray-500 mb-4 line-clamp-3">{item.desc}</p>
                
                {item?.type !== "jasa" &&<div className="flex items-center justify-between mt-1">
                    <p className="text-lg font-bold">
                        {formatRupiah(item.price)}
                    </p>
                </div>}

                <button
                    onClick={handleOrder}
                    className="mt-3 w-full flex items-center justify-center space-x-2 bg-[#1D546C] text-white py-2 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-[#1A3D64] shadow-md hover:shadow-lg"
                >
                    <ShoppingCart size={18} className="mr-2" />
                    <span>Pesan via WA</span>
                </button>
            </div>
        </div>
    );
};

export default MarketItemCard;