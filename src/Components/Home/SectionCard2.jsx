import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import section from "../../assets/boy1.png";

const SectionCard2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.60 
  });

  return (
    <section ref={ref}>
      <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={inView ? { x: 0 } : { x: "-100vw" }} 
              transition={{ type: "spring", stiffness: 40 ,duration: 25}}
              className="relative h-64 sm:h-80 lg:h-full"
            >
              <img
                alt=""
                src={section}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </motion.div>
          </div>

          <div className="relative flex items-center bg-black">
            <motion.div
              initial={{ x: "100vw" }}
              animate={inView ? { x: 0 } : { x: "100vw" }} 
              transition={{ type: "spring", stiffness: 120,duration:  0 }}
              className="p-8 sm:p-16 lg:p-24"
            >
              <p className="text-white font-medium  text-secondary text-secondary text-[14px] text-justify">
                Hey, <br />
                Welcome to TheClientsMaker.com, a leading digital marketing and
                business development agency nestled in the vibrant landscape of
                Dubai. We specialize in crafting compelling digital experiences
                tailored to elevate your brand's online presence and drive
                tangible results.
              </p>
              <p className="text-white font-medium">
                At TheClientsMaker.com, we understand that in today's dynamic
                digital world, having a strong online presence is paramount.
                That's why we offer a comprehensive suite of services designed
                to empower businesses to thrive in the digital realm. From
                stunning website design and captivating video production to
                engaging photography and expertly crafted content, we're your
                one-stop destination for all things digital marketing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
