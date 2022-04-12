/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box, Button, Tabs, Tab, AppBar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import { ReactComponent as Icon1 } from '../../../../../../Assets/Svg/viewNft21.svg';
import { ReactComponent as Icon2 } from '../../../../../../Assets/Svg/viewNft22.svg';
import { ReactComponent as Icon3 } from '../../../../../../Assets/Svg/viewNft13.svg';
import { ReactComponent as Icon4 } from '../../../../../../Assets/Svg/viewNft14.svg';
import { ReactComponent as Icon5 } from '../../../../../../Assets/Svg/viewNft15.svg';
import { ReactComponent as Icon6 } from '../../../../../../Assets/Svg/viewNft16.svg';
import { ReactComponent as Icon7 } from '../../../../../../Assets/Svg/nftBack1.svg';

import { ReactComponent as DashIcon } from '../../../../../../Assets/Svg/viewNft10.svg';

import { useStyles } from './styles';

const TabPanel = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const BottomSection = ({ nftDetails, nftHistory }) => {
  const classes = useStyles();
  const [copied, setCopied] = React.useState(false);
  const {
    tokenId, blockchainCurrency, uploadedFile,
  } = nftDetails;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginTop: '2vh' }}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ paddingLeft: '100px' }}>
          <Box style={{ marginTop: '50px', position: 'relative' }}>
            <DashIcon />
            <Typography display="inline" className={classes.header1}>Nft Metadata </Typography>
          </Box>
          <Box className={classes.topBox}>
            <Box className={classes.displayFlex} style={{ display: 'none' }}>
              <Typography display="inline" className={classes.header2}>Type</Typography>
              <Typography display="inline" className={classes.header3}>7500 x 4638 px  (Image/Jpeg)  5MB </Typography>
            </Box>
            <Box className={classes.displayFlex}>
              <Typography display="inline" className={classes.header2}>Contract Address</Typography>
              <CopyToClipboard
                text="0x9f7dd5ea934d188a599567ee104e97fa46cb4496"
                onCopy={() => {
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 1000);
                }}
              >
                <Typography display="inline" className={classes.header3} style={{ cursor: 'pointer' }}>
                  0x9f7d...4496 &nbsp;&nbsp;
                  { !copied ? <Icon1 /> : <Typography display="inline" className={classes.header3a}>Copied</Typography> }
                </Typography>
              </CopyToClipboard>
            </Box>
            { tokenId && (
            <Box className={classes.displayFlex}>
              <Typography display="inline" className={classes.header2}>Token ID</Typography>
              <Typography display="inline" className={classes.header3}>{ tokenId }</Typography>
            </Box>
            )}
            <Box className={classes.displayFlex}>
              <Typography display="inline" className={classes.header2}>Blockchain</Typography>
              <Typography display="inline" className={classes.header3}>
                { blockchainCurrency }
                {' '}
              </Typography>
            </Box>
            <Box className={classes.displayFlex}>
              <Typography display="inline" className={classes.header2}>Etherscan transaction</Typography>
              <a href="https://etherscan.io/address/0x9f7dd5ea934d188a599567ee104e97fa46cb4496#tokentxns" target="window">
                <Icon2 />
              </a>
            </Box>
            <Box className={classes.displayFlex}>
              <Typography display="inline" className={classes.header2}>IPFS</Typography>
              <a href={uploadedFile} target="window">
                <Icon2 />
              </a>
            </Box>
            <Box className={classes.displayFlex} style={{ display: 'none' }}>
              <Typography display="inline" className={classes.header2}>IPFS Metadata</Typography>
              <Icon2 />
            </Box>
          </Box>
          <Box style={{ marginTop: '50px', position: 'relative', display: 'none' }}>
            <DashIcon />
            <Typography display="inline" className={classes.header1}>Price History </Typography>
          </Box>
          <Box className={classes.topBox2} style={{ display: 'none' }}>
            <Icon7 />
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={{ position: 'relative', padding: '0px 80px' }}>
          <Box style={{ marginTop: '50px', position: 'relative', display: 'none' }}>
            <DashIcon />
            <Typography display="inline" className={classes.header1}>Additional Images</Typography>
          </Box>
          <Box className={classes.interactBox1} style={{ display: 'none' }}>
            <Icon3 />
            <Icon3 />
            <Icon3 />
          </Box>
          <Box style={{ marginTop: '50px', marginBottom: '50px', position: 'relative' }}>
            <DashIcon />
            <Typography display="inline" className={classes.header1}>Listing History</Typography>
          </Box>
          { nftHistory.length > 0 ? (
            // eslint-disable-next-line no-unused-vars
            nftHistory.map((nft) => (
              <Box className={classes.topBox1}>
                <Grid container>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <Icon4 />
                  </Grid>
                  <Grid item xl={5} lg={5} md={5} sm={5} xs={5} className={classes.displayFlex2}>
                    <Typography display="inline" className={classes.header5}>
                      Offer by
                      {' '}
                      <Typography display="inline" className={classes.header5} style={{ color: '#5E6282', marginLeft: '0px' }}>@Princessa</Typography>
                    </Typography>
                    <Typography className={classes.header4}>
                      {' '}
                      {moment(nft.createdAt).format('MMM Do YYYY, h:mm a') }
                    </Typography>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1} style={{ marginLeft: '25px', marginRight: '-15px' }}>
                    <Icon5 />
                  </Grid>
                  <Grid item xl={3} lg={3} md={3} sm={2} xs={2} className={classes.displayFlex2}>
                    <Typography display="inline" className={classes.header5a}>
                      {nft.price}
                      {' '}
                      {nft.currency}
                    </Typography>
                    <Typography className={classes.header4}>$6,0182.00</Typography>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1} style={{ marginLeft: '5px' }}>
                    <Icon6 />
                  </Grid>
                </Grid>
              </Box>
            ))
          ) : (<Typography>No Listing History !</Typography>)}
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{ marginTop: '20vh', paddingLeft: '20px', marginBottom: '20vh' }}>
          <AppBar position="static" className={classes.tabBar}>
            <Tabs TabIndicatorProps={{ style: { background: '#16E38A', height: '5px', borderRadius: '20px' } }} className={classes.tabBox} value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab className={classes.tabValue} disableRipple label="More from the Artist  23" {...a11yProps(0)} />
              <Tab className={classes.tabValue} disableRipple label="More from the Owner 12" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.tabPanel}>
            <Tab1 />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanel}>
            <Tab2 />
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BottomSection;
