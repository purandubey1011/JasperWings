import React from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import WeeklyDealsShowcase from "./WeeklyDealsShowcase";

const categories = [
  {
    id: "wings",
    name: "Wings",
    count: "06 Dishes",
    image:
      "https://ik.imagekit.io/jasperwings/jasper%20website%20images/1lb%20(1flavour)skip.jpg?updatedAt=1773393911524",
  },
  {
    id: "burgers",
    name: "Burgers",
    count: "05 Dishes",
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20burger.jpg",
  },
  {
    id: "fries",
    name: "Fries",
    count: "10 Dishes",
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/fries/french%20fries.jpg",
  },
  {
    id: "combo",
    name: "Combo",
    count: "06 Dishes",
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_1%20Loaded%20wing%20combo(1).jpg",
  },
];

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
    transition: { duration: 0.6, ease: "easeOut" },
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

const CategoryCard = ({ category }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center group"
  >
    <div className="relative w-64 h-32 md:w-68 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:bg-black/5" />
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
    </div>

    <div className="mt-1 text-center z-10 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-lg md:bg-transparent">
      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      <p className="text-[#d96828] text-xs font-medium uppercase tracking-wide mt-1">
        {category.count}
      </p>
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

const WhatHotNow = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans selection:bg-yellow-200">
      <motion.img
        animate={floatAnimation}
        src="https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/radish.png"
        alt="Top Left Decor"
        className="hidden lg:block absolute top-44 left-0 w-40 pointer-events-none"
      />

      <motion.img
        animate={floatAnimation}
        transition={{ delay: 1 }}
        src="https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/capsicum.png"
        alt="Top Right Decor"
        className="hidden lg:block absolute top-44 -right-14 w-40 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 lg:mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="content flex flex-col items-center text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-wide text-gray-700 flex items-center mb-4"
          >
            <Utensils size={20} className="text-[#d96828]" />
            <span className="ml-2 text-[#d96828] uppercase font-bold text-xs">
              Explore the Menu
            </span>
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl text-black font-extrabold text-center leading-tighter"
          >
            Whats Hot <br />
            Right
            <span className="text-[#d96828] ml-3">Now</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-center text-sm md:text-base mt-3"
          >
            Daily deal energy, Jasper style.
          </motion.p>
        </motion.div>

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

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gray-300 mb-16 mx-auto"
        />

        <WeeklyDealsShowcase />

        <ViewFullMenuButton />
      </div>
    </div>
  );
};

export default WhatHotNow;
