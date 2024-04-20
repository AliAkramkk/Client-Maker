import React from "react";
import section from "../../assets/Designer.png";
const SectionCard2 = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
               
                src={section}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              {/* <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2> */}

              <p className="mt-4 text-gray-600">
              Welcome to [Your Company Name], where we turn dreams into reality. Imagine a world where your brand soars above the competition, capturing the hearts and minds of your audience effortlessly. Our digital marketing web application is your gateway to that world, where your dreams take flight  we transform your aspirations into achievable goals. Whether you're looking to increase brand awareness, drive website traffic, or boost sales, we've got you covered. Our team of experts specializes in crafting personalized strategies tailored to your unique business needs.
              </p>

              {/* <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 pointer-events-none ..."
              >
                Get in Touch
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
