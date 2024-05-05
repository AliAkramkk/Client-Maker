import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from  '../../assets/digit2-remove.png'

const ServiceCard2 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
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
         
At TheClientsMaker.com, we recognize the profound impact of effective email marketing in engaging your audience and achieving your business objectives. Our specialized team is committed to crafting compelling email campaigns tailored to resonate with your target audience.<br/>
Customized Email Solutions: We understand that every business has unique needs and goals. That's why we offer tailored email marketing solutions designed to suit your specific requirements. Whether you need engaging newsletters, promotional emails, or drip campaigns, we've got you covered
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