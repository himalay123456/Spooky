/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import { Container, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { useStyles } from './ViewMarketplaceStyles';
import Avatar from '../../../../../Assets/Images/collectible.jpg';
// import { SwitchStyles } from '../../administratorStyles';
import SuccessModal from '../../../../../Components/Modal/SuccessModal';
import ConfirmationModal from '../../../../../Components/Modal/ConfirmationModal';
import Topbar from './Components/Topbar/Topbar';
import Table from './Components/Table/Table';

const ViewMarketplace = () => {
  // const [openModal,setModal] = React.useState(false);
  const classes = useStyles();
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [disableConfirmation, setDisableConfirmation] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

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
        <Link to="/admin/collectible" className={classes.link}>Collectible</Link>
        &gt;
        <Typography className={classes.cursorPointer}> View Collectible </Typography>
      </Typography>
      <Grid container className={classes.profileHeadContainer}>
        <Grid lg={12} md={12} xs={12} item>
          <Grid container>
            <Grid lg={8} md={8} sm={8} item>
              <div style={{
                display: 'flex', alignItems: 'center', width: '100%', height: '100',
              }}
              >
                <table className={classes.profileInfo}>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Collectible Name</td>
                    <td className={classes.profileColumn}>Romonof Dawinchi</td>
                  </tr>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Artist Name</td>
                    <td className={classes.profileColumn}>Harry Potter</td>
                  </tr>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Owner Name</td>
                    <td className={classes.profileColumn}>Harry Potter</td>
                  </tr>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Description</td>
                    <td className={classes.profileColumn}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec fermentum. Nunc sagittis, lectus eget lobortis eleifend, erat sapien eleifend neque mauris nec erat.</td>
                  </tr>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Sale Type</td>
                    <td className={classes.profileColumn}>Auction</td>
                  </tr>
                  <tr className={classes.profileRow}>
                    <td className={classes.profileColumn1}>Expiry</td>
                    <td className={classes.profileColumn}>15/07/2021 10:00 A.M</td>
                  </tr>
                </table>
              </div>
            </Grid>
            <Grid lg={3} md={3} sm={3} item>
              <div style={{
                display: 'flex', alignItems: 'center', width: '100%', height: '100%', marginLeft: '-30px', marginTop: '-10px',
              }}
              >
                <img src={Avatar} alt="image1" className="profileImage1" />
              </div>
            </Grid>
            <Grid lg={1} md={1} sm={1} item />
          </Grid>

        </Grid>
      </Grid>
      <Topbar />
      <Box style={{ paddingRight: '40px' }}>
        <Table />
      </Box>
      { disableConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Disable Admin Confirmation" subtitle="Admin disabled" type="delete" />}
      { disable && <ConfirmationModal handleClose={handleDisableClose} open={handleDisableClose} heading="Disable Admin" subtitle="Are you sure you want to disable the admin? He will not be able to access any of the modules." button1="Cancel" button2="Disable" onButton1Click={handleDisableClose} onButton2Click={handleOnDisableSuccess} /> }
    </Container>
  );
};
export default ViewMarketplace;
