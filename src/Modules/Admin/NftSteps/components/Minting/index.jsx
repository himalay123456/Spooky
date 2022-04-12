/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Container, Grid, Typography, Button, Box, CircularProgress,
} from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import { ReactComponent as Upload } from '../../../../../Assets/Svg/upload.svg';
import { ReactComponent as Icon1 } from '../../../../../Assets/Svg/viewNft3.svg';
import { ReactComponent as Icon2 } from '../../../../../Assets/Svg/viewNft23.svg';
import { useStyles } from './styles';
import Loader from '../../../../../Components/Loader';

// eslint-disable-next-line react/prop-types
const Minting = ({ changeStep, imageUrl, title, artistName, numberOfCopies, isMinted }) => {
  const classes = useStyles();
  const { account } = useWeb3React();
  const [loading, setLoading] = React.useState(true);
  const [imageUrlPath, setImageUrlPath] = React.useState('https://ipfs.io/ipfs/bafybeihpibgwv5gdnkb6oeckmrr4rzvgpyynbwjxz6cotoonabegd4njui/img-b.jpg');
  const [cardDetails, setCardDetails] = React.useState({
    title: 'Pink Headz',
    artistName: '@Luca ZZZ',
    numberOfCopies: '5',
  });

  React.useEffect(() => {
    setImageUrlPath(imageUrl);
    setCardDetails({
      title,
      artistName,
      numberOfCopies,
    });
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid container style={{ marginTop: '5vh' }}>
        <Grid item xs={5} xl={5} md={5}>
          <Box className={classes.imageBox}>
            <img
              src={imageUrlPath}
              alt="preview"
              className={classes.imagePreview}
              style={{ display: loading ? 'none' : 'block' }}
              onLoad={() => {
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            />
            { loading && (
            <Loader />
            )}
            <Box className={classes.innerBox}>
              <Box className={classes.topBox}>
                <Typography variamt="h3" className={classes.header1}>{cardDetails.title}</Typography>
                <Icon1 />
              </Box>
              <Box className={classes.bottomBox}>
                <Box style={{ display: 'flex' }}>
                  <Icon2 />
                  <Typography variamt="h3" className={classes.header2}>{cardDetails.artistName}</Typography>
                </Box>
                <Typography variamt="h3" className={classes.header1}>
                  1/
                  {cardDetails.numberOfCopies}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7} xl={7} md={7}>
          <Typography variant="h3" className={classes.title}>
            {isMinted ? 'The NFT is minted successfully' : 'Your NFT is being minted...'}
          </Typography>
          <Typography variant="h3" className={classes.title1}> Your Artwork is being minted as an NFT on the Ethereum blockchain. This process will continue if you navigate away from this page.</Typography>
          <Typography variant="h3" className={classes.title2}> While your NFT is listed on PolyOne, it will be escrowed within PolyOne’s smart contracts.</Typography>
          <Grid container style={{ display: 'flex', marginBottom: '10vh', marginTop: '30px', width: '90%' }}>
            <Grid item xs={6} xl={6} md={6} style={{ display: 'flex', width: '100%' }}>
              <Upload />
              <Typography variant="subtitle1" style={{ opacity: '1', fontWeight: '600' }} className={classes.title3}><a href={`https://etherscan.io/address/${account}#tokentxns`} target="window">View on Etherscan</a></Typography>
            </Grid>
            <Grid item xs={6} xl={6} md={6} style={{ textAlign: 'end' }}>
              <Button disabled={!isMinted} onClick={() => changeStep(3)} variant="contained" size="large" type="submit" className={classes.submitBtn}>
                { !isMinted && <CircularProgress size={20} style={{ color: 'white' }} />}
                { isMinted && 'List NFT' }
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Minting;
