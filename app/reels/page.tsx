// /app/reels/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
// import { TopHeader } from '@/components/TopHeader'; // Pastikan path ini benar
import YouTubeEmbedCard from '../components/Media/YouTubeEmbed';
import { Video } from 'lucide-react';
import DesktopNav from '../components/DesktopNav';

interface ReelItem {
    videoId: string;
    title: string;
}

export default function ReelsPage() {
    const [reels, setReels] = useState<ReelItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReels() {
            try {
                // Panggil API Route yang sudah memuat logika filter otomatis
                const response = await fetch('/api/reels');

                if (!response.ok) {
                    throw new Error('Gagal mengambil data reels dari server.');
                }

                const data = await response.json();
                setReels(data.reels || []);
            } catch (err: any) {
                setError(err.message);
                console.error("Fetch Reels Error:", err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchReels();
    }, []);

    return (
        <>
            <DesktopNav/>
            <div className="min-h-screen pt-16 pb-20 bg-gray-50">
                {/* <TopHeader title="Galeri Reels Mandar" backHref="/" showSettings={false} showNotifications={true} /> */}

                <main className="container mx-auto px-4 py-4">

                    <div className="flex items-center text-xl font-extrabold text-gray-900 mb-2">
                        <Video className="w-6 h-6 mr-2 text-red-600" />
                        Galeri Sulbar Culture
                    </div>

                    <p className="text-sm text-gray-600 mb-6 pb-4 border-b">
                        Kumpulan video galeri sulbar culture
                    </p>

                    {isLoading && (
                        <div className="text-center p-8 text-gray-500">Memuat konten...</div>
                    )}

                    {error && (
                        <div className="text-center p-8 text-red-600 bg-red-100 rounded-lg">Error: {error}</div>
                    )}

                    {/* Tata Letak GRID (2 Kolom) */}
                    {!isLoading && !error && reels.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {reels.map((reel) => (
                                <YouTubeEmbedCard
                                    key={reel.videoId}
                                    videoId={reel.videoId}
                                    title={reel.title}
                                />
                            ))}
                        </div>
                    )}

                    {!isLoading && !error && reels.length === 0 && (
                        <div className="text-center p-8 text-gray-500">Belum ada video #Mandar Shorts yang ditemukan.</div>
                    )}

                    <p className="text-center text-xs text-gray-400 mt-8">
                        *Filter otomatis berdasarkan durasi video (maksimal 60 detik).
                    </p>

                </main>
            </div>
        </>
    );
}