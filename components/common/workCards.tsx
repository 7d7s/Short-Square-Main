"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const cards: Card[] = [
  {
    title: "Capturing Love, One Moment at a Time.",
    description: "We capture the magic of love, one beautiful moment at a time.",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744794512/a_k2mxoq.png",
    tags: ["Couple", "Portrait"],
  },
  {
    title: "A Temple's Serene Silhouette",
    description: "A beautiful temple surrounded by nature's calmness.",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744716998/temple_vwcym5.jpg",
    tags: ["Landscape", "Spiritual", "Travel"],
  },
  {
    title: "Moments Framed in Portraits",
    description: "Capturing the emotions and beauty in human portraits.",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744717887/Framed_in_Portraits_bsoncf.avif",
    tags: ["Portrait", "Art", "Emotions"],
  },
];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container mx-auto mt-8" data-aos="fade-up" data-aos-delay="600">
      <div className="flex flex-col md:flex-row gap-4 md:h-[400px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onClick={() => isMobile && setActiveIndex(index)}
            initial={{ width: "100%" }}
            animate={{
              width: isMobile ? "100%" : activeIndex === index ? "44%" : "28%",
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            whileHover={!isMobile && activeIndex !== index ? { scale: 1.02 } : {}}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={800}
              height={600}
              className="w-full md:h-full h-[300px] object-cover"
              priority={index === activeIndex}
            />

            {/* Dynamic Tags */}
            {(activeIndex === index || isMobile) && card.tags?.length > 0 && (
              <div className="absolute top-7 right-0 hidden md:block">
                <div className="text-black">
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm lg:px-3 p-2 lg:py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <AnimatePresence>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 lg:p-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-lg lg:text-xl font-semibold mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </motion.h3>

                {(activeIndex === index || isMobile) && (
                  <motion.p
                    className="text-sm lg:text-base opacity-80 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {card.description}
                  </motion.p>
                )}

                <motion.button
                  className="lg:px-4 px-2 py-2 flex items-center justify-between border uppercase text-left border-white rounded-full group-hover:bg-white group-hover:text-black transition text-xs lg:text-base"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: activeIndex === index ? 0.4 : 0.2 }}
                >
                  More Details &nbsp; <IoIosArrowForward />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
