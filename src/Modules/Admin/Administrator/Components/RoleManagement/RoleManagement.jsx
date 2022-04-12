/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../../../../Components/Table/Table';
// import USERLIST from '../../../../../_mocks/roles';
import { getRoleList } from '../../../../../Store/Actions/Administrator';
import { Loader } from '../../../../../Components/TableLoader/index';

const RoleManagement = ({ handleEditButtonClick, handleDeleteButtonClick }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = React.useState(true);
  const [finalList, setFinalList] = React.useState([]);
  const dispatch = useDispatch();
  const ROLES = useSelector((state) => state.Administrator.roleList);
  const DELETED_ROLE = useSelector((state) => state.Administrator.deleteRole);
  const DELETED = DELETED_ROLE ? DELETED_ROLE.success : false;
  useEffect(() => {
    dispatch(getRoleList());
  }, []);

  useEffect(() => {
    dispatch(getRoleList());
  }, [DELETED]);

  const generateRolesList = () => {
    const list = [];
    if (ROLES.data) {
      const ROLES_LIST = ROLES.data.admin;
      // eslint-disable-next-line array-callback-return
      ROLES_LIST.map((role) => {
        const formattedDate = moment(role.createdAt).format('DD/MM/YYYY');
        list.push({
          id: role._id,
          roleName: role.roleName,
          createdBy: 'Adam Giral',
          creationDate: formattedDate,
        });
      });
      setFinalList(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    generateRolesList();
  }, [ROLES]);

  const handleViewButton = (id) => {
    navigate('/admin/administrator/viewRole', { state: { id } });
  };

  // const getAllRolesList

  const handleEditButton = (id) => {
    handleEditButtonClick(id);
  };
  const handleDeleteButton = (id) => {
    handleDeleteButtonClick(id);
  };

  const TABLE_HEAD = [
    { id: 'id', label: 'Sr.No', alignRight: false },
    { id: 'roleName', label: 'Role Name', alignRight: false },
    { id: 'createdBy', label: 'Created By', alignRight: false },
    { id: 'creationDate', label: 'Creation Date', alignRight: false },
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

  if (finalList.length > 0) {
    return (
      <Table USERLIST={finalList} TABLE_HEAD={TABLE_HEAD} />
    );
  }
  return <h2>No Data Found !</h2>;
};

export default RoleManagement;
