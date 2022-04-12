/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ReactComponent as CloseIcon } from '../../../../../../Assets/Svg/close.svg';

const ConfirmationModal = ({
  open,
  url,
  handleClose,
}) => {
  const classes = useStyles();
  const [copied, setCopied] = React.useState(false);
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper1 }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <div onClick={() => { handleClose(); setCopied(false); }} className={classes.topBar}>
          <span className={classes.title}>
            {' '}
            To share this NFT Please copy this URL
          </span>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <Grid item style={{ marginTop: '0vh', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body1" display="inline" align="center" className={classes.subtitle1}>
              {url}
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
            <CopyToClipboard
              text={url}
              onCopy={() => {
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 1000);
              }}
            >
              <Button variant="contained" size="small" style={{ width: '155px', height: '40px', borderRadius: '40px', fontWeight: '550', color: 'black', boxShadow: 'none', fontSize: '14px', fontFamilyy: 'Tomica' }}>
                { copied ? 'Copied' : 'Copy To Clipboard' }
              </Button>
            </CopyToClipboard>
            <Button variant="contained" color="primary" size="small" style={{ width: '155px', height: '40px', borderRadius: '40px', fontWeight: '550', boxShadow: 'none', fontSize: '14px', fontFamilyy: 'Tomica', background: 'linear-gradient(90deg, #946DFB 0%, #1DD9A1 100%)' }} onClick={() => { handleClose(); setCopied(false); }}>Close</Button>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmationModal;
