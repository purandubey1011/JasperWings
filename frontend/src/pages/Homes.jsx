import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Bike,
  Gamepad2,
  ShoppingBasket,
  Store,
} from "lucide-react";

// Imports (Assuming these paths are correct in your project)
import Navbar from "../components/common/Navbar";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import BookTableSection from "../components/Home/BookTableSection";
import Footer from "../components/Home/Footer";
import GallerySection from "../components/Home/GallerySection";
import WhatHotNow from "../components/Home/WhatHotNow";

// --- Mock Data ---
const menuItems = [
  { id: 1, name: "Inferno Burger", price: "$12.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60", oldPrice: "15.99" },
  { id: 2, name: "Spicy Wings", price: "$14.50", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=60", oldPrice: "18.50" },
  { id: 3, name: "Loaded Fries", price: "$8.99", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60", oldPrice: "10.99" },
  { id: 4, name: "Crispy Tenders", price: "$10.99", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60", oldPrice: "12.99" },
  { id: 5, name: "Cheesy Pizza", price: "$16.00", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60", oldPrice: "19.00" },
  { id: 6, name: "Mega Wrap", price: "$9.50", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60", oldPrice: "11.50" },
  { id: 7, name: "Street Tacos", price: "$11.00", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=60", oldPrice: "14.00" },
  { id: 8, name: "Double Smash", price: "$15.99", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=60", oldPrice: "18.99" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const MenuCard = ({ item }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-[#FFC222] p-6 flex flex-col items-center justify-between min-h-[300px] shadow-lg cursor-pointer transition-shadow hover:shadow-2xl rounded-md"
  >
    {/* Text Content at Top */}
    <div className="text-center w-full mb-4 z-10">
      <h3 className="font-black text-xl leading-tight mb-2 text-black">
        {item.name}
      </h3>
      <div className="flex items-center justify-center gap-2 font-bold">
        <span className="text-white text-md font-medium">₹{item.price}</span>
        {item.oldPrice && (
          <span className="text-white opacity-60 text-sm line-through">
            ₹{item.oldPrice}
          </span>
        )}
      </div>
    </div>

    {/* Image Centered/Bottom */}
    <div className="relative w-48 h-48 mt-2">
      <motion.img
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 200 }}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover rounded-full shadow-md"
      />
    </div>
  </motion.div>
);

const MenuSection = () => {
  return (
    <div id="menu" className="bg-white py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center mb-16 max-w-7xl mx-auto px-4">
          
          {/* --- Left Image (Radish) - Slides in from left --- */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="hidden md:block absolute top-0 left-0 -translate-x-4"
          >
            <motion.img
              animate={floatingAnimation}
              src="/assets/radish.png"
              alt="radish"
              className="w-44 h-72 object-contain"
            />
          </motion.div>

          {/* --- Center Content --- */}
          <div className="relative z-10 pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <div className="flex items-center justify-center mb-4 space-x-2">
                <img
                  src="/assets/franchiseBear.png"
                  alt="Teddy"
                  className="w-8 h-8"
                />
                <p className="font-semibold text-black">Jasper Favourites</p>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl font-black text-black leading-tighter font-sans"
            >
              THE HITS EVERYONE
              <span className="hidden md:flex"><br /></span>
              COMES <span className="text-yellow-500">BACK FOR</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-gray-600 font-medium"
            >
              Our Most-Ordered Picks Of The Week.
            </motion.p>
          </div>

          {/* --- Right Image (Menu Capsi) - Slides in from right --- */}
          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, type: "spring" }}
             className="hidden md:block absolute bottom-0 right-0 translate-y-4"
          >
            <motion.img
              animate={floatingAnimation}
              src="/assets/manucapsi.png"
              alt="vegetable"
              className="w-24 h-24 object-contain opacity-50"
            />
          </motion.div>
        </div>

        {/* Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    { id: 1, title: "Fresh Wings Daily", icon: <ShoppingBasket size={40} strokeWidth={1.5} /> },
    { id: 2, title: "Signature House Sauces", icon: <Store size={40} strokeWidth={1.5} /> },
    { id: 3, title: "Fast Delivery & Pickup", icon: <Bike size={40} strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      {/* --- Top Right Pizza Image (Rotating) --- */}
      <div className="absolute top-0 right-0 w-40 md:w-72 opacity-70 pointer-events-none">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          src="/assets/splaterpizza.png"
          alt="pizza sketch"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-16 mb-16 md:mb-24">
          {/* Left Text + Heading */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4 md:mb-6"
            >
              <span className="text-xl md:text-2xl">🐻</span>
              <span className="text-yellow-500 font-bold tracking-wide text-sm md:text-base uppercase">
                The Jasper Experience
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight"
            >
              More Than A Bite -
              <br />
              <span className="text-yellow-500">It's A Mood</span>
            </motion.h2>
          </div>

          {/* Right Description Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:w-2/4"
          >
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-barlow">
              Loud Flavours. Fresh Ingredients. Hot Off The Fryer. We Don't Just
              Serve Food — We Serve Cravings.
            </p>
          </motion.div>
        </div>

        {/* --- Features Grid --- */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-18 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center"
            >
              {/* Yellow Circle */}
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 md:mb-8 border-4 border-yellow-500 ring-4 ring-black ring-inset shadow-lg"
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-xl font-bold tracking-wide">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-sans text-white selection:bg-yellow-400 selection:text-black overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <FeatureSection />
      <WhatHotNow />
      <TestimonialSection />
      <GallerySection />
      <BookTableSection />
      <Footer />
    </div>
  );
};

export default Home;
