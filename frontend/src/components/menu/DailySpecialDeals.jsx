import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CLOVER_ORDER_URL } from "../../utils/externalLinks";

const specials = [
  {
    id: 1,
    tag: "Monday",
    title: "Monday Heat Kickoff",
    description:
      "Start the week strong with a fresh wings combo, crispy fries, and a flavour-packed first bite.",
    image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/hero.jpeg",
  },
  {
    id: 2,
    tag: "Tuesday",
    title: "Tuesday Tender Treat",
    description:
      "Golden tenders, signature dips, and comfort-food energy built for an easy midweek craving.",
    image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/booktable.jpeg",
  },
  {
    id: 3,
    tag: "Wednesday",
    title: "Wednesday Wing Feast",
    description:
      "A crowd-favourite wing spread made for sharing, mixing flavours, and breaking the week with heat.",
    image: "/assets/pizza.jpg",
  },
  {
    id: 4,
    tag: "Weekend Special",
    title: "Weekend Craving Rush",
    description:
      "Loaded fries, juicy chicken, bold sauces, and late-night comfort built for weekend hunger.",
    image: "https://ik.imagekit.io/jasperwings/jasper%20website%20images/assets%20images/booktable.jpeg",
  },
];

const DailySpecialDeals = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const scrollAmount = container.clientWidth / 3;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] py-18 text-white font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,104,40,0.22),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d96828]">
              Daily Special Deals
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black uppercase leading-tight md:text-5xl">
              Fresh deals sitting right below the heat.
            </h2>
          </div>

          <a
            href={CLOVER_ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#d96828] px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-[#d96828] transition hover:bg-[#d96828] hover:text-black"
          >
            Order Today
          </a>
        </div>

        <div className="mb-5 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll deals left"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#d96828] hover:text-[#d96828]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll deals right"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d96828] bg-[#d96828] text-black transition hover:bg-white hover:border-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[85%] gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide px-1 pt-3 pb-4 sm:auto-cols-[60%] md:auto-cols-[calc((100%_-_3rem)/3)]"
        >
          {specials.map((special, index) => (
            <motion.article
              key={special.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={special.image}
                  alt={special.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#d96828] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black">
                  {special.tag}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-black uppercase leading-tight text-white">
                  {special.title}
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  {special.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySpecialDeals;
