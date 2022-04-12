/* eslint-disable react/jsx-fragments */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  Button,
  CircularProgress,
  Box,
  InputLabel,
  Container, Grid, MenuItem, TextField, Typography, Select, styled,
} from '@material-ui/core';
import { create } from 'ipfs-http-client';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ensureIpfsUriPrefix from '../../../../../utils/ensureIpfsUriPrefix';
import { useStyles as useStyles1 } from '../../../NftSteps/components/Step2/styles';
import { useStyles as useStyles2 } from '../../../NftSteps/components/Minting/styles';
// import { getInTouchRequest } from '../../../../Store/Actions';
import '../../../NftSteps/components/customcss.scss';
import { ReactComponent as ArrowDown } from '../../../../../Assets/Svg/createDropdown.svg';
import { ReactComponent as EthLogo } from '../../../../../Assets/Svg/ethCreate.svg';
import { ReactComponent as Icon2 } from '../../../../../Assets/Svg/step2-b.svg';
import ConfirmationModal from '../../../NftSteps/components/MintPopup';
import useMarketplaceContract from '../../../../../hooks/useMarketplaceContract';
import UseUserAccount from '../../../../../hooks/UseUserAccount';
import useNFTTokenContract from '../../../../../hooks/useNFTTokenContract';
import { ReactComponent as Upload } from '../../../../../Assets/Svg/upload.svg';
import {
  createNFTHistory, editNFTCollection, getCollectionList, sellNFTCollection,
} from '../../../../../Store/Actions';
import SuccessModal from '../../../../../Components/Modal/SuccessModal';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#595959',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#595959',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#595959',
    },
  },
  '&::placeholder': {
    textOverflow: 'ellipsis !important',
    color: 'red',
  },
});

// eslint-disable-next-line react/prop-types
const Step3 = () => {
  const classes = useStyles1();
  const classes2 = useStyles2();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [isMinting, setMinting] = useState(false);
  const [isMinted, setMinted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [USDprice, setUSDPrice] = useState(0);
  const [formData, setFormData] = useState(null);
  const { account } = UseUserAccount();
  const nftContract = useNFTTokenContract();
  const marketPlacecontract = useMarketplaceContract();
  console.log(marketPlacecontract);
  const navigate = useNavigate();
  const { nftDetails, collectionList } = useSelector((reducer) => reducer.NFT);

  useEffect(() => {
    dispatch(getCollectionList());
    console.log('nftDetails', nftDetails);
  }, []);

  const handleClose = () => {
    setOpenModal(false);
  };

  const validationSchema = yup.object({
    initialPrice: yup
      .number('Enter Reserve Price')
      .required('Reserve Price is required'),
    // airDropRef: yup
    //   .string('Select Air Drop')
    //   .required('Air Drop is required'),
  });

  const goBack = () => {
    navigate('/admin/createNft');
  };

  const sellToken = (id, values) => {
    console.log('🚀 ~ file: index.jsx ~ line 90 ~ sellToken ~ id', id, values.initialPrice);
    setLoader(true);
    nftContract.methods
      .setApprovalForAll(
        process.env.REACT_APP_RINKBY_MARKETPLACE_CONTRACT_ADDRESS,
        true,
      )
      .send({
        from: account,
        type: '0x2',
        // maxFeePerGas: "200",
        // maxPriorityFeePerGas: "4000"
      })
      .then((response) => {
        marketPlacecontract.methods
          .putTokenOnSale(
            id,
            (values.initialPrice * 10 ** 18).toString(),
          )
          .send({ from: account })
          .then((res) => {
            console.log('🚀 ~ file: index.jsx ~ line 149 ~ .then ~ res', res);
            dispatch(sellNFTCollection({
              itemName: nftDetails._id,
              currentOwner: account,
              sellType: 'fixed',
              price: values.initialPrice,
              currency: 'ETH',
              isPrivate: false,
              privateBuyer: null,
              quantity: nftDetails.numberOfCopies,
              sellQuantity: nftDetails.numberOfCopies,
              auctionStartDate: '',
              auctionEndDate: '',
              offerInfo: [],
              minimumBid: '',
              minimumBidCurrency: 'ETH',
              reservePrice: values.initialPrice,
              reservePriceCurrency: 'ETH',
              bidInfo: [],
            }));
            dispatch(editNFTCollection({
              values: {
                ...nftDetails,
                initialPrice: values.initialPrice,
                airDropRef: values.airDropRef,
                status: 'listed',
                id: nftDetails._id,
              },
            }));
            dispatch(createNFTHistory({
              price: values.initialPrice,
              currency: 'ETH',
              itemSellType: 'fixed',
              event: 'list',
              seller: 'NullAddress',
              buyer: account,
              paymentMethod: 'wallet',
              item: nftDetails._id,
            }));
            setLoader(false);
            setOpenSuccessModal(true);
          })
          .catch((err) => {
            console.log(err.message);
            let message = 'Something went Wrong!';
            if (err.message === 'MetaMask Tx Signature: User denied transaction signature.') message = 'The transaction approval has been rejected';
            toast.error(message, {
              position: toast.POSITION.BOTTOM_RIGHT,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              autoClose: 3000,
            });
            setLoader(false);
          });
      }).catch((err) => {
        console.log(err.message);
        let message = 'Something went Wrong!';
        if (err.message === 'MetaMask Tx Signature: User denied transaction signature.') message = 'The transaction approval has been rejected';
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
        setLoader(false);
      });
  };

  const handleSuccess = () => {
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      initialPrice: '',
      airDropRef: '',
    },
    enableReinitialize: true,
    validationSchema: !nftDetails.isAirDrop ? validationSchema : false,
    onSubmit: (values) => {
      console.log('🚀 ~ file: index.jsx ~ line 181 ~ Step3 ~ values', values, nftDetails);
      if (account) {
        sellToken(nftDetails.tokenId, values);
      } else {
        toast.error('Please connect wallet to mint NFT', {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
      }
    },
  });

  useEffect(() => {
    fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
    )
      .then((res) => res.json())
      .then((res) => {
        setUSDPrice(parseFloat(res.USD * formik.values.initialPrice));
        console.log('🚀  file: index.jsx  line 146  .then  json', res.USD, formik.values.initialPrice, parseFloat(res.USD * formik.values.initialPrice));
      });
  }, [formik.values.initialPrice]);

  const handleCloseModal = () => {
    goBack();
  };

  const onSuccessButton = () => {
    window.location.href = 'http://18.189.191.227';
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        formik.handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      {console.log('NFT DETAILS', nftDetails)}
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.leftGrid} />
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography align="center" variant="h3" className={classes.title}> List </Typography>
              </Grid>
            </Grid>
            <Grid item xl={8} lg={10} md={10} sm={10} xs={10} className={`${classes.boxContent} ${classes.topSpace} StepsContainer`} style={{ marginTop: '30px' }}>
              <form
                noValidate
                autoComplete="off"
                id="adminForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                {!nftDetails.isAirDrop && (
                <React.Fragment>
                  <Typography variant="h3" className={classes.header1c}> Set a Reserve Price* </Typography>
                  <Box style={{ position: 'relative' }}>
                    <CustomTextField
                      id="initialPrice"
                      name="initialPrice"
                      placeholder="Enter the Initial Price"
                      variant="outlined"
                      color="#595959"
                      className="inputRounded"
                      InputProps={{ classes: { input: USDprice !== 0 ? classes.input5 : classes.input4, notchedOutline: classes.notchedOutline } }}
                      value={formik.values.initialPrice}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.initialPrice && Boolean(formik.errors.initialPrice)}
                      helperText={formik.touched.initialPrice && formik.errors.initialPrice}
                    />
                    { USDprice !== 0 && (
                      <Box className={classes.usd}>
                        <Typography className={classes.usdHeader}>
                          ($
                          {' '}
                          {USDprice}
                          )
                        </Typography>
                      </Box>
                    )}
                    <Box className={classes.ethLogo}>
                      <EthLogo />
                    </Box>
                  </Box>
                </React.Fragment>
                ) }
                { nftDetails.isAirDrop && (
                  <Box style={{ position: 'relative' }}>
                    { formik.values.airDropRef === '' && (
                    <InputLabel className={classes.labelTag}>Select Air Drop</InputLabel>
                    )}
                    <Select
                      id="airDropRef"
                      name="airDropRef"
                      variant="outlined"
                      MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                      value={formik.values.airDropRef}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      inputProps={{ classes: { icon: classes.icon1 } }}
                      IconComponent={ArrowDown}
                      className={classes.input1}
                      error={formik.touched.airDropRef && Boolean(formik.errors.airDropRef)}
                      helperText={formik.touched.airDropRef && formik.errors.airDropRef}
                    >
                      { collectionList.map((collection) => (
                        <MenuItem value={collection._id} selected>
                          { collection.name }
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                )}
                <Typography variant="h3" className={classes.header1d}> Fees </Typography>
                <Typography variant="h3" className={classes.header1c2}> A 15% service fee will be charged based on the final sale pride or the artwork.</Typography>
                <Typography variant="h3" className={classes.header1c2} style={{ fontWeight: 'bold' }} display="inline"> Note:</Typography>
                <Typography variant="h3" className={classes.header1c2} display="inline" style={{ marginLeft: '0px' }}> 100% of the proceed will go towards Global One Funds  </Typography>
                <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '50px' }}>
                  <Grid item xs={12} xl={12} md={12} style={{ textAlign: 'end' }}>
                    <Button variant="contained" size="large" type="submit" className={classes.sendButton}>
                      { loader && <CircularProgress size={20} style={{ color: 'white' }} />}
                      { !loader && 'List NFT' }
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
          </Grid>
        </Grid>
        <ConfirmationModal handleClose={handleClose} open={openModal} heading="Mint Artwork" subtitle="You are about to Mint this artwork on the Blockchain. You will now be connected to your wallet and will pay Gas fees associated with the transaction" button1="Cancel" button2="Yes" onButton1Click={handleClose} onButton2Click={handleSuccess} />
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.rightGrid}>
          <Box onClick={goBack} style={{ cursor: 'pointer' }}>
            <Box className={classes.icon2Box}>
              <Icon2 />
              <Typography variant="h3" className={classes.title3}> Step 3/3 </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <SuccessModal handleClose={handleCloseModal} open={openSuccessModal} heading="Collectible Listed" subtitle="Congratulations! Your collectible has been successfully listed on the marketplace" type="create" hasButton buttonTitle="View in Marketplace" onButtonClick={onSuccessButton} />
    </Container>
  );
};

export default Step3;
