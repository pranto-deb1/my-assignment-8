import React, { Suspense, useEffect, useState } from 'react';
import Nav from './components/Nav';
import { Outlet, useLocation } from 'react-router';

const getInitialInstalledApps = () => {
  const storedApps = localStorage.getItem("installedApps");
  return storedApps ? JSON.parse(storedApps) : [];
};

const Default = () => {
  const location = useLocation(); 

  const [allApps, setAllApps] = useState(null);
  const [installedApps, setInstalledApps] = useState(getInitialInstalledApps);
  const [isPageLoading, setIsPageLoading] = useState(true);

  
  useEffect(() => {
    fetch('/Apps.json')
      .then(res => res.json())
      .then(data => {
        setAllApps(data);
        setIsPageLoading(false);
      });
  }, []);

  
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  
  useEffect(() => {
    
    setIsPageLoading(true);
    const timeout = setTimeout(() => setIsPageLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className='max-w-[1500px] mx-auto bg-[#d5d5d568] min-h-screen'>
      <Nav />

      {isPageLoading ? (
        
        <div className='flex justify-center items-center h-[calc(100vh-60px)]'>
          <p className="text-6xl text-gray-500 font-bold animate-pulse">
            Loading...
          </p>
        </div>
      ) : (
        
        <Suspense
          fallback={
            <div className='flex justify-center items-center h-[calc(100vh-60px)]'>
              <p className="text-6xl text-gray-500 font-bold animate-pulse">
                Loading...
              </p>
            </div>
          }
        >
          <Outlet key={location.key} context={{allApps: allApps, setInstalledApps: setInstalledApps, installedApps: installedApps,}}/>
        </Suspense>
      )}
    </div>
  );
};

export default Default;
