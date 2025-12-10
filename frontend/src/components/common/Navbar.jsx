import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Menu, X } from 'lucide-react';

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
            href="/"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Home
          </a>
          <a
            href="/menu"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Menu
          </a>
          <a
            href="/coming-soon"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Coming Soon
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Contact
          </a>
          <a
            href="/franchizy"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Franshise
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
          <a href="/" className="hover:text-yellow-400 uppercase font-bold">
            Home
          </a>
          <a href="/menu" className="hover:text-yellow-400 uppercase font-bold">
            Menu
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 uppercase font-bold"
          >
            Contact
          </a>
                    <a
            href="/coming-soon"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Coming Soon
          </a>
                    <a
            href="/franchizy"
            className="hover:text-yellow-400 transition-colors uppercase"
          >
            Franshise
          </a>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold uppercase w-full">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar