/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const topBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
    marginLeft: '20px',
    marginBottom: '30px',
    // marginBottom: '20px',
  },
  positionRelative: {
    position: 'relative',
  },
  button: {
    width: 'auto',
    height: '40px',
    marginRight: '20px',
    backgroundColor: '#5200FF',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '15px',
    fontWeight: 450,
    fontSize: '14px',
    [theme.breakpoints.down('md')]: {
      width: '120px',
      padding: '10px 10px',
      fontSize: '10px',
    },
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  closeBtn: {
    marginTop: '2px',
    marginLeft: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  dFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export { topBarStyles };
