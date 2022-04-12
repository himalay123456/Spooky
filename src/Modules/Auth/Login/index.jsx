/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import {
  Container, Grid, Typography, TextField, Button, CircularProgress,
} from '@material-ui/core';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './LoginStyles';
import { adminLogin } from '../../../Store/Actions/Auth';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

const Login = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const createSuccessResponse = useSelector((state) => state.Auth.adminLogin);
  const adminData = useSelector((state) => state.Auth.adminData);

  useEffect(() => {
    console.log('createSuccessResponse', createSuccessResponse);
    const response = (createSuccessResponse && createSuccessResponse.success);
    if (response && loading) {
      setLoading(false);
      navigate('/otp', { state: { adminData } });
    }
    const response1 = (createSuccessResponse && createSuccessResponse.error);
    if (response1 && loading) {
      setLoading(false);
      setError(true);
      setErrorMsg(createSuccessResponse.errorMsg);
      console.log(createSuccessResponse.errorMsg);
    }
  }, [createSuccessResponse]);
  const handleLogin = (data) => {
    dispatch(adminLogin(data));
    setLoading(true);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        formik.handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

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
          <Typography variant="h6" className={classes.heading3}> Login for Continue</Typography>
        </Grid>
        <Grid item className={`${classes.displayFlex} ${classes.width100}`}>
          <Typography variant="subtitle1" className={classes.heading4}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent.</Typography>
        </Grid>
        { error && <Typography variant="subtitle1" className={classes.error}>{errorMsg}</Typography> }
        <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className={classes.width100}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              className: classes.inputHeight,
              classes: {
                input: classes.placeHolder,
              },
            }}
          />
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
          <Button color="primary" variant="contained" fullWidth type="submit" className={classes.loginBtn}>
            { loading && <CircularProgress size={20} style={{ color: 'white' }} />}
            { !loading && 'Submit' }
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default Login;
