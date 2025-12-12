import React from "react";
// import menufood from "../public/menu/menufood.jpg";

import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Star,
  Plus,
} from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Home/Footer";
import BookTableSection from "../components/Home/BookTableSection";
import MenuHero from "../components/menu/MenuHero";

// --- Mock Data (with discount + oldPrice) ---
const CATEGORIES = [
  {
    id: "All",
    name: "All",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "wings",
    name: "Wings",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "Tenders",
    name: "Tenders",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "burgers",
    name: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "Fries",
    name: "Fries",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "Loaded Combos",
    name: "Loaded Combos",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "pasta",
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "Sauces & Dips",
    name: "Sauces & Dips",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "drinks",
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80",
  },
];

const MENU_ITEMS = {
  wings: [
    {
      id: 101,
      name: "Delicious Crispy Wings",
      price: "280",
      oldPrice: "350",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 102,
      name: "Spicy Buffalo Wings",
      price: "320",
      oldPrice: "400",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 103,
      name: "BBQ Glazed Wings",
      price: "300",
      oldPrice: "375",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 104,
      name: "Garlic Parmesan Wings",
      price: "310",
      oldPrice: "380",
      discount: "-18%",
      image: "/menu/menufood.png",
    },
    {
      id: 105,
      name: "Honey Mustard Wings",
      price: "295",
      oldPrice: "370",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 106,
      name: "Teriyaki Wings",
      price: "305",
      oldPrice: "380",
      discount: "-19%",
      image: "/menu/menufood.png",
    },
  ],

  burgers: [
    {
      id: 201,
      name: "Classic Smash Burger",
      price: "250",
      oldPrice: "320",
      discount: "-22%",
      image: "/menu/menufood.png",
    },
    {
      id: 202,
      name: "Double Cheese Burger",
      price: "350",
      oldPrice: "450",
      discount: "-22%",
      image: "/menu/menufood.png",
    },
    {
      id: 203,
      name: "Spicy Chicken Burger",
      price: "290",
      oldPrice: "360",
      discount: "-19%",
      image: "/menu/menufood.png",
    },
    {
      id: 204,
      name: "Veggie Supreme Burger",
      price: "240",
      oldPrice: "300",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
  ],

  sandwiches: [
    {
      id: 301,
      name: "Club Sandwich",
      price: "180",
      oldPrice: "220",
      discount: "-18%",
      image: "/menu/menufood.png",
    },
    {
      id: 302,
      name: "Grilled Cheese Sandwich",
      price: "160",
      oldPrice: "200",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 303,
      name: "BLT Special Sandwich",
      price: "190",
      oldPrice: "240",
      discount: "-21%",
      image: "/menu/menufood.png",
    },
    {
      id: 304,
      name: "Panini Press Sandwich",
      price: "200",
      oldPrice: "250",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
  ],

  pizza: [
    {
      id: 401,
      name: "Margherita Pizza",
      price: "420",
      oldPrice: "520",
      discount: "-19%",
      image: "/menu/menufood.png",
    },
    {
      id: 402,
      name: "Pepperoni Pizza",
      price: "480",
      oldPrice: "600",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 403,
      name: "Veggie Feast Pizza",
      price: "450",
      oldPrice: "560",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 404,
      name: "BBQ Chicken Pizza",
      price: "520",
      oldPrice: "650",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
  ],

  dessert: [
    {
      id: 501,
      name: "Choco Cake Slice",
      price: "180",
      oldPrice: "220",
      discount: "-18%",
      image: "/menu/menufood.png",
    },
    {
      id: 502,
      name: "Classic Cheesecake",
      price: "200",
      oldPrice: "250",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
    {
      id: 503,
      name: "Premium Ice Cream Scoop",
      price: "140",
      oldPrice: "180",
      discount: "-22%",
      image: "/menu/menufood.png",
    },
    {
      id: 504,
      name: "Warm Brownie",
      price: "160",
      oldPrice: "200",
      discount: "-20%",
      image: "/menu/menufood.png",
    },
  ],
};


// --- CategoryRail (non-sticky, no auto-scroll) ---
const CategoryRail = ({ activeCategory, setActiveCategory }) => (
  <div className="py-6 h-auto bg-black border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 relative overflow-x-auto scrollbar-hide">

      {/* Desktop: original horizontal rail (kept).
          Mobile: switch to grid (4 cols x auto rows) and remove horizontal scroll. */}
      <div
        className={`
          md:flex space-x-10 min-w-max justify-start items-center py-2 px-4

          /* MOBILE: grid layout, centered, no horizontal scroll */
          max-sm:grid max-sm:grid-cols-4 max-sm:auto-rows-auto max-sm:gap-x-6 max-sm:gap-y-6
          max-sm:justify-items-center max-sm:place-items-center max-sm:py-4 max-sm:overflow-visible max-sm:min-w-0
        `}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              group flex flex-col items-center transition-all
              ${activeCategory === cat.id ? "scale-110" : "opacity-80 hover:opacity-100"}

              /* MOBILE: ensure each grid cell stacks properly and centers content */
              max-sm:flex-col max-sm:w-full max-sm:items-center
            `}
          >
            {/* Circle Image */}
            <div
              className={`
                w-24 h-24 rounded-full p-1 border-[3px] overflow-hidden transition-all
                ${activeCategory === cat.id ? "border-amber-400" : "border-transparent group-hover:border-white/40"}

                /* MOBILE: slightly larger circles and thicker border to match screenshot */
                max-sm:w-20 max-sm:h-20 max-sm:p-0 max-sm:border-[4px] max-sm:rounded-full
              `}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover rounded-full
                           /* MOBILE: cover and keep rounding */
                           max-sm:object-cover max-sm:rounded-full"
              />
            </div>

            {/* Text */}
            <span
              className={`
                mt-2 text-sm font-semibold uppercase tracking-wide
                ${activeCategory === cat.id ? "text-amber-400" : "text-gray-300 group-hover:text-white"}

                /* MOBILE: slightly larger label, center, allow two lines */
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

// --- ProductCard (exact design you gave) ---
const ProductCard = ({ product }) => (
  <div className="bg-[#FFC629] rounded-md overflow-hidden flex flex-col items-center p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl min-h-[280px] md:min-h-[340px]">
    {/* Image container = takes full available height */}
    <div className=" flex-grow flex items-center justify-center ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-40 sm:max-h-40 object-contain drop-shadow-xl"
      />
    </div>

    {/* Discount + Price pills */}
    <div className="w-full flex items-center justify-center gap-1 md:gap-3 mt-2 md:mt-4">
      <div className="bg-white text-xs font-bold text-gray-900 px-2 py-1 rounded-md shadow-sm">
        {product.discount}
      </div>

      <div className="px-2 py-1 rounded-md flex items-center gap-1 text-white">
        <span className="text-sm font-extrabold ">₹{product.price}</span>
        <span className="text-xs font-bold line-through text-gray-100">₹{product.oldPrice}</span>
      </div>
    </div>

    {/* Title */}
    <div className="mt-1 md:mt-3 w-full text-center">
      <h3 className="text-gray-700 font-extrabold text-sm sm:text-lg tracking-tight">
        {product.name}
      </h3>
    </div>
  </div>
);

// --- MenuSection uses ProductCard ---
const MenuSection = ({ title, items, id }) => (
  <div id={id} className="py-12 md:py-16 border-b border-white/5 last:border-0">
    <div className="flex items-center justify-between mb-8 md:mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {title}
        </h2>
        <div className="h-1 w-20 bg-amber-400 mt-2"></div>
      </div>
      <button className="hidden md:flex items-center text-gray-400 hover:text-amber-400 transition-colors text-sm font-bold uppercase tracking-wider group">
        View All{" "}
        <ChevronRight
          size={16}
          className="ml-1 group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>

    {/* Grid of ProductCard */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-10">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </div>
);

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-neutral-950 font-sans selection:bg-amber-400 selection:text-black">
      <Navbar bg={"trasparent"} />
      <MenuHero />
      <CategoryRail
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:pb-10">
        {Object.entries(MENU_ITEMS).map(([key, items]) => {
          // Find pretty name for category
          const catName = CATEGORIES.find((c) => c.id === key)?.name || key;
          return <MenuSection key={key} id={key} title={catName} items={items} />;
        })}
      </main>

      <BookTableSection />

      <Footer />
    </div>
  );
};

export default MenuPage;
