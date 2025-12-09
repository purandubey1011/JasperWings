import React from 'react'
import {motion} from 'framer-motion'
import { ChefHat } from 'lucide-react';


const Hero = () => {
  return (
    <div className="relative h-screen  flex items-center justify-center bg-black overflow-hidden">



      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 mx-0 md:mx-[10%] rounded-3xl">
        <img
          src="/assets/hero.jpg" 
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat size={20} className="text-white" />
            <span className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
              Toronto's Most Loved Wing Spot
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className=" font-barlow text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter"
            style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
          >
            MORE FLAVOUR.
            <br />
            MORE FIRE.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 tracking-wide">
            Wings, Tenders, Burgers & Fries — Tossed Fresh And Served Hot.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest shadow-lg hover:bg-yellow-300 transition-colors"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              className="border border-white text-white px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:border-yellow-400 transition-colors"
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero