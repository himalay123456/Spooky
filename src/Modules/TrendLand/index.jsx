import React, { useEffect } from 'react';
// import FAQ from './Components/FAQ';
import Header from '../../Components/Header';
import ExclusiveAccess from './Components/ExclusiveAccess';
import ArtistPreview from './Components/ArtistPreview';
import Subscribe from '../Home/Components/Subscribe';
import FAQ from '../Home/Components/FAQ';

const Trendland = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Header />
      <ExclusiveAccess />
      <ArtistPreview />
      <FAQ page="trendland" />
      <Subscribe />
    </>
  );
};
export default Trendland;
