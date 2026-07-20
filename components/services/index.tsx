"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { servicesData } from '@/data/servicesData';

const easeSleek = [0.16, 1, 0.3, 1];

export default function Services() {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 z-20 overflow-hidden">

      {/* Subtle Background Grain/Noise (Premium UI element) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] flex flex-col gap-20 relative z-10">

        {/* TOP SECTION: 2-Row Approach on Right */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20 border-b border-white/[0.05] pb-20">

          {/* Left Side: Massive Title */}
          <div className="flex flex-col w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeSleek }}
              className="flex items-center justify-start mb-8 md:mb-12"
            >
              <div className="relative inline-block pr-4">
                <span className="text-[18px] sm:text-[22px] md:text-[26px] tracking-[0.2em] md:tracking-[0.3em] text-white font-semibold pb-2 relative z-10 uppercase block drop-shadow-md">
                  Services
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
                    transition={{ duration: 1.2, ease: easeSleek, delay: 0.3 }}
                  />
                </svg>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: easeSleek }}
              className="text-white text-[clamp(2.5rem,4vw,5rem)] font-light tracking-[-0.03em] md:tracking-[-0.04em] leading-[1.05] md:leading-[0.95] drop-shadow-2xl"
            >
              Strategic Creative Services <br className="hidden md:block" />
              <span className="text-white/40 italic tracking-tight">Designed to Elevate</span> <br className="hidden md:block" />
              Modern Brands.
            </motion.h2>
          </div>

          {/* Right Side: 2-Row Layout (Paragraph + Button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: easeSleek }}
            className="w-full lg:w-2/5 flex flex-col justify-end lg:pt-16 gap-10"
          >
            {/* Row 1: Paragraph */}
            <p className="text-white/50 font-light text-[15px] md:text-[18px] leading-[1.7] max-w-md">
              Creative photography services crafted to elevate brand identity, engage audiences, and deliver impactful visuals that communicate your message with clarity.
            </p>

            {/* Row 2: Button */}
            <Link href="/studio">
              <button className="group flex items-center gap-4 py-4 px-8 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-700 ease-out cursor-pointer w-fit overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] text-white">
                  View All Services
                </span>
                <span className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2 ease-[0.16,1,0.3,1]">
                  →
                </span>
              </button>
            </Link>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: Premium Asymmetrical Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 w-full">
          {servicesData.map((service, index) => {
            const words = service.title.split(' ');
            const line1 = words.slice(0, -1).join(' ');
            const line2 = words[words.length - 1];

            // Asymmetrical Bento Layout Logic
            let colSpan = "md:col-span-4"; // Items 3, 4, 5
            if (index === 0) colSpan = "md:col-span-7";
            if (index === 1) colSpan = "md:col-span-5";

            return (
              <Link key={service.id} href={`/studios/${service.slug}`} className={`group relative overflow-hidden rounded-[20px] md:rounded-[24px] h-[450px] md:h-[500px] lg:h-[550px] cursor-pointer border border-white/[0.03] bg-[#050505] block ${colSpan}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: easeSleek }}
                  className="w-full h-full relative"
                >
                  {/* Background Image - Scale on hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.03] grayscale-[40%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  {/* Immersive Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent opacity-90 transition-opacity duration-[1000ms] group-hover:opacity-70" />

                  {/* Left-Aligned Title & Right-Aligned Arrow */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 pt-20 flex flex-col justify-end bg-gradient-to-t from-[#030303]/95 via-[#030303]/60 to-transparent z-10">

                    <div className="flex items-end justify-between w-full gap-4">
                      <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-light tracking-[-0.03em] leading-[1.05] text-left transition-transform duration-[800ms] ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
                        <span className="block text-white/60 transition-colors duration-[800ms] group-hover:text-white/90">{line1}</span>
                        <span className="block text-white font-medium drop-shadow-2xl tracking-tight">{line2}</span>
                      </h3>

                      {/* Elegant interactive arrow link button */}
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-[800ms] ease-[0.16,1,0.3,1] overflow-hidden group-hover:bg-white group-hover:border-white shadow-2xl group-hover:scale-110 mb-1 group-hover:-translate-y-1">
                        <div className="relative flex items-center justify-center w-full h-full">
                          {/* Default state arrow */}
                          <span className="absolute text-white/80 text-lg md:text-xl font-light transition-transform duration-[600ms] ease-[0.16,1,0.3,1] group-hover:translate-x-6 group-hover:-translate-y-6">↗</span>
                          {/* Hover state arrow */}
                          <span className="absolute text-black text-lg md:text-xl font-medium transition-transform duration-[600ms] ease-[0.16,1,0.3,1] -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0">↗</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
