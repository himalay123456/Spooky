/* eslint-disable no-shadow */
import { makeStyles } from '@material-ui/core/styles';

const menuStyles = makeStyles((theme) => ({
  app: {
    width: '100vw',
    height: '100vh',
    padding: '50px',
  },
  activeLink: {
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: '0px',
    padding: '5px 15px',
    marginBottom: '50px',
    fontSize: '12px',
    fontFamily: 'Tomica',
    color: 'black',
    backgroundColor: '#00FF47',
    textDecoration: 'none',
    lineHeight: '24px',
    borderRadius: '80px',
    height: '35px',
    boxSizing: 'border-box',
  },
  navLink: {
    fontSize: '28px',
    color: 'black',
    padding: '15px',
    marginBottom: '15px',
  },
  connectButton: {
    width: '180px',
    height: '60px',
    border: '0.5px solid #212832',
    boxSizing: 'border-box',
    borderRadius: '100px',
    backgroundColor: 'white',
    marginTop: '50px',
    boxShadow: '1px 1px 2px lightfrey',
    marginLeft: '10px',
  },
  noHover: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  icon1: {
    width: '27px',
    height: '27px',
    background: '#FFFFFF',
    padding: '10px 10px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '0px 15px',
  },
  disconnectButton: {
    width: '205px',
    display: 'flex',
    height: '40px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    marginLeft: '20px',
    // cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      marginLeft: '0px',
    },
  },
  disconnectHeader1: {
    fontSize: '17px',
    color: 'black',
    opacity: 0.8,
  },
  disconnectHeader2: {
    fontSize: '12px',
    color: 'black',
    marginRight: '-20px',
    cursor: 'pointer',
  },
  icon3Image: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
    },
  },
  displayFlex2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    marginRight: '15px',
    justifyContent: 'flex-end',
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayFlex1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

// eslint-disable-next-line import/prefer-default-export
export { menuStyles };
