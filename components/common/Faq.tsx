"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface FAQItem {
    question: string;
    answer: string;
}


const Faq = ({ faqs }: { faqs: FAQItem[] }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <section className="pb-5 px-4">
            <div className="container mx-auto grid lg:grid-cols-2">
            <motion.div
                    className="text-left mt-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        F<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">AQs</span>
                    </motion.h2>
                    <motion.p
                        className="text-white/80 text-xl mb-8 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Got questions? {"We’ve"} got answers to help you understand our process, pricing, and more.
                    </motion.p>
                </motion.div>

                <div className="space-y-4 mt-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`md:p-7 p-5 rounded-2xl dark:border-white border-black border ${activeIndex === index ? '' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center cursor-pointer">
                                <div className="flex items-center space-x-6">
                                    <h3 className="text-xl text-green-dark">{faq.question}</h3>
                                </div>
                                {activeIndex === index ? (
                                    <IoIosArrowUp className="text-green-dark" size={25} />
                                ) : (
                                    <IoIosArrowDown className="text-green-dark" size={25} />
                                )}
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && faq.answer && (
                                    <motion.p
                                        className="mt-2 dark:text-gray-300 text-balck"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Faq;
