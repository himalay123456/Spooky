/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import SuccessModal from '../../../../Components/Modal/SuccessModal';
import { useStyles } from './styles';
import BG1 from '../../../../Assets/Images/background-img-l.png';
import BG2 from '../../../../Assets/Images/background-img-m.png';
import './style.scss';
import './responsive.scss';
import { subscribeNewsLetter } from '../../../../Store/Actions';

const Subscribe = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [successModal, setSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });
  const onSubscribeSuccess = () => {
    setSuccessModal(true);
  };
  const onSubscribeFail = (value) => {
    setErrorMessage(value);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log('values', values);
      setErrorMessage('');
      dispatch(subscribeNewsLetter({ email: values.email, onSuccessHandler: onSubscribeSuccess, onFailHandler: onSubscribeFail }));
    },
  });
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={`${classes.app} SubscribeContainer`}
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
        <div className="subscribe_section m-hide">
          <img src={BG1} />

          <div className="subscribe_section_content">
            <h2>Subscribe to get our latest Drops, Fresh news & Artists features...</h2>
            <div className="input_group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <svg className="email-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.67578 5.46973L8.10659 8.74133C8.45968 9.00205 8.9415 9.00205 9.29459 8.74134L13.7254 5.46973" stroke="#39425D" strokeLinecap="round" />
                <rect x="0.825928" y="1.02246" width="16.5868" height="13.8408" rx="4.5" stroke="grey" />
              </svg>

              <button className="btn subscribe_btn" type="submit">Subscribe</button>
            </div>
            {formik.touched.email && (
            <p style={{ color: 'red', marginLeft: '5px' }}>
              {formik.errors.email}
            </p>
            )}
            <p style={{ color: 'red', marginLeft: '5px' }}>
              {errorMessage}
            </p>
          </div>
        </div>
        <div className="subscribe_section m-show">
          <img src={BG2} />
          <div className="subscribe_section_content">
            <h2>Subscribe to get our latest Drops, Fresh news & Artists features...</h2>
            <div className="input_group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <svg className="email-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.67578 5.46973L8.10659 8.74133C8.45968 9.00205 8.9415 9.00205 9.29459 8.74134L13.7254 5.46973" stroke="#39425D" strokeLinecap="round" />
                <rect x="0.825928" y="1.02246" width="16.5868" height="13.8408" rx="4.5" stroke="#39425D" />
              </svg>

              <button className="btn subscribe_btn" type="submit">Subscribe</button>
            </div>
            {formik.touched.email && (
              <p style={{ color: 'red', marginLeft: '5px' }}>
                {formik.errors.email}
              </p>
            )}
            <p style={{ color: 'red', marginLeft: '5px' }}>
              {errorMessage}
            </p>
          </div>
        </div>
      </form>
      <SuccessModal open={successModal} handleClose={() => setSuccessModal(false)} heading="Subscribe" subtitle="You have subscribed to our newsletter successfully" />
    </Container>
  );
};

export default Subscribe;

// <div className="subscribe_section m-hide">
//         <img src={BG1} />
//       </div>
//       <div className="subscribe_section m-show">
//         <img src={BG2} />
//       </div>
//       <div className="subscribe_section_content">
//         <h2>Subscribe to get our latest Drops, Fresh news & Artists features...</h2>
//         <div className="input_group">
//           <input type="text" name="" placeholder="email" className="form-control" />
//           <img src={Login} className="email-icon" />
//           <button className="btn subscribe_btn">Subscribe</button>
//         </div>
//       </div>
