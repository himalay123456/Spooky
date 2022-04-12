/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import {
  Container, Grid, Typography, Box, Button, CircularProgress,
} from '@material-ui/core';
import React, { memo, useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Icon1 } from '../../../../Assets/Svg/viewNft1.svg';
import { ReactComponent as Icon2 } from '../../../../Assets/Svg/viewNft2.svg';
import { useStyles } from './styles';
import {
  useNFTTokenContract,
  UseUserAccount,
  useMarketplaceContract,
} from '../../../../hooks';
import { createNFTHistory, editNFTCollection, openWalletPopUp } from '../../../../Store/Actions';
import SuccessModal from '../../../../Components/Modal/SuccessModal';
import '../../styles.scss';
import BuyPopup from '../../../Home/Components/BuyPopup1';

const TopSection = ({ nftDetails }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [successModal, setSuccessModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disableBuy, setDisableBuy] = useState(false);
  const [openBuyPopup, setBuyPopup] = useState(false);
  const [USDPrice, setUSDPrice] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const {
    title, createdAt, numberOfCopies, isTicket, initialPrice, artistName, tokenId, multipleOwners, royalties, currentOwner, _id, uploadedFile,
  } = nftDetails;
  console.log(nftDetails);
  const { account } = UseUserAccount();
  const nftContracts = useNFTTokenContract();
  const marketPlacecontract = useMarketplaceContract();

  useEffect(() => {
    fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
    )
      .then((res) => res.json())
      .then((res) => {
        setUSDPrice(parseFloat(res.USD * initialPrice).toFixed(4));
        console.log('🚀 ~ file: index.jsx ~ line 146 ~ .then ~ json', res.USD, initialPrice, parseFloat(res.USD * initialPrice));
      });
  }, [initialPrice]);

  const RedirectToWalletPage = () => {
    navigate('/wallet', {
      state: {
        imageUrl: uploadedFile,
        title,
        numberOfCopies,
        artistName,
      },
    });
  };
  const BuyNftConfirmation = () => {
    setErrorMessage('');
    if (!account) {
      dispatch(openWalletPopUp(true));
      // toast.error('Please connect your wallet to buy an NFT!', {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   autoClose: 3000,
      // });
      return;
    }
    setBuyPopup(true);
  };
  const BuyNft = (numberOfCopy) => {
    setLoader(true);
    marketPlacecontract.methods
      .buyToken(tokenId, account, multipleOwners.length, royalties.length)
      .send({ from: account, value: (initialPrice * 10 ** 18).toString() })
      .then((res) => {
        console.log('🚀 ~ file: index.jsx ~ line 73 ~ .then ~ res', res);
        setLoader(false);
        setBuyPopup(false);
        setSuccessModal(true);
        setDisableBuy(true);
        dispatch(createNFTHistory({
          price: initialPrice,
          currency: 'ETH',
          itemSellType: 'fixed',
          event: 'buy',
          seller: currentOwner,
          buyer: account,
          paymentMethod: 'wallet',
          item: _id,
        }));
        dispatch(editNFTCollection({
          ...nftDetails,
          id: nftDetails._id,
          currentOwner: account,
        }));
      })
      .catch((err) => {
        console.log('🚀 ~ file: index.jsx ~ line 93 ~ .then ~ err', err);
        toast.error('Something went wrong !!!', {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 5000,
        });
        setLoader(false);
        setBuyPopup(false);
      });
  };
  const formattedDate = moment(createdAt).format('ll');
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginTop: '2vh' }} className="ViewNftTopSection">
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Typography align="center" variant="h3" className={classes.heading}>
            {title}
          </Typography>
          <Typography align="center" variant="h3" className={classes.header1}>
            Listed &nbsp;
            {formattedDate}
          </Typography>
          { isTicket ? (
            <>
              <Typography display="inline" className={classes.header2a}>
                Number Of Editons :
              </Typography>
              <Typography display="inline" className={classes.header3}>
                {numberOfCopies}
              </Typography>
            </>
          ) : (
            <>
              <Typography display="inline" className={classes.header2}>
                Edition
              </Typography>
              <Typography display="inline" className={classes.header3}>
                1
              </Typography>
              <Typography display="inline" className={classes.header2}>
                of
              </Typography>
              <Typography display="inline" className={classes.header3}>
                {numberOfCopies}
              </Typography>

            </>
          )}
          <Box className={classes.topBox}>
            <Typography align="center" variant="h3" className={classes.header4}>
              Reserved Price
            </Typography>
            <Typography align="center" variant="h3" className={classes.header5}>
              {initialPrice}
              ETH
            </Typography>
            <Typography align="center" variant="h3" className={classes.header6}>
              {`$${USDPrice} USD`}
            </Typography>
            <Box className={classes.displayFlex}>
              <Button
                variant="contained"
                size="large"
                type="submit"
                className={classes.submitBtn1}
                disabled
              >
                Make Offer
                Coming Soon
              </Button>
              <Button
                onClick={() => BuyNftConfirmation()}
                variant="contained"
                size="large"
                type="submit"
                disabled={loader || disableBuy}
                className={classes.submitBtn2}
              >
                { loader && <CircularProgress size={20} style={{ color: 'black' }} />}
                { !loader && account && 'Buy Now' }
                {!account && !loader && 'Connect Wallet'}
              </Button>
            </Box>
            <p style={{ color: 'red', marginTop: '-1px' }}>
              {errorMessage}
              {' '}
            </p>
          </Box>
          <Box className={classes.displayFlex1}>
            <Box className={classes.displayFlex2}>
              <Typography
                align="center"
                variant="h3"
                className={classes.header7}
              >
                Artist
              </Typography>
              <Button variant="contained" size="large" type="submit" className={`${classes.submitBtn3} TopButton`}>
                <Icon1 />
                <Typography className={classes.header8}>
                  @
                  {artistName}
                </Typography>
              </Button>
            </Box>
            <Box className={classes.displayFlex2}>
              <Typography
                align="center"
                variant="h3"
                className={classes.header7}
              >
                Owner
              </Typography>
              <Button variant="contained" size="large" type="submit" className={`${classes.submitBtn3} TopButton`}>
                <Icon2 />
                <Typography className={classes.header8}>
                  @LucaZZZ
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} />
      </Grid>
      <SuccessModal
        open={successModal}
        handleClose={() => {
          setSuccessModal(false);
          RedirectToWalletPage();
        }}
        heading="Buy NFT"
        subtitle="NFT is successfully bought"
      />
      <BuyPopup
        cardValues={{
          membership: title, eth: initialPrice, price: USDPrice, numberOfCopies,
        }}
        open={openBuyPopup}
        imageURL={uploadedFile}
        onClose={() => {
          if (loader) return;
          setBuyPopup(false);
        }}
        onBuy={BuyNft}
        loader={loader}
      />
    </Container>
  );
};

export default TopSection;
