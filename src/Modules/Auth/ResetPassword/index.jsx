/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  Container, Grid, Typography, TextField, Button, CircularProgress,
} from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { resetPassword } from '../../../Store/Actions/Auth';

const validationSchema = yup.object({
  password: yup
    .string('Enter your password')
    .required('Password is required'),
  confirmPassword: yup
    .string('Enter your password')
    .required('Confirm Password is required'),
});

const ResetPassword = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const { state } = useLocation();

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    // handle success redirections
    navigate('/admin/dashboard');
    setLoading(false);
  };

  const handleFail = (message) => {
    // handle success
    setError(true);
    setErrorMsg(message);
    setLoading(false);
  };
  const handleResetPassword = (data) => {
    console.log('AAAAAAAAAa', data, state);
    setLoading(true);
    setError(false);
    setErrorMsg('');
    dispatch(resetPassword({
      email: state ? state.email : '',
      password: data.password,
      handleSuccess,
      handleFail,
    }));
  };
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleResetPassword(values);
    },
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid
        container
        className={classes.loginBox}
        sm={6}
        md={4}
        lg={4}
        xl={3}
      >
        <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
          <Typography variant="h6" className={classes.heading1}> S</Typography>
          <Typography className={classes.heading2}>NFT Platform</Typography>
        </Grid>
        <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
          <Typography variant="h6" className={classes.heading3}>Reset Password</Typography>
        </Grid>
        <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            className={`${classes.width100} ${classes.marginTop}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              className: classes.inputHeight,
            }}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            className={`${classes.width100} ${classes.marginTop}`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            InputProps={{
              className: classes.inputHeight,
            }}
          />
          { error && <Typography variant="subtitle1" className={classes.error}>{errorMsg}</Typography> }
          <Button color="primary" variant="contained" fullWidth type="submit" className={classes.loginBtn}>
            { loading && <CircularProgress size={20} style={{ color: 'white' }} />}
            { !loading && 'Reset' }
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default ResetPassword;
