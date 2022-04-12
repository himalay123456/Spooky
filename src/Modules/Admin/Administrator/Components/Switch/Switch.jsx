/* eslint-disable react/prop-types */
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SwitchStyles } from '../../administratorStyles';

export default function CustomizedSwitches({
  formik, name,
}) {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedC: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <SwitchStyles
              name={name}
              value={name ? formik.values[name] : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.switch && Boolean(formik.errors.switch)}
              helperText={formik.touched.switch && formik.errors.switch}
              label="Switch"
              // eslint-disable-next-line dot-notation
              checked={name ? formik.values[name] : false}
            />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}
