/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import {
  Dialog, Grid, DialogContent, Box,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
// import { ZoomIn, ZoomOut } from '@material-ui/icons'
import { ReactComponent as CloseIcon } from './close.svg';
import Loader from '../../Loader';
import { useStyles } from './styles';

const ImageView = ({
  imageUrl, handleClose, size = 'lg', viewNft,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  return (
    <Dialog
      open={(imageUrl !== null)}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{
        paper: clsx({
          [classes.dialogPaperlg]: size === 'lg',
          [classes.dialogPapermd]: size === 'md',
          [classes.dialogPapersm]: size === 'sm',
        }),
      }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <div onClick={handleClose} className={classes.closeButton}>
          <span className={classes.closeBtn}><CloseIcon /></span>
        </div>
        <Grid container className={classes.app}>
          { viewNft && (
          <Box style={{
            height: '10%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            { viewNft && <h2 className={classes.header} onClick={() => navigate(viewNft)}>View This NFT</h2>}
          </Box>
          )}
          <Box style={{
            height: viewNft ? '90%' : '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <img
              src={imageUrl}
              alt="imageUrl"
              style={{ display: (imageUrl !== null) ? 'block' : 'none' }}
              onLoad={() => setLoading(false)}
              className={clsx({
                [classes.imagelg]: size === 'lg',
                [classes.imagemd]: size === 'md',
                [classes.imagesm]: size === 'sm',
              })}
            />
            { loading && <Loader />}
          </Box>

          {/* <Box className={classes.zoomContainer}>
              <Box className={classes.zoomIn}>
                <ZoomIn />
              </Box>
              <Box className={classes.zoomOut}>
                <ZoomOut />
              </Box>
            </Box> */}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default ImageView;
