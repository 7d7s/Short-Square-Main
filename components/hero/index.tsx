"use client";

import Slider from "react-slick";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/common/particles";

interface SlideData {
  img: string;
  title: string;
  desc: string;
  heroImg: string;
}

interface SlideTag {
  name: string;
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef<Slider>(null);

  const sliderData: SlideData[] = [
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg",
      title: "Capturing Love, One Moment at a Time.",
      desc: "First Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744716998/temple_vwcym5.jpg",
      title: "Untamed Beauty: The Art of Wildlife Photography",
      desc: "Second Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744716998/temple_vwcym5.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion2_mc2vh9.jpg",
      title: "Bold. Beautiful. Captured with Style",
      desc: "Third Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion2_mc2vh9.jpg",
    },
  ];

  const slideTags: SlideTag[][] = [
    [{ name: "Wedding" }, { name: "Portrait" }, { name: "Couple" }, { name: "Romance" }],
    [{ name: "Travel" }, { name: "Nature" }, { name: "Adventure" }, { name: "Landscape" }],
    [{ name: "Fashion" }, { name: "Portrait" }, { name: "Studio" }, { name: "Model" }],
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "8%",
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    afterChange: (next: number) => startTypingAnimation(sliderData[next].title),
  };

  const startTypingAnimation = useCallback((text: string) => {
    setTypingComplete(false);
    setDisplayTitle("");
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    if (cursorRef.current) {
      cursorRef.current.style.opacity = "1";
      cursorRef.current.style.animation = "none";
    }

    let i = 0;
    const typeNext = () => {
      if (i < text.length) {
        setDisplayTitle(text.slice(0, ++i));
        typingTimeoutRef.current = setTimeout(typeNext, 40 + Math.random() * 30);
      } else {
        setTypingComplete(true);
        if (cursorRef.current)
          cursorRef.current.style.animation = "blink 1s infinite";
      }
    };
    typingTimeoutRef.current = setTimeout(typeNext, 300);
  }, []);

  useEffect(() => {
    startTypingAnimation(sliderData[0].title);
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [startTypingAnimation]);

  return (
    <>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div className="relative h-[90vh] md:h-[80vh] lg:h-[93vh] px-4 md:px-8 overflow-hidden rounded-2xl">
        {/* Background */}
        <div className="absolute inset-0">
          <Particles />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={sliderData[activeSlide].heroImg}
                alt="Hero background"
                fill
                priority
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foreground */}
        <div className="relative z-20 container mx-auto flex flex-col justify-between h-full">
          {/* Heading */}
          <div className="pt-56 md:pt-72 text-center lg:text-left">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight w-11/12 lg:w-8/12 mx-auto lg:mx-0"
              transition={{ duration: 0.7 }}
            >
              {displayTitle}
              {!typingComplete && (
                <span
                  ref={cursorRef}
                  className="inline-block w-[3px] h-[1em] bg-white ml-1 align-bottom"
                />
              )}
            </motion.h1>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-10 left-0 w-full">
            <div className="grid grid-cols-3 items-end gap-y-6">
              {/* Tags */}
              <div className="lg:col-span-2 col-span-3 text-white/90 text-sm md:text-base">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {slideTags[activeSlide].map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="px-4 py-2 border border-white/20 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md transition-all cursor-pointer shadow-sm"
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="lg:col-span-1 col-span-3">
                <Slider ref={sliderRef} {...settings}>
                  {sliderData.map((item, i) => (
                    <div key={i} className="px-2">
                      <div className="p-2.5 border border-white/10 rounded-xl bg-white/10 backdrop-blur-md shadow-md flex items-center hover:shadow-lg transition-all">
                        <Image
                          src={item.img}
                          width={80}
                          height={80}
                          alt="Slide"
                          className="rounded-lg object-cover w-20 h-20"
                        />
                        <p className="ml-3 text-sm lg:text-base font-medium text-white/90 line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
