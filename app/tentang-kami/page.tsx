'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface KamusHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const TentangKami: React.FC<KamusHeroProps> = ({ searchTerm, setSearchTerm }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        width={100}
        height={100}
        src="/images/NARASi.jpg" 
        alt="Background Motif Mandar"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <motion.h1
          variants={textVariants}
          className="text-2xl md:text-4xl font-extrabold tracking-wide font-serif"
        >
          SULBAR CULTURE
        </motion.h1>
        <motion.p
          variants={textVariants}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
          className="mt-3 text-md italic font-light max-w-3xl font-serif"
        >
          Sulbar Culture adalah ruang digital yang menghadirkan edukasi budaya, informasi OPK, marketplace, dan layanan komunitas dalam satu platform yang bertujuan memberdayakan para pelaku budaya Sulawesi Barat. Di sini, pengrajin, penenun, seniman, dan komunitas lokal dapat memperkenalkan karya, jasa, serta pengetahuan tradisional mereka secara langsung tanpa perantara yang merugikan. Pengunjung dapat belajar tentang sejarah, makna, dan proses di balik setiap karya budaya, sekaligus membeli produk autentik seperti tenun, kerajinan, dan karya seni dengan harga yang adil dan transparan. Melalui workshop, kelas seni, tur budaya, dan kolaborasi kreatif, Sulbar Culture menghadirkan ekosistem yang menghubungkan masyarakat dengan penjaga tradisi, membuka peluang ekonomi baru, dan menjaga keberlanjutan budaya untuk generasi mendatang.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TentangKami;