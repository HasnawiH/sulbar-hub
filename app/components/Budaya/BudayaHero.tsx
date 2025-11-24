import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from '../TypeWriter';

const BudayaHero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
            <Image
                width={100}
                height={100}
                src="/images/BUDAYA.jpg"
                alt="Background Motif Mandar"
                className="absolute inset-0 w-full h-full object-cover blur-xs scale-105"
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
                    WARISAN BUDAYA
                </motion.h1>
                <motion.p
                    variants={textVariants}
                    transition={{ ...textVariants.visible.transition, delay: 0.2 }}
                    className=" text-md md:text-xl text-amber-600 italic font-light max-w-5xl font-serif"
                >
                    <Typewriter
                        text={"Jelajahi jejak budaya Sulawesi Barat, dari tokoh dan maestro, pengetahuan dan tradisi lisan, hingga cagar budaya yang menjadi saksi perjalanan masyarakat Sulbar. "}
                        typingSpeed={80}
                        delay={1000}
                    />
                </motion.p>
            </motion.div>
        </div>
    );
};

export default BudayaHero;