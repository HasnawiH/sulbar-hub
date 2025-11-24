import React from 'react';
import { Youtube } from 'lucide-react';

interface YouTubeEmbedCardProps {
    videoId: string;
    title: string;
}

const YouTubeEmbedCard: React.FC<YouTubeEmbedCardProps> = ({ videoId, title }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">

            <div className="relative w-full h-60 aspect-[9/16] bg-black"> 
                <iframe
                    className="absolute top-0 left-0 w-full h-60"
                    src={embedUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-3">
                <div className='flex items-center text-sm text-gray-500 mb-1'>
                    <Youtube className='w-4 h-4 mr-1 text-red-600'/> YouTube
                </div>
                <p className="text-sm font-semibold text-gray-800 line-clamp-2" title={title}>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default YouTubeEmbedCard;