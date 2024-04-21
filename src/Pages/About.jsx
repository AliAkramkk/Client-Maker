import React from 'react'
import backgroundImage from '../assets/ab1.jpg'
import Navbar from '../Components/Navbar/Navbar';
import logo from '../assets/navbar.png'
import Footer from '../Components/Footer/Footer';
const About = () => {
  return (
    <>
    <div className="bg-gray-400">
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-start justify-start bg-cover bg-center  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className='py-16'>
        <h1 className="text-center text-gray-100 justify-center text-5xl p-2 font-extrabold">
          About US
        </h1>
        </div> */}
        
        <div className="p-3 text-white flex flex-col md:flex-row items-center md:items-start">
          <img
            src={logo}
            alt="Let's Cook Logo"
            className="mb-4 max-w-xs md:mr-6 md:mb-0 transition duration-300 ease-in-out transform hover:scale-125 animate-spin"
          />
          <h3 className="text-xl md:text-2xl lg:text-4xl mt-4 md:mt-20 mb-20 text-center md:text-left">
            Welcome to <strong className='text-white'>Clients </strong> <span className='text-red-700 font-bold'>Maker</span>. Your Digital Sales Man.
          </h3>
        </div>
        <div className="bg p-8 text-gray-800">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Our Mission</p>
          <p className="mb-4">
         <strong className='text-xl font-bold '>Client </strong> <strong className='text-xl font-bold text-red-800'>Maker </strong>  a leading digital marketing and business development agency nestled in the vibrant landscape of Dubai. We specialize in crafting compelling digital experiences tailored to elevate your brand's online presence and drive tangible results.

          </p >
    
    <p className="mb-4">At <span className='font-bold'>TheClientsMaker.com</span>, we understand that in today's dynamic digital world, having a strong online presence is paramount. That's why we offer a comprehensive suite of services designed to empower businesses to thrive in the digital realm. From stunning website design and captivating video production to engaging photography and expertly crafted content, we're your one-stop destination for all things digital marketing.</p>
    <p className="mb-4"> With a team of seasoned professionals boasting a wealth of experience and a deep understanding of the ever-evolving digital landscape, we pride ourselves on delivering innovative solutions that exceed expectations. Our relentless commitment to excellence, coupled with our passion for creativity, sets us apart as leaders in the industry.But we're not just about creating impressive digital assets; we're also dedicated to driving meaningful business growth for our clients. Through strategic business development initiatives, we help businesses unlock their full potential and achieve sustainable success in today's competitive market</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);
}

export default About