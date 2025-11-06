// /app/event/[slug]/page.tsx

import { ArrowLeft, Share2, MapPin, Calendar, Star, Clock } from 'lucide-react';
import Link from 'next/link';

// Interface Data
interface EventItem {
    id: string;
    judul: string;
    tanggal: string;
    waktu: string;
    lokasi: string;
    imageUrl: string;
    rating: number;
    ulasanCount: number;
    deskripsi: string;
    kategori: string;
}

// --- DATA SIMULASI (Pengganti Firebase/data.ts) ---
const dummyEvent: EventItem = {
    id: 'sandeq-race',
    judul: 'Festival Sandeq Race',
    tanggal: '12 - 15 November 2025',
    waktu: '09:00 - 17:00 WITA',
    lokasi: 'Pantai Bahari, Polewali Mandar',
    imageUrl: '/assets/images/sandeq-race-hero.jpg', 
    rating: 4.8,
    ulasanCount: 352,
    kategori: 'Festival Budaya',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam. Acara ini menampilkan perahu Sandeq yang menjadi ikon bahari Sulawesi Barat. Jangan lewatkan pagelaran seni dan kuliner khas Mandar selama acara berlangsung.',
};

// Fungsi simulasi untuk mengambil data event
const getEventBySlug = (slug: any): EventItem | null => {
    // Dalam implementasi nyata, Anda akan fetch dari Firebase/DB
    return dummyEvent.id === slug ? dummyEvent : null;
   
};
// ---------------------------------------------------


interface EventDetailPageProps {
    params: {
        slug: string; // Parameter dari URL: /event/[slug]
    };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
    const eventSlug = params.slug;
    const data = getEventBySlug(eventSlug); 

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <h1 className="text-xl text-gray-700">Event tidak ditemukan.</h1>
            </div>
        );
    }
    
    return (
        // Hapus pb-20 (padding bottom) karena BottomNav akan dihandle di Layout
        <div className="min-h-screen bg-gray-50 relative"> 
            
            {/* 1. FLOATING HEADER (Gambar Hero) */}
            <header className="absolute top-0 left-0 right-0 z-20">
                <div className="flex justify-between items-center h-16 px-4">
                    {/* Tombol Back */}
                    <Link href="/event" className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition duration-150">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    {/* Tombol Share & Opsi */}
                    <div className="flex space-x-2">
                         <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition duration-150">
                            <Share2 className="w-5 h-5" />
                        </button>
                         <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition duration-150">
                            {/* Ikon Opsi (tiga titik) */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" /></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. HERO IMAGE SECTION */}
            <section className="relative h-96 w-full">
                <img 
                    src={data?.imageUrl} 
                    alt={data?.judul} 
                    className="w-full h-full object-cover"
                />
                
                {/* Overlay Putih Melengkung di Bawah Gambar */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-50 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gray-50 h-6 rounded-t-3xl"></div>
            </section>

            <main className="container mx-auto px-4 -mt-10 relative z-10 pb-8"> {/* Tambahkan pb-8 untuk ruang di bawah */}
                
                {/* BADGE (Mendatang) - Sesuai Desain */}
                <div className="flex justify-end mb-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-lg shadow-md">
                        Mendatang
                    </span>
                </div>

                {/* JUDUL & RATING */}
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-3">{data?.judul}</h1>
                    
                    <div className="flex items-center space-x-4 text-sm mb-4">
                        {/* Rating */}
                        <div className="flex items-center text-yellow-500 font-semibold">
                            <Star className="w-4 h-4 mr-1 fill-yellow-500" />
                            <span>{data?.rating}</span>
                        </div>
                        {/* Ulasan */}
                        <span className="text-gray-600">{data?.ulasanCount} Ulasan</span>
                        {/* Lokasi */}
                        <Link href="https://maps.google.com/" target="_blank" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                            <MapPin className="w-4 h-4 mr-1"/> Lihat di Peta
                        </Link>
                    </div>

                    {/* WAKTU & TANGGAL */}
                    <div className="flex items-center text-gray-700 text-base space-x-4 mb-4 border-b pb-4">
                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-red-600" />
                            <span className='font-medium'>{data?.tanggal}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-red-600" />
                            <span className='font-medium'>{data?.waktu}</span>
                        </div>
                    </div>

                    {/* LOKASI KHUSUS */}
                    <p className="text-base font-semibold text-gray-700 flex items-center mb-4">
                         <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                         {data?.lokasi}
                    </p>

                    {/* TENTANG EVENT */}
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Tentang Event</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {data?.deskripsi}
                    </p>
                </div>
                
                {/* Bagian Rundown Acara dan Informasi Lain (Opsional, bisa ditambahkan) */}
                {/* ... (Hapus atau biarkan kosong jika hanya informasi dasar yang diperlukan) */}
                
            </main>

            {/* FLOATING ACTION BAR BAWAH: DIHAPUS TOTAL SESUAI PERMINTAAN */}
        </div>
    );
}