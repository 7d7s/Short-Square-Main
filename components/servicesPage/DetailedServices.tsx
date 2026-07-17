"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { servicesData, Studio, SubService } from '@/data/servicesData';
import Link from 'next/link';

const easeSleek = [0.16, 1, 0.3, 1];

const ServiceRow = ({ service, index }: { service: Studio, index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  // Local state for the interactive hover gallery
  const [activeImage, setActiveImage] = useState(service.image);

  return (
    <div 
      ref={containerRef}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 w-full group py-24 md:py-32 border-b border-white/[0.05]`}
    >
      {/* Premium Cinematic Image Block with Hover Reveal */}
      <div className="w-full lg:w-1/2 relative z-10 h-[500px] md:h-[650px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: easeSleek }}
          className="relative w-full h-full overflow-hidden rounded-[24px] bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/[0.05]"
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeImage}
              src={activeImage}
              alt={service.title}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: easeSleek }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Deep Gradient Overlays for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/40 via-transparent to-[#030303]/40 pointer-events-none" />
          
          {/* Aesthetic Noise Layer */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </motion.div>
      </div>

      {/* Text & Interactive List Block */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-20 pt-8 lg:pt-0">
        
        {/* Studio Identity */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: easeSleek }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-white/20" />
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.3em]">Studio 0{index + 1}</span>
          </div>
          <Link href={`/services/${service.slug}`}>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1] tracking-[-0.03em] text-white cursor-pointer hover:text-white/70 transition-colors duration-500 mb-6">
              {service.title}
            </h2>
          </Link>
          <p className="text-white/50 text-[16px] md:text-[18px] leading-[1.6] font-light max-w-lg">
            {service.description}
          </p>
        </motion.div>

        {/* Interactive Sub-Services List (The Gallery Trigger) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: easeSleek }}
          className="flex flex-col w-full border-t border-white/[0.05]"
          onMouseLeave={() => setActiveImage(service.image)} // Reset on mouse leave
        >
          {service.subServices.map((subService: SubService, i: number) => (
            <Link key={i} href={`/services/${service.slug}/${subService.slug}`}>
              <div 
                onMouseEnter={() => setActiveImage(subService.image)}
                className="group flex flex-col md:flex-row md:items-center justify-between py-5 md:py-6 border-b border-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden relative backdrop-blur-sm hover:bg-white/[0.02] px-4 -mx-4 rounded-lg"
              >
                {/* Title and features preview */}
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-white/70 text-[1.2rem] md:text-[1.4rem] font-light tracking-wide group-hover:text-white transition-colors duration-500">
                    {subService.title}
                  </span>
                  <span className="text-white/30 text-[12px] uppercase tracking-[0.1em] font-mono group-hover:text-white/50 transition-colors duration-500">
                    {subService.features.slice(0, 2).join(" / ")}
                  </span>
                </div>
                
                {/* Magnetic Arrow */}
                <div className="mt-4 md:mt-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500 transform group-hover:translate-x-1 relative z-10 overflow-hidden">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-500">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Glassmorphic fill on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default function DetailedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="w-full bg-[#030303] py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] flex flex-col relative z-10">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-white/40 text-[12px] uppercase tracking-[0.3em] font-mono mb-4 block">
            Our Disciplines
          </span>
          <h2 className="text-[3rem] md:text-[5rem] font-light tracking-tight text-white leading-none">
            Specialized <span className="font-medium italic text-white/80">Studios</span>
          </h2>
        </div>

        {/* Services Rows */}
        {servicesData.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
