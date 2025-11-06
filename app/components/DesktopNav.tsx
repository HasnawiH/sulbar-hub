'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu } from 'lucide-react';

const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Warisan', href: '/budaya' },
    { name: 'Agenda', href: '/event' },
    { name: 'Lapak', href: '/marketplace' }, 
    { name: 'Galeri', href: '/reels' },
    { name: 'Narasi', href: '/narasi' },
    { name: 'Kamus', href: '/kamus' },  
];

const DesktopNav: React.FC = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-[#1B3C53] shadow-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* 1. Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Sulbar Culture Logo" className="w-8 h-8" /> 
                    <span className="font-extrabold text-xl text-white uppercase">
                        Sulbar Culture
                    </span>
                </Link>

                {/* 2. Navigasi Tengah */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`text-md font-semibold relative py-2 transition-colors duration-200 ${
                                    isActive 
                                        ? 'text-orange-600' 
                                        : 'text-white hover:text-orange-500'
                                }`}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* 3. Aksi Kanan (Search, Notifikasi, Menu) */}
                <div className="flex space-x-4 items-center">
                    <button className="text-white hover:text-orange-500 p-1" aria-label="Cari">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-orange-500 p-1 md:hidden" aria-label="Menu Mobile">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DesktopNav;