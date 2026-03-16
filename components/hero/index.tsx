"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeData from "@/data/home.json";

interface SlideData {
  img: string;
  title: string;
  desc: string;
  heroImg: string;
  tags?: { name: string }[];
}

function parseTitle(title: string) {
  const parts = title.split(",");
  if (parts.length > 1) {
    return {
      line1: parts[0].trim(),
      line2: parts.slice(1).join(",").trim(),
    };
  }
  return { line1: title, line2: "" };
}

const isVideo = (url: string) => {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
};

// Cinematic Apple-grade transition curves
const DURATION = 12000; // 12 seconds per slide
const springElite = { type: "spring", stiffness: 45, damping: 25, mass: 1 };
const easeSleek = [0.16, 1, 0.3, 1];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const sliderData: SlideData[] = useMemo(() => homeData.hero, []);

  // Hydration fix for client animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slideNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % sliderData.length);
  }, [sliderData.length]);

  useEffect(() => {
    const timer = setInterval(slideNext, DURATION);
    return () => clearInterval(timer);
  }, [slideNext]);

  const activeTitle = parseTitle(sliderData[activeSlide].title);
  const currentMedia = sliderData[activeSlide].heroImg;
  const isMediaVideo = isVideo(currentMedia);

  return (
    <div className="relative w-full h-[90svh] md:h-[95vh] rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#000] select-none group touch-pan-y">

      {/* 1. LAYER: CINEMATIC CANVAS (Scale, Blur, & Grade) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${activeSlide}`}
          initial={{ opacity: 0, scale: 1.05 }} // Start slightly zoomed in
          animate={{ opacity: 1, scale: 1 }} // Settle elegantly to 1.0 over 12s
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }} // Fade out slow
          transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: DURATION / 1000, ease: "linear" }
          }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          {isMediaVideo ? (
            <video
              src={currentMedia}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentMedia}
              alt="ShortSquare Photography"
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          )}
          {/* Graded Neutral Density Filters - Mobile optimized vs Desktop */}
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none opacity-90 md:h-[50vh] md:opacity-100" />
        </motion.div>
      </AnimatePresence>

      {/* 2. LAYER: UI CONTROLS & PAGINATION (Absolute Alignment) */}
      {isMounted && (
        <>
          {/* Mobile Specific Progress Bar (Absolute Bottom Edge) */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30 lg:hidden pointer-events-none">
            <motion.div
              key={`progress-mobile-${activeSlide}`}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
              className="w-full h-full bg-white"
            />
          </div>

          {/* Invisible Touch/Click Navigation Zones */}
          <div
            className="absolute inset-y-0 left-0 w-1/3 z-40 cursor-w-resize"
            onClick={() => setActiveSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length)}
            aria-label="Previous Slide"
          />
          <div
            className="absolute inset-y-0 right-0 w-1/3 z-40 cursor-e-resize"
            onClick={slideNext}
            aria-label="Next Slide"
          />
        </>
      )}

      {/* 3. LAYER: CENTERPIECE TYPOGRAPHY (Responsive & Brutal) */}
      <div className="relative z-20 flex flex-col justify-end w-full h-full pt-20 px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-[8vh] pointer-events-none">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-0">

          {/* Left Hero Monolith */}
          <div className="flex flex-col">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`tag-${activeSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ ...springElite, delay: 0.1 }}
                className="mb-4 md:mb-6"
              >
                <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[9px] md:text-[10px] uppercase font-medium tracking-[0.2em] text-white/80 backdrop-blur-md bg-white/[0.03]">
                  {sliderData[activeSlide].tags?.[0]?.name || "Exclusive Capture"}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              <motion.div key={`title-${activeSlide}`} className="flex flex-col pointer-events-auto">
                {/* 
                  Typography magic formula:
                  - Clamp for perfect scaling between iPhone SE and 4K displays.
                  - Negative tracking for massive impact (-0.03em).
                  - Ultra-tight leading (0.9 to 0.95). 
                */}
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(8px)", y: 30 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(4px)", y: -20 }}
                  transition={{ duration: 1.4, ease: easeSleek }}
                  className="text-white text-[clamp(2.5rem,7vw,6rem)] font-light tracking-tight md:tracking-[-0.03em] leading-[1.05] md:leading-[0.9] max-w-4xl"
                >
                  {activeTitle.line1}
                </motion.h1>

                {activeTitle.line2 && (
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(8px)", y: 30 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(4px)", y: -20 }}
                    transition={{ duration: 1.4, delay: 0.08, ease: easeSleek }}
                    className="text-white/70 text-[clamp(2rem,5.5vw,5.5rem)] font-light tracking-[-0.01em] md:tracking-[-0.03em] leading-[1.1] md:leading-[0.95] mt-1 md:mt-2 max-w-4xl"
                  >
                    {activeTitle.line2}
                  </motion.h1>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Added Description back per MNC Grade rule "Show, Don't Tell... but gracefully guide" */}
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`desc-${activeSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 1, delay: 0.3, ease: easeSleek }}
                className="text-white/50 font-light text-[10px] md:text-[20px] leading-relaxed max-w-sm md:max-w-4xl mt-6 hidden sm:block pointer-events-auto"
              >
                {sliderData[activeSlide].desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right Hero Action */}
          <motion.div
            className="flex items-center lg:items-end w-full lg:w-auto mt-4 lg:mt-0 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <button
              className="group flex items-center justify-between w-full lg:w-auto gap-4 py-4 px-6 md:py-4 md:px-8 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-500 ease-out sm:w-auto 
               hover:pr-6 md:hover:pr-10" // Pad out right side on hover for arrow movement
            >
              <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.15em] text-white">
                View Gallery
              </span>
              <span className="text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 sm:group-hover:translate-x-2 ease-[0.16,1,0.3,1]">
                →
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
