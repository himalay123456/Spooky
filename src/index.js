/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/tomica-black-webfont.woff';
import './fonts/tomica-black-webfont.woff2';
import './fonts/tomica-bold-webfont.woff';
import './fonts/tomica-bold-webfont.woff2';
import './fonts/tomica-light-webfont.woff';
import './fonts/tomica-light-webfont.woff2';
import './fonts/tomica-thin-webfont.woff';
import './fonts/tomica-thin-webfont.woff2';
import './fonts/tomica-webfont.woff2';
import './fonts/tomica-webfont.woff';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Web3ReactProvider } from '@web3-react/core';
import App from './App';
import configureStore from './Store';
import getLibrary from './utils/getLibrary';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Web3ReactProvider getLibrary={getLibrary}>
            <App />
            <ToastContainer />
          </Web3ReactProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
