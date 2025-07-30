import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer";
import ContactUs from "./components/Contactus";
import Empowering from "./components/Empowering";
import OurProducts from "./components/OurProducts";
import ScrollToTop from "./components/ScrollToTop";


import Products from "./pages/Products";
import ContactUsForm from "./pages/ContactUsForm";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Home Page
function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <Helmet>
      <title>Home | Harihar Gummings</title>
      <meta
        name="description"
        content="Harihar Enterprises is a leading manufacturer and wholesale supplier of raw materials for sanitary pads, gumming sheets, nonwoven fabrics, and roll-to-roll hygiene solutions. Trusted by 250+ brands across India."

      />
      <meta
        name="keywords"
        content="sanitary pad raw materials, glass raw materials, nonwoven fabric, SAP, PE film, manufacturing materials"
      />
      <meta name="author" content="Harihar Enterprises" />
      <link rel="canonical" href="http://localhost:3000/home" />
      <meta property="og:title" content="Home | Harihar Enterprises" />
  <meta property="og:description" content="Browse premium sanitary pad layers, non-woven materials, and manufacturing solutions. Trusted quality from Harihar Enterprises." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Harihar Enterprises" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
   <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Harihar Enterprises",
        "url": "https://www.example.com", 
        "logo": "https://www.example.com/logo.png",
        "description": "Leading manufacturer and wholesale supplier of industrial non-woven fabric, gumming materials, and hygiene solutions in India.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-959449902",
          "contactType": "Customer Support",
          "areaServed": "IN",
          "availableLanguage": "English"
        
      
      }
    `}
  </script>

    </Helmet>
      <Header />
      <HeroSection />
      <AboutUs />
      <OurProducts />
      <Empowering />
      <ContactUs />
      <Footer />
    </>
  );
}

// ✅ Animation Wrapper for Page Transition
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// ✅ Animated Routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactUsForm /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// ✅ App Component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
