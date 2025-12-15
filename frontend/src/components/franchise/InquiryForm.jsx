import React from 'react';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
  // --- Animation Variants ---

  // 1. Title Reveal
  const titleReveal = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 2. Form Stagger
  const formStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // 3. Input Field Slide Up
  const inputSlide = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // 4. Submit Button Hover
  const buttonHover = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(234, 179, 8, 0.4)" },
    tap: { scale: 0.95 }
  };

  // 5. Checkbox Tick
  const tickAnim = {
    checked: { scale: 1, opacity: 1 },
    unchecked: { scale: 0, opacity: 0 }
  };

  return (
    <section className="relative bg-[#0C0C0C] py-14 px-4 md:px-20 overflow-hidden w-full">
      
      {/* --- Decorative Background Image (Floating) --- */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 left-5 w-32 md:w-48 opacity-50 pointer-events-none"
      >
        <img 
          src="/assets/splaterpizza.png" 
          alt="Pizza Decoration" 
          className="w-full h-auto"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleReveal}
          className="text-center mb-12 uppercase font-extrabold tracking-tight leading-none"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-500 mb-1">Franchise</h2>
          <h2 className="text-4xl md:text-5xl text-white">Inquiry Form</h2>
        </motion.div>

        {/* --- Form --- */}
        <motion.form 
          variants={formStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
        >
          
          {/* Input Fields */}
          {[
            { label: "Full Name", type: "text", placeholder: "Full name" },
            { label: "Email", type: "email", placeholder: "xyz@gmail.com" }
          ].map((field, i) => (
            <motion.div key={i} variants={inputSlide} className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">
                {field.label}<span className="text-red-500">*</span>
              </label>
              <input 
                type={field.type} 
                placeholder={field.placeholder} 
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </motion.div>
          ))}

          {/* Phone Number */}
          <motion.div variants={inputSlide} className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              <div className="relative w-24">
                <select className="w-full h-full bg-transparent border border-gray-600 rounded-lg pl-4 pr-8 text-white appearance-none focus:border-yellow-500 focus:outline-none cursor-pointer">
                  <option className="bg-black text-white">+91</option>
                  <option className="bg-black text-white">+1</option>
                  <option className="bg-black text-white">+44</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              <input 
                type="tel" 
                placeholder="965256455" 
                className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={inputSlide} className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Location Interested In<span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Bengaluru" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </motion.div>

          {/* Investment Budget */}
          <motion.div variants={inputSlide} className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Investment Budget<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none focus:border-yellow-500 focus:outline-none cursor-pointer placeholder-gray-500">
                <option className="bg-black" value="">$5000 - $10000</option>
                <option className="bg-black" value="">$10000 - $20000</option>
                <option className="bg-black" value="">$20000+</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={inputSlide} className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Message<span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              placeholder="Write here" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </motion.div>

          {/* Checkbox */}
          <motion.div variants={inputSlide} className="md:col-span-2 flex justify-center mt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center peer-checked:bg-yellow-400 transition-colors">
                  <Check size={16} className="text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-gray-300 text-sm select-none">I agree to be contacted</span>
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={inputSlide} className="md:col-span-2 flex justify-center mt-6">
            <motion.button 
              type="button"
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-full px-12 py-3 flex items-center gap-2"
            >
              SUBMIT <ArrowRight size={20} strokeWidth={2.5} />
            </motion.button>
          </motion.div>

        </motion.form>
      </div>
    </section>
  );
};

export default InquiryForm;