import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhatYouGet = () => {
  const benefits = [
    "Full Training & Operations Manual",
    "Central Supply & Sauce Distribution",
    "Menu Tested & Optimized",
    "Marketing Support",
    "Website & Digital Ordering System",
  ];

  // --- Animation Variants ---

  // 1. Image Slide In (Left Panel)
  const imageSlide = {
    hidden: { x: "-100%" },
    visible: { 
      x: "0%", 
      transition: { duration: 1, ease: "circOut" } 
    }
  };

  // 2. Yellow Panel Slide In (Right Panel)
  const panelSlide = {
    hidden: { x: "100%" },
    visible: { 
      x: "0%", 
      transition: { duration: 1, ease: "circOut" } 
    }
  };

  // 3. Stagger List
  const listStagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }
    }
  };

  // 4. List Item Pop
  const itemPop = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // 5. Badge Pop Up
  const badgePop = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { delay: 1, type: "spring", stiffness: 200 } 
    }
  };

  // 6. Bear Slide Up
  const bearSlide = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%", 
      transition: { delay: 0.8, duration: 0.8, ease: "backOut" } 
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full bg-black overflow-hidden">
      
      {/* --- Left Image Section --- */}
      <motion.div 
        variants={imageSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-[350px] md:h-[500px] md:h-auto relative z-10"
      >
        <img
          src="/assets/pizza.jpg"
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
        />
        
        {/* Animated Badge */}
        <motion.div 
          variants={badgePop}
          className="absolute h-20 md:h-24 w-56 md:w-80 bottom-1 right-1 bg-[#F5CF5A] text-black px-4 py-3 flex items-center gap-3 shadow-lg z-50 rounded-xl origin-bottom-right"
        >
          <motion.img
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
            src="/assets/franchiseBear.png"
            alt="Teddy Bear"
            className="w-10 h-10"
          />

          <div className="flex flex-col leading-snug">
            <h6 className="text-lg md:text-2xl font-semibold">
              We cook{" "}
            </h6>
            <h6 className="text-lg md:text-2xl font-semibold">Special for you</h6>
          </div>
        </motion.div>
      </motion.div>

      {/* --- Right Content Section --- */}
      <motion.div 
        variants={panelSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-start justify-center md:w-1/2 bg-[#FFC222] text-black p-10 md:p-20 relative overflow-hidden z-20"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-10 text-left leading-none relative z-10"
        >
          What <br /> You Get
        </motion.h2>

        <motion.ul 
          variants={listStagger}
          initial="hidden"
          whileInView="visible"
          className="space-y-4 font-semibold text-sm relative z-10"
        >
          {benefits.map((item, index) => (
            <motion.li 
              key={index} 
              variants={itemPop}
              className="flex items-center gap-3"
            >
              <div className="p-1 bg-black rounded-full text-white">
                 <ArrowRight size={14} />
              </div>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Mascot Image (Bottom Right) */}
        <motion.div 
          variants={bearSlide}
          className="absolute bottom-0 right-10 w-40 md:w-72 opacity-90 pointer-events-none z-0"
        >
          <img src="/assets/bear.png" alt="Bear Mascot" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatYouGet;