"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle, FiAlertCircle, FiInstagram, FiLinkedin, FiTwitter, FiGlobe } from 'react-icons/fi';
import Faq from '@/components/common/Faq';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactContent() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
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
        <div className="bg-[#020202] min-h-screen text-white w-full overflow-x-hidden font-sans selection:bg-white selection:text-black relative">
            
            {/* Ambient Background Orbs */}
            <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none mix-blend-screen" />

            {/* Navigation Spacer */}
            <div className="h-32 w-full" />

            <main className="max-w-[1800px] mx-auto px-6 lg:px-16 pb-40 relative z-10">
                
                {/* Ultra-Modern Hero */}
                <header className="pt-20 pb-32 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-8">
                            Start a Conversation
                        </h2>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter leading-[1.05] text-white">
                            Let's build something <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                                extraordinary.
                            </span>
                        </h1>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Ultra-Sleek Minimalist Form (Left) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 lg:pr-12"
                    >
                        {submitStatus === 'success' && (
                            <div className="mb-12 p-6 bg-white/[0.02] border-l-4 border-green-500 flex items-start">
                                <div>
                                    <h4 className="text-white text-lg font-medium mb-1">Inquiry Submitted</h4>
                                    <p className="text-white/50 font-light">We have received your message and will be in touch shortly.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-12 p-6 bg-red-500/5 border-l-4 border-red-500 flex items-start">
                                <div>
                                    <h4 className="text-red-400 text-lg font-medium mb-1">Transmission Error</h4>
                                    <p className="text-red-400/60 font-light">We encountered an issue. Please try again or email us directly.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group relative">
                                    <input 
                                        type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-white/20 focus:outline-none transition-all font-light text-2xl md:text-3xl" 
                                        placeholder="Full Name" 
                                    />
                                    {/* Animated focus line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:w-full" />
                                </div>

                                <div className="group relative">
                                    <input 
                                        type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-white/20 focus:outline-none transition-all font-light text-2xl md:text-3xl" 
                                        placeholder="Email Address" 
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:w-full" />
                                </div>
                            </div>

                            <div className="group relative">
                                <input 
                                    type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-white/20 focus:outline-none transition-all font-light text-2xl md:text-3xl" 
                                    placeholder="Project Subject" 
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:w-full" />
                            </div>

                            <div className="group relative">
                                <textarea 
                                    id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-white/20 focus:outline-none transition-all font-light text-2xl md:text-3xl resize-none" 
                                    placeholder="Tell us about your vision..." 
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:w-full" />
                            </div>

                            <div className="pt-8 flex justify-end">
                                <motion.button 
                                    type="submit" disabled={isSubmitting} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className={`bg-white text-black font-semibold rounded-full px-12 py-5 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3" />
                                            Processing
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Request <FiArrowUpRight className="ml-4 text-lg" />
                                        </span>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Massive Typography Contact Details (Right) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col justify-center space-y-20 pt-10 lg:pt-0"
                    >
                        {/* Direct Line */}
                        <div className="group cursor-pointer">
                            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-4 group-hover:text-white/50 transition-colors">Direct Email</h4>
                            <a href="mailto:info@shotsquare.com" className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-white/80 group-hover:text-white transition-colors flex items-center">
                                info@shotsquare.com
                            </a>
                        </div>

                        {/* Phone Line */}
                        <div className="group cursor-pointer">
                            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-4 group-hover:text-white/50 transition-colors">Global Phone</h4>
                            <a href="tel:+918585906629" className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-white/80 group-hover:text-white transition-colors flex items-center">
                                +91 8585 906 629
                            </a>
                        </div>

                        {/* Location */}
                        <div>
                            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-4">Headquarters</h4>
                            <p className="text-2xl md:text-3xl font-light tracking-tight text-white/60 leading-relaxed">
                                Hari Vihar, Kakrola<br/>
                                New Delhi, 110078
                            </p>
                        </div>

                        {/* Minimalist Social Links */}
                        <div className="pt-10 border-t border-white/10">
                            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-8">Networks</h4>
                            <div className="flex gap-6">
                                {[
                                    { icon: <FiInstagram />, label: "Instagram", href: "https://www.instagram.com/shotsquare_media/" },
                                    { icon: <FiLinkedin />, label: "LinkedIn", href: "#" },
                                    { icon: <FiTwitter />, label: "Twitter", href: "#" },
                                    { icon: <FiGlobe />, label: "Website", href: "#" },
                                ].map((social, idx) => (
                                    <motion.a 
                                        key={idx}
                                        href={social.href}
                                        target={social.href !== "#" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white bg-white/[0.01] hover:bg-white/[0.05] transition-colors relative overflow-hidden group"
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.85 }}
                                    >
                                        <span className="text-xl md:text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Cinematic Parallax Break */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] md:h-[80vh] mt-40 overflow-hidden group"
                >
                    <div 
                        className="absolute inset-0 w-full h-[120%] bg-[url('https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/camera_q8ak7w.jpg')] bg-cover bg-center bg-fixed grayscale opacity-40 transition-opacity duration-1000 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-white/50 mb-8">
                                The Standard
                            </p>
                            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter text-white leading-[1.1]">
                                Uncompromising <br className="hidden md:block"/> 
                                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                                    Quality.
                                </span>
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>

                {/* FAQs */}
                <div className="mt-20">
                    <Faq faqs={faqs} />
                </div>
            </main>
        </div>
    );
}
