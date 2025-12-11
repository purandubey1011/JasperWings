import React from "react";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Background Rectangle Image */}
      <img
        src="/assets/Rectangle1.png"
        alt="Background Rectangle"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Main Hero Image Container */}
      <div className="
        absolute inset-0 z-10
        mx-0 mt-20
        h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
        md:mx-[8%] lg:mx-[12%]
        rounded-none md:rounded-4xl 
        overflow-hidden
      ">
        <img
          src="/assets/hero.jpg"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-24 md:mt-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat size={20} className="text-white" />
            <span className="text-white font-bold tracking-wider text-xs sm:text-sm md:text-base uppercase">
              Toronto's Most Loved Wing Spot
            </span>
          </div>

          {/* Heading */}
          <h1 className="
            font-barlow font-black text-white 
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            leading-[0.9] mb-6 tracking-tight
          " 
          style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}>
            MORE FLAVOUR.
            <br />
            MORE FIRE.
          </h1>

          {/* Subtitle */}
          <p className="
            text-gray-200 
            text-base sm:text-lg md:text-xl 
            max-w-3xl mx-auto mb-10
            tracking-wide
          ">
            Wings, Tenders, Burgers & Fries — Tossed Fresh And Served Hot.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                bg-[#FFC222] text-black 
                px-10 py-3 sm:py-3 
                rounded-full font-bold 
                text-sm sm:text-base uppercase tracking-widest 
                shadow-lg hover:bg-yellow-300 transition
              "
            >
              Order Now
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              className="
                border border-white text-white 
                px-10 py-3 sm:py-3 
                rounded-full font-bold 
                text-sm sm:text-base uppercase tracking-widest 
                hover:border-yellow-400 transition
              "
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
