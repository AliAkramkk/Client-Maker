import React from "react";
import "./Home.css";
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
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Quotes from "../Quotes";
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
  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  const services = [
    {
      id : 1,
      tittle : "Digital Marketing",

    }
  ]
  return (
    <div className="bg-black">
      <Navbar />
      <section
        className="relative bg-contain bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url(${uaeCard})`,
          backgroundSize: "contain",
          backgroundPosition: "85% 15%",
          backgroundRepeat: "no-repeat",
          padding: "0 5px", // Adjust padding to create space between content and image
          maxWidth: "100vw", // Ensure the section doesn't exceed the viewport width
        }}
      >
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Opening a new era for your business
              <br />
              <strong className="block font-extrabold text-rose-700 font-serif text-5xl  shadow-slate-950">
                GROWTH
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              From all set-ups to optimizations, we provide you tailored
              marketing support
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... animate-bounce  ..."
                to="/contact"
              >
                LET US KNOW YOUR GOAL
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SectionCard2 style={{ paddingTop: "3rem", paddingBottom: "2rem" }}/>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-8 text-center">
        Our Services{" "}
      </h1>

      <Slider {...settings}>
        {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-80 bg-gray-200 mx-2 rounded-md my-4 overflow-hidden hover:bg-gray-300 "> */}
        <div className="p-4">
          <Link to="/email">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-lg hover:shadow-sky-400">
              <img
                alt=""
                src={ser}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                   Email Marketing
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Unlock your business's digital potential with
                    TheClientsMaker.com. We specialize in crafting tailored
                    digital strategies to elevate your brand and drive results.
                    From captivating website design to engaging content
                    creation, we offer a comprehensive suite of digital
                    marketing services. Let us help you thrive in the online
                    landscape.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/content">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser1}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                    Content Creation
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Empower your brand with expert content creation from
                    TheClientsMaker.com. Our team specializes in crafting
                    compelling content tailored to your audience. From blog
                    posts to social media campaigns, we offer a range of
                    services to enhance your online presence. Let us create
                    content that engages and inspires your audience.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/web">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser2}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                   Web Development
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Transform your space with our expert interior design
                    services at TheClientsMaker.com. From conceptualization to
                    execution, we specialize in creating stunning interiors
                    tailored to your style and needs. Let us bring your vision
                    to life and elevate your space to new heights of beauty and
                    functionality.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/whatsapp">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser3}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">
                    WhatsApp API
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Elevate your brand with captivating graphic design from
                    TheClientsMaker.com. Our team specializes in creating
                    visually stunning graphics that leave a lasting impression.
                    From logos to marketing materials, we offer a range of
                    services to help your brand stand out. Let us bring your
                    ideas to life with creativity and precision.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/seo">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser4}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">SEO</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/google">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser5}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">Google Ad</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/meta">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser6}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">Meta Ad</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/ecom">
            <article className="relative overflow-hidden rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105  hover:shadow-xl hover:shadow-sky-400">
              <img
                alt=""
                src={ser7}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                  <h2 className="mt-0.5 text-lg text-white">E Commerce Listing</h2>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Boost your online visibility with expert SEO services from
                    TheClientsMaker.com. We specialize in optimizing your
                    website to rank higher on search engines and attract more
                    organic traffic. From keyword research to on-page
                    optimization, we offer a comprehensive approach to improving
                    your search engine rankings. Let us help your business reach
                    its full potential online.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
        {/* Add more image divs as needed */}

        {/* </div> */}
      </Slider>
    

      <SectionCard />

      
      <Quotes />
      <Footer />
    </div>
  );
};

export default Home;
