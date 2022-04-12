/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Wallet = () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <Grid className={classes.app}>
      <Box className={classes.menuBtn}>
        <Link to="/curator" style={{ textDecoration: 'none' }}>
          <Typography className={classes.header1}>Trendland</Typography>
        </Link>
      </Box>
      <Box className={classes.menuBtn}>
        <Link to="/brawhaus" style={{ textDecoration: 'none' }}>
          <Typography className={classes.header1}>Brawhaus</Typography>
        </Link>
      </Box>
      <Box className={classes.menuBtn}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography className={classes.header1}>Apply</Typography>
        </Link>
      </Box>
    </Grid>
  );
};

export default Wallet;
