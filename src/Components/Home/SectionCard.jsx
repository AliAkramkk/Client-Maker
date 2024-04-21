import React from "react";
import target from "../../assets/steps.gif";
import phone from "../../assets/24-hours-support.gif";
// import notebook from "../../assets/no.gif";
import handshake from "../../assets/funnel.gif";
import support from "../../assets/strategy.gif";
import presentation from "../../assets/presentation.gif";
import location from "../../assets/way.gif";
const SectionCard = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
         
           <h2 className="text-3xl font-bold sm:text-4xl">
            Our Features
           </h2>
           
          {/* <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={target}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Our system
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={support}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Digital campaigns
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={handshake}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Digital campaigns
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={phone}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Digital campaigns
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={presentation}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Digital campaigns
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src={location}
              alt="Target Image"
              className="size-10 text-pink-500"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Digital campaigns
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
