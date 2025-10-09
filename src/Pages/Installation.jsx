import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const { installedApps } = useOutletContext();
  const [sortOrder, setSortOrder] = useState('');

  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === 'Low-to-High') {
      return a.size - b.size;
    } else if (sortOrder === 'High-to-Low') {
      return b.size - a.size;
    }
    return 0;
  });

  return (
    <div className='max-w-[90%] mx-auto'>
      <h1 className="mt-20 text-center font-bold text-[48px]">Your Installed Apps</h1>
      <p className="mt-[16px] text-[20px] text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between mt-[40px] items-center">
        <div className="flex items-center">
          <h5 className="text-[24px] font-semibold ">{sortedApps.length} Apps Found</h5>
        </div>

        <div className="flex items-center">
          <select
            id="sort"
            name="sort"
            onChange={handleSortChange}
            value={sortOrder}
            className='border border-[#D2D2D2] text-[#627382] outline-0 px-[16px] py-[12px] rounded-[4px]'
          >
            <option value="" disabled>Sort By Size</option>
            <option value="Low-to-High">Low to High</option>
            <option value="High-to-Low">High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-[16px] flex flex-col gap-4">
        {sortedApps.map(app => (
          <div key={app.id} className='w-full rounded-[4px] h-[112px] bg-white flex items-center p-[16px] justify-between'>
            <div className="flex items-center">
              <img src={app.image} alt="" className='w-[80px] h-[80px] object-cover rounded-[8px]' />
              <div className="ml-4">
                <p className="font-medium text-[20px]">{app.title}</p>

                <div className="flex justify-start mt-[16px] gap-[15px]">
                  <p className="flex font-medium items-center gap-1 text-[#00D390]"><GoDownload /> {app.downloads}</p>
                  <p className="flex font-medium items-center gap-1 text-[#FF8811]"><FaStar /> {app.ratingAvg}</p>
                  <p className="text-[#627382]">{app.size} MB</p>
                </div>
              </div>
            </div>
            <button className='bg-[#00D390] text-[white] px-[16px] py-[12px] rounded-[4px]'>Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
