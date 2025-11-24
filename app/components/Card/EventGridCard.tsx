import Link from 'next/link';
import { MapPin, Calendar } from 'lucide-react';
import React from 'react';
interface EventItem {
    id: number;
    judul: string;
    tanggal: string;
    lokasi: string;
    kategori: 'Festival Budaya' | 'Seni' | 'Lomba Tradisional' | 'Kuliner';
    imageUrl: string;
}

interface EventGridCardProps {
    event: EventItem;
}

const EventGridCard: React.FC<EventGridCardProps> = ({ event }) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Festival Budaya': return 'bg-orange-600 text-white';
            case 'Seni': return 'bg-pink-600 text-white';
            case 'Lomba Tradisional': return 'bg-blue-600 text-white';
            case 'Kuliner': return 'bg-green-600 text-white';
            default: return 'bg-gray-600 text-white';
        }
    };

    return (
        <Link href={`/event/${event.id}`} className="block"> 
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full hover:border-orange-400">
                <div className="relative w-full aspect-square ">
                    <img 
                        src={event.imageUrl} 
                        alt={event.judul} 
                        className="w-full h-full bg-cover"
                    />
                    <div className="absolute top-2 left-2 p-1 bg-white/70 backdrop-blur-sm rounded-full">
                    </div>

                    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(event.kategori)} shadow-md`}>
                        {event.kategori}
                    </div>
                </div>

                <div className="p-3 border-t-4 border-amber-700">
                    <h3 className="text-md font-bold text-gray-800 mb-2 truncate" title={event.judul}>
                        {event.judul}
                    </h3>
                    
                    <div className="space-y-1 text-xs  text-gray-600">
                        <p className="flex items-center font-medium">
                            <Calendar className="w-3.5 h-3.5 mr-1 text-red-600" />
                            {event.tanggal}
                        </p>
                        <p className="flex items-center truncate">
                            <MapPin className="w-3.5 h-3.5 mr-1 text-gray-500" />
                            {event.lokasi}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventGridCard;