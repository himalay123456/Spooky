/* eslint-disable no-shadow */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputHeight: {
    outline: 0,
    border: 'none',
    marginLeft: '30px',
    height: '44px',
    marginTop: '-10px',
    fontSize: '15px',
    color: 'black',
    // lineHeight: '51px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
  },
  header1: {
    fontSize: '14px',
    lineHeight: '51px',
    opacity: '0.4',
    color: 'black',
    marginTop: '-20px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  submitBtn: {
    width: '140px',
    height: '35px',
    // padding: '8px 5px',
    background: '#00FF47',
    border: '1px solid #000000',
    borderRadius: '100px',
    fontWeight: 'bold',
    cursor: 'pointer !important',
    fontSize: '18px',
    paddingTop: '8px',
    position: 'absolute',
    left: '210px',
    bottom: '-30px',
    [theme.breakpoints.down('xs')]: {
      bottom: '-75px',
      left: '170px',
      fontSize: '16px',
    },
  },
  cardBox: {
    padding: '70px 70px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      marginTop: '-20px',
      justifyContent: 'center',
    },
  },
  cardBox1: {
    padding: '0px 20px',
    marginTop: '-20px',
    marginLeft: '-30px',
    width: '110%',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 0px',
      marginTop: '-50px',
      marginLeft: '0px',
    },
  },
  card1: {
    width: '265px',
    height: '360px',
    display: 'flex',
    filter: 'drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.05))',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: '310px',
      width: '250px',
      marginTop: '0px',
    },
  },
  header4: {
    letterSpacing: '0.065em',
    fontSize: '14px',
    color: '#5E6282',
    fontWeight: 'bold',
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '9px',
    // },
  },
  header5: {
    fontWeight: '550',
    fontSize: '14px',
    width: 'fit-content',
    color: '#5E6282',
    display: 'flex',
    fontFamily: 'Tomica',
    marginLeft: '5px',
    marginTop: '1px',
  },
  header5a: {
    fontWeight: '550',
    fontSize: '12px',
    width: 'fit-content',
    color: '#5E6282',
    fontFamily: 'Tomica',
    marginTop: '2px',
  },
  logoImage: {
    marginLeft: '0px',
    marginTop: '0px',
    height: '310px',
    [theme.breakpoints.down('xs')]: {
      height: '280px',
      width: '250px',
      marginTop: '0px',
    },
  },
  logoImage1: {
    marginLeft: '0px',
    marginTop: '0px',
    height: '160px',
    width: '100%',
  },
  inner1: {
    height: '75%',
  },
  inner2: {
    height: '25%',
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
  header2: {
    fontSize: '16px',
    lineHeight: '51px',
    opacity: '0.4',
    color: 'black',
    marginLeft: '20px',
    marginTop: '5px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  header6: {
    fontSize: '24px',
    color: '#00FF47',
    marginLeft: '20px',
    letterSpacing: '-0.005em',
    fontWeight: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
    },
  },
  header7: {
    fontSize: '15px',
    color: 'black',
    textTransform: 'uppercase',
    marginLeft: '20px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  header8: {
    fontSize: '16px',
    margin: '10px 0px 20px 0px',
    color: 'black',
    marginLeft: '20px',
    fontWeight: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      marginBottom: '5px',
    },
  },
  header9: {
    fontSize: '15px',
    color: 'black',
    // lineHeight: '51px',
    marginLeft: '20px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  header10: {
    fontSize: '15px',
    color: 'black',
    marginLeft: '20px',
    marginTop: '20px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      marginTop: '-15px',
    },
  },
  header11: {
    fontSize: '15px',
    color: 'black',
    margin: '0px 20px',
    marginTop: '0px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      marginTop: '-30px',
    },
  },
  walletBox: {
    background: '#F8F8F8',
    cursor: 'pointer',
    border: '2px solid #E7E7E7',
    boxSizing: 'border-box',
    paddingTop: '10px',
    borderRadius: '100px',
    height: '45px',
    width: '100%',
    overflow: 'hidden',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginLeft: '10px',
    },
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayFlex1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  '@media screen and (max-width: 320px)': {
    card1: {
      height: '250px',
      width: '200px',
      marginLeft: '-10px',
    },
    logoImage: {
      height: '230px',
      width: '200px',
    },
    header11: {
      marginBottom: '70px',
    },
    submitBtn: {
      left: '120px',
    },
    header4: {
      letterSpacing: '0.065em',
      fontSize: '9px',
      color: '#5E6282',
      fontWeight: 'bold',
    },
    header5: {
      fontSize: '9px',
    },
    mainContainer: {
      paddingLeft: '20px',
    },
  },
}));

// eslint-disable-next-line import/prefer-default-export
export { useStyles };