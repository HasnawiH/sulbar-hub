// /app/event/page.tsx (Client Component agar Tab bisa interaktif)
'use client';

import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import EventGridCard from '../components/Card/EventGridCard';
import DesktopNav from '../components/DesktopNav';

// --- DATA SIMULASI (Digantikan oleh Firebase) ---
const dummyEvents = [
    { id: 1, judul: "Student On Sandeq", tanggal: "12-15 Nov 2025", lokasi: "Pantai Barane, Majene", kategori: 'Belajar', imageUrl: 'images/SOS.jpg' },
    { id: 2, judul: "Celebes Heritage Festival", tanggal: "20 Des 2023", lokasi: "Lapangan Mandar, Majene", kategori: 'Festival Budaya', imageUrl: 'images/CHF.jpg' },
    { id: 3, judul: "Lomba Perahu Tradisional", tanggal: "10 Jan 2026", lokasi: "Teluk Mamuju", kategori: 'Lomba Tradisional', imageUrl: 'https://cdn.slidesharecdn.com/ss_thumbnails/sandeqrace-180730143235-thumbnail.jpg?width=640&height=640&fit=bounds' },
    { id: 4, judul: "Pameran Kerajinan Tenun", tanggal: "05 Feb 2026", lokasi: "Gedung KNPI, Polman", kategori: 'Festival Budaya', imageUrl: 'https://asset-2.tstatic.net/sulbar/foto/bank/images/Suasana-kegiatan-Expo-Sulbar-2022-di-Balikpapan-Super-Blok-BSB-Kota-Balikpapan.jpg' },
];
// ---------------------------------------------------


export default function EventMandarPage() {
    const [activeTab, setActiveTab] = useState('Semua Event');
    const eventsData = dummyEvents; 

    return (
        <>
            <header className='hidden md:grid'><DesktopNav/></header>
            <header className='grid md:hidden'>
                 <TopHeader title="Event Mandar" backHref="/" showSettings={false} showNotifications={false} />
            </header>
           
            <div className="min-h-screen pt-4 pb-20 bg-gray-50">
                <main className="container mx-auto px-4 py-4">

                    {/* Navigasi Tab (Filter) - Sesuai Desain */}
                    <div className="flex md:justify-center space-x-2 overflow-x-auto pb-3 hide-scrollbar">
                        {['Semua Event', 'Mendatang', 'Sedang Berlangsung', 'Terpopuler'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200 flex-shrink-0 ${activeTab === tab
                                        ? 'bg-[#412B6B] text-white'
                                        : 'bg-white text-gray-700 border border-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className='mt-8 p-4 bg-gray-200 text-xs rounded-md border border-dashed' >
                        Menampilkan informasi event budaya tahunan pada 6 Kabupaten (Polewali, Majene, Mamuju, Mamasa, Mamuju Tengah, Pasangkayu), Provinsi Sulawesi Barat. <br/> Promosikan Event Budaya Kamu, melalui link <a className='text-blue-400' href='/upload/agenda'>Halaman Pendaftaran</a>
                    </div>

                    {/* Tata Letak GRID Event */}

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Gunakan grid-cols-2 untuk mobile, ini yang sesuai dengan desain */}
                        {eventsData.length > 0 ? (
                            eventsData.map((event: any) => (
                                <EventGridCard key={event.id} event={event} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 py-10">
                                Belum ada Event yang terjadwal.
                            </p>
                        )}
                    </div>

                </main>
            </div>
        </>
    );
}