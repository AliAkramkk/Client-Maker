import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import img1 from "../assets/web1.jpeg";
import img2 from "../assets/web2.jpeg";
import img3 from "../assets/web3.jpeg";
import img4 from "../assets/web4.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "../Components/VideoPlayer";

const WebDevelopment = () => {
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
                Web Development Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we specialize in creating
                high-performance, visually stunning websites that are tailored
                to meet the unique needs of your business. Our web development
                services are designed to help you establish a strong online
                presence and achieve your digital goals.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for Web Development?
              </h3>
              <p className="text-lg leading-relaxed">
                Custom Web Solutions: We develop custom websites that are
                designed to align with your brand identity and business
                objectives. From simple landing pages to complex web
                applications, we’ve got you covered.
                <br />
                Responsive Design: Our websites are built to be fully
                responsive, ensuring they look and function perfectly on any
                device. We prioritize user experience to engage your audience
                across all platforms.
                <br />
                SEO-Friendly Development: We implement SEO best practices during
                the development process to improve your website's visibility on
                search engines. This helps attract organic traffic and boosts
                your online presence.
                <br />
                Advanced Technologies: We use the latest web development
                technologies and frameworks to create fast, secure, and scalable
                websites. Our expertise includes HTML, CSS, JavaScript, React,
                Angular, Node.js, and more.
                <br />
                E-commerce Solutions: We build robust e-commerce websites with
                features like product catalogs, secure payment gateways, and
                order management systems to enhance your online selling
                capabilities.
                <br />
                Maintenance and Support: Our commitment doesn’t end with the
                launch. We offer ongoing maintenance and support services to
                ensure your website remains up-to-date, secure, and performing
                at its best.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let's Build Something Great Together!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to bring your vision to life? Contact us today to discuss
                your web development needs. Whether you're launching a new
                website or revamping an existing one, we're here to help you
                create a powerful online presence.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we’re not just developing websites; we’re creating digital
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default WebDevelopment;
