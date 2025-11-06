// /components/Media/InstagramGallery.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2, Play } from 'lucide-react';

interface MediaItem {
    id: string;
    caption?: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    permalink: string;
}

const InstagramGallery: React.FC = () => {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInstagramData = async () => {
            try {
                // Memanggil Route Handler yang kita buat
                const response = await fetch('/api/instagram');
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Gagal mengambil data dari Instagram.');
                }

                const data: MediaItem[] = await response.json();
                setMedia(data);
            } catch (err: any) {
                setError(err.message || 'Terjadi kesalahan saat mengambil galeri.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstagramData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                Memuat Galeri Instagram...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-8 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                <p>⚠️ Gagal memuat Galeri Instagram. Cek koneksi API dan Token Anda.</p>
                <p className="text-sm mt-1">Detail: {error}</p>
            </div>
        );
    }
    
    // Ambil maksimal 8-12 item untuk tampilan grid
    const displayedMedia = media.slice(0, 12); 

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                Galeri Sulbar Culture di Instagram
                <Link 
                    href="https://instagram.com/sulbarculture" 
                    target="_blank" 
                    className="ml-4 text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                    Lihat Profil →
                </Link>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedMedia.map((item) => (
                    <Link 
                        key={item.id}
                        href={item.permalink} 
                        target="_blank" 
                        className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md group block"
                    >
                        {/* Media Content */}
                        <Image
                            src={item.media_url}
                            alt={item.caption || 'Postingan Instagram'}
                            layout="fill"
                            objectFit="cover"
                            className="transition duration-300 group-hover:scale-105"
                        />
                        
                        {/* Video Icon/Overlay */}
                        {item.media_type === 'VIDEO' && (
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
                                <Play className="w-10 h-10 text-white opacity-80" fill="white" />
                            </div>
                        )}
                        
                        {/* Caption Preview (Desktop) */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-xs line-clamp-2">{item.caption}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InstagramGallery;