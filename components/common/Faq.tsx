"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
    question: string;
    answer: string;
}

const Faq = ({ faqs }: { faqs: FAQItem[] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="py-10">
            <div className="container mx-auto max-w-4xl">
                
                {/* Premium Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-6">
                        Support & Info
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                        Frequently Asked <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 font-medium">
                            Questions.
                        </span>
                    </h3>
                </motion.div>

                {/* Sleek Accordion */}
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="border-b border-white/10"
                        >
                            <button
                                className="w-full py-8 md:py-10 flex justify-between items-center text-left focus:outline-none group"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4 className={`text-xl md:text-3xl font-light tracking-tight transition-colors duration-500 pr-8 ${activeIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                    {faq.question}
                                </h4>
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.01] group-hover:bg-white/[0.05] transition-all duration-500">
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {activeIndex === index ? (
                                            <FiMinus className="text-white text-xl" />
                                        ) : (
                                            <FiPlus className="text-white/50 group-hover:text-white text-xl transition-colors duration-500" />
                                        )}
                                    </motion.div>
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && faq.answer && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <p className="pb-10 text-lg md:text-xl font-light text-white/50 leading-relaxed pr-16 md:pr-24">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
