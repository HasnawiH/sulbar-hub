// /components/Footer.tsx
import React from 'react';
import Link from 'next/link';

// Data untuk kolom-kolom Footer
const footerLinks = [
    {
        title: 'Sulbar Culture',
        links: [
            { name: 'Tentang Kami', href: '/tentang' },
            { name: 'Hubungi Kami', href: '/kontak' },
        ],
        headerColor: 'border-gray-500',
    },
    {
        title: 'Ikuti Kami',
        links: [
            { name: 'Instagram', href: 'https://instagram.com/sulbarculture' },
            { name: 'Facebook', href: 'https://facebook.com/sulbarculture' },
            { name: 'Youtube', href: 'https://youtube.com/sulbarculture' },
            { name: 'Twitter', href: 'https://twitter.com/sulbarculture' },
            { name: 'TikTok', href: 'https://tiktok.com/@sulbarculture' },
        ],
        headerColor: 'border-white',
    },
    {
        title: 'Warisan Budaya',
        links: [
            { name: '', href: '/budaya?kategori=kesenian' },
            { name: 'Tradisi Mandar', href: '/budaya?kategori=tradisi' },
            { name: 'Pariwisata', href: '/pariwisata' },
            { name: 'Kuliner', href: '/budaya?kategori=kuliner' },
        ],
        headerColor: 'border-blue-500',
    },
    {
        title: 'Kunjungi Kami',
        links: [
            { name: 'Galeri Sulbar Culture', href: '/galeri' },
            { name: 'Destinasi Unggulan', href: '/taman' },
        ],
        headerColor: 'border-orange-500',
    },
];

// Data untuk baris kedua (jika ada, atau bisa digabung)
const footerLinksRow2 = [
    {
        title: 'Lapak',
        links: [
            { name: 'Lapak UMKM Mandar', href: '/marketplace' },
        ],
        headerColor: 'border-green-500',
    },
    {
        title: 'Maestro Mandar',
        links: [
            { name: 'Tokoh Inspiratif', href: '/tokoh/inspiratif' },
        ],
        headerColor: 'border-purple-500',
    },
    {
        title: 'Agenda Budaya',
        links: [
            { name: 'Jadwal Kegiatan', href: '/agenda/jadwal' },
            { name: 'Ruang Kreatif', href: '/kegiatan/ruang-kreatif' },
        ],
        headerColor: 'border-red-500',
    },
    {
        title: 'Narasi Mandar',
        links: [
            { name: 'Mandar Bercerita', href: '/video/cerita' },
            { name: 'Jurnal Sulbar', href: '/video/jurnal' },
            { name: 'Pesona Mandar', href: '/video/paras' },
        ],
        headerColor: 'border-yellow-500',
    },
];


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1B3C53] text-gray-300 pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Bagian Atas Footer (Logo + Link Kolom 1) */}
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-10">

                    {/* Kolom Logo */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            {/* <img src="/logo.png" alt="Sulbar Culture Logo" className="h-10 mb-4" />  */}
                            {/* Jika logo adalah teks: */}
                            <span className="font-extrabold text-2xl text-orange-400 uppercase tracking-wider block">
                                SULBAR <br /> CULTURE
                            </span>
                        </Link>
                    </div>

                    {/* Kolom Link Pertama (Indonesia Kaya / Sulbar Culture) */}
                    {footerLinks.map((col, colIndex) => (
                        <div key={colIndex} className="md:col-span-1">
                            <h4 className={`text-white text-lg font-semibold mb-4 pb-2 border-b-2 ${col.headerColor}`}>
                                {col.title}
                            </h4>
                            <ul className="space-y-2">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bagian Bawah Footer (Link Kolom 2) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {footerLinksRow2.map((col, colIndex) => (
                        <div key={colIndex} className="md:col-span-1">
                            <h4 className={`text-white text-lg font-semibold mb-4 pb-2 border-b-2 ${col.headerColor}`}>
                                {col.title}
                            </h4>
                            <ul className="space-y-2">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright (Opsional) */}
                <div className="mt-12 py-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sulbar Culture. Dibuat dengan ❤️ untuk masa depan yang lebih berbudaya. Karya Anak Mandar.
                </div>
            </div>
        </footer>
    );
};

export default Footer;