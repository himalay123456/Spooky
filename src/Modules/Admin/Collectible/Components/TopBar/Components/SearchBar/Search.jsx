/* eslint-disable import/no-unresolved */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { ReactComponent as SearchIcon } from '../../../../../../../Assets/Svg/Header/searchBlack.svg';
import { searchBarStyles } from './SearchStyles';

// eslint-disable-next-line react/prop-types
export default function Sidebar({ text, flag }) {
  const classes = searchBarStyles();
  const searchClass = flag ? classes.searchClass : classes.search;
  return (
    <>
      <div className={`${searchClass}`}>
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
