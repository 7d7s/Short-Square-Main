"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

export default function NotFoundPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  return (
    <motion.div 
      className="min-h-screen rounded-xl mb-5 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden opacity-20"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl opacity-70"
          variants={floatingVariants}
          animate="float"
          style={{ y: 0 }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl opacity-70"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Content with staggered animations */}
      <motion.div 
        className="relative z-10 max-w-2xl"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          variants={itemVariants}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-semibold mb-6"
          variants={itemVariants}
        >
          Frame Not Found
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8"
          variants={itemVariants}
        >
          The shot{" you're"} looking for seems to be out of focus. 
          Maybe it was cropped or never developed. {"Let's"} find you 
          a better angle.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link 
              href={'/'}
              className="px-6 py-3 border bg-gradient-to-r from-primary-gunmetal to-primary-umber rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Return to Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      

    
    </motion.div>
  );
}