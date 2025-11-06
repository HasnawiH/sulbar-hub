'use client';

import { useState, useMemo } from 'react';
import TopHeader from '../components/TopHeader';
import DesktopNav from '../components/DesktopNav';
import MarketItemCard from '../components/Card/MarketItemCard';
import { Shirt, Utensils, Diamond, Star, Clock, Heart } from 'lucide-react';

const categoryIcons = [
    { name: 'Kain Tenun & Pakaian', icon: Shirt, slug: 'kain-pakaian' },
    { name: 'Kuliner & Oleh-oleh', icon: Utensils, slug: 'kuliner' },
    { name: 'Perhiasan Tradisional', icon: Diamond, slug: 'perhiasan' },
    { name: 'Kerajinan & Aksesoris', icon: Star, slug: 'kerajinan' },
];

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

const marketplaceData: Product[] = [
    // Barang (Kain Tenun, Kerajinan, Kuliner)
    { id: 1, title: 'Lipa Saqbe', type: 'barang', desc: "Tenun sutra asli Mandar dengan motif khas.", category: 'Kain Tenun & Pakaian', imageUrl: 'images/LIPA.jpg', price: 950000, rating: 4.7, sellerWA: '628111222333' },
    { id: 2, title: 'Tenun Sekomandi', type: 'barang', desc: "Tenun sutra asli Kalumpang Mamuju dengan motif khas.", category: 'Kain Tenun & Pakaian', imageUrl: 'images/SEKOMANDI.jpg', price: 1500000, rating: 4.3, sellerWA: '628111222333' },
    { id: 3, title: 'Miniatur Sandeq', type: 'barang', desc: "Replika perahu Sandeq, cocok untuk suvenir.", category: 'Kerajinan & Aksesoris', imageUrl: 'images/MINIATUR.jpg', price: 250000, rating: 4.7, sellerWA: '628111222333' },
    { id: 4, title: 'Golla Kambu', type: 'barang', desc: "Makanan ringan tradisional dari beras ketan.", category: 'Kuliner & Oleh-oleh', imageUrl: 'https://indonesia.go.id/assets/upload/headline/531CC2AA-CAD8-4A20-83C2-AF4773852269_thumb.jpeg', price: 20000, rating: 4.3, sellerWA: '628111222333' },
    // Jasa (Simulasi)
    { id: 5, title: 'Duo Poject', type: 'jasa', desc: "Layanan penampil musik tradisi dan kontemporer", category: 'Kerajinan & Aksesoris', imageUrl: 'images/DUOPROJECT.jpg', price: 0, rating: 4.9, sellerWA: '628111222333' },
    { id: 6, title: 'Teater Ampat', type: 'jasa', desc: "Sanggar Seni Teater Ampat. Sulawesi Barat", category: 'Kerajinan & Aksesoris', imageUrl: 'images/TEATER4.jpg', price: 0, rating: 4.5, sellerWA: '628111222333' },
];


export default function MarketplacePage() {
    const [activeType, setActiveType] = useState<'barang' | 'jasa'>('barang'); // Default Barang
    const [activeTab, setActiveTab] = useState<'Semua' | 'Terbaru' | 'Laris' | 'Diskon'>('Semua');

    // Filter data berdasarkan tipe yang aktif (Barang atau Jasa)
    const filteredItems = useMemo(() => {
        let items = marketplaceData?.filter((item: any) => item.type === activeType);

        // Logika sorting/filter lanjutan berdasarkan activeTab 
        if (activeTab === 'Laris') {
            items.sort((a: any, b: any) => b.rating - a.rating); // Sort by rating for 'Laris'
        }
        // ... bisa ditambahkan filter 'Terbaru' atau 'Diskon' di sini

        return items;
    }, [activeType, activeTab]);

    return (
        <div className="min-h-screen pb-20 bg-gray-50">
            <header className='hidden md:grid'>
                <DesktopNav/>
            </header>
            <header className='grid md:hidden'>
                <TopHeader
                    title="Marketplace"
                    backHref="/"
                    showNotifications={false}
                    showSearch={false}
                />
            </header>

            <main className="container mx-auto px-4 md:px-28 py-4">
                {/* Tab BARANG vs JASA */}
                <div className="flex max-w-2xl space-x-2 mb-6 p-1 bg-gray-200 rounded-full">
                    <button
                        onClick={() => setActiveType('barang')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-full transition-colors ${activeType === 'barang' ? 'bg-[#1A3D64] text-white shadow-md' : 'text-gray-700'
                            }`}
                    >
                        Barang
                    </button>
                    <button
                        onClick={() => setActiveType('jasa')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-full transition-colors ${activeType === 'jasa' ? 'bg-[#1A3D64] text-white shadow-md' : 'text-gray-700'
                            }`}
                    >
                        Jasa
                    </button>
                </div>

                {/* Filter Sub-Kategori (Semua Produk, Terbaru, Laris, Diskon) */}
                {/* <div className="flex space-x-2 overflow-x-auto pb-4 border-b border-gray-200 mb-6">
                    {['Semua', 'Terbaru', 'Laris', 'Diskon'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                                activeTab === tab ? 'bg-red-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div> */}


                {/* Navigasi Kategori (Hanya ditampilkan untuk Tipe Barang) */}
                {/* {activeType === 'barang' && (
                    <section className="mb-8">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-4">
                            Jelajahi Kategori
                        </h2>
                        <div className="grid grid-cols-4 gap-3 text-center">
                            {categoryIcons.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <Link key={cat.slug} href={`/marketplace?category=${cat.slug}`} className="block p-2 rounded-lg bg-white shadow-md hover:bg-orange-50 transition-colors">
                                        <Icon className="w-8 h-8 mx-auto text-orange-500" />
                                        <p className="text-xs mt-1 text-gray-700">{cat.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                )} */}


                {/* Daftar Item (Produk / Jasa) */}
                <section>
                    <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-t pt-6">
                        Rekomendasi {activeType === 'barang' ? 'Produk' : 'Jasa'} Pilihan
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredItems.map((item: any) => (
                            <MarketItemCard key={item.id} item={item} />
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">Tidak ada {activeType} yang ditemukan.</p>
                    )}
                </section>

            </main>

        </div>
    );
}