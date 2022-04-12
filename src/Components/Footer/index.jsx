/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import {
  Container, Grid, Typography, Box, styled, TextField, InputAdornment, SvgIcon, CircularProgress,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Logo from '../../Assets/Images/footerLogo.png';
import Icon1 from '../../Assets/Images/footer1.png';
import { ReactComponent as Icon2 } from '../../Assets/Svg/footer3.svg';
import { ReactComponent as Icon3 } from '../../Assets/Svg/footer4.svg';
import { ReactComponent as Icon4 } from '../../Assets/Svg/footer5.svg';
import { ReactComponent as Icon5 } from '../../Assets/Svg/footer6.svg';
// import { ReactComponent as EmailIcon } from '../../Assets/Svg/emailicon.svg';
import { useStyles } from './styles';
import './style.scss';
import SuccessModal from '../Modal/SuccessModal';
import { subscribeNewsLetter } from '../../Store/Actions';
// import './responsive.css';

function EmailIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.819122 4.06547C0.529106 6.39135 0.542033 9.07386 0.945595 11.3903C1.16889 12.672 2.38082 13.6547 3.87682 13.7669L5.44028 13.8842C8.7003 14.1288 11.9788 14.1288 15.2388 13.8842L16.8023 13.7669C18.2983 13.6547 19.5102 12.672 19.7335 11.3903C20.137 9.07385 20.15 6.3915 19.86 4.06561C19.8225 3.79596 19.7803 3.52668 19.7335 3.25784C19.5102 1.97611 18.2983 0.99349 16.8023 0.881241L15.2388 0.763931C11.9788 0.519323 8.7003 0.519323 5.44028 0.763931L3.87682 0.881241C2.38082 0.99349 1.16889 1.97611 0.945595 3.25784C0.898768 3.52663 0.856611 3.79587 0.819122 4.06547ZM5.57476 2.09926C8.7453 1.86137 11.9338 1.86137 15.1043 2.09926L16.6678 2.21657C17.4487 2.27516 18.0813 2.78809 18.1979 3.45716C18.21 3.52664 18.2218 3.59616 18.2332 3.6657L12.4762 6.42636C11.1474 7.06358 9.53161 7.06358 8.20278 6.42636L2.44586 3.66573C2.45731 3.59618 2.46909 3.52665 2.48119 3.45716C2.59776 2.78809 3.23038 2.27516 4.0113 2.21657L5.57476 2.09926ZM18.4232 5.1079C18.624 7.13431 18.5489 9.176 18.1979 11.191C18.0813 11.86 17.4487 12.373 16.6678 12.4316L15.1043 12.5489C11.9338 12.7868 8.7453 12.7868 5.57476 12.5489L4.0113 12.4316C3.23039 12.373 2.59776 11.86 2.48119 11.191C2.13015 9.17601 2.05504 7.13434 2.25584 5.10794L7.44864 7.59805C9.24647 8.46016 11.4325 8.46017 13.2304 7.59805L18.4232 5.1079Z" fill="#C4C4C4" />
    </SvgIcon>
  );
}

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

const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [successModal, setSuccessModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });
  const onSubscribeSuccess = () => {
    setLoader(false);
    setSuccessModal(true);
  };
  const onSubscribeFail = (value) => {
    setLoader(false);
    setErrorMessage(value);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log('values', values);
      setErrorMessage('');
      setLoader(true);
      dispatch(subscribeNewsLetter({ email: values.email, onSuccessHandler: onSubscribeSuccess, onFailHandler: onSubscribeFail }));
    },
  });
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ borderBottom: '1px solid black' }} className="mainFooter">
        <Grid item xl={7} lg={7} md={7} sm={7} xs={7} style={{ marginTop: '0vh', borderRight: '1px solid black', padding: '20px' }}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <Box style={{ padding: '10px 30px' }}>
                <img src={Logo} alt="logo" className={classes.imagehover} />
              </Box>
              <Box style={{ marginTop: '1vh', display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
                <a href="https://discord.gg/rAAzCEBq">
                  <Icon2 />
                </a>
                <Typography variant="heading1" style={{ margin: '0px 10px' }} />
                <a href="https://twitter.com/PolyOneNFT">
                  <Icon3 />
                </a>
                <Typography variant="heading1" style={{ margin: '0px 10px' }} />
                <a href="https://www.instagram.com/polyonenft/?hl=en">
                  <Icon4 />
                </a>
                <Typography variant="heading1" style={{ margin: '0px 10px' }} />
              </Box>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className={classes.linkBox}>
              <table className="linkTable">
                <tr>
                  <td className="fontColor">Explore</td>
                </tr>
                <tr>
                  <td className="fontColor">Blog</td>
                </tr>
                <tr>
                  <td className="fontColor">About</td>
                </tr>
                <tr>
                  <td className="fontColor">Community Guidelines</td>
                </tr>
                <tr>
                  <td className="fontColor">Careers</td>
                </tr>
                <tr>
                  <td className="fontColor">Help</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={5} style={{ marginTop: '4vh', padding: '20px 40px' }}>
          <Grid container>
            <Typography variant="heading1" className={classes.header}>SUBSCRIBE </Typography>
            <Typography variant="heading1" className={classes.subheader}>Subscribe to get our latest Drops, Fresh news  & Artists features... </Typography>
          </Grid>
          <div className="subscribe_section m-hide">
            <div className="subscribe_section_content">
              <div className="input_group">
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
                    placeholder="Enter Email"
                    variant="outlined"
                    className="inputRounded"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    startAdornment={(
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={(formik.touched.email && formik.errors.email) || errorMessage}
                  />
                  <button type="submit" className="btn subscribe_btn">
                    { loader && <CircularProgress size={20} style={{ color: 'black' }} />}
                    { !loader && 'Subscribe' }
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container style={{ paddingBottom: '0vh' }}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{ marginTop: '1vh', display: 'flex', padding: '13px 20px', alignItems: 'center' }}>
          <img src={Icon1} alt="logo" className={classes.image1} />
          <Typography variant="heading1" className={classes.header2}>Terms of Service</Typography>
          <Typography variant="heading1" className={classes.header2}>Privacy</Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{ marginTop: '1vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '15px' }}>
          {/* <Icon2 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
          <Icon3 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
          <Icon4 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} /> */}
          <Box style={{ cursor: 'pointer' }}>
            <Icon5 />
          </Box>
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
        </Grid>
      </Grid>
      <SuccessModal open={successModal} handleClose={() => setSuccessModal(false)} heading="Subscribe" subtitle="You have subscribed to our newsletter successfully" />
    </Container>
  );
};

export default Footer;
// <Grid container>
// <Grid item xl={0} lg={0} md={0} sm={0} xs={0} />
// <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>

// </Grid>
//             <Grid item xl={4} lg={4} md={4} sm={1} xs={1} />
//           </Grid>
