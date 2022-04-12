import React from 'react';
import Grid from '@material-ui/core/Grid';
import { topBarStyles } from '../../administratorStyles';
import Filter from './Filter/Filter';
import Search from './Search';
import Button from './Button';

// eslint-disable-next-line react/prop-types
export default function TopBar({ onButtonClick, title, value }) {
  const classes = topBarStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} xl={6} md={6} lg={6}>
          <Filter value={value} />
        </Grid>
        <Grid item xs={6} className={classes.dFlex}>
          <Grid item className={classes.positionRelative}>
            {value === 0 && <Search text="Search Admin..." />}
            {value === 1 && <Search text="Search Role..." />}
          </Grid>
          <Grid item>
            <Button title={title} onButtonClick={onButtonClick} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
