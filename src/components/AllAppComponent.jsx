import React from 'react';
import { MdDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AllAppComponent = ({ searchValue, allApps }) => {
    let appsToShow;
    if (searchValue === '') {
        appsToShow = allApps;
    } else {
        appsToShow = allApps.filter(app => 
            app.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    return (
        <div className='mt-[16px] max-w-[90%] mx-auto'>
            {appsToShow.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]'>
                    {appsToShow.map((app) => (
                        <Link key={app.id} to={`/AppDetail/${app.id}`}><div className='w-full card rounded-[4px] p-[16px] bg-white shadow-sm'>
                            <img 
                                src={app.image} 
                                alt={app.title} 
                                className='w-full h-[200px] md:h-[250px] object-cover bg-[#D9D9D9] rounded-[8px]'
                            />
                            <h2 className="text-[20px] font-medium mt-[16px]">{app.title}</h2>
                            <div className="flex justify-between mt-4">
                                <p className="flex text-[#00D390] px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center justify-center bg-[#F1F5E8]">
                                    <MdDownload /> {app.downloads}
                                </p>

                                <p className="flex text-[#FF8811] px-[10px] py-[6px] gap-[8px] rounded-[4px] items-center justify-center bg-[#FFF0E1]">
                                    <FaStar /> {app.reviews}
                                </p>
                            </div>
                        </div></Link>
                    ))}
                </div>
            ) : (
                <h2 className="text-center text-[24px] font-semibold mt-[50px]">App Not Found</h2>
            )}
        </div>
    );
};

export default AllAppComponent;
