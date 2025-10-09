import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
const Nav = () => {



    return (
        <div className='h-[155px] md:h-[78px] pl-[20px] md:pl-[0px] bg-white flex gap-[10px] flex-wrap justify-start md:justify-around items-center'>
            <a href="/"><div className="flex items-center gap-1">
                <img src={logo} alt="logo" className='w-[40px] h-[40px]' /> <p>HERO.IO</p>
            </div></a>

            <div className="flex gap-[32px] ml-[30px] md:ml-[0px]">
                <NavLink to="/" className='font-medium'>Home</NavLink>
                <NavLink to="/all" className='font-medium'>Apps</NavLink>
                <NavLink to="/installation" className='font-medium'>Installation</NavLink>
            </div>

            <a href="https://github.com/Prizmine/my-assignment-8" target='blank'><button className="w-[145px] h-[43px] text-white rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] flex justify-center items-center gap-[10px]"><FaGithub />Contribute</button></a>
        </div>
        

    );
};

export default Nav;