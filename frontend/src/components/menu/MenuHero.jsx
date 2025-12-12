import React from "react";
import { Utensils } from "lucide-react";

const MenuHero = () => (
  <div
    className="relative lg:h-screen md:h-[70vh] w-full bg-neutral-900 overflow-hidden
                  /* MOBILE: ensure hero fits mobile viewport and scales */
                  max-sm:h-[85vh] max-sm:flex max-sm:items-start max-sm:pt-6"
  >
    <div className="absolute inset-0">
      <img
        src="/assets/menuhero.jpg"
        alt="Food Background"
        className="w-full h-full object-cover opacity-60
                   /* MOBILE: stronger cover and keep same opacity */
                   max-sm:object-cover max-sm:opacity-70"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-neutral-950/10
                      /* MOBILE: slightly darker overlay to match screenshot contrast */
                      max-sm:from-black/30 max-sm:via-black/30 max-sm:to-neutral-950/20"
      />
    </div>

    <div
      className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center
                    /* MOBILE: tighter layout + padding and bring content a little higher */
                    max-sm:justify-center max-sm:pt-12 max-sm:items-center max-sm:px-6"
    >
      <span
        className="text-white font-medium tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in flex items-center justify-center
                       /* MOBILE tagline size */
                       max-sm:text-[12px] max-sm:mb-3"
      >
        <Utensils size={20} strokeWidth={1.5} className="mr-2" /> Menu
      </span>

      <h1
        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg
                     /* MOBILE heading size/line-height to match screenshot */
                     max-sm:text-[38px] max-sm:leading-[42px] max-sm:mb-4"
      >
        Pick Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
          Craving
        </span>
      </h1>

      <p
        className="text-gray-300 max-w-2xl mb-8 text-sm md:text-lg
                    /* MOBILE subtitle sizing/width */
                    max-sm:text-[13px] max-sm:leading-5 max-sm:mb-6 max-sm:px-4 max-sm:max-w-[86vw]"
      >
        Wings, tenders, burgers & fries — all fresh, hot & ready to fire.
      </p>

      <div
        className="flex gap-4 items-center mt-2
                      /* MOBILE: stack buttons vertically and make them wide like screenshot */
                      max-sm:flex-col max-sm:w-full max-sm:items-center max-sm:gap-3"
      >
        <button
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 md:px-8 rounded-full transition transform hover:scale-[1.02] shadow-[0_8px_30px_rgba(251,191,36,0.18)]
                     /* MOBILE: full-width pill, exact height & font */
                     max-sm:w-[86%] max-sm:py-4 max-sm:text-[16px] max-sm:rounded-[9999px]"
          aria-label="Order Now"
        >
          ORDER NOW
        </button>

        <button
          className="border border-white/40 text-white/90 hover:bg-white/10 px-6 md:px-8 py-3 rounded-full font-semibold transition
                     /* MOBILE: outlined full-width pill, margin-top handled by flex-col */
                     max-sm:w-[86%] max-sm:py-3.5 max-sm:text-[15px] max-sm:rounded-[9999px]"
          aria-label="Explore Menu"
        >
          EXPLORE MENU
        </button>
      </div>
    </div>
  </div>
);

export default MenuHero;
