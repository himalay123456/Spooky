/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './ModalStyles';
import SuccessIcon from '../../Assets/Images/metamask.gif';
import { ReactComponent as CloseIcon } from '../../Assets/Svg/close.svg';

const SuccessModal = ({
  open, handleClose,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogContent>
        <div onClick={handleClose} className={classes.closeButton}>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <Grid item>
            <img src={SuccessIcon} alt="no" className={classes.connectedImg} />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" className={classes.heading}>
              Wallet Connected
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" className={classes.subtitle}>
              Metamask connected successfully
            </Typography>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default SuccessModal;
