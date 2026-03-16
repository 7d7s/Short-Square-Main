"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Lock scroll during load
        document.body.style.overflow = "hidden";

        // Clean 1.2 second wait for a quick, sleek entrance
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = ""; // restore scroll
        }, 500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    const circleRadius = 24;
    const strokeWidth = 1.5;
    const circumference = 2 * Math.PI * circleRadius;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Faint luxury glow behind spinner */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-golden opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />

                    {/* Micro-sleek infinite tracking ring */}
                    <motion.div
                        className="relative flex items-center justify-center z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                    >
                        <svg
                            width={60}
                            height={60}
                            viewBox="0 0 60 60"
                            className="transform -rotate-90"
                        >
                            {/* Very faint background ring */}
                            <circle
                                cx="30"
                                cy="30"
                                r={circleRadius}
                                fill="none"
                                stroke="rgba(255,255,255,0.03)"
                                strokeWidth={strokeWidth}
                            />

                            {/* Gold swoosh tracking stroke */}
                            <circle
                                cx="30"
                                cy="30"
                                r={circleRadius}
                                fill="none"
                                stroke="#b4b2b5"
                                strokeWidth={strokeWidth}
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={circumference * 0.75} // Keeps exactly 25% of the ring drawn at all times
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
