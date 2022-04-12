/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  app: {
    padding: '0px 0px 40px',
    textAlign: 'center',
    height: 'auto',
    boxSizing: 'border-box',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '40px 0px',
      marginTop: '-40px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  header1: {
    fontWeight: 900,
    fontFamily: 'TomicaBlack',
    fontSize: '47px',
    lineHeight: '33px',
    textAlign: 'center',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: '#00FF47',
    textShadow: '0 0 2px #000000, 0 0 2px #000000',
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
      padding: '0px 40px',
    },
  },
  header2: {
    fontWeight: '450',
    fontFamily: 'Tomica',
    fontSize: '21px',
    marginTop: '40px',
    textAlign: 'center',
    width: '60%',
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
    fontFamily: 'Tomica',
    fontSize: '14px',
    marginTop: '15px',
    textAlign: 'left',
    marginLeft: '20px',
    width: '100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    letterSpacing: '0.065em',
    color: '#5E6282',
  },
  header4: {
    fontWeight: 'bold',
    fontFamily: 'Tomica',
    fontStyle: 'italic',
    fontSize: '12px',
    marginLeft: '20px',
    marginTop: '0px',
    textAlign: 'left',
    width: '100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    letterSpacing: '0.065em',
    color: '#C4C4C4',
  },
  cardsContainer: {
    padding: '80px 60px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: '60px 60px 0px',
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
    width: '270px',
    height: '390px',
    // border: '1px solid black',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.05)',
    borderRadius: '24px',
    marginBottom: '100px',
    padding: ' 0px 0px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '30px',
    },
  },
  logoImage: {
    marginTop: '0px',
    height: '280px',
    width: '270px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '40px',
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
  '@media screen and (max-width: 350px)': {
  },
}));
