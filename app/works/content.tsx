"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSearch, FiArrowUpRight } from 'react-icons/fi';
import projectsData from '@/data/projects.json';
import GetInTouch from '@/components/getInTouch';

const ease = [0.16, 1, 0.3, 1];

export default function ProjectsContent() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const categories = projectsData.categories;
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredImages = projectsData.projects.filter((img: any) => {
        const matchesCategory = selectedCategory === "All" || img.category === selectedCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#020202] min-h-screen text-white w-full font-sans selection:bg-white/20 selection:text-white">
            {/* Sleek Editorial Hero Section */}
            <section ref={heroRef} className="relative w-full min-h-[90vh] md:h-[100vh] flex flex-col md:flex-row items-center justify-between overflow-hidden z-10 pt-24 md:pt-0 px-6 md:px-12 lg:px-24">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    {/* Minimal Noise texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay z-20" />
                </motion.div>

                {/* Left: Typography */}
                <div className="relative z-20 w-full md:w-1/2 flex flex-col justify-center items-start pt-12 md:pt-0">
                    {/* <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease }}
                        className="flex items-center gap-4 mb-8 md:mb-16"
                    >
                        <span className="w-8 h-[1px] bg-white/30" />
                        <span className="text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase text-white/50">
                            Index // 01
                        </span>
                    </motion.div> */}

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ delay: 0.6, duration: 1.2, ease }}
                            className="text-[18vw] sm:text-[15vw] md:text-[8vw] xl:text-[9vw] font-light tracking-tighter leading-[0.85] text-white uppercase"
                        >
                            {projectsData.banner.title.split(' ')[0] || "SELECTED"}
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden ml-0 md:ml-12 lg:ml-24 mt-2 md:mt-4">
                        <motion.h1
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            transition={{ delay: 0.7, duration: 1.2, ease }}
                            className="text-[18vw] sm:text-[15vw] md:text-[8vw] xl:text-[9vw] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 uppercase italic"
                        >
                            {projectsData.banner.title.split(' ').slice(1).join(' ') || "WORKS"}
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5, ease }}
                        className="max-w-md text-white/40 text-xs md:text-sm font-light leading-relaxed mt-12 md:mt-20 tracking-widest uppercase"
                    >
                        {projectsData.banner.description}
                    </motion.p>
                </div>

                {/* Right: Floating Imagery */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 2, ease }}
                    className="relative z-20 w-full md:w-[45%] h-[50vh] md:h-[75vh] mt-16 md:mt-0 hidden sm:block"
                >
                    <div className="w-full h-full relative overflow-hidden rounded-sm bg-[#050505]">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 3, ease }}
                            src={projectsData.banner.imageUrl}
                            alt="Projects"
                            className="w-full h-full object-cover object-center opacity-80"
                        />
                        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>

                    {/* Ornamental Details */}
                    <div className="absolute -bottom-6 -right-6 text-[10px] tracking-[0.3em] text-white/30 rotate-90 origin-bottom-right uppercase hidden lg:block">
                        ShotSquare Studio &copy; {new Date().getFullYear()}
                    </div>
                </motion.div>

                {/* Vertical Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="absolute bottom-0 left-6 md:left-12 flex flex-col items-center gap-4 z-20 hidden md:flex"
                >
                    <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            <div className="bg-[#020202] relative z-20">
                {/* Hyper-Sleek Sticky Filters & Search */}
                <div className="sticky top-0 z-50 pt-8 pb-6 bg-[#020202]/80 backdrop-blur-2xl border-b border-white/[0.04] transition-all duration-500">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Categories */}
                        <div className="flex overflow-x-auto gap-8 md:gap-12 justify-start items-center w-full md:w-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex-shrink-0 snap-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-700 relative py-2 ${selectedCategory === cat
                                        ? "text-white"
                                        : "text-white/30 hover:text-white/70"
                                        }`}
                                >
                                    <span className="relative z-10">{cat}</span>
                                    {selectedCategory === cat && (
                                        <motion.div
                                            layoutId="activeCategoryLine"
                                            className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-white"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6, ease }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search Component */}
                        <div className="relative w-full md:w-72 group flex-shrink-0">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/20 transition-colors duration-700 group-focus-within:text-white/80">
                                <FiSearch className="text-sm" />
                            </div>
                            <input
                                type="text"
                                placeholder="SEARCH"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-8 pr-4 py-2 bg-transparent border-b border-white/10 focus:border-white/50 text-white placeholder-white/20 transition-all duration-700 font-light text-[10px] md:text-[11px] tracking-[0.3em] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Alternating Masonry-Bento Grid Layout */}
                <section className="px-4 md:px-8 lg:px-12 py-24 relative max-w-[2000px] mx-auto min-h-[50vh]">
                    <motion.div
                        layout
                        className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 relative z-10 w-full grid-flow-row-dense group/grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.length > 0 ? (
                                filteredImages.map((img: any, i: number) => {
                                    const isBigPatternA = i % 6 === 0;
                                    const isBigPatternB = i % 6 === 3;

                                    let wrapperClass = "overflow-hidden bg-[#050505] relative transition-all duration-[1.2s] ease-[0.16,1,0.3,1] group-hover/grid:opacity-30 hover:!opacity-100 hover:z-20 group/card ";

                                    if (isBigPatternA) {
                                        wrapperClass += "col-span-2 lg:col-span-2 lg:row-span-2 h-[400px] md:h-[600px] lg:h-[800px] ";
                                    } else if (isBigPatternB) {
                                        wrapperClass += "col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 h-[400px] md:h-[600px] lg:h-[800px] ";
                                    } else {
                                        wrapperClass += "col-span-1 lg:col-span-1 lg:row-span-1 h-[196px] md:h-[292px] lg:h-[392px] ";
                                    }

                                    return (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                            exit={{ opacity: 0, scale: 0.98, y: 20 }}
                                            transition={{ duration: 1.2, delay: (i % 6) * 0.1, ease }}
                                            key={img.id}
                                            className={wrapperClass}
                                        >
                                            <div className="absolute inset-0 w-full h-full">
                                                <img
                                                    src={img.url}
                                                    alt={img.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover object-center transform transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover/card:scale-[1.05]"
                                                />

                                                {/* Sophisticated Hover Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-700 ease-[0.16,1,0.3,1] group-hover/card:opacity-100 z-10" />

                                                {/* Minimal Inner Border */}
                                                <div className="absolute inset-0 border border-white/[0.05] pointer-events-none z-20" />

                                                {/* Content Overlay */}
                                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-30 translate-y-8 opacity-0 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover/card:translate-y-0 group-hover/card:opacity-100 flex justify-between items-end">
                                                    <div className="overflow-hidden">
                                                        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-2 md:mb-3 transform translate-y-full transition-transform duration-700 delay-100 group-hover/card:translate-y-0">
                                                            {img.category}
                                                        </p>
                                                        <h3 className="text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-white transform translate-y-full transition-transform duration-700 delay-150 group-hover/card:translate-y-0">
                                                            {img.title}
                                                        </h3>
                                                    </div>

                                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center transform translate-y-8 opacity-0 transition-all duration-700 delay-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 bg-white/5 backdrop-blur-md">
                                                        <FiArrowUpRight className="text-white text-lg md:text-xl" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="col-span-2 lg:col-span-3 py-40 text-center flex flex-col items-center justify-center"
                                >
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mb-8" />
                                    <p className="text-white font-light text-2xl md:text-4xl tracking-tight mb-4">No results found.</p>
                                    <p className="text-white/30 tracking-[0.2em] uppercase text-[10px]">Try adjusting your search criteria</p>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mt-8" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </section>

                {/* Refined CTA */}
                <div className="relative py-32 md:py-48 border-t border-white/[0.04] bg-[#020202] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <GetInTouch
                            title={projectsData.cta.title}
                            subtitle={projectsData.cta.subtitle}
                            buttonText={projectsData.cta.buttonText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
