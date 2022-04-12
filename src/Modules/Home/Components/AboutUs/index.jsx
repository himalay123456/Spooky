/* eslint-disable max-len */
import {
  Container, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import client from '../../../../utils/sanityClient';

const AboutUs = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [aboutUs, setAboutUs] = React.useState(null);

  React.useEffect(() => {
    client
      .fetch('*[_type == "aboutus"]', {})
      .then((res) => {
        const finalList = res[0].aboutus.map((item) => item.children[0].text);
        setAboutUs(finalList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container>
        <Grid item xl={2} lg={2} md={1} sm={2} xs={2} />
        <Grid item xl={8} lg={8} md={10} sm={8} xs={8}>
          <Typography align="center" variant="h3" className={classes.title}> ABOUT US </Typography>
        </Grid>
        <Grid item xl={2} lg={2} md={1} sm={2} xs={2} />
      </Grid>
      <Grid container style={{ marginBottom: '10vh' }}>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={1} />
        <Grid item xl={6} lg={6} md={6} sm={8} xs={10} className={classes.aboutUsBox}>
          <Grid container>
            <Grid item xl={1} md={0} sm={0} />
            <Grid item xl={10} sm={12}>
              {aboutUs ? aboutUs.map((item) => <Typography variant="subtitle1" className={classes.heading}>{item}</Typography>) : null}
            </Grid>
            <Grid item xl={1} sm={0} />
          </Grid>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={1} />
      </Grid>

    </Container>
  );
};

export default AboutUs;
