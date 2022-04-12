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
import { useStyles } from './styles';
import { ReactComponent as CloseIcon } from '../../../../../../Assets/Svg/close.svg';

const ConfirmationModal = ({
  open,
  handleClose,
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
          <span className={classes.title}>Unlockable Content</span>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <Grid item style={{ marginTop: '0vh', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body1" display="inline" align="center" className={classes.subtitle1}>
              Onwer of this NFT
            </Typography>
            <Typography variant="body1" display="inline" align="center" className={classes.subtitle}>
              will access unlockable content:
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: '-40px', display: 'flex', justifyContent: 'center' }}>
            <ol style={{ listStyle: 'disc' }}>
              <li className={classes.subtitle3}>Print sent to any address</li>
              <li className={classes.subtitle3}>The original file (46MB)</li>
              <li className={classes.subtitle3}>Full Copyright use</li>
            </ol>
          </Grid>
          <Typography className={classes.subtitle4}>
            This content can only be unlocked and revealed by the owner of this item
          </Typography>
          <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
            <Button variant="contained" color="primary" size="small" style={{ width: '155px', height: '40px', borderRadius: '40px', fontWeight: '550', boxShadow: 'none', fontSize: '14px', fontFamilyy: 'Tomica', background: 'linear-gradient(90deg, #946DFB 0%, #1DD9A1 100%)' }} onClick={() => handleClose()}>Close</Button>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmationModal;
