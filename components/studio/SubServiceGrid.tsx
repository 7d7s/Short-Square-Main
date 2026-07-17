"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Studio } from '@/data/servicesData';
import Link from 'next/link';

const easeSleek = [0.16, 1, 0.3, 1];

export default function SubServiceGrid({ studio }: { studio: Studio }) {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse tracking physics for the floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configuration for buttery smooth lag
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative w-full bg-[#030303] py-24 md:py-32 z-20 border-t border-white/[0.05]"
    >
      
      {/* ==========================================
          THE FLOATING LIQUID IMAGE (Desktop Only)
          ========================================== */}
      <motion.div 
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className="absolute top-0 left-0 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] hidden md:block pointer-events-none z-0 rounded-[16px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: easeSleek }}
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[20%]"
              style={{ backgroundImage: `url(${studio.subServices[hoveredIndex].image})` }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* ==========================================
          HEADER
          ========================================== */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-[2rem] md:text-[3rem] font-light tracking-tight text-white leading-tight">
            Specialized <span className="font-medium">Capabilities</span>
          </h2>
          <p className="text-white/40 text-[14px] uppercase tracking-[0.2em] font-mono">
            {studio.subServices.length} Disciplines
          </p>
        </div>
      </div>

      {/* ==========================================
          BRUTALIST TYPOGRAPHY INDEX
          ========================================== */}
      <div className="w-full border-t border-white/[0.05] relative z-10 flex flex-col">
        {studio.subServices.map((subService, index) => (
          <Link 
            key={subService.slug} 
            href={`/services/${studio.slug}/${subService.slug}`}
            onMouseEnter={() => setHoveredIndex(index)}
            className="group block border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
          >
            {/* Desktop Row Layout */}
            <div className="hidden md:flex container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] py-12 md:py-16 items-center justify-between relative">
              
              <div className="flex items-center gap-12 lg:gap-24 w-full">
                {/* Number */}
                <span className="text-white/20 text-[2rem] font-light font-mono group-hover:text-white/60 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Kinetic Title */}
                <motion.h3 
                  className="text-[3rem] lg:text-[4.5rem] font-light tracking-tight text-white/70 group-hover:text-white uppercase transition-colors duration-500"
                >
                  <span className="inline-block transform group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left">
                    {subService.title}
                  </span>
                </motion.h3>
              </div>

              {/* Hover Description Reveal */}
              <div className="absolute right-6 md:right-12 lg:right-20 flex items-center justify-end w-1/3 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
                 <p className="text-white/50 text-[16px] leading-[1.6] font-light italic text-right max-w-sm">
                   {subService.description}
                 </p>
              </div>

            </div>

            {/* Mobile Row Layout (Inline Banner) */}
            <div className="md:hidden flex flex-col p-6 gap-6 relative">
               <div className="flex items-start justify-between w-full z-10">
                 <span className="text-white/20 text-[1.5rem] font-light font-mono">
                   {String(index + 1).padStart(2, '0')}
                 </span>
                 <h3 className="text-[2rem] font-light tracking-tight text-white uppercase text-right max-w-[70%]">
                   {subService.title}
                 </h3>
               </div>
               
               <div className="w-full h-[200px] rounded-[12px] overflow-hidden relative z-0">
                 <div 
                   className="absolute inset-0 bg-cover bg-center grayscale-[30%]"
                   style={{ backgroundImage: `url(${subService.image})` }}
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
               </div>
               
               <p className="text-white/60 text-[14px] leading-relaxed font-light z-10">
                 {subService.description}
               </p>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}
