/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, Typography, Box,
} from '@material-ui/core';
import { useLocation } from 'react-router';
import { ReactComponent as Icon1 } from '../../Assets/Svg/viewNft3.svg';
import { ReactComponent as Icon2 } from '../../Assets/Svg/viewNft23.svg';
import Icon3 from '../../Assets/Svg/exclusive2.svg';
import Header from '../../Components/Header';
import { useStyles } from './styles';

const BuyNft = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const [imageUrlPath, setImageUrlPath] = React.useState('https://ipfs.io/ipfs/bafybeihpibgwv5gdnkb6oeckmrr4rzvgpyynbwjxz6cotoonabegd4njui/img-b.jpg');
  const [cardDetails, setCardDetails] = React.useState({
    title: 'Pink Headz',
    artistName: '@Luca ZZZ',
    numberOfCopies: '5',
  });

  React.useEffect(() => {
    if (state !== null) {
      const { imageUrl, title, artistName, numberOfCopies } = state;
      setImageUrlPath(imageUrl);
      setCardDetails({
        title,
        artistName,
        numberOfCopies,
      });
    }
  }, [state]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer}>
        <Typography className={classes.header1}>Welcome to your wallet</Typography>
        <Typography className={classes.header2}>
          Congratulation on your
          {' '}
          {cardDetails.title}
          {' '}
          NFT!
        </Typography>
        <Box className={`${classes.iconBox6} ${classes.sectionDesktop}`}>
          <img
            src={Icon3}
            className={classes.iconBox2}
            alt="Spooky Action Labs"
            loloading="lazy"
          />
        </Box>
        <Box className={`${classes.iconBox6} ${classes.sectionMobile}`}>
          <img
            src={Icon2}
            className={classes.iconBox2a}
            alt="Spooky Action Labs"
            loloading="lazy"
          />
        </Box>
        <Typography className={classes.header3}>
          Just like a cryptocurrency wallet, it will allow you to receive and store your cards.You will find your wallet address on the top right corner of this page
        </Typography>
        <Box style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box className={classes.imageBox}>
            <img
              src={imageUrlPath}
              alt="preview"
              className={classes.imagePreview}
            />
            <Box className={classes.innerBox}>
              <Box className={classes.topBox}>
                <Typography variamt="h3" className={classes.header1a}>{cardDetails.title}</Typography>
                <Icon1 />
              </Box>
              <Box className={classes.bottomBox}>
                <Box style={{ display: 'flex' }}>
                  <Icon2 />
                  <Typography variamt="h3" className={classes.header2a}>{cardDetails.artistName}</Typography>
                </Box>
                <Typography variamt="h3" className={classes.header1a}>
                  1/
                  {cardDetails.numberOfCopies}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>

  );
};

const BuyNftPage = () => (
  <>
    <Header />
    <BuyNft />
  </>
);
export default BuyNftPage;
