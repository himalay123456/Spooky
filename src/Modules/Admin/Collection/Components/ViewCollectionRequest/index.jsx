/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  Button, Container, Grid, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useStyles } from './ViewCollectionStyles';
import Avatar from '../../../../../Assets/Svg/viewCollectionImage.svg';
import RejectionModal from './Components/Modal/RejectionModal';
import ConfirmationModal from './Components/Modal/ConfirmationModal';
import SuccessModal from './Components/Modal/SuccessModal';

const ViewRole = () => {
  const classes = useStyles();
  const [accept, setAccept] = React.useState(false);
  const [reject, setReject] = React.useState(false);
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [openRejectionModal, setOpenRejectionModal] = React.useState(false);
  const [openAcceptConfirmationModal, setOpenAcceptConfirmationModal] = React.useState(false);
  const [openRejectConfirmationModal, setOpenRejectConfirmationModal] = React.useState(false);

  const handleConfirmationClose = () => {
    setOpenAcceptConfirmationModal(false);
    setOpenRejectConfirmationModal(false);
  };

  const buttonOneClick = () => {
    setOpenAcceptConfirmationModal(false);
    setOpenRejectConfirmationModal(false);
  };

  const onAcceptConfirmation = () => {
    setOpenAcceptConfirmationModal(false);
    setAccept(true);
    setOpenSuccessModal(true);
  };

  const onRejectConfirmation = () => {
    setOpenRejectConfirmationModal(false);
    setOpenRejectionModal(true);
  };
  const handleSuceessClose = () => {
    setOpenSuccessModal(false);
    setReject(false);
    setAccept(false);
  };

  const handleRejectionClose = () => {
    setOpenRejectionModal(false);
  };

  const handleRejectionSuccess = () => {
    setOpenRejectionModal(false);
    setReject(true);
    setOpenSuccessModal(true);
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
      <Grid container>
        <Grid item xl={11} lg={10} md={9} sm={9} xs={6}>
          <table className={classes.table}>
            <tr>
              <td>Name</td>
              <td>Romonof Dawinchi</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>romomofda@gmail.com</td>
            </tr>
            <tr>
              <td style={{ marginRight: '0px' }}>Collection Name</td>
              <td>Harry Potter</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tellus in justo euismod ipsum
                fermentum. Nunc sagittis, lectus eget lobortis eleifend, erat sapien fringilla ipsum, eu
                eleifend neque mauris nec erat.
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>Funyy,Movie</td>
            </tr>
            <tr>
              <td>Creation Date</td>
              <td>10/07/21</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>Collection Image</td>
              <td>
                <div style={{
                  display: 'flex', alignItems: 'center', width: '100%', height: '100%',
                }}
                >
                  <img src={Avatar} alt="image1" className="profileImage1" />
                </div>
              </td>
            </tr>
          </table>
        </Grid>
        <Grid item xl={1} lg={2} md={3} sm={3} xs={6} />
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.buttonContainer}>
          <Button variant="contained" onClick={() => setOpenRejectConfirmationModal(true)} style={{ width: '35%', boxShadow: 'none', fontWeight: 'bold' }}>Reject</Button>
          <Button variant="contained" onClick={() => setOpenAcceptConfirmationModal(true)} color="primary" style={{ width: '35%', marginLeft: '2vh', boxShadow: 'none', fontWeight: 'bold' }}>Accept</Button>
        </Grid>
      </Grid>
      <ConfirmationModal handleClose={handleConfirmationClose} open={openAcceptConfirmationModal} heading="Accept Request" subtitle="Are you sure you want to accept the collection request?" button1="No" button2="Yes" onButton1Click={buttonOneClick} onButton2Click={onAcceptConfirmation} />
      <ConfirmationModal handleClose={handleConfirmationClose} open={openRejectConfirmationModal} heading="Reject Request" subtitle="Are you sure you want to reject the collection request?" button1="No" button2="Yes" onButton1Click={buttonOneClick} onButton2Click={onRejectConfirmation} />
      <RejectionModal handleClose={handleSuceessClose} open={openRejectionModal} heading="Rejection Reason" type="create" button1="Cancel" button2="Delete" onButton1Click={handleRejectionClose} onButton2Click={handleRejectionSuccess} />
      { accept && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="" subtitle="Request Accepted" type="delete" />}
      { reject && <SuccessModal handleClose={handleSuceessClose} open={openSuccessModal} heading="" subtitle="Request Rejected" type="delete" />}
    </Container>
  );
};
export default ViewRole;

// <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
// <table className={classes.table}>
//   <tr>
//     <td>Name</td>
//   </tr>
//   <tr>
//     <td>Email</td>
//   </tr>
//   <tr>
//     <td>Collection Name</td>
//   </tr>
//   <tr>
//     <td>Description</td>
//   </tr>
//   <tr>
//     <td>Category</td>
//   </tr>
//   <tr>
//     <td>Creation Date</td>
//   </tr>
//   <tr>
//     <td>Collection Image</td>
//   </tr>
// </table>
// </Grid>
// <Grid item xs={6} sm={6} md={7} lg={8} xl={8}>
// <table className={classes.table}>
//   <tr>
//     <td>Romonof Dawinchi</td>
//   </tr>
//   <tr>
//     <td>romomofda@gmail.com</td>
//   </tr>
//   <tr>
//     <td>Harry Potter</td>
//   </tr>
//   <tr>
//     <td>
//       <td>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tellus in justo euismod ipsum
//         fermentum. Nunc sagittis, lectus eget lobortis eleifend, erat sapien fringilla ipsum, eu
//         eleifend neque mauris nec erat.
//       </td>
//     </td>
//   </tr>
//   <tr>
//     <td>Funyy,Movie</td>
//   </tr>
//   <tr>
//     <td>10/07/21</td>
//   </tr>
//   <tr>
//     <td>
//       <div style={{
//         display: 'flex', alignItems: 'center', width: '100%', height: '100%',
//       }}
//       >
//         <img src={Avatar} alt="image1" className="profileImage1" />
//       </div>
//     </td>
//   </tr>
// </table>

// </Grid>
// <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
// C
// </Grid>
