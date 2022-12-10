import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <section className="w-screen flex flex-col justify-between items-center">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
