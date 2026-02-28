"use client";
import { FaCamera, FaLightbulb, FaRulerCombined, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ImageCard from '@/components/common/GalleryCard';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch'

import React from 'react';
import studioData from '@/data/studio.json';

const iconMap: Record<string, React.ReactNode> = {
    FaCamera: <FaCamera className="text-white text-3xl md:text-4xl" />,
    FaLightbulb: <FaLightbulb className="text-white text-3xl md:text-4xl" />,
    FaRulerCombined: <FaRulerCombined className="text-white text-3xl md:text-4xl" />,
    FaWifi: <FaWifi className="text-white text-3xl md:text-4xl" />,
    FaParking: <FaParking className="text-white text-3xl md:text-4xl" />,
    FaCoffee: <FaCoffee className="text-white text-3xl md:text-4xl" />
};

export default function StudioContent() {

    return (
        <div className="container mx-auto overflow-x-hidden">
            {/* Banner Section */}
            <Banner
                title={studioData.banner.title}
                description={studioData.banner.description}
                imageUrl={studioData.banner.imageUrl}
            />

            {/* Studio Features section with ambient background glow */}
            <section className="py-24 my-6 px-4 md:px-12 lg:px-20 text-white relative">
                {/* Immersive Background Decor */}
                <div className="absolute inset-0 bg-[#0f0e0d] rounded-[3rem] shadow-2xl overflow-hidden -z-10 border border-white/5">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8b390] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#756447] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <motion.div
                    className="text-center mb-24 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.p
                        className="text-[#c8b390] font-medium tracking-[0.2em] uppercase text-sm mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Unrivaled Excellence
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight font-serif"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {studioData.features.section.titleRest}{" "}
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-[#f8f0dd] via-[#c8b390] to-[#756447]">
                            {studioData.features.section.titleHighlight}
                        </span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {studioData.features.section.description}
                    </motion.p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                        },
                    }}
                >
                    {studioData.features.items.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                },
                            }}
                            className="group relative h-full flex flex-col pt-8 sm:pr-8"
                        >
                            {/* Minimalist Top Border */}
                            <div className="absolute top-0 left-0 right-8 h-[1px] bg-white/10 group-hover:bg-[#c8b390] transition-colors duration-700" />

                            {/* Animated Glint on Hover */}
                            <div className="absolute top-0 left-0 w-0 h-[1px] bg-white group-hover:w-16 transition-all duration-[800ms] ease-out" />

                            <div className="flex flex-col h-full relative z-20">

                                <div className="flex justify-between items-start mb-8 w-full">
                                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide max-w-[70%] leading-tight group-hover:text-[#c8b390] transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    <div className="text-white/40 group-hover:text-[#c8b390] transition-all duration-500 transform group-hover:scale-110">
                                        {iconMap[feature.iconName]}
                                    </div>
                                </div>

                                <p className="text-white/50 leading-relaxed font-light text-sm md:text-base group-hover:text-white/80 transition-colors duration-500 mt-auto">
                                    {feature.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <style jsx>{`
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.1); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 10s ease-in-out infinite;
    }
  `}</style>
            </section>


            {/* Gallery Section */}
            <section className="py-20 mb-12">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="max-w-xl">
                            <motion.p
                                className="text-[#c8b390] font-medium tracking-[0.2em] uppercase text-sm mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Portfolio
                            </motion.p>
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight font-serif"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                {studioData.gallery.section.titleRest} <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e8d5b5] to-[#c8b390]">{studioData.gallery.section.titleHighlight}</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-[#c8b390] to-transparent mb-6"
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {studioData.gallery.images.map((img) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <ImageCard img={img} />
                            </motion.div>
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
