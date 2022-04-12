/* eslint-disable import/prefer-default-export */
import { makeStyles, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    // values: {
    //   xs: 0,
    //   sm: 900,
    //   md: 900,
    //   lg: 1200,
    //   xl: 1536,
    // },
  },
});
export const CarouselStyles = makeStyles(() => ({
  mainComponent: {
    position: 'relative',
    marginTop: '80px',
    height: '600px',
    boxSizing: 'border-box',
    background: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    [theme.breakpoints.down('xs')]: {
      marginTop: '60px',
      height: '555px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
      height: '555px',
    },
  },
  imageComponent: {
    height: '600px',
    boxSizing: 'border-box',
    width: '100%',
    top: 0,
  },
  imageComponent1: {
    boxSizing: 'border-box',
    width: '100%',
    top: 0,
  },
  mobileImage: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '280px',
      width: '100%',
    },
  },
  detailsComponent: {
    height: '600px',
    top: 0,
  },
  headerBox: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    [theme.breakpoints.down('xs')]: {
      top: '6%',
    },
  },
  footerBox: {
    position: 'absolute',
    display: 'flex',
    bottom: '8%',
    left: '10%',
    [theme.breakpoints.down('xs')]: {
      top: '38%',
      left: '5%',
    },
  },
  navButtonProps: {
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      marginTop: '165px',
    },
  },
  userImage: {
    height: '62px',
    width: '62px',
    borderRadius: '50%',
    border: '1px solid #424242',
  },
  button: {
    width: '300px',
    marginTop: '50px',
    height: '70px',
    background: '#FFD600',
    borderRadius: '400px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '250px',
      marginLeft: '-5px',
      marginTop: '20px',
      height: '60px',
    },
  },
  buttonText: {
    fontSize: '24px',
    color: 'black',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  button1: {
    width: '115px',
    marginLeft: '30px',
    marginTop: '10px',
    height: '34px',
    background: 'transparent',
    borderRadius: '5px',
    border: '1px solid #343434',
    textAlign: 'center',
  },
  buttonText1: {
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '40px',
    },
  },
  header1: {
    fontSize: '64px',
    fontWeight: '450',
    lineHeight: '72px',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      lineHeight: '40px',
    },
  },
  header2: {
    fontSize: '16px',
    fontWeight: '450',
    color: 'white',
    marginLeft: '30px',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '15px',
    // },
  },
  header3: {
    fontSize: '16px',
    fontWeight: '550',
    color: 'white',
    marginLeft: '30px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  displayFlex: {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  '@media screen and (max-width: 400px)': {
    header2: {
      fontSize: '14px',
    },
    header3: {
      fontSize: '14px',
    },
    buttonText1: {
      fontSize: '14px',
    },
    button1: {
      width: '115px',
      marginLeft: '10px',
    },
    displayFlex: {
      marginLeft: '-10px',
      minWidth: '120px',
      maxWidth: '130px',
    },
    userImage: {
      height: '50px',
      width: '50px',
    },
    mainComponent: {
      height: '520px',
    },
  },
}));
