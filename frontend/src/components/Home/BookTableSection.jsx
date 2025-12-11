import React from 'react'
import { FaPaw } from 'react-icons/fa';

const BookTableSection = () => {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden group">
      <div 
        className="absolute bg-[url('/assets/booktable.jpg')] inset-0 w-full h-full bg-no-repeat bg-cover bg-center transition-transform duration-700 transform"
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top "BOOK NOW" label */}
        <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold mb-6 tracking-wider">
          <img src="/public/assets/aboutteddy.png" alt="" className='h-5' />
          <span>BOOK NOW</span>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-5xl font-extrabold text-white leading-tighter mb-8 uppercase" style={{ fontFamily: 'sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
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

export default BookTableSection