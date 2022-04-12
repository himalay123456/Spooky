/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import WalletButton from '../WalletButton/WalletButton';

import walletLinkSVG from '../../../../Assets/Images/coinbaseWalletIcon.svg';

const WalletLinkConnect = ({ onWalletLinkConnectClick }) => (
  <div>
    <WalletButton
      title="Open in Coinbase Wallet"
      logo={walletLinkSVG}
      onConnectClick={onWalletLinkConnectClick}
    />
  </div>
);

export default WalletLinkConnect;
