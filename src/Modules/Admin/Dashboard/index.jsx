import React from 'react';
import { Box } from '@material-ui/core';
import { mainStyles } from './dashboardStyles';

import Topbar from './Components/Topbar';
import StatCard from './Components/StatCard';
import Requests from './Components/Requests';
import Graph from './Components/Graph';

function Dashboard() {
  const classes = mainStyles();
  return (
    <Box className={classes.box}>
      <Topbar />
      <StatCard />
      <Graph />
      <Requests />
    </Box>
  );
}

export default Dashboard;
//
