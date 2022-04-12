/* eslint-disable no-restricted-properties */
/* eslint-disable eqeqeq */
/* eslint-disable new-cap */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useRef } from 'react';
import {
  Container, Grid, Typography, Box, Button, CircularProgress,
} from '@material-ui/core';
import { create } from 'ipfs-http-client';
import { useNavigate } from 'react-router';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { nftImagePreview } from '../../../../../Store/Actions/NFT';
import { ReactComponent as Upload } from '../../../../../Assets/Svg/upload1.svg';
import { ReactComponent as UploadIcon } from '../../../../../Assets/Svg/upload2.svg';
import { ReactComponent as CloseIcon } from '../../../../../Assets/Svg/close.svg';
import { ReactComponent as Icon1 } from '../../../../../Assets/Svg/step2-a.svg';
import { ReactComponent as Icon2 } from '../../../../../Assets/Svg/step2-b.svg';
import { useStyles } from './styles';
import ensureIpfsUriPrefix from '../../../../../utils/ensureIpfsUriPrefix';
import getIPFSurl from '../../../../../utils/getIpfsUrl';
import SuccessModal from '../../../../../Components/Modal/SuccessModal';
import getFileSizeInKB from '../../../../../utils/getFileSizeInKB';
import Loader from '../../../../../Components/Loader';

const ipfsAddOptions = {
  cidVersion: 1,
  hashAlg: 'sha2-256',
};
// eslint-disable-next-line react/prop-types
const Step1 = ({ changeStep, setImageURL }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const { imagePreviewUrl, rawImage } = useSelector((state) => state.NFT);
  console.log('images preview', imagePreviewUrl, rawImage);
  const navigate = useNavigate();
  const [files, setFiles] = React.useState(imagePreviewUrl);
  const [imageError, setImageError] = React.useState('');
  const [filesRAW, setFilesRAW] = React.useState(rawImage);
  const [loader, setLoader] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const inputRef = useRef(null);

  const handleCloseModal = () => {
    setOpenModal(false);
    changeStep(2);
    setLoader(false);
  };

  const onBtnClick = (e) => {
    e.stopPropagation();
    inputRef.current.click();
    return null;
  };

  const onFileChangeCapture = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFiles([]);
    setFilesRAW([]);
    console.log('🚀 ~ file: index.jsx ~ line 63 ~ onFileChangeCapture ~ e.target.files[0]', e.target.files[0]);
    const fileSize = getFileSizeInKB(e.target.files[0].size);
    if (fileSize > 50000) {
      setImageError('Image size should not exceed 50 mb');
      return;
    }
    if (e.target.files[0].type === 'image/png'
    || e.target.files[0].type === 'image/jpg'
     || e.target.files[0].type === 'image/gif'
     || e.target.files[0].type === 'image/webp'
     || e.target.files[0].type === 'image/svg') {
      const file = e.target.files[0];
      setImageError('');
      setFilesRAW(e.target.files[0]);
      setFiles([{
        preview: URL.createObjectURL(file),
      }]);
    } else {
      setImageError('Please choose proper image format');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles([]);
      setFilesRAW([]);
      const uploadFile = acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));
      console.log('🚀 ~ file: index.jsx ~ line 91 ~ uploadFile ~ uploadFile', uploadFile[0]);
      const fileSize = getFileSizeInKB(uploadFile.size);
      if (fileSize > 50000) {
        setImageError('Image size should not exceed 50 mb');
        return;
      }
      if (!uploadFile.length > 0) {
        setImageError('Please choose proper image format');
        return;
      }
      if (uploadFile[0].type === 'image/png'
        || uploadFile[0].type === 'image/jpg'
        || uploadFile[0].type === 'image/gif'
        || uploadFile[0].type === 'image/webp'
        || uploadFile[0].type === 'image/svg') {
        const file = uploadFile[0];
        setImageError('');
        setFilesRAW(uploadFile[0]);
        setFiles([{
          preview: URL.createObjectURL(file),
        }]);
      } else {
        setImageError('Please choose proper image format');
      }
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );

      setFilesRAW(uploadFile[0]);
    },
  });

  const images = files.map((file) => (
    <>
      <img
        src={file.preview}
        style={{ display: loading ? 'none' : 'block' }}
        className={classes.imagePreview}
        onLoad={() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
        alt="Spooky Action Labs"
        loloading="lazy"
      />
      { loading && (
      <Loader />
      )}
    </>
  ));

  const goBack = () => {
    navigate('/admin/createNft', { state: { back: true } });
    changeStep(2);
  };

  const handleUpload = async (image) => {
    if (image.name == undefined) {
      setImageError('Please select an image file to upload');
      return;
    }
    setLoader(true);
    const ipfs = new create('https://ipfs.infura.io:5001/api/v0');
    const ipfsPath = `/nft/${image.name}`;
    const { cid: assetCid } = await ipfs.add(
      { path: ipfsPath, content: image },
      ipfsAddOptions,
    );
    const assetURI = `${ensureIpfsUriPrefix(assetCid)}/${image.name}`;
    const assetURL = getIPFSurl(assetURI);
    if (assetURI) {
      setImageURL(assetURL);
      setOpenModal(true);
    }
    dispatch(nftImagePreview({ imageUrl: files, rawImage: filesRAW }));
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.leftGrid}>
          <Box onClick={goBack} style={{ cursor: 'pointer' }}>
            <Icon1 />
          </Box>
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography align="center" variant="h3" className={classes.title}> Upload </Typography>
              </Grid>
            </Grid>
            { files.length === 0 ? (
              <Box className={classes.uploadBox} {...getRootProps()}>
                <input {...getInputProps()} />
                <Typography align="center" variant="h3" className={classes.header1a}> Upload </Typography>
                <Box className={classes.displayFlex}>
                  <Upload />
                </Box>
                <Typography align="center" variant="h3" className={classes.header1b}> JPG, PNG, WEBP, SVG or GIF </Typography>
                <Typography align="center" variant="h3" className={classes.header1c}> 50MB Limit </Typography>
                <Typography align="center" variant="h3" className={classes.header1cError}>
                  {imageError}
                </Typography>
                <Typography align="center" variant="h3" className={classes.header1d}> Drag & Drop </Typography>
                <Typography align="center" variant="h3" className={classes.header1f}> or </Typography>
                <Box className={classes.displayFlex}>
                  <input
                    onClick={(event) => event.stopPropagation()}
                    type="file"
                    name="image"
                    accept="image/*"
                    ref={inputRef}
                    onChange={onFileChangeCapture}
                    className={classes.inputBtn}
                  />
                  <Button onClick={(e) => onBtnClick(e)} variant="contained" size="large" className={classes.submitBtn}>
                    Browse
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box className={classes.uploadBox1}>
                <Box
                  className={classes.closeIcon}
                  onClick={() => {
                    setFiles([]);
                    setFilesRAW([]);
                    setImageError('');
                    setLoading(true);
                  }}
                >
                  {!loader && <CloseIcon /> }
                </Box>
                <Box style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                  {images}
                </Box>
              </Box>
            )}
            <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '30px', width: '100%' }}>
              <Grid item xs={10} xl={10} md={10} style={{ display: 'flex' }} />
              <Grid item xs={2} xl={2} md={2} style={{ textAlign: 'end' }}>
                <Button variant="contained" size="large" type="submit" onClick={() => handleUpload(filesRAW)} disabled={loader} className={classes.submitBtn}>
                  <UploadIcon />
                  <Typography className={classes.btnHeader}>{loader ? <CircularProgress size={25} style={{ color: 'white' }} /> : 'Upload'}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.rightGrid}>
          <Box onClick={goBack} style={{ cursor: 'pointer' }}>
            <Box className={classes.icon2Box}>
              <Icon2 />
              <Typography variant="h3" className={classes.title3}> Step 1/3 </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <SuccessModal handleClose={handleCloseModal} open={openModal} heading="Upload NFT" subtitle="Image has been uploaded successfully" type="create" />
    </Container>

  );
};

export default Step1;
