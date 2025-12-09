import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X, ChevronRight } from 'lucide-react';
import Navbar from '../components/common/Navbar';

/* --- SVG ASSETS FOR DECORATION --- */

// A reusable jagged edge component to create the "ripped paper" / grunge effect
const JaggedEdge = ({ color = "fill-amber-400", className = "", flip = false }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-12 sm:h-24 ${color} ${flip ? 'rotate-180' : ''}`}
      style={{ display: 'block' }}
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      {/* Adding some random jagged spikes for a more grunge look */}
      <path d="M0,0V40c20,10,40-10,60,5s40,20,60,0,40-30,60-5,40,20,60-5,40-30,60,10,40-20,60,10,40,20,60-10,40-20,60,15,40,10,60-15,40-20,60,10,40,20,60-10,40-20,60,15,40,10,60-15,40-20,60,10,40,20,60-10,40-20,60,15,40,10,60-15,40-20,60,10,40,20,60-10,40-20,60,15V0Z" fillOpacity="0.5" />
    </svg>
  </div>
);

// Simple Chalk Illustrations
const ChalkPizza = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
    <path d="M50,10 L90,80 Q50,95 10,80 Z" />
    <circle cx="40" cy="40" r="5" />
    <circle cx="60" cy="55" r="4" />
    <circle cx="35" cy="65" r="6" />
    <path d="M10,80 Q50,95 90,80" strokeDasharray="4 2" />
  </svg>
);

const ChalkGarlic = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50,15 C70,15 85,40 85,65 C85,85 70,95 50,95 C30,95 15,85 15,65 C15,40 30,15 50,15 Z M50,15 L50,5 M50,95 L50,60" />
    <path d="M50,20 C60,30 65,50 65,70" />
    <path d="M50,20 C40,30 35,50 35,70" />
  </svg>
);

const ChalkVeg = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="50" cy="50" r="30" />
    <path d="M50,20 L50,80 M20,50 L80,50" />
  </svg>
);

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonts - In a real app, these would be imported in the head or CSS
  // Simulating the bold, condensed font look with standard sans-serif utilities + custom style injection
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="font-sans text-neutral-800 bg-black min-h-screen overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <Navbar/>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-[60vh] sm:h-[80vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>

        {/* Main Banner Content */}
        <div className="relative z-10 w-full transform -skew-y-2 mt-20">
            {/* Top Ragged Edge of Banner */}
            <JaggedEdge color="fill-amber-400" className="transform translate-y-1 scale-y-75" />
            
            <div className="bg-amber-400 py-8 sm:py-16 text-center px-4 relative">
              {/* Grunge Texture Overlay on Yellow */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]"></div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Oswald'] text-neutral-900 leading-none tracking-tighter uppercase mb-2">
                Find Jasper <br className="sm:hidden"/> Wings Near You
              </h1>
              <p className="text-neutral-900 font-['Inter'] font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mt-4">
                More Heat Coming Across Canada.
              </p>
            </div>

            {/* Bottom Ragged Edge of Banner */}
            <JaggedEdge color="fill-amber-400" className="transform -translate-y-1 scale-y-75 rotate-180" />
        </div>
      </header>

      {/* --- CURRENTLY OPEN SECTION (DARK) --- */}
      <section className="relative bg-[#0a0a0a] text-white py-20 px-4 sm:px-8 lg:px-24 overflow-hidden">
        
        {/* Floating Chalk Illustrations */}
        <ChalkPizza className="absolute top-10 left-10 w-24 h-24 text-white/10 rotate-12" />
        <ChalkVeg className="absolute bottom-20 right-10 w-20 h-20 text-white/10 -rotate-12" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold font-['Oswald'] uppercase tracking-tight">
              Currently Open <br />
              <span className="text-amber-400">Location</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Col: Image Grid */}
            <div className="flex flex-col gap-4">
              {/* Large Top Image */}
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 sm:h-52 rounded-2xl overflow-hidden border border-white/10">
                   <img 
                    src="https://images.unsplash.com/photo-1529193591184-b1d580690dd0?q=80&w=2000&auto=format&fit=crop" 
                    alt="Food Skewers" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-40 sm:h-52 rounded-2xl overflow-hidden border border-white/10">
                   <img 
                    src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop" 
                    alt="Patio Dining" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="flex flex-col justify-center py-4">
              <h3 className="text-3xl sm:text-4xl font-bold font-['Oswald'] mb-1">Toronto – Downtown</h3>
              <p className="text-gray-400 text-lg mb-8 font-light">(OPEN)</p>

              {/* Separator Line */}
              <div className="w-full h-px bg-white/20 mb-8"></div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-neutral-800 p-2 rounded-full">
                   <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-['Oswald'] text-lg mb-1">Visit or Reach Out to Us.</h4>
                  <p className="text-gray-400 text-sm font-light">123 Queen Street West<br/>Toronto, Canada</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-8 border-b border-white/20 pb-8">
                <div className="bg-neutral-800 p-2 rounded-full">
                   <Clock className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-['Oswald'] text-lg mb-1">Open Hours</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Mon - Thu: 11 AM – 10 PM<br/>
                    Fri - Sat: 11 AM – 11 AM<br/>
                    Sun: 12 PM – 9 PM
                  </p>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex gap-3">
                  <Phone className="text-white w-5 h-5 mt-1" />
                  <div>
                    <h5 className="font-bold font-['Oswald'] text-sm mb-1">Contact Details</h5>
                    <p className="text-gray-400 text-xs">Booking Inquiries<br/>+1 (555) 000-0102</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-white w-5 h-5 mt-1" />
                  <div>
                    <h5 className="font-bold font-['Oswald'] text-sm mb-1">Email Us</h5>
                    <p className="text-gray-400 text-xs">Bookings<br/>contact@jasperwings.ca</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="bg-amber-400 text-black font-['Oswald'] font-bold text-lg px-10 py-3 rounded-full uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  Order Now
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- COMING SOON SECTION (YELLOW) --- */}
      <section className="relative bg-amber-400 pt-32 pb-32">
        {/* Top Transition (Jagged) */}
        <div className="absolute top-0 left-0 w-full text-[#0a0a0a]">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 fill-current rotate-180">
              <path d="M0,0V46.29c47,24.5,94,20,141,12,65-11,130-15,195-2,66,13,132,15,198-4,67-19,134-21,201-5,65,15,130,12,195-6s130-22,195-8,65,16,75,22V0Z" />
           </svg>
        </div>

        {/* Decorative BG Elements */}
        <ChalkGarlic className="absolute top-20 left-10 w-32 h-32 text-black/10 rotate-45" />
        <ChalkVeg className="absolute bottom-20 right-20 w-40 h-40 text-black/10 -rotate-12" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black font-['Oswald'] text-black uppercase tracking-tight">
              Coming Soon <br/> Locations
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-300">
              <div className="rounded-xl overflow-hidden h-48 mb-6 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mississauga Location" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="text-center px-2 pb-4">
                <h3 className="font-['Oswald'] font-bold text-xl sm:text-2xl mb-2 text-neutral-900">Mississauga – Coming Soon</h3>
                <p className="text-amber-500 font-bold font-['Oswald'] text-sm tracking-widest uppercase mb-6">Opening Summer 2025</p>
                <button className="w-full border-2 border-neutral-900 text-neutral-900 font-['Oswald'] font-bold text-sm py-3 rounded-full uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">
                  Notify Me
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-300 delay-100">
              <div className="rounded-xl overflow-hidden h-48 mb-6 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                  alt="Vancouver Location" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="text-center px-2 pb-4">
                <h3 className="font-['Oswald'] font-bold text-xl sm:text-2xl mb-2 text-neutral-900">Vancouver – Coming Soon</h3>
                <p className="text-amber-500 font-bold font-['Oswald'] text-sm tracking-widest uppercase mb-6">Opening Late 2025</p>
                <button className="w-full border-2 border-neutral-900 text-neutral-900 font-['Oswald'] font-bold text-sm py-3 rounded-full uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">
                  Notify Me
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Transition (Jagged) - Matching the top of next section */}
        <div className="absolute bottom-0 left-0 w-full text-black translate-y-1">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 fill-current">
               {/* Use a rough, paint-like edge */}
               <path d="M0,120 L1200,120 L1200,0 C1150,40 1100,10 1050,50 C1000,20 950,60 900,30 C850,70 800,20 750,60 C700,10 650,50 600,20 C550,60 500,10 450,50 C400,20 350,60 300,30 C250,70 200,20 150,60 C100,10 50,50 0,0 Z" />
           </svg>
        </div>
      </section>

      {/* --- CHEF/FRANCHISE SECTION --- */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2070&auto=format&fit=crop" 
            alt="Chef Plating" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Oswald'] text-white uppercase leading-tight mb-8 drop-shadow-lg">
             Want Jasper Wings in Your <br/> 
             <span className="text-amber-400">City Next?</span>
           </h2>
           
           <button className="bg-amber-400 text-black font-['Oswald'] font-bold text-sm sm:text-base px-8 sm:px-12 py-4 rounded-full uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.5)]">
             Suggest A Franchise Partner
           </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
             {/* Logo Area */}
             <div className="flex items-center gap-3">
                <div className="bg-amber-500 text-black font-['Oswald'] font-bold px-3 py-1 rounded-sm border-2 border-white text-xl">
                  JW
                </div>
                <span className="text-white font-['Oswald'] text-2xl tracking-wider font-bold">JASPER WINGS</span>
             </div>

             {/* Footer Info */}
             <div className="text-center md:text-right space-y-4">
               <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                 <MapPin className="w-4 h-4" />
                 <span>123 Queen Street West, Toronto, Canada</span>
               </div>
               <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                 <Phone className="w-4 h-4" />
                 <span>+1 (416) 000-0102</span>
               </div>
               <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                 <Mail className="w-4 h-4" />
                 <span>contact@jasperwings.ca</span>
               </div>
             </div>
          </div>
          
          {/* Socials & Bottom Bar */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
            
            {/* Links */}
            <div className="flex gap-6 text-xs text-gray-500 font-['Inter'] uppercase tracking-wider">
               <a href="#" className="hover:text-white transition-colors">About Us</a>
               <a href="#" className="hover:text-white transition-colors">Menu</a>
               <a href="#" className="hover:text-white transition-colors">Contact Us</a>
               <a href="#" className="hover:text-white transition-colors">Order Online</a>
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>

            <div className="text-gray-600 text-xs">
              Copyright © 2025 • Made by Jasper
            </div>
          </div>

          <ChalkVeg className="hidden md:block absolute bottom-10 right-10 w-24 h-24 text-white/5 rotate-12" />

        </div>
      </footer>
    </div>
  );
};

export default ContactPage;