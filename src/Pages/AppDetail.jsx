import React, { useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router';
import AppDetailErrorPNG from '../assets/App-Error.png'
import StarIcon from '../assets/icon-ratings.png'
import DownloardIcon from '../assets/icon-downloads.png'
import LikeIcon from '../assets/icon-review.png'
import ReactECharts from 'echarts-for-react';

const AppDetail = () => {

    const { allApps, setInstalledApps } = useOutletContext();
    const { id } = useParams();
    const [btnStateChange, setbtnStateChange] = useState(false)


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
                <Link to="/"><button className="mt-[16px] px-[45px] py-[16px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-[4px]">Go Back</button></Link>
            </div>
        );
    }



const data = app.ratings.map(r => r.count);
const labels = app.ratings.map(r => r.name);

const option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: labels,
    inverse: true
  },
  series: [
    {
      type: 'bar',
      data: data, 
      label: {
        show: true,
        position: 'right'
      },
      itemStyle: {
        color: '#FF8811' 
      }
    }
  ]
};



   



   
    return (
        <div className="max-w-[90%] mx-auto mt-[80px]">
            <div className="flex gap-[40px] justify-start">
                <img src={app.image} alt={app.title} className='w-[350px] h-[350px] object-cover'/>

                <div className="w-[100%]">
                    <h1 className="font-bold text-4xl">{app.title}</h1>
                    <p className="text-[20px] font-semibold mt-[8px] mb-[30px]">Developed by <span className='text-[#a634e8]'>{app.companyName}</span></p>

                    <div className="w-full border-b border-[#cccccc] border-[1.2px]"></div>
                    
                    <div className="mt-[30px] flex justify-start gap-[24px]">
                        <div className="w-[150px]">
                            <img src={DownloardIcon} alt="" className='w-[40px] h-[40px]'/>
                            <p className="mt-[8px] text-[#001931]">Downloads</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.downloads}</p>
                        </div>
                        <div className="w-[150px]">
                            <img src={StarIcon} alt="" className='w-[40px] h-[40px]'/>
                            <p className="mt-[8px] text-[#001931]">Average Ratings</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.ratingAvg}</p>
                        </div>
                        <div className="w-[150px]">
                            <img src={LikeIcon} alt="" className='w-[40px] h-[40px]'/>
                            <p className="mt-[8px] text-[#001931]">Total Reviews</p>
                            <p className="font-extrabold text-[40px] mt-[8px]">{app.reviews}</p>
                        </div>
                    </div>

                    <button onClick={() => {
                          setInstalledApps(prev => {
                            if (prev.some(a => a.id === app.id)) return prev;
                            return [...prev, app];
                          })
                          setbtnStateChange(true);
                        }} className='w-[239px] h-[48px] font-semibold text-[20px] text-white bg-[#00D390] rounded-[4px] mt-[30px]'>{btnStateChange ? "Installed" : `Install Now (${app.size} MB)`}</button>
                </div>
            </div>

            <ReactECharts option={option} />

            <div className="w-full border-b border-[#cccccc] border-[1.2px] mt-[40px]"></div>
            <div className="mt-[40px]">
              <p className="font-semibold text-[24px]">Description</p>
              <p className="mt-6 text-[20px] text-[#627382]">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetail;
