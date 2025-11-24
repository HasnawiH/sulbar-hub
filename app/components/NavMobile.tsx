'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Calendar, ShoppingBag, Tent } from 'lucide-react';

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
            <div className="border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                    {navItems.map((item) => {
                        const isActive = item.href === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.href);

                        const Icon = item.icon;
                        const activeColor = 'text-[#B89551]'; 
                        const inactiveColor = 'text-gray-500 hover:text-[#B89551]'; 

                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="flex flex-col items-center justify-center p-1 relative transition-colors duration-200 group"
                            >
                                <Icon 
                                    className={`w-6 h-6 ${isActive ? activeColor : inactiveColor}`} 
                                    strokeWidth={isActive ? 2.5 : 2} 
                                />
                                
                                <span className={`text-xs mt-1 ${isActive ? activeColor : 'text-gray-500'} transition-colors duration-200`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavMobile;