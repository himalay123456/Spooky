/* eslint-disable import/no-unresolved */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { searchBarStyles } from './SearchStyles';
import { ReactComponent as SearchIcon } from '../../../../../../../Assets/Svg/Header/searchBlack.svg';

export default function Sidebar() {
  const classes = searchBarStyles();
  return (
    <>
      <div className={`${classes.search}`}>
        <div className={`${classes.searchIcon}`}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search Category..."
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
