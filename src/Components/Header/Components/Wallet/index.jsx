/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useWeb3React } from '@web3-react/core';
// import { useDispatch } from 'react-redux';
import Icon1 from '../../../../Assets/Svg/wallet1.svg';
// import Icon2 from '../../../../Assets/Svg/wallet2.svg';
import Icon3 from '../../../../Assets/Svg/wallet3.svg';
import Icon4 from '../../../../Assets/Svg/wallet4.svg';
import { injected, walletconnect, walletLink } from '../../../../utils/connectors';
import { useEagerConnect, useInactiveListener } from '../../../../hooks';
import { useStyles } from './styles';
// import { createUserProfile } from '../../../../Store/Actions';

// const ONBOARD_TEXT = 'Click to install MetaMask!';
const CONNECT_TEXT = 'Connect Metamask';

const Wallet = ({ handleWalletClose }) => {
  // eslint-disable-next-line no-unused-vars
  const [metamaskButtonText, setMetamaskButtonText] = useState('');
  const [activatingConnector, setActivatingConnector] = useState();
  // const dispatch = useDispatch();
  const {
    account, activate, connector,
  } = useWeb3React();
  const onboarding = useRef();

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // For Metamask OnBoarding
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  // const handleCreateProfileFail = () => {
  //   // setLoader(false);
  // };

  // const handleCreateProfileSuccess = ({ isEmailVerified }) => {
  //   if (!isEmailVerified) props.setOpenEmailVerification(true);
  //   // setLoader(false);
  // };

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      } else {
        setMetamaskButtonText(CONNECT_TEXT);
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const onConnectWithMetamaskClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setActivatingConnector(injected);
      activate(injected);
    } else {
      onboarding.current.startOnboarding();
    }
    handleWalletClose();
  };

  const onConnectWithWalletConnectClick = () => {
    setActivatingConnector(walletconnect);
    activate(walletconnect);
    handleWalletClose();
  };

  const onLinkConnectClick = () => {
    setActivatingConnector(walletLink);
    activate(walletLink);
    handleWalletClose();
  };

  const classes = useStyles();
  return (
    <Grid className={classes.app}>
      <Typography className={classes.header1}>Pick your Wallet to Connect</Typography>
      <Box className={classes.walletBox} onClick={() => onConnectWithMetamaskClick()}>
        <img
          src={Icon1}
          className={classes.icon1}
          alt="icon1"
          loading="lazy"
        />
        <Typography className={classes.header2}>METAMASK</Typography>
      </Box>
      <Box className={classes.walletBox} onClick={() => onConnectWithWalletConnectClick()}>
        <img
          src={Icon3}
          className={classes.icon1}
          alt="icon1"
          loading="lazy"
        />
        <Typography className={classes.header2} style={{ marginLeft: '12px' }}>WALLET CONNECT</Typography>
      </Box>
      <Box className={classes.walletBox} onClick={() => onLinkConnectClick()}>
        <img
          src={Icon4}
          style={{ marginLeft: '-15px' }}
          className={classes.icon1}
          alt="icon1"
          loading="lazy"
        />
        <Typography className={classes.header2} style={{ marginLeft: '0px' }}>COINBASE WALLET</Typography>
      </Box>
    </Grid>
  );
};

export default Wallet;

// <Box className={classes.walletBox}>
//         <img
//           src={Icon2}
//           className={classes.icon1}
//           alt="icon1"
//           loading="lazy"
//         />
//         <Typography className={classes.header2} style={{ marginLeft: '7px' }}>FORMATIC</Typography>
//       </Box>
