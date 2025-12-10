import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaRss,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#080808] text-gray-400 font-sans overflow-hidden py-16 md:py-24">

      {/* ===================== DECOR IMAGES ===================== */}

      {/* Top Left Image */}
      <div className="absolute top-10 -left-12 opacity-60 pointer-events-none hidden sm:block">
        <img
          src="/assets/tomato.png"
          alt="decoration"
          className=" lg:w-26 w-22 md:w-40 rotate-7"
        />
      </div>

      {/* Right Side Image */}
      <div className="absolute top-44 -right-12 -translate-y-1/2 opacity-70 pointer-events-none hidden sm:block">
        <img
          src="/assets/capsicum.png"
          alt="decoration"
          className="w-28 md:w-40"
        />
      </div>

      {/* ===================== MAIN CONTENT ===================== */}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">

        {/* Top Border */}
        <div className="border-t border-gray-800 mb-10 sm:mb-14"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex p-2 border border-gray-700 rounded bg-black w-40 sm:w-48">
                <img src="/assets/logo.jpg" alt="Jasper Wings" className="w-full" />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p>Monday–Thursday: 11 AM – 10 PM</p>
              <p>Friday–Saturday: 11 AM – 12 AM</p>
              <p>Sunday: 12 PM – 11 PM</p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:flex lg:flex-col lg:items-end">

            {/* Address */}
            <div className="flex items-start mb-4">
              <MdLocationOn className="text-white text-lg mt-0.5 mr-3" />
              <span className="text-sm sm:text-base text-gray-300">
                123 Queen Street West, Toronto, Canada
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 text-sm text-gray-300">

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
              <span className="text-sm mr-2 hidden sm:block">Social Media</span>

              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGooglePlusG, FaPinterestP, FaRss].map(
                (Icon, index) => (
                  <a key={index} href="#" className="hover:text-white transition text-lg">
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* ================== BOTTOM BAR ================== */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 tracking-wide">

          {/* Pages */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-4 md:mb-0">
            {[
              "About Us",
              "Menu",
              "Contact Us",
              "Order Online",
              "Privacy Policy",
              "Disclaimer",
            ].map((link) => (
              <a key={link} href="#" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right">
            © 2018 • Falverra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
