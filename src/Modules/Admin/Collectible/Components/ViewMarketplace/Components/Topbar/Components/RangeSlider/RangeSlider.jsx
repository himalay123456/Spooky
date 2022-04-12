import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { muiTheme, PrettoSlider } from './RangeSliderStyles';

const ValueLabelComponent = (props) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CustomizedSlider() {
  return (
    <Box style={{ padding: '10px' }}>
      <ThemeProvider theme={muiTheme}>
        <Typography style={{ fontSize: '14px', marginTop: '-5px' }}>Bid Amount</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          // aria-label="pretto slider"
          defaultValue={20}
        />
      </ThemeProvider>
    </Box>
  );
}
