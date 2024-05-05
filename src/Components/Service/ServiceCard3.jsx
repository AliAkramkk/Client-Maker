import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from  '../../assets/home2.jpg'


const ServiceCard3 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });

  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full" ref={ref}>
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
          <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Google Ads</h2>
  
          <p className="mt-4 text-gray-300">
         
At TheClientsMaker.com, we appreciate the significance of Google Ads in reaching your target audience and driving conversions for your business. Our experienced team is dedicated to creating effective Google Ads campaigns that maximize your ROI and deliver tangible results.<br/>
Strategic Google Ads Management: We believe in a strategic approach to Google Ads management that focuses on achieving your business objectives. Whether you're aiming to increase website traffic, generate leads, or boost sales, our team will develop a customized strategy to meet your goals.
          </p>
  
          </motion.div>
        
      </div>
    </div>
  </section>
  )
}

export default ServiceCard3