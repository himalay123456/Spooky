import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import Table from './Components/Table';
import { getAnalyticsList } from '../../../Store/Actions/Analytics';
import { AnalyticsStyles } from './styles';

const Analytics = () => {
  const classes = AnalyticsStyles();
  const dispatch = useDispatch();
  const analyticsList = useSelector((state) => state.Analytics.analyticsList);

  React.useEffect(() => {
    dispatch(getAnalyticsList());
  }, []);
  return (
    <Box>
      <Box className={classes.paddingAll}>
        <Table analyticsList={analyticsList} />
      </Box>
    </Box>
  );
};

export default Analytics;
