"use client";
import { FaCamera, FaLightbulb, FaRulerCombined, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageCard from '@/components/common/GalleryCard';
import GetInTouch from '@/components/getInTouch';

import React, { useRef } from 'react';
import studioData from '@/data/studio.json';

const iconMap: Record<string, React.ReactNode> = {
    FaCamera: <FaCamera className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />,
    FaLightbulb: <FaLightbulb className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />,
    FaRulerCombined: <FaRulerCombined className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />,
    FaWifi: <FaWifi className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />,
    FaParking: <FaParking className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />,
    FaCoffee: <FaCoffee className="text-white/40 text-2xl group-hover:text-white transition-colors duration-700" />
};

const ease = [0.16, 1, 0.3, 1];

// Ultra-Sleek List Component
const FeatureRow = ({ feature, index }: { feature: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px", amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.1, ease }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 md:py-16 border-b border-white/[0.04] hover:bg-white/[0.01] px-6 md:px-12 transition-colors duration-700 cursor-default"
        >
            <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                {/* Minimal Dark Icon Box */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] border border-white/[0.05] flex items-center justify-center bg-[#030303] shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)] group-hover:border-golden/30 transition-all duration-700 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <motion.div
                        className="relative z-10"
                        whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.8, ease }}
                    >
                        {iconMap[feature.iconName]}
                    </motion.div>
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-golden transition-all duration-700">
                    {feature.title}
                </h3>
            </div>

            <p className="text-white/30 leading-relaxed font-light text-base md:text-lg max-w-md group-hover:text-white/60 transition-colors duration-700 md:text-right mt-4 md:mt-0">
                {feature.description}
            </p>
        </motion.div>
    );
};

export default function StudioContent() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <div className="bg-black min-h-screen text-white w-full overflow-hidden font-sans">
            {/* Cinematic Hero Section - Floating with Parallax */}
            <section ref={heroRef} className="relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto mt-2 md:mt-4 h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/[0.05] shadow-[0_20px_100px_rgba(0,0,0,0.8)] bg-[#050505]">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2.5, ease }}
                        src={studioData.banner.imageUrl}
                        alt="Studio"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center mt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1.5, ease }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-golden animate-pulse shadow-[0_0_10px_rgba(var(--golden-rgb),0.5)]" />
                        <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-white/70">
                            Welcome to ShotSquare
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.2, ease }}
                        className="text-[18vw] md:text-[15vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 leading-[0.75] pb-4"
                    >
                        STUDIO
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1.5, ease }}
                        className="max-w-xl mx-auto text-white/50 text-base md:text-xl font-light leading-relaxed mt-6 tracking-wide"
                    >
                        {studioData.banner.description}
                    </motion.p>
                </div>
            </section>

            {/* Cinematic Gallery Section - Lazy Loaded */}
            <section className="py-24 md:py-32 mt-8 md:mt-16 mb-12 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <div className="max-w-3xl">
                            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-[0.9] mb-6">
                                The <span className="italic font-serif text-golden">Portfolio</span>
                            </h2>
                            <p className="text-white/40 text-lg md:text-xl font-light max-w-lg">
                                Explore a curated selection of our finest cinematic captures and bespoke photography.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
                        {studioData.gallery.images.map((img, i) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "50px", amount: 0.1 }} // Lazy load threshold
                                transition={{ duration: 1, delay: (i % 4) * 0.1, ease }}
                                className="group cursor-pointer rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/[0.03] transform transition-transform duration-700 ease-out hover:scale-[1.02] bg-[#080808]"
                            >
                                <ImageCard img={img} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ultra-Sleek Minimalist Features List */}
            <section className="py-32 md:py-48 px-4 md:px-8 lg:px-12 relative max-w-[1600px] mx-auto bg-[#020202] rounded-[4rem] md:rounded-[6rem] border border-white/[0.03] mb-24 shadow-[0_-20px_100px_rgba(0,0,0,0.5)] mx-2 md:mx-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-golden opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        className="mb-24 md:mb-32 flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <p className="text-golden font-semibold tracking-[0.3em] uppercase text-[11px] mb-6">
                            Excellence Engineered
                        </p>
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.95] text-center md:text-left">
                            {studioData.features.section.titleRest}{" "}
                            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-golden to-white/40 block md:inline mt-2 md:mt-0">
                                {studioData.features.section.titleHighlight}
                            </span>
                        </h2>
                    </motion.div>

                    {/* Highly Refined List Layout */}
                    <div className="flex flex-col border-t border-white/[0.04]">
                        {studioData.features.items.map((feature, index) => (
                            <FeatureRow key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <GetInTouch
                title={studioData.cta.title}
                subtitle={studioData.cta.subtitle}
                buttonText={studioData.cta.buttonText}
            />
        </div>
    );
}
