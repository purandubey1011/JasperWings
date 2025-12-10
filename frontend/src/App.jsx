import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuPage from "./pages/MenuPage";
import Home from "./pages/Homes";
import ContactPage from "./pages/ContactPage";
import FranchisePage from "./pages/FranchisePage";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/franchizy" element={<FranchisePage/>} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
