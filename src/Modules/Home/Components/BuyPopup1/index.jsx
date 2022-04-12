/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Dialog, Box, TextField, IconButton, Grid, Typography, CircularProgress, styled } from '@material-ui/core';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import DialogContent from '@material-ui/core/DialogContent';
import { useStyles } from './styles';
import ethSmall from '../../../../Assets/Svg/ethSmall.svg';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#595959',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#595959',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#595959',
    },
  },
  '&::placeholder': {
    textOverflow: 'ellipsis !important',
    color: 'red',
  },
});

const BuyPopup = ({
  open,
  onClose,
  cardValues,
  imageURL,
  onBuy,
  loader,
}) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { membership, eth, price, numberOfCopies } = cardValues;
  const handleSubmit = (data) => {
    console.log(data);
    onBuy(data.quantity);
    // navigate('/buy-nft', { state: {} });
    // dispatch(adminLogin(data));
    // setLoading(true);
  };

  const validationSchema = yup.object({
    quantity: yup
      .number('Enter Qunatity')
      .required('Qunatity is required')
      .max(numberOfCopies)
      .label('Qunatity'),
  });
  const formik = useFormik({
    initialValues: {
      quantity: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper1, root: classes.height600 }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <Grid container className={`${classes.app} BuyPopup`}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.cardBox}>
            <Box className={classes.card1}>
              <Box className={`${classes.inner1}`}>
                <img
                  src={imageURL}
                  className={classes.logoImage}
                  alt="Spooky Action Labs"
                  loloading="lazy"
                />
              </Box>
              <Box className={classes.inner2}>
                <Typography className={classes.header4}>
                  NFT &nbsp;
                  {membership}
                </Typography>
                <Box className={classes.ethBox}>
                  <img
                    src={ethSmall}
                    className={classes.logoImage2}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
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
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.cardBox1}>
            <Typography className={classes.header6}>YOU ARE PURCHASING</Typography>
            <Typography className={classes.header7}>
              {membership}
            &nbsp; NFT
            </Typography>
            <Typography className={classes.header8}>
              Cost  &nbsp;
              { eth * formik.values.quantity }
            &nbsp; Ξ
            </Typography>
            <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
              <Typography className={classes.header9}>Number of Cards</Typography>
              <CustomTextField
                id="quantity"
                name="quantity"
                variant="outlined"
                className="inputRounded"
                value={formik.values.quantity}
                onChange={(e) => {
                  formik.handleChange(e);
                  fetch(
                    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
                  )
                    .then((res) => res.json())
                    .then((json) => {
                      console.log('🚀 ~ file: index.jsx ~ line 146 ~ .then ~ json', json);
                    });
                }}
                onBlur={formik.handleBlur}
                InputProps={{
                  classes: {
                    input: classes.input,
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                helperText={formik.touched.quantity && formik.errors.quantity}
              />
              <Typography className={classes.header10}>Amount to pay: (ETH)</Typography>
              <CustomTextField
                id="amount"
                name="amount"
                variant="outlined"
                className="inputRounded"
                disabled
                value={eth * formik.values.quantity}
                InputProps={{
                  classes: {
                    input: classes.input,
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <Typography className={`${classes.header12} ${classes.sectionDesktop}`}>The amount does not include gas (transaction) cost. That will be calculated and added by the wallet.</Typography>
              <IconButton type="submit" disableRipple size="small" color="inherit" className={classes.noHover}>
                <Typography disableRipple className={classes.submitBtn}>
                  { !loader && 'Buy' }
                  { loader && <CircularProgress size={20} style={{ color: 'black' }} />}
                </Typography>
              </IconButton>
            </form>
          </Grid>
          <Typography className={`${classes.header11} ${classes.sectionMobile}`}>The amount does not include gas (transaction) cost. That will be calculated and added by the wallet.</Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default BuyPopup;
