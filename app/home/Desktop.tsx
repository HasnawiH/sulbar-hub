// /app/page.tsx
'use client';
import Link from 'next/link';
import DesktopNav from '../components/DesktopNav';
import React, { useState, useMemo } from 'react';
import IllustrationCarousel from '../components/SliderCarousel';

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
];

const homeGridContent = {
    kamus: {
        title: 'KAMUS BAHASA MANDAR',
        searchPlaceholder: 'Pelajari Kosakata Khas Mandar',
    },
    highlight: [
        { type: 'Maestro', title: 'Maestro Tokoh Mandar: Baharuddin Lopa', imageUrl: 'https://s.kaskus.id/images/2021/12/20/11035100_20211220035641.jpeg', slug: '/maestro/ilo-sanusi' },
        { type: 'Pengenalan', title: 'Pengenalan Budaya Alat Musik Kecapi', imageUrl: 'https://genemil.com/wp-content/uploads/2022/07/Alat-Musik-Kecapi.png', slug: '/budaya/alat-musik-calong' },
    ],
    event: [
        { title: 'Festival Perahu Sandeq', date: '15 Nov 2024 - 18 Nov 2024', location: 'Pantai Bahari Mandar', slug: '/event/sandeq' },
        { title: 'Pesta Panen Mandar', date: '20 Des 2024 - 25 Des 2024', location: 'Mamuju', slug: '/event/panen' },
    ]
};

// --- Komponen Item Card untuk Grid Bawah (Simulasi) ---
const GridItemCard: React.FC<{ item: typeof homeGridContent.highlight[0] }> = ({ item }) => (
    <Link href={item.slug} className=" items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
        <div className="relative w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className='object-cover w-full h-full' />
        </div>
        <div className='text-center w-full pt-4' >
            <p className="text-xs  font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-orange-500">{item.type}</p>
        </div>
    </Link>
);


export default function HomePage() {
    const [activeTab, setActiveTab] = useState<'Semua Budaya' | CultureItem['type']>('Semua Budaya');
    const filteredItems = useMemo(() => {
        if (activeTab === 'Semua Budaya') {
            return cultureData;
        }
        return cultureData.filter(item => item.type === activeTab);
    }, [activeTab]);
    return (
        <div className="min-h-screen bg-[#1B3C53]">
            {/* Navigasi Desktop (Horizontal) */}
            <DesktopNav />
            <IllustrationCarousel/>

            <main className="w-full h-full mx-auto md:pb-4">
                {/* 1. Jumbotron Utama (Diadaptasi dari mobile) */}
                {/* <section className="relative w-full  overflow-hidden shadow-xl mb-4">
                    <img
                        src={mainJumbotron.imageUrl}
                        alt={mainJumbotron.title}
                        className='w-full object-cover'
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>

                    <div style={{ fontFamily: 'monospace' }} className="absolute inset-0 flex flex-col p-10 mt-14 md:mt-72 px-14 md:px-48 text-white z-10">
                        <h2 className="text-[0.5rem] md:text-xl font-extrabold leading-snug drop-shadow-lg w-full md:max-w-lg">
                            {mainJumbotron.title}
                        </h2>
                        <p className='max-w-2xl md:mt-4 mt-2 text-[0.3rem] md:text-base'>Ruang digital untuk merayakan, mempelajari, dan menghidupkan budaya Sulawesi Barat.
                            Melalui kolaborasi masyarakat, seniman, dan generasi muda, SULBAR HUB menghubungkan kekayaan budaya dengan ekosistem teknologi digital, mewujudkan gerakan bersama untuk melestarikan jati diri dan membuka masa depan budaya Sulawesi Barat</p>
                    </div>
                </section> */}

                {/* 2. Banner Promosi Bawah (2 Kolom) */}
                {/* <section className="hidden md:grid grid-cols-2 md:gap-4 gap-2 px-2 md:px-0 mb-8">
                    {subBanners.map((banner, index) => (
                        <div key={index} className="relative md:h-48 rounded-xl overflow-hidden shadow-lg group">
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                            
                                className="transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity"></div> 

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4 text-center">
                                <p className="md:text-lg text-xs font-semibold drop-shadow">{banner.title}</p>
                                <h3 className="md:text-xl text-xs font-bold drop-shadow mt-1">{banner.subtitle}</h3>
                                <Link href={banner.link}>
                                    <button className="md:mt-4 hidden md:flex px-6 py-1.5 bg-transparent border-2 border-white text-white font-medium rounded-full md:text-sm hover:bg-white hover:text-black transition-colors">
                                        {banner.linkText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section> */}

                {/* 3. Grid Konten Bawah (3 Kolom) */}
                {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <BookOpen className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">{homeGridContent.kamus.title}</h3>
                        </div>
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder={homeGridContent.kamus.searchPlaceholder}
                                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                        <Link href="/kamus" className="text-sm text-blue-600 hover:underline">Lihat Semua Kamus →</Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <Star className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">HIGHLIGHT BUDAYA</h3>
                        </div>
                        <div className="space-y-3 flex">
                            {homeGridContent.highlight.map((item, index) => (
                                <GridItemCard key={index} item={item} />
                            ))}
                        </div>
                        <Link href="/budaya" className="text-sm text-blue-600 hover:underline mt-4 block">Lihat Semua Budaya →</Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">EVENT KEBUDAYAAN</h3>
                        </div>
                        <div className="space-y-4">
                            {homeGridContent.event.map((event, index) => (
                                <Link key={index} href={event.slug} className="block p-3 hover:bg-gray-100 rounded-lg transition-colors">
                                    <p className="text-sm font-bold text-[#412B6B]">{event.title}</p>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        <span>{event.location}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/event" className="text-sm text-blue-600 hover:underline mt-4 block">Lihat Semua Event →</Link>
                    </div>
                </section> */}

                <section className='px-2 md:px-20 bg-black'>
                    {/* Grid Responsif: 2 kolom di mobile, 3 di tablet, 4 di desktop */}
                    {/* <h3 className="text-2xl font-bold text-gray-800 mb-6 pt-6">
                           Warisan Budaya
                        </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filteredItems.map(item => (
                            <CultureCard key={item.id} item={item} />
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">Tidak ada konten Budaya dalam kategori "{activeTab}".</p>
                    )} */}
                </section>
            </main>
        </div>
    );
}