/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  closeButton: {
    display: 'flex',
    flexDirection: 'row-reverse',

  },
  onHover: {
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    borderRadius: '4px',
    borderColor: 'grey',
    resize: 'none',
    marginBottom: '0px',
    // padding: '10px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '1.1876em',
    letterSpacing: '0.00938em',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'red !important',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '1.1876em',
      letterSpacing: '0.00938em',
    },
  },
  placeHolder: {
    width: '100%',
    '&::placeholder': {
      color: '#606060',
      lineHeight: '18px',
      fontWeight: '540',
      fontSize: '14px',
      opacity: 1,
    },
  },
  img: {
    marginLeft: '34%',
    height: '94px',
    width: '145px',
    display: 'flex',
    marginTop: '20%',
  },
  img2: {
    marginLeft: '43%',
    height: '67px',
    width: '67px',
    display: 'flex',
    marginTop: '20%',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    // fontFamily: 'Circular Std',
    fontSize: '26px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'black',
    fontSize: '16px',
    fontWeight: '550',
    marginTop: '5px',
    marginBottom: '30px',
  },
  subtitle1: {
    color: 'black',
    fontSize: '26px',
    fontWeight: '550',
    marginTop: '5px',
    marginBottom: '30px',
  },
  dialogPaper: {
    minHeight: '410px',
    maxHeight: '410px',
    maxWidth: '500px',
    minWidth: '500px',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '15px !important',
  },
  dialogContext: {
    padding: '8px 0px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    height: '70px',
    borderBottom: '1px solid #00000026',
  },
  closeBtn: {
    position: 'absolute',
    right: '40px',
    top: '40px',
  },
  dialogPaper1: {
    minHeight: '265px',
    maxHeight: '350px',
    maxWidth: '500px',
    minWidth: '500px',
    borderRadius: '15px !important',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '10px',
  },
}));
