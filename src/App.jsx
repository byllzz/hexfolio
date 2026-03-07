import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import License from './pages/License';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ColorDetails from './pages/ColorDetails';
import ColorNotFound from './pages/ColorNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faqs from './components/layout/Faqs';
import PlateDetails from './pages/PlateDetails'

export default function App() {
  const [navStyle, setNavStyle] = useState('fixed top-0 w-full z-99');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavStyle('fixed top-0 w-full z-99 backdrop-blur-2xl');
      } else {
        setNavStyle('fixed top-0 w-full z-99');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <div>
        <div className={navStyle}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/license" element={<License />}></Route>
          <Route path="/ColorDetails" element={<ColorDetails />}></Route>
          <Route path="/colorNotFound" element={<ColorNotFound />}></Route>
          <Route path="/plateDetails" element={<PlateDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
