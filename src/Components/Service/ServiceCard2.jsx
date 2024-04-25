import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from  '../../assets/digit2-remove.png'

const ServiceCard2 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.7 
  });

  return (
    <section>
  <div className="mx-auto max-w-screen-xl  py-16 sm:px-6 sm:py-24 ">
    

<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"ref={ref}>
      {inView && (
              <motion.img
          alt=""
          src ={ser}
          className="absolute inset-0 h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}
          </div>

      
      

          <motion.div
            className="lg:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
        {/* <article className="space-y-4 text-gray-600"> */}
        <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Email Marketing</h2>
          <p className="mt-4 text-gray-300">
          At TheClientsMaker.com, we understand the power of compelling content in capturing the attention of your audience and driving meaningful engagement. Our dedicated team of content creators is here to help you craft content that resonates with your target audience and achieves your business goals.
          </p>

          </motion.div>
        {/* </article> */}
      </div>
    </div>
  {/* </div> */}
</section>
  )
}

export default ServiceCard2