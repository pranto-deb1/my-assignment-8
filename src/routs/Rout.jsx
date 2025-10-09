import React from 'react';
import { createBrowserRouter } from "react-router";
import Default from '../Default';
import Error1 from '../errorpages/Error1';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import AppDetail from '../Pages/AppDetail';
import Detail from '../Pages/Detail';
import MyInstallation from '../Pages/MyInstallation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    errorElement: <Error1></Error1>,
    children:[
        {index:true, Component: Home},
        {path:'/all', Component: AllApps},
        {path:'/detail', Component: Detail},
        {path:'My-Installation', Component: MyInstallation},
        {path:'/AppDetail/:id', Component: AppDetail}
    ],
  },
]);
