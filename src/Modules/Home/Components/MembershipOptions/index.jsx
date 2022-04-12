/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Typography, Box, IconButton,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import BuyPopup from '../BuyPopup1';
import Loader from '../../../../Components/Loader';
import { getAllNftsRequest } from '../../../../Store/Actions';
import ImageViewer from '../../../../Components/ImageViewer';

const ExclusiveAccess = () => {
  const cards = [
    {
      membership: 'Free',
      eth: 0,
      price: 0,
    },
    {
      membership: 'Silver',
      eth: 0.2,
      price: 612,
    },
    {
      membership: 'Gold',
      eth: 0.5,
      price: 1492,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNftsRequest());
  }, []);
  const Tickets = useSelector((state) => state.LandingPage.NFTs);
  const classes = useStyles();
  const [cardIndex, setCardIndex] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [nftLink, setNftLink] = useState(null);

  const handleImageViewerClose = () => {
    setImageUrl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // eslint-disable-next-line no-unused-vars
  const handleClick = (event, index) => {
    setCardIndex(index);
    setAnchorEl(event.currentTarget);
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container className={classes.mainContainer}>
        <Box style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Typography className={classes.header1}>NFT ACCESS Ticket</Typography>
          <Typography className={`${classes.header3} ${classes.sectionDesktop}`} style={{ marginTop: '30px' }}>
            A limitted pre-access membership tickeets to 5,100. And as a lifetime member you will not only be part of a special group of collectors and artists but have an exclsuive access of the future POLYONE.IO and special 1/1 edition airdropped.
          </Typography>
        </Box>
        <Grid container className={classes.cardsContainer}>
          {
            // eslint-disable-next-line array-callback-return
            Tickets && Tickets.slice(0).reverse().filter((ticket) => ticket.isTicket).map((elem) => (
              <Grid item xl={2} lg={3} md={4} sm={6} xs={12} className={classes.cardBox}>
                <Box className={classes.card1}>
                  <Box className={`${classes.inner1} ${classes.sectionDesktop}`}>
                    <img
                      src={elem.uploadedFile}
                      className={classes.logoImage}
                      style={{ display: loading ? 'none' : 'block' }}
                      alt="Spooky Action Labs"
                      loloading="lazy"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setImageUrl(elem.uploadedFile);
                        setNftLink(elem._id);
                      }}
                      onLoad={() => setLoading(false)}
                    />
                    { loading && <Loader />}
                    { imageUrl && (
                    <ImageViewer imageUrl={imageUrl} handleClose={handleImageViewerClose} size="lg" viewNft={`/view-nft/${nftLink}`} />
                    )}
                  </Box>
                  <Box className={`${classes.inner1} ${classes.sectionMobile}`}>
                    <img
                      src={elem.uploadedFile}
                      style={{ display: loading ? 'none' : 'block' }}
                      className={classes.logoImage1}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setImageUrl(elem.uploadedFile);
                      }}
                      alt="Spooky Action Labs"
                      loloading="lazy"
                      onLoad={() => setLoading(false)}
                    />
                    { loading && <Loader />}
                  </Box>
                  <Box className={classes.inner2} onClick={() => navigate(`/view-nft/${elem._id}`)}>
                    <Typography className={classes.header4}>{elem.title}</Typography>
                    <Typography className={classes.header5}>
                      Only
                      {' '}
                      {elem.numberOfCopies}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.card2} onClick={() => navigate(`/view-nft/${elem._id}`)}>
                  <Typography className={classes.card2Header}>
                    Pre-Access to Spooky & the Trendland Gallery
                  </Typography>
                  <Typography className={classes.card2Header}>
                    Gallery Surprise artwork airdropped
                  </Typography>
                  <Typography className={classes.card2Header}>
                    Lifetime updates
                  </Typography>
                  <Box className={classes.cardButton} onClick={() => navigate(`/view-nft/${elem._id}`)}>
                    <IconButton size="small" color="inherit" className={classes.noHover}>
                      <Typography className={classes.topLink}>
                        LIMITED to:
                        {' '}
                        {elem.numberOfCopies}
                      </Typography>
                      <Typography className={classes.activeLink}>Sold Out</Typography>
                      <Typography className={classes.bottomLink}>0 remaining</Typography>
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>
        <BuyPopup onClose={handleClose} open={open} cardValues={cards[cardIndex]} />
      </Grid>
    </Container>

  );
};

export default ExclusiveAccess;
