import React from "react";
import section from "../../assets/boy1.png";
import car1 from "../../assets/caro1.jpeg";
import car2 from "../../assets/caro2.jpeg";
import car3 from "../../assets/caro3.jpeg";

import { Carousel } from "@material-tailwind/react";

const SectionCard2 = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
          <Carousel
              className="relative h-64 sm:h-80 lg:h-full"
              swipe={true} 
              animation="fade" 
              autoPlay={true} 
              interval={5000} 
              stopAutoPlayOnHover={false} 
            >
              <img
                alt=""
                src={section}
                className="h-full w-full object-contain"
              />
              <img
                alt=""
                src={car1}
                className="h-full w-full object-contain"
              />
              <img
                alt=""
                src={car2}
                className="h-full w-full object-contain"
              />
              <img
                alt=""
                src={car3}
                className="h-full w-full object-contain"
              />
            </Carousel>
          </div>

          <div className="relative flex items-center bg-black">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-black"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              {/* <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2> */}

              <p className=" text-white font-medium">
              Hey ,<br />
Welcome to TheClientsMaker.com, a leading digital marketing and business development agency nestled in the vibrant landscape of Dubai. We specialize in crafting compelling digital experiences tailored to elevate your brand's online presence and drive tangible results.

              </p>
              <p className=" text-white font-medium">At TheClientsMaker.com, we understand that in today's dynamic digital world, having a strong online presence is paramount. That's why we offer a comprehensive suite of services designed to empower businesses to thrive in the digital realm. From stunning website design and captivating video production to engaging photography and expertly crafted content, we're your one-stop destination for all things digital marketing.
</p>
{/* <p className=" text-black font-medium">With a team of seasoned professionals boasting a wealth of experience and a deep understanding of the ever-evolving digital landscape, we pride ourselves on delivering innovative solutions that exceed expectations. Our relentless commitment to excellence, coupled with our passion for creativity, sets us apart as leaders in the industry.

</p> */}
{/* <p className=" text-black font-medium">
But we're not just about creating impressive digital assets; we're also dedicated to driving meaningful business growth for our clients. Through strategic business development initiatives, we help businesses unlock their full potential and achieve sustainable success in today's competitive market.
</p>
<p className=" text-black font-medium">
Whether you're a startup looking to make a splash or an established enterprise aiming to stay ahead of the curve, TheClientsMaker.com is your trusted partner for navigating the digital landscape with confidence. Join us on the journey to digital excellence and let's make your business vision a reality.
</p> */}
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
