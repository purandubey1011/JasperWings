import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "What is the minimum investment required?",
      answer:
        "The minimum investment ranges between $150k - $250k depending on location size and condition.",
    },
    {
      question: "Do I need restaurant experience?",
      answer:
        "While preferred, it is not mandatory. We provide comprehensive training for all new franchisees.",
    },
    {
      question: "How long till opening?",
      answer: "Typically 3-6 months from signing the agreement to opening day.",
    },
    {
      question: "Will I get supply & training?",
      answer:
        "Yes, we provide full supply chain support and a 4-week training program.",
    },
  ];

  // --- Animation Variants ---

  // 1. Accordion Content Slide
  const accordionAnim = {
    collapsed: { height: 0, opacity: 0 },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] } 
    }
  };

  // 2. Floating Vegetables
  const floatAnim = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // 3. Stagger Items
  const containerStagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  // 4. Fade Up Entrance
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="relative pb-14 md:pb-24 pt-10 px-4 md:px-10 bg-black overflow-hidden w-full">
      
      {/* --- Decorative Images (Floating) --- */}
      <motion.div 
        variants={floatAnim}
        animate="animate"
        className="absolute top-10 right-0 md:right-10 w-24 md:w-32 opacity-80 pointer-events-none"
      >
        <img
          src="/assets/pumpkin2.png" 
          alt="Pepper Decoration"
          className="w-full h-auto rotate-12"
        />
      </motion.div>

      <motion.div 
        variants={floatAnim}
        animate="animate"
        transition={{ delay: 2.5 }}
        className="absolute bottom-20 left-0 md:left-0 w-24 md:w-32 opacity-80 pointer-events-none"
      >
        <img
          src="/assets/carrot.png" 
          alt="Avocado Decoration"
          className="w-full h-auto"
        />
      </motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header (Fade Up) */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center uppercase mb-16 tracking-wide"
        >
          <span className="text-white block">Frequently</span>
          <span className="text-white">Asked </span>
          <span className="text-yellow-500">Question</span>
        </motion.h2>

        {/* FAQ List - Staggered Entrance */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="space-y-5 w-full"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-gray-600 rounded-2xl overflow-hidden bg-black w-full"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 md:p-4 text-left hover:bg-gray-900 transition-colors duration-200"
              >
                <span className="text-md md:text-xl font-medium text-gray-200 tracking-wide">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className="text-gray-400"
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={accordionAnim}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-5 pt-0 text-gray-400 text-base md:text-lg leading-relaxed border-t border-gray-800/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default FAQSection;