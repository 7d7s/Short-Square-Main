"use client";
import Slider from "react-slick";
import Image from "next/image";
import React, { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/common/particles";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => {
      setDirection(next > current ? 1 : -1);
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768, // Small tablets & large phones
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };

  const sliderData = [
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg",
      title: "Capturing the Wild: A Journey Through The Art.",
      desc: "mk ajdna dk ja",
      heroImg:
        "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg",
      title: "Untamed Beauty: The Art of Wildlife Photography ",
      desc: "Second Slide Description",
      heroImg:
        "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg",
    },
    {
      img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion_zs20r0.avif",
      title: "Raw & Real: The Magic of Wildlife Photography",
      desc: "Third Slide Description",
      heroImg:
        "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion_zs20r0.avif",
    },
  ];

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

  return (
    <>
      <div className="relative lg:h-screen h-[690px] overflow-hidden rounded-2xl ">
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
              transition={{ duration: 0.8 }}
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
        <div className="container mx-auto relative z-20 ">
          <div className="absolute lg:top-40 md:top-52 top-40 lg:text-left text-center ">
            <div className="overflow-hidden md:mb-20 lg:ps-5 ">
              <AnimatePresence custom={direction} mode="wait">
                <motion.h1
                  key={activeSlide}
                  custom={direction}
                  variants={headingVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="md:text-5xl/tight lg:h-[250px] h-[120px] lg:text-7xl px-5 text-3xl text-white w-full lg:w-8/12 md:w-11/12 md:mx-0 mx-auto"
                >
                  {sliderData[activeSlide]?.title}
                </motion.h1>
              </AnimatePresence>

              <div className="md:mt-10 mt-20 w-full grid grid-cols-3">
                <div className="lg:col-span-2 col-span-3 text-black py-5 text-xs  px-5 md:text-base">
                  <div className="">
                    <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                      Landscape
                    </span>
                    <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                      Wildlife
                    </span>
                  </div>
                  <div className="md:mt-6 mt-7">
                    <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                      Travel
                    </span>
                    <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                      Portrait
                    </span>
                    <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                      Wildlife
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-1 col-span-3 px-0  lg:mt-0 md:mt-10 mt-16 gap-10 text-black">
                  <div className="">
                    <Slider {...settings}>
                      {sliderData.map((item, index) => (
                        <div key={index} className="px-3">
                          <div className="p-5 border rounded-md bg-white/50 backdrop-blur-md flex">
                            <Image
                              src={item.img}
                              width={1000}
                              height={1000}
                              alt="Slide Image"
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="ml-3">
                              <p className="text-sm ">{item.title}</p>
                              {/* <p className="text-sm text-gray-600">{item.desc}</p> */}
                            </div>
                          </div>
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
