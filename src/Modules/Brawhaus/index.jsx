import React from 'react';
// import FAQ from './Components/FAQ';
import Header from '../../Components/Header';
import ExclusiveAccess from './Components/ExclusiveAccess';
import ArtistPreview from './Components/ArtistPreview';
import Subscribe from '../Home/Components/Subscribe';
import FAQ from '../Home/Components/FAQ';

const Trendland = () => (
  <>
    <Header />
    <ExclusiveAccess />
    <ArtistPreview />
    <FAQ page="trendland" />
    <Subscribe />
  </>
);
export default Trendland;
