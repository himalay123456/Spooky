/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import {
  Container, Grid, TextField, Button, Box, Typography, CircularProgress,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createRole, getSingleRole, editRole } from '../../../../../Store/Actions';
import { formStyles } from './RoleManagementStyles';
import Switch from '../Switch/Switch';
import ConfirmationModal from '../../../../../Components/Modal/ConfirmationModal';

const Roles = [
  {
    role: 'admin',
    name: 'Admin Management',
  },
  {
    role: 'role',
    name: 'Role Management',
  },
  {
    role: 'category',
    name: 'Category Management',
  },
  {
    role: 'collections',
    name: 'Collections Management',
  },
  {
    role: 'drop',
    name: 'Drop Management',
  },
  {
    role: 'marketPlace',
    name: 'MarketPlace Management',
  },
  {
    role: 'user',
    name: 'User Management',
  },
  {
    role: 'reports',
    name: 'Reports Management',
  },
  {
    role: 'cms',
    name: 'Cms Management',
  },
];

const validationSchema = yup.object({
  name: yup
    .string('Enter valid Name')
    .required('Name is required'),
});

// eslint-disable-next-line no-unused-vars
const CreateRole = ({
  edit, editId, handleOnSuccess, toggleDrawer,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
  // const [edit, setEdit] = React.useState(false);
  const classes = formStyles();
  const dispatch = useDispatch();
  const createSuccessResponse = useSelector((state) => state.Administrator.createRole);
  const editSuccessResponse = useSelector((state) => state.Administrator.editRole);
  const singleRoleDetails = useSelector((state) => state.Administrator.singleRole);
  const singleRoleData = singleRoleDetails.data ? singleRoleDetails.data.admin : {};
  const editFlag = !!singleRoleDetails.data;

  useEffect(() => {
    if (editId) dispatch(getSingleRole(editId));
  }, [editId]);

  useEffect(() => {
    const response = (createSuccessResponse && createSuccessResponse.success);
    if (response && loading) {
      setLoading(false);
      handleOnSuccess();
      toggleDrawer('right', false)();
    }
    const response1 = (editSuccessResponse && editSuccessResponse.success);
    if (response1 && loading) {
      setLoading(false);
      handleOnSuccess();
      toggleDrawer('right', false)();
    }
  }, [createSuccessResponse, editSuccessResponse]);

  const buttonOneClick = () => {
    setOpenConfirmationModal(false);
    // setEditId(null);
  };

  const buttonTwoClick = () => {
    setOpenConfirmationModal(false);
    setLoading(true);
    dispatch(editRole(formValues, editId));
  };

  const handleCreateForm = (values) => {
    const {
      name,
      admin_view,
      admin_create,
      admin_update,
      admin_delete,
      role_view,
      role_create,
      role_update,
      role_delete,
      category_view,
      category_create,
      category_update,
      category_delete,
      collections_view,
      collections_create,
      collections_update,
      collections_delete,
      drop_view,
      drop_create,
      drop_update,
      drop_delete,
      marketPlace_view,
      marketPlace_create,
      marketPlace_update,
      marketPlace_delete,
      user_view,
      user_create,
      user_update,
      user_delete,
      reports_view,
      reports_create,
      reports_update,
      reports_delete,
      cms_view,
      cms_create,
      cms_update,
      cms_delete,
    } = values;
    const body = {
      roleName: name,
      admin: {
        create: admin_create,
        update: admin_update,
        view: admin_view,
        delete: admin_delete,
      },
      role: {
        create: role_create,
        update: role_update,
        view: role_view,
        delete: role_delete,
      },
      category: {
        create: category_create,
        update: category_update,
        view: category_view,
        delete: category_delete,
      },
      collections: {
        create: collections_create,
        update: collections_update,
        view: collections_view,
        delete: collections_delete,
      },
      drop: {
        create: drop_create,
        update: drop_update,
        view: drop_view,
        delete: drop_delete,
      },
      marketPlace: {
        create: marketPlace_create,
        update: marketPlace_update,
        view: marketPlace_view,
        delete: marketPlace_delete,
      },
      user: {
        create: user_create,
        update: user_update,
        view: user_view,
        delete: user_delete,
      },
      reports: {
        create: reports_create,
        update: reports_update,
        view: reports_view,
        delete: reports_delete,
      },
      cms: {
        create: cms_create,
        update: cms_update,
        view: cms_view,
        delete: cms_delete,
      },
    };
    if (edit && editId) {
      setFormValues(body);
      setOpenConfirmationModal(true);
    } else {
      dispatch(createRole(body));
      setLoading(true);
    }
  };

  // eslint-disable-next-line no-nested-ternary
  const initialValues = edit ? (singleRoleData && editFlag) ? {
    name: singleRoleData.roleName,
    admin_view: singleRoleData.admin.view,
    admin_create: singleRoleData.admin.create,
    admin_update: singleRoleData.admin.update,
    admin_delete: singleRoleData.admin.delete,
    role_view: singleRoleData.role.view,
    role_create: singleRoleData.role.create,
    role_update: singleRoleData.role.update,
    role_delete: singleRoleData.role.delete,
    category_view: singleRoleData.category.view,
    category_create: singleRoleData.category.create,
    category_update: singleRoleData.category.update,
    category_delete: singleRoleData.category.delete,
    collections_view: singleRoleData.collections.view,
    collections_create: singleRoleData.collections.create,
    collections_update: singleRoleData.collections.update,
    collections_delete: singleRoleData.collections.delete,
    drop_view: singleRoleData.drop.view,
    drop_create: singleRoleData.drop.create,
    drop_update: singleRoleData.drop.update,
    drop_delete: singleRoleData.drop.delete,
    marketPlace_view: singleRoleData.marketPlace.view,
    marketPlace_create: singleRoleData.marketPlace.create,
    marketPlace_update: singleRoleData.marketPlace.update,
    marketPlace_delete: singleRoleData.marketPlace.delete,
    user_view: singleRoleData.user.view,
    user_create: singleRoleData.user.create,
    user_update: singleRoleData.user.update,
    user_delete: singleRoleData.user.delete,
    reports_view: singleRoleData.reports.view,
    reports_create: singleRoleData.reports.create,
    reports_update: singleRoleData.reports.update,
    reports_delete: singleRoleData.reports.delete,
    cms_view: singleRoleData.cms.view,
    cms_create: singleRoleData.cms.create,
    cms_update: singleRoleData.cms.update,
    cms_delete: singleRoleData.cms.delete,
  } : singleRoleData : {
    name: '',
    admin_view: true,
    admin_create: false,
    admin_update: true,
    admin_delete: false,
    role_view: false,
    role_create: false,
    role_update: false,
    role_delete: true,
    category_view: true,
    category_create: true,
    category_update: false,
    category_delete: false,
    collections_view: false,
    collections_create: false,
    collections_update: false,
    collections_delete: false,
    drop_view: false,
    drop_create: false,
    drop_update: false,
    drop_delete: false,
    marketPlace_view: false,
    marketPlace_create: false,
    marketPlace_update: false,
    marketPlace_delete: false,
    user_view: false,
    user_create: false,
    user_update: false,
    user_delete: false,
    reports_view: false,
    reports_create: false,
    reports_update: false,
    reports_delete: false,
    cms_view: false,
    cms_create: false,
    cms_update: false,
    cms_delete: false,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      handleCreateForm(values);
    },
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid
        container
        className={classes.formBox}
      >
        <form
          noValidate
          autoComplete="off"
          id="adminForm"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <TextField
            id="name"
            name="name"
            placeholder="Role Name"
            variant="outlined"
            className={classes.width100}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              classes: {
                input: classes.placeHolder,
              },
              className: classes.inputHeight,
            }}
          />
          <Typography className={classes.permissonTitle}>
            Role Permissions
          </Typography>
          { Roles.map((role) => (
            <Box>
              <Typography className={classes.roleTitle}>
                {role.name}
              </Typography>
              <Box className={classes.dFlex}>
                <Box className={classes.dFlex}>
                  <Switch formik={formik} name={`${role.role}_view`} role={role.role} />
                  <Typography className={classes.roleBtnHeader}>
                    View
                  </Typography>
                </Box>
                <Box className={classes.dFlex}>
                  <Switch formik={formik} name={`${role.role}_create`} role={role.role} />
                  <Typography className={classes.roleBtnHeader}>
                    Add
                  </Typography>
                </Box>
                <Box className={classes.dFlex}>
                  <Switch formik={formik} name={`${role.role}_update`} role={role.role} />
                  <Typography className={classes.roleBtnHeader}>
                    Edit
                  </Typography>
                </Box>
                <Box className={classes.dFlex}>
                  <Switch formik={formik} name={`${role.role}_delete`} role={role.role} />
                  <Typography className={classes.roleBtnHeader}>
                    Delete
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
          <Button color="primary" disabled={loading} variant="contained" fullWidth type="submit" className={classes.submitBtn}>
            { loading && <CircularProgress size={20} />}
            { !loading && 'Submit' }
          </Button>
        </form>
      </Grid>
      <ConfirmationModal handleClose={buttonOneClick} open={openConfirmationModal} heading="Edit Role" subtitle="Are you sure you want to edit role?" button1="Cancel" button2="Edit" onButton1Click={buttonOneClick} onButton2Click={buttonTwoClick} />
    </Container>
  );
};

export default CreateRole;
