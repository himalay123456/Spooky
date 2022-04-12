/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '550px',
    marginTop: '120px',
    borderRadius: '60px 60px 0px 0px',
    width: '100%',
    padding: '80px 150px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '100px',
    background: 'linear-gradient(180deg, rgba(0, 255, 71, 0.3) 0%, rgba(196, 196, 196, 0) 100%)',
    border: '1px solid #00FF47',
    borderBottom: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: '110px',
      height: 'auto',
      padding: '40px 0px 40px 40px',
      paddingBottom: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
      paddingBottom: '60px',
    },
  },
  header1: {
    fontWeight: '700',
    fontSize: '18px',
    fontFamily: 'Tomica',
    letterSpacing: '0.075em',
    color: 'black',
    marginTop: '70px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  header2: {
    fontWeight: '700',
    fontSize: '51px',
    fontFamily: 'Tomica',
    lineHeight: '70px',
    color: 'black',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      marginTop: '0px',
    },
  },
  header3: {
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: 'Helvetica',
    lineHeight: '27px',
    color: '#5E6282',
    width: '70%',
    textAlign: 'center',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      width: '100%',
    },
  },
  iconBox2: {
    marginLeft: '50px',
    marginTop: '20px',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
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
