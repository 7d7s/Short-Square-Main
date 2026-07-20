"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We begin by understanding your brand, objectives, and audience. Through deep consultation, we define the visual identity and project scope."
  },
  {
    title: "Pre-Production",
    description: "Meticulous planning ensures seamless execution. We handle location scouting, casting, styling, set design, and shot-list creation."
  },
  {
    title: "The Capture",
    description: "Where vision becomes reality. Utilizing industry-leading equipment and masterful lighting, we execute the shoot with precision and creative flair."
  },
  {
    title: "Post-Production",
    description: "The raw capture is refined. Our high-end retouching, color grading, and compositing processes elevate the imagery to its final, polished state."
  },
  {
    title: "Delivery & Launch",
    description: "Final assets are delivered in optimized formats for all platforms, ready to captivate your audience and drive your campaign forward."
  }
];

const easeSleek = [0.16, 1, 0.3, 1];

const StackCard = ({ step, index, total }: { step: any, index: number, total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Responsive sticky top offset calculation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Much stronger scale and opacity fade as cards get pushed back
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - ((total - index) * 0.035)]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `calc(10vh + ${index * 3}vh)`,
        scale,
        opacity,
        zIndex: index + 10
      }}
      className="w-full flex justify-center mb-8 md:mb-12" // Even tighter spacing for a faster one-by-one feel
    >
      <div className="w-full max-w-[1000px] min-h-[45vh] md:min-h-[55vh] lg:min-h-[60vh] bg-[#080808] border border-white/[0.05] rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-16 flex flex-col justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.6)] overflow-hidden relative group">

        {/* Subtle noise/texture overlay inside the card */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        {/* Glow effect on hover */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 opacity-0 group-hover:opacity-100 pointer-events-none" />

        <div className="flex justify-between items-start border-b border-white/10 pb-6 md:pb-8 relative z-10 gap-4">
          <div className="flex flex-col gap-2 md:gap-3">
            {/* <span className="font-mono text-[10px] md:text-[14px] text-white/30 uppercase tracking-[0.2em]">Phase 0{index + 1}</span> */}
            <h3 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] font-light tracking-[-0.03em] text-white leading-tight md:leading-none">
              {step.title}
            </h3>
          </div>
          <span className="text-[3rem] sm:text-[5rem] md:text-[8rem] font-bold text-transparent leading-none mt-2 md:-mt-4" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
            0{index + 1}
          </span>
        </div>

        <div className="max-w-2xl relative z-10 mt-8 md:mt-0">
          <p className="text-white/50 text-[15px] sm:text-[18px] md:text-[22px] leading-[1.6] font-light">
            {step.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default function Process() {
  return (
    <section className="w-full bg-[#030303] py-32 md:py-48 relative z-20 border-t border-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeSleek }}
          className="text-center mb-32 flex flex-col items-center"
        >
          {/* <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/50 mb-6 block">Our Methodology</span> */}
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white max-w-3xl">
            A precise framework for <br className="hidden md:block" />
            <span className="font-medium text-white/60 italic">flawless execution.</span>
          </h2>
        </motion.div>

        {/* Stacking Cards Container */}
        <div className="w-full relative pb-[10vh]">
          {processSteps.map((step, index) => (
            <StackCard key={index} step={step} index={index} total={processSteps.length} />
          ))}
        </div>

      </div>
    </section>
  );
}
