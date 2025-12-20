import React from "react";
import { Utensils } from "lucide-react";
import { motion } from "framer-motion";

const MenuHero = () => {
  // --- Animation Variants ---

  // 1. Camera Focus Effect (Blur -> Sharp + Zoom)
  const heroImageAnim = {
    hidden: { scale: 1.2, filter: "blur(10px)", opacity: 0 },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      opacity: 0.7, // Matching your CSS opacity
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // 2. "Masked Reveal" - Text slides up from invisible box
  const maskReveal = {
    hidden: { y: "110%", rotateX: -20 }, // Starts below and slightly tilted
    visible: {
      y: "0%",
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // "Apple-style" smooth easing
      },
    },
  };

  // 3. Stagger Container
  const containerStagger = {
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  // 4. Elastic Button Pop
  const buttonPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div
      className="relative lg:h-screen md:h-[70vh] w-full bg-neutral-900 overflow-hidden
                 /* MOBILE: ensure hero fits mobile viewport and scales */
                 max-sm:h-[85vh] max-sm:flex max-sm:items-start max-sm:pt-6"
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/assets/menuhero.jpg"
          alt="Food Background"
          variants={heroImageAnim}
          initial="hidden"
          animate="visible"
          className="w-full h-full object-cover
                     /* MOBILE: stronger cover */
                     max-sm:object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-neutral-950/10
                     /* MOBILE: overlay */
                     max-sm:from-black/30 max-sm:via-black/30 max-sm:to-neutral-950/20"
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerStagger}
        className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center
                   /* MOBILE: tighter layout */
                   max-sm:justify-center max-sm:pt-12 max-sm:items-center max-sm:px-6"
      >
        {/* Tagline - Simple Fade */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white font-medium tracking-widest text-sm md:text-base mb-4 uppercase flex items-center justify-center
                     /* MOBILE tagline size */
                     max-sm:text-[12px] max-sm:mb-3"
        >
          <Utensils size={20} strokeWidth={1.5} className="mr-2" /> Menu
        </motion.span>

        {/* --- CINEMATIC MASKED HEADING --- */}
        <h1
          className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg
                     /* MOBILE heading size */
                     max-sm:text-[38px] max-sm:leading-[42px] max-sm:mb-4"
        >
          {/* Line 1: Pick Your */}
          <div className="overflow-hidden relative block pb-2">
            <motion.div variants={maskReveal} className="block origin-bottom">
              Pick Your
            </motion.div>
          </div>

          {/* Line 2: Craving (Gradient) */}
          <div className="overflow-hidden relative block">
            <motion.div variants={maskReveal} className="block origin-bottom">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e380f] via-[#ab4e19] to-[#d97d48] bg-[length:200%_auto] animate-gradient-flow">
                Craving
              </span>
            </motion.div>
          </div>
        </h1>

        {/* Description - Fade Up */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mb-8 text-sm md:text-lg
                     /* MOBILE subtitle */
                     max-sm:text-[13px] max-sm:leading-5 max-sm:mb-6 max-sm:px-4 max-sm:max-w-[86vw]"
        >
          Wings, tenders, burgers & fries — all fresh, hot & ready to fire.
        </motion.p>

        {/* Buttons - Elastic Pop */}
        <div
          className="flex gap-4 items-center mt-2
                     /* MOBILE: stack buttons */
                     max-sm:flex-col max-sm:w-full max-sm:items-center max-sm:gap-3"
        >
          <motion.button
            variants={buttonPop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d96828] hover:bg-[#d96828] text-black font-bold py-3 px-6 md:px-8 rounded-full shadow-[0_8px_30px_rgba(251,191,36,0.18)]
                       /* MOBILE button */
                       max-sm:w-[86%] max-sm:py-4 max-sm:text-[16px] max-sm:rounded-[9999px]"
          >
            ORDER NOW
          </motion.button>

          <motion.button
            variants={buttonPop}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/40 text-white/90 px-6 md:px-8 py-3 rounded-full font-semibold transition
                       /* MOBILE button */
                       max-sm:w-[86%] max-sm:py-3.5 max-sm:text-[15px] max-sm:rounded-[9999px]"
          >
            EXPLORE MENU
          </motion.button>
        </div>
      </motion.div>

      {/* Tailwind Custom Keyframe for Shimmer (Add to your CSS/Tailwind config if needed, otherwise this style block handles it inline) */}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default MenuHero;