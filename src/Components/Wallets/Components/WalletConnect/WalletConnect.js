/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import WalletButton from '../WalletButton/WalletButton';
import WallectConnectLogo from '../../../../Assets/Images/wallet-Connect.png';

const WalletConnect = ({ onWalletConnectClick }) => (
  <WalletButton
    title="Wallet Connect"
    logo={WallectConnectLogo}
    onConnectClick={onWalletConnectClick}
  />
);

export default WalletConnect;
