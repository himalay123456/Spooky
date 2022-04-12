/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
// eslint-disable-next-line no-unused-vars
import {
  Grid, Box, Typography, Container, IconButton, TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
// import Icon1 from '../../../../Assets/Svg/wallet1.svg';
import Image1 from '../../../../Assets/Images/LandingPage/exclusiveCardBig.png';
import { useStyles } from './styles';

const BuyPopup = ({ cardValues }) => {
  const navigate = useNavigate();
  const { membership, eth, price } = cardValues;
  const handleSubmit = (data) => {
    console.log(data);
    navigate('/buy-nft', { state: {} });
    // dispatch(adminLogin(data));
    // setLoading(true);
  };
  const formik = useFormik({
    initialValues: {
      amount: '0.6',
      quantity: '5',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.app}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.cardBox}>
          <Box className={classes.card1}>
            <Box className={`${classes.inner1}`}>
              <img
                src={Image1}
                className={classes.logoImage}
                alt="Spooky Action Labs"
                loloading="lazy"
              />
            </Box>
            <Box className={classes.inner2}>
              <Typography className={classes.header4}>
                {membership}
                &nbsp; Membership
              </Typography>
              <Typography className={classes.header5}>
                {eth}
                &nbsp;&nbsp;&nbsp;
                <Typography className={classes.header5a}>
                  ($
                  {price}
                  )
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.cardBox1}>
          <Typography className={classes.header6}>YOU ARE PURCHASING</Typography>
          <Typography className={classes.header7}>
            {membership}
            &nbsp; Memebership Card
          </Typography>
          <Typography className={classes.header8}>
            Cost  &nbsp;
            {eth}
            &nbsp; Ξ
          </Typography>
          <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <Typography className={classes.header9}>Number of cards</Typography>
            <Box className={classes.walletBox}>
              <TextField
                id="quantity"
                name="quantity"
                // label="Email"
                // variant="outlined"
                className={classes.width100}
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                helperText={formik.touched.quantity && formik.errors.quantity}
                InputProps={{
                  className: classes.inputHeight,
                  classes: {
                    input: classes.placeHolder,
                  },
                }}
              />
            </Box>
            <Typography className={classes.header10}>Amount to pay: (ETH)</Typography>
            <Box className={classes.walletBox}>
              <TextField
                id="amount"
                name="amount"
                // label="Email"
                // variant="outlined"
                className={classes.width100}
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                InputProps={{
                  className: classes.inputHeight,
                  classes: {
                    input: classes.placeHolder,
                  },
                }}
              />
            </Box>
            <Typography className={`${classes.header10} ${classes.sectionDesktop}`}>The amount does not include gas (transaction) cost. That will be calculated and added by the wallet.</Typography>
            <IconButton type="submit" disableRipple size="small" color="inherit" className={classes.noHover}>
              <Typography disableRipple className={classes.submitBtn}>Buy</Typography>
            </IconButton>
          </form>
        </Grid>
        <Typography className={`${classes.header11} ${classes.sectionMobile}`}>The amount does not include gas (transaction) cost. That will be calculated and added by the wallet.</Typography>
      </Grid>
    </Container>
  );
};

export default BuyPopup;
