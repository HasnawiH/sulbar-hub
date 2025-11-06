// /app/reels/page.tsx
'use client';

import React from 'react';
// import { TopHeader } from '@/components/TopHeader';
import TikTokEmbed from '../components/Media/TiktokEmbed';
import { Video } from 'lucide-react';

// --- DATA SIMULASI (Digantikan oleh Kurasi/CMS Anda) ---
const curatedReels = [
    // Ganti dengan URL postingan TikTok Mandar yang sebenarnya
    { id: 1, url: 'https://www.tiktok.com/@user1/video/11111111111' }, 
    { id: 2, url: 'https://www.tiktok.com/@user2/video/22222222222' }, 
    { id: 3, url: 'https://www.tiktok.com/@user3/video/33333333333' }, 
    { id: 4, url: 'https://www.tiktok.com/@user4/video/44444444444' }, 
    // Tambahkan lebih banyak link di sini
];

export default function ReelsPage() {
    return (
        <div className="min-h-screen pt-16 pb-20 bg-gray-50">
            {/* <TopHeader title="Galeri Reels Mandar" backHref="/" showSettings={false} showNotifications={true} /> */}
            
            <main className="container mx-auto px-4 py-4">
                
                <div className="flex items-center text-lg font-bold text-gray-800 mb-4">
                    <Video className="w-6 h-6 mr-2 text-red-600" />
                    Reels Pilihan #Mandar
                </div>
                
                <p className="text-sm text-gray-600 mb-6 border-b pb-4">
                    Kumpulan konten video pendek (Reels) tentang Budaya Mandar yang diambil dari TikTok dan media sosial lainnya.
                </p>

                {/* Tata Letak GRID (2 Kolom) */}
                <div className="grid grid-cols-2 gap-4"> 
                    {curatedReels.map((reel) => (
                        <div key={reel.id} className="rounded-xl overflow-hidden shadow-lg bg-white p-2">
                            {/* Memuat komponen TikTok Embed */}
                            <TikTokEmbed postUrl={reel.url} />
                        </div>
                    ))}
                </div>
                
                {/* Catatan Kaki */}
                <p className="text-center text-xs text-gray-400 mt-8">
                    *Konten diambil dari postingan publik TikTok. Aplikasi tidak berafiliasi dengan TikTok.
                </p>
                
            </main>
            
            {/* BottomNav di Layout */}
        </div>
    );
}