/* eslint-disable react/prop-types */
import React from 'react';
import TopSection from './Components/TopSection';
import BottomSection from './Components/BottomSection';

const MainSection = ({ nftDetails, nftHistory }) => (
  <>
    <TopSection nftDetails={nftDetails} />
    <BottomSection nftDetails={nftDetails} nftHistory={nftHistory} />
  </>
);
export default MainSection;
