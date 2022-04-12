/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  Container, Grid, Typography, Box, Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { nftImagePreview } from '../../../../../Store/Actions/NFT';

import { useStyles, buttonStyles } from './styles';
import Nft1 from '../../../../../Assets/Images/NFT/nft1.png';
import Nft2 from '../../../../../Assets/Images/NFT/nft2.png';
import Nft3 from '../../../../../Assets/Images/NFT/nft3.png';
import Nft4 from '../../../../../Assets/Images/NFT/nft4.png';
import Nft5 from '../../../../../Assets/Images/NFT/nft5.png';
import Nft6 from '../../../../../Assets/Images/NFT/nft6.png';
import Nft7 from '../../../../../Assets/Images/NFT/nft7.png';
import ComingSoon from '../../../../../Assets/Images/NFT/nft8.png';
import { ReactComponent as Icon1 } from '../../../../../Assets/Svg/step2-a.svg';
import UseUserAccount from '../../../../../hooks/UseUserAccount';

// import { ReactComponent as Format6 } from '../../../../../Assets/Svg/format6.svg';

// eslint-disable-next-line react/prop-types
const CreateNew = ({ layout }) => {
  const [format, setFormat] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { account } = UseUserAccount();
  const chooseFormat = () => {
    setFormat(true);
  };

  useEffect(() => {
    console.log('🚀 ~ file: index.jsx ~ line 33 ~ CreateNew ~ account', account);
    dispatch(nftImagePreview());
  }, [account]);
  useEffect(() => {
    if (state !== null) {
      if (state.back) { setFormat(true); }
    }
  }, [state]);
  const goToSteps = () => {
    navigate('/admin/createNft/steps');
  };

  const cards = [
    {
      name: 'Create NFTs',
      image: Nft1,
      description: 'Define NFTs Type:Image / Video / 3D...',
      background: 'linear-gradient(180deg, #00FF47 0%, rgba(255, 255, 255, 0) 100%)',
    },
    {
      name: 'Build Collectives',
      image: Nft2,
      description: 'Build multi-authors and receive split funds + royalties...',
      background: 'linear-gradient(180deg, #A1F4FF 0%, rgba(255, 255, 255, 0) 100%)',
    },
    {
      name: 'Fractionale NFTs',
      image: ComingSoon,
      description: 'Create fractionable NFTs to multiple buyers',
      background: 'linear-gradient(180deg, #F3F2EC 0%, rgba(255, 255, 255, 0) 100%)',
    },
  ];

  const formats = [
    {
      name: 'IMAGE',
      image: Nft3,
      description: 'JPG / PNG / GIF',
      background: 'linear-gradient(180deg, #B3A0FF 0%, rgba(255, 255, 255, 0) 100%)',
    },
    {
      name: 'VIDEO',
      image: Nft4,
      description: 'MP4',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F88939 100%)',
    },
    {
      name: '3D',
      image: Nft5,
      description: 'GTLF or GLB',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #4DB2FB 100%)',
    },
    {
      name: 'MUSIC',
      image: Nft6,
      description: 'MP3 / WAVE / FLAC',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFD600 100%)',
    },
    {
      name: 'OTHERS',
      image: Nft7,
      description: 'Coming Soon',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
    },
  ];
  const classes = useStyles();
  const buttonStyle = buttonStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      {account != undefined ? (
        <Grid container className={classes.mainContainer}>
          { format && (
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.leftGrid}>
            <Box onClick={() => setFormat(false)} style={{ cursor: 'pointer' }}>
              <Icon1 />
            </Box>
          </Grid>
          )}
          <Box style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography className={layout === 'admin' ? classes.header1a : classes.header1}>Create New NFT</Typography>
            { format && <Typography className={classes.header3}>Choose Format</Typography>}
          </Box>
          { !format ? (
            <Grid container className={classes.cardsContainer}>
              <Grid item xl={1} lg={1} />
              {
            cards.map((card) => (
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={classes.cardBox} onClick={chooseFormat}>
                <Box className={classes.card1}>
                  <Box
                    className={`${classes.inner1}`}
                    style={{ background: `${card.background}` }}
                  >
                    <Box className={classes.portion1}>
                      <Typography className={classes.portion1Header}>{card.name}</Typography>
                    </Box>
                    <Box className={classes.portion1}>
                      <img src={card.image} alt="nft" />
                    </Box>
                  </Box>
                  <Box className={classes.inner2}>
                    <Typography className={classes.header2}>{card.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          }
              <Grid item xl={1} lg={1} />
            </Grid>
          ) : (
            <Grid container className={classes.cardsContainer}>
              <Grid item xl={1} lg={1} />
              {
            formats.map((card, index) => (
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className={index === 0 ? classes.cardBox : classes.cardBox1} onClick={index === 0 ? goToSteps : ''}>
                <Box className={classes.card1}>
                  <Box
                    className={`${classes.inner1a}`}
                    style={{ background: `${card.background}` }}
                  >
                    <Box className={classes.portion1a}>
                      <Typography className={classes.portion1Header}>{card.name}</Typography>
                    </Box>
                    <Box className={classes.portion1a}>
                      <img src={card.image} alt="nft" />
                    </Box>
                    <Box className={classes.portion1a}>
                      <Typography className={classes.portion1Header}>{card.description}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))
          }
              <Grid item xl={1} lg={1} />
            </Grid>
          ) }
        </Grid>
      ) : (
        <Grid container className={classes.mainContainer}>
          <Box style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography className={classes.header3}>Please connect wallet to continue</Typography>
          </Box>
        </Grid>
      ) }
    </Container>

  );
};

export default CreateNew;

// <Button
//             variant="contained"
//             color="primary"
//             className={buttonStyle.button}
//           >
//             Connect Wallet
//           </Button>
