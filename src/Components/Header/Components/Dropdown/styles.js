/* eslint-disable no-shadow */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 40px',
    justifyContent: 'center',
  },
  header1: {
    fontSize: '18px',
    lineHeight: '124.5%',
    letterSpacing: ' 0.065em',
    fontFamily: 'Tomica',
    color: '#5E6282',
    fontWeight: 'bold',
  },
  menuBtn: {
    padding: '5px 0px',
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
