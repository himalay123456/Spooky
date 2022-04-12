/* eslint-disable no-shadow */
import { makeStyles, styled, createTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const theme = createTheme({
  fontFamily: 'Tomica',
  breakpoints: {
    // values: {
    //   xs: 0,
    //   sm: 500,
    //   md: 1100,
    //   lg: 1200,
    //   xl: 1536,
    // },
  },
});

const headerStyles = makeStyles(() => ({
  appBar: {
    height: '85px',
    width: '100%',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(9px)',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '80px',
      width: '100%',
    },
  },
  icon1: {
    width: '15px',
    height: '15px',
    background: '#FFFFFF',
    padding: '10px 10px',
    borderRadius: '50%',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '0px 8px',
  },
  connectButton: {
    width: '150px',
    height: '40px',
    border: '0.5px solid white',
    boxSizing: 'border-box',
    borderRadius: '100px',
    backgroundColor: 'transparent',
    marginLeft: '10px',
  },
  disconnectButton: {
    width: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    border: '0.5px solid #FFFFFF',
    filter: 'drop-shadow(0px 2px 2px #000000)',
    borderRadius: '100px',
    marginLeft: '20px',
    // cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      marginLeft: '0px',
    },
  },
  disconnectHeader1: {
    fontSize: '14px',
    color: 'black',
    cursor: 'pointer',
    marginLeft: '8px',
    marginRight: '10px',
    fontFamily: 'TomicaBold',
    opacity: 1,
  },
  disconnectHeader2: {
    fontSize: '12px',
    color: 'black',
    fontFamily: 'Tomica',
    cursor: 'pointer',
  },
  icon3Image: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  connectButton1: {
    width: '80px',
    height: '24px',
    border: '0.5px solid #212832',
    boxSizing: 'border-box',
    borderRadius: '100px',
    backgroundColor: 'white',
    marginLeft: '0px',
  },
  popupRoot: {
    top: '0px !important',
    left: '0px !important',
  },
  popupRoot1: {
    top: '10px !important',
    left: '0px !important',
  },
  popupPaper: {
    maxHeight: '100vh',
    maxWidth: '100vw',
    top: '0px !important',
    left: '0px !important',
  },
  popupPaper1: {
    width: '420px',
    height: '340px',
    top: '70px !important',
    right: '0px !important',
    padding: '20px',
    transition: '0.5s ease',
    boxSizing: 'border-box',
    background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    border: '0.5px solid #FFFFFF',
    boxShadow: '10px 10px 21px 2px rgba(0, 0, 0, 0.22)',
    borderRadius: '69px',
  },
  popupRoot2: {
    top: '0px !important',
    left: '-140px !important',
  },
  submitBtn: {
    width: '88px',
    height: '40px',
    border: '1px solid #00FF47',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '81px 100px 100px 100px',
    marginRight: '10px',
    fontFamily: 'Tomica',
    fontWeight: 'bold',
    fontSize: '11px',
    lineHeight: '11px',
  },
  popupPaper2: {
    width: '250px',
    height: '150px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 0px -3px rgb(0 0 0 / 20%), 0px 12px 2px 10px rgb(0 0 0 / -2%), 0px 13px 15px 5px rgb(0 0 0 / 5%)',
    borderRadius: '0px 0px 24px 24px',
  },
  popupRoot3: {
    top: '10px !important',
  },
  popupPaper3: {
    width: '230px',
    height: '120px',
    // padding: '20px',
    boxSizing: 'border-box',
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '30px',
  },
  menuButton: {
    width: '20px',
    height: '5px',
    boxShadow: 'none',
    margin: '0px -5px 0px 10px',
    marginTop: '-20px',
    backgroundColor: 'white',
  },
  menuButton1: {
    width: '20px',
    height: '5px',
    boxShadow: 'none',
    margin: '0px 20px 0px 10px',
    marginTop: '15px',
    backgroundColor: 'white',
  },
  displayFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  displayFlex1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  displayFlex2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    marginRight: '15px',
    justifyContent: 'flex-end',
  },
  logoImage: {
    height: '65px',
    width: '220px',
    marginLeft: '10px',
    backgroundColor: 'transparent',
    marginRight: '10px',
    marginTop: '7px',
  },
  logoImageSmall: {
    height: '25px',
    width: '94px',
    marginTop: '5px',
    marginLeft: '0px',
    marginRight: '-20px',
  },
  userIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    margin: '10px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  navLink: {
    fontWeight: '400',
    padding: '8px 8px',
    fontSize: '15px',
    color: 'black',
    margin: '0px 10px',
    marginTop: '3px',
    fontFamily: 'Tomica',
    textDecoration: 'none',
    lineHeight: '24px',
    borderRadius: '81px 100px 100px 100px',
    height: '40px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      padding: '8px 10px',
    },
  },
  activeLink: {
    fontStyle: 'normal',
    margin: '0px 20px',
    fontWeight: 'bold',
    marginTop: '3px',
    fontFamily: 'Tomica',
    padding: '5px 15px',
    fontSize: '10px',
    color: 'black',
    border: '1px solid #000000',
    background: 'linear-gradient(90deg, #00FF47 1.89%, #1CD9A0 100%);',
    textDecoration: 'none',
    lineHeight: '24px',
    borderRadius: '81px 100px 100px 100px',
    height: '38px',
    widt: '88px',
    boxSizing: 'border-box',
  },
  activeLink1: {
    fontStyle: 'normal',
    position: 'absolute',
    fontFamily: 'Tomica',
    left: '10px',
    fontWeight: '550',
    marginTop: '-10px',
    marginLeft: '5px',
    width: 'max-content',
    padding: '3px 10px',
    fontSize: '10px',
    color: 'black',
    backgroundColor: '#00FF47',
    textDecoration: 'none',
    lineHeight: '24px',
    borderRadius: '80px',
    height: '30px',
    boxSizing: 'border-box',
  },
  noHover: {
    fontFamily: 'Tomica',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  inputInput: {
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.3) !important',
      fontSize: '16px',
      opacity: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  '@media screen and (max-width: 350px)': {
    activeLink1: {
      left: '15px',
      marginTop: '-10px',
    },
  },
}));

const Search = styled('div')(() => ({
  position: 'relative',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  paddingLeft: '20px',
  width: 'auto',
  minWidth: '430px',
  maxWidth: '1000px',
  height: '44px',
  borderRadius: '400px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(3),
    width: '100%',
    height: '39px',
    borderRadius: '12px',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(3),
    width: '500px',
    minwidth: '500px',
    maxWidth: '800px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(3),
    minWidth: '200px',
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: theme.spacing(0, 0),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  height: '44px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '40px',
    transition: theme.transitions.create('width'),
    width: '400px',
    [theme.breakpoints.up('xl')]: {
      width: '490px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      width: '100%',
      height: '39px',
      marginTop: '-5px',
      paddingLeft: '0px',
    },
  },
}));

// eslint-disable-next-line object-curly-newline
export { headerStyles, Search, SearchIconWrapper, StyledInputBase };
