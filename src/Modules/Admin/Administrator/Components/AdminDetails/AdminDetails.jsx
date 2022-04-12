/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import {
  Button, Container, Grid, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './AdminDetailsStyle';
import Avatar from '../../../../../Assets/Images/adminProfile.jpg';
import { SwitchStyles } from '../../administratorStyles';
import SuccessModal from '../../../../../Components/Modal/SuccessModal';
import ConfirmationModal from '../../../../../Components/Modal/ConfirmationModal';
import { getAdminDetails } from '../../../../../Store/Actions';
import { Loader } from '../../../../../Components/TableLoader';

const AdminDetails = () => {
  // const [openModal,setModal] = React.useState(false);
  const classes = useStyles();
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [disableConfirmation, setDisableConfirmation] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const dispatch = useDispatch();
  const { adminDetails, loader } = useSelector((state) => state.Administrator);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAdminDetails(id));
    console.log('ADMINDETAILS', adminDetails);
  }, []);

  const handleOnDisableSuccess = () => {
    setOpenSuccessModal(true);
    setDisableConfirmation(true);
    setDisable(false);
  };
  const handleSuceessClose = () => {
    setOpenSuccessModal(false);
    setDisableConfirmation(false);
  };
  const handleDisableClose = () => {
    setDisable(false);
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Typography className={classes.path}>
        <Link to="/admin/administrator" className={classes.link}>Admin</Link>
        &gt;
        <Typography className={classes.cursorPointer}> Admin Details </Typography>
      </Typography>
      {console.log('ADMINDETAILS', adminDetails)}
      { loader ? <Loader />
        : adminDetails && adminDetails.data.admin && adminDetails.data.admin ? (
          <>
            <Grid container className={classes.profileHeadContainer}>
              <Grid lg={2} md={0} xs={0} item />
              <Grid lg={8} md={12} xs={12} item>
                <Grid container>
                  <Grid lg={3} md={3} sm={4} item>
                    <div style={{
                      display: 'flex', alignItems: 'center', width: '100%', height: '100%',
                    }}
                    >
                      <img src={Avatar} alt="image1" className="profileImage1" />
                    </div>
                  </Grid>
                  <Grid lg={9} md={9} sm={8} item>
                    <div style={{
                      display: 'flex', alignItems: 'center', width: '100%', height: '100%', marginLeft: '40px',
                    }}
                    >
                      <table className="profileInfo">
                        <tr>
                          <td>Name</td>
                          <td>{adminDetails.data.admin.name}</td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>{adminDetails.data.admin.mobileNumber}</td>
                        </tr>
                        <tr>
                          <td>Email id</td>
                          <td>{adminDetails.data.admin.email}</td>
                        </tr>
                        <tr>
                          <td>Joining Date</td>
                          <td>{moment(adminDetails.data.admin.createdAt).format('DD/MM/YYYY')}</td>
                        </tr>
                        <tr>
                          <td>Role</td>
                          <td>3</td>
                        </tr>
                      </table>
                    </div>
                  </Grid>

                </Grid>

              </Grid>
              <Grid lg={2} md={0} xs={0} item />
            </Grid>

            <div className={classes.permisionWrapperMain}>
              <Grid container>
                <Grid lg={2} md={0} xs={0} xl={2} item />
                <Grid lg={6} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
                  <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Grid lg={2} md={6} sm={6} item>
                      <div className={classes.labelWrap}>
                        <span className={classes.accesLabel}>
                          Permissions
                        </span>
                      </div>
                    </Grid>
                    <Grid lg={10} md={6} sm={6} item>
                      <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '30px' }}>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid lg={4} md={0} xs={0} item xl={4} />
              </Grid>
            </div>
            <div className={classes.permisionWrapperMain}>
              <Grid container>
                <Grid lg={2} md={0} xs={0} xl={2} item />
                <Grid lg={6} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
                  <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Grid lg={2} md={6} sm={6} item>
                      <div className={classes.labelWrap}>
                        <span className={classes.accesLabel}>
                          Permissions
                        </span>
                      </div>
                    </Grid>
                    <Grid lg={10} md={6} sm={6} item>
                      <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '30px' }}>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid lg={4} md={0} xs={0} item xl={4} />
              </Grid>
            </div>
            <div className={classes.permisionWrapperMain}>
              <Grid container>
                <Grid lg={2} md={0} xs={0} xl={2} item />
                <Grid lg={6} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
                  <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Grid lg={2} md={6} sm={6} item>
                      <div className={classes.labelWrap}>
                        <span className={classes.accesLabel}>
                          Permissions
                        </span>
                      </div>
                    </Grid>
                    <Grid lg={10} md={6} sm={6} item>
                      <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '30px' }}>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid lg={4} md={0} xs={0} item xl={4} />
              </Grid>
            </div>
            <div className={classes.permisionWrapperMain}>
              <Grid container>
                <Grid lg={2} md={0} xs={0} xl={2} item />
                <Grid lg={6} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
                  <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Grid lg={2} md={6} sm={6} item>
                      <div className={classes.labelWrap}>
                        <span className={classes.accesLabel}>
                          Permissions
                        </span>
                      </div>
                    </Grid>
                    <Grid lg={10} md={6} sm={6} item>
                      <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '30px' }}>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid lg={4} md={0} xs={0} item xl={4} />
              </Grid>
            </div>
            <div className={classes.permisionWrapperMain}>
              <Grid container>
                <Grid lg={2} md={0} xs={0} xl={2} item />
                <Grid lg={6} md={6} sm={6} xl={6} item className={classes.permissionContainerWrapper}>
                  <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Grid lg={2} md={6} sm={6} item>
                      <div className={classes.labelWrap}>
                        <span className={classes.accesLabel}>
                          Permissions
                        </span>
                      </div>
                    </Grid>
                    <Grid lg={10} md={6} sm={6} item>
                      <Grid container style={{ placeItems: 'center', marginTop: '8px', paddingLeft: '30px' }}>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>View</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Add</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Edit</Typography>} />
                        </Grid>
                        <Grid lg={3} md={6} sm={6} xl={2} item>
                          <FormControlLabel control={<SwitchStyles />} label={<Typography className={classes.formControlLabel}>Delete</Typography>} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid lg={4} md={0} xs={0} item xl={4} />
              </Grid>
            </div>
            <Grid container>
              <Grid lg={3} md={0} xs={0} item />
              <Grid item lg={4} md={6} sm={6} style={{ justifyContent: 'space-evenly', display: 'flex', marginTop: '20px' }}>
                <Button color="primary" size="small" variant="outlined" style={{ width: '200px', height: '40px', background: 'white', marginRight: '20px', fontWeight: 'bold' }}>Edit Admin</Button>
                <Button onClick={() => setDisable(true)} color="primary" size="small" variant="contained" style={{ width: '200px', height: '40px', background: '#5200FF', fontWeight: 'bold' }}>Disable Admin</Button>
              </Grid>
              <Grid lg={5} md={0} xs={0} item />
            </Grid>
          </>
        ) : null }
      { disableConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Disable Admin Confirmation" subtitle="Admin disabled" type="delete" />}
      { disable && <ConfirmationModal handleClose={handleDisableClose} open={handleDisableClose} heading="Disable Admin" subtitle="Are you sure you want to disable the admin? He will not be able to access any of the modules." button1="Cancel" button2="Disable" onButton1Click={handleDisableClose} onButton2Click={handleOnDisableSuccess} /> }
    </Container>
  );
};
export default AdminDetails;
