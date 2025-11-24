import { useState, useRef, } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const YOUTUBE_VIDEO_ID = '0I3hIqZDQQA';
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=${YOUTUBE_VIDEO_ID}`;

const IllustrationCarousel = () => {

    const illustrations = [
        {
            title: 'Spring Waterfall',
            artist: 'by Jane Doe',
            rating: 5,
            image: 'images/1.jpg',
            alt: 'Illustration of a waterfall in spring',
            link: '/budaya'
        },
        {
            title: 'Autumn Forest Cabin',
            artist: 'by Emily White',
            rating: 5,
            image: 'images/3.jpg',
            alt: 'Illustration of a cabin in an autumn forest',
            link: '/kamus'
        },
        {
            title: 'Snowy Night',
            artist: 'by Michael Brown',
            rating: 5,
            image: 'images/4.jpg',
            alt: 'Illustration of a snowy village at night',
            link: '/narasi'
        },
        {
            title: 'Snowy Night',
            artist: 'by Michael Brown',
            rating: 5,
            image: 'images/5.jpg',
            alt: 'Illustration of a snowy village at night',
            link: '/marketplace'
        },
    ];

    const duplicatedIllustrations = [...illustrations, ...illustrations];
    const carouselVariants: any = {
        animate: {
            x: [0, -1896], 
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                },
            },
        },
    };

    const [isMuted, setIsMuted] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const toggleMute = () => {
        if (iframeRef.current) {
            const player = iframeRef.current.contentWindow;
            if (player) {
                player.postMessage(
                    `{"event":"command","func":"${isMuted ? "unMute" : "mute"}","args":""}`,
                    "*"
                );
                setIsMuted(!isMuted);
            }
        }
    };

    return (
        <section className="bg-[#1A202C] h-full text-white  relative overflow-hidden ">
            <div
                className="absolute inset-0 bg-cover w-full"
                style={{ backgroundImage: 'url("images/JUMBOTRON.JPG")' }}
            />
    
            {/* <iframe
                ref={iframeRef} 
                className="absolute inset-0 w-full h-full object-cover"
                src={YOUTUBE_EMBED_URL}
                title="YouTube video player"
                allow="autoplay; encrypted-media; fullscreen"
                style={{
                    transform: 'scale(1.2)',
                    minHeight: '100%',
                    minWidth: '100%',
                    pointerEvents: 'none', 
                }}
            ></iframe> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C42]/70 via-[#1A2C42]/40 to-transparent"></div>
            <div className="container mx-auto w-full px-4 relative z-10 md:pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <div style={{ fontFamily: 'monospace' }} className="w-full flex flex-col p-10 mt-24 md:mt-72 px-5 pl-14 md:px-28 text-white z-10">
                        <h2 className="text-xl md:text-2xl font-extrabold  drop-shadow-lg w-full max-w-full md:max-w-lg">
                            Himpunan Ulasan Budaya
                        </h2>
                        <p className='w-full md:max-w-2xl md:mt-4 mt-2 text-[0.5rem] md:text-base'>Ruang digital untuk merayakan, mempelajari, dan menghidupkan budaya Sulawesi Barat.
                            Melalui kolaborasi masyarakat, seniman, dan generasi muda, SULBAR HUB menghubungkan kekayaan budaya dengan ekosistem teknologi digital, mewujudkan gerakan bersama untuk melestarikan jati diri dan membuka masa depan budaya Sulawesi Barat</p>
                    </div>
                </motion.div>

                <div className="relative grid mt-8 md:mt-2 overflow-hidden">
                    <motion.div
                        className="flex space-x-6"
                        variants={carouselVariants}
                        animate="animate"
                    >
                        {duplicatedIllustrations.map((item, index) => (
                            <motion.div
                                key={index}
                                className="group flex-shrink-0 w-[180px] md:w-[280px] bg-[#2D3748]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:shadow-amber-600 transition-all duration-300"
                            >
                                <Link href={item.link} className="h-28 md:h-48 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={item.alt}
                                        src={item.image} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IllustrationCarousel;