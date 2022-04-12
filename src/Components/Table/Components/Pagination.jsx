/* eslint-disable react/prop-types */
// eslint-disable-next-line object-curly-newline
import { Box, Typography, InputBase, Icon } from '@material-ui/core';
import React from 'react';
import { paginationStyles } from '../tableStyles';
import RightArrow from '../../../Assets/Svg/rightArrow.svg';
import LeftArrow from '../../../Assets/Svg/leftArrow.svg';

function Pagination({
  currentPage, maxPage, handlePrevPage, handleNextPage,
}) {
  const classes = paginationStyles();
  return (
    <Box className={classes.box}>
      <Typography className={classes.title}>Page</Typography>
      <InputBase
        placeholder="1"
        value={currentPage + 1}
        className={classes.input}
        inputProps={{ 'aria-label': 'search' }}
      />
      <Typography className={classes.title}>
        of &nbsp;
        {maxPage}
      </Typography>
      <Icon className={classes.arrowBox} onClick={handlePrevPage}>
        <img alt="imageAlt" className={classes.icon} src={LeftArrow} />
      </Icon>
      <Icon className={`${classes.arrowBox} ${classes.mRight}`} onClick={handleNextPage}>
        <img alt="imageAlt" className={classes.icon} src={RightArrow} />
      </Icon>
    </Box>
  );
}

export default Pagination;
