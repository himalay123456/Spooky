/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
// import { useNavigate } from 'react-router';
import Table from '../../../../../../../Components/Table/Table';
import COLLECTIBLELIST from '../../../../../../../_mocks/viewCollectible';

const CategortTable = ({ handleEditButtonClick, handleDeleteButtonClick, handleViewButtonClick }) => {
  // const navigate = useNavigate();
  const handleViewButton = () => {
    handleViewButtonClick();
  };

  const handleEditButton = () => {
    handleEditButtonClick();
  };
  const handleDeleteButton = () => {
    handleDeleteButtonClick();
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'bidderName', flag: 'bidderName', label: 'BiddeR Name', alignRight: false },
    { id: 'bidAmount', flag: 'bidAmount', label: 'Bid Amount', alignRight: false },
    { id: 'bidStatus', flag: 'bidStatus', label: 'Bid Status', alignRight: false },
    { id: 'paymentMethod', flag: 'viewCollectiblepaymentMethod', label: 'Payment Method', alignRight: false },
    {
      id: 'actions',
      flag: { read: false, edit: false, remove: false },
      callback: { handleViewButton, handleEditButton, handleDeleteButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  return (
    <Table USERLIST={COLLECTIBLELIST} TABLE_HEAD={TABLE_HEAD} />
  );
};

export default CategortTable;
