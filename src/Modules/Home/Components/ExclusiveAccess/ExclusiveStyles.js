/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../../../Assets/Images/LandingPage/exclusiveBackground.jpg';
import Image1 from '../../../../Assets/Images/LandingPage/exclusiveBackground1.jpg';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '750px',
    // marginTop: '120px',
    // borderRadius: '60px 60px 0px 0px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '100px 100px 150px 180px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '100px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
      paddingBottom: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
      backgroundImage: `url(${Image1})`,
      minHeight: '70vh',
      maxHeight: '90vh',
      height: 'auto',
      padding: '90px 15px 40px 30px',
      paddingBottom: '60px',
    },
  },
  displayFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header1: {
    fontSize: '18px',
    fontFamily: 'Tomica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      lineBreak: 'auto !important',
    },
  },
  header2: {
    fontSize: '40px',
    color: '#181E4B',
    fontFamily: 'TomicaBold',
    marginTop: '0px',
    // fontWeight: 'light',
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
      lineHeight: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
  },
  header3: {
    fontSize: '15px',
    marginTop: '20px',
    fontWeight: '450',
    lineHeight: '24px',
    fontFamily: 'Helvetica',
    color: '#5E6282',
    width: '85%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      minWidth: '70%',
      maxWidth: '90%',
      width: 'auto',
      lineHeight: '20px',
    },
  },
  card1: {
    width: '289px',
    height: '377px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #000000',
    boxShadow: '(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481))',
    borderRadius: '30px 0px',
    [theme.breakpoints.down('xs')]: {
      width: '140px',
      height: '180px',
    },
  },
  inner1: {
    height: '75%',
  },
  inner2: {
    position: 'relative',
    height: '107px',
    background: 'rgba(255, 255, 255, 0.91)',
    marginTop: '-10px',
    width: '100%',
    borderRadius: '0px 0px 30px 0px',
    borderTop: '1px solid #000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconBox: {
    position: 'absolute',
    right: '3px',
    [theme.breakpoints.down('xs')]: {
      right: '0px',
    },
  },
  heartIcon: {
    position: 'absolute',
    right: '15px',
    top: '-39px',
    [theme.breakpoints.down('xs')]: {
      top: '-20px',
      right: '10px',
    },
  },
  availableHead: {
    position: 'absolute',
    right: '10px',
    bottom: '-35px',
    [theme.breakpoints.down('xs')]: {
      bottom: '-20px',
      right: '10px',
    },
  },
  availableHeader: {
    fontSize: '13px',
    color: 'black',
    fontFamily: 'TomicaBold',
    // fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '8px',
    },
  },

  header4: {
    letterSpacing: '0.065em',
    fontSize: '14px',
    color: 'black',
    lineHeight: '18px',
    textAlign: 'center',
    fontFamily: 'TomicaBold',
    // fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '8px',
      lineHeight: '13px',
    },
  },
  header5: {
    fontSize: '12px',
    marginTop: '5px',
    color: '#5E6282',
    fontFamily: 'Tomica',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  logoImage: {
    width: '289px',
    height: '377px',
    borderRadius: '30px 0px',
  },
  logoImage1: {
    width: '140px',
    height: '180px',
    borderRadius: '30px 0px',
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
  // '@media screen and (max-width: 320px)': {
  //   card1: {
  //     right: '10%',
  //     top: '25%',
  //     width: '110px',
  //     height: '180px',
  //   },
  //   header4: {
  //     letterSpacing: '0.065em',
  //     fontSize: '9px',
  //     color: '#5E6282',
  //     fontWeight: 'bold',
  //   },
  //   header5: {
  //     fontSize: '9px',
  //   },
  //   mainContainer: {
  //     paddingLeft: '20px',
  //   },
  // },
}));
