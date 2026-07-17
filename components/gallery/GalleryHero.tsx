"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GalleryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Normalize mouse position from -1 to 1 for 3D rotation
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    mouseX.set(xPct * 1000); // Scale up for gradient positioning
    mouseY.set(yPct * 1000);
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Insane Parallax values
  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 3D Tilt derived from mouse
  const rotateX = useTransform(springY, [-500, 500], [20, -20]);
  const rotateY = useTransform(springX, [-500, 500], [-20, 20]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-center overflow-hidden mb-24 rounded-b-[3rem] md:rounded-b-[5rem] bg-[#020202] border-b border-white/5"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1500px" }}
    >
      {/* 1. Dynamic Aurora Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-50 mix-blend-screen pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.08),transparent)] blur-[80px] md:blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[90px] md:blur-[150px]"
        />
      </div>

      {/* 2. Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-80 mix-blend-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              900px circle at calc(50% + ${springX}px) calc(50% + ${springY}px),
              rgba(255, 255, 255, 0.15),
              transparent 70%
            )
          `,
        }}
      />

      {/* 3. Intense Grain Filter */}
      <div
        className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* 4. The 3D Floating Typography Stack */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          opacity: opacityScroll,
          transformStyle: "preserve-3d"
        }}
        className="relative z-30 w-full h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
      >

        {/* Text Layer 1: Outlined Parallax (Moves fast) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            y: textY1,
            z: 100,
            WebkitTextStroke: "1px rgba(255,255,255,0.3)"
          }}
          className="text-[17vw] sm:text-[130px] md:text-[180px] lg:text-[250px] font-black uppercase tracking-tighter text-transparent leading-[0.75]"
        >
          Visual
        </motion.h1>

        {/* Text Layer 2: Solid Masked Gradient (Moves slow) */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: textY2,
            z: 150
          }}
          className="text-[19vw] sm:text-[140px] md:text-[200px] lg:text-[280px] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/10 leading-[0.75] -mt-[4vw] sm:-mt-8 md:-mt-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          Archive<span className="text-white/20">.</span>
        </motion.h1>

      </motion.div>
    </div>
  );
}
