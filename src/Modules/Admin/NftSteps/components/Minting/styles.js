/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  app: {
    padding: '20px 50px',
  },
  title: {
    fontWeight: 400,
    width: '80%',
    fontFamily: 'Tomica',
    fontSize: '45px',
    textAlign: 'left',
    lineHeight: '51px',
  },
  title1: {
    fontWeight: 400,
    width: '90%',
    fontFamily: 'Tomica',
    fontSize: '16px',
    textAlign: 'left',
    marginTop: '30px',
    lineHeight: '25px',
  },
  imageBox: {
    width: '280px',
    height: '375px',
    margin: '0px 20px',
    backgroundRepeat: 'none',
    backgroundPosition: 'cover',
    border: '1px solid #000000',
    boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
    borderRadius: '30px 0px',
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    marginTop: '20px',
    position: 'relative',
  },
  header1: {
    fontWeight: 600,
    fontFamily: 'Tomica',
    fontSize: '15px',
    color: 'black',
    marginLeft: '5px',
    textAlign: 'left',
  },
  header2: {
    fontWeight: 600,
    fontFamily: 'Tomica',
    fontSize: '13px',
    color: '#5E6282',
    marginLeft: '5px',
    textAlign: 'left',
  },
  innerBox: {
    height: '95px',
    width: '280px',
    position: 'absolute',
    bottom: '0px',
    boxSizing: 'border-box',
    // background: 'rgba(255, 255, 255, 0.76)',
    borderBottomRightRadius: '30px',
  },
  imagePreview: {
    width: '280px',
    height: '270px',
    // background: 'rgba(255, 255, 255, 0.76)',
    borderRadius: '30px 0px 0px',
  },
  topBox: {
    position: 'absolute',
    top: '0px',
    display: 'flex',
    padding: '10px',
    paddingRight: '20px',
    boxSizing: 'border-box',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomBox: {
    position: 'absolute',
    bottom: '0px',
    display: 'flex',
    padding: '10px',
    boxSizing: 'border-box',
    paddingRight: '20px',
    width: '100%',
    justifyContent: 'space-between',
  },
  title2: {
    fontWeight: 400,
    width: '90%',
    fontFamily: 'Tomica',
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.4)',
    textAlign: 'left',
    marginTop: '30px',
    lineHeight: '19px',
  },
  title3: {
    fontWeight: 400,
    fontFamily: 'Tomica',
    fontSize: '14px',
    color: '#606060',
    textAlign: 'left',
    marginLeft: '10px',
    lineHeight: '25px',
  },
  submitBtn: {
    fontWeight: '450',
    height: '45px',
    fontFamily: 'Tomica',
    fontSize: '19px',
    color: 'white',
    backgroundColor: '#5200FF !important',
    fontStyle: 'normal',
    '&:disabled': {
      color: 'white',
      opacity: '0.8',
    },
  },
}));
