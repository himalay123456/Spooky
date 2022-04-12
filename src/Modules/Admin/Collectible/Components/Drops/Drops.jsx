/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable object-curly-newline */
// /* eslint-disable react/prop-types */
// /* eslint-disable object-curly-newline */
// /* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import moment from 'moment';
import { getAllNftsRequest, getNFTDetails } from '../../../../../Store/Actions';
import Table from '../../../../../Components/Table/Table';
import { Loader } from '../../../../../Components/TableLoader';

const Drops = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [finalList, setFinalList] = React.useState([]);
  const { account } = useWeb3React();
  React.useEffect(() => {
    dispatch(getAllNftsRequest());
  }, []);

  const NFT_LIST = useSelector((state) => state.NFT.nftList);

  const generateAdminList = () => {
    const list = [];
    if (NFT_LIST) {
      NFT_LIST.slice(0).reverse().map((nft) => {
        const formattedDate = moment(nft.createdAt).format('DD/MM/YYYY');
        list.push({
          id: nft._id,
          tokenIdWithLink: nft.tokenId ? nft.tokenId : 'No Token Id',
          name: nft.artistName,
          numberOfCopies: nft.numberOfCopies,
          Status: nft.status,
          creationDate: formattedDate,
        });
      });
      console.log('NFT_LIST', list);
      setFinalList(list);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    generateAdminList();
  }, [NFT_LIST]);

  const handleViewButton = (id) => {
    // dispatch(getNFTDetails(id));
    dispatch(getNFTDetails({ id, account }));

    const nft = NFT_LIST.filter((item) => item._id === id);
    console.log('🚀 ~ file: Drops.jsx ~ line 53 ~ handleViewButton ~ nft', nft[0]);
    if (nft[0].status === 'saved') {
      navigate('/admin/createNft/mint');
    } else if (nft[0].status === 'minted') {
      navigate('/admin/createNft/list');
    } else if (nft[0].status === 'listed') {
      navigate('/admin/createNft/mint');
    }
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'tokenIdWithLink', flag: 'tokenIdWithLink', label: 'Token Id', alignRight: false },
    { id: 'name', flag: 'name', label: 'NFT Name', alignRight: false },
    { id: 'numberOfCopies', flag: 'numberOfCopies', label: 'Number Of Copies', alignRight: false },
    { id: 'Status', flag: 'Status', label: 'Status', alignRight: false },
    { id: 'creationDate', flag: 'creationDate', label: 'Creation Date', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: false, remove: false },
      callback: { handleViewButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  if (loading) {
    return <Loader />;
  }

  if (finalList && finalList.length > 0) {
    return (
      <Table USERLIST={finalList} TABLE_HEAD={TABLE_HEAD} />
    );
  }
  return <h2>No Data Found !</h2>;
};

export default Drops;

// const DesignPending = () => <h2> Design Pending</h2>;

// export default DesignPending;
