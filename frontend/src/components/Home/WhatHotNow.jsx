import React from "react";
import { motion } from "framer-motion";
import { ShoppingBasket, Flame, UtensilsCrossed, Utensils } from "lucide-react";

// --- Assets & Data ---

const categories = [
  {
    id: 1,
    name: "Wings",
    count: "12 Dishes",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1980&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tenders",
    count: "04 Dishes",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Burgers",
    count: "12 Dishes",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Fries",
    count: "12 Dishes",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1925&auto=format&fit=crop",
  },
];

const products = [
  { id: 1, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 2, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 3, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 4, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 5, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 6, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 7, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
  { id: 8, name: "Delicious Burger", price: 280, oldPrice: 300, discount: "-25%", image: "/home/whathotnow/productfood.png" },
];

// --- Animation Variants ---

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const floatAnimation = {
  y: [0, -15, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// --- Components ---

const CategoryCard = ({ category }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    {/* Pill Shape Image Container */}
    <div className="relative w-64 h-32 md:w-68 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-black/10 z-10 transition-opacity group-hover:bg-black/0"></div>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
    </div>

    {/* Text */}
    <div className="mt-1 text-center z-10 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-lg md:bg-transparent">
      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      <p className="text-[#d96828] text-xs font-medium uppercase tracking-wide mt-1">
        {category.count}
      </p>
    </div>
  </motion.div>
);

const ProductCard = ({ product }) => (
  <motion.div 
    variants={scaleIn}
    whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
    className="bg-[#d96828] rounded-md overflow-hidden flex flex-col items-center p-4 sm:p-5 transition-shadow duration-300"
  >
    {/* Image container */}
    <div className="w-full flex-grow flex items-center justify-center">
      <motion.img
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200 }}
        src={product.image}
        alt={product.name}
        className="w-full max-h-40 sm:max-h-48 object-contain drop-shadow-xl"
      />
    </div>

    {/* Discount + Price pills */}
    <div className="w-full flex items-center justify-center gap-3 mt-4">
      <div className="bg-white text-xs font-bold text-gray-900 px-2 py-1 rounded-md shadow-sm">
        {product.discount}
      </div>

      <div className="px-2 py-1 rounded-md flex items-center gap-2 text-white">
        <span className="text-sm font-extrabold ">₹{product.price}</span>
        <span className="text-xs line-through">₹{product.oldPrice}</span>
      </div>
    </div>

    {/* Title */}
    <div className="mt-3 w-full text-center">
      <h3 className="text-black font-extrabold text-base sm:text-lg tracking-tight">
        {product.name}
      </h3>
    </div>
  </motion.div>
);

const ViewFullMenuButton = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mt-12 md:mt-16 mb-6"
  >
    <motion.button 
      whileHover={{ scale: 1.05, backgroundColor: "#FACC15", color: "#fff" }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-white border-2 border-[#d96828] text-[#d96828] font-bold rounded-full uppercase tracking-wider text-sm shadow-sm transition-colors duration-300"
    >
      View Full Menu
    </motion.button>
  </motion.div>
);

// --- Main App Component ---

const WhatHotNow = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans selection:bg-yellow-200">
      
      {/* Top-Left Image (Floating) */}
      <motion.img
        animate={floatAnimation}
        src="/assets/radish.png"
        alt="Top Left Decor"
        className="hidden lg:block absolute top-44 left-0 w-40 pointer-events-none"
      />

      {/* Top-Right Image (Floating) */}
      <motion.img
        animate={floatAnimation}
        transition={{ delay: 1 }} // Offset animation
        src="/assets/capsicum.png"
        alt="Top Right Decor"
        className="hidden lg:block absolute top-44 -right-14 w-40 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid-4 py-8 relative z-10 lg:mt-14">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="content flex flex-col items-center text-center"
        >
          {/* Top small label */}
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-wide text-gray-700 flex items-center mb-4">
            <Utensils size={20} className="text-[#d96828]" />
            <span className=" ml-2  text-[#d96828] uppercase font-bold text-xs">
              Explore the Menu
            </span>
          </motion.p>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl text-black font-extrabold text-center leading-tighter">
            Whats Hot <br />
            Right
            <span className="text-[#d96828] ml-3">Now</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-gray-600 text-center text-sm md:text-base mt-3">
             Choose your craving.
          </motion.p>
        </motion.div>

        {/* Categories Carousel / Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
          className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-6 mb-10 md:mb-20 mt-10"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </motion.div>

        {/* Separator Line (Expands width) */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gray-300 mb-16 mx-auto"
        />

        {/* Products Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
        >
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </motion.div>

        {/* Footer Button */}
        <ViewFullMenuButton />
      </div>
    </div>
  );
};

export default WhatHotNow;