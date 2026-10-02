import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import LocationPricing from "./pages/LocationPricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <HashScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location-pricing" element={<LocationPricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const headerHeight = 84;
      const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}
