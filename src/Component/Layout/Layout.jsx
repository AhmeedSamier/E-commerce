// src/Component/Layout/Layout.jsx
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto pt-24 px-4 min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;