import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import Navbar from "../common/Navbar";
import MenuHero from "./MenuHero";
import BookTableSection from "../Home/BookTableSection";
import Footer from "../Home/Footer";


const MenuLayout = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-neutral-950 text-white"
      style={{ fontFamily: '"Barlow", sans-serif' }}
    >
      <Navbar />
      <MenuHero />

      {/* 👇 yahin swap hoga Explore / Flavours */}
      <Outlet />

      <BookTableSection />
      <Footer />

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d96828] text-black shadow-[0_12px_28px_rgba(217,104,40,0.35)] transition hover:scale-105 hover:bg-white"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default MenuLayout;
