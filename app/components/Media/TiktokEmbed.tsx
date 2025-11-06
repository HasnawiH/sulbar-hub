// /components/Media/TikTokEmbed.tsx
'use client';

import React, { useEffect } from 'react';
import Script from 'next/script'; // Untuk memuat script TikTok

interface TikTokEmbedProps {
    postUrl: string; // URL post TikTok (misalnya: 'https://www.tiktok.com/@user/video/1234567890')
}

// Catatan: Pastikan Anda menambahkan script TikTok di _app.js atau root layout.tsx jika menggunakan App Router!
// Namun, di sini kita coba muat per komponen menggunakan Script dari next/script

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ postUrl }) => {

    useEffect(() => {
        // Fungsi untuk me-render ulang embed setelah script dimuat
        const loadEmbeds = () => {
            // Cek apakah window.twttr/window.instgrm/window.tiktok.embed.run ada
            // Di sini kita asumsikan global function TikTok bernama window.tiktok.embed.run()
            if ((window as any).tiktok && (window as any).tiktok.embed) {
                (window as any).tiktok.embed.run();
            }
        };

        // Karena TikTok API agak kompleks, kita biasanya hanya mengandalkan kode embed HTML
        // dan memastikan script-nya dimuat di <head> atau di komponen ini.
        // Jika Anda hanya menggunakan iframe/blockquote, browser akan menanganinya.
        
        // Untuk penyelesaian yang cepat: kita gunakan blockquote HTML dan Script loader.
        loadEmbeds();
    }, [postUrl]);

    const videoId = postUrl.split('/').pop() || '';

    return (
        <div className="w-full">
            {/* Blok kutipan standar TikTok yang akan diubah oleh script TikTok */}
            <blockquote
                className="tiktok-embed"
                cite={postUrl}
                data-video-id={videoId}
                style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
            >
                <section>
                    <a target="_blank" title={`Lihat di TikTok`} href={postUrl}>
                        Lihat Video #Mandar di TikTok
                    </a>
                </section>
            </blockquote>
            
            {/* Memuat script TikTok secara asynchronous (sekali saja) */}
            <Script
                src="https://www.tiktok.com/embed.js"
                strategy="lazyOnload" // Muat saat browser idle
            />
        </div>
    );
};

export default TikTokEmbed;