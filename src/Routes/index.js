/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useRoutes } from 'react-router-dom';
import Home from '../Modules/Home';
import Trendland from '../Modules/TrendLand';
import BuyNft from '../Modules/BuyNft';
import ViewNft from '../Modules/ViewNft';
import PageNotFound from '../Modules/PageNotFound';
import Brawhaus from '../Modules/Brawhaus';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/marketplace',
      element: <Home />,
    },
    {
      path: '/curator',
      element: <Trendland />,
    },
    {
      path: '/brawhaus',
      element: <Brawhaus />,
    },
    {
      path: '/wallet',
      element: <BuyNft />,
    },
    {
      path: '/view-nft/:id',
      element: <ViewNft />,
    },
    {
      path: '/',
      element: <Home />,
    },
    { path: '*', element: <PageNotFound /> },
  ]);
}
