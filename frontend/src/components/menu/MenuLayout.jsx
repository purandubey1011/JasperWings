import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import MenuHero from "./MenuHero";
import BookTableSection from "../Home/BookTableSection";
import Footer from "../Home/Footer";


const MenuLayout = () => {
  return (
    <div className="bg-neutral-950">
      <Navbar bg="transparent" />
      <MenuHero />

      {/* 👇 yahin swap hoga Explore / Flavours */}
      <Outlet />

      <BookTableSection />
      <Footer />
    </div>
  );
};

export default MenuLayout;
