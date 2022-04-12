import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { topBarStyles } from './TopbarStyles';
import Filter from './Components/Filter/Filter';
import Selected from '../../../../../Collectible/Components/TopBar/Components/Selected/Selected';

// eslint-disable-next-line react/prop-types
export default function TopBar() {
  const classes = topBarStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ marginLeft: '-30px' }}>
        <Grid item xs={6} xl={6} md={6} lg={6}>
          <Grid item style={{ marginRight: '20px' }}>
            <Typography className={classes.heading}> Collectibles </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} xl={6} md={6} lg={6} className={classes.dFlex}>
          <Grid item style={{ marginRight: '20px' }}>
            <Selected text="Sports" />
          </Grid>
          <Grid item style={{ marginRight: '20px' }}>
            <Filter />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
