/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import './WalletButton.css';

const WalletButton = ({ title, logo, onConnectClick }) => (
  <div className="loginCard" onClick={onConnectClick}>
    <div>{title}</div>
    <div>
      <img src={logo} width="30" height="auto" alt="logo" />
    </div>
  </div>
);

export default WalletButton;
