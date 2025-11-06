// /components/TopHeader.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, Bell, Settings } from 'lucide-react';

interface TopHeaderProps {
    /** Judul yang akan ditampilkan di tengah header. */
    title: string; 
    
    /** Link tujuan untuk tombol kembali (default: kembali ke halaman sebelumnya). 
     * Set ke null atau undefined jika tidak ada tombol kembali. */
    backHref?: string | null;
    
    /** Tampilkan ikon Search (kaca pembesar). */
    showSearch?: boolean;
    
    /** Tampilkan ikon Notifikasi (lonceng). */
    showNotifications?: boolean;
    
    /** Tampilkan ikon Settings (roda gigi). */
    showSettings?: boolean;

    /** Untuk mengganti title dengan logo (opsional) */
    useLogo?: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({
    title,
    backHref = null,
    showSearch = true,
    showNotifications = true,
    showSettings = false,
    useLogo = false,
}) => {
    const router = useRouter();

    const handleBack = () => {
        if (backHref) {
            router.push(backHref);
        } else {
            router.back();
        }
    };

    const logoComponent = (
        <div className="font-extrabold text-lg text-gray-900 flex items-center">
            Sulbar Culture
        </div>
    );

    return (
        <header style={{backgroundImage: 'url("Logo1.jpg")'}} className="sticky top-0 z-20 border-b border-gray-100 shadow-sm">
            <div className="flex items-center  justify-between h-16 max-w-lg mx-auto px-4"> 
                {/* 1. Tombol Kembali/Back Button */}
                <div className="w-8"> 
                    {backHref !== null && (
                        <button 
                            onClick={handleBack}
                            className="text-white p-1 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Kembali"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    )}
                </div>

                {/* 2. Judul/Logo */}
                <div className="flex-1 text-center">
                    {useLogo ? logoComponent : (
                        <h1 className="text-lg font-bold text-white truncate" title={title}>
                            {title}
                        </h1>
                    )}
                </div>

                {/* 3. Aksi Kanan (Search, Notification, Settings) */}
                <div className="flex space-x-2 w-8 justify-end"> 
                    {showSearch && (
                        <button className="text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors" aria-label="Cari">
                            <Search className="w-6 h-6" />
                        </button>
                    )}
                    {showNotifications && (
                        <button className="text-white p-1 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Notifikasi">
                            <Bell className="w-6 h-6" />
                            {/* Dot Notifikasi (Simulasi) */}
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
                        </button>
                    )}
                    {showSettings && (
                         <button className="text-white p-1 hover:bg-gray-100 rounded-full transition-colors" aria-label="Pengaturan">
                            <Settings className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TopHeader;