import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover filter"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <header className="lg:px-16 px-4 bg-transparent flex items-center justify-between py-4 shadow-md relative">
              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8WkenLVpzJnpsdCF_37Ei6_nMapYn9OH7lkdfgroVg&s"
                  className="h-12"
                  alt="logo"
                />
              </div>

              <nav className="md:flex md:items-center md:w-auto hidden">
                <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                  <Link className="md:p-4 py-3 px-0 block" to="/about">
                    About
                  </Link>
                  <Link className="md:p-4 py-3 px-0 block" to="/certificate">
                    Certificate
                  </Link>
                  <Link className="md:p-4 py-3 px-0 block" to="/testimonials">
                    Testimonials
                  </Link>
                </ul>
              </nav>
            </header>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-8xl text-yellow-400 font-bold">GURKHA SILAJIT</h1>
          <p className="text-xl text-white mt-4">
            "Nature's secret to unstoppable energy"
          </p>
          <br />
          <button className="mt-4 text-4xl bg-red-500  text-white font-bold py-2 px-4 rounded">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
