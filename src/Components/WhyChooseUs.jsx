import React from "react";
import featureImage from "../assets/webblog2.jpg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-black bg-white lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
              Why People Trust Us? Learn About Us!
            </h1>
            <p className="mb-6  lg:text-left text-black text-secondary text-secondary text-[14px] text-justify">
              At TheClientsMaker.com, our commitment to excellence sets us apart
              in the digital marketing landscape. We believe in building lasting
              relationships with our clients by delivering exceptional results.
              Our team of experts uses cutting-edge strategies and innovative
              solutions to help your business thrive online. With a deep
              understanding of the digital world and a passion for success, we
              are dedicated to driving growth and achieving your marketing
              goals. Partner with us to experience unparalleled service and see
              why so many businesses trust us to elevate their online presence.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1 text-gray-600">
                  <p>Digital Marketing</p>
                  <p>85%</p>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-black h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-gray-600">
                  <p>SEO & Backlinks</p>
                  <p>90%</p>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-black h-full rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-gray-600">
                  <p>Design & Development</p>
                  <p>95%</p>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-black h-full rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
            <div className="absolute inset-0 border-4 rounded-lg border-black"></div>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg lg:static"
              src={featureImage}
              alt="Feature"
              style={{ top: 'auto', left: 'auto' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
