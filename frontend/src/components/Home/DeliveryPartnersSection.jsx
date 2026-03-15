import React from "react";
import { motion } from "framer-motion";
import { Bike, Store } from "lucide-react";

const partners = [
  {
    id: "uber-eats",
    eyebrow: "Fastest Pickup",
    className: "bg-white text-black",
    accentClass: "text-[#06c167]",
    borderClass: "border-black/10",
    logoSrc:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Uber%20Eats%202020%20logo.svg",
    logoAlt: "Uber Eats logo",
    logoClassName: "h-14 w-auto md:h-16",
  },
  {
    id: "skip-the-dishes",
    eyebrow: "Quick Cravings",
    className: "bg-white text-black",
    accentClass: "text-[#ff7a00]",
    borderClass: "border-[#ff7a00]/15",
    logoSrc:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/SkipTheDishes%20logo.svg",
    logoAlt: "SkipTheDishes logo",
    logoClassName: "h-16 w-auto md:h-20",
  },
  {
    id: "doordash",
    eyebrow: "Late Night Rush",
    className: "bg-white text-black",
    accentClass: "text-[#ff3008]",
    borderClass: "border-[#ff3008]/15",
    logoSrc:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/DoorDash%20Logo.svg",
    logoAlt: "DoorDash logo",
    logoClassName: "h-12 w-auto md:h-14",
  },
];

const DeliveryPartnersSection = () => {
  return (
    <section className="bg-white px-4 py-16 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-black/8 bg-[linear-gradient(145deg,#ffffff,#fff7f1)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr] lg:items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#d96828]"
            >
              <Bike size={16} />
              Want Delivery
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
              className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl"
            >
              We Are On
              <span className="block text-[#d96828]">Your Favourite Apps</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.16, duration: 0.45, ease: "easeOut" }}
              className="mt-5 text-base leading-7 text-black/65 md:text-lg"
            >
              Order Jasper Wings your way on Uber Eats, SkipTheDishes, and
              DoorDash. Fast pickup, quick delivery, same bold flavour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.24, duration: 0.45, ease: "easeOut" }}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-white"
            >
              <Store size={18} className="text-[#d96828]" />
              <span className="text-sm font-bold uppercase tracking-[0.22em]">
                Uber Eats / Skip / DoorDash
              </span>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {partners.map((partner, index) => (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: 0.12 + index * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`rounded-[28px] border p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${partner.className} ${partner.borderClass}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.24em] ${partner.accentClass}`}>
                  {partner.eyebrow}
                </p>
                <div className="mt-8 min-h-[124px] flex items-center">
                  <img
                    src={partner.logoSrc}
                    alt={partner.logoAlt}
                    className={partner.logoClassName}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPartnersSection;
