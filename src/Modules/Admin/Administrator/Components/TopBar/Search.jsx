/* eslint-disable import/no-unresolved */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { ReactComponent as SearchIcon } from '../../../../../Assets/Svg/Header/searchBlack.svg';
import { searchBarStyles } from '../../administratorStyles';

// eslint-disable-next-line react/prop-types
export default function Sidebar({ text }) {
  const classes = searchBarStyles();
  return (
    <>
      <div className={`${classes.search}`}>
        <div className={`${classes.searchIcon}`}>
          <SearchIcon className={classes.colorBlack} />
        </div>
        <InputBase
          placeholder={text}
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
