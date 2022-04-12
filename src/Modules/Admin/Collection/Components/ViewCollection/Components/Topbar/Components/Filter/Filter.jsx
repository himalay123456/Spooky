/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import {
  Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography,
} from '@material-ui/core';
import Filter from '../../../../../../../../../Assets/Svg/filter';
import ArrowDownIcon from '../../../../../../../../../Assets/Svg/arrowdown';
import ArrowDown from '../../../../../../../../../Components/DropDownIcon/ArrowDown';
import { ReactComponent as CloseIcon } from '../../../../../../../../../Assets/Svg/closeMedium.svg';
import { useStyles } from './FilterStyles';

// eslint-disable-next-line react/prop-types
export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    category: '',
    subcategory: '',
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        startIcon={<Filter />}
        endIcon={<ArrowDownIcon />}
        className={classes.filterButton}
      >
        <Typography className={classes.filterText}>Filter</Typography>
      </Button>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          classes={classes.popUp}
          style={{ marginTop: '7px' }}
          marginThreshold={20}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchorPosition={{ left: 20 }}
        >
          <Box className={classes.popUp}>
            <div className={classes.topBar}>
              <span onClick={handleClose} className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
            </div>
            <Grid container style={{ width: '100%', marginTop: '30px' }}>
              <Grid item style={{ widht: '50%' }}>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                  <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    className={classes.selectTag}
                    IconComponent={ArrowDown}
                    id="demo-simple-select-outlined"
                    value={state.category}
                    onChange={handleChange}
                    name="category"
                    label="Category"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item style={{ widht: '50%' }}>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                  <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Creator</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    className={classes.selectTag}
                    IconComponent={ArrowDown}
                    id="demo-simple-select-outlined"
                    value={state.subcategory}
                    onChange={handleChange}
                    label="Sub-Category"
                    name="subcategory"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container style={{ width: '101%', marginTop: '-17px' }}>
              <Grid item className={classes.width100}>
                <FormControl variant="outlined" className={`${classes.formControl} ${classes.width93}`} size="small">
                  <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Owner</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    className={classes.selectTag}
                    IconComponent={ArrowDown}
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Creation Date"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <TextField
                  id="dateFrom"
                  label="From"
                  type="date"
                  // defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <TextField
                id="dateTo"
                label="To"
                type="date"
                // defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Grid />
            </Grid>
            <Grid container>
              <Grid item style={{ widht: '50%' }}>
                <Button variant="contained" className={classes.buttonReset}>
                  Reset
                </Button>
              </Grid>
              <Grid item style={{ widht: '50%' }}>
                <Button variant="contained" className={classes.buttonApply} color="primary">
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Popover>
      </div>
    </div>
  );
}
