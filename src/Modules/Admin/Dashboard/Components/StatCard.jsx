import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { statCardStyles } from '../dashboardStyles';

import ArrowUp from '../../../../Assets/Svg/arrowUp.svg';
import ArrowDown from '../../../../Assets/Svg/arrowDown.svg';
import Icon1 from '../../../../Assets/Svg/icon1.svg';
import Icon2 from '../../../../Assets/Svg/icon2.svg';
import Icon3 from '../../../../Assets/Svg/icon3.svg';
import Icon4 from '../../../../Assets/Svg/icon4.svg';
import Icon5 from '../../../../Assets/Svg/icon5.svg';
import Icon6 from '../../../../Assets/Svg/icon6.svg';

const stats = [
  {
    icon: Icon1,
    numCount: '3000',
    perCount: '25',
    title: 'Items On Marketplace',
    color: '#D7FFF2',
    growth: true,
  },
  {
    icon: Icon2,
    numCount: '10',
    perCount: '25',
    title: 'Items On Drops',
    color: '#D7ECFF',
    growth: true,
  },
  {
    icon: Icon3,
    numCount: '3',
    perCount: '47',
    title: 'Artist On Boarded',
    color: '#F9D7FF',
    growth: false,
  },
  {
    icon: Icon4,
    numCount: '1256',
    perCount: '25',
    title: 'User On Boarded',
    color: '#F4FF77',
    growth: true,
  },
  {
    icon: Icon5,
    perCount: '35',
    title: '% Growth In Collectible Value',
    color: '#FFDBDF',
    growth: true,
  },
  {
    icon: Icon6,
    perCount: '45',
    title: '% Growth In Primary Sale',
    color: '#D8FFB1',
    growth: true,
  },
  {
    icon: Icon6,
    perCount: '55',
    title: '% Growth In Secondary Sale',
    color: '#D7DBFF',
    growth: true,
  },
  {
    icon: Icon6,
    perCount: '12',
    title: '% Growth In Secondary Sale',
    color: '#D7FFFF',
    growth: true,
  },

];

export default function SpacingGrid() {
  const classes = statCardStyles();
  return (
    <Grid container className={`${classes.root} ${classes.mainGrid}`} spacing={0}>
      <Grid item>
        <Grid container lg={12} spacing={2}>
          {stats.map((value) => (
            <Grid key={value} item lg={3}>
              <Paper
                className={classes.paper}
                style={{
                  backgroundColor: `${value.color}`,
                  borderRadius: '6px',
                }}
              >
                <Grid item className={classes.iconBox}>
                  <Link to="/marketplace">
                    <Typography className={`${classes.icon} ${classes.backgroundTransparent}`}>
                      <Icon>
                        <img alt="imageAlt" src={value.icon} />
                      </Icon>
                    </Typography>
                  </Link>
                </Grid>
                <Link to="/marketplace" className={classes.noTextDecoration}>
                  <Grid item>
                    {value.numCount ? (
                      <Grid item className={`${classes.dataBox} ${classes.dFlex}`}>
                        <Grid item>
                          <Paper className={classes.dataValues}>{value.numCount}</Paper>
                        </Grid>
                        <Grid item className={classes.dataGrid}>
                          {value.growth ? (
                            <Paper className={`${classes.percantageValues} ${classes.perBox}`}>
                              <Icon className={classes.perIcon}>
                                <img alt="imageAlt" src={ArrowUp} />
                              </Icon>
                              <Typography className={classes.arrow}>
                                {value.perCount}
                                %
                              </Typography>
                            </Paper>
                          ) : (
                            <Paper className={`${classes.percantageValues} ${classes.negPerBox}`}>
                              <Icon className={classes.negPerIcon}>
                                <img alt="imageAlt" src={ArrowDown} />
                              </Icon>
                              <Typography className={classes.arrow}>
                                {value.perCount}
                                %
                              </Typography>
                            </Paper>
                          )}
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item className={classes.mTop35}>
                        <Paper className={classes.dataValues}>
                          {value.perCount}
                          %
                        </Paper>
                      </Grid>
                    )}
                    <Typography className={classes.titleBox}>
                      {value.title}
                    </Typography>
                  </Grid>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
