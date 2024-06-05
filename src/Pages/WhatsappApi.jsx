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

const WhatsappApi = () => {
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
              {/* Embed the VideoPlayer component with videoUrl */}
              {/* <VideoPlayer videoUrl={videoUrl} /> */}
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-medium mb-4 text-white">
                WhatsApp API Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we offer robust WhatsApp API integration
                services designed to enhance your customer communication and
                engagement. Our solutions leverage the power of WhatsApp to
                streamline your messaging operations and drive better customer
                experiences.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for WhatsApp API Integration?
              </h3>
              <p className="text-lg leading-relaxed">
                Seamless Integration: We provide seamless integration of
                WhatsApp API into your existing systems, ensuring smooth and
                uninterrupted communication with your customers.
                <br />
                Automated Messaging: Our services include setting up automated
                messaging workflows, enabling you to send timely updates,
                notifications, and responses to your customers.
                <br />
                Enhanced Customer Support: Improve your customer support with
                instant messaging capabilities. Handle queries, provide support,
                and resolve issues faster through WhatsApp.
                <br />
                Marketing Campaigns: Leverage WhatsApp for your marketing
                campaigns. We help you design and implement effective campaigns
                that reach your audience directly on their preferred messaging
                app.
                <br />
                Secure Communication: Our WhatsApp API integration ensures
                secure and encrypted communication, maintaining the privacy and
                integrity of your customer interactions.
                <br />
                Analytics and Insights: Gain valuable insights into your
                messaging performance with detailed analytics. Track message
                delivery, response rates, and customer engagement to optimize
                your communication strategies.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let's Get Connected!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to elevate your customer communication? Contact us today
                to discuss your WhatsApp API integration needs. Whether you're
                looking to improve customer support, automate messaging, or
                launch marketing campaigns, we're here to help you harness the
                power of WhatsApp.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we’re not just integrating APIs; we’re connecting you to your
                customers like never before.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default WhatsappApi;
