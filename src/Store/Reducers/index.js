import { combineReducers } from 'redux';
import Auth from './Auth';
import Administrator from './Administrator';
import NFT from './NFT';
import Analytics from './Analytics';

export default () => combineReducers({
  Auth,
  Administrator,
  NFT,
  Analytics,
});
