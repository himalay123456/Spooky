import React from 'react';
import Grid from '@material-ui/core/Grid';
import { topBarStyles } from './TopbarStyles';
import Filter from './Components/Filter/Filter';
import Search from './Components/Search/Search';
import Button from './Components/Button/Button';

// eslint-disable-next-line react/prop-types
export default function TopBar({ onButtonClick, title }) {
  const classes = topBarStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} xl={6} md={6} lg={6}>
          <Filter />
        </Grid>
        <Grid item xs={6} className={classes.dFlex}>
          <Grid item className={classes.positionRelative}>
            <Search />
          </Grid>
          <Grid item>
            <Button title={title} onButtonClick={onButtonClick} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
