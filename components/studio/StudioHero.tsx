"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Studio } from '@/data/servicesData';
import Link from 'next/link';

const easeSleek = [0.16, 1, 0.3, 1];

export default function StudioHero({ studio }: { studio: Studio }) {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse tracking physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configuration for the liquid lag effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Scroll opacity for smooth fade out
  const { scrollY } = useScroll();
  const opacityScroll = useTransform(scrollY, [0, 500], [1, 0]);

  // Center cursor on mount (so the image starts in the middle before mouse movement)
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full h-screen min-h-[600px] bg-[#030303] overflow-hidden flex flex-col justify-between p-6 md:p-12 lg:p-16 z-20 cursor-crosshair"
    >
      
      {/* ==========================================
          THE LIQUID IMAGE FOLLOWER (Desktop Only)
          ========================================== */}
      <motion.div 
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        initial={{ scale: 0.9, opacity: 0, rotate: 0 }}
        animate={{ 
          scale: isHovering ? 1 : 0.95, 
          opacity: 1,
          rotate: 0 
        }}
        transition={{ duration: 1, ease: easeSleek }}
        className="absolute top-0 left-0 w-[540px] h-[300px] lg:w-[720px] lg:h-[400px] xl:w-[960px] xl:h-[540px] hidden md:block rounded-none overflow-hidden z-0 pointer-events-none will-change-transform shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10"
      >
        <div 
          className="w-full h-full bg-cover bg-center grayscale-[20%] transition-transform duration-[1.5s] ease-out"
          style={{ 
            backgroundImage: `url('${studio.image}')`,
            transform: isHovering ? 'scale(1.02)' : 'scale(1.1)'
          }}
        />
        {/* Lighter precise gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* ==========================================
          MOBILE FALLBACK IMAGE (Centered)
          ========================================== */}
      <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[35vh] rounded-none overflow-hidden z-0 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10">
        <div 
          className="w-full h-full bg-cover bg-center grayscale-[30%] scale-[1.05]"
          style={{ backgroundImage: `url('${studio.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* TOP and BOTTOM elements removed for purely centric design */}

      {/* ==========================================
          CENTER: Massive Outlined Typography
          ========================================== */}
      <motion.div 
        style={{ opacity: opacityScroll }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: easeSleek }}
          className="text-[clamp(5rem,15vw,18rem)] font-bold leading-[0.85] tracking-tighter uppercase text-center flex flex-col items-center"
        >
          {studio.title.split(" ").map((word, i) => (
            <span 
              key={i} 
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.8)",
              }}
            >
              {word}
            </span>
          ))}
        </motion.h1>
      </motion.div>



    </section>
  );
}
