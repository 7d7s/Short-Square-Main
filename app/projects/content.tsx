"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';

import projectsData from '@/data/projects.json';
import ImageCard from '@/components/common/GalleryCard';

export default function ProjectsContent() {
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

    const categories = projectsData.categories;
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredImages = projectsData.projects.filter((img: any) => {
        const matchesCategory = selectedCategory === "All" || img.category === selectedCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto text-black relative">
            {/* Banner Section */}
            <Banner
                title={projectsData.banner.title}
                description={projectsData.banner.description}
                imageUrl={projectsData.banner.imageUrl}
            />

            {/* Ambient Background Decor for Dark Section */}
            <div className="absolute top-[40vh] left-0 right-0 bottom-0 bg-[#0a0a09] -z-20"></div>

            {/* Filters Section */}
            <AnimatePresence>
                {isSticky && (
                    <motion.section
                        key="sticky-header"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="py-3 xl:py-6 bg-[#0a0a09]/80 backdrop-blur-[40px] border-b border-white/[0.08] sticky top-0 z-40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] saturate-150"
                    >
                        <div className="container mx-auto px-6 md:px-12">
                            <div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center gap-2 xl:gap-12">

                                <div className="flex overflow-x-auto gap-8 justify-start xl:justify-center items-center w-full xl:w-auto pb-1 xl:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`flex-shrink-0 snap-center px-1 py-3 text-[0.65rem] xl:text-[0.7rem] uppercase tracking-[0.3em] font-medium transition-colors duration-500 relative group flex flex-col items-center ${selectedCategory === cat
                                                ? "text-[#c8b390]"
                                                : "text-white/40 hover:text-white/90"
                                                }`}
                                        >
                                            <span className="relative z-10 mb-2">{cat}</span>
                                            {selectedCategory === cat && (
                                                <motion.div
                                                    layoutId="activeCategoryLine"
                                                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c8b390]"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            )}
                                            {selectedCategory !== cat && (
                                                <div className="absolute bottom-0 left-1/2 right-1/2 h-[1px] bg-white/20 group-hover:left-0 group-hover:right-0 transition-all duration-500" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Hairline Divider for Mobile Only */}
                                <div className="w-full h-[1px] bg-white/5 xl:hidden" />

                                <div className="relative w-full xl:w-80 flex-shrink-0 group">
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/30 transition-colors duration-500 group-focus-within:text-[#c8b390]">
                                        <FiSearch className="text-sm xl:text-base" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="SEARCH COLLECTION"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-8 pr-0 py-3 bg-transparent border-b border-transparent focus:border-[#c8b390]/50 hover:border-white/10 text-white placeholder-white/20 transition-all duration-500 font-light text-[0.65rem] xl:text-xs tracking-[0.3em] rounded-none focus:outline-none"
                                    />
                                </div>

                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Projects Grid Container Initialization */}
            <section
                ref={secondSectionRef}
                className="md:px-12 md:py-32 py-16 px-6 bg-gradient-to-b from-[#0a0a09] to-[#0f0e0d] relative z-10"
            >
                <div className="container mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 transition-all">
                        <AnimatePresence>
                            {filteredImages.map((img: any, index: number) => (
                                <div
                                    key={img.id}
                                    className={`${filteredImages.length <= 1 && index === 0 ? 'md:col-span-1' : ''}`}
                                >
                                    <ImageCard img={img} />
                                </div>
                            ))}

                            {/* Related content from existing images */}
                            {filteredImages.length <= 1 && filteredImages.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    className="md:px-6 col-span-2"
                                >
                                    <div className="space-y-4">
                                        {filteredImages
                                            .filter((_: any, i: number) => i !== 0) // Exclude the main image
                                            .concat( // Add some duplicates if less than 2 items
                                                filteredImages.length === 1 ? [filteredImages[0]] : []
                                            )
                                            .slice(0, 2) // Show max 2 related items
                                            .map((item: any, i: number) => (
                                                <motion.div
                                                    key={`related-${item.id}-${i}`}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="flex items-start rounded transition"
                                                >
                                                    <div>
                                                        <h4 className="font-medium  text-xl text-white">{item.title}</h4>
                                                        <p className="text-sm text-[#c8b390] mt-1 line-clamp-2">
                                                            {item.client} • {item.category}
                                                        </p>
                                                        <p className='py-5 text-justify leading-relaxed text-white/70 font-light'>{item.description}</p>
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
            <div className="bg-[#0a0a09]">
                <GetInTouch
                    title={projectsData.cta.title}
                    subtitle={projectsData.cta.subtitle}
                    buttonText={projectsData.cta.buttonText}
                />
            </div>
        </div>
    );
}
