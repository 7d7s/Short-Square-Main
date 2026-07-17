"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  // Independent parallax for the inline text images
  const imgParallax1 = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
  const imgParallax2 = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);

  // Parallax and scale for the massive bottom landscape image
  const landscapeParallax = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const landscapeScale = useTransform(smoothProgress, [0.4, 0.9], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030303] py-24 md:py-40 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px]">

        {/* Section Header (Matching Services Design) */}
        <div className="w-full flex justify-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <div className="relative inline-block pr-4">
              <span className="text-[18px] sm:text-[22px] md:text-[26px] tracking-[0.2em] md:tracking-[0.3em] text-white font-semibold pb-2 relative z-10 uppercase block drop-shadow-md">
                About The Studio
              </span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[12px] text-white/50 overflow-visible translate-y-[2px]"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 5,6 Q 50,22 95,2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* In-Text Media Heading */}
        <div className="w-full flex flex-col items-center justify-center mb-20 md:mb-32">
          <h3 className="text-white text-center text-[clamp(2.5rem,6vw,8rem)] leading-[1.1] tracking-[-0.03em] font-bold uppercase w-full">
            We Craft{" "}
            <motion.span
              initial={{ width: "0vw", opacity: 0 }} whileInView={{ width: "16vw", opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-10%" }}
              className="inline-block h-[clamp(2.2rem,5vw,7rem)] bg-white/10 rounded-full mx-3 md:mx-8 align-middle overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/20"
            >
              <motion.div style={{ y: imgParallax1 }} className="absolute inset-0 w-full h-[150%] -top-[25%]">
                <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070" alt="Product" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair" />
              </motion.div>
            </motion.span>{" "}
            Premium{" "}
            <br className="hidden md:block" />
            Visuals{" "}
            <motion.span
              initial={{ width: "0vw", opacity: 0 }} whileInView={{ width: "12vw", opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }} viewport={{ once: true, margin: "-10%" }}
              className="inline-block h-[clamp(2.2rem,5vw,7rem)] bg-white/10 rounded-full mx-3 md:mx-8 align-middle overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/20"
            >
              <motion.div style={{ y: imgParallax2 }} className="absolute inset-0 w-full h-[150%] -top-[25%]">
                <Image src="https://res.cloudinary.com/dufzctlaj/image/upload/v1773658544/IMG_0905_uldbba.jpg" alt="Portrait" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair" />
              </motion.div>
            </motion.span>{" "}
            That Elevate{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic font-light lowercase pr-4">brands worldwide.</span>
          </h3>
        </div>

        {/* Bento Grid (3 columns for bottom info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-40">

          {/* Card 1: Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white/[0.02] border border-white/10 rounded-[32px] p-10 flex flex-col justify-center gap-10 group hover:bg-white/[0.04] transition-colors duration-700 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors duration-1000 pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 text-6xl md:text-7xl font-bold tracking-tighter mb-2 group-hover:scale-105 transform origin-left transition-transform duration-700">10<span className="text-white/20 font-light">+</span></p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white/80 transition-colors duration-500">Years Exp</p>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent relative z-10"></div>
            <div className="relative z-10">
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 text-6xl md:text-7xl font-bold tracking-tighter mb-2 group-hover:scale-105 transform origin-left transition-transform duration-700 delay-75">200<span className="text-white/20 font-light">+</span></p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white/80 transition-colors duration-500">Clients</p>
            </div>
          </motion.div>

          {/* Card 2: Description & Button */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white/[0.02] border border-white/10 rounded-[32px] p-10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-700 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Bottom Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>

            <p className="relative z-10 text-white/50 text-base md:text-lg leading-[1.8] font-light mb-12 group-hover:text-white/90 transition-colors duration-700">
              ShotSquare is an elite photography studio specializing in high-end fashion, product, and commercial imagery. We blend technical mastery with raw artistic vision.
            </p>

            {/* Massive Animated Pill Button */}
            <Link href="/studio" className="relative z-10 flex items-center justify-between w-full bg-white/[0.03] border border-white/10 rounded-full p-2 pl-8 group/btn overflow-hidden transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              
              {/* Animated Hover Background Fill */}
              <div className="absolute inset-0 bg-white translate-y-[100%] rounded-full group-hover/btn:translate-y-0 transition-transform duration-[0.8s] ease-[0.16,1,0.3,1] z-0"></div>

              <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 group-hover/btn:text-black font-bold transition-all duration-700 group-hover/btn:translate-x-2 transform">Discover Studio</span>
              
              {/* Arrow Container */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white group-hover/btn:bg-black flex items-center justify-center overflow-hidden transition-colors duration-700">
                 {/* Current Arrow (Leaves) */}
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute text-black group-hover/btn:text-white transform group-hover/btn:translate-x-8 group-hover/btn:-translate-y-8 transition-transform duration-[0.8s] ease-[0.16,1,0.3,1]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                 
                 {/* New Arrow (Enters) */}
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute text-white transform -translate-x-8 translate-y-8 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform duration-[0.8s] ease-[0.16,1,0.3,1]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Interactive CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} viewport={{ once: true, margin: "-10%" }}
            className="bg-black border border-white/10 rounded-[32px] flex items-center justify-center group overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[300px] md:min-h-[400px] cursor-pointer"
          >
            {/* Background Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-0 pointer-events-none"></div>

            {/* Persistent Spinning Text */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] -translate-y-1/4 translate-x-1/4 z-10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="w-full h-full animate-[spin_15s_linear_infinite] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full text-white/20">
                  <path id="textPathLetsTalk" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                  <text className="text-[14px] font-bold uppercase tracking-[0.4em] fill-current">
                    <textPath href="#textPathLetsTalk" startOffset="0%">Start A Project • Contact Us • Start A Project •</textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Link wrapper (z-30) - Contains Text Layout */}
            <Link href="/contact" className="absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-12 py-12">
              <div className="flex flex-col w-full h-full justify-between">
                <span className="text-white font-bold text-[4.5rem] md:text-[6.5rem] leading-[0.85] tracking-tighter group-hover:-translate-y-4 transition-transform duration-[1s] ease-[0.16,1,0.3,1] self-start">LET'S</span>
                <span className="text-white font-bold italic text-[4.5rem] md:text-[6.5rem] leading-[0.85] tracking-tighter group-hover:translate-y-4 transition-transform duration-[1s] ease-[0.16,1,0.3,1] self-end mt-4">TALK</span>
              </div>
            </Link>

            {/* Hover Central Arrow (z-20, sits under inversion layer) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-black border border-white/20 rounded-full flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-[1s] ease-[0.16,1,0.3,1] z-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>

            {/* The Inversion Layer (Mix Blend Difference - MUST BE z-50) */}
            {/* This white circle mathematically inverts the black background to white, and the white text to black. It must be above everything else to invert them. */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-[1s] ease-[0.16,1,0.3,1] z-50 pointer-events-none mix-blend-difference"></div>

          </motion.div>

        </div>
      </div>

      {/* Massive Cinematic Landscape Footer Image */}
      <div className="w-full px-4 md:px-12 lg:px-20 relative">

        {/* Massive Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 mix-blend-overlay">
          <h2 className="text-[20vw] font-bold tracking-tighter text-white/5 uppercase leading-none whitespace-nowrap">ShotSquare</h2>
        </div>

        <motion.div
          style={{ scale: landscapeScale }}
          className="relative z-10 w-full h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] group"
        >
          <motion.div style={{ y: landscapeParallax }} className="absolute inset-0 w-full h-[135%] -top-[17.5%]">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
              alt="ShotSquare Studio Setup"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-[0.16,1,0.3,1] scale-[1.02] group-hover:scale-100"
            />
          </motion.div>
          {/* Glass inner shadow */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[32px] pointer-events-none" />
        </motion.div>
      </div>

    </section>
  );
};

export default AboutUs;