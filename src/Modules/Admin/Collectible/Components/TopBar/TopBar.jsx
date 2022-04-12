import React from 'react';
import Grid from '@material-ui/core/Grid';
import { topBarStyles } from './TopbarStyles';
import Filter from './Components/Filter/Filter';
import Search from './Components/SearchBar/Search';
import Button from './Components/Button/Button';
// import Selected from './Components/Selected/Selected';

// eslint-disable-next-line react/prop-types
export default function TopBar({ onButtonClick, title, value }) {
  const classes = topBarStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} xl={6} md={6} lg={6} className={classes.dFlex} style={{ justifyContent: 'unset' }}>
          <Grid item style={{ marginRight: '20px' }}>
            <Filter value={value} />
          </Grid>
          {/* <Grid item>
            <Selected text="Auction" />
          </Grid> */}
        </Grid>
        <Grid item xs={6} className={classes.dFlex}>
          <Grid item className={classes.positionRelative}>
            {value === 0 && <Search text="Search Collectible..." />}
            {value === 1 && <Search text="Search Collectible..." flag />}
            {value === 2 && <Search text="Search Collectible..." flag />}
          </Grid>
          <Grid item>
            {value === 0 && <Button title={title} onButtonClick={onButtonClick} /> }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
