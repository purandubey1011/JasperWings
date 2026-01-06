import React, { useState } from "react";
import { motion } from "framer-motion";

const FLAVOUR_CATEGORIES = [
  {
    id: "all",
    name: "All",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "hottest",
    name: "Hottest",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "hot",
    name: "Hot",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "mild",
    name: "No Heat / Mild",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "dry",
    name: "Dry Rub",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "sweet-spicy",
    name: "Sweet & Spicy",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "nation",
    name: "Flavour Of Nations",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "top15",
    name: "Top 15 Flavour",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
];

// lavels for spice indicator
const levels = [
  { label: "Low", color: "bg-[#6FBF73]" },
  { label: "Medium Low", color: "bg-[#F6C453]" },
  { label: "Medium Spice", color: "bg-[#F29B38]" },
  { label: "Average", color: "bg-[#E74C3C]" },
  { label: "Extra Spice", color: "bg-[#8E1B1B]" },
];

// ================= CATEGORY RAIL =================
const FlavourCategoryRail = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="py-6 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative overflow-x-auto scrollbar-hide">
        <div
          className="
            md:flex space-x-10 min-w-max justify-start items-center py-2 px-4
            max-sm:grid max-sm:grid-cols-4 max-sm:gap-x-6 max-sm:gap-y-6
            max-sm:justify-items-center max-sm:place-items-center
            max-sm:py-4 max-sm:overflow-visible max-sm:min-w-0
          "
        >
          {FLAVOUR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);

                // "all" ke liye top par scroll
                if (cat.id === "all") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  return;
                }

                const section = document.getElementById(cat.id);
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className={`
                group flex flex-col items-center transition-all
                ${
                  activeCategory === cat.id
                    ? "scale-110"
                    : "opacity-80 hover:opacity-100"
                }
                max-sm:w-full max-sm:items-center
              `}
            >
              {/* Circle Image */}
              <div
                className={`
                  w-24 h-24 rounded-full p-1 border-[3px] overflow-hidden transition-all
                  ${
                    activeCategory === cat.id
                      ? "border-[#fbbf24]"
                      : "border-transparent group-hover:border-white/40"
                  }
                  max-sm:w-20 max-sm:h-20 max-sm:p-0 max-sm:border-[4px]
                `}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Text */}
              <span
                className={`
                  mt-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-center
                  ${
                    activeCategory === cat.id
                      ? "text-[#fbbf24]"
                      : "text-gray-300 group-hover:text-white"
                  }
                `}
              >
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Heat Map for spice levels
const HEAT_MAP = {
  0: "bg-[#6FBF73]", // Low
  1: "bg-[#F6C453]", // Medium Low
  2: "bg-[#F29B38]", // Medium Spice
  3: "bg-[#E74C3C]", // Average
  4: "bg-[#8E1B1B]", // Extra Spice
  5: "bg-[#8E1B1B]", // Extra Spice
};

// Flavours data
const FLAVOURS = {
  hottest: [
    { name: "Devil Ranch", heat: 4, image: "/menu/menufood.png" },
    { name: "Fire Blaze", heat: 4, image: "/menu/menufood.png" },
    { name: "Indian Storm", heat: 4, image: "/menu/menufood.png" },
    { name: "Killer Heat", heat: 5, image: "/menu/menufood.png" },
    { name: "Knockout BBQ", heat: 4, image: "/menu/menufood.png" },
    { name: "Knockout Jerk", heat: 4, image: "/menu/menufood.png" },
    { name: "Knockout Kankas", heat: 4, image: "/menu/menufood.png" },
    { name: "Knockout Tequila Lime", heat: 4, image: "/menu/menufood.png" },
    { name: "Knockout Thai", heat: 4, image: "/menu/menufood.png" },
    { name: "Red Chilli BBQ", heat: 3, image: "/menu/menufood.png" },
    { name: "Suicide Blue", heat: 3, image: "/menu/menufood.png" },
    { name: "Taj Mahal", heat: 4, image: "/menu/menufood.png" },
    { name: "Texas Extreme Hot", heat: 3, image: "/menu/menufood.png" },
    { name: "Nashville Hot", heat: 4, image: "/menu/menufood.png" },
    { name: "American Buffalo", heat: 4, image: "/menu/menufood.png" },
  ],

  hot: [
    { name: "Buffalo", heat: 1, image: "/menu/menufood.png" },
    { name: "Buffalo BBQ", heat: 1, image: "/menu/menufood.png" },
    { name: "Buffalo Teriyaki", heat: 1, image: "/menu/menufood.png" },
    { name: "Caribbean Jerk", heat: 2, image: "/menu/menufood.png" },
    { name: "Hot Original", heat: 2, image: "/menu/menufood.png" },
    { name: "Hot Blue", heat: 1, image: "/menu/menufood.png" },
    { name: "Hot Ranch", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy BBQ", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Garlic Parm", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Island", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Lemon Ranch", heat: 1, image: "/menu/menufood.png" },
    { name: "Texas Hot", heat: 1, image: "/menu/menufood.png" },
    { name: "Korean", heat: 2, image: "/menu/menufood.png" },
    { name: "African Jerk", heat: 2, image: "/menu/menufood.png" },
    { name: "Shanghai", heat: 1, image: "/menu/menufood.png" },
  ],

  mild: [
    { name: "Classic BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Garlic Parm", heat: 0, image: "/menu/menufood.png" },
    { name: "Cajun Cream", heat: 0, image: "/menu/menufood.png" },
    { name: "Dill Parm", heat: 0, image: "/menu/menufood.png" },
    { name: "Kankas BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Maple Chipotle", heat: 0, image: "/menu/menufood.png" },
    { name: "Ranch Tex-Max", heat: 0, image: "/menu/menufood.png" },
    { name: "Smokey BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Smoked Dill Pickle", heat: 0, image: "/menu/menufood.png" },
    { name: "Smoky Ranch", heat: 0, image: "/menu/menufood.png" },
    { name: "All Blue", heat: 0, image: "/menu/menufood.png" },
    { name: "Kung Fu", heat: 0, image: "/menu/menufood.png" },
    { name: "BBQ Garlic Parm", heat: 0, image: "/menu/menufood.png" },
  ],

  dry: [
    { name: "Cajun", heat: 0, image: "/menu/menufood.png" },
    { name: "Chipotle Mango", heat: 2, image: "/menu/menufood.png" },
    { name: "Dry BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Sriracha Heat", heat: 1, image: "/menu/menufood.png" },
    { name: "Texas Mexas", heat: 2, image: "/menu/menufood.png" },
    { name: "Zesty Dilli", heat: 0, image: "/menu/menufood.png" },
    { name: "Garlic Cajun", heat: 0, image: "/menu/menufood.png" },
    { name: "Lemon Pepper", heat: 1, image: "/menu/menufood.png" },
    { name: "Plain", heat: 0, image: "/menu/menufood.png" },
    { name: "Italiano", heat: 0, image: "/menu/menufood.png" },
    { name: "Salt & Pepper", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Cajun", heat: 2, image: "/menu/menufood.png" },
    { name: "Tandoori Masala", heat: 1, image: "/menu/menufood.png" },
  ],

  sweet: [
    { name: "Honey Buffalo", heat: 1, image: "/menu/menufood.png" },
    { name: "Canadian", heat: 0, image: "/menu/menufood.png" },
    { name: "Honey BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Honey Dill", heat: 0, image: "/menu/menufood.png" },
    { name: "Honey Garlic", heat: 0, image: "/menu/menufood.png" },
    { name: "Honey Garlic Parm", heat: 0, image: "/menu/menufood.png" },
    { name: "Honey Teriyaki", heat: 0, image: "/menu/menufood.png" },
    { name: "Hot Honey BBQ", heat: 1, image: "/menu/menufood.png" },
    { name: "Thai Heat", heat: 2, image: "/menu/menufood.png" },
    { name: "Suicide Honey", heat: 3, image: "/menu/menufood.png" },
    { name: "Sweet Chilli", heat: 2, image: "/menu/menufood.png" },
    { name: "Sweet Heat", heat: 1, image: "/menu/menufood.png" },
    { name: "Hot Honey", heat: 1, image: "/menu/menufood.png" },
    { name: "Chinatown", heat: 2, image: "/menu/menufood.png" },
    { name: "Hawaii", heat: 1, image: "/menu/menufood.png" },
    { name: "Mexican Habanero", heat: 3, image: "/menu/menufood.png" },
    { name: "Indian BBQ", heat: 3, image: "/menu/menufood.png" },
  ],

  nation: [
    { name: "American Buffalo", heat: 4, image: "/menu/menufood.png" },
    { name: "African Jerk", heat: 2, image: "/menu/menufood.png" },
    { name: "Canadian", heat: 0, image: "/menu/menufood.png" },
    { name: "Chinatown", heat: 2, image: "/menu/menufood.png" },
    { name: "Hawaii", heat: 1, image: "/menu/menufood.png" },
    { name: "Indian Storm", heat: 4, image: "/menu/menufood.png" },
    { name: "Kung Fu", heat: 0, image: "/menu/menufood.png" },
    { name: "Korean", heat: 2, image: "/menu/menufood.png" },
    { name: "Mexican Habanero", heat: 3, image: "/menu/menufood.png" },
    { name: "Shanghai", heat: 1, image: "/menu/menufood.png" },
  ],

  top15: [
    { name: "Sweet Heat", heat: 1, image: "/menu/menufood.png" },
    { name: "Hot Honey", heat: 1, image: "/menu/menufood.png" },
    { name: "Smokey BBQ", heat: 0, image: "/menu/menufood.png" },
    { name: "Indian Storm", heat: 4, image: "/menu/menufood.png" },
    { name: "Cajun Cream", heat: 0, image: "/menu/menufood.png" },
    { name: "Garlic Parm", heat: 0, image: "/menu/menufood.png" },
    { name: "Lemon Pepper", heat: 1, image: "/menu/menufood.png" },
    { name: "Honey Garlic", heat: 0, image: "/menu/menufood.png" },
    { name: "Spicy Island", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Lemon Ranch", heat: 1, image: "/menu/menufood.png" },
    { name: "Spicy Garlic Parm", heat: 1, image: "/menu/menufood.png" },
    { name: "Devil Ranch", heat: 4, image: "/menu/menufood.png" },
    { name: "Fire Blaze", heat: 4, image: "/menu/menufood.png" },
    { name: "Red Chilli BBQ", heat: 3, image: "/menu/menufood.png" },
    { name: "Maple Chipotle", heat: 0, image: "/menu/menufood.png" },
  ],
};

const FlavourProductCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-md p-5 text-center cursor-pointer flex flex-col items-center ${
        HEAT_MAP[item.heat]
      }`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full max-h-32 object-contain mb-3"
      />

      <div className="text-black font-extrabold text-sm md:text-base">
        {item.name}
      </div>
    </motion.div>
  );
};

const FlavourSection = ({ id, title, items }) => (
  <section id={id} className="py-14 border-b border-white/5 scroll-mt-32">
    <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase">
      {title}
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <FlavourProductCard key={index} item={item} />
      ))}
    </div>
  </section>
);

// ================= PAGE =================
const SeeFlavours = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
      <FlavourCategoryRail
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="w-full bg-black  px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center gap-6 flex-wrap px-6">
          {levels.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${item.color}`} />
              <span className="text-white text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4">
        <FlavourSection id="hottest" title="HOTTEST" items={FLAVOURS.hottest} />
        <FlavourSection id="hot" title="HOT" items={FLAVOURS.hot} />
        <FlavourSection
          id="mild"
          title="NO HEAT / MILD"
          items={FLAVOURS.mild}
        />
        <FlavourSection id="dry" title="DRY RUB" items={FLAVOURS.dry} />
        <FlavourSection
          id="sweet-spicy"
          title="SWEET & SPICY"
          items={FLAVOURS.sweet}
        />
        <FlavourSection
          id="nation"
          title="FLAVOUR OF NATIONS"
          items={FLAVOURS.nation}
        />
        <FlavourSection
          id="top15"
          title="TOP 15 FLAVOUR"
          items={FLAVOURS.top15}
        />
      </main>

      {/* Placeholder for flavours grid */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16 text-white">
        <h2 className="text-3xl font-black uppercase">
          {FLAVOUR_CATEGORIES.find(c => c.id === activeCategory)?.name}
        </h2>
      </section> */}
    </div>
  );
};

export default SeeFlavours;
