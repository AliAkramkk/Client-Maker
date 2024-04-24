import React from "react";
import target from "../../assets/steps.gif";
import phone from "../../assets/24-hours-support.gif";

import handshake from "../../assets/funnel.gif";
import support from "../../assets/strategy.gif";
import presentation from "../../assets/presentation.gif";
import location from "../../assets/way.gif";
const SectionCard = () => {
  return (
    <section className="bg-black text-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
         
           <h2 className="text-3xl font-bold sm:text-4xl">
            Our Features
           </h2>
           
          
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={target}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
            Elevating Your Business to New Heights
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            At TheClientsMaker.com, we've developed a cutting-edge system designed to propel your business forward. With a seamless blend of innovation and reliability, our platform empowers you to navigate the digital landscape with ease.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={support}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Lead the Way
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            At TheClientsMaker.com, we're proud of our extensive track record of success. With a history of delivering outstanding results for our clients, you can trust us to take your business to new heights.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={handshake}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
             Funel for You
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            At TheClientsMaker.com, we embrace a funnel-based business model designed to optimize your success and streamline your growth we help businesses like yours attract, engage, and retain customers more effectively
            </p>
          </a>

          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={phone}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
             
             We are Here
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            Need assistance at any hour of the day or night? Our dedicated support team is here to help. Whether you have a question, encounter an issue, or need urgent assistance, we're just a message or call away.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={presentation}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
            Your Winning Strategy Starts Here
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            At TheClientsMaker.com, we're not just here to give advice; we're here to help you win. Let's work together to develop a winning strategy that propels your business to new heights of success..
            </p>
          </a>

          <a
            className="block rounded-xl border bg-gradient-to-t from-gray-900/50 to-gray-900/25 border-gray-800 p-8 shadow-xl transition hover:shadow-xl hover:shadow-sky-400"
            href="#"
          >
            <img
              src={location}
              alt="Target Image"
              className="size-10 text-pink-500 bg-gray-900"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
            Your Pathway to Achievement Starts Here
            </h2>

            <p className="mt-1 text-sm text-gray-300">
            We're not afraid to think outside the box and explore innovative solutions to drive your business forward. Whether it's implementing cutting-edge technologies or pioneering new strategies, we're always one step ahead.
            </p>
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default SectionCard;
