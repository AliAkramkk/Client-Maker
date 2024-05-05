import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from  '../../assets/digit1-remov.png'

const ServiceCard6 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });

  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"ref={ref}>
        {inView && (
              <motion.img
                alt=""
                src={ser}
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
          <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">E Commerce Listing</h2>
  
          <p className="mt-4 text-gray-300">
          At TheClientsMaker.com, we understand the importance of effective e-commerce listings in driving sales and growing your online business. Our dedicated team specializes in creating compelling product listings that captivate your audience and drive conversions.<br/>
Tailored E-commerce Listing Solutions: We believe in crafting listings that are customized to meet the unique needs and goals of your online store. Whether you're selling products on Amazon, eBay, Shopify, or other platforms, we've got you covered
          </p>
  
          </motion.div>
        
      </div>
    </div>
  </section>
  )
}

export default ServiceCard6