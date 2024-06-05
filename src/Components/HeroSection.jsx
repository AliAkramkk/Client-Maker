import React from 'react';
import image from '../assets/blogseo.jpg';
const HeroSection = () => {
  return (
    <div className="flex items-center justify-between p-10 bg-white">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold mt-2 text-gray-800">
        Elevate Your Business with Our Innovative Services
      </h1>
      <p className="mt-4 text-gray-600">
        Welcome to our world of unparalleled digital solutions! At our company, we're passionate about transforming businesses through cutting-edge services that redefine industry standards. With a focus on innovation and excellence, we're here to help you thrive in the digital landscape.
        <br/><br/>
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. */}
      </p>
    </div>
    <div className="max-w-md">
      <img
        src={image}
        alt="Placeholder"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
  
  );
};

export default HeroSection;