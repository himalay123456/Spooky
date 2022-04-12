/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import Table from '../../../../../Components/Table/Table';
import USERLIST from '../../../../../_mocks/collectionRequests';

const CollectionRequest = () => {
  const navigate = useNavigate();
  const handleViewButton = () => {
    navigate('/admin/collection/viewRequest');
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'userName', flag: 'userName', label: 'User Name', alignRight: false },
    { id: 'email', flag: 'email', label: 'Email', alignRight: false },
    { id: 'colectionName', flag: 'colectionName', label: 'Collection Name', alignRight: false },
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

export default CollectionRequest;
