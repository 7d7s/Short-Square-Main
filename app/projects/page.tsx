"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';

export default function ProjectsPage() {

  const projectsRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const images = [
    { id: 1, title: "Bride Portrait",client: "vijay", year: "2020",  category: "Wedding", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/wedding2_sulv3s.jpg" },
    { id: 2, title: "Fashion Shoot",client: "rahulk", year: "2021",  category: "Fashion", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion_zs20r0.avif" },
    { id: 3, title: "Architecture Marvel",client: "vibha", year: "2022",  category: "Architecture", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/a_wkz3id.jpg" },
    { id: 4, title: "Urban Documentary",client: "nk", year: "2023",  category: "Documentary", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg" },
    { id: 5, title: "Classic Commercial",client: "ram", year: "2021",  category: "Commercial", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/camera4_ituqwy.jpg" },
    { id: 6, title: "Portrait Perfection",client: "vijay", year: "2025",  category: "Portrait", url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/c_pb096u.jpg" },
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
      <section className="py-6 bg-white rounded-2xl my-6 sticky top-0 z-10 shadow-sm">
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
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="md:px-10 md:py-10 p-5 rounded-2xl bg-primary-brown text-white">
        <div className="container mx-auto">
        
       <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 transition-all">
<AnimatePresence>
  {filteredImages.map((img) => (
    <motion.div
      key={img.id}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded overflow-hidden relative" // Added 'group' class here
    >
      <Image
        src={img.url} width={1000} height={1000}
        alt={img.title} 
        className="w-full h-72 object-cover relative" 
      />
      {/* <div className="p-2 text-sm">{img.title}</div> */}
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
</AnimatePresence>

  {filteredImages.length === 0 && (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-gray-500 col-span-full text-center"
    >
      No images found.
    </motion.p>
  )}
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