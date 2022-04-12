/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
// import { useNavigate } from 'react-router';
import Table from '../../../../../Components/Table/Table';
import CATEGORYLIST from '../../../../../_mocks/category';

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
    { id: 'name', flag: 'name', label: 'Category Name', alignRight: false },
    { id: 'creationDate', flag: 'role', label: 'Creation Date', alignRight: false },
    { id: 'subcategories', flag: 'email', label: 'No. of Subcategories', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: true, remove: true },
      callback: { handleViewButton, handleEditButton, handleDeleteButton },
      label: 'Actions',
      alignRight: false,
    },
  ];

  return (
    <Table USERLIST={CATEGORYLIST} TABLE_HEAD={TABLE_HEAD} />
  );
};

export default CategortTable;
