"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Header from './components/DesktopNav';
import HeroSection from './components/Home/HeroSection';

export default function Home() {
    return (
        <div className="min-h-scree font-sans text-gray-900" style={{ backgroundImage: 'url: "/images/BG.jpg"' }}>
            <Header />

            <HeroSection
                title="Sulbar HUB"
                subtitle="Himpunan Ulasan Budaya Sulawesi Barat"
                description="Ruang digital untuk merayakan, mempelajari, dan menghidupkan budaya Sulawesi Barat.
                            Melalui kolaborasi masyarakat, seniman, dan generasi muda, SULBAR HUB menghubungkan kekayaan budaya dengan ekosistem teknologi digital, mewujudkan gerakan bersama untuk melestarikan jati diri dan membuka masa depan budaya Sulawesi Barat"
                imageUrl="/images/BUDAYA.jpg"
                callToActionText="Jelajahi Sekarang"
                callToActionLink="/budaya"
            />

            <main className="max-w-7xl mx-auto px-6 py-12">

            </main>
        </div>
    );
}