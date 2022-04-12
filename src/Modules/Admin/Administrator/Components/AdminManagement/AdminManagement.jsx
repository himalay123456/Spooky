/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
import Table from '../../../../../Components/Table/Table';
import { getAdminManagementList } from '../../../../../Store/Actions';
import { Loader } from '../../../../../Components/TableLoader';

function AdminManagement({ handleEditButtonClick, handleDeleteButtonClick }) {
  const [loading, setLoading] = React.useState(true);
  const [finalList, setFinalList] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ADMIN_LIST = useSelector((state) => state.Administrator.adminList);
  const ADDED = useSelector((state) => state.Administrator.createAdmin);
  const ADMIN_ADDED = ADDED ? ADDED.id : '';
  const EDITED = useSelector((state) => state.Administrator.editAdmin);
  const ADMIN_EDITED = EDITED ? EDITED.id : '';

  const DELETED = useSelector((state) => state.Administrator.deleteAdmin);
  const ADMIN_DELETED = DELETED ? DELETED.id : '';

  useEffect(() => {
    dispatch(getAdminManagementList());
  }, [ADMIN_ADDED, ADMIN_DELETED, ADMIN_EDITED]);

  const generateAdminList = () => {
    const list = [];
    if (ADMIN_LIST) {
      ADMIN_LIST.map((admin) => {
        list.push({
          id: admin._id,
          status: admin.isActive ? 'active' : 'not active',
          name: admin.name,
          role: 'Adam Giral',
          email: admin.email,
        });
      });
      console.log('ADMIN_LIST', list);
      setFinalList(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    generateAdminList();
  }, [ADMIN_LIST]);

  const handleViewButton = (id) => {
    navigate(`/admin/administrator/details/${id}`);
  };

  const handleEditButton = (id) => {
    handleEditButtonClick(id);
  };
  const handleDeleteButton = (id) => {
    handleDeleteButtonClick(id);
  };

  const TABLE_HEAD = [
    { id: 'id', flag: 'id', label: 'Sr.No', alignRight: false },
    { id: 'status', flag: 'status', label: 'Status', alignRight: false },
    { id: 'name', flag: 'name', label: 'Admin Name', alignRight: false },
    { id: 'role', flag: 'role', label: 'Admin Role', alignRight: false },
    { id: 'email', flag: 'email', label: 'Admin Email', alignRight: false },
    {
      id: 'actions',
      flag: { read: true, edit: true, remove: true },
      callback: { handleViewButton, handleEditButton, handleDeleteButton },
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
}

export default AdminManagement;
