import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Features/Layout";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ImageSlider from "./Pages/Image/ImageSlider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path = "/service" element={<Service />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/image" element={<ImageSlider />} />
      </Route>
    </Routes>
  );
}

export default App;
