"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/*
 Brand-aligned editorial phrase for ShotSquare
 Focused on: fashion, product, and commercial photography
 Clean, confident, studio-level tone
*/

const PHRASE = [
  { text: "ShotSquare", bold: true },
  { text: "crafts" },
  { text: "premium" },
  { text: "fashion," },
  { text: "product," },
  { text: "and" },
  { text: "commercial" },
  { text: "visuals" },
  { text: "that" },
  { text: "elevate" },
  { text: "brands" },
  { text: "worldwide.", italic: true }
];

const AnimatedWord = ({
  wordObj,
  i,
  progress
}: {
  wordObj: { text: string; bold?: boolean; italic?: boolean };
  i: number;
  progress: MotionValue<number>;
}) => {
  const step = 0.6 / PHRASE.length;
  const start = i * step;
  const end = start + 0.18;

  const opacity = useTransform(progress, [start, end], [0.01, 1]);
  const filter = useTransform(progress, [start, end], ["blur(16px)", "blur(0px)"]);
  const y = useTransform(progress, [start, end], [40, 0]);
  const rotateX = useTransform(progress, [start, end], [65, 0]);
  const scale = useTransform(progress, [start, end], [1.1, 1]);

  return (
    <motion.span
      style={{
        opacity,
        filter,
        y,
        rotateX,
        scale,
        transformOrigin: "bottom center"
      }}
      className={`text-white text-[clamp(1.5rem,4vw,4.5rem)] leading-[1.1] md:leading-[1.15] tracking-[-0.02em] md:tracking-[-0.03em] will-change-transform inline-block drop-shadow-2xl ${wordObj.bold
        ? "font-medium text-white"
        : wordObj.italic
          ? "font-light italic text-white/80"
          : "font-light text-white/95"
        }`}
    >
      {wordObj.text}
    </motion.span>
  );
};

// Scroll-based cinematic word reveal
const TextReveal = ({ progress }: { progress: MotionValue<number> }) => {
  return (
    <div
      className="flex flex-wrap gap-x-[0.32em] md:gap-x-[0.4em] gap-y-[0.6em] md:gap-y-[1em]"
      style={{ perspective: "1500px" }}
    >
      {PHRASE.map((wordObj, i) => (
        <AnimatedWord key={i} wordObj={wordObj} i={i} progress={progress} />
      ))}
    </div>
  );
};

const AboutUs = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end end"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.55, 0.65], [20, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.55, 0.65], [0.95, 1]);
  const ctaFilter = useTransform(scrollYProgress, [0.55, 0.65], ["blur(10px)", "blur(0px)"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black h-[220vh] z-20 mt-20 md:mt-20 mb-8 md:mb-16"
    >
      <div className="sticky top-4 md:top-7 h-[90svh] md:h-[95vh] w-full overflow-hidden flex flex-col justify-center rounded-[24px] md:rounded-[28px] lg:rounded-[32px] bg-black shadow-2xl">

        {/* Background Image */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="https://res.cloudinary.com/dufzctlaj/image/upload/v1773658544/IMG_0905_uldbba.jpg"
            alt="ShotSquare professional photography studio portrait session"
            fill
            className="object-cover grayscale"
            sizes="100vw"
            quality={100}
            priority
          />

          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-20 max-w-[1600px] flex flex-col justify-center h-full">

          {/* Section Label */}
          <div className="mb-6 md:mb-10 flex items-center gap-4">
            <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/50 font-medium">
              ABOUT US
            </h2>
          </div>

          {/* Animated Text */}
          <div className="max-w-5xl">
            <TextReveal progress={scrollYProgress} />
          </div>

          {/* CTA */}
          <motion.div
            className="mt-8 sm:mt-12 pointer-events-auto w-fit"
            style={{
              opacity: ctaOpacity,
              y: ctaY,
              scale: ctaScale,
              filter: ctaFilter,
              transformOrigin: "left center"
            }}
          >
            <button className="group flex items-center gap-4 py-2 px-3 md:py-3 md:px-4 pr-6 md:pr-8 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer">

              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden shrink-0 border border-white/20">
                <Image
                  src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744794512/a_k2mxoq.png"
                  alt="ShotSquare studio photography preview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center gap-3">
                <Link href="/studio">
                  <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                    Discover Our Studio
                  </span>
                </Link>

                <span className="text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2 ease-[0.16,1,0.3,1]">
                  →
                </span>
              </div>

            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;