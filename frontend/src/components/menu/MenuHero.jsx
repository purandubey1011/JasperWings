import React from 'react'
import { Utensils } from "lucide-react";

const MenuHero = () => (
  <div className="relative lg:h-screen md:h-[70vh] w-full bg-neutral-900 overflow-hidden ">
    <div className="absolute inset-0">
      <img 
        src="/assets/menuhero.jpg" 
        alt="Food Background" 
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-neutral-950/10"></div>
    </div>
    
    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
      <span className="text-white font-medium tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in flex"> <Utensils size={24} strokeWidth={1.5} className='mr-2'/> Menu</span>
      <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
        Pick Your <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Craving</span>
      </h1>
      <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-lg">
        Wings, tenders, burgers & fries — all fresh, hot & ready to fire.
      </p>
      <div className="flex gap-4 items-center mt-2">
            <button
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 md:px-8 rounded-full transition transform hover:scale-[1.02] shadow-[0_8px_30px_rgba(251,191,36,0.18)]"
              aria-label="Order Now"
            >
              ORDER NOW
            </button>

            <button
              className="border border-white/40 text-white/90 hover:bg-white/10 px-6 md:px-8 py-3 rounded-full font-semibold transition"
              aria-label="Explore Menu"
            >
              EXPLORE MENU
            </button>
          </div>
    </div>
  </div>
);

export default MenuHero