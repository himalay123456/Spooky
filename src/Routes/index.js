/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../Layouts/Admin/DashboardLayout';
import Administrator from '../Modules/Admin/Administrator';
import AdminDetails from '../Modules/Admin/Administrator/Components/AdminDetails/AdminDetails';
import ViewRole from '../Modules/Admin/Administrator/Components/ViewRole/ViewRole';
import Dashboard from '../Modules/Admin/Dashboard';
import Login from '../Modules/Auth/Login';
import OTP from '../Modules/Auth/Login/OTP';
import Category from '../Modules/Admin/Category';
import Collection from '../Modules/Admin/Collection';
import Collectible from '../Modules/Admin/Collectible';
import CollectionRequest from '../Modules/Admin/Collection/Components/ViewCollectionRequest';
import UnderDevelopment from '../Modules/Admin/UnderDevelopment';
import ViewCollectible from '../Modules/Admin/Collectible/Components/ViewMarketplace/ViewMarketplace';
import ViewCollection from '../Modules/Admin/Collection/Components/ViewCollection/ViewCollection';
import ResetPassword from '../Modules/Auth/ResetPassword';
import CreateNft from '../Modules/Admin/CreateNft';
import Steps from '../Modules/Admin/NftSteps';
import Step3 from '../Modules/Admin/Collectible/Components/SellCollectible';
import Step2 from '../Modules/Admin/Collectible/Components/ViewCollectible';
import Analytics from '../Modules/Admin/Analytics';
// ----------------------------------------------------------------------

export default function Router({ isAdmin, isSuperAdmin }) {
  console.log('IS ADMIN', isAdmin, isSuperAdmin);
  return useRoutes([
    {
      path: '/admin',
      element: isAdmin || isSuperAdmin ? <DashboardLayout /> : <Navigate to="/login" replace />,
      children: [
        // { path: '/', element: <Navigate to="/admin/dashboard" replace /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'administrator', element: <Administrator /> },
        { path: 'administrator/details/:id', element: <AdminDetails /> },
        { path: 'administrator/viewRole', element: <ViewRole /> },
        { path: 'category', element: <Category /> },
        { path: 'collection', element: <Collection /> },
        { path: 'collection/viewCollection', element: <ViewCollection /> },
        { path: 'collection/viewRequest', element: <CollectionRequest /> },
        { path: 'collectible', element: <Collectible /> },
        { path: 'collectible/viewCollectible', element: <ViewCollectible /> },
        { path: 'createNft', element: isAdmin || isSuperAdmin ? <CreateNft /> : <Navigate to="/admin" replace /> },
        { path: 'createNft/steps', element: isAdmin || isSuperAdmin ? <Steps /> : <Navigate to="/admin" replace /> },
        { path: 'createNft/list', element: isAdmin || isSuperAdmin ? <Step3 /> : <Navigate to="/admin" replace /> },
        { path: 'createNft/mint', element: isAdmin || isSuperAdmin ? <Step2 /> : <Navigate to="/admin" replace /> },
        { path: 'analytics-and-reports', element: <Analytics /> },
        { path: '*', element: <UnderDevelopment /> },
      ],
    },
    {
      path: '/login',
      element: !isAdmin && !isSuperAdmin ? <Login /> : <Navigate to="/admin" replace />,
    },
    {
      path: '/otp',
      element: !isAdmin && !isSuperAdmin ? <OTP /> : <Navigate to="/admin" replace />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    { path: '/', element: <Navigate to="/admin/dashboard" replace /> },
    { path: '/admin', element: <Navigate to="/admin/dashboard" replace /> },
  ]);
}
