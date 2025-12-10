import React from 'react';
import Navbar from '../common/Navbar';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <Navbar/>
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
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 leading-tight">
          Bring the Heat <br /> To Your City
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
          Fast-Casual. High-Demand. Proven Model. We're Expanding Across Canada.
        </p>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,193,7,0.4)]">
          APPLY FOR FRANCHISE
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
