import React from 'react'
import ser from  '../../assets/co.jpg'
const ServiceCard3 = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            // src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            src={ser}
            className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-125"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl text-white font-bold sm:text-4xl">Customized Content Maker</h2>
  
          <p className="mt-4 text-gray-600">
          Our content creation services are personalized to align with your brand voice, values, and goals. From compelling blog posts and engaging social media content to informative articles and captivating videos, we develop high-quality, tailored content that enhances your online presence and drives customer engagement.
          </p>
  
          {/* <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceCard3