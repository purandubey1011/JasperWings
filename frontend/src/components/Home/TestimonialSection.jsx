import { Quote, Star } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Absolutely loved the wings here! The flavour options are insane — with 73 different flavours, there's something for everyone. The wings were crispy, juicy, and perfectly sauced. Definitely my new go-to spot in North York.",
    name: "Ryan Mitchell",
    rating: 5,
  },
  {
    id: 2,
    text: "Tried the wings and loaded fries and both were amazing. The wings were fresh and the sauces had a perfect balance of sweet and spicy. The staff were friendly and the service was quick. Highly recommend!",
    name: "Emily Carter",
    rating: 5,
  },
  {
    id: 3,
    text: "If you're a wing lover, Jasper Wings is a must-visit. The variety of flavours is crazy and the quality is top-notch. Also tried their chicken tenders and they were super tender and well seasoned.",
    name: "Daniel Thompson",
    rating: 5,
  },
  {
    id: 4,
    text: "Great place for wings and burgers! The burger was juicy and the fries were crispy. Lots of flavour options for the wings which makes it fun to try something new every time.",
    name: "Olivia Bennett",
    rating: 4,
  },
  {
    id: 5,
    text: "Amazing food and great portion sizes. The wings were cooked perfectly and the sauces were packed with flavour. The atmosphere is casual and perfect for hanging out with friends.",
    name: "Jacob Anderson",
    rating: 5,
  },
  {
    id: 6,
    text: "One of the best wing spots in North York. The wings are fresh and you can tell they put effort into their flavours. The burgers and tenders are also worth trying.",
    name: "Sophie Richardson",
    rating: 5,
  },
  {
    id: 7,
    text: "Really enjoyed the food here. The wings were crispy and well coated with sauce. The fries were seasoned perfectly and the portions were generous.",
    name: "Michael Parker",
    rating: 4,
  },
  {
    id: 8,
    text: "Tried a few different flavours and each one was delicious. The variety is incredible and everything tasted fresh. Great place if you want quality wings and comfort food.",
    name: "Lauren Hughes",
    rating: 5,
  },
  {
    id: 9,
    text: "Fantastic experience! The wings were hot, crispy, and full of flavour. The staff were welcoming and the service was quick. Definitely coming back to try more flavours.",
    name: "Ethan Campbell",
    rating: 5,
  },
];

const DESKTOP_SLIDE_SIZE = 3;

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
      </div>
    </motion.div>
  );
}

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const desktopSlideCount = Math.ceil(testimonials.length / DESKTOP_SLIDE_SIZE);
  const desktopIndex = Math.floor(index / DESKTOP_SLIDE_SIZE);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => {
        const isDesktop = window.innerWidth >= 768;

        if (isDesktop) {
          const nextSlide =
            (Math.floor(prev / DESKTOP_SLIDE_SIZE) + 1) % desktopSlideCount;
          return nextSlide * DESKTOP_SLIDE_SIZE;
        }

        return (prev + 1) % testimonials.length;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [desktopSlideCount]);

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
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const setSpecificIndex = (i) => {
    setIndex(i);
  };

  const setDesktopIndex = (i) => {
    setIndex(i * DESKTOP_SLIDE_SIZE);
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
          src="https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/bear.png"
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
        <div className="hidden md:block max-w-7xl mx-auto overflow-hidden">
          <motion.div
            animate={{ x: `-${desktopIndex * (100 / desktopSlideCount)}%` }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
            style={{ width: `${desktopSlideCount * 100}%` }}
          >
            {Array.from({ length: desktopSlideCount }).map((_, slideIdx) => {
              const slideTestimonials = testimonials.slice(
                slideIdx * DESKTOP_SLIDE_SIZE,
                slideIdx * DESKTOP_SLIDE_SIZE + DESKTOP_SLIDE_SIZE
              );

              return (
                <div
                  key={slideIdx}
                  className="grid grid-cols-3 gap-6"
                  style={{ width: `${100 / desktopSlideCount}%`, flexShrink: 0 }}
                >
                  {slideTestimonials.map((t, i) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.35 }}
                    >
                      <TestimonialCard item={t} />
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </motion.div>
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
          <motion.div
            key={index}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full p-2"
          >
              <TestimonialCard item={testimonials[index]} />
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="hidden md:flex gap-3 mt-8 z-10 justify-center items-center">
          {Array.from({ length: desktopSlideCount }).map((_, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.8 }}
              aria-label={`Show testimonial slide ${i + 1}`}
              onClick={() => setDesktopIndex(i)}
              className={`rounded-full transition-all focus:outline-none ${
                i === desktopIndex
                  ? "w-8 h-2 bg-[#d96828]"
                  : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="flex md:hidden gap-3 mt-4 z-10 justify-center items-center">
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
