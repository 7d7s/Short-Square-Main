"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const consent = localStorage.getItem("shotsquare_cookie_consent");
        if (!consent) {
            // Delay showing the popup slightly for a cinematic entrance
            const timer = setTimeout(() => setShowConsent(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("shotsquare_cookie_consent", "true");
        setShowConsent(false);
    };

    const handleDecline = () => {
        // In a real MNC environment, declining would disable non-essential tracking scripts here
        localStorage.setItem("shotsquare_cookie_consent", "false");
        setShowConsent(false);
    };

    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 z-[999] md:max-w-md"
                >
                    {/* Glassmorphism Container */}
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col gap-5">

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.071 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-white text-base font-medium tracking-wide mb-2">Cookies & Privacy</h3>
                                <p className="text-white/50 text-[13px] leading-relaxed font-light">
                                    We use technical cookies to provide an ultra-premium experience and analyze site traffic. You can read our detailed <Link href="/cookie-policy" className="text-golden hover:text-white transition-colors underline underline-offset-4">Cookie Policy</Link> for more information.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 rounded-full hover:scale-[1.02] transition-transform duration-300"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-transparent text-white/70 border border-white/20 text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
                            >
                                Essential Only
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
