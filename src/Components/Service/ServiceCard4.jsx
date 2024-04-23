import React from 'react'
import ser from '../../assets/interior-remove.png'
const ServiceCard4 = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    {/* <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.
      </h2>
    </div> */}

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
      src={ser}
          //   src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-125"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
        <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">Customized Web Maker</h2>
          <p>
          We specialize in crafting bespoke websites tailored to your unique business needs. Our team creates user-friendly, visually appealing, and fully functional websites that reflect your brand identity and resonate with your target audience..
          </p>

          <p>
          Our approach to website development is centered around your specific requirements, ensuring that the end result is not just a website, but a powerful tool for your business growth. Our designers work closely with you to understand your brand identity and vision. We create custom designs that capture the essence of your brand, incorporating elements that resonate with your target audience.A great website is one that is easy to navigate and provides a seamless user experience. We prioritize user-friendliness in our designs, ensuring that visitors can easily find the information they need and take desired actions.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default ServiceCard4