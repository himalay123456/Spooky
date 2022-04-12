/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { tabStyles } from './administratorStyles';
import AdminManagement from './Components/AdminManagement/AdminManagement';
import RoleManagement from './Components/RoleManagement/RoleManagement';
import TopBar from './Components/TopBar/TopBar';
import CreateAdmin from '../../../Components/Form/Create';
import SuccessModal from '../../../Components/Modal/SuccessModal';
import ConfirmationModal from '../../../Components/Modal/ConfirmationModal';
import CreateAdminForm from './Components/AdminManagement/CreateAdmin';
import CreateRoleForm from './Components/RoleManagement/CreateRole';
import { Loader } from '../../../Components/TableLoader';
import {
  getRoleList, deleteRole, deleteAdmin, getSingleAdmin,
} from '../../../Store/Actions/Administrator';

const TabPanel = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export default function Adminstrator() {
  const classes = tabStyles();
  const dispatch = useDispatch();
  const [editId, setEditId] = React.useState(null);
  const [deleteId, setDeleteId] = React.useState(null);
  const [edit, setEdit] = React.useState(false);
  const [delete1, setDelete] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const singleAdminDetails = useSelector((reduxState) => reduxState.Administrator.singleAdmin);
  const singleAdmin = singleAdminDetails.data ? singleAdminDetails.data.admin : {};
  const editFlag = !!singleAdminDetails.data;

  React.useEffect(() => {
    console.log('editId changed', singleAdmin, editFlag);
  }, [editId, singleAdminDetails, editFlag]);

  const handleDeleteClose = () => {
    setDelete(false);
  };

  console.log('Edit id is', editId);

  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [createConfirmation, setCreateConfirmation] = React.useState(false);
  const [editConfirmation, setEditConfirmation] = React.useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = React.useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    handleDeleteClose();
    setDeleteConfirmation(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSuceessClose = () => {
    console.log('handleSuceessClose');
    setOpenSuccessModal(false);
    setCreateConfirmation(false);
    setEditConfirmation(false);
  };

  const handleConfirmationClose = () => {
    setOpenConfirmationModal(false);
  };

  const disableEdit = () => {
    setEdit(false);
  };

  const handleDeleteButtonClick = (id) => {
    setDeleteId(id);
    setOpenDeleteModal(true);
    setDeleteId(id);
    setDelete(true);
  };

  const handleOnDeleteSuccess = () => {
    if (value === 1) { dispatch(deleteRole(deleteId)); }
    if (value === 0) { dispatch(deleteAdmin(deleteId)); }
    setOpenSuccessModal(true);
    setDeleteConfirmation(true);
    setDelete(false);
    setTimeout(() => {
      setDeleteConfirmation(false);
    }, 2000);
  };

  const handleOnEditSuccess = () => {
    setOpenSuccessModal(true);
    setEditConfirmation(true);
    setEdit(false);
    setTimeout(() => {
      setEditConfirmation(false);
    }, 2000);
    dispatch(getRoleList());
  };

  const handleOnCreateSuccess = () => {
    setOpenSuccessModal(true);
    setCreateConfirmation(true);
    setTimeout(() => {
      setCreateConfirmation(false);
    }, 2000);
    dispatch(getRoleList());
  };
  const buttonOneClick = () => {
    setOpenConfirmationModal(false);
    setEditId(null);
  };

  // const handleEditButtonClick = (id) => {
  //   setOpenConfirmationModal(true);
  //   setEditId(id);
  // };
  const buttonTwoClick = (id) => {
    console.log('buttonTwoClick', id);
    setOpenConfirmationModal(false);
    setEdit(true);
    setEditId(id);
    dispatch(getSingleAdmin(id));
    toggleDrawer('right', true)();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabBar}>
        <Tabs TabIndicatorProps={{ style: { background: 'black', height: '2px' } }} className={classes.tabBox} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tabValue} label="Admin Management" {...a11yProps(0)} />
          <Tab className={classes.tabValue} label="Role Management" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      { value === 0 && <TopBar title="Create New Admin" value={value} onButtonClick={toggleDrawer} /> }
      { value === 1 && <TopBar title="Create New Role" value={value} onButtonClick={toggleDrawer} /> }
      <TabPanel value={value} index={0}>
        <AdminManagement
          handleEditButtonClick={buttonTwoClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RoleManagement
          handleEditButtonClick={buttonTwoClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </TabPanel>
      {(value === 0 && edit) ? (singleAdmin !== undefined && editFlag) ? (
        <CreateAdmin state={state} header="Edit Admin" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
          <CreateAdminForm
            edit={edit}
            initialValue={singleAdmin}
            editId={editId}
            handleOnSuccess={handleOnEditSuccess}
            toggleDrawer={toggleDrawer}
          />
        </CreateAdmin>
      ) : <Loader /> : (
        <CreateAdmin state={state} header="Create Admin" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
          <CreateAdminForm
            edit={edit}
            handleOnSuccess={handleOnCreateSuccess}
            toggleDrawer={toggleDrawer}
          />
        </CreateAdmin>
      )}
      {(value === 1 && edit) ? (
        <CreateAdmin state={state} header="Edit Role" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
          <CreateRoleForm
            edit={edit}
            editId={editId}
            handleOnSuccess={handleOnEditSuccess}
            toggleDrawer={toggleDrawer}
          />
        </CreateAdmin>
      ) : (value === 1) ? (
        <CreateAdmin state={state} header="Create Role" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
          <CreateRoleForm
            edit={edit}
            editId={editId}
            handleOnSuccess={handleOnCreateSuccess}
            toggleDrawer={toggleDrawer}
          />
        </CreateAdmin>
      ) : ''}
      { (value === 0 && createConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Admin Created" subtitle="New Admin created" type="create" />}
      { (value === 1 && createConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Role Created" subtitle="New Role created" type="create" />}
      { (value === 0 && editConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Edit Confirmation" subtitle="Admin edited successfully" type="edit" />}
      { (value === 1 && editConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Edit Confirmation" subtitle="Role edited successfully" type="edit" />}
      { (value === 0 && deleteConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Delete Confirmation" subtitle="Admin Deleted" type="delete" />}
      { (value === 1 && deleteConfirmation) && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Delete Confirmation" subtitle="Role Deleted" type="delete" />}
      { value === 0 && <ConfirmationModal handleClose={handleConfirmationClose} open={openConfirmationModal} heading="Edit Admin" subtitle="Are you sure you want to edit admin?" button1="Cancel" button2="Edit" onButton1Click={buttonOneClick} onButton2Click={buttonTwoClick} /> }
      { (value === 0 && delete1) && <ConfirmationModal handleClose={handleDeleteClose} open={openDeleteModal} heading="Delete Admin" subtitle="Are you sure you want to delete admin?" button1="Cancel" button2="Delete" onButton1Click={handleDeleteClose} onButton2Click={handleOnDeleteSuccess} /> }
      { (value === 1 && delete1) && <ConfirmationModal handleClose={handleDeleteClose} open={openDeleteModal} heading="Delete Role" subtitle="Are you sure you want to remove this role from this list? Once you delete this role, all the user will no longer be able to access the module is added under this role." button1="Cancel" button2="Delete" onButton1Click={handleDeleteClose} onButton2Click={handleOnDeleteSuccess} /> }
    </div>
  );
}
