/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

const topBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
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

export { topBarStyles };
