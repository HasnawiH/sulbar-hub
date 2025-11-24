'use client';
import DesktopNav from './components/DesktopNav';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IllustrationCarousel from './components/SliderCarousel';

const YOUTUBE_VIDEO_ID = '0I3hIqZDQQA'; 
const YOUTUBE_EMBED_URL_BASE = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}`;

const HeroSectionVideo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src={`${YOUTUBE_EMBED_URL_BASE}&mute=${isMuted ? 1 : 0}`}
        title="Sulbar Culture Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        style={{ transform: 'scale(1.2)', minHeight: '100%', minWidth: '100%', pointerEvents: 'none' }}
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C42]/70 via-[#1A2C42]/40 to-transparent"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <motion.h1 
        //   variants={textVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-wider font-serif"
        >
          SULBAR HUB
        </motion.h1>
        
        <motion.p 
        //   variants={textVariants}
        //   transition={{ ...textVariants.visible.transition, delay: 0.4 }}
          className="mt-3 text-xl md:text-3xl italic font-light max-w-4xl font-serif"
        >
          Menjelajahi Jiwa Mandar, Menghubungkan Semua Jejak Warisan Budaya
        </motion.p>

        {/* <motion.a 
          variants={buttonVariants}
          href="#quick-nav" // Mengarahkan ke bagian navigasi cepat
          className="mt-8 px-10 py-3 text-lg font-bold uppercase tracking-widest bg-white text-[#5A1F2B] rounded-full shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          MULAI JELAJAHI
        </motion.a> */}
        
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, delay: 1.5 }}
            className="absolute bottom-8"
        >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-white/70 backdrop-blur-sm text-[#5A1F2B] hover:bg-white/90 transition duration-300"
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2l3 3v-3h2m-6 0h6m4 0a7 7 0 00-7-7" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-5l-3 3v-3H7a2 2 0 01-2-2v-2a2 2 0 012-2h12z" /></svg>
        )}
      </button>
    </div>
  );
};

const navItems = [
  { href: '/kamus', label: 'Pastavita', description: 'Cata Gaverit Rosa', icon: (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.466 9.422 5 8 5a2 2 0 00-2 2v10a2 2 0 002 2c1.422 0 2.832-.466 4-1.253m0 0C13.168 5.466 14.578 5 16 5a2 2 0 012 2v10a2 2 0 01-2 2c-1.422 0-2.832-.466-4-1.253" /></svg> },
  { href: '/budaya', label: 'Kioko Jinavasa', description: 'Deinavas Jinavasa', icon: (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3" /></svg> }, 
  { href: '/events', label: 'Deinavasa Interaja', description: 'Deinavas Interaja', icon: (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg> }, 
  { href: '/lapak', label: 'Piasas Lovanaqa', description: 'Deinavas Interaja', icon: (props: any) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, rotateX: 90 },
  visible: { y: 0, opacity: 1, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const QuickNav: React.FC = () => {
  return (
    <motion.div
      id="quick-nav"
      className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8 bg-white rounded-xl shadow-2xl relative z-10 -mt-24 mx-auto max-w-6xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          className="flex flex-col items-center p-6 border border-gray-100 rounded-lg group cursor-pointer bg-white transform-gpu perspective-1000"
        >
          <Link href={item.href} className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-gray-50 group-hover:bg-[#5A1F2B] transition duration-300">
              <item.icon className="w-8 h-8 text-[#5A1F2B] group-hover:text-white" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#1A2C42] text-center">
              {item.label}
            </h3>
            <p className="mt-1 text-sm text-gray-500 text-center hidden md:block">
              {item.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function HomePage() {
    return (
        <div className="min-h-screen ">
            <DesktopNav />
            <IllustrationCarousel/>
            <main className="w-full h-full mx-auto md:pb-4">
                {/* 1. Jumbotron Utama (Diadaptasi dari mobile) */}
                {/* <section className="relative w-full  overflow-hidden shadow-xl mb-4">
                    <img
                        src={mainJumbotron.imageUrl}
                        alt={mainJumbotron.title}
                        className='w-full object-cover'
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>

                    <div style={{ fontFamily: 'monospace' }} className="absolute inset-0 flex flex-col p-10 mt-14 md:mt-72 px-14 md:px-48 text-white z-10">
                        <h2 className="text-[0.5rem] md:text-xl font-extrabold leading-snug drop-shadow-lg w-full md:max-w-lg">
                            {mainJumbotron.title}
                        </h2>
                        <p className='max-w-2xl md:mt-4 mt-2 text-[0.3rem] md:text-base'>Ruang digital untuk merayakan, mempelajari, dan menghidupkan budaya Sulawesi Barat.
                            Melalui kolaborasi masyarakat, seniman, dan generasi muda, SULBAR HUB menghubungkan kekayaan budaya dengan ekosistem teknologi digital, mewujudkan gerakan bersama untuk melestarikan jati diri dan membuka masa depan budaya Sulawesi Barat</p>
                    </div>
                </section> */}

                {/* 2. Banner Promosi Bawah (2 Kolom) */}
                {/* <section className="hidden md:grid grid-cols-2 md:gap-4 gap-2 px-2 md:px-0 mb-8">
                    {subBanners.map((banner, index) => (
                        <div key={index} className="relative md:h-48 rounded-xl overflow-hidden shadow-lg group">
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                            
                                className="transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity"></div> 

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4 text-center">
                                <p className="md:text-lg text-xs font-semibold drop-shadow">{banner.title}</p>
                                <h3 className="md:text-xl text-xs font-bold drop-shadow mt-1">{banner.subtitle}</h3>
                                <Link href={banner.link}>
                                    <button className="md:mt-4 hidden md:flex px-6 py-1.5 bg-transparent border-2 border-white text-white font-medium rounded-full md:text-sm hover:bg-white hover:text-black transition-colors">
                                        {banner.linkText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section> */}

                {/* 3. Grid Konten Bawah (3 Kolom) */}
                {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <BookOpen className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">{homeGridContent.kamus.title}</h3>
                        </div>
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder={homeGridContent.kamus.searchPlaceholder}
                                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                        <Link href="/kamus" className="text-sm text-blue-600 hover:underline">Lihat Semua Kamus →</Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <Star className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">HIGHLIGHT BUDAYA</h3>
                        </div>
                        <div className="space-y-3 flex">
                            {homeGridContent.highlight.map((item, index) => (
                                <GridItemCard key={index} item={item} />
                            ))}
                        </div>
                        <Link href="/budaya" className="text-sm text-blue-600 hover:underline mt-4 block">Lihat Semua Budaya →</Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="w-6 h-6 text-orange-600" />
                            <h3 className="text-lg font-bold text-gray-800">EVENT KEBUDAYAAN</h3>
                        </div>
                        <div className="space-y-4">
                            {homeGridContent.event.map((event, index) => (
                                <Link key={index} href={event.slug} className="block p-3 hover:bg-gray-100 rounded-lg transition-colors">
                                    <p className="text-sm font-bold text-[#412B6B]">{event.title}</p>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        <span>{event.location}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/event" className="text-sm text-blue-600 hover:underline mt-4 block">Lihat Semua Event →</Link>
                    </div>
                </section> */}

                <section className='px-2 md:px-20 bg-black'>
                    {/* Grid Responsif: 2 kolom di mobile, 3 di tablet, 4 di desktop */}
                    {/* <h3 className="text-2xl font-bold text-gray-800 mb-6 pt-6">
                           Warisan Budaya
                        </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filteredItems.map(item => (
                            <CultureCard key={item.id} item={item} />
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">Tidak ada konten Budaya dalam kategori "{activeTab}".</p>
                    )} */}
                </section>
            </main>
        </div>
    );
}