import { Drumstick, Sandwich, ChefHat, Soup } from "lucide-react";
import aboutteddy from "/assets/aboutteddy.png";
import React from "react";

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
        <div className="relative">
          <img
            src="/assets/pizza.jpg"
            alt="Cheesy Pizza"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />

          {/* Bottom-right teddy + WA badge */}
          <div className="absolute -bottom-1 -right-1 flex items-center gap-2 bg-[#F5CF5A] text-black px-3 py-1 rounded shadow-lg">
            <img
              src="/assets/franchiseBear.png"
              alt="Teddy Bear"
              className="w-6 h-6"
            />
            <div className="flex flex-col leading-snug">
              <h6 className="text-2xl font-semibold">
                We cook{" "}
                <span className=" ml-2 text-white text-2xl font-bold">hot</span>
              </h6>
              <h6 className="text-2xl font-semibold">Special for you</h6>
            </div>{" "}
          </div>
        </div>

        {/* TEXT AREA */}
        <div>
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            <img src={aboutteddy} alt="" className="h-5" />
            <span className="uppercase font-bold tracking-widest">
               About Jasper Wings
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            CANADIAN FLAVOUR,
            <br /> STREET-STYLE SPIRIT.
          </h2>

          <p className="text-gray-400 mb-6 text-lg">
            Jasper Wings started with one goal — bring bold flavours and real
            heat to the heart of Toronto. We serve wings, tenders, burgers, and
            loaded fries with our signature in-house sauces. Fresh. Crispy. Hot.
            Always.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
  {[
    { icon: <Soup size={18} />, text: "12+ Signature Wing Sauces" },
    { icon: <Drumstick size={18} />, text: "Hand-Breaded Tenders" },
    { icon: <Sandwich size={18} />, text: "Premium Canadian Beef Patties" },
    { icon: <ChefHat size={18} />, text: "Fresh-Cut Fries Daily" },
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-4">
      <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-black">
        {item.icon}
      </div>

      <span className="text-white text-base font-semibold">
        {item.text}
      </span>
    </li>
  ))}
</ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
