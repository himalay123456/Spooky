/* eslint-disable no-shadow */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px',
    justifyContent: 'center',
  },
  header1: {
    fontSize: '15px',
    lineHeight: '124.5%',
    letterSpacing: ' 0.065em',
    color: '#5E6282',
    marginLeft: '15px',
    fontFamily: 'Tomica',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  menuBtn: {
    padding: '0px 0px',
    display: 'flex',
    cursor: 'pointer',
    marginTop: '20px',
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'l',
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
