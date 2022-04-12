/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles(() => ({
  button: {
    height: '40px',
    width: '100%',
    background: 'black',
    margin: '30px 10px 0px',
    marginLeft: '0px',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
  icon: {
    height: '40px',
    width: '40px',
    marginTop: '-0px',
  },
}));

export { buttonStyles };
