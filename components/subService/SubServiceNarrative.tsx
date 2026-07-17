"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SubService } from '@/data/servicesData';

const easeSleek = [0.16, 1, 0.3, 1];

// Helper to auto-shuffle images
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function SubServiceNarrative({ subService }: { subService: SubService }) {
  
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const images = [subService.image, ...(subService.gallery || [])].filter(Boolean);
    setShuffledImages(shuffleArray(images));
  }, [subService]);

  const imagesToRender = shuffledImages.length > 0 
    ? shuffledImages 
    : [subService.image, ...(subService.gallery || [])].filter(Boolean);

  // ==========================================
  // IMAGE CARDS (Retaining Cinematic Wipes & Metadata)
  // ==========================================
  const ImageCards = imagesToRender.map((src, idx) => (
    <motion.div 
      initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.17, 1] }} 
      className="relative group w-full overflow-hidden"
      key={`img-${idx}-${src}`}
    >
      <img 
        src={src} 
        alt={`Gallery ${idx}`} 
        className="w-full h-auto block grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105 origin-center object-cover" 
      />
      
      {/* Technical Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex flex-col justify-end p-6">
        <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
          <div className="flex flex-col gap-1">
            <span className="text-white text-[16px] md:text-[20px] font-medium tracking-tight">ARC-{String(idx + 1).padStart(2, '0')}</span>
            <span className="text-white/50 text-[9px] uppercase font-mono tracking-[0.2em]">{subService.title}</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-white/40 text-[9px] font-mono tracking-widest">RAW</span>
            <span className="text-white/40 text-[9px] font-mono tracking-widest">F/2.8</span>
          </div>
        </div>
      </div>
      
    </motion.div>
  ));

  // Distribute images into 2 columns for perfect masonry
  const col1: React.ReactNode[] = [];
  const col2: React.ReactNode[] = [];

  ImageCards.forEach((item, idx) => {
    if (idx % 2 === 0) col1.push(item);
    else col2.push(item);
  });

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 lg:py-40 z-20 border-t border-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
        
        {/* ==========================================
            LEFT: NAKED STICKY TYPOGRAPHY
            ========================================== */}
        <div className="w-full lg:w-[35%] relative">
          <div className="lg:sticky lg:top-40 flex flex-col pt-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: easeSleek }}
              className="flex flex-col mb-16"
            >
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-mono mb-6">
                The Process
              </span>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light tracking-tight text-white leading-[1.1] mb-8">
                Precision<br />
                <span className="font-bold italic text-white block">Execution.</span>
              </h2>
              <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.8] font-light max-w-sm">
                {subService.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2, ease: easeSleek }}
              className="flex flex-col"
            >
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-mono mb-6">
                Capabilities
              </span>
              <ul className="flex flex-col gap-4">
                {subService.features.map((feature, idx) => (
                  <li key={idx} className="text-[15px] md:text-[18px] text-white/80 font-light hover:text-white transition-colors duration-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>

        {/* ==========================================
            RIGHT: MASSIVE IMAGE FEED (MASONRY)
            ========================================== */}
        <div className="w-full lg:w-[65%]">
          
          {/* Mobile: Single Column Stack */}
          <div className="flex flex-col gap-8 md:hidden">
            {ImageCards}
          </div>

          {/* Desktop/Tablet: Perfect 2-Column Flexbox Masonry */}
          <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-8 lg:gap-12">{col1}</div>
            <div className="flex flex-col gap-8 lg:gap-12 pt-16">{col2}</div>
          </div>

        </div>

      </div>
    </section>
  );
}
