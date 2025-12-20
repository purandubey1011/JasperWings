import { Quote, Star } from "lucide-react";
import React, { useState, useRef } from "react";
import { FaPaw } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    name: "Sofia",
    title: "Food Critic",
    rating: 5,
  },
  {
    id: 3,
    text: "Integer congue, ipsum id tempor dictum, nisl purus faucibus lacus, at posuere arcu nibh non quam. Curabitur facilisis.",
    name: "Ayesha",
    title: "Blogger",
    rating: 5,
  },
];

// --- Animation Variants ---

const cardHover = {
  rest: { y: 0, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" },
  hover: { 
    y: -10, 
    boxShadow: "0px 20px 40px rgba(245, 158, 11, 0.15)", // Orange glow
    transition: { type: "spring", stiffness: 300 } 
  },
};

const quoteFloat = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%", // Use percentages for accurate sliding
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
  }),
};

function TestimonialCard({ item }) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="relative bg-[#0a0a0a] rounded-3xl p-8 pt-6 flex flex-col items-center text-center group border border-gray-800/50 shadow-2xl h-full w-full"
    >
      {/* Floating Quote Icon */}
      <motion.div 
        variants={quoteFloat}
        animate="animate"
        className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0f0e0e] rounded-full flex items-center justify-center border-4 border-[#0d0d0d] z-20"
      >
        <Quote className="w-6 h-6 text-[#d96828] fill-[#d96828]" />
      </motion.div>

      {/* Content */}
      <div className="mt-6 mb-6">
        <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium italic relative z-10">
          {`"${item.text}"`}
        </p>
      </div>

      {/* Stars - Staggered Appearance */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, type: "spring" }}
          >
            <Star className="w-4 h-4 text-[#d96828] fill-[#d96828]" />
          </motion.div>
        ))}
      </div>

      {/* Author Info */}
      <div className="mt-auto">
        <h4 className="text-white font-bold text-lg">{item.name}</h4>
        <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const containerRef = useRef(null);

  // Touch Swipe Logic
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      nextTestimonial();
    } else if (distance < -threshold) {
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const setSpecificIndex = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section className="relative py-20 md:min-h-[80vh] bg-black pt-12 overflow-hidden">
      
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1 inset-0 z-0 flex justify-center items-start pointer-events-none"
      >
        <img
          src="/assets/bear.png"
          alt="Bear Background"
          className="w-auto h-[20rem] md:h-[27rem] object-cover opacity-30 md:opacity-50"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#d96828] font-bold mb-4"
          >
            <FaPaw className="text-xl" />
            <span className="tracking-widest text-sm">TESTIMONIALS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-white uppercase tracking-wide"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            WHAT CUSTOMER SAYS?
          </motion.h2>
        </div>

        {/* --- DESKTOP VIEW (Grid) --- */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <TestimonialCard item={t} />
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE VIEW (Carousel with Swipe) --- */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="md:hidden relative min-h-[420px] max-w-sm mx-auto overflow-hidden" // Added overflow-hidden to prevent scrollbar during slide
        >
          {/* Changed mode="wait" to mode="popLayout" so cards slide instantly without waiting for exit */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute top-0 left-0 w-full h-full p-2" // Ensures correct positioning
            >
              <TestimonialCard item={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 mt-4 md:mt-8 z-10 justify-center items-center">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.8 }}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setSpecificIndex(i)}
              className={`rounded-full transition-all focus:outline-none ${
                i === index 
                  ? "w-8 h-2 bg-[#d96828]" 
                  : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;