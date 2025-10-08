import React from 'react';
import { createBrowserRouter } from "react-router";
import Default from '../Default';
import Error1 from '../errorpages/Error1';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    errorElement: <Error1></Error1>,
    children:[
        {index:true, Component: Home}
    ],
  },
]);
