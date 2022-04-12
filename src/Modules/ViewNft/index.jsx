import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import Header from '../../Components/Header';
import TopSection from './Components/TopSection';
import MainSection from './Components/MainSection';
import Loader from '../../Components/Loader';
import Footer from '../../Components/Footer';
import { getNFTDetails, getNFTHistory } from '../../Store/Actions';

const ViewNft = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { nftDetails, nftHistory } = useSelector((reducerState) => reducerState.NFT);
  const { account } = useWeb3React();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getNFTDetails({ id, account }));
    dispatch(getNFTHistory(id));
    console.log('nftDetails', nftDetails, id);

    return () => {
      dispatch(getNFTDetails({ id: null }));
    };
  }, [id]);
  return (
    <>
      <Header />
      { nftDetails !== '' ? (
        <>
          <TopSection nftDetails={nftDetails} />
          <MainSection nftDetails={nftDetails} nftHistory={nftHistory} />
        </>
      ) : (
        <Box style={{ height: '100vh' }}>
          <Loader />
        </Box>
      )}
      <Footer />
    </>
  );
};
export default ViewNft;
