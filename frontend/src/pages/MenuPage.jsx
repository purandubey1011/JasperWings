import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Home/Footer";
import BookTableSection from "../components/Home/BookTableSection";
import MenuHero from "../components/menu/MenuHero";

// ================= PDF BASED MENU DATA =================

const MENU_ITEMS = {
  wings: [
    { id: 1, title: "1 lb (1 flavour)", price: "$13.99",
      image: "/menu/menufood.png"
     },
    { id: 2, title: "2 lb (1 flavour)", price: "$26.99",
      image: "/menu/menufood.png"
     },
    { id: 3, title: "3 lb (2 flavours)", price: "$38.99",
      image: "/menu/menufood.png"
     },
    { id: 4, title: "4 lb (2 flavours)", price: "$52.99",
      image: "/menu/menufood.png"
     },
    { id: 5, title: "5 lb (3 flavours)", price: "$65.99",
      image: "/menu/menufood.png"
     },
    { id: 6, title: "5 lb (5 flavours)", price: "$68.99",
      image: "/menu/menufood.png"
     },
    { id: 7, title: "6 lb (6 flavours)", price: "$83.99",
      image: "/menu/menufood.png"
     },
  ],

  tenders: [
    { id: 8, title: "1 Tender", price: "$6.99",
      image: "/menu/menufood.png"
     },
    { id: 9, title: "3 Tenders", price: "$18.99",
      image: "/menu/menufood.png"
     },
    { id: 10, title: "5 Tenders", price: "$29.99",
      image: "/menu/menufood.png"
     },
  ],

  burgers: [
    { id: 11, title: "Crispy Chicken Burger", price: "$11.99",
      image: "/menu/menufood.png"
     },
    { id: 12, title: "Grilled Chicken Burger", price: "$11.99",
      image: "/menu/menufood.png"
     },
    { id: 13, title: "Veggie Deluxe Burger", price: "$11.99",
      image: "/menu/menufood.png"
     },
    { id: 14, title: "Ham Burger", price: "$11.99",
      image: "/menu/menufood.png"
     },
    { id: 15, title: "Meat Lover Burger", price: "$14.99",
      image: "/menu/menufood.png"
     },
  ],

  sliders: [
    { id: 16, title: "Chicken Slider", price: "$6.99",
      image: "/menu/menufood.png"
     },
    { id: 17, title: "Veggie Slider", price: "$6.99",
      image: "/menu/menufood.png"
     },
  ],

  wraps: [
    { id: 18, title: "Veggie Wrap", price: "$12.99",
      image: "/menu/menufood.png"
     },
    { id: 19, title: "Chicken Wrap", price: "$12.99",
      image: "/menu/menufood.png"
     },
    { id: 20, title: "Meaty Wrap", price: "$12.99",
      image: "/menu/menufood.png"
     },
  ],

  fries: [
    { id: 21, title: "Classic Fries", price: "$6.99",
      image: "/menu/menufood.png"
     },
    { id: 22, title: "Loaded Fries", price: "$9.99",
      image: "/menu/menufood.png"
     },
    { id: 23, title: "Loaded Parmesan Fries", price: "$9.99",
      image: "/menu/menufood.png"
     },
    { id: 24, title: "Garlic Parmesan Fries", price: "$8.99",
      image: "/menu/menufood.png"
     },
    { id: 25, title: "Devil’s Ranch Fries", price: "$10.99",
      image: "/menu/menufood.png"
     },
    { id: 26, title: "Chicken Bacon Ranch Fries", price: "$10.99",
      image: "/menu/menufood.png"
     },
    { id: 27, title: "Chilli Chicken Fries", price: "$10.99",
      image: "/menu/menufood.png"
     },
    { id: 28, title: "Meaty Poutine", price: "$12.99",
      image: "/menu/menufood.png"
     },
    { id: 29, title: "Onion Rings", price: "$8.99",
      image: "/menu/menufood.png"
     },
    { id: 30, title: "Poutine", price: "$8.99",
      image: "/menu/menufood.png"
     },
  ],

  bites: [
    { id: 31, title: "Cauliflower Bites", price: "$9.99",
      image: "/menu/menufood.png"
     },
    { id: 32, title: "Jalapeño Bites", price: "$8.99",
      image: "/menu/menufood.png"
     },
    { id: 33, title: "Mozzarella Sticks", price: "$8.99",
      image: "/menu/menufood.png"
     },
    { id: 34, title: "Loaded Onion Rings", price: "$9.99",
      image: "/menu/menufood.png"
     },
  ],

  combos: [
    {
      id: 35,
      title: "Jasper Combo",
      desc: "(1 lb wings - 1 flavour, loaded fries, pop)",
      price: "$17.99",
      image: "/menu/menufood.png",
    },
    {
      id: 36,
      title: "Jasper King Combo",
      desc: "(1 lb wings, 2 tenders, fries, 2 pops)",
      price: "$29.99",
      image: "/menu/menufood.png",
    },
    {
      id: 37,
      title: "Wing Combo",
      desc: "(1 lb wings, fries, pop)",
      price: "$16.99",
      image: "/menu/menufood.png",
    },
    {
      id: 38,
      title: "Double Wings Combo",
      desc: "(2 lb wings, loaded fries, pop)",
      price: "$34.99",
      image: "/menu/menufood.png",
    },
    {
      id: 39,
      title: "Triple Wing Combo",
      desc: "(2 lb wings, 2 sliders, fries, 3 pops)",
      price: "$44.99",
      image: "/menu/menufood.png",
    },
    {
      id: 40,
      title: "Veggie Lovers Combo",
      desc: "(Veggie wrap, loaded fries, pop)",
      price: "$16.99",
      image: "/menu/menufood.png",
    },
  ],

  desserts: [
    { id: 41, title: "Cheesecake Roll", price: "$4.99",
      image: "/menu/menufood.png"
     },
    { id: 42, title: "Cheesecake Slice", price: "$4.99",
      image: "/menu/menufood.png"
     },
    { id: 43, title: "Choco Lava Cake", price: "$3.99",
      image: "/menu/menufood.png"
     },
  ],

  drinks: [
    { id: 44, title: "Soft Drinks", price: "$1.50",
      image: "/menu/menufood.png"
     },
    { id: 45, title: "Red Bull", price: "$3.49",
      image: "/menu/menufood.png"
     },
    { id: 46, title: "Juice", price: "$3.49",
      image: "/menu/menufood.png"
     },
  ],
};

// ================ category =================
const CATEGORIES = [
  {
    id: "wings",
    name: "Wings",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "tenders",
    name: "Jasper Tenders",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "burgers",
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "sliders",
    name: "Sliders",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "wraps",
    name: "Wraps",
    image: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "fries",
    name: "Fries & Loaded Fries",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "bites",
    name: "On-Side Bites",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "combos",
    name: "Combos",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "desserts",
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "drinks",
    name: "Drinks & Extras",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80",
  },
];


// ================= CARD =================

const ProductCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-[#d96828] rounded-md p-5 text-center cursor-pointer flex flex-col items-center"
  >
    {/* IMAGE (dummy for now) */}
    <img
      src={item.image}
      alt={item.title}
      className="w-full max-h-32 object-contain mb-3"
    />

    {/* PRICE */}
    <div className="text-white font-black text-xl mb-1">
      {item.price}
    </div>

    {/* TITLE */}
    <div className="text-black font-extrabold text-sm md:text-base">
      {item.title}
    </div>

    {/* OPTIONAL DESC (for combos) */}
    {item.desc && (
      <div className="text-xs text-black mt-1 font-medium">
        {item.desc}
      </div>
    )}
  </motion.div>
);


// ================= SECTION =================

const MenuSection = ({ title, items }) => (
  <section className="py-14 border-b border-white/5">
    <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase">
      {title}
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

// ================ CATEGORY RAIL =================
const CategoryRail = ({ activeCategory, setActiveCategory }) => {
  const handleClick = (id) => {
    setActiveCategory(id);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="py-6 h-auto bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative overflow-x-auto scrollbar-hide">
        {/* Desktop: horizontal rail
            Mobile: grid layout */}
        <div
          className="
            md:flex space-x-10 min-w-max justify-start items-center py-2 px-4
            max-sm:grid max-sm:grid-cols-4 max-sm:gap-x-6 max-sm:gap-y-6
            max-sm:justify-items-center max-sm:place-items-center
            max-sm:py-4 max-sm:overflow-visible max-sm:min-w-0
          "
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
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
                      ? "border-[#d96828]"
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
                  mt-2 text-sm font-semibold uppercase tracking-wide
                  ${
                    activeCategory === cat.id
                      ? "text-amber-400"
                      : "text-gray-300 group-hover:text-white"
                  }
                  max-sm:mt-3 max-sm:text-[14px] max-sm:text-center max-sm:px-1
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

// ================= PAGE =================

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <div className="bg-neutral-950">
      <Navbar bg="transparent" />
      <MenuHero />

      <CategoryRail activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <main className="max-w-7xl mx-auto px-4">
        <MenuSection title="WINGS (Bone-In or Boneless)" items={MENU_ITEMS.wings} />
        <MenuSection title="JASPER TENDERS (Mild / Medium / Hot)" items={MENU_ITEMS.tenders} />
        <MenuSection title="BURGERS" items={MENU_ITEMS.burgers} />
        <MenuSection title="SLIDERS" items={MENU_ITEMS.sliders} />
        <MenuSection title="WRAPS" items={MENU_ITEMS.wraps} />
        <MenuSection title="FRIES & LOADED FRIES" items={MENU_ITEMS.fries} />
        <MenuSection title="ON-SIDE BITES" items={MENU_ITEMS.bites} />
        <MenuSection title="COMBOS" items={MENU_ITEMS.combos} />
        <MenuSection title="DESSERTS" items={MENU_ITEMS.desserts} />
        <MenuSection title="DRINKS & EXTRAS" items={MENU_ITEMS.drinks} />
      </main>

      <BookTableSection />
      <Footer />
    </div>
  );
};

export default MenuPage;
