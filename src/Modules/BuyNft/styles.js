/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';
import Image from '../../Assets/Images/Buynft.jpg';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '150vh',
    marginTop: '120px',
    borderRadius: '60px 60px 0px 0px',
    width: '100%',
    padding: '80px 150px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    paddingBottom: '100px',
    backgroundImage: `url(${Image})`,
    borderBottom: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: '110px',
      height: 'auto',
      padding: '40px 0px 40px 40px',
      paddingBottom: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
      paddingBottom: '60px',
    },
  },
  imageBox: {
    width: '280px',
    height: '375px',
    margin: '0px 20px',
    backgroundRepeat: 'none',
    backgroundPosition: 'cover',
    border: '1px solid #000000',
    boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
    borderRadius: '30px 0px',
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    marginTop: '20px',
    position: 'relative',
  },
  header1a: {
    fontWeight: 600,
    fontFamily: 'Tomica',
    fontSize: '15px',
    color: 'black',
    marginLeft: '5px',
    textAlign: 'left',
  },
  header2a: {
    fontWeight: 600,
    fontFamily: 'Tomica',
    fontSize: '13px',
    color: '#5E6282',
    marginLeft: '5px',
    textAlign: 'left',
  },
  innerBox: {
    height: '95px',
    width: '280px',
    position: 'absolute',
    bottom: '0px',
    boxSizing: 'border-box',
    // background: 'rgba(255, 255, 255, 0.76)',
    borderBottomRightRadius: '30px',
  },
  imagePreview: {
    width: '280px',
    height: '270px',
    // background: 'rgba(255, 255, 255, 0.76)',
    borderRadius: '30px 0px 0px',
  },
  topBox: {
    position: 'absolute',
    top: '0px',
    display: 'flex',
    padding: '10px',
    paddingRight: '20px',
    boxSizing: 'border-box',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomBox: {
    position: 'absolute',
    bottom: '0px',
    display: 'flex',
    padding: '10px',
    boxSizing: 'border-box',
    paddingRight: '20px',
    width: '100%',
    justifyContent: 'space-between',
  },
  header1: {
    fontWeight: '700',
    width: '100%',
    fontSize: '18px',
    textAlign: 'center',
    fontFamily: 'Tomica',
    letterSpacing: '0.075em',
    textTransform: 'uppercase',
    color: 'black',
    marginTop: '20px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  header2: {
    fontWeight: '700',
    fontSize: '45px',
    fontFamily: 'Tomica',
    lineHeight: '55px',
    width: '40%',
    display: 'block',
    textAlign: 'center',
    color: 'black',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      width: '70%',
      lineHeight: '29px',
      marginTop: '20px',
    },
  },
  header3: {
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: 'Helvetica',
    lineHeight: '27px',
    color: '#5E6282',
    width: '60%',
    textAlign: 'center',
    marginTop: '-40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      width: '100%',
    },
  },
  iconBox2: {
    marginLeft: '220px',
    marginTop: '-30px',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
  },
  iconBox2a: {
    marginLeft: '30px',
    marginTop: '-30px',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
    },
  },
  iconBox6: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    width: '265px',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    // borderRadius: '24px',
    // backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
      height: '300px',
    },
  },
  inner1: {
    height: '80%',
  },
  inner2: {
    height: '20%',
    backgroundColor: 'white',
    marginTop: '-10px',
    width: '100%',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header4: {
    letterSpacing: '0.065em',
    fontSize: '14px',
    color: '#5E6282',
    fontFamily: 'TomicaBold',
    // fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '9px',
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
    marginLeft: '0px',
    marginTop: '0px',
    height: '310px',
  },
  logoImage1: {
    marginLeft: '0px',
    marginTop: '0px',
    height: '280px',
    width: '100%',
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
  },
}));
