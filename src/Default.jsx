import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router';


const Default = () => {
    
    const [allApps, setAllApps] = useState([])

    useEffect(() => {
        fetch('/Apps.json')
        .then(res=>res.json())
        .then(data=>{
            setAllApps(data)
        })
    },[])

    // console.log(allApps)

    return (
        <div className='max-w-[1500px] mx-auto bg-[#d5d5d568]'>
            <Nav></Nav>
            <Outlet context={{allApps}}></Outlet>
            
        </div>
    );
};

export default Default;
