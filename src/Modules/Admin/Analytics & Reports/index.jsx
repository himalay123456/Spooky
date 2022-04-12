/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { tabStyles } from './styles';
import Onboarding from './Components/Onboarding';
import Sales from './Components/Sales';
import Issues from './Components/Issues';

import TopBar from './Components/TopBar';

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

export default function Adminstrator() {
  const classes = tabStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const handleDeleteClose = () => {
  //   setDelete(false);
  // };

  // eslint-disable-next-line no-unused-vars
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    // handleDeleteClose();
    // setDeleteConfirmation(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabBar}>
        <Tabs TabIndicatorProps={{ style: { background: 'black', height: '2px' } }} className={classes.tabBox} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tabValue} label="Onboarding Reports" {...a11yProps(0)} />
          <Tab className={classes.tabValue} label="Sales Reports" {...a11yProps(1)} />
          <Tab className={classes.tabValue} label="Issues Reports" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      { value === 0 && <TopBar title="Create New Drop" value={value} onButtonClick={toggleDrawer} /> }
      { value === 1 && <TopBar title="Create New Market Place" value={value} onButtonClick={toggleDrawer} /> }
      { value === 2 && <TopBar title="Create New Collection Request" value={value} onButtonClick={toggleDrawer} /> }
      <TabPanel value={value} index={0}>
        <Onboarding />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sales />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Issues />
      </TabPanel>
    </div>
  );
}
