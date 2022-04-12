/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  app: {
    background: 'white',
    height: '330px',
    borderRadius: '40px 40px 0px 0px',
    border: '1px solid #000000',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  linkBox: {
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  header: {
    fontWeight: 900,
    fontFamily: 'TomicaBlack',
    fontSize: '35px',
    lineHeight: '0px',
    marginBottom: '30px',
    textAlign: 'left',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    WebkitTextStroke: '0.5px solid #000000',
    textShadow: '2px 2px 0px #000000',
  },
  subheader: {
    fontWeight: 300,
    fontFamily: 'TomicaLight',
    fontSize: '19px',
    lineHeight: '26px',
    textAlign: 'left',
    color: '#5E6282',
  },
  header2: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'left',
    cursor: 'pointer',
    opacity: '0.7',
    marginLeft: '20px',
    color: 'black',
  },
  linksTable: {
    '&tr &td': {
      color: 'red',
    },
  },
  socialApps: {
    marginLeft: '2vh',
  },
  copyright: {
    fontSize: '15px',
    color: '#8A8A8A',
    marginLeft: '7vh',
  },
  image1: {
    cursor: 'pointer',
  },
  imagehover: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  input: {
    // background: '#E5E5E5',
    // borderRadius: '30px',
    paddingLeft: '30px',
    fontFamily: 'Tomica',
    fontSize: '16px',
    '&::placeholder': {
      color: '#000000;',
      opacity: '0.4',
      marginLeft: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green !important',
    },
  },
  '@media screen and (max-width: 768px)': {
    copyright: {
      marginLeft: '2vh',
    },
  },
  '@media screen and (min-width: 1024px)': {
    copyright: {
      marginLeft: '5vh',
    },
  },
  '@media screen and (width: 1024px)': {
    copyright: {
      marginLeft: '2vh',
    },
  },
  '@media screen (min-width: 400px)': {
    app: {
      display: 'none !important',
    },
  },
}));
