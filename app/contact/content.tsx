"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiCamera } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';
import Faq from '@/components/common/Faq';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

export default function ContactContent() {
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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const faqs: FAQItem[] = [
        {
            question: "How soon can I expect a response to my inquiry?",
            answer: "We typically respond to all inquiries within 24-48 hours during business days."
        },
        {
            question: "What's your cancellation policy?",
            answer: "We require at least 48 hours notice for cancellations. Late cancellations may incur a 50% fee."
        },
        {
            question: "Do you travel for photoshoots?",
            answer: "Yes, we offer location shoots with travel fees applicable beyond 25km from our studio."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, bank transfers, UPI payments, and cash."
        },
        {
            question: "How long does it take to receive the final photos?",
            answer: "Delivery time depends on the project scope, but typically 2-3 weeks after the shoot."
        }
    ];

    const services = [
        "Portraiture Photographer",
        "Wedding Photography",
        "Commercials Photography",
        "Event Photography",
        "Modelling",
        "Products Photographer"
    ];


    return (
        <div className="container mx-auto">
            <Banner
                title="Contact Us"
                description="Ready to collaborate? Reach out today and let’s create something truly memorable together."
                imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/d_pmkzwt.jpg"
            />

            {/* Contact Content */}
            <section className="py-0 md:py-20 rounded-3xl my-10 px-0 md:px-4 lg:px-6 text-white bg-transparent md:bg-primary-brown relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c8b390]">Touch</span>
                        </motion.h2>
                        <motion.p
                            className="max-w-2xl mx-auto text-white/80 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Ready to create something amazing? Reach out and let&apos;s start your photography journey.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-3">Send Us a Message</h3>
                                <p className="text-white/70">We&apos;ll get back to you within 24 hours</p>
                            </div>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 rounded-xl"
                                >
                                    <div className="flex items-center">
                                        <FiCheckCircle className="text-green-400 mr-2 text-xl" />
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-100 rounded-xl"
                                >
                                    <div className="flex items-center">
                                        <FiAlertCircle className="text-red-400 mr-2 text-xl" />
                                        Oops! Something went wrong. Please try again later.
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white font-medium mb-3 text-sm">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c8b390] focus:border-[#c8b390] transition-all duration-300"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-3 text-sm">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c8b390] focus:border-[#c8b390] transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-white font-medium mb-3 text-sm">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c8b390] focus:border-[#c8b390] transition-all duration-300"
                                        placeholder="What's this regarding?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-3 text-sm">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c8b390] focus:border-[#c8b390] transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 px-6 bg-gradient-to-br from-[#c8b390] to-[#9a8368] hover:from-[#9a8368] hover:to-[#c8b390] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                            Sending...
                                        </div>
                                    ) : (
                                        <>
                                            <FiSend className="mr-3" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

                                <div className="space-y-6">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c8b390] to-[#9a8368] flex items-center justify-center text-xl shadow-sm mr-4"
                                        >
                                            <FiMail className="text-white" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Email</h4>
                                            <p className="text-white/70 group-hover:text-white transition-colors">info@shortsquare.com</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c8b390] to-[#9a8368] flex items-center justify-center text-xl shadow-sm mr-4"
                                        >
                                            <FiPhone className="text-white" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Phone</h4>
                                            <p className="text-white/70 group-hover:text-white transition-colors">+91 8882758944</p>
                                            <p className="text-white/50 text-sm mt-1">Mon-Sat, 10AM-7PM</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c8b390] to-[#9a8368] flex items-center justify-center text-xl shadow-sm mr-4"
                                        >
                                            <FiMapPin className="text-white" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Studio Address</h4>
                                            <p className="text-white/70 group-hover:text-white transition-colors">Plot No 88, 3rd Floor, Kh No 12/02/1 Hari Vihar,</p>
                                            <p className="text-white/70 group-hover:text-white transition-colors">Kakrola, South West Delhi, New Delhi, 110078</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Services List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500"
                            >
                                <div className="p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                                    <h4 className="text-xl font-semibold text-white flex items-center">
                                        <FiCamera className="mr-3 text-[#c8b390] text-2xl" />
                                        Our Services
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {services.map((service, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                                className="flex items-center group cursor-default"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-[#c8b390] mr-3 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(200,179,144,0.6)]" />
                                                <span className="text-white/80 group-hover:text-white transition-colors duration-300 font-medium tracking-wide">
                                                    {service}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq faqs={faqs} />

            {/* CTA Section */}
            <GetInTouch
                title="Ready to Start Your Project?"
                subtitle="Get in touch with our team to discuss your ideas"
                buttonText="Contact us call"
            />
        </div>
    );
}
