import { lazy } from 'react';
import Default from '../Default';
import Error1 from '../errorpages/Error1';
import { createBrowserRouter } from 'react-router';

const Home = lazy(() => import('../Pages/Home'));
const AllApps = lazy(() => import('../Pages/AllApps'));
const AppDetail = lazy(() => import('../Pages/AppDetail'));
const MyInstallation = lazy(() => import('../Pages/MyInstallation'));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    errorElement: <Error1 />,
    children: [
      { index: true, element: <Home></Home> },
      { path: '/all', element: <AllApps></AllApps> },
      { path: 'My-Installation', element: <MyInstallation></MyInstallation> },
      { path: '/AppDetail/:id', element: <AppDetail></AppDetail> }
    ],
  },
]);
