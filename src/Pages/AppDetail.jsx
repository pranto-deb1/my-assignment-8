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
<div className="max-w-[90%] mx-auto mt-[60px] sm:mt-[80px]">
  
  <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] justify-start items-center md:items-start">
    <img
      src={app.image}
      alt={app.title}
      className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-lg"
    />

    <div className="w-full">
      <h1 className="font-bold text-[28px] sm:text-[36px] md:text-4xl text-center md:text-left">
        {app.title}
      </h1>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mt-[8px] mb-[20px] text-center md:text-left">
        Developed by <span className="text-[#a634e8]">{app.companyName}</span>
      </p>

      <div className="w-full border-b border-[#cccccc]"></div>

      
      <div className="mt-[24px] flex flex-wrap justify-center md:justify-start gap-[24px]">
        <div className="w-[120px] sm:w-[150px] text-center md:text-left">
          <img src={DownloardIcon} alt="" className="w-[36px] h-[36px] mx-auto md:mx-0" />
          <p className="mt-[8px] text-[#001931]">Downloads</p>
          <p className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] mt-[8px]">
            {app.downloads}
          </p>
        </div>
        <div className="w-[120px] sm:w-[150px] text-center md:text-left">
          <img src={StarIcon} alt="" className="w-[36px] h-[36px] mx-auto md:mx-0" />
          <p className="mt-[8px] text-[#001931]">Average Ratings</p>
          <p className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] mt-[8px]">
            {app.ratingAvg}
          </p>
        </div>
        <div className="w-[120px] sm:w-[150px] text-center md:text-left">
          <img src={LikeIcon} alt="" className="w-[36px] h-[36px] mx-auto md:mx-0" />
          <p className="mt-[8px] text-[#001931]">Total Reviews</p>
          <p className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] mt-[8px]">
            {app.reviews}
          </p>
        </div>
      </div>

        
    <button
      id={app.id}
      disabled={installedApps.some((a) => a.id === app.id)}
      onClick={() => {
        setInstalledApps((prev) => {
          if (prev.some((a) => a.id === app.id)) return prev;
          return [...prev, app];
        });

        toast(`${app.title} install success`);

        const lsData = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!lsData.some((a) => a.id === app.id)) {
          lsData.push(app);
          localStorage.setItem("installedApps", JSON.stringify(lsData));
        }
      }}
      className={`flex justify-self-center lg:block lg:justify-self-start items-center justify-center w-[200px] sm:w-[239px] h-[44px] sm:h-[48px] font-semibold text-[16px] sm:text-[20px] text-white rounded-[4px] mt-[30px]
        mx-auto md:mx-0
        ${installedApps.some((a) => a.id === app.id)
          ? "bg-[#00D390] !cursor-not-allowed"
          : "bg-[#00D390] hover:bg-[#00b87b] transition-all duration-300"}
      `}
    >
      {installedApps.some((a) => a.id === app.id)
        ? "Installed"
        : `Install Now (${app.size} MB)`}
    </button>

    </div>
  </div>

  
  <div className="mt-12 w-full h-[250px] sm:h-[350px] md:h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={chartData}
        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
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

  <div className="w-full border-b border-[#cccccc] mt-[40px]"></div>

  
  <div className="mt-[30px] sm:mt-[40px] text-center md:text-left">
    <p className="font-semibold text-[20px] sm:text-[22px] md:text-[24px]">Description</p>
    <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] text-[#627382] leading-relaxed">
      {app.description}
    </p>
  </div>

  <ToastContainer />
</div>

    );
};

export default AppDetail;
