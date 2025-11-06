'use client';

import Link from 'next/link';
import { BookOpen, Calendar, ShoppingBag, Search, Bell, Tent } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 

// --- DATA SIMULASI (Digantikan oleh Firebase di dunia nyata) ---
const menuItems = [
  { name: 'Kamus Mandar', href: '/kamus', icon: BookOpen, color: 'blue' },
  { name: 'Budaya Mandar', href: '/budaya', icon: Tent, color: 'orange' },
  { name: 'Event', href: '/event', icon: Calendar, color: 'green' },
  { name: 'Marketplace', href: '/market', icon: ShoppingBag, color: 'purple' },
];

const eventData = [
  { id: 1, nama: "Sayyang Pattudu'", tanggal: "12 Nov 2025", lokasi: "Polewali", harga: 'Rp250.000', rating: '4.7', image: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg' },
  { id: 2, nama: "Festival Jepa", tanggal: "18 Nov 2025", lokasi: "Majene", harga: 'Rp0', rating: '4.3', image: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg' },
  { id: 3, nama: "Lawa Khas", tanggal: "25 Nov 2025", lokasi: "Mamuju", harga: 'Rp15.000', rating: '4.5', image: 'https://travellingindonesia.com/wp-content/uploads/2022/08/Tadisi-Sayyang-Pattudu-Dok.-Istimewa-1024x682.jpg' },
];

const marketplaceData = [
  { id: 1, nama: "Kain Tenun Mandar", harga: "Rp250.000", rating: '4.7', image: 'https://souvenirminiatur.com/wp-content/uploads/2024/08/DETAIL2-MK59-Miniatur-Lopi-Sandeq.jpg' },
  { id: 2, nama: "Jepa (Makoxan Khas)", harga: "Rp15.000", rating: '4.3', image: 'https://souvenirminiatur.com/wp-content/uploads/2024/08/DETAIL2-MK59-Miniatur-Lopi-Sandeq.jpg' },
  { id: 3, nama: "Miniaher Perahu", harga: "Rp150.000", rating: '4.3', image: 'https://souvenirminiatur.com/wp-content/uploads/2024/08/DETAIL2-MK59-Miniatur-Lopi-Sandeq.jpg' },
];

// --- COMPONENTS REUSABLE (Dibentuk sesuai desain card Anda) ---

interface CardProps {
  item: typeof eventData[0] | typeof marketplaceData[0];
  isEvent: boolean;
}

const ItemCard: React.FC<CardProps> = ({ item, isEvent }) => {
  // Tipe data harus disesuaikan sedikit karena item bisa Event atau Marketplace
  // const priceOrDate = isEvent ? item.tanggal : item.harga;
  // const locationOrRating = isEvent ? item.lokasi : `★ ${item.rating}`;
  const imageSrc = item.image;

  return (
    <Link href={isEvent ? `/event/${item.id}` : `/market/${item.id}`} className="">
      <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 h-full">
        {/* Gambar Card */}
        <div className="h-24 w-full relative">
          <img
            src={imageSrc}
            alt={item.nama}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Detail Card */}
        <div className="p-2.5">
          <h4 className="text-sm font-semibold text-gray-800 truncate">{item.nama}</h4>
          <p className={`text-xs mt-1 ${isEvent ? 'text-blue-600' : 'text-red-600 font-bold'}`}>
            priceOrDate
          </p>
          <div className="flex items-center mt-1">
            <span className={`text-xs ${isEvent ? 'text-gray-500' : 'text-yellow-500'}`}>
              locationOrRating
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};


// --- HOME PAGE UTAMA ---
export default function HomePage() {
  const currentPath = '/'; 

  // Fungsi untuk mendapatkan warna latar belakang ikon
  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'orange': return 'bg-orange-100 text-orange-600';
      case 'green': return 'bg-green-100 text-green-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* 1. TOP HEADER (Logo, Search, Notif) - Sesuai Desain */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex justify-between items-center h-16 px-4">
          <div className="flex items-center space-x-2">
            {/* Placeholder Logo */}
            <img src="/logo.png" alt="Sulbar Culture Logo" className="w-9 h-9" />
            <span className="text-xl font-bold">Sulbar Culture</span>
          </div>
          <div className="flex space-x-3">
            {/* <Search className="w-5 h-5 text-gray-700" /> */}
            {/* <Bell className="w-5 h-5 text-gray-700" /> */}
          </div>
        </div>
      </header>

      <main className="pt-16 pb-4">

        {/* 2. HERO SECTION (Festival Sandeq Race) */}
        <section className="relative h-60 overflow-hidden mx-4 mt-2 rounded-2xl shadow-lg">
          <img
            src="https://lionmag.id/assets/uploads/9a5288d56caacd4d95129d54454e4151.JPG"
            alt="Festival Sandeq Race"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-end text-white  bg-opacity-30">
            <h2 className="text-xl w-1/2 font-bold">Ayo Dukung Festival Sandeq Race!</h2>
            <Link href="/event/sandeq" className="mt-3 mb-6 inline-block w-fit px-4 py-2 bg-[#11224E] text-white border-2 border-[#E9B63B] font-semibold rounded-full text-sm shadow-md">
              Lihat Detail Event
            </Link>
          </div>
        </section>

        {/* 3. MENU GRID (Kamus, Budaya, Event, Marketplace) */}
        <section className="bg-white mx-4 -mt-8 p-4 px-2 rounded-xl shadow-lg relative z-10">
          <div className="grid grid-cols-4 gap-2 text-center">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} href={item.href} className="flex flex-col items-center">
                  <div className={`p-3 rounded-xl ${getIconColorClass(item.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[0.65rem] w-full mt-2 text-gray-700 font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 4. EVENT MENDATANG (Horizontal Carousel) */}
        <section className="mt-8 px-4">
          <h3 className="text-md font-bold text-gray-800 mb-3">→ Event Mendatang</h3>
          <div className='grid grid-cols-3 gap-2'>
            {eventData.map((item) => (
              <ItemCard key={item.id} item={item} isEvent={true} />
            ))}
          </div>
        </section>

        {/* 5. KULINER KHAS & MARKETPLACE (Horizontal Carousel) */}
        <section className="mt-6 px-4">
          <h3 className="text-md font-bold text-gray-800 mb-3">→ Rekomendasi Marketplace</h3>
          <div className='grid grid-cols-3 gap-2'>
            {marketplaceData.map((item) => (
              <SwiperSlide key={item.id} className="w-auto">
                <ItemCard item={item} isEvent={false} />
              </SwiperSlide>
            ))}
          </div>
        </section> 
      </main>
    </div>
  );
}
