/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    background: 'white',
    height: '330px',
    borderRadius: '40px 40px 0px 0px',
    border: '1px solid #000000',
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
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
  },
  subheader: {
    fontWeight: 400,
    fontFamily: 'Tomica',
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
    opacity: '0.7',
    marginLeft: '20px',
    color: 'black',
  },
  fontColor: {
    color: 'black',
    fontSize: '19px',
    lineHeight: '25px',
    textAlign: 'right',
    fontFamily: 'TomicaLight',
    '&:hover': {
      cursor: 'pointer',
    },
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
  imagehover: {
    '&:hover': {
      cursor: 'pointer',
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
  '@media screen and (width: 1366px)': {
    copyright: {
      marginLeft: '6vh',
    },
  },
});
