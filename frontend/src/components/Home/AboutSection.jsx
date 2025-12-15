import React from "react";
import { motion } from "framer-motion";
import { Drumstick, Sandwich, ChefHat, Soup } from "lucide-react";
// Ensure this path matches your project structure
import aboutteddy from "/assets/aboutteddy.png";

const AboutSection = () => {
  // --- Animation Variants ---

  // 1. Floating Animation for Vegetables (Continuous loop)
  const floatVariant = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // 2. Main Content Stagger (Triggers children one by one)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each element appearing
        delayChildren: 0.3,
      },
    },
  };

  // 3. Text Slide Up
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  // 4. Image Scale Reveal
  const imageReveal = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // 5. Badge Pop-in (Spring physics)
  const badgePop = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 0.8 // Waits until image is done
      } 
    },
  };

  // 6. List Item Slide In
  const listItemVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100 } 
    },
  };

  return (
    <div className="relative bg-black text-white pb-20 px-6 overflow-hidden">
      
      {/* --- DECORATIONS (Floating Vegetables) --- */}
      
      {/* Left Tomato */}
      <motion.img
        variants={floatVariant}
        animate="animate"
        src="/assets/tomato.png"
        alt="tomato"
        className="absolute top-10 left-0 w-32 md:w-56 object-contain pointer-events-none z-2 ml-12"
      />

      {/* Right Capsicum */}
      <motion.img
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 1 }} // Offset animation so they don't move together
        src="/assets/capsicum.png"
        alt="capsicum"
        className="absolute top-5 -right-14 h-48 w-40 md:w-56 object-contain pointer-events-none z-20"
      />

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mt-32 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* 1. LEFT SIDE: PIZZA IMAGE */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
        >
          {/* Main Pizza Image */}
          <motion.img
            variants={imageReveal}
            whileHover={{ scale: 1.02 }} // Subtle hover effect
            transition={{ duration: 0.3 }}
            src="/assets/pizza.jpg"
            alt="Cheesy Pizza"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />

          {/* Bottom-right teddy + Badge */}
          <motion.div 
            variants={badgePop}
            className="absolute -bottom-1 -right-1 flex items-center gap-2 bg-[#F5CF5A] text-black px-3 py-1 rounded shadow-lg origin-bottom-right"
          >
            <img
              src="/assets/franchiseBear.png"
              alt="Teddy Bear"
              className="w-6 h-6"
            />
            <div className="flex flex-col leading-snug">
              <h6 className="text-2xl font-semibold">
                We cook{" "}
                <motion.span 
                  animate={{ color: ["#fff", "#ff0000", "#fff"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2 text-white text-2xl font-bold"
                >
                  hot
                </motion.span>
              </h6>
              <h6 className="text-2xl font-semibold">Special for you</h6>
            </div>
          </motion.div>
        </motion.div>

        {/* 2. RIGHT SIDE: TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-yellow-400 mb-4">
            <img src={aboutteddy} alt="" className="h-5" />
            <span className="uppercase font-bold tracking-widest">
               About Jasper Wings
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            CANADIAN FLAVOUR,
            <br /> STREET-STYLE SPIRIT.
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 mb-6 text-lg"
          >
            Jasper Wings started with one goal — bring bold flavours and real
            heat to the heart of Toronto. We serve wings, tenders, burgers, and
            loaded fries with our signature in-house sauces. Fresh. Crispy. Hot.
            Always.
          </motion.p>

          {/* Feature List */}
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              { icon: <Soup size={18} />, text: "12+ Signature Wing Sauces" },
              { icon: <Drumstick size={18} />, text: "Hand-Breaded Tenders" },
              { icon: <Sandwich size={18} />, text: "Premium Canadian Beef Patties" },
              { icon: <ChefHat size={18} />, text: "Fresh-Cut Fries Daily" },
            ].map((item, index) => (
              <motion.li 
                key={index} 
                variants={listItemVariant}
                whileHover={{ scale: 1.05, originX: 0 }} // Items pop slightly on hover
                className="flex items-center gap-4 cursor-default"
              >
                <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-black">
                  {item.icon}
                </div>

                <span className="text-white text-base font-semibold">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;