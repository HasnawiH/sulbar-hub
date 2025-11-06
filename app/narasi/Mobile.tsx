// /app/budaya/page.tsx
'use client';
import React from 'react';
import { ArrowLeft, Search, Settings, Filter, BookOpen } from 'lucide-react';
import Link from 'next/link';
import BudayaCard from '../components/Card/BudayaCard';
// import { TopHeader } from '@/components/TopHeader'; // Asumsi Anda punya komponen ini

// --- Data Simulasi (Sama seperti sebelumnya) ---

const kabupatenList = [
    { id: 1, nama: 'Majene', kontenCount: 12, imageUrl: 'https://beritawarganet.com/wp-content/uploads/2022/08/Logo-Kabupaten-Majene.png' },
    { id: 2, nama: 'Mamuju', kontenCount: 18, imageUrl: 'https://warnasulsel.com/wp-content/uploads/2022/07/Logo_Kab_Mamuju_warnasulselcom-1024x819.png' },
    { id: 3, nama: 'Polewali Mandar (Polman)', kontenCount: 25, imageUrl: 'https://i.ibb.co/gST2b3m/galeri2.jpg' },
    { id: 4, nama: 'Mamasa', kontenCount: 10, imageUrl: 'https://i.ibb.co/4rG3f2k/galeri1.jpg' },
];

const kontenPilihanList = [
    { id: 1, title: 'Sejarah Rumah Adat Boyang', subtitle: 'Budaya Mandar', imageUrl: 'https://media.suara.com/pictures/970x544/2024/06/16/72606-boyang-kayyang-buttu-ciping-instagramaturi-xoxo.jpg', slug: 'rumah-adat-boyang' },
    { id: 2, title: 'Pasangkayu', subtitle: '15 Konten Budaya', imageUrl: 'https://media.suara.com/pictures/970x544/2024/06/16/72606-boyang-kayyang-buttu-ciping-instagramaturi-xoxo.jpg', slug: 'pasangkayu' },
    { id: 3, title: 'Maestro Mandar', subtitle: 'Tokoh-Tokoh Inspiratif', imageUrl: 'https://media.suara.com/pictures/970x544/2024/06/16/72606-boyang-kayyang-buttu-ciping-instagramaturi-xoxo.jpg', slug: 'maestro' },
    { id: 4, title: 'Filosofi Perahu Sandeq', subtitle: 'Budaya Bahari', imageUrl: 'https://media.suara.com/pictures/970x544/2024/06/16/72606-boyang-kayyang-buttu-ciping-instagramaturi-xoxo.jpg', slug: 'perahu-sandeq' },
];

// --- Menu Filter Baru ---
const filterMenus = [
    { id: 1, label: 'Budaya Mandar', slug: 'pengenalan' },
    { id: 2, label: 'Maestro Tokoh Mandar', slug: 'maestro-tokoh' },
];


// --- Komponen Tab Filter (Tanpa Perubahan) ---
const TabFilter = ({ label, isActive }: { label: string, isActive: boolean }) => (
    <button className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-200 ${
        isActive ? 'bg-[#B89551] text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}>
        {label}
    </button>
);


export default function BudayaPageMobile() {
    // State untuk filter (Contoh: memilih filter pertama sebagai default)
    const [activeFilter, setActiveFilter] = React.useState(filterMenus[0].slug);

    return (
        <div className="min-h-screen pt-16 pb-20 bg-gray-50">
            
            {/* Header (Budbar Mandar) */}
            {/* <TopHeader title="Budaya Mandar" backHref="/" showSettings={true} showNotifications={true} /> */}
            
            <main className="container mx-auto px-4 py-4">
                
                {/* Filter Tabs (Dua Menu Saja) */}
                <div className="flex space-x-3 overflow-x-auto pb-4 border-b border-gray-200 mb-6">
                    {filterMenus.map((menu) => (
                        <TabFilter 
                            key={menu.id} 
                            label={menu.label} 
                            isActive={activeFilter === menu.slug} 
                            // Di aplikasi nyata, Anda akan menggunakan onClick={() => setActiveFilter(menu.slug)}
                        />
                    ))}
                </div>

                {/* Bagian 1: Budaya per Kabupaten */}
                {/* <section className="mb-8">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center">
                        Jelajahi Budaya per Kabupaten
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {kabupatenList.map((kab) => (
                            <div key={kab.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <Link href={`/budaya?kabupaten=${kab.nama.toLowerCase()}`} className="block">
                                    <div className="relative h-28 w-15">
                                        <img
                                            src={kab.imageUrl}
                                            alt={kab.nama}
                                            // layout="fill"
                                            // objectFit="cover"
                                            className="transition duration-300 hover:scale-105 w-full h-full"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-lg font-bold text-gray-800">{kab.nama}</h3>
                                        <p className="text-xs text-gray-500">{kab.kontenCount} Konten Budaya</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section> */}

                {/* Bagian 2: Konten Budaya Pilihan */}
                <section>
                    <h2 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center pt-6">
                        <BookOpen className='w-5 h-5 mr-2 text-[E9D484]'/> Jelajahi Budaya Mandar
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {kontenPilihanList.map((konten) => (
                            <BudayaCard
                                key={konten.id}
                                title={konten.title}
                                subtitle={konten.subtitle}
                                imageUrl={konten.imageUrl}
                                href={`/budaya/${konten.slug}`}
                                isBigCard={true}
                            />
                        ))}
                    </div>
                </section>
                
            </main>
            
        </div>
    );
}