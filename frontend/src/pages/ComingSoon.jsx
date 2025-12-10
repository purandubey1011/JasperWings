import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink, ArrowRight, Menu as MenuIcon, X } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/Home/Footer';

const ComingSoon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG for the jagged/grunge edge effect
  const GrungeEdgeTop = ({ className, color = "text-[#FFC20E]" }) => (
    <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`} style={{ marginTop: '-1px' }}>
      <svg className={`relative block w-[200%] h-[40px] md:h-[60px] ${color}`} fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  );

  const GrungeEdgeBottom = ({ className, color = "text-[#FFC20E]" }) => (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`} style={{ marginBottom: '-1px' }}>
      <svg className={`relative block w-[200%] h-[40px] md:h-[60px] ${color}`} fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
         <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  );

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
            <div className="absolute bottom-10 right-0 opacity-20 pointer-events-none -rotate-12 mt-12">
             <img src="/assets/garlic.png" alt="" />
            </div>
        </div>
      </section>

      {/* --- COMING SOON LOCATIONS --- */}
<section
  className="relative w-full max-h-[100vh] mb-20 flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/Rectangle66.png')" }}
>
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
      <div className="w-full max-w-[350px]  bg-white rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
        <div className="h-48 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="Mississauga"
            className="w-full h-full object-cover"
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
      <div className="w-full max-w-[350px] bg-white rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
        <div className="h-60 overflow-hidden relative">
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
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
                alt="Chef Cooking" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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