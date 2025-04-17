"use client";
import Slider from "react-slick";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/common/particles";

interface SlideTag {
  name: string;
  // icon: React.ReactNode;
}

interface SlideData {
  img: string;
  title: string;
  desc: string;
  heroImg: string;
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [displayTitle, setDisplayTitle] = useState<string>("");
  const [typingComplete, setTypingComplete] = useState<boolean>(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef<Slider>(null);

  const slideTags: SlideTag[][] = [
    [
      { name: "Wedding"},
      { name: "Portrait"},
      { name: "Couple"},
      { name: "Romance"},
    ],
    [
      { name: "Travel"},
      { name: "Nature"},
      { name: "Adventure"},
      { name: "Landscape"},
    ],
    [
      { name: "Fashion"},
      { name: "Portrait"},
      { name: "Studio"},
      { name: "Model"},
    ],
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => {
      setDirection(next > current ? 1 : -1);
      setActiveSlide(next);
      startTypingAnimation(sliderData[next]?.title || "");
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };

  const sliderData: SlideData[] = [
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744788695/wedding1_z4h16n.jpg",
      title: "Capturing Love, One Moment at a Time.",
      desc: "First Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744788695/wedding1_z4h16n.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744716998/temple_vwcym5.jpg",
      title: "Untamed Beauty: The Art of Wildlife Photography",
      desc: "Second Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744716998/temple_vwcym5.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744789303/fashio_exfcmi.avif",
      title: "Bold. Beautiful. Captured with Style",
      desc: "Third Slide Description",
      heroImg: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744789303/fashio_exfcmi.avif",
    },
  ];

  const startTypingAnimation = (text: string) => {
    setTypingComplete(false);
    setDisplayTitle("");
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (cursorRef.current) {
      cursorRef.current.style.opacity = '1';
      cursorRef.current.style.animation = 'none';
    }

    let i = 0;
    const typeNextCharacter = () => {
      if (i < text.length) {
        setDisplayTitle(text.substring(0, i + 1));
        i++;
        // Faster typing speed with less variation
        const speed = Math.random() * 30 + 30; // Between 30-60ms
        typingTimeoutRef.current = setTimeout(typeNextCharacter, speed);
      } else {
        setTypingComplete(true);
        if (cursorRef.current) {
          cursorRef.current.style.animation = "blink 1s infinite";
        }
        // Pause slider when typing completes
        if (sliderRef.current) {
          sliderRef.current.slickPause();
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.slickPlay();
            }
          }, 2000); // Resume after 2 seconds
        }
      }
    };

    typingTimeoutRef.current = setTimeout(() => {
      typeNextCharacter();
    }, 300); // Short initial delay
  };

  useEffect(() => {
    startTypingAnimation(sliderData[activeSlide]?.title || "");
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const headingVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    })
  };

  return (
    <>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
      
      <div className="relative lg:max-h-screen h-[690px] overflow-hidden rounded-2xl">
        <div className="absolute lg:h-screen h-[690px] w-full">
          <Particles />

          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={sliderData[activeSlide]?.heroImg}
                alt="hero background"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="container mx-auto relative z-20">
          <div className="absolute lg:top-40 md:top-52 top-40 lg:text-left text-center">
            <div className="overflow-hidden md:mb-20 lg:ps-5">
              <AnimatePresence custom={direction} mode="wait">
                <motion.h1
                  key={activeSlide}
                  custom={direction}
                  variants={headingVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="md:text-5xl/tight lg:h-[250px] h-[120px] lg:text-7xl px-5 text-3xl text-white w-full lg:w-8/12 md:w-11/12 md:mx-0 mx-auto tracking-tight"
                >
                  <div className="flex flex-wrap">
                    {displayTitle.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={charVariants}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                    {!typingComplete && (
                      <span 
                        ref={cursorRef}
                        className="inline-block w-0 h-0 bg-white ml-1"
                        style={{ opacity: 1 }}
                      />
                    )}
                  </div>
                </motion.h1>
              </AnimatePresence>

              <div className="md:mt-10 mt-20 w-full grid grid-cols-3 tags">
                <div className="lg:col-span-2 col-span-3 text-black py-5 text-xs px-5 md:text-base">
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {slideTags[activeSlide]?.slice(0, 2).map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        className="mt-3 px-4 py-2 border rounded-full bg-white/90 hover:bg-white transition-all cursor-pointer backdrop-blur-md me-2 flex items-center shadow-sm hover:shadow-md"
                      >
                        {/* <span className="mr-2 text-lg">{tag.icon}</span> */}
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {slideTags[activeSlide]?.slice(2).map((tag, index) => (
                      <motion.span
                        key={index + 2}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: 0.7 + index * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        className="mt-3 px-4 py-2 border rounded-full bg-white/90 hover:bg-white transition-all cursor-pointer backdrop-blur-md me-2 flex items-center shadow-sm hover:shadow-md"
                      >
                        {/* <span className="mr-2 text-lg">{tag.icon}</span> */}
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-1 col-span-3 px-0 lg:mt-0 md:mt-10 mt-16 gap-10 text-black">
                  <div className="">
                    <Slider ref={sliderRef} {...settings}>
                      {sliderData.map((item, index) => (
                        <div key={index} className="px-3">
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="p-5 border rounded-md bg-white/80 backdrop-blur-md flex shadow-sm hover:shadow-md transition-shadow"
                          >
                            <Image
                              src={item.img}
                              width={1000}
                              height={1000}
                              alt="Slide Image"
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="ml-3">
                              <p className="text-sm font-medium">{item.title}</p>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;