import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import img1 from "../assets/email1.jpeg";
import img2 from "../assets/email2.jpeg";
import img3 from "../assets/email3.jpeg";
import img4 from "../assets/email4.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "../Components/VideoPlayer";

const EmailMarketing = () => {
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
            <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0 pt-20">
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
              {/* Embed the VideoPlayer component with videoUrl */}
              {/* <VideoPlayer videoUrl={videoUrl} /> */}
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-medium mb-4 text-white">
                Email Marketing Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we know that effective email marketing
                is a powerful tool to connect with your audience, nurture leads,
                and drive conversions. Our email marketing services are designed
                to help you create engaging campaigns that resonate with your
                subscribers and achieve your business objectives.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for Email Marketing?
              </h3>
              <p className="text-lg leading-relaxed">
                Personalized Campaigns: We create customized email campaigns
                tailored to your brand's voice and target audience. From welcome
                emails to promotional campaigns, we ensure your message is
                delivered effectively.
                <br />
                Engaging Content: Our team crafts compelling email content that
                captures attention and encourages action. We focus on creating
                emails that are not only visually appealing but also informative
                and valuable to your subscribers.
                <br />
                Advanced Segmentation: We use advanced segmentation techniques
                to target specific groups within your audience. By sending the
                right message to the right people, we maximize engagement and
                conversion rates.
                <br />
                Automation: We implement email automation to streamline your
                marketing efforts. Automated workflows, such as drip campaigns
                and triggered emails, help you stay connected with your audience
                without manual effort.
                <br />
                Performance Tracking: Our comprehensive analytics and reporting
                provide insights into the performance of your email campaigns.
                We track key metrics like open rates, click-through rates, and
                conversions to continually optimize your strategy.
                <br />
                Compliance and Best Practices: We adhere to industry best
                practices and ensure compliance with email marketing
                regulations, protecting your reputation and ensuring your emails
                reach the inbox.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let's Elevate Your Email Marketing!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to take your email marketing to the next level? Contact us
                today to discuss your email marketing needs. Whether you're
                looking to engage your audience, nurture leads, or drive sales,
                we're here to help you succeed with impactful email marketing
                campaigns.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we're not just sending emails; we're building relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default EmailMarketing;
