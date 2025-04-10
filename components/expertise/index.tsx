"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define types
type CategoryContent = {
  heading: string;
  subheading: string;
};

type CategoryContentMap = {
  Landscape: CategoryContent;
  Wildlife: CategoryContent;
  Architectural: CategoryContent;
  Travel: CategoryContent;
  Portrait: CategoryContent;
};

type CategoryName = keyof CategoryContentMap;

type Slide = {
  title: string;
  location: string;
  image: string;
  category: CategoryName;
};

const categoryContent: CategoryContentMap = {
  Landscape: {
    heading: "Nature's grandeur captured in every frame",
    subheading: "When landscapes transform into timeless art",
  },
  Wildlife: {
    heading: "Wild moments preserved forever captured in every frame",
    subheading: "Where nature's drama unfolds before our lens",
  },
  Architectural: {
    heading: "Structures that tell stories captured in every frame",
    subheading: "Architectural marvels through our perspective",
  },
  Travel: {
    heading: "Journeys frozen in time captured in every frame",
    subheading: "Discover the world through our vision",
  },
  Portrait: {
    heading: "Emotions illuminated captured in every frame",
    subheading: "Capturing the essence of human spirit",
  },
};

const categories: CategoryName[] = [
  "Landscape",
  "Wildlife",
  "Architectural",
  "Travel",
  "Portrait",
];

const slides: Slide[] = [
  {
    title: "Chasing Clouds at Mont Blanc's Pinnacle",
    location: "Mont Blanc, France",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744263858/wild_ii7zgp.avif",
    category: "Landscape"
  },
  {
    title: "Serene Waters of Moraine Lake",
    location: "Alberta, Canada",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744263857/tiger_u6hbln.avif",
    category: "Wildlife"
  },
  {
    title: "Golden Dunes of Sahara Desert",
    location: "Sahara, Africa",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744263857/giraf_it6brd.avif",
    category: "Architectural"
  },
];

const ExpertiseSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Landscape");
  const sliderRef = useRef<Slider>(null);
  const [direction, setDirection] = useState(0);

  const currentContent = categoryContent[activeCategory];

  // Slick Carousel Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setDirection(next > current ? 1 : -1);
      setActiveIndex(next);
      setActiveCategory(slides[next]?.category || "Landscape");
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    setDirection(1);
    const nextIndex = (activeIndex + 1) % slides.length;
    sliderRef.current?.slickNext();
    setActiveCategory(slides[nextIndex]?.category || "Landscape");
  };

  const goToPrev = () => {
    setDirection(-1);
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    sliderRef.current?.slickPrev();
    setActiveCategory(slides[prevIndex]?.category || "Landscape");
  };

  const handleCategoryClick = (category: CategoryName) => {
    const categoryIndex = slides.findIndex(
      (slide) => slide.category === category
    );
    if (categoryIndex !== -1) {
      setDirection(categoryIndex > activeIndex ? 1 : -1);
      sliderRef.current?.slickGoTo(categoryIndex);
      setActiveIndex(categoryIndex);
      setActiveCategory(category);
    }
  };

  // Animation variants
  const textVariants = {
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
      <section className="bg-primary-brown md:px-7 p-5 rounded-xl">
        <div className="container mx-auto text-white py-10">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-10 items-center">
            <div
              className="text-gray-50 text-sm md:col-span-2"
              data-aos="fade-up"
            >
              {/* <p className="mb-2">(02)</p> */}
              <h3 className="text-2xl font-medium">Our Expertise</h3>
              <div className="mt-4 lg:col-span-2 md:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-xl md:text-2xl lg:text-5xl text-white font-light leading-tight">
                      {currentContent.heading}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div
              className="text-right text-gray-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ul className="md:space-y-2 md:block flex justify-around text-xs md:text-base">
                {categories.map((category) => (
                  <motion.li
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer transition-all duration-200 ${
                      activeCategory === category
                        ? "text-white font-semibold"
                        : "opacity-50 hover:opacity-80"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className=" text-white lg:py-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-end">
            <div className=" grid grid-cols-3 md:col-span-2 lg:col-span-1 mt-5">
              <div className="lg:col-span-3 col-span-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-md md:text-xl lg:text-3xl font-medium mb-2">
                      {slides[activeIndex].title}
                    </h2>
                    <p className="text-gray-400">
                      {slides[activeIndex].location}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="lg:text-start text-right mt-5">
                <motion.div
                  className="lg:flex space-x-4 pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:p-3 p-2 bg-gray-700 hover:text-black rounded-full hover:bg-white transition md:text:lg text-xs"
                    onClick={goToPrev}
                  >
                    <FaArrowLeft />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:p-3 p-2 bg-gray-700 hover:text-black rounded-full hover:bg-white transition md:text:lg text-xs"
                    onClick={goToNext}
                  >
                    <FaArrowRight />
                  </motion.button>
                </motion.div>

                <motion.a
                  href="#"
                  className=" text-gray-50 hover:text-white transition flex items-center justify-end lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  See all &nbsp; <LuSquareArrowOutUpRight />
                </motion.a>
              </div>
            </div>

            <div className="md:col-span-2">
              <Slider ref={sliderRef} {...settings} className="w-full">
                {slides.map((slide, index) => (
                  <div key={index} className="px-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slide.image}
                        width={1000}
                        height={1000}
                        alt={slide.title}
                        className="md:ms-20 rounded-xl shadow-lg w-full md:h-96 h-auto object-cover"
                      />
                    </motion.div>
                  </div>
                ))}
              </Slider>

              <motion.div
                className="mt-8 hidden  items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700 hover:text-black rounded-full hover:bg-white transition"
                  onClick={goToPrev}
                >
                  <FaArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700 hover:text-black rounded-full hover:bg-white transition"
                  onClick={goToNext}
                >
                  <FaArrowRight />
                </motion.button>
              </motion.div>

              <motion.a
                href="#"
                className="mt-6 hidden text-gray-300 hover:text-white transition"
                whileHover={{ x: 5 }}
              >
                See all →
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertiseSec;
