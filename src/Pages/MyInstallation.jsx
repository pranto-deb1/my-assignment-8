import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const MyInstallation = () => {
  const { installedApps, setInstalledApps } = useOutletContext(); 
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('installedApps')) || installedApps;
    setApps(saved);
  }, [installedApps]);

  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  
  const sortedApps = [...apps].sort((a, b) => {
    if (sortOrder === 'Low-to-High') return a.size - b.size;
    if (sortOrder === 'High-to-Low') return b.size - a.size;
    return 0;
  });

 
  const handleUninstall = (id) => {
    const updated = apps.filter(a => a.id !== id);
    setApps(updated);
    setInstalledApps(updated); 
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.error('App Uninstalled!');
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <Toaster position="top-center" />

      
      <h1 className="mt-20 text-center font-bold text-[28px] sm:text-[36px] md:text-[48px]">
        Your Installed Apps
      </h1>
      <p className="mt-[12px] sm:mt-[16px] text-[16px] sm:text-[18px] md:text-[20px] text-[#627382] text-center leading-relaxed">
        Explore All Trending Apps on the Market developed by us
      </p>

      
      <div className="flex flex-col sm:flex-row justify-between mt-[24px] sm:mt-[40px] items-center gap-4 sm:gap-0">
        <h5 className="text-[20px] sm:text-[24px] font-semibold">{sortedApps.length} Apps Found</h5>

        <select
          id="sort"
          onChange={handleSortChange}
          value={sortOrder}
          className="border border-[#D2D2D2] text-[#627382] outline-none px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] rounded-[4px] w-full sm:w-auto"
        >
          <option value="" disabled>Sort By Size</option>
          <option value="Low-to-High">Low to High</option>
          <option value="High-to-Low">High to Low</option>
        </select>
      </div>

      
      <div className="mt-[16px] flex flex-col gap-4">
        {sortedApps.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-10">No apps installed yet.</p>
        )}

        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="w-full rounded-[4px] h-auto sm:h-[112px] bg-white flex flex-col sm:flex-row items-center sm:items-center p-[12px] sm:p-[16px] justify-between gap-4 sm:gap-0"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">
              <img
                src={app.image}
                alt=""
                className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] object-cover rounded-[8px]"
              />
              <div className="ml-0 sm:ml-4 flex flex-col gap-2 text-center sm:text-left w-full sm:w-auto">
                <p className="font-medium text-[18px] sm:text-[20px]">{app.title}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-[15px] mt-[8px] sm:mt-[16px]">
                  <p className="flex font-medium items-center gap-1 text-[#00D390]"><GoDownload /> {app.downloads}</p>
                  <p className="flex font-medium items-center gap-1 text-[#FF8811]"><FaStar /> {app.ratingAvg}</p>
                  <p className="text-[#627382]">{app.size} MB</p>
                </div>
              </div>
            </div>
        
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-[#00D390] text-white px-[16px] py-[10px] sm:py-[12px] rounded-[4px] w-full sm:w-auto"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default MyInstallation;
