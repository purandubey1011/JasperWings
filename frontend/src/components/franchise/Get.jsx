import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhatYouGet = () => {
  const benefits = [
    "Full Training & Operations Manual",
    "Central Supply & Sauce Distribution",
    "Menu Tested & Optimized",
    "Marketing Support",
    "Website & Digital Ordering System"
  ];

  return (
    <div className="flex flex-col md:flex-row w-full bg-black">
      <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
        <img 
          src="/assets/pizza.jpg"
          alt="Delicious Pizza" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-yellow-500 text-black p-10 md:p-20 relative overflow-hidden">
        <h2 className="text-5xl font-extrabold uppercase mb-10 text-left leading-none">
          What <br /> You Get
        </h2>

        <ul className="space-y-4 font-semibold text-lg">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <ArrowRight size={20} className="text-black" />
              {item}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 right-0 w-40 md:w-64 opacity-90 pointer-events-none">
          <img src="/assets/bear.png" alt="Bear Mascot" />
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
