import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from '../../assets/interior-remove.png'

const ServiceCard5 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });


  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
           <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full"ref={ref}>
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
          <article className="space-y-4 text-gray-400">
          <h2 className="text-3xl text-gray-300 font-bold sm:text-4xl">SEO</h2>
            <p>
            At TheClientsMaker.com, we understand the vital role that SEO (Search Engine Optimization) plays in boosting your online visibility and driving organic traffic to your website. Our dedicated team of SEO experts is here to help you optimize your website and climb the search engine rankings.<br/>
Tailored SEO Solutions: We believe in a customized approach to SEO that is tailored to the unique needs and goals of your business. Whether you're looking to increase website traffic, improve your search engine rankings, or generate more leads, we've got you covered
            </p>
  
            <p>
            Our approach to website development is centered around your specific requirements, ensuring that the end result is not just a website, but a powerful tool for your business growth. Our designers work closely with you to understand your brand identity and vision. We create custom designs that capture the essence of your brand, incorporating elements that resonate with your target audience.A great website is one that is easy to navigate and provides a seamless user experience. We prioritize user-friendliness in our designs, ensuring that visitors can easily find the information they need and take desired actions.
            </p>
          </article>
          </motion.div>
        
      </div>
    </div>
  </section>
  )
}

export default ServiceCard5