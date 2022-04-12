/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles((theme) => ({
  button: {
    width: '180px',
    height: '40px',
    marginRight: '20px',
    backgroundColor: '#5200FF',
    fontStyle: 'normal',
    marginLeft: '15px',
    fontWeight: 450,
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      width: '120px',
      padding: '10px 10px',
      fontSize: '10px',
    },
  },
}));

export { buttonStyles };
