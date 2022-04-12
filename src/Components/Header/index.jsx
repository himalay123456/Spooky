/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { useWeb3React } from '@web3-react/core';
import { headerStyles } from './HeaderStyles';
import Logo from '../../Assets/Images/LandingPage/Header/logoImage1.png';
import LogoSmall from '../../Assets/Images/LandingPage/Header/logoHomeSmall1.jpg';
import Icon1 from '../../Assets/Images/LandingPage/Header/discord.jpg';
import Icon2 from '../../Assets/Images/LandingPage/Header/twitter.jpg';
import Icon3 from '../../Assets/Images/LandingPage/Header/layer.jpg';
import Icon4 from '../../Assets/Images/LandingPage/Header/layerSmall.jpg';
import Icon5 from '../../Assets/Images/LandingPage/Header/menu.jpg';
import Icon6 from '../../Assets/Images/LandingPage/Header/instagram.png';
import Icon7 from '../../Assets/Images/LandingPage/Header/walletMenu2.jpg';
import { ReactComponent as Icon8 } from '../../Assets/Images/LandingPage/Header/walletMenu1.svg';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Wallet from './Components/Wallet';
import Dropdown from './Components/Dropdown';
import WalletDropdown from './Components/WalletDropdown';
import CreateProfileVerificationModal from '../Modal/CreateProfileEmailVerificationModal';
import CreateProfileOTPVerificationModal from '../Modal/CreateProfileOTPVerificationModal';
import SuccessModal from '../Modal/SuccessModal';
import { createUserProfile, openWalletPopUp } from '../../Store/Actions';

export default function PrimarySearchAppBar() {
  const classes = headerStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [openEmailVerification, setOpenEmailVerification] = React.useState(false);
  const [openOTPVerification, setOpenOTPVerification] = React.useState(false);
  const [successModal, openSuccessModal] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [email, passEmail] = React.useState('');
  const links = ['/', '/about', '/curator'];
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(0);
  const { openWalletPopUp: isOpenWalletPopUp } = useSelector((reducerState) => reducerState.NFT);
  const { account, active: walletActive, deactivate } = useWeb3React();
  React.useEffect(() => {
    if (state != null) {
      if (state.index) {
        setActive(state.index);
      }
    }
  }, []);

  React.useEffect(() => {
    if (isOpenWalletPopUp) {
      setAnchorEl1(true);
      dispatch(openWalletPopUp(false));
    }
  }, [isOpenWalletPopUp]);

  const handleCreateProfileFail = () => {
    // setLoader(false);
  };

  const handleCreateProfileSuccess = ({ isEmailVerified }) => {
    if (!isEmailVerified) setOpenEmailVerification(true);
    // setLoader(false);
  };

  React.useEffect(() => {
    if (account && walletActive) {
      dispatch(createUserProfile({ walletAddress: account, handleFail: handleCreateProfileFail, handleSuccess: handleCreateProfileSuccess }));
    }
    setAnchorEl3(null);
  }, [account]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleWalletClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleDisconnectWalletClick = () => {
    console.log('Wallet Disconnected');
    localStorage.setItem('shouldEagerConnect', false);
    deactivate();
  };

  const handleDropdownClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleWalletDropdownClick = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWalletDropdownClose = () => {
    setAnchorEl3(null);
  };

  const handleWalletClose = () => {
    setAnchorEl1(null);
  };

  const handleDropdownClose = () => {
    setAnchorEl2(null);
  };

  const handleOTPSuccess = (message) => {
    setOpenOTPVerification(false);
    openSuccessModal(true);
    // setTimeout(() => {
    //   openSuccessModal(false);
    // }, 2000);
    setSuccessMessage(message);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? 'simple-popover' : undefined;
  const id1 = open1 ? 'simple-popover' : undefined;
  const id2 = open2 ? 'simple-popover' : undefined;
  const id3 = open3 ? 'simple-popover' : undefined;

  const navigateToPage = (event, index) => {
    if (index !== 2) {
      navigate(`${links[index]}`, { state: { index } });
      setActive(index);
    } else {
      handleDropdownClick(event);
    }
  };

  console.log('WALLET', account, walletActive);
  return (
    <Box>
      <Container
        maxWidth={false}
        disableGutters
        className={classes.app}
      >
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid container className={classes.displayFlex}>
              <Grid item xl={8} lg={8} md={6} sm={6} xs={6} className={classes.displayFlex}>
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                  <IconButton
                    disableRipple
                    className={classes.noHover}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <Box className={classes.sectionDesktop}>
                      <Link to="/">
                        <img
                          src={Logo}
                          className={classes.logoImage}
                          alt="Spooky Action Labs"
                          loading="lazy"
                        />
                      </Link>
                    </Box>
                    <Box className={classes.sectionMobile}>
                      <Link to="/">
                        <img
                          src={LogoSmall}
                          className={classes.logoImageSmall}
                          alt="Spooky Action Labs"
                          loading="lazy"
                        />
                      </Link>
                    </Box>
                  </IconButton>
                </Grid>
                <Grid item xl={9} lg={9} md={8} sm={6} xs={6}>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ marginLeft: '10px' }}>
                    {['Early Access', 'About', 'Curators'].map((text, index) => {
                      if (active === index) {
                        return (
                          <IconButton onClick={(e) => navigateToPage(e, index)} disableRipple size="small" color="inherit" className={classes.noHover}>
                            <Typography disableRipple className={classes.activeLink}>{text}</Typography>
                          </IconButton>
                        );
                      }
                      return (
                        <IconButton onClick={(e) => navigateToPage(e, index)} disableRipple size="small" className={classes.noHover} color="inherit">
                          <Typography disableRipple className={classes.navLink}>{text}</Typography>
                        </IconButton>
                      );
                    })}
                  </Box>
                  <Box className={classes.sectionMobile}>
                    <Link to="/" style={{ padding: 0, textDecoration: 'none', marginTop: '5px' }}>
                      <IconButton disableRipple size="small" color="inherit" className={classes.noHover}>
                        <Typography disableRipple className={classes.activeLink1}>Early Access</Typography>
                      </IconButton>
                    </Link>
                  </Box>
                  <Popover
                    id={id2}
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleDropdownClose}
                    classes={{
                      root: classes.popupRoot2,
                      paper: classes.popupPaper2,
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <Dropdown onClose={handleClose} />
                  </Popover>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ marginLeft: '20px' }} className={classes.displayFlex1}>
                    <Button className={`${classes.sectionDesktop} ${classes.submitBtn}`}>
                      Submit
                    </Button>
                    <a href="https://discord.gg/rAAzCEBq">
                      <Box className={`${classes.sectionDesktop} ${classes.icon1}`}>
                        <img
                          src={Icon1}
                          alt="Icon1"
                          style={{ marginLeft: '-1px' }}
                          loading="lazy"
                        />
                      </Box>
                    </a>
                    <a href="https://twitter.com/PolyOneNFT">
                      <Box className={`${classes.sectionDesktop} ${classes.icon1}`}>
                        <img
                          src={Icon2}
                          alt="Icon2"
                          loading="lazy"
                        />
                      </Box>
                    </a>
                    <a href="https://www.instagram.com/polyonenft/?hl=en">
                      <Box className={`${classes.sectionDesktop} ${classes.icon1}`}>
                        <img
                          src={Icon6}
                          alt="Icon1"
                          style={{ marginLeft: '-1px' }}
                          loading="lazy"
                        />
                      </Box>
                    </a>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.sectionDesktop}>
                      { account && walletActive ? (
                        <>
                          <Box
                            className={classes.disconnectButton}
                            onClick={handleWalletDropdownClick}
                          >
                            <Icon8 />
                            <Typography className={classes.disconnectHeader1}>
                              {account && `${account.slice(0, 4)}...${account.slice(-4)}`}
                            </Typography>
                            <img
                              src={Icon7}
                              className={classes.icon3Image}
                              alt="Icon2"
                              loading="lazy"
                            />
                          </Box>
                          <Popover
                            id={id3}
                            open={open3}
                            anchorEl={anchorEl3}
                            onClose={handleWalletDropdownClose}
                            classes={{
                              root: classes.popupRoot3,
                              paper: classes.popupPaper3,
                            }}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                            }}
                          >
                            <WalletDropdown handleDisconnectWalletClick={handleDisconnectWalletClick} onClose={handleWalletDropdownClose} />
                          </Popover>

                        </>
                      ) : (
                        <Button
                          className={classes.connectButton}
                          onClick={handleWalletClick}
                        >
                          <Typography style={{ fontSize: '13px', color: 'black', marginRight: '10px', fontFamily: 'Tomica', fontWeight: '400', lineHeight: '15px' }}>
                            Connect Wallet
                          </Typography>
                          <img
                            src={Icon3}
                            alt="Icon2"
                            loading="lazy"
                          />
                        </Button>
                      ) }
                      <Box className={classes.menuButton1} sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleClick}>
                        <img
                          src={Icon5}
                          alt="Icon2"
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                    <Box className={`${classes.sectionMobile} ${classes.displayFlex}`}>
                      { account && walletActive ? (
                        <Box
                          className={classes.disconnectButton}
                          onClick={handleDisconnectWalletClick}
                        >
                          <Box className={classes.displayFlex2}>
                            <Typography className={classes.disconnectHeader1}>
                              {account && `${account.slice(0, 4)}...${account.slice(-4)}`}
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
                          className={classes.connectButton1}
                          onClick={handleWalletClick}
                        >
                          <Typography style={{ fontSize: '10px', fontFamily: 'Tomica', color: 'black', marginRight: '5px', fontWeight: '400', lineHeight: '9px' }}>
                            Connect Wallet
                          </Typography>
                          <img
                            src={Icon4}
                            alt="Icon2"
                            loading="lazy"
                          />
                        </Button>
                      ) }
                      <Popover
                        id={id1}
                        open={open1}
                        anchorEl={anchorEl1}
                        onClose={handleWalletClose}
                        classes={{
                          root: classes.popupRoot1,
                          paper: classes.popupPaper1,
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                      >
                        <Wallet onClose={handleClose} setOpenEmailVerification={setOpenEmailVerification} handleWalletClose={handleWalletClose} />
                      </Popover>
                      <Box className={classes.menuButton} onClick={handleClick}>
                        <img
                          src={Icon5}
                          alt="Icon2"
                          loading="lazy"
                        />
                      </Box>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        classes={{
                          root: classes.popupRoot,
                          paper: classes.popupPaper,
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                      >
                        <MobileMenu onClose={handleClose} handleWalletClick={handleWalletClick} disconnect={walletActive} walletId={account && `${account.slice(0, 4)}...${account.slice(-4)}`} handleDisconnect={handleDisconnectWalletClick} />
                      </Popover>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          {successModal && <SuccessModal open={successModal} handleClose={() => openSuccessModal(false)} heading="Verification" subtitle={successMessage} />}
          {openOTPVerification && <CreateProfileOTPVerificationModal open={openOTPVerification} heading="User Verification" button1="Verify" button2="Verify" handleClose={() => setOpenOTPVerification(false)} email={email} onSuccess={handleOTPSuccess} /> }
          {openEmailVerification && <CreateProfileVerificationModal open={openEmailVerification} heading="User Verification" button1="Verify" button2="Verify" handleClose={() => setOpenEmailVerification(false)} passEmail={passEmail} handleOpenOTP={() => setOpenOTPVerification(true)} />}
        </AppBar>
      </Container>
    </Box>
  );
}
