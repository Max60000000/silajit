import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Certificate from "../Certificate/Certificate";
import Benefit from "../Benefit/Benefit";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
const Hero = () => {
  return (
   <><div>
       <div>
  <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8WkenLVpzJnpsdCF_37Ei6_nMapYn9OH7lkdfgroVg&s" class="h-8" alt="Logo" />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/about" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About</a>
          </li>
          <li>
            <a href="/certificate" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Certificate</a>
          </li>
          <li>
            <a href="/testimonials" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        {/* <!-- Your background image here --> */}
        <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="text-8xl text-yellow-400 font-bold">GURKHA SILAJIT</h1>
        <p class="text-xl text-white mt-4">
          "Nature's secret to unstoppable energy"
        </p>
        <button class="mt-4 text-4xl bg-red-500  text-white font-bold py-2 px-4 rounded">
          BUY NOW
        </button>
      </div>
    </div>
  </nav>
</div>
    </div>
     
    <About />
    <Certificate />
    <Benefit />
    <Testimonials />
    <Footer />
    </> 
      );
};

export default Hero;
