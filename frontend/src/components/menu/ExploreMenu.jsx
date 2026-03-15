import React, { useState } from "react";
import { motion } from "framer-motion";

const ExploreMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const fallbackMenuImage =
    "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // ================= PDF BASED MENU DATA =================

  const MENU_ITEMS = {
    wings: [
      {
        id: 1,
        title: "1 lb (1 flavour)",
        price: "$13.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/1lb%20(1flavour)skip.jpg?updatedAt=1773393911524",
      },
      {
        id: 2,
        title: "2 lb (1 flavour)",
        price: "$26.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/2lb%20(1%20Flavour)(1)skip.jpg?updatedAt=1773393911452",
      },
      {
        id: 3,
        title: "3 lb (2 flavours)",
        price: "$38.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/3lb%20(2%20flavours)(1).jpg?updatedAt=1773393911397",
      },
      {
        id: 4,
        title: "4 lb (2 flavours)",
        price: "$52.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/4lb%20(2%20flavours)(1).jpg?updatedAt=1773393911399",
      },
      {
        id: 5,
        title: "5 lb (3 flavours)",
        price: "$65.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/5lb%20(3%20flavours)(1).jpg?updatedAt=1773393918721",
      },
      {
        id: 6,
        title: "5 lb (5 flavours)",
        price: "$68.99",
        image: fallbackMenuImage,
      },
      {
        id: 7,
        title: "6 lb (6 flavours)",
        price: "$83.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/6lb%20(6%20flavours)(1).jpg?updatedAt=1773393917018",
      },
    ],

    tenders: [
      {
        id: 8,
        title: "1 Tender",
        price: "$6.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/a0065c45-8ce5-4c81-b818-34317355e9be.jpg",
      },
      {
        id: 9,
        title: "3 Tenders",
        price: "$18.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/a0b678b3-345e-437d-b2c2-fe745c4e1239.jpg",
      },
      {
        id: 10,
        title: "5 Tenders",
        price: "$29.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/55efe82c-ad0b-49d9-9c74-e9de88827e9e.jpg",
      },
    ],

    burgers: [
      {
        id: 11,
        title: "Crispy Chicken Burger",
        price: "$11.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20burger.jpg",
      },
      {
        id: 12,
        title: "Grilled Chicken Burger",
        price: "$11.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/grilled%20chicken%20burger.jpg",
      },
      {
        id: 13,
        title: "Veggie Deluxe Burger",
        price: "$11.99",
        image: fallbackMenuImage,
      },
      {
        id: 14,
        title: "Ham Burger",
        price: "$11.99",
        image: "https://ik.imagekit.io/jasperwings/drive%20photos/Hamburger.jpg",
      },
      {
        id: 15,
        title: "Meat Lover Burger",
        price: "$14.99",
        image: fallbackMenuImage,
      },
    ],

    sliders: [
      {
        id: 16,
        title: "Chicken Slider",
        price: "$6.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/chicken%20slider%20(1).jpg",
      },
      {
        id: 17,
        title: "Veggie Slider",
        price: "$6.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/veggie%20slider.jpg",
      },
    ],

    wraps: [
      {
        id: 18,
        title: "Veggie Wrap",
        price: "$12.99",
        image: fallbackMenuImage,
      },
      {
        id: 19,
        title: "Chicken Wrap",
        price: "$12.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20wrap.jpg",
      },
      {
        id: 20,
        title: "Meaty Wrap",
        price: "$12.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/meaty%20wrap(2).jpg",
      },
    ],

    fries: [
      {
        id: 21,
        title: "Classic Fries",
        price: "$6.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/fries/classic%20fries%202%20.jpg?updatedAt=1773490682800",
      },
      {
        id: 22,
        title: "Loaded Fries",
        price: "$9.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/fries/loaded%20fries.jpg?updatedAt=1773490682637",
      },
      {
        id: 23,
        title: "Loaded Parmesan Fries",
        price: "$9.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/fries/parm%20fries.jpg?updatedAt=1773490666520",
      },
      {
        id: 24,
        title: "Garlic Parmesan Fries",
        price: "$8.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/fries/parm%20fries.jpg?updatedAt=1773490666520",
      },
      {
        id: 25,
        title: "Devil’s Ranch Fries",
        price: "$10.99",
        image: fallbackMenuImage,
      },
      {
        id: 26,
        title: "Chicken Bacon Ranch Fries",
        price: "$10.99",
        image: fallbackMenuImage,
      },
      {
        id: 27,
        title: "Chilli Chicken Fries",
        price: "$10.99",
        image: fallbackMenuImage,
      },
      {
        id: 28,
        title: "Meaty Poutine",
        price: "$12.99",
        image: fallbackMenuImage,
      },
      {
        id: 29,
        title: "Onion Rings",
        price: "$8.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/fries/onion%20rings%20(1).jpg?updatedAt=1773554826670",
      },
      { id: 30, title: "Poutine", price: "$8.99", image: fallbackMenuImage },
    ],

    bites: [
      {
        id: 31,
        title: "Cauliflower Bites",
        price: "$9.99",
        image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/cauliflower%20bites.jpg?updatedAt=1773393924300",
      },
      {
        id: 32,
        title: "Jalapeño Bites",
        price: "$8.99",
        image: fallbackMenuImage,
      },
      {
        id: 33,
        title: "Mozzarella Sticks",
        price: "$8.99",
        image: fallbackMenuImage,
      },
      {
        id: 34,
        title: "Loaded Onion Rings",
        price: "$9.99",
        image: fallbackMenuImage,
      },
    ],

    combos: [
      {
        id: 35,
        title: "Jasper Combo",
        desc: "(1 lb wings - 1 flavour, loaded fries, pop)",
        price: "$17.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_1%20Loaded%20wing%20combo(1).jpg",
      },
      {
        id: 36,
        title: "Jasper King Combo",
        desc: "(1 lb wings, 2 tenders, fries, 2 pops)",
        price: "$29.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_2%20Wing%20&%20tender%20combo(1).jpg",
      },
      {
        id: 37,
        title: "Wing Combo",
        desc: "(1 lb wings, fries, pop)",
        price: "$16.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/loaded%20wing%20combo.jpg",
      },
      {
        id: 38,
        title: "Double Wings Combo",
        desc: "(2 lb wings, loaded fries, pop)",
        price: "$34.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/dad73ff8-b6d2-4927-b1e6-958ad05deaee.jpg",
      },
      {
        id: 39,
        title: "Triple Wing Combo",
        desc: "(2 lb wings, 2 sliders, fries, 3 pops)",
        price: "$44.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/fb6e3046-f8fa-4217-9c39-38201e1bfbff.jpg",
      },
      {
        id: 40,
        title: "Veggie Lovers Combo",
        desc: "(Veggie wrap, loaded fries, pop)",
        price: "$16.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_5%20Veggie%20Loaded%20Combo(1)(1).jpg",
      },
    ],

    desserts: [
      {
        id: 41,
        title: "Cheesecake Roll",
        price: "$4.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/dessert/80b6ac1d-4dc9-4550-8726-5c1ef3c53442.jpg",
      },
      {
        id: 42,
        title: "Cheesecake Slice",
        price: "$4.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/dessert/bde2fe16-0385-4b6f-9026-6e6d7129945e.jpg",
      },
      {
        id: 43,
        title: "Choco Lava Cake",
        price: "$3.99",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/dessert/a1b5923b-2b3d-4f22-9e49-1ad9c14f08a7.jpg",
      },
    ],

    drinks: [
      {
        id: 44,
        title: "Soft Drinks",
        price: "$1.50",
        image: fallbackMenuImage,
      },
      {
        id: 45,
        title: "Red Bull",
        price: "$3.49",
        image:
          "https://ik.imagekit.io/jasperwings/drive%20photos/drinks/red%20buu.png",
      },
      { id: 46, title: "Juice", price: "$3.49", image: fallbackMenuImage },
    ],
  };

  // ================ category =================
  const CATEGORIES = [
    {
      id: "wings",
      name: "Wings",
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "tenders",
      name: "Jasper Tenders",
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
      id: "sliders",
      name: "Sliders",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "wraps",
      name: "Wraps",
      image:
        "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "fries",
      name: "Fries & Loaded Fries",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "bites",
      name: "On-Side Bites",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "combos",
      name: "Combos",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "desserts",
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "drinks",
      name: "Drinks & Extras",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  // ================= CARD =================

  const ProductCard = ({ item }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative min-h-[260px] cursor-pointer overflow-hidden rounded-md text-center"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="text-base font-extrabold text-white md:text-lg drop-shadow-lg">
          {item.title}
        </div>

        {item.desc && (
          <div className="mt-2 text-sm font-medium text-white/90 drop-shadow-md">
            {item.desc}
          </div>
        )}
      </div>
    </motion.div>
  );

  // ================= SECTION =================

  const MenuSection = ({ id, title, items }) => (
    <section id={id} className="py-14 border-b border-white/5 scroll-mt-32">
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

  return (
    <div className="font-sans">
      <CategoryRail
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 font-sans">
        <MenuSection
          id="wings"
          title="WINGS (Bone-In or Boneless)"
          items={MENU_ITEMS.wings}
        />
        <MenuSection
          id="tenders"
          title="JASPER TENDERS (Mild / Medium / Hot)"
          items={MENU_ITEMS.tenders}
        />
        <MenuSection id="burgers" title="BURGERS" items={MENU_ITEMS.burgers} />
        <MenuSection id="sliders" title="SLIDERS" items={MENU_ITEMS.sliders} />
        <MenuSection id="wraps" title="WRAPS" items={MENU_ITEMS.wraps} />
        <MenuSection
          id="fries"
          title="FRIES & LOADED FRIES"
          items={MENU_ITEMS.fries}
        />
        <MenuSection
          id="bites"
          title="ON-SIDE BITES"
          items={MENU_ITEMS.bites}
        />
        <MenuSection id="combos" title="COMBOS" items={MENU_ITEMS.combos} />
        <MenuSection
          id="desserts"
          title="DESSERTS"
          items={MENU_ITEMS.desserts}
        />
        <MenuSection
          id="drinks"
          title="DRINKS & EXTRAS"
          items={MENU_ITEMS.drinks}
        />
      </main>
    </div>
  );
};

export default ExploreMenu;
