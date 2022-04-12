/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { menuStyles } from './MobileMenuStyles';
import LogoSmall from '../../../../Assets/Images/LandingPage/Header/logoHomeMedium1.jpg';
import Icon1 from '../../../../Assets/Images/LandingPage/Header/discordMedium.jpg';
import Icon2 from '../../../../Assets/Images/LandingPage/Header/twitterMedium.jpg';
import Icon3 from '../../../../Assets/Images/LandingPage/Header/layerMedium.jpg';
import Icon4 from '../../../../Assets/Images/LandingPage/Header/closeBtn.jpg';

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ onClose, disconnect, walletId, handleDisconnect, handleWalletClick }) => {
  const classes = menuStyles();
  const links = ['/about', '/curator', '/contact'];
  const navigate = useNavigate();
  const navigateToPage = (index) => {
    navigate(`${links[index]}`, { state: { index } });
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.displayFlex}>
        <Box className={classes.sectionMobile} style={{ position: 'absolute', top: '45px', right: '30px' }} onClick={onClose}>
          <img
            src={Icon4}
            className={classes.closeBtn}
            alt="CloseBtn"
            loading="lazy"
          />
        </Box>
        <Box className={classes.sectionMobile}>
          <img
            src={LogoSmall}
            className={classes.logoImageSmall}
            alt="Spooky Action Labs"
            loading="lazy"
          />
        </Box>
        <Box>
          <IconButton disableRipple size="small" color="inherit" className={classes.noHover}>
            <Typography disableRipple className={classes.activeLink}>Early Access</Typography>
          </IconButton>
        </Box>
        <Box className={classes.displayFlex} style={{ marginTop: '30px' }}>
          {['About', 'Curators', 'Contact'].map((text, index) => (
            <IconButton onClick={() => navigateToPage(index)} disableRipple size="small" className={classes.noHover} color="inherit">
              <Typography disableRipple className={classes.navLink}>{text}</Typography>
            </IconButton>
          ))}
        </Box>
        <Box>
          { disconnect ? (
            <Box
              className={classes.disconnectButton}
              onClick={handleDisconnect}
            >
              <Box className={classes.displayFlex2}>
                <Typography className={classes.disconnectHeader1}>
                  {walletId}
                </Typography>
                <Typography className={classes.disconnectHeader2}>
                  Disconnect
                </Typography>
              </Box>
              <img
                src={Icon3}
                className={classes.icon3Image}
                alt="Icon2"
                loading="lazy"
              />
            </Box>
          ) : (
            <Button
              onClick={(e) => {
                onClose();
                handleWalletClick(e);
              }}
              className={classes.connectButton}
            >
              <Typography style={{ fontSize: '17px', color: 'black', marginRight: '15px' }}>
                Connect
              </Typography>
              <img
                src={Icon3}
                alt="Icon2"
                loading="lazy"
              />
            </Button>
          )}
        </Box>
        <Box className={classes.displayFlex1} style={{ marginTop: '80px' }}>
          <Box className={classes.icon1}>
            <img
              src={Icon1}
              alt="Icon2"
              style={{ marginLeft: '0px', marginTop: '2px' }}
              loading="lazy"
            />
          </Box>
          <Box className={classes.icon1}>
            <img
              src={Icon2}
              style={{ marginLeft: '3px', marginTop: '2px' }}
              alt="Icon2"
              loading="lazy"
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default MobileMenu;
