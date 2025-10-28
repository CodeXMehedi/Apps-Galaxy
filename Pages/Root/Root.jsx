import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../src/component/Header/Navbar';
import Footer from '../../src/component/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;