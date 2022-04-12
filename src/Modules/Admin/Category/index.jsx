import React from 'react';
import { Box } from '@material-ui/core';
import { categoryStyles } from './CategoryStyles';
import Topbar from './Components/Topbar/Topbar';
import Table from './Components/Table/Table';
import CreateCategoryForm from './Components/Form/CreateCategoryForm';
import CreateCategory from '../../../Components/Form/Create';
import SuccessModal from '../../../Components/Modal/SuccessModal';
import ConfirmationModal from '../../../Components/Modal/ConfirmationModal';
import ViewCategoryModal from './Components/ViewCategory';

const Category = () => {
  const classes = categoryStyles();
  const [edit, setEdit] = React.useState(false);
  const [delete1, setDelete] = React.useState(false);
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [openViewModal, setViewModal] = React.useState(false);
  const [editConfirmation, setEditConfirmation] = React.useState(false);
  const [createConfirmation, setCreateConfirmation] = React.useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = React.useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const handleDeleteClose = () => {
    setDelete(false);
  };
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    handleDeleteClose();
    setDeleteConfirmation(false);
  };
  const disableEdit = () => {
    setEdit(false);
  };
  const handleOnEditSuccess = () => {
    setOpenSuccessModal(true);
    setEditConfirmation(true);
    setEdit(false);
  };
  const handleOnCreateSuccess = () => {
    setOpenSuccessModal(true);
    setCreateConfirmation(true);
  };
  const handleSuceessClose = () => {
    setOpenSuccessModal(false);
    setCreateConfirmation(false);
    setEditConfirmation(false);
    setViewModal(false);
  };
  const handleConfirmationClose = () => {
    setOpenConfirmationModal(false);
  };
  const buttonOneClick = () => {
    setOpenConfirmationModal(false);
  };
  const buttonTwoClick = (e) => {
    setOpenConfirmationModal(false);
    setEdit(true);
    toggleDrawer('right', true)(e);
  };
  const handleOnDeleteSuccess = () => {
    setOpenSuccessModal(true);
    setDeleteConfirmation(true);
    setDelete(false);
  };
  const handleEditButtonClick = () => {
    setOpenConfirmationModal(true);
  };
  const handleDeleteButtonClick = () => {
    setOpenDeleteModal(true);
    setDelete(true);
  };

  const handleViewModalClick = () => {
    setViewModal(true);
  };

  return (
    <Box>
      <Topbar title="Create New Category" onButtonClick={toggleDrawer} />
      <Box className={classes.paddingAll}>
        <Table
          handleEditButtonClick={handleEditButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleViewButtonClick={handleViewModalClick}
        />
      </Box>
      { edit ? (
        <CreateCategory state={state} header="Edit Category" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
          <CreateCategoryForm
            edit={edit}
            handleOnSuccess={handleOnEditSuccess}
            toggleDrawer={toggleDrawer}
          />
        </CreateCategory>
      )
        : (
          <CreateCategory state={state} header="Create Category" disableEdit={disableEdit} toggleDrawer={toggleDrawer}>
            <CreateCategoryForm
              edit={edit}
              handleOnSuccess={handleOnCreateSuccess}
              toggleDrawer={toggleDrawer}
            />
          </CreateCategory>
        )}
      <ViewCategoryModal open={openViewModal} heading="View Category" handleClose={handleSuceessClose} />
      { createConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Category Created" subtitle="New Category created" type="create" />}
      { editConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Edit Confirmation" subtitle="Category edited" type="edit" />}
      { deleteConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Delete Confirmation" subtitle="Category Deleted" type="delete" />}
      <ConfirmationModal handleClose={handleConfirmationClose} open={openConfirmationModal} heading="Edit Category" subtitle="Are you sure you want to edit this category?" button1="Cancel" button2="Edit" onButton1Click={buttonOneClick} onButton2Click={buttonTwoClick} />
      { delete1 && <ConfirmationModal handleClose={handleDeleteClose} open={openDeleteModal} heading="Delete Category" subtitle="Are you sure you want to delete this category?" button1="Cancel" button2="Delete" onButton1Click={handleDeleteClose} onButton2Click={handleOnDeleteSuccess} /> }

    </Box>
  );
};

export default Category;
