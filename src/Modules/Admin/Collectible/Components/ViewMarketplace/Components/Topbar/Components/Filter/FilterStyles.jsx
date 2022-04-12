/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  selectTag: {
    background: 'rgba(0, 0, 0, 0.02)',
    // border: '1px solid #CCCCCC',
    borderRadius: '4px',
    // paddingRight: '10px',
  },
  inputLabel: {
    fontSize: '14px',
    color: '#606060',
    // fontFamily: 'Avenir LTStd-Book',
  },
  filterButton: {
    background: 'white',
    boxShadow: 'none',
    width: '150px',
    height: '40px',
    border: '1px solid #CCCCCC',
  },
  filterText: {
    fontSize: '14px',
    fontWeight: '550',
    marginRight: '30px',
  },
  dropdownStyle: {
    marginTop: '46px',
  },
  popUp: {
    left: '260px',
    width: '350px',
    height: '360px',
    padding: '17px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
    minHeight: 50,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  width100: {
    width: '100%',
  },
  width93: {
    width: '93%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 140,
    border: '1px solid #CCCCCC',
    borderRadius: '5px',
    marginBottom: theme.spacing(2),
    marginTop: '-7px',
    background: 'rgba(0, 0, 0, 0.02)',
  },
  buttonReset: {
    width: '140px',
    height: '40px',
    backgroundColor: 'transperent',
    fontStyle: 'normal',
    fontWeight: 450,
    fontSize: '14px',
    color: 'black',
    marginLeft: '8px',
    marginBottom: '8px',
  },
  closeBtn: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    cursor: 'pointer',
  },
  topBar: {
    position: 'relative',
  },
  buttonApply: {
    width: '140px',
    height: '40px',
    backgroundColor: '#5200FF',
    fontStyle: 'normal',
    marginLeft: '15px',
    fontWeight: 450,
    fontSize: '14px',
    marginBottom: '8px',
  },
}));
