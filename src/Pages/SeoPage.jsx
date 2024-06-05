import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import img1 from "../assets/seo.jpeg";
import img2 from "../assets/seo2.jpeg";
import img3 from "../assets/seo3.jpeg";
import img4 from "../assets/seo4.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "../Components/VideoPlayer";

const SeoPage = () => {
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
                SEO Services
              </h1>
              <p className="text-lg leading-relaxed text-white">
                At TheClientsMaker.com, we understand the critical role that
                search engine optimization (SEO) plays in driving organic
                traffic and enhancing your online presence. Our team of SEO
                experts is dedicated to helping your business achieve higher
                rankings, increased visibility, and sustainable growth through
                effective SEO strategies.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Why Choose Us for SEO?
              </h3>
              <p className="text-lg leading-relaxed">
                Customized SEO Strategies: We recognize that every business is
                unique. Our SEO solutions are tailored to meet the specific
                needs and goals of your business, ensuring the best possible
                outcomes.
                <br />
                Keyword Research and Optimization: Our team conducts thorough
                keyword research to identify the most relevant and
                high-performing keywords for your industry. We optimize your
                content to rank for these keywords and attract the right
                audience.
                <br />
                On-Page and Off-Page SEO: We provide comprehensive SEO services,
                including on-page optimization (such as meta tags, headings, and
                content) and off-page strategies (such as link building and
                social signals) to boost your website's authority and ranking.
                <br />
                Technical SEO: Our technical SEO services ensure that your
                website is search engine-friendly. From improving site speed to
                fixing crawl errors, we handle all technical aspects to enhance
                your site's performance.
                <br />
                Content Optimization: Quality content is key to successful SEO.
                We optimize your existing content and create new, engaging
                content that aligns with SEO best practices to improve your
                site's relevance and authority.
                <br />
                Analytics and Reporting: We provide detailed analytics and
                regular reports to track your SEO performance. Our transparent
                approach ensures you are informed of your site's progress and
                the effectiveness of our strategies.
              </p>

              <h3 className="text-xl font-bold leading-relaxed">
                Let's Boost Your Online Presence!
              </h3>
              <p className="text-lg leading-relaxed">
                Ready to enhance your website's visibility and drive more
                organic traffic? Contact us today to discuss your SEO needs.
                Whether you're looking to improve your rankings, increase
                website traffic, or achieve sustainable growth, we're here to
                help you succeed with proven SEO strategies.
                <br />
                <br />
                At <span className="font-extrabold">TheClientsMaker.com</span>,
                we're not just optimizing websites; we're driving results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default SeoPage;
