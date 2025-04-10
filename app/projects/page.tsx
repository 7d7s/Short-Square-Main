"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';

export default function ProjectsPage() {


  //sticky header
  const [isSticky, setIsSticky] = useState(true);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-50px 0px 0px 0px'
      }
    );

    const currentRef = secondSectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Sample projects data
  const images = [
    { id: 1, title: "Bride Portrait",client: "vijay", year: "2020",  category: "Wedding", descriptin: "A visual journey showcasing passion, perspective, and perfectly timed moments that speak louder than words.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/wedding2_sulv3s.jpg" },
    { id: 2, title: "Fashion Shoot",client: "rahulk", year: "2021",  category: "Fashion", descriptin: "From fleeting moments to lasting impressions — I capture what words often fail to express.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion_zs20r0.avif" },
    { id: 3, title: "Architecture Marvel",client: "vibha", year: "2022",  category: "Fashion", descriptin: "A visual journey showcasing passion, perspective, and perfectly timed moments that speak louder than words.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/a_wkz3id.jpg" },
    { id: 4, title: "Urban Documentary",client: "nk", year: "2023",  category: "Documentary", descriptin: "From fleeting moments to lasting impressions — I capture what words often fail to express.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg" },
    { id: 5, title: "Classic Commercial",client: "ram", year: "2021",  category: "Commercial", descriptin: "A visual journey showcasing passion, perspective, and perfectly timed moments that speak louder than words.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/camera4_ituqwy.jpg" },
    { id: 6, title: "Portrait Perfection",client: "vijay", year: "2025",  category: "Portrait", descriptin: "A visual journey showcasing passion, perspective, and perfectly timed moments that speak louder than words.", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/c_pb096u.jpg" },
    // Add more...
  ];

  // Get unique categories for filters
  const categories = ["All", "Fashion", "Portrait", "Commercial", "Wedding", "Architecture", "Documentary"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter((img) => {
    const matchesCategory = selectedCategory === "All" || img.category === selectedCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    
    <div className="min-h-screen  text-black">
      {/* Banner Section */}
      <Banner
      title="Our Portfolio"
      description="Each project is a story captured in frames — crafted with passion, light, and true moments."
      imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg"
    />

      {/* Filters Section */}
      <AnimatePresence>
        {isSticky && (
          <motion.section
            key="sticky-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="py-6 bg-white rounded-2xl my-6 sticky top-0 z-20 shadow-sm"
          >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-black text-white shadow"
                : "bg-gray-100 text-gray-800 hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
       <div className="relative w-full md:w-64 mt-4 md:mt-0">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiSearch />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
          </div>
          </div>
        </div>
        </motion.section>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <section 
        ref={secondSectionRef}
        className="md:px-10 md:py-10 p-5 rounded-2xl bg-primary-brown text-white"
      >
        <div className="container mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all">
  <AnimatePresence>
    {filteredImages.map((img, index) => (
      <motion.div
        key={img.id}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`group rounded overflow-hidden relative ${
          filteredImages.length <= 1 && index === 0 ? 'md:col-span-1' : ''
        }`}
      >
        <Image
          src={img.url}
          width={1000}
          height={1000}
          alt={img.title}
          className={`w-full ${
            filteredImages.length <= 1 && index === 0 ? 'h-auto' : 'h-72'
          } object-cover relative`}
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
    ))}

    {/* Related content from existing images */}
    {filteredImages.length <= 1 && filteredImages.length > 0 && (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="hidden md:block md:p-6 p-4 col-span-2"
      >
        <div className="space-y-4">
          {filteredImages
            .filter((_, i) => i !== 0) // Exclude the main image
            .concat( // Add some duplicates if less than 2 items
              filteredImages.length === 1 ? [filteredImages[0]] : []
            )
            .slice(0, 2) // Show max 2 related items
            .map((item, i) => (
              <motion.div
                key={`related-${item.id}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 p-2 rounded transition"
                onClick={() => {
                  // Handle click to focus this item
                }}
              >
                <div>
                  <h4 className="font-medium line-clamp-1 text-xl">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.client} • {item.category}
                  </p>
                  <p className='py-6'>{item.descriptin}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    )}

    {filteredImages.length === 0 && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-300 col-span-full text-center"
      >
        No images found.
      </motion.p>
    )}
  </AnimatePresence>
</div>
        </div>
      </section>

      {/* CTA Section */}
    <GetInTouch
     title="Ready to Start Your Project?"
     subtitle="Get in touch with our team to discuss your ideas"
     buttonText="Contact us call"
    />
    </div>
  );
}