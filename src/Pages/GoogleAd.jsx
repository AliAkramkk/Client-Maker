import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import img1 from "../assets/wats1.png";
import img2 from "../assets/wats2.png";
import img3 from "../assets/wats3.png";
import img4 from "../assets/wats4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "../Components/VideoPlayer";

const GoogleAd = () => {
  const images = [img1, img2, img3, img4];
  const videoUrl = "https://www.youtube.com/watch?v=2tV0V2PDRrQ";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
                    <img
                      alt={`slide-${index}`}
                      src={image}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </Slider>

              {/* <VideoPlayer videoUrl={videoUrl} /> */}
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-medium mb-4 text-white">
                Google Ads Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we excel in managing Google Ads
                campaigns that drive high-quality traffic and conversions. Our
                experienced team uses proven strategies to ensure your ads reach
                the right audience at the right time, maximizing your return on
                investment.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for Google Ads?
              </h3>
              <p className="text-lg leading-relaxed">
                Targeted Campaigns: We create and manage highly targeted Google
                Ads campaigns that focus on reaching your specific audience.
                <br />
                Ad Copy and Design: Our team crafts compelling ad copy and
                designs visually appealing ads that attract clicks and drive
                action.
                <br />
                Keyword Optimization: We conduct thorough keyword research and
                optimization to ensure your ads appear for relevant searches.
                <br />
                Performance Monitoring: We continuously monitor and adjust your
                campaigns to maximize performance and achieve your goals.
                <br />
                Detailed Reporting: Receive comprehensive reports that provide
                insights into your campaign performance and ROI.
                <br />
                Expertise and Experience: Our team has extensive experience
                managing successful Google Ads campaigns across various
                industries.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let's Elevate Your Advertising!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to boost your online presence and drive more conversions?
                Contact us today to discuss your Google Ads campaign needs.
                Whether you want to increase traffic, generate leads, or boost
                sales, we’re here to help you succeed with Google Ads.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we’re not just running ads; we’re driving your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default GoogleAd;
