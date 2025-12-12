import React from "react";

/**
 * WhyItWorks (mappable)
 * - FEATURES array is the JSON data for the cards
 */

const FEATURES = [
  {
    id: "demand",
    title: "Demand For Wings & Fast Food",
    icon: "/assets/franicon1.png",
    alt: "Demand",
  },
  {
    id: "operations",
    title: "Simple Operations Model",
    icon: "/assets/franicon2.png",
    alt: "Operations",
  },
  {
    id: "cost",
    title: "Low Entry Cost",
    icon: "/assets/franicon3.png",
    alt: "Cost",
  },
];

const WhyItWorks = () => {
  return (
    <section className="relative py-22 bg-black px-4 md:px-20 overflow-hidden w-full">
      {/* Decorative Background Elements (Blurry Leaves) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/api/placeholder/100/100"
          alt=""
          className="absolute top-10 right-0 md:right-20 w-16 opacity-60 blur-[1px] rotate-12"
        />
        <img
          src="/api/placeholder/100/100"
          alt=""
          className="absolute bottom-10 left-0 md:left-10 w-20 opacity-50 blur-[1px] -rotate-45"
        />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-20 text-center
                        /* MOBILE: align left and reduce spacing like screenshot */
                        max-sm:items-start max-sm:text-left max-sm:mb-8 max-sm:px-4">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/assets/franchiseBear.png"
              alt="Mascot"
              className="w-5 h-5 md:w-5 md:h-5 object-contain"
            />
            <span className="text-yellow-500 text-xs md:text-sm font-bold uppercase">
              Why Franchise With Us
            </span>
          </div>

          <div className="relative inline-block w-full">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter relative z-10
                           /* MOBILE: smaller heading, left align */
                           max-sm:text-3xl max-sm:leading-tight max-sm:tracking-tight">
              <span className="text-white">Why Jasper Wings </span>
              <br />
              <span className="text-yellow-500">Works</span>
            </h2>
          </div>
        </div>

        {/* Icons Grid Section (mappable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 max-w-6xl mx-auto relative z-10 pt-0
                        /* MOBILE: 2 columns, left align, reduce gap and add left padding */
                        max-sm:grid-cols-2 max-sm:gap-6 max-sm:pl-4 max-sm:pr-4 max-sm:justify-start">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center group
                                            /* MOBILE: align-start and left text alignment like screenshot */
                                            max-sm:items-start max-sm:text-left">
              <div className="w-32 h-32 md:w-32 md:h-32 rounded-full bg-yellow-500 flex items-center justify-center mb-8 border-[6px] border-black ring-[3px] ring-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-transform duration-300 group-hover:scale-105
                              /* MOBILE: slightly smaller circle and border */
                              max-sm:w-20 max-sm:h-20 max-sm:border-[4px] max-sm:ring-[2px] max-sm:mb-4">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="w-16 h-16 md:w-14 md:h-14 object-contain
                             /* MOBILE: smaller icon */
                             max-sm:w-10 max-sm:h-10"
                />
              </div>

              <h3 className="text-xl md:text-lg font-bold text-white max-w-[220px] leading-tight
                             /* MOBILE: slightly smaller title, left align */
                             max-sm:text-base max-sm:max-w-none">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
