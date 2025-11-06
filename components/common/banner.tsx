"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner = ({ title, description, imageUrl }: BannerProps) => {
  const titleChars = title.split("");

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-30 px-6 md:px-16 lg:px-24 mt-16 md:mt-24">
        <div className="max-w-4xl">
          <motion.h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tighter">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  y: 40,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.03,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block hover:scale-110 transition-transform duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-gunmetal hover:to-white"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light tracking-wide"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
