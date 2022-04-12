/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    background: '#F8F8F8',
    marginTop: '-100px',
  },
  faqBox: {
    border: '1px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '20px',
    marginBottom: '20px',
    background: '#fff',
  },
  borderBottom: {
    borderBottom: '1px solid #000000',
  },
  heading: {
    fontWeight: 'bolder',
    fontFamily: 'Tomica',
    fontSize: '23px',
    padding: '10px',
    marginLeft: '30px',
    marginRight: '30px',
  },
  subHeading: {
    color: 'black',
    opacity: '0.8',
    fontSize: '20px',
    fontFamily: 'TomicaLight',
    fontWeight: '100',
    marginTop: '10px',
    lineHeight: '126%',
    padding: '10px',
    marginLeft: '30px',
    marginRight: '30px',
  },
  title: {
    fontWeight: 900,
    fontFamily: 'TomicaBlack',
    fontSize: '53px',
    lineHeight: '33px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    marginBottom: '30px',
    marginTop: '80px',
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
  },
  title1: {
    fontWeight: 900,
    fontFamily: 'TomicaBold',
    fontSize: '55px',
    lineHeight: '33px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: 'black',
    marginTop: '50px',
    marginBottom: '50px',
  },
  '@media screen and (min-width: 600px)': {
  },

  '@media screen and (max-width: 768px)': {
    heading: {
      fontWeight: '900',
      fontSize: '1rem',
      marginTop: '2vh',
    },
    subHeading: {
      color: '#0000007a',
      fontSize: '1rem',
    },
    fontWeight: 900,
    fontSize: '33px',
    lineHeight: '33px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    marginBottom: '0px',
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
  },

  '@media screen and (max-width: 425px)': {
    title: {
      marginTop: '0px',
    },
    title1: {
      marginTop: '0px',
    },
  },
});
