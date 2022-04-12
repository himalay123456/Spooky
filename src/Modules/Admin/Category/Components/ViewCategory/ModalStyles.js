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
    minHeight: '440px',
    maxHeight: '440px',
    maxWidth: '550px',
    minWidth: '550px',
    borderRadius: '15px !important',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '10px',
  },
}));
