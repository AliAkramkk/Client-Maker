import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ser from '../assets/blog2.jpg';
import ser1 from '../assets/blog3.jpg';
import ser2 from '../assets/blog1.jpg';

const Blogs = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000); // Adjust the interval duration as needed
    
        return () => clearInterval(interval);
      }, []);
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      const nextSlide = () => {
        slider.slickNext();
      };
    
      let slider;
    
      return (
        <div>
          <Slider {...settings} ref={(c) => (slider = c)}>
            <div>
              <div className="p-4">
                <Link to="/">
                  <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-sky-400">
                    <img
                      alt=""
                      src={ser}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                      <div className="p-4 sm:p-6">
                        <h2 className="mt-0.5 text-lg text-white">Digital Marketing</h2>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Unlock your business's digital potential with TheClientsMaker.com. We specialize in crafting tailored digital strategies to elevate your brand and drive results. From captivating website design to engaging content creation, we offer a comprehensive suite of digital marketing services. Let us help you thrive in the online landscape.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
            <div>
              <div className="p-4">
                <Link to="/">
                  <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-sky-400">
                    <img
                      alt=""
                      src={ser1}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                      <div className="p-4 sm:p-6">
                        <h2 className="mt-0.5 text-lg text-white">Content Creation</h2>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Empower your brand with expert content creation from TheClientsMaker.com. Our team specializes in crafting compelling content tailored to your audience. From blog posts to social media campaigns, we offer a range of services to enhance your online presence. Let us create content that engages and inspires your audience.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
            <div>
              <div className="p-4">
                <Link to="/">
                  <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-sky-400">
                    <img
                      alt=""
                      src={ser2}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                      <div className="p-4 sm:p-6">
                        <h2 className="mt-0.5 text-lg text-white">Interior Designing</h2>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Transform your space with our expert interior design services at TheClientsMaker.com. From conceptualization to execution, we specialize in creating stunning interiors tailored to your style and needs. Let us bring your vision to life and elevate your space to new heights of beauty and functionality.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
            {/* Add more duplicated images as needed */}
            <div>
              <div className="p-4">
                <Link to="/">
                  <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-sky-400">
                    <img
                      alt=""
                      src={ser}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                      <div className="p-4 sm:p-6">
                        <h2 className="mt-0.5 text-lg text-white">Digital Marketing</h2>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Unlock your business's digital potential with TheClientsMaker.com. We specialize in crafting tailored digital strategies to elevate your brand and drive results. From captivating website design to engaging content creation, we offer a comprehensive suite of digital marketing services. Let us help you thrive in the online landscape.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
              <div className="p-4">
                <Link to="/">
                  <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-sky-400">
                    <img
                      alt=""
                      src={ser2}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                      <div className="p-4 sm:p-6">
                        <h2 className="mt-0.5 text-lg text-white">Digital Marketing</h2>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Unlock your business's digital potential with TheClientsMaker.com. We specialize in crafting tailored digital strategies to elevate your brand and drive results. From captivating website design to engaging content creation, we offer a comprehensive suite of digital marketing services. Let us help you thrive in the online landscape.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      );
    };

export default Blogs;
