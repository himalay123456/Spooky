/* eslint-disable import/prefer-default-export */

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';

export const SwitchStyles = withStyles(() => ({
  root: {
    width: 45,
    height: 23,
    padding: 0,
    borderRadius: '20px',
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#747478',
    '&$checked': {
      transform: 'translateX(24px)',
      color: '#27AE60',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#E0DFE8',
        borderColor: '#E0DFE8',
      },
    },
    '&$checked + $track': {
      backgroundColor: '#E0DFE8',
    },
  },
  thumb: {
    width: 17,
    height: 17,
    boxShadow: 'none',
    marginTop: '0.1rem',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#E0DFE8',
  },
  checked: {},
}))(Switch);

export const useStyles = makeStyles({
  app: {
    background: '#fff',
    marginBottom: '0px',
  },
  labelTag: {
    opacity: 1,
    fontSize: '14px',
    color: 'grey',
    marginLeft: '5px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    position: 'absolute',
    top: '20px',
    zIndex: 500,
  },
  markHeader1: {
    fontSize: '14px',
    color: '#2095EA',
    fontFamily: 'Tomica',
    marginLeft: '20px',
  },
  markHeader2: {
    fontSize: '14px',
    marginLeft: '5px',
    color: 'grey',
    fontFamily: 'Tomica',
  },
  card1: {
    position: 'relative',
    cursor: 'pointer !important',
    width: '300px',
    height: '400px',
    marginLeft: '-60px',
    marginTop: '100px',
    border: '1px solid #000000',
    borderRadius: '30px 0px 0px 0px',
  },
  imagePreview: {
    width: '298px',
    height: '398px',
    borderRadius: '30px 0px 0px 0px',
  },
  input: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    fontSize: '16px',
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  input4: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    width: '100%',
    fontFamily: 'Tomica',
    fontSize: '16px',
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  input5: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    width: '6%',
    fontFamily: 'Tomica',
    fontSize: '16px',
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  input3: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    fontSize: '16px',
    '&::placeholder': {
      opacity: 1,
      fontSize: '13px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  inputArea: {
    borderRadius: '15px !important',
    minHeight: '140px',
    height: 'auto',
    marginTop: '-5px',
    border: 'none !important',
    fontSize: '17px',
    '&::-webkit-scrollbar': {
      display: 'block !important',
      cusror: 'pointer',
    },
  },
  input2: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '16px',
    paddingTop: '10px',
    fontFamily: 'TomicaLight',
    lineHeight: '25px',
    fontSize: '17px',
    '&::-webkit-scrollbar': {
      display: 'block !important',
      cusror: 'pointer',
    },
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  input2a: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '16px',
    paddingTop: '10px',
    fontFamily: 'TomicaLight',
    lineHeight: '25px',
    fontSize: '16px',
    '&::-webkit-scrollbar': {
      display: 'block !important',
      cusror: 'pointer',
    },
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  notchedOutline: {
    borderColor: 'white !important',
  },
  notchedOutline1: {
    borderColor: 'black !important',
  },
  icon1: {
    marginRight: '20px',
    marginTop: '6px',
    display: 'none',
  },
  input1: {
    background: '#F8F8F8',
    width: '100%',
    fontFamily: 'Tomica',
    color: '#000000;',
    borderRadius: '30px',
    fontSize: '16px',
    marginBottom: '20px',
    '&::placeholder': {
      opacity: 1,
      fontSize: '14px',
      color: 'grey',
    },
    '&:focus': {
      backgroundColor: '#ffddec',
      borderColor: 'brown',
    },
  },
  leftGrid: {
    padding: '20px',
  },
  boxGrid: {
    // display: 'flex',
    justifyContent: 'center',
    padding: '0px 70px',
    boxSizing: 'border-box',
  },
  rightGrid: {
    display: 'flex',
    paddingRight: '5px',
    position: 'relative',
    flexDirection: 'column',
    padding: '20px 0px',
  },
  icon2Box: {
    position: 'absolute',
    display: 'flex',
    top: '28px',
    left: '-80px',
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  topSpace: {
    marginTop: '2vh',
  },
  subTitle: {
    fontSize: '12px',
    fontFamily: 'Tomica',
    fontWeight: '600',
  },
  // title: {
  //   fontWeight: 900,
  //   fontFamily: 'TomicaBlack',
  //   fontSize: '33px',
  //   textAlign: 'center',
  //   marginTop: '10px',
  //   letterSpacing: '0.13em',
  //   textTransform: 'uppercase',
  //   color: '#00FF47',
  //   textShadow: '0 0 2px #000000, 0 0 2px #000000',
  // },
  title: {
    fontWeight: 450,
    fontFamily: 'TomicaBold',
    fontSize: '33px',
    textAlign: 'center',
    marginTop: '10px',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: 'black',
  },
  title1: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '10px',
    letterSpacing: '0.065em',
    color: '#5E6282',
    marginBottom: '40px',
  },
  radio: {
    '&$checked': {
      color: '#4B8DF8',
    },
  },
  checked: {},
  title3: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '20px',
    marginTop: '-10px',
    marginLeft: '7px',
    color: '#000000',
  },
  header1a: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    textAlign: 'left',
    fontSize: '25px',
    marginLeft: '10px',
    marginTop: '50px',
    color: '#000000',
    lineHeight: '50px',
  },
  header1b: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    width: '100%',
    marginLeft: '10px',
    fontSize: '16px',
    textAlign: 'left',
    color: '#000000',
    lineHeight: '25px',
  },
  header1c: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '16px',
    textAlign: 'left',
    marginLeft: '30px',
    color: 'black',
    lineHeight: '30px',
    marginTop: '0px',
  },
  header1c2: {
    fontWeight: 500,
    fontFamily: 'Tomica',
    fontSize: '14px',
    textAlign: 'left',
    marginLeft: '30px',
    color: 'rgba(0, 0, 0, 0.4)',
    lineHeight: '30px',
    marginTop: '0px',
  },
  header1d: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'left',
    marginLeft: '30px',
    color: '#000000',
    marginTop: '10px',
  },
  header1e: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'left',
    marginLeft: '30px',
    color: '#000000',
    marginTop: '10px',
    position: 'absolute',
    top: '-30px',
    right: '10px',
    cursor: 'pointer',
  },
  ethLogo: {
    position: 'absolute',
    top: '15px',
    right: '30px',
  },
  ethLogo1: {
    position: 'absolute',
    top: '3px',
    right: '30px',
    cursor: 'pointer',
  },
  usd: {
    position: 'absolute',
    top: '13px',
    left: '80px',
  },
  usdHeader: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '15px',
    color: '#595959',
    lineHeight: '30px',
  },
  dropdownStyle: {
    marginLeft: '0px',
    marginTop: '55px',
  },
  sendButton: {
    textAlignLast: 'end',
    textAlign: 'end',
    fontWeight: '450',
    height: '45px',
    fontFamily: 'Tomica',
    fontSize: '19px',
    color: 'white',
    backgroundColor: '#5200FF !important',
    fontStyle: 'normal',
    marginLeft: '15px !important',
    width: '100%',
    '&:disabled': {
      color: 'white',
      opacity: '0.8',
    },
    // '&:hover': {
    //   backgroundColor: '#00FF47',
    //   color: '#000000',
    // },
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  radio1: {
    marginLeft: '20px',
    '&$checked': {
      color: '#4B8DF8',
    },
  },
  sendButton1: {
    textAlignLast: 'end',
    textAlign: 'end',
    fontWeight: '450',
    height: '45px',
    fontFamily: 'Tomica',
    fontSize: '19px',
    color: 'white',
    fontStyle: 'normal',
    marginLeft: '15px !important',
    width: '100%',
    '&:disabled': {
      color: 'black',
      opacity: '0.8',
    },
    // '&:hover': {
    //   backgroundColor: '#00FF47',
    //   color: '#000000',
    // },
  },
  radioBtn: {
    marginLeft: '20px',
    marginTop: '-5px',
    marginRight: '-20px',
    marginBottom: '10px',
  },
  width100: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginTop: '25px !important',
    height: '40px',
    padding: '0px !important',
  },
  colorWhite: {
    color: 'white !important',
  },
  successMessage: {
    color: '#00FF47',
    fontSize: '1rem',
    fontFamily: 'Tomica',
    textAlign: 'center',
    marginLeft: '2px',
    fontWeight: 'bold',
  },
  '@media screen and (min-width: 600px)': {
  },

  '@media screen and (max-width: 768px)': {
    title: {
      fontWeight: 900,
      fontSize: '33px',
      lineHeight: '33px',
      textAlign: 'center',
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      marginBottom: '20px',
    },
    // sendButton: {
    //   color: 'Black',
    //   background: '#00FF47',
    //   border: '1px solid rgba(0, 0, 0, 0.62)',
    //   borderRadius: '108px',
    //   width: '40%',
    //   marginLeft: '60%',
    //   '&:hover': {
    //     backgroundColor: '#00FF47',
    //     color: '#000000',
    //   },
    // },
    subTitle: {
      fontSize: '12px',
      width: '80%',
      marginBottom: '5px',
    },
  },
});
