"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Fast precise original cursor
  const cursorX = useSpring(-100, { stiffness: 800, damping: 28, mass: 0.1 });
  const cursorY = useSpring(-100, { stiffness: 800, damping: 28, mass: 0.1 });

  // Flawless tail components
  const tail1X = useSpring(-100, { stiffness: 400, damping: 25, mass: 0.1 });
  const tail1Y = useSpring(-100, { stiffness: 400, damping: 25, mass: 0.1 });
  
  const tail2X = useSpring(-100, { stiffness: 250, damping: 22, mass: 0.1 });
  const tail2Y = useSpring(-100, { stiffness: 250, damping: 22, mass: 0.1 });
  
  const tail3X = useSpring(-100, { stiffness: 150, damping: 20, mass: 0.1 });
  const tail3Y = useSpring(-100, { stiffness: 150, damping: 20, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      tail1X.set(e.clientX);
      tail1Y.set(e.clientY);
      tail2X.set(e.clientX);
      tail2Y.set(e.clientY);
      tail3X.set(e.clientX);
      tail3Y.set(e.clientY);
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (target) {
        const style = window.getComputedStyle(target);
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          style.cursor === 'pointer' ||
          target.closest('a') || 
          target.closest('button')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, tail1X, tail1Y, tail2X, tail2Y, tail3X, tail3Y]);

  // Hide system cursor on desktop if this is active
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @media (pointer: fine) {
        *:not(input):not(textarea) {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  return (
    // Single wrapper handles the mix-blend-difference so overlapping white dots combine into a smooth smear, instead of inverting each other.
    <div className="fixed inset-0 pointer-events-none z-[99999] mix-blend-difference hidden md:block">
      
      {/* Tail 3 */}
      <motion.div 
        style={{ x: useTransform(tail3X, v => v - 8), y: useTransform(tail3Y, v => v - 8) }}
        animate={{ scale: isHovering ? 5 : 1, opacity: isHovering ? 0 : 0.15 }}
        className="absolute top-0 left-0 w-[16px] h-[16px] bg-white rounded-full"
      />
      {/* Tail 2 */}
      <motion.div 
        style={{ x: useTransform(tail2X, v => v - 12), y: useTransform(tail2Y, v => v - 12) }}
        animate={{ scale: isHovering ? 5 : 1, opacity: isHovering ? 0 : 0.3 }}
        className="absolute top-0 left-0 w-[24px] h-[24px] bg-white rounded-full"
      />
      {/* Tail 1 */}
      <motion.div 
        style={{ x: useTransform(tail1X, v => v - 16), y: useTransform(tail1Y, v => v - 16) }}
        animate={{ scale: isHovering ? 5 : 1, opacity: isHovering ? 0 : 0.6 }}
        className="absolute top-0 left-0 w-[32px] h-[32px] bg-white rounded-full"
      />

      {/* Main Original Cursor */}
      <motion.div 
        style={{ x: useTransform(cursorX, v => v - 16), y: useTransform(cursorY, v => v - 16) }}
        animate={{
          scale: isHovering ? 5 : 1, // Expands over links
          opacity: 1
        }}
        initial={{ opacity: 0 }}
        className="absolute top-0 left-0 w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center"
      >
        {/* Spinning Text around the cursor */}
        <motion.svg 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 100 100" 
          className={`absolute w-[250%] h-[250%] transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
        >
          <path id="cursorTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
          <text className="text-[12px] font-bold uppercase tracking-[0.3em] fill-white">
            <textPath href="#cursorTextPath" startOffset="0%">
              EXPLORE • EXPLORE • 
            </textPath>
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}
