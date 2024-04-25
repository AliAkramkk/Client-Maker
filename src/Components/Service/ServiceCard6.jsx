import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from  '../../assets/digit1-remov.png'

const ServiceCard6 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.7 
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
          <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Content Creation</h2>
  
          <p className="mt-4 text-gray-300">
          Our customized marketing solutions are designed to elevate your brand visibility and drive meaningful results. Whether it's through SEO, social media marketing, email campaigns, or influencer partnerships, we craft personalized strategies to reach your target audience and maximize your ROI.
          </p>
  
          </motion.div>
        
      </div>
    </div>
  </section>
  )
}

export default ServiceCard6