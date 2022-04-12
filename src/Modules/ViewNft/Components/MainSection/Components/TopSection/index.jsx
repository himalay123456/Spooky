/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, Button,
} from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon1 } from '../../../../../../Assets/Svg/viewNft7.svg';
import { ReactComponent as Icon2 } from '../../../../../../Assets/Svg/viewNft8.svg';
// import { ReactComponent as Icon3 } from '../../../../../../Assets/Svg/viewNft3.svg';
// import { ReactComponent as Icon4 } from '../../../../../../Assets/Svg/viewNft4.svg';
import { ReactComponent as Icon5 } from '../../../../../../Assets/Svg/viewNft5.svg';
import { ReactComponent as Zoom } from '../../../../../../Assets/Svg/zoom.svg';
import { ReactComponent as Icon6 } from '../../../../../../Assets/Svg/viewNft6.svg';

import { ReactComponent as DashIcon } from '../../../../../../Assets/Svg/viewNft10.svg';
import Loader from '../../../../../../Components/Loader';
import UnlockablePopup from '../UnlockablePopup';
import ClickboardPopup from '../ClipboardPopup';
import ImageViewer from '../../../../../../Components/ImageViewer';
import { useStyles } from './styles';

const Topsection = ({ nftDetails }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [expand, setExpand] = React.useState(false);
  const [unlockable, setUnlockable] = React.useState(false);
  const [clipboard, setClipBoard] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageViewerClose = () => {
    setImageUrl(null);
  };
  let words = '';
  const [finalDescription, setFinalDescription] = React.useState('');

  const handleClose = () => {
    setUnlockable(false);
  };

  const handleClipBoardClose = () => {
    setClipBoard(false);
  };

  const {
    uploadedFile, description, isUnlockable, _id,
  } = nftDetails;

  React.useEffect(() => {
    if (description && description.length > 40) {
      words = description.split(' ');
      let sentence = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 40; i++) {
        sentence = `${sentence} ${words[i]}`;
      }
      setExpand(true);
      setFinalDescription(sentence);
    } else {
      setFinalDescription(description);
    }
  }, [description]);
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginTop: '2vh' }}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Box style={{ marginTop: '50px', position: 'relative' }}>
            <DashIcon />
            <Typography display="inline" className={classes.header1}>Description </Typography>
          </Box>
          <Box style={{ position: 'relative', width: '70%' }}>
            { expand ? (
              <Typography align="center" variant="h3" className={classes.header2}>
                { finalDescription }
              </Typography>
            ) : (
              <Typography align="center" variant="h3" className={classes.header2}>
                { finalDescription === '' ? '' : description }
              </Typography>
            ) }
            { expand ? (
              <Box style={{ position: 'absolute', right: '20px', cursor: 'pointer' }} onClick={() => setExpand(false)}>
                <Icon1 />
                <Typography display="inline" className={classes.header3}>Expand </Typography>
              </Box>
            ) : (
              <Box
                style={{
                  position: 'absolute', right: '20px', display: 'flex', cursor: 'pointer',
                }}
                onClick={() => setExpand(true)}
              >
                { finalDescription && (finalDescription.length > 40) ? (
                  <>
                    <Box style={{ transform: 'rotate(180deg)' }}>
                      <Icon1 />
                    </Box>
                    <Typography display="inline" className={classes.header3a}>Unexpand </Typography>
                  </>
                ) : ''}
              </Box>
            ) }
          </Box>
          { isUnlockable && (
          <Box className={classes.topBox}>
            <Icon2 />
            <Typography display="inline" className={classes.header4}>This NFT includes </Typography>
            <Typography display="inline" className={classes.header5} onClick={() => setUnlockable(true)}>Unlockable Content </Typography>
          </Box>
          )}
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ position: 'relative', paddingRight: '80px' }}>
          <Box
            className={classes.mainImageBox}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setImageUrl(uploadedFile);
            }}
          >
            <Box
              className={classes.zoomIcon}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setImageUrl(uploadedFile);
              }}
            >
              <Zoom />
            </Box>
            <img
              src={uploadedFile}
              className={classes.backImage}
              style={{ display: loading ? 'none' : 'block' }}
              alt="Spooky Action Labs"
              loloading="lazy"
              onLoad={() => setLoading(false)}
            />
          </Box>
          <ImageViewer imageUrl={imageUrl} handleClose={handleImageViewerClose} size="lg" />

          { loading && (
          <Box className={classes.mainImageBox1}>
            <Loader />
          </Box>
          )}
          <Box className={classes.interactBox}>
            {/* <Icon3 />
            <Typography display="inline" className={classes.header6}> 17 </Typography>
            <Icon4 />
            <Typography display="inline" className={classes.header6}> 333 </Typography> */}
            <Box style={{ cursor: 'pointer' }} onClick={() => setClipBoard(true)}>
              <Icon5 />
            </Box>
            <Typography display="inline" className={classes.header6} />
            <Icon6 />
          </Box>
          <Box className={classes.interactBox1} style={{ display: 'none' }}>
            <Button variant="contained" size="large" type="submit" className={classes.submitBtn2}>
              Digital Art
            </Button>
            <Button variant="contained" size="large" type="submit" className={classes.submitBtn2}>
              Graphic Design
            </Button>
            <Button variant="contained" size="large" type="submit" className={classes.submitBtn2}>
              Pink
            </Button>
          </Box>
        </Grid>
        <UnlockablePopup open={unlockable} handleClose={handleClose} />
        <ClickboardPopup open={clipboard} handleClose={handleClipBoardClose} url={`${window.location.origin}/view-nft/${_id}`} />
      </Grid>
    </Container>
  );
};

export default Topsection;
