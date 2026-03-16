"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import blogData from "@/data/blog.json";

export default function BlogContent() {
    const [activeTag, setActiveTag] = useState<string>("All");

    // Extract all unique tags dynamically from the JSON
    const allTags = ["All", ...Array.from(new Set(blogData.articles.flatMap((a) => a.tags)))];

    // Filter articles based on active tag
    const filteredArticles = activeTag === "All"
        ? blogData.articles
        : blogData.articles.filter((a) => a.tags.includes(activeTag));

    return (
        <div className="bg-[#050505] min-h-screen pt-32 pb-24 text-white selection:bg-golden/30 relative overflow-hidden">

            {/* Background Cinematic Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-golden opacity-[0.015] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-white opacity-[0.01] blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Massive Editorial Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-28 border-b border-white/[0.05] pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                                Editorial & Philosophy
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6 leading-[0.9]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">Journal</span>
                        </h1>
                        <p className="text-white/40 font-light text-lg md:text-xl tracking-wide max-w-xl leading-relaxed">
                            Examine the technical frameworks, editorial campaigns, and visual philosophy driving our studio.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Pill Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-wrap gap-3 mb-16"
                >
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 border ${activeTag === tag
                                ? "bg-white text-black border-white"
                                : "bg-white/[0.02] text-white/50 border-white/[0.05] hover:bg-white/[0.08] hover:text-white"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Glassmorphism Masonry Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: index * 0.05 // Stagger reveal
                                }}
                                className={`group relative flex flex-col h-full bg-[#0a0a0a] rounded-[2rem] border border-white/[0.03] overflow-hidden hover:border-white/[0.1] transition-all duration-700 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                            >
                                <Link href={`/blog/${article.id}`} className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden rounded-[2rem]">

                                    {/* Image Block */}
                                    <div className={`relative w-full overflow-hidden ${index === 0 ? 'h-[400px] md:h-[500px]' : 'h-[300px]'}`}>
                                        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
                                        <Image
                                            src={article.coverImage}
                                            alt={article.title}
                                            fill
                                            className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Read Time Tag Overlay */}
                                        <div className="absolute top-6 left-6 z-20">
                                            <div className="backdrop-blur-md bg-black/40 border border-white/10 px-4 py-1.5 rounded-full">
                                                <span className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium">
                                                    {article.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Block */}
                                    <div className="flex flex-col flex-grow p-8 md:p-10 relative z-20 bg-[#0a0a0a] rounded-b-[2rem]">

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {article.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-golden text-[10px] uppercase tracking-[0.2em] font-semibold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className={`font-light tracking-tight text-white group-hover:text-golden transition-colors duration-500 mb-4 ${index === 0 ? 'text-3xl md:text-5xl leading-[1.1]' : 'text-2xl leading-[1.2]'}`}>
                                            {article.title}
                                        </h2>

                                        <p className="text-white/40 font-light leading-relaxed text-[15px] mb-8 line-clamp-2 md:line-clamp-3 flex-grow">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
                                            <div className="flex flex-col">
                                                <span className="text-white/80 text-xs font-medium uppercase tracking-wider">{article.author}</span>
                                                <span className="text-white/30 text-[10px] tracking-wide mt-1">{article.date}</span>
                                            </div>

                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                <svg className="w-4 h-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full py-32 flex flex-col items-center justify-center text-center border border-white/[0.05] rounded-[2rem] bg-white/[0.01]"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6">
                            <span className="text-white/30 text-2xl font-light">!</span>
                        </div>
                        <h3 className="text-xl text-white font-medium tracking-wide mb-2">No Articles Found</h3>
                        <p className="text-white/40 tracking-wide">Adjust your filters to discover our editorial content.</p>
                        <button
                            onClick={() => setActiveTag("All")}
                            className="mt-8 px-8 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform duration-500"
                        >
                            View All
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
