import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink, ArrowRight, Menu as MenuIcon, X } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/Home/Footer';

const ComingSoon = () => {




  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#FFC20E] selection:text-black">
      <Navbar/>

<header className="relative w-full lg:h-[100vh] md:h-[80vh] overflow-hidden">

  {/* ---------------- BACKGROUND IMAGE ---------------- */}
  <div className="absolute inset-0 z-0">
    <img
      src="/assets/cominghero.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
    {/* <div className="absolute inset-0 bg-black/60"></div> */}
  </div>

  {/* --------------- FOREGROUND RECTANGULAR IMAGE ---------------- */}
  <div className="relative z-10 h-full flex items-end justify-center mt-14">
    
    {/* Your foreground image (rectangle / paint / splash) */}
    <div className="relative w-full">
      
      {/* Rectangle image */}
      <img 
        src="/assets/Rectangle1.png" 
        alt="foreground" 
        className="w-full h-auto object-cover"
      />

      {/* TEXT ON TOP OF FOREGROUND IMAGE */}
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

  {/* LINE 1 */}
  <h1 className="text-black font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tighter">
    Find Jasper
  </h1>

  {/* LINE 2 */}
  <h2 className="text-black font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tighter -mt-2">
    Wings Near You
  </h2>

  {/* LINE 3 (SMALL SUBTEXT) */}
  <p className="text-black font-bold mt-3 text-sm md:text-base tracking-widest uppercase">
    More Heat Coming Across Canada.
  </p>

</div>


    </div>
  </div>

</header>


      {/* --- CURRENTLY OPEN SECTION --- */}
      <section className="bg-black py-16 md:py-24 px-6 relative overflow-hidden">
        {/* Decorative  (Absolute) */}
        <div className="absolute top-4 left-5 opacity-20 pointer-events-none rotate-12">
<img src="/assets/splaterpizza.png" alt="" className='rotate-260 z-30'/>

        </div>

        <div className="max-w-7xl mx-auto mt-7 lg:mt-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                    Currently Open 
                </h2>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#FFC20E]">
                    Location
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 h-64 md:h-80 overflow-hidden rounded-lg border-2 border-[#333]">
                        <img src="/assets/toranto1.jpg" alt="Restaurant Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <div className="h-40 md:h-48 overflow-hidden rounded-lg border-2 border-[#333]">
                        <img src="/assets/toranto2.jpg" alt="Food Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <div className="h-40 md:h-48 overflow-hidden rounded-lg border-2 border-[#333]">
                        <img src="/assets/toranto3.jpg" alt="Dining Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                </div>

                {/* Right: Details */}
                <div className="space-y-8 pl-0 lg:pl-10">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">Toronto – Downtown</h3>
                        <span className="text-xl font-medium text-gray-400">(OPEN)</span>
                    </div>

                    <div className="w-full h-px bg-gray-800"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-[#FFC20E] mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Visit or Reach Out to Us</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    123 Queen Street West<br/>
                                    Toronto, Canada
                                </p>
                            </div>
                        </div>

                         {/* Hours */}
                         <div className="flex items-start space-x-4">
                            <Clock className="text-[#FFC20E] mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Open Hours</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Mon–Thu: 11 AM – 10 PM<br/>
                                    Fri-Sat: 11 AM – 12 AM<br/>
                                    Sun: 12 PM – 9 PM
                                </p>
                            </div>
                        </div>

                         {/* Contact */}
                         <div className="flex items-start space-x-4">
                            <Phone className="text-[#FFC20E] mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Contact Details</h4>
                                <p className="text-gray-400 text-sm">
                                    Booking Inquiries:<br/>
                                    +1 (639) 555-0182
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <Mail className="text-[#FFC20E] mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                <p className="text-gray-400 text-sm">
                                    Bookings:<br/>
                                    contact@jasperwings.ca
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="bg-[#FFC20E] text-black font-black uppercase px-8 py-3 rounded-full hover:bg-white transition-colors tracking-wide text-sm">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            
             {/* Decorative Doodles (Absolute Bottom Right) */}
            <div className="absolute bottom-3 right-0 opacity-20 pointer-events-none -rotate-12">
             <img src="/assets/garlic.png" alt="" />
            </div>
        </div>
      </section>

      {/* --- COMING SOON LOCATIONS --- */}
<section
  className="relative w-full mb-6 flex items-center justify-center py-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/Rectangle66.png')" }}
>

  {/* 🔵 LEFT DECOR IMAGE */}
  <img
    src="/assets/garliccopy.png"
    alt=""
    className="absolute top-52 left-24 w-24 md:w-32 opacity-80 pointer-events-none z-0"
  />

  {/* 🔴 RIGHT DECOR IMAGE */}
  <img
    src="/assets/burger.png"
    alt=""
    className="absolute top-52 right-24 w-24 md:w-32 opacity-80 pointer-events-none z-0"
  />

  {/* MAIN CENTERED CONTENT */}
  <div className="relative z-10 w-full max-w-5xl mx-auto mt-12">

    {/* FIXED TITLE — no cutting now */}
    <div className="text-center px-4 mb-7">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-black leading-tight">
        Coming Soon <br /> Locations
      </h2>
    </div>

    {/* CARDS — REDUCED WIDTH */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

      {/* Card 1 */}
      <div className="w-full max-w-[400px] p-2 bg-white rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
        <div className="h-48 overflow-hidden relative rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="Mississauga"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-black font-black text-2xl mb-2">Mississauga – Coming Soon</h3>
          <p className="text-[#FFC20E] font-bold uppercase tracking-wider mb-6">
            Opening Summer 2025
          </p>
          <button className="border-2 border-black text-black font-bold uppercase px-8 py-2 rounded-full hover:bg-black hover:text-[#FFC20E] transition-colors w-full">
            Notify Me
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full max-w-[400px] p-2 bg-white rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
        <div className="h-60 overflow-hidden relative rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
            alt="Vancouver"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-black font-black text-2xl mb-2">Vancouver – Coming Soon</h3>
          <p className="text-[#FFC20E] font-bold uppercase tracking-wider mb-6">
            Opening Late 2025
          </p>
          <button className="border-2 border-black text-black font-bold uppercase px-8 py-2 rounded-full hover:bg-black hover:text-[#FFC20E] transition-colors w-full">
            Notify Me
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* --- CTA FRANCHISE SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
             <img 
                src="/assets/chef.jpg" 
                alt="Chef Cooking" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-99 text-center px-4 max-w-4xl mx-auto">



  <div className="flex items-center justify-center mb-4 space-x-2">
    <img src="/assets/franchiseBear.png" alt="Teddy" className="w-8 h-8" />
    <p className="font-semibold">Book now</p>
  </div>




              <h2 className="text-4xl md:text-6xl font-black uppercase mb-2 leading-tight">
                  Want Jasper Wings in your <br/> <span className="text-[#FFC20E]">City Next?</span>
              </h2>
              <div className="w-24 h-1 bg-[#FFC20E] mx-auto my-6"></div>
              <button className="bg-[#FFC20E] text-black font-black uppercase px-8 py-4 rounded-full hover:bg-white transition-colors tracking-wide shadow-[0_0_20px_rgba(255,194,14,0.5)]">
                  Become a Franchise Partner
              </button>
          </div>
      </section>

<Footer/>
    </div>
  );
};

export default ComingSoon;