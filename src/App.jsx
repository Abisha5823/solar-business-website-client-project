import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import SiteLayout from "./components/SiteLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Solar from "./pages/Solar.jsx";
import Battery from "./pages/Battery.jsx";
import RO from "./pages/RO.jsx";
import CCTV from "./pages/CCTV.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS on route change for correct reveal timing
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/battery" element={<Battery />} />
          <Route path="/ro" element={<RO />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

