'use client';
import { useState, useMemo } from 'react';
import DesktopNav from '../components/DesktopNav';
import BudayaHero from '../components/Budaya/BudayaHero';
import CultureCard from '../components/Card/CultureCard';
import DataBudaya from '@/data/budaya.json'
import {
    BookText,
    Landmark,
    Gamepad2,
    Swords,
    GraduationCap,
    Hammer,
    Paintbrush,
    MessageSquareText,
    CandlestickChart,
    ScrollText,
    Globe,
} from 'lucide-react';
interface CultureItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    slug: string;
}

const culturalTabs = [
    { name: 'Semua Warisan', value: 'Semua Warisan', icon: Globe },
    { name: 'Manuskrip', value: 'Manuskrip', icon: BookText },
    { name: 'Naskah Pusaka', value: 'Naskah Pusaka', icon: ScrollText },
    { name: 'Adat & Tradisi', value: 'Adat & Tradisi', icon: Landmark },
    { name: 'Permainan Tradisional', value: 'Permainan Tradisional', icon: Gamepad2 },
    { name: 'Olahraga Tradisional', value: 'Olahraga Tradisional', icon: Swords },
    { name: 'Pengetahuan Tradisional', value: 'Pengetahuan Tradisional', icon: GraduationCap },
    { name: 'Teknologi Tradisional', value: 'Teknologi Tradisional', icon: Hammer },
    { name: 'Seni', value: 'Seni', icon: Paintbrush },
    { name: 'Bahasa', value: 'Bahasa', icon: MessageSquareText },
    { name: 'Ritual Sakral', value: 'Ritual Sakral', icon: CandlestickChart },
];

export default function Budaya() {
    const [activeTab, setActiveTab] = useState<'Semua Warisan' | CultureItem['type']>('Semua Warisan');

    const filteredItems = useMemo(() => {
        if (activeTab === 'Semua Warisan') {
            return DataBudaya;
        }
        return DataBudaya.filter(item => item.type === activeTab);
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-[#1A2A4F] pb-2">
            <DesktopNav />
            <main className="w-full mx-auto">
                <BudayaHero />

                <div className='px-2 mt-28 md:px-20 mb-8'>
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
                                <CultureCard key={item.id} from={'budaya'} item={item} />
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