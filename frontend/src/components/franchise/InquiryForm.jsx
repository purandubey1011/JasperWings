import React from 'react';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

const InquiryForm = () => {
  return (
    <section className="relative bg-[#0C0C0C] py-14 px-4 md:px-20 overflow-hidden w-full">
      
      {/* --- Decorative Background Image (Top Left) --- */}
      {/* Replace 'src' with your actual line-art pizza image */}
      <div className="absolute top-5 left-5 w-32 md:w-48 opacity-50 pointer-events-none">
        <img 
          src="/assets/splaterpizza.png" 
          alt="Pizza Decoration" 
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        {/* Note: Ensure you import your grunge/distressed font and apply it here */}
        <div className="text-center mb-12 uppercase font-extrabold tracking-tight leading-none">
          <h2 className="text-4xl md:text-5xl text-yellow-500 mb-1">Franchise</h2>
          <h2 className="text-4xl md:text-5xl text-white">Inquiry Form</h2>
        </div>

        {/* --- Form --- */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Full name" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Email<span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              placeholder="xyz@gmail.com" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              {/* Country Code Dropdown */}
              <div className="relative w-24">
                <select className="w-full h-full bg-transparent border border-gray-600 rounded-lg pl-4 pr-8 text-white appearance-none focus:border-yellow-500 focus:outline-none cursor-pointer">
                  <option className="bg-black text-white">+91</option>
                  <option className="bg-black text-white">+1</option>
                  <option className="bg-black text-white">+44</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              {/* Number Input */}
              <input 
                type="tel" 
                placeholder="965256455" 
                className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Location Interested In<span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Bengaluru" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Investment Budget */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Investment Budget<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none focus:border-yellow-500 focus:outline-none cursor-pointer placeholder-gray-500">
                <option className="bg-black" value="">$5000 - $10000</option>
                <option className="bg-black" value="">$10000 - $20000</option>
                <option className="bg-black" value="">$20000+</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">
              Message<span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              placeholder="Write here" 
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center peer-checked:bg-yellow-400 transition-colors">
                  <Check size={16} className="text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-gray-300 text-sm select-none">I agree to be contacted</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button 
              type="button"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-full px-12 py-3 flex items-center gap-2 transition-transform transform hover:scale-105 "
            >
              SUBMIT <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default InquiryForm;