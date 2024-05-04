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
          Our content creation services are personalized to align with your brand voice, values, and goals. From compelling blog posts and engaging social media content to informative articles and captivating videos, we develop high-quality, tailored content that enhances your online presence and drives customer engagement.
          </p>
  
          </motion.div>
        
      </div>
    </div>
  </section>
  )
}

export default ServiceCard3