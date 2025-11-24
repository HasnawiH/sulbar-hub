'use client';
import { useState, useMemo } from 'react';
import DesktopNav from '../components/DesktopNav';
import CultureCard from '../components/Card/CultureCard';
import { Zap, User, Palette } from 'lucide-react';
import Typewriter from '../components/TypeWriter';
import DataNarasi from '@/data/narasi.json'

interface CultureItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: 'Tokoh Maestro' | 'Cagar' | 'Budaya';
    slug: string;
    fullContent?: string;
}

const culturalTabs = [
    { name: 'Semua Narasi', value: 'Semua Narasi', icon: Zap },
    { name: 'Tokoh Maestro', value: 'Tokoh Maestro', icon: User },
    { name: 'Cagar', value: 'Cagar', icon: Zap },
    { name: 'Budaya', value: 'Budaya', icon: Palette },
];


export default function BudayaPageDesktop() {
    const [activeTab, setActiveTab] = useState<'Semua Narasi' | CultureItem['type']>('Semua Narasi');

    const filteredItems = useMemo(() => {
        if (activeTab === 'Semua Narasi') {
            return DataNarasi;
        }
        return DataNarasi.filter(item => item.type === activeTab);
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-[#1A2A4F] pb-8 ">
            <DesktopNav />
            <main className="w-full mx-auto">
                <section className="relative h-full  w-full overflow-hidden shadow-xl mb-8">
                    <img
                        src="images/NARASI.jpg"
                        alt="Kekayaan Budaya Senya Mandar"
                        className='w-full object-cover'
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute md:ml-28 mt-2 md:mt-24 inset-0 flex flex-col justify-items-start text-white z-10 p-6">
                        <h2 className="text-xl md:text-6xl font-semibold  drop-shadow-lg">
                            Narasi
                        </h2>
                        <h2 className="text-3xl md:text-9xl font-semibold drop-shadow-lg">
                            Budaya
                        </h2>
                        <Typewriter
                            text={"Warisan budaya Sulawesi Barat adalah perpaduan harmonis antara tradisi bahari Suku Mandar yang mendiami pesisir dan adat luhur Suku Mamasa yang mendiami pegunungan."}
                            typingSpeed={80}
                            delay={1000}
                        />
                    </div>
                </section>

                <div className='px-2 mt-16 md:px-20 mb-8'>
                    <section className="mb-8 ">
                        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide **scrollbar-hide**  ">
                            {culturalTabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.value;
                                return (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveTab(tab.value as any)}

                                        className={`flex items-center  cursor-pointer space-x-1 px-4 py-2 text-sm font-semibold rounded-md whitespace-nowrap transition-colors duration-200 ${isActive
                                            ? 'bg-[#1B3C53] border border-[#FF8040] text-white hover:shadow-[#FF8040]'
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


                    <section>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredItems.map(item => (
                                <CultureCard key={item.id} from={'narasi'} item={item} />
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">Jejak "{activeTab}" masih menanti untuk digali. Sementara itu, mari telusuri warisan lain yang telah bersuara.</p>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}