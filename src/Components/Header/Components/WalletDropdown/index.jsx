/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography } from '@material-ui/core';
import { ReactComponent as Icon1 } from '../../../../Assets/Images/LandingPage/Header/userMenu1.svg';
import { ReactComponent as Icon2 } from '../../../../Assets/Images/LandingPage/Header/userMenu5.svg';
import { useStyles } from './styles';

const Wallet = ({ handleDisconnectWalletClick }) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <Grid className={classes.app}>
      <Link to="/curator" style={{ textDecoration: 'none' }}>
        <Box className={classes.menuBtn}>
          <Icon1 />
          <Typography className={classes.header1}>View profile</Typography>
        </Box>
      </Link>
      <Box className={classes.menuBtn} onClick={handleDisconnectWalletClick}>
        <Icon2 />
        <Typography className={classes.header1}>Disconnect</Typography>
      </Box>
    </Grid>
  );
};

export default Wallet;
