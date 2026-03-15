import React, { useState } from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

// --- Assets & Data ---

const menuCollections = {
  wings: [
    {
      id: 1,
      name: "1 lb (1 flavour)",
      price: "$13.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/1lb%20(1flavour)skip.jpg?updatedAt=1773393911524",
    },
    {
      id: 2,
      name: "2 lb (1 flavour)",
      price: "$26.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/2lb%20(1%20Flavour)(1)skip.jpg?updatedAt=1773393911452",
    },
    {
      id: 3,
      name: "3 lb (2 flavours)",
      price: "$38.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/3lb%20(2%20flavours)(1).jpg?updatedAt=1773393911397",
    },
    {
      id: 4,
      name: "4 lb (2 flavours)",
      price: "$52.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/4lb%20(2%20flavours)(1).jpg?updatedAt=1773393911399",
    },
    {
      id: 5,
      name: "5 lb (3 flavours)",
      price: "$65.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/5lb%20(3%20flavours)(1).jpg?updatedAt=1773393918721",
    },
    {
      id: 7,
      name: "6 lb (6 flavours)",
      price: "$83.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/6lb%20(6%20flavours)(1).jpg?updatedAt=1773393917018",
    },
  ],
  burgers: [
    {
      id: 11,
      name: "Crispy Chicken Burger",
      price: "$11.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20burger.jpg",
    },
    {
      id: 12,
      name: "Grilled Chicken Burger",
      price: "$11.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/grilled%20chicken%20burger.jpg",
    },
    {
      id: 13,
      name: "Veggie Deluxe Burger",
      price: "$11.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/breade(1).jpg?updatedAt=1773393914049",
    },
    {
      id: 14,
      name: "Ham Burger",
      price: "$11.99",
      image: "https://ik.imagekit.io/jasperwings/drive%20photos/Hamburger.jpg",
    },
    {
      id: 15,
      name: "Meat Lover Burger",
      price: "$14.99",
      image:
        "https://ik.imagekit.io/jasperwings/jasper%20website%20images/_DSC8777.jpg?updatedAt=1773393921306",
    },
  ],
  fries: [
    {
      id: 21,
      name: "Classic Fries",
      price: "$6.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/fries/classic%20fries%202%20.jpg?updatedAt=1773490682800",
    },
    {
      id: 22,
      name: "Loaded Fries",
      price: "$9.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/fries/loaded%20fries.jpg?updatedAt=1773490682637",
    },
    {
      id: 23,
      name: "Loaded Parmesan Fries",
      price: "$9.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/fries/parm%20fries.jpg?updatedAt=1773490666520",
    },
    {
      id: 24,
      name: "Garlic Parmesan Fries",
      price: "$8.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/fries/parm%20fries.jpg?updatedAt=1773490666520",
    },
    {
      id: 29,
      name: "Onion Rings",
      price: "$8.99",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/fries/onion%20rings%20(1).jpg?updatedAt=1773554826670",
    },
  ],
  combo: [
    {
      id: 35,
      name: "Jasper Combo",
      price: "$17.99",
      desc: "(1 lb wings - 1 flavour, loaded fries, pop)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_1%20Loaded%20wing%20combo(1).jpg",
    },
    {
      id: 36,
      name: "Jasper King Combo",
      price: "$29.99",
      desc: "(1 lb wings, 2 tenders, fries, 2 pops)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_2%20Wing%20&%20tender%20combo(1).jpg",
    },
    {
      id: 37,
      name: "Wing Combo",
      price: "$16.99",
      desc: "(1 lb wings, fries, pop)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/loaded%20wing%20combo.jpg",
    },
    {
      id: 38,
      name: "Double Wings Combo",
      price: "$34.99",
      desc: "(2 lb wings, loaded fries, pop)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/dad73ff8-b6d2-4927-b1e6-958ad05deaee.jpg",
    },
    {
      id: 39,
      name: "Triple Wing Combo",
      price: "$44.99",
      desc: "(2 lb wings, 2 sliders, fries, 3 pops)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/fb6e3046-f8fa-4217-9c39-38201e1bfbff.jpg",
    },
    {
      id: 40,
      name: "Veggie Lovers Combo",
      price: "$16.99",
      desc: "(Veggie wrap, loaded fries, pop)",
      image:
        "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_5%20Veggie%20Loaded%20Combo(1)(1).jpg",
    },
  ],
};

const categories = [
  {
    id: "wings",
    name: "Wings",
    image: menuCollections.wings[0].image,
  },
  {
    id: "burgers",
    name: "Burgers",
    image: menuCollections.burgers[0].image,
  },
  {
    id: "fries",
    name: "Fries",
    image: menuCollections.fries[1].image,
  },
  {
    id: "combo",
    name: "Combo",
    image: menuCollections.combo[0].image,
  },
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

const CategoryCard = ({ category, isActive, onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    <div
      className={`relative w-64 h-32 md:w-68 md:h-32 rounded-full overflow-hidden border-4 shadow-lg transition-all duration-300 ${
        isActive ? "border-[#d96828] scale-[1.03]" : "border-white"
      }`}
    >
      <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:bg-black/5"></div>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
    </div>

    <div className="mt-1 text-center z-10 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-lg md:bg-transparent">
      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      <p className="text-[#d96828] text-xs font-medium uppercase tracking-wide mt-1">
        {String(menuCollections[category.id].length).padStart(2, "0")} Dishes
      </p>
    </div>
  </motion.button>
);

const ProductCard = ({ product }) => (
  <motion.div 
    variants={scaleIn}
    whileHover={{ y: -10, boxShadow: "0px 18px 36px rgba(0,0,0,0.18)" }}
    className="group relative min-h-[280px] overflow-hidden rounded-md transition-shadow duration-300"
  >
    <motion.img
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      src={product.image}
      alt={product.name}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

    <div className="relative z-10 flex h-full flex-col justify-end p-5 text-center">
      <div className="mb-2 inline-flex self-center rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm">
        {product.price}
      </div>

      <h3 className="text-base font-extrabold tracking-tight text-white drop-shadow-lg sm:text-lg">
        {product.name}
      </h3>

      {product.desc && (
        <p className="mt-2 text-xs font-medium leading-5 text-white/90 drop-shadow-md">
          {product.desc}
        </p>
      )}
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
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#FACC15", color: "#fff" }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full"
    >
      <Link
        to="/menu"
        className="block px-8 py-3 bg-white border-2 border-[#d96828] text-[#d96828] font-bold rounded-full uppercase tracking-wider text-sm shadow-sm transition-colors duration-300"
      >
        View Full Menu
      </Link>
    </motion.div>
  </motion.div>
);

// --- Main App Component ---

const WhatHotNow = () => {
  const [activeCategory, setActiveCategory] = useState("wings");
  const activeProducts = menuCollections[activeCategory];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans selection:bg-yellow-200">
      
      {/* Top-Left Image (Floating) */}
      <motion.img
        animate={floatAnimation}
        src="https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/radish.png"
        alt="Top Left Decor"
        className="hidden lg:block absolute top-44 left-0 w-40 pointer-events-none"
      />

      {/* Top-Right Image (Floating) */}
      <motion.img
        animate={floatAnimation}
        transition={{ delay: 1 }} // Offset animation
        src="https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/capsicum.png"
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
            <CategoryCard
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
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
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
        >
          {activeProducts.map((prod) => (
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
