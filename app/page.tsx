"use client"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomeMain from "./pages/HomeMain";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppContext from "./utils/AppContext";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Page() {
  return (
    <div>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/home" element={<HomeMain />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}
export default Page;
