import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, 
  FaInstagram, FaGooglePlusG, FaPinterestP, FaRss, 
  FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#080808] text-gray-400 font-sans overflow-hidden py-30">
      
      {/* =========================================
          DECORATIVE IMAGES (Absolute Positioning)
         ========================================= */}
      
      {/* 1. Top Left Blurred Leaf */}
      {/* Positioned high up, hanging off the left edge */}
      <div className="absolute top-24 -left-18 z-0 opacity-90 pointer-events-none">
        <img 
          src="/assets/tomato.png" 
          alt="decoration" 
          className="w-40 transform rotate-20" 
        />
      </div>



      {/* 3. Right Side Pepper Outline */}
      {/* Floating near the contact info, roughly vertically centered */}
      <div className="absolute top-80 -translate-y-1/2 -right-16 z-0 pointer-events-none">
        <img 
          src="/assets/capsicum.png" 
          alt="decoration" 
          className="w-40 opacity-80" 
        />
      </div>




      {/* =========================================
          MAIN CONTENT (Z-index 10 to sit above images)
         ========================================= */}
      <div className="container mx-auto px-28 relative z-10 max-w-7xl">
        
        {/* Top Horizontal Line */}
        <div className="border-t border-gray-800 mb-12 w-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* --- LEFT COLUMN --- */}
          <div>
            {/* Logo Placeholder */}
            <div className="mb-8">
              <div className="bg-black border border-gray-700 inline-flex items-center p-2 rounded w-48">
                 {/* Replace this img with your actual logo file */}
                 <img src="/assets/logo.jpg" alt="Jasper Wings" className="w-full" />
              </div>
            </div>

            {/* Opening Hours Text */}
            <div className="space-y-2 text-sm text-gray-300 font-light tracking-wide">
              <p>Monday-Thursday: 11 AM – 10 PM</p>
              <p>Friday-Saturday: 11 AM – 12 AM</p>
              <p>Sunday: 12:00pm – 23:00pm</p>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          {/* Using flex/justify to align this block towards the right side visually */}
          <div className="lg:flex lg:flex-col lg:items-end">
            <div className="text-left"> 
              
              {/* Address */}
              <div className="flex items-start mb-4">
                <MdLocationOn className="text-white text-lg mt-0.5 mr-3" />
                <span className="text-gray-300 text-sm">123 Queen Street West, Toronto, Canada</span>
              </div>

              {/* Phone and Email */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-white mr-3" />
                  <span>+1 (416) 555-0192</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-white mr-3" />
                  <span>contact@jasperwings.ca</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-gray-400">
                <span className="text-sm mr-2">Social Media</span>
                <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-white transition"><FaYoutube /></a>
                <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                <a href="#" className="hover:text-white transition"><FaGooglePlusG /></a>
                <a href="#" className="hover:text-white transition"><FaPinterestP /></a>
                <a href="#" className="hover:text-white transition"><FaRss /></a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="border-t border-gray-800 mb-6 w-full"></div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">About Us</a>
            <a href="#" className="hover:text-white transition">Menu</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
            <a href="#" className="hover:text-white transition">Order Online</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
          </div>

          {/* Copyright */}
          <div>
            <p className="capitalize tracking-normal">Copyright © 2018 • Falverra</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;