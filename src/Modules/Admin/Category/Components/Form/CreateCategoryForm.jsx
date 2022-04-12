/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  Container, Grid, TextField, Button,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formStyles } from './FormStyles';
import AddButton from './Components/Button/Button';

const validationSchema = yup.object({
  name: yup
    .string('Enter the category name')
    .required('Category name is required'),
  description: yup
    .string('Enter the description')
    .required('Description is required'),
  subcategory: yup
    .string('Enter the sub category')
    .required('Sub Category is required'),
});

// eslint-disable-next-line react/prop-types
const CreateCategory = ({ edit, handleOnSuccess, toggleDrawer }) => {
  const classes = formStyles();
  const handleCreateForm = (values) => {
    console.log('AAAAAAAAA', values);
    handleOnSuccess();
    toggleDrawer('right', false)();
  };
  const initialValues = edit ? {
    name: 'Artist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere magna sed turpis tincidunt, in gravida libero ultricies. Proin eu tellus eu sapien molestie aliquet.',
    subcategory: 'Fiction',
  } : {
    name: '',
    description: '',
    subcategory: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleCreateForm(values);
    },
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.app}
    >
      <Grid
        container
        className={classes.formBox}
      >
        <form
          noValidate
          autoComplete="off"
          id="adminForm"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <TextField
            id="name"
            name="name"
            // label="Category Name"
            placeholder="Category Name"
            variant="outlined"
            className={classes.width100}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              classes: {
                input: classes.placeHolder,
              },
              className: classes.inputHeight,
            }}
          />
          <TextField
            id="description"
            name="description"
            variant="outlined"
            className={classes.textarea}
            multiline
            rows={2}
            rowsMax={4}
            placeholder="Category Description"
            value={formik.values.description}
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
          {/* <Box id="subcategoriesBox">
            <TextField
              id="subcategorie1"
              name="subcategory1"
              variant="outlined"
              className={classes.width100}
              value="Fiction"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subcategory1 && Boolean(formik.errors.subcategory1)}
              helperText={formik.touched.subcategory1 && formik.errors.subcategory1}
              InputProps={{
                className: classes.inputHeight,
              }}
            />
          </Box> */}
          <TextField
            id="subcategory"
            name="subcategory"
            placeholder="Subcategories"
            variant="outlined"
            className={classes.width100}
            value={formik.values.subcategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subcategory && Boolean(formik.errors.subcategory)}
            helperText={formik.touched.subcategory && formik.errors.subcategory}
            InputProps={{
              classes: {
                input: classes.placeHolder,
              },
              className: classes.inputHeight,
            }}
          />
          <AddButton />
          <Button color="primary" variant="contained" fullWidth type="submit" className={classes.submitBtn}>
            Submit
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default CreateCategory;
