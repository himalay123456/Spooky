/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import {
  Container, Grid, TextField, Button, FormControl, Select, MenuItem, Box, Typography, InputLabel, CircularProgress, FormHelperText,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { formStyles } from './AdminManagementStyles';
import Switch from '../Switch/Switch';
// eslint-disable-next-line no-unused-vars
import { getRoleList, createAdmin, editAdmin } from '../../../../../Store/Actions/Administrator';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string('Enter your Name')
    .required('Name is required'),
  stdcode: yup
    .string('Select the Country code')
    .required('Country code is required'),
  role: yup
    .string('Select the role')
    .required('Role is required'),
  phone: yup
    .number('Enter valid Mobile Number')
    .required('Mobile Number is required'),
});

// eslint-disable-next-line react/prop-types
const CreateAdmin = ({ edit, handleOnSuccess, toggleDrawer, editId, initialValue }) => {
  console.log('Edit id is ', editId);
  const classes = formStyles();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const createSuccessResponse = useSelector((state) => state.Administrator.createAdmin);
  const editSuccessResponse = useSelector((state) => state.Administrator.editAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoleList());
  }, []);

  useEffect(() => {
    console.log('response2 updated', editSuccessResponse);
    const response = (createSuccessResponse && createSuccessResponse.success);
    if (response && loading) {
      setLoading(false);
      handleOnSuccess();
      toggleDrawer('right', false)();
    }
    const response1 = (createSuccessResponse && createSuccessResponse.error);
    if (response1 && loading) {
      setLoading(false);
      setError(true);
      setErrorMsg(createSuccessResponse.errorMsg);
      console.log(createSuccessResponse.errorMsg);
    }
    const response2 = (editSuccessResponse && editSuccessResponse.success);
    console.log('response2', response2);
    if (response2 && loading) {
      setLoading(false);
      handleOnSuccess();
      toggleDrawer('right', false)();
    }
  }, [createSuccessResponse, editSuccessResponse]);
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

  // eslint-disable-next-line no-unused-vars
  const [selectedRole, setSelectedRole] = edit ? React.useState({
    name: initialValue.name,
    phone: initialValue.mobileNumber,
    email: initialValue.email,
    role: initialValue.roleId._id,
    stdcode: initialValue.mobileCC,
    admin_view: initialValue.otherResponsibilities.admin.view,
    admin_create: initialValue.otherResponsibilities.admin.create,
    admin_update: initialValue.otherResponsibilities.admin.update,
    admin_delete: initialValue.otherResponsibilities.admin.delete,
    role_view: initialValue.otherResponsibilities.role.view,
    role_create: initialValue.otherResponsibilities.role.create,
    role_update: initialValue.otherResponsibilities.role.update,
    role_delete: initialValue.otherResponsibilities.role.delete,
    category_view: initialValue.otherResponsibilities.category.view,
    category_create: initialValue.otherResponsibilities.category.create,
    category_update: initialValue.otherResponsibilities.category.update,
    category_delete: initialValue.otherResponsibilities.category.delete,
    collections_view: initialValue.otherResponsibilities.collections.view,
    collections_create: initialValue.otherResponsibilities.collections.create,
    collections_update: initialValue.otherResponsibilities.collections.update,
    collections_delete: initialValue.otherResponsibilities.collections.delete,
    drop_view: initialValue.otherResponsibilities.drop.view,
    drop_create: initialValue.otherResponsibilities.drop.create,
    drop_update: initialValue.otherResponsibilities.drop.update,
    drop_delete: initialValue.otherResponsibilities.drop.delete,
    marketPlace_view: initialValue.otherResponsibilities.marketPlace.view,
    marketPlace_create: initialValue.otherResponsibilities.marketPlace.create,
    marketPlace_update: initialValue.otherResponsibilities.marketPlace.update,
    marketPlace_delete: initialValue.otherResponsibilities.marketPlace.delete,
    user_view: initialValue.otherResponsibilities.user.view,
    user_create: initialValue.otherResponsibilities.user.create,
    user_update: initialValue.otherResponsibilities.user.update,
    user_delete: initialValue.otherResponsibilities.user.delete,
    reports_view: initialValue.otherResponsibilities.reports.view,
    reports_create: initialValue.otherResponsibilities.reports.create,
    reports_update: initialValue.otherResponsibilities.reports.update,
    reports_delete: initialValue.otherResponsibilities.reports.delete,
    cms_view: initialValue.otherResponsibilities.cms.view,
    cms_create: initialValue.otherResponsibilities.cms.create,
    cms_update: initialValue.otherResponsibilities.cms.update,
    cms_delete: initialValue.otherResponsibilities.cms.delete,
  }) : React.useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    stdcode: '1',
    admin_view: false,
    admin_create: false,
    admin_update: false,
    admin_delete: false,
    role_view: false,
    role_create: false,
    role_update: false,
    role_delete: false,
    category_view: false,
    category_create: false,
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
  });
  useEffect(() => {
    if (initialValue !== undefined) {
      setSelectedRole({
        name: initialValue.name,
        phone: initialValue.mobileNumber,
        email: initialValue.email,
        role: initialValue.roleId._id,
        stdcode: initialValue.mobileCC,
        admin_view: initialValue.otherResponsibilities.admin.view,
        admin_create: initialValue.otherResponsibilities.admin.create,
        admin_update: initialValue.otherResponsibilities.admin.update,
        admin_delete: initialValue.otherResponsibilities.admin.delete,
        role_view: initialValue.otherResponsibilities.role.view,
        role_create: initialValue.otherResponsibilities.role.create,
        role_update: initialValue.otherResponsibilities.role.update,
        role_delete: initialValue.otherResponsibilities.role.delete,
        category_view: initialValue.otherResponsibilities.category.view,
        category_create: initialValue.otherResponsibilities.category.create,
        category_update: initialValue.otherResponsibilities.category.update,
        category_delete: initialValue.otherResponsibilities.category.delete,
        collections_view: initialValue.otherResponsibilities.collections.view,
        collections_create: initialValue.otherResponsibilities.collections.create,
        collections_update: initialValue.otherResponsibilities.collections.update,
        collections_delete: initialValue.otherResponsibilities.collections.delete,
        drop_view: initialValue.otherResponsibilities.drop.view,
        drop_create: initialValue.otherResponsibilities.drop.create,
        drop_update: initialValue.otherResponsibilities.drop.update,
        drop_delete: initialValue.otherResponsibilities.drop.delete,
        marketPlace_view: initialValue.otherResponsibilities.marketPlace.view,
        marketPlace_create: initialValue.otherResponsibilities.marketPlace.create,
        marketPlace_update: initialValue.otherResponsibilities.marketPlace.update,
        marketPlace_delete: initialValue.otherResponsibilities.marketPlace.delete,
        user_view: initialValue.otherResponsibilities.user.view,
        user_create: initialValue.otherResponsibilities.user.create,
        user_update: initialValue.otherResponsibilities.user.update,
        user_delete: initialValue.otherResponsibilities.user.delete,
        reports_view: initialValue.otherResponsibilities.reports.view,
        reports_create: initialValue.otherResponsibilities.reports.create,
        reports_update: initialValue.otherResponsibilities.reports.update,
        reports_delete: initialValue.otherResponsibilities.reports.delete,
        cms_view: initialValue.otherResponsibilities.cms.view,
        cms_create: initialValue.otherResponsibilities.cms.create,
        cms_update: initialValue.otherResponsibilities.cms.update,
        cms_delete: initialValue.otherResponsibilities.cms.delete,
      });
    }
  }, [initialValue]);
  const [roleChanged, setRoleChanged] = React.useState('');

  const rolesList = useSelector((state) => state.Administrator.roleList);
  const ROLES_LIST = rolesList.data ? rolesList.data.admin : [];

  const handleCreateForm = (values) => {
    console.log('AAAAAAAAA', values);
    const {
      name,
      phone,
      email,
      role,
      stdcode,
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
      name,
      email,
      mobileNumber: phone,
      mobileCC: stdcode.toString(),
      roleId: role,
      otherResponsibilities: {
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
      },
    };
    if (edit && editId) {
      setError('');
      dispatch(editAdmin({ ...body, id: initialValue._id }));
      setLoading(true);
    } else {
      setError('');
      dispatch(createAdmin(body));
      setLoading(true);
    }
    // toggleDrawer('right', false)();
  };

  console.log('initialValue is', initialValue);

  const initialValues = selectedRole;

  console.log('Intial value are: ', initialValues);
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      handleCreateForm(values);
    },
  });

  useEffect(() => {
    console.log('Role selected', roleChanged);
    if (ROLES_LIST.length > 0) {
      // eslint-disable-next-line no-unused-vars
      const singleRoleData = ROLES_LIST.filter((role) => role._id === roleChanged);
      const selectedRole1 = (singleRoleData && (singleRoleData.length > 0)) ? {
        name: formik.values.name,
        phone: formik.values.phone,
        email: formik.values.email,
        role: formik.values.role,
        stdcode: formik.values.stdcode,
        admin_view: singleRoleData[0].admin.view,
        admin_create: singleRoleData[0].admin.create,
        admin_update: singleRoleData[0].admin.update,
        admin_delete: singleRoleData[0].admin.delete,
        role_view: singleRoleData[0].role.view,
        role_create: singleRoleData[0].role.create,
        role_update: singleRoleData[0].role.update,
        role_delete: singleRoleData[0].role.delete,
        category_view: singleRoleData[0].category.view,
        category_create: singleRoleData[0].category.create,
        category_update: singleRoleData[0].category.update,
        category_delete: singleRoleData[0].category.delete,
        collections_view: singleRoleData[0].collections.view,
        collections_create: singleRoleData[0].collections.create,
        collections_update: singleRoleData[0].collections.update,
        collections_delete: singleRoleData[0].collections.delete,
        drop_view: singleRoleData[0].drop.view,
        drop_create: singleRoleData[0].drop.create,
        drop_update: singleRoleData[0].drop.update,
        drop_delete: singleRoleData[0].drop.delete,
        marketPlace_view: singleRoleData[0].marketPlace.view,
        marketPlace_create: singleRoleData[0].marketPlace.create,
        marketPlace_update: singleRoleData[0].marketPlace.update,
        marketPlace_delete: singleRoleData[0].marketPlace.delete,
        user_view: singleRoleData[0].user.view,
        user_create: singleRoleData[0].marketPlace.create,
        user_update: singleRoleData[0].marketPlace.update,
        user_delete: singleRoleData[0].marketPlace.delete,
        reports_view: singleRoleData[0].reports.view,
        reports_create: singleRoleData[0].reports.create,
        reports_update: singleRoleData[0].reports.update,
        reports_delete: singleRoleData[0].reports.delete,
        cms_view: singleRoleData[0].cms.view,
        cms_create: singleRoleData[0].cms.create,
        cms_update: singleRoleData[0].cms.update,
        cms_delete: singleRoleData[0].cms.delete,
      } : {};
      // console.log('Filter', selectedRole1);
      setSelectedRole(selectedRole1);
    }
  }, [roleChanged]);

  // console.log(selectedRole);

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
            // label="Admin Name"
            placeholder="Admin Name"
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
          <Box className={classes.dFlex}>
            <Box>
              <FormControl
                variant="outlined"
                className={classes.formControl}
              >
                <Select
                  id="stdcode"
                  name="stdcode"
                  className={`${classes.width100} ${classes.darkBack}`}
                  value={formik.values.stdcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.stdcode && Boolean(formik.errors.stdcode)}
                  helperText={formik.touched.stdcode && formik.errors.stdcode}
                  inputProps={{
                    classes: {
                      icon: classes.colorWhite,
                    },
                  }}
                >
                  <MenuItem value="+1">+1</MenuItem>
                  <MenuItem value="+92">+92</MenuItem>
                  <MenuItem value="+93">+93</MenuItem>
                  <MenuItem value="+94">+94</MenuItem>
                  <MenuItem value="+95">+95</MenuItem>
                  <MenuItem value="+96">+96</MenuItem>
                  <MenuItem value="+97">+97</MenuItem>
                  <MenuItem value="+98">+98</MenuItem>
                  <MenuItem value="+99">+99</MenuItem>
                </Select>
                <FormHelperText style={{ color: 'red' }}>{ formik.touched.stdcode && formik.errors.stdcode }</FormHelperText>

              </FormControl>
            </Box>
            <TextField
              id="phone"
              name="phone"
              placeholder="Admin Phone"
              variant="outlined"
              className={classes.width100}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              InputProps={{
                classes: {
                  input: classes.placeHolder,
                },
                className: classes.inputHeight1,
              }}
            />
          </Box>
          <TextField
            id="email"
            name="email"
            placeholder="Admin Email"
            variant="outlined"
            className={classes.width100}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              classes: {
                input: classes.placeHolder,
              },
              className: classes.inputHeight2,
            }}
          />
          <FormControl variant="outlined" className={`${classes.formControl} ${classes.width100}`} size="small">
            <InputLabel
              id="demo-simple-select-outlined-label"
              className={classes.selectLabel}
            >
              Select Role
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
                  // value={age}
                  // onChange={handleChange}
              className={classes.inputHeight}
              helperText={formik.touched.role && formik.errors.role}
              label="Select Role"
              // rules={{ required: 'field is required' }}
              name="role"
              value={formik.values.role}
              onChange={(e) => {
                setRoleChanged(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              { ROLES_LIST.map((role) => <MenuItem value={role._id}>{role.roleName}</MenuItem>)}
              {/* <MenuItem value="Content Writer">Content Writer</MenuItem>
              <MenuItem value="Blogger">Blogger</MenuItem>
              <MenuItem value="Market Analyst">Market Analyst</MenuItem> */}
            </Select>
            <FormHelperText style={{ color: 'red', marginBottom: '5px' }}>{ formik.touched.role && formik.errors.role }</FormHelperText>
          </FormControl>
          <Typography className={classes.permissonTitle}>
            Admin Permissions
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
          {error && <Typography variant="subtitle1" className={classes.errorText}>{errorMsg}</Typography> }
          <Button color="primary" variant="contained" fullWidth type="submit" className={classes.submitBtn}>
            { loading && <CircularProgress size={20} />}
            { !loading && 'Submit' }
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default CreateAdmin;
