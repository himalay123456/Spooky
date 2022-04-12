/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, Grid, TextField } from '@material-ui/core';
import { useStyles } from './ModalStyles';
import { ReactComponent as CloseIcon } from '../../../../../../../Assets/Svg/close.svg';

const validationSchema = yup.object({
  description: yup
    .string('Enter the description')
    .required('Description is required'),
});

const ConfirmationModal = ({
  open,
  heading,
  button1,
  button2,
  onButton1Click,
  onButton2Click,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const initialValues = {
    description: value,
  };
  const handleCreateForm = (values) => {
    console.log('AAAAAAAAA', values);
    onButton2Click();
    setValue('');
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleCreateForm(values);
    },
  });
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      classes={{ paper: classes.dialogPaper1 }}
    >
      <DialogContent classes={{ root: classes.dialogContext }}>
        <div onClick={onButton1Click} className={classes.topBar}>
          <span className={classes.title}>{heading}</span>
          <span className={`${classes.onHover} ${classes.closeBtn}`}><CloseIcon /></span>
        </div>
        <DialogContentText id="alert-dialog-description">
          <form
            noValidate
            autoComplete="off"
            id="adminForm"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <Grid item style={{ marginTop: '4vh', padding: '0px 60px' }}>
              <TextField
                id="description"
                name="description"
                variant="outlined"
                className={classes.textarea}
                multiline
                value={formik.description}
                rows={5}
                rowsMax={6}
                placeholder="Enter Reason....."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                InputProps={{
                  classes: {
                    input: classes.placeHolder,
                  },
                }}
              />
            </Grid>
            <Grid item style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4vh', marginBottom: '40px' }}>
              <Button variant="contained" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', color: 'black', boxShadow: 'none', fontSize: '14px' }} onClick={() => onButton1Click()}>{button1}</Button>
              <Button variant="contained" type="submit" color="primary" size="small" style={{ width: '155px', height: '40px', fontWeight: '550', boxShadow: 'none', fontSize: '14px' }}>{button2}</Button>
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmationModal;
