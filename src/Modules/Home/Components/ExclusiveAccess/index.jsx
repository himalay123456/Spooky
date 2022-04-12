/* eslint-disable max-len */
import React from 'react';
import {
  Container, Grid, Typography, Box,
} from '@material-ui/core';
import Image1 from '../../../../Assets/Images/LandingPage/Header/carousel1.jpg';
import Image2 from '../../../../Assets/Svg/exclusive2.svg';
// import Image1Small from '../../../../Assets/Images/LandingPage/exclusiveCard.png';
import Image2Small from '../../../../Assets/Svg/exclusive2Small.svg';
import client from '../../../../utils/sanityClient';
import { ReactComponent as HeartIcon } from '../../../../Assets/Svg/viewNft3a.svg';
import { ReactComponent as HeartIcon1 } from '../../../../Assets/Svg/viewNft3b.svg';

import { useStyles } from './ExclusiveStyles';

const ExclusiveAccess = () => {
  const classes = useStyles();
  const [bannerURL, setBannerURL] = React.useState(null);

  React.useEffect(() => {
    client
      .fetch('*[_type == "landingbanner"]{"bannerURL":banner.asset->url}', {})
      .then((res) => {
        setBannerURL(res[0].bannerURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer} style={bannerURL != null ? { backgroundImage: `url(${bannerURL})` } : null}>
        <Grid item xl={7} lg={7} md={6} sm={7} xs={7}>
          <Typography className={`${classes.header1} ${classes.sectionDesktop}`}>Exclusive NFT TICKET access</Typography>
          <Typography className={`${classes.header1} ${classes.sectionMobile}`}>EXCLUSIVE</Typography>
          <Typography className={`${classes.header1} ${classes.sectionMobile}`}>ACCESS</Typography>
          <Typography className={`${classes.header2} ${classes.sectionDesktop}`}>PolyOne NFT Portal </Typography>
          <Typography className={`${classes.header2} ${classes.sectionMobile}`} style={{ marginTop: '15px' }}>PolyOne NFT</Typography>
          <Typography className={`${classes.header2} ${classes.sectionMobile}`}>Portal </Typography>
          <Box style={{ background: 'transparent', marginTop: '0px', display: 'none' }}>
            <img
              src={Image2}
              className={classes.sectionDesktop}
              alt="Spooky Action Labs"
              loading="lazy"
            />
            <img
              src={Image2Small}
              className={classes.sectionMobile}
              alt="Spooky Action Labs"
              loading="lazy"
            />
          </Box>
          <Typography className={classes.header3}>
            As a member of the PolyOne.IO you’ll be able to pre-access the platform before official launch, Collect & mint exclu sive NFT artwork by world renowned artists.
          </Typography>
        </Grid>
        <Grid item xl={5} lg={5} md={6} sm={5} xs={5} className={classes.displayFlex}>
          <Box className={classes.card1}>
            <Box className={`${classes.inner1} ${classes.sectionDesktop}`}>
              <img
                src={Image1}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
            </Box>
            <Box className={`${classes.inner1} ${classes.sectionMobile}`}>
              <img
                src={Image1}
                className={classes.logoImage1}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
            </Box>
            <Box className={classes.inner2}>
              <Typography className={classes.header4}>Membership NFT</Typography>
              <Typography className={classes.header4}>Access Card</Typography>
              <Typography className={classes.header4}>Silver</Typography>
              <Box className={classes.iconBox}>
                <Box className={`${classes.heartIcon} ${classes.sectionDesktop}`}>
                  <HeartIcon />
                </Box>
                <Box className={`${classes.heartIcon} ${classes.sectionMobile}`}>
                  <HeartIcon1 />
                </Box>
                <Box className={classes.availableHead}>
                  <Typography className={classes.availableHeader}> 1/888</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>

  );
};

export default ExclusiveAccess;
