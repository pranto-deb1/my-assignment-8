import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { FaSearch } from "react-icons/fa";
import AllAppComponent from '../components/AllAppComponent';

const AllApps = () => {
    const { allApps } = useOutletContext();
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <h1 className="text-center mt-[80px] font-bold text-[48px]">Our All Applications</h1>
            <p className="text-center mt-[16px] font-[20px] text-[#627382]">
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className="flex mt-[46px] justify-between items-center max-w-[90%] mx-auto">
                <h3 className="font-semibold text-[24px]">({allApps.length}) Apps Found</h3>

                
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

            <AllAppComponent searchValue={searchValue} allApps={allApps}></AllAppComponent>
        </div>
    );
};

export default AllApps;
