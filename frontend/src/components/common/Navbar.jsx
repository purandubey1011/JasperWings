import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({bg='black'}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-${bg} text-white py-5 px-6 w-full fixed top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo (clickable -> home) */}
        <div className="">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jasper%20wings/logojasper2.png"
              alt="Unyfer Logo"
              className="h-7"
            />
          </Link>
        </div>

        {/* Desktop Menu - Centered as per image */}
        <div className="hidden md:flex gap-12 font-bold text-sm tracking-wider items-center absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="hover:text-[#d96828] transition-colors uppercase"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-[#d96828] transition-colors uppercase"
          >
            Menu
          </Link>
          <Link
            to="/coming-soon"
            className="hover:text-[#d96828] transition-colors uppercase"
          >
            Coming Soon
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#d96828] transition-colors uppercase"
          >
            Contact
          </Link>
          <Link
            to="/franchizy"
            className="hover:text-[#d96828] transition-colors uppercase"
          >
            Franshise
          </Link>
        </div>

        {/* CTA Button - Outlined as per image */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#d96828] text-[#d96828] hover:bg-[#d96828] hover:text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all"
            onClick={() => {
              setIsOpen(false);
              // optional: navigate to order page if you have one
              // navigate('/order');
            }}
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#d96828]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-gray-800 p-6 flex flex-col gap-4 text-center"
          >
            <Link
              to="/"
              className="hover:text-[#d96828] uppercase font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="hover:text-[#d96828] uppercase font-bold"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#d96828] uppercase font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/coming-soon"
              className="hover:text-[#d96828] transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Coming Soon
            </Link>
            <Link
              to="/franchizy"
              className="hover:text-[#d96828] transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Franshise
            </Link>

            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="border border-[#d96828] text-[#d96828] px-6 py-3 rounded-full font-bold uppercase w-full inline-block text-center"
            >
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
