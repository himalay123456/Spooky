/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, IconButton,
} from '@material-ui/core';
import { useStyles } from './styles';
import Image1 from '../../../../Assets/Images/LandingPage/artist1.png';
import Image2 from '../../../../Assets/Images/LandingPage/artist2.png';
import Image3 from '../../../../Assets/Images/LandingPage/artist3.png';
import Image4 from '../../../../Assets/Images/LandingPage/artist4.png';
import Image5 from '../../../../Assets/Images/LandingPage/artist5.png';
import Image6 from '../../../../Assets/Images/LandingPage/artist6.png';
import Image7 from '../../../../Assets/Images/LandingPage/artist7.png';
import Image8 from '../../../../Assets/Images/LandingPage/artist8.png';

const OurCurators = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer}>
        <Box style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Typography className={classes.header1}>Artists Preview</Typography>
          <Typography className={classes.header2}>Trendland is curating world reknown artist from all the fields graphic design to 3D and Videos</Typography>
        </Box>
        <Grid container className={classes.cardsContainer}>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image1}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image2}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image3}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image4}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image5}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image6}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image7}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image8}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>Mica Relo</Typography>
              <Typography className={classes.header4}>Outter World</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  );
};

export default OurCurators;
