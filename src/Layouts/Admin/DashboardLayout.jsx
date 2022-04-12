/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => (
  <>
    //header and side bar will go here
    <Outlet />
    <div>Layout</div>
  </>
);

export default DashboardLayout;
