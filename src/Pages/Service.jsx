import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import service from '../assets/serA.jpg'
import ServiceCard1 from '../Components/Service/ServiceCard1'
import ServiceCard2 from '../Components/Service/ServiceCard2'
import ServiceCard3 from '../Components/Service/ServiceCard3'
import ServiceCard4 from '../Components/Service/ServiceCard4'
// import service from '../assets/ser2.jpg'

const Service = () => {
  return (
   <div className='bg-gray-900'>
       <Navbar />
        <section
       className="relative bg-cover bg-center bg-no-repeat"
       style={{
         backgroundImage: `url(${service})`,
         backgroundSize: 'cover', // or 'contain' depending on your preference
         height: '400px', // Adjust the height as per your requirement
       }}
       >
           <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
  <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
      {/* We Thrive on Your */}
     Design-powered to fuel your growth
       
        <span className=" text-rose-700 font-serif text-7xl animate-spin ... shadow-slate-950 text-center">
        
           goals
        </span>
      
    </h1>

   

  
  </div>
</div>
       </section>
       <h1 className="text-4xl font-bold text-white mb-4 mt-4 text-center">
         Some of our services
        </h1>
       {/* <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">


        </div>
        </div>
       </section> */}
       
       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.1" d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      <ServiceCard1/>
      <ServiceCard2 />
      <ServiceCard3 />
      <ServiceCard4 />
       </div>

  )
}

export default Service