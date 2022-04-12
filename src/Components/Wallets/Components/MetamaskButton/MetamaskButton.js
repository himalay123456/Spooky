/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import WalletButton from '../WalletButton/WalletButton';

import metamaskLogo from '../../../../Assets/Images/metamask.png';

const MetamaskButton = ({ title, onMetamaskClick }) => (
  <div>
    <WalletButton
      title={title}
      logo={metamaskLogo}
      onConnectClick={onMetamaskClick}
    />
  </div>
);

export default MetamaskButton;
