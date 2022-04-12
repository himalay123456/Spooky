/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from './ModalStyles';
import { ReactComponent as CloseIcon } from '../../Assets/Svg/close.svg';

const ConfirmationModal = ({
  open,
  handleClose,
  subtitle,
  heading,
  button1,
  button2,
  onButton1Click,
  onButton2Click,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper1 }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <div onClick={handleClose} className={classes.topBar}>
          <span className={classes.title}>{heading}</span>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <Grid item style={{ marginTop: '4vh', padding: '0px 30px' }}>
            <Typography variant="body1" align="center" className={classes.subtitle}>
              {subtitle}
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
            <Button variant="contained" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', color: 'black', boxShadow: 'none', fontSize: '14px' }} onClick={() => onButton1Click()}>{button1}</Button>
            <Button variant="contained" color="primary" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', boxShadow: 'none', fontSize: '14px' }} onClick={(e) => onButton2Click(e)}>{button2}</Button>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmationModal;
