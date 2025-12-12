import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* <Navbar bg/> */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/franchiseImg.png" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wider">
          <span className="text-xl">☕</span> FRANCHISE JASPER WINGS
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 leading-tighter">
          Bring the Heat <span className='hidden md:inline'><br /></span> To Your City
        </h1>
        <p className="text-white max-w-md mx-auto mb-8 text-sm md:text-lg font-medium">
          Fast-Casual. High-Demand. Proven Model. We're Expanding Across Canada.
        </p>
        <button className="bg-[#FFC222] text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition transform hover:scale-105 ">
          APPLY FOR FRANCHISE
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
