import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar'
import aboutImage from '../assets/abt.avif'
import ServiceCard1 from '../Components/Service/ServiceCard1'
import ServiceCard2 from '../Components/Service/ServiceCard2'
import ServiceCard3 from '../Components/Service/ServiceCard3'
import ServiceCard4 from '../Components/Service/ServiceCard4'
import ServiceCard6 from '../Components/Service/ServiceCard6'
import ServiceCard5 from '../Components/Service/ServiceCard5'
import './Service1.css'
import WhatsappButton from '../Components/WhatsappButton'
import ServiceSection from '../Components/ServiceSection';
const Service = () => {

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    'Content Making',
    'Google Ads',
    'Web Application',
    'SEO',
    'Meta Ads',
    'E Commerce Listing'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='bg-black'>
      <Navbar />
      <div className="relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Services</h1>
          </div>
        </div>

      
      <WhatsappButton />
      <ServiceSection />
      <ServiceCard1 />
      <ServiceCard2 />
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard6 />
      <ServiceCard5 />
    </div>
  )
}

export default Service
