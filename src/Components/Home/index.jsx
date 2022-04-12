/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import {
  Container, Grid, Typography, Box,
} from '@material-ui/core';
import React from 'react';
import Logo from '../../Assets/Images/footerLogo.png';
import Icon1 from '../../Assets/Images/footer1.png';
import { ReactComponent as Icon2 } from '../../Assets/Svg/footer3.svg';
import { ReactComponent as Icon3 } from '../../Assets/Svg/footer4.svg';
import { ReactComponent as Icon4 } from '../../Assets/Svg/footer5.svg';
import { ReactComponent as Icon5 } from '../../Assets/Svg/footer6.svg';

import { useStyles } from './styles';
import './style.scss';
// import './responsive.css';

const Footer = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ borderBottom: '1px solid black' }}>
        <Grid item xl={7} lg={7} md={7} sm={7} xs={7} style={{ marginTop: '0vh', borderRight: '1px solid black', padding: '20px' }}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <Box style={{ padding: '10px 30px' }}>
                <img src={Logo} alt="logo" className={classes.imagehover} />
              </Box>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className={classes.linkBox}>
              <table className="linkTable">
                <tr>
                  <td className={classes.fontColor}>Explore</td>
                </tr>
                <tr>
                  <td className={classes.fontColor}>Blog</td>
                </tr>
                <tr>
                  <td className={classes.fontColor}>About</td>
                </tr>
                <tr>
                  <td className={classes.fontColor}>Community Guidelines</td>
                </tr>
                <tr>
                  <td className={classes.fontColor}>Careers</td>
                </tr>
                <tr>
                  <td className={classes.fontColor}>Help</td>
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
                <input type="text" name="" placeholder="email" className="form-control" />
                <svg className="email-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.67578 5.46973L8.10659 8.74133C8.45968 9.00205 8.9415 9.00205 9.29459 8.74134L13.7254 5.46973" stroke="#39425D" strokeLinecap="round" />
                  <rect x="0.825928" y="1.02246" width="16.5868" height="13.8408" rx="4.5" stroke="#39425D" />
                </svg>
                <button type="submit" className="btn subscribe_btn">Subscribe</button>
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
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{ marginTop: '1vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Icon2 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
          <Icon3 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
          <Icon4 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
          <Icon5 />
          <Typography variant="heading1" style={{ margin: '0px 10px' }} />
        </Grid>
      </Grid>
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
