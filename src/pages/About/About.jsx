import React from "react";

const About = () => {
  return (
    <section className="bg-gray-300">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 ">
              About Gurkha Silajit
            </h2>
            <p className="mt-8 text-gray-600 text-lg">
              Shilajit has a long history of use in traditional medicine
              systems, particularly in Ayurveda, where it's revered as a
              powerful rejuvenator and tonic for overall health. It's rich in
              minerals, fulvic acid, humic acid, and other organic compounds.
              These components are believed to contribute to its health
              benefits. Many people use shilajit to boost energy levels and
              enhance stamina, making it popular among athletes and those with
              demanding lifestyles. Shilajit contains compounds with
              anti-inflammatory properties, which may help reduce inflammation
              and alleviate pain. Some research suggests that shilajit may
              support cognitive function and memory, potentially due to its
              antioxidant properties. It's believed to strengthen the immune
              system, helping the body fight off infections and illnesses. Due
              to its rich mineral content and antioxidant properties, shilajit
              is sometimes referred to as a natural anti-aging remedy.
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
            <button className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
