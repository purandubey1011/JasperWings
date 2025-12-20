import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Home/Footer";

const ComingSoon = () => {
  // --- Animation Variants ---

  // 1. Slow Background Zoom (Keep this as you liked it)
  const bgZoom = {
    animate: {
      scale: [1, 1.1],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  // 2. Cinematic Blur-In Word Reveal (NEW: Engazing Text Animation)
  // Words start blurry and spaced out, then snap to focus
  const blurWord = {
    hidden: { 
      opacity: 0, 
      filter: "blur(15px)", 
      y: 20,
      scale: 1.1 
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Cinematic easing
      },
    },
  };

  // 3. Stagger Container for Words
  const wordStagger = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between words
        delayChildren: 0.3,
      },
    },
  };

  // 4. 3D Flip Down Reveal (For Section Titles)
  const flipReveal = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  // 5. Floating Objects (Keep this)
  const floatAnim = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // 6. Standard Fade Up (For body text)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 7. Card Pop
  const cardPop = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#FFC20E] selection:text-black">
      <Navbar bg={"trasparent"} />

      <header className="relative w-full h-[75vh] lg:h-[100vh] md:h-[80vh] overflow-hidden">
        {/* ---------------- BACKGROUND IMAGE ---------------- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            variants={bgZoom}
            animate="animate"
            src="/assets/cominghero.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --------------- FOREGROUND RECTANGULAR IMAGE ---------------- */}
        <div className="relative z-10 h-full flex items-center justify-center mt-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full md:h-auto h-[50vh]"
          >
            {/* Rectangle image */}
            <img
              src="/assets/Rectangle1.png"
              alt="foreground"
              className="w-full h-full object-cover"
            />

            {/* TEXT ON TOP OF FOREGROUND IMAGE */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              
              {/* LINE 1: BLUR REVEAL */}
              <motion.h1 
                variants={wordStagger}
                initial="hidden"
                animate="visible"
                className="text-black font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tighter tracking-tighter flex gap-x-3 flex-wrap justify-center"
              >
                {/* Splitting words for individual animation */}
                {["Find", "Jasper"].map((word, i) => (
                  <motion.span key={i} variants={blurWord} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* LINE 2: BLUR REVEAL (Delayed) */}
              <motion.h2 
                variants={wordStagger}
                initial="hidden"
                animate="visible"
                className="text-black font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tighter -mt-2 flex gap-x-3 flex-wrap justify-center"
              >
                {["Wings", "Near", "You"].map((word, i) => (
                  <motion.span key={i} variants={blurWord} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* LINE 3: TYPEWRITER STYLE FADE */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-black font-bold mt-1 md:mt-3 text-sm md:text-lg uppercase"
              >
                More Heat Coming Across Canada.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- CURRENTLY OPEN SECTION --- */}
<section className="bg-black py-4 md:py-10 px-6 relative overflow-hidden">
  {/* Decorative Pizza */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    className="absolute top-14 left-5 opacity-20 pointer-events-none"
  >
    <img src="/assets/splaterpizza.png" alt="" className="z-30 h-30" />
  </motion.div>

  <div className="max-w-7xl mx-auto mt-7 md:mt-8 md:mb-10">
    {/* Section Header */}
    <div className="text-center mb-6 md:mb-16 perspective-1000">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={flipReveal}
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Currently Open
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={flipReveal}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#d96828]">
          Location
        </h2>
      </motion.div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Images */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        <motion.div className="col-span-2 h-64 md:h-80 overflow-hidden rounded-lg border-2 border-[#333]" variants={fadeInUp}>
          <img src="/assets/toranto1.jpg" alt="Restaurant Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </motion.div>
        <motion.div className="h-40 md:h-48 overflow-hidden rounded-lg border-2 border-[#333]" variants={fadeInUp} transition={{ delay: 0.1 }}>
          <img src="/assets/toranto2.jpg" alt="Food Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </motion.div>
        <motion.div className="h-40 md:h-48 overflow-hidden rounded-lg border-2 border-[#333]" variants={fadeInUp} transition={{ delay: 0.2 }}>
          <img src="/assets/toranto3.jpg" alt="Dining Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </motion.div>
      </motion.div>

      {/* Details */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-2 pl-0 lg:pl-10 max-w-md"
      >
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-1 text-white">
            Toronto – Downtown
          </h3>
          <span className="text-sm md:text-md font-medium text-gray-400">
            (OPEN)
          </span>
        </motion.div>

        <div className="w-full h-px bg-gray-800" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {/* Address */}
          <motion.div variants={fadeInUp} className="pt-2">
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#d96828] mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">
                  Visit or Reach Out to Us
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  2737 Keele St, Unit 27<br />
                  North York, ON M3M 2E9
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full h-px bg-gray-800" />

          {/* Hours */}
          <motion.div variants={fadeInUp} className="pt-2">
            <div className="flex items-start space-x-4">
              <Clock className="text-[#d96828] mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">
                  Open Hours
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Monday – Thursday: 10:30 AM – 12:00 AM<br />
                  Friday – Saturday: 10:30 AM – 2:00 AM<br />
                  Sunday: 10:30 AM – 12:00 AM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full h-px bg-gray-800" />

          {/* Contact */}
          <motion.div variants={fadeInUp} className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-[#d96828] mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">
                  Contact Details
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Store Phone:<br />
                  <a href="tel:+14163983228" className="text-gray-300 hover:text-[#d96828]">
                    416-398-3228
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-[#d96828] mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">
                  Email Us
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <a href="mailto:info@jasperwings.com" className="text-gray-300 hover:text-[#d96828] break-all">
                    info@jasperwings.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full h-px bg-gray-800" />

        {/* Order Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d96828] text-black font-extrabold uppercase px-8 py-3 rounded-full hover:bg-white transition-colors tracking-wide text-sm"
          >
            Order Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>

    {/* Decorative Garlic */}
    <motion.div
      variants={floatAnim}
      animate="animate"
      className="absolute bottom-3 right-0 opacity-20 pointer-events-none -rotate-12"
    >
      <img src="/assets/garlic.png" alt="" />
    </motion.div>
  </div>
</section>


      {/* --- COMING SOON LOCATIONS --- */}
      <section className="relative w-full h-full mb-6 flex items-center justify-center py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <img src="/assets/Rectangle66.png" alt="background" className="w-full h-full object-cover" />
        </div>

        {/* Floating Decor */}
        <motion.img variants={floatAnim} animate="animate" src="/assets/garliccopy.png" alt="" className="absolute top-52 left-24 w-24 md:w-32 opacity-80 pointer-events-none z-[2]" />
        <motion.img variants={floatAnim} animate="animate" transition={{ delay: 1 }} src="/assets/burger.png" alt="" className="absolute top-52 right-24 w-24 md:w-32 opacity-80 pointer-events-none z-[2]" />

        {/* MAIN CONTENT */}
        <div className="relative z-[5] w-full max-w-5xl mx-auto mt-12 max-sm:mt-6 max-sm:px-4 max-sm:pb-6">
          
          {/* TITLE with Blur Reveal */}
          <div className="text-center px-4 md:mb-[10vh] max-sm:mb-6 max-sm:pt-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-black leading-tight max-sm:text-2xl max-sm:leading-snug">
              <motion.span 
                 initial={{ opacity: 0, filter: "blur(10px)" }}
                 whileInView={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}
              >
                Coming Soon
              </motion.span> 
              <br /> 
              <motion.span 
                 initial={{ opacity: 0, filter: "blur(10px)" }}
                 whileInView={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{ duration: 1, delay: 0.3 }}
                 viewport={{ once: true }}
              >
                Locations
              </motion.span>
            </h2>
          </div>

          {/* CARDS */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center max-sm:gap-4"
>
  {[
    {
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
      city: "Monticello",
      date: "Coming Soon",
    },
    {
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
      city: "Brampton",
      date: "Summer 2026",
    },
    {
       img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
      city: "Mississauga",
      date: "Late 2026",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      variants={cardPop}
      whileHover={{ y: -10 }}
      className="w-full max-w-[450px] p-2 bg-white rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 max-sm:max-w-[96%] max-sm:p-3 max-sm:rounded-lg"
    >
      <div className="h-60 overflow-hidden relative rounded-xl max-sm:h-[220px] max-sm:rounded-lg">
        <img
          src={item.img}
          alt={item.city}
          className="w-full h-full object-cover rounded-xl max-sm:rounded-lg hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="p-6 text-center max-sm:p-4">
        <h3 className="text-black font-black text-2xl mb-2 max-sm:text-xl">
          {item.city} – Coming Soon
        </h3>

        <p className="text-[#d96828] font-bold uppercase tracking-wider mb-6 max-sm:mb-4 max-sm:text-sm">
          {item.date}
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#FFC20E" }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-black text-black font-bold uppercase px-8 py-2 rounded-full transition-colors w-full max-sm:px-6 max-sm:py-2 max-sm:text-sm"
        >
          Notify Me
        </motion.button>
      </div>
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>

      {/* --- CTA FRANCHISE SECTION --- */}
      <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/assets/chef.jpg"
            alt="Chef Cooking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-99 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center mb-7 space-x-2">
            <img src="/assets/franchiseBear.png" alt="Teddy" className="w-5 h-5" />
            <p className="font-semibold">Book now</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2 leading-tighter">
            Want Jasper Wings in your <br /> <span className="text-[#d96828]">City Next?</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d96828] text-black font-medium uppercase px-5 py-3 rounded-full transition-colors tracking-wide mt-6"
          >
            Become a Franchise Partner
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;