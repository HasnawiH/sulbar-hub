// /app/budaya/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import DesktopNav from '../components/DesktopNav';
import CultureCard from '../components/Card/CultureCard';
import { Zap, BookOpen, User, Palette, Film, Feather, Heart } from 'lucide-react';
import Typewriter from '../components/TypeWriter';

// --- DATA SIMULASI BUDAYA ---
interface CultureItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: 'Tokoh Maestro Mandar' | 'Karya Mandar' | 'Kalindaqdaq' | 'Pesona Budaya' | 'Cerita Rakyat Mandar' | 'Ruang Kreasi' | 'Tradisi Mandar';
    slug: string;
}

const cultureData: CultureItem[] = [
    // Maestro
    { id: 1, title: 'Ilo-Ilo Sanusi: Maestro Seni Sandeq', description: 'Tokoh inspiratif yang memegang teguh warisan pembuatan perahu Sandeq Mandar. Pelajari kisah hidupnya dan karya-karyanya.', imageUrl: 'https://s.kaskus.id/images/2021/12/20/11035100_20211220035641.jpeg', type: 'Tokoh Maestro Mandar', slug: 'maestro-ilo-sanusi' },
    // Karya
    { id: 2, title: 'Tenun Khas Mandar: Pola dan Makna', description: 'Mempelajari berbagai jenis tenun yang kaya warna, dari Sekomandi hingga Sureq. Setiap motif memiliki makna filosofis mendalam.', imageUrl: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg', type: 'Karya Mandar', slug: 'karya-tenun-mandar' },
    // Tradisi
    { id: 3, title: 'Sayyang Pattudu: Kuda Menari', description: 'Tradisi unik arak-arakan wisudawan/wisudawati dengan menunggang kuda yang menari. Tradisi ini dilakukan di Polewali Mandar.', imageUrl: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg', type: 'Tradisi Mandar', slug: 'tradisi-sayyang-pattudu' },
    // Pesona Budaya
    { id: 4, title: 'Perahu Sandeq: Pelari Cepat Laut Mandar', description: 'Perahu tradisional yang dikenal karena kecepatannya. Simbol kemaritiman dan kegigihan suku Mandar.', imageUrl: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg', type: 'Pesona Budaya', slug: 'pesona-perahu-sandeq' },
    // Cerita Rakyat
    { id: 5, title: 'Legenda To Manurung', description: 'Cerita rakyat tentang asal mula kerajaan-kerajaan di Mandar dan tokoh-tokoh mitos yang dipercaya turun dari langit.', imageUrl: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg', type: 'Cerita Rakyat Mandar', slug: 'cerita-to-manurung' },
    // Kalindaqdaq (Puisi)
    { id: 6, title: 'Kumpulan Kalindaqdaq Terbaik', description: 'Contoh puisi tradisional Mandar, Kalindaqdaq, yang berisi nasihat, cinta, dan sindiran sosial.', imageUrl: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg', type: 'Kalindaqdaq', slug: 'kumpulan-kalindaqdaq' },
    // Ruang Kreasi
    { id: 7, title: 'Tutorial Membuat Miniatur Sandeq', description: 'Panduan langkah demi langkah untuk membuat kerajinan miniatur perahu Sandeq dari bahan-bahan sederhana.', imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/08/31/perahu-sandeq-1_169.jpeg?w=700&q=90', type: 'Ruang Kreasi', slug: 'kreasi-miniatur-sandeq' },
    // Data Tambahan (Ulangi beberapa untuk mengisi grid)
    { id: 8, title: 'Rumah Adat Boyang: Arsitektur dan Filosofi', description: 'Mempelajari struktur dan makna dibalik rumah adat tradisional Suku Mandar.', imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/08/31/perahu-sandeq-1_169.jpeg?w=700&q=90', type: 'Pesona Budaya', slug: 'pesona-rumah-boyang' },
];

// List Tab yang digunakan
const culturalTabs = [
    { name: 'Semua', value: 'Semua Budaya', icon: Zap },
    // { name: 'Tokoh Maestro Mandar', value: 'Tokoh Maestro Mandar', icon: User },
    { name: 'Cerita', value: 'Cerita', icon: Zap },
    { name: 'Naskah', value: 'Karya Mandar', icon: Palette },
    { name: 'Adat', value: 'Tradisi Mandar', icon: Heart },
    { name: 'Permainan', value: 'Pesona Budaya', icon: Film },
    { name: 'Olahraga', value: 'Kalindaqdaq', icon: Feather },
    { name: 'Ilmu', value: 'Cerita Rakyat Mandar', icon: BookOpen },
    { name: 'Peralatan', value: 'Ruang Kreasi', icon: Palette },
    { name: 'Seni', value: 'Ruang Kreasi', icon: Palette },
    { name: 'Bahasa', value: 'Ruang Kreasi', icon: Palette },
    { name: 'Ritual', value: 'Ruang Kreasi', icon: Palette },
];


export default function BudayaPageDesktop() {
    // State untuk tab aktif (default: Semua Budaya)
    const [activeTab, setActiveTab] = useState<'Semua Budaya' | CultureItem['type']>('Semua Budaya');

    const filteredItems = useMemo(() => {
        if (activeTab === 'Semua Budaya') {
            return cultureData;
        }
        return cultureData.filter(item => item.type === activeTab);
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-[#1A2A4F] ">
            <DesktopNav />
            {/* Main Content Area */}
            <main className="w-full mx-auto">
                {/* Jumbotron Budaya */}
                <section className="relative h-full  w-full overflow-hidden shadow-xl mb-8">
                    <img
                        src="images/BUDAYA.jpg"
                        alt="Kekayaan Budaya Senya Mandar"
                        className='w-full object-cover'
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute md:ml-28 mt-2 md:mt-24 inset-0 flex flex-col justify-items-start text-white z-10 p-6">
                        <h2 className="text-xl md:text-6xl font-semibold  drop-shadow-lg">
                            Warisan
                        </h2>
                        <h2 className="text-3xl md:text-9xl font-semibold drop-shadow-lg">
                            Budaya
                        </h2>
                        <Typewriter
                            text={"Jelajahi jejak budaya Sulawesi Barat, dari tokoh dan maestro, pengetahuan dan tradisi lisan, hingga cagar budaya yang menjadi saksi perjalanan masyarakat Sulbar. Setiap kisah dan peninggalan adalah bagian dari cerita besar tentang bagaimana budaya bertahan dan memberi makna bagi masa kini. Karena warisan bukan sekadar masa lalu, tapi apa yang kita teruskan untuk masa depan."}
                            typingSpeed={80} // Lebih cepat
                            delay={1000} // Mulai setelah 1 detik
                        />
                    </div>
                </section>

                <div className='px-2 md:px-20 mb-8'>
                    {/* Navigasi TAB Kategori Budaya */}
                    <section className="mb-8 ">
                        <h3 className="text-2xl font-bold text-white mb-4">Warisan Budaya Sulawesi Barat</h3>
                        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide **scrollbar-hide** border-b  border-gray-200">
                            {culturalTabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.value;
                                return (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveTab(tab.value as any)}

                                        className={`flex items-center  cursor-pointer space-x-1 px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-200 ${isActive
                                            ? 'bg-[#412B6B] text-white hover:shadow-[#FF8040]'
                                            : 'bg-[#1B3C53] text-white  hover:shadow-[#FF8040]'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{tab.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Grid Daftar Konten Budaya */}
                    <section>
                        <h3 className="text-2xl font-bold text-white mb-6 pt-6">
                            {activeTab} ({filteredItems.length})
                        </h3>

                        {/* Grid Responsif: 2 kolom di mobile, 3 di tablet, 4 di desktop */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredItems.map(item => (
                                <CultureCard key={item.id} item={item} />
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">Tidak ada konten Budaya dalam kategori "{activeTab}".</p>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}