import React from "react";

const Footer = () => {
  return (
    <>
      <section className="p-10 flex flex-col md:flex-row justify-evenly bg-black">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://dukaan.b-cdn.net/original/webp/upload_file_service/b6f6b2c3-de25-4ac3-ba64-0a206306c998/meta-description-image.png"
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="text-white mt-8 md:mt-0 md:ml-16">
          <div className="text-center md:text-left">
            <h1 className="text-4xl mb-4">Links</h1>
            <h1 className="p-2">About</h1>
            <h1 className="p-2">Certificate</h1>
            <h1 className="p-2">Testimonials</h1>
          </div>
        </div>
        <div className="text-white mt-8 md:mt-0 md:ml-16">
          <div className="text-center md:text-left">
            <h1 className="text-4xl mb-4">Contact</h1>
            <h1 className="p-2">Anamnagar, Kathmandu</h1>
            <h1 className="p-2">+970004400</h1>
            <h1 className="p-2">abiralmanushya34@gmail.com</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

