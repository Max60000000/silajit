import React from "react";

const Certificate = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 ">
                100% Authenticity
              </h2>
              <p className="mt-8 text-gray-600 text-lg">
                We take pride in our commitment to delivering only the highest
                quality products to our valued customers. That's why we offer a
                100% Authenticity Guarantee, ensuring that every purchase you
                make from us contains only Genuine Himalayan Shilajit. Sourced
                directly from the pristine mountains of the Himalayas, our
                Shilajit is meticulously harvested and tested to meet our
                rigorous standards for purity and potency. We understand the
                importance of authenticity when it comes to natural supplements,
                especially ones as revered as Himalayan Shilajit. That's why we
                go above and beyond to ensure that our products are free from
                any adulterants or contaminants, providing you with the genuine
                benefits that Shilajit has been revered for throughout history.
                With our 100% Authenticity Guarantee, you can shop with
                confidence, knowing that you're getting the real deal every
                time. Experience the power of Genuine Himalayan Shilajit and
                unlock its potential for health and wellness.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-center">
              <img
                src="https://5.imimg.com/data5/SM/ZI/DY/SELLER-42012147/ribbon-gold-medal-500x500.jpg"
                alt="
             auth"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Certificate;
