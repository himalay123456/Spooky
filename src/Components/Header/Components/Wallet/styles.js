/* eslint-disable no-shadow */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 0px',
    justifyContent: 'center',
  },
  header1: {
    fontSize: '14px',
    lineHeight: '51px',
    fontFamily: 'Tomica',
    opacity: '0.4',
    color: 'black',
    marginTop: '-20px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  header2: {
    fontSize: '16px',
    fontFamily: 'Tomica',
    lineHeight: '51px',
    opacity: '0.4',
    color: 'black',
    marginLeft: '20px',
    marginTop: '5px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  walletBox: {
    background: '#F8F8F8',
    cursor: 'pointer',
    border: '2px solid #E7E7E7',
    boxSizing: 'border-box',
    borderRadius: '100px',
    height: '60px',
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    // marginLeft: 'auto',
    paddingLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '50px',
    },
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
export { useStyles };
