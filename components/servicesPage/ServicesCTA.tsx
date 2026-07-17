"use client";

import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const easeSleek = [0.16, 1, 0.3, 1];

export default function ServicesCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Magnetic Button Logic
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setBtnPos({ x, y });
  };
  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center bg-[#030303] overflow-hidden">
      
      {/* Animated Fluid Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw]"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.03] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/[0.02] rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[#030303]/40 backdrop-blur-[100px]" />
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeSleek }}
          className="text-[12px] uppercase tracking-[0.4em] font-semibold text-white/50 mb-8 block"
        >
          Ready to Elevate?
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: easeSleek }}
          className="text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.04em] text-white mb-16"
        >
          Let's Create <br />
          <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Together.</span>
        </motion.h2>

        {/* Magnetic Button */}
        <motion.a 
          ref={buttonRef}
          href="/contact"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: btnPos.x, y: btnPos.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-white text-black group cursor-pointer overflow-hidden"
        >
          {/* Fill effect on hover */}
          <div className="absolute inset-0 bg-[#f0f0f0] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-[0.16,1,0.3,1] origin-center" />
          
          <div className="relative z-10 flex flex-col items-center gap-2 pointer-events-none">
            <span className="text-[14px] md:text-[16px] font-medium tracking-wide uppercase">Start Project</span>
            <svg 
              className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.a>

      </motion.div>
    </section>
  );
}
