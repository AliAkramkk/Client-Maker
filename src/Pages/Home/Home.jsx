import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import SectionCard from "../../Components/Home/SectionCard";
import uaeCard from "../../assets/homeMain.jpg";
import SectionCard2 from "../../Components/Home/SectionCard2";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="bg-gray-200">
      <Navbar />
      <section
        className="relative bg-gray-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${uaeCard})` }}
      >
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              We Thrive on Your
              <strong className="block font-extrabold ">
                {" "}
                Business in
                <span className=" text-rose-700 font-serif text-7xl animate-spin ... shadow-slate-950">
                  {" "}
                  DUBAI
                </span>{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white ">
              From all set-ups to optimizations, we provide you tailored
              marketing support
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 
                duration-300 ... animate-bounce  ..."
              >
                LET US KNOW YOUR GOAL
              </a>
            </div>
          </div>
        </div>
      </section>
    
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path style={navbarStyle} fill-opacity="0.1" d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      <SectionCard2 />
      <SectionCard />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,149.3C840,160,960,224,1080,224C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <Footer />
    </div>
  );
};

export default Home;