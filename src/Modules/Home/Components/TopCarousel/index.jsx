/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Container,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { CarouselStyles } from './CarouselStyles';
import { ReactComponent as RightIcon } from '../../../../Assets/Svg/arrowRight.svg';
import { ReactComponent as LeftIcon } from '../../../../Assets/Svg/arrowLeft.svg';
import Carousel1 from '../../../../Assets/Images/carousel1.jpg';
import User from '../../../../Assets/Images/carouselUser.jpg';
import Carousel2 from '../../../../Assets/Images/carouselUserSmall.jpg';

const TopCarousel = () => {
  const classes = CarouselStyles();
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible
      disableRipple
      indicators={false}
      autoPlay={false}
      NextIcon={<RightIcon />}
      PrevIcon={<LeftIcon />}
      animation="fade"
      navButtonsProps={{
        classes: {
          root: classes.navButtonProps,
        },
        style: {
          background: 'transparent',
        },
      }}
    >
      {
                items.map((item, i) => <Item key={i} item={item} />)
            }
    </Carousel>
  );
};

const Item = () => {
  const classes = CarouselStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.mainComponent}
    >
      <Grid container className={classes.detailsComponent}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container>
            <Grid className={classes.headerBox}>
              <Typography className={classes.header1}>
                The Recursion
                <br />
                assemblage
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Typography className={classes.buttonText}>
                  View Drop Detail
                </Typography>
              </Button>
            </Grid>
            <Grid className={classes.footerBox}>
              <img src={User} alt="altImage" className={classes.userImage} />
              <Grid className={classes.displayFlex}>
                <Typography variant="h3" className={classes.header2}>
                  Created By
                </Typography>
                <Typography className={classes.header3}>
                  Branden Dawes
                </Typography>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button1}
              >
                <Typography className={classes.buttonText1}>
                  Follow Me
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.mobileImage}>
          <Grid container className={classes.sectionDesktop}>
            <img src={Carousel1} alt="altImage" className={classes.imageComponent} />
          </Grid>
          <Grid container className={classes.sectionMobile}>
            <img src={Carousel2} alt="altImage" className={classes.imageComponent1} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopCarousel;
