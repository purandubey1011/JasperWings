import React from "react";
import { ArrowRight } from "lucide-react";

const WhatYouGet = () => {
  const benefits = [
    "Full Training & Operations Manual",
    "Central Supply & Sauce Distribution",
    "Menu Tested & Optimized",
    "Marketing Support",
    "Website & Digital Ordering System",
  ];

  return (
    <div className="relative flex flex-col md:flex-row w-full bg-black">
      <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
        <img
          src="/assets/pizza.jpg"
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
        />
        {/* Badge overlay */}
        <div className="absolute h-24 w-80 bottom-1 right-1 bg-[#F5CF5A] text-black px-4 py-3 flex items-center gap-3 shadow-lg z-50 rounded-xl">
          {/* Teddy bear icon */}
          <img
            src="/assets/franchiseBear.png"
            alt="Teddy Bear"
            className="w-10 h-10"
          />

          <div className="flex flex-col leading-snug">
            <h6 className="text-2xl font-semibold">
              We cook{" "}
            </h6>
            <h6 className="text-2xl font-semibold">Special for you</h6>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center md:w-1/2 bg-[#FFC222] text-black p-10 md:p-20 relative overflow-hidden">
        <h2 className="text-5xl font-extrabold uppercase mb-10 text-left leading-none">
          What <br /> You Get
        </h2>

        <ul className="space-y-4 font-semibold text-sm">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <ArrowRight size={20} className="text-black" />
              {item}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 right-10 w-40 md:w-72 opacity-90 pointer-events-none">
          <img src="/assets/bear.png" alt="Bear Mascot" />
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
