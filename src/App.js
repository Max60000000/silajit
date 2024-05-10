// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Certificate from './pages/Certificate/Certificate';
import Testimonials from './pages/Testimonials/Testimonials';
import Benefit from './pages/Benefit/Benefit';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
