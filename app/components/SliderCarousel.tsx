import { motion } from 'framer-motion';

const IllustrationCarousel = () => {

    const illustrations = [
        {
            title: 'Spring Waterfall',
            artist: 'by Jane Doe',
            rating: 5,
            image: 'A serene waterfall in spring with bears crossing a rope bridge',
            alt: 'Illustration of a waterfall in spring'
        },
        {
            title: 'Winter',
            artist: 'by John Smith',
            rating: 4,
            image: 'A cozy cabin in a snowy winter forest landscape',
            alt: 'Illustration of a winter scene with a cabin'
        },
        {
            title: 'Autumn Forest Cabin',
            artist: 'by Emily White',
            rating: 5,
            image: 'A charming cabin in a forest during autumn with golden leaves',
            alt: 'Illustration of a cabin in an autumn forest'
        },
        {
            title: 'Snowy Night',
            artist: 'by Michael Brown',
            rating: 5,
            image: 'A peaceful village covered in snow during the night',
            alt: 'Illustration of a snowy village at night'
        },
    ];

    const duplicatedIllustrations = [...illustrations, ...illustrations];
    const carouselVariants = {
        animate: {
            x: [0, -1896], // (280px card + 24px gap) * 6 cards
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

    return (
        <section className="bg-[#1A202C] h-full text-white  relative overflow-hidden ">
            <div
                className="absolute inset-0 bg-cover w-full"
                style={{ backgroundImage: 'url("images/JUMBOTRON.JPG")' }}
            />
            <div className="container mx-auto w-full px-4 relative z-10 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <div style={{ fontFamily: 'monospace' }} className=" flex flex-col p-10 mt-44 md:mt-72 px-28 md:px-28 text-white z-10">
                        <h2 className="text-[0.70rem] md:text-2xl font-extrabold leading-snug drop-shadow-lg w-full md:max-w-lg">
                            Himpunan Ulasan Budaya
                        </h2>
                        <p className='max-w-2xl md:mt-4 mt-2 text-[0.4rem] md:text-base'>Ruang digital untuk merayakan, mempelajari, dan menghidupkan budaya Sulawesi Barat.
                            Melalui kolaborasi masyarakat, seniman, dan generasi muda, SULBAR HUB menghubungkan kekayaan budaya dengan ekosistem teknologi digital, mewujudkan gerakan bersama untuk melestarikan jati diri dan membuka masa depan budaya Sulawesi Barat</p>
                    </div>
                </motion.div>

                <div className="relative mt-8 md:mt-2 overflow-hidden">
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
                                <div className="h-28 md:h-48 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={item.alt}
                                        src="images/1.jpg" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IllustrationCarousel;