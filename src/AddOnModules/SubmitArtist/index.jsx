/* eslint-disable max-len */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
import {
  Button,
  CircularProgress,
  Container, Grid, MenuItem, TextField, Typography, Select, styled,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import '../../Modules/Home/Components/GetInTouch/customcss.css';
// import { getInTouchRequest } from '../../../../Store/Actions';
import SuccessModal from '../../Components/Modal/SuccessModal';
import { ReactComponent as ArrowDown } from '../../Assets/Svg/Down.svg';

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

const SubmitArtist = () => {
  const [successModal, setSuccessModal] = useState(false);
  const classes = useStyles();
  //   const dispatch = useDispatch();

  // Hardcoded, Remove it later.
  const loader = false;

  //   const loader = useSelector((state) => state.LandingPage.loader);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter company name')
      .required('Company is required'),
    art: yup
      .string('Select art')
      .required('Art is required'),
    message: yup
      .string('Enter message')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      url: '',
      art: 'Art',
      message: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
    //   dispatch(getInTouchRequest({ values, getInTouchRequestSuccess: getInTouchRequestSuccess }));
      console.log(values);
    },
  });

  //   const submitArtistSuccess = () => {
  //     setSuccessModal(true);
  //     formik.resetForm();
  //   };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginBottom: '5vh' }}>
        <Grid item xl={3} lg={3} md={3} sm={1} xs={1} />
        <Grid item xl={6} lg={6} md={6} sm={10} xs={10} className={classes.boxGrid}>
          <Grid container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography align="center" variant="h3" className={classes.title}> Are you an Artist? </Typography>
                <Typography align="center" variant="h3" className={classes.title1}> Be in touch with us so we can... </Typography>
              </Grid>
            </Grid>
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
                <CustomTextField
                  id="url"
                  name="url"
                  placeholder="Portfolio/URL"
                  variant="outlined"
                  className="inputRounded"
                  value={formik.values.url}
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
                  error={formik.touched.url && Boolean(formik.errors.url)}
                  helperText={formik.touched.url && formik.errors.url}
                />
                <Select
                  id="art"
                  name="art"
                  placeholder="Type of Art *"
                  variant="outlined"
                  select
                  defaultValue="Art"
                  MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                  value={formik.values.art}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  inputProps={{ classes: { input: classes.input1, icon: classes.icon1 } }}
                  IconComponent={ArrowDown}
                  className={classes.input1}
                  error={formik.touched.art && Boolean(formik.errors.art)}
                  helperText={formik.touched.art && formik.errors.art}
                >
                  <MenuItem value="Art">
                    Art1
                  </MenuItem>
                  <MenuItem value="Art2">
                    Art2
                  </MenuItem>
                  <MenuItem value="Art3">
                    Art3
                  </MenuItem>
                  <MenuItem value="Art4">
                    Art1
                  </MenuItem>
                </Select>
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
        <Grid item xl={3} lg={3} md={3} sm={1} xs={1} />
      </Grid>

    </Container>
  );
};

export default SubmitArtist;
