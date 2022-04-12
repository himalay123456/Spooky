/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import {
  Button, Container, Grid, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Loader } from '../../../../../Components/TableLoader/index';
import { useStyles } from '../AdminDetails/AdminDetailsStyle';
import { SwitchStyles } from '../../administratorStyles';
import { getSingleRole } from '../../../../../Store/Actions/Administrator';

const ViewRole = () => {
  // const [openModal,setModal] = React.useState(false);
  const classes = useStyles();
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
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { id } = state;
  // eslint-disable-next-line no-shadow
  const singleRoleDetails = useSelector((state) => state.Administrator.singleRole);
  const singleRoleData = singleRoleDetails.data ? singleRoleDetails.data.admin : {};
  const editFlag = !!singleRoleDetails.data;

  useEffect(() => {
    dispatch(getSingleRole(id));
  }, []);

  if (!editFlag) {
    return <Loader />;
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Typography className={classes.path}>
        <Link to="/admin/administrator" className={classes.link}>Admin</Link>
        &gt;
        <Typography className={classes.cursorPointer}> View Role </Typography>
      </Typography>
      <Grid container className={classes.profileHeadContainer}>
        <Grid lg={2} md={0} xs={0} item />
        <Grid lg={8} md={12} xs={12} item>
          <Grid container>
            <Grid lg={12} md={12} sm={12} item>
              <div style={{
                display: 'flex', alignItems: 'center', width: '100%', height: '100%',
              }}
              >
                <table className="profileInfo">
                  <tr>
                    <td>Name</td>
                    <td>{singleRoleData.roleName}</td>
                  </tr>
                  <tr>
                    <td>Created By</td>
                    <td>james@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Created Date</td>
                    <td>{moment(singleRoleData.createdAt).format('DD/MM/YYYY')}</td>
                  </tr>
                </table>
              </div>
            </Grid>

          </Grid>

        </Grid>
        <Grid lg={2} md={0} xs={0} item />
      </Grid>
      { Roles.map((role) => (
        <div className={classes.permisionWrapperMain}>
          <Grid container>
            <Grid lg={2} md={0} xs={0} xl={2} item />
            <Grid lg={10} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
              <Grid container>
                <Grid lg={3} md={6} sm={6} item>
                  <div className={classes.labelWrap}>
                    <span className={classes.accesLabel}>
                      {role.name}
                    </span>
                  </div>
                </Grid>
                <Grid lg={9} md={6} sm={6} item>
                  <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '10px' }}>
                    <Grid lg={3} md={6} sm={6} xl={2} item>
                      <FormControlLabel control={<SwitchStyles checked={singleRoleData[role.role].view} />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                    </Grid>
                    <Grid lg={3} md={6} sm={6} xl={2} item>
                      <FormControlLabel control={<SwitchStyles checked={singleRoleData[role.role].create} />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                    </Grid>
                    <Grid lg={3} md={6} sm={6} xl={2} item>
                      <FormControlLabel control={<SwitchStyles checked={singleRoleData[role.role].update} />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                    </Grid>
                    <Grid lg={3} md={6} sm={6} xl={2} item>
                      <FormControlLabel control={<SwitchStyles checked={singleRoleData[role.role].delete} />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
      <Grid container>
        <Grid lg={4} md={0} xs={0} item />
        <Grid item lg={4} md={6} sm={6} style={{ justifyContent: 'space-evenly', display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
          <Button color="primary" size="small" variant="contained" style={{ width: '400px', height: '40px', background: '#5200FF' }}>Edit Role</Button>
        </Grid>
        <Grid lg={4} md={0} xs={0} item />
      </Grid>
    </Container>
  );
};
export default ViewRole;
