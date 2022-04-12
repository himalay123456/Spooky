import { makeStyles } from '@material-ui/core/styles';

const formStyles = makeStyles(() => ({
  formBox: {
    display: 'flex',
    flexDirection: 'column',
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
  width100: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginTop: '25px',
    height: '40px',
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
    backgroundColor: '#E5E5E5',
    height: '40px',
    fontWeight: '550 !important',
    color: 'black',
    borderRadius: '4px',

    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'black !important',
    },
  },
  inputHeight1: {
    backgroundColor: '#E5E5E5',
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
  permissonTitle: {
    fontSize: '18px',
    fontWeight: '550',
    marginTop: '30px',
    marginBottom: '20px',
  },
  roleTitle: {
    fontSize: '16px',
    fontWeight: '550',
    marginBottom: '20px',
  },
  roleBtnHeader: {
    fontSize: '14px',
    fontWeight: '550',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '20px',
  },
  submitBtn: {
    height: '40px',
    background: '#5200FF',
    margin: '30px 10px',
  },
}));

// eslint-disable-next-line import/prefer-default-export
export { formStyles };
