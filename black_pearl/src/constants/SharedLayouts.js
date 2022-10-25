import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const SharedLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayouts;
