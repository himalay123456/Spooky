/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  app: {
    padding: '150px 0px 40px',
    textAlign: 'center',
    height: 'auto',
    boxSizing: 'border-box',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 0px',
      marginTop: '-40px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  header1: {
    fontWeight: 900,
    fontFamily: 'TomicaBlack',
    fontSize: '37px',
    lineHeight: '35px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    textShadow: '2px 2px 0px #000000',
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
      padding: '0px 40px',
    },
  },
  header2: {
    fontWeight: 'normal',
    fontFamily: 'Tomica',
    fontSize: '16px',
    marginTop: '30px',
    lineHeight: '124.5%',
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    letterSpacing: '0.065em',
    color: '#5E6282',
    [theme.breakpoints.down('xs')]: {
    //   fontSize: '26px',
    //   padding: '0px 40px',
    },
  },
  header3: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '40px',
    fontFamily: 'Tomica',
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    letterSpacing: '0.065em',
    color: '#5E6282',
  },
  cardsContainer: {
    padding: '60px 100px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: '60px 100px 0px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '40px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
  },
  cardBox: {
    width: '337px',
    height: '340px',
    // border: '1px solid black',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.05)',
    borderRadius: '30px 0px',
    border: '1px solid #000000',
    [theme.breakpoints.down('xs')]: {
      width: '280px',
      height: '320px',
      marginBottom: '30px',
    },
  },
  logoImage: {
    marginTop: '60px',
    height: '190px',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '40px',
      height: '180px',
    },
  },
  dFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  '@media screen and (max-width: 1440px)': {
  },
}));
