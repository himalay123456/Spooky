/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
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
  const [faqIndex, setFaqIndex] = React.useState(100);

  React.useEffect(() => {
    client
      .fetch('*[_type == "faq"]', {})
      .then((res) => {
        console.log('🚀 ~ file: index.jsx ~ line 23 ~ .then ~ res', res);
        const newData = [];
        newData.push(res[0]);
        newData.push(res[0]);
        newData.push(res[0]);
        newData.push(res[0]);
        newData.push(res[0]);
        setFaqData(newData);
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
        <Grid item xl={3} lg={3} md={3} sm={2} xs={1} />
        <Grid item xl={6} lg={6} md={6} sm={8} xs={10}>
          {faqData.length > 0 && faqData.map((item, index) => (
            <div className={classes.faqBox}>
              <div className={faqIndex === index ? classes.borderBottom : null}>
                <Typography
                  variant="subtitle1"
                  className={classes.heading}
                  onClick={() => {
                    if (faqIndex === index) {
                      setFaqIndex(100);
                    } else {
                      setFaqIndex(index);
                    }
                  }}
                >{item.faqTitle}
                </Typography>
              </div>
              {faqIndex === index
                ? (
                  <Typography variant="subtitle2" className={classes.subHeading}>
                    {item.faqDesc}
                  </Typography>
                )
                : null}
            </div>
          ))}
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={2} xs={1} />
      </Grid>

    </Container>
  );
};

export default FAQ;
