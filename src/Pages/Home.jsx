import React, { lazy, Suspense, useEffect, useState } from 'react';
import HeroPNG from '../assets/hero.png';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { useOutletContext } from 'react-router';
const HomeApps = lazy(() => import('../components/HomeApps'));
const Home = () => {
    const { allApps } = useOutletContext();

const [AppsDownloards, setAppsDownloards] = useState([]);
const [totalInMillions, setTotalInMillions] = useState(0);

    useEffect(() => {
      
      const numbers = allApps.map(app => {
        const str = app.downloads; 
        const num = parseFloat(str);
        if (str.includes("M")) return num * 1_000_000;
        if (str.includes("K")) return num * 1_000;
        return num;
      });

      setAppsDownloards(numbers);

      
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setTotalInMillions(total / 1_000_000);

    }, [allApps]);

    
    const [AppsReviews, setReviews] = useState([]);
const [totalReviewsInK, setTotalReviewsInK] = useState(0);

    useEffect(() => {
      
      const numbers = allApps.map(app => {
        const str = app.downloads; 
        const num = parseFloat(str);
        if (str.includes("M")) return num * 1_000_000;
        if (str.includes("K")) return num * 1_000;
        return num;
      });

      setReviews(numbers);

      
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setTotalReviewsInK(total / 1_000_00);

    }, [allApps]);


    
    return (
<div className='mt-[80px]'>
  
  <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] text-center font-extrabold leading-tight md:leading-[80px]">
    We Build<br />
    <span className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent'>
      Productive
    </span> Apps
  </h1>

  
  <p className="mt-4 text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] text-center leading-relaxed">
    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br className="hidden md:block" />
    Our goal is to turn your ideas into digital experiences that truly make an impact.
  </p>

  
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[16px] my-[40px]">
    <a href="https://play.google.com/store/games?hl=en" target='blank'>
      <button className='border shadow-sm rounded-[4px] border-[#D2D2D2] w-[200px] h-[56px] font-semibold text-[18px] flex justify-center gap-[10px] items-center hover:bg-gray-100 transition'>
        <IoLogoGooglePlaystore /> Google Play
      </button>
    </a>

    <a href="https://www.apple.com/app-store/" target='blank'>
      <button className='border shadow-sm rounded-[4px] border-[#D2D2D2] w-[200px] h-[56px] font-semibold text-[18px] flex justify-center gap-[10px] items-center hover:bg-gray-100 transition'>
        <FaAppStoreIos /> App Store
      </button>
    </a>
  </div>

  
  <div className="flex justify-center">
    <img src={HeroPNG} className="w-full max-w-[600px] object-contain" />
  </div>

  
  <div className="h-auto md:h-[410px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] w-full mt-10 ">
    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white pt-[60px] text-center px-4">
      Trusted by Millions, Built for You
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-[24px] mt-[40px] px-4">
      <div className="w-full sm:w-[300px] md:w-[342px] text-center">
        <h5 className="text-white">Total Downloads</h5>
        <h2 className="font-extrabold text-[48px] sm:text-[56px] md:text-[64px] text-white">{totalInMillions}M</h2>
        <p className="text-white">21% more than last month</p>
      </div>

      <div className="w-full sm:w-[300px] md:w-[342px] text-center">
        <h5 className="text-white">Total Reviews</h5>
        <h2 className="font-extrabold text-[48px] sm:text-[56px] md:text-[64px] text-white">{totalReviewsInK}K</h2>
        <p className="text-white">46% more than last month</p>
      </div>

      <div className="w-full sm:w-[300px] md:w-[342px] text-center">
        <h5 className="text-white">Active Apps</h5>
        <h2 className="font-extrabold text-[48px] sm:text-[56px] md:text-[64px] text-white">{allApps.length}+</h2>
        <p className="text-white">31 more will Launch</p>
      </div>
    </div>
  </div>

  
  <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[99%] xl:max-w-[80%] mx-auto">
    <HomeApps allApps={allApps}></HomeApps>
  </div>
</div>

    );
};

export default Home;