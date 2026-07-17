"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Studio, SubService } from '@/data/servicesData';
import Link from 'next/link';

const easeSleek = [0.16, 1, 0.3, 1];

export default function SubServiceHero({ studio, subService }: { studio: Studio, subService: SubService }) {
  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Combine all available images into a long strip for the marquee
  const allImages = [subService.image, ...(subService.gallery || [])];
  
  // We duplicate the array to create a seamless infinite loop
  const marqueeImages = [...allImages, ...allImages, ...allImages];

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden z-20 bg-[#030303]">
      
      {/* 
        ========================================
        1. KINETIC BACKGROUND MARQUEE
        ========================================
      */}
      <motion.div style={{ opacity: opacityHero }} className="absolute inset-0 z-0 flex flex-col justify-center gap-4 py-20 pointer-events-none">
        
        {/* Top Marquee (Scrolling Left) */}
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex gap-4 md:gap-8 items-center"
          >
            {marqueeImages.map((src, idx) => (
              <div key={`top-${idx}`} className="w-[30vw] md:w-[25vw] aspect-[4/3] rounded-sm overflow-hidden shrink-0 filter grayscale-[80%] hover:grayscale-0 transition-all duration-700">
                <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Scrolling Right) */}
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex gap-4 md:gap-8 items-center"
          >
            {marqueeImages.map((src, idx) => (
              <div key={`bottom-${idx}`} className="w-[40vw] md:w-[30vw] aspect-[16/9] rounded-sm overflow-hidden shrink-0 filter grayscale-[80%] hover:grayscale-0 transition-all duration-700">
                <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Extreme Vignette for Contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />

      {/* 
        ========================================
        2. BLEND-MODE TYPOGRAPHY (FOREGROUND)
        ========================================
      */}
      <motion.div 
        style={{ opacity: opacityHero }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-auto mix-blend-difference"
      >
        
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeSleek }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[12px] font-mono tracking-[0.3em] uppercase text-white mb-6 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <Link href="/services" className="hover:text-white/60 transition-colors duration-300">Services</Link>
          <span className="text-white/40">/</span>
          <Link href={`/services/${studio.slug}`} className="hover:text-white/60 transition-colors duration-300 whitespace-nowrap">{studio.shortTitle}</Link>
        </motion.div>

        {/* Massive Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: easeSleek }}
          className="text-[clamp(4rem,10vw,12rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white text-center w-full px-4"
        >
          {subService.title}
        </motion.h1>

      </motion.div>
      
      {/* 
        ========================================
        3. BOTTOM UI OVERLAY (Non-blended)
        ========================================
      */}
      <motion.div 
        style={{ opacity: opacityHero }}
        className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center justify-end pb-8 pointer-events-none"
      >
        
        {/* Editorial Description (Mobile Only) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: easeSleek }}
          className="flex flex-col gap-3 max-w-sm pointer-events-auto text-center md:hidden mb-10 px-6"
        >
          <p className="text-white/70 text-[14px] leading-[1.6] font-light">
            {subService.description}
          </p>
        </motion.div>
        
        {/* Ultra-Premium Circular Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4 pointer-events-auto cursor-pointer group mb-4 md:mb-8"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            
            {/* Rotating Text SVG */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full text-white/40 group-hover:text-white transition-colors duration-500"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible pointer-events-none">
                <path id="scrollCircle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10px] font-mono tracking-[0.2em] uppercase fill-current">
                  <textPath href="#scrollCircle" startOffset="0%">
                    Scroll to Explore • Scroll to Explore •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            
            {/* Center Bouncing Arrow */}
            <motion.div 
              animate={{ y: ["-15%", "15%"] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="text-white/60 group-hover:text-white transition-colors duration-500"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.div>
            
            {/* Hover Glassmorphic Background */}
            <div className="absolute inset-2 rounded-full bg-white/0 group-hover:bg-white/5 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>
        
      </motion.div>

    </section>
  );
}
