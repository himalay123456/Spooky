/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */

import { makeStyles } from '@material-ui/core/styles';
// import subscribeBG from '../../../../Assets/Images/subscribe_bg.png';

export const useStyles = makeStyles({
  app: {
    background: '#fff',
  },
  gridContainer: {
    backgroundImage: require('../../../../Assets/Images/subscribe_bg.png'),
  },
  '@media screen and (min-width: 600px)': {
  },

  '@media screen and (max-width: 768px)': {

  },
});
