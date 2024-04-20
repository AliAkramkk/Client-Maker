import React from 'react'
import ser from '../../assets/maker.jpg'
import magazine from '../../assets/magazine.jpg'

const ServiceCard2 = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    {/* <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.
      </h2>
    </div> */}

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 ">
        <img
          alt=""
          src ={ser}
          // src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full transition duration-300 ease-in-out transform hover:scale-125"
        />

        <img
          alt=""
          src={magazine}
          // src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full transition duration-300 ease-in-out transform hover:scale-125"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
        <h2 className="text-3xl text-white font-bold sm:text-4xl">Customized Ad Maker</h2>
          <p>
          With our customized advertising services, we create impactful ad campaigns that resonate with your audience and drive conversions. From eye-catching visuals to persuasive copywriting, we develop tailored ads across various platforms to effectively showcase your products or services and achieve your advertising goals.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
            voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
            dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
            aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
            voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default ServiceCard2