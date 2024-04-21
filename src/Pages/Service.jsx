import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import service from '../assets/ser4.jpg'
import ServiceCard1 from '../Components/Service/ServiceCard1'
import ServiceCard2 from '../Components/Service/ServiceCard2'
import ServiceCard3 from '../Components/Service/ServiceCard3'
import ServiceCard4 from '../Components/Service/ServiceCard4'

const Service = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${service})`,
          height: '400px', 
        }}
      >
        {/* Remove the gray overlay in the mobile menu */}
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Design-powered to fuel your growth
              <span className="text-rose-700 font-serif text-7xl animate-spin ... shadow-slate-950 text-center">
                goals
              </span>
            </h1>
          </div>
        </div>
      </section>

      <h1 className="text-4xl font-bold text-white mb-4 mt-4 text-center">
        Some of our services
      </h1>
      
      <ServiceCard1 />
      <ServiceCard2 />
      <ServiceCard3 />
      <ServiceCard4 />
    </div>
  )
}

export default Service
