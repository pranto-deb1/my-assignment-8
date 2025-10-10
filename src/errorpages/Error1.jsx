import React from 'react';
import Nav from '../components/Nav';
import image from '../assets/error-404.png'
import { Link } from 'react-router';
const Error1 = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <Nav />

        
        <div className="flex justify-center mt-[60px]">
          <img
            src={image}
            alt="404 Not Found"
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain"
          />
        </div>


        <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[48px] mt-[16px]">
          Oops, page not found!
        </h1>
        <p className="mt-[8px] text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
          The page you are looking for is not available.
        </p>


        <Link to={'/'}>
          <button className="mt-[24px] px-[32px] sm:px-[40px] py-[12px] sm:py-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-[6px] font-semibold text-white text-[16px] sm:text-[18px] transition-all hover:scale-105 duration-300">
            Go Back!
          </button>
        </Link>
    </div>

    );
};

export default Error1;