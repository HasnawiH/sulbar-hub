'use client';
import React, { useEffect } from 'react';
import Script from 'next/script'; 

interface TikTokEmbedProps {
    postUrl: string;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ postUrl }) => {

    useEffect(() => {
        const loadEmbeds = () => {
            if ((window as any).tiktok && (window as any).tiktok.embed) {
                (window as any).tiktok.embed.run();
            }
        };

        loadEmbeds();
    }, [postUrl]);

    const videoId = postUrl.split('/').pop() || '';

    return (
        <div className="w-full">
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
            
            <Script
                src="https://www.tiktok.com/embed.js"
                strategy="lazyOnload" 
            />
        </div>
    );
};

export default TikTokEmbed;