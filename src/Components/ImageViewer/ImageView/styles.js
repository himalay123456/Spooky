/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  app: {
    display: 'flex',
    flexDirection: 'row !important',
    height: '100%',
    width: '100%',
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    textAlign: 'center',
    width: 'fit-content',
    textDecoration: 'underline',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#5E6282',
  },

  // Modal sizes

  dialogPaperlg: {
    minHeight: '90vh',
    maxHeight: '90vh',
    maxWidth: '90vw',
    minWidth: '90vw',
    alignContent: 'center',
    background: 'white',
    justifyContent: 'center',
    borderRadius: '15px !important',
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      maxHeight: '60vh',
      maxWidth: '100%',
      minWidth: '100%',
    },
  },
  dialogPapermd: {
    minHeight: '70vh',
    maxHeight: '70vh',
    maxWidth: '70vw',
    minWidth: '70vw',
    alignContent: 'center',
    background: 'white',
    justifyContent: 'center',
    borderRadius: '15px !important',
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      maxHeight: '60vh',
      maxWidth: '100%',
      minWidth: '100%',
    },
  },
  dialogPapersm: {
    minHeight: '60vh',
    maxHeight: '60vh',
    maxWidth: '40vw',
    minWidth: '40vw',
    alignContent: 'center',
    background: 'white',
    justifyContent: 'center',
    borderRadius: '15px !important',
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      maxHeight: '60vh',
      maxWidth: '100%',
      minWidth: '100%',
    },
  },
  dialogContext: {
    height: '80vh',
    padding: '0px 0px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  // Images size

  imagelg: {
    maxHeight: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '60vh',
      maxWidth: '90%',
      minWidth: '90%',
    },
  },

  imagemd: {
    maxHeight: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '60vh',
      maxWidth: '90%',
      minWidth: '90%',
    },
  },
  imagesm: {
    maxHeight: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '60vh',
      maxWidth: '90%',
      minWidth: '90%',
    },
  },

  // Close Button

  closeBtn: {
    position: 'absolute',
    right: '40px',
    top: '40px',
    cursor: 'pointer',
  },
  closeButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  // Zoom Options

  zoomContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '45%',
    display: 'flex',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export { useStyles };
