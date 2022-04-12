/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    background: '#fff',
    marginBottom: '50px',
  },
  input: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    fontSize: '17px',
    '&::placeholder': {
      color: '#000000;',
      opacity: '0.4',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  input2: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '17px',
    fontFamily: 'Tomica',
    fontSize: '17px',
    '&::placeholder': {
      color: '#000000;',
      opacity: '0.4',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  icon1: {
    marginRight: '10px',
    marginTop: '6px',
  },
  input1: {
    background: '#F8F8F8',
    width: '100%',
    fontFamily: 'Tomica',
    borderRadius: '30px',
    borderColor: 'black !important',
    fontSize: '17px',
    marginBottom: '20px',
    '&:focus': {
      backgroundColor: '#ffddec',
      borderColor: 'brown',
    },
  },
  boxGrid: {
    // display: 'flex',
    justifyContent: 'center',
    marginTop: '6vh',
    border: '0.5px solid #FFFFFF',
    boxSizing: 'border-box',
    boxShadow: '10px 10px 21px 2px rgba(0 0 0 / 8%)',
    borderRadius: '73px 0px',
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSpace: {
    marginTop: '10vh',
  },
  subTitle: {
    fontSize: '12px',
    fontFamily: 'Tomica',
    fontWeight: '600',
  },
  title: {
    fontWeight: 900,
    fontFamily: 'TomicaBlack',
    fontSize: '34px',
    textAlign: 'center',
    marginTop: '70px',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
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
  dropdownStyle: {
    marginLeft: '0px',
    marginTop: '55px',
  },
  sendButton: {
    textAlignLast: 'end',
    textAlign: 'end',
    fontWeight: 'bold',
    height: '45px',
    fontFamily: 'Tomica',
    fontSize: '19px',
    color: 'Black',
    background: '#00FF47',
    border: '2px solid rgba(0, 0, 0, 0.62)',
    borderRadius: '108px',
    width: '80%',
    '&:hover': {
      backgroundColor: '#00FF47',
      color: '#000000',
    },
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
    boxGrid: {
      justifyContent: 'center',
      marginTop: '6vh',
      border: '0.5px solid #FFFFFF',
      boxSizing: 'border-box',
      boxShadow: '10px 10px 21px 2px rgba(0, 0, 0, 0.22)',
      borderRadius: '73px',
    },
    title: {
      fontWeight: 900,
      fontSize: '33px',
      lineHeight: '33px',
      textAlign: 'center',
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: '#00FF47',
      marginBottom: '20px',
      textShadow: '0 0 2px #000000, 0 0 2px #000000',
    },
    sendButton: {
      color: 'Black',
      background: '#00FF47',
      border: '1px solid rgba(0, 0, 0, 0.62)',
      borderRadius: '108px',
      width: '40%',
      marginLeft: '60%',
      '&:hover': {
        backgroundColor: '#00FF47',
        color: '#000000',
      },
    },
    subTitle: {
      fontSize: '12px',
      width: '80%',
      marginBottom: '5px',
    },
  },
});
