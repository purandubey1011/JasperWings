import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw } from 'react-icons/fa';

const BookTableSection = () => {
  // --- Animation Variants ---

  // 1. Slow Background Zoom (Ken Burns Effect)
  const bgZoom = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // 2. Stagger Container for Content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // 3. Text Slide Up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // 4. Button Scale Animation
  const buttonHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative w-full h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          variants={bgZoom}
          animate="animate"
          className="w-full h-full bg-[url('/assets/booktable.jpg')] bg-no-repeat bg-cover bg-center"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </div>

      {/* --- Content Container --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Top "BOOK NOW" label */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 text-white text-md md:text-sm font-semibold mb-6 tracking-wider"
        >
          <img src="/assets/aboutteddy.png" alt="" className='h-5 drop-shadow-md' />
          <span className="uppercase tracking-[0.2em]">BOOK NOW</span>
        </motion.div>

        {/* Main Title */}
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 uppercase" 
          style={{ fontFamily: 'sans-serif', textShadow: '0px 4px 20px rgba(0,0,0,0.6)' }}
        >
          READY TO INDULGE? <br />
          BOOK YOUR <span className="text-yellow-500">TABLE NOW!</span>
        </motion.h2>

        {/* Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button 
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 bg-yellow-500 text-black font-black rounded-full shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300 uppercase tracking-widest text-sm"
          >
            ORDER NOW
          </motion.button>
          
          <motion.button 
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 bg-transparent text-white font-black border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            RESERVE TABLE
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookTableSection;