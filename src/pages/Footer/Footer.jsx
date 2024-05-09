import React from "react";

const Footer = () => {
  return (
    <>
      <section className="p-10 flex justify-evenly bg-black">
        <div>
          <img
            src="https://dukaan.b-cdn.net/original/webp/upload_file_service/b6f6b2c3-de25-4ac3-ba64-0a206306c998/meta-description-image.png"
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-4xl">Links</h1>
          <h1 className="text-white">About</h1>
          <h1 className="text-white">Certificate</h1>
          <h1 className="text-white">Testimonials</h1>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-4xl">Contact</h1>
          <h1 className="text-white">Anamnagar, Kathmandu</h1>
          <h1 className="text-white">+970004400</h1>
          <h1 className="text-white">abiralmanushya34@gmail.com</h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
