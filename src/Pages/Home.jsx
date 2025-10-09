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
            <h1 className="text-[72px] text-center font-extrabold leading-[80px]">We Build<br/> <span className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent'>Productive</span> Apps</h1>

            <p className="mt-[16px] text-[#627382] text-[20px] text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className="flex justify-between justify-self-center gap-[16px] my-[40px]">
                <a href="https://play.google.com/store/games?hl=en" target='blank'>
                    <button className='border shadow-sm rounded-[4px] border-[#D2D2D2] w-[200px] h-[56px] font-semibold text-[20px] flex justify-center gap-[10px] items-center'><IoLogoGooglePlaystore /> Google Play</button>
                </a>

                <a href="https://www.apple.com/app-store/" target='blank'>
                    <button className='border shadow-sm rounded-[4px] border-[#D2D2D2] w-[200px] h-[56px] font-semibold text-[20px] flex justify-center gap-[10px] items-center'><FaAppStoreIos /> App Store</button>
                </a>
            </div>
            <div className="flex justify-self-center">
                <img src={HeroPNG}/>
            </div>

            <div className="h-[410px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] w-[100%]">
                <h2 className="text-[48px] font-bold text-white pt-[80px] text-center">Trusted by Millions, Built for You</h2>

                <div className="flex justify-center justify-self-center gap-[24px] mt-[40px]">
                    <div className="w-[342px]">
                        <h5 className="text-white text-center">Total Downloads</h5>
                        <h2 className="font-extrabold text-[64px] text-center text-white">{totalInMillions}M</h2>
                        <p className="text-white text-center">21% more than last month</p>
                    </div>

                    <div className="w-[342px]">
                        <h5 className="text-white text-center">Total Reviews</h5>
                        <h2 className="font-extrabold text-[64px] text-center text-white">{totalReviewsInK}K</h2>
                        <p className="text-white text-center">46% more than last month</p>
                    </div>

                    <div className="w-[342px]">
                        <h5 className="text-white text-center">Active Apps</h5>
                        <h2 className="font-extrabold text-[64px] text-center text-white">{allApps.length}+</h2>
                        <p className="text-white text-center">31 more will Launch</p>
                    </div>
                </div>
            </div>
            
                <HomeApps allApps={allApps}></HomeApps>
           
        </div>
    );
};

export default Home;