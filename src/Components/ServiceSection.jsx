import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white">What we offer to our clients</h2>
        {/* <p className="mt-4 text-gray-400">Who are in extremely love with eco-friendly system..</p> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Interior Design</h3>
            <p className="mt-4 text-gray-600">
              Sony laptops are among the most well-known laptops on today's market. Sony is a name that over time has established itself as creating a solid product.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Architecture Design</h3>
            <p className="mt-4 text-gray-600">
              Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Concept Design</h3>
            <p className="mt-4 text-gray-600">
              Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Concept Design</h3>
            <p className="mt-4 text-gray-600">
              Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Concept Design</h3>
            <p className="mt-4 text-gray-600">
              Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Concept Design</h3>
            <p className="mt-4 text-gray-600">
              Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;