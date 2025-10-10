import React, { Suspense, useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { FaSearch } from "react-icons/fa";
import AllAppComponent from '../components/AllAppComponent';
import logo from '../assets/logo.png';

const AllApps = () => {
  const { allApps } = useOutletContext();
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(allApps || []);

  useEffect(() => {
    if (!allApps || allApps.length === 0) return;

    
    setIsSearching(true);

    const timeout = setTimeout(() => {
      if (searchValue === '') {
        setFilteredApps(allApps);
      } else {
        const result = allApps.filter(app =>
          app.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredApps(result);
      }
      setIsSearching(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [searchValue, allApps]);

  if (!allApps || allApps.length === 0) {
    return <p className="text-center mt-20 text-xl">Loading Apps...</p>;
  }

  return (
    <div>
      <h1 className="text-center mt-[80px] font-bold text-[48px]">Our All Applications</h1>
      <p className="text-center mt-[16px] font-[20px] text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="max-w-[90%] mx-auto">
        <div className="flex mt-[46px] flex-wrap justify-between items-center max-w-[95%] md:max-w-[90%] lg:max-w-[99%] xl:max-w-[80%]  mx-auto">
        <h3 className="font-semibold text-[24px]">({filteredApps.length}) Apps Found</h3>

        <div className="relative w-[400px]">
          <input
            type="search"
            id="searchINPT"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full h-[44px] pl-10 pr-4 border border-[#627382] rounded-[4px] outline-0"
            placeholder="Search Apps"
          />
          {searchValue === '' && (
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          )}
        </div>
      </div>
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center h-[calc(100vh-200px)]">
          <p className="text-3xl text-gray-500 font-bold animate-pulse">Searching...</p>
        </div>
      ) : (
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[99%] xl:max-w-[80%] mx-auto">
          <Suspense
          fallback={
            <div className='flex justify-center items-center h-[calc(100vh-60px)]'>
                      <p className="text-6xl text-gray-500 font-bold animate-pulse flex items-center">
                        L  <span><img src={logo} className='w-[50px] h-[50px] mt-[30px] logo-img ml-[10px]' /></span>  ading...
                      </p>
            </div>
          }
        >
          <AllAppComponent searchValue={searchValue} allApps={filteredApps} />
        </Suspense>
        </div>
      )}
    </div>
  );
};

export default AllApps;
