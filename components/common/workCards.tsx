"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import homeData from "@/data/home.json";

type Card = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const cards: Card[] = homeData.work.cards as Card[];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-4 md:h-[400px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onClick={() => isMobile && setActiveIndex(index)}
            initial={{ width: "100%" }}
            animate={{
              width: isMobile ? "100%" : activeIndex === index ? "44%" : "28%",
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            whileHover={!isMobile ? { scale: 1.02 } : {}}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={800}
              height={600}
              className="w-full md:h-full h-[300px] object-cover"
              priority={index === activeIndex}
            />

            {/* Animated Tags */}
            <AnimatePresence>
              {(activeIndex === index || isMobile) && card.tags?.length > 0 && (
                <motion.div
                  className="absolute top-5 right-5 hidden md:flex flex-wrap gap-2 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm lg:px-3 px-2 py-1 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Gradient & Content */}
            <AnimatePresence>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 lg:p-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-lg lg:text-xl font-semibold mb-2"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
