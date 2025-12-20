import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // --- Animation Variants ---

  // 1. Slow, breathing background zoom
  const bgZoom = {
    initial: { scale: 1 },
    animate: {
      scale: 1.15,
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  // 2. Cinematic Mask Reveal (Text rises from invisible floor)
  const maskReveal = {
    hidden: { y: "110%", rotateX: -20 },
    visible: {
      y: "0%",
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom luxury easing
      },
    },
  };

  // 3. Stagger Container
  const containerStagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // 4. "Heat" Text Pulse
  const heatPulse = {
    animate: {
      textShadow: [
        "0px 0px 0px rgba(255, 69, 0, 0)",
        "0px 0px 30px rgba(255, 69, 0, 0.8)",
        "0px 0px 0px rgba(255, 69, 0, 0)"
      ],
      color: ["#ffffff", "#ffecd2", "#ffffff"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // 5. Ember Particle Animation (Floating sparks)
  const emberAnim = (i) => ({
    animate: {
      y: [0, -200 - Math.random() * 100],
      x: [0, (Math.random() - 0.5) * 50],
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 1.5 + 0.5, 0],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* --- BACKGROUND WITH ZOOM --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          variants={bgZoom}
          initial="initial"
          animate="animate"
          className="w-full h-full"
        >
          <img 
            src="/assets/franchiseImg.png" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-90"></div>
      </div>

      {/* --- CUSTOM "EMBER" PARTICLES --- */}
      {/* This creates floating fire sparks in the background */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={emberAnim}
            animate="animate"
            className="absolute bg-[#d96828] rounded-full blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              bottom: "-10%",
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20"
      >
        {/* Top Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-2 mb-6 text-sm font-bold tracking-[0.2em] text-[#d96828] border border-[#d96828]/30 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm"
        >
          <span className="text-xl animate-pulse">☕</span> FRANCHISE JASPER WINGS
        </motion.div>

        {/* HEADLINE - Masked Reveal */}
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 leading-[1.1] text-white drop-shadow-2xl">
          <div className="overflow-hidden">
            <motion.div variants={maskReveal} className="flex justify-center gap-3">
              <span>Bring</span> <span>the</span> 
              
              {/* "HEAT" with Special Effect */}
              <motion.span 
                variants={heatPulse} 
                animate="animate"
                className="text-white italic relative"
              >
                Heat
                {/* Fire glow underlay */}
                <span className="absolute inset-0 blur-lg bg-[#d96828]/50 -z-10 rounded-full opacity-50"></span>
              </motion.span>
            </motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.div variants={maskReveal} className="block text-gray-200">
              To Your City
            </motion.div>
          </div>
        </h1>

        {/* Description - Fade Up */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-300 max-w-lg mx-auto mb-10 text-sm md:text-lg font-medium leading-relaxed"
        >
          Fast-Casual. High-Demand. Proven Model. <br/>
          <span className="text-white font-semibold">We're Expanding Across Canada.</span>
        </motion.p>

        {/* CTA Button - Elastic Pop */}
        <motion.div
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <button className="relative group bg-[#d96828] text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Apply For Franchise
            </span>
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HeroSection;