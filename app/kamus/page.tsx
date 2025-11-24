"use client";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import TopHeader from '../components/TopHeader';
import DesktopNav from '../components/DesktopNav';
import KamusHero from '../components/Kamus/KamusHero';
import KamusResultList from '../components/Kamus/KamusResultList';
import KamusWordDetail from '../components/Kamus/KamusWordDetail';
import kamus from "@/data/kamus.json"

const KamusPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredWords, setFilteredWords] = useState(kamus);
    const [selectedWord, setSelectedWord] = useState<typeof kamus[0] | null>(null);

    useMemo(() => {
        if (!searchTerm) {
            setFilteredWords(kamus);
        } else {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            setFilteredWords(
                kamus.filter(
                    (word) =>
                        word.word.toLowerCase().includes(lowerCaseSearchTerm) ||
                        word.translation.toLowerCase().includes(lowerCaseSearchTerm)
                )
            );
        }
    }, [searchTerm]);

    useMemo(() => {
        if (filteredWords.length > 0 && !selectedWord) {
            setSelectedWord(filteredWords[0]);
        } else if (filteredWords.length === 0) {
            setSelectedWord(null);
        }
    }, [filteredWords, selectedWord]);


    return (
        <>
            <header className='hidden md:grid'>
                <DesktopNav />
            </header>
            <div className="min-h-screen " style={{backgroundImage: 'url("/images/BG.jpg")'}}>
                <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 grid md:hidden">
                    <TopHeader title="Kamus & Ensiklopedia Bahasa Mandar" backHref="/" showSettings={false} showNotifications={false} showSearch={false} />
                </header>
                <KamusHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-[calc(100vh-90px)] overflow-y-auto custom-scrollbar"
                        
                    >
                        <KamusResultList
                            words={filteredWords}
                            selectedWordId={selectedWord?.id || null}
                            onSelectWord={(word: any) =>setSelectedWord(word)}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        {selectedWord ? (
                            <KamusWordDetail word={selectedWord} />
                        ) : (
                            <div className=" p-8 rounded-xl shadow-lg border border-gray-100 h-full flex items-center justify-center text-gray-500 text-md italic">
                                Mulai perjalanan kata. Pilih dari jejak yang terkuak atau gagas pencarian baru.
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>
        </>
    );
};

export default KamusPage;