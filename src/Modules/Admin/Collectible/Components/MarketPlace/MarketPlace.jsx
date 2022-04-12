/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import Table from '../../../../../Components/Table/Table';
import USERLIST from '../../../../../_mocks/marketPlace';

const MarketPlace = () => {
  const navigate = useNavigate();
  const handleViewButton = () => {
    navigate('/admin/collectible/viewCollectible');
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'owner', flag: 'owner', label: 'Owner', alignRight: false },
    { id: 'collectibleName', flag: 'collectibleName', label: 'Collectible Name', alignRight: false },
    { id: 'saleType', flag: 'saleType', label: 'Sale Type', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: false, remove: false },
      callback: { handleViewButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  return (
    <Table USERLIST={USERLIST} TABLE_HEAD={TABLE_HEAD} />
  );
};

export default MarketPlace;
