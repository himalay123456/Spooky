/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-fragments */
/* eslint-disable max-len */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
import {
  Button,
  CircularProgress,
  Box,
  Container, Grid, MenuItem, TextField, Typography, Select, styled,
  Radio, RadioGroup, FormControlLabel, FormControl,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { create } from 'ipfs-http-client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useStyles, SwitchStyles } from './styles';
import ConfirmationModal from '../../../NftSteps/components/MintPopup';
import '../../../NftSteps/components/customcss.scss';
import { ReactComponent as ArrowDown } from '../../../../../Assets/Svg/Down.svg';
// import { ReactComponent as Icon1 } from '../../../../../Assets/Svg/step2-a.svg';
import { ReactComponent as Icon2 } from '../../../../../Assets/Svg/step2-b.svg';
import { createNFTHistory, editNFTCollection, getNFTDetailsSuccess } from '../../../../../Store/Actions';
import UseUserAccount from '../../../../../hooks/UseUserAccount';
import ensureIpfsUriPrefix from '../../../../../utils/ensureIpfsUriPrefix';
import useNFTTokenContract from '../../../../../hooks/useNFTTokenContract';
import Minting from '../../../NftSteps/components/Minting';
import Loader from '../../../../../Components/Loader';

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
const Step2 = ({ changeStep, imageURL }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { nftDetails: nftDetailsReducer } = useSelector((state) => state.NFT);
  const [active, setActive] = useState(false);
  const [checkValue, setCheckValue] = useState('accept');
  const [nftDetails, setNFTDetails] = useState(null);
  const [type, setType] = useState('isTicket');
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [unlockableContent, setUnlockableContent] = useState({
    value: '',
    touched: false,
    isError: false,
    errors: null,
  });
  const [openModal, setOpenModal] = React.useState(false);
  const { account } = UseUserAccount();
  const dispatch = useDispatch();
  const [isMultipleOwners, setIsMultipleOwners] = useState(false);
  const [isMultipleRoyalities, setIsMultipleRoyalities] = useState(false);
  const [isMinting, setMinting] = useState(false);
  const [isMinted, setMinted] = useState(false);
  const [isProperties, setIsProperties] = useState(false);
  const [finalValues, setFinalValues] = useState(false);
  const nftContract = useNFTTokenContract();
  const [multiOwners, setMultiOwners] = useState([
    {
      walletAddress: {
        value: '',
        touched: false,
        isError: false,
        errors: null,
      },
      ownersPercentage: {
        value: '100',
        touched: false,
        isError: false,
        errors: null,
      },
    },
  ]);
  const [royalties, setRoyalties] = useState([
    {
      walletAddress: {
        value: '',
        touched: false,
        isError: false,
        errors: null,
      },
      ownersPercentage: {
        value: '30',
        touched: false,
        isError: false,
        errors: null,
      },
    },
  ]);
  const [properties, setProperties] = useState([
    {
      key: {
        value: '',
        touched: false,
        isError: false,
        errors: null,
      },
      value: {
        value: '',
        touched: false,
        isError: false,
        errors: null,
      },
    },
  ]);
  useEffect(() => {
    // dispatch(getCollectionList());
    // dispatch(getCollectibleTicketList());
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        formik.handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
      dispatch(getNFTDetailsSuccess(''));
    };
  }, []);

  useEffect(() => {
    const {
      multipleOwners, royalties: royaltiesData, isTicket, isAirDrop, others, unlockableContent: unlockableContentData, properties: propertiesData,
    } = nftDetailsReducer;
    console.log('nftDetailsReducer', nftDetailsReducer);
    if (nftDetailsReducer && multipleOwners.length > 0) {
      const owners = multipleOwners.map((item) => ({
        walletAddress: {
          value: item.walletAddress,
          touched: false,
          isError: false,
          errors: null,
        },
        ownersPercentage: {
          value: item.ownersPercentage,
          touched: false,
          isError: false,
          errors: null,
        },
      }));
      setMultiOwners(owners);
      setIsMultipleOwners(true);
    }
    if (nftDetailsReducer && royaltiesData.length > 0) {
      const royality = royaltiesData.map((item) => ({
        walletAddress: {
          value: item.walletAddress,
          touched: false,
          isError: false,
          errors: null,
        },
        ownersPercentage: {
          value: item.ownersPercentage,
          touched: false,
          isError: false,
          errors: null,
        },
      }));
      setRoyalties(royality);
      setIsMultipleRoyalities(true);
    }
    if (nftDetailsReducer && propertiesData && propertiesData.length > 0) {
      const property = propertiesData.map((item) => ({
        key: {
          value: item.key,
          touched: false,
          isError: false,
          errors: null,
        },
        value: {
          value: item.value,
          touched: false,
          isError: false,
          errors: null,
        },
      }));
      setIsProperties(true);
      setProperties(property);
    }
    if (nftDetailsReducer && isTicket) setType('isTicket');
    if (nftDetailsReducer && isAirDrop) setType('isAirDrop');
    if (nftDetailsReducer && others) setType('others');
    if (nftDetailsReducer && unlockableContentData && unlockableContentData.length > 0) {
      setUnlockableContent({
        value: unlockableContentData, touched: false, isError: false, errors: null,
      });
    }
  }, [nftDetailsReducer]);
  const changeRadioBtn = (e) => {
    if (e.target.value === checkValue) {
      setActive(!active);
      setCheckValue('');
    } else {
      setActive(!active);
      setCheckValue(e.target.value);
    }
  };

  const validationSchema = yup.object({
    artistName: yup
      .string('Enter artist name'),
    title: yup
      .string('Enter title')
      .required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    numberOfCopies: yup
      .number('Enter edition')
      .required('Edition is required'),
    websiteURL: yup
      .string('Enter url')
      .url(),
  });

  const goBack = () => {
    changeStep(1);
  };

  const handleClose = () => {
    setOpenModal(false);
    setLoader(false);
  };

  const handleSuccess = () => {
    handleClose();
    if (account) {
      setMinting(true);
      MintNft(finalValues, nftDetails);
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
  };

  const editNFTCollectiontSuccess = (nftDetailsData) => {
    setNFTDetails(nftDetailsData);
    setOpenModal(true);
  };

  const editNFTCollectiontFail = () => {
    setLoader(false);
  };

  const MintNft = async (values, nftDetailsData) => {
    console.log('🚀 ~ file: index.jsx ~ line 178 ~ MintNft ~ values', values, nftDetailsData);
    // eslint-disable-next-line new-cap
    const ipfs = new create('https://ipfs.infura.io:5001/api/v0');
    const { cid: metadataCid } = await ipfs.add({
      path: '/nft/metadata.json',
      content: JSON.stringify({
        address: account,
        name: values.artistName,
        copies: values.numberOfCopies,
        description: values.description,
        percentage: values.percantage,
        price: values.initialPrice,
        category: values.category,
        currency: 'ETH',
        itemSellType: 'fixed',
        event: 'minted',
        buyer: 'NullAddress',
        paymentMethod: 'wallet',
        item: nftDetailsData._id,
      }),
    });
    const metadataURI = `${ensureIpfsUriPrefix(metadataCid)}/metadata.json`;
    console.log('🚀 ~ file: index.jsx ~ line 211 ~ MintNft ~ metadataCid', metadataCid, metadataURI);
    // eslint-disable-next-line no-unused-vars
    const tokenid = await nftContract.methods
      .createNFT(
        account && account, values.numberOfCopies, metadataURI,
      )
      .send({ from: account })
      .on('transactionHash', () => {})
      .on('confirmation', () => {})
      .on('receipt', (receipt) => {
        console.log('🚀 ~ file: index.jsx ~ line 149 ~ .on ~ receipt', nftDetailsData);
        if (!finalValues.multipleOwners.length > 0) {
          toast.success('NFT is minted successfully!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            autoClose: 3000,
          });
          dispatch(createNFTHistory({
            currency: 'ETH',
            itemSellType: 'fixed',
            event: 'minted',
            buyer: 'NullAddress',
            seller: account,
            paymentMethod: 'wallet',
            item: nftDetailsData._id,
          }));
          dispatch(editNFTCollection({
            values: {
              ...values,
              ...nftDetailsData,
              id: nftDetailsData._id,
              uploadTrailer: '',
              // eslint-disable-next-line radix
              tokenId: parseInt(receipt.events.URI.returnValues.id),
              uploadSubtitle: '',
              contentImage: nftDetailsData.uploadedFile,
              nftType: 'fixed',
              status: 'minted',
            },
          }));
          setMinted(true);
        }
      })
      .on('error', (error) => {
        console.log('🚀 ~ file: index.jsx ~ line 162 ~ .on ~ error', error);
        let message = 'Something went Wrong!';
        if (error.message === 'MetaMask Tx Signature: User denied transaction signature.') message = 'The transaction approval has been rejected';
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
        setLoader(false);
        setMinting(false);
      });
    if (finalValues.multipleOwners.length > 0 && tokenid.events.URI.returnValues.id) {
      console.log('tokenid.events.URI.returnValues.id', tokenid.events.URI.returnValues.id);
      let ownerwallet = [];
      let ownerpercentage = [];
      ownerwallet = finalValues.multipleOwners.map((elem) => elem.walletAddress);
      ownerpercentage = finalValues.multipleOwners.map((elem) => elem.ownersPercentage);
      console.log('ownerwallet', ownerwallet);
      console.log('ownerpercentage', ownerpercentage);
      nftContract.methods.addFractionalOwners(tokenid.events.URI.returnValues.id, ownerwallet, ownerpercentage)
        .send({ from: account })
        .then((res) => {
          console.log('inside addfunction', res);
          toast.success('NFT is minted successfully!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            autoClose: 3000,
          });
          dispatch(createNFTHistory({
            currency: 'ETH',
            itemSellType: 'fixed',
            event: 'minted',
            buyer: 'NullAddress',
            seller: account,
            paymentMethod: 'wallet',
            item: nftDetailsData._id,
          }));
          dispatch(editNFTCollection({
            values: {
              ...values,
              ...nftDetailsData,
              id: nftDetailsData._id,
              uploadTrailer: '',
              // eslint-disable-next-line radix
              tokenId: parseInt(tokenid.events.URI.returnValues.id),
              uploadSubtitle: '',
              contentImage: nftDetailsData.uploadedFile,
              nftType: 'fixed',
              status: 'minted',
            },
          }));
        })
        .catch((error) => {
          console.log('tokenid.events.URI.returnValues.id', tokenid.events.URI.returnValues.id);
          console.log(error);
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            autoClose: 3000,
          });
          setLoader(false);
          setMinting(false);
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      title: nftDetailsReducer ? nftDetailsReducer.title : '',
      artistName: nftDetailsReducer ? nftDetailsReducer.artistName : '',
      description: nftDetailsReducer ? nftDetailsReducer.description : '',
      numberOfCopies: nftDetailsReducer ? nftDetailsReducer.numberOfCopies : '',
      blockchainCurrency: nftDetailsReducer ? nftDetailsReducer.blockchainCurrency : 'ETH',
      isUnlockable: nftDetailsReducer ? nftDetailsReducer.isUnlockable : false,
      uploadedFile: nftDetailsReducer ? nftDetailsReducer.uploadedFile : imageURL,
      currentOwner: account,
      websiteURL: nftDetailsReducer ? nftDetailsReducer.websiteURL : '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log('🚀 ~ file: index.jsx ~ line 97 ~ Step2 ~ values', values, unlockableContent, values.isUnlockable, unlockableContent.isError);
      if (nftDetailsReducer.status === 'listed') return;
      if (!values.isUnlockable && unlockableContent.isError) {
        setUnlockableContent({
          ...unlockableContent,
          isError: false,
          errors: '',
          touched: false,
        });
      }
      if (values.isUnlockable && unlockableContent.isError) return;
      if (values.isUnlockable && !unlockableContent.touched) {
        setUnlockableContent({
          ...unlockableContent,
          isError: true,
          errors: 'Unlockable content is required',
          touched: true,
        });
        return;
      }
      const newMulti = [];
      let isAnyErrors = false;
      if (isMultipleOwners) {
        multiOwners.forEach((item) => {
          let percentageData = { ...item.ownersPercentage };
          let addressData = { ...item.walletAddress };
          if (item.ownersPercentage.isError || item.walletAddress.isError) {
            isAnyErrors = true;
            return;
          }
          if (item.ownersPercentage.value === '') {
            percentageData = {
              ...item.ownersPercentage,
              errors: 'Percentage is Required',
              isError: true,
              touched: true,
            };
          }
          if (item.walletAddress.value === '') {
            addressData = {
              ...item.walletAddress,
              errors: 'Wallet Address is Required',
              isError: true,
              touched: true,
            };
          }
          const finalData = {
            ownersPercentage: { ...percentageData },
            walletAddress: { ...addressData },
          };
          newMulti.push(finalData);
          console.log('FOREACH', finalData);
        });
        if (isAnyErrors) return;
        setMultiOwners([...newMulti]);
      }
      if (isMultipleRoyalities) {
        royalties.forEach((item) => {
          let percentageData = { ...item.ownersPercentage };
          let addressData = { ...item.walletAddress };
          if (item.ownersPercentage.isError || item.walletAddress.isError) {
            isAnyErrors = true;
            return;
          }
          if (item.ownersPercentage.value === '') {
            percentageData = {
              ...item.ownersPercentage,
              errors: 'Percentage is Required',
              isError: true,
              touched: true,
            };
          }
          if (item.walletAddress.value === '') {
            addressData = {
              ...item.walletAddress,
              errors: 'Wallet Address is Required',
              isError: true,
              touched: true,
            };
          }
          const finalData = {
            ownersPercentage: { ...percentageData },
            walletAddress: { ...addressData },
          };
          newMulti.push(finalData);
          console.log('FOREACH', finalData);
        });
        if (isAnyErrors) return;
        setMultiOwners([...newMulti]);
      }
      if (!isMultipleOwners && !isMultipleRoyalities) {
        setMultiOwners([{
          walletAddress: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
          ownersPercentage: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
        }]);
        setRoyalties([{
          walletAddress: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
          ownersPercentage: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
        }]);
      }
      const multipleOwners = multiOwners.map((item) => ({
        walletAddress: item.walletAddress.value,
        ownersPercentage: item.ownersPercentage.value,
      }));
      const finalRoyalties = royalties.map((item) => ({
        walletAddress: Number(item.walletAddress.value),
        ownersPercentage: Number(item.ownersPercentage.value),
      }));
      const finalProperties = properties.map((item) => ({
        key: item.key.value,
        value: item.value.value,
      }));
      const finalvalues = {
        ...values,
        unlockableContent: unlockableContent.value,
        multiple: isMultipleOwners,
        multipleOwners: isMultipleOwners ? multipleOwners : [],
        royalties: isMultipleRoyalities ? finalRoyalties : [],
        properties: isProperties ? finalProperties : [],
        nftType: 'fixed',
        isTicket: type === 'isTicket',
        isAirDrop: type === 'isAirDrop',
        id: nftDetailsReducer._id,
      };
      console.log(finalvalues);
      if (isAnyErrors) return;
      setFinalValues(finalvalues);
      dispatch(editNFTCollection({ values: { ...nftDetailsReducer, ...finalvalues }, editNFTCollectiontSuccess, editNFTCollectiontFail }));
      setLoader(true);
    },
  });

  const handleAddOwner = (from) => {
    if (from === 'owner') {
      const stateData = multiOwners;
      const newData = [
        ...stateData,
        {
          walletAddress: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
          ownersPercentage: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
        },
      ];
      setMultiOwners(newData);
    } else if (from === 'royalities') {
      const stateData = royalties;
      const newData = [
        ...stateData,
        {
          walletAddress: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
          ownersPercentage: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
        },
      ];
      setRoyalties(newData);
    } else if (from === 'properties') {
      const stateData = properties;
      const newData = [
        ...stateData,
        {
          key: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
          value: {
            value: '',
            touched: false,
            isError: false,
            errors: null,
          },
        },
      ];
      setProperties(newData);
    }
  };

  const handleRemoveOwners = (deleteIndex, of) => {
    if (of === 'owner') {
      const updatedOwners = multiOwners.filter((item, index) => deleteIndex !== index);
      setMultiOwners(updatedOwners);
    } else if (of === 'royalities') {
      const updatedRoyalties = royalties.filter((item, index) => deleteIndex !== index);
      setRoyalties(updatedRoyalties);
    } else if (of === 'properties') {
      const updatedProperties = properties.filter((item, index) => deleteIndex !== index);
      setProperties(updatedProperties);
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      {isMinting && <Minting title={finalValues.title} artistName={finalValues.artistName} numberOfCopies={finalValues.numberOfCopies} imageUrl={nftDetailsReducer.uploadedFile} isMinted={isMinted} changeStep={() => navigate('/admin/createNft/list')} />}
      {!isMinting && (
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.leftGrid} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography align="center" variant="h3" className={classes.title}> Mint </Typography>
              </Grid>
            </Grid>
            <Typography variant="h3" className={classes.header1a}> Title & Description </Typography>
            <Typography variant="h3" className={classes.header1b}> Once your NFT is Minted on the Etherium Blockchain, </Typography>
            <Typography variant="h3" className={classes.header1b} style={{ marginBottom: '20px' }}> You will not be able to edit or update any of its information.  </Typography>
            <Grid item xl={8} lg={10} md={10} sm={10} xs={10} className={`${classes.boxContent} ${classes.topSpace} StepsContainer`}>
              <form
                noValidate
                autoComplete="off"
                id="adminForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <Typography variant="h3" className={classes.header1c}> Title* </Typography>
                <CustomTextField
                  id="title"
                  name="title"
                  placeholder="Title"
                  variant="outlined"
                  className="inputRounded"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                  InputProps={{
                    classes: {
                      input: classes.input,
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />

                <Typography variant="h3" className={classes.header1c}> Description* </Typography>
                <TextField
                  id="description"
                  name="description"
                  placeholder="Description"
                  variant="outlined"
                  className="inputRounded inputArea"
                  multiline
                  rows={5}
                  style={{ marginTop: '20px' }}
                  disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                  InputProps={{
                    classes: {
                      input: classes.input2,
                      root: classes.inputArea,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />
                <Typography variant="h3" className={classes.header1c}> Artist Name </Typography>
                <CustomTextField
                  id="artistName"
                  name="artistName"
                  placeholder="Artist Name"
                  variant="outlined"
                  color="#595959"
                  className="inputRounded"
                  disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                  InputProps={{ classes: { input: classes.input, notchedOutline: classes.notchedOutline } }}
                  value={formik.values.artistName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.artistName && Boolean(formik.errors.artistName)}
                  helperText={formik.touched.artistName && formik.errors.artistName}
                />
                <Box style={{ position: 'relative', margin: '30px 0px' }}>
                  <Box style={{ position: 'absolute', top: '-5px', right: '10px' }}>
                    <SwitchStyles
                      name="multiple"
                      value={isMultipleOwners}
                      disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                      onChange={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsMultipleOwners(!isMultipleOwners);
                        setMultiOwners([{
                          walletAddress: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                          ownersPercentage: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                        }]);
                      }}
                      onBlur={formik.handleBlur}
                      label="Switch"
                      checked={isMultipleOwners}
                    />
                  </Box>
                  <Typography variant="h3" className={classes.header1d}> Multiple Owners </Typography>
                </Box>
                { isMultipleOwners && multiOwners.map((item, index) => (
                  <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={{ position: 'relative', width: '50%' }}>
                      <CustomTextField
                        id="address"
                        name="address"
                        placeholder="Enter the Owner Address"
                        variant="outlined"
                        color="#595959"
                        className="inputRounded"
                        disabled={!isMultipleOwners || (nftDetailsReducer && nftDetailsReducer.status === 'listed')}
                        InputProps={{ classes: { input: classes.input3, notchedOutline: classes.notchedOutline } }}
                        value={item.walletAddress.value}
                        onChange={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.target.value === '') {
                            error = 'Owner is required';
                            isError = true;
                          }
                          const stateData = multiOwners;
                          const data = stateData[index].walletAddress;
                          const object = {
                            ...data,
                            value: e.target.value,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].walletAddress = object;
                          setMultiOwners([...stateData]);
                        }}
                        onBlur={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.currentTarget.value === '') {
                            error = 'Owner is required';
                            isError = true;
                          }
                          const stateData = multiOwners;
                          const data = stateData[index].walletAddress;
                          const object = {
                            ...data,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].walletAddress = object;
                          setMultiOwners([...stateData]);
                        }}
                        error={Boolean(item.walletAddress.touched) && Boolean(item.walletAddress.isError)}
                        helperText={Boolean(item.walletAddress.touched) && item.walletAddress.isError && item.walletAddress.errors}
                      />
                      {multiOwners.length > 1 ? (
                        <Box className={classes.ethLogo1}>
                          <Typography
                            variant="h3"
                            className={classes.header1d}
                            onClick={() => {
                              if (nftDetailsReducer && nftDetailsReducer.status === 'listed') return;
                              handleRemoveOwners(index, 'owner');
                            }}
                          >
                            x
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                    <CustomTextField
                      id="percantage"
                      name="percantage"
                      placeholder="Enter the Owner %"
                      variant="outlined"
                      className="inputRounded"
                      style={{ width: '50%' }}
                      value={item.ownersPercentage.value}
                      disabled={!isMultipleOwners || (nftDetailsReducer && nftDetailsReducer.status === 'listed')}
                      onChange={(e) => {
                        let error = '';
                        let isError = false;
                        const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.target.value === '') {
                          error = 'Percentage is required';
                          isError = true;
                        } else if (!reg.test(e.target.value)) {
                          error = 'Percentage must contains alphabates only';
                          isError = true;
                        }
                        const stateData = multiOwners;
                        const data = stateData[index].ownersPercentage;
                        const object = {
                          ...data,
                          value: e.target.value,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].ownersPercentage = object;
                        setMultiOwners([...stateData]);
                      }}
                      onBlur={(e) => {
                        let error = '';
                        let isError = false;
                        const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.currentTarget.value === '') {
                          error = 'Percentage is required';
                          isError = true;
                        } else if (!reg.test(e.currentTarget.value)) {
                          error = 'Percentage must contains alphabates only';
                          isError = true;
                        }
                        const stateData = multiOwners;
                        const data = stateData[index].ownersPercentage;
                        const object = {
                          ...data,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].ownersPercentage = object;
                        setMultiOwners([...stateData]);
                      }}
                      InputProps={{
                        classes: {
                          input: classes.input3,
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      error={Boolean(item.ownersPercentage.touched) && Boolean(item.ownersPercentage.isError)}
                      helperText={Boolean(item.ownersPercentage.touched) && item.ownersPercentage.isError && item.ownersPercentage.errors}
                    />
                  </Box>
                ))}

                {isMultipleOwners ? (
                  <Box style={{ position: 'relative', margin: '30px 0px' }}>
                    <Typography
                      variant="h3"
                      className={classes.header1e}
                      onClick={() => {
                        if (nftDetailsReducer && nftDetailsReducer.status === 'listed') return;
                        handleAddOwner('owner');
                      }}
                    >
                      + Add New
                    </Typography>
                  </Box>
                ) : null}
                <Box style={{ position: 'relative', margin: '70px 0px 30px' }}>
                  <Box style={{ position: 'absolute', top: '-5px', right: '10px' }}>
                    <SwitchStyles
                      name="royalities"
                      value={isMultipleRoyalities}
                      disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                      onChange={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsMultipleRoyalities(!isMultipleRoyalities);
                        setRoyalties([{
                          walletAddress: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                          ownersPercentage: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                        }]);
                      }}
                      onBlur={formik.handleBlur}
                      label="Switch"
                      checked={formik.values.royalities}
                    />
                  </Box>
                  <Typography variant="h3" className={classes.header1d}>Multiple Royalities </Typography>
                </Box>
                { isMultipleRoyalities && royalties.map((item, index) => (
                  <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={{ position: 'relative', width: '50%' }}>
                      <CustomTextField
                        id="address"
                        name="address"
                        placeholder="Enter the Owner Address"
                        variant="outlined"
                        color="#595959"
                        className="inputRounded"
                        disabled={!isMultipleRoyalities || (nftDetailsReducer && nftDetailsReducer.status === 'listed')}
                        InputProps={{ classes: { input: classes.input3, notchedOutline: classes.notchedOutline } }}
                        value={item.walletAddress.value}
                        onChange={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.target.value === '') {
                            error = 'Owner is required';
                            isError = true;
                          }
                          const stateData = royalties;
                          const data = stateData[index].walletAddress;
                          const object = {
                            ...data,
                            value: e.target.value,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].walletAddress = object;
                          setRoyalties([...stateData]);
                        }}
                        onBlur={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.currentTarget.value === '') {
                            error = 'Owner is required';
                            isError = true;
                          }
                          const stateData = royalties;
                          const data = stateData[index].walletAddress;
                          const object = {
                            ...data,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].walletAddress = object;
                          setRoyalties([...stateData]);
                        }}
                        error={Boolean(item.walletAddress.touched) && Boolean(item.walletAddress.isError)}
                        helperText={Boolean(item.walletAddress.touched) && item.walletAddress.isError && item.walletAddress.errors}
                      />
                      {royalties.length > 1 ? (
                        <Box className={classes.ethLogo1}>
                          <Typography
                            variant="h3"
                            className={classes.header1d}
                            onClick={() => {
                              if (nftDetailsReducer && nftDetailsReducer.status === 'listed') return;
                              handleRemoveOwners(index, 'royalities');
                            }}
                          >
                            x
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                    <CustomTextField
                      id="percantage"
                      name="percantage"
                      placeholder="Enter the Owner %"
                      variant="outlined"
                      className="inputRounded"
                      value={item.ownersPercentage.value}
                      disabled={!isMultipleRoyalities || (nftDetailsReducer && nftDetailsReducer.status === 'listed')}
                      onChange={(e) => {
                        let error = '';
                        let isError = false;
                        const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.target.value === '') {
                          error = 'Percentage is required';
                          isError = true;
                        } else if (!reg.test(e.target.value)) {
                          error = 'Percentage must contains alphabates only';
                          isError = true;
                        }
                        const stateData = royalties;
                        const data = stateData[index].ownersPercentage;
                        const object = {
                          ...data,
                          value: e.target.value,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].ownersPercentage = object;
                        setRoyalties([...stateData]);
                      }}
                      onBlur={(e) => {
                        let error = '';
                        let isError = false;
                        const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.currentTarget.value === '') {
                          error = 'Percentage is required';
                          isError = true;
                        } else if (!reg.test(e.currentTarget.value)) {
                          error = 'Percentage must contains alphabates only';
                          isError = true;
                        }
                        const stateData = royalties;
                        const data = stateData[index].ownersPercentage;
                        const object = {
                          ...data,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].ownersPercentage = object;
                        setRoyalties([...stateData]);
                      }}
                      InputProps={{
                        classes: {
                          input: classes.input3,
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      style={{ width: '50%' }}
                      error={Boolean(item.ownersPercentage.touched) && Boolean(item.ownersPercentage.isError)}
                      helperText={Boolean(item.ownersPercentage.touched) && item.ownersPercentage.isError && item.ownersPercentage.errors}
                    />
                  </Box>
                ))}
                {isMultipleRoyalities ? (
                  <Box style={{ position: 'relative', margin: '30px 0px' }}>
                    <Typography
                      variant="h3"
                      className={classes.header1e}
                      onClick={() => {
                        if (nftDetailsReducer && nftDetailsReducer.status === 'listed') return;
                        handleAddOwner('royalities');
                      }}
                    >
                      + Add New
                    </Typography>
                  </Box>
                ) : null}
                <Box style={{ position: 'relative', margin: '70px 0px 30px' }}>
                  <Box style={{ position: 'absolute', top: '-5px', right: '10px' }}>
                    <SwitchStyles
                      name="properties"
                      value={isProperties}
                      onChange={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsProperties(!isProperties);
                        setProperties([{
                          key: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                          value: {
                            value: '',
                            touched: false,
                            isError: false,
                            errors: null,
                          },
                        }]);
                      }}
                      onBlur={formik.handleBlur}
                      label="Switch"
                      checked={isProperties}
                    />
                  </Box>
                  <Typography variant="h3" className={classes.header1d}>Properties </Typography>
                </Box>
                { isProperties && properties.map((item, index) => (
                  <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={{ position: 'relative', width: '50%' }}>
                      <CustomTextField
                        id="key"
                        name="key"
                        placeholder="Enter the Key"
                        variant="outlined"
                        color="#595959"
                        className="inputRounded"
                        disabled={!isProperties}
                        InputProps={{ classes: { input: classes.input3, notchedOutline: classes.notchedOutline } }}
                        value={item.key.value}
                        onChange={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.target.value === '') {
                            error = 'Key is required';
                            isError = true;
                          }
                          const stateData = properties;
                          const data = stateData[index].key;
                          const object = {
                            ...data,
                            value: e.target.value,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].key = object;
                          setProperties([...stateData]);
                        }}
                        onBlur={(e) => {
                          let error = '';
                          let isError = false;
                          if (e.currentTarget.value === '') {
                            error = 'Key is required';
                            isError = true;
                          }
                          const stateData = properties;
                          const data = stateData[index].key;
                          const object = {
                            ...data,
                            touched: true,
                            errors: error,
                            isError: isError,
                          };
                          stateData[index].key = object;
                          setProperties([...stateData]);
                        }}
                        error={Boolean(item.key.touched) && Boolean(item.key.isError)}
                        helperText={Boolean(item.key.touched) && item.key.isError && item.key.errors}
                      />
                      {properties.length > 1 ? (
                        <Box className={classes.ethLogo1}>
                          <Typography
                            variant="h3"
                            className={classes.header1d}
                            onClick={() => handleRemoveOwners(index, 'properties')}
                          >
                            x
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                    <CustomTextField
                      id="value"
                      name="value"
                      placeholder="Enter the Value"
                      variant="outlined"
                      className="inputRounded"
                      value={item.value.value}
                      disabled={!isProperties}
                      onChange={(e) => {
                        let error = '';
                        let isError = false;
                        // const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.target.value === '') {
                          error = 'Value is required';
                          isError = true;
                        }
                        const stateData = properties;
                        const data = stateData[index].value;
                        const object = {
                          ...data,
                          value: e.target.value,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].value = object;
                        setProperties([...stateData]);
                      }}
                      onBlur={(e) => {
                        let error = '';
                        let isError = false;
                        // const reg = /^([0-9]|[1-9][0-9]|100)$/;
                        if (e.currentTarget.value === '') {
                          error = 'Value is required';
                          isError = true;
                        }
                        const stateData = properties;
                        const data = stateData[index].value;
                        const object = {
                          ...data,
                          touched: true,
                          errors: error,
                          isError: isError,
                        };
                        stateData[index].value = object;
                        setProperties([...stateData]);
                      }}
                      InputProps={{
                        classes: {
                          input: classes.input3,
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      style={{ width: '50%' }}
                      error={Boolean(item.value.touched) && Boolean(item.value.isError)}
                      helperText={Boolean(item.value.touched) && item.value.isError && item.value.errors}
                    />
                  </Box>
                ))}
                {isProperties ? (
                  <Box style={{ position: 'relative', margin: '30px 0px' }}>
                    <Typography variant="h3" className={classes.header1e} onClick={() => handleAddOwner('properties')}> + Add New </Typography>
                  </Box>
                ) : null}
                <Box style={{ position: 'relative', marginTop: '9vh' }}>
                  <Box style={{ position: 'absolute', top: '-5px', right: '10px' }}>
                    <SwitchStyles
                      name="isUnlockable"
                      value={formik.values.isUnlockable}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                      error={formik.touched.isUnlockable && Boolean(formik.errors.isUnlockable)}
                      helperText={formik.touched.isUnlockable && formik.errors.isUnlockable}
                      label="Switch"
                    // eslint-disable-next-line dot-notation
                      checked={formik.values.isUnlockable}
                    />
                  </Box>
                  <Typography variant="h3" className={classes.header1d}> Unlockable Content </Typography>
                  <Typography variant="h3" className={classes.header1c2} style={{ width: '80%' }}> Include unlocakbale content that can only be revealed by the onwer of the NFT. </Typography>
                </Box>
                {formik.values.isUnlockable && (
                  <React.Fragment>
                    <TextField
                      id="unlockableContent"
                      name="unlockableContent"
                      placeholder="Enter Content ( access key, code to redeem, like to a file, etc. )"
                      variant="outlined"
                      className="inputRounded inputArea"
                      multiline
                      rows={5}
                      disabled={!formik.values.isUnlockable || (nftDetailsReducer && nftDetailsReducer.status === 'listed')}
                      style={{ marginTop: '20px', transition: '1s' }}
                      InputProps={{
                        classes: {
                          input: classes.input2a,
                          root: classes.inputArea,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      value={unlockableContent.value}
                      onChange={(e) => {
                        let error = '';
                        let isError = false;
                        if (e.target.value === '') {
                          error = 'Unlockable is required';
                          isError = true;
                        }
                        setUnlockableContent({
                          ...unlockableContent,
                          value: e.target.value,
                          touched: true,
                          errors: error,
                          isError: isError,
                        });
                      }}
                      onBlur={(e) => {
                        let error = '';
                        let isError = false;
                        if (e.target.value === '') {
                          error = 'Unlockable is required';
                          isError = true;
                        }
                        setUnlockableContent({
                          ...unlockableContent,
                          value: e.target.value,
                          touched: true,
                          errors: error,
                          isError: isError,
                        });
                      }}
                      error={unlockableContent.touched && Boolean(unlockableContent.isError)}
                      helperText={unlockableContent.touched && unlockableContent.errors}
                    />
                    <a href="https://www.markdownguide.org/cheat-sheet/" target="window" style={{ textDecoration: 'none' }}>
                      <Typography display="inline" className={classes.markHeader1}>Markdown</Typography>
                    </a>
                    <Typography display="inline" className={classes.markHeader2}>syntax is supported.</Typography>
                  </React.Fragment>
                )}
                <Typography variant="h3" className={classes.header1d} style={{ marginTop: '10px' }}> Blockchain* </Typography>
                <Typography variant="h3" className={classes.header1c2}> Gas Fess & Minting cost depends on the Blockchain you choose. </Typography>
                <Box style={{ position: 'relative' }}>
                  <Select
                    id="blockchainCurrency"
                    name="blockchainCurrency"
                    variant="outlined"
                    MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    value={formik.values.blockchainCurrency}
                    onChange={formik.handleChange}
                    disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                    onBlur={formik.handleBlur}
                    inputProps={{ classes: { icon: classes.icon1 } }}
                    IconComponent={ArrowDown}
                    className={classes.input1}
                    error={formik.touched.blockchainCurrency && Boolean(formik.errors.blockchainCurrency)}
                    helperText={formik.touched.blockchainCurrency && formik.errors.blockchainCurrency}
                  >
                    <MenuItem value="ETH" selected>
                      Ethereum
                    </MenuItem>
                  </Select>
                </Box>

                <Typography variant="h3" className={classes.header1d}> Editions* </Typography>
                <Typography variant="h3" className={classes.header1c2}> The number of copies that can be minted </Typography>
                <CustomTextField
                  id="numberOfCopies"
                  name="numberOfCopies"
                  placeholder="Number of copies"
                  variant="outlined"
                  className="inputRounded"
                  disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                  value={formik.values.numberOfCopies}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    classes: {
                      input: classes.input,
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  error={formik.touched.numberOfCopies && Boolean(formik.errors.numberOfCopies)}
                  helperText={formik.touched.numberOfCopies && formik.errors.numberOfCopies}
                />
                <Box style={{ position: 'relative', margin: '10px 0px 20px' }}>
                  <Typography variant="h3" className={classes.header1d}> Select NFT Type </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="type"
                      className={classes.radioGroup}
                      defaultValue={type}
                      name="type"
                    >
                      <FormControlLabel value="isTicket" disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'} control={<Radio onClick={() => setType('isTicket')} classes={{ root: classes.radio1, checked: classes.checked }} />} label="Ticket" />
                      <FormControlLabel value="isAirDrop" disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'} control={<Radio onClick={() => setType('isAirDrop')} classes={{ root: classes.radio1, checked: classes.checked }} />} label="AirDrop" />
                      <FormControlLabel value="others" disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'} control={<Radio onClick={() => setType('others')} classes={{ root: classes.radio1, checked: classes.checked }} />} label="Others" />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Typography variant="h3" className={classes.header1d}> External Link </Typography>
                <Typography variant="h3" className={classes.header1c2}> PolyOne will include a link to this URL on the artwork page. You are welcome to link to your own site  </Typography>
                <CustomTextField
                  id="websiteURL"
                  name="websiteURL"
                  placeholder="Enter the External Link"
                  variant="outlined"
                  className="inputRounded"
                  value={formik.values.websiteURL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                  InputProps={{
                    classes: {
                      input: classes.input,
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  error={formik.touched.websiteURL && Boolean(formik.errors.websiteURL)}
                  helperText={formik.touched.websiteURL && formik.errors.websiteURL}
                />
                <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '50px' }}>
                  <Grid item xs={12} xl={12} md={12} style={{ textAlign: 'end' }}>
                    <Box style={{ display: 'flex' }}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="accept"
                          defaultValue="accept"
                          name="radio-buttons-group"
                          disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'}
                          value={checkValue}
                        >
                          <FormControlLabel value="accept" disabled={nftDetailsReducer && nftDetailsReducer.status === 'listed'} control={<Radio size="small" disableRipple onClick={changeRadioBtn} classes={{ root: classes.radio, checked: classes.checked }} />} className={classes.radioBtn} />
                        </RadioGroup>
                      </FormControl>
                      <Typography variant="h3" className={classes.header1c2}> You must agree to our Terms & Conditions </Typography>
                    </Box>
                    <Button variant="contained" disabled={active || loader || (nftDetailsReducer && nftDetailsReducer.status === 'listed')} size="large" type="submit" className={nftDetailsReducer.status === 'listed' ? classes.sendButton1 : classes.sendButton}>
                      { loader && <CircularProgress size={20} style={{ color: 'white' }} />}
                      { !loader && 'Save changes' }
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
          </Grid>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={1} className={classes.rightGrid}>
          <Box onClick={goBack} style={{ cursor: 'pointer' }}>
            <Box className={classes.icon2Box}>
              <Icon2 />
              <Typography variant="h3" className={classes.title3}> Step 2/3 </Typography>
            </Box>
          </Box>
          <Grid item xl={12} lg={12} md={4} sm={12} xs={12} className={classes.cardBox}>
            <Box className={classes.card1}>
              <Box
                className={`${classes.inner1}`}
              >
                <img
                  src={nftDetailsReducer && nftDetailsReducer.uploadedFile}
                  alt="nft"
                  className={classes.imagePreview}
                  style={{ display: loading ? 'none' : 'block' }}
                  onLoad={() => {
                    setTimeout(() => {
                      setLoading(false);
                    }, 1000);
                  }}
                />
              </Box>
              { loading && (
                <Loader />
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      ) }
      <ConfirmationModal handleClose={handleClose} open={openModal} heading="Mint Artwork" subtitle="You are about to Mint this artwork on the Blockchain. You will now be connected to your wallet and will pay Gas fees associated with the transaction" button1="Edit" button2="Yes" onButton1Click={handleClose} onButton2Click={handleSuccess} />
    </Container>
  );
};

export default Step2;
