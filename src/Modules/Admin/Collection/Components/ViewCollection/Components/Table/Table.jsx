/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
// import { useNavigate } from 'react-router';
import Table from '../../../../../../../Components/Table/Table';
import COLLECTIBLELIST from '../../../../../../../_mocks/viewCollection';

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
    { id: 'collectionName', flag: 'collectionName', label: 'Collection Name', alignRight: false },
    { id: 'category', flag: 'category', label: 'Category', alignRight: false },
    { id: 'creator', flag: 'creator', label: 'Creator', alignRight: false },
    { id: 'owner', flag: 'owner', label: 'Owner', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: false, remove: false },
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
