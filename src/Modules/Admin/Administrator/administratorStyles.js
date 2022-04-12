import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const buttonStyles = makeStyles((theme) => ({
  button: {
    width: '180px !important',
    height: '40px !important',
    marginRight: '20px !important',
    backgroundColor: '#5200FF !important',
    fontStyle: 'normal',
    marginLeft: '15px !important',
    fontWeight: 450,
    fontSize: '12px !important',
    [theme.breakpoints.down('md')]: {
      width: '120px',
      padding: '10px 10px',
      fontSize: '10px',
    },
  },
}));

const searchBarStyles = makeStyles((theme) => ({
  search: {
    borderRadius: '4px',
    paddingTop: '0px',
    position: 'static',
    height: '36px',
    color: 'black',
    border: '1px solid #CCCCCC',
    backgroundColor: 'rgba(0, 0, 0, 0.02);',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },

    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },

    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      width: '250px',
      height: '40px',
      color: 'black',
      background: 'rgba(0, 0, 0, 0.02);',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    top: '0px',
    left: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBlack: {
    color: 'black !important',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1.3, 1, 1, 0),
    color: 'black !important',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#606060 !important',
      opacity: 1,
      fontSize: '14px',
    },
  },
}));

const topBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '25px',
    marginLeft: '20px',
  },
  positionRelative: {
    position: 'relative',
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

const tabStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingLeft: '5px',
    backgroundColor: 'white !important',
  },
  tabBar: {
    boxShadow: 'none !important',
    backgroundColor: 'white !important',
    paddingLeft: '20px',
  },
  tabBox: {
    backgroundColor: 'white !important',
    color: 'black',
    borderBottom: '1px solid grey !important',
  },
  tabValue: {
    fontStyle: 'normal',
    fontWeight: 550,
    fontSize: '19px',
    padding: '10px 30px',
    minWidth: '180px',
    textTransform: 'none',
  },
}));

const SwitchStyles = withStyles(() => ({
  root: {
    width: 45,
    height: 23,
    padding: 0,
    borderRadius: '20px',
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#747478',
    '&$checked': {
      transform: 'translateX(24px)',
      color: '#27AE60',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#E0DFE8',
        borderColor: '#E0DFE8',
      },
    },
    '&$checked + $track': {
      backgroundColor: '#E0DFE8',
    },
  },
  thumb: {
    width: 17,
    height: 17,
    boxShadow: 'none',
    marginTop: '0.1rem',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#E0DFE8',
  },
  checked: {},
}))(Switch);

export {
  buttonStyles,
  searchBarStyles,
  topBarStyles,
  SwitchStyles,
  tabStyles,
};
