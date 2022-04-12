/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { useWeb3React } from '@web3-react/core';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useStyles } from './ModalStyles';
import { ReactComponent as CloseIcon } from '../../Assets/Svg/close.svg';
import './styles.scss';
import { verifyUserProfileEmail } from '../../Store/Actions';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

const CreateProfileVerificationModal = ({
  open,
  handleClose,
  heading,
  button1,
  passEmail,
  handleOpenOTP,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const { account } = useWeb3React();
  const handleVerification = (data) => {
    dispatch(verifyUserProfileEmail(data));
    setLoading(true);
  };

  const handleOnSuccess = ({ email }) => {
    console.log('EMAIL', email);
    setLoading(false);
    passEmail(email);
    handleOpenOTP();
    handleClose();
  };
  const handleOnFail = () => {
    setLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      walletAddress: account,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('VALIES', values);
      handleVerification({ values, handleOnSuccess, handleOnFail });
    },
  });

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
          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit} className="ProfileVerify">
            <Grid container style={{ marginTop: '5vh' }}>
              <Grid item xs={1} sm={2} md={2} xl={2} />
              <Grid item xs={10} sm={8} md={8} xl={8}>
                <TextField
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="inputRounded"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={1} sm={2} md={2} xl={2} />

            </Grid>
            <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
              <Button variant="contained" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', color: 'black', boxShadow: 'none', fontSize: '14px' }} type="submit" className={classes.sendButton}>
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
export default CreateProfileVerificationModal;
