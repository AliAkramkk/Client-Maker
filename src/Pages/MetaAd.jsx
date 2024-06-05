import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import img1 from "../assets/Meta1.png";
import img2 from "../assets/Meta2.png";
import img3 from "../assets/Meta3.png";
import img4 from "../assets/Meta4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "../Components/VideoPlayer";

const MetaAd = () => {
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
                Meta Ads Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we specialize in creating and managing
                Meta Ads campaigns that drive results. Our expert team leverages
                the power of Meta’s advertising platform to reach your target
                audience, increase brand awareness, and boost conversions.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for Meta Ads?
              </h3>
              <p className="text-lg leading-relaxed">
                Targeted Advertising: We use Meta’s advanced targeting options
                to reach your ideal audience based on demographics, interests,
                and behaviors.
                <br />
                Creative Ad Design: Our team designs eye-catching and engaging
                ads that capture attention and drive clicks.
                <br />
                Performance Tracking: We continuously monitor and optimize your
                ad campaigns to ensure the best performance and ROI.
                <br />
                Comprehensive Analytics: Gain insights into your ad performance
                with detailed analytics and reporting.
                <br />
                Budget Management: We help you make the most of your advertising
                budget by strategically allocating resources to maximize impact.
                <br />
                Expertise and Experience: Our team has extensive experience
                managing Meta Ads campaigns across various industries, ensuring
                you get the best possible results.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let’s Boost Your Campaign!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to elevate your advertising efforts? Contact us today to
                discuss your Meta Ads campaign needs. Whether you're looking to
                increase brand awareness, drive traffic, or boost sales, we’re
                here to help you succeed with Meta Ads.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we’re not just running ads; we’re driving growth for your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default MetaAd;
