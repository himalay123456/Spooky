/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    background: '#fff',
  },
  heading: {
    fontWeight: '900',
    fontSize: '23px',
    marginTop: '5vh',
  },
  subHeading: {
    color: '#0000007a',
    fontSize: '22px',
    lineHeight: '124.5%',
  },
  title: {
    fontWeight: 900,
    fontSize: '55px',
    lineHeight: '33px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: 'black',
    marginTop: '30px',
    marginBottom: '20px',
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
    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',
  },
});
