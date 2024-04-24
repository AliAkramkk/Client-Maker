import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import logo from '../assets/ab2.png';
import Footer from '../Components/Footer/Footer';

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-start mt-16">
        <div className="p-6 text-white flex flex-col items-center md:flex-row justify-center md:justify-start">
          <img
            src={logo}
            alt="TheClientsMaker Logo"
            className="mb-4 max-w-xs md:mr-6 md:mb-0"
          />
          <h3 className="text-xl md:text-2xl lg:text-4xl text-center md:text-left">
            <strong className='text-white'>theclientsmaker </strong>
            <span className='text-red-700 font-bold'>.com</span>
            <br />
            <span className='text-base font-sans'></span>
          </h3>
        </div>
        <div className="bg p-8 text-white max-w-screen-lg">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Our Mission</p>
          <p className="mb-4">
            <strong className='text-xl font-bold'>theclientmaker</strong>
            <strong className='text-xl font-bold text-red-800'>.com </strong>
            a leading digital marketing and business development agency nestled
            in the vibrant landscape of Dubai. We specialize in crafting
            compelling digital experiences tailored to elevate your brand's
            online presence and drive tangible results.
          </p>
          <p className="mb-4">
            At <span className='font-bold'>TheClientsMaker.com</span>, we understand
            that in today's dynamic digital world, having a strong online
            presence is paramount. That's why we offer a comprehensive suite of
            services designed to empower businesses to thrive in the digital
            realm. From stunning website design and captivating video production
            to engaging photography and expertly crafted content, we're your
            one-stop destination for all things digital marketing.
          </p>
          <p className="mb-4">
            With a team of seasoned professionals boasting a wealth of
            experience and a deep understanding of the ever-evolving digital
            landscape, we pride ourselves on delivering innovative solutions
            that exceed expectations. Our relentless commitment to excellence,
            coupled with our passion for creativity, sets us apart as leaders in
            the industry. But we're not just about creating impressive digital
            assets; we're also dedicated to driving meaningful business growth
            for our clients. Through strategic business development
            initiatives, we help businesses unlock their full potential and
            achieve sustainable success in today's competitive market.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
  