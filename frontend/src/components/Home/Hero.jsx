import React from "react";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // --- Animation Variants ---
  
  // Staggers the appearance of text elements
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between Tagline -> Title -> Subtitle -> Buttons
        delayChildren: 0.2,
      },
    },
  };

  // Smooth slide-up fade for text
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // Cinematic Zoom-out effect for the Hero Image
  const imageZoomVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="relative w-full min-h-[95vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Rectangle Image (Static Decoration) */}
      <img
        src="/assets/Rectangle1.png"
        alt="Background Rectangle"
        className="absolute inset-0 md:w-full h-full object-cover z-0 pointer-events-none opacity-50"
      />

      {/* Main Hero Image Container */}
      <div
        className="
          absolute inset-0 z-10
          mx-0 mt-20
          h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
          md:mx-[8%] lg:mx-[12%]
          rounded-none md:rounded-4xl 
          overflow-hidden

          /* MOBILE OVERRIDES */
          max-sm:mt-24
          max-sm:h-[80vh]
          max-sm:mx-3
          max-sm:rounded-3xl
          max-sm:overflow-hidden
        "
      >
        <motion.img
          variants={imageZoomVariants}
          initial="hidden"
          animate="visible"
          src="/assets/hero.jpg"
          alt="Restaurant Interior"
          className="
            w-full h-full object-cover
            max-sm:rounded-3xl
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 max-sm:rounded-3xl" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-24 md:mt-32
                   /* MOBILE padding/spacing */
                   max-sm:mt-6 max-sm:px-4 max-sm:mx-3"
      >
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div 
            variants={textItemVariants}
            className="flex items-center justify-center gap-2 mb-4
                       /* center & tighten on mobile */
                       max-sm:flex-col max-sm:gap-1 max-sm:mb-3"
          >
            <ChefHat size={20} className="text-white" />
            <span
              className="text-white font-bold tracking-wider text-xs sm:text-sm md:text-base uppercase
                         /* mobile exact typography */
                         max-sm:text-[12px] max-sm:tracking-[2px] max-sm:font-semibold"
            >
              Toronto's Most Loved Wing Spot
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={textItemVariants}
            className="
              font-barlow font-black text-white 
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
              leading-[0.9] mb-6 tracking-tight
              /* mobile heading size + spacing to match image */
              max-sm:text-[44px] max-sm:leading-[44px] max-sm:mb-4 max-sm:tracking-[-1px] max-sm:font-extrabold
            "
            style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
          >
            MORE FLAVOUR.
            <br />
            MORE FIRE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textItemVariants}
            className="
              text-gray-200 
              text-base sm:text-lg md:text-xl 
              max-w-3xl mx-auto mb-10
              tracking-wide
              /* mobile subtitle sizing + width */
              max-sm:text-[14px] max-sm:leading-[20px] max-sm:mb-6 max-sm:px-4
              max-sm:max-w-[85%]
            "
          >
            Wings, Tenders, Burgers & Fries — Tossed Fresh And Served Hot.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textItemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8
                       /* mobile center and full-width buttons */
                       max-sm:gap-3 max-sm:items-center max-sm:px-2"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[#FFC222] text-black 
                px-10 py-3 sm:py-3 
                rounded-full font-bold 
                text-sm sm:text-base uppercase tracking-widest 
                shadow-lg hover:bg-yellow-300 transition-colors

                /* mobile button -> full width, exact height, font size */
                max-sm:w-[86%] max-sm:px-6 max-sm:py-4 max-sm:text-[16px] max-sm:leading-[20px] max-sm:rounded-[9999px]
              "
            >
              Order Now
            </motion.button>

            {/* Secondary Button */}
            <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="w-full md:w-auto flex justify-center" // Wrapper to help mobile alignment
            >
              <Link 
                to="/menu" 
                className="
                  border border-white text-white 
                  px-10 py-3 sm:py-3 
                  rounded-full font-bold 
                  text-sm sm:text-base uppercase tracking-widest 
                  hover:border-yellow-400 hover:text-yellow-400 transition-colors
                  block text-center

                  /* mobile secondary -> outlined full width, larger outline, spacing like image */
                  max-sm:w-[86%] max-sm:px-6 max-sm:py-3.5 max-sm:text-[15px] max-sm:rounded-[9999px] max-sm:mt-2
                "
              >
                Explore Menu
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;