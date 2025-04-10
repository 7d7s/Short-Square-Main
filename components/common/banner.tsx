import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner = ({ title, description, imageUrl }: BannerProps) => {
  return (
    <section
      className={`relative h-[450px] rounded-2xl bg-black overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>

      <Image
        src={imageUrl}
        alt={title}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />

      <motion.div
        className="absolute inset-0 flex items-center z-20 px-4 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mt-10 mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
