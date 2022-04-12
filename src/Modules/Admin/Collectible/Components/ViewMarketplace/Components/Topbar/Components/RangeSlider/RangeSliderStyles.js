import { createTheme, styled } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      root: {
        borderRadius: '14px',
        width: '95%',
        padding: '0px 2px',
      },
      thumb: {
        color: 'black',
      },
      track: {
        color: 'black',
      },
      rail: {
        color: 'black',
        opacity: 1,
        height: 6,
        borderRadius: '14px',
      },
    },
  },
});

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  borderRadius: '14px',
  marginBottom: '10px',
  marginTop: '10px',
  '& .MuiSlider-track': {
    borderRadius: '14px',
    height: '6px',
    '&:after': {
      height: '6px',
    },
  },
  '& .MuiSlider-thumb': {
    height: '8px',
    width: '8px',
    padding: '4px',
    marginTop: '-4px',
    backgroundColor: '#fff',
    border: '3px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    marginLeft: '-5px',
  },
});

export { muiTheme, PrettoSlider };
