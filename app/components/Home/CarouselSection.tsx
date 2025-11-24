// components/CarouselSection.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSectionProps<T> {
  items: T[];
  renderItem: (item: T, isMain?: boolean) => React.ReactNode;
  itemWidthClass?: string; // Tailwind class for item width (e.g., "w-56")
  initialCenterIndex?: number; // Optional: index to center initially
}

const CarouselSection = <T extends { id: any }>(
  { items, renderItem, itemWidthClass = "w-72", initialCenterIndex = 0 }: CarouselSectionProps<T>
) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Assume can scroll right initially

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll distance as needed
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      setScrollX(scrollLeft);
    }
  };

  useEffect(() => {
    // Scroll to initial center index if provided
    if (carouselRef.current && initialCenterIndex !== undefined && items.length > 0) {
      // Calculate scroll position to center the item
      const itemElement = carouselRef.current.children[initialCenterIndex] as HTMLElement;
      if (itemElement) {
        const itemCenter = itemElement.offsetLeft + itemElement.clientWidth / 2;
        const containerCenter = carouselRef.current.clientWidth / 2;
        carouselRef.current.scrollLeft = itemCenter - containerCenter;
      }
    }
    handleScroll(); // Initial check for scroll buttons
  }, [items, initialCenterIndex]);

  return (
    <div className="relative group">
      {/* Scroll Left Button */}
      <motion.button
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 transition-opacity duration-300
                    ${canScrollLeft ? 'opacity-100' : 'opacity-0 cursor-not-allowed'}
                    group-hover:opacity-100`}
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </motion.button>

      {/* Carousel Container */}
      <motion.div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory pb-4 custom-scrollbar-hide" // custom-scrollbar-hide untuk menyembunyikan scrollbar bawaan
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex-shrink-0 snap-center px-2 ${itemWidthClass}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {renderItem(item, index === initialCenterIndex)} {/* Pass isMain prop */}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Right Button */}
      <motion.button
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 transition-opacity duration-300
                    ${canScrollRight ? 'opacity-100' : 'opacity-0 cursor-not-allowed'}
                    group-hover:opacity-100`}
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </motion.button>
    </div>
  );
};

export default CarouselSection;