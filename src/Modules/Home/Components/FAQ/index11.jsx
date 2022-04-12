/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import {
  Container, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import client from '../../../../utils/sanityClient';

const FAQ = ({ page }) => {
  const classes = useStyles();
  const [faqData, setFaqData] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch('*[_type == "faq"]', {})
      .then((res) => {
        setFaqData(res);
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
      <Grid container style={{ marginTop: '2vh' }}>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2} />
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Typography align="center" variant="h3" className={page === 'trendland' ? classes.title1 : classes.title}>
            FAQ
            {page === 'trendland' ? ':' : ''}
          </Typography>
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2} />
      </Grid>
      <Grid container style={{ marginBottom: '10vh' }}>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
        <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
          {faqData.length > 0 && faqData.map((item) => (
            <>
              <Typography variant="subtitle1" className={classes.heading}>{item.faqTitle}</Typography>
              <Typography variant="subtitle2" className={classes.subHeading}>
                {item.faqDesc}
              </Typography>
            </>
          ))}
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={1} xs={1} />
      </Grid>

    </Container>
  );
};

export default FAQ;
