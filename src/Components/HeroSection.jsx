import React from 'react';
import image from '../assets/blogseo.jpg';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
      <div className="max-w-md lg:mr-10 lg:order-2">
        <h1 className="text-4xl lg:text-5xl font-bold mt-2 text-black">
          Elevate Your Business with Our Innovative Services
        </h1>
        <p className="mt-4 text-gray-600 text-secondary text-[14px] text-justify font-normal">
          Welcome to our world of unparalleled digital solutions! At our company, we're passionate about transforming businesses through cutting-edge services that redefine industry standards. With a focus on innovation and excellence, we're here to help you thrive in the digital landscape.
        </p>
      </div>
      <div className="max-w-md lg:max-w-xl lg:order-1">
        <img
          src={image}
          alt="Placeholder"
          className="rounded-lg shadow-lg w-full lg:w-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
