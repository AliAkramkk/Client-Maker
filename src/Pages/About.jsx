import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Components/Navbar/Navbar';
import logo from '../assets/about1.webp';
import Footer from '../Components/Footer/Footer';
import WhatsappButton from '../Components/WhatsappButton';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <section
        className="banner-area relative bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${logo})` }}
        id="home"
      >
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="about-content text-center pt-5">
              <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
              <p className="text-white link-nav flex justify-center">
                <Link to="/about" className="text-white mr-2">About Us</Link>
                <FaArrowRight className="text-white" />
                <Link to="/" className="text-white ml-2">Home</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-start mt-16">
        <div className="p-6 text-white max-w-screen-lg">
          <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bold">Our Mission</p>
          <p className="mb-4">
            <span className="text-red-800">theclientsmaker.com</span> is a leading digital marketing and business development agency nestled in the vibrant landscape of Dubai. We specialize in crafting compelling digital experiences tailored to elevate your brand's online presence and drive tangible results.
          </p>
          <p className="mb-4">
            At <span className="font-bold">theclientsmaker.com</span>, we understand that in today's dynamic digital world, having a strong online presence is paramount. That's why we offer a comprehensive suite of services designed to empower businesses to thrive in the digital realm. From stunning website design and captivating video production to engaging photography and expertly crafted content, we're your one-stop destination for all things digital marketing.
          </p>
          <p className="mb-4">
            With a team of seasoned professionals boasting a wealth of experience and a deep understanding of the ever-evolving digital landscape, we pride ourselves on delivering innovative solutions that exceed expectations. Our relentless commitment to excellence, coupled with our passion for creativity, sets us apart as leaders in the industry.
          </p>
          <p className="mb-4">
            Our approach begins with a thorough analysis of each client's unique challenges, goals, and market position. By understanding their specific needs, we can tailor our solutions to maximize impact and deliver measurable results. At the heart of our methodology lies a fusion of cutting-edge technology and creative ingenuity.
          </p>
          <p className="mb-4">
            From eye-catching websites and immersive multimedia content to data-driven marketing strategies, we offer a comprehensive suite of services designed to elevate brands and amplify their online presence. Our team of experts collaborates seamlessly to ensure every aspect of our clients' digital footprint is optimized for success.
          </p>
          <p className="mb-4">
            In essence, we are more than just a digital agency; we are strategic partners, invested in the success and prosperity of our clients. With our expertise, dedication, and passion for innovation, we empower businesses to thrive in today's dynamic and competitive market.
          </p>
        </div>
      </div>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default About;
