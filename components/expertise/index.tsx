"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import homeData from "@/data/home.json";

// ---------- Types ----------
type CategoryName = "Portraiture" | "Wedding" | "Commercials" | "Event" | "Modelling" | "Products";

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
// Cast the JSON data to match the expected types in this component
const categoryContent = homeData.expertise.categories as Record<CategoryName, CategoryContent>;
const slides: Slide[] = homeData.expertise.slides as Slide[];

// ---------- Component ----------
const ExpertiseSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const activeCategory = slides[activeIndex].category;
  const currentContent = categoryContent[activeCategory];

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      arrows: false,
      lazyLoad: "ondemand" as const,
      beforeChange: (current: number, next: number) => {
        setDirection(next > current ? 1 : -1);
        setActiveIndex(next);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            speed: 1000
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            speed: 800
          }
        },
      ],
    }),
    []
  );

  const goToNext = useCallback(() => sliderRef.current?.slickNext(), []);
  const goToPrev = useCallback(() => sliderRef.current?.slickPrev(), []);

  const textVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  };

  return (
    <section className="relative overflow-hidden rounded-3xl p-4 md:p-8 bg-primary-brown text-white">
      <div className="relative container mx-auto z-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-medium text-gray-300 tracking-wider uppercase mb-2"
            >
              Our Vision, Your Legacy – Expertly Captured
            </motion.h3>
            <div className="min-h-[100px] md:min-h-[140px] lg:min-h-0 flex items-start mt-3">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeCategory}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight text-white"
                >
                  {currentContent.heading}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          {/* Categories */}
          <div className="text-right text-gray-300">
            <ul className="flex md:flex-col justify-between md:justify-end md:space-y-4 text-gray-400 text-sm md:text-base">
              {(Object.keys(categoryContent) as CategoryName[]).map((cat) => (
                <motion.li
                  key={cat}
                  whileHover={{ scale: 1.05, color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const idx = slides.findIndex((s) => s.category === cat);
                    if (idx !== -1) sliderRef.current?.slickGoTo(idx);
                  }}
                  className={`relative cursor-pointer transition-all duration-300 px-2 py-1 rounded-lg ${cat === activeCategory
                    ? "text-white font-semibold"
                    : "hover:text-white/80"
                    }`}
                >
                  {cat}
                  {cat === activeCategory && (
                    <motion.div
                      layoutId="activeCategory"
                      className="text-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-end">
          <div className="md:col-span-2 relative order-1 md:order-2 lg:order-2">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0.8, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      scale: { duration: 0.3 },
                    }}
                    className="overflow-hidden rounded-2xl border border-white/10 relative group"
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1200}
                      height={800}
                      className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={i === activeIndex}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                    />

                    {/* Image Indicator */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/90">
                        {i + 1} / {slides.length}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="space-y-6 md:col-span-2 lg:col-span-1 order-2 md:order-1 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-2"
              >
                <h4 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
                  {slides[activeIndex].title}
                </h4>
                <p className="text-gray-300 text-base tracking-wide font-medium">
                  {slides[activeIndex].location}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed border-l-2 border-white/20 pl-4 italic"
            >
              {currentContent.subheading}
            </motion.p>

            <div className="flex items-center justify-between md:justify-start gap-6 pt-6">
              <div className="flex space-x-4">
                {[
                  { icon: <FaArrowLeft size={14} />, action: goToPrev },
                  { icon: <FaArrowRight size={14} />, action: goToNext },
                ].map((btn, i) => (
                  <motion.button
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-sm transition-all duration-300 hover:shadow-xl"
                    onClick={btn.action}
                  >
                    {btn.icon}
                  </motion.button>
                ))}
              </div>

              <Link
                href="/projects"
                className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium"
              >
                View All Projects
                <motion.span
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <LuSquareArrowOutUpRight size={18} />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;