"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import CardSlider from "@/components/common/workCards";
import homeData from "@/data/home.json";

// "image/DS_Group_logo.png",
const brandLogos = [
  "image/Patanjali_Logo.svg",
  "image/Logo_Nutella.svg",
  "image/Gyan_dairy_logo.png",
  "image/9am.png",
];

const Work = () => {
  const { header } = homeData.work;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="bg-black text-white py-24 md:py-36 overflow-hidden relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1800px]">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-28"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start mb-8 md:mb-12">
            <div className="relative inline-block px-4 md:px-0">
              <span className="text-[18px] sm:text-[22px] md:text-[26px] tracking-[0.2em] md:tracking-[0.3em] text-white font-semibold pb-2 relative z-10 uppercase block drop-shadow-md">
                Our Work
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
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:items-end">
            {/* Left: Big title */}
            <div className="lg:w-7/12">
              <motion.h2
                variants={itemVariants}
                className="text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.05] tracking-tighter text-white"
              >
                <span className="font-semibold italic">{header.titleHighlight}</span>
                <span className="text-white/50"> {header.titleRest}</span>
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* ─── Seamless Brand Image Marquee (Ultra Premium Ribbon) ─── */}
        <div className="w-full relative py-6 md:py-8 bg-black flex overflow-hidden select-none border-y border-white/[0.02] mb-16 md:mb-24">
          {/* Deep cinematic blending overlays at the edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-[25vw] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-[25vw] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 sm:gap-20 md:gap-28 lg:gap-36 items-center whitespace-nowrap pl-16 sm:pl-20 md:pl-28 lg:pl-36"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Brand Partner"
                className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto max-w-[100px] md:max-w-[140px] lg:max-w-[160px] grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out cursor-pointer object-contain will-change-transform"
              />
            ))}
          </motion.div>
        </div>

        {/* Gallery */}
        <CardSlider />

        {/* End of Section / CTA */}
        <motion.div
          className="flex justify-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link href="/gallery" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-4 py-4 md:py-5 px-10 md:px-12 border border-white/20 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xl transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
            >
              <span className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.25em] text-white">
                Explore Gallery
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-black">
                <span className="text-[14px] font-bold group-hover:-rotate-45 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Work;
