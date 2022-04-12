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
import { Grid } from '@material-ui/core';
import { useStyles } from './ModalStyles';
import { ReactComponent as CloseIcon } from '../../../../../Assets/Svg/close.svg';

const ViewCategoryModal = ({
  open,
  handleClose,
  heading,
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
          <Grid item style={{ marginTop: '2vh', marginLeft: '0px' }}>
            <table className="categoryInfo">
              <tr>
                <td>Name</td>
                <td>Funny</td>
              </tr>
              <tr>
                <td style={{ paddingRight: '0px', verticalAlign: 'text-top' }}>About Artwork</td>
                <td style={{ paddingRight: '20px', fontSize: '16px' }}>
                  That is an appealing treasure map that i can't read.
                  Pantyhose and heels are an interesting choice of
                  attire for the beach.
                  He found his art never progressed when he literally
                  used his sweat and tears.
                </td>
              </tr>
              <tr>
                <td>Subcategory</td>
                <td>Horror,Drama</td>
              </tr>
            </table>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default ViewCategoryModal;
