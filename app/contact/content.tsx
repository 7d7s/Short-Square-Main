"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import GetInTouch from '@/components/getInTouch';
import Faq from '@/components/common/Faq';

const ease = [0.16, 1, 0.3, 1];

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactContent() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const faqs = [
        {
            question: "How soon can I expect a response to my inquiry?",
            answer: "We typically respond to all inquiries within 24-48 hours during business days."
        },
        {
            question: "Do you travel for photoshoots?",
            answer: "Yes, we offer location shoots with travel fees applicable beyond 25km from our studio."
        }
    ];

    return (
        <div className="bg-[#050505] min-h-screen text-white w-full overflow-hidden font-sans">
            {/* Cinematic Hero Section - Floating with Parallax */}
            <section ref={heroRef} className="relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto mt-2 md:mt-4 h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/[0.05] shadow-[0_20px_100px_rgba(0,0,0,0.8)] bg-[#050505] z-10">
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
                        src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/d_pmkzwt.jpg"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1.5, ease }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-golden animate-pulse shadow-[0_0_10px_rgba(var(--golden-rgb),0.5)]" />
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
                            Available Worldwide
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.2, ease }}
                        className="text-[14vw] sm:text-[14vw] md:text-[13vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 leading-[0.75] pb-4 uppercase"
                    >
                        Connect
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1.5, ease }}
                        className="max-w-xl mx-auto text-white/50 text-base md:text-xl font-light leading-relaxed mt-6 tracking-wide"
                    >
                        Ready to collaborate? Reach out today and let’s create something truly memorable together.
                    </motion.p>
                </div>
            </section>

            {/* Ultra-Premium Glassmorphism Data Matrix */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 relative max-w-[1600px] mx-auto z-20 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Left Col: Contact Info (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease }}
                            className="bg-[#080808] border border-white/[0.04] rounded-3xl p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors duration-700 h-full flex flex-col justify-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-light text-white mb-10 tracking-tight">Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">Line</span></h3>

                            <div className="space-y-10 focus-within:outline-none">
                                <motion.a
                                    href="mailto:info@shotsquare.com"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.4, ease }}
                                    className="flex items-start group relative"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-xl mr-6 group-hover:border-golden/30 group-hover:bg-golden/5 transition-all duration-500">
                                        <FiMail className="text-golden group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">Email</h4>
                                        <p className="text-lg md:text-xl text-white font-light group-hover:text-golden transition-colors duration-500">info@shortsquare.com</p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="tel:+918882758944"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.4, ease }}
                                    className="flex items-start group relative"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-xl mr-6 group-hover:border-golden/30 group-hover:bg-golden/5 transition-all duration-500">
                                        <FiPhone className="text-golden group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">Phone</h4>
                                        <p className="text-lg md:text-xl text-white font-light group-hover:text-golden transition-colors duration-500">+91 8882758944</p>
                                        <p className="text-white/30 text-xs mt-2 uppercase tracking-wider font-medium">Mon-Sat, 10AM-7PM</p>
                                    </div>
                                </motion.a>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.4, ease }}
                                    className="flex items-start group relative cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-xl mr-6 group-hover:border-golden/30 group-hover:bg-golden/5 transition-all duration-500">
                                        <FiMapPin className="text-golden group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">Headquarters</h4>
                                        <p className="text-sm text-white/90 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                                            Plot No 88, 3rd Floor, Kh No 12/02/1 Hari Vihar,<br />
                                            Kakrola, South West Delhi, New Delhi, 110078
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Col: Deep Dark Glass Form (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease }}
                        className="lg:col-span-3 bg-[#0a0a0a]/50 backdrop-blur-[40px] border border-white/[0.05] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[inset_0_2px_20px_rgba(255,255,255,0.01),0_30px_60px_rgba(0,0,0,0.5)]"
                    >
                        {/* Glow Behind Form */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-golden/10 blur-[120px] rounded-full pointer-events-none" />

                        <div className="mb-10 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Send a Transmission</h3>
                            <p className="text-white/40 font-light text-sm tracking-wide">Secure channel initialized. Awaiting your coordinates.</p>
                        </div>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-8 p-6 bg-[#0a0f0a] border border-[#1a331a] rounded-2xl flex items-start"
                            >
                                <FiCheckCircle className="text-[#33ff33] text-2xl mr-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#33ff33] font-medium mb-1">Transmission Received</h4>
                                    <p className="text-[#33ff33]/50 text-sm font-light">Your message has been securely delivered to our mainframe. We will respond shortly.</p>
                                </div>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-8 p-6 bg-[#1a0a0a] border border-[#331111] rounded-2xl flex items-start"
                            >
                                <FiAlertCircle className="text-[#ff3333] text-2xl mr-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ff3333] font-medium mb-1">Transmission Failed</h4>
                                    <p className="text-[#ff3333]/50 text-sm font-light">Interference detected. Please check your connection and try again.</p>
                                </div>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 group-focus-within:text-golden transition-colors duration-500">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-golden/50 focus:bg-white/[0.04] transition-all duration-500 font-light text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 group-focus-within:text-golden transition-colors duration-500">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-golden/50 focus:bg-white/[0.04] transition-all duration-500 font-light text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="subject" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 group-focus-within:text-golden transition-colors duration-500">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-golden/50 focus:bg-white/[0.04] transition-all duration-500 font-light text-sm"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/40 group-focus-within:text-golden transition-colors duration-500">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-golden/50 focus:bg-white/[0.04] transition-all duration-500 font-light text-sm resize-none"
                                    placeholder="Tell us the specifics..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-5 px-8 bg-white text-black font-semibold tracking-wide rounded-2xl mt-4 transition-all duration-500 flex items-center justify-center hover:bg-golden hover:text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center text-sm">
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3" />
                                        TRANSMITTING...
                                    </div>
                                ) : (
                                    <span className="flex items-center text-sm uppercase tracking-[0.2em]">
                                        <FiSend className="mr-3" /> Initialize Request
                                    </span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Sub-Section: FAQ Overhaul */}
            <div className="mt-8 relative z-20">
                <Faq faqs={faqs} />
            </div>

            {/* CTA Applet */}
            <div className="bg-[#020202] rounded-[4rem] md:rounded-[6rem] border border-white/[0.04] shadow-[0_-20px_100px_rgba(0,0,0,0.8)] relative overflow-hidden mx-2 md:mx-6 mb-24 mt-20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />
                <div className="relative z-10 pb-0 pt-16 mt-8">
                    <GetInTouch
                        title="Ready to Capture Brilliance?"
                        subtitle="Initiate contact with our producers to construct a roadmap for your vision."
                        buttonText="Secure Meeting"
                    />
                </div>
            </div>
        </div>
    );
}
