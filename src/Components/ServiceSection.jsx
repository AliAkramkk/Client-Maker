import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white">What We Offer to Our Clients</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Specialized Staff</h3>
            <p className="mt-4 text-gray-600">
              Our team of digital marketing experts is highly specialized, bringing a wealth of experience and creativity to every project. We tailor our strategies to meet your unique business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Architecture Design</h3>
            <p className="mt-4 text-gray-600">
              We design digital marketing architectures that are not only visually appealing but also highly functional. Our designs are crafted to enhance user experience and drive engagement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Concept Design</h3>
            <p className="mt-4 text-gray-600">
              Our concept design services focus on innovation and creativity. We stay ahead of industry trends to deliver cutting-edge digital marketing solutions that make your brand stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
