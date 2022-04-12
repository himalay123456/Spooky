/* eslint-disable max-len */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box,
} from '@material-ui/core';
import Icon1 from '../../../../Assets/Svg/trendingland1.svg';
import Icon2 from '../../../../Assets/Svg/trendingland2.svg';
import Icon3 from '../../../../Assets/Svg/exclusive2Small.svg';
import { useStyles } from './ExclusiveStyles';

const ExclusiveAccess = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer}>
        <Box className={`${classes.iconBox6}`}>
          <img
            src={Icon1}
            className={classes.iconBox1}
            alt="Spooky Action Labs"
            loloading="lazy"
          />
        </Box>
        <Typography className={classes.header1}>PREVIEW ACCESS</Typography>
        <Typography className={classes.header2}>TRENDLAND CURATED GALLERY</Typography>
        <Box className={`${classes.iconBox6} ${classes.sectionDesktop}`}>
          <img
            src={Icon2}
            className={classes.iconBox2}
            alt="Spooky Action Labs"
            loloading="lazy"
          />
        </Box>
        <Box className={`${classes.iconBox6} ${classes.sectionMobile}`}>
          <img
            src={Icon3}
            className={classes.iconBox2}
            alt="Spooky Action Labs"
            loloading="lazy"
          />
        </Box>
        <Typography className={classes.header3}>
          With more than 16 years of online curation,Trendland is one of leading destination for all the artists and creators in search of inspiration.
        </Typography>
      </Grid>
    </Container>

  );
};

export default ExclusiveAccess;
