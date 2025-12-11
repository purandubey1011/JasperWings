import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "What is the minimum investment required?",
      answer:
        "The minimum investment ranges between $150k - $250k depending on location size and condition.",
    },
    {
      question: "Do I need restaurant experience?",
      answer:
        "While preferred, it is not mandatory. We provide comprehensive training for all new franchisees.",
    },
    {
      question: "How long till opening?",
      answer: "Typically 3-6 months from signing the agreement to opening day.",
    },
    {
      question: "Will I get supply & training?",
      answer:
        "Yes, we provide full supply chain support and a 4-week training program.",
    },
  ];

  return (
    <section className="relative pb-24 pt-10 px-4 md:px-10 bg-black overflow-hidden w-full">
      {/* --- Decorative Images (Placeholders) --- */}

      {/* Top Right: Pepper/Capsicum */}
      <div className="absolute top-10 right-0 md:right-10 w-24 md:w-32 opacity-80 pointer-events-none">
        <img
          src="/assets/pumpkin2.png" // REPLACE with your Pepper image
          alt="Pepper Decoration"
          className="w-full h-auto rotate-12"
        />
      </div>

      {/* Left Side Middle: Green Leaves */}
      {/* <div className="absolute top-1/3 left-6 md:left-4 w-20 md:w-28 opacity-80 pointer-events-none z-0">
        <img 
            src="/assets/carrot.png" // REPLACE with your Leaves image
            alt="Leaves Decoration" 
            className="w-full h-auto -rotate-45"
        />
      </div> */}

      {/* Bottom Left: Avocado/Veg */}
      <div className="absolute bottom-20 left-0 md:left-0 w-24 md:w-32 opacity-80 pointer-events-none">
        <img
          src="/assets/carrot.png" // REPLACE with your Avocado image
          alt="Avocado Decoration"
          className="w-full h-auto"
        />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        {/* Note: Use your 'distressed' font class on this h2 */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase mb-16 tracking-wide">
          <span className="text-white block">Frequently</span>
          <span className="text-white">Asked </span>
          <span className="text-yellow-500">Question</span>
        </h2>

        {/* FAQ List - Wide Layout */}
        <div className="space-y-5 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-2xl overflow-hidden bg-black w-full"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 md:p-4 text-left hover:bg-gray-900 transition-colors duration-200"
              >
                {/* Question Text */}
                <span className="text-lg md:text-xl font-medium text-gray-200 tracking-wide">
                  {faq.question}
                </span>

                {/* Arrow Icon */}
                <ChevronDown
                  size={24}
                  className={`text-gray-400 transform transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openFaq === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="p-6 md:p-5 pt-0 text-gray-400 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FAQSection;
