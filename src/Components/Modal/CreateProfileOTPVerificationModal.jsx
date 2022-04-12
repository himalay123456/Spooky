/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import OtpInput from 'react-otp-input';
import { useStyles } from './ModalStyles';
import { ReactComponent as CloseIcon } from '../../Assets/Svg/close.svg';
import './styles.scss';
// eslint-disable-next-line no-unused-vars
import { verifyUserProfileOTP } from '../../Store/Actions';

const CreateProfileOTPVerificationModal = ({
  open,
  handleClose,
  heading,
  button1,
  email,
  onSuccess,
}) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleChange = (otpString) => {
    setOTP(otpString);
  };
  const handleOnSuccess = (message) => {
    setLoading(false);
    onSuccess(message);
  };
  const handleOnFail = (message) => {
    console.log('handleOnFail', message);
    setLoading(false);
    setError(message);
  };

  const handleSubmit = () => {
    setError('');
    if (otp.length < 6) setError('Please Enter Valid OTP');
    else {
      setLoading(true);
      dispatch(verifyUserProfileOTP({
        email,
        otp,
        setError,
        handleOnSuccess,
        handleOnFail,
      }));
    }
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper1 }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <div onClick={handleClose} className={classes.topBar}>
          <span className={classes.title}>{heading}</span>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          >
            <Grid container style={{ marginTop: '5vh' }}>
              <Grid item xs={1} sm={2} md={2} xl={2} />
              <Grid item xs={10} sm={8} md={8} xl={8}>
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={false}
                  inputStyle={classes.otpInput}
                />
              </Grid>
              <Grid item xs={1} sm={2} md={2} xl={2} />

            </Grid>
            {error.length > 0 && <Typography variant="subtitle1" className={classes.errorText}>{error}</Typography> }
            <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
              <Button type="submit" variant="contained" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', color: 'black', boxShadow: 'none', fontSize: '14px' }} type="submit" onClick={() => handleSubmit()} className={classes.sendButton}>
                { loading && <CircularProgress size={20} style={{ color: 'white' }} />}
                { !loading && button1 }
              </Button>
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default CreateProfileOTPVerificationModal;
