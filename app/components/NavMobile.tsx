'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Book, Globe, Calendar, ShoppingBag, LucideIcon, House } from 'lucide-react';
// import React from 'react';

// interface NavItem {
//   name: string;
//   href: string;
//   icon: LucideIcon;
// }

// const navItems: NavItem[] = [
//   { name: 'Beranda', href: '/', icon: House },
//   { name: 'Kamus', href: '/kamus', icon: Book },
//   { name: 'Budaya', href: '/budaya', icon: Globe },
//   { name: 'Event', href: '/event', icon: Calendar },
//   { name: 'Pasar', href: '/marketplace', icon: ShoppingBag },
// ];

// const NavMobile: React.FC = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t shadow-2xl z-20">
//       <div className="flex justify-around items-center h-16">
//         {navItems.map((item) => {
//           const isActive = pathname.startsWith(item.href);
//           const Icon = item.icon;

//           return (
//             <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center p-1 flex-1 text-sm">
//               <Icon size={20} className={isActive ? 'text-green-700' : 'text-gray-500'} />
//               <span className={`text-xs mt-1 ${isActive ? 'text-green-700 font-bold' : 'text-gray-500'}`}>
//                 {item.name}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// };

// export default NavMobile;

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Calendar, ShoppingBag, Tent } from 'lucide-react';

// Definisi Struktur Menu Navigasi
const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Kamus', href: '/kamus', icon: BookOpen },
    { name: 'Budaya', href: '/budaya', icon: Tent },
    { name: 'Event', href: '/event', icon: Calendar },
    { name: 'Market', href: '/marketplace', icon: ShoppingBag },
];

const NavMobile: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 " style={{backgroundImage: 'url("Logo1.jpg")'}}>
            {/* Box Shadow & Garis Pemisah yang Lebih Halus */}
            <div className="border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                    {navItems.map((item) => {
                        // Tentukan apakah link aktif. Gunakan regex sederhana untuk path dinamis.
                        const isActive = item.href === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.href);

                        const Icon = item.icon;
                        const activeColor = 'text-[#B89551]'; //432323
                        const inactiveColor = 'text-gray-500 hover:text-[#B89551]'; //432323

                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="flex flex-col items-center justify-center p-1 relative transition-colors duration-200 group"
                            >
                                {/* 1. Icon Navigasi */}
                                <Icon 
                                    className={`w-6 h-6 ${isActive ? activeColor : inactiveColor}`} 
                                    strokeWidth={isActive ? 2.5 : 2} // Icon lebih tebal jika aktif
                                />
                                
                                {/* 2. Teks Label */}
                                <span className={`text-xs mt-1 ${isActive ? activeColor : 'text-gray-500'} transition-colors duration-200`}>
                                    {item.name}
                                </span>

                                {/* 3. Indikator Aktif (Dot Kecil di Bawah) */}
                                {/* {isActive && (
                                    <div className="absolute -bottom-1 h-1 w-5 bg-[#B89551] rounded-full transition-opacity duration-300"></div>
                                )} */}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavMobile;