// eslint-disable-next-line import/no-extraneous-dependencies
import IPFS from 'ipfs-http-client';

const IPFS_HOST = process.env.REACT_APP_IPFS_HOST;
const IPFS_PORT = process.env.REACT_APP_IPFS_PORT;
const IPFS_PROTOCOL = process.env.REACT_APP_IPFS_PROTOCOL;

const ipfs = new IPFS({
  host: IPFS_HOST,
  port: IPFS_PORT,
  protocol: IPFS_PROTOCOL,
});

export default ipfs;
