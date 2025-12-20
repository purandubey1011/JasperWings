import React from "react";
import { motion } from "framer-motion";

/**
 * WhyItWorks (mappable)
 * - FEATURES array is the JSON data for the cards
 */

const FEATURES = [
  {
    id: "demand",
    title: "Demand For Wings & Fast Food",
    icon: "/assets/franicon1.png",
    alt: "Demand",
  },
  {
    id: "operations",
    title: "Simple Operations Model",
    icon: "/assets/franicon2.png",
    alt: "Operations",
  },
  {
    id: "cost",
    title: "Low Entry Cost",
    icon: "/assets/franicon3.png",
    alt: "Cost",
  },
];

const WhyItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-22 bg-black px-4 md:px-20 overflow-hidden w-full"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/api/placeholder/100/100"
          alt=""
          className="absolute top-10 right-0 md:right-20 w-16 blur-[1px] rotate-12"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src="/api/placeholder/100/100"
          alt=""
          className="absolute bottom-10 left-0 md:left-10 w-20 blur-[1px] -rotate-45"
        />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center justify-center mb-20 text-center
                     max-sm:items-start max-sm:text-left max-sm:mb-8 max-sm:px-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/assets/franchiseBear.png"
              alt="Mascot"
              className="w-5 h-5 md:w-5 md:h-5 object-contain"
            />
            <span className="text-[#d96828] text-xs md:text-sm font-bold uppercase">
              Why Franchise With Us
            </span>
          </div>

          <div className="relative inline-block w-full">
            <h2
              className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter relative z-10
                         max-sm:text-3xl max-sm:leading-tight max-sm:tracking-tight"
            >
              <span className="text-white">Why Jasper Wings </span>
              <br />
              <span className="text-[#d96828]">Works</span>
            </h2>
          </div>
        </motion.div>

        {/* Icons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 max-w-6xl mx-auto relative z-10 pt-0
                     max-sm:grid-cols-2 max-sm:gap-6 max-sm:pl-4 max-sm:pr-4 max-sm:justify-start"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center group
                         max-sm:items-start max-sm:text-left"
            >
              <div className="w-32 h-32 md:w-32 md:h-32 rounded-full bg-[#d96828] flex items-center justify-center mb-8
                              border-[6px] border-black ring-[3px] ring-[#d96828]
                              shadow-[0_0_20px_rgba(217,104,40,0.2)]
                              transition-transform duration-300 group-hover:scale-105
                              max-sm:w-20 max-sm:h-20 max-sm:border-[4px] max-sm:ring-[2px] max-sm:mb-4">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="w-16 h-16 md:w-14 md:h-14 object-contain
                             max-sm:w-10 max-sm:h-10"
                />
              </div>

              <h3
                className="text-xl md:text-lg font-bold text-white max-w-[220px] leading-tight
                           max-sm:text-base max-sm:max-w-none"
              >
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyItWorks;
