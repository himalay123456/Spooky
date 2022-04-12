/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../Layouts/Admin/DashboardLayout';
import Dashboard from '../Modules/Admin/Dashboard';
import LandingPage from '../Modules/Landing';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// //
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import User from './pages/User';
// import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <Dashboard /> },
        //     { path: 'user', element: <User /> },
        //     { path: 'products', element: <Products /> },
        //     { path: 'blog', element: <Blog /> }
      ],
    },
    {
      path: '/',
      element: <LandingPage />,
      children: [
        // { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        // { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
