import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Home/Footer";
import BookTableSection from "../components/Home/BookTableSection";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

// --- Premium Animation Variants ---

// 1. Slow, Heavy Fade Up (For body text)
const slowFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.4, 0.25, 1] // Custom "cubic-bezier" for weight
    } 
  },
};

// 2. Cinematic Mask Reveal (For Heading)
const maskReveal = {
  hidden: { y: "100%", skewY: 5 },
  visible: { 
    y: "0%", 
    skewY: 0,
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] // "Apple-style" slow deceleration
    } 
  },
};

// 3. Line Draw (Center Outwards)
const lineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" } 
  },
};

// 4. 3D Map Swing Entrance
const map3D = {
  hidden: { 
    opacity: 0, 
    rotateY: -30, 
    x: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    } 
  },
};

// 5. Background Slow Pan
const bgPan = {
  animate: {
    scale: [1.0, 1.08],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};

const ContactPage = () => {
  // Helper for Social Icons with Stagger
  function SocialIcon({ Icon, index }) {
    return (
      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 1 + (index * 0.1), // Starts after main content
          type: "spring", 
          stiffness: 100, 
          damping: 10 
        }}
        whileHover={{ 
          scale: 1.2, 
          backgroundColor: "#fff", 
          color: "#000", 
          borderColor: "#fff" 
        }}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300"
      >
        <Icon size={18} />
      </motion.a>
    );
  }

  return (
    <div className="bg-neutral-950 font-sans selection:bg-[#d96828] selection:text-black">
      <Navbar />
      
      {/* MAIN HERO */}
<main className="bg-black flex justify-center items-start pt-24 md:pt-30 pb-10">
  <div className="w-full max-w-[95vw] px-4">
    
    {/* Main Card Container */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
      style={{ minHeight: "90vh" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={bgPan}
          animate="animate"
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/contacthero.jpg')",
            filter: "saturate(0.9) contrast(0.9) brightness(0.8)",
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full w-full p-6 md:p-10 lg:p-14">
        <div className="flex flex-col lg:flex-row h-full gap-12 lg:gap-24">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="flex-1 flex flex-col justify-start md:justify-center text-white"
          >
            
            {/* Heading */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                variants={maskReveal}
                className="text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-wide"
                style={{
                  fontFamily: '"Impact","Oswald",sans-serif',
                  filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.6))",
                  lineHeight: 1,
                }}
              >
                LET&apos;S TALK FLAVOUR
              </motion.h1>
            </div>

            <motion.p
              variants={slowFadeUp}
              className="text-gray-200 text-sm md:text-lg font-light tracking-wide max-w-xl mb-2"
            >
              Reach out for orders, catering, feedback, or collabs — we&apos;re listening.
            </motion.p>

            <motion.hr variants={lineDraw} className="border-white/30 my-6 w-full max-w-xl origin-left" />

            {/* Address */}
            <motion.div variants={slowFadeUp} className="flex items-start gap-5 mb-2">
              <div className="p-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-md">
                <MapPin size={20} className="text-[#d96828]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Visit or Reach Out to Us
                </h3>
                <p className="text-gray-300 text-sm md:text-base mt-1 leading-relaxed">
                  2737 Keele St, Unit 27<br />
                  North York, ON M3M 2E9
                </p>
              </div>
            </motion.div>

            <motion.hr variants={lineDraw} className="border-white/30 my-6 w-full max-w-xl origin-left" />

            {/* Hours */}
            <motion.div variants={slowFadeUp} className="flex items-start gap-5 mb-2">
              <div className="p-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-md">
                <Clock size={20} className="text-[#d96828]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Open Hours
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-300 text-sm md:text-base">
                  <p><span className="font-medium text-white">Mon–Thu:</span> 10:30 AM – 12:00 AM</p>
                  <p><span className="font-medium text-white">Fri–Sat:</span> 10:30 AM – 2:00 AM</p>
                  <p><span className="font-medium text-white">Sun:</span> 10:30 AM – 12:00 AM</p>
                </div>
              </div>
            </motion.div>

            <motion.hr variants={lineDraw} className="border-white/30 my-6 w-full max-w-xl origin-left" />

            {/* Contact */}
            <motion.div variants={slowFadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-md">
                  <Phone size={20} className="text-[#d96828]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Call Us</h3>
                  <a
                    href="tel:+14163983228"
                    className="text-gray-300 hover:text-white transition-colors text-sm mt-1 block"
                  >
                    416-398-3228
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/20 rounded-full bg-black/20 backdrop-blur-md">
                  <Mail size={20} className="text-[#d96828]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email Us</h3>
                  <a
                    href="mailto:info@jasperwings.com"
                    className="text-gray-300 hover:text-white transition-colors text-sm mt-1 block"
                  >
                    info@jasperwings.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.hr variants={lineDraw} className="border-white/30 my-6 w-full max-w-xl origin-left" />

            {/* Social */}
            <motion.div variants={slowFadeUp} className="flex items-center gap-4">
              <span className="text-gray-300 font-medium tracking-wider text-sm uppercase">
                Follow Us
              </span>
              <div className="h-px w-10 bg-gray-500"></div>
              <div className="flex gap-3">
                <SocialIcon Icon={Facebook} index={0} />
                <SocialIcon Icon={Instagram} index={1} />
                <SocialIcon Icon={Twitter} index={2} />
                <SocialIcon Icon={Linkedin} index={3} />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN – MAP */}
          <div className="w-full md:w-[380px] lg:w-[450px] flex-shrink-0 flex items-center justify-center perspective-1000">
            <motion.div
              variants={map3D}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -10, rotateX: 2, boxShadow: "0px 20px 40px rgba(0,0,0,0.6)" }}
              className="rounded-[2rem] overflow-hidden p-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl w-full"
            >
              <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-gray-900">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src="/assets/map.png"
                  alt="map"
                  className="w-full h-full object-cover opacity-90"
                />

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <MapPin size={48} className="text-red-600" fill="currentColor" />
                </motion.div>
              </div>

              <div className="mt-5 px-3 pb-2">
                <h4 className="text-white font-bold text-xl tracking-tight">Our HQ</h4>
                <p className="text-gray-400 text-sm mt-1">
                  2737 Keele St, Unit 27, North York
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  </div>
</main>


      <BookTableSection />
      <Footer />
    </div>
  );
};

export default ContactPage;