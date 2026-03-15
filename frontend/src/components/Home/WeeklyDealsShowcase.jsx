import React, { useState } from "react";
import { motion } from "framer-motion";

const deals = [
  {
    id: "monday",
    title: "Wings Power",
    day: "Monday",
    time: "",
    items: [{ label: "1lb wings", price: "10$" }],
    image:
      "https://ik.imagekit.io/jasperwings/jasper%20website%20images/1lb%20(1flavour)skip.jpg?updatedAt=1773393911524",
  },
  {
    id: "tuesday",
    title: "Tender",
    day: "Tuesday",
    time: "",
    items: [{ label: "2 jasper tenders", price: "10$" }],
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/a0b678b3-345e-437d-b2c2-fe745c4e1239.jpg",
  },
  {
    id: "wednesday",
    title: "Wrap It",
    day: "Wednesday",
    time: "",
    items: [{ label: "any wrap", price: "10$" }],
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20wrap.jpg",
  },
  {
    id: "thursday",
    title: "Burger Break",
    day: "Thursday",
    time: "",
    items: [{ label: "any burger", price: "10$" }],
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20burger.jpg",
  },
  {
    id: "weekdays",
    title: "Weekdays Lunch Time Specials",
    day: "Weekdays",
    time: "11am - 2pm",
    items: [
      { label: "loaded fries", price: "7.99$" },
      { label: "grilled chicken plate", price: "13.99$" },
    ],
    image:
      "https://ik.imagekit.io/jasperwings/drive%20photos/fries/loaded%20fries.jpg?updatedAt=1773490682637",
  },
];

const WeeklyDealsShowcase = () => {
  const [activeDeal, setActiveDeal] = useState("monday");

  return (
    <motion.div layout className="flex flex-col gap-4 lg:flex-row">
      {deals.map((deal, index) => {
        const isActive = activeDeal === deal.id;

        return (
          <motion.article
            key={deal.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.07,
              duration: 0.45,
              ease: "easeOut",
              layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={() => setActiveDeal(deal.id)}
            className={`group relative overflow-hidden rounded-[28px] bg-black text-white cursor-pointer transition-all duration-500 ${
              isActive
                ? "min-h-[340px] lg:min-h-[430px] lg:flex-[3.2]"
                : "min-h-[120px] lg:min-h-[430px] lg:flex-1"
            }`}
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <motion.div
              className="absolute inset-0"
              animate={{
                background: isActive
                  ? "linear-gradient(135deg,rgba(0,0,0,0.84),rgba(0,0,0,0.45) 52%,rgba(217,104,40,0.2))"
                  : "linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.82))",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <motion.div
              className="absolute inset-0 z-10"
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 8,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <div className="flex h-full flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f0a33a]">
                    {deal.day}
                  </p>
                  {deal.time && (
                    <p className="mt-3 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/82">
                      {deal.time}
                    </p>
                  )}
                </div>

                <div className="max-w-md">
                  <h3 className="text-3xl font-black uppercase leading-none md:text-5xl">
                    {deal.title}
                  </h3>

                  {!deal.time && (
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
                      {deal.day}
                    </p>
                  )}

                  <div className="mt-6 space-y-3">
                    {deal.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-sm"
                      >
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-white md:text-base">
                          {item.label}
                        </span>
                        <span className="text-2xl font-black text-[#f0a33a]">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 z-10"
              animate={{
                opacity: isActive ? 0 : 1,
                y: isActive ? -8 : 0,
              }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              style={{ pointerEvents: isActive ? "none" : "auto" }}
            >
              <div className="flex h-full items-end justify-start p-4 lg:items-center lg:justify-center lg:p-0">
                <span className="text-xl font-black uppercase tracking-[0.22em] text-white drop-shadow-lg lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-2xl">
                  {deal.day}
                </span>
              </div>
            </motion.div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};

export default WeeklyDealsShowcase;
