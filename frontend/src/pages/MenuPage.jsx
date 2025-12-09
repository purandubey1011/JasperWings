import React from 'react'

import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, Facebook, Instagram, Twitter, ChevronRight, Star, Plus } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/Home/Footer';
import BookTableSection from '../components/Home/BookTableSection';
import MenuHero from '../components/menu/MenuHero';

// --- Mock Data ---

const CATEGORIES = [
  { id: 'All', name: 'All', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80' },
  { id: 'wings', name: 'Wings', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80' },
  { id: 'Tenders', name: 'Tenders', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
  { id: 'burgers', name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
  { id: 'Fries', name: 'Fries', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80' },
  { id: 'Loaded Combos', name: 'Loaded Combos', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80' },
  { id: 'pasta', name: 'Pasta', image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80' },
  { id: 'Sauces & Dips', name: 'Sauces & Dips', image: 'https://images.unsplash.com/photo-1563729768474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80' },
  { id: 'drinks', name: 'Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80' },
];

const MENU_ITEMS = {
  wings: [
    { id: 101, name: 'Crispy Wings', price: '12.00', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80' },
    { id: 102, name: 'Spicy Buffalo', price: '14.50', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80' },
    { id: 103, name: 'BBQ Glazed', price: '13.00', image: 'https://images.unsplash.com/photo-1527477396000-6489b5bd16f3?auto=format&fit=crop&w=500&q=80' },
    { id: 104, name: 'Garlic Parmesan', price: '13.50', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80' },
  ],
  burgers: [
    { id: 201, name: 'Classic Smash', price: '10.00', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
    { id: 202, name: 'Double Cheese', price: '15.00', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80' },
    { id: 203, name: 'Spicy Chicken', price: '12.50', image: 'https://images.unsplash.com/photo-1615297928064-24977384d0bf?auto=format&fit=crop&w=500&q=80' },
    { id: 204, name: 'Veggie Supreme', price: '11.00', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80' },
  ],
  sandwiches: [
    { id: 301, name: 'Club Sandwich', price: '9.00', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80' },
    { id: 302, name: 'Grilled Cheese', price: '8.50', image: 'https://images.unsplash.com/photo-1528736235302-52922dfa4551?auto=format&fit=crop&w=500&q=80' },
    { id: 303, name: 'BLT Special', price: '10.50', image: 'https://images.unsplash.com/photo-1619860860774-1e7e17c0cb86?auto=format&fit=crop&w=500&q=80' },
    { id: 304, name: 'Panini Press', price: '11.00', image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=500&q=80' },
  ],
  pizza: [
    { id: 401, name: 'Margherita', price: '14.00', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80' },
    { id: 402, name: 'Pepperoni', price: '16.00', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80' },
    { id: 403, name: 'Veggie Feast', price: '15.00', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80' },
    { id: 404, name: 'BBQ Chicken', price: '17.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80' },
  ],
   dessert: [
    { id: 501, name: 'Choco Cake', price: '8.00', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80' },
    { id: 502, name: 'Cheesecake', price: '9.00', image: 'https://images.unsplash.com/photo-1524351199678-941a58a3dfcd?auto=format&fit=crop&w=500&q=80' },
    { id: 503, name: 'Ice Cream', price: '6.00', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=80' },
    { id: 504, name: 'Brownie', price: '7.00', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80' },
  ],
};

// --- Components ---





const CategoryRail = ({ activeCategory, setActiveCategory }) => (
<div className="py-8 h-60 bg-black sticky top-16 z-40 shadow-lg border-b border-white/5">
  <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide ">

    {/* Background Pan Image */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 
                    w-[220px] h-auto opacity-40 pointer-events-none">
      <img src="/assets/pan.png" alt="pan" className="w-full object-contain" />
    </div>

    <div className="flex space-x-6 md:space-x-12 min-w-max justify-start md:justify-center px-2 relative z-10">
      {CATEGORIES.map((cat) => (
        <button 
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`group flex flex-col items-center space-y-3 transition-all duration-300 
            ${activeCategory === cat.id ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100'}`}
        >
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-1 border-2 transition-colors duration-300 overflow-hidden 
            ${activeCategory === cat.id ? 'border-amber-400' : 'border-transparent group-hover:border-white/30'}`}>
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className={`text-xs md:text-sm font-bold uppercase tracking-wide transition-colors 
            ${activeCategory === cat.id ? 'text-amber-400' : 'text-gray-400 group-hover:text-white'}`}>
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  </div>
</div>

);

const ItemCard = ({ item }) => (
  <div className="group relative bg-amber-400 rounded-xl p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:-translate-y-1 overflow-hidden">
    {/* Price Tag */}
    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm z-10">
      <span className="text-black font-bold text-sm">${item.price}</span>
    </div>

    {/* Image Container */}
    <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-black/5">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Quick Add Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <button className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors transform hover:scale-110 shadow-lg">
            <Plus size={24} strokeWidth={3} />
         </button>
      </div>
    </div>

    {/* Content */}
    <div className="text-center">
      <h3 className="text-black font-black text-lg md:text-xl uppercase leading-tight mb-1">{item.name}</h3>
      <p className="text-black/60 text-xs font-medium uppercase tracking-wide">Delicious & Hot</p>
    </div>
  </div>
);

const MenuSection = ({ title, items, id }) => (
  <div id={id} className="py-12 md:py-16 border-b border-white/5 last:border-0">
    <div className="flex items-center justify-between mb-8 md:mb-12">
      <div>
         <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">{title}</h2>
         <div className="h-1 w-20 bg-amber-400 mt-2"></div>
      </div>
      <button className="hidden md:flex items-center text-gray-400 hover:text-amber-400 transition-colors text-sm font-bold uppercase tracking-wider group">
        View All <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
      </button>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
);



const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Scroll to section when category is clicked
  useEffect(() => {
    if (activeCategory) {
      const element = document.getElementById(activeCategory);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // setTimeout(() => setActiveCategory(null), 1000); 
      }
    }
  }, [activeCategory]);

  return (
    <div className="bg-neutral-950 font-sans selection:bg-amber-400 selection:text-black">
      <Navbar />
      <MenuHero />
      <CategoryRail activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {Object.entries(MENU_ITEMS).map(([key, items]) => {
           // Find pretty name for category
           const catName = CATEGORIES.find(c => c.id === key)?.name || key;
           return (
             <MenuSection 
               key={key} 
               id={key}
               title={catName} 
               items={items} 
             />
           );
        })}
        <BookTableSection/>
      </main>
      

      <Footer />
    </div>
  );
};

export default MenuPage;
