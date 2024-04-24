import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Features/Layout";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ImageSlider from "./Pages/Image/ImageSlider";
import Service1 from "./Pages/Service1";
import ContentMarketing from "./Pages/ContentMarketing";
import SeoPage from "./Pages/SeoPage";
import WebDevelopment from "./Pages/WebDevelopment";
import EmailMarketing from "./Pages/EmailMarketing";
import WhatsappApi from "./Pages/WhatsappApi";
import GoogleAd from "./Pages/GoogleAd";
import MetaAd from "./Pages/MetaAd";
import EcommerceListing from "./Pages/EcommerceListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path = "/service" element={<Service />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/image" element={<ImageSlider />} />
        <Route path = "/content" element={<ContentMarketing />} />
        <Route path = "/seo" element={<SeoPage />} />
        <Route path = "/web" element={<WebDevelopment />} />
        <Route path = "/email" element={<EmailMarketing />} />
        <Route path = "/whatsapp" element={<WhatsappApi />} />
        <Route path = "/google" element={<GoogleAd />} />
        <Route path = "/meta" element={<MetaAd />} />
        <Route path = "/ecom" element={<EcommerceListing />} />
      </Route>
    </Routes>
  );
}

export default App;
