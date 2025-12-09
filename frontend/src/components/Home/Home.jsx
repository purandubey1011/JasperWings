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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-5 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col leading-none w-52">
          <img src="/assets/logo.jpg" alt="" />
        </div>

        {/* Desktop Menu - Centered as per image */}
        <div className="hidden md:flex gap-12 font-bold text-sm tracking-wider items-center absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Menu
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Contact
          </a>
        </div>

        {/* CTA Button - Outlined as per image */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-gray-800 p-6 flex flex-col gap-4 text-center">
          <a href="#" className="hover:text-yellow-400 uppercase font-bold">
            Home
          </a>
          <a href="#menu" className="hover:text-yellow-400 uppercase font-bold">
            Menu
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 uppercase font-bold"
          >
            Contact
          </a>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold uppercase w-full">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center bg-black overflow-hidden">
      {/* Left Grunge/Splatter Effect */}

      {/* Right Grunge/Splatter Effect */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-[15%] h-96 md:w-[12%] bg-[#FCBA23] z-20 hidden md:block" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%, 25% 90%, 10% 80%, 20% 70%, 5% 60%, 25% 50%, 10% 40%, 20% 30%, 5% 20%, 15% 10%)' }}>
           <div className="absolute inset-0 opacity-10 bg-black mix-blend-overlay"></div>
           <div className="absolute top-24 left-[-10px] w-3 h-3 bg-yellow-400 rounded-full"></div>
           <div className="absolute bottom-40 left-[-20px] w-5 h-5 bg-yellow-400 rounded-full"></div>
      </div> */}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 mx-0 md:mx-[10%] rounded-3xl">
        <img
          src="/assets/hero.jpg" // Changed to a warmer restaurant interior
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat size={20} className="text-white" />
            <span className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
              Toronto's Most Loved Wing Spot
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className=" font-barlow text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter"
            style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
          >
            MORE FLAVOUR.
            <br />
            MORE FIRE.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 tracking-wide">
            Wings, Tenders, Burgers & Fries — Tossed Fresh And Served Hot.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest shadow-lg hover:bg-yellow-300 transition-colors"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              className="border border-white text-white px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:border-yellow-400 transition-colors"
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutSection = () => {
return (
    <div className="relative bg-black text-white py-20 px-6 overflow-hidden">

      {/* LEFT TOMATO — simple, fixed, above pizza */}
      <img
        src="/assets/tomato.png"
        alt="tomato"
        className="absolute top-10 left-0 w-32 md:w-56 object-contain pointer-events-none z-2 ml-12"
      />

      {/* RIGHT CAPSICUM — fixed right */}
      <img
        src="/assets/capsicum.png"
        alt="capsicum"
        className="absolute top-5 -right-14 h-48 w-40 md:w-56 object-contain pointer-events-none z-20"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mt-32 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* PIZZA IMAGE */}
        <div>
          <img
            src="/assets/pizza.jpg"
            alt="Cheesy Pizza"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>

        {/* TEXT AREA */}
        <div>
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            <Utensils size={20} />
            <span className="uppercase font-bold tracking-widest">
              Our Story
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            CANADIAN FLAVOUR,
            <br /> STREET-STYLE SPIRIT.
          </h2>

          <p className="text-gray-400 mb-6 text-lg">
            We bring the heat to the street. Our chefs masterfully blend
            traditional spices with modern fast-food favorites to create an
            explosion of flavor in every bite.
          </p>

          <ul className="space-y-4">
            {[
              "No frozen patties",
              "House-made secret sauces",
              "Locally sourced veggies",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium">
                <span className="bg-yellow-400 text-black rounded-full p-1">
                  <ChevronRight size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
  {/* Positioned absolute to the left. 'md:block' means it only shows on larger screens */}
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
        {/* You can add the small bear icon here if you have it */}
        <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm">
            Jasper Favourites
        </h4>
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
    <div className="relative bg-red-300 py-24 text-white overflow-hidden">
      
      {/* --- Top Right Pizza Image --- */}
      {/* Positioned absolute to stick to the top right corner. 
          Replace src with your actual pizza sketch image. */}
      <div className="absolute top-0 right-0 w-64 md:w-96 opacity-80 pointer-events-none ">
         <img 
           src="/assets/splaterpizza.png" 
           alt="pizza sketch" 
           className="w-full h-full object-contain scale-y-[-1]
           "
         />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-20">
        
        {/* --- Header Section --- */}
        {/* Flex container to split Headline (Left) and Paragraph (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
          
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

<motion.h4 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight"
>
  <span className="whitespace-nowrap">More Than A Bite - </span>
  <br />
  <span className="text-yellow-500">It's A Mood</span>
</motion.h4>

          </div>

          {/* Right Side: Description Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3"
          >
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
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
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
];

const TestimonialCard = ({ text, name, title, rating }) => {
  return (
    <div className="bg-[#111111] p-8 rounded-3xl text-center flex flex-col items-center">
      <FaQuoteLeft className="text-orange-500 text-4xl mb-6" />
      <p className="text-gray-400 mb-8 leading-relaxed">{text}</p>
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-orange-500 text-lg" />
        ))}
      </div>
      
      <h4 className="text-white font-bold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative max-h-screen bg-red-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center items-start opacity-10 pointer-events-none">
        {/* Replace with your actual image path */}
        <img src="/path/to/your/bear-bg.png" alt="Bear Background" className="w-auto h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold mb-4">
            <FaPaw className="text-xl" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, sans-serif' }}>
            WHAT CUSTOMER SAYS?
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-4 h-4 bg-orange-500 rounded-full cursor-pointer"></span>
          <span className="w-4 h-4 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition"></span>
          <span className="w-4 h-4 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition"></span>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1628519592419-86a347959b21?auto=format&fit=crop&w=800&q=80", // Phone/QR Scan
    "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80", // Steak on Grill
    "https://images.unsplash.com/photo-1628519592419-86a347959b21?auto=format&fit=crop&w=800&q=80", // Phone/QR Scan (Duplicate for pattern)
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80", // Steak on Board
    "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80", // Steak on Grill
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80", // Steak on Board
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80", // Coffee Pour
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80", // Steak on Board
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 px-12 mt-5 gap-1 p-1 bg-black">
      {galleryImages.map((src, idx) => (
        <motion.div 
          key={idx} 
          whileHover={{ opacity: 0.8 }}
          className="h-64 overflow-hidden relative cursor-pointer"
        >
           <img src={src} alt="Gallery" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center text-white opacity-0 hover:opacity-100">
             <Instagram size={32} />
           </div>
        </motion.div>
      ))}
    </div>
  );
};

const BookTableSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden group">
      <div 
        className="absolute bg-[url('/assets/booktable.jpg')] inset-0 w-full h-full bg-no-repeat bg-cover bg-center transition-transform duration-700 transform"
      >
        {/* Dark Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top "BOOK NOW" label */}
        <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold mb-6 tracking-wider">
          <FaPaw className="text-yellow-500 text-lg" />
          <span>BOOK NOW</span>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8 uppercase" style={{ fontFamily: 'sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          READY TO INDULGE? <br />
          BOOK YOUR <span className="text-yellow-500">TABLE NOW!</span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 uppercase tracking-wide">
            ORDER NOW
          </button>
          <button className="px-8 py-3 bg-transparent text-white font-bold border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 uppercase tracking-wide">
            RESERVE TABLE
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-yellow-400 p-2 rounded-full text-black">
              <Flame size={20} />
            </div>
            <span className="text-2xl font-bold">
              JASPER<span className="text-yellow-400">WINGS</span>
            </span>
          </div>
          <h3 className="text-3xl font-black mb-6 leading-tight">
            READY TO INDULGE?
            <br /> BOOK YOUR <span className="text-yellow-400">TABLE NOW!</span>
          </h3>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold uppercase hover:bg-yellow-500 transition-colors">
            Book Reservation
          </button>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-yellow-400">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 flex-shrink-0" size={18} />
              <span>123 Flavor Street, Foodie City, FC 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} />
              <span>Mon-Sun: 11am - 11pm</span>
            </li>
            <li className="flex gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-zinc-900 text-gray-600 text-sm">
        © 2024 Jasper Wings. All rights reserved.
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="font-sans text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <MenuSection />
      <FeatureSection />
      <TestimonialsSection />
      <GallerySection />
      <BookTableSection />
      <div id="contact">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
