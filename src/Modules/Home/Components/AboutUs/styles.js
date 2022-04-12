/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    background: '#F8F8F8',
  },
  heading: {
    fontSize: '22px',
    fontFamily: 'Tomica',
    letterSpacing: '-0.005em',
    color: '#5E6282',
    lineHeight: '127%',
    marginBottom: '20px',
  },
  pLeft: {
    // padding: '0px 50px',
  },
  title: {
    fontWeight: 900,
    fontSize: '52px',
    lineHeight: '33px',
    fontFamily: 'TomicaBlack',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    marginBottom: '90px',
    marginTop: '90px',
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
  },
  aboutUsBox: {
    padding: '50px',
    background: '#fff',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '24px',
    marginBottom: '100px',
  },
  '@media screen and (min-width: 600px)': {
  },

  '@media screen and (max-width: 768px)': {
    heading: {
      fontSize: '1rem',
      marginTop: '3vh',
      color: '#5E6282',
      fontWeight: 'bold',
    },
    title: {
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
  },
});
