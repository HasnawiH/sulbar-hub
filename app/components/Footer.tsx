import React from 'react';
import Link from 'next/link';

const footerLinks = [
    {
        title: 'Sulbar Culture',
        links: [
            { name: 'Tentang Kami', href: '/tentang-kami' },
            // { name: 'Hubungi Kami', href: '/kontak' },
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
        title: 'Kamus Bahasa Mandar',
        links: [
            { name: 'Kamus & Ensiklopedia Bahasa Mandar', href: '/kamus' },
        ],
        headerColor: 'border-orange-500',
    },
];

const footerLinksRow2 = [
    {
        title: 'Lapak',
        links: [
            { name: 'Lapak Barang', href: '/marketplace' },
            { name: 'Lapak Jasa', href: '/marketplace' },
        ],
        headerColor: 'border-green-500',
    },
    {
        title: 'Tokoh Maestro',
        links: [
            { name: 'Tokoh Inspiratif', href: '/tokoh/inspiratif' },
            { name: 'Tokoh Seni', href: '/tokoh/seni' },
        ],
        headerColor: 'border-purple-500',
    },
    {
        title: 'Agenda Budaya',
        links: [
            { name: 'Semua Agenda', href: '/event' },
            { name: 'Agenda Mendatang', href: '/event' },
            { name: 'Agenda Berlangsung', href: '/event' },
        ],
        headerColor: 'border-red-500',
    },
    {
        title: 'Narasi Budaya',
        links: [
            { name: 'Cagar', href: '/narasi' },
            { name: 'Budaya', href: '/narasi' },
        ],
        headerColor: 'border-yellow-500',
    },
];


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1B3C53] text-gray-300 pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8  pb-10 mb-10">
                    <div className="md:col-span-1 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="font-extrabold text-2xl text-orange-400 uppercase tracking-wider block">
                                SULBAR <br /> CULTURE
                            </span>
                        </Link>
                    </div>

                    {footerLinks.map((col, colIndex) => (
                        <div key={colIndex} className="md:col-span-1">
                            <h4 className={`text-white text-lg mb-4 pb-2 border-b-2 ${col.headerColor}`}>
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

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {footerLinksRow2.map((col, colIndex) => (
                        <div key={colIndex} className="md:col-span-1">
                            <h4 className={`text-white text-lg mb-4 pb-2 border-b-2 ${col.headerColor}`}>
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

                <div className="mt-12 py-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sulbar Culture. Karya Anak Mandar.
                </div>
            </div>
        </footer>
    );
};

export default Footer;