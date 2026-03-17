import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuPage from "./pages/MenuPage";
import Home from "./pages/Homes";
import ContactPage from "./pages/ContactPage";
import FranchisePage from "./pages/FranchisePage";
import ComingSoon from "./pages/ComingSoon";
import MenuLayout from "./components/menu/MenuLayout.jsx";
import ExploreMenu from "./components/menu/ExploreMenu.jsx";
import SeeFlavours from "./components/menu/SeeFlavours.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuLayout />}>
          <Route index element={<ExploreMenu />} />
          <Route path="flavours" element={<SeeFlavours />} />
        </Route>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/franchizy" element={<FranchisePage />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
