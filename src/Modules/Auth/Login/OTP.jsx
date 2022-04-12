/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  CircularProgress,
  Container, Grid, Typography,
} from '@material-ui/core';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router';
import { useStyles } from './LoginStyles';
import { OTPVerifyRequest } from '../../../Store/Actions/Auth';

const OTP = () => {
  const classes = useStyles();
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { loader } = useSelector((reducerState) => reducerState.Auth);

  const handleChange = (otpString) => {
    setOTP(otpString);
  };

  useEffect(() => {
    if (state === null) navigate('/login');
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        // eslint-disable-next-line no-use-before-define
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  const handleSuccess = (response) => {
    if (response.data.admin.isPasswordReset) {
      navigate('/admin/dashboard');
    } else {
      navigate('/reset-password', { state: { email: response.data.admin.email } });
    }
  };

  const handleSubmit = () => {
    setError('');
    if (otp.length < 6) setError('Please Enter Valid OTP');
    else {
      dispatch(OTPVerifyRequest({
        email: state.adminData.email,
        otp,
        code: otp,
        setError,
        endpoint: state.adminData.isSuperAdmin ? '/admin/verifyAdminAuthenticationCode' : '/admin/verifyOTP',
        handleSuccess,
        isSuperAdmin: state.adminData.isSuperAdmin,
      }));
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        className={classes.app}
      >
        <Grid
          container
          className={classes.loginBox1}
        >
          <form onSubmit={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
          >
            <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
              <Typography variant="h6" className={classes.heading1}> S</Typography>
              <Typography className={classes.heading2}>NFT Platform</Typography>
            </Grid>
            <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
              <Typography variant="h6" className={classes.heading3}>{state !== null && state.adminData && state.adminData.isSuperAdmin ? 'Verify security code' : 'Verify Phone Number' }</Typography>
            </Grid>
            <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
              <Typography variant="subtitle1" className={classes.heading4}>
                {state !== null && state.adminData && state.adminData.isSuperAdmin
                  ? 'Enter on Verification code below to login'
                  : state !== null && state.adminData && !state.adminData.isSuperAdmin ? `Enter on OTP below send to your mobile number ${state.adminData.mobileNumber} to login` : navigate('/login')}
              </Typography>
            </Grid>
            <Grid item className={`${classes.displayFlex} ${classes.width100}`} style={{ marginTop: '-2vh' }}>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={false}
                inputStyle={classes.otpInput}
                isInputNum
              />
            </Grid>
            {error.length > 0 && <Typography variant="subtitle1" className={classes.errorText}>{error}</Typography> }
            <Button color="primary" variant="contained" disabled={loader} fullWidth type="submit" className={classes.loginBtn} style={{ marginTop: '15px' }} onClick={() => handleSubmit()}>
              { loader && <CircularProgress size={20} />}
              { !loader && 'Proceed' }
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default OTP;
