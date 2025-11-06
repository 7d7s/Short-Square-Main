"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DynamicButton from "@/components/common/button";

interface GetInTouchProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  buttonText?: string;
}

const GetInTouch = ({
  title = "Ready to Create Something Amazing?",
  subtitle = "Book our studio today and bring your creative vision to life.",
  bgImage = "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg",
  buttonText = "Contact Us",
}: GetInTouchProps) => {
  return (
    <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-black my-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Get In Touch Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6 md:px-16">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div>
            <DynamicButton
              textD={buttonText}
              textColor="text-white"
              bgColor="bg-transparent border border-white/50"
              hoverTextColor="group-hover:text-black"
              hoverBgColor="bg-white"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
