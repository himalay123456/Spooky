import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, Button, Tabs, Tab, AppBar,
} from '@material-ui/core';
import Image1 from '../../../../../../Assets/Images/viewNft2.png';
import { ReactComponent as Icon1 } from '../../../../../../Assets/Svg/viewNft3.svg';
import { ReactComponent as Icon2 } from '../../../../../../Assets/Svg/viewNft23.svg';
import { useStyles } from './styles';

const Tab2 = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Box className={classes.imageBox} style={{ background: `url(${Image1})` }}>
        <Box className={classes.innerBox}>
          <Box className={classes.topBox}>
            <Typography variamt="h3" className={classes.header1}>Pink Headz</Typography>
            <Icon1 />
          </Box>
          <Box className={classes.bottomBox}>
            <Box style={{ display: 'flex' }}>
              <Icon2 />
              <Typography variamt="h3" className={classes.header2}>@Luca ZZZ</Typography>
            </Box>
            <Typography variamt="h3" className={classes.header1}>1/1</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.imageBox} style={{ background: `url(${Image1})` }}>
        <Box className={classes.innerBox}>
          <Box className={classes.topBox}>
            <Typography variamt="h3" className={classes.header1}>Pink Headz</Typography>
            <Icon1 />
          </Box>
          <Box className={classes.bottomBox}>
            <Box style={{ display: 'flex' }}>
              <Icon2 />
              <Typography variamt="h3" className={classes.header2}>@Luca ZZZ</Typography>
            </Box>
            <Typography variamt="h3" className={classes.header1}>1/1</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.imageBox} style={{ background: `url(${Image1})` }}>
        <Box className={classes.innerBox}>
          <Box className={classes.topBox}>
            <Typography variamt="h3" className={classes.header1}>Pink Headz</Typography>
            <Icon1 />
          </Box>
          <Box className={classes.bottomBox}>
            <Box style={{ display: 'flex' }}>
              <Icon2 />
              <Typography variamt="h3" className={classes.header2}>@Luca ZZZ</Typography>
            </Box>
            <Typography variamt="h3" className={classes.header1}>1/1</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.imageBox} style={{ background: `url(${Image1})` }}>
        <Box className={classes.innerBox}>
          <Box className={classes.topBox}>
            <Typography variamt="h3" className={classes.header1}>Pink Headz</Typography>
            <Icon1 />
          </Box>
          <Box className={classes.bottomBox}>
            <Box style={{ display: 'flex' }}>
              <Icon2 />
              <Typography variamt="h3" className={classes.header2}>@Luca ZZZ</Typography>
            </Box>
            <Typography variamt="h3" className={classes.header1}>1/1</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.imageBox} style={{ background: `url(${Image1})` }}>
        <Box className={classes.innerBox}>
          <Box className={classes.topBox}>
            <Typography variamt="h3" className={classes.header1}>Pink Headz</Typography>
            <Icon1 />
          </Box>
          <Box className={classes.bottomBox}>
            <Box style={{ display: 'flex' }}>
              <Icon2 />
              <Typography variamt="h3" className={classes.header2}>@Luca ZZZ</Typography>
            </Box>
            <Typography variamt="h3" className={classes.header1}>1/1</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Tab2;
