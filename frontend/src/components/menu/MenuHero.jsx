import React from 'react'

const MenuHero = () => (
  <div className="relative lg:h-screen md:h-[70vh] w-full bg-neutral-900 overflow-hidden mt-16">
    <div className="absolute inset-0">
      <img 
        src="/assets/menuhero.jpg" 
        alt="Food Background" 
        className="w-full h-full object-cover opacity-60"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950"></div> */}
    </div>
    
    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
      <span className="text-amber-400 font-medium tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in">Welcome to Taste</span>
      <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
        Pick Your <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Craving</span>
      </h1>
      <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-lg">
        Experience the crunch, the spice, and the flavor in every bite. Our menu is crafted to satisfy your deepest hunger.
      </p>
      <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
        Order Now
      </button>
    </div>
  </div>
);

export default MenuHero