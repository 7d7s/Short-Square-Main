"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import homeData from "@/data/home.json";

// ---------- Types ----------
type CategoryName = "Fashion" | "Ecommerce" | "Commercial" | "Corporate" | "Campaign" | "Products";

interface Slide {
  title: string;
  location: string;
  image: string;
  category: CategoryName;
}

interface CategoryContent {
  heading: string;
  subheading: string;
}

// ---------- Data ----------
const categoryContent = homeData.expertise.categories as Record<CategoryName, CategoryContent>;
const slides: Slide[] = homeData.expertise.slides as Slide[];

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

// ---------- Component ----------
const ExpertiseSec = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const activeSlide = slides[activeIdx];
  const activeContent = categoryContent[activeSlide.category];

  // 3D Magnetic Parallax Logic for Right Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Extremely tight and snappy springs for realistic physical weight
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25, mass: 0.5 });

  // Smoothly rotate between -5 and +5 degrees based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Advanced Dynamic Glare effect matching physical lighting
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]);
  const glareOpacity = useTransform(x, [-0.5, 0, 0.5], [0.4, 0, 0.4]); // Glare peaks at the extremes

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  // Autonomous Apple-style Progression Loop
  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);

      // Sync mobile scroll position
      if (mobileScrollRef.current) {
        const itemWidth = mobileScrollRef.current.scrollWidth / slides.length;
        mobileScrollRef.current.scrollTo({
          left: itemWidth * ((activeIdx + 1) % slides.length),
          behavior: 'smooth'
        });
      }
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isHovering, activeIdx]);

  return (
    <section className="bg-black py-24 md:py-40 text-white overflow-hidden relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1800px]">

        {/* Animated MNC Grade Header Label with Curve Underline */}
        <div className="mb-12 md:mb-24 flex items-center justify-center md:justify-start w-full md:w-fit">
          <div className="relative inline-block px-4 md:px-0">
            <h2 className="text-[18px] sm:text-[22px] md:text-[26px] tracking-[0.2em] md:tracking-[0.3em] text-white font-semibold pb-2 relative z-10 uppercase drop-shadow-md">
              Specializations
            </h2>
            {/* Sleek Animated Curve Underline */}
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

          {/* Left: Desktop Hollow Typography List */}
          <div className="w-full lg:w-5/12 relative z-20 xl:py-12">

            {/* Desktop Vertical Layout */}
            <div className="hidden lg:flex lg:sticky lg:top-32 flex-col gap-6">
              {slides.map((slide, i) => {
                const isActive = i === activeIdx;
                // Add Focus/Defocus layout logic
                const distance = Math.abs(i - activeIdx);
                const isAdjacent = distance === 1;

                return (
                  <div
                    key={slide.category}
                    onMouseEnter={() => { setActiveIdx(i); setIsHovering(true); }}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setActiveIdx(i)}
                    className="cursor-pointer group relative w-fit block pl-8"
                  >
                    <div
                      className={`flex items-start gap-4 md:gap-8 transition-all duration-700 ease-[0.16,1,0.3,1] origin-left ${isActive
                        ? "scale-100 translate-x-4 opacity-100"
                        : isAdjacent
                          ? "scale-95 translate-x-0 opacity-50 hover:opacity-80 hover:translate-x-2"
                          : "scale-90 translate-x-0 opacity-20 hover:opacity-60 hover:translate-x-1"
                        }`}
                    >
                      {/* Monospaced Index Prefix */}
                      <span className={`text-[12px] md:text-[14px] font-mono mt-3 md:mt-6 transition-colors duration-500 ${isActive ? "text-white" : "text-white/40"}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Hollow Text with Glow on Active */}
                      <motion.h3
                        className={`text-[clamp(3rem,4.5vw,5.5rem)] font-light leading-[1] tracking-tighter uppercase transition-colors duration-700 ${isActive
                          ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                          : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
                          }`}
                      >
                        {slide.category}
                      </motion.h3>
                    </div>

                    {/* Active Apple-Style Loading Progress Line with Glowing Tip */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-white/10 overflow-hidden rounded-full">
                        <motion.div
                          className="w-full bg-gradient-to-b from-white/20 via-white to-white origin-bottom relative"
                          initial={{ height: "0%" }}
                          animate={{ height: isHovering ? "0%" : "100%" }}
                          transition={{
                            duration: isHovering ? 0 : AUTOPLAY_DURATION / 1000,
                            ease: "linear",
                            repeat: isHovering ? 0 : Infinity
                          }}
                        >
                          <div className="absolute bottom-0 w-full h-2 bg-white drop-shadow-[0_0_8px_rgba(255,255,255,1)] rounded-full" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet Horizontal Scroll Tabs */}
            <div
              ref={mobileScrollRef}
              className="flex lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-6 w-full mask-linear-right"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {slides.map((slide, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={`mobile-${i}`}
                    onClick={() => setActiveIdx(i)}
                    className="snap-start shrink-0 cursor-pointer flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono transition-colors duration-500 ${isActive ? "text-white" : "text-white/30"}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`text-[2rem] font-light uppercase tracking-tighter whitespace-nowrap transition-colors duration-500 ${isActive ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "text-white/30"}`}>
                        {slide.category}
                      </h3>
                    </div>
                    {/* Mobile Progress Bar */}
                    <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                      {isActive && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-white/20 to-white origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: 3D Magnetic Parallax Showcase Card */}
          <div className="w-full lg:w-7/12 relative h-[550px] sm:h-[650px] lg:h-[88vh] perspective-[2500px]">
            <motion.div
              className="w-full h-full relative flex flex-col justify-end p-6 sm:p-8 lg:p-14 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden group border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.6)] will-change-transform bg-[#0a0a0a]"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
            >

              {/* Dynamic Glare Layer (Moves opposite to tilt to simulate gloss/glass reflection) */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay rounded-[inherit]"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 50%)",
                  x: glareX,
                  y: glareY,
                  opacity: glareOpacity
                }}
              />

              {/* Cinematic Background Swap (Dual-Layer Wipe) */}
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)", filter: "blur(24px)", scale: 1.15 }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)", filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0.4, filter: "blur(12px)", scale: 0.95, transition: { duration: 0.8 } }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-0 bg-black"
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    fill
                    className="object-cover transition-transform duration-[25s] ease-linear group-hover:scale-[1.1] filter brightness-95 group-hover:brightness-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={100}
                    priority
                  />

                  {/* Minimal vignettes to frame the pure image without obstructing it */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[inherit] pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Premium Content Overlay lifted in Z-Space for Parallax depth - encapsulated in a sleek glass dock */}
              <div
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 w-[calc(100%-3rem)] md:w-full max-w-[380px] lg:max-w-[440px] will-change-transform"
                style={{ transform: "translateZ(80px)" }} // Increased depth
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={`content-${activeIdx}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)", scale: 1.02, transition: { duration: 0.4 } }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4 p-6 md:p-8 rounded-[24px] backdrop-blur-[30px] bg-black/40 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group/card"
                  >
                    {/* Subtle internal glass flare */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none opacity-50 block" />

                    <div className="relative z-10">
                      <span className="text-white/70 text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-medium mb-3 block">
                        {activeSlide.location}
                      </span>
                      <h4 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-light text-white leading-[1.1] tracking-tighter">
                        {activeContent.heading}
                      </h4>
                    </div>

                    <p className="text-white/70 text-[12px] lg:text-[14px] font-light leading-[1.6] max-w-[360px] relative z-10 mt-2">
                      {activeContent.subheading}
                    </p>

                    <div className="pt-4 w-fit relative z-10">
                      <Link href="/projects" passHref>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-4 py-2.5 px-6 border border-white/20 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-500 ease-[0.16,1,0.3,1] cursor-pointer"
                        >
                          <span className="text-[9px] lg:text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                            Explore
                          </span>

                          {/* Magnetic Arrow Circle */}
                          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform group-hover/card:scale-110 transition-transform duration-500 shadow-sm ml-2">
                            <span className="text-black text-[10px] font-bold">
                              →
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSec;