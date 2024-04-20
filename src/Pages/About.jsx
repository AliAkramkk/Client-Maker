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
            Welcome to <strong className='text-white'>Client </strong> <span className='text-red-700 font-bold'>Maker</span>. Your Digital Sales Man.
          </h3>
        </div>
        <div className="bg p-8 text-gray-800">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Our Mission</p>
          <p className="mb-4">
         <strong className='text-xl font-bold '>Client </strong> <strong className='text-xl font-bold text-red-800'>Maker </strong> is a specialized service offered by TheClientsMaker.com, a prominent digital marketing agency . This innovative service is designed to meticulously identify and analyze target markets for businesses, thereby crafting tailored strategies to attract and retain valuable clientele. By leveraging data-driven insights and cutting-edge market research techniques, Client Maker empowers companies to effectively engage with their ideal customer base, ultimately driving growth and maximizing ROI. With a focus on precision and efficiency, Client Maker sets a new standard for strategic marketing solutions in the digital age, enabling businesses to thrive in today's competitive landscape.we're committed to helping your business succeed in the digital landscape. Let us be your partner in achieving your digital marketing goals. Get in touch with us today to schedule a consultation!"
          </p>
    
        </div>
      </div>
      <Footer />
    </div>
  </>
);
}

export default About