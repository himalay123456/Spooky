/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    margin: '0% 2%',
  },
  table: {
    marginTop: '5vh',
    '& tr': {
      '& td': {
        padding: '0px 70px 10px 0px',
        fontWeight: '700',
      },
    },
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    marginRight: '5px',
  },
  cursorPointer: {
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '5px',
  },
  path: {
    fontWeight: 'bold',
    display: 'flex',
  },
  buttonContainer: {
    marginTop: '40px',
    paddingLeft: '165px',
  },
  '@media screen and (max-width: 1024px)': {
    buttonContainer: {
      paddingLeft: '20%',
    },
  },
  '@media screen and (max-width: 768px)': {
    buttonContainer: {
      paddingLeft: '22%',
    },
  },
});
