/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import { Container, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { useStyles } from './ViewCollectionStyles';
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
  const handleViewButtonClick = () => {
    //
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
        <Link to="/admin/collection" className={classes.link}>Collection</Link>
        &gt;
        <Typography className={classes.cursorPointer}> View Collection </Typography>
      </Typography>
      <Box className={classes.dFlex}>
        <Typography className={classes.textHeading} style={{ marginRight: '20px' }}> Collection Name </Typography>
        <Typography className={classes.textHeading}> Smile Harder </Typography>
      </Box>
      <Topbar />
      <Box style={{ paddingRight: '40px' }}>
        <Table handleViewButtonClick={handleViewButtonClick} />
      </Box>
      { disableConfirmation && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="Disable Admin Confirmation" subtitle="Admin disabled" type="delete" />}
      { disable && <ConfirmationModal handleClose={handleDisableClose} open={handleDisableClose} heading="Disable Admin" subtitle="Are you sure you want to disable the admin? He will not be able to access any of the modules." button1="Cancel" button2="Disable" onButton1Click={handleDisableClose} onButton2Click={handleOnDisableSuccess} /> }
    </Container>
  );
};
export default ViewMarketplace;
