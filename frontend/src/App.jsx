import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuPage from "./pages/MenuPage";
import Home from "./pages/Homes";
import ContactPage from "./pages/ContactPage";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
