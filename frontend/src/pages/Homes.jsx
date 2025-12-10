import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "/assets/booktable.jpg";
import { FaQuoteLeft, FaStar, FaPaw } from 'react-icons/fa';
import {
  Flame,
  ShoppingBag,
  Clock,
  MapPin,
  Menu,
  X,
  Star,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Utensils,
  Bike,
  Gamepad2,
  ChefHat,
  ShoppingBasket,
  Store, // Added for the icon in hero
} from "lucide-react";
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
  {
    id: 1,
    name: "Inferno Burger",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Spicy Wings",
    price: "$14.50",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=60",
    category: "Chicken",
  },
  {
    id: 3,
    name: "Loaded Fries",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1630384060421-a4323ceca0ad?auto=format&fit=crop&w=500&q=60",
    category: "Sides",
  },
  {
    id: 4,
    name: "Crispy Tenders",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60",
    category: "Chicken",
  },
  {
    id: 5,
    name: "Cheesy Pizza",
    price: "$16.00",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60",
    category: "Pizza",
  },
  {
    id: 6,
    name: "Mega Wrap",
    price: "$9.50",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60",
    category: "Wraps",
  },
  {
    id: 7,
    name: "Street Tacos",
    price: "$11.00",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=60",
    category: "Tacos",
  },
  {
    id: 8,
    name: "Double Smash",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=60",
    category: "Burgers",
  },
];

const features = [
  {
    id: 1,
    title: "Fresh Wings Daily",
    icon: <Flame className="w-8 h-8" />,
    desc: "Always fresh, never frozen.",
  },
  {
    id: 2,
    title: "Super Cool Vibes",
    icon: <Gamepad2 className="w-8 h-8" />,
    desc: "Games, music, and good times.",
  },
  {
    id: 3,
    title: "Fast Delivery",
    icon: <Bike className="w-8 h-8" />,
    desc: "Hot food at your doorstep.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Alex R.",
    text: "The flavor is absolutely insane! Best wings in the city.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    text: "Love the vibe and the spicy burger is a must-try.",
    rating: 5,
  },
  {
    id: 3,
    name: "James K.",
    text: "Fast delivery and the food was still piping hot.",
    rating: 4,
  },
];

// --- Components ---







const MenuCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-yellow-400 p-6 flex flex-col items-center justify-between min-h-[300px] shadow-lg cursor-pointer transition-shadow hover:shadow-xl"
  >
    {/* Text Content at Top */}
    <div className="text-center w-full mb-4 z-10">
      <h3 className="font-black text-xl leading-tight mb-2 text-black">
        {item.name}
      </h3>
      <div className="flex items-center justify-center gap-2 font-bold">
        <span className="text-white text-xl">₹{item.price}</span>
        <span className="text-white opacity-60 text-sm line-through">
          ₹{item.oldPrice}
        </span>
      </div>
    </div>

    {/* Image Centered/Bottom */}
    <div className="relative w-48 h-48 mt-2">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover rounded-full shadow-md"
      />
    </div>
  </motion.div>
);

const MenuSection = () => {
  return (
    <div id="menu" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
<div className="relative text-center mb-16 max-w-7xl mx-auto px-4">
  {/* --- Left Image (Radish) --- */}
  
  <div className="hidden md:block absolute top-0 left-0 -translate-x-4">
    <img
      src="/assets/radish.png"
      alt="radish"
      className="w-44 h-72 object-contain" 
    />
  </div>

  {/* --- Center Content --- */}
  <div className="relative z-10 pt-8">
    <div className="flex justify-center items-center gap-2 mb-4">


  <div className="flex items-center justify-center mb-4 space-x-2">
    <img src="/assets/franchiseBear.png" alt="Teddy" className="w-8 h-8" />
    <p className="font-semibold text-black">Jasper Favourites</p>
  </div>
        
    </div>
    
    <h2 className="text-4xl md:text-6xl font-black text-black leading-tight font-sans">
      THE HITS EVERYONE
      <br />
      COMES <span className="text-yellow-500">BACK FOR</span>
    </h2>
    
    <p className="mt-4 text-gray-600 font-medium">
        Our Most-Ordered Picks Of The Week.
    </p>
  </div>

  {/* --- Right Image (Menu Capsi) --- */}
  {/* Positioned absolute to the right */}
  <div className="hidden md:block absolute bottom-0 right-0 translate-y-4">
    <img 
      src="/assets/manucapsi.png" 
      alt="vegetable" 
      className="w-24 h-24 object-contain opacity-50" // Added opacity to match the faint look in screenshot
    />
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Fresh Wings Daily",
      icon: <ShoppingBasket size={40} strokeWidth={1.5} />, 
    },
    {
      id: 2,
      title: "Signature House Sauces",
      icon: <Store size={40} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Fast Delivery & Pickup",
      icon: <Bike size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="relative bg-black pb-35 text-white overflow-hidden max-h-screen">
      
      {/* --- Top Right Pizza Image --- */}
      {/* Positioned absolute to stick to the top right corner. 
          Replace src with your actual pizza sketch image. */}
      <div className="absolute top-6 -right-28 w-64 md:w-96 opacity-80 pointer-events-none ">
         <img
           src="/assets/splaterpizza.png" 
           alt="pizza sketch" 
           className="w-auto h-full object-contain rotate-282
           "
         />
      </div>

      <div className=" mx-auto relative z-10 pl-12">
        
        {/* --- Header Section --- */}
        {/* Flex container to split Headline (Left) and Paragraph (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 pt-5">
          
          {/* Left Side: Label & Headline */}
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              {/* Small Bear Icon Placeholder */}
              <span className="text-2xl">🐻</span> 
              <span className="text-yellow-500 font-bold tracking-wide text-sm uppercase">
                The Jasper Experience
              </span>
            </motion.div>

<motion.h6 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-2xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tight"
>
  <span className="whitespace-nowrap">More Than A Bite - </span>
  <br />
  <span className="text-yellow-500">It's A Mood</span>
</motion.h6>

          </div>

          {/* Right Side: Description Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3"
          >
            <p className="text-gray-400  max-w-7xl text-lg leading-tight font-barlow pr-6">
              Loud Flavours. Fresh Ingredients. Hot Off The Fryer. We Don't Just
              Serve Food — We Serve Cravings.
            </p>
          </motion.div>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              {/* Yellow Circle Container */}
              <div className="w-32 h-32 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-8 border-4 border-yellow-500 ring-4 ring-black ring-inset">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold tracking-wide">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
// Sample data for testimonials







const Home = () => {
  return (
    <div className="font-sans text-white selection:bg-yellow-400 selection:text-black">
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
