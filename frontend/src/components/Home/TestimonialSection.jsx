import { Quote, Star } from "lucide-react";
import React, { useState, useRef } from "react";
import { FaPaw } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    name: "Sofia",
    title: "Food Critic",
    rating: 5,
  },
  {
    id: 3,
    text: "Integer congue, ipsum id tempor dictum, nisl purus faucibus lacus, at posuere arcu nibh non quam. Curabitur facilisis.",
    name: "Ayesha",
    title: "Blogger",
    rating: 5,
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="relative bg-[#0a0a0a] rounded-3xl p-8 pt-6 flex flex-col items-center text-center group border border-gray-800/50 shadow-2xl transition-transform hover:-translate-y-1">
      {/* Floating Quote Icon */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0f0e0e] rounded-full flex items-center justify-center border-4 border-[#0d0d0d]">
        <Quote className="w-6 h-6 text-[#f59e0b] fill-[#f59e0b]" />
      </div>

      {/* Content */}
      <div className="mt-4 mb-6">
        <p className="text-gray-300 leading-relaxed text-sm md:text-sm font-base italic">
          {`"${item.text}"`}
        </p>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
        ))}
      </div>

      {/* Author Info */}
      <div className="mt-auto">
        <h4 className="text-white font-bold text-md">{item.name}</h4>
        <p className="text-gray-500 text-[.6vw] uppercase tracking-wider mt-1">
          {item.title}
        </p>
      </div>
    </div>
  );
}

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Simple touch-swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimal swipe distance
    if (distance > threshold) {
      // swiped left -> next
      setIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
    } else if (distance < -threshold) {
      // swiped right -> prev
      setIndex((prev) => Math.max(prev - 1, 0));
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="relative py-20 md:min-h-screen bg-black pt-12">
      {/* Background Image (kept as before) */}
      <div className="absolute top-1 inset-0 z-50 flex justify-center items-start opacity-50 pointer-events-none">
        <img
          src="/assets/bear.png"
          alt="Bear Background"
          className="w-auto h-[27rem] object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold mb-4">
            <FaPaw className="text-xl" />
            <span>TESTIMONIALS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-medium text-white uppercase tracking-wide"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            WHAT CUSTOMER SAYS?
          </h2>
        </div>

        {/* Cards Container */}
        {/* On mobile: we'll show only the active card centered.
            On md+/desktop: grid of cards as before. */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative z-10 max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => {
              // For mobile: hide non-active cards; for md+ show all.
              // We include both `max-sm:block` and `max-sm:hidden` string literals
              // so Tailwind sees both classes when it scans files.
              const mobileVisibility = i === index ? "max-sm:block" : "max-sm:hidden";
              return (
                <div
                  key={t.id}
                  className={`${mobileVisibility} md:block`}
                >
                  <TestimonialCard item={t} />
                </div>
              );
            })}
          </div>

          {/* Pagination Dots (always visible; on desktop they are still functional but primarily used on mobile) */}
          <div className="flex gap-3 mt-6 z-10 justify-center items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition-all focus:outline-none ${
                  i === index ? "bg-[#f59e0b]" : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
