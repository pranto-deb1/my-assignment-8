import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router';


const Default = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;