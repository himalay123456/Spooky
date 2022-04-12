/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const formStyles = makeStyles(() => ({
  formBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  width100: {
    width: '100%',
    marginTop: '25px',
    height: '40px',
    padding: '0px !important',
  },
  heightMore: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginTop: '25px',
    // height: '120px',
    padding: '0px !important',
  },
  formControl: {
    width: '100%',
    padding: '0px !important',
  },
  selectLabel: {
    marginTop: '10px',
    ZIndex: -1,
    backgroundColor: 'transparent',
  },
  selectLabel1: {
    marginTop: '-8px',
    color: 'white !important',
  },
  colorWhite: {
    color: 'white !important',
  },
  dFlex: {
    display: 'flex',
  },
  darkBack: {
    backgroundColor: 'black',
    color: 'white !important',
  },
  inputHeight: {
    height: '40px',
    borderRadius: '4px',
    fontWeight: '550 !important',
    color: 'black',
    fontSize: '14px',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'black !important',
    },
  },
  placeHolder: {
    '&::placeholder': {
      color: '#606060',
      lineHeight: '18px',
      fontWeight: '540',
      fontSize: '14px',
      opacity: 1,
    },
  },
  inputHeight1: {
    height: '40px',
    borderRadius: '4px',
    borderTopLeftRadius: '0px !important',
    borderBottomLeftRadius: '0px !important',
    marginLeft: '-3px',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'black !important',
    },
  },
  inputHeight2: {
    height: '120px !important',
    borderRadius: '4px',
    fontSize: '10px',
    marginLeft: '-3px',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'black !important',
    },
  },
  permissonTitle: {
    fontSize: '18px',
    fontWeight: '450',
    marginTop: '20px',
    marginBottom: '20px',
  },
  roleTitle: {
    fontSize: '16px',
    fontWeight: '450',
    marginBottom: '20px',
  },
  roleBtnHeader: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '20px',
  },
  submitBtn: {
    height: '40px',
    background: '#5200FF',
    margin: '30px 10px',
    marginLeft: '0px',

  },
  textarea: {
    marginTop: '25px',
    width: '100%',
    borderRadius: '4px',
    borderColor: 'grey',
    resize: 'none',
    marginBottom: '-10px',
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
}));
export { formStyles };
