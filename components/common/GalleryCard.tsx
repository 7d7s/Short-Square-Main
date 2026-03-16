import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  id: number;
  title: string;
  client: string;
  year: string;
  category: string;
  url: string;
}

interface ImageCardProps {
  img: ImageProps;
}

const ImageCard = ({ img }: ImageCardProps) => {
  return (
    <motion.div
      key={img.id}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0a0a09] shadow-2xl isolate"
    >
      {/* Base Image with dramatic scale on hover */}
      <Image
        src={img.url}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={img.title}
        className="object-cover w-full h-full transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
        priority={false}
      />

      {/* Persistent slight black filter */}
      <div className="absolute inset-0 bg-light/20 z-[5] transition-opacity duration-1000 group-hover:opacity-40" />

      {/* Deep Sheer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out z-10" />

      {/* Primary Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-30">

        {/* Floating Typography Block */}
        <div className="transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-start gap-4">

          <div className="flex gap-4 w-full justify-between items-center text-white/90 font-medium text-[0.65rem] tracking-[0.3em] uppercase">
            <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {img.category}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {img.year}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight font-light drop-shadow-2xl">
            {img.title}
          </h3>

          <div className="w-8 h-[1px] bg-golden/50 my-2" />

          <span className="text-white/60 text-xs tracking-widest uppercase font-light">
            {img.client}
          </span>

        </div>
      </div>
    </motion.div>
  );
};

export default ImageCard;
