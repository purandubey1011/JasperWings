import { ChevronRight, Utensils } from 'lucide-react';
import React from 'react'


const AboutSection = () => {
return (
    <div className="relative bg-black text-white py-20 px-6 overflow-hidden">

      {/* LEFT TOMATO — simple, fixed, above pizza */}
      <img
        src="/assets/tomato.png"
        alt="tomato"
        className="absolute top-10 left-0 w-32 md:w-56 object-contain pointer-events-none z-2 ml-12"
      />

      {/* RIGHT CAPSICUM — fixed right */}
      <img
        src="/assets/capsicum.png"
        alt="capsicum"
        className="absolute top-5 -right-14 h-48 w-40 md:w-56 object-contain pointer-events-none z-20"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mt-32 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* PIZZA IMAGE */}
        <div>
          <img
            src="/assets/pizza.jpg"
            alt="Cheesy Pizza"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>

        {/* TEXT AREA */}
        <div>
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            <Utensils size={20} />
            <span className="uppercase font-bold tracking-widest">
              Our Story
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            CANADIAN FLAVOUR,
            <br /> STREET-STYLE SPIRIT.
          </h2>

          <p className="text-gray-400 mb-6 text-lg">
            We bring the heat to the street. Our chefs masterfully blend
            traditional spices with modern fast-food favorites to create an
            explosion of flavor in every bite.
          </p>

          <ul className="space-y-4">
            {[
              "No frozen patties",
              "House-made secret sauces",
              "Locally sourced veggies",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium">
                <span className="bg-yellow-400 text-black rounded-full p-1">
                  <ChevronRight size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection