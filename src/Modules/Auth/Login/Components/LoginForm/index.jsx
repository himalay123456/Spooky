/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
import {
  Button,
  Container, Grid, TextField, Typography, styled, Box,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useStyles } from './styles';
import EyeIcon from '../../../../../Assets/Svg/Eye.svg';

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

const LoginForm = () => {
  const classes = useStyles();
  const [hide, setHide] = useState(true);

  const showPassword = () => { setHide(!hide); };
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={2} />
        <Grid item xl={6} lg={6} md={6} sm={8} xs={8}>
          <Typography align="center" variant="h3" className={classes.title}> WELCOME TO SPOOKY! </Typography>
          <Typography align="center" variant="h3" className={classes.title1}> Sign In to your Account </Typography>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={2} />
      </Grid>
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={4} lg={4} md={3} sm={1} xs={1} />
        <Grid item xl={4} lg={4} md={6} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
            <Grid item xl={8} lg={10} md={10} sm={10} xs={10} className={`${classes.boxContent} ${classes.topSpace}`}>
              <form
                noValidate
                autoComplete="off"
                id="adminForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <CustomTextField
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  variant="outlined"
                  color="#595959"
                  className="inputRounded"
                  InputProps={{ classes: { input: classes.input } }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Box className={`${classes.iconBox}`}>
                  <CustomTextField
                    id="password"
                    name="password"
                    placeholder="Password"
                    variant="outlined"
                    type={hide ? 'password' : 'text'}
                    className="inputRounded"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputProps={{
                      classes: {
                        input: classes.input3,
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                  <img
                    src={EyeIcon}
                    onClick={showPassword}
                    className={classes.logoImage}
                    alt="Spooky Action Labs"
                    loloading="lazy"
                  />
                </Box>
                <Typography align="center" variant="h3" className={classes.title2}> Forgot Password? </Typography>
                <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '30px' }}>
                  <Grid item xs={12} xl={12} md={12} style={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large" type="submit" className={classes.sendButton}>
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12} xl={12} md={12} style={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large" type="submit" className={classes.createBtn}>
                      Create a New Spooky Account
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={3} sm={1} xs={1} />
      </Grid>

    </Container>
  );
};

export default LoginForm;
