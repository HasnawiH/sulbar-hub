'use client';

import React, { useState, useMemo } from 'react';
import { Search, Volume2, X } from 'lucide-react';
import TopHeader from '../components/TopHeader';
import DesktopNav from '../components/DesktopNav';
import Kamus from '@/data/kamus.json';

// --- KAMUS CARD COMPONENT ---
const KamusCard: React.FC<{ item: any; mode: 'mandar' | 'indonesia' }> = ({ item, mode }) => {
    const primaryText = mode === 'mandar' ? item.kataMandar : item.artiIndonesia;
    const secondaryText = mode === 'mandar' ? item.artiIndonesia : item.kataMandar;

    const playAudio = () => {
        if (item.audioUrl) {
            const audio = new Audio(item.audioUrl);
            audio.play();
        } else {
            alert('Audio tidak tersedia untuk kata ini.');
        }
    };

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div>
                <h3 className="text-sm font-bold text-gray-800">{primaryText}</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                    Arti {mode === 'mandar' ? 'Indonesia' : 'Mandar'}: {secondaryText}
                </p>
            </div>
            {item.audioUrl && (
                <button
                    onClick={playAudio}
                    className="p-2 ml-4 rounded-full text-blue-600 hover:bg-blue-50 transition duration-150"
                    aria-label={`Dengarkan kata ${item.kataMandar}`}
                >
                    <Volume2 className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default function KamusPage() {
    // State untuk mode pencarian (Mandar ke Indonesia atau sebaliknya)
    const [searchMode, setSearchMode] = useState<'mandar' | 'indonesia'>('mandar');
    const [searchTerm, setSearchTerm] = useState('');

    // --- LOGIKA PENCARIAN (Filtering) ---
    const filteredKamus = useMemo(() => {
        if (!searchTerm) {
            return Kamus;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();

        return Kamus.filter(item => {
            if (searchMode === 'mandar') {
                // Pencarian Mandar -> Indonesia (cari berdasarkan kata Mandar)
                return item.kataMandar.toLowerCase().includes(lowerSearchTerm);
            } else {
                // Pencarian Indonesia -> Mandar (cari berdasarkan arti Indonesia)
                return item.artiIndonesia.toLowerCase().includes(lowerSearchTerm);
            }
        });
    }, [searchTerm, searchMode]);

    // // --- LOGIKA ALFABET (Indeks Cepat di Kanan) ---
    // const alphabetIndex = useMemo(() => {
    //     const letters = new Set(filteredKamus.map(item => item.kategori || item.kataMandar[0]).sort());
    //     return Array.from(letters);
    // }, [filteredKamus]);

    return (
        <>
            <header className='hidden md:grid'>
                <DesktopNav />
            </header>
            <div className="min-h-screen pb-20 bg-gray-50">

                <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 grid md:hidden">
                    <TopHeader title="Kamus Bahasa Mandar" backHref="/" showSettings={false} showNotifications={false} showSearch={false} />
                </header>

                <main className="container mx-auto px-4 pt-[4.5rem] md:pt-2 md:px-40 py-4">
                    {/* <section className="relative h-28 w-full overflow-hidden shadow-xl">
                        <img
                            src="images/BANNER1.png"
                            alt="Kekayaan Budaya Senya Mandar"
                            className='w-full'
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-6">
                            <h2 className="text-md font-semibold text-center leading-snug drop-shadow-lg">
                                KAMUS & ENSIKLOPEDIA
                            </h2>
                        </div>
                    </section> */}

                    {/* Search Bar Fungsional */}
                    <div className="relative mb-4 pt-8">
                        <Search className="absolute left-3 top-14 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder={`Cari kata dalam ${searchMode === 'mandar' ? 'Bahasa Mandar' : 'Bahasa Indonesia'}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Toggle Mandar ↔ Indonesia */}
                    <div className="flex justify-center bg-gray-200 p-1 rounded-full mb-6">
                        <button
                            onClick={() => setSearchMode('mandar')}
                            className={`w-1/2 py-2 text-sm font-semibold rounded-full transition duration-200 ${searchMode === 'mandar' ? 'bg-[#412B6B] text-white shadow-md' : 'text-gray-700'
                                }`}
                        >
                            Mandar → Indonesia
                        </button>
                        <button
                            onClick={() => setSearchMode('indonesia')}
                            className={`w-1/2 py-2 text-sm font-semibold rounded-full transition duration-200 ${searchMode === 'indonesia' ? 'bg-[#412B6B] text-white shadow-md' : 'text-gray-700'
                                }`}
                        >
                            Indonesia → Mandar
                        </button>
                    </div>

                    <h2 className="text-base font-semibold text-gray-600 mb-3">
                        → Hasil Pencarian ({filteredKamus.length} Kata)
                    </h2>

                    {/* Daftar Kamus dan Indeks Alfabet */}
                    <div className="relative flex">
                        {/* Daftar Kata (List) */}
                        <div className="flex-grow space-y-3 pr-2">
                            {filteredKamus.length > 0 ? (
                                filteredKamus.map((item) => (
                                    <KamusCard key={item.id} item={item} mode={searchMode} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 py-10">
                                    Kata tidak ditemukan. Coba ganti mode pencarian.
                                </p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}