import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import img1 from '../assets/ecommerce3.png';
import img2 from '../assets/ecommerce6.png';
import img3 from '../assets/ecommerce7.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoPlayer from '../Components/VideoPlayer'; 


const EcommerceListing = () => {

    const images = [img1, img2, img3];
    const videoUrl = 'https://www.youtube.com/watch?v=2tV0V2PDRrQ';
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

  return (
    <>
    <Navbar />
    <section className="text-white bg-black">
      <div className="container px-4 py-24 mx-auto">
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img alt={`slide-${index}`} src={image} className="w-full h-full object-cover rounded" />
                </div>
              ))}
            </Slider>
            {/* Embed the VideoPlayer component with videoUrl */}
            {/* <VideoPlayer videoUrl={videoUrl} /> */}
          </div>
          <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-medium mb-4 ">E-commerce Listing Services</h1>
                            <p className="text-lg leading-relaxed ">
                                At TheClientsMaker.com, we understand the importance of accurate and compelling product listings for your e-commerce business. Our team is dedicated to creating listings that enhance visibility, attract customers, and drive sales.
                            </p>
                            
                            <h3 className='text-xl font-bold leading-relaxed'>
                                Why Choose Us for E-commerce Listings?
                            </h3>
                            <p className="text-lg leading-relaxed">
                                Comprehensive Listings: We provide detailed and informative product descriptions that highlight key features and benefits.<br />
                                High-Quality Images: Our team ensures that your products are showcased with high-quality images that attract and engage customers.<br />
                                SEO Optimization: We optimize your listings with relevant keywords to improve search rankings and increase visibility.<br />
                                Competitive Pricing Strategies: We analyze market trends to help you set competitive prices that maximize sales.<br />
                                Consistency Across Platforms: We ensure consistent and accurate listings across multiple e-commerce platforms.<br />
                                Ongoing Management: Our services include regular updates and management to keep your listings current and competitive.
                            </p>
                            
                            <h3 className='text-xl font-bold leading-relaxed'>
                                Let's Boost Your Sales!
                            </h3>
                            <p className="text-lg leading-relaxed">
                                Ready to enhance your e-commerce presence and boost your sales? Contact us today to discuss your e-commerce listing needs. Whether you're launching a new product or updating your existing inventory, we’re here to help you succeed with listings that stand out.<br/>
                                <br/>
                                At <span className='font-extrabold'>TheClientsMaker.com</span>, we’re not just creating listings; we’re driving your business forward.
                            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
  )
}

export default EcommerceListing