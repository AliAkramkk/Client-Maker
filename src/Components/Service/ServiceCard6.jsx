import React from 'react'
import ser from  '../../assets/digit1-remov.png'
const ServiceCard6 = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            // src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            src={ser}
            className="absolute inset-0 h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-125"
          />
          
          
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">Content Creation</h2>
  
          <p className="mt-4 text-gray-600">
          Our customized marketing solutions are designed to elevate your brand visibility and drive meaningful results. Whether it's through SEO, social media marketing, email campaigns, or influencer partnerships, we craft personalized strategies to reach your target audience and maximize your ROI.
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

export default ServiceCard6