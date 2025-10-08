import React, { useEffect, useState } from 'react';
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
const HomeApps = ({allApps}) => {
    
    const appData = allApps;
    

    const [newAppData, setNewAppData] = useState([]);

    useEffect(() => {
        setNewAppData(appData.slice(0, 8)); 
    }, [appData]);

    console.log(newAppData);

    return (
        <div className='mt-[80px]'>
            <h2 className="text-[48px] font-bold text-center">Trending Apps</h2>
            <p className="text-[20px] text-[#627382] text-center mt-[16px]">Explore All Trending Apps on the Market developed by us</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] max-w-[90%] mx-auto mt-[40px]">
                {
                    newAppData.map(app => <Link to={`/AppDetail/${app.id}`}><div key={app.id} className='w-[100%] card rounded-[4px] p-[16px] h-[435px] bg-white'>
                        <img src={app.image} className='w-[100%] h-[75%] object-cover bg-[#D9D9D9] rounded-[8px] shadow-sm'/>
                        <h2 className="text-[20px] font-medium mt-[16px]">{app.title}</h2>
                        <div className="flex justify-between mt-4">
                            <p className="flex text-[#00D390] px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center justify-center bg-[#F1F5E8]"><MdDownload /> {app.downloads}</p>

                            <p className="flex text-[#FF8811] px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center justify-center bg-[#FFF0E1]"><FaStar /> {app.reviews}</p>
                        </div>
                    </div></Link>)
                }
            </div>

            <a href="/all"><button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] w-[145px] h-[48px] rounded-[4px] text-white font-semibold flex justify-self-center items-center justify-center mt-[40px]' >Show All</button></a>
        </div>
    );
};

export default HomeApps;