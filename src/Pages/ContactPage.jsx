import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const ContactPage = () => {
  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="bg-gray-400">
      <Navbar />
      <section className="relative z-10 overflow-hidden p-4 py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-1/2 xl:w-6/12 mb-10 lg:mb-0">
              <div className="max-w-[570px] mx-auto lg:mx-0">
                <span className="block text-base font-semibold text-primary mb-4">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua.
                  Ut enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="mb-8">
                  <ContactInfo
                    icon={
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Phone icon path */}
                      </svg>
                    }
                    title="Our Location"
                    content="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
                  />
                  <ContactInfo
                    icon={
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Email icon path */}
                      </svg>
                    }
                    title="Email Address"
                    content="clientmakersupport@gmail.com"
                  />
                  <ContactInfo
                    icon={
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Location icon path */}
                      </svg>
                    }
                    title="Phone Number"
                    content="(+62)81 414 257 9980"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  {/* Input fields and textarea */}
                </form>
                <span className="absolute -right-10 -top-14 z-[-1]">
                  {/* Background shape */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex mb-8">
      <div className="mr-6 flex h-12 w-12 items-center justify-center rounded bg-primary/5 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-base text-body-color dark:text-dark-6">{content}</p>
      </div>
    </div>
  );
};
