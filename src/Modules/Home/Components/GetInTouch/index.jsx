/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
import {
  Button,
  CircularProgress,
  Container, Grid, MenuItem, TextField, Typography, Select, styled, InputLabel, Box,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import './customcss.scss';
import { getInTouchRequest } from '../../../../Store/Actions';
import SuccessModal from '../../../../Components/Modal/SuccessModal';
import { ReactComponent as ArrowDown } from '../../../../Assets/Svg/Down.svg';

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

const GetInTouch = () => {
  const [successModal, setSuccessModal] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.LandingPage.loader);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter company name'),
    // .required('Company is required'),
    subject: yup
      .string('Select subject')
      .required('Subject is required'),
    message: yup
      .string('Enter message')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      dispatch(getInTouchRequest({ values, getInTouchRequestSuccess: getInTouchRequestSuccess }));
    },
  });

  const getInTouchRequestSuccess = () => {
    setSuccessModal(true);
    formik.resetForm();
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={2} />
        <Grid item xl={6} lg={6} md={6} sm={8} xs={8}>
          <Typography align="center" variant="h3" className={classes.title}> GET IN TOUCH! </Typography>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={2} />
      </Grid>
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={4} lg={4} md={4} sm={1} xs={1} />
        <Grid item xl={4} lg={4} md={4} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
            <Grid item xl={8} lg={10} md={10} sm={10} xs={10} className={`${classes.boxContent} ${classes.topSpace} GetInTouch`}>
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
                  placeholder="Email Address *"
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
                <CustomTextField
                  id="name"
                  name="name"
                  placeholder="Name/Company"
                  variant="outlined"
                  className="inputRounded"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    classes: {
                      input: classes.input,
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Box style={{ position: 'relative' }}>
                  { formik.values.subject === '' && (
                  <InputLabel className={classes.labelTag}>Subject *</InputLabel>
                  )}
                  <Select
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    variant="outlined"
                  // select
                  // defaultValue="Subject"
                    MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputProps={{ classes: { input: classes.input1, icon: classes.icon1 } }}
                    IconComponent={ArrowDown}
                    className={classes.input1}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                  >
                    <MenuItem value="Subject">
                      Subject1
                    </MenuItem>
                    <MenuItem value="Subject2">
                      Subject2
                    </MenuItem>
                    <MenuItem value="Subject3">
                      Subject3
                    </MenuItem>
                    <MenuItem value="Subject4">
                      Subject1
                    </MenuItem>
                  </Select>
                </Box>
                <TextField
                  id="message"
                  name="message"
                  placeholder="Message *"
                  variant="outlined"
                  className="inputRounded inputArea"
                  multiline
                  rows={8}
                  InputProps={{
                    classes: {
                      input: classes.input2,
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
                <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '30px' }}>
                  <Grid item xs={12} xl={6} md={6}>
                    <Typography variant="subtitle1" style={{ opacity: '0.7' }} className={classes.subTitle}>Lorem Ipsum tagernat matum obessance de natale.</Typography>
                  </Grid>
                  <Grid item xs={12} xl={6} md={6} style={{ textAlign: 'end' }}>
                    <Button variant="contained" size="large" type="submit" className={classes.sendButton}>
                      { loader && <CircularProgress size={20} style={{ color: 'black' }} />}
                      { !loader && 'Send' }
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xl={2} lg={1} md={1} sm={1} xs={1} className={classes.topSpace} />
          </Grid>
        </Grid>
        <SuccessModal open={successModal} handleClose={() => setSuccessModal(false)} heading="Contact Us" subtitle="Thank you for contacting Us" />
        <Grid item xl={4} lg={4} md={4} sm={1} xs={1} />
      </Grid>

    </Container>
  );
};

export default GetInTouch;
