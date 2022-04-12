/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, IconButton,
} from '@material-ui/core';
import { useStyles } from './styles';
import Image1 from '../../../../Assets/Images/LandingPage/curator1.png';
import Image2 from '../../../../Assets/Images/LandingPage/curator2.png';

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
          <Typography className={classes.header1}>The Curators</Typography>
          <Typography className={classes.header2}>We are partnering with industry creative leaders TRENDLAND & BRAWHAUS for our Beta launch.</Typography>
        </Box>
        <Grid container className={classes.cardsContainer}>
          <Grid item xl={2} lg={1} />
          <Grid item xl={4} lg={5} md={6} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image1}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>TRENDLAND</Typography>
            </Grid>
          </Grid>
          <Grid item xl={4} lg={5} md={6} sm={6} xs={12} className={classes.dFlex}>
            <Grid className={classes.cardBox}>
              <img
                src={Image2}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
              <Typography className={classes.header3}>BRAWHAUS</Typography>
            </Grid>
          </Grid>
          <Grid item xl={2} lg={1} />
        </Grid>
      </Grid>
    </Container>

  );
};

export default OurCurators;
