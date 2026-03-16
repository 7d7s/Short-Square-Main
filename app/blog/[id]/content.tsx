"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface ArticleProps {
    article: {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        author: string;
        role: string;
        date: string;
        readTime: string;
        coverImage: string;
        tags: string[];
    };
}

export default function BlogArticleContent({ article }: ArticleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll Physics
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // Measure full article read
    });

    // Reading Progress Bar (Smoothed)
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax
    const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], ["0px", "100px"]);

    return (
        <div ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-golden/30 relative" style={{ position: "relative" }}>

            {/* Immersive Reading Progress Bar */}
            {isMounted && (
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-golden origin-left z-[999]"
                    style={{ scaleX }}
                />
            )}

            {/* Cinematic Full Bleed Header */}
            <div className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden flex flex-col items-center justify-center">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full">
                    <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Radial Darkening for Text Pop */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.8)_100%)]" />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Absolute Center Title Stagger */}
                <div className="relative z-20 container mx-auto px-6 text-center pt-16 pb-32">
                    <motion.div
                        style={{ y: titleY }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        {/* Premium Tag Pill */}
                        <div className="flex gap-2 mb-8">
                            {article.tags.map(tag => (
                                <span key={tag} className="px-5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.3em] font-semibold shadow-2xl">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter font-light max-w-5xl [text-wrap:balance] drop-shadow-2xl">
                            {article.title}
                        </h1>
                    </motion.div>
                </div>

                {/* Floating Apple-Style Frosted Dock for Metadata */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="absolute bottom-12 z-30 w-full px-6 flex justify-center"
                >
                    <div className="flex items-center gap-6 md:gap-12 px-8 py-5 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">

                        {/* Author Profile */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/20 p-1 relative">
                                <Image src="/image/logo.png" alt={article.author} fill sizes="40px" className="object-cover rounded-full bg-black p-1.5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-medium tracking-wide">{article.author}</span>
                                <span className="text-[10px] text-golden uppercase tracking-widest mt-0.5">{article.role}</span>
                            </div>
                        </div>

                        <div className="w-[1px] h-8 bg-white/10 hidden md:block" />

                        {/* Date */}
                        <div className="hidden md:flex flex-col text-left">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Published</span>
                            <span className="text-sm font-light tracking-wide">{article.date}</span>
                        </div>

                        <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />

                        {/* Read Time */}
                        <div className="hidden sm:flex flex-col text-left">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Duration</span>
                            <span className="text-sm font-light tracking-wide">{article.readTime}</span>
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* MNC Grade Lateral Editorial Layout */}
            <div className="container mx-auto px-6 max-w-6xl pt-24 lg:pt-32 pb-32 relative z-30">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Lateral Sticky Column: Share & Actions */}
                    <div className="hidden lg:block w-[200px] shrink-0">
                        <div className="sticky top-32 flex flex-col gap-8 text-white/50">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-golden mb-4">Share Article</h4>
                                <div className="flex flex-col gap-3">
                                    <button className="text-left text-sm hover:text-white transition-colors">Twitter // X</button>
                                    <button className="text-left text-sm hover:text-white transition-colors">LinkedIn</button>
                                    <button className="text-left text-sm hover:text-white transition-colors">Copy Link</button>
                                </div>
                            </div>

                            <div className="w-full h-[1px] bg-white/10" />

                            <Link href="/blog" className="group flex items-center gap-3 w-fit">
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                                    <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold group-hover:text-white transition-colors">Back</span>
                            </Link>
                        </div>
                    </div>

                    {/* Main Content Column */}
                    <div className="flex-1 max-w-3xl">

                        {/* Standfirst / Excerpt Callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl md:text-3xl text-white/90 font-light leading-snug tracking-tight mb-20 relative"
                        >
                            <span className="absolute -left-6 md:-left-12 top-0 text-golden text-7xl font-serif opacity-30 leading-none">"</span>
                            {article.excerpt}
                        </motion.div>

                        {/* High-Fashion Markdown Prose */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="prose prose-invert prose-xl max-w-none 
                            prose-p:text-white/65 prose-p:font-light prose-p:leading-[1.9] prose-p:tracking-[0.015em] prose-p:mb-10
                            prose-headings:text-white prose-headings:font-light prose-headings:tracking-tight
                            prose-h3:text-4xl prose-h3:mt-24 prose-h3:mb-8 prose-h3:leading-tight
                            prose-blockquote:border-l-4 prose-blockquote:border-golden prose-blockquote:bg-white/[0.03] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:my-16 prose-blockquote:rounded-r-3xl prose-blockquote:font-medium prose-blockquote:text-white/85 prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:italic
                            prose-strong:text-white prose-strong:font-normal
                            prose-img:rounded-3xl prose-img:my-16 prose-img:w-full"
                        >
                            <ReactMarkdown>{article.content}</ReactMarkdown>
                        </motion.div>

                    </div>
                </div>
            </div>

        </div>
    );
}
