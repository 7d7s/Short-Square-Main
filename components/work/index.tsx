"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import CardSlider from "@/components/common/workCards";
import homeData from "@/data/home.json";

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

            {/* Right: subtitle, desc, CTA */}
            <div className="lg:w-5/12 flex flex-col gap-6 pb-2">
              <motion.p variants={itemVariants} className="text-[13px] md:text-[14px] text-white/60 font-light leading-[1.8] max-w-[400px]">
                {header.description}
              </motion.p>

              <motion.div variants={itemVariants} className="w-fit">
                <Link href="/projects" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex items-center gap-4 py-3 px-8 border border-white/20 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xl transition-colors duration-500 cursor-pointer"
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white">
                      View All Projects
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-black text-[10px] font-bold">→</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <CardSlider />

      </div>
    </section>
  );
};

export default Work;
