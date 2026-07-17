"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

const easeSleek = [0.16, 1, 0.3, 1];

// Helper to split text into characters for kinetic stagger
const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <motion.span
      key={index}
      className="inline-block"
      variants={{
        hidden: { y: "120%", rotate: 5, opacity: 0 },
        visible: { y: 0, rotate: 0, opacity: 1 }
      }}
      transition={{ 
        duration: 1.2, 
        ease: easeSleek, 
        delay: index * 0.04 
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
};

export default function ServicesHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Apply physics-based smoothing to the scroll value to fix jitter and give a premium feel
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Advanced Parallax (Using smoothed scroll)
  const y1 = useTransform(smoothScrollY, [0, 1000], [0, 300]);
  const scaleImage = useTransform(smoothScrollY, [0, 800], [1.1, 1.3]);
  const y2 = useTransform(smoothScrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(smoothScrollY, [0, 600], [1, 0]);
  
  // Smooth springs for spotlight mask
  const cursorX = useSpring(-100, { stiffness: 100, damping: 20, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 100, damping: 20, mass: 0.5 });

  // Create the dynamic spotlight mask for the background image
  // It fades to 0.2 alpha so the image is never completely dark
  const maskImage = useMotionTemplate`radial-gradient(circle 800px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-[#030303] overflow-hidden z-10 pt-16 md:pt-32">
      
      {/* Cinematic Film Grain Overlay (Performance optimized: removed mix-blend-overlay) */}
      <div 
        className="absolute inset-0 z-50 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
      />

      {/* Spotlight Reveal Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: easeSleek }}
        style={{ y: y1, scale: scaleImage, WebkitMaskImage: maskImage }}
        className="absolute inset-0 z-0 opacity-[0.65] pointer-events-none hidden md:block will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/40 to-[#030303]" />
      </motion.div>
      
      {/* Fallback image for mobile without spotlight */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: easeSleek }}
        style={{ y: y1, scale: scaleImage }}
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none md:hidden will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/60 to-[#030303]" />
      </motion.div>

      {/* Volumetric Ambient Orbs (Adds immense depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none z-0" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none z-0 hidden md:block" 
      />
      
      {/* 3D Parallax Typography Container */}
      <motion.div 
        style={{ 
          opacity, 
          // filter removed for performance
          x: useTransform(cursorX, [0, 2000], [20, -20]),
          y: useTransform(cursorY, [0, 1000], [10, -10])
        }} 
        className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] relative z-10 flex flex-col items-center text-center will-change-transform"
      >
        
        {/* Ultra-Premium Chrome Edge Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: easeSleek, delay: 0.2 }}
          className="mb-6 md:mb-16 relative rounded-full p-[1px] overflow-hidden flex items-center justify-center z-20 group cursor-default"
        >
          {/* Rotating gradient edge for the 'metal sheen' look */}
          <motion.div 
            className="absolute inset-0 w-full h-[300%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] -top-[100%]"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          />
          
          <div className="relative bg-black/90 backdrop-blur-xl px-6 md:px-8 py-2 md:py-2.5 rounded-full flex items-center gap-3 border border-white/5">
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.3em] md:tracking-[0.4em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 drop-shadow-sm">
              Our Services
            </span>
          </div>
        </motion.div>

        {/* Kinetic Headline */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-0 w-full select-none"
        >
          <div className="overflow-hidden pb-1 md:pb-4">
            <motion.h1 
              className="text-[clamp(3.5rem,12vw,11rem)] font-light leading-[0.8] tracking-[-0.05em] text-white flex drop-shadow-2xl"
            >
              {splitText("CRAFTING")}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden pb-2 md:pb-6 flex items-center justify-center w-full">
            <motion.h1 
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.8] tracking-[-0.03em] italic text-transparent bg-clip-text bg-gradient-to-r from-white/30 via-white to-white/30 bg-[length:200%_auto] flex drop-shadow-lg"
            >
              {splitText("LEGACIES.")}
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Advanced UIUX Scroll Indicator (Spinning Ring + Arrow) */}
      <div className="absolute bottom-8 md:bottom-8 left-0 w-full flex justify-center pointer-events-none z-20 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: easeSleek, delay: 1.5 }}
          style={{ y: y2 }}
          className="cursor-pointer pointer-events-auto"
        >
          <div className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] relative flex items-center justify-center group">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white/5 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 blur-md pointer-events-none" />
            
            {/* Spinning Text SVG */}
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full text-white/50 group-hover:text-white transition-colors duration-500"
            >
              <path id="scrollTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[8.5px] md:text-[10px] font-normal uppercase tracking-[0.25em] fill-current">
                <textPath href="#scrollTextPath" startOffset="0%">
                  SCROLL TO EXPLORE • SCROLL TO EXPLORE • 
                </textPath>
              </text>
            </motion.svg>
            
            {/* Bouncing Arrow inside the ring */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              className="text-white flex items-center justify-center"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5 md:stroke-[2.5]">
                <path d="M12 4v16M19 13l-7 7-7-7"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
