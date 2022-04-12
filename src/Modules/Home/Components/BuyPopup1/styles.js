/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  closeButton: {
    display: 'flex',
    flexDirection: 'row-reverse',

  },
  onHover: {
    cursor: 'pointer',
  },
  sendButton: {
    textAlignLast: 'end',
    color: 'Black',
    background: '#00FF47',
    border: '1px solid rgba(0, 0, 0, 0.62)',
    borderRadius: '108px',
    width: '94%',
    '&:hover': {
      backgroundColor: '#00FF47',
      color: '#000000',
    },
  },
  img: {
    marginLeft: '34%',
    height: '94px',
    width: '145px',
    display: 'flex',
    marginTop: '20%',
  },
  img2: {
    marginLeft: '43%',
    height: '67px',
    width: '67px',
    display: 'flex',
    marginTop: '20%',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    // fontFamily: 'Circular Std',
    fontSize: '26px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'black',
    fontSize: '16px',
    fontWeight: '550',
    marginTop: '5px',
    marginBottom: '30px',
  },
  dialogPaper: {
    minHeight: '410px',
    maxHeight: '410px',
    maxWidth: '500px',
    minWidth: '500px',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '15px !important',
  },
  dialogContext: {
    padding: '8px 0px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    height: '70px',
    borderBottom: '1px solid #00000026',
  },
  closeBtn: {
    position: 'absolute',
    right: '40px',
    top: '40px',
  },
  otpInput: {
    marginRight: '10px',
    height: '40px',
    width: '46px !important',
    marginTop: '0px',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
  },
  dialogPaper1: {
    minHeight: '480px',
    maxHeight: '650px',
    width: '100%',
    maxWidth: '750px',
    padding: '30px 50px',
    border: '0.5px solid #FFFFFF',
    boxShadow: '10px 10px 21px rgba(0, 0, 0, 0.22)',
    borderRadius: '73px',
    [theme.breakpoints.down('up')]: {
      maxHeight: '580px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '18px',
      padding: '30px 30px',
      height: '100vh',
      maxWidth: '100%',
      minWidth: '240px',
    },
  },
  height600: {
    // height: '650px',
    // [theme.breakpoints.down('up')]: {
    //   height: '600px',
    // },
    // [theme.breakpoints.down('xs')]: {
    // //   height: '90vh',
    //   width: '100%',
    // },
    '&::-webkit-scrollbar': {
      width: '0.4em',
      color: 'red',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '10px',
  },
  errorText: {
    color: 'red',
    marginTop: '1vh',
    marginBottom: '-2vh',
    textAlign: 'center',
  },
  '@media screen and (max-width: 768px)': {
    loginBox: {
      width: '85%',
    },
    otpInput: {
      marginRight: '10px',
      height: '2.9em',
      width: '3em !important',
      marginTop: '0px',
    },
  },
  '@media screen and (max-width: 1024px)': {
    loginBox1: {
      padding: '30px',
    },
    otpInput: {
      marginRight: '10px',
      height: '3em',
      width: '2.4em !important',
      marginTop: '0px',
    },
  },
  '@media screen and (width: 768px)': {
    otpInput: {
      marginRight: '10px',
      height: '3em',
      width: '2.9em !important',
      marginTop: '0px',
    },
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    fontSize: '16px',
    height: '8px',
    marginLeft: '5px',
    '&::placeholder': {
      color: '#000000;',
      opacity: '0.4',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  inputHeight: {
    outline: 0,
    border: 'none',
    marginLeft: '30px',
    height: '44px',
    marginTop: '-12px',
    fontSize: '15px',
    color: 'black',
    fontFamily: 'Tomica',
    // lineHeight: '51px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
  },
  header1: {
    fontSize: '14px',
    fontFamily: 'Tomica',
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
    fontFamily: 'Tomica',
    border: '1px solid #000000',
    borderRadius: '100px',
    fontWeight: 'bold',
    cursor: 'pointer !important',
    fontSize: '18px',
    paddingTop: '8px',
    position: 'absolute',
    right: '0px',
    bottom: '-70px',
    [theme.breakpoints.down('xs')]: {
      bottom: '-80px',
      right: '20px',
      fontSize: '16px',
    },
  },
  noHover: {
    position: 'initial',
  },
  cardBox: {
    // padding: '70px 70px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      marginTop: '-20px',
      justifyContent: 'center',
    },
  },
  cardBox1: {
    padding: '0px 20px',
    marginTop: '-110px',
    // marginLeft: '-30px',
    width: '100%',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 0px',
      marginTop: '20px',
      marginLeft: '0px',
    },
  },
  card1: {
    width: '300px',
    height: '430px',
    display: 'flex',
    filter: 'drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.05))',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: '350px',
      width: '250px',
      marginTop: '0px',
    },
  },
  header4: {
    letterSpacing: '0.065em',
    fontSize: '14px',
    color: '#5E6282',
    fontFamily: 'Tomica',
    fontWeight: 'bold',
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '9px',
    // },
  },
  header5: {
    fontWeight: '700',
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
    fontSize: '11px',
    width: 'fit-content',
    color: '#5E6282',
    fontFamily: 'Tomica',
    marginTop: '3px',
  },
  logoImage: {
    marginLeft: '0px',
    marginTop: '0px',
    width: '300px',
    height: '360px',
    [theme.breakpoints.down('xs')]: {
      height: '290px',
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
  ethBox: {
    display: 'flex',
    marginTop: '5px',
    flexDirection: 'row',
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
    fontFamily: 'Tomica',
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
    fontFamily: 'Tomica',
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
    fontFamily: 'Helvetica',
    marginLeft: '20px',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      marginBottom: '17px',
      fontWeight: '500',
    },
  },
  header9: {
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Tomica',
    // lineHeight: '51px',
    marginLeft: '35px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
    //   fontWeight: '600',
    },
  },
  header10: {
    fontSize: '14px',
    fontFamily: 'Tomica',
    color: 'black',
    marginLeft: '35px',
    marginTop: '-10px',
    letterSpacing: '0.0075em',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
      //   fontWeight: '600',
      marginTop: '-10px',
    },
  },
  header11: {
    fontSize: '15px',
    fontFamily: 'Tomica',
    color: 'black',
    margin: '0px 20px',
    marginTop: '0px',
    letterSpacing: '0.0075em',
    fontWeight: 'normal',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      //   fontWeight: '600',
      marginTop: '-30px',
    },
  },
  header12: {
    fontSize: '12px',
    fontFamily: 'Tomica',
    color: 'black',
    marginLeft: '25px',
    marginTop: '0px',
    letterSpacing: '0.0075em',
    opacity: 0.4,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      //   fontWeight: '600',
      marginTop: '-10px',
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
    marginLeft: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginLeft: '10px',
      height: '40px',
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
    //   left: '120px',
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
