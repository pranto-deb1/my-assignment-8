import React from 'react';
import Nav from '../components/Nav';
import image from '../assets/error-404.png'
import { Link } from 'react-router';
const Error1 = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <Nav></Nav>
            <div className="flex justify-self-center mt-[80px]">
                <img src={image} className='w-[500px] h-[500px]'/>
            </div>
            <h1 className="text-center font-semibold text-[48px] mt-[16px]">Oops, page not found!</h1>
            <p className="text-center mt-[8px] text-[#627382] text-[20px]">The page you are looking for is not available.</p>

            <Link to={'/'}><button className='flex justify-self-center px-[40px] py-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] mt-[16px] rounded-[4px] font-semibold text-[white]'>Go Back!</button></Link>
        </div>
    );
};

export default Error1;