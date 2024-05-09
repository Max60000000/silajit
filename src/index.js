import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero/Hero.jsx";
import About from "./pages/About/About.jsx";
import Certificate from "./pages/Certificate/Certificate.jsx";
import Testimonials from "./pages/Testimonials/Testimonials.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Benefit from "./pages/Benefit/Benefit.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
