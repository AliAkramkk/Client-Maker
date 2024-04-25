import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import logo from '../assets/new2.png'
import ServiceCard1 from '../Components/Service/ServiceCard1'
import ServiceCard2 from '../Components/Service/ServiceCard2'
import ServiceCard3 from '../Components/Service/ServiceCard3'
import ServiceCard4 from '../Components/Service/ServiceCard4'
import ServiceCard6 from '../Components/Service/ServiceCard6'
import ServiceCard5 from '../Components/Service/ServiceCard5'
import './Service1.css'
import WhatsappButton from '../Components/WhatsappButton'
const Service = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className="flex flex-col items-center justify-start mt-16">
        <div className="p-6 text-white flex flex-col items-center md:flex-row justify-center md:justify-start">
          <img
            src={logo}
            alt="TheClientsMaker Logo"
            className="mb-4 max-w-xs md:mr-6 md:mb-0"
          />
          <h3 className="text-xl md:text-2xl lg:text-4xl text-center md:text-left jerking-effect">
            <strong className='text-white'>your digital salesman </strong>
            <span className='text-red-700 font-bold'></span>
            <br />
            <span className='text-base font-sans'></span>
          </h3>
        </div>
        </div>

      <h1 className="text-4xl font-bold text-gray-400 mb-4 mt-4 text-center jerking-effect">
        Some of our services
      </h1>
      <WhatsappButton />
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
