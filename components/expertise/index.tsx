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
  Wedding: CategoryContent;
  Nature: CategoryContent;
  Fashion: CategoryContent;
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
  Wedding: {
    heading: "Capturing Love Stories Across India",
    subheading: "From royal palaces of Rajasthan to beach weddings in Goa, we document your special day with elegance and emotion. Every glance, every tear, every smile - preserved forever in timeless frames.",
  },
  Nature: {
    heading: "India's Untamed Beauty",
    subheading: "From the snow-capped Himalayas to the backwaters of Kerala, we capture nature's grandeur. Witness the vibrant wildlife of Ranthambore and serene landscapes of the Western Ghats through our lens.",
  },
  Fashion: {
    heading: "Where Tradition Meets Trend",
    subheading: "Showcasing India's vibrant fashion scene - from traditional handlooms to contemporary designs. Our studio and outdoor shoots highlight textures, colors, and styles unique to Indian fashion.",
  },
  Travel: {
    heading: "Incredible India Through Our Lens",
    subheading: "Discover hidden gems and iconic landmarks across our diverse nation. From bustling bazaars to tranquil temples, we frame the essence of India's cultural tapestry.",
  },
  Portrait: {
    heading: "Emotions Illuminated, Stories Told",
    subheading: "Portraits that reveal the soul. Whether it's a child's innocent smile or the wisdom in an elder's eyes, we capture authentic emotions with perfect lighting and composition.",
  },
};

const categories: CategoryName[] = [
  "Wedding",
  "Nature",
  "Fashion",
  "Travel",
  "Portrait",
];

const slides: Slide[] = [
  {
    title: "Royal Wedding at Udaipur Palace",
    location: "City Palace, Udaipur, Rajasthan",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png",
    category: "Wedding"
  },
  {
    title: "Sunrise at Dal Lake",
    location: "Dal Lake, Srinagar, Jammu & Kashmir",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791310/sun_jgovbq.png",
    category: "Nature"
  },
  {
    title: "Traditional Handloom Photoshoot",
    location: "Pochampally, Telangana",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791600/traditional_ltnzlb.avif",
    category: "Fashion"
  },
  {
    title: "Street Photography in Old Delhi",
    location: "Chandni Chowk, Delhi",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791051/street_Photography_xz99dw.avif",
    category: "Travel"
  },
  {
    title: "Bridal Portrait Session",
    location: "Leela Palace, Bengaluru",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791050/p_ktihfq.avif",
    category: "Portrait"
  }
];

const ExpertiseSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<CategoryName>("Wedding");
  const sliderRef = useRef<Slider>(null);
  const [direction, setDirection] = useState(0);

  const currentContent = categoryContent[activeCategory];
  const currentSlide = slides[activeIndex];

  // Slick Carousel Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 300,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setDirection(next > current ? 1 : -1);
      setActiveIndex(next);
      setActiveCategory(slides[next]?.category || "Wedding");
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
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    setDirection(-1);
    sliderRef.current?.slickPrev();
  };

  const handleCategoryClick = (category: CategoryName) => {
    const categoryIndex = slides.findIndex(
      (slide) => slide.category === category
    );
    if (categoryIndex !== -1) {
      setDirection(categoryIndex > activeIndex ? 1 : -1);
      sliderRef.current?.slickGoTo(categoryIndex);
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
    <section className="bg-primary-brown md:px-7 p-5 rounded-xl">
      <div className="container mx-auto text-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="text-gray-50 text-sm md:col-span-2">
            <h3 className="text-2xl font-medium">Our Vision, Your Legacy – Expertly Captured</h3>
            <div className="mt-4 lg:col-span-2 md:col-span-3 md:h-[180px] h-[40px]">
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

          <div className="text-right text-gray-300">
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

      <div className="text-white lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-end">
          <div className="grid grid-cols-3 md:col-span-2 lg:col-span-1 mt-5">
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
                  <p className="text-md md:text-lg font-medium mb-2">
                    {currentSlide.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {currentSlide.location}
                  </p>
                </motion.div>
              </AnimatePresence>
              <p className="text-sm text-gray-300 mt-4">
                {currentContent.subheading}
              </p>
            </div>
            <div className="lg:text-start text-right mt-5">
              <motion.div className="lg:flex space-x-4 pb-4">
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
                className="text-gray-50 hover:text-white transition flex items-center justify-end lg:justify-start text-sm"
                whileHover={{ x: 5 }}
              >
                View Gallery <LuSquareArrowOutUpRight className="ml-1" />
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
                      height={667}
                      alt={slide.title}
                      className="md:ms-20 rounded-xl shadow-lg w-full md:h-96 h-auto object-cover"
                      priority={index === activeIndex}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;