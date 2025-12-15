import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaRss,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  // --- Animation Variants ---

  // 1. Floating Animation for Decor
  const floatAnim = {
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

  // 2. Stagger Container
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // 3. Fade Up Item
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // 4. Social Icon Hover
  const iconHover = {
    rest: { scale: 1, color: "#9ca3af" }, // text-gray-400
    hover: { 
      scale: 1.2, 
      color: "#ffffff",
      transition: { type: "spring", stiffness: 300 } 
    },
  };

  return (
    <footer className="relative w-full bg-[#080808] text-gray-400 font-sans overflow-hidden py-16 md:py-14">

      {/* ===================== DECOR IMAGES (Floating) ===================== */}

      {/* Top Left Image */}
      <motion.div 
        variants={floatAnim}
        animate="animate"
        className="absolute top-10 -left-12 opacity-60 pointer-events-none hidden sm:block"
      >
        <img
          src="/assets/tomato.png"
          alt="decoration"
          className=" lg:w-26 w-22 md:w-40 rotate-7"
        />
      </motion.div>

      {/* Right Side Image */}
      <motion.div 
        variants={floatAnim}
        animate="animate"
        transition={{ delay: 2 }} // Offset animation
        className="absolute top-44 -right-12 -translate-y-1/2 opacity-70 pointer-events-none hidden sm:block"
      >
        <img
          src="/assets/capsicum.png"
          alt="decoration"
          className="w-28 md:w-40"
        />
      </motion.div>

      {/* ===================== MAIN CONTENT ===================== */}

      <motion.div 
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10"
      >

        {/* Top Border (Animated Width) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-t border-gray-800 mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Logo */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex p-2 border border-gray-700 rounded bg-black w-40 sm:w-48">
                <img src="/assets/logo.jpg" alt="Jasper Wings" className="w-full" />
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div variants={fadeInUp} className="space-y-2 text-sm sm:text-base text-gray-300">
              <p>Monday–Thursday: 11 AM – 10 PM</p>
              <p>Friday–Saturday: 11 AM – 12 AM</p>
              <p>Sunday: 12 PM – 11 PM</p>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:flex lg:flex-col lg:items-end">

            {/* Address */}
            <motion.div variants={fadeInUp} className="flex items-start mb-4">
              <MdLocationOn className="text-white text-lg mt-0.5 mr-3" />
              <span className="text-sm sm:text-base text-gray-300">
                123 Queen Street West, Toronto, Canada
              </span>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 text-sm text-gray-300">

              <div className="flex items-center">
                <FaPhoneAlt className="text-white mr-3" />
                <span>+1 (416) 555-0192</span>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <span>contact@jasperwings.ca</span>
              </div>
            </motion.div>

            {/* Social Icons (Staggered Pop) */}
            <motion.div 
              variants={containerStagger} 
              className="flex items-center gap-4 text-gray-400"
            >
              <motion.span variants={fadeInUp} className="text-sm mr-2 hidden sm:block">
                Social Media
              </motion.span>

              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGooglePlusG, FaPinterestP, FaRss].map(
                (Icon, index) => (
                  <motion.a 
                    key={index} 
                    href="#" 
                    variants={iconHover}
                    initial="rest"
                    whileHover="hover"
                    className="text-lg"
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Border (Animated Width) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="border-t border-gray-800 mb-6"
        />

        {/* ================== BOTTOM BAR ================== */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 tracking-wide"
        >

          {/* Pages */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-4 md:mb-0">
            {[
              "About Us",
              "Menu",
              "Contact Us",
              "Order Online",
              "Privacy Policy",
              "Disclaimer",
            ].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right">
            © 2025 • Falverra
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;