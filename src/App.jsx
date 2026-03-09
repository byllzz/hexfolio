
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

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/license" element={<License />}></Route>
          <Route path="/ColorDetails" element={<ColorDetails />}></Route>
          <Route path="/colorNotFound" element={<ColorNotFound />}></Route>
          <Route path="/plateDetails" element={<PlateDetails />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
