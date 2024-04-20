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

          <div className="relative flex items-center bg-gray-200">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-200"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              {/* <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2> */}

              <p className=" text-black font-medium">
              Our mission is to boost your online visibility, engage your audience, and drive your business forward. With our cutting-edge SEO techniques, we'll ensure that your website climbs to the top of search engine results, bringing more traffic and more customers to your door.Our content creation services are second to none, designed to captivate your audience and keep them coming back for more. Whether it's blog posts, social media content, or videos, we'll create compelling, tailored content that speaks directly to your target audience.With our intuitive, user-friendly platform, you'll have everything you need to manage your digital marketing efforts in one place. From analyzing website traffic to launching ad campaigns, we've got you covered.So, are you ready to take your business to the next level? Let <span className="text-white text-xl font-semibold">Client</span> <span className="text-red-700 text-xl font-semibold" >Maker</span> be your guide. Contact us today and let's make your digital dreams a reality.
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
