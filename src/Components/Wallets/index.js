/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useWeb3React } from '@web3-react/core';

import { injected, walletconnect, walletLink } from '../../utils/connectors';
import { useEagerConnect, useInactiveListener } from '../../hooks';

import MetamaskButton from './Components/MetamaskButton/MetamaskButton';
import WalletConnect from './Components/WalletConnect/WalletConnect';
import WalletLinkConnect from './Components/WalletLinkConnect/WalletLinkConnect';

const ONBOARD_TEXT = 'Click to install MetaMask!';
const CONNECT_TEXT = 'Connect Metamask';

const Wallets = () => {
  const [metamaskButtonText, setMetamaskButtonText] = useState(ONBOARD_TEXT);
  const [activatingConnector, setActivatingConnector] = useState();

  const { account, activate, connector } = useWeb3React();
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
  };

  const onConnectWithWalletConnectClick = () => {
    setActivatingConnector(walletconnect);
    activate(walletconnect);
  };

  const onLinkConnectClick = () => {
    setActivatingConnector(walletLink);
    activate(walletLink);
  };

  return (
    <div className="wallet-wrapper">
      <MetamaskButton
        title={metamaskButtonText}
        onMetamaskClick={onConnectWithMetamaskClick}
      />
      <WalletConnect onWalletConnectClick={onConnectWithWalletConnectClick} />
      <WalletLinkConnect onWalletLinkConnectClick={onLinkConnectClick} />
    </div>
  );
};

export default Wallets;
