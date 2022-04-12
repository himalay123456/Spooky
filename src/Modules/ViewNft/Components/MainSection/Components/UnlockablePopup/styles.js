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
    fontFamily: 'TomicaLight',
    fontSize: '16px',
    fontWeight: '650',
    marginTop: '5px',
    marginBottom: '30px',
  },
  subtitle3: {
    color: 'black',
    fontFamily: 'TomicaLight',
    fontSize: '16px',
    fontWeight: '650',
    marginTop: '5px',
  },
  subtitle4: {
    color: 'black',
    fontFamily: 'TomicaLight',
    fontSize: '16px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    fontWeight: '650',
    marginTop: '5px',
  },
  subtitle1: {
    color: 'black',
    fontFamily: 'Tomica',
    fontSize: '16px',
    marginRight: '5px',
    fontWeight: '900',
    marginTop: '5px',
    marginBottom: '30px',
  },
  dialogPaper: {
    minHeight: '410px',
    maxHeight: '50px',
    maxWidth: '500px',
    minWidth: '500px',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '15px !important',
  },
  dialogContext: {
    padding: '8px 0px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    height: '70px',
    // borderBottom: '1px solid #00000026',
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
    minHeight: '265px',
    maxHeight: '450px',
    maxWidth: '500px',
    minWidth: '500px',
    borderRadius: '40px !important',
    [theme.breakpoints.down('xs')]: {
      minHeight: '150px',
      maxHeight: '350px',
      maxWidth: '400px',
      minWidth: '350px',
    },
  },
  title: {
    fontWeight: '400',
    fontSize: '17px',
    fontFamily: 'Tomica',
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
}));
