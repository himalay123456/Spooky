/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import Table from '../../../../../Components/Table/Table';
import USERLIST from '../../../../../_mocks/allRequests';

const AllCollection = () => {
  const navigate = useNavigate();
  const handleViewButton = () => {
    navigate('/admin/collection/viewCollection');
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'name', flag: 'name', label: 'Collection Name', alignRight: false },
    { id: 'totalItems', flag: 'totalItems', label: 'Total Items', alignRight: false },
    { id: 'creationDate', flag: 'creationDate', label: 'Creation Date', alignRight: false },
    { id: 'collectionType', flag: 'collectionType', label: 'Collection Type', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: false, remove: false },
      callback: { handleViewButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  return (
    <div style={{ paddingRight: '-50px' }}>
      <Table USERLIST={USERLIST} TABLE_HEAD={TABLE_HEAD} />
    </div>
  );
};

export default AllCollection;
