import React from 'react';
import { ShoppingBasket, Flame, UtensilsCrossed, Utensils } from 'lucide-react';

// --- Assets & Data ---

// Using high-quality Unsplash images to match the food items in the mock
const categories = [
  {
    id: 1,
    name: 'Wings',
    count: '12 Dishes in the Menu',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1980&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Tenders',
    count: '04 Dishes in the Menu',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Burgers',
    count: '12 Dishes in the Menu',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Fries',
    count: '12 Dishes in the Menu',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1925&auto=format&fit=crop',
  },
];

const products = [
  {
    id: 1,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1780&auto=format&fit=crop', // Burger/Fries board
  },
  {
    id: 2,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop', // Wings plate
  },
  {
    id: 3,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop', // Wrap
  },
  {
    id: 4,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop', // Burger Combo
  },
  {
    id: 5,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop', // Pizza
  },
  {
    id: 6,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop', // Pasta
  },
  {
    id: 7,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop', // Big Burger
  },
  {
    id: 8,
    name: 'Delicious Burger',
    price: 280,
    oldPrice: 300,
    discount: '-25%',
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=2070&auto=format&fit=crop', // Tacos
  },
];

// --- SVGs for Doodles ---
const LeafDoodleLeft = () => (
  <svg width="100" height="80" viewBox="0 0 100 80" className="absolute top-0 left-0 -ml-4 mt-4 opacity-80 pointer-events-none z-0 transform -rotate-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,40 Q30,10 60,20 T90,30 M60,20 Q50,50 30,70" stroke="#84CC16" strokeWidth="2" fill="none" />
    <path d="M10,40 Q20,60 40,70" stroke="#84CC16" strokeWidth="2" fill="none" />
    <path d="M60,20 L65,5" stroke="#84CC16" strokeWidth="2" />
    <circle cx="20" cy="50" r="2" fill="#84CC16" />
    <circle cx="80" cy="25" r="2" fill="#84CC16" />
  </svg>
);

const LeafDoodleRight = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" className="absolute top-20 right-10 opacity-60 pointer-events-none z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,10 Q40,5 60,40 Q50,70 20,60 Q5,40 10,10 Z" stroke="#65A30D" strokeWidth="1.5" />
    <path d="M60,40 L75,50" stroke="#65A30D" strokeWidth="1.5" />
  </svg>
);

const PepperDoodle = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" className="absolute top-[280px] right-0 translate-x-1/2 opacity-80 pointer-events-none z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M30,20 Q50,5 70,20 Q90,30 85,60 Q80,90 50,95 Q20,90 15,60 Q10,30 30,20" stroke="#52525B" strokeWidth="1" />
     <path d="M50,20 Q50,35 50,45" stroke="#52525B" strokeWidth="1" />
     <path d="M45,15 L55,10" stroke="#52525B" strokeWidth="1" />
  </svg>
);

const GarlicDoodle = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" className="absolute top-[320px] left-0 -translate-x-1/4 opacity-30 pointer-events-none z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40,10 Q60,20 65,40 Q70,70 40,75 Q10,70 15,40 Q20,20 40,10" stroke="#FB923C" strokeWidth="1" />
    <path d="M40,10 L40,40" stroke="#FB923C" strokeWidth="1" />
  </svg>
);


// --- Components ---

const SectionHeader = () => (
  <div className="relative text-center mb-16 pt-12">
    {/* Top Tag */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-yellow-400">
         <UtensilsCrossed size={16} fill="currentColor" />
      </span>
      <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm font-sans">
        Explore The Menu
      </span>
    </div>

    {/* Main Heading */}
    <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter" style={{ fontFamily: "'Anton', sans-serif" }}>
      WHAT'S HOT <br className="md:hidden" />
      <span className="text-yellow-400 inline-block ml-2 relative">
        RIGHT NOW
        {/* Underline decorative scratch */}
        <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
           <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    </h2>

    {/* Subtitle */}
    <p className="mt-4 text-gray-600 text-lg font-medium">
      Choose Your Craving.
    </p>

    {/* Doodles */}
    <div className="hidden md:block">
      <LeafDoodleLeft />
      <LeafDoodleRight />
    </div>
  </div>
);

const CategoryCard = ({ category }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    {/* Pill Shape Image Container */}
    <div className="relative w-64 h-32 md:w-72 md:h-36 rounded-[50px] overflow-hidden border-4 border-white shadow-lg transition-transform transform group-hover:-translate-y-1 duration-300">
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    {/* Text */}
    <div className="mt-4 text-center z-10 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg md:bg-transparent">
      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      <p className="text-yellow-500 text-xs font-medium uppercase tracking-wide mt-1">
        {category.count}
      </p>
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-[#FFC629] p-4 flex flex-col items-center justify-between h-[320px] relative overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
    
    {/* Discount Badge - Top Left */}
    <div className="absolute top-4 left-4 z-20 bg-white px-2 py-1 rounded shadow-sm">
      <span className="text-xs font-bold text-gray-900">{product.discount}</span>
    </div>

    {/* Price Tag - Top Right */}
    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
      <span className="text-white font-bold text-lg drop-shadow-md">₹{product.price}</span>
      <span className="text-white/70 text-sm line-through decoration-1">₹{product.oldPrice}</span>
    </div>

    {/* Image */}
    <div className="w-full h-48 flex items-center justify-center mt-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="max-h-full max-w-full object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Title */}
    <div className="mt-auto mb-4 text-center">
      <h3 className="text-black font-extrabold text-lg tracking-tight">
        {product.name}
      </h3>
    </div>
  </div>
);

const ViewFullMenuButton = () => (
  <div className="flex justify-center mt-16 mb-12">
    <button className="px-8 py-3 bg-white border-2 border-yellow-400 text-yellow-500 font-bold rounded-full uppercase tracking-wider text-sm hover:bg-yellow-400 hover:text-white transition-colors duration-300 shadow-sm">
      View Full Menu
    </button>
  </div>
);

// --- Main App Component ---

const WhatHotNow = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans selection:bg-yellow-200 pt-12">
      

        {/* Top-Left Image */}
  <img
    src="/assets/radish.png"
    alt="Top Left Decor"
    className="hidden lg:block absolute top-44 left-0 w-40 pointer-events-none"
  />

  {/* Top-Right Image */}
  <img
    src="/assets/capsicum.png"
    alt="Top Right Decor"
    className="hidden lg:block absolute top-44 -right-14 w-40 pointer-events-none"
  />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid-4 py-8 relative z-10 lg:mt-28">


<div className="content flex flex-col items-center text-center">

  {/* Top small label */}



  <p className="text-sm font-semibold tracking-wide text-gray-700 flex items-center">
            <Utensils size={20} />
            <span className=" ml-2  text-amber-300 uppercase font-bold tracking-widest">
    JASPER FAVOURITES
            </span>
  </p>

  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center leading-tight">
    Whats Hot Right <br />
    <span className="text-yellow-500">Now</span>
  </h2>

  {/* Subtitle */}
  <p className="text-gray-600 text-center text-sm md:text-base">
    Our Most-Ordered Picks Of The Week.
  </p>
</div>
      

        {/* Categories Carousel / Row */}
<div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12 mb-20 mt-5">
  {categories.map((cat) => (
    <CategoryCard key={cat.id} category={cat} />
  ))}
</div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-400 mb-16 mx-auto max-w-6xl"></div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* Footer Button */}
        <ViewFullMenuButton />
        
      </div>
    </div>
  );
};

export default WhatHotNow;