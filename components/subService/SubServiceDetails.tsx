"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Individual 3D Glass Card
const StackingCard = ({ 
  detail, 
  index, 
  progress, 
  range, 
  targetScale 
}: { 
  detail: any, 
  index: number, 
  progress: MotionValue<number>, 
  range: number[], 
  targetScale: number 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // As the overall progress moves through this card's range, scale it down slightly to create 3D depth
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Dim the card slightly as it pushes to the background
  const opacity = useTransform(progress, range, [1, 0.4]);

  return (
    <div ref={containerRef} className="h-[75vh] md:h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, opacity, top: `calc(5vh + ${index * 15}px)` }} 
        className={`relative w-[92vw] md:w-[80vw] lg:w-[70vw] h-[70vh] rounded-[24px] overflow-hidden flex flex-col justify-between p-6 md:p-16 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-gradient-to-br ${detail.color}`}
      >
        
        {/* Cinematic Noise & Glass Texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        {/* Massive Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[clamp(8rem,15vw,20rem)] font-bold tracking-tighter text-white/[0.03] leading-none whitespace-nowrap px-4">
            {detail.id}
          </span>
        </div>

        {/* Top Header */}
        <div className="relative z-10 flex justify-between items-start w-full">
          <span className="text-white/40 text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-mono">
            The Blueprint
          </span>
          <span className="text-white/20 text-[2rem] md:text-[4rem] font-light leading-none font-mono">
            0{index + 1}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 flex flex-col max-w-3xl">
          <h3 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-light tracking-tight text-white mb-6 md:mb-8 leading-[1]">
            {detail.title}.
          </h3>
          <p className="text-white/60 text-[16px] md:text-[20px] leading-[1.8] font-light">
            {detail.description}
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default function SubServiceDetails({ subService }: { subService: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Dynamically generate details based on the subService features
  const dynamicDetails = subService.features.map((feature: string, idx: number) => {
    // Grab the first word for the massive background watermark
    const id = feature.split(' ')[0].toUpperCase();
    
    // Generate a highly professional cinematic description for each feature
    const descMap = [
      `A meticulous approach to ${feature.toLowerCase()}, ensuring unparalleled quality and absolute precision in every deliverable.`,
      `Streamlined execution of ${feature.toLowerCase()} driven by industry-leading methodology and technical expertise.`,
      `Advanced integration of ${feature.toLowerCase()} to elevate the brand narrative and establish a profound visual identity.`,
      `Comprehensive focus on ${feature.toLowerCase()} maintaining strict editorial standards and cinematic integrity.`
    ];
  
    const colors = [
      "from-[#0a0a0a] to-[#121212]",
      "from-[#111111] to-[#050505]",
      "from-[#1a1a1a] to-[#0a0a0a]",
      "from-[#050505] to-[#111111]"
    ];

    return {
      id: id,
      title: feature,
      description: descMap[idx % descMap.length],
      color: colors[idx % colors.length]
    };
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#030303] pb-[10vh]">
      
      {/* Intro Spacer */}
      <div className="h-[20vh] flex items-end justify-center pb-12">
         <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-mono">
           Scroll to explore {subService.title} specifications
         </span>
      </div>

      {dynamicDetails.map((detail: any, i: number) => {
        // Calculate dynamic scaling ranges for 3D depth
        const targetScale = 1 - ( (dynamicDetails.length - i) * 0.05 );
        
        return (
          <StackingCard 
            key={i}
            index={i}
            detail={detail}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}

    </section>
  );
}
