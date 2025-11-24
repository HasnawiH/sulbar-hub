'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from '@/app/components/DesktopNav';
// import { Calendar, MapPin, User, Tag } from 'lucide-react';
import { useParams } from 'next/navigation';
import DataBudaya from '@/data/budaya.json'


// const staticData = {
//     id: 1,
//     slug: 'maestro-ilo-sanusi',
//     title: 'Ilo-Ilo Sanusi: Maestro Seni Sandeq Mandar',
//     type: 'Tokoh Maestro Mandar',
//     heroImageUrl: '/images/TOMAKAKAULUMANDA.jpg',
//     shortDescription: 'Ilo-Ilo Sanusi adalah seorang tokoh inspiratif yang berdedikasi tinggi dalam melestarikan seni pembuatan perahu Sandeq Mandar. Karyanya telah diakui hingga kancah internasional.',
//     fullDescription: [
//         'Lahir di pesisir Mandar, Ilo-Ilo Sanusi telah menghabiskan lebih dari enam dekade hidupnya untuk mempelajari, membuat, dan mengajarkan seni pembuatan perahu Sandeq. Ia dikenal sebagai salah satu maestro terakhir yang menguasai teknik tradisional tanpa menggunakan cetakan modern, mengandalkan insting dan pengalaman turun-temurun.',
//         'Filosofi di balik setiap gurat kayunya mencerminkan hubungan mendalam antara masyarakat Mandar dengan laut. Perahu Sandeq bukan hanya alat transportasi, melainkan juga simbol kegagahan, keberanian, dan identitas maritim suku Mandar. Melalui tangan dinginnya, ratusan perahu Sandeq telah lahir, mengarungi lautan, dan membawa nama Mandar ke seluruh penjuru dunia.',
//         'Dedikasinya tidak berhenti pada pembuatan. Ilo-Ilo Sanusi juga aktif dalam berbagai lokakarya dan festival budaya untuk berbagi pengetahuannya kepada generasi muda. Ia percaya bahwa melestarikan Sandeq berarti melestarikan jiwa dan semangat Mandar itu sendiri.'
//     ],
//     galleryImages: [
//         'https://i.ibb.co/3sX8c0p/galeri4.jpg',
//         'https://i.ibb.co/gST2b3m/galeri2.jpg',
//         'https://i.ibb.co/L8B1t7Q/rumah-adat-boyang.jpg',
//         'https://i.ibb.co/4rG3f2k/galeri1.jpg',
//     ],
//     relatedContent: [
//         { title: 'Perahu Sandeq: Pelari Cepat Laut Mandar', slug: 'pesona-perahu-sandeq', imageUrl: 'https://i.ibb.co/y4X1v8X/sandeq.jpg' },
//         { title: 'Tradisi Sayyang Pattudu', slug: 'tradisi-sayyang-pattudu', imageUrl: 'https://i.ibb.co/hQ9y8cQ/guide.jpg' },
//         { title: 'Tenun Khas Mandar: Pola dan Makna', slug: 'karya-tenun-mandar', imageUrl: 'https://i.ibb.co/1R2s3Vd/kain-tenun.jpg' },
//     ],
//     author: 'Tim Peneliti Budaya Sulbar',
//     publishDate: '10 November 2023',
//     location: 'Polewali Mandar',
//     tags: ['Maestro', 'Sandeq', 'Tokoh', 'Perahu', 'Budaya Mandar']
// };


export default function DetailPage() {
    
    const { id } = useParams();
    const [filterData, setFilterData] = useState<any>({});
    useMemo(() => {
        let dataTemp = {};
        DataBudaya.forEach((item) => {
            if (item.slug == id) {
                dataTemp = item;
            }
        })
        setFilterData(dataTemp)
    }, [id, DataBudaya])

    return (
        <>
            {filterData && <div className="min-h-screen bg-[#1B3C53] pb-16">
                <DesktopNav />

                <main className="max-w-7xl mx-auto px-6 py-8">

                    <section className="relative flex justify-center h-64 md:h-full w-full overflow-hidden shadow-xl mb-8">
                        <img
                            src={`/${filterData?.imageUrl}`}
                            alt={filterData?.title}
                            className='object-cover h-64 md:h-full w-full'
                        />
                        <div className="absolute inset-0 bg-black opacity-20"></div>

                        <div className="absolute bottom-0 left-0 p-6 text-white z-10 hidden md:block">
                            <span className="inline-block px-4 py-1 text-sm font-semibold uppercase rounded-full bg-orange-600 mb-2">
                                {filterData?.type}
                            </span>
                            <h1 className="text-4xl font-extrabold drop-shadow-lg">{filterData?.title}</h1>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:hidden">
                            {filterData?.title}
                        </h1>
                        <span className="inline-block px-4 py-1 text-sm font-semibold uppercase rounded-full bg-orange-100 text-orange-600 mb-4 md:hidden">
                            {filterData?.type}
                        </span>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
                            {/* {culture.author && (
                                <div className="flex items-center space-x-1">
                                    <User className="w-4 h-4 text-gray-500" />
                                    <span>{culture.author}</span>
                                </div>
                            )}
                            {culture.publishDate && (
                                <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span>{culture.publishDate}</span>
                                </div>
                            )}
                            {culture.location && (
                                <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span>{culture.location}</span>
                                </div>
                            )} */}
                        </div>

                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            {filterData?.description}
                        </p>
                        {/* {filterData?.fullDescription.map((paragraph: any, index: number) => (
                            <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))} */}

                        {/* {culture.tags && culture.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <Tag className="w-5 h-5 mr-2 text-orange-600" /> Tags:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {culture.tags.map((tag, index) => (
                                        <Link key={index} href={`/budaya?tag=${tag.toLowerCase()}`} className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )} */}
                    </section>

                    {/* {culture.galleryImages && culture.galleryImages.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri Budaya</h2>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {culture.galleryImages.map((imgUrl, index) => (
                                    <div key={index} className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                                        <img
                                            src={imgUrl}
                                            alt={`Galeri ${culture.title} ${index + 1}`}
                                            className="transition duration-300 hover:scale-110 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )} */}

                    {/* {culture.relatedContent && culture.relatedContent.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Konten Terkait</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {culture.relatedContent.map(related => (
                                    <Link key={related.slug} href={`/budaya/${related.slug}`} className="block bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <img
                                                src={related.imageUrl}
                                                alt={related.title}
                                                className="transition-transform duration-500 group-hover:scale-110 object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{related.title}</h3>
                                            <p className="mt-2 text-orange-500 font-semibold text-sm">Baca Selengkapnya →</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )} */}
                </main>
            </div>}
        </>
    );
}