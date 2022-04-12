import { combineReducers } from 'redux';
import LandingPage from './Landing';
import NFT from './NFT';

export default () => combineReducers({
  LandingPage,
  NFT,
});
