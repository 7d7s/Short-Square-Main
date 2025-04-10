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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="group break-inside-avoid rounded overflow-hidden relative"
      >
        <Image
          src={img.url}
          width={1000}
          height={600} // optional for dynamic height
          alt={img.title}
          className="w-full object-cover relative"
          priority={false}
        />
  
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
            <span className="text-sm text-amber-300 font-medium">{img.client}</span>
            <h3 className="text-xl font-bold text-white mt-1">{img.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-300">{img.year || "2023"}</span>
              <span className="text-xs px-2 py-1 bg-amber-500 text-white rounded-full">
                {img.category}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default ImageCard;
