"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import projectsData from '@/data/projects.json';
import ImageCard from '@/components/common/GalleryCard';
import GetInTouch from '@/components/getInTouch';

const ease = [0.16, 1, 0.3, 1];

export default function ProjectsContent() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

    const categories = projectsData.categories;
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredImages = projectsData.projects.filter((img: any) => {
        const matchesCategory = selectedCategory === "All" || img.category === selectedCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#050505] min-h-screen text-white w-full overflow-hidden font-sans">
            {/* Cinematic Hero Section - Floating with Parallax */}
            <section ref={heroRef} className="relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto mt-2 md:mt-4 h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/[0.05] shadow-[0_20px_100px_rgba(0,0,0,0.8)] bg-[#050505] z-10">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2.5, ease }}
                        src={projectsData.banner.imageUrl}
                        alt="Projects"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1.5, ease }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-golden animate-pulse shadow-[0_0_10px_rgba(var(--golden-rgb),0.5)]" />
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
                            Our Masterpieces
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.2, ease }}
                        className="text-[12vw] sm:text-[14vw] md:text-[13vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 leading-[0.75] pb-4 uppercase"
                    >
                        {projectsData.banner.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1.5, ease }}
                        className="max-w-xl mx-auto text-white/50 text-base md:text-xl font-light leading-relaxed mt-6 tracking-wide"
                    >
                        {projectsData.banner.description}
                    </motion.p>
                </div>
            </section>

            {/* Hyper-Sleek Sticky Filters & Search */}
            <div className="sticky top-0 z-50 mt-8 mb-12 select-none">
                <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-3xl border-y border-white/[0.04]" />
                <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center py-4">
                    {/* Categories */}
                    <div className="flex overflow-x-auto gap-8 justify-start items-center w-full md:w-auto pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 snap-center text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium transition-colors duration-500 relative group py-2 ${selectedCategory === cat
                                    ? "text-golden"
                                    : "text-white/40 hover:text-white/90"
                                    }`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {selectedCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategoryLine"
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-golden"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Search Component */}
                    <div className="relative w-full md:w-80 group mt-2 md:mt-0 flex-shrink-0">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/30 transition-colors duration-500 group-focus-within:text-golden pl-4">
                            <FiSearch className="text-sm md:text-base" />
                        </div>
                        <input
                            type="text"
                            placeholder="SEARCH COLLECTION"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-golden/50 hover:bg-white/[0.04] text-white placeholder-white/20 transition-all duration-500 font-light text-[10px] md:text-[11px] tracking-[0.3em] rounded-full focus:outline-none shadow-[inset_0_2px_10px_rgba(255,255,255,0.01)]"
                        />
                    </div>
                </div>
            </div>

            {/* Alternating Masonry-Bento Grid Layout */}
            <section className="px-4 md:px-8 lg:px-12 mb-32 relative max-w-[1800px] mx-auto min-h-[50vh]">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-golden opacity-[0.03] blur-[200px] rounded-full pointer-events-none" />

                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10 w-full grid-flow-row-dense"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.length > 0 ? (
                            filteredImages.map((img: any, i: number) => {
                                // 1000x MNC Pattern Algorithm:
                                // Mobile/Tablet: 1 Big, then 2 Small
                                // Desktop: Alternating Left-Right Dense Bento Grid
                                const isBigPatternA = i % 6 === 0; // Big Left
                                const isBigPatternB = i % 6 === 3; // Big Right
                                const isBig = isBigPatternA || isBigPatternB;

                                let wrapperClass = "rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.03] bg-[#070707] group relative transform transition-all duration-1000 ease-[0.16,1,0.3,1] hover:scale-[1.01] shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_40px_80px_rgba(var(--golden-rgb),0.1)] hover:border-golden/20 hover:z-20 ";

                                if (isBigPatternA) {
                                    wrapperClass += "col-span-2 lg:col-span-2 lg:row-span-2 h-[450px] md:h-[600px] lg:h-[700px] ";
                                } else if (isBigPatternB) {
                                    wrapperClass += "col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 h-[450px] md:h-[600px] lg:h-[700px] ";
                                } else {
                                    wrapperClass += "col-span-1 lg:col-span-1 lg:row-span-1 h-[217px] md:h-[288px] lg:h-[334px] ";
                                }

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 40 }}
                                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                                        viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.1 }}
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
                                        transition={{ duration: 1.2, delay: (i % 6) * 0.08, ease }}
                                        key={img.id}
                                        className={wrapperClass}
                                    >
                                        <div className="absolute inset-0 w-full h-full">
                                            <img
                                                src={img.url}
                                                alt={img.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover object-top transform transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-[1.04]"
                                            />
                                            {/* Subtle inner border ring only */}
                                            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[inherit] pointer-events-none" />
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-2 lg:col-span-3 py-40 text-center flex flex-col items-center justify-center border border-white/[0.02] rounded-[3rem] bg-white/[0.01]"
                            >
                                <span className="w-16 h-16 rounded-full bg-white/[0.02] flex items-center justify-center mb-6">
                                    <FiSearch className="text-golden text-3xl opacity-50" />
                                </span>
                                <p className="text-golden font-light text-3xl md:text-5xl tracking-tight mb-4">No masterpieces found.</p>
                                <p className="text-white/40 tracking-widest uppercase text-xs">Try adjusting your category or search terms</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* CTA */}
            <div className="bg-[#020202] rounded-[4rem] md:rounded-[6rem] border border-white/[0.04] shadow-[0_-20px_100px_rgba(0,0,0,0.8)] relative overflow-hidden mx-2 md:mx-6 mb-24">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />
                <div className="relative z-10 pb-0 pt-16 mt-8">
                    <GetInTouch
                        title={projectsData.cta.title}
                        subtitle={projectsData.cta.subtitle}
                        buttonText={projectsData.cta.buttonText}
                    />
                </div>
            </div>
        </div>
    );
}
