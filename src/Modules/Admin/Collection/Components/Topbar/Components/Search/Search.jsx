/* eslint-disable import/no-unresolved */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { ReactComponent as SearchIcon } from '../../../../../../../Assets/Svg/Header/searchBlack.svg';
import { searchBarStyles } from './SearchStyles';

export default function Sidebar() {
  const classes = searchBarStyles();
  return (
    <>
      <div className={`${classes.search}`}>
        <div className={`${classes.searchIcon}`}>
          <SearchIcon className={classes.colorBlack} />
        </div>
        <InputBase
          placeholder="Search Collection..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </>
  );
}
