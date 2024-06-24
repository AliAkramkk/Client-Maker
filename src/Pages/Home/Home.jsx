import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import SectionCard from "../../Components/Home/SectionCard";
import uaeCard from "../../assets/home2.jpg";
import SectionCard2 from "../../Components/Home/SectionCard2";
import ser from "../../assets/email3.jpeg";
import ser1 from "../../assets/contentM2.png";
import ser2 from "../../assets/web3.jpeg";
import ser3 from "../../assets/wats2.png";
import ser4 from "../../assets/seo4.jpeg";
import ser5 from "../../assets/googled2.png";
import ser6 from "../../assets/Meta1.png";
import ser7 from "../../assets/ecommerce3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import Quotes from "../Quotes";
import SectionCard3 from "../../Components/Home/SectionCard3";
import SectionCard4 from "../../Components/Home/SectionCard4";
import WhatsappButton from "../../Components/WhatsappButton";
import CallToAction from "../../Components/Home/CallToAction";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Works from "../../Components/Home/Works";




const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const services = [
    {
      title: "Email Marketing",
      description:
        "Our email marketing services are designed  to help you create engaging campaigns that resonate with your  subscribers and achieve your business objectives",
              
      image: ser,
      link: "/email",
    },
    {
      title: "Content Creation",
      description:
        "Empower your brand with expert content creation . Our team specializes in crafting compelling content tailored to your audience. From blog posts to social media campaigns.",
      image: ser1,
      link: "/content",
    },
    {
      title: "Web Development",
      description:
      " Our web development services are designed to help you establish a strong online presence and achieve your digital goals.",      
      image: ser2,
      link: "/web",
    },
    {
      title: "WhatsApp API",
      description:
        "we offer robust WhatsApp API integration services designed to enhance your customer communication and engagement.",
      image: ser3,
      link: "/whatsapp",
    },
    {
      title: "SEO",
      description:
        "Boost your online visibility with expert SEO services from TheClientsMaker.com. We specialize in optimizing your website to rank higher on search engines and attract more organic traffic.",
      image: ser4,
      link: "/seo",
    },
    {
      title: "Google Ad",
      description:
        "At TheClientsMaker.com, we specialize in crafting powerful Google Ads campaigns to propel your business to new heights. With our expertise, we'll help you dominate the search engine results pages (SERPs) and attract more customers to your website.",
      image: ser5,
      link: "/google",
    },
    {
      title: "Meta Ad",
      description:
        "At TheClientsMaker.com, we specialize in creating impactful Meta Ads that drive results. With our expertise, we'll help you reach your target audience across the Meta platform and beyond, maximizing your online visibility and attracting more customers to your business.",
      image: ser6,
      link: "/meta",
    },
    {
      title: "E Commerce Listing",
      description:
        "At TheClientsMaker.com, we specialize in creating high-converting e-commerce listings that attract customers and drive sales. With our expertise, we'll optimize your product listings to maximize visibility, increase conversions, and grow your online business.",
      image: ser7,
      link: "/ecom",
    },
  ];

  return (
    <>
      <div className="bg-black overflow-hidden">
        <Navbar />
        <ToastContainer />
        <section
          className="relative bg-contain bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${uaeCard})`,
            backgroundSize: "contain",
            backgroundPosition: "85% 15%",
            backgroundRepeat: "no-repeat",
            padding: "0 5px",
            maxWidth: "100vw",
          }}
        >
          <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Opening a new era for your business
                <br />
                <strong className="block font-extrabold text-rose-700 font-serif text-5xl shadow-slate-950">
                  GROWTH
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                From all set-ups to optimizations, we provide you tailored
                marketing support
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 animate-bounce"
                  to="/contact"
                >
                  LET US KNOW YOUR GOAL
                </Link>
              </div>
            </div>
          </div>
        </section>
        <WhatsappButton />
        <SectionCard2 />
        <div className="bg-gray-200 overflow-hidden">
          <h1 className="text-3xl lg:text-3xl lg:ml-52 font-bold mb-4 pt-10 text-center lg:text-left text-black relative">
            Services
            <span className="absolute bottom-0 left-0 h-1 lg:-ml-60 bg-black w-1/3"></span>
          </h1>
          <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 mb-8 lg:mb-0 lg:ml-20 lg:mr-32">
              <p className="text-xl text-black leading-relaxed font-medium   text-secondary text-[14px] text-justify">
                At our company, we're passionate about transforming businesses through cutting-edge services that redefine industry standards. With a focus on innovation and excellence, we're here to help you thrive in the digital landscape. From search engine optimization (SEO) to social media management, our comprehensive suite of services covers every aspect of digital marketing.
              </p>
            </div>
            <div className="lg:w-2/3">
              {services.map((service, index) => (
                <div key={index} className="mb-4 lg:mr-32">
                  <div
                    className="flex justify-between items-center bg-inherit cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <h2
                      className={`text-lg font-semibold ${
                        activeIndex === index ? "text-orange-600" : "text-black"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <span className="text-black ">
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700"></div>
                  </div>
                  {activeIndex === index && (
                    <div className="bg-white p-4 border-t-2">
                      <div className="flex flex-col lg:flex-row">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
                        />
                        <div>
                          <p className="text-black mb-4  text-secondary text-secondary text-[14px] text-justify">{service.description}</p>
                          <Link
                            to={service.link}
                            className="text-orange-600 font-semibold"
                          >
                            Learn more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <SectionCard3 /> */}
        <SectionCard />
        <SectionCard4 />
      </div>
     <Works />
      <WhyChooseUs />
      <Quotes />
      <CallToAction />
    
    
    </>
  );
};

export default Home;
