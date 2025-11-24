import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  callToActionText: string;
  callToActionLink: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  callToActionText,
  callToActionLink,
}) => {
  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={imageUrl}
        alt="Sulbar Culture Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent z-10"></div>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-20 text-start text-white px-4 md:px-40 pt-10 w-full"
      >
        <img
          variants={textVariants}
          className=" mt-4 h-48 w-60 mb-4"
          src={"/images/SULBARHUB.png"}
        />
        <motion.h2
          variants={textVariants}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
          className="text-2xl md:text-3xl font-light font-serif mb-6"
        >
          {subtitle}
        </motion.h2>
        <motion.p
          variants={textVariants}
          transition={{ ...textVariants.visible.transition, delay: 0.4 }}
          className="text-sm w-full font-light leading-relaxed mb-8  md:max-w-xl "
        >
          {description}
        </motion.p>
        <Link className='flex w-full justify-end md:-mt-20' href={callToActionLink} passHref>
          <motion.button
            variants={textVariants}
            transition={{ ...textVariants.visible.transition, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2 bg-transparent border border-[#FFC107] text-white text-md font-semibold rounded-full shadow-lg hover:bg-[#E0A800] transition-colors duration-300"
          >
            {callToActionText}
          </motion.button>
        </Link>
      </motion.div> */}
    </div>
  );
};

export default HeroSection;