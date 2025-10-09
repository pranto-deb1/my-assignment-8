import React from 'react';
import { Link, useOutletContext, useParams } from 'react-router';
import AppDetailErrorPNG from '../assets/App-Error.png';
import StarIcon from '../assets/icon-ratings.png';
import DownloardIcon from '../assets/icon-downloads.png';
import LikeIcon from '../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from 'recharts';

const AppDetail = () => {
    const { allApps, setInstalledApps, installedApps } = useOutletContext();
    const { id } = useParams();

    if (!allApps || allApps.length === 0) {
        return <p className="text-center mt-20 text-xl">Loading Apps...</p>;
    }

    const app = allApps.find(a => parseInt(a.id) === parseInt(id));

    if (!app) {
        return (
            <div className="mt-[80px] text-center">
                <img src={AppDetailErrorPNG} alt="" className="mx-auto" />
                <h1 className="text-[48px] font-semibold mt-[16px]">OPPS!! APP NOT FOUND</h1>
                <p className="text-[20px] text-[#627382] mt-[8px]">The App you are requesting is not found.</p>
                <Link to="/">
                    <button className="mt-[16px] px-[45px] py-[16px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-[4px]">
                        Go Back
                    </button>
                </Link>
            </div>
        );
    }

    
    const chartData = app.ratings.map(r => ({
        name: r.name,
        value: r.count,
    }));

    return (
        <div className="max-w-[90%] mx-auto mt-[80px]">
            <div className="flex gap-[40px] justify-start">
                <img src={app.image} alt={app.title} className='w-[350px] h-[350px] object-cover' />

                <div className="w-[100%]">
                    <h1 className="font-bold text-4xl">{app.title}</h1>
                    <p className="text-[20px] font-semibold mt-[8px] mb-[30px]">
                        Developed by <span className='text-[#a634e8]'>{app.companyName}</span>
                    </p>

                    <div className="w-full border-b border-[#cccccc] border-[1.2px]"></div>

                    <div className="mt-[30px] flex justify-start gap-[24px]">
                        <div className="w-[150px]">
                            <img src={DownloardIcon} alt="" className='w-[40px] h-[40px]' />
                            <p className="mt-[8px] text-[#001931]">Downloads</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.downloads}</p>
                        </div>
                        <div className="w-[150px]">
                            <img src={StarIcon} alt="" className='w-[40px] h-[40px]' />
                            <p className="mt-[8px] text-[#001931]">Average Ratings</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.ratingAvg}</p>
                        </div>
                        <div className="w-[150px]">
                            <img src={LikeIcon} alt="" className='w-[40px] h-[40px]' />
                            <p className="mt-[8px] text-[#001931]">Total Reviews</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.reviews}</p>
                        </div>
                    </div>

                    <button
                        id={app.id}
                        disabled={installedApps.some(a => a.id === app.id)}
                        onClick={() => {
                            setInstalledApps(prev => {
                                if (prev.some(a => a.id === app.id)) return prev;
                                return [...prev, app];
                            });
                            
                            toast(`${app.title} install success`);

                            const lsData = JSON.parse(localStorage.getItem("installedApps")) || [];
                            if (!lsData.some(a => a.id === app.id)) {
                                lsData.push(app);
                                localStorage.setItem("installedApps", JSON.stringify(lsData));
                            }
                        }}
                        className={`w-[239px] h-[48px] font-semibold text-[20px] text-white rounded-[4px] mt-[30px]
                            ${installedApps.some(a => a.id === app.id) ? 'bg-[#00D390] !cursor-not-allowed' : 'bg-[#00D390]'}`}
                    >
                        {installedApps.some(a => a.id === app.id) ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            
            <div className="mt-12 w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#FF8811">
                            <LabelList dataKey="value" position="right" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="w-full border-b border-[#cccccc] border-[1.2px] mt-[40px]"></div>
            <div className="mt-[40px]">
                <p className="font-semibold text-[24px]">Description</p>
                <p className="mt-6 text-[20px] text-[#627382]">{app.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AppDetail;
