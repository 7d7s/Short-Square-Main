"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  {
    year: "2015",
    title: "Sony World Photography Awards",
    image:
      "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744794923/sunset_wsbvva.avif",
    description:
      "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settles into a tranquil serenity.",
  },
  {
    year: "2017",
    title: "Travel Photographer Of The Year",
    image:
      "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744795283/trsvel_v4ouvo.avif",
    description:
      "A breathtaking journey through the world's most remote locations, capturing the essence of adventure and wanderlust.",
  },
  {
    year: "2022",
    title: "Magnum Photography Awards",
    image:
      "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744261600/ice_r5cvor.avif",
    description:
      "Honoring the art of documentary photography, bringing compelling visual stories to the world.",
  },
  {
    year: "2023",
    title: "International Photography Awards",
    image:
      "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744795662/aa_spqgjh.avif",
    description:
      "Recognizing talent and innovation in photography, celebrating the finest visual narratives of the year.",
  },
];

export default function AwardsTimeline() {
  const [selectedAward, setSelectedAward] = useState(awards[0]);

  return (
    <section className="min-h-[70vh] pb-16">
      <div className="container mx-auto text-white">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="dark:text-white text-black text-sm" data-aos="fade-up">
            <h3 className="text-2xl font-medium">Award</h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-500 leading-tight">
              <span className="font-medium dark:text-white text-black">Award</span> is a pixel
              that reflecting our ongoging
              <span className="font-medium dark:text-white text-black"> dedication</span> most
              <span className="font-medium dark:text-white text-black"> innovation</span> and
              excellence
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mt-10">
          {/* Left List */}
          <div
            className="order-2 lg:order-1 space-y-3 lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {awards.map((award) => {
              const isActive = selectedAward.year === award.year;
              return (
                <motion.div
                  key={award.year}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onMouseEnter={() => setSelectedAward(award)}
                  className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer backdrop-blur-md transition-all duration-500 border ${isActive
                    ? "bg-white/10 border-white/20 shadow-lg"
                    : "border-white/5 hover:bg-white/5"
                    }`}
                >
                  <div>
                    <h3
                      className={`text-2xl font-medium transition-all duration-300 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                    >
                      {award.year}
                    </h3>
                    <p
                      className={`text-sm md:hidden mt-1 ${isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                    >
                      {award.title}
                    </p>
                  </div>

                  <p
                    className={`hidden md:block text-lg transition-colors ${isActive ? "text-gray-100" : "text-gray-500"
                      }`}
                  >
                    {award.title}
                  </p>

                  <FaArrowRight
                    className={`p-3 w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 ${isActive
                      ? "border-white/30 bg-white/10 text-white rotate-[-40deg]"
                      : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Preview */}
          <div
            className="order-1 lg:order-2 flex flex-col gap-6 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAward.year}
                initial={{ opacity: 0, scale: 0.9, rotateX: 15, rotateY: -10, y: 30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: -10, rotateY: 10, y: -30 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="perspective-1000"
              >
                <Image
                  width={1000}
                  height={400}
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="rounded-2xl w-full object-cover shadow-sm border border-white/10"
                />
              </motion.div>
            </AnimatePresence>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{selectedAward.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {selectedAward.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
