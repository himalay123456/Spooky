/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, IconButton,
} from '@material-ui/core';
import { useStyles } from './styles';
import Icon1 from '../../../../Assets/Svg/perk1.svg';
import Icon2 from '../../../../Assets/Svg/perk2.svg';
import Icon3 from '../../../../Assets/Svg/perk3.svg';
import Icon4 from '../../../../Assets/Images/LandingPage/perk4.jpg';
import Icon4Small from '../../../../Assets/Images/LandingPage/perk4Small.jpg';
import Icon5 from '../../../../Assets/Svg/perk5.svg';
import Icon6 from '../../../../Assets/Svg/perk6.svg';
import Icon7 from '../../../../Assets/Svg/perk7.svg';
import Icon8 from '../../../../Assets/Svg/perk9.svg';
import Icon9 from '../../../../Assets/Svg/perk10.svg';
import Icon10 from '../../../../Assets/Images/LandingPage/perk8.jpg';
import Icon10Small from '../../../../Assets/Images/LandingPage/perk8Small.jpg';

const ThePerks = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer}>
        <Grid container className={classes.cardsContainer}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <Box className={classes.headerBox}>
                <Typography className={classes.header1}>The Perks</Typography>
                <Typography className={classes.header2}>What To Expect When You Join:</Typography>
              </Box>
              <Box className={classes.featureBox}>
                <Grid container className={classes.featureContainer}>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.seg1}>
                    <Box className={classes.iconBox1}>
                      <img
                        src={Icon1}
                        className={classes.iconImage1}
                        alt="Spooky Action Labs"
                        loloading="lazy"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl={11} lg={11} md={11} sm={11} xs={11} className={classes.seg2}>
                    <Typography className={classes.header3}>World Reknown Artists</Typography>
                    <Typography className={classes.header4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.featureContainer}>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.seg1}>
                    <Box className={classes.iconBox2}>
                      <img
                        src={Icon2}
                        className={classes.iconImage2}
                        alt="Spooky Action Labs"
                        loloading="lazy"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl={11} lg={11} md={11} sm={11} xs={11} className={classes.seg2}>
                    <Typography className={classes.header3}>Tradeable NFT Access Ticket</Typography>
                    <Typography className={classes.header4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.featureContainer}>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.seg1}>
                    <Box className={classes.iconBox3}>
                      <img
                        src={Icon3}
                        className={classes.iconImage3}
                        alt="Spooky Action Labs"
                        loloading="lazy"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl={11} lg={11} md={11} sm={11} xs={11} className={classes.seg2}>
                    <Typography className={classes.header3}>100% Authenticity</Typography>
                    <Typography className={classes.header4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.imageBox}>
              <Box className={classes.backgroundBox} />
              <Box className={classes.imageCard}>
                <Box className={`${classes.imageBoxContainer} ${classes.sectionDesktop}`}>
                  <img
                    src={Icon4}
                    className={classes.iconImage4}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
                </Box>
                <Box className={`${classes.imageBoxContainer} ${classes.sectionMobile}`}>
                  <img
                    src={Icon4Small}
                    className={classes.iconImage4}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
                </Box>
                <Box className={classes.headerSeg1}>
                  <Typography className={classes.header5}>New Auction</Typography>
                  <Typography className={classes.header6}>14-29 Dec | by Robbin joseph</Typography>
                </Box>
                <Box className={classes.headerSeg2}>
                  <Box className={classes.iconBox4}>
                    <img
                      src={Icon5}
                      className={classes.iconImage4}
                      alt="Spooky Action Labs"
                      loloading="lazy"
                    />
                  </Box>
                  <Box className={classes.iconBox4}>
                    <img
                      src={Icon6}
                      className={classes.iconImage4}
                      alt="Spooky Action Labs"
                      loloading="lazy"
                    />
                  </Box>
                  <Box className={classes.iconBox4}>
                    <img
                      src={Icon7}
                      className={classes.iconImage4}
                      alt="Spooky Action Labs"
                      loloading="lazy"
                    />
                  </Box>
                </Box>
                <Box className={classes.headerSeg3}>
                  <img
                    src={Icon8}
                    className={classes.iconImage4}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
                  <Typography className={classes.header6} style={{ marginLeft: '10px' }}>240 people watching</Typography>
                  <img
                    src={Icon9}
                    className={classes.iconImage5}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
                </Box>
              </Box>
              <Box className={classes.ongoingContainer}>
                <Grid container>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <Box className={`${classes.iconBox6} ${classes.sectionDesktop}`}>
                      <img
                        src={Icon10}
                        className={classes.iconBox6}
                        alt="Spooky Action Labs"
                        loloading="lazy"
                      />
                    </Box>
                    <Box className={`${classes.iconBox6} ${classes.sectionMobile}`}>
                      <img
                        src={Icon10Small}
                        className={classes.iconBox6}
                        alt="Spooky Action Labs"
                        loloading="lazy"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl={11} lg={11} md={11} sm={11} xs={11} className={classes.pLeft}>
                    <Typography className={classes.header7} style={{ marginLeft: '0px' }}>Ongoing</Typography>
                    <Typography className={classes.header8} style={{ marginLeft: '0px' }}>Launch Date</Typography>
                    <Typography className={classes.header9} style={{ marginLeft: '0px' }}>
                      40%
                      <span style={{ color: 'black' }}> Minted completed</span>
                    </Typography>
                    <Box className={classes.landingProgressBar}>
                      <Box className={classes.progressBar} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  );
};

export default ThePerks;
